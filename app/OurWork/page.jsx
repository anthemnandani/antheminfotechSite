
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import WorkContainer from "../../container/Work/WorkContainer";
import Script from "next/script";

// Server-side SSG metadata
export async function generateMetadata() {
  const title = "Our Portfolio ∣ Custom Web & AI App Development Projects in India";
  const description =
    "Discover Anthem Infotech's successful projects in Web and AI App Development. From Custom Software to Chatbots, explore how our Chandigarh-based team delivers innovative digital solutions.";

  return {
    title,
    description,
    keywords: [
      "Anthem Infotech Portfolio",
      "Web Development Projects",
      "AI App Development",
      "Custom Software Projects",
      "Project Showcase",
      "Case Studies",
      "Success Stories",
    ],
    openGraph: {
      title,
      description,
      url: "https://antheminfotech.com/OurWork",
      siteName: "Anthem Infotech",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Anthem Infotech Portfolio",
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
      canonical: "https://antheminfotech.com/OurWork",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}


export default function Portfolio() {
  return (
    <>
      {/* Structured Data - CollectionPage */}
      <Script
        id="portfolio-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Anthem Infotech Portfolio",
            "description": "Showcase of successful web and AI development projects",
            "url": "https://antheminfotech.com/OurWork",
            "about": {
              "@type": "Thing",
              "name": "Software Development Projects",
              "description": "Web Development, AI Solutions, and Custom Software Projects"
            }
          }),
        }}
      />
      
      <Breadcrumb
        image="/images/bg/portfoliobg.webp"
        title={`A Glimpse Into Our Recent <span class='text-color-span'>Success Stories</span> and <span class='text-color-span'>Innovative Solutions</span>`}
        content="Home"
        contentTwo="Portfolio"
      />
      <WorkContainer classOption="bg-white" />
    
    </>
  );
}