import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { StencilBorder } from './StencilBorder';
import { LighthouseMonogram } from './HeroStickers';

interface TestimonialSectionProps {
  onOpenContact: (subject?: string) => void;
}

interface ClientStory {
  id: string;
  number: string;
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  initials: string;
}

const clientStories: ClientStory[] = [
  {
    id: 'story-01',
    number: '01',
    quote:
      'Llegamos publicando sin coherencia visual ni un mensaje claro. Con Lighthouse Studio redefinimos la identidad completa, estructuramos los guiones de Reels y hoy nuestra comunidad reconoce cada pieza sin siquiera ver el logotipo.',
    authorName: 'Camila Mendoza',
    authorRole: 'Directora de Marca',
    company: 'Atelier Botánico Caribe',
    initials: 'CM',
  },
  {
    id: 'story-02',
    number: '02',
    quote:
      'Necesitábamos proyectar el nivel real de nuestra firma arquitectónica. Pasamos de un sitio genérico a una plataforma editorial sobria y luminosa que filtra mejor a nuestros prospectos y triplicó las reuniones de proyecto.',
    authorName: 'Alejandro Paredes',
    authorRole: 'Socio Fundador',
    company: 'Estudio Costa Norte',
    initials: 'AP',
  },
  {
    id: 'story-03',
    number: '03',
    quote:
      'Antes improvisábamos el calendario cada semana y sentíamos desgaste en redes. Ahora trabajamos con un sistema mensual de carruseles, dirección de cámara y copywriting estratégico que convirtió nuestro feed en un canal real de ventas.',
    authorName: 'Valeria Jiménez',
    authorRole: 'Fundadora',
    company: 'Casa Bruma Gastronomía',
    initials: 'VJ',
  },
  {
    id: 'story-04',
    number: '04',
    quote:
      'El equipo captó la esencia cálida de nuestra marca desde el primer boceto. La combinación entre dirección fotográfica, empaques y narrativa digital hizo que nuestro lanzamiento conectara de inmediato con el público.',
    authorName: 'Sebastián Lora',
    authorRole: 'Director Creativo',
    company: 'Solana Objetos',
    initials: 'SL',
  },
  {
    id: 'story-05',
    number: '05',
    quote:
      'Unificar nuestra identidad visual y nuestros materiales digitales cambió la conversación con clientes corporativos. Hoy presentamos propuestas con claridad tipográfica y una estética memorable que respalda cada número.',
    authorName: 'Natalia Guzmán',
    authorRole: 'Gerente General',
    company: 'Puerto Vivo Consultores',
    initials: 'NG',
  },
];

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ onOpenContact }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollPrev(scrollLeft > 8);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 8);

    const children = Array.from(track.children) as HTMLElement[];
    if (children.length === 0) return;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    children.forEach((child, idx) => {
      const distance = Math.abs(child.offsetLeft - track.offsetLeft - scrollLeft);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState, { passive: true });
    return () => window.removeEventListener('resize', updateScrollState);
  }, [updateScrollState]);

  const scrollToSlide = (targetIndex: number) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(targetIndex, clientStories.length - 1));
    const targetCard = track.children[clamped] as HTMLElement | undefined;
    if (!targetCard) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    track.scrollTo({
      left: targetCard.offsetLeft - track.offsetLeft,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    setActiveIndex(clamped);
  };

  const handlePrev = () => scrollToSlide(activeIndex - 1);
  const handleNext = () => scrollToSlide(activeIndex + 1);

  return (
    <section
      id="testimonios"
      aria-roledescription="carousel"
      aria-label="Testimonios y casos de éxito"
      className="relative w-full bg-[#14343A] text-[#F8F4EB] pt-20 sm:pt-24 pb-20 sm:pb-24 overflow-hidden"
    >
      {/* Subtle warm lighthouse ambient beam wash */}
      <div
        className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(248, 230, 175, 0.1) 0%, rgba(173, 197, 217, 0.04) 45%, transparent 72%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-3.5">
              <LighthouseMonogram color="#F8E6AF" className="w-4 h-5 shrink-0" />
              <span
                className="text-[11.5px] font-bold text-[#ADC5D9] uppercase tracking-[0.16em] font-secondary"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Voces de marca · Casos de éxito
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#F8F4EB] leading-[1.12] tracking-[-0.025em] font-primary text-balance"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              Historias de marcas que{' '}
              <span
                className="font-script font-normal text-[#F8E6AF] text-4xl sm:text-5xl lg:text-[54px] inline-block leading-none transform -rotate-1"
                style={{
                  fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
                }}
              >
                crecieron
              </span>{' '}
              con propósito
            </h2>
          </div>

          {/* Slider Arrow Controls + Counter */}
          <div className="flex items-center gap-3 self-start lg:self-end shrink-0">
            <span
              className="text-xs font-bold uppercase tracking-widest text-[#ADC5D9] tabular-nums mr-1.5 font-secondary whitespace-nowrap shrink-0"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              aria-live="polite"
            >
              {String(activeIndex + 1).padStart(2, '0')} —{' '}
              {String(clientStories.length).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollPrev}
              aria-label="Testimonio anterior"
              className="w-11 h-11 rounded-[25px] border border-white/25 bg-transparent text-[#F8F4EB] hover:bg-[#F8E6AF] hover:text-[#14343A] hover:border-[#F8E6AF] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#F8F4EB] disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8E6AF]"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canScrollNext}
              aria-label="Siguiente testimonio"
              className="w-11 h-11 rounded-[25px] border border-[#F8E6AF] bg-[#F8E6AF] text-[#14343A] hover:bg-white hover:border-white disabled:opacity-30 disabled:hover:bg-[#F8E6AF] disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Editorial Slider Track */}
        <div
          ref={trackRef}
          onScroll={updateScrollState}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              handleNext();
            } else if (e.key === 'ArrowLeft') {
              e.preventDefault();
              handlePrev();
            }
          }}
          className="flex items-stretch gap-6 sm:gap-7 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8E6AF]/50 rounded-[25px]"
        >
          {clientStories.map((story) => (
            <article
              key={story.id}
              aria-roledescription="slide"
              aria-label={`Testimonio ${story.number}: ${story.authorName}, ${story.company}`}
              className="w-[84vw] sm:w-[70vw] md:w-[440px] lg:w-[470px] shrink-0 snap-start bg-[#F8F4EB] text-[#14343A] rounded-[25px] p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.22)] flex flex-col justify-between gap-7 transition-transform duration-200"
            >
              {/* Client Comment */}
              <blockquote className="text-[15px] sm:text-base leading-[1.7] text-[#14343A]/90 font-primary">
                “{story.quote}”
              </blockquote>

              {/* Author Information */}
              <div className="pt-5 border-t border-[#14343A]/10 flex items-center gap-3.5 min-w-0">
                <div
                  className="w-11 h-11 rounded-full bg-[#14343A] text-[#F8E6AF] flex items-center justify-center text-xs font-bold uppercase tracking-wider shrink-0 font-secondary"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                  aria-hidden="true"
                >
                  {story.initials}
                </div>
                <div className="min-w-0">
                  <p
                    className="text-sm font-bold text-[#14343A] truncate font-primary"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {story.authorName}
                  </p>
                  <p className="text-xs text-[#14343A]/70 truncate font-primary">
                    {story.authorRole} · {story.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Main CTA */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Primary Action Button */}
          <button
            type="button"
            onClick={() =>
              onOpenContact('Quiero construir el próximo caso de éxito con Lighthouse Studio')
            }
            className="relative group self-start md:self-auto px-7 py-3.5 bg-[#C42A27] hover:bg-[#761113] active:scale-[0.99] text-[#F8F4EB] text-xs sm:text-sm font-bold uppercase tracking-wider font-secondary transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0 rounded-[25px] inline-flex items-center gap-2.5 overflow-visible"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            <span className="text-[#F8E6AF] group-hover:text-white transition-colors select-none font-bold">
              —
            </span>
            <span>Conversemos sobre tu marca</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
            <StencilBorder className="text-white/80 group-hover:text-[#F8E6AF]" />
          </button>
        </div>
      </div>
    </section>
  );
};
