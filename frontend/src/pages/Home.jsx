import Footer from "@/common/Footer";
import { Suspense } from "react";
import PropTypes from "prop-types";
import HomeSEO from "@/components/manual/home-page-sections/HomeSEO";

// Loading component for sections
const SectionLoader = () => (
  <div className="py-8 flex items-center justify-center">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-600"></div>
  </div>
);

import Hero from "@/components/manual/home-page-sections/Hero";
import LogoTicker from "@/components/manual/home-page-sections/LogoTicker";
import OurServices from "@/components/manual/home-page-sections/OurServices";
import AuditsMarquee from "@/components/manual/home-page-sections/AuditsMarquee";
import WebinarSeminarMarquee from "@/components/manual/home-page-sections/WebinarSeminarMarquee";
import LatestNews from "@/components/manual/home-page-sections/LatestNews";
import CertificationAndAchievements from "@/components/manual/home-page-sections/CertificationAndAchievements";
import { WhatsOurCustomersSaySection } from "@/components/manual/home-page-sections/WhatsOurCustomersSaySection";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import Countries from "@/components/manual/home-page-sections/Countries";
import Contact from "@/components/manual/home-page-sections/Contact";
import HomeServices from "@/components/manual/HomeServices";

const Home = ({ onVideoPopupChange }) => {
  return (
    <main className="w-full">
      <HomeSEO />
      <section aria-label="Hero Section" className="w-full min-h-[520px]">
        <Hero />
      </section>

      <section aria-label="Partner Logos" className="w-full min-h-[160px]">
        <LogoTicker />
      </section>

      <section
        aria-label="Our Services"
        className="w-full min-h-[640px]"
        style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
      >
        <Suspense fallback={<SectionLoader />}>
          <OurServices />
        </Suspense>
      </section>

      <section
        aria-label="Countries We Serve"
        className="w-full min-h-[240px]"
        style={{ contentVisibility: "auto", containIntrinsicSize: "260px" }}
      >
        <Suspense fallback={<SectionLoader />}>
          <AuditsMarquee />
        </Suspense>
      </section>

      <section
        aria-label="Contact Form"
        className="w-full min-h-[760px]"
        style={{ contentVisibility: "auto", containIntrinsicSize: "780px" }}
      >
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </section>

      <section
        aria-label="Countries We Serve"
        className="w-full min-h-[240px]"
        style={{ contentVisibility: "auto", containIntrinsicSize: "260px" }}
      >
        <Suspense fallback={<SectionLoader />}>
          <WebinarSeminarMarquee />
        </Suspense>
      </section>

      <section
        aria-label="Latest News"
        className="w-full min-h-[420px]"
        style={{ contentVisibility: "auto", containIntrinsicSize: "440px" }}
      >
        <Suspense fallback={<SectionLoader />}>
          <LatestNews />
        </Suspense>
      </section>

      <section
        aria-label="Countries We Serve"
        className="w-full min-h-[560px]"
        style={{ contentVisibility: "auto", containIntrinsicSize: "580px" }}
      >
        <Suspense fallback={<SectionLoader />}>
          <Countries />
        </Suspense>
      </section>

      <section
        aria-label="Certification and Achievements"
        className="w-full min-h-[380px]"
        style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}
      >
        <Suspense fallback={<SectionLoader />}>
          <CertificationAndAchievements />
        </Suspense>
      </section>

      <section
        aria-label="What Our Customers Say"
        className="w-full min-h-[420px]"
        style={{ contentVisibility: "auto", containIntrinsicSize: "440px" }}
      >
        <Suspense fallback={<SectionLoader />}>
          <WhatsOurCustomersSaySection />
        </Suspense>
      </section>

      <section aria-label="Partner Logos" className="w-full min-h-[160px]">
        <LogoTicker />
      </section>

      <section aria-label="Video Showcase" className="w-full min-h-[520px]">
        <VideoSection onVideoPopupChange={onVideoPopupChange} />
      </section>

      <Footer />
    </main>
  );
};

Home.propTypes = {
  onVideoPopupChange: PropTypes.func,
};

export default Home;

// Export Services component for backward compatibility
export const Services = HomeServices;
