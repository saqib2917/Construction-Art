import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isArabic: boolean;
  setIsArabic: (arabic: boolean) => void;
  activeSection: string;
  scrollToSection: (section: string) => void;
  navItems: any;
  content: any;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  isArabic,
  setIsArabic,
  activeSection,
  scrollToSection,
  navItems,
  content
}) => {
  const navigate = useNavigate();

  const handleNavClick = (section: string) => {
    console.log('Navigation clicked:', section);
    
    // Handle navigation between routes
    if (section === 'home' || section === 'الرئيسية') {
      navigate('/');
      setTimeout(() => window.scrollTo(0, 0), 100);
    } else if (section === 'services' || section === 'خدماتنا') {
      // Scroll to services section on home page
      navigate('/');
      setTimeout(() => scrollToSection('services'), 100);
    } else if (section === 'contact' || section === 'اتصل بنا') {
      // Scroll to contact section on home page
      navigate('/');
      setTimeout(() => scrollToSection('contact'), 100);
    } else {
      // For other sections, scroll on home page
      navigate('/');
      setTimeout(() => scrollToSection(section), 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {
              navigate('/');
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
          >
            <img 
              src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5b218cfa-ca27-43e9-9bd8-f59c8dc51e6f/1750752196994-logo.jpg" 
              alt="Construction Art Logo" 
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-slate-800">Construction Art</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(navItems).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleNavClick(key)}
                className={`text-sm font-medium transition-colors duration-200 relative hover:text-blue-600 ${
                  activeSection === key
                    ? 'text-blue-600'
                    : 'text-slate-600'
                }`}
              >
                {label}
                {activeSection === key && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
            
            {/* Search Box */}
            <SearchBox 
              isArabic={isArabic} 
              scrollToSection={scrollToSection}
              content={content}
            />
            
            {/* Language Toggle */}
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm">{isArabic ? 'EN' : 'AR'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <SearchBox 
              isArabic={isArabic} 
              scrollToSection={scrollToSection}
              content={content}
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3">
              {Object.entries(navItems).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    handleNavClick(key);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium transition-colors duration-200 ${
                    activeSection === key
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {label}
                </button>
              ))}
              
              <button
                onClick={() => setIsArabic(!isArabic)}
                className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors text-left"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">{isArabic ? 'English' : 'العربية'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;