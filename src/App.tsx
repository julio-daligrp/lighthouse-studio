/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { studioLiveContent } from './data/content';
import { SiteContent, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SobreMiSection } from './components/SobreMiSection';
import { ContenidoRedesSection } from './components/ContenidoRedesSection';
import { TestimonialSection } from './components/TestimonialSection';
import { ProjectsSection, servicesData } from './components/ProjectsSection';
import { SobreNosotrosPage } from './components/SobreNosotrosPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Toast } from './components/Toast';
import { LighthouseLoader } from './components/LighthouseLoader';
import { ServiciosPage } from './components/ServiciosPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';

type AppPage = 'home' | 'services' | 'service-detail' | 'about' | 'contact';

const resolveRouteFromUrl = (): { page: AppPage; serviceId: string | null } => {
  // GitHub Pages serves project sites from a subpath and has no SPA rewrite
  // rules, so all routing lives in the hash (e.g. /repo/#/servicios).
  // The old #servicios / #services forms are kept as aliases.
  const route = window.location.hash.replace(/^#\/?/, '').toLowerCase();

  const detailMatch = route.match(/^(?:servicios|services)\/([a-z0-9-]+)$/);
  if (detailMatch) {
    const matchedId = detailMatch[1];
    const exists = servicesData.some((item) => item.id === matchedId);
    if (exists) {
      return { page: 'service-detail', serviceId: matchedId };
    }
  }

  if (route === 'servicios' || route === 'services') {
    return { page: 'services', serviceId: null };
  }

  if (route === 'sobre-nosotros' || route === 'nosotros' || route === 'about') {
    return { page: 'about', serviceId: null };
  }

  if (route === 'contacto' || route === 'contact') {
    return { page: 'contact', serviceId: null };
  }

  return { page: 'home', serviceId: null };
};

export default function App() {
  const [content] = useState<SiteContent>(studioLiveContent);
  const initialRoute = resolveRouteFromUrl();
  const [currentPage, setCurrentPage] = useState<AppPage>(initialRoute.page);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(initialRoute.serviceId);
  const [contactSubject, setContactSubject] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Modals state
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Sync browser back/forward buttons and hash/pathname changes
  useEffect(() => {
    const handleLocationChange = () => {
      const route = resolveRouteFromUrl();
      setCurrentPage(route.page);
      setSelectedServiceId(route.serviceId);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToAbout = () => {
    setSelectedServiceId(null);
    setCurrentPage('about');
    window.location.hash = '#/sobre-nosotros';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToServices = () => {
    setSelectedServiceId(null);
    setCurrentPage('services');
    window.location.hash = '#/servicios';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToServiceDetail = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('service-detail');
    window.location.hash = `#/servicios/${serviceId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = (subject?: string) => {
    if (subject) {
      setContactSubject(subject);
    }
    setSelectedServiceId(null);
    setCurrentPage('contact');
    window.location.hash = '#/contacto';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (sectionId?: string) => {
    setSelectedServiceId(null);
    setCurrentPage('home');
    window.location.hash = '#/';
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 70);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const activeService = selectedServiceId
    ? servicesData.find((item) => item.id === selectedServiceId) || servicesData[0]
    : null;

  return (
    <div className="min-h-screen bg-[#F8F4EB] text-[#14343A] flex flex-col font-sans selection:bg-[#C42A27]/15 selection:text-[#761113]">
      {/* Lighthouse Entry Loading Screen with Light Beam Animation */}
      {isLoading && (
        <LighthouseLoader onComplete={() => setIsLoading(false)} />
      )}

      <Toast message={toastMessage} />

      {/* 1. Fixed / Sticky Top Navbar */}
      <Navbar
        brandName={content.brandName}
        currentPage={currentPage === 'service-detail' ? 'services' : currentPage}
        onOpenContact={navigateToContact}
        onNavigate={(sectionId) => navigateToHome(sectionId)}
        onNavigateHome={() => navigateToHome()}
        onNavigateAbout={navigateToAbout}
        onNavigateServices={navigateToServices}
      />

      <main className="flex-grow">
        {currentPage === 'about' ? (
          /* Dedicated "Sobre Nosotros" Endpoint / Page */
          <SobreNosotrosPage
            onNavigateHome={() => navigateToHome()}
            onNavigateServices={navigateToServices}
            onOpenContact={navigateToContact}
          />
        ) : currentPage === 'service-detail' && activeService ? (
          /* Dedicated Individual Service Page */
          <ServiceDetailPage
            service={activeService}
            allServices={servicesData}
            onNavigateHome={() => navigateToHome()}
            onNavigateServices={navigateToServices}
            onSelectService={navigateToServiceDetail}
            onOpenContact={navigateToContact}
          />
        ) : currentPage === 'services' ? (
          /* Dedicated "Nuestros Servicios" Endpoint / Page */
          <ServiciosPage
            onNavigateHome={() => navigateToHome()}
            onNavigateAbout={navigateToAbout}
            onSelectService={navigateToServiceDetail}
            onOpenContact={navigateToContact}
          />
        ) : currentPage === 'contact' ? (
          /* Dedicated Contact Page */
          <ContactPage
            content={content}
            initialSubject={contactSubject}
            onSuccessToast={showToast}
          />
        ) : (
          /* Home Page Sections */
          <>
            {/* 2. Hero Section */}
            <Hero
              kicker={content.heroKicker}
              headline={content.heroHeadline}
              addressLine1={content.addressLine1}
              addressLine2={content.addressLine2}
              email={content.email}
              phone={content.phone}
              onScrollDown={() => navigateToHome('services')}
              onOpenContact={() => navigateToContact()}
            />

            {/* 3. Nuestros Servicios Showcase (matching ServiciosPage) */}
            <ProjectsSection
              onOpenContact={(subject) => navigateToContact(subject)}
              onSelectService={navigateToServiceDetail}
            />

            {/* 4. "Sobre mí" Section: reutiliza el retrato del Hero */}
            <SobreMiSection
              onOpenContact={() => navigateToContact()}
              onNavigateAbout={navigateToAbout}
            />

            {/* 5. Generación de Contenido para Redes Sociales */}
            <ContenidoRedesSection
              onOpenContact={(subject) => navigateToContact(subject)}
              onNavigateServices={navigateToServices}
            />

            {/* 6. Casos de Éxito & Testimonios de Clientes (Horizontal Slider) */}
            <TestimonialSection
              onOpenContact={(subject) => navigateToContact(subject)}
            />
          </>
        )}
      </main>

      {/* Footer (4 Columns: Address, Nav, Social, Privacy & Attribution) */}
      <Footer
        addressLine1={content.addressLine1}
        addressLine2={content.addressLine2}
        email={content.email}
        phone={content.phone}
        copyright={content.copyright}
        onNavigate={(sectionId) => navigateToHome(sectionId)}
        onNavigateAbout={navigateToAbout}
        onNavigateServices={navigateToServices}
        onOpenContact={navigateToContact}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        projects={content.projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onOpenContact={navigateToContact}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        brandName={content.brandName}
      />
    </div>
  );
}
