export interface TypicalProject {
  title: string;
  scenario: string;
  solution: string;
  icon: string; // Icon name reference
  featured?: boolean;
}

export const typicalProjects: TypicalProject[] = [
  {
    title: "Preserving Family History",
    scenario: "You have 50+ years of family photos scattered across albums, shoeboxes, and drawers. You want to create a digital archive your children and grandchildren can easily access.",
    solution: "We scan and organize your entire collection chronologically, creating a searchable digital archive with proper labeling and dating. Delivered on USB drive with cloud backup options.",
    icon: "archive",
    featured: true,
  },
  {
    title: "Creating a Memorial Album",
    scenario: "You want to honor a loved one by creating a beautiful legacy book combining restored vintage photos with modern family pictures and meaningful stories.",
    solution: "We scan and restore old photos, organize them with recent images, and design a professional photo book that celebrates their life story for generations to treasure.",
    icon: "heart",
    featured: true,
  },
  {
    title: "Decluttering Your Photo Collection",
    scenario: "You have 10,000+ digital photos across multiple devices and cloud services. It is overwhelming and you cannot find anything when you need it.",
    solution: "We consolidate all photos from various sources, remove duplicates, organize by date and event, and set up a sustainable system so you can easily find and share memories.",
    icon: "organize",
    featured: true,
  },
  {
    title: "Restoring Damaged Photos",
    scenario: "Your treasured family portraits have water damage, tears, or severe fading. You thought they were lost forever but want to try to save them.",
    solution: "Our expert restoration services can repair damage, remove stains, restore fading, and digitally reconstruct missing sections to bring your photos back to life.",
    icon: "restore",
  },
  {
    title: "Learning to Organize",
    scenario: "You want to tackle your photo chaos yourself but do not know where to start. You need guidance, strategies, and hands-on practice.",
    solution: "Join our Sip & Sort Workshops where you learn professional organization techniques in a fun, supportive environment. Leave with a personalized action plan.",
    icon: "learn",
  },
];
