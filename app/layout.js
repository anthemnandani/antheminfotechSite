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
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  metadataBase: new URL("https://antheminfotech.com"),
  title: {
    default: "Anthem Infotech - SOFTWARE PRODUCT DEVELOPMENT AND MAINTENANCE COMPANY",
    template: "%s | Anthem Infotech",
  },
  description: "Anthem Infotech specializes in end-to-end software product development, IT consulting, and digital solutions for businesses worldwide. Leading Web Development Company in Chandigarh, India since 2011.",
  keywords: [
    "designing services",
    "ASP.net Development",
    "Search Engine Optimization",
    "custom Software Development",
    "Desktop Applications",
    "windows applications",
    "SQL Server",
    "application development",
    "web development",
    "mobile application development",
    "iOS mobile applications",
    "custom business solutions",
    "Australian web development",
    "website development australia",
    "web design company australia",
    "web development company in australia",
    "website designing company in sydney",
    "SEO companies india",
    "Mobile app development company india",
    "web development companies india",
    "web design company india",
    "custom software development companies",
    "AI Software Development",
    "Full Stack Development",
    "Enterprise Software Development",
    "Chandigarh web development",
    "India software company",
  ],
  authors: [
    { name: "Hemant Gupta - CEO - Anthem Infotech Private Limited", url: "https://antheminfotech.com" }
  ],
  creator: "Hemant Gupta - CEO - Anthem Infotech Private Limited",
  publisher: "Anthem Infotech Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
  canonical: "https://antheminfotech.com",
  languages: {
    "en-in": "https://antheminfotech.com/",
    "en-us": "https://antheminfotech.com/usa",
    "en-au": "https://antheminfotech.com/australia",
    "en-ca": "https://antheminfotech.com/canada",
    "en-nz": "https://antheminfotech.com/new-zealand",
    "x-default": "https://antheminfotech.com/",
  },
},

  category: "Technology",
  classification: "Software Development Company",
  themeColor: "#000000",
  colorScheme: "dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/images/logo/logo.webp", sizes: "32x32", type: "image/webp" },
      { url: "/images/logo/logo.webp", sizes: "16x16", type: "image/webp" },
    ],
    shortcut: "/images/favicon.png",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://antheminfotech.com",
    siteName: "Anthem Infotech",
    title: "Anthem Infotech - Software Product Development & IT Solutions",
    description: "Providing software product development, IT consulting, and digital solutions to businesses worldwide. Leading Web Development Company in Chandigarh, India since 2011.",
    images: [
      {
        url: "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "Anthem Infotech - Software Product Development & IT Solutions",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AnthemInfotech",
    creator: "@AnthemInfotech",
    title: "Anthem Infotech - Software Product Development & IT Solutions",
    description: "Providing software product development, IT consulting, and digital solutions to businesses worldwide.",
    images: [
      {
        url: "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp",
        alt: "Anthem Infotech Logo",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  other: {
    "geo.region": "IN-PB",
    "geo.placename": "Chandigarh",
    "geo.position": "30.7333;76.7794",
    "ICBM": "30.7333, 76.7794",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
      
  {/* existing head content */}

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
        
        {/* Structured Data - Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Anthem Infotech Private Limited",
              "alternateName": "Anthem Infotech",
              "url": "https://antheminfotech.com",
              "logo": "https://res.cloudinary.com/dzmfvr3dm/image/upload/images/logo/logo.webp",
              "description": "Leading Software Product Development and IT Solutions company specializing in Custom Software Development, Web Development, AI Solutions, and Enterprise Software since 2011.",
              "foundingDate": "2011",
              "founder": {
                "@type": "Person",
                "name": "Hemant Gupta",
                "jobTitle": "CEO"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chandigarh",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "areaServed": "Worldwide",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/anthem-infotech",
                "https://twitter.com/AnthemInfotech",
                "https://www.facebook.com/antheminfotech"
              ],
              "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "knowsAbout": [
                "Software Development",
                "Web Development",
                "AI Solutions",
                "Custom Software Development",
                "Mobile App Development",
                "Enterprise Software",
                "IT Consulting"
              ]
            }),
          }}
        />
        
        {/* Structured Data - WebSite */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Anthem Infotech",
              "url": "https://antheminfotech.com",
              "description": "Software Product Development and IT Solutions Company",
              "publisher": {
                "@type": "Organization",
                "name": "Anthem Infotech Private Limited"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://antheminfotech.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        
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
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
