import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LighthouseLogo } from './LighthouseLogo';

interface NavbarProps {
  brandName: string;
  currentPage?: 'home' | 'services' | 'about' | 'contact';
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateServices?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  brandName,
  currentPage = 'home',
  onOpenContact,
  onNavigate,
  onNavigateHome,
  onNavigateAbout,
  onNavigateServices,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const handleBrandClick = () => {
    setMobileMenuOpen(false);
    onNavigateHome();
  };

  const handleAboutClick = () => {
    setMobileMenuOpen(false);
    onNavigateAbout();
  };

  const handleServicesClick = () => {
    setMobileMenuOpen(false);
    if (onNavigateServices) {
      onNavigateServices();
    } else {
      handleNavClick('services');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage === 'contact' || currentPage === 'about' || currentPage === 'services'
          ? 'bg-[#F8F4EB]/90 backdrop-blur-md border-b border-[#14343A]/10 py-3.5 shadow-[0_4px_20px_rgba(20,52,58,0.04)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand Lockup: Lighthouse Logo matching Page 1 of PDF */}
        <button
          onClick={handleBrandClick}
          className="flex items-center gap-3 group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14343A] rounded-lg p-1"
        >
          <LighthouseLogo variant="horizontal" size="md" />
        </button>

        {/* Desktop Nav Links: Servicios, Nosotros, Contacto (Subheadings - LEMON MILK BOLD) */}
        <nav
          className="hidden md:flex items-center gap-9 text-[13.5px] sm:text-[14px] font-bold text-[#14343A] tracking-wider uppercase font-secondary"
          style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
        >
          <button
            onClick={handleServicesClick}
            className={`transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14343A] rounded px-1 ${
              currentPage === 'services'
                ? 'text-[#C42A27] underline underline-offset-4 font-bold'
                : 'hover:text-[#C42A27]'
            }`}
          >
            Servicios
          </button>
          <button
            onClick={handleAboutClick}
            className={`transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14343A] rounded px-1 ${
              currentPage === 'about'
                ? 'text-[#C42A27] underline underline-offset-4 font-bold'
                : 'hover:text-[#C42A27]'
            }`}
          >
            Nosotros
          </button>
          <button
            onClick={onOpenContact}
            className={`transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14343A] rounded px-1 ${
              currentPage === 'contact' ? 'text-[#C42A27] underline underline-offset-4 font-bold' : 'hover:text-[#C42A27]'
            }`}
          >
            Contacto
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Alternar menú de navegación"
          className="md:hidden p-2 rounded-lg text-[#14343A] hover:bg-[#14343A]/10 transition-colors focus-visible:outline-none"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F4EB]/98 backdrop-blur-xl border-b border-[#14343A]/15 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div
            className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-[#14343A] font-secondary"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            <button
              onClick={handleServicesClick}
              className={`text-left py-2 hover:text-[#C42A27] transition-colors ${
                currentPage === 'services' ? 'text-[#C42A27] font-bold' : ''
              }`}
            >
              Servicios
            </button>
            <button
              onClick={handleAboutClick}
              className={`text-left py-2 hover:text-[#C42A27] transition-colors ${
                currentPage === 'about' ? 'text-[#C42A27] font-bold' : ''
              }`}
            >
              Nosotros
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-left py-2 flex items-center justify-between hover:text-[#C42A27] transition-colors"
            >
              <span>Contacto</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
