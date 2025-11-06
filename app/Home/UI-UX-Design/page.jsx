
"use client"
import React from "react";
import SEO from "../../../components/SEO.jsx";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb.js";
import ServiceDesign from "../../../container/service/serviceDesign.js";
import servicesData from "../../../data/services/services.json";
import ServiceGrid from "../../../components/Services/ServiceGrid.jsx";

const UIUXDesign = () => {
  let filterservices = "UI/UX Design"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - UI/UX Design"
        description="Discover Anthem Infotech’s expert UI/UX design services. We create intuitive, user-centered designs that enhance the user experience and drive business success."
        ogtitle="Anthem Infotech - UI/UX Design"
        ogdescription="Discover Anthem Infotech’s expert UI/UX design services. We create intuitive, user-centered designs that enhance the user experience and drive business success."
      />

   

      {/* ✅ SEO-Friendly H1 Tag */}
      <h1 className="text-3xl font-bold text-center mt-6 mb-4">
        UI/UX Design Services | Anthem Infotech
      </h1>

      <Breadcrumb
        image="images/bg/ui-ux.webp"
        title="<span class='text-color-span'>Craft Engaging</span> User Experiences with <span class='text-color-span'>Intuitive</span> and Visually Appealing <span class='text-color-span'>Digital Interfaces</span>"
        content="Home"
        contentTwo="Services"
        contentThree="UI/UX Design"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
     
    </React.Fragment>
  );
};

export default UIUXDesign;
