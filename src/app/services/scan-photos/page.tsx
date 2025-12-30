import type { Metadata } from "next";
import Image from "next/image";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Photo Scanning Services | 600 DPI Digital Conversion | Boca Raton",
  description: "Professional 600 DPI photo scanning services. Convert printed photos, slides, and negatives to high-quality digital images. Local pickup & delivery in Palm Beach and Broward counties.",
  keywords: ["photo scanning", "600 DPI scanning", "digital conversion", "photo digitization", "slides scanning", "negatives scanning", "Boca Raton"],
};

export default function ScanPhotosPage() {
  const features = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "High-Quality 600 DPI Scanning",
      description: "Professional scanning at 600 DPI ensures crystal-clear digital images that capture every detail of your precious photos.",
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: "Local Pickup & Delivery",
      description: "No need to mail your irreplaceable photos. We offer convenient pickup and delivery in Palm Beach and Broward Counties.",
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Multiple Format Support",
      description: "We scan loose photos (3x3 to 8x10), slides, negatives, and offer special services for fragile or oversized items.",
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Safe & Secure Handling",
      description: "Your photos are logged, tracked, and handled with the utmost care throughout the entire scanning process.",
    },
  ];

  const faqs = [
    {
      question: "What photo sizes can you scan?",
      answer: "We scan loose photos from 3x3 to 8x10 inches at 600 DPI. For oversized, fragile, or specialty items, please contact us for a custom quote.",
    },
    {
      question: "How long does the scanning process take?",
      answer: "Turnaround time depends on the quantity of photos. During your free consultation, we will provide an estimated timeline for your specific project.",
    },
    {
      question: "Do I need to organize my photos before scanning?",
      answer: "No! We scan photos in the order received. If you need organization services, we offer that as an additional service to sort, label, and categorize your collection.",
    },
    {
      question: "What format will I receive my scanned photos?",
      answer: "Scanned photos are delivered as high-quality JPEG files, organized in folders on a USB drive or via digital delivery, based on your preference.",
    },
    {
      question: "Can you handle damaged or fragile photos?",
      answer: "Yes! We have experience working with damaged and fragile photos. We offer special handling and can combine scanning with restoration services if needed.",
    },
  ];

  const visualSection = (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">
        Professional Scanning Equipment
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/11a4abd9a5d221f4.jpg"
            alt="Professional photo scanning equipment"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
          <Image
            src="/images/r-collage-hd.png"
            alt="Photo scanning setup with digital display"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );

  return (
    <ServicePageTemplate
      serviceName="Photo Scanning"
      tagline="Modernize your memories with professional digital conversion"
      summaryTitle="Preserve Your Photos Digitally"
      summaryDescription="Transform your printed photos into high-quality digital images that you can easily share, organize, and preserve for future generations. Our professional 600 DPI scanning ensures every detail is captured."
      benefits={[
        "Share photos instantly with family and friends via email or social media",
        "Create digital albums combining old and new memories",
        "Protect against loss from fading, damage, or disasters",
        "Free up physical storage space while preserving memories",
        "Easy backups to multiple locations for peace of mind",
      ]}
      visualSection={visualSection}
      features={features}
      faqs={faqs}
    />
  );
}
