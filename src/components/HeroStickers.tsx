import React from 'react';

interface StickerProps {
  className?: string;
  style?: React.CSSProperties;
}

// 1. Red Nautical Lighthouse Sticker
export const StickerLighthouse: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:-rotate-3 select-none ${className}`}
  >
    <svg
      width="72"
      height="115"
      viewBox="0 0 72 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* White die-cut sticker contour */}
      <path
        d="M36 4 L42 16 L49 22 L49 32 L47 37 L52 98 L56 103 L56 110 L16 110 L16 103 L20 98 L25 37 L23 32 L23 22 L30 16 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Lighthouse Base */}
      <path d="M18 106 L54 106 L51 98 L21 98 Z" fill="#C42A27" />
      <rect x="18" y="103" width="36" height="4" fill="#761113" rx="1" />

      {/* Main Tower Body with Alternating Red & White Stripes */}
      <path d="M21 98 L24 40 L48 40 L51 98 Z" fill="#C42A27" />
      {/* White Stripes */}
      <polygon points="22.5,84 49.5,84 49,74 23,74" fill="#F8F4EB" />
      <polygon points="23.5,60 48.5,60 48,50 24,50" fill="#F8F4EB" />

      {/* Tower Windows */}
      <rect x="33" y="44" width="6" height="5" fill="#14343A" rx="1" />
      <rect x="33" y="65" width="6" height="6" fill="#14343A" rx="1" />
      <rect x="33" y="88" width="6" height="6" fill="#14343A" rx="1" />

      {/* Gallery Balcony & Railing */}
      <rect x="21" y="36" width="30" height="4" fill="#761113" rx="1" />
      <line x1="22" y1="36" x2="50" y2="36" stroke="#FFFFFF" strokeWidth="1.5" />

      {/* Lantern Room Glass with Light Beam */}
      <rect x="25" y="22" width="22" height="14" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.5" />
      <line x1="36" y1="22" x2="36" y2="36" stroke="#14343A" strokeWidth="1" />
      <line x1="30" y1="22" x2="30" y2="36" stroke="#14343A" strokeWidth="0.8" />
      <line x1="42" y1="22" x2="42" y2="36" stroke="#14343A" strokeWidth="0.8" />

      {/* Cupola Roof & Beacon Spire */}
      <path d="M23 22 Q36 10 49 22 Z" fill="#C42A27" stroke="#761113" strokeWidth="1.5" />
      <line x1="36" y1="12" x2="36" y2="4" stroke="#761113" strokeWidth="2" strokeLinecap="round" />
      <circle cx="36" cy="4" r="2" fill="#F8E6AF" />
    </svg>
  </div>
);

// 2. Maroon Bullseye Target Sticker
export const StickerTarget: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:rotate-6 select-none ${className}`}
  >
    <svg
      width="78"
      height="78"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* White die-cut outline */}
      <circle cx="39" cy="43" r="32" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M54 12 L70 8 L66 24 L59 20 L48 31 L44 27 L55 16 Z" fill="#FFFFFF" />

      {/* Outer Maroon Ring */}
      <circle cx="39" cy="43" r="29" fill="#761113" />
      {/* Cream Spacer */}
      <circle cx="39" cy="43" r="22" fill="#F8F4EB" />
      {/* Inner Maroon Ring */}
      <circle cx="39" cy="43" r="15" fill="#761113" />
      {/* Cream Center Ring */}
      <circle cx="39" cy="43" r="9" fill="#F8F4EB" />
      {/* Bullseye Core */}
      <circle cx="39" cy="43" r="4.5" fill="#C42A27" />

      {/* Arrow */}
      <path
        d="M68 9 L41 38"
        stroke="#761113"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <polygon points="68,9 58,10 63,15" fill="#761113" />
      <polygon points="68,9 67,19 62,14" fill="#C42A27" />
    </svg>
  </div>
);

