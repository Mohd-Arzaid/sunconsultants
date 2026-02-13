import { lazy, Suspense } from "react";
import HomeSEO from "@/components/manual/home-page-sections/HomeSEO";
import Hero from "@/components/manual/home-page-sections/Hero";
import LogoTicker from "@/components/manual/home-page-sections/LogoTicker";
import OurServices from "@/components/manual/home-page-sections/OurServices";
import AuditsMarquee from "@/components/manual/home-page-sections/AuditsMarquee";
import WebinarSeminarMarquee from "@/components/manual/home-page-sections/WebinarSeminarMarquee";
import Contact from "@/components/manual/home-page-sections/Contact";
import LatestNewsSkeleton from "@/components/ui/latest-news-skeleton";
import CountriesSkeleton from "@/components/ui/countries-skeleton";
import CertificationAndAchievementsSkeleton from "@/components/ui/certification-and-achievements-skeleton";
import WhatsOurCustomersSaySkeleton from "@/components/ui/whats-our-customers-say-skeleton";
import VideoSectionSkeleton from "@/components/ui/video-section-skeleton";
import FooterSkeleton from "@/components/ui/footer-skeleton";

// Above-the-fold sections (LogoTicker, OurServices, AuditsMarquee, Contact, WebinarSeminarMarquee)
// are imported directly to avoid CLS (Cumulative Layout Shift) — no skeleton swap, no icon jump.

// Lazy load below-the-fold sections only
const LatestNews = lazy(() =>
  import("@/components/manual/home-page-sections/LatestNews")
);
const Countries = lazy(() =>
  import("@/components/manual/home-page-sections/Countries")
);
const CertificationAndAchievements = lazy(() =>
  import("@/components/manual/home-page-sections/CertificationAndAchievements")
);
const WhatsOurCustomersSaySection = lazy(() =>
  import("@/components/manual/home-page-sections/WhatsOurCustomersSaySection")
);
const VideoSection = lazy(() =>
  import("@/components/manual/home-page-sections/VideoSection")
);
const Footer = lazy(() => import("@/common/Footer"));

const Home = ({ onVideoPopupChange }) => {
  return (
    <main className="w-full">
      <HomeSEO />
      <section aria-label="Hero Section" className="w-full">
        <Hero />
      </section>

      <section aria-label="Partner Logos -Top" className="w-full">
        <LogoTicker />
      </section>

      <section aria-label="Our Services" className="w-full">
        <OurServices />
      </section>

      <section aria-label="International Audits Showcase" className="w-full">
        <AuditsMarquee />
      </section>

      <section aria-label="Contact Form" className="w-full">
        <Contact />
      </section>

      <section aria-label="Webinars and Seminars Showcase" className="w-full">
        <WebinarSeminarMarquee />
      </section>

      {/* Below-the-fold: lazy with reserved min-height to avoid CLS when content loads */}
      <section aria-label="Latest News" className="w-full min-h-20 md:min-h-28">
        <Suspense fallback={<LatestNewsSkeleton />}>
          <LatestNews />
        </Suspense>
      </section>

      <section aria-label="Countries We Serve" className="w-full min-h-[280px] md:min-h-[420px]">
        <Suspense fallback={<CountriesSkeleton />}>
          <Countries />
        </Suspense>
      </section>

      <section aria-label="Certification and Achievements" className="w-full min-h-[320px] md:min-h-[360px]">
        <Suspense fallback={<CertificationAndAchievementsSkeleton />}>
          <CertificationAndAchievements />
        </Suspense>
      </section>

      <section aria-label="What Our Customers Say" className="w-full min-h-[380px] md:min-h-[420px]">
        <Suspense fallback={<WhatsOurCustomersSaySkeleton />}>
          <WhatsOurCustomersSaySection />
        </Suspense>
      </section>

      <section aria-label="Partner Logos - Bottom" className="w-full">
        <LogoTicker />
      </section>

      <section aria-label="Video Showcase" className="w-full min-h-[320px] md:min-h-[380px]">
        <Suspense fallback={<VideoSectionSkeleton />}>
          <VideoSection onVideoPopupChange={onVideoPopupChange} />
        </Suspense>
      </section>

      <section aria-label="Footer" className="w-full min-h-[400px]">
        <Suspense fallback={<FooterSkeleton />}>
          <Footer />
        </Suspense>
      </section>
    </main>
  );
};

export default Home;
