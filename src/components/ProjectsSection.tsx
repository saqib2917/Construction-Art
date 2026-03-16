import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { getProjects } from '@/data/projects';

interface ProjectsSectionProps {
  isArabic: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isArabic }) => {
  const projects = getProjects(isArabic);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {isArabic ? 'مشاريعنا' : 'Our Projects'}
          </h2>
          <p className="text-xl text-blue-600 font-semibold">
            {isArabic ? 'مشاريع متميزة في جميع أنحاء المملكة' : 'Excellence Projects Across Saudi Arabia'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up shadow-lg" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{project.type}</p>
                <p className="text-slate-600 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;