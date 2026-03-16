import { useState, useEffect } from 'react';

export const useScrollTracking = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'team', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Add offset for fixed header
      
      // If we're at the very top, always show home as active
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      // Find which section is currently most visible
      let currentSection = 'home';

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          // Check if the current scroll position is within this section
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    // Add scroll listener with throttling for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Fixed header height
      const offsetTop = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
      
      // Update active section immediately for better UX
      setActiveSection(sectionId);
    } else {
      console.error('Element not found:', sectionId);
    }
  };

  return { activeSection, scrollToSection };
};