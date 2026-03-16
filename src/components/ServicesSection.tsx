import React from 'react';
import { Building, Settings, Zap, Shield, Wrench, Droplets } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { serviceImages } from '@/data/projects';
import { Link } from 'react-router-dom';

interface ServicesSectionProps {
  content: any;
  isArabic: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ content, isArabic }) => {
  const getServiceIcon = (serviceKey: string) => {
    const icons = {
      civil: Building,
      mechanical: Settings,
      electrical: Zap,
      waterproofing: Shield,
      pipeline: Wrench,
      plumbing: Droplets
    };
    return icons[serviceKey] || Building;
  };

  const getServiceRoute = (serviceKey: string) => {
    const routes: Record<string, string> = {
      civil: '/civil-work',
      mechanical: '/mechanical-work',
      electrical: '/electrical-work',
      waterproofing: '/waterproofing',
      pipeline: '/pipeline-work',
      plumbing: '/plumbing-work'
    };
    return routes[serviceKey] || '/services';
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {content.services.title}
          </h2>
          <p className="text-xl text-blue-600 font-semibold">
            {content.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(content.services).filter(([key]) => !['title', 'subtitle'].includes(key)).map(([key, service]: [string, any], index) => {
            const IconComponent = getServiceIcon(key);
            const route = getServiceRoute(key);
            return (
              <Link key={key} to={route} className="group block">
                <Card className="group hover:shadow-2xl transition-all duration-500 border-slate-200 hover:border-blue-400 overflow-hidden animate-fade-in-up shadow-lg h-full" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={serviceImages[key]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center group-hover:from-blue-700 group-hover:to-indigo-800 transition-all duration-300 group-hover:scale-110 shadow-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-blue-800">{isArabic ? 'الخدمات المتخصصة:' : 'Specialized Services:'}</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.works.slice(0, 3).map((work: string, workIndex: number) => (
                            <div key={workIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors group/item">
                              <img 
                                src={service.images[workIndex]} 
                                alt={work}
                                className="w-12 h-12 object-cover rounded-lg shadow-sm group-hover/item:scale-105 transition-transform duration-300"
                              />
                              <span className="text-sm text-slate-600 group-hover/item:text-blue-600 transition-colors font-medium">{work}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 border-t border-slate-100">
                        <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                          {isArabic ? 'عرض المزيد ←' : 'View Details →'}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;