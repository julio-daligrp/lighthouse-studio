import React from 'react';

interface LighthouseLogoProps {
  variant?: 'horizontal' | 'stacked' | 'badge' | 'vertical';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  alt?: string;
}

export const LighthouseLogo: React.FC<LighthouseLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  alt = 'LIGHTHOUSE Studio',
}) => {
  // 1. Emblem / Circular Seal variant (Lighthouse Creative Studio Emblem.png)
  if (variant === 'badge') {
    const dimClasses =
      size === 'sm'
        ? 'w-11 h-11'
        : size === 'md'
        ? 'w-16 h-16'
        : size === 'lg'
        ? 'w-24 h-24'
        : 'w-28 h-28 sm:w-36 sm:h-36';

    return (
      <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
        <img
          src="assets/Lighthouse%20Creative%20Studio%20Emblem.png"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'assets/lighthouse_logo_emblem.png';
          }}
          alt={alt}
          className={`${dimClasses} object-contain transition-transform duration-300 hover:scale-105`}
          loading="eager"
        />
      </div>
    );
  }

  // 2. Vertical / Stacked Logo variant
  if (variant === 'stacked' || variant === 'vertical') {
    const heightClasses =
      size === 'sm'
        ? 'h-10 sm:h-12'
        : size === 'md'
        ? 'h-14 sm:h-16'
        : size === 'lg'
        ? 'h-20 sm:h-24'
        : 'h-28 sm:h-32';

    return (
      <div className={`relative inline-flex items-center select-none ${className}`}>
        <img
          src="assets/lighthouse_logo_vertical%20(1).png"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'assets/lighthouse_logo_vertical.png';
          }}
          alt={alt}
          className={`${heightClasses} w-auto object-contain transition-transform duration-300 hover:opacity-95`}
          loading="eager"
        />
      </div>
    );
  }

  // 3. Horizontal Logo variant (default)
  const heightClasses =
    size === 'sm'
      ? 'h-7 sm:h-8'
      : size === 'md'
      ? 'h-9 sm:h-11'
      : size === 'lg'
      ? 'h-12 sm:h-14'
      : 'h-16 sm:h-20';

  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <img
        src="assets/lighthouse_logo_horizontal_hd.png"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'assets/lighthouse_logo_horizontal.png';
        }}
        alt={alt}
        className={`${heightClasses} w-auto object-contain transition-transform duration-300 hover:opacity-95`}
        loading="eager"
      />
    </div>
  );
};
