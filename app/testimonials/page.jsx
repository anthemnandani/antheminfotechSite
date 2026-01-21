import React from "react";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import BreadcrumbSchema from "@/components/BreadCrumbSchema.jsx";
import TestimonialContainer from "../../container/Testimonial/TestimonialContainer.js";
import Script from "next/script";

export const metadata = {
  title: "Client Testimonials - What Our Clients Say | Anthem Infotech",
  description: "Read what our clients say about their experience with Anthem Infotech. Discover how our innovative solutions have helped businesses achieve success and drive growth. Real testimonials from satisfied clients.",
  keywords: [
    "Anthem Infotech Testimonials",
    "Client Reviews",
    "Customer Testimonials",
    "Client Feedback",
    "Software Development Reviews",
    "Web Development Testimonials",
  ],
  openGraph: {
    title: "Client Testimonials - What Our Clients Say | Anthem Infotech",
    description: "Read what our clients say about their experience with Anthem Infotech. Discover how our innovative solutions have helped businesses achieve success and drive growth.",
    url: "https://antheminfotech.com/testimonials",
    siteName: "Anthem Infotech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anthem Infotech Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials - What Our Clients Say | Anthem Infotech",
    description: "Read what our clients say about their experience with Anthem Infotech.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://antheminfotech.com/testimonials",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Testimonial = ({ classOption }) => {
  return (
    <>
      {/* Structured Data - Review */}
      <Script
        id="testimonials-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Anthem Infotech Private Limited",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "50",
              "bestRating": "5",
              "worstRating": "1"
            }
          }),
        }}
      />
<BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Testimonials",
        url: "https://antheminfotech.com/testimonials",
      },
    ]}
  /> 
      <Breadcrumb
        image="images/bg/testimonials.webp"
        title="What Our Clients Say About Their Experience with Us"
        content="Home"
        contentTwo="Testimonials"
      />

      <TestimonialContainer classOption="bg-white"  />
    </>
  );
};

export default Testimonial;
