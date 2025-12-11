"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import  Link from "next/link";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.jsx";

const IntroThree = () => {
  return (
    // <div
    //   className="intro-section section overlay"
    //   style={{
    //     backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-image/Custom.webp)`,
    //   }}
    // >
    <BackgroundVideo
      videoSrc="/images/videos/contactus-bg.mp4"
      overlayColor="rgba(0,0,0,0.4)"
      className="intro-section bg-video"
    >
      <div className="container">
        <div className="row row-cols-lg-1 row-cols-1">
          <div className="col align-self-center">
            <div className="intro-content-two headline-active text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
              <h1 className="title ah-headline">
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
              >
                Get Started
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_URL + "/Home/Services"}
                className="btn btn btn-bottom"
                data-hover="Learn More"
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
















// "use client";
// import React, { useState, useEffect } from "react";
// import Typewriter from "typewriter-effect";
// import Link from "next/link";
// import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.jsx";

// const IntroThree = () => {
//   const [isMounted, setIsMounted] = useState(false);

//   // ✅ Prevent hydration mismatch flicker
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) return null;

//   return (
//     <BackgroundVideo
//       videoSrc="/images/videos/contactus-bg.mp4"
//       overlayColor="rgba(0,0,0,0.4)"
//       className="intro-section bg-video"
//     >
//       <div className="container text-center">
//         <h1 className="title ah-headline text-white">
//           Contact Us For{" "}
//           <span className="text-color-span">
//             <Typewriter
//               options={{
//                 strings: [
//                   "Results",
//                   "Growth",
//                   "Solutions",
//                   "Innovation",
//                   "Support",
//                   "Insights",
//                   "Expertise",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 delay: 80,
//                 deleteSpeed: 60,
//               }}
//             />
//           </span>{" "}
//           For Your Brands & Businesses
//         </h1>

//         <p className="mt-4">
//           We are an IT company based in India. We think strategy, craft design,
//           develop digital, and create software to grow your brand and business.
//         </p>

//         <div className="flex justify-center gap-4 mt-6">
//           <Link href="/request-a-quote" className="btn btn-bottom" data-hover="Get Started">
//             Get Started
//           </Link>
//           <Link href="/Home/Services" className="btn btn-bottom" data-hover="Learn More">
//             Learn More
//           </Link>
//         </div>
//       </div>
//     </BackgroundVideo>
//   );
// };

// export default IntroThree;




















// import React from "react";
// import Typewriter from "typewriter-effect";
// import Link from "next/link";
// import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo.jsx";

// const IntroThree = () => {
//   return (
//     <BackgroundVideo
//       videoSrc="/images/videos/contactus-bg.mp4"
//       overlayColor="rgba(0,0,0,0.4)"
//       className="intro-section bg-video"
//     >
//       <div className="container">
//         <div className="row row-cols-lg-1 row-cols-1 align-self-center">
//           <div className="col">
//             <div className="intro-content-two headline-active text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
//               <h1 className="title ah-headline">
//                 Contact Us For{" "}
//                 <span className="text-color-span">
//                   <Typewriter
//                     options={{
//                       strings: [
//                         "Results",
//                         "Growth",
//                         "Solutions",
//                         "Innovation",
//                         "Support",
//                         "Insights",
//                         "Expertise",
//                       ],
//                       autoStart: true,
//                       loop: true,
//                       deleteSpeed: 110,
//                     }}
//                   />
//                 </span>{" "}
//                 For Your Brands & Businesses
//               </h1>
//               <div className="desc">
//                 <p>
//                   We are an IT company based in India. We think strategy, craft
//                   design, develop digital, and create software to grow your
//                   brand and business.
//                 </p>
//               </div>
// <Link
//   href="/request-a-quote"
//   className="btn btn btn-bottom"
//   data-hover="Get Started"
// >
//   Get Started
// </Link>

// <Link
//   href="/Home/Services"
//   className="btn btn btn-bottom"
//   data-hover="Learn More"
// >
//   Learn More
// </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </BackgroundVideo>
//   );
// };

// export default IntroThree;