
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import WorkContainer from "../../container/Work/WorkContainer";

// Server-side SSG metadata
export async function generateMetadata() {
  const title = "Our Portfolio ∣ Custom Web & AI App Development Projects in India";
  const description =
    "Discover Anthem Infotech’s successful projects in Web and AI App Development. From Custom Software to Chatbots, explore how our Chandigarh-based team delivers innovative digital solutions.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://antheminfotech.com/Portfolio",
      siteName: "Anthem Infotech",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Anthem Infotech Portfolio",
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


export default function Portfolio() {
  return (
    <>
      
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