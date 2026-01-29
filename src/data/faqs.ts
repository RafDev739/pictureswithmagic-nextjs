export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const trustFAQs: FAQ[] = [
  {
    question: "How do you handle my precious photos?",
    answer: "We treat your photos with the utmost care and respect. All photos are handled in a secure environment, logged, and tracked throughout the entire process. We use professional equipment and follow strict protocols to ensure your memories are safe. Local pickup and delivery are available in Pinellas and Hillsborough Counties to minimize handling.",
    category: "trust",
  },
  {
    question: "What if I have thousands of photos?",
    answer: "No problem! We specialize in large collections and have successfully organized projects ranging from hundreds to tens of thousands of photos. During your free consultation, we will assess the scope of your project and create a customized plan that fits your timeline and budget. We can work in phases if that is more comfortable for you.",
    category: "scope",
  },
  {
    question: "Do I need to sort my photos first?",
    answer: "Not at all! We offer organization services as part of our process. However, if you prefer to pre-sort your collection, that is fine too. We will work with whatever state your photos are in. Many clients find it easier to let us handle the sorting and organization.",
    category: "process",
  },
  {
    question: "How long does it take?",
    answer: "Timeline depends on the size and complexity of your project. Small projects (under 500 photos) typically take 1-2 weeks. Larger collections can take several weeks to a few months. During your consultation, we will provide a realistic timeline based on your specific needs and our current schedule.",
    category: "timeline",
  },
  {
    question: "What format will I receive my digital photos?",
    answer: "Scanned photos are delivered as high-quality JPEG files at 600 DPI, organized in folders on a USB drive. We can also provide digital delivery via cloud services if you prefer. Photos are organized by date, event, or your preferred system, with descriptive file names for easy searching.",
    category: "delivery",
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Palm Beach and Broward Counties, with additional service in Pinellas and Hillsborough Counties. Local pickup and delivery are available to ensure your photos are handled safely without mailing. Contact us to discuss your specific location.",
    category: "location",
  },
  {
    question: "Is the consultation really free with no obligation?",
    answer: "Absolutely! Our consultation is 100% free with no strings attached. We want to understand your needs, answer your questions, and provide expert guidance. You are never obligated to proceed with our services. We believe in earning your trust through transparency and expertise.",
    category: "trust",
  },
  {
    question: "Can you restore severely damaged photos?",
    answer: "Yes! We have extensive experience restoring photos with water damage, tears, fading, stains, and missing sections. During your consultation, we can assess the condition of your photos and explain what restoration is possible. Many photos that seem beyond repair can be beautifully restored.",
    category: "restoration",
  },
];
