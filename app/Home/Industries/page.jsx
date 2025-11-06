
import Breadcrumb from "@/container/Breadcrumb/Breadcrumb";
import ReactTabs from "@/components/Tabs/Tab";

// Dynamic page props for SEO
export async function generateMetadata({ searchParams }) {
  // Static SEO metadata for Industries page
  const titleTag = "Industries We Serve ∣ AI & Custom Software Development Company in India";
  const metaDescription =
    "Explore how Anthem Infotech delivers Custom Software Development and AI Solutions across multiple industries. Partner with a trusted Web Development Company in Chandigarh, India.";

  return {
    title: titleTag,
    description: metaDescription,
    openGraph: {
      title: titleTag,
      description: metaDescription,
      url: "https://antheminfotech.com/Home/Industries",
      siteName: "Anthem Infotech",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Anthem Infotech",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titleTag,
      description: metaDescription,
      images: ["/images/og-image.png"],
    },
  };
}

const IndustriesPage = ({ searchParams }) => {
  const industryType = searchParams?.Industrytype || null;

  return (
    <>
    
      <Breadcrumb
        image="/images/Industries/industryHeader.webp"
        title={`We Work With <span class='text-color-span'>Bold Brands</span> That We <span class='text-color-span'>Believe</span> in <span class='text-color-span'>${
          industryType || ""
        }</span>`}
        content="Home"
        contentTwo="Industries"
      />
      <ReactTabs industryType={industryType} />
   
     
    </>
  );
};

export default IndustriesPage;
