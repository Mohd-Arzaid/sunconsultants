import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import YouTubeFacade from "@/components/ui/youtube-facade";
import { videosData } from "../data/videosData.js";
import Footer from "@/common/Footer";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.jsx";

const Videos = () => {
  return (
    <div className="bg-white relative">
      <Helmet>
        <title>BIS Certification Videos - Expert Insights</title>
        <meta
          name="description"
          content="Watch comprehensive video guides on BIS certification, CDSCO registration, EPR compliance, and more. Expert insights to guide you through India's regulatory landscape."
        />
        <meta
          name="keywords"
          content="BIS certification, CDSCO registration, EPR compliance, regulatory compliance, India, certification experts"
        />

        {/* JSON-LD Breadcrumb structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://bis-certifications.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Videos About BIS Certification",
                item: "https://bis-certifications.com/videos-about-bis-certification",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-fit font-inter">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    Videos About BIS Certification
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white pt-10 md:pt-16">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl font-geist font-semibold text-neutral-800 text-center tracking-tight">
            Videos About BIS Certification
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-lg text-center md:text-xl text-neutral-500 font-geist leading-relaxed">
            Discover our comprehensive video library covering BIS certification,
            CDSCO registration, EPR compliance, and more. Expert insights to
            guide you through India&apos;s regulatory landscape.
          </p>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-10 md:pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosData.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white"
            >
              <YouTubeFacade videoId={video.embedId} title={video.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="my-4 border-2 border-neutral-200 bg-neutral-50 rounded-lg mx-auto p-4 md:p-12 text-center max-w-[88rem]">
        <h2 className="text-3xl md:text-4xl font-geist leading-none font-semibold text-neutral-800 mb-6">
          Need Personalized Guidance?
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 font-geist leading-relaxed mb-8 max-w-3xl mx-auto">
          While our videos provide comprehensive information, every business has
          unique requirements. Contact our certification experts for
          personalized guidance tailored to your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-800 text-white font-geist font-medium rounded-lg hover:bg-neutral-700 transition-colors duration-200"
          >
            Contact Our Experts
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-700 font-geist font-medium rounded-lg hover:bg-neutral-50 transition-colors duration-200"
          >
            Learn More About Us
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Videos;
