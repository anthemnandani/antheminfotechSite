import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import "react-modal-video/scss/modal-video.scss";
import "./assets/scss/style.scss";
import "./globals.css";
import "../app/assets/scss/style.scss";
import "../app/assets/css/custom.css";
import "../app/assets/css/plugins/animate.css";
import "../app/assets/css/font-awesome/css/all.css";
import "../app/assets/css/font-awesome/css/fontawesome.min.css";
import Header from "../partials/header/Header";
import Footer from "../components/FooterComponent/Footer";
import Script from "next/script";

export const metadata = {
  title: "Anthem Infotech - SOFTWARE PRODUCT DEVELOPMENT AND MAINTENANCE COMPANY",
  description: "Anthem Infotech specializes in end-to-end software product development, IT consulting, and digital solutions for businesses worldwide.",
  keywords: "designing services, ASP.net Development, Search Engine Optimization, custom Software Development, Desktop Applications, windows applications, SQL Server, application development,web development,mobile application development,iOS mobile applications,custom business solutions,Australian web development, website development australia, web design company australia, web development company in australia, website designing company in sydney, SEO companies india, Mobile app development company india, web development companies india, web design company india, custom software development companies",
  authors: [
    { name: "Hemant Gupta - CEO - Anthem Infotech Private Limited", url: "https://antheminfotech.com" }
  ],
  creator: "Hemant Gupta - CEO - Anthem Infotech Private Limited",
  themeColor: "#000000",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/logo192.png",
  },
  openGraph: {
    title: "Anthem Infotech - Software Product Development & IT Solutions",
    description: "Providing software product development, IT consulting, and digital solutions to businesses worldwide.",
    url: "https://antheminfotech.com",
    siteName: "Anthem Infotech",
    images: [
      {
        url: "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "Anthem Infotech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AnthemInfotech",
    title: "Anthem Infotech - Software Product Development & IT Solutions",
    description: "Providing software product development, IT consulting, and digital solutions to businesses worldwide.",
    images: [
      "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp"
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap" 
          as="style" 
        />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Muli:wght@400;500;600;700&display=swap" 
          as="style" 
        />
        <link 
          rel="preload" 
          as="image" 
          href="https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp"
        />
        
        {/* Google Fonts with async loading */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          id="rubik-font"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Muli:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          id="muli-font"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function enableFont(fontId) {
                  var font = document.getElementById(fontId);
                  if (font) {
                    font.onload = function() { this.media = 'all'; };
                    font.addEventListener('load', function() { this.media = 'all'; });
                    // Fallback: if already loaded, enable immediately
                    if (font.sheet) {
                      font.media = 'all';
                    }
                  }
                }
                enableFont('rubik-font');
                enableFont('muli-font');
              })();
            `,
          }}
        />
        
        {/* Fallback for fonts */}
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Muli:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        
        {/* Critical CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical font fallback */
            .section-title .title {
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
            /* Prevent layout shift */
            .section-title {
              min-height: 42px;
            }
          `
        }} />
      </head>
      <body className="antialiased">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YGDQN3RN6W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YGDQN3RN6W');
          `}
        </Script>
        
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
