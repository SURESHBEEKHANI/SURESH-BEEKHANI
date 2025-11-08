import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

/**
 * Professional, reusable section header component
 * Ensures consistent styling across all sections
 */
export const SectionHeader = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlight,
  description,
  centered = true,
  className = ''
}: SectionHeaderProps) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <Badge 
          variant="outline" 
          className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-ai-purple/20 text-white border-ai-purple/30 font-medium text-xs sm:text-sm rounded-full hover:bg-ai-purple/25 transition-all duration-300"
        >
          {BadgeIcon && <BadgeIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />}
          {badge}
        </Badge>
      )}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
        {title}
        {highlight && (
          <> <span className="gradient-text-ai">{highlight}</span></>
        )}
      </h2>
      
      {centered && (
        <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-ai-purple to-ai-cyan mx-auto mb-6 sm:mb-8 rounded-full" />
      )}
      
      {description && (
        <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
