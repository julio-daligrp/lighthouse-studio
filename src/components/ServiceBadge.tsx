import React from 'react';
import {
  StickerTarget,
  StickerDashboard,
  StickerClipboard,
  StickerMonitor,
  StickerStationery,
} from './HeroStickers';

// Authentic Ticket Sticker with notches and checkmark matching image_885b2475.png (Service 5: Organización de Eventos)
export const StickerTicket: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-block filter drop-shadow-[0_4px_12px_rgba(20,52,58,0.18)] select-none ${className}`}>
    <svg className="w-full h-auto" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* White die-cut outline */}
      <rect
        x="10"
        y="10"
        width="54"
        height="54"
        rx="10"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Deep Burgundy ticket body with ticket notches */}
      <path
        d="M 16 16 H 58 C 58 27 58 27 58 31 C 53 31 49 34 49 37 C 49 40 53 43 58 43 C 58 47 58 47 58 58 H 16 C 16 47 16 47 16 43 C 21 43 25 40 25 37 C 25 34 21 31 16 31 Z"
        fill="#630D16"
      />
      {/* Cream square with checkmark inside */}
      <rect x="25" y="25" width="24" height="24" rx="4" fill="#FAF6EE" />
      <path
        d="M 29 37 L 35 43 L 45 30"
        stroke="#C42A27"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export interface ServiceTag {
  name: string;
  emojis?: string;
}

export interface ServiceBadgeData {
  id: string;
  topText: string;
  bottomText: string;
  title: string;
  subtitle?: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  bgColor: string;
  textColor: string;
  type: 'branding' | 'social' | 'web' | 'crm' | 'events' | 'btl';
  borderColor?: string;
  badgeText?: string;
  badgeType?: 'tape' | 'scalloped';
  tags?: ServiceTag[];
}

interface ServiceBadgeProps {
  service: ServiceBadgeData;
  onClick: (service: ServiceBadgeData) => void;
  index: number;
}

export const ServiceBadge: React.FC<ServiceBadgeProps> = ({ service, onClick }) => {
  // Select center die-cut sticker strictly matching image_885b2475.png
  const renderCenterSticker = () => {
    switch (service.id) {
      case 'branding':
        return <StickerStationery className="w-20 h-20 sm:w-24 sm:h-24" />;
      case 'social':
        return <StickerClipboard className="w-20 h-20 sm:w-24 sm:h-24" />;
      case 'web':
        return <StickerMonitor className="w-20 h-20 sm:w-24 sm:h-24" />;
      case 'crm':
        return <StickerDashboard className="w-20 h-20 sm:w-24 sm:h-24" />;
      case 'events':
        return <StickerTicket className="w-20 h-20 sm:w-24 sm:h-24" />;
      case 'btl':
        return <StickerTarget className="w-20 h-20 sm:w-24 sm:h-24" />;
      default:
        return <StickerStationery className="w-20 h-20 sm:w-24 sm:h-24" />;
    }
  };

  return (
    <div
      onClick={() => onClick(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(service);
        }
      }}
      className="group w-full max-w-[270px] sm:max-w-[290px] flex flex-col items-center cursor-pointer focus:outline-none select-none transition-all duration-300"
      aria-label={`Ver detalles de ${service.title}`}
    >
      {/* =========================================================================
          CIRCULAR BADGE CONTAINER: Exact reproduction of image_885b2475.png
          Solid colored circular disc with curved top and bottom text, and center sticker
         ========================================================================= */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full shadow-[0_16px_36px_rgba(20,52,58,0.12)] group-hover:shadow-[0_24px_50px_rgba(20,52,58,0.22)] group-hover:scale-105 transition-all duration-300">
        
        {/* SVG Circle and Curved Typography */}
        <svg
          viewBox="0 0 280 280"
          className="w-full h-full drop-shadow-sm overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Top arc for curved header text (Left to Right along top) */}
            <path
              id={`topArc-${service.id}`}
              d="M 38,140 A 102,102 0 0,1 242,140"
              fill="none"
            />
            {/* Bottom arc for curved footer text (Left to Right along bottom smile) */}
            <path
              id={`bottomArc-${service.id}`}
              d="M 38,140 A 102,102 0 0,0 242,140"
              fill="none"
            />
          </defs>

          {/* Solid Background Circle */}
          <circle
            cx="140"
            cy="140"
            r="134"
            fill={service.bgColor}
            stroke={service.borderColor || 'none'}
            strokeWidth={service.borderColor ? '2' : '0'}
          />

          {/* Top Curved Text */}
          <text
            fill={service.textColor}
            fontSize="15.5"
            fontWeight="bold"
            letterSpacing="2.6"
            textAnchor="middle"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            <textPath href={`#topArc-${service.id}`} startOffset="50%">
              {service.topText}
            </textPath>
          </text>

          {/* Bottom Curved Text */}
          <text
            fill={service.textColor}
            fontSize="15.5"
            fontWeight="bold"
            letterSpacing="2.6"
            textAnchor="middle"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            <textPath href={`#bottomArc-${service.id}`} startOffset="50%">
              {service.bottomText}
            </textPath>
          </text>
        </svg>

        {/* Centered Die-Cut Sticker */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
            {renderCenterSticker()}
          </div>
        </div>

      </div>

      {/* =========================================================================
          TEXT BLOCK BELOW: Bold Title & Subtitle matching image_885b2475.png
         ========================================================================= */}
      <div className="mt-5 text-left w-full px-1">
        {/* Main Service Title */}
        <h3
          className="text-[13px] sm:text-[14px] font-bold text-[#14343A] group-hover:text-[#C42A27] transition-colors uppercase tracking-wider font-secondary leading-snug"
          style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
        >
          {service.title}
        </h3>

        {/* Short Description */}
        <p
          className="text-xs sm:text-[13px] text-[#14343A]/70 font-medium font-primary mt-1 line-clamp-1 leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {service.shortDesc}
        </p>
      </div>

    </div>
  );
};
