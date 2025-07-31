import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ImageIcon.css';

// TypeScript interface for ImageIcon props
export interface ImageIconProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  priority?: boolean;
  fallbackIcon?: string;
  onError?: (error: Event) => void;
  onLoad?: () => void;
}

// Optimized Image Icon Component with lazy loading and responsive design
export const ImageIcon: React.FC<ImageIconProps> = ({ 
  src, 
  alt, 
  className = "", 
  size = 'md',
  priority = false,
  fallbackIcon = '🔧',
  onError,
  onLoad
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'w-6 h-6 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-10 sm:h-10',
    lg: 'w-10 h-10 sm:w-12 sm:h-12',
    xl: 'w-12 h-12 sm:w-16 sm:h-16'
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    setIsLoading(false);
    
    // Call custom error handler if provided
    if (onError) {
      onError(e.nativeEvent);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) {
      onLoad();
    }
  };

  if (hasError) {
    return (
      <motion.div
        className={`${sizeClasses[size]} ${className} relative image-icon`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-lg border border-gray-300 dark:border-gray-600">
          {fallbackIcon}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} relative image-icon ${isLoading ? 'loading' : ''}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md"
        loading={priority ? "eager" : "lazy"}
        onError={handleError}
        onLoad={handleLoad}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </motion.div>
  );
};

// Predefined icon components for common use cases
export const LegalIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/Claude.png"
    alt="Legal document generation icon"
    className={className}
    size={size}
  />
);

export const AiIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/openai.jpg"
    alt="AI-powered research icon"
    className={className}
    size={size}
  />
);

export const SecurityIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/aws.png"
    alt="Privacy and security icon"
    className={className}
    size={size}
  />
);

export const AnalyticsIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/tensorflow.png"
    alt="Analytics and summaries icon"
    className={className}
    size={size}
  />
);

export const CloudIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/docker.png"
    alt="Cloud-based access icon"
    className={className}
    size={size}
  />
);

export const CodeIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/git.png"
    alt="Modern tech stack icon"
    className={className}
    size={size}
  />
);

export const DevelopmentIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/langchain.png"
    alt="Development process icon"
    className={className}
    size={size}
  />
);

export const FeedbackIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/huggingface.png"
    alt="Feedback and iteration icon"
    className={className}
    size={size}
  />
);

export const ApiIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/fastapi.png"
    alt="API integration icon"
    className={className}
    size={size}
  />
);

export const ExpertiseIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/bert.png"
    alt="Domain expertise icon"
    className={className}
    size={size}
  />
);

export const ComplianceIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/pytorch.png"
    alt="Compliance and standards icon"
    className={className}
    size={size}
  />
);

export const ArchitectureIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  className = "mb-1", 
  size = 'md' 
}) => (
  <ImageIcon
    src="/image/skills_img/mlflow.svg"
    alt="System architecture icon"
    className={className}
    size={size}
  />
);

export default ImageIcon; 