// 3. Hand-drawn Sailboat / Catamaran Sticker
export const StickerSailboat: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:-rotate-6 select-none ${className}`}
  >
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Die-cut outline */}
      <path
        d="M40 8 L62 50 L68 62 L60 70 L14 70 L10 62 L20 48 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Main Hull */}
      <path
        d="M12 62 Q40 68 70 60 L62 67 Q40 73 16 67 Z"
        fill="#FFFFFF"
        stroke="#14343A"
        strokeWidth="1.8"
      />
      {/* Crossbeams & Deck */}
      <line x1="22" y1="63" x2="60" y2="61" stroke="#14343A" strokeWidth="1.5" />
      <line x1="28" y1="63" x2="28" y2="60" stroke="#14343A" strokeWidth="1" />
      <line x1="42" y1="63" x2="42" y2="59" stroke="#14343A" strokeWidth="1" />
      <line x1="54" y1="62" x2="54" y2="58" stroke="#14343A" strokeWidth="1" />

      {/* Mast */}
      <line x1="42" y1="12" x2="42" y2="60" stroke="#14343A" strokeWidth="2" strokeLinecap="round" />

      {/* Main Sail */}
      <path
        d="M43 14 L62 52 L43 50 Z"
        fill="#FFFFFF"
        stroke="#14343A"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Jib / Fore Sail */}
      <path
        d="M39 18 L20 54 L39 52 Z"
        fill="#FFFFFF"
        stroke="#14343A"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Sea waves ripples underneath */}
      <path
        d="M10 74 Q20 70 30 74 T50 74 T70 74"
        fill="none"
        stroke="#8FA9BD"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

// 4. Golden Palm Tree Sticker
export const StickerPalmTree: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:rotate-3 select-none ${className}`}
  >
    <svg
      width="70"
      height="82"
      viewBox="0 0 70 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Die-cut outline */}
      <path
        d="M35 10 Q58 10 58 28 Q45 28 40 38 Q42 58 40 78 L30 78 Q28 58 30 38 Q22 28 10 28 Q12 10 35 10 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Palm Trunk */}
      <path
        d="M32 38 Q35 56 31 78 L38 78 Q41 56 37 38 Z"
        fill="#F8E6AF"
        stroke="#14343A"
        strokeWidth="1.8"
      />
      {/* Trunk Segments */}
      <line x1="32" y1="48" x2="38" y2="47" stroke="#14343A" strokeWidth="1" />
      <line x1="31" y1="58" x2="38" y2="57" stroke="#14343A" strokeWidth="1" />
      <line x1="32" y1="68" x2="37" y2="67" stroke="#14343A" strokeWidth="1" />

      {/* Palm Fronds */}
      <path
        d="M35 38 C42 28 54 22 62 26 C58 34 46 36 36 38 Z"
        fill="#F8E6AF"
        stroke="#14343A"
        strokeWidth="1.8"
      />
      <path
        d="M35 38 C28 28 16 22 8 26 C12 34 24 36 34 38 Z"
        fill="#F8E6AF"
        stroke="#14343A"
        strokeWidth="1.8"
      />
      <path
        d="M35 38 C45 20 54 12 48 8 C38 12 36 24 35 38 Z"
        fill="#F8E6AF"
        stroke="#14343A"
        strokeWidth="1.8"
      />
      <path
        d="M35 38 C25 20 16 12 22 8 C32 12 34 24 35 38 Z"
        fill="#F8E6AF"
        stroke="#14343A"
        strokeWidth="1.8"
      />
      <path
        d="M35 38 C32 20 38 10 35 6 C32 10 32 20 35 38 Z"
        fill="#F8E6AF"
        stroke="#14343A"
        strokeWidth="1.8"
      />
    </svg>
  </div>
);

