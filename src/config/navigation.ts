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
        label: 'Photo Restoration',
        href: '/services/bring-to-life',
      },
      {
        label: 'View All Services',
        href: '/services',
      },
    ],
  },
  {
    label: 'Before & After',
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
    { label: 'Photo Restoration', href: '/services/bring-to-life' },
    { label: 'View All Services', href: '/services' },
  ],
  quickLinks: [
    { label: 'Before & After', href: '/galleries' },
    { label: 'Process', href: '/process' },
    { label: 'Reviews', href: '/testimonials' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};
