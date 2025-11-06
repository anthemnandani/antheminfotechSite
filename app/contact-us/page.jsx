"use client"; 

import React from "react";

import SEO from "../../components/SEO";
import IntroThree from "../../container/IntroSlider/IntroThree";
import ContactInformation from "../../container/ContactInformation/ContactInformation";
import GoogleMap from "../../container/Map/GoogleMap";
import ContactFromContainer from "../../container/ContactFromContainer/ContactFromContainer";


const ContactUs = () => {
  return (
    <>
     <SEO
  title="Contact Anthem Infotech - Web Development & AI Experts in Chandigarh"
  description="Ready to start your project? Contact the leading Custom Software Development and Web Development Company in Chandigarh for a free consultation. Talk to our AI experts today!"
  ogtitle="Contact Anthem Infotech - Web Development & AI Experts in Chandigarh"
  ogdescription="Ready to start your project? Contact the leading Custom Software Development and Web Development Company in Chandigarh for a free consultation. Talk to our AI experts today!"
/>
      <IntroThree />
      <ContactInformation classOption="bg-white" />
      <GoogleMap classOption="bg-white" />
      <ContactFromContainer classOption="background-1" />
    
    </>
  );
};

export default ContactUs;