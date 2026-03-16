import React from 'react';
import { Users, Calendar, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TeamSectionProps {
  content: any;
}

const TeamSection: React.FC<TeamSectionProps> = ({ content }) => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {content.team.title}
          </h2>
          <p className="text-xl text-blue-600 font-semibold">
            {content.team.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in">
          <Card className="overflow-hidden border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="h-32 w-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mx-auto flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {content.team.supervisor.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    {content.team.supervisor.position}
                  </p>
                  <div className="space-y-2 text-slate-600">
                    <p className="flex items-center justify-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{content.team.supervisor.experience}</span>
                    </p>
                    <p>{content.team.supervisor.specialization}</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <a 
                      href="tel:+966592587562"
                      className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="h-4 w-4" />
                      <span>+966 592 587 562</span>
                    </a>
                    <a 
                      href="tel:+966561109123"
                      className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="h-4 w-4" />
                      <span>+966 561 109 123</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;