// 5. Dark Teal Analytics Dashboard Sticker with Stars
export const StickerDashboard: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:-rotate-3 select-none ${className}`}
  >
    <svg
      width="82"
      height="75"
      viewBox="0 0 82 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Die-cut outline */}
      <path
        d="M10 8 L72 8 L72 65 L10 65 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      {/* Window Body */}
      <rect x="12" y="10" width="58" height="52" rx="4" fill="#14343A" />

      {/* Window Header Dots */}
      <circle cx="19" cy="17" r="1.8" fill="#F8F4EB" />
      <circle cx="25" cy="17" r="1.8" fill="#F8F4EB" />
      <circle cx="31" cy="17" r="1.8" fill="#F8F4EB" />
      <line x1="12" y1="22" x2="70" y2="22" stroke="#8FA9BD" strokeWidth="1" strokeOpacity="0.3" />

      {/* Upward Growth Curve */}
      <path
        d="M18 48 Q32 46 44 34 T64 28"
        fill="none"
        stroke="#F8F4EB"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Bar Chart Columns */}
      <rect x="22" y="50" width="4" height="8" fill="#8FA9BD" rx="1" />
      <rect x="30" y="44" width="4" height="14" fill="#8FA9BD" rx="1" />
      <rect x="38" y="40" width="4" height="18" fill="#8FA9BD" rx="1" />
      <rect x="46" y="36" width="4" height="22" fill="#F8E6AF" rx="1" />
      <rect x="54" y="30" width="4" height="28" fill="#C42A27" rx="1" />

      {/* Sparkle Stars */}
      <path d="M6 32 L8 26 L10 32 L16 34 L10 36 L8 42 L6 36 L0 34 Z" fill="#14343A" />
      <path d="M72 18 L74 13 L76 18 L81 20 L76 22 L74 27 L72 22 L67 20 Z" fill="#14343A" />
    </svg>
  </div>
);

// 6. Deep Maroon Seahorse Sticker
export const StickerSeahorse: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:rotate-6 select-none ${className}`}
  >
    <svg
      width="54"
      height="92"
      viewBox="0 0 54 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Die-cut outline */}
      <path
        d="M20 6 Q34 6 38 18 Q38 28 32 34 Q38 46 34 62 Q28 78 20 84 Q12 84 14 74 Q18 68 22 68 Q24 60 22 50 Q16 46 16 36 Q12 28 20 6 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Seahorse Silhouette in Wine Red */}
      <path
        d="M22 8 Q34 10 36 20 Q34 26 28 30 Q34 40 32 54 Q30 68 22 78 Q16 82 16 76 Q18 70 24 72 Q26 62 24 52 Q18 46 20 36 Q16 28 22 8 Z"
        fill="#761113"
      />
      {/* Eye & Snout */}
      <circle cx="26" cy="16" r="2.5" fill="#F8F4EB" />
      <circle cx="26" cy="16" r="1.2" fill="#14343A" />
      <path d="M22 18 L15 20 L16 22 L23 20 Z" fill="#761113" stroke="#F8F4EB" strokeWidth="0.8" />

      {/* Crown Coronet */}
      <path d="M26 8 L28 4 L30 8 L33 5 L34 9" stroke="#F8F4EB" strokeWidth="1.2" strokeLinecap="round" />

      {/* Rib Texture / Rings */}
      <path d="M22 34 Q27 34 30 36" stroke="#F8F4EB" strokeWidth="1" strokeLinecap="round" />
      <path d="M22 40 Q28 40 31 42" stroke="#F8F4EB" strokeWidth="1" strokeLinecap="round" />
      <path d="M23 46 Q28 46 31 48" stroke="#F8F4EB" strokeWidth="1" strokeLinecap="round" />
      <path d="M23 52 Q27 52 30 54" stroke="#F8F4EB" strokeWidth="1" strokeLinecap="round" />
      <path d="M22 58 Q26 58 28 60" stroke="#F8F4EB" strokeWidth="1" strokeLinecap="round" />

      {/* Curled Tail */}
      <path
        d="M22 74 Q18 78 18 74 Q18 70 22 70"
        fill="none"
        stroke="#F8F4EB"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

