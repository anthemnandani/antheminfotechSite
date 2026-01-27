"use client";

import React from "react";
import IntroTwo from "@/container/IntroSlider/IntroTwo";
import AboutFour from "@/container/About/AboutFour";
import Video from "@/container/Video/Video";
import AboutFive from "@/container/About/AboutFive";
import TestimonialContainer from "@/container/Testimonial/TestimonialContainer";
import CallToActionTwo from "@/container/CallToAction/CallToActionTwo";
import Script from "next/script";

// Server-side SEO metadata using SSG
// export async function generateMetadata() {
//   const title =
//     "Anthem Infotech: Trusted Custom Software & AI Partner Since 2011";
//   const description =
//     "Anthem Infotech, a leading Web Development Company in Chandigarh, has been delivering innovative Custom Software Development Services since 2011. Our commitment to client success and expertise in AI makes us your ideal technology partner.";

//   return {
//     title,
//     description,
//     keywords: [
//       "About Anthem Infotech",
//       "Software Development Company History",
//       "Web Development Company Chandigarh",
//       "IT Company Since 2011",
//       "Custom Software Development",
//       "AI Solutions Provider",
//       "Technology Partner",
//     ],
//     openGraph: {
//       title,
//       description,
//       url: "https://antheminfotech.com/about-us",
//       siteName: "Anthem Infotech",
//       type: "website",
//       locale: "en_IN",
//       images: [
//         {
//           url: "/images/og-image.png",
//           width: 1200,
//           height: 630,
//           alt: "Anthem Infotech About",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: ["/images/og-image.png"],
//     },
//     alternates: {
//       canonical: "https://antheminfotech.com/about-us",
//     },
//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }

const AboutUs = ({classOption}) => {
  return (
    <>
      {/* Structured Data - AboutPage */}
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Anthem Infotech",
            "description": "Leading Web Development and AI Software Company in Chandigarh, India since 2011",
            "url": "https://antheminfotech.com/about-us",
            "mainEntity": {
              "@type": "Organization",
              "name": "Anthem Infotech Private Limited",
              "foundingDate": "2011",
              "founder": {
                "@type": "Person",
                "name": "Hemant Gupta",
                "jobTitle": "CEO"
              },
              "description": "Leading Software Product Development and IT Solutions company"
            }
          }),
        }}
      />

   
      <IntroTwo />

      <AboutFour classOption="bg-white" />

 
      <Video />

  
      <AboutFive classOption="bg-white" />

  
  
      <CallToActionTwo classOption="bg-white" />
       
  <div className={`contact-form-section  ${classOption}`}>
     
    

    
        
            <TestimonialContainer classOption="background-1" />
          
         
       
  
    </div>
    </>
  );
};

export default AboutUs;


