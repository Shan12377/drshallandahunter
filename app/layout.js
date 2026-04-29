import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://drshallandahunter.com'),
  title: {
    default: "Dr. Shallanda Hunter | PharmD · GLP-1 Educator · AI Implementation Architect",
    template: "%s | Dr. Shallanda Hunter",
  },
  description: "Dr. Shallanda Hunter is a PharmD, GLP-1 educator, AI implementation architect, and healthcare product builder helping women in healthcare understand and apply artificial intelligence.",
  keywords: [
    "Dr. Shallanda Hunter",
    "GLP-1 educator",
    "functional pharmacist",
    "AI implementation healthcare",
    "healthcare AI training",
    "VitaPlate AI",
    "Sugar Functional PharmD",
    "PharmD AI",
    "women in healthcare AI",
    "CFNMP",
    "functional nutrition pharmacist",
    "healthcare product builder",
    "GLP-1 coaching",
    "AI for clinicians",
    "pharmacist educator",
  ],
  authors: [{ name: "Dr. Shallanda Hunter", url: "https://drshallandahunter.com" }],
  creator: "Dr. Shallanda Hunter",
  publisher: "Dr. Shallanda Hunter",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drshallandahunter.com",
    siteName: "Dr. Shallanda Hunter",
    title: "Dr. Shallanda Hunter | PharmD · GLP-1 Educator · AI Implementation Architect",
    description: "Dr. Shallanda Hunter is a PharmD, GLP-1 educator, AI implementation architect, and healthcare product builder helping women in healthcare understand and apply artificial intelligence.",
    images: [
      {
        url: "/headshot-blue.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Shallanda Hunter, PharmD — GLP-1 Educator and AI Implementation Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Shallanda Hunter | PharmD · GLP-1 Educator · AI Implementation Architect",
    description: "PharmD, GLP-1 educator, AI implementation architect, and healthcare product builder for women in healthcare.",
    creator: "@sugarfuncpharmD",
    images: ["/headshot-blue.jpg"],
  },
  alternates: {
    canonical: "https://drshallandahunter.com",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Shallanda Hunter",
  honorificPrefix: "Dr.",
  honorificSuffix: "PharmD, MBA, CFNMP",
  jobTitle: "GLP-1 Educator, AI Implementation Architect, Healthcare Product Builder",
  description: "Pharmacist, GLP-1 educator, AI implementation architect, and healthcare product builder helping women in healthcare learn and apply artificial intelligence.",
  url: "https://drshallandahunter.com",
  email: "info@huntersholistichealth.com",
  image: "https://drshallandahunter.com/headshot-blue.jpg",
  sameAs: [
    "https://www.linkedin.com/in/dr-shallanda-hunter",
    "https://www.instagram.com/sugarfunctionalpharmd",
    "https://www.youtube.com/@sugarfunctionalpharmd",
    "https://www.tiktok.com/@sugarfunctionalph0",
    "https://twitter.com/sugarfuncpharmD",
  ],
  knowsAbout: [
    "GLP-1 receptor agonists",
    "functional nutrition",
    "metabolic health",
    "artificial intelligence in healthcare",
    "AI implementation",
    "pharmacy practice",
    "healthcare product development",
    "digital health",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Doctor of Pharmacy (PharmD)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Master of Business Administration (MBA)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Certified Functional Nutrition and Metabolism Practitioner (CFNMP)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Google AI Certified",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Claude AI Certified",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr. Shallanda Hunter",
  url: "https://drshallandahunter.com",
  description: "Official portfolio of Dr. Shallanda Hunter — PharmD, GLP-1 Educator, AI Implementation Architect, and Healthcare Product Builder.",
  author: {
    "@type": "Person",
    name: "Dr. Shallanda Hunter",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dr. Shallanda Hunter — Healthcare AI & GLP-1 Education",
  url: "https://drshallandahunter.com",
  description: "AI implementation training, GLP-1 education, and healthcare product development for clinicians and women in healthcare.",
  provider: {
    "@type": "Person",
    name: "Dr. Shallanda Hunter",
  },
  serviceType: [
    "AI Implementation Training",
    "GLP-1 Education",
    "Functional Nutrition Consulting",
    "Healthcare Product Development",
    "Digital Health Platform Building",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Inter:wght@400;500;600&family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
