// Retry handler utility with exponential backoff
export class RetryHandler {
    static async withRetry(operation, options = {}) {
        const {
            maxRetries = 2,
            baseDelay = 500,
            maxDelay = 5000,
            timeout = 30000,
            onRetry = null
        } = options;

        let lastError;

        for (let attempt = 0; attempt <= maxRetries; attempt++) {
            try {
                // Wrap operation in timeout
                const timeoutPromise = new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Operation timeout')), timeout)
                );

                const result = await Promise.race([
                    operation(),
                    timeoutPromise
                ]);

                return result;
            } catch (error) {
                lastError = error;

                // Don't retry if it's the last attempt or error is not retryable
                if (attempt === maxRetries || !this.isRetryableError(error)) {
                    throw error;
                }

                // Calculate delay with exponential backoff
                const delay = this.getRetryDelay(attempt, baseDelay, maxDelay);

                // Call onRetry callback if provided
                if (onRetry) {
                    onRetry(attempt + 1, error);
                }

                console.warn(`Retry attempt ${attempt + 1}/${maxRetries} after ${delay}ms. Error: ${error.message}`);

                // Wait before retrying
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }

        throw lastError;
    }

    static isRetryableError(error) {
        // Network errors are retryable
        if (error.code === 'ECONNREFUSED' ||
            error.code === 'ENOTFOUND' ||
            error.code === 'ETIMEDOUT' ||
            error.message.includes('network') ||
            error.message.includes('timeout')) {
            return true;
        }

        // Rate limit errors are retryable
        if (error.status === 429 || error.message.includes('rate limit')) {
            return true;
        }

        // 5xx server errors are retryable
        if (error.status >= 500 && error.status < 600) {
            return true;
        }

        // Authentication and 4xx errors (except 429) are not retryable
        if (error.status === 401 || error.status === 403 ||
            (error.status >= 400 && error.status < 500 && error.status !== 429)) {
            return false;
        }

        // Configuration errors are not retryable
        if (error.message.includes('API key') ||
            error.message.includes('configuration')) {
            return false;
        }

        // Default to retryable for unknown errors
        return true;
    }

    static getRetryDelay(attempt, baseDelay, maxDelay) {
        // Exponential backoff: baseDelay * 2^attempt
        const delay = baseDelay * Math.pow(2, attempt);
        return Math.min(delay, maxDelay);
    }
}
