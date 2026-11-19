import React from 'react';

interface HugeTextBannerProps {
  text: string;
  onTextClick?: () => void;
}

export const HugeTextBanner: React.FC<HugeTextBannerProps> = ({ text, onTextClick }) => {
  return (
    <div className="w-full bg-[#F8F4EB] pt-16 sm:pt-24 pb-20 sm:pb-32 px-4 sm:px-8 overflow-hidden select-none border-t border-[#14343A]/10">
      <div className="w-full max-w-[1440px] mx-auto text-center">
        <h2
          onClick={onTextClick}
          className="text-[12vw] sm:text-[11vw] md:text-[10vw] font-black tracking-tight text-[#14343A] leading-[0.92] text-center uppercase whitespace-nowrap overflow-hidden transition-all duration-300 hover:text-[#C42A27] cursor-pointer"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {text}
        </h2>
      </div>
    </div>
  );
};
