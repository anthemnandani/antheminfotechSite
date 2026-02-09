export const metadata = {
  title: "Web Development Company in Chandigarh ∣ Custom Software Development Services in India",
  description: "Anthem Infotech is a trusted Web Development and Custom Software Development Company in Chandigarh, India. We specialize in AI solutions, Full Stack Development, and scalable enterprise software for businesses worldwide. Leading IT solutions provider since 2011.",
  keywords: [
    "Web Development Company in Chandigarh",
    "AI Software Development",
    "Custom Software Development India",
    "Full Stack Development Services",
    "Enterprise Application Development",
    "Anthem Infotech",
    "Software Development Company India",
    "Chandigarh IT Solutions",
    "Mobile App Development",
    "IT Consulting Services",
  ],
  openGraph: {
    title: "Anthem Infotech ∣ Leading Web Development & AI Software Company in Chandigarh, India",
    description: "Partner with Anthem Infotech — experts in Web Development, AI, and Custom Software Solutions. Explore how we help businesses transform with innovation and technology.",
    url: "https://antheminfotech.com/",
    siteName: "Anthem Infotech",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anthem Infotech - Web & AI Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthem Infotech ∣ Web & AI Software Development Experts in Chandigarh",
    description: "Innovative Web Development and Custom AI Software Solutions from Anthem Infotech — driving digital transformation for clients in India and beyond.",
    images: ["/images/og-image.png"],
    creator: "@antheminfotech",
  },
  alternates: {
    canonical: "https://antheminfotech.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import IntroSlider from "../container/IntroSlider/IntroSlider";
import HomeAbout from "../components/About/HomeAbout.jsx";
import Funfact from "../container/Funfact/Funfact";
import ServiceIconBox from "../container/service/ServiceIconBox";
import HomeSuccess from "../components/Success/HomeSuccess.jsx";
import CallToAction from "../container/CallToAction/CallToAction";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import BrandContainer from "../container/Brand/BrandContainer";
import ScrollToTop from "../components/ScrollToTop";
import Script from "next/script";


export default function HomePage() {

  return (
    <>
      {/* Structured Data - Service */}
      <Script
        id="home-page-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Software Development Services",
            "provider": {
              "@type": "Organization",
              "name": "Anthem Infotech Private Limited"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Software Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development",
                    "description": "Custom web development services for businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Solutions",
                    "description": "Artificial Intelligence solutions and consulting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Software Development",
                    "description": "Tailored software solutions for your business needs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "iOS and Android mobile application development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Software",
                    "description": "Scalable enterprise software solutions"
                  }
                }
              ]
            }
          }),
        }}
      />
    
      <main>
        <IntroSlider />
        <HomeAbout classOption="bg-white" />
        {/* <Funfact classOption="bg-white" /> */}
          <BrandContainer classOption=" custom-background-2" />
        <ServiceIconBox classOption="background-1" />
         <CallToAction />
        <HomeSuccess classOption="bg-white" />
        <div style={{ display: "none" }}>
  <ContactInformation />
</div>

        {/* <ContactInformation classOption="bg-white" />      */}
      </main>
      <ScrollToTop />                                   
    </>
  );
}