// 7. Coastal Beach Umbrella Sticker
export const StickerUmbrella: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:-rotate-6 select-none ${className}`}
  >
    <svg
      width="78"
      height="85"
      viewBox="0 0 78 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Die-cut outline */}
      <path
        d="M38 12 Q64 16 72 38 L16 30 Q22 14 38 12 Z M44 32 L20 80"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Umbrella Pole */}
      <line x1="42" y1="30" x2="20" y2="80" stroke="#14343A" strokeWidth="2.5" strokeLinecap="round" />

      {/* Canopy Segments */}
      <path
        d="M18 30 Q28 14 44 14 Q58 16 68 36 Q54 36 44 32 Q30 32 18 30 Z"
        fill="#FFFFFF"
        stroke="#14343A"
        strokeWidth="1.8"
      />
      {/* Canopy Ribs & Stripes */}
      <path d="M44 14 Q36 24 30 31" stroke="#14343A" strokeWidth="1.2" />
      <path d="M44 14 Q46 25 44 32" stroke="#14343A" strokeWidth="1.2" />
      <path d="M44 14 Q56 26 58 34" stroke="#14343A" strokeWidth="1.2" />
      {/* Top Cap */}
      <circle cx="44" cy="13" r="2" fill="#14343A" />
    </svg>
  </div>
);

// 8. Red Location Pin Sticker with Sparkle
export const StickerLocationPin: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:rotate-3 select-none ${className}`}
  >
    <svg
      width="58"
      height="75"
      viewBox="0 0 58 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Die-cut outline */}
      <path
        d="M29 6 C14 6 6 18 6 30 C6 44 26 68 29 70 C32 68 52 44 52 30 C52 18 44 6 29 6 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Red Pin Silhouette */}
      <path
        d="M29 8 C16 8 8 19 8 30 C8 42 27 65 29 67 C31 65 50 42 50 30 C50 19 42 8 29 8 Z"
        fill="#C42A27"
      />
      {/* Center Circle */}
      <circle cx="29" cy="28" r="11" fill="#761113" />

      {/* Sparkle Star in Center */}
      <path
        d="M29 20 L31 26 L37 28 L31 30 L29 36 L27 30 L21 28 L27 26 Z"
        fill="#FFFFFF"
      />
    </svg>
  </div>
);

