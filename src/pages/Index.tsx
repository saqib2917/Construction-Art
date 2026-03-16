import React, { useState, useEffect } from 'react';
import { content } from '@/data/content';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { activeSection, scrollToSection } = useScrollTracking();

  // Initialize loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Add intersection observer for sections
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const currentContent = isArabic ? content.ar : content.en;

  const handleScrollToSection = (section: string) => {
    console.log('Index handleScrollToSection called with:', section);
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ${
        isArabic ? 'rtl' : 'ltr'
      } ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'} relative overflow-x-hidden`} 
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-white text-3d-gold animate-pulse-3d mb-4">
              Construction Art
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full animate-pulse mx-auto"></div>
          </div>
        </div>
      )}

      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isArabic={isArabic}
        setIsArabic={setIsArabic}
        activeSection={activeSection}
        scrollToSection={handleScrollToSection}
        navItems={currentContent.nav}
        content={currentContent}
      />

      <HeroSection
        content={currentContent}
        scrollToSection={handleScrollToSection}
      />

      <div id="about" className="fade-in-section">
        <AboutSection content={currentContent} />
      </div>

      <div id="services" className="fade-in-section">
        <ServicesSection
          content={currentContent}
          isArabic={isArabic}
        />
      </div>

      <div id="team" className="fade-in-section">
        <TeamSection content={currentContent} />
      </div>

      <div id="projects" className="fade-in-section">
        <ProjectsSection isArabic={isArabic} />
      </div>

      <div id="contact" className="fade-in-section">
        <ContactSection
          content={currentContent}
          isArabic={isArabic}
        />
      </div>

      <div className="fade-in-section">
        <Footer
          content={currentContent}
          isArabic={isArabic}
        />
      </div>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp 
        phoneNumber="+966592587562"
        message={isArabic ? 'مرحباً! أود الاستفسار عن خدماتكم.' : 'Hello! I would like to inquire about your services.'}
        isArabic={isArabic}
      />
    </div>
  );
};

export default Index;
