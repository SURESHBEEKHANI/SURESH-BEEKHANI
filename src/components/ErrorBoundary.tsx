import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Contact from './Contact';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-white">
          <Contact />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
            <Button 
              type="button"
              variant="outline"
              onClick={this.handleReset}
              className="border-gray-200 text-gray-600 px-8 py-6 h-auto w-full md:w-auto"
            >
              Return to Home
            </Button>

            {this.state.error && (
              <details className="mt-12 text-xs text-gray-400 opacity-50 cursor-pointer">
                <summary>Technical Details (Developer Only)</summary>
                <pre className="mt-2 p-4 bg-gray-50 rounded overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