// 9. Dark Teal Clipboard Strategy Diagram Sticker
export const StickerClipboard: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:rotate-6 select-none ${className}`}
  >
    <svg
      width="72"
      height="85"
      viewBox="0 0 72 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Die-cut outline */}
      <rect x="8" y="10" width="56" height="68" rx="6" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="6" />
      {/* Board Body */}
      <rect x="10" y="12" width="52" height="64" rx="4" fill="#14343A" />

      {/* Top Clip */}
      <rect x="24" y="6" width="24" height="10" rx="3" fill="#8FA9BD" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="36" cy="11" r="2" fill="#14343A" />

      {/* Strategy Diagram Nodes & Connections */}
      <circle cx="24" cy="30" r="3" fill="#F8E6AF" />
      <circle cx="48" cy="34" r="3" fill="#F8E6AF" />
      <circle cx="36" cy="50" r="3" fill="#F8E6AF" />
      <circle cx="24" cy="62" r="3" fill="#C42A27" />
      <circle cx="48" cy="64" r="3" fill="#8FA9BD" />

      {/* Path Arrows */}
      <line x1="26" y1="30" x2="45" y2="33" stroke="#8FA9BD" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="46" y1="36" x2="38" y2="48" stroke="#8FA9BD" strokeWidth="1.5" />
      <line x1="34" y1="52" x2="26" y2="60" stroke="#8FA9BD" strokeWidth="1.5" />
      <line x1="38" y1="52" x2="46" y2="62" stroke="#8FA9BD" strokeWidth="1.5" />

      {/* Milestone Flags */}
      <polygon points="48,34 54,32 48,30" fill="#F8E6AF" />
    </svg>
  </div>
);

// 10. Golden Retro Computer Monitor & Stylus Sticker
export const StickerMonitor: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:-rotate-6 select-none ${className}`}
  >
    <svg
      width="85"
      height="80"
      viewBox="0 0 85 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Die-cut outline */}
      <path
        d="M12 8 L72 8 L72 56 L54 56 L58 68 L66 70 L66 74 L18 74 L18 70 L26 68 L30 56 L12 56 Z M20 20 L76 64"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Monitor Frame */}
      <rect x="14" y="10" width="56" height="44" rx="4" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.8" />
      {/* Screen Inner */}
      <rect x="19" y="15" width="46" height="34" rx="2" fill="#FFFFFF" stroke="#14343A" strokeWidth="1.4" />

      {/* Screen lines */}
      <line x1="23" y1="22" x2="42" y2="22" stroke="#8FA9BD" strokeWidth="2" strokeLinecap="round" />
      <line x1="23" y1="28" x2="36" y2="28" stroke="#8FA9BD" strokeWidth="2" strokeLinecap="round" />

      {/* Monitor Stand */}
      <path d="M36 54 L34 66 L50 66 L48 54 Z" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.5" />
      {/* Base */}
      <rect x="22" y="66" width="40" height="4" rx="1.5" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.5" />

      {/* Stylus / Pencil Across Screen */}
      <g transform="rotate(-30 42 36)">
        <polygon points="18,34 62,34 62,38 18,38" fill="#C42A27" stroke="#14343A" strokeWidth="1" />
        <polygon points="62,34 68,36 62,38" fill="#F8E6AF" stroke="#14343A" strokeWidth="1" />
        <circle cx="67" cy="36" r="1" fill="#14343A" />
        <rect x="14" y="34" width="4" height="4" fill="#8FA9BD" stroke="#14343A" strokeWidth="1" />
      </g>
    </svg>
  </div>
);

