import { siteConfig } from "@/config/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: "Pictures With Magic",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.links.phone,
    email: siteConfig.links.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boca Raton",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Photo Preservation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Photo Scanning",
            description: "Professional 600 DPI photo scanning and digitization services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Photo Organization",
            description: "Professional photo organization for digital and physical collections",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Photo Restoration",
            description: "Photo restoration and enhancement services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Legacy Books",
            description: "Custom legacy book creation and memory preservation",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: "Pictures With Magic",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    email: siteConfig.links.email,
    telephone: siteConfig.links.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boca Raton",
      addressRegion: "FL",
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Milagros Parra Castro",
      jobTitle: "Certified Photo Manager",
      description: "Certified Photo Manager specializing in photo preservation and organization. APPO certified since 2013, Photo Manager certified 2020.",
    },
    foundingDate: "2010",
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: "Pictures With Magic",
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: ["en-US", "es"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
