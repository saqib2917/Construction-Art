import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  content: any;
  isArabic: boolean;
  backgroundColor?: string;
}

const Footer: React.FC<FooterProps> = ({ content, isArabic, backgroundColor = "bg-slate-900" }) => {
  return (
    <footer className={`${backgroundColor} text-white py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/5b218cfa-ca27-43e9-9bd8-f59c8dc51e6f/1750752196994-logo.jpg" 
                alt="Construction Art Logo" 
                className="h-10 w-10 rounded-full hover:scale-105 transition-transform"
              />
              <div>
                <h3 className="text-lg font-bold">Construction Art</h3>
                <p className="text-blue-200 text-sm">General Contracting</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm">
              {isArabic 
                ? 'مؤسسة الانشاءات ارت للمقاولات العامة - التميز في البناء منذ 2019'
                : 'Construction Art For General Contracting - Building Excellence Since 2019'
              }
            </p>
          </div>

          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <h4 className="text-lg font-semibold mb-4">
              {isArabic ? 'خدماتنا' : 'Our Services'}
            </h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><Link to="/civil-work" className="hover:text-white transition-colors">{content.services.civil.title}</Link></li>
              <li><Link to="/mechanical-work" className="hover:text-white transition-colors">{content.services.mechanical.title}</Link></li>
              <li><Link to="/electrical-work" className="hover:text-white transition-colors">{content.services.electrical.title}</Link></li>
              <li><Link to="/waterproofing" className="hover:text-white transition-colors">{content.services.waterproofing.title}</Link></li>
              <li><Link to="/pipeline-work" className="hover:text-white transition-colors">{content.services.pipeline.title}</Link></li>
              <li><Link to="/plumbing-work" className="hover:text-white transition-colors">{content.services.plumbing.title}</Link></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg font-semibold mb-4">
              {isArabic ? 'معلومات الاتصال' : 'Contact Info'}
            </h4>
            <div className="space-y-2 text-blue-200 text-sm">
              <p>{content.contact.address}</p>
              <a href="tel:+966592587562" className="block hover:text-white transition-colors">
                {content.contact.phone1}
              </a>
              <a href="tel:+966561109123" className="block hover:text-white transition-colors">
                {content.contact.phone2}
              </a>
              <a href="mailto:al.Anshaat.gen.cont@gmail.com" className="block hover:text-white transition-colors">
                {content.contact.email}
              </a>
              <p className="text-yellow-300 font-medium">
                {content.registration.crNumber}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center animate-fade-in">
          <p className="text-blue-200 text-sm">
            © 2025 Construction Art For General Contracting. {isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;