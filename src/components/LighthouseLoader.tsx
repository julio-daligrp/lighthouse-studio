import React, { useEffect, useState } from 'react';

interface LighthouseLoaderProps {
  onComplete?: () => void;
  minDuration?: number; // Duration in ms before fading out
}

export const LighthouseLoader: React.FC<LighthouseLoaderProps> = ({
  onComplete,
  minDuration = 2200,
}) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / minDuration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 600);
        }, 150);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [minDuration, onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, 300);
  };

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center select-none bg-[#F8F4EB] text-[#14343A] overflow-hidden transition-all duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-[1.02] pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Cargando Lighthouse Studio"
    >
      <style>{`
        /* Smooth sweeping yellow light beam from the H beacon */
        @keyframes subtleBeaconSweep {
          0% {
            transform: rotate(-65deg);
          }
          50% {
            transform: rotate(65deg);
          }
          100% {
            transform: rotate(-65deg);
          }
        }

        /* Pulsing yellow light inside the circle/star of the H */
        @keyframes beaconCorePulse {
          0%, 100% {
            transform: scale(0.92);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.16);
            opacity: 1;
          }
        }

        /* Expanding radiant light rings from the H beacon */
        @keyframes beaconRingWave {
          0% {
            transform: scale(0.35);
            opacity: 0.85;
          }
          70% {
            opacity: 0.35;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>

      {/* Subtle Skip button in the top corner (Rounded 25px per design spec) */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30">
        <button
          onClick={handleSkip}
          className="px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#14343A]/60 hover:text-[#14343A] bg-[#14343A]/5 hover:bg-[#14343A]/10 rounded-[25px] border border-[#14343A]/10 transition-all cursor-pointer font-secondary"
          style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          title="Saltar animación de carga"
        >
          Saltar
        </button>
      </div>

      {/* Centerpiece: Exact Brand Logo with Yellow Beacon Light radiating from the H */}
      <div className="relative flex flex-col items-center justify-center px-6">
        
        {/* Exact Logo Container (block image eliminates baseline spacing for exact % coordinates) */}
        <div className="relative inline-block max-w-[90vw]">
          
          {/* =========================================================================
              YELLOW LIGHTHOUSE BEACON ANIMATION (Behind exact logo at z-10)
              Anchored precisely at the center of the circle/star inside the 'H' (51.70%, 14.94%)
              so the yellow glow shines through the star cutout without covering the logo
             ========================================================================= */}
          <div
            className="absolute pointer-events-none z-10"
            style={{
              left: '51.70%',
              top: '14.94%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Warm Ambient Yellow Radial Glow behind the H's lantern */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(250, 204, 21, 0.55) 0%, rgba(253, 224, 71, 0.28) 42%, transparent 72%)',
                filter: 'blur(14px)',
              }}
            />

            {/* Sweeping Conical Yellow Lighthouse Beam */}
            <div
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                animation: 'subtleBeaconSweep 3.6s ease-in-out infinite',
                transformOrigin: 'center center',
              }}
            >
              <svg
                width="600"
                height="600"
                viewBox="-300 -300 600 600"
                className="overflow-visible"
                style={{ filter: 'blur(2px)' }}
              >
                <defs>
                  <linearGradient id="subtleBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.95" />
                    <stop offset="18%" stopColor="#FDE047" stopOpacity="0.72" />
                    <stop offset="48%" stopColor="#FACC15" stopOpacity="0.38" />
                    <stop offset="80%" stopColor="#FDE68A" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#F8F4EB" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="subtleBackBeamGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
                    <stop offset="24%" stopColor="#FDE047" stopOpacity="0.48" />
                    <stop offset="65%" stopColor="#FACC15" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#F8F4EB" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Primary Forward Yellow Beam */}
                <polygon
                  points="0,0 280,-72 290,72"
                  fill="url(#subtleBeamGrad)"
                />

                {/* Counter Back Beam */}
                <polygon
                  points="0,0 -250,62 -260,-62"
                  fill="url(#subtleBackBeamGrad)"
                  opacity="0.65"
                />
              </svg>
            </div>

            {/* Expanding Yellow Wave Rings emitting from the H lantern */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#F59E0B]/55 pointer-events-none"
              style={{ animation: 'beaconRingWave 2.4s cubic-bezier(0.2, 0.8, 0.4, 1) infinite' }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#FACC15]/75 pointer-events-none"
              style={{ animation: 'beaconRingWave 2.4s cubic-bezier(0.2, 0.8, 0.4, 1) infinite 1.2s' }}
            />

            {/* Focused Yellow Core Glow directly behind the transparent star cutout of the H */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full pointer-events-none"
              style={{
                animation: 'beaconCorePulse 1.8s ease-in-out infinite',
                background:
                  'radial-gradient(circle, #FFFBEB 0%, #FDE047 50%, #F59E0B 85%, transparent 100%)',
                boxShadow: '0 0 16px rgba(250, 204, 21, 0.9)',
              }}
            />
          </div>

          {/* Exact Official Brand Logo HD (2117x565 crisp render, unobstructed at z-20) */}
          <img
            src="assets/lighthouse_logo_horizontal_hd.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'assets/lighthouse_logo_horizontal.png';
            }}
            alt="LIGHTHOUSE Studio"
            loading="eager"
            decoding="sync"
            className="block w-[280px] sm:w-[360px] md:w-[420px] h-auto object-contain select-none relative z-20"
          />

        </div>

        {/* Minimal Progress Line & Subtle Loading Text */}
        <div className="mt-8 flex flex-col items-center space-y-2.5 relative z-20">
          {/* Subtle Progress Track (Rounded 25px per design spec) */}
          <div className="w-48 sm:w-56 h-1 bg-[#14343A]/10 rounded-[25px] overflow-hidden p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-[#C42A27] via-[#F8E6AF] to-[#C42A27] rounded-[25px] transition-all duration-100 ease-out shadow-xs"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Minimal Label */}
          <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#14343A]/60 font-secondary">
            <span style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}>
              {progress < 100 ? 'Iluminando tu marca' : 'Bienvenido'}
            </span>
            <span className="text-[#C42A27] text-[10px]">•</span>
            <span style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}>
              {progress}%
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
