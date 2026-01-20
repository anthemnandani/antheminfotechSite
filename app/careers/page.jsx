// app/career/page.jsx
import React from "react";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import CareerFromContainer from "../../container/CareerFromContainer/CareerFromContainer";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import Script from "next/script";

// Dynamic/Static metadata for SEO
export async function generateMetadata() {
  const title = "Career at Anthem Infotech ∣ Join Leading Web & AI Development Company in Chandigarh";
  const description =
    "Build your career with Anthem Infotech — a leading Web Development and AI Software Company in Chandigarh. Explore opportunities in Custom Software Development, AI Coding, and Full Stack technologies. Join our team of experts.";

  return {
    title,
    description,
    keywords: [
      "Career at Anthem Infotech",
      "Jobs in Chandigarh",
      "Software Development Jobs",
      "Web Development Careers",
      "AI Developer Jobs",
      "IT Jobs India",
      "Tech Careers",
    ],
    openGraph: {
      title,
      description,
      url: "https://antheminfotech.com/careers",
      siteName: "Anthem Infotech",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Anthem Infotech Careers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: "https://antheminfotech.com/careers",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const Career = () => {
  return (
    <>
      {/* Structured Data - JobPosting */}
      <Script
        id="career-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Software Development Positions",
            "description": "Join Anthem Infotech - Leading Web Development and AI Software Company",
            "identifier": {
              "@type": "PropertyValue",
              "name": "Anthem Infotech",
              "value": "AI-001"
            },
            "datePosted": new Date().toISOString(),
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Anthem Infotech Private Limited",
              "sameAs": "https://antheminfotech.com"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chandigarh",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              }
            },
            "baseSalary": {
              "@type": "MonetaryAmount",
              "currency": "INR",
              "value": {
                "@type": "QuantitativeValue",
                "minValue": 300000,
                "maxValue": 1500000,
                "unitText": "YEAR"
              }
            }
          }),
        }}
      />
     {/* BreadcrumbList Schema */}
  <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Career",
        url: "https://antheminfotech.com/careers",
      },
    ]}
  />
      {/* Breadcrumb */}
      <Breadcrumb
        image="/images/bg/breadcrumb-bg.webp"
        title="Explore Career Opportunities with Anthem Infotech"
        content="Home"
        contentTwo="Career"
      />

      {/* Career Form Section */}
      <CareerFromContainer classOption="background-7" />
    </>
  );
};

export default Career;