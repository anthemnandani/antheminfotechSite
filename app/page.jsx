export const metadata = {
  title:
    "Web Development Company in Chandigarh ∣ Custom Software Development Services in India",
  description:
    "Anthem Infotech is a trusted Web Development and Custom Software Development Company in Chandigarh, India. We specialize in AI solutions, Full Stack Development, and scalable enterprise software for businesses worldwide.",
  keywords: [
    "Web Development Company in Chandigarh",
    "AI Software Development",
    "Custom Software Development India",
    "Full Stack Development Services",
    "Enterprise Application Development",
    "Anthem Infotech",
  ],
  openGraph: {
    title:
      "Anthem Infotech ∣ Leading Web Development & AI Software Company in Chandigarh, India",
    description:
      "Partner with Anthem Infotech — experts in Web Development, AI, and Custom Software Solutions. Explore how we help businesses transform with innovation and technology.",
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
    title:
      "Anthem Infotech ∣ Web & AI Software Development Experts in Chandigarh",
    description:
      "Innovative Web Development and Custom AI Software Solutions from Anthem Infotech — driving digital transformation for clients in India and beyond.",
    images: ["/images/og-image.png"],
    creator: "@antheminfotech",
  },
  alternates: {
    canonical: "https://antheminfotech.com/",
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


export default function HomePage() {

  return (
    <>
    
      <main>
        <IntroSlider />
        <HomeAbout classOption="bg-white" />
        <Funfact classOption="bg-white" />
        <ServiceIconBox classOption="background-1" />
        <HomeSuccess classOption="bg-white" />
        <CallToAction />
        <ContactInformation classOption="background-1" />
        <BrandContainer classOption="section-padding bg-white" />
      </main>
      <ScrollToTop />
    </>
  );
}
