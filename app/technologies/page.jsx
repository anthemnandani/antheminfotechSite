import React from "react";
import WordCloud from "../../container/WordCloud/WordCloud";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import { getToken } from "../../services/tokenservice";
import { getProjects } from "../../services/projectsservices";
import Script from "next/script";

export const metadata = {
  title: "Technologies We Use - Modern Tech Stack | Anthem Infotech",
  description: "Explore the cutting-edge technologies and modern tech stack used by Anthem Infotech. We leverage the latest frameworks, languages, and tools for Web Development, AI Solutions, and Custom Software Development.",
  keywords: [
    "Technologies",
    "Tech Stack",
    "Programming Languages",
    "Web Development Technologies",
    "AI Technologies",
    "Software Development Tools",
    "Modern Frameworks",
    "Anthem Infotech Technologies",
  ],
  openGraph: {
    title: "Technologies We Use - Modern Tech Stack | Anthem Infotech",
    description: "Explore the cutting-edge technologies and modern tech stack used by Anthem Infotech for Web Development, AI Solutions, and Custom Software Development.",
    url: "https://antheminfotech.com/technologies",
    siteName: "Anthem Infotech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anthem Infotech Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologies We Use - Modern Tech Stack | Anthem Infotech",
    description: "Explore the cutting-edge technologies and modern tech stack used by Anthem Infotech.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://antheminfotech.com/technologies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Technologies = () => {
  return (
    <React.Fragment>
      {/* Structured Data - CollectionPage */}
      <Script
        id="technologies-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Technologies We Use",
            "description": "Modern tech stack and technologies used by Anthem Infotech",
            "url": "https://antheminfotech.com/technologies",
            "about": {
              "@type": "Thing",
              "name": "Software Development Technologies",
              "description": "Programming languages, frameworks, and tools for software development"
            }
          }),
        }}
      />

      <Breadcrumb
        image="/images/bg/portfoliobg.webp"
        title="Technologies Powering Our Innovative Solutions"
        content="Home"
        contentTwo="Technologies"
      />
      <WordCloud classOption="bg-white"/>
    </React.Fragment>
  );
};

export default Technologies;