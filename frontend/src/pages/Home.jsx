import { lazy, Suspense } from "react";
import Footer from "@/common/Footer";
import HomeSEO from "@/components/manual/home-page-sections/HomeSEO";
import Hero from "@/components/manual/home-page-sections/Hero";
import LogoTicker from "@/components/manual/home-page-sections/LogoTicker";
import HomeServices from "@/components/manual/HomeServices";
import OurServicesHomeSkeleton from "@/components/ui/our-services-home-skeleton";
import AuditsMarqueeSkeleton from "@/components/ui/audits-marquee-skeleton";
import WebinarSeminarMarqueeSkeleton from "@/components/ui/webinar-seminar-marquee-skeleton";
import ContactHomeSkeleton from "@/components/ui/contact-home-skeleton";
import LatestNewsSkeleton from "@/components/ui/latest-news-skeleton";
import CountriesSkeleton from "@/components/ui/countries-skeleton";
import CertificationAndAchievementsSkeleton from "@/components/ui/certification-and-achievements-skeleton";
import WhatsOurCustomersSaySkeleton from "@/components/ui/whats-our-customers-say-skeleton";
import VideoSectionSkeleton from "@/components/ui/video-section-skeleton";

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

// Lazy load LatestNews component
const LatestNews = lazy(() =>
  import("@/components/manual/home-page-sections/LatestNews")
);

// Lazy load Countries component
const Countries = lazy(() =>
  import("@/components/manual/home-page-sections/Countries")
);

// Lazy load CertificationAndAchievements component
const CertificationAndAchievements = lazy(() =>
  import("@/components/manual/home-page-sections/CertificationAndAchievements")
);

// Lazy load WhatsOurCustomersSaySection component
const WhatsOurCustomersSaySection = lazy(() =>
  import("@/components/manual/home-page-sections/WhatsOurCustomersSaySection")
);

// Lazy load VideoSection component
const VideoSection = lazy(() =>
  import("@/components/manual/home-page-sections/VideoSection")
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
        <Suspense fallback={<LatestNewsSkeleton />}>
          <LatestNews />
        </Suspense>
      </section>

      <section aria-label="Countries We Serve" className="w-full">
        <Suspense fallback={<CountriesSkeleton />}>
          <Countries />
        </Suspense>
      </section>

      <section aria-label="Certification and Achievements" className="w-full">
        <Suspense fallback={<CertificationAndAchievementsSkeleton />}>
          <CertificationAndAchievements />
        </Suspense>
      </section>

      <section aria-label="What Our Customers Say" className="w-full">
        <Suspense fallback={<WhatsOurCustomersSaySkeleton />}>
          <WhatsOurCustomersSaySection />
        </Suspense>
      </section>

      <section aria-label="Partner Logos" className="w-full">
        <LogoTicker />
      </section>

      <section aria-label="Video Showcase" className="w-full">
        <Suspense fallback={<VideoSectionSkeleton />}>
          <VideoSection onVideoPopupChange={onVideoPopupChange} />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
};

export default Home;

// Export Services component for backward compatibility
export const Services = HomeServices;
