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
import LogoOne from "../assets/images/OneLogo.png";
import LogoTwo from "../assets/images/TwoLogo.png";
import LogoThree from "../assets/images/ThreeLogo.png";
import LogoFour from "../assets/images/FourLogo.png";
import LogoFive from "../assets/images/FiveLogo.png";
import LogoSix from "../assets/images/SixLogo.png";
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
import { Marquee } from "@/components/magicui/marquee";
import { ImagesSlider } from "@/components/ui/images-slider";

const Home = () => {
  return (
    <main className="w-full">
      <Helmet>
        <title>
          BIS Certification| FMCS | ISI Mark | LMPC | EPR | CDSCO - Sun
          Consultants & Engineers
        </title>
        <meta
          name="description"
          content="Sun Consultants is a consulting firm in India for certifications like BIS certification, CDSCO, LMPC certificate, EPR certificate, FMCS license, PESO license. Trusted since 2013."
        />
        <meta
          name="keywords"
          content="BIS certification, CDSCO, LMPC certificate, EPR certificate, FMCS license, PESO license, ISI mark, BIS registration"
        />
        <meta name="author" content="Sun Consultants & Engineers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS Certification consultants, LMPC certificate, EPR Certificate, CDSCO"
        />
        <meta
          property="og:description"
          content="Sun Consultants is the best BIS certification consultant in India. We provide comprehensive certification services for Indian and foreign manufacturers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Sun Consultants & Engineers" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ConsultantsSun" />
        <meta
          name="twitter:title"
          content="BIS Certification| FMCS | ISI Mark | LMPC | EPR | CDSCO"
        />
        <meta
          name="twitter:description"
          content="Sun Consultants is the best BIS certification consultant in India."
        />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sun Consultants & Engineers",
            url: "https://sunconsultants.co.in",
            logo: "https://sunconsultants.co.in/assets/img/suncons.png",
            description:
              "Sun Consultants is a consulting firm in India for certifications like BIS certification, CDSCO, LMPC certificate, EPR certificate, FMCS license, PESO license.",
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
            sameAs: ["https://twitter.com/ConsultantsSun"],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Certification Services",
            provider: {
              "@type": "Organization",
              name: "Sun Consultants & Engineers",
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
        <Services />
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
        <WhatsOurCustomersSaySection />
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
  // Gallery images from InternationalAudits.jsx
  const galleryImages = [
    {
      id: 1,
      image:
      CertificationImage,
      title: "Medical Chennai 2023",
    },
    {
      id: 2,
      image:
      CertificationImageTwo,
      title: "Medical Kolkata 2022",
    },
    {
      id: 3,
      image:
      CertificationImage,
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
      image:
      CertificationImageTwo,
      title: "Medical 2023",
    },
  ];

  return (
    <div className="bg-white pt-8 py-1">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
        Certification And Achievements
        </h2>
        {/* Marquee for desktop, scroll for mobile */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee className="flex items-center pb-8 [--duration:30s]">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[200px] max-w-[220px] bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#1A8781]/60 hover:border-[#0A4394] transition-all duration-300 group hover:scale-105 hover:shadow-[0_8px_40px_-8px_rgba(26,135,129,0.25)]"
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
                  {/* Gradient overlay for title */}
                  {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A8781]/90 via-[#1A8781]/40 to-transparent flex items-end justify-center">
                    <span className="w-full text-center px-2 pb-2 text-sm md:text-base font-bold font-playfair text-white drop-shadow-lg tracking-wide">
                      {item.title}
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </Marquee>
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
      image:
        "https://sunconsultants.co.in/photo-event/Medicall-chennai-2023/Medicall-chennai-2023-1.png",
      title: "Medical Chennai 2023",
    },
    {
      id: 2,
      image:
        "https://sunconsultants.co.in/photo-event/Medicall-Kolkata-2022/Kolkata-2022-3.png",
      title: "Medical Kolkata 2022",
    },
    {
      id: 3,
      image:
        "https://sunconsultants.co.in/photo-event/Narela-association-seminar-footwear/Narela-association-seminar-footwear-3.png",
      title: "Narela Association Seminar Footwear",
    },
    {
      id: 4,
      image: "https://sunconsultants.co.in/photo-event/2023/sun-2.png",
      title: "Delhi Footwear Exhibition Audits",
    },
    {
      id: 5,
      image: "https://sunconsultants.co.in/photo-event/2023/sun-3.png",
      title: "Karol Bagh Association Footwear Seminar",
    },
    {
      id: 6,
      image:
        "https://sunconsultants.co.in/photo-event/Medicall-chennai-2023/Medicall-chennai-2023-2.png",
      title: "Medical 2023",
    },
  ];

  return (
    <div className="bg-white pt-8 pb-2">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Seminars
        </h2>
        {/* Marquee for desktop, scroll for mobile */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee className="flex  items-center pt-4 pb-8 [--duration:30s]">
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

const AuditsMarquee = () => {
  // Gallery images from InternationalAudits.jsx
  const galleryImages = [
    {
      id: 1,
      image:
        "https://sunconsultants.co.in/photo-event/Medicall-chennai-2023/Medicall-chennai-2023-1.png",
      title: "Medical Chennai 2023",
    },
    {
      id: 2,
      image:
        "https://sunconsultants.co.in/photo-event/Medicall-Kolkata-2022/Kolkata-2022-3.png",
      title: "Medical Kolkata 2022",
    },
    {
      id: 3,
      image:
        "https://sunconsultants.co.in/photo-event/Narela-association-seminar-footwear/Narela-association-seminar-footwear-3.png",
      title: "Narela Association Seminar Footwear",
    },
    {
      id: 4,
      image: "https://sunconsultants.co.in/photo-event/2023/sun-2.png",
      title: "Delhi Footwear Exhibition Audits",
    },
    {
      id: 5,
      image: "https://sunconsultants.co.in/photo-event/2023/sun-3.png",
      title: "Karol Bagh Association Footwear Seminar",
    },
    {
      id: 6,
      image:
        "https://sunconsultants.co.in/photo-event/Medicall-chennai-2023/Medicall-chennai-2023-2.png",
      title: "Medical 2023",
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
          <Marquee className="flex  items-center pt-4 pb-8 [--duration:30s]">
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
                  alt="Sun Consultants And Engineers - Professional Certification Services"
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
                      Sun Certifications And Engineers
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
                  words="Sun Consultants And Engineers"
                  className="text-4xl text-black font-geist font-bold text-left max-w-3xl break-words"
                />
              </header>
              <article className="max-w-2xl">
                <FadeText
                  text="
             Trusted consultants for BIS, LMPC, EPR, and WPC certifications since 2013. We assist both Indian and foreign manufacturers in obtaining essential government certifications for the Indian market.
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
                alt="Sun Consultants And Engineers - Professional Certification Services"
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
    <div className="h-20 md:h-28 bg-[#B9DEEB]">
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
                src={LogoOne}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoThree}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoFour}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoFive}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoSix}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                loading="lazy"
              />
            </figure>

            <figure className="m-0">
              <img
                src={LogoOne}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoTwo}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoThree}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoFour}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoFive}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoSix}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                loading="lazy"
              />
            </figure>

            <figure className="m-0">
              <img
                src={LogoOne}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                className="hidden md:block"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoTwo}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                className="hidden md:block"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoThree}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                className="hidden md:block"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoFour}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                className="hidden md:block"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoFive}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                className="hidden md:block"
                loading="lazy"
              />
            </figure>
            <figure className="m-0">
              <img
                src={LogoSix}
                alt="Sun Consultants And Engineers - Trusted Partner Company"
                className="hidden md:block"
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
const Services = () => {
  return (
    <div className="pt-10 md:pt-12 pb-12  md:pb-8 bg-white overflow-x-hidden ">
      <div className="max-w-[84rem] w-full mx-auto">
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
              EPR Certificate Consultants
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
              LMPC Certificate Consultants
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

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      // toast.error("Please Enter a Valid Phone number (8-15 digits)");
      toast({
        variant: "destructive",
        title: "Please Enter a Valid Phone Number",
        description: "Phone Number Should be (8-15 digits)",
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

              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border border-blue-500/40
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
              //           className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px]
              //       focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
              // text-[#7E7E7E]   text-[17px]     md:text-[20px]    font-poppins  font-semibold            placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"

              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border border-blue-500/40
    focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
text-[#7E7E7E]   text-[17px]     md:text-[20px]    font-poppins  font-semibold   placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"
              placeholder="Email Address *"
            />

            <Input
              disabled={loading}
              required
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleOnChange}
              //             className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px]
              //         focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
              //  text-[#7E7E7E]   text-[17px]     md:text-[20px]    font-poppins  font-semibold             placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"

              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border border-blue-500/40
  focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
text-[#7E7E7E]   text-[17px]     md:text-[20px]    font-poppins  font-semibold   placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"
              placeholder="Phone Number *"
            />

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

              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border border-blue-500/40
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
            <span className="ml-1">📢</span>
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
  const [current, setCurrent] = useState(0);
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
const WhatsOurCustomersSaySection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Designer",
      image: TestimonialImage,
      content:
        "Working with Sun Consultants was a seamless experience. Their expertise in BIS and WPC certifications helped us navigate the complex regulatory landscape efficiently. Highly recommended for their professional approach.",
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
        "Their expertise in LMPC certification was invaluable for our product launch in India. The consultants provided clear guidance throughout the process and helped us meet all regulatory requirements well within our timeline.",
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
        "Working with Sun Consultants was a seamless experience. Their expertise in BIS and WPC certifications helped us navigate the complex regulatory landscape efficiently. Highly recommended for their professional approach.",
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
        "Their expertise in LMPC certification was invaluable for our product launch in India. The consultants provided clear guidance throughout the process and helped us meet all regulatory requirements well within our timeline.",
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
        "Working with Sun Consultants was a seamless experience. Their expertise in BIS and WPC certifications helped us navigate the complex regulatory landscape efficiently. Highly recommended for their professional approach.",
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
            className="flex gap-8 md:gap-6 pt-10 pb-12"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[400px] bg-[#B5DDEB] p-8 rounded-[20px] shadow-2xl shadow-blue-500/20 relative"
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};
