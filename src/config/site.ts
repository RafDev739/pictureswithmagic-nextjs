export const siteConfig = {
  name: 'Pictures With Magic',
  description: 'Professional photo scanning, organization, and restoration services in Boca Raton, FL. Serving Palm Beach, Broward, Pinellas, and Hillsborough counties.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/images/og-image.jpg',
  links: {
    email: 'info@pictureswithmagic.com',
    phone: '(561) 703-9789',
    facebook: 'https://facebook.com/pictureswithmagic',
    instagram: 'https://instagram.com/pictureswithmagic',
  },
  keywords: [
    'photo scanning',
    'photo organization',
    'photo restoration',
    'memory preservation',
    'digital photo conversion',
    'photo albums',
    'Boca Raton',
    'Palm Beach County',
    'Broward County',
    'Pinellas County',
    'Hillsborough County',
    'Florida photo services',
  ],
  serviceAreas: [
    'Palm Beach County',
    'Broward County',
    'Pinellas County',
    'Hillsborough County',
  ],
};

export type SiteConfig = typeof siteConfig;
