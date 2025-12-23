export interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
    submenu: [
      {
        label: 'Scan Your Printed Photos',
        href: '/services/scan-photos',
      },
      {
        label: 'Organize Your Memories',
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
        label: 'Express Your Feelings',
        href: '/services/express-feelings',
      },
      {
        label: 'Our Business Mission',
        href: '/services/our-mission',
      },
    ],
  },
  {
    label: 'Photo Galleries',
    href: '/galleries',
    submenu: [
      {
        label: 'Alterations Gallery',
        href: '/galleries/alterations',
      },
      {
        label: 'Restorations',
        href: '/galleries/restorations',
      },
      {
        label: 'Photo Organization',
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
    ],
  },
  {
    label: 'Training & Workshops',
    href: '/training',
    submenu: [
      {
        label: 'Save Your Photos Day',
        href: '/training/save-photos-day',
      },
      {
        label: 'Sip & Sort Workshop',
        href: '/training/sip-and-sort',
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'Testimonials',
    href: '/testimonials',
  },
  {
    label: 'About Us',
    href: '/about',
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
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Training', href: '/training' },
    { label: 'Galleries', href: '/galleries' },
    { label: 'Resources', href: '/resources' },
    { label: 'Save Your Photos Day', href: '/training/save-photos-day' },
  ],
};
