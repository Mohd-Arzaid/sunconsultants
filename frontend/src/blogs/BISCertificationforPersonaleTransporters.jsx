import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterEng from "@/components/manual/Footer/FooterEng";

const BISCertificateForPersonaleTransporters = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterEng />
    </div>
  );
};

export default BISCertificateForPersonaleTransporters;

const MetaTags = () => {
  const title =
    "BIS Certificate for Personal-eTransporters - Complete Guide";
  const ogTitle =
    "BIS Certificate for Personal-eTransporters - Complete Guide";
  const twitterTitle =
    "BIS Certificate for Personal-eTransporters - Complete Guide";
  const metaDescription =
    "Get BIS Certificate for Personal-eTransporters under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Personal-eTransporters as per IS 302 (Part 1):2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Personal-eTransporters under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Personal-eTransporters, BIS License for Personal-eTransporters, IS 302 (Part 1):2024, BIS Certification for Personal-eTransporters";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/personal-etransporters";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://bis-certifications.com/blogs/isi-products/personal-etransporters",
          },
          headline: "BIS Certification for Personal-eTransporters",
          description:
            "BIS certification for personal-e-transporters (PeTs) is mandatory under IS 302 (Part 1):2024 to ensure safety, quality, and compliance in India, requiring the ISI mark.  ",
          image:
            "https://bis-certifications.com/blogImages/BISLicenseforPersonaleTransporters%20.png",
          author: {
            "@type": "Person",
            name: "Dhruv Aggarwal",
            url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
          },
          publisher: {
            "@type": "Organization",
            name: "Sun Certifications India",
            logo: {
              "@type": "ImageObject",
              url: "https://bis-certifications.com/company-logo/company-logo.webp",
            },
          },
          datePublished: "2026-02-01",
          dateModified: "2026-04-14",
        })}
      </script>

      {/* Rating Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "BIS Certification for Personal-eTransporters",
          image:
            "https://bis-certifications.com/blogImages/BISLicenseforPersonaleTransporters%20.png",
          description:
            "BIS certification for personal-e-transporters (PeTs) is mandatory under IS 302 (Part 1):2024 to ensure safety, quality, and compliance in India, requiring the ISI mark. ",
          brand: {
            "@type": "Brand",
            name: "Sun Certifications India",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "58042",
          },
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Why do personal eTransporters require BIS certification?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Personal eTransporters contain electric motors, lithium batteries, and electronic control systems. If these components malfunction, they may cause battery overheating, electrical shock, or fire hazards. BIS certification ensures that the product has undergone rigorous electrical safety testing and complies with Indian safety standards before being sold to consumers.",
              },
            },
            {
              "@type": "Question",
              name: "Which types of devices are classified as personal eTransporters?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Personal eTransporters include devices designed for short-distance individual mobility. Examples include hoverboards, self-balancing scooters, compact electric ride-on transporters, and small mobility devices used for indoor or recreational travel.",
              },
            },
            {
              "@type": "Question",
              name: "Can imported personal eTransporters be sold without BIS certification?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Imported electrical mobility devices must comply with Indian safety standards before entering the market. Customs authorities may hold shipments that do not have valid BIS certification documentation",
              },
            },
            {
              "@type": "Question",
              name: "How long does the BIS certification process take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The process generally takes four to eight weeks if documentation and testing proceed smoothly. Delays may occur if the product fails safety testing or additional documentation is required.",
              },
            },
            {
              "@type": "Question",
              name: "What happens if a product fails laboratory testing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "If the product fails testing, the manufacturer receives a detailed report explaining the issue. The product must then be modified to meet safety requirements and resubmitted for testing.",
              },
            },
            {
              "@type": "Question",
              name: "Is factory inspection mandatory during certification?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. BIS officials must verify the manufacturing facility to ensure that the factory has appropriate quality control procedures and the capability to produce products that consistently meet safety standards.",
              },
            },
            {
              "@type": "Question",
              name: "Can multiple product variants be included under one certification?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, similar models with identical electrical design and safety features may be grouped under one license. However, major design differences may require separate certification.",
              },
            },
            {
              "@type": "Question",
              name: "What safety tests are typically performed?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Testing generally includes insulation resistance testing, leakage current measurement, electric strength testing, temperature rise evaluation, abnormal operation testing, and mechanical safety verification.",
              },
            },
            {
              "@type": "Question",
              name: "Does BIS certification ensure product reliability?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "While the primary purpose of certification is safety compliance, the rigorous testing process also helps ensure product durability and operational reliability.",
              },
            },
            {
              "@type": "Question",
              name: "Is certification required for both recreational and commercial devices?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. BIS certification requirements apply regardless of whether the device is used for recreational mobility, personal transportation, or commercial facility use.",
              },
            },
            {
              "@type": "Question",
              name: "Can startups apply for BIS certification?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. BIS certification is available to manufacturers and importers of any size, provided they meet the regulatory requirements.",
              },
            },
            {
              "@type": "Question",
              name: "How long is a BIS license valid?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The license remains valid as long as the manufacturer continues to comply with BIS regulations and completes periodic renewals and surveillance inspections.",
              },
            },
          ],
        })}
      </script>
    </Helmet>
  );
};

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Latest Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certification for Personal-eTransporters
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Personal-eTransporters
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforPersonaleTransporters .png"
            title="BIS License for Personal-eTransporters"
            alt="BIS Certificate for Personal-eTransporters - IS 302 (Part 1):2024 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Personal eTransporters—such as hoverboards, self-balancing scooters, and compact electric mobility devices—must comply with Indian electrical safety requirements before entering the market. A valid BIS Certificate for Personal-eTransporters under IS 302 (Part 1):2024 confirms safe electrical design, battery protection, and insulation compliance, allowing the product to be legally manufactured, imported, or sold in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Personal electric transport devices are transforming the way people travel short distances in urban environments. Products such as hoverboards, self-balancing scooters, compact personal mobility scooters, electric ride-on devices, and smart mobility platforms are becoming increasingly popular across India. These devices are used for personal commuting, recreational mobility, logistics within warehouses, and accessibility support in commercial spaces.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unlike conventional mechanical devices, personal eTransporters rely heavily on electric motors, lithium-ion batteries, motor controllers, charging circuits, sensors, and electronic control systems. These components allow users to move efficiently but also introduce potential safety hazards. Poorly designed systems can lead to battery overheating, electric shock, insulation failure, charger malfunction, or fire hazards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To mitigate such risks and ensure standardized safety practices, India requires electrical products to comply with national standards. Therefore, manufacturers and importers must obtain a BIS Certificate for Personal-eTransporters under IS 302 (Part 1):2024 before introducing these products into the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A valid BIS Certification for Personal-eTransporters demonstrates that the product has undergone testing for electrical safety, insulation integrity, and operational reliability. This guide provides a comprehensive explanation of the BIS License for Personal-eTransporters, including regulatory scope, certification process, documentation requirements, testing parameters, costs, compliance obligations, and penalties for non-compliance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This information is especially useful for electric mobility manufacturers, importers, startup brands, distributors, e-commerce sellers, and compliance professionals working in India&apos;s rapidly expanding micro-mobility sector.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is the official product conformity assessment program administered by the Bureau of Indian Standards. BIS establishes Indian Standards and verifies that regulated products meet the required safety, quality, and reliability benchmarks before they are sold to consumers.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificate Meaning
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS certificate is a regulatory authorization issued to manufacturers confirming that their product complies with the applicable Indian Standard. Once approved, the manufacturer may affix the ISI mark on the product.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Purpose of BIS Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certification system is designed to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protect consumers from unsafe electrical products</li>
          <li>Establish consistent product quality standards</li>
          <li>Reduce risks of electrical accidents and fires</li>
          <li>Support regulatory enforcement across industries</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI Mark Significance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The ISI mark on personal eTransporters indicates that:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>The product meets electrical safety standards</li>
          <li>Insulation and wiring systems have been tested</li>
          <li>The device complies with Indian regulatory requirements</li>
          <li>The product is approved for legal sale in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Personal-eTransporters
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (Part 1):2024 — Safety of Household and Similar Electrical Appliances
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable standard for electrical components in personal eTransporters is IS 302 (Part 1):2024, which specifies safety requirements for electrical appliances used in household and similar environments.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard evaluates the electrical safety aspects of products that include electric motors and battery systems. In the context of personal eTransporters, it applies to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hoverboards and self-balancing scooters</li>
          <li>Compact electric mobility platforms</li>
          <li>Battery-powered ride-on transporters</li>
          <li>Personal electric mobility devices used indoors or in controlled environments</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Intent
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The objective of the standard is to ensure:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protection against electric shock</li>
          <li>Safe insulation and wiring design</li>
          <li>Motor overheating protection</li>
          <li>Battery and charger safety</li>
          <li>Safe operation during abnormal conditions</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Who Must Comply
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers of personal eTransporters</li>
          <li>Importers and distributors</li>
          <li>Foreign manufacturers exporting to India</li>
          <li>Private-label brands marketing such devices</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Personal-eTransporters
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumer Safety Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Personal eTransporters rely on high-capacity lithium batteries and powerful motors. Without proper safety design, the following risks may arise:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Battery overheating or explosion</li>
          <li>Electric shock from faulty wiring</li>
          <li>Motor overheating during continuous operation</li>
          <li>Fire hazards due to charger malfunction</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Certification ensures these risks are minimized.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Personal-eTransporters
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The certification process begins with identifying:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product category</li>
          <li>Electrical ratings</li>
          <li>Battery capacity</li>
          <li>Motor power</li>
          <li>Product design variants</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Process
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS application process for Personal-eTransporters typically includes:
        </p>
        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registration on the BIS online portal</li>
          <li>Submission of the BIS application form</li>
          <li>Uploading required technical documentation</li>
          <li>Payment of certification fees</li>
        </ol>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fees & Cost Structure
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The bis certificate cost for Personal-eTransporters depends on several factors:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Number of product models</li>
          <li>Complexity of electrical design</li>
          <li>Testing requirements</li>
          <li>Factory inspection scope</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          Typical cost components include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fee</li>
          <li>Laboratory testing charges</li>
          <li>Factory inspection fee</li>
          <li>License fee</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Product samples must be tested in BIS-recognized laboratories for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Insulation resistance</li>
          <li>Dielectric strength</li>
          <li>Temperature rise</li>
          <li>Leakage current</li>
          <li>Abnormal operation</li>
          <li>Mechanical durability</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS inspectors visit the manufacturing facility to verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Production processes</li>
          <li>Quality control systems</li>
          <li>Testing equipment</li>
          <li>Component traceability</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License & ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          After successful testing and inspection:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS issues the certification license</li>
          <li>Manufacturer is authorized to use the ISI mark</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          After certification, manufacturers must maintain compliance through:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Periodic surveillance inspections</li>
          <li>Sample testing</li>
          <li>License renewal</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mt-4 mb-4">
          <a href="https://bis-certifications.com/what-is-bis-certificate-indian-bis" className="text-blue-600 hover:underline">Check complete details about documentation, cost, and process etc.</a>
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration certificate</li>
          <li>Manufacturing process description</li>
          <li>Machinery list</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company incorporation certificate</li>
          <li>GST registration</li>
          <li>Trademark authorization</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical circuit diagrams</li>
          <li>Battery specifications</li>
          <li>Motor controller details</li>
          <li>Product user manual</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS application form</li>
          <li>Declarations and undertakings</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These collectively form bis certification documents for Personal-eTransporters.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 302 (Part 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Mandatory tests include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electric strength test</li>
          <li>Insulation resistance test</li>
          <li>Leakage current test</li>
          <li>Temperature rise test</li>
          <li>Abnormal operation test</li>
          <li>Mechanical safety evaluation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing must be conducted at BIS-recognized laboratories.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Personal-eTransporters?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Certification is required for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturers</li>
          <li>Importers</li>
          <li>Foreign manufacturers exporting to India</li>
          <li>Distributors and traders</li>
          <li>E-commerce sellers</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Personal-eTransporters under IS 302 (Part 1):2024 is essential for legally manufacturing, importing, and selling electric personal mobility devices in India. A valid BIS Certification for Personal-eTransporters ensures electrical safety, battery protection, and regulatory compliance, while the BIS License for Personal-eTransporters enhances consumer trust and market acceptance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers and importers who secure certification early can reduce regulatory risks and establish a strong presence in India&apos;s rapidly expanding electric mobility sector.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Personal-eTransporters
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Why do personal eTransporters require BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Personal eTransporters contain electric motors, lithium batteries, and electronic control systems. If these components malfunction, they may cause battery overheating, electrical shock, or fire hazards. BIS certification ensures that the product has undergone rigorous electrical safety testing and complies with Indian safety standards before being sold to consumers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Which types of devices are classified as personal eTransporters?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Personal eTransporters include devices designed for short-distance individual mobility. Examples include hoverboards, self-balancing scooters, compact electric ride-on transporters, and small mobility devices used for indoor or recreational travel.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Can imported personal eTransporters be sold without BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No. Imported electrical mobility devices must comply with Indian safety standards before entering the market. Customs authorities may hold shipments that do not have valid BIS certification documentation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. How long does the BIS certification process take?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The process generally takes four to eight weeks if documentation and testing proceed smoothly. Delays may occur if the product fails safety testing or additional documentation is required.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. What happens if a product fails laboratory testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              If the product fails testing, the manufacturer receives a detailed report explaining the issue. The product must then be modified to meet safety requirements and resubmitted for testing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Is factory inspection mandatory during certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. BIS officials must verify the manufacturing facility to ensure that the factory has appropriate quality control procedures and the capability to produce products that consistently meet safety standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Can multiple product variants be included under one certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, similar models with identical electrical design and safety features may be grouped under one license. However, major design differences may require separate certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. What safety tests are typically performed?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Testing generally includes insulation resistance testing, leakage current measurement, electric strength testing, temperature rise evaluation, abnormal operation testing, and mechanical safety verification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Does BIS certification ensure product reliability?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              While the primary purpose of certification is safety compliance, the rigorous testing process also helps ensure product durability and operational reliability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Is certification required for both recreational and commercial devices?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. BIS certification requirements apply regardless of whether the device is used for recreational mobility, personal transportation, or commercial facility use.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. Can startups apply for BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. BIS certification is available to manufacturers and importers of any size, provided they meet the regulatory requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. How long is a BIS license valid?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The license remains valid as long as the manufacturer continues to comply with BIS regulations and completes periodic renewals and surveillance inspections.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Get details about BIS certification for foreign manufacturers</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">Get details about BIS certification for Indian manufacturers</a>
          </li>
        </ul>

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={1} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Best Certificate Consultant
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Mark (ISI License) for Foreign Manufacture
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO Registration Certification
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registration
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plastic Waste Management
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificate certifications
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Certificate certifications
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Registration Certificate
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
