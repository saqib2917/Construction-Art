import React, { useEffect, useState } from 'react';
import { Phone, Mail, Users, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  content: any;
  scrollToSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content, scrollToSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollDown = () => {
    scrollToSection('about');
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-500/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-slate-500/20 rounded-lg animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            {/* 3D Animated Main Title */}
            <div className="perspective-1000">
              <h1 className={`text-5xl lg:text-7xl font-bold leading-tight hero-text-3d animate-pulse-3d transform-style-3d ${
                isLoaded ? 'animate-bounce-in' : 'opacity-0'
              }`}>
                <span className="block hero-text-3d-gold">Construction Art</span>
              </h1>
            </div>
            
            {/* 3D Animated Subtitle */}
            <div className="perspective-1000">
              <h2 className={`text-2xl lg:text-4xl font-light text-blue-200 hero-text-3d transform-style-3d ${
                isLoaded ? 'animate-slide-in-right' : 'opacity-0'
              }`} style={{ animationDelay: '0.3s' }}>
                For General Contracting
              </h2>
            </div>
            
            {/* Animated Description */}
            <p className={`text-xl text-slate-100 max-w-3xl mx-auto ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.6s' }}>
              {content.hero.description}
            </p>
          </div>

          {/* Animated CTA Section */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${
            isLoaded ? 'animate-scale-in' : 'opacity-0'
          }`} style={{ animationDelay: '0.9s' }}>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 px-8 py-4 text-lg font-semibold btn-3d hover-glow shadow-2xl transform transition-all duration-500"
            >
              {content.hero.cta}
            </Button>
            <div className="flex items-center space-x-3 text-white glass-card px-4 py-2 rounded-lg">
              <Users className="h-5 w-5 animate-float" />
              <span className="text-white font-medium">{content.hero.supervisor}</span>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-blue-600/30 max-w-2xl mx-auto ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '1.2s' }}>
            <a 
              href="tel:+966592587562"
              className="flex items-center justify-center space-x-3 text-blue-100 hover:text-white transition-all duration-500 hover:scale-105 glass-card p-4 rounded-lg hover-glow card-stack"
            >
              <Phone className="h-5 w-5 text-blue-300 animate-float" />
              <span className="font-medium">+966 592 587 562</span>
            </a>
            <a 
              href="mailto:al.Anshaat.gen.cont@gmail.com"
              className="flex items-center justify-center space-x-3 text-blue-100 hover:text-white transition-all duration-500 hover:scale-105 glass-card p-4 rounded-lg hover-glow card-stack"
            >
              <Mail className="h-5 w-5 text-blue-300 animate-float" style={{ animationDelay: '0.5s' }} />
              <span className="font-medium">al.Anshaat.gen.cont@gmail.com</span>
            </a>
          </div>

          {/* Fixed Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${
            isLoaded ? 'animate-bounce-in' : 'opacity-0'
          }`} style={{ animationDelay: '1.5s' }}>
            <button 
              onClick={handleScrollDown}
              className="flex flex-col items-center space-y-2 text-blue-200 hover:text-white transition-all duration-500 hover:scale-110 cursor-pointer"
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;