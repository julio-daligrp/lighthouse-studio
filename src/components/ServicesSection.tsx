import React from 'react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  title: string;
  services: ServiceItem[];
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  title,
  services,
  onSelectService,
}) => {
  return (
    <section id="services" className="w-full bg-[#F8F4EB] pt-16 sm:pt-24 pb-24 sm:pb-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading with Lighthouse styling (Subheading - LEMON MILK BOLD) */}
        <h2
          className="text-[13px] sm:text-[14px] font-bold text-[#14343A] text-center mb-16 sm:mb-20 uppercase tracking-widest inline-flex items-center justify-center gap-2 w-full font-secondary"
          style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C42A27]" />
          <span>{title}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C42A27]" />
        </h2>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 text-center">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              onClick={() => onSelectService && onSelectService(service)}
              className="flex flex-col items-center group cursor-pointer p-6 sm:p-8 rounded-2xl border border-[#14343A]/10 hover:border-[#C42A27]/30 hover:bg-[#F8E6AF]/15 transition-all duration-300"
            >
              {/* Subtle numerical indicator (Secondary - LEMON MILK) */}
              <span
                className="text-[11px] font-bold tracking-widest text-[#C42A27] uppercase mb-2 font-secondary"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                0{index + 1}
              </span>

              <h3
                className="text-[18px] sm:text-[19px] font-extrabold text-[#14343A] mb-3.5 group-hover:text-[#C42A27] transition-colors font-primary"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
              >
                {service.title}
              </h3>

              <p className="text-[14px] sm:text-[14.5px] leading-[1.65] text-[#14343A]/75 max-w-[320px] text-balance font-normal font-primary">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
