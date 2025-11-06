
import React from "react";
import IntroTwo from "@/container/IntroSlider/IntroTwo";
import AboutFour from "@/container/About/AboutFour";
import Video from "@/container/Video/Video";
import AboutFive from "@/container/About/AboutFive";
import TestimonialContainer from "@/container/Testimonial/TestimonialContainer";
import CallToActionTwo from "@/container/CallToAction/CallToActionTwo";
// Server-side SEO metadata using SSG
export async function generateMetadata() {
  const title =
    "Anthem Infotech: Trusted Custom Software & AI Partner Since 2011";
  const description =
    "Anthem Infotech, a leading Web Development Company in Chandigarh, has been delivering innovative Custom Software Development Services since 2011. Our commitment to client success and expertise in AI makes us your ideal technology partner.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://antheminfotech.com/about-us",
      siteName: "Anthem Infotech",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Anthem Infotech About",
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

const AboutUs = () => {
  return (
    <>
      

      {/* Intro Section with Background Video */}
      <IntroTwo />

      <AboutFour classOption="bg-white" />

      {/* Video Section */}
      <Video />

      {/* About Images / Parallax Section */}
      <AboutFive classOption="bg-white" />

      {/* Testimonials */}
      <TestimonialContainer classOption="background-1" />

      {/* Call to Action */}
      <CallToActionTwo classOption="bg-white" />
    </>
  );
};

export default AboutUs;
