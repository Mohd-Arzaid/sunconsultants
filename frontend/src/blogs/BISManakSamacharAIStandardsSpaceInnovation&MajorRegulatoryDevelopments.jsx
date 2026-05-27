import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
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

const BISManakSamacharAIStandardsSpaceInnovationMajorRegulatoryDevelopments =
  () => {
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

export default BISManakSamacharAIStandardsSpaceInnovationMajorRegulatoryDevelopments;

const MetaTags = () => {
  const title =
    "BIS Manak Samachar May 2026 Highlights | AI Standards, NBCS 2026 & Space Standardisation";
  const ogTitle =
    "BIS Manak Samachar May 2026 Highlights | AI Standards, NBCS 2026 & Space Standardisation";
  const twitterTitle =
    "BIS Manak Samachar May 2026 Highlights | AI Standards, NBCS 2026 & Space Standardisation";
  const metaDescription =
    "Explore the key highlights from BIS Manak Samachar May 2026 featuring AI & Robotics standardisation, NBCS 2026, space technology standards, conformity assessment reforms, MSME initiatives, and new Indian standards.";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "BIS Manak Samachar May 2026, BIS standards update, AI standardisation India, NBCS 2026, BIS conformity assessment regulations";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/bis-manak-samachar-may-2026";
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
        "https://bis-certifications.com/ministry-updates/bis-manak-samachar-may-2026",
    },
    headline:
      "BIS Manak Samachar – May 2026 Highlights: AI Standards, Space Innovation & Major Regulatory Developments",
    description: metaDescription,
    image:
      "https://bis-certifications.com/blogImages/manaksamacharmay2026.webp",
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
    datePublished: "2026-05-27",
    dateModified: "2026-05-27",
  };

  const ratingSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "BIS Manak Samachar – May 2026 Highlights: AI Standards, Space Innovation & Major Regulatory Developments",
    image:
      "https://bis-certifications.com/blogImages/manaksamacharmay2026.webp",
    description: metaDescription,
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
        name: "What are the major highlights of BIS Manak Samachar May 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The May 2026 edition highlights key developments including AI & Robotics standardisation, NBCS 2026 building safety framework, space system standards, conformity assessment reforms, MSME initiatives, and new Indian Standards for consumer products and accessibility solutions.",
        },
      },
      {
        "@type": "Question",
        name: "What is NBCS 2026 introduced by BIS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NBCS 2026 (National Building Construction Standards) is a new framework introduced by BIS to improve building safety, fire protection, structural integrity, sustainability, and EV infrastructure readiness in India's construction sector.",
        },
      },
      {
        "@type": "Question",
        name: "Why is BIS focusing on AI and Robotics standardisation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS is working on AI and Robotics standards to ensure safety, ethical usage, interoperability, reliability, and global competitiveness of emerging technologies across industries such as manufacturing, agriculture, governance, and automation.",
        },
      },
      {
        "@type": "Question",
        name: "How do BIS reforms benefit MSMEs and startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The latest BIS reforms provide MSMEs and startups with simplified compliance procedures, fee concessions, extended licence validity, faster certification processes, and improved access to domestic and international markets.",
        },
      },
      {
        "@type": "Question",
        name: "What role does BIS play in India's space sector development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS supports India's growing space ecosystem by developing standards for spacecraft systems, satellite technologies, testing procedures, safety protocols, interoperability, and international collaboration to strengthen India's global space competitiveness.",
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

      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(ratingSchema)}</script>
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
                    <Link to="/ministry-updates">Ministry Updates</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Manak Samachar May 2026
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
        <img
          src="/blogImages/ManakSamacharMay2026.png"
          alt="BIS Manak Samachar May 2026 Highlights - AI Standards, NBCS 2026 & Space Standardisation"
          title="BIS Manak Samachar May 2026 Highlights"
          className="w-full rounded-lg mb-6"
        />

        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4 text-left">
          BIS Manak Samachar – May 2026 Highlights: AI Standards, Space
          Innovation &amp; Major Regulatory Developments
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The May 2026 edition of{" "}
          <a
            href="https://www.bis.gov.in/monthly-bis-newsletter/?lang=en#dearflip-df_176506/6/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            BIS Manak Samachar
          </a>{" "}
          showcases India&apos;s
          rapidly evolving standardisation ecosystem, with major focus areas
          including Artificial Intelligence, Robotics, Space Systems, Building
          Safety, MSME empowerment, and regulatory reforms. The newsletter
          reflects how the Bureau of Indian Standards (BIS) is aligning
          India&apos;s quality infrastructure with emerging technologies,
          industrial growth, and global competitiveness.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This month&apos;s developments highlight BIS&apos;s proactive approach
          toward creating future-ready standards that support innovation while
          ensuring safety, reliability, sustainability, and consumer protection.
          From AI governance workshops to new standards for space systems and
          modern construction safety, BIS continues to strengthen India&apos;s
          regulatory and quality framework for both industries and consumers.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Manak Samachar Key Highlights of the Month
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            BIS organised a national workshop on AI &amp; Robotics
            standardisation roadmap.
          </li>
          <li>
            Introduction of NBCS 2026 for advanced building safety and
            infrastructure standards.
          </li>
          <li>
            New Indian standards notified for sunscreens, portable ramps, walking
            sticks, and personal care products.
          </li>
          <li>
            Major focus on India&apos;s growing space ecosystem through
            standardisation.
          </li>
          <li>
            Amendments introduced in BIS Conformity Assessment Regulations 2018.
          </li>
          <li>Stronger enforcement actions against misuse of ISI marks.</li>
          <li>
            BRICS collaboration on international standardisation initiatives.
          </li>
          <li>Expansion of MSME outreach and awareness programmes.</li>
          <li>
            Workshops conducted on Indian medicine, hazardous pollutants, and
            silver hallmarking reforms.
          </li>
          <li>
            Multiple draft standards released for public consultation and industry
            feedback.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS Workshop on AI &amp; Robotics Standardisation
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS conducted a major national workshop focused on &quot;Usage of
          Artificial Intelligence and Robotics: Standardisation Perspective&quot;
          at the National Institute of Training for Standardisation, Noida. The
          workshop brought together policymakers, industry experts, academic
          institutions, and researchers to discuss safety, ethics,
          interoperability, and governance frameworks for AI-driven technologies.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The discussions emphasised responsible AI deployment, sector-specific
          testing standards, and integration of AI into industries such as
          agriculture, manufacturing, and public governance. BIS also highlighted
          the importance of aligning Indian AI standards with global frameworks to
          improve innovation and competitiveness.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Why It Matters
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          As AI adoption increases across industries, standardisation becomes
          critical for safety, trust, transparency, and international acceptance.
          These initiatives can help Indian businesses create globally compliant
          AI products while reducing regulatory uncertainty.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          NBCS 2026: New Era of Construction Safety Standards
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          One of the most important announcements in this edition is the release
          of NBCS 2026 (National Building Construction Standards). The framework
          introduces updated safety provisions, modernised building regulations,
          and future-ready infrastructure requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Key improvements include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Enhanced structural and electrical integrity standards</li>
          <li>Modernised fire safety requirements</li>
          <li>Safety provisions for EV charging infrastructure</li>
          <li>Updated concrete durability standards</li>
          <li>Sustainability and waste management measures</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Why It Matters
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          India&apos;s rapid urbanisation requires safer and more efficient
          infrastructure systems. NBCS 2026 is expected to improve construction
          quality, simplify compliance, and support sustainable urban development.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          New Standards for Consumer Safety &amp; Accessibility
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS notified several new and revised Indian Standards covering sectors
          such as transport engineering, personal care products, water resources,
          and assistive technologies. Important additions include standards for:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Walking sticks</li>
          <li>Portable ramps</li>
          <li>Sunscreen cosmetic products</li>
          <li>Face wash and shower gel specifications</li>
          <li>Catchment Area Treatment plans</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Special focus was given to accessibility products under the National
          List of Essential Assistive Products (NLEAP). These standards aim to
          improve mobility support for elderly individuals and persons with
          disabilities.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Why It Matters
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          These standards improve product safety, durability, and performance
          while supporting inclusive growth and accessibility across public
          infrastructure and consumer markets.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Space Standardisation: India&apos;s Next Frontier
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          A major feature article in the newsletter focuses on India&apos;s
          growing space ecosystem and the role of standardisation in supporting
          satellite systems, mission safety, interoperability, and private sector
          participation. BIS highlighted multiple standards covering spacecraft
          design, testing, structural integrity, quality assurance, and launch
          systems.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The article also discusses India hosting ISO TC 20/SC 14 meetings related
          to Space Systems and Operations, strengthening the country&apos;s
          participation in global space governance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Why It Matters
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          India&apos;s commercial space sector is expanding rapidly with startups
          and private players entering the market. Standardisation helps ensure
          mission reliability, international collaboration, and global
          competitiveness for Indian space technologies.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standards Under Development
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The newsletter provides updates on ongoing standardisation work under
          MSD 19 – Human Resource &amp; Innovation Management Sectional Committee.
          BIS is developing standards related to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Innovation Management Systems</li>
          <li>Sustainable Human Resource Management</li>
          <li>Workforce data quality</li>
          <li>Innovation measurement methodologies</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Additionally, multiple draft standards have been released for public
          consultation across sectors such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Civil engineering</li>
          <li>Electrical systems</li>
          <li>Environmental management</li>
          <li>Mechanical engineering</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Why It Matters
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Industry participation in draft standards helps create practical and
          market-relevant regulations. These upcoming standards can influence
          future compliance requirements across multiple sectors.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conformity Assessment &amp; Regulatory Reforms
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS announced amendments to the BIS (Conformity Assessment)
          Regulations 2018, introducing important changes in licensing validity,
          renewal systems, third-party testing requirements, and MSME concessions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Key reforms include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Initial licence validity extended up to five years</li>
          <li>Mandatory third-party lab testing</li>
          <li>Simplified processes for self-declaration schemes</li>
          <li>Fee concessions for MSMEs and startups</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS also carried out enforcement raids against misuse of ISI marks and
          non-compliant products in multiple regions.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Why It Matters
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          These reforms improve transparency, strengthen product quality control,
          and create a more business-friendly compliance environment while
          protecting consumers from unsafe or counterfeit products.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Industry-Academia &amp; International Collaboration
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS strengthened its global and institutional partnerships through
          several initiatives:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            India hosted the inaugural BRICS meeting of National Standards Bodies
          </li>
          <li>
            Discussions on international cooperation and harmonisation of
            standards
          </li>
          <li>
            Collaboration with IIT Palakkad for faculty sensitisation programmes
          </li>
          <li>
            Workshops on Unani medicine standardisation and environmental
            pollutants
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Why It Matters
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Industry-academia collaboration accelerates research-driven
          standardisation, while international cooperation helps Indian standards
          align with global practices and export opportunities.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          MSME Outreach &amp; Public Awareness Initiatives
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS expanded outreach programmes targeting MSMEs, rural communities,
          students, and industrial clusters. Awareness campaigns were organised
          on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product safety</li>
          <li>Quality standards</li>
          <li>Hallmarking</li>
          <li>
            <a
              href="/what-is-bis-certificate-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS Certification
            </a>{" "}
            benefits
          </li>
          <li>Consumer awareness</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS also highlighted its focus on reducing compliance burdens for MSMEs
          through digitalisation and procedural simplification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Why It Matters
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Improved awareness helps smaller businesses understand quality
          compliance requirements and access broader domestic and international
          markets.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Major Announcements This Month
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Launch of NBCS 2026 framework</li>
          <li>AI &amp; Robotics standardisation roadmap discussions</li>
          <li>Amendment to BIS Conformity Assessment Regulations 2018</li>
          <li>New standards for sunscreen cosmetics and assistive technologies</li>
          <li>Release of multiple draft standards for public consultation</li>
          <li>
            India hosting international ISO space standardisation meetings
          </li>
          <li>Silver Hallmarking 2.0 roadmap discussions</li>
          <li>MSME-focused standardisation initiatives and fee concessions</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The May 2026 edition of Manak Samachar demonstrates BIS&apos;s
          commitment to strengthening India&apos;s quality ecosystem through
          innovation-driven standardisation, regulatory reforms, and global
          collaboration. From AI governance and space systems to MSME empowerment
          and infrastructure safety, BIS is building a strong foundation for a
          safer, smarter, and globally competitive India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As industries continue to evolve, these initiatives will play a crucial
          role in ensuring quality, sustainability, and technological advancement
          across sectors.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Manak Samachar May 2026
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. What are the major highlights of BIS Manak Samachar May 2026?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The May 2026 edition highlights key developments including AI &amp;
          Robotics standardisation, NBCS 2026 building safety framework, space
          system standards, conformity assessment reforms, MSME initiatives, and
          new Indian Standards for consumer products and accessibility solutions.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. What is NBCS 2026 introduced by BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          NBCS 2026 (National Building Construction Standards) is a new framework
          introduced by BIS to improve building safety, fire protection, structural
          integrity, sustainability, and EV infrastructure readiness in India&apos;s
          construction sector.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Why is BIS focusing on AI and Robotics standardisation?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS is working on AI and Robotics standards to ensure safety, ethical
          usage, interoperability, reliability, and global competitiveness of
          emerging technologies across industries such as manufacturing,
          agriculture, governance, and automation.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. How do BIS reforms benefit MSMEs and startups?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The latest BIS reforms provide MSMEs and startups with simplified
          compliance procedures, fee concessions, extended licence validity, faster
          certification processes, and improved access to domestic and
          international markets.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. What role does BIS play in India&apos;s space sector development?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS supports India&apos;s growing space ecosystem by developing
          standards for spacecraft systems, satellite technologies, testing
          procedures, safety protocols, interoperability, and international
          collaboration to strengthen India&apos;s global space competitiveness.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              ISI Mark Certification Scheme
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS FMCS (Foreign Manufacturers Certification Scheme)
            </a>
          </li>
        </ul>

        <ServiceAuthorEng />
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