// 11. Dark Petrol Stopwatch / Pocket Watch Sticker with Sparkles (from Sobre Nosotros slide)
export const StickerStopwatch: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_8px_18px_rgba(20,52,58,0.22)] transition-transform duration-300 hover:scale-110 hover:-rotate-6 select-none ${className}`}
  >
    <svg
      width="82"
      height="94"
      viewBox="0 0 82 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Die-cut white border */}
      <circle cx="41" cy="53" r="34" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="6" />
      <rect x="33" y="10" width="16" height="12" rx="3" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="6" />
      <circle cx="41" cy="11" r="8" fill="none" stroke="#FFFFFF" strokeWidth="6" />

      {/* Watch Top Ring & Knob */}
      <circle cx="41" cy="11" r="7" stroke="#14343A" strokeWidth="2.5" fill="none" />
      <rect x="35" y="13" width="12" height="7" rx="2" fill="#14343A" />

      {/* Main Pocket Watch Outer Circle */}
      <circle cx="41" cy="53" r="32" fill="#14343A" />
      {/* Inner Rim */}
      <circle cx="41" cy="53" r="26" fill="#14343A" stroke="#8FA9BD" strokeWidth="1.5" />

      {/* Dial Tick Marks */}
      <line x1="41" y1="30" x2="41" y2="34" stroke="#8FA9BD" strokeWidth="2" strokeLinecap="round" />
      <line x1="41" y1="72" x2="41" y2="76" stroke="#8FA9BD" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="53" x2="22" y2="53" stroke="#8FA9BD" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="53" x2="64" y2="53" stroke="#8FA9BD" strokeWidth="2" strokeLinecap="round" />

      <line x1="25" y1="37" x2="28" y2="40" stroke="#8FA9BD" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="57" y1="37" x2="54" y2="40" stroke="#8FA9BD" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="25" y1="69" x2="28" y2="66" stroke="#8FA9BD" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="57" y1="69" x2="54" y2="66" stroke="#8FA9BD" strokeWidth="1.2" strokeLinecap="round" />

      {/* Center Pivot & Hands */}
      <circle cx="41" cy="53" r="3" fill="#F8F4EB" />
      <line x1="41" y1="53" x2="41" y2="37" stroke="#F8F4EB" strokeWidth="2" strokeLinecap="round" />
      <line x1="41" y1="53" x2="54" y2="48" stroke="#F8F4EB" strokeWidth="2" strokeLinecap="round" />

      {/* Center 4-Point Sparkle Star */}
      <path
        d="M41 47 L42 51 L46 53 L42 55 L41 59 L40 55 L36 53 L40 51 Z"
        fill="#F8E6AF"
      />

      {/* Floating Sparkles outside */}
      <path d="M12 28 L14 24 L16 28 L20 30 L16 32 L14 36 L12 32 L8 30 Z" fill="#14343A" />
      <path d="M70 66 L71 63 L72 66 L75 67 L72 68 L71 71 L70 68 L67 67 Z" fill="#14343A" />
    </svg>
  </div>
);

// 12. Carmine Red Stationery Kit Sticker with Envelopes & Sparkles
export const StickerStationery: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:-rotate-3 select-none ${className}`}
  >
    <svg width="84" height="82" viewBox="0 0 84 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* White die-cut outline */}
      <path d="M14 18 L46 6 L62 14 L80 18 L76 72 L42 78 L10 68 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round" />
      {/* Back Envelope / Folder (Wine Red) */}
      <rect x="42" y="14" width="34" height="52" rx="3" fill="#761113" stroke="#FAF6EE" strokeWidth="1.2" transform="rotate(8 42 14)" />
      {/* Document cord & washer seal */}
      <circle cx="60" cy="38" r="4" fill="#F8E6AF" stroke="#14343A" strokeWidth="1" />
      <line x1="60" y1="38" x2="60" y2="52" stroke="#FAF6EE" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="60" cy="52" r="4" fill="#F8E6AF" stroke="#14343A" strokeWidth="1" />
      {/* Front Letter Envelope (Red #C42A27) */}
      <rect x="14" y="24" width="46" height="32" rx="3" fill="#C42A27" stroke="#FAF6EE" strokeWidth="1.2" />
      {/* Envelope Flap */}
      <path d="M14 24 L37 42 L60 24" fill="none" stroke="#FAF6EE" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Small Letter Card in front */}
      <rect x="10" y="46" width="34" height="24" rx="2" fill="#761113" stroke="#FAF6EE" strokeWidth="1" />
      <line x1="15" y1="53" x2="36" y2="53" stroke="#FAF6EE" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="15" y1="58" x2="30" y2="58" stroke="#FAF6EE" strokeWidth="1" strokeOpacity="0.7" />
      {/* Sparkle Stars */}
      <path d="M28 66 L30 62 L32 66 L36 68 L32 70 L30 74 L28 70 L24 68 Z" fill="#C42A27" />
      <path d="M38 72 L39 69 L40 72 L43 73 L40 74 L39 77 L38 74 L35 73 Z" fill="#761113" />
      <path d="M48 68 L49 65 L50 68 L53 69 L50 70 L49 73 L48 70 L45 69 Z" fill="#C42A27" />
    </svg>
  </div>
);

