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

const MachineryElectricalEquipmentSafety = () => {
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

export default MachineryElectricalEquipmentSafety;

const MetaTags = () => {
  const title =
    "Scheme X Latest Notification 2026 | OTR Order Withdrawn | BIS Certification";
  const ogTitle =
    "BIS Scheme X Update 2026 – Omnibus Technical Regulation Order Withdrawn";
  const twitterTitle =
    "BIS Scheme X Update 2026 – Omnibus Technical Regulation Order Withdrawn";
  const metaDescription =
    "Latest BIS Scheme X update 2026. The Government has withdrawn the Omnibus Technical Regulation Order, 2024.";
  const ogDescription =
    "Latest Gazette notification withdraws the Machinery & Electrical Equipment Safety (OTR) Order, 2024. Scheme X continues to exist, while mandatory enforcement is currently suspended.";
  const twitterDescription =
    "Latest Gazette notification withdraws the Machinery & Electrical Equipment Safety (OTR) Order, 2024. Scheme X continues to exist, while mandatory enforcement is currently suspended.";
  const metaKeywords =
    "Scheme X withdrawn, BIS Scheme X update, Scheme X compliance update, BIS Scheme X Certification";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/scheme-x-qco-withdraw-order";
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
                    Machinery & Electrical Equipment Safety (OTR) Order Withdrawn
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4 text-left">
          Machinery & Electrical Equipment Safety (OTR) Order Withdrawn –
          Impact on BIS Scheme X Certification
        </h1>

       

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Introduction
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries, Government of India, has issued a
          significant Gazette notification in January 2026 withdrawing the
          Machinery and Electrical Equipment Safety (Omnibus Technical
          Regulation) Order, 2024. This notification has created widespread
          discussion among manufacturers, importers, and compliance
          professionals, particularly regarding the status of BIS Scheme X
          certification.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In this article we explain the exact legal meaning of the Scheme X -
          OTR notification, its impact on Scheme X, and what manufacturers
          should do next—based strictly on the official Gazette of India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Official Gazette Notification – BIS Scheme X Certification 2026
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          As per the Gazette of India, Extraordinary, published by the Ministry
          of Heavy Industries:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Notification Number: S.O. 239(E)</li>
          <li>Order Date: 14 January 2026</li>
          <li>Gazette Publication Date: 16 January 2026</li>
          <li>
            Issued Under: Section 16 of the Bureau of Indian Standards Act, 2016
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Central Government has rescinded (withdrawn) the earlier
          notification S.O. 3649(E) dated 28 August 2024, which had introduced
          the Machinery and Electrical Equipment Safety (Omnibus Technical
          Regulation) Order, 2024, with immediate effect.
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            The Machinery and Electrical Equipment Safety (Omnibus Technical
            Regulation) Order, 2024
          </li>
          <li>
            The legal enforcement mechanism that made Scheme X certification
            mandatory for machinery and electrical equipment
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What Exactly Has Been Withdrawn Under the Latest Scheme X
          notification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          It is extremely important to understand the scope of this withdrawal.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3 font-semibold">
          Withdrawn:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            The Machinery and Electrical Equipment Safety (Omnibus Technical
            Regulation) Order, 2024
          </li>
          <li>
            The legal enforcement mechanism that made Scheme X certification
            mandatory for machinery and electrical equipment
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3 font-semibold">
          NOT Withdrawn:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Scheme X</li>
          <li>BIS Act, 2016</li>
          <li>Product standards or Indian Standards (IS)</li>
          <li>BIS&apos;s authority to operate Scheme X</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Gazette notification does not mention the withdrawal of Scheme X
          anywhere in the document
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why the Government Withdrew the OTR Order?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          While the Gazette does not provide detailed reasoning, it clearly
          states that the action was taken &quot;in the public interest&quot;
          under the powers conferred by Section 16 of the BIS Act, 2016. This
          indicates a policy-level decision, not a rejection of product safety
          or certification systems.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Misconception: &quot;Scheme X Has Been Withdrawn&quot;
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Many online sources and industry discussions incorrectly claim: that
          &quot;Scheme X has been permanently withdrawn in 2026&quot;.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This statement is legally incorrect.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The official Gazette:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Withdraws the Omnibus Technical Regulation Order</li>
          <li>Does NOT withdraw Scheme X</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Using incorrect wording can lead to misguidance, compliance errors,
          and legal exposure for manufacturers.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What Should Manufacturers Do Now?
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          For Indian Manufacturers
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>No immediate mandatory Scheme X certification requirement</li>
          <li>Continue monitoring Government and BIS notifications</li>
          <li>
            Voluntary certification may still be considered for market
            credibility
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          For Foreign Manufacturers & Importers
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mandatory Scheme X compliance is currently not enforceable</li>
          <li>
            However, product-specific QCOs or future re-notifications may apply
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4 font-semibold">
          Strategic Recommendation
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers should stay prepared for re-introduction of technical
          regulations under a revised framework.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Will Scheme X Become Mandatory Again?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The withdrawal of the OTR Order does not prevent the Government from:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Issuing a new technical regulation</li>
          <li>Re-notifying enforcement dates</li>
          <li>
            Introducing product-specific Quality Control Orders (QCOs)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hence, Scheme X may still become mandatory in the future through a new
          Gazette notification.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Gazette notification issued by the Ministry of Heavy Industries
          marks an important regulatory development for manufacturers dealing in
          machinery and electrical equipment. As per S.O. 239(E) dated 14
          January 2026, the Government has rescinded the Machinery and
          Electrical Equipment Safety (Omnibus Technical Regulation) Order, 2024
          with immediate effect. This action has led to widespread confusion in
          the industry, particularly around the status of BIS Scheme X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          It is crucial to clearly understand that Scheme X itself has not been
          withdrawn, cancelled, or abolished. The Gazette notification does
          not mention Scheme X withdrawal anywhere. What has been withdrawn is
          only the Omnibus Technical Regulation Order, 2024, which earlier acted
          as the legal instrument to make Scheme X compliance mandatory for
          certain categories of machinery and electrical equipment. As a result,
          the mandatory enforcement of Scheme X currently stands suspended.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Scheme X continues to exist as a valid BIS conformity assessment
          scheme under the Bureau of Indian Standards Act, 2016, and the
          Government retains full authority to reintroduce mandatory requirements
          through a fresh notification or a new regulatory framework in the
          future. Manufacturers, importers, and foreign manufacturers are
          therefore advised to stay updated with official BIS and Gazette
          notifications and avoid relying on unverified claims. Strategic
          compliance preparedness remains essential despite the temporary
          regulatory relief.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          1. Is BIS Scheme X withdrawn in 2026?
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          No, BIS Scheme X has not been withdrawn in 2026. The Gazette
          notification withdraws only the Machinery and Electrical Equipment
          Safety (Omnibus Technical Regulation) Order, 2024. Scheme X continues
          to exist as a BIS conformity assessment scheme.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          2. What exactly does the notification say?
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          The notification rescinds S.O. 3649(E) dated 28 August 2024, which
          introduced the Omnibus Technical Regulation Order, 2024. The
          withdrawal is effective immediately and is issued under Section 16 of
          the BIS Act, 2016.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          3. Is Scheme X mandatory after the notification?
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          No. Since the Omnibus Technical Regulation Order has been withdrawn,
          mandatory enforcement of Scheme X is currently on hold until further
          notification by the Government.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          4. Does this affect Indian and foreign manufacturers equally?
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. The withdrawal of the Omnibus Technical Regulation Order applies
          to all manufacturers and importers, including foreign manufacturers,
          as far as mandatory Scheme X enforcement is concerned.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          5. Where can the official notification be verified?
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          The notification is published in the Gazette of India, Extraordinary,
          dated 16 January 2026, issued by the Ministry of Heavy Industries.
        </p>

        <ServiceAuthorEng />
      </div>

      {/* PDF Viewer Section */}
      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/withdrawal_of_the_machinery_and_electrical_equipment_safety_omnibus_technical_regulation_order_2024.pdf"
          title="Machinery & Electrical Equipment Safety (OTR) Order Withdrawal PDF"
          className="w-full h-[800px] bg-white"
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
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
