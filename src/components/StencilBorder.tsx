import React from 'react';

interface StencilBorderProps {
  className?: string;
  strokeWidth?: number;
  strokeColor?: string;
}

/**
 * StencilBorder: Reusable SVG overlay that renders the distinctive
 * Stencil Border Key Masking frame with notch cutouts matching the design spec.
 */
export const StencilBorder: React.FC<StencilBorderProps> = ({
  className = '',
  strokeWidth = 1.75,
  strokeColor,
}) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none transition-colors duration-200 rounded-[25px] ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1.2"
        y="1.2"
        width="97.6"
        height="97.6"
        rx="25"
        stroke={strokeColor || 'currentColor'}
        strokeWidth={strokeWidth}
        strokeDasharray="24 4 48 5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};
