"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import  Link from "next/link";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.jsx";

const IntroThree = () => {
  return (
  
    <BackgroundVideo
      videoSrc="/images/videos/contactus-bg.mp4"
      overlayColor="rgba(0,0,0,0.4)"
      className="intro-section bg-video"
    >
      <div className="container h-65 mt-0">
        <div className="row row-cols-lg-1 row-cols-1">
          <div className="col align-self-center">
            {/* <div className="intro-content-two headline-active text-center mt-md-8 mt-sm-8 mt-xs-8"> */}
                 <div className="intro-content-two headline-active text-center">
              <h1 className="title ah-headline pt-0">
                Contact Us For{" "}
                <span className="text-color-span">
                  <Typewriter
                    options={{
                      strings: [
                        "Results",
                        "Growth",
                        "Solutions",
                        "Innovation",
                        "Support",
                        "Insights",
                        "Expertise",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 110,
                    }}
                  />
                </span>
               Tailored to Your Brand & Business
              </h1>
              <div className="desc">
                <p>
                 We are a professional IT company based in India, helping brands strategise, design, develop digital solutions, and build custom software to accelerate business growth.
                </p>
              </div>
              <Link
                href={process.env.NEXT_PUBLIC_URL + "/request-a-quote"}
                className="btn btn btn-bottom"
                data-hover="Get Started"
                  style={{ background: "#0e6497" }}
              >
                Get Started
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_URL + "/services"}
                className="btn btn btn-bottom"
                data-hover="Learn More"
                  style={{ background: "#0e6497" }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default IntroThree;













