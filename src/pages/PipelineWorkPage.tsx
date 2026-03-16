import React, { useState, useEffect } from 'react';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Wrench, Truck, Gauge, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { serviceImages } from '@/data/projects';

const PipelineWorkPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { activeSection, scrollToSection } = useScrollTracking();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    // Scroll to top when page loads
    window.scrollTo(0, 0);
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
      ? `مرحباً! أود الاستفسار عن خدمات أعمال الأنابيب.\n\nالرجاء ملء المعلومات التالية:\n\n📝 *الاسم الكامل:* \n📱 *رقم الهاتف:* \n📧 *البريد الإلكتروني:* \n💼 *نوع المشروع:* \n📋 *تفاصيل المشروع:* \n\nنتطلع للتواصل معكم!`
      : `Hello! I would like to inquire about your pipeline work services.\n\nPlease provide the following information:\n\n📝 *Full Name:* \n📱 *Phone Number:* \n📧 *Email Address:* \n💼 *Project Type:* \n📋 *Project Details:* \n\nWe look forward to connecting with you!`;
    
    const encodedMessage = encodeURIComponent(enhancedMessage);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const pipelineServices = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: isArabic ? 'تركيب خطوط الأنابيب' : 'Pipeline Installation',
      description: isArabic 
        ? 'تركيب خطوط أنابيب رئيسية للمباني والمنشآت الصناعية.'
        : 'Installation of main pipelines for buildings and industrial facilities.'
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: isArabic ? 'أنظمة السباكة' : 'Plumbing Systems',
      description: isArabic 
        ? 'تركيب أنظمة سباكة متكاملة للمباني.'
        : 'Installation of complete plumbing systems for buildings.'
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: isArabic ? 'توزيع المياه' : 'Water Distribution',
      description: isArabic 
        ? 'إنشاء أنظمة توزيع مياه للمباني والمناطق السكنية.'
        : 'Creation of water distribution systems for buildings and residential areas.'
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: isArabic ? 'أنظمة الصرف' : 'Drainage Systems',
      description: isArabic 
        ? 'تركيب أنظمة صرف صحي ومعالجة مياه الصرف الصحي.'
        : 'Installation of sanitary drainage systems and wastewater treatment.'
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: isArabic ? 'إصلاح الأنابيب' : 'Pipe Repair',
      description: isArabic 
        ? 'إصلاح وتصليح أنابيب تالفة ومتضررة.'
        : 'Repair and maintenance of damaged and leaking pipes.'
    }
  ];

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-100 ${
        isArabic ? 'rtl' : 'ltr'
      } ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'} relative overflow-x-hidden`} 
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-white text-3d-gold animate-pulse-3d mb-4">
              Construction Art
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full animate-pulse mx-auto"></div>
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

      {/* Hero Section with Image */}
      <div className="relative pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                {isArabic ? 'أعمال الأنابيب' : 'Pipeline Work'}
              </h1>
              <p className="text-xl text-purple-600 font-semibold mb-6">
                {isArabic 
                  ? 'حلول أنابيب متقدمة للمشاريع الصناعية والسكنية'
                  : 'Advanced pipeline solutions for industrial and residential projects'}
              </p>
              <p className="text-slate-600 mb-8">
                {isArabic
                  ? 'نقدم خدمات تركيب وصيانة خطوط الأنابيب للمياه والغاز والصرف الصحي بأعلى معايير الجودة والسلامة.'
                  : 'We provide pipeline installation and maintenance services for water, gas, and sewage with highest quality and safety standards.'}
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                {isArabic ? 'احصل على عرض سعر' : 'Get a Quote'}
              </Button>
            </div>
            <div className="relative">
              <img 
                src={serviceImages.pipeline}
                alt={isArabic ? 'أعمال الأنابيب' : 'Pipeline Work'}
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid with Prices */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          {isArabic ? 'خدمات الأنابيب' : 'Our Pipeline Services'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pipelineServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 border border-slate-200 hover:border-purple-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-purple-100 rounded-lg">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {service.description}
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    variant="outline"
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {isArabic ? 'اطلب هذه الخدمة' : 'Order This Service'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          {isArabic ? 'معرض أعمالنا' : 'Our Work Gallery'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {currentContent.services.pipeline.images.map((img: string, idx: number) => (
            <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img src={img} alt={`Pipeline work ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {isArabic ? 'هل تحتاج إلى خدمات أنابيب؟' : 'Need Pipeline Services?'}
          </h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            {isArabic 
              ? 'تواصل معنا اليوم للحصول على حلول أنابيب احترافية.'
              : 'Contact us today for professional pipeline solutions.'}
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white text-purple-600 hover:bg-purple-50 font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-5 w-5" />
            {isArabic ? 'اطلب خدمة أنابيب' : 'Request Pipeline Service'}
          </Button>
        </div>
      </div>

      <Footer
          content={currentContent}
          isArabic={isArabic}
          backgroundColor="bg-[#0B1F3A]"  // deep dark blue
        />
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp 
        phoneNumber="+966592587562"
        message={isArabic ? 'مرحباً! أود الاستفسار عن خدمات أعمال الأنابيب.' : 'Hello! I would like to inquire about pipeline work services.'}
        isArabic={isArabic}
      />
    </div>
  );
};

export default PipelineWorkPage;
