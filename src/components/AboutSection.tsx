import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AboutSectionProps {
  content: any;
}

const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  const { elementRef: titleRef, isVisible: titleVisible } = useIntersectionObserver();
  const { elementRef: contentRef, isVisible: contentVisible } = useIntersectionObserver();
  const { elementRef: statsRef, isVisible: statsVisible } = useIntersectionObserver();
  const { elementRef: certRef, isVisible: certVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-500 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About Construction Art
          </h2>
          <p className="text-xl text-blue-600 font-semibold gradient-text">
            {content.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className={`space-y-6 transition-all duration-500 ${
              contentVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              {content.about.description}
            </p>
            
            {/* Enhanced Stats */}
            <div 
              ref={statsRef}
              className={`grid grid-cols-2 gap-6 pt-8 transition-all duration-500 ${
                statsVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
              }`}
            >
              {[
                { number: '5+', label: content.about.experience, delay: '0s' },
                { number: '100+', label: content.about.projects, delay: '0.1s' },
                { number: '50+', label: content.about.clients, delay: '0.2s' },
                { number: '100%', label: content.about.safety, delay: '0.3s' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl hover-lift card-stack glass-card shadow-lg"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="text-3xl font-bold text-blue-800 mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Registration Certificate */}
          <div 
            ref={certRef}
            className={`space-y-6 transition-all duration-500 ${
              certVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'
            }`}
          >
            <Card className="overflow-hidden border-slate-200 hover-lift shadow-xl card-stack">
              <CardContent className="p-0">
                <img 
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5b218cfa-ca27-43e9-9bd8-f59c8dc51e6f/1750752196994-reg.jpg"
                  alt="Official Registration Certificate"
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </CardContent>
            </Card>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-6 hover-lift glass-card shadow-lg card-stack">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6 text-blue-600 animate-float" />
                <h3 className="text-lg font-semibold text-blue-800">
                  {content.registration.title}
                </h3>
              </div>
              <div className="space-y-2 text-sm text-blue-700">
                <p><strong className="gradient-text">{content.registration.crNumber}</strong></p>
                <p>{content.registration.location}</p>
                <p className="text-blue-600 font-medium">{content.registration.verified}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;