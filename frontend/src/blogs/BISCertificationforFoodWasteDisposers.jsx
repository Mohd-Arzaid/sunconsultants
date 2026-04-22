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

const BISCertificationforFoodWasteDisposers = () => {
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

export default BISCertificationforFoodWasteDisposers;

const MetaTags = () => {
  const title = "BIS Certificate for Food Waste Disposers";
  const ogTitle = "BIS Certificate for Food Waste Disposers";
  const twitterTitle = "BIS Certificate for Food Waste Disposers";
  const metaDescription =
    "Get BIS Certificate for Food Waste Disposers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Food Waste Disposers as per IS 302 (Part 1):2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Food Waste Disposers under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Food Waste Disposers, BIS License for Food Waste Disposers, IS 302 (Part 1):2024, BIS Certification for Food Waste Disposers";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/food-waste-disposers";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://bis-certifications.com/blogs/isi-products/food-waste-disposers",
    },
    headline: "BIS Certification for Food Waste Disposers",
    description:
      "BIS Certification for Food Waste Disposers is now mandatory in India under IS 302 (Part 1): 2024, complying with the Safety of Household, Commercial, and Similar Electrical Appliances (Quality Control) Order, 2025.",
    image:
      "https://bis-certifications.com/blogImages/BISLicenseforFoodWasteDisposers.png",
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
  };
  const ratingSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "BIS Certification for Food Waste Disposers",
    image:
      "https://bis-certifications.com/blogImages/BISLicenseforFoodWasteDisposers.png",
    description:
      "BIS Certification for Food Waste Disposers is now mandatory in India under IS 302 (Part 1): 2024, complying with the Safety of Household, Commercial, and Similar Electrical Appliances (Quality Control) Order, 2025.",
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
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is BIS certification important specifically for food waste disposers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Food waste disposers operate in a unique environment where water, organic waste, and electricity interact continuously, increasing the risk of electrical leakage and corrosion. Unlike dry appliances, these devices must function safely even when exposed to moisture and food acids. The BIS Certification for Food Waste Disposers ensures that the motor housing is sealed, insulation remains intact in wet conditions, and grounding systems work effectively. It also verifies that the grinding chamber does not expose users to moving parts. This makes the certification critical not only for compliance but also for preventing real-world kitchen hazards.",
        },
      },
      {
        "@type": "Question",
        name: "How does IS 302 (Part 1):2024 address moisture-related risks in food waste disposers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IS 302 (Part 1):2024 includes specific testing protocols to ensure that electrical components remain protected in high-moisture environments like kitchen sinks. For food waste disposers, the standard evaluates whether water can seep into motor compartments or electrical wiring. It also checks insulation resistance after exposure to moisture and verifies earthing effectiveness. The product is tested under simulated wet conditions to ensure it does not cause electric shock even when water splashes or leaks occur. This makes the standard highly relevant for disposers, which are constantly exposed to water during operation.",
        },
      },
      {
        "@type": "Question",
        name: "What are the common design modifications required to obtain a BIS Certificate for Food Waste Disposers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manufacturers often need to redesign certain components to meet compliance requirements. These include improving waterproof sealing around the motor unit, using corrosion-resistant materials inside the grinding chamber, and adding thermal protection devices to prevent overheating. In many cases, insulation thickness must be increased to prevent leakage current. Some designs also require enhanced drainage flow to avoid internal blockages. The BIS Certificate for Food Waste Disposers is only granted after these improvements ensure the appliance performs safely under Indian kitchen conditions, including continuous use and exposure to food waste residue.",
        },
      },
      {
        "@type": "Question",
        name: "What types of testing failures are most common during BIS certification for food waste disposers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most frequent failures occur due to water ingress, overheating motors, and insufficient insulation. If water enters electrical components during testing, the product is immediately rejected. Another common issue is excessive temperature rise during continuous grinding cycles, which indicates poor thermal management. Some products also fail due to weak earthing or improper wiring. In addition, corrosion resistance tests may reveal material degradation when exposed to food acids. These failures highlight the importance of pre-testing and design validation before applying for BIS Certification for Food Waste Disposers.",
        },
      },
      {
        "@type": "Question",
        name: "How does BIS testing simulate real kitchen conditions for food waste disposers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Testing for food waste disposers is designed to replicate actual kitchen scenarios rather than ideal laboratory conditions. The appliance is tested while processing different types of food waste, including fibrous and hard materials. Water flow is introduced to simulate sink usage, and the motor is run continuously to assess heat buildup. The product may also be tested under blocked drainage conditions to evaluate safety during misuse. These real-world simulations ensure that the BIS License for Food Waste Disposers is granted only to products that can handle everyday kitchen stress without compromising safety.",
        },
      },
      {
        "@type": "Question",
        name: "Is BIS certification required for both domestic and commercial food waste disposers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the requirement applies to both domestic and commercial units because the core risks remain similar. Whether installed in a household kitchen or a restaurant, food waste disposers operate under wet conditions with continuous load on the motor. Commercial units may require additional evaluation due to higher capacity and longer operating cycles. The BIS Licence for Food Waste Disposers ensures that both types meet safety benchmarks, including electrical protection, mechanical durability, and resistance to corrosion. This ensures safe usage across different environments, from small homes to large-scale food establishments.",
        },
      },
      {
        "@type": "Question",
        name: "What role does earthing play in BIS compliance for food waste disposers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Earthing is a critical safety feature for food waste disposers because the appliance is installed in a metal sink environment with constant water exposure. If a fault occurs, proper earthing ensures that excess current is safely directed away, preventing electric shock. During BIS testing, the effectiveness of the earthing system is carefully evaluated under wet conditions. Any failure in grounding can result in rejection of the product. Therefore, achieving a BIS Certificate for Food Waste Disposers requires a robust and reliable earthing mechanism that performs consistently during real usage.",
        },
      },
      {
        "@type": "Question",
        name: "How does BIS certification affect the installation requirements of food waste disposers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS certification indirectly influences installation practices by ensuring that the product is designed for safe integration with kitchen plumbing and electrical systems. Certified disposers are built to handle water pressure, drainage flow, and electrical connections without leakage or short circuits. The design must support proper sealing between the sink and disposer unit. Additionally, wiring must be compatible with standard Indian voltage conditions. The BIS Certification for Food Waste Disposers ensures that installers and users can safely operate the appliance without requiring complex modifications or risking improper setup.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical BIS certification cost for Food Waste Disposers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The BIS certification cost for Food Waste Disposers depends on several factors, including product complexity, number of models, and testing requirements. Costs generally include application fees, laboratory testing charges, factory inspection expenses, and annual license fees. Products with higher motor capacity or advanced features may require additional testing, increasing the overall cost. The cost of BIS certification for Food Waste Disposers can vary significantly, but investing in compliance helps avoid regulatory penalties and ensures smoother market entry, making it a valuable long-term investment for manufacturers.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to complete the BIS certification process for food waste disposers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The BIS certification process for Food Waste Disposers typically takes between 4 to 8 weeks, depending on the readiness of the product and documentation. Testing duration can vary based on lab workload and product complexity. Delays often occur if the product fails initial tests or if documents are incomplete. Factory inspection scheduling may also impact timelines. Manufacturers who prepare technical files and conduct pre-testing can significantly reduce delays. Efficient planning ensures faster approval and allows businesses to launch their products in the Indian market without unnecessary setbacks.",
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(ratingSchema)}
      </script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
                    BIS Certification for Food Waste Disposers
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
        <MainContentLeft />
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Food Waste Disposers – Complete Guide
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFoodWasteDisposers.png"
            title="BIS License for Food Waste Disposers"
            alt="BIS Certification for Food Waste Disposers under IS 302 (Part 1):2024 – ISI mark and compliance"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification for Food Waste Disposers confirms that electrically
          operated kitchen waste grinding appliances comply with IS 302 (Part
          1):2024, ensuring safe operation in wet environments, protection
          against electrical hazards, and reliable performance under continuous
          load. This certification is essential for legal sale and safe usage in
          Indian households and commercial kitchens.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Food waste disposers—also known as kitchen waste grinders—are rapidly
          gaining popularity in Indian homes, hotels, and commercial kitchens.
          These devices are installed beneath sinks and are designed to shred
          food waste into small particles, allowing it to pass through plumbing
          systems efficiently.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Unlike many household appliances, food waste disposers operate in a
          unique combination of water, organic waste, and electricity, making
          them particularly sensitive from a safety standpoint. The presence of
          moisture, metal blades or grinding components, and continuous motor
          operation introduces risks that cannot be ignored.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For instance, improper insulation can lead to electric shock hazards,
          while poorly designed grinding mechanisms may cause mechanical failure
          or blockages. Additionally, since these devices are connected directly
          to kitchen drainage systems, leakage and corrosion become critical
          concerns over time.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          To ensure that such appliances are safe for everyday use in Indian
          conditions, compliance with IS 302 (Part 1):2024 is required.
          Obtaining a BIS Certificate for Food Waste Disposers validates that
          the product has undergone rigorous testing and meets the necessary
          safety benchmarks.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and distributors, this certification
          plays a key role in ensuring smooth market entry and long-term product
          reliability.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Food Waste Disposers
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Food waste disposers differ significantly from other appliances
          because they combine mechanical grinding with electrical operation in
          a wet environment. This creates a distinct set of risks that must be
          carefully controlled.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2">
          A typical disposer consists of:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>A high-speed motor</li>
          <li>Grinding chamber with rotating impellers</li>
          <li>Electrical wiring exposed to moisture conditions</li>
          <li>Drainage integration with plumbing</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2">
          Because of this setup, several issues can arise if the product is not
          properly designed:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Water ingress into electrical components</li>
          <li>Motor overheating due to heavy food load</li>
          <li>Blade or grinding mechanism failure</li>
          <li>Electrical leakage through metal sink connections</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2">
          The BIS Certification for Food Waste Disposers addresses these risks
          by ensuring:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proper sealing of electrical parts against water exposure</li>
          <li>Safe motor performance under varying load conditions</li>
          <li>Stability of grinding mechanisms</li>
          <li>Protection against accidental contact with moving parts</li>
          <li>Reliable insulation and earthing</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Instead of evaluating the product in isolation, the certification
          process ensures that the disposer functions safely within a real
          kitchen environment, where water flow, food waste, and continuous
          usage are common.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Food Waste Disposers
        </h2>
        <p className="text-gray-600 text-base font-geist font-semibold mb-4">
          IS 302 (Part 1):2024
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard provides a comprehensive framework for evaluating
          electrical safety and operational reliability of appliances like food
          waste disposers.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          IS 302 (Part 1):2024 applies to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrically operated food waste disposers</li>
          <li>Appliances installed in kitchens (domestic and commercial)</li>
          <li>Devices operating under wet conditions</li>
          <li>Products connected to standard power supply systems</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Under this standard, food waste disposers are categorized based on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Motor capacity</li>
          <li>Installation type (under-sink or integrated systems)</li>
          <li>Intended usage (household vs commercial kitchens)</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Food Waste Disposers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Electrical Safety in Wet Conditions
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Food waste disposers operate in direct contact with water. Without
          proper insulation, users may face:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electric shocks</li>
          <li>Short circuits</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Mechanical Safety
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The grinding mechanism can pose risks if not properly designed:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Injury during maintenance</li>
          <li>Internal damage due to overload</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Fire and Overheating Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Continuous motor operation can lead to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heat buildup</li>
          <li>Component failure</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Consumer Protection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Certification ensures that the appliance performs safely even under:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy food waste loads</li>
          <li>Continuous kitchen usage</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Regulatory Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Without a BIS License for Food Waste Disposers, products may face:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Market restrictions</li>
          <li>Legal penalties</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. Brand Credibility
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          A certified product reflects:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Compliance with Indian safety norms</li>
          <li>Reliability in real-world usage</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Food Waste Disposers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must first confirm that their product falls under IS 302
          (Part 1):2024, based on its design and functionality.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The application includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product specifications</li>
          <li>Manufacturing details</li>
          <li>Technical documentation</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certification Cost Structure
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The BIS certification cost for Food Waste Disposers includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Testing fees</li>
          <li>Application charges</li>
          <li>Inspection costs</li>
          <li>Annual license fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The cost of BIS certification for Food Waste Disposers varies depending
          on product complexity and testing scope.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing as per IS 302 (Part 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Samples are tested in BIS-recognized laboratories for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical safety</li>
          <li>Water resistance</li>
          <li>Mechanical durability</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Quality Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          BIS officials evaluate:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing processes</li>
          <li>Quality control systems</li>
          <li>Product consistency</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License and ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          After approval, the manufacturer receives a BIS Licence for Food Waste
          Disposers, allowing use of the ISI mark.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Manufacturers must maintain:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product consistency</li>
          <li>Regular quality checks</li>
          <li>Compliance with BIS standards</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mt-4 mb-4">
          <a href="https://bis-certifications.com/what-is-bis-certificate-indian-bis" className="text-blue-600 hover:underline">Check complete details about documentation, cost, and process etc.</a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration certificate</li>
          <li>Manufacturing process details</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Business license</li>
          <li>Authorization documents</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product design drawings</li>
          <li>Circuit diagrams</li>
          <li>Component specifications</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application forms</li>
          <li>Test reports</li>
          <li>Declarations</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          All BIS certification documents for Food Waste Disposers must be
          accurate and complete.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 302 (Part 1):2024
        </h2>
        <p className="text-gray-600 text-base font-geist font-semibold mb-2">
          Safety Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protection against electric shock</li>
          <li>Insulation resistance</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-4"></div>

        <p className="text-gray-600 text-base font-geist font-semibold mb-2">
          Performance Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Grinding efficiency</li>
          <li>Motor performance</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-4"></div>

        <p className="text-gray-600 text-base font-geist font-semibold mb-2">
          Durability Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Continuous operation cycles</li>
          <li>Load testing</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-4"></div>

        <p className="text-gray-600 text-base font-geist font-semibold mb-2">
          Quality Verification Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Corrosion resistance</li>
          <li>Water ingress protection</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          All testing must be conducted in BIS-approved laboratories.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Food waste disposers are increasingly becoming a standard kitchen
          appliance, but their combination of water, electricity, and mechanical
          operation makes safety compliance essential.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certification for Food Waste Disposers under IS 302
          (Part 1):2024 ensures that products meet strict safety requirements
          and perform reliably in Indian conditions.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, securing a BIS License for Food Waste
          Disposers is not only a regulatory necessity but also a strategic step
          toward building trust and expanding in the Indian market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Why is BIS certification important specifically for food waste
              disposers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Food waste disposers operate in a unique environment where water,
              organic waste, and electricity interact continuously, increasing the
              risk of electrical leakage and corrosion. Unlike dry appliances,
              these devices must function safely even when exposed to moisture and
              food acids. The BIS Certification for Food Waste Disposers ensures
              that the motor housing is sealed, insulation remains intact in wet
              conditions, and grounding systems work effectively. It also verifies
              that the grinding chamber does not expose users to moving parts.
              This makes the certification critical not only for compliance but
              also for preventing real-world kitchen hazards.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. How does IS 302 (Part 1):2024 address moisture-related risks in
              food waste disposers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              IS 302 (Part 1):2024 includes specific testing protocols to ensure
              that electrical components remain protected in high-moisture
              environments like kitchen sinks. For food waste disposers, the
              standard evaluates whether water can seep into motor compartments or
              electrical wiring. It also checks insulation resistance after
              exposure to moisture and verifies earthing effectiveness. The product
              is tested under simulated wet conditions to ensure it does not cause
              electric shock even when water splashes or leaks occur. This makes the
              standard highly relevant for disposers, which are constantly exposed
              to water during operation.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What are the common design modifications required to obtain a BIS
              Certificate for Food Waste Disposers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Manufacturers often need to redesign certain components to meet
              compliance requirements. These include improving waterproof sealing
              around the motor unit, using corrosion-resistant materials inside the
              grinding chamber, and adding thermal protection devices to prevent
              overheating. In many cases, insulation thickness must be increased to
              prevent leakage current. Some designs also require enhanced drainage
              flow to avoid internal blockages. The BIS Certificate for Food Waste
              Disposers is only granted after these improvements ensure the
              appliance performs safely under Indian kitchen conditions, including
              continuous use and exposure to food waste residue.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What types of testing failures are most common during BIS
              certification for food waste disposers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The most frequent failures occur due to water ingress, overheating
              motors, and insufficient insulation. If water enters electrical
              components during testing, the product is immediately rejected.
              Another common issue is excessive temperature rise during continuous
              grinding cycles, which indicates poor thermal management. Some
              products also fail due to weak earthing or improper wiring. In
              addition, corrosion resistance tests may reveal material degradation
              when exposed to food acids. These failures highlight the importance of
              pre-testing and design validation before applying for BIS
              Certification for Food Waste Disposers.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How does BIS testing simulate real kitchen conditions for food
              waste disposers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Testing for food waste disposers is designed to replicate actual
              kitchen scenarios rather than ideal laboratory conditions. The
              appliance is tested while processing different types of food waste,
              including fibrous and hard materials. Water flow is introduced to
              simulate sink usage, and the motor is run continuously to assess heat
              buildup. The product may also be tested under blocked drainage
              conditions to evaluate safety during misuse. These real-world
              simulations ensure that the BIS License for Food Waste Disposers is
              granted only to products that can handle everyday kitchen stress
              without compromising safety.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Is BIS certification required for both domestic and commercial
              food waste disposers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, the requirement applies to both domestic and commercial units
              because the core risks remain similar. Whether installed in a
              household kitchen or a restaurant, food waste disposers operate
              under wet conditions with continuous load on the motor. Commercial
              units may require additional evaluation due to higher capacity and
              longer operating cycles. The BIS Licence for Food Waste Disposers
              ensures that both types meet safety benchmarks, including
              electrical protection, mechanical durability, and resistance to
              corrosion. This ensures safe usage across different environments, from
              small homes to large-scale food establishments.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. What role does earthing play in BIS compliance for food waste
              disposers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Earthing is a critical safety feature for food waste disposers
              because the appliance is installed in a metal sink environment with
              constant water exposure. If a fault occurs, proper earthing ensures
              that excess current is safely directed away, preventing electric
              shock. During BIS testing, the effectiveness of the earthing system
              is carefully evaluated under wet conditions. Any failure in grounding
              can result in rejection of the product. Therefore, achieving a BIS
              Certificate for Food Waste Disposers requires a robust and reliable
              earthing mechanism that performs consistently during real usage.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. How does BIS certification affect the installation requirements
              of food waste disposers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS certification indirectly influences installation practices by
              ensuring that the product is designed for safe integration with
              kitchen plumbing and electrical systems. Certified disposers are built
              to handle water pressure, drainage flow, and electrical connections
              without leakage or short circuits. The design must support proper
              sealing between the sink and disposer unit. Additionally, wiring
              must be compatible with standard Indian voltage conditions. The BIS
              Certification for Food Waste Disposers ensures that installers and
              users can safely operate the appliance without requiring complex
              modifications or risking improper setup.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. What is the typical BIS certification cost for Food Waste
              Disposers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The BIS certification cost for Food Waste Disposers depends on
              several factors, including product complexity, number of models, and
              testing requirements. Costs generally include application fees,
              laboratory testing charges, factory inspection expenses, and annual
              license fees. Products with higher motor capacity or advanced
              features may require additional testing, increasing the overall cost.
              The cost of BIS certification for Food Waste Disposers can vary
              significantly, but investing in compliance helps avoid regulatory
              penalties and ensures smoother market entry, making it a valuable
              long-term investment for manufacturers.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. How long does it take to complete the BIS certification process
              for food waste disposers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The BIS certification process for Food Waste Disposers typically
              takes between 4 to 8 weeks, depending on the readiness of the
              product and documentation. Testing duration can vary based on lab
              workload and product complexity. Delays often occur if the product
              fails initial tests or if documents are incomplete. Factory
              inspection scheduling may also impact timelines. Manufacturers who
              prepare technical files and conduct pre-testing can significantly
              reduce delays. Efficient planning ensures faster approval and allows
              businesses to launch their products in the Indian market without
              unnecessary setbacks.
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
        <FaqAuthorEng questionNumber={10} />
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
