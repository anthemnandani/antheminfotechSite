

"use client";

import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import RequestQuote from "../../components/RequestQuote/RequestQuote";
import TestimonialContainer from "../../container/Testimonial/TestimonialContainer";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
const RequestQuoteContainer = ({ classOption }) => {
  useEffect(() => {
    require("aos").init();
  }, []);

  return (
    <>
    <Breadcrumb
    image="images/bg/testimonials.webp"
       title="What <span class='text-color-span'>Our Clients</span> Say About Their<span class='text-color-span'> Experience</span> with Us"
       content="Home"
       contentTwo="Testimonials"
     />
    <div className={`contact-form-section  ${classOption}`}>
     
    

          {/* Left Column - Testimonial */}
        
            <TestimonialContainer classOption="bg-white" />
          
         
       
  
    </div>
    
    </>
    
  );
};

export default RequestQuoteContainer;
