import Footer from "@/common/Footer";
import { Helmet } from "react-helmet-async";

// Hero Section  Import
import HeroImage from "../assets/images/Placeholder.png";
import ArrowOne from "../assets/images/ArrowOne.png";
import ArrowTwo from "../assets/images/ArrowTwo.png";
import WordPullUp from "@/components/ui/word-pull-up";
import { FadeText } from "@/components/ui/fade-text";
import { BlurIn } from "@/components/ui/blur-in";
import { Link } from "react-router-dom";

// Logo Ticker Import
// import LogoOne from "../assets/images/OneLogo.png";
import LogoTwo from "../assets/images/TwoLogo.png";
// import LogoThree from "../assets/images/ThreeLogo.png";
// import LogoFour from "../assets/images/FourLogo.png";
// import LogoFive from "../assets/images/FiveLogo.png";
// import LogoSix from "../assets/images/SixLogo.png";
import ametek from "../assets/images/ametek.png"
import Ansell from "../assets/images/Ansell.png"
import Daiki from "../assets/images/Daiki.png"
import Aqua from "../assets/images/Aqua.png"
import honeywell from "../assets/images/honeywell.png"
import Ikea from "../assets/images/Ikea.png"
import LeaderArt from "../assets/images/LeaderArt.png"
import Misumi from "../assets/images/Misumi.png"
import nobilia from "../assets/images/nobilia.png"
import Panasonic from "../assets/images/Panasonic.png"
import cuty from "../assets/images/cuty.png"
import raumplus from "../assets/images/raumplus.png"
import remsa from "../assets/images/remsa.png"
import SEDOVINA from "../assets/images/SEDOVINA.png"
import Thantawan from "../assets/images/Thantawan.png"
import titus from "../assets/images/titus.png"



import { motion } from "motion/react";

// Services Import
import BISImage from "../assets/images/BIS.jpg";
import CDSCO from "../assets/images/CDSCO.jpg";
import BISCRS from "../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../assets/images/EPRCertificate.jpg";
import LMPC from "../assets/images/LMPC.jpg";
import ISIMark from "../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";

// Contact Import
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import ContactUs from "../assets/images/ContactUs.png";
import ContactChild from "../assets/images/ContactChild.png";
import { Button } from "@/components/ui/button";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// Latest New Import
import { useEffect } from "react";
import { useAnimationControls } from "framer-motion";

// Client Import
import TestimonialImage from "../assets/images/TestimonialImage.png";
import TestimonialImageSecond from "../assets/images/TestimonialImageSecond.png";
import TestimonialImageThree from "../assets/images/TestimonialImageThree.png";
import Vector from "../assets/images/Vector.png";
import { IconArrowNarrowRight } from "@tabler/icons-react";

// Countries Import
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Certification Import
import CertificationImage from "../assets/images/certone.jpg";
import CertificationImageTwo from "../assets/images/certtwo.jpg";

import Thailand from "../assets/images/Thailand.png";
import Vietnam from "../assets/images/Vietnam.png";
import Canada from "../assets/images/Canada.png";
import China from "../assets/images/China.png";
import Italy from "../assets/images/Italy.png";
import Colombia from "../assets/images/Colombia.png";
import Qatar from "../assets/images/Qatar.png";
import India from "../assets/images/India.png";
import Indonesia from "../assets/images/Indonesia.png";
import Malaysia from "../assets/images/Malaysia.png";
import Russia from "../assets/images/Russia.png";
import Bahrain from "../assets/images/Bahrain.png";
import UAE from "../assets/images/UAE.png";
import Nepal from "../assets/images/Nepal.png";
import { Marquee } from "@/components/magicui/marquee";
import SriLanka from "../assets/images/SriLanka.png";
import France from "../assets/images/France.png";
import Germany from "../assets/images/Germany.png";
import Sweden from "../assets/images/Sweden.png";
import Slovenia from "../assets/images/Slovenia.png";
import Austria from "../assets/images/Austria.png";
import USA from "../assets/images/USA.png";
import Denmark from "../assets/images/Denmark.png";
import { OurServices } from "./About";

// import { ImagesSlider } from "@/components/ui/images-slider";



// Audit Marquee 
import BahrainAudit from "../assets/auditImages/Bahrain.png"
import IndonesiaAudit from "../assets/auditImages/Indonesia.png"
import ItalyAudit from "../assets/auditImages/Italy-2.png"
import MalaysiaAudit from "../assets/auditImages/Malaysia.png"
import SloveniaAudit from "../assets/auditImages/Slovenia.png"
import ThailandAudit from "../assets/auditImages/Thailand.png"
import Vietnam2Audit from "../assets/auditImages/Vietnam-2.png"
import Vietnam3Audit from "../assets/auditImages/Vietnam-3.png"
import Vietnam4Audit from "../assets/auditImages/Vietnam-4.png"
import VietnamAudit from "../assets/auditImages/Vietnam.png"


// Seminar & Exhibition Images
import Exhibition1 from "../assets/seminarImages/Exhibition-1.jpg"
import Exhibition2 from "../assets/seminarImages/Exhibition-2.jpg"
import Exhibition3 from "../assets/seminarImages/Exhibition-3.jpg"
import Seimar82 from "../assets/seminarImages/Seimar-8-2.png"
import Seminar4 from "../assets/seminarImages/Seminar-4.jpg"
import Seminar5 from "../assets/seminarImages/Seminar-5.jpg"
import Seminar62 from "../assets/seminarImages/Seminar-6-2.jpg"
import Seminar6 from "../assets/seminarImages/Seminar-6.jpg"
import Seminar72 from "../assets/seminarImages/Seminar-7-2.jpg"
import Seminar7 from "../assets/seminarImages/Seminar-7.jpg"
import Seminar8 from "../assets/seminarImages/Seminar-8.png"
import Seminar9 from "../assets/seminarImages/Seminar-9.jpg"
import Seminar102 from "../assets/seminarImages/Seminar-10-2.jpg"
import Seminar103 from "../assets/seminarImages/Seminar-10-3.jpg"
import Seminar10 from "../assets/seminarImages/Seminar-10.jpg"
import Seminar11 from "../assets/seminarImages/Seminar-11.jpg"
import Seminar12 from "../assets/seminarImages/Seminar-12.jpg"


