
"use client";

import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import RequestQuote from "../../components/RequestQuote/RequestQuote";
import TestimonialQuote from "../../container/Testimonial/TestimonialQuote";

const RequestQuoteContainer = ({ classOption }) => {
  useEffect(() => {
    require("aos").init();
  }, []);

  return (
    <div className={`contact-form-section section ${classOption}`}>
      <div className="container">
        <div className="row">

          {/* Left Column - Testimonial */}
          <div className="col-lg-6">
            <TestimonialQuote classOption="bg-white" />
          </div>

          {/* Right Column - Request Quote Form */}
          <div className="col-lg-6 contact-form-area background-1 my-2">
            <SectionTitle
              headingOption="fz-32"
              title="Request a Free Quote"
              subTitle="Get a tailored quote within 24 hours. Our experts deliver efficient, scalable, and cost-effective solutions for your business."
            />
            <RequestQuote />
          </div>

        </div>
      </div>
    </div>
  );
};

export default RequestQuoteContainer;
