import React from 'react';

interface ArtworkVisualProps {
  styleType: 'dome-lavender' | 'sphere-lime' | 'orb-lilac' | 'horizon-sunset' | 'silver-curve' | 'beacon-dawn' | 'ocean-night';
  className?: string;
  hoverZoom?: boolean;
}

export const ArtworkVisual: React.FC<ArtworkVisualProps> = ({
  styleType,
  className = '',
  hoverZoom = false,
}) => {
  const containerClasses = `relative overflow-hidden w-full h-full select-none ${className}`;
  const zoomClasses = hoverZoom ? 'transition-transform duration-700 ease-out group-hover:scale-105' : '';

  switch (styleType) {
    // 1. Beacon Dawn (Dusty Blue #8FA9BD + Butter Yellow #F8E6AF + Cream #F8F4EB)
    case 'dome-lavender':
    case 'beacon-dawn':
      return (
        <div className={containerClasses} style={{ backgroundColor: '#8FA9BD' }}>
          <div
            className={`absolute inset-0 ${zoomClasses}`}
            style={{
              background: 'linear-gradient(180deg, #7e99ad 0%, #8FA9BD 45%, #b4c7d4 75%, #F8E6AF 100%)',
            }}
          >
            {/* Ambient warm light beam */}
            <div
              className="absolute -top-10 -right-10 w-96 h-96 rounded-full blur-3xl opacity-60 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #F8E6AF 0%, transparent 70%)' }}
            />
            {/* The signature giant radiant dome */}
            <div
              className="absolute left-1/2 -bottom-[15%] -translate-x-1/2 w-[160%] sm:w-[140%] aspect-[1/1] rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 50% 32%, #ffffff 0%, #F8F4EB 35%, #F8E6AF 65%, #8FA9BD 90%, #14343A 100%)',
                boxShadow: '0 -25px 80px rgba(248, 230, 175, 0.7), 0 0 120px rgba(143, 169, 189, 0.4)',
              }}
            />
            {/* Luminous beacon rim arc */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 800 600"
            >
              <path
                d="M -100,550 Q 400,200 900,550"
                fill="none"
                stroke="#F8F4EB"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      );

    // 2. Ocean Night (Deep Teal #14343A + Butter Orb #F8E6AF + Red Accent #C42A27)
    case 'orb-lilac':
    case 'ocean-night':
      return (
        <div className={containerClasses} style={{ backgroundColor: '#14343A' }}>
          <div
            className={`absolute inset-0 flex items-center justify-center ${zoomClasses}`}
            style={{
              background: 'linear-gradient(145deg, #10292e 0%, #14343A 60%, #1d464e 100%)',
            }}
          >
            {/* Subtle beacon flare */}
            <div
              className="absolute top-8 right-10 w-44 h-44 rounded-full blur-2xl opacity-20 pointer-events-none"
              style={{ background: '#C42A27' }}
            />
            {/* The radiant glowing orb */}
            <div
              className="w-56 sm:w-72 aspect-square rounded-full relative"
              style={{
                background:
                  'radial-gradient(circle at 45% 42%, #ffffff 0%, #F8F4EB 30%, #F8E6AF 62%, #8FA9BD 88%, #14343A 100%)',
                boxShadow:
                  '0 24px 60px rgba(0, 0, 0, 0.35), 0 0 45px rgba(248, 230, 175, 0.35)',
              }}
            >
              <div
                className="absolute top-6 left-8 w-20 h-20 rounded-full blur-xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, transparent 70%)' }}
              />
            </div>
          </div>
        </div>
      );

    // 3. Coastal Sun (Butter Yellow #F8E6AF + Luminous Orb)
    case 'sphere-lime':
      return (
        <div className={containerClasses} style={{ backgroundColor: '#F8E6AF' }}>
          <div
            className={`absolute inset-0 flex items-center justify-center ${zoomClasses}`}
            style={{
              background: 'linear-gradient(150deg, #faf0d2 0%, #F8E6AF 55%, #edd593 100%)',
            }}
          >
            {/* The serene white 3D orb with warm sunbeam shadow */}
            <div
              className="w-52 sm:w-64 aspect-square rounded-full relative"
              style={{
                background:
                  'radial-gradient(circle at 42% 40%, #ffffff 0%, #F8F4EB 40%, #f7dfa2 72%, #deb66c 100%)',
                boxShadow:
                  '0 24px 60px rgba(180, 140, 70, 0.28), inset 0 -8px 24px rgba(190, 150, 80, 0.25)',
              }}
            >
              <div
                className="absolute top-5 left-7 w-20 h-20 rounded-full blur-lg pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, transparent 65%)' }}
              />
            </div>
          </div>
        </div>
      );

    // 4. Alabaster Arc (Warm Cream #F8F4EB + Deep Teal #14343A + Red #C42A27)
    case 'silver-curve':
      return (
        <div className={containerClasses} style={{ backgroundColor: '#F8F4EB' }}>
          <div
            className={`absolute inset-0 ${zoomClasses}`}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #F8F4EB 60%, #eee8d8 100%)',
            }}
          >
            {/* Large curved arc */}
            <div
              className="absolute -bottom-10 -left-10 w-[140%] aspect-square rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 50% 35%, #ffffff 0%, #F8F4EB 45%, #8FA9BD 80%, #14343A 100%)',
                boxShadow: '0 -15px 50px rgba(248, 244, 235, 0.9)',
              }}
            />
            {/* Red accent curve */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 500 500"
            >
              <path
                d="M -50,450 Q 250,150 550,450"
                fill="none"
                stroke="#C42A27"
                strokeWidth="2.5"
              />
            </svg>
          </div>
        </div>
      );

    // 5. Lighthouse Sunset (Terracotta Red #C42A27 + Crimson #761113 + Dusty Blue #8FA9BD)
    case 'horizon-sunset':
      return (
        <div className={containerClasses} style={{ backgroundColor: '#F8F4EB' }}>
          <div
            className={`absolute inset-0 ${zoomClasses}`}
            style={{
              background:
                'linear-gradient(135deg, #8FA9BD 0%, #b8c9d4 30%, #F8E6AF 65%, #C42A27 100%)',
            }}
          >
            <div
              className="absolute -top-1/4 -right-1/4 w-[110%] aspect-square rounded-full blur-3xl opacity-50 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #F8E6AF 0%, transparent 70%)' }}
            />
            <div
              className="absolute -bottom-1/4 -left-1/4 w-[110%] aspect-square rounded-full blur-3xl opacity-50 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #761113 0%, transparent 70%)' }}
            />
            {/* Luminous rising beacon dome */}
            <div
              className="absolute left-1/2 -bottom-[20%] -translate-x-1/2 w-[140%] aspect-[1.2/1] rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 50% 30%, #ffffff 0%, rgba(248, 244, 235, 0.95) 45%, rgba(248, 230, 175, 0.8) 70%, rgba(196, 42, 39, 0.85) 100%)',
                boxShadow: '0 -15px 60px rgba(255, 255, 255, 0.7)',
              }}
            />
          </div>
        </div>
      );

    default:
      return <div className="w-full h-full bg-[#F8F4EB]" />;
  }
};
