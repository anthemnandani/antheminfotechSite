"use client";

import Link from "next/link";
import React from "react";
import FooterLinkItem from "./FooterLinkItem";

const Footer = () => {
const footerData = [
  {
    id: 1,
    title: "Quick Links",
    list: [
      {
        id: 1,
        text: "Home",
        url: "/",
      },
      {
        id: 2,
        text: "About Us",
        url: "/about-us",
      },
      {
        id: 3,
        text: "Services",
        url: "/services",
      },
      {
        id: 4,
        text: "Industries",
        url: "Home/Industries",
      },
      {
        id: 5,
        text: "Portfolio",
        url: "/OurWork",
      },
    ],
  },
  {
    id: 2,
    title: "\u00A0",
    list: [
      {
        id: 6,
        text: "Career",
        url: "/careers",
      },
      {
        id: 7,
        text: "Contact Us",
        url: "/contact-us",
      },
      {
        id: 8,
        text: " Get a Quote",
        url: "/request-a-quote",
      },
    ],
  },
];

  return (
    <div
  className="footer-section section footer-bg-color"
  style={{ paddingTop: "30px", paddingBottom: "20px" }}
>
  <div className="container">
    {/* Reduced row margin */}
    <div className="row mb-4">
      {/* Footer Logo & Contact Info */}
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
        <div className="footer-widget">
          <div className="footer-logo mb-2">
            <h5 className="text-white mb-2">
              Anthem Infotech Pvt. Ltd.
            </h5>
            <p className="text-color-p mb-2" style={{ fontSize: "14px" }}>
              #11, Floor 11, Sushma Infinium, Chandigarh - Ambala Highway,
              Near Best Price Zirakpur, Punjab – 140603 India.
            </p>
          </div>

          <div className="footer-widget-content">
            <div className="content mb-2">
              <p className="mb-1">
                <a href="tel:9815340123">
                  <i className="fas fa-phone me-2" />
                  +91 9815-34-0123
                </a>
              </p>
              <p className="mb-1">
                <a href="mailto:info@antheminfotech.com">
                  <i className="fas fa-envelope me-2" />
                  info@antheminfotech.com
                </a>
              </p>
            </div>

            {/* Social icons tighter */}
            <div
              className="footer-social-inline"
              style={{ display: "flex", gap: "10px" }}
            >
              <a href="https://x.com/antheminfotech" aria-label="Twitter" target="_blank">
                <i className="fa-brands fa-square-x-twitter" />
              </a>
              <a
                href="https://www.facebook.com/AnthemInfotech"
                aria-label="Facebook"  target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </a>
              <a
                href="https://www.instagram.com/antheminfotech"
                aria-label="Instagram" target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://in.linkedin.com/company/anthem-infotech-pvt-ltd-"
                aria-label="LinkedIn" target="_blank"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12 mb-3">
        <div className="row justify-content-end text-start">
          {footerData.map((item) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mb-2"
            >
              <FooterLinkItem data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="row">
      <div className="col">
        <div className="row copyright align-items-center py-2">
          <div className="col-sm-6 text-sm-start text-center">
            <p className="mb-0" style={{ fontSize: "13px" }}>
              &copy; {new Date().getFullYear()}–
              {new Date().getFullYear() + 1}{" "}
              <strong>Anthem Infotech Private Limited.</strong>
            </p>
          </div>
          <div className="col-sm-6 text-sm-end text-center">
            <p className="mb-0" style={{ fontSize: "13px" }}>
              Powered by <strong>Anthem Infotech Pvt. Ltd.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

//     <div className="footer-section section footer-bg-color">
//       <div className="container">
//         <div className="row mb-lg-14 mb-md-10 mb-6">
//           {/* Footer Logo & Contact Info  */}
//           <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-6">
//             <div className="footer-widget">
//               <div className="footer-logo">
//                 <h3 className="text-white">Anthem Infotech Pvt. Ltd.</h3>
//                 <p className="text-color-p">
//                   #11, Floor 11, Sushma Infinium, Chandigarh - Ambala Highway,
//                   Near Best Price Zirakpur, Punjab – 140603 India.
//                 </p>
//               </div>
//               <div className="footer-widget-content">
//                 <div className="content">
//                   <p>
//                     <a href="tel:9815340123">
//                       <i className="fas fa-phone me-2" />
//                       +91 9815-34-0123
//                     </a>
//                   </p>
//                   <p>
//                     <a href="mailto:info@antheminfotech.com">
//                       <i className="fas fa-envelope me-2" />
//                       info@antheminfotech.com
//                     </a>
//                   </p>
//                 </div>
//                 <div className="footer-social-inline">
//                   <a href="https://x.com/antheminfotech" aria-label="Twitter">
//                     <i className="fa-brands fa-square-x-twitter" />
//                   </a>
//                   <a
//                     href="https://www.facebook.com/AnthemInfotech"
//                     aria-label="Facebook"
//                   >
//                     <i className="fab fa-facebook-square" />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/antheminfotech"
//                     aria-label="Instagram"
//                   >
//                     <i className="fab fa-instagram" />
//                   </a>
//                   <a
//                     href="https://in.linkedin.com/company/anthem-infotech-pvt-ltd-"
//                     aria-label="LinkedIn"
//                   >
//                     <i className="fa-brands fa-linkedin" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer Links */}
//           <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12 mb-6">
//             <div className="row justify-content-end text-start">
//               {footerData.map((item) => (
//                 <div
//                   key={item.id}
//                   className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mb-6"
//                 >
//                   <FooterLinkItem data={item} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="row">
//           <div className="col">
//             <div className="row copyright d-flex justify-content-between">
//               <div className="col-sm-6 text-sm-start text-center">
//               <p>
//   &copy; {new Date().getFullYear()}–{new Date().getFullYear() + 1}{" "}
//   <strong>
//     Anthem Infotech Private Limited. All rights reserved.
//   </strong>
// </p>


//               </div>
//               <div className="col-sm-6 text-sm-end text-center">
//                 Powered by <strong>Anthem Infotech Pvt. Ltd.</strong>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
  );
};

export default Footer;
