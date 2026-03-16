import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ContactSectionProps {
  content: any;
  isArabic: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ content, isArabic }) => {
  const handleWhatsAppClick = (phoneNumber: string) => {
    // Remove any spaces, dashes, or special characters from phone number
    const cleanNumber = phoneNumber.replace(/\s+/g, '').replace(/[-()]/g, '');
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${cleanNumber}`;
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleDirectCall = (phoneNumber: string) => {
    // Remove any spaces, dashes, or special characters from phone number
    const cleanNumber = phoneNumber.replace(/\s+/g, '').replace(/[-()]/g, '');
    // Create tel URL for direct calling
    window.location.href = `tel:${cleanNumber}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {content.contact.title}
          </h2>
          <p className="text-xl text-blue-200 font-semibold">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-blue-300 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{isArabic ? 'العنوان' : 'Address'}</h3>
                  <p className="text-blue-100 mb-3">{content.contact.address}</p>
                  
                  {/* Small Map */}
                  <div className="w-full h-48 rounded-lg overflow-hidden border border-blue-300/30 hover:scale-105 transition-transform duration-300 shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.8234567890123!2d50.2084!3d26.2172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8b8b8b8b8b8%3A0x1234567890abcdef!2sAl%20Khobar%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Al Khobar Location Map"
                      className="filter brightness-90 hover:brightness-100 transition-all duration-300"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
                <Phone className="h-6 w-6 text-blue-300 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{isArabic ? 'الهاتف' : 'Phone'}</h3>
                  <button 
                    onClick={() => handleDirectCall('+966592587562')}
                    className="block text-blue-100 hover:text-white transition-colors cursor-pointer underline"
                  >
                    {content.contact.phone1}
                  </button>
                  <button 
                    onClick={() => handleDirectCall('+966561109123')}
                    className="block text-blue-100 hover:text-white transition-colors cursor-pointer underline"
                  >
                    {content.contact.phone2}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
                <Mail className="h-6 w-6 text-blue-300 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{isArabic ? 'البريد الإلكتروني' : 'Email'}</h3>
                  <a 
                    href="mailto:al.Anshaat.gen.cont@gmail.com"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {content.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-blue-800/50 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">
                {isArabic ? 'ساعات العمل' : 'Business Hours'}
              </h3>
              <div className="space-y-2 text-blue-100">
                <p>{isArabic ? 'الأحد - الخميس: 8:00 ص - 6:00 م' : 'Sunday - Thursday: 8:00 AM - 6:00 PM'}</p>
                <p>{isArabic ? 'الجمعة: 8:00 ص - 12:00 م' : 'Friday: 8:00 AM - 12:00 PM'}</p>
                <p>{isArabic ? 'السبت: مغلق' : 'Saturday: Closed'}</p>
              </div>
            </div>
          </div>

          {/* Enhanced WhatsApp Contact Options */}
          <Card className="bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-slate-600/20 backdrop-blur-md border-blue-300/30 animate-slide-in-right shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <MessageCircle className="relative h-20 w-20 text-blue-400 mx-auto mb-4 animate-bounce" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  <Zap className="inline h-8 w-8 mr-2 text-blue-400" />
                  {isArabic ? 'تواصل معنا فوراً عبر واتساب!' : 'Contact Us Instantly via WhatsApp!'}
                </h3>
                <p className="text-blue-200 text-lg font-medium">
                  {isArabic ? 'اختر أحد الأرقام للتواصل المباشر والسريع' : 'Choose a number for instant direct communication'}
                </p>
              </div>

              <div className="space-y-6">
                {/* WhatsApp Option 1 - Enhanced */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <Button
                    onClick={() => handleWhatsAppClick('+966592587562')}
                    className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-xl font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-4 border-2 border-blue-400/50"
                  >
                    <MessageCircle className="h-8 w-8 animate-pulse" />
                    <div className="text-center">
                      <div className="font-black text-xl flex items-center justify-center">
                        <Phone className="h-5 w-5 mr-2" />
                        +966 592 587 562
                      </div>
                      <div className="text-sm opacity-90 font-semibold flex items-center justify-center">
                        <Zap className="h-4 w-4 mr-1" />
                        {isArabic ? 'واتساب - الرقم الأول' : 'WhatsApp - Primary Number'}
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full font-bold flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      {isArabic ? 'مفضل' : 'PREFERRED'}
                    </div>
                  </Button>
                </div>

                {/* WhatsApp Option 2 - Enhanced */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-slate-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <Button
                    onClick={() => handleWhatsAppClick('+966561109123')}
                    className="relative w-full bg-gradient-to-r from-indigo-600 to-slate-600 hover:from-indigo-700 hover:to-slate-700 text-white py-6 text-xl font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-4 border-2 border-indigo-400/50"
                  >
                    <MessageCircle className="h-8 w-8 animate-pulse" />
                    <div className="text-center">
                      <div className="font-black text-xl flex items-center justify-center">
                        <Phone className="h-5 w-5 mr-2" />
                        +966 561 109 123
                      </div>
                      <div className="text-sm opacity-90 font-semibold flex items-center justify-center">
                        <Zap className="h-4 w-4 mr-1" />
                        {isArabic ? 'واتساب - الرقم الثاني' : 'WhatsApp - Secondary Number'}
                      </div>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center bg-blue-800/30 rounded-xl p-4 border border-blue-400/30">
                <p className="text-black text-lg font-semibold mb-2 flex items-center justify-center">
                  <Zap className="h-5 w-5 mr-2" />
                  {isArabic 
                    ? 'سيتم فتح واتساب تلقائياً عند النقر!'
                    : 'WhatsApp opens automatically when you click!'
                  }
                </p>
                <p className="text-gray-800 text-sm">
                  {isArabic 
                    ? 'متاح 24/7 للرد السريع على استفساراتكم'
                    : 'Available 24/7 for quick response to your inquiries'
                  }
                </p>
              </div>

              {/* Enhanced Quick Contact Info */}
              <div className="mt-8 pt-6 border-t border-blue-300/30">
                <div className="grid grid-cols-2 gap-6">
                  <button
                    onClick={() => handleDirectCall('+966592587562')}
                    className="group bg-blue-600/30 hover:bg-blue-600/50 rounded-xl p-4 transition-all duration-300 hover:scale-105 border border-blue-400/30"
                  >
                    <Phone className="h-8 w-8 text-black mx-auto mb-2 group-hover:animate-bounce" />
                    <p className="text-black font-bold text-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2" />
                      {isArabic ? 'مكالمة مباشرة' : 'Direct Call'}
                    </p>
                    <p className="text-gray-800 text-sm">
                      {isArabic ? 'اضغط للاتصال فوراً' : 'Tap to call instantly'}
                    </p>
                  </button>
                  <button
                    onClick={() => handleWhatsAppClick('+966592587562')}
                    className="group bg-blue-600/30 hover:bg-blue-600/50 rounded-xl p-4 transition-all duration-300 hover:scale-105 border border-blue-400/30"
                  >
                    <MessageCircle className="h-8 w-8 text-black mx-auto mb-2 group-hover:animate-bounce" />
                    <p className="text-black font-bold text-lg flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      {isArabic ? 'رسائل واتساب' : 'WhatsApp Chat'}
                    </p>
                    <p className="text-gray-800 text-sm">
                      {isArabic ? 'اضغط للمحادثة فوراً' : 'Tap to chat instantly'}
                    </p>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;