const Home = () => {
  return (
    <main className="w-full">
      <Helmet>
        <title>
          BIS Certification| FMCS | ISI Mark | LMPC | EPR | CDSCO - Sun
          Certifications & Engineers
        </title>
        <meta
          name="description"
          content="Sun Certifications is a consulting firm in India for certifications like BIS certification, CDSCO, LMPC certificate, EPR certificate, FMCS license, PESO license. Trusted since 2013."
        />
        <meta
          name="keywords"
          content="BIS certification, CDSCO, LMPC certificate, EPR certificate, FMCS license, PESO license, ISI mark, BIS registration"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS Certification Certifications, LMPC certificate, EPR Certificate, CDSCO"
        />
        <meta
          property="og:description"
          content="Sun Certifications is the best BIS certification Certifications in India. We provide comprehensive certification services for Indian and foreign manufacturers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:site_name"
          content="Sun Certifications India"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@CertificationsSun" />
        <meta
          name="twitter:title"
          content="BIS Certification| FMCS | ISI Mark | LMPC | EPR | CDSCO"
        />
        <meta
          name="twitter:description"
          content="Sun Certifications is the best BIS certification Certifications in India."
        />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sun Certifications India",
            url: "https://sunconsultants.co.in",
            logo: "https://sunconsultants.co.in/assets/img/suncons.png",
            description:
              "Sun Certifications is a consulting firm in India for certifications like BIS certification, CDSCO, LMPC certificate, EPR certificate, FMCS license, PESO license.",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "505, PLOT NO-E-1,2,3, AGGARWAL MILLENNIUM TOWER-1 PITAMPURA",
              addressLocality: "NETAJI SUBHASH PLACE WEST DELHI",
              addressRegion: "DELHI",
              postalCode: "110034",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9315973373",
              contactType: "customer service",
              email: "info@sunconsultants.co.in",
            },
            sameAs: ["https://twitter.com/CertificationsSun"],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Certification Services",
            provider: {
              "@type": "Organization",
              name: "Sun Certifications India",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Certification Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS Certification",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "CDSCO Registration",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "LMPC Certificate",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "EPR Certificate",
                  },
                },
              ],
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is BIS Certification?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BIS Certification is a mandatory certification for products sold in India...",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <section aria-label="Hero Section" className="w-full">
        <Hero />
      </section>

      <section aria-label="Partner Logos" className="w-full">
        <LogoTicker />
      </section>

      <section aria-label="Our Services" className="w-full">
        <OurServices />
        {/* <Services /> */}
      </section>

      <section aria-label="Countries We Serve" className="w-full">
        <AuditsMarquee />
      </section>

      <section aria-label="Contact Form" className="w-full">
        <Contact />
      </section>

      <section aria-label="Countries We Serve" className="w-full">
        <WebinarSeminarMarquee />
      </section>

      <section aria-label="Latest News" className="w-full">
        <LatestNews />
      </section>

      <section aria-label="Countries We Serve" className="w-full">
        <Countries />
      </section>

      <section aria-label="Certification and Achievements" className="w-full">
        <CertificationAndAchievements />
      </section>

      <section aria-label="What Our Customers Say" className="w-full">
        {/* <WhatsOurCustomersSaySection /> */}
      </section>

      <section aria-label="Partner Logos" className="w-full">
        <LogoTicker />
      </section>

      <section aria-label="Partner Logos" className="w-full">
        <VideoSection />
      </section>

      <Footer />
    </main>
  );
};

export default Home;

