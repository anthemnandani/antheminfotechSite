import Head from "next/head";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import RequestQuoteContainer from "../../container/RequestQuoteContainer/RequestQuoteContainer";

export default function RequestQuote() {
  return (
    <>
      <Head>
        <title>Anthem Infotech - Request A Quote</title>
        <meta
          name="description"
          content="Get a personalized quote for your project needs. Anthem Infotech offers tailored solutions for businesses of all sizes. Reach out to us today for a quote and take the first step towards growth."
        />
        <meta property="og:title" content="Anthem Infotech - Request A Quote" />
        <meta
          property="og:description"
          content="Get a personalized quote for your project needs. Anthem Infotech offers tailored solutions for businesses of all sizes. Reach out to us today for a quote and take the first step towards growth."
        />
      </Head>

    <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "Request A Quote",
        url: "https://antheminfotech.com/request-a-quote",
      },
    ]}
  /> 
      <Breadcrumb
        image="/images/bg/breadcrumb-bg-three.webp"
        title="Request A <span class='text-color-span'> Quote</span>"
        content="Home"
        contentTwo="Request A Quote"
      />
      <RequestQuoteContainer classOption="bg-white" />
  
    </>
  );
}
























// import React from "react";
// import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
// import RequestQuoteContainer from "../../container/RequestQuoteContainer/RequestQuoteContainer.js";

// const RequestQuote = () => {
//   return (
//     <React.Fragment>
//       <Breadcrumb
//         image="images/bg/breadcrumb-bg-three.jpg"
//         title="Request A Quote"
//         content="Home"
//         contentTwo="Request A Quote"
//       />
//       <RequestQuoteContainer classOption="bg-white" />
 
//     </React.Fragment>
//   );
// };

// export default RequestQuote;