// 13. Nautical Seashell Sticker (Conch in white & dark teal linework)
export const StickerSeashell: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:rotate-6 select-none ${className}`}
  >
    <svg width="68" height="74" viewBox="0 0 68 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* White die-cut outline */}
      <path
        d="M32 6 C42 6 58 16 62 28 C64 36 56 50 48 62 C40 70 28 72 20 68 C12 64 8 52 10 40 C12 28 22 6 32 6 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Shell Body (Cream/White) */}
      <path
        d="M32 8 C42 8 56 18 58 28 C60 38 52 50 44 60 C36 68 26 70 18 66 C12 62 10 50 12 38 C14 26 24 8 32 8 Z"
        fill="#FFFFFF"
        stroke="#14343A"
        strokeWidth="1.8"
      />
      {/* Spiral Crown / Apex */}
      <path d="M38 12 Q48 18 52 26" stroke="#14343A" strokeWidth="1.5" />
      <path d="M32 16 Q44 24 48 34" stroke="#14343A" strokeWidth="1.5" />
      <path d="M26 22 Q38 32 42 44" stroke="#14343A" strokeWidth="1.5" />
      <path d="M22 30 Q32 40 36 54" stroke="#14343A" strokeWidth="1.5" />
      <path d="M18 40 Q26 48 28 62" stroke="#14343A" strokeWidth="1.5" />
      {/* Shell Grooves / Ridges */}
      <path d="M32 8 C30 16 28 28 26 42 C24 54 22 64 20 66" stroke="#8FA9BD" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M44 14 C40 24 38 38 34 50 C32 58 30 64 28 66" stroke="#8FA9BD" strokeWidth="1" strokeDasharray="3 2" />
    </svg>
  </div>
);

// 14. Soft Pastel Starfish Sticker
export const StickerStarfish: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:-rotate-6 select-none ${className}`}
  >
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* White die-cut outline */}
      <path
        d="M36 6 Q39 18 48 24 Q60 27 65 37 Q55 43 51 52 Q53 64 43 68 Q36 60 29 68 Q19 64 21 52 Q17 43 7 37 Q12 27 24 24 Q33 18 36 6 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Starfish Body (Soft Periwinkle Blue #98B7CE) */}
      <path
        d="M36 8 C38 18 46 23 50 25 C58 28 64 35 60 41 C54 44 50 49 48 54 C48 62 42 66 36 61 C30 66 24 62 24 54 C22 49 18 44 12 41 C8 35 14 28 22 25 C26 23 34 18 36 8 Z"
        fill="#98B7CE"
        stroke="#14343A"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Starfish Texture Dots */}
      <circle cx="36" cy="38" r="2.5" fill="#14343A" />
      <circle cx="36" cy="22" r="1.5" fill="#FAF6EE" />
      <circle cx="36" cy="29" r="1.5" fill="#FAF6EE" />
      <circle cx="50" cy="36" r="1.5" fill="#FAF6EE" />
      <circle cx="44" cy="37" r="1.5" fill="#FAF6EE" />
      <circle cx="44" cy="48" r="1.5" fill="#FAF6EE" />
      <circle cx="40" cy="44" r="1.5" fill="#FAF6EE" />
      <circle cx="28" cy="48" r="1.5" fill="#FAF6EE" />
      <circle cx="32" cy="44" r="1.5" fill="#FAF6EE" />
      <circle cx="22" cy="36" r="1.5" fill="#FAF6EE" />
      <circle cx="28" cy="37" r="1.5" fill="#FAF6EE" />
    </svg>
  </div>
);

