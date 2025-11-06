"use client";
import React from "react";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb";
import ServiceDesign from "../../../container/service/serviceDesign";
import ServiceGrid from "../../../components/Services/ServiceGrid";
import servicesData from "../../../data/services/services.json";
import SEO from "../../../components/SEO";

const WebMobileApps = () => {
  const filterservices = "Web & Mobile Apps";
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <>
      <SEO
        title="Anthem Infotech - Web & Mobile Apps"
        description="Anthem Infotech offers cutting-edge web and mobile app development services. We build scalable, user-friendly apps to help businesses succeed in the digital world."
        ogtitle="Anthem Infotech - Web & Mobile Apps"
        ogdescription="Anthem Infotech offers cutting-edge web and mobile app development services. We build scalable, user-friendly apps to help businesses succeed in the digital world."
      />

 

      <Breadcrumb
        image="images/bg/Web-Mobile-Apps.webp"
        title="Deliver <span class='text-color-span'>Seamless User Experiences</span> with Our <span class='text-color-span'>Responsive</span> and <span class='text-color-span'>Cross-Platform</span> Solutions"
        content="Home"
        contentTwo="Services"
        contentThree="Web & Mobile Apps"
      />

      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />

   
    </>
  );
};

export default WebMobileApps;
