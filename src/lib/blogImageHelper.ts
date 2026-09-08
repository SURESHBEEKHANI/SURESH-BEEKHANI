// ─────────────────────────────────────────────────────────────────────────────
// Blog Image Helper & Fallback System
// Guarantees that every blog card, reader hero, and admin preview always displays
// a valid, high-resolution brand image even if the database image is missing or 404s.
// ─────────────────────────────────────────────────────────────────────────────

export const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  "ai-development": "/image/pages_img/Power-AI-Development.png",
  "ai-automation": "/image/pages_img/ai-automation.jpg",
  "agentic-ai": "/image/pages_img/Agentic AI.png",
  "chatbot-development": "/image/pages_img/AI-CHATBOT-DEVELOPMENT.jpg",
  "chatgpt-integration": "/image/pages_img/ChatGPT-Models-Integrations.png",
  "machine-learning": "/image/pages_img/Machine-Learning.jpg",
  "machine-deep-learning": "/image/pages_img/Machine-Learning-power.jpg",
  "computer-vision": "/image/pages_img/Computer-Vision.avif",
  "predictive-modeling": "/image/pages_img/Predictive-Modelling.jpg",
  "nlp": "/image/pages_img/Natural-Language-Processing.jpg",
  "natural-language-processing": "/image/pages_img/Natural-Language-Processing.jpg",
  "ai-audit": "/image/pages_img/WHY-CHOOSE-US.jpg",
  "healthcare-in-ai": "/image/pages_img/Internal Operations.jpg",
  "fintech-in-ai": "/image/pages_img/Predictive-Analytics-Services.jpg",
  "education-in-ai": "/image/pages_img/AI-Development-backgound.webp",
  "e-commerce-in-ai": "/image/pages_img/Sales Assistant Bot.jpg",
  "food-and-groceries-in-ai": "/image/pages_img/Customer Support Bot.png",
  "travel-and-tourism-in-ai": "/image/pages_img/AI-Development-backgound.webp",
  "insurance-in-ai": "/image/pages_img/PredictiveAnalytics.jpg",
  "on-demand-in-ai": "/image/pages_img/ai-automation.jpg",
  "web-development": "/image/pages_img/Web-Development.jpg",
  "app-development": "/image/pages_img/App-Development.jpg",
  "custom-software-development": "/image/pages_img/custom-software-development.png",
  "big-data-analytics": "/image/pages_img/big data analytics.jpg",
  "devops": "/image/pages_img/devops-infrastructure.jpg",
};

export const DEFAULT_FALLBACK_IMAGE = "/image/pages_img/Power-AI-Development.png";

/**
 * Returns a guaranteed fallback image URL for a given category.
 */
export function getBlogFallbackImage(category?: string): string {
  if (!category) return DEFAULT_FALLBACK_IMAGE;
  const normalized = category.toLowerCase().trim();
  return CATEGORY_FALLBACK_IMAGES[normalized] || DEFAULT_FALLBACK_IMAGE;
}

/**
 * Resolves the display image for a blog. If the provided image_url is missing or empty,
 * it returns the category-specific fallback image.
 */
export function getBlogImageUrl(
  blogOrUrl?: { image_url?: string; category?: string } | string | null,
  fallbackCategory?: string
): string {
  if (!blogOrUrl) {
    return getBlogFallbackImage(fallbackCategory);
  }

  if (typeof blogOrUrl === "string") {
    const trimmed = blogOrUrl.trim();
    if (trimmed.length > 0) return trimmed;
    return getBlogFallbackImage(fallbackCategory);
  }

  const url = blogOrUrl.image_url?.trim();
  if (url && url.length > 0) {
    return url;
  }

  return getBlogFallbackImage(blogOrUrl.category || fallbackCategory);
}

/**
 * React onError handler for <img> elements.
 * Automatically switches the source to the category fallback if an image fails to load.
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement>,
  category?: string
): void {
  const target = e.currentTarget;
  const fallback = getBlogFallbackImage(category);

  // Prevent infinite loop if fallback itself triggers an error
  if (!target.src.endsWith(fallback) && target.src !== fallback) {
    target.src = fallback;
  }
}

/**
 * Curated preset list for BlogAdmin to allow 1-click fallback selection.
 */
export const CATEGORY_IMAGE_PRESETS = Object.entries(CATEGORY_FALLBACK_IMAGES).map(
  ([category, url]) => ({
    category,
    label: category
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    url,
  })
);

/**
 * Client-side image compressor.
 * Downscales images over maxDimension and compresses to webp/jpeg to stay
 * under Supabase storage bucket's 1MB file limit.
 */
export async function compressImageFile(
  file: File,
  maxDimension = 1600,
  quality = 0.85
): Promise<File> {
  // If file is already under 500KB and in a modern format, keep as is
  if (file.size <= 500 * 1024 && (file.type === "image/webp" || file.type === "image/avif")) {
    return file;
  }

  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;

      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        resolve(file);
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      // Prefer WebP compression
      const mimeType = "image/webp";
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve(file);
            return;
          }
          const newFileName = file.name.replace(/\.[^/.]+$/, "") + ".webp";
          const compressed = new File([blob], newFileName, {
            type: mimeType,
            lastModified: Date.now(),
          });
          resolve(compressed);
        },
        mimeType,
        quality
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(file);
    };

    img.src = url;
  });
}
