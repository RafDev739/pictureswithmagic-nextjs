export interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    submenu: [
      {
        label: 'Photo Scanning',
        href: '/services/scan-photos',
      },
      {
        label: 'Photo Organization',
        href: '/services/organize',
      },
      {
        label: 'Bring Your Memories to Life',
        href: '/services/bring-to-life',
      },
      {
        label: 'All About Photos',
        href: '/services/all-about-photos',
      },
      {
        label: 'View All Services',
        href: '/services/all',
      },
    ],
  },
  {
    label: 'Photo Galleries',
    href: '/galleries',
    submenu: [
      {
        label: 'Restorations',
        href: '/galleries/restorations',
      },
      {
        label: 'Alterations',
        href: '/galleries/alterations',
      },
      {
        label: 'Organization',
        href: '/galleries/organization',
      },
      {
        label: 'Express Your Feelings',
        href: '/galleries/express-feelings',
      },
      {
        label: 'Photo Albums',
        href: '/galleries/albums',
      },
      {
        label: 'View All',
        href: '/galleries',
      },
    ],
  },
  {
    label: 'Process',
    href: '/process',
    submenu: [
      {
        label: 'How It Works',
        href: '/process#how-it-works',
      },
      {
        label: 'Workshops',
        href: '/training',
      },
      {
        label: 'Resources',
        href: '/resources',
      },
    ],
  },
  {
    label: 'Reviews',
    href: '/testimonials',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation = {
  services: [
    { label: 'Photo Scanning', href: '/services/scan-photos' },
    { label: 'Photo Organization', href: '/services/organize' },
    { label: 'Bring Your Memories to Life', href: '/services/bring-to-life' },
    { label: 'All About Photos', href: '/services/all-about-photos' },
    { label: 'View All Services', href: '/services/all' },
  ],
  quickLinks: [
    { label: 'Photo Galleries', href: '/galleries' },
    { label: 'Process', href: '/process' },
    { label: 'Reviews', href: '/testimonials' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};
