import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// VELNIX BRAND TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const C = {
  black: '#050505',
  graphite: '#111111',
  white: '#FFFFFF',
  lime: '#B6FF00',
  green: '#7DCC00',
  la: (o: number) => `rgba(182,255,0,${o})`,
  ga: (o: number) => `rgba(125,204,0,${o})`,
  wa: (o: number) => `rgba(255,255,255,${o})`,
};

// ─────────────────────────────────────────────────────────────────────────────
// CTA COMPONENT INTERFACE
// ─────────────────────────────────────────────────────────────────────────────
interface CTAProps {
  // Content
  eyebrow?: string;
  title: string;
  description?: string;
  
  // Primary CTA
  primaryLabel: string;
  primaryHref: string;
  primaryIcon?: 'arrow-right' | 'arrow-up-right' | 'none';
  
  // Secondary CTA (optional)
  secondaryLabel?: string;
  secondaryHref?: string;
  
  // Styling
  variant?: 'default' | 'centered' | 'split';
  background?: 'dark' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  
  // Custom styling
  className?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const CTA: React.FC<CTAProps> = ({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  primaryIcon = 'arrow-right',
  secondaryLabel,
  secondaryHref,
  variant = 'centered',
  background = 'gradient',
  size = 'lg',
  className = '',
}) => {
  
  // Size configurations
  const sizeConfig = {
    sm: {
      container: 'py-12 px-6',
      eyebrow: 'text-xs tracking-[0.2em] mb-4',
      title: 'text-2xl sm:text-3xl',
      description: 'text-base',
      button: 'px-6 py-3 text-sm',
    },
    md: {
      container: 'py-16 px-8',
      eyebrow: 'text-xs tracking-[0.22em] mb-5',
      title: 'text-3xl sm:text-4xl',
      description: 'text-lg',
      button: 'px-7 py-3.5 text-sm',
    },
    lg: {
      container: 'py-20 px-8 lg:py-24',
      eyebrow: 'text-xs tracking-[0.24em] mb-6',
      title: 'text-3xl sm:text-4xl lg:text-5xl',
      description: 'text-lg sm:text-xl',
      button: 'px-8 py-4 text-sm',
    },
  };

  const config = sizeConfig[size];

  const renderIcon = () => {
    if (primaryIcon === 'none') return null;
    const IconComponent = primaryIcon === 'arrow-up-right' ? ArrowUpRight : ArrowRight;
    return <IconComponent size={17} strokeWidth={2.5} />;
  };

  const backgroundStyles = background === 'gradient' 
    ? {
        background: `radial-gradient(ellipse 60% 80% at 50% 20%, ${C.ga(0.15)} 0%, ${C.la(0.05)} 40%, transparent 80%), ${C.black}`,
      }
    : { background: C.black };

  return (
    <section 
      className={`relative overflow-hidden font-display ${config.container} ${className}`}
      style={backgroundStyles}
    >
      {/* Background Effects */}
      {background === 'gradient' && (
        <>
          {/* Dot grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          
          {/* Ambient glows */}
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${C.lime} 0%, transparent 70%)`,
              opacity: 0.03,
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${C.green} 0%, transparent 70%)`,
              opacity: 0.02,
              filter: 'blur(60px)',
            }}
          />
        </>
      )}

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`${variant === 'centered' ? 'text-center' : 'text-left'}`}>
          
          {/* Eyebrow */}
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-3 font-bold uppercase ${config.eyebrow}`}
              style={{ color: C.lime }}
            >
              <span className="h-px w-8" style={{ background: C.lime }} aria-hidden="true" />
              {eyebrow}
            </motion.div>
          )}

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-black leading-tight tracking-[-0.04em] mb-6 ${config.title}`}
            style={{ color: C.white }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`leading-relaxed mb-8 max-w-2xl ${variant === 'centered' ? 'mx-auto' : ''} ${config.description}`}
              style={{ color: C.wa(0.7) }}
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`flex flex-col sm:flex-row gap-4 ${variant === 'centered' ? 'justify-center' : 'justify-start'}`}
          >
            {/* Primary CTA */}
            <a
              href={primaryHref}
              className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#B6FF00] font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${config.button}`}
              style={{
                background: C.lime,
                color: C.black,
                textDecoration: 'none',
                boxShadow: `0 8px 32px ${C.la(0.35)}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.green;
                e.currentTarget.style.boxShadow = `0 12px 40px ${C.la(0.5)}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = C.lime;
                e.currentTarget.style.boxShadow = `0 8px 32px ${C.la(0.35)}`;
              }}
            >
              <span>{primaryLabel}</span>
              {renderIcon()}
            </a>

            {/* Secondary CTA */}
            {secondaryLabel && secondaryHref && (
              <a
                href={secondaryHref}
                className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full font-bold transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${config.button}`}
                style={{
                  background: C.wa(0.04),
                  color: C.white,
                  textDecoration: 'none',
                  border: `2px solid ${C.wa(0.48)}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.lime;
                  e.currentTarget.style.color = C.lime;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.wa(0.48);
                  e.currentTarget.style.color = C.white;
                }}
              >
                <span>{secondaryLabel}</span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;