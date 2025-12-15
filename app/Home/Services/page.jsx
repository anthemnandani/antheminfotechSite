// app/services/page.jsx
"use client";

import React from "react";
import SEO from "../../../components/SEO";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb";
import ServiceIconBoxTwo from "../../../container/service/ServiceIconBoxTwo";
import ServiceSkill from "../../../container/service/ServiceSkill";
import AboutSix from "../../../container/About/AboutSix";
import FunfactTwo from "../../../container/Funfact/FunfactTwo";
import ContactInformationThree from "../../../container/ContactInformation/ContactInformationThree";
import ScrollToTop from "../../../components/ScrollToTop";
import servicesData from "../../../data/services/services.json";


const ServicePage = () => {
  const filterservices = "Custom Software Development"; // Title to filter
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <>
      {/* SEO Metadata */}
     <SEO
  title="Custom Software Development Services ∣ AI & Web Development"
  description="We are a leading Web Development Company and expert provider of Custom Software Development Services in India. Explore our expertise in AI Coding, Full Stack, and enterprise solutions."
  ogtitle="Custom Software Development Services ∣ AI & Web Development"
  ogdescription="We are a leading Web Development Company and expert provider of Custom Software Development Services in India. Explore our expertise in AI Coding, Full Stack, and enterprise solutions."
/>


     

      {/* Breadcrumb */}
      <Breadcrumb
        image="/assets/images/bg/breadcrumb-bg-four.webp"
        title="End-to-End Partner in <span class='text-color-span'>Developing, Scaling</span>, and <span class='text-color-span'>Transforming</span> Businesses with Technology"
        content="Home"
        contentTwo="Services"
      />

      {/* Service Sections */}
      <ServiceIconBoxTwo classOption="bg-white" />
      <ServiceSkill classOption="background-1" />
      <AboutSix classOption="bg-white" />
      <FunfactTwo classOption="background-1" />
      <ContactInformationThree classOption="bg-white" />


      {/* Scroll to Top */}
      <ScrollToTop />
    </>
  );
};

export default ServicePage;
