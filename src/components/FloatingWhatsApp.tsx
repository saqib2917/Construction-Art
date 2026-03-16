import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
  isArabic?: boolean;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ 
  phoneNumber = '+966592587562', 
  message = 'Hello! I would like to inquire about your services.',
  isArabic = false
}) => {
  const handleWhatsAppClick = () => {
    const cleanNumber = phoneNumber.replace(/\s+/g, '').replace(/[-()]/g, '');
    
    // Enhanced professional message with contact information template
    const enhancedMessage = isArabic 
      ? `🏗️ *مؤسسة الانشاءات ارت للمقاولات العامة*\n\nمرحباً! يسعدنا التواصل معكم لمناقشة احتياجاتكم.\n\n📋 *يرجى تزويدنا بالمعلومات التالية:*\n\n� *الاسم الكامل:* \n📱 *رقم الهاتف:* \n📧 *البريد الإلكتروني:* \n🏢 *اسم الشركة (إن وجد):* \n📍 *الموقع:* \n🏗️ *نوع المشروع:* \n� *تفاصيل المشروع:* \n⏰ *الجدول الزمني المتوقع:* \n💰 *الميزانية التقديرية:* \n\n🎯 *نلتزم بتقديم أفضل الحلول المخصصة لمتطلباتكم*\n\n✆ *تواصل معنا على:* \n📱 +966 592 587 562\n📱 +966 561 109 123\n📧 al.Anshaat.gen.cont@gmail.com\n\n🏆 *ننظر إلى الأمام للشراكة معكم في بناء المستقبل*`
      : `🏗️ *Construction Art For General Contracting*\n\nHello! We're pleased to connect with you to discuss your project needs.\n\n📋 *Please provide the following information:*\n\n� *Full Name:* \n📱 *Phone Number:* \n📧 *Email Address:* \n🏢 *Company Name (if applicable):* \n� *Project Location:* \n🏗️ *Project Type:* \n� *Project Details:* \n⏰ *Expected Timeline:* \n💰 *Estimated Budget:* \n\n🎯 *We're committed to delivering the best customized solutions for your requirements*\n\n✆ *Contact us at:* \n📱 +966 592 587 562\n📱 +966 561 109 123\n📧 al.Anshaat.gen.cont@gmail.com\n\n🏆 *We look forward to partnering with you in building the future*`;
    
    const encodedMessage = encodeURIComponent(enhancedMessage);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:bottom-8 lg:right-8">
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none border-2 border-green-400"
        aria-label={isArabic ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
      >
        <MessageCircle className="h-8 w-8 lg:h-10 lg:w-10" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          {isArabic ? 'تواصل معنا عبر واتساب' : 'Chat on WhatsApp'}
          <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-800"></div>
        </div>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-25"></div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
