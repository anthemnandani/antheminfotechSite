
"use client"

// pages/services/custom-software.js
import React from "react";
import SEO from "../../../components/SEO";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb";
import ServiceDesign from "../../../container/service/serviceDesign";
import ServiceGrid from "../../../components/Services/ServiceGrid";
import servicesData from "../../../data/services/services.json";

const CustomSoftware = () => {
  // Filter service by title
  const filterservices = "Custom Software Development";
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <>
      <SEO
        title="Anthem Infotech - Custom Software Development"
        description="Optimize your operations with Anthem Infotech’s bespoke software development solutions. We design custom software for efficiency, scalability, and seamless web and mobile app integration."
        ogtitle="Anthem Infotech - Custom Software Development"
        ogdescription="Optimize your operations with Anthem Infotech’s bespoke software development solutions. We design custom software for efficiency, scalability, and seamless web and mobile app integration."
      />

      <Breadcrumb
        image="/images/bg/Custom-Software.webp"
        title="<span class='text-color-span'>Optimise</span> Your Operations with <span class='text-color-span'>Bespoke Software</span> Designed for <span class='text-color-span'>Efficiency</span> and <span class='text-color-span'>Scalability</span> Web & Mobile Apps"
        content="Home"
        contentTwo="Services"
        contentThree="Custom Software Development"
      />

      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />

    
    </>
  );
};

export default CustomSoftware;