// 15. Nautical Ship Helm / Steering Wheel (Timón)
export const StickerShipsWheel: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:rotate-12 select-none ${className}`}
  >
    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Die-cut outline */}
      <circle cx="39" cy="39" r="34" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="6" />
      {/* Outer Wheel Ring (Warm Yellow/Sand #F8E6AF) */}
      <circle cx="39" cy="39" r="24" stroke="#14343A" strokeWidth="3" fill="#F8E6AF" />
      <circle cx="39" cy="39" r="18" stroke="#14343A" strokeWidth="2.5" fill="#FAF6EE" />
      {/* Center Hub */}
      <circle cx="39" cy="39" r="6" fill="#F8E6AF" stroke="#14343A" strokeWidth="2" />
      <circle cx="39" cy="39" r="2.5" fill="#14343A" />
      {/* 8 Spokes & Handles */}
      <line x1="39" y1="5" x2="39" y2="73" stroke="#14343A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="5" y1="39" x2="73" y2="39" stroke="#14343A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="15" y1="15" x2="63" y2="63" stroke="#14343A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="15" y1="63" x2="63" y2="15" stroke="#14343A" strokeWidth="2.2" strokeLinecap="round" />
      {/* Handle Grips */}
      <circle cx="39" cy="7" r="2.5" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.5" />
      <circle cx="39" cy="71" r="2.5" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.5" />
      <circle cx="7" cy="39" r="2.5" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.5" />
      <circle cx="71" cy="39" r="2.5" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2.5" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.5" />
      <circle cx="62" cy="62" r="2.5" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.5" />
      <circle cx="16" cy="62" r="2.5" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.5" />
      <circle cx="62" cy="16" r="2.5" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.5" />
    </svg>
  </div>
);

// 16. Nautical Lifebuoy / Salvavidas Ring Sticker
export const StickerLifebuoy: React.FC<StickerProps> = ({ className = '', style }) => (
  <div
    style={style}
    className={`inline-block filter drop-shadow-[0_6px_14px_rgba(20,52,58,0.18)] transition-transform duration-300 hover:scale-110 hover:rotate-6 select-none ${className}`}
  >
    <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* White die-cut outline */}
      <circle cx="37" cy="37" r="32" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="6" />
      {/* Outer Torus */}
      <circle cx="37" cy="37" r="29" fill="#F8E6AF" stroke="#14343A" strokeWidth="1.8" />
      {/* Inner Hole */}
      <circle cx="37" cy="37" r="14" fill="#98B7CE" stroke="#14343A" strokeWidth="1.8" />
      
      {/* 4 Straps / Bands around ring */}
      {/* Top Strap */}
      <rect x="33" y="8" width="8" height="15" rx="1.5" fill="#FAF6EE" stroke="#14343A" strokeWidth="1.4" />
      {/* Bottom Strap */}
      <rect x="33" y="51" width="8" height="15" rx="1.5" fill="#FAF6EE" stroke="#14343A" strokeWidth="1.4" />
      {/* Left Strap */}
      <rect x="8" y="33" width="15" height="8" rx="1.5" fill="#FAF6EE" stroke="#14343A" strokeWidth="1.4" />
      {/* Right Strap */}
      <rect x="51" y="33" width="15" height="8" rx="1.5" fill="#FAF6EE" stroke="#14343A" strokeWidth="1.4" />

      {/* Lifeline rope loops on outer rim */}
      <path d="M41 12 C55 16 60 26 58 33" fill="none" stroke="#14343A" strokeWidth="1.2" strokeDasharray="3 2" />
      <path d="M58 41 C60 48 55 58 41 62" fill="none" stroke="#14343A" strokeWidth="1.2" strokeDasharray="3 2" />
      <path d="M33 62 C19 58 14 48 16 41" fill="none" stroke="#14343A" strokeWidth="1.2" strokeDasharray="3 2" />
      <path d="M16 33 C14 26 19 16 33 12" fill="none" stroke="#14343A" strokeWidth="1.2" strokeDasharray="3 2" />
    </svg>
  </div>
);

// 17. Lighthouse Brand Monogram ('H' Beacon)
export const LighthouseMonogram: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-7 h-8',
  color = '#761113',
}) => (
  <div className={`inline-flex flex-col items-center select-none ${className}`} title="Lighthouse Studio">
    <svg viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Roof Peak with cross/sparkle */}
      <path d="M16 2 L26 11 L6 11 Z" fill={color} />
      <circle cx="16" cy="7" r="1.5" fill="#FAF6EE" />
      {/* Chimney / Beacon top */}
      <rect x="14.5" y="0.5" width="3" height="3" fill={color} />
      {/* Base / Walls of H */}
      <path
        d="M8 12 L8 28 L12 28 L12 22 L20 22 L20 28 L24 28 L24 12 L20 12 L20 18 L12 18 L12 12 Z"
        fill={color}
      />
    </svg>
  </div>
);

