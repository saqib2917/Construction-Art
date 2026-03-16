export const serviceImages = {
  civil: 'https://th.bing.com/th/id/OIP.MEjoul_F6PSdcIhlNqYDtAHaEJ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
  mechanical: 'https://th.bing.com/th/id/OIP.XHL-48B7NXn2FnkD1DeTsAHaEJ?w=289&h=180&c=7&r=0&o=5&pid=1.7',
  electrical: 'https://th.bing.com/th/id/OIP.pUeqoHwcOUv4wAJiJMmuygHaE8?w=306&h=204&c=7&r=0&o=7&pid=1.7&rm=3',
  waterproofing: 'https://th.bing.com/th/id/OIP.0frv2HMl1ucdazCONoChZgHaF6?w=224&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
  pipeline: 'https://i.pinimg.com/originals/ac/43/cd/ac43cdc2b25f29db2daf418448e79296.jpg',
  plumbing: 'https://c8.alamy.com/comp/MB9GX0/plumber-at-work-in-a-bathroom-plumbing-repair-service-assemble-and-install-concept-MB9GX0.jpg',
  acTechnician: 'https://static.vecteezy.com/system/resources/thumbnails/074/237/150/small/professional-air-conditioner-installation-and-maintenance-by-technician-in-uniform-photo.jpg'
  
};

export const getProjects = (isArabic: boolean) => {
  return [
    {
      title: isArabic ? 'مجمع مكاتب حديث' : 'Modern Office Complex',
      type: isArabic ? 'مشروع تجاري' : 'Commercial Project',
      description: isArabic ? 'مبنى مكاتب حديث مع تصميم مستدام' : 'A state-of-the-art office building with sustainable design.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: isArabic ? 'فيلا سكنية فاخرة' : 'Luxury Residential Villa',
      type: isArabic ? 'مشروع سكني' : 'Residential Project',
      description: isArabic ? 'منزل فاخر مبني خصيصاً مع تشطيبات راقية' : 'Custom-built luxury home with premium finishes.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: isArabic ? 'تجديد تجاري' : 'Commercial Renovation',
      type: isArabic ? 'مشروع تجديد' : 'Renovation Project',
      description: isArabic ? 'تجديد كامل لمبنى تجاري تاريخي' : 'Complete renovation of a historic commercial building.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];
};