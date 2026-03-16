import React, { useState, useEffect } from 'react';
import { content } from '@/data/content';
import { Users, Wrench, Zap, Droplets, WrenchIcon, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useScrollTracking } from '@/hooks/useScrollTracking';

const ServicesPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { activeSection, scrollToSection } = useScrollTracking();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const currentContent = isArabic ? content.ar : content.en;

  const handleScrollToSection = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+966592587562';
    const cleanNumber = phoneNumber.replace(/\s+/g, '').replace(/[-()]/g, '');

    const enhancedMessage = isArabic
      ? `مرحباً! أود الاستفسار عن خدماتكم.\n\nالرجاء ملء المعلومات التالية:\n\n📝 *الاسم الكامل:* \n📱 *رقم الهاتف:* \n📧 *البريد الإلكتروني:* \n💼 *نوع العمل/المشروع:* \n📋 *تفاصيل المشروع:* \n\nنتطلع للتواصل معكم!`
      : `Hello! I would like to inquire about your services.\n\nPlease provide the following information:\n\n📝 *Full Name:* \n📱 *Phone Number:* \n📧 *Email Address:* \n💼 *Work/Project Type:* \n📋 *Project Details:* \n\nWe look forward to connecting with you!`;

    const encodedMessage = encodeURIComponent(enhancedMessage);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: isArabic ? 'أعمال مدنية' : 'Civil Work',
      description: isArabic 
        ? 'حلول الهندسة المدنية الكاملة بما في ذلك الأسس والهياكل وتطوير البنية التحتية.'
        : 'Complete civil engineering solutions including foundations, structures, and infrastructure development.',
      features: [
        isArabic ? 'أعمال الأساسات' : 'Foundation Work',
        isArabic ? 'التصميم الهيكلي' : 'Structural Design',
        isArabic ? 'تطوير الموقع' : 'Site Development',
        isArabic ? 'أعمال الخرسانة' : 'Concrete Work',
        isArabic ? 'تحضير الموقع' : 'Site Preparation'
      ]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: isArabic ? 'أعمال ميكانيكية' : 'Mechanical Work',
      description: isArabic
        ? 'التركيبات الميكانيكية المهنية وأنظمة التكييف وإعداد المعدات الصناعية.'
        : 'Professional mechanical installations, HVAC systems, and industrial equipment setup.',
      features: [
        isArabic ? 'أنظمة التكييف' : 'HVAC Systems',
        isArabic ? 'تركيب الأنابيب' : 'Piping Installation',
        isArabic ? 'إعداد المعدات' : 'Equipment Setup',
        isArabic ? 'خدمات الصيانة' : 'Maintenance Services',
        isArabic ? 'تصميم الأنظمة' : 'System Design'
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: isArabic ? 'أعمال كهربائية' : 'Electrical Work',
      description: isArabic
        ? 'التركيبات الكهربائية وأنظمة الطاقة والإضاءة والبنية التحتية الكهربائية.'
        : 'Electrical installations, power systems, lighting, and electrical infrastructure.',
      features: [
        isArabic ? 'توزيع الطاقة' : 'Power Distribution',
        isArabic ? 'أنظمة الإضاءة' : 'Lighting Systems',
        isArabic ? 'دوائر الأمان' : 'Safety Circuits',
        isArabic ? 'تركيب اللوحات' : 'Panel Installation',
        isArabic ? 'التصميم الكهربائي' : 'Electrical Design'
      ]
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: isArabic ? 'العزل المائي' : 'Waterproofing',
      description: isArabic
        ? 'حلول العزل المائي المتقدمة للمباني والأقبية والمرافق الصناعية.'
        : 'Advanced waterproofing solutions for buildings, basements, and industrial facilities.',
      features: [
        isArabic ? 'أنظمة الأغشية' : 'Membrane Systems',
        isArabic ? 'تطبيق المواد المانعة للتسرب' : 'Sealant Application',
        isArabic ? 'التحكم في الرطوبة' : 'Moisture Control',
        isArabic ? 'عزل الأقبية' : 'Basement Waterproofing',
        isArabic ? 'حماية الأسطح' : 'Roof Protection'
      ]
    },
    {
      icon: <WrenchIcon className="h-8 w-8" />,
      title: isArabic ? 'أعمال الأنابيب' : 'Pipeline Work',
      description: isArabic
        ? 'تركيب الأنابيب والصيانة وأنظمة أنابيب الغاز للمشاريع الصناعية.'
        : 'Pipeline installation, maintenance, and gas pipeline systems for industrial projects.',
      features: [
        isArabic ? 'تركيب خطوط الأنابيب' : 'Pipeline Installation',
        isArabic ? 'أنظمة السباكة' : 'Plumbing Systems',
        isArabic ? 'توزيع المياه' : 'Water Distribution',
        isArabic ? 'أنظمة الصرف' : 'Drainage Systems',
        isArabic ? 'إصلاح الأنابيب' : 'Pipe Repair'
      ]
    },
    {
      icon: <WrenchIcon className="h-8 w-8" />,
      title: isArabic ? 'أعمال السباكة' : 'Plumbing Work',
      description: isArabic
        ? 'خدمات السباكة المهنية للمشاريع السكنية والتجارية والصناعية.'
        : 'Professional plumbing services for residential, commercial, and industrial projects.',
      features: [
        isArabic ? 'أنظمة إمداد المياه' : 'Water Supply Systems',
        isArabic ? 'تركيب الصرف' : 'Drainage Installation',
        isArabic ? 'تركيب التجهيزات' : 'Fixture Installation',
        isArabic ? 'إصلاح وصيانة الأنابيب' : 'Pipe Repair & Maintenance',
        isArabic ? 'خدمات السباكة الطارئة' : 'Emergency Plumbing Services'
      ]
    }
  ];

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

      {/* Hero Section */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${isArabic ? 'text-slate-900' : 'text-slate-900'} mb-6`}>
            {isArabic ? 'خدماتنا' : 'Our Services'}
          </h1>
          <p className={`text-xl ${isArabic ? 'text-slate-600' : 'text-blue-600'} font-semibold mb-12 max-w-3xl mx-auto`}>
            {isArabic
              ? 'حلول البناء الشاملة التي تلبي جميع احتياجاتك'
              : 'Comprehensive building solutions to meet all your needs'}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 border border-slate-200 hover:border-blue-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-3 ${isArabic ? 'text-slate-900' : 'text-slate-900'}`}>
                {service.title}
              </h3>
              <p className={`text-slate-600 mb-6 ${isArabic ? 'text-right' : 'text-left'}`}>
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center ${isArabic ? 'flex-row-reverse' : 'flex-row'} text-slate-600 text-sm`}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* WhatsApp Button */}
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                {isArabic ? 'اطلب خدمة عبر واتساب' : 'Request Service via WhatsApp'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="fade-in-section">
        <Footer
          content={currentContent}
          isArabic={isArabic}
          backgroundColor="bg-blue-900"
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
}

export default ServicesPage;
