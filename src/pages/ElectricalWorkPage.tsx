import React, { useState, useEffect } from 'react';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Zap, Lightbulb, Shield, Battery, MessageCircle, Sun } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { serviceImages } from '@/data/projects';

const ElectricalWorkPage: React.FC = () => {
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
      ? `مرحباً! أود الاستفسار عن خدمات أعمال كهربائية.\n\nالرجاء ملء المعلومات التالية:\n\n📝 *الاسم الكامل:* \n📱 *رقم الهاتف:* \n📧 *البريد الإلكتروني:* \n💼 *نوع المشروع:* \n📋 *تفاصيل المشروع:* \n\nنتطلع للتواصل معكم!`
      : `Hello! I would like to inquire about your electrical work services.\n\nPlease provide the following information:\n\n📝 *Full Name:* \n📱 *Phone Number:* \n📧 *Email Address:* \n💼 *Project Type:* \n📋 *Project Details:* \n\nWe look forward to connecting with you!`;
    
    const encodedMessage = encodeURIComponent(enhancedMessage);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const electricalServices = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: isArabic ? 'التمديدات الكهربائية' : 'Electrical Wiring',
      description: isArabic 
        ? 'تركيب شبكات كهربائية متكاملة للمباني السكنية والتجارية.'
        : 'Complete electrical network installation for residential and commercial buildings.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: isArabic ? 'لوحات التوزيع' : 'Distribution Panels',
      description: isArabic 
        ? 'تركيب لوحات كهربائية رئيسية وفرعية مع حماية متكاملة.'
        : 'Installation of main and sub electrical panels with comprehensive protection.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: isArabic ? 'أنظمة الأمان' : 'Safety Systems',
      description: isArabic 
        ? 'تركيب أنظمة حماية من التيار الزائد والدوائر الكهربائية.'
        : 'Installation of protection systems against overcurrent and electrical circuits.'
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: isArabic ? 'الإنارة' : 'Lighting Systems',
      description: isArabic 
        ? 'تركيب أنظمة إنارة داخلية وخارجية حديثة.'
        : 'Installation of modern indoor and outdoor lighting systems.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: isArabic ? 'التصميم الكهربائي' : 'Electrical Design',
      description: isArabic 
        ? 'تصميم أنظمة كهربائية متكاملة للمباني.'
        : 'Complete electrical system design for buildings.'
    }
  ];

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100 ${
        isArabic ? 'rtl' : 'ltr'
      } ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'} relative overflow-x-hidden`} 
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-yellow-900 to-amber-900 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-white text-3d-gold animate-pulse-3d mb-4">
              Construction Art
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full animate-pulse mx-auto"></div>
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
                {isArabic ? 'أعمال كهربائية' : 'Electrical Work'}
              </h1>
              <p className="text-xl text-yellow-600 font-semibold mb-6">
                {isArabic 
                  ? 'حلول كهربائية آمنة وموثوقة'
                  : 'Safe and reliable electrical solutions'}
              </p>
              <p className="text-slate-600 mb-8">
                {isArabic
                  ? 'نقدم خدمات الأعمال الكهربائية المتكاملة بما في ذلك توزيع الطاقة وأنظمة الإضاءة واللوحات الكهربائية.'
                  : 'We provide comprehensive electrical work services including power distribution, lighting systems, and electrical panels.'}
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                {isArabic ? 'احصل على عرض سعر' : 'Get a Quote'}
              </Button>
            </div>
            <div className="relative">
              <img 
                src={serviceImages.electrical}
                alt={isArabic ? 'أعمال كهربائية' : 'Electrical Work'}
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid with Prices */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          {isArabic ? 'خدماتنا الكهربائية' : 'Our Electrical Services'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {electricalServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 border border-slate-200 hover:border-yellow-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-yellow-100 rounded-lg">
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
                    className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-50"
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
          {currentContent.services.electrical.images.map((img: string, idx: number) => (
            <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img src={img} alt={`Electrical work ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-600 to-amber-700 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {isArabic ? 'هل تحتاج إلى خدمات كهربائية؟' : 'Need Electrical Services?'}
          </h2>
          <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
            {isArabic 
              ? 'تواصل معنا اليوم للحصول على حلول كهربائية احترافية.'
              : 'Contact us today for professional electrical services.'}
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white text-yellow-600 hover:bg-yellow-50 font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-5 w-5" />
            {isArabic ? 'اطلب خدمة كهربائية' : 'Request Electrical Service'}
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
        message={isArabic ? 'مرحباً! أود الاستفسار عن خدمات أعمال كهربائية.' : 'Hello! I would like to inquire about electrical work services.'}
        isArabic={isArabic}
      />
    </div>
  );
};

export default ElectricalWorkPage;
