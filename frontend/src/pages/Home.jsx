import { lazy, Suspense } from "react";
import Footer from "@/common/Footer";
import HomeSEO from "@/components/manual/home-page-sections/HomeSEO";
import Hero from "@/components/manual/home-page-sections/Hero";
import LogoTicker from "@/components/manual/home-page-sections/LogoTicker";
import LatestNews from "@/components/manual/home-page-sections/LatestNews";
import CertificationAndAchievements from "@/components/manual/home-page-sections/CertificationAndAchievements";
import { WhatsOurCustomersSaySection } from "@/components/manual/home-page-sections/WhatsOurCustomersSaySection";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import Countries from "@/components/manual/home-page-sections/Countries";
import HomeServices from "@/components/manual/HomeServices";
import OurServicesHomeSkeleton from "@/components/ui/our-services-home-skeleton";
import AuditsMarqueeSkeleton from "@/components/ui/audits-marquee-skeleton";
import WebinarSeminarMarqueeSkeleton from "@/components/ui/webinar-seminar-marquee-skeleton";
import ContactHomeSkeleton from "@/components/ui/contact-home-skeleton";

// Lazy load OurServices component
const OurServices = lazy(() =>
  import("@/components/manual/home-page-sections/OurServices")
);

// Lazy load AuditsMarquee component
const AuditsMarquee = lazy(() =>
  import("@/components/manual/home-page-sections/AuditsMarquee")
);

// Lazy load WebinarSeminarMarquee component
const WebinarSeminarMarquee = lazy(() =>
  import("@/components/manual/home-page-sections/WebinarSeminarMarquee")
);

// Lazy load Contact component
const Contact = lazy(() =>
  import("@/components/manual/home-page-sections/Contact")
);

const Home = ({ onVideoPopupChange }) => {
  return (
    <main className="w-full">
      <HomeSEO />
      <section aria-label="Hero Section" className="w-full">
        <Hero />
      </section>

      <section aria-label="Partner Logos" className="w-full">
        <LogoTicker />
      </section>

      <section aria-label="Our Services" className="w-full">
        <Suspense fallback={<OurServicesHomeSkeleton />}>
          <OurServices />
        </Suspense>
      </section>

      <section aria-label="Countries We Serve" className="w-full">
        <Suspense fallback={<AuditsMarqueeSkeleton />}>
          <AuditsMarquee />
        </Suspense>
      </section>

      <section aria-label="Contact Form" className="w-full">
        <Suspense fallback={<ContactHomeSkeleton />}>
          <Contact />
        </Suspense>
      </section>

      <section aria-label="Countries We Serve" className="w-full">
        <Suspense fallback={<WebinarSeminarMarqueeSkeleton />}>
          <WebinarSeminarMarquee />
        </Suspense>
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

      <section aria-label="Video Showcase" className="w-full">
        <VideoSection onVideoPopupChange={onVideoPopupChange} />
      </section>

      <Footer />
    </main>
  );
};

export default Home;

// Export Services component for backward compatibility
export const Services = HomeServices;
