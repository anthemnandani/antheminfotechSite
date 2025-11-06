// app/career/page.jsx
// "use client";

import React from "react";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import CareerFromContainer from "../../container/CareerFromContainer/CareerFromContainer";
// Dynamic/Static metadata for SEO
export async function generateMetadata() {
  const title = "Career at Anthem Infotech ∣ Join Leading Web & AI Development Company in Chandigarh";
  const description =
    "Build your career with Anthem Infotech — a leading Web Development and AI Software Company in Chandigarh. Explore opportunities in Custom Software Development, AI Coding, and Full Stack technologies.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://antheminfotech.com/Career",
      siteName: "Anthem Infotech",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Anthem Infotech Careers",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.png"],
    },
  };
}

const Career = () => {
  return (
    <>
    
      {/* Breadcrumb */}
      <Breadcrumb
        image="/images/bg/breadcrumb-bg.jpg"
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