const CertificationAndAchievements = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      translateX: "-50%",
      transition: {
        duration: 30, // Adjust duration as needed
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls]);

  // Gallery images from InternationalAudits.jsx
  const galleryImages = [
    {
      id: 1,
      image: CertificationImage,
      title: "Medical Chennai 2023",
    },
    {
      id: 2,
      image: CertificationImageTwo,
      title: "Medical Kolkata 2022",
    },
    {
      id: 3,
      image: CertificationImage,
      title: "Narela Association Seminar Footwear",
    },
    {
      id: 4,
      image: CertificationImageTwo,
      title: "Delhi Footwear Exhibition Audits",
    },
    {
      id: 5,
      image: CertificationImage,
      title: "Karol Bagh Association Footwear Seminar",
    },
    {
      id: 6,
      image: CertificationImageTwo,
      title: "Medical 2023",
    },
  ];

  return (
    <div className="bg-white pt-8 py-4">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Certification And Achievements
        </h2>
        {/* Marquee for desktop, scroll for mobile */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={controls}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => {
              controls.start({
                translateX: "-50%",
                transition: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              });
            }}
            className="flex items-center pb-8 [--duration:30s]"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {galleryImages.map((item) => (
                  <div
                    key={item.id}
                    className="relative min-w-[200px] max-w-[220px] bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#1A8781]/60 hover:border-[#0A4394] transition-all duration-300 group hover:scale-105 hover:shadow-[0_8px_40px_-8px_rgba(26,135,129,0.25)] mx-4" // Added mx-4 for spacing
                    style={{
                      boxShadow:
                        "0 8px 40px -8px rgba(26,135,129,0.10), 0 1.5px 8px 0 rgba(10,67,148,0.08)",
                    }}
                  >
                    <div className="relative w-full h-[140px] md:h-[160px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      embedId: "wcMNd8KWRBc",
    },
    {
      id: 2,
      embedId: "iafdcHwzojY",
    },
    {
      id: 3,
      embedId: "iafdcHwzojY",
    },
  ];

  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:pt-16 md:pb-2 bg-white">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Video Showcase
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white"
          >
            <div
              className={
                item.embedUrl
                  ? "aspect-[9/16] overflow-hidden"
                  : "aspect-[4/3] overflow-hidden"
              }
            >
              {item.embedUrl ? (
                <div
                  style={{
                    left: 0,
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <iframe
                    src={item.embedUrl}
                    style={{
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      border: 0,
                    }}
                    allowFullScreen
                    scrolling="no"
                    allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;"
                  ></iframe>
                </div>
              ) : (
                <iframe
                  className="w-full h-full object-cover"
                  src={`https://www.youtube.com/embed/${item.embedId}?si=bpOWvyUZWKVzkwyz`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            {/* Mobile View  */}
            <div className="block md:hidden p-5 bg-white">
              <div className="flex items-center mb-1">
                <h3 className="text-neutral-800 font-inter text-xl leading-tight font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="text-neutral-600 font-geist text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WebinarSeminarMarquee = () => {
  // Gallery images from InternationalAudits.jsx
  const galleryImages = [
    {
      id: 1,
      image: Exhibition1,
      title: "Exhibition 1",
    },
    {
      id: 2,
      image: Exhibition2,
      title: "Exhibition 2",
    },
    {
      id: 3,
      image: Exhibition3,
      title: "Exhibition 3",
    },
    {
      id: 4,
      image: Seminar4,
      title: "Seminar 4",
    },
    {
      id: 5,
      image: Seminar5,
      title: "Seminar 5",
    },
    {
      id: 6,
      image: Seminar6,
      title: "Seminar 6",
    },
    {
      id: 7,
      image: Seminar62,
      title: "Seminar 6-2",
    },
    {
      id: 8,
      image: Seminar7,
      title: "Seminar 7",
    },
    {
      id: 9,
      image: Seminar72,
      title: "Seminar 7-2",
    },
    {
      id: 10,
      image: Seminar8,
      title: "Seminar 8",
    },
    {
      id: 11,
      image: Seimar82,
      title: "Seminar 8-2",
    },
    {
      id: 12,
      image: Seminar9,
      title: "Seminar 9",
    },
    {
      id: 13,
      image: Seminar10,
      title: "Seminar 10",
    },
    {
      id: 14,
      image: Seminar102,
      title: "Seminar 10-2",
    },
    {
      id: 15,
      image: Seminar103,
      title: "Seminar 10-3",
    },
    {
      id: 16,
      image: Seminar11,
      title: "Seminar 11",
    },
    {
      id: 17,
      image: Seminar12,
      title: "Seminar 12",
    },
  ];

  return (
    <div className="bg-white pt-8 pb-2">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Seminars/Exhibitions
        </h2>
        {/* Marquee for desktop, scroll for mobile */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee
            className="flex  items-center pt-4 pb-8 [--duration:35s]"
            pauseOnHover={true}
          >
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[340px] max-w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#1A8781]/60 hover:border-[#0A4394] transition-all duration-300 group hover:scale-105 hover:shadow-[0_8px_40px_-8px_rgba(26,135,129,0.25)]"
                style={{
                  boxShadow:
                    "0 8px 40px -8px rgba(26,135,129,0.10), 0 1.5px 8px 0 rgba(10,67,148,0.08)",
                }}
              >
                <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay for title */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A8781]/90 via-[#1A8781]/40 to-transparent flex items-end justify-center">
                    {/* <span className="w-full text-center px-4 pb-3 text-lg md:text-2xl font-bold font-playfair text-white drop-shadow-lg tracking-wide">
                      {item.title}
                    </span> */}
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

const AuditsMarquee = () => {
  // Gallery images from InternationalAudits.jsx
  const galleryImages = [
    {
      id: 1,
      image: BahrainAudit,
      title: "Bahrain Audit",
    },
    {
      id: 2,
      image: IndonesiaAudit,
      title: "Indonesia Audit",
    },
    {
      id: 3,
      image: ItalyAudit,
      title: "Italy Audit",
    },
    {
      id: 4,
      image: MalaysiaAudit,
      title: "Malaysia Audit",
    },
    {
      id: 5,
      image: SloveniaAudit,
      title: "Slovenia Audit",
    },
    {
      id: 6,
      image: ThailandAudit,
      title: "Thailand Audit",
    },
    {
      id: 7,
      image: VietnamAudit,
      title: "Vietnam Audit",
    },
    {
      id: 8,
      image: Vietnam2Audit,
      title: "Vietnam Audit 2",
    },
    {
      id: 9,
      image: Vietnam3Audit,
      title: "Vietnam Audit 3",
    },
    {
      id: 10,
      image: Vietnam4Audit,
      title: "Vietnam Audit 4",
    },
  ];

  return (
    <div className="bg-white pt-8">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          International Audit Glimpse
        </h2>
        {/* Marquee for desktop, scroll for mobile */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee
            className="flex items-center pt-4 pb-8 [--duration:30s]"
            pauseOnHover={true}
          >
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[340px] max-w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#1A8781]/60 hover:border-[#0A4394] transition-all duration-300 group hover:scale-105 hover:shadow-[0_8px_40px_-8px_rgba(26,135,129,0.25)]"
                style={{
                  boxShadow:
                    "0 8px 40px -8px rgba(26,135,129,0.10), 0 1.5px 8px 0 rgba(10,67,148,0.08)",
                }}
              >
                <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay for title */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A8781]/90 via-[#1A8781]/40 to-transparent flex items-end justify-center">
                    <span className="w-full text-center px-4 pb-3 text-lg md:text-2xl font-bold font-playfair text-white drop-shadow-lg tracking-wide">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

// Hero Section
const Hero = () => {
  // const images = [
  //   "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   HeroImage
  // ];

  return (
    <>
      <main className="hidden md:block relative pb-24 pt-12  custom-radial-gradient overflow-x-hidden ">
        {/* Background gradient */}
        <div className="absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-2"></div>

        <div className="max-w-[84rem] w-full mx-auto ">
          <div className="flex flex-col items-start">
            <div className="relative px-8 z-20 ">
              <figure className="m-0">
                <img
                  src={HeroImage}
                  alt="Sun Certifications India - Professional Certification Services"
                  width="740"
                  height="515"
                  loading="lazy"
                  className="shadow-[0_5px_40px_-12px_rgba(0,0,0,0.3)] w-[740px] h-[515px] object-cover"
                />
                {/* <ImagesSlider   className="shadow-[0_5px_40px_-12px_rgba(0,0,0,0.3)] w-[740px] h-[515px] object-cover" images={images}></ImagesSlider> */}
              </figure>
              <div className="absolute inset-0 flex items-center justify-center transform translate-x-[575px]">
                <article className="py-6 px-8 bg-white w-[650px] h-[380px] bg-white/70 backdrop-blur-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                  <header className="relative max-w-[600px]">
                    <h1 className="text-5xl font-bold font-playfair text-left text-black leading-[52px]">
                      Sun Certifications India
                    </h1>
                    {/* <div className="w-[52px] h-[8px] bg-black inset-0 absolute transform translate-x-[380px] translate-y-7"></div> */}
                  </header>

                  <p className="mt-5 text-sm sm:text-xl text-zinc-500 tracking-wide mb-7 text-left max-w-2xl">
                    Sun Certifications was founded in 2013, and for more than a
                    decade, we have been assisting companies to comply with
                    various kinds of Indian certifications like BIS certificate
                    for Indian manufacturers, BIS certification for
                    foreign/global manufacturers, BIS Scheme X certification,
                    LMPC certificate, EPR certificate, WPC certificate, etc.
                  </p>
                </article>
              </div>

              <nav
                className="absolute shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] flex inset-0 w-[160px] h-[80px] transform translate-x-[70px] translate-y-[475px]"
                aria-label="Hero navigation"
              >
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <button aria-label="Previous slide">
                    <img
                      src={ArrowOne}
                      alt="Previous slide navigation"
                      loading="lazy"
                    />
                  </button>
                </div>
                <div className="w-full h-full bg-[#64bfdd] flex items-center justify-center">
                  <button aria-label="Next slide">
                    <img
                      src={ArrowTwo}
                      alt="Next slide navigation"
                      loading="lazy"
                    />
                  </button>
                </div>
              </nav>

              {/* <div className=" flex items-center justify-between absolute inset-0  w-[219px] h-[27px] transform translate-x-[553.5px] translate-y-[525px]">
                <div className="font-poppins text-[#313131] text-xl">01</div>
                <div className="w-[135px] h-[10px] bg-white">
                  <div className="w-[52px] h-full bg-[#64bfdd]"></div>

                  <div></div>
                </div>
                <div className="font-poppins text-[#313131] text-xl">10</div>
              </div> */}
            </div>
          </div>
        </div>
      </main>

      {/* For Mobile Device */}
      <main className="md:hidden flex flex-col gap-5 w-full ">
        <div className="custom-radial-gradient w-full flex flex-col justify-center p-4">
          <div className="flex justify-between flex-col items-center w-full m-auto pb-12">
            <div className="flex flex-col gap-8 mt-10 mb-16">
              <header>
                <WordPullUp
                  words="Sun Certifications India"
                  className="text-4xl text-black font-geist font-bold text-left max-w-3xl break-words"
                />
              </header>
              <article className="max-w-2xl">
                <FadeText
                  text="
             Trusted certifications for BIS, LMPC, EPR, and WPC certifications since 2013. We assist both Indian and foreign manufacturers in obtaining essential government certifications for the Indian market.
              "
                  className="font-geist text-gray-600"
                  direction="left"
                />
              </article>

              <nav
                className="flex gap-3 flex-wrap items-center"
                aria-label="Mobile navigation"
              >
                <Link to="/about">
                  <BlurIn
                    word="About Us"
                    className="bg-black text-white text-sm font-geist py-3 rounded-md flex gap-2 justify-center items-center px-8"
                  />
                </Link>
                <Link to="/contact">
                  <BlurIn
                    word="Contact Us"
                    className="border font-geist text-sm bg-white text-black flex justify-center gap-4 items-center py-3 rounded-md px-8"
                  />
                </Link>
              </nav>
            </div>
            <figure className="m-0">
              <img
                src="https://gitcs-brain.vercel.app/assets/undraw_agreement_re_d4dv-CXonPu7G.svg"
                alt="Sun Certifications India - Professional Certification Services"
                className="w-80 md:w-96 drop-shadow-xl"
              />
            </figure>
          </div>
        </div>
      </main>
    </>
  );
};

// Logo Ticker
const LogoTicker = () => {
  return (
    // <div className="h-20 md:h-28 bg-[#B9DEEB]">
    <div className="h-20 md:h-28 bg-white">
      <div className="max-w-[84rem] mx-auto h-full ">
        <div className="flex overflow-hidden h-full [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]">
          <motion.div
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-14 pr-14 items-center justify-center flex-none"
          >

            <figure className="m-0">
              <img
                src={LogoTwo}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>

            <figure className="m-0">
              <img
                src={ametek}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Ansell}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Aqua}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Daiki}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={honeywell}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Ikea}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>

            <figure className="m-0">
              <img
                src={LeaderArt}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Misumi}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>

            <figure className="m-0">
              <img
                src={Panasonic}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>



            <figure className="m-0">
              <img
                src={cuty}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={raumplus}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>

            <figure className="m-0">
              <img
                src={remsa}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={SEDOVINA}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Thantawan}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>



            <figure className="m-0">
              <img
                src={titus}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>




























            <figure className="m-0">
              <img
                src={LogoTwo}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>

            <figure className="m-0">
              <img
                src={ametek}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Ansell}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Aqua}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Daiki}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={honeywell}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Ikea}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>

            <figure className="m-0">
              <img
                src={LeaderArt}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Misumi}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>

            <figure className="m-0">
              <img
                src={Panasonic}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>



            <figure className="m-0">
              <img
                src={cuty}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={raumplus}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>

            <figure className="m-0">
              <img
                src={remsa}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={SEDOVINA}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>


            <figure className="m-0">
              <img
                src={Thantawan}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>



            <figure className="m-0">
              <img
                src={titus}
                alt="Sun Certifications India - Trusted Partner Company"
                loading="lazy"
              />
            </figure>




































          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Services
export const Services = () => {
  return (
    <div className="pt-10 md:pt-8 pb-8  md:pb-16 bg-white overflow-x-hidden ">
      <div className="max-w-[82rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            {/* <h2 className="text-[30px] md:text-[48px] font-bold font-roboto md:font-roboto  text-center text-[#1E1E1E] ">
              Our Services
            </h2> */}
            <h2 className="text-[25px] uppercase md:text-[36px] font-bold font-inter md:font-roboto  text-center text-[#1E1E1E] ">
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            {/* <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center"> */}
            <div className="hidden md:flex items-center w-[760px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              {/* <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India's Best Certificate Consultant
              </span> */}

              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India's most trusted partner for certifications
              </span>

              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-x-10 px-4 md:px-0 gap-y-28 md:gap-y-24">
          {/* 1 */}
          <Link
            to="/services/bis-mark-foreign"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
            aria-label="BIS Mark for Foreign Manufacturers"
          >
            <figure className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 m-0">
              <img
                // src={BISImage}
                src={ISIMark}
                alt="BIS Certification Services - Professional ISI License for Foreign Manufacturers"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
                loading="lazy"
              />
            </figure>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              BIS Mark (ISI License) for Foreign Manufacture
            </p>
          </Link>

          {/* 2 */}
          <Link
            to="/services/bis-certification"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                // src={BISImage}
                src={BISCRS}
                alt="BIS"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
                loading="lazy"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              Scheme X
            </p>
          </Link>

          {/* 3 */}
          <Link
            to="/services/isi-mark-indian"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={ISIMark}
                alt="ISIMark"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
                loading="lazy"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>

          {/* 4 */}

          <Link
            to="/services/crs-registration"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
                alt="BISCRS"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
                loading="lazy"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              BIS (CRS) Registration
            </p>
          </Link>

          {/* 5 */}

          <Link
            to="/services/cdsco-registration-certification"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
            aria-label="CDSCO Registration Certification"
          >
            <figure className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 m-0">
              <img
                src={CDSCO}
                alt="CDSCO Registration Certification - Medical Device and Drug Registration Services"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
                loading="lazy"
              />
            </figure>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              CDSCO Registration Certification
            </p>
          </Link>

          {/* 6*/}
          <Link
            to="/services/plastic-waste"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
                loading="lazy"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              Plastic Waste Management
            </p>
          </Link>

          {/* 7*/}

          <Link
            to="/services/epr-registration"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
                alt="EPRCertificate"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
                loading="lazy"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              EPR Certificate Certifications
            </p>
          </Link>

          {/* 8 */}
          <Link
            to="/services/lmpc-registration"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
                loading="lazy"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              LMPC Certificate Certifications
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Contact
const Contact = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path === "/") return "Home Page";
    if (path === "/about") return "About Page";
    if (path === "/services") return "Services Page";
    if (path === "/contact") return "Contact Page";
    return "Other Page";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, message, pageUrl, pageName } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle phone input change
  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      // toast.error("Please Enter a valid Full Name.");
      toast({
        variant: "destructive",
        title: "Please Enter a valid Full Name.",
        description: "Name Should only Contain Letters and Spaces.",
      });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const commonDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
    ];
    const domain = email.split("@")[1];

    if (!emailRegex.test(email) || !commonDomains.includes(domain)) {
      toast({
        variant: "destructive",
        title: "Please Enter a valid Email Address.",
        description: "Check if Your Email Format is Correct",
      });
      setLoading(false);
      return;
    }

    // Phone number validation - simplified since react-phone-input-2 handles formatting
    if (!phoneNumber || phoneNumber.length < 8) {
      toast({
        variant: "destructive",
        title: "Please Enter a Valid Phone Number",
        description: "Phone Number is required",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/contact/submit-contact`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      // toast.success("Contact form submit successfully!");
      toast({
        title: "Contact form submit successfully!",
        description:
          "Thank you for Contacting Us. Our Team will Reach out to you Shortly.",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      // toast.error(errorMessage || "Failed to submit contact form details!");
      toast({
        variant: "destructive",
        title: errorMessage || "Failed to submit contact form details!",
        description:
          "Something Went Wrong. Please Check Your Details and Try Again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className=" pt-8 md:pt-12 pb-8 md:pb-16 custom-radial-gradient overflow-x-hidden ">
    <div className=" pt-8 md:pt-8 pb-8 md:pb-8 overflow-x-hidden ">
      <div className="max-w-[88rem] px-4 md:px-8 w-full flex flex-col md:flex-row  items-center justify-between mx-auto">
        <div className="w-full md:w-1/2">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex w-full items-center gap-3">
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India's most trusted partner for certifications
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            {/* <h2 className="text-[30px]  md:text-[48px] font-bold font-roboto text-[#1E1E1E] ">
              Contact Us
            </h2> */}
            <h2 className="text-[25px] uppercase md:text-[36px]  font-bold font-inter md:font-roboto  text-center text-[#1E1E1E] ">
              Contact Us
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <p className="font-medium font-poppins text-[17px]  md:text-[20px]  text-[#996C6C]">
              Want to contact our team and book a call?
              <span className="text-black"> Try it now</span>
            </p>
          </BoxReveal>

          <form
            onSubmit={handleFormSubmit}
            className="mt-6 flex flex-col gap-4"
          >
            <Input
              disabled={loading}
              required
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleOnChange}
              //         className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px]
              //           focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
              //  text-[#7E7E7E]   text-[17px]     md:text-[20px]    font-poppins  font-semibold   placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"

              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border border-blue-500/90
      focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
text-[#7E7E7E]   text-[17px]     md:text-[20px]    font-poppins  font-semibold   placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"
              placeholder="Full Name *"
            ></Input>

            <Input
              disabled={loading}
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border border-blue-500/90
    focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
text-[#7E7E7E]   text-[17px]     md:text-[20px]    font-poppins  font-semibold   placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"
              placeholder="Email Address *"
            />


            <Input
              disabled={loading}
              required
              type="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleOnChange}
              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border border-blue-500/90
    focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
text-[#7E7E7E]   text-[17px]     md:text-[20px]    font-poppins  font-semibold   placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"
              placeholder="Phone Number *"
            />


            {/* <PhoneInput
              country={'in'}
              enableSearch={true}
              searchPlaceholder="Search Country"
              value={phoneNumber}
              onChange={handlePhoneChange}
              containerClass="w-full md:w-[600px]"
            /> */}

            <Input
              disabled={loading}
              required
              type="text"
              name="message"
              value={message}
              onChange={handleOnChange}
              //         className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px]
              //      focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
              //  text-[#7E7E7E]   text-[17px]     md:text-[20px]    font-poppins  font-semibold         placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"

              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border border-blue-500/90
      focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
text-[#7E7E7E]   text-[17px]     md:text-[20px]    font-poppins  font-semibold   placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"
              placeholder="Which Certification is required ? *"
            />

            <Button
              disabled={loading}
              type="submit"
              className="w-full md:w-[600px] mt-2 h-14 md:h-[72px] rounded-xl md:rounded-[15px] bg-[#20B2AA] hover:bg-[#20CFC6] text-white text-[17px] md:text-[20px] font-poppins font-semibold disabled:opacity-100"
            >
              {loading ? (
                <div className="flex gap-3 items-center justify-center">
                  <ClockLoader size={22} color="#fff" />
                  <span>Sending</span>
                </div>
              ) : (
                <div className="flex gap-3 items-center justify-center">
                  <span>Submit</span>
                </div>
              )}
            </Button>
          </form>
        </div>

        <div className="hidden md:block relative w-[600px] h-[539px] mr-5 mt-16 ">
          <img
            src={ContactUs}
            alt="ContactUs"
            className="absolute right-0 w-[475.99px] h-[539px] object-cover"
            loading="lazy"
          />

          <img
            src={ContactChild}
            alt="ContactChild"
            className=" 
          absolute inset-0 w-[350px] h-[350px] -translate-x-[70px] translate-y-[180px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

// Latest News
const LatestNews = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      translateX: "-50%",
      transition: {
        duration: 60,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls]);

  let interval;

  const words = ["Updates", "News"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  const startAnimation = () => {
    let i = 0;
    interval = setInterval(() => {
      i = i === words.length - 1 ? 0 : i + 1;
      setCurrentWord(words[i]);
    }, 2000);
  };

  useEffect(() => {
    startAnimation();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-20 md:h-28 border-2 my-8 bg-[#B9DEEB]">
      <div className="max-w-[84rem] mx-auto h-full flex justify-between items-center px-4 md:px-0">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[20px] md:text-[35px] font-bold font-roboto text-center">
            Latest{" "}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                damping: 8,
                stiffness: 100,
              }}
              // key={currentWord}
              className="inline-block bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent"
            >
              {/* {currentWord} */}
              Updates
            </motion.div>
            {/* <span className="ml-1">📢</span> */}
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 511.995 511.995"
              xmlSpace="preserve"
              fill="#000000"
              className="w-16 h-16 inline-block  align-center"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  className="fill-[#522087]"
                  d="M386.05,181.439c11.98,10.72,21.281,25.537,26.167,37.832c9.616,24.118,11.507,51.862,2.523,76.768 c-5.833,16.079-10.877,24.591-23.487,39.566l15.606,15.133c32-29.32,40.197-78.976,33.103-116.493 c-1.419-7.093-3.94-15.921-7.093-23.33c-7.409-17.183-15.764-30.424-31.369-45.399l-15.29,15.921h-0.158V181.439z M321.734,227.31 c20.019,20.177,18.443,51.862,2.049,66.05l15.764,15.448c25.064-22.542,26.325-70.779-2.838-97.576l-14.818,16.079h-0.157V227.31z M353.892,204.453c31.212,29.478,32.946,76.138,3.468,110.345l15.606,15.133c17.813-14.187,28.216-48.709,27.429-71.566 c-0.946-23.33-11.35-54.069-31.685-69.99L353.892,204.453z"
                ></path>
                <path
                  className="fill-[#522087]"
                  d="M420.414,258.049c0.473,12.769-1.419,25.695-5.833,37.832c-5.833,16.079-10.877,24.591-23.487,39.566 l15.606,15.133c25.537-23.33,35.941-59.744,35.468-92.532h-21.596L420.414,258.049L420.414,258.049z M335.921,258.049h22.069 c1.104,19.389-5.517,38.778-18.759,50.758l-15.764-15.448C332.611,285.321,337.182,271.921,335.921,258.049z M378.168,258.049 h21.911v0.158c0.946,22.857-9.458,57.379-27.271,71.566l-15.606-15.133c14.66-17.024,21.596-37.202,21.123-56.749L378.168,258.049z"
                ></path>
                <path
                  className="fill-[#ffffff]"
                  d="M131.468,197.518h55.488v105.773c0,6.148-5.044,11.192-11.192,11.192h-44.295 c-6.148,0-11.192-5.044-11.192-11.192v-94.581C120.276,202.562,125.32,197.518,131.468,197.518z"
                ></path>
                <path
                  className="fill-[#522087]"
                  d="M120.276,303.921C92.532,303.763,69.833,282.325,69.833,256l0,0c0-26.325,22.7-47.763,50.443-47.921 C120.276,208.078,120.276,303.921,120.276,303.921z"
                ></path>
                <path
                  className="fill-[#522087]"
                  d="M259.783,132.413l-72.67,65.103v116.966l72.67,65.103c6.306,5.674,34.207,8.197,34.207,1.261V130.995 c0-6.936-27.901-4.414-34.207,1.261V132.413z"
                ></path>
                <path
                  className="fill-[#ffffff]"
                  d="M186.956,255.999v47.921c0,5.833-5.044,10.561-11.192,10.561h-44.295 c-6.148,0-11.192-4.729-11.192-10.561V256L186.956,255.999L186.956,255.999z"
                ></path>
                <g>
                  <path
                    className="fill-[#522087]"
                    d="M120.276,303.921C92.532,303.763,69.833,282.325,69.833,256l0,0h50.443 C120.276,256,120.276,303.921,120.276,303.921z"
                  ></path>
                  <path
                    className="fill-[#522087]"
                    d="M186.956,255.999v58.483l72.67,65.103c6.306,5.674,34.207,8.197,34.207,1.261V255.842H186.798 L186.956,255.999z"
                  ></path>
                </g>
              </g>
            </svg>
          </h2>
        </div>

        <div className="flex w-[50%] md:w-[77%]">
          <div className="flex overflow-hidden h-full [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
            <motion.div
              animate={controls}
              initial={{ translateX: "0%" }}
              onMouseEnter={() => controls.stop()}
              onMouseLeave={() => {
                controls.start({
                  translateX: "-50%",
                  transition: {
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  },
                });
              }}
              className="flex gap-14 pr-14 items-center justify-center flex-none"
            >
              {[...Array(4)].map((_, index) => (
                <React.Fragment key={`news-item-${index}`}>
                  <Link to="/latest-notifications" className="no-underline">
                    <span className="font-roboto tracking-wide text-lg md:text-xl font-medium text-[#005069] hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                      🔥 Breaking: Tesla unveils next-generation electric
                      vehicle
                    </span>
                  </Link>
                  <Link to="/latest-notifications" className="no-underline">
                    <span className="font-roboto tracking-wide text-lg md:text-xl font-medium text-[#005069] hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                      📱 Apple announces iPhone 15 with revolutionary features
                    </span>
                  </Link>
                  <Link to="/latest-notifications" className="no-underline">
                    <span className="font-roboto tracking-wide text-lg md:text-xl font-medium text-[#005069] hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                      💰 S&P 500 reaches all-time high amid tech rally
                    </span>
                  </Link>
                  <Link to="/latest-notifications" className="no-underline">
                    <span className="font-roboto tracking-wide text-lg md:text-xl font-medium text-[#005069] hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                      🏢 Microsoft launches new AI-powered cloud services
                    </span>
                  </Link>
                  <Link to="/latest-notifications" className="no-underline">
                    <span className="font-roboto tracking-wide text-lg md:text-xl font-medium text-[#005069] hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                      🌍 Global climate summit announces major initiatives
                    </span>
                  </Link>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Countries
const Countries = () => {
  // const [current, setCurrent] = useState(0);
  const handlePreviousClick = () => {
    setCountriesData((prev) => {
      const newArray = [...prev];
      const lastItem = newArray.pop();
      newArray.unshift(lastItem);
      return newArray;
    });
  };

  const handleNextClick = () => {
    setCountriesData((prev) => {
      const newArray = [...prev];
      const firstItem = newArray.shift();
      newArray.push(firstItem);
      return newArray;
    });
  };

  const [countriesData, setCountriesData] = useState([
    { name: "Thailand", img: Thailand },
    { name: "Vietnam", img: Vietnam },
    { name: "Canada", img: Canada },
    { name: "China", img: China },
    { name: "Italy", img: Italy },
    { name: "Colombia", img: Colombia },
    { name: "Qatar", img: Qatar },
    { name: "India", img: India },
    { name: "Indonesia", img: Indonesia },
    { name: "Malaysia", img: Malaysia },
    { name: "Russia", img: Russia },
    { name: "Bahrain", img: Bahrain },
    { name: "UAE", img: UAE },
    { name: "Nepal", img: Nepal },
    { name: "Sri Lanka", img: SriLanka },
    { name: "France", img: France },
    { name: "Germany", img: Germany },
    { name: "Sweden", img: Sweden },
    { name: "Slovenia", img: Slovenia },
    { name: "Austria", img: Austria },
    { name: "USA", img: USA },
    { name: "Denmark", img: Denmark },
  ]);

  return (
    // <div className="relative custom-radial-gradient py-12 md:py-0">
    <div className="relative bg-white py-12 md:py-0">
      <div className=" max-w-[88rem] mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[18px] ">
          {/* Left Side */}
          <div className="w-full md:max-w-[383px] flex flex-col gap-[30px] items-center text-center md:items-start md:text-left ">
            <div className="flex flex-col gap-2 md:gap-[20px]">
              <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                {/* <h2 className="font-roboto leading-tight font-bold text-[30px] md:text-[43px]">
                  Countries We Serve Worldwide
                </h2> */}
                <h2 className="font-roboto leading-tight font-bold text-[30px] md:text-[40px]">
                  Glimpse of the Countries we have Served In
                </h2>
              </BoxReveal>

              <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                <p className="font-poppins font-medium text-base md:text-[19px] text-[#008080]">
                  Delivering excellence everywhere.
                </p>
              </BoxReveal>
            </div>

            <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
              <div className="flex gap-4 items-center ">
                <button
                  onClick={handlePreviousClick}
                  className="rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center border-2 border-[#160E34]"
                >
                  <ChevronLeft className="hidden md:block" />
                  <ChevronLeft className="block md:hidden size={20}" />
                </button>

                <button
                  onClick={handleNextClick}
                  className="rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center bg-[#160E34] border-2 border-[#160E34]"
                >
                  <ChevronRight className="hidden md:block text-white" />
                  <ChevronRight className="block md:hidden size-4 text-white" />
                </button>
              </div>
            </BoxReveal>
          </div>

          <div className="w-full px-0 md:px-[22px] py-3 md:pt-14 md:pb-10  overflow-hidden scrollbar-hide  [mask-image:linear-gradient(to_right,black_90%,transparent)]">
            <div className=" flex gap-4 md:gap-[22px] w-max ">
              {/* Mobile */}
              {countriesData.map((country, index) => (
                <div
                  key={index}
                  className=" md:hidden w-[280px] h-[280px] bg-[#B5DDEB] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  rounded-[12px] p-4 flex flex-col items-center justify-center flex-shrink-0"
                >
                  <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={country.img}
                      alt={country.name}
                      className="w-auto h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-3 px-1 flex items-center justify-between w-full">
                    <span className="flex text-base items-center font-bold justify-center gap-1">
                      <Star className="fill-current text-[#160E34]" size={16} />
                      <h1 className="tracking-wider  text-[#160E34] uppercase">
                        {country.name}
                      </h1>
                    </span>
                  </div>
                </div>
              ))}

              {/* Desktop */}
              {countriesData.map((country, index) => (
                <div
                  key={index}
                  className="hidden w-[380px] h-[380px] bg-[#B5DDEB] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={country.img}
                      alt={country.name}
                      className={
                        country.name === "Thailand"
                          ? "w-full h-full object-cover"
                          : ""
                      }
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 px-2 flex items-center justify-between w-full">
                    <span className="flex text-xl items-center font-bold justify-center gap-2">
                      <Star className="fill-current text-[#160E34]" size={20} />
                      <h1 className="tracking-widest text-[#160E34] uppercase">
                        {country.name}
                      </h1>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Subscribe Our Channel
// const SubscribeOurChannel = ()=>{
//   return(
//     <div className="">

//     </div>
//   )
// }

// What Our Customers Say Section
export const WhatsOurCustomersSaySection = () => {
  const controls = useAnimationControls(); // Initialize controls

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"], // Animation for horizontal scroll
      transition: {
        duration: 20, // Adjust duration for desired speed
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls]);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Designer",
      image: TestimonialImage,
      content:
        "Working with Sun Certifications was a seamless experience. Their expertise in BIS and WPC certifications helped us navigate the complex regulatory landscape efficiently. Highly recommended for their professional approach.",
    },
    {
      id: 2,
      name: "Rajeev Kumar",
      role: "Real Estate Agent",
      image: TestimonialImageSecond,
      content:
        "Outstanding support for our EPR certification process. The team's in-depth knowledge and prompt responses made the entire certification journey smooth. They truly understand both Indian and international compliance requirements.",
    },
    {
      id: 3,
      name: "Ragini Singh",
      role: "App Developer",
      image: TestimonialImageThree,
      content:
        "Their expertise in LMPC certification was invaluable for our product launch in India. The Certifications provided clear guidance throughout the process and helped us meet all regulatory requirements well within our timeline.",
    },
    {
      id: 4,
      name: "Uday Chaudhary",
      role: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Their comprehensive support for our BIS certification was crucial for entering the Indian market. The team's detailed analysis and strategic guidance ensured we met all necessary standards without delays.",
    },
    {
      id: 6,
      name: "Priya Sharma",
      role: "Designer",
      image: TestimonialImage,
      content:
        "Working with Sun Certifications was a seamless experience. Their expertise in BIS and WPC certifications helped us navigate the complex regulatory landscape efficiently. Highly recommended for their professional approach.",
    },
    {
      id: 7,
      name: "Rajeev Kumar",
      role: "Real Estate Agent",
      image: TestimonialImageSecond,
      content:
        "Outstanding support for our EPR certification process. The team's in-depth knowledge and prompt responses made the entire certification journey smooth. They truly understand both Indian and international compliance requirements.",
    },
    {
      id: 8,
      name: "Ragini Singh",
      role: "App Developer",
      image: TestimonialImageThree,
      content:
        "Their expertise in LMPC certification was invaluable for our product launch in India. The Certifications provided clear guidance throughout the process and helped us meet all regulatory requirements well within our timeline.",
    },
    {
      id: 9,
      name: "Uday Chaudhary",
      role: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Their comprehensive support for our BIS certification was crucial for entering the Indian market. The team's detailed analysis and strategic guidance ensured we met all necessary standards without delays.",
    },
    {
      id: 10,
      name: "Priya Sharma",
      role: "Designer",
      image: TestimonialImage,
      content:
        "Working with Sun Certifications was a seamless experience. Their expertise in BIS and WPC certifications helped us navigate the complex regulatory landscape efficiently. Highly recommended for their professional approach.",
    },
  ];

  return (
    <div className="bg-white pt-5  pb-8 ">
      {/* <div className="custom-radial-gradient pt-10 pb-8 "> */}
      <div className="max-w-[88rem] px-8 w-full mx-auto ">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-roboto  text-center text-[#1E1E1E] ">
              Our Testimonials
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                What our clients have to say
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        {/* Testimonials Scroll Container */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={controls} // Use controls here
            onMouseEnter={() => controls.stop()} // Pause on hover
            onMouseLeave={() => {
              // Restart animation on mouse leave
              controls.start({
                x: ["0%", "-100%"],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              });
            }}
            className="flex gap-8 md:gap-6 pt-10 pb-12" // Removed 'group' class
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="min-w-[400px] bg-[#B5DDEB] p-8 rounded-[20px] shadow-2xl shadow-blue-500/20 relative" // Removed 'group-hover:[animation-play-state:paused]'
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#1A8781]/30"
                      />
                      <div className="flex flex-col justify-center">
                        <h4 className="font-roboto font-bold text-xl leading-tight drop-shadow-lg text-neutral-800">
                          {testimonial.name}
                        </h4>
                        <p className="font-roboto text-neutral-700">
                          {testimonial.role}
                        </p>
                      </div>

                      <div className="ml-auto absolute top-8 right-8 ">
                        <svg
                          className="w-10 h-10 text-[#64bfdd]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    <p className="font-poppins text-[#5a4a4a] leading-relaxed text-base">
                      {testimonial.content}
                    </p>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
