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
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterEng from "@/components/manual/Footer/FooterEng";

const MSMEExemptionQCO2026 = () => {
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

export default MSMEExemptionQCO2026;

const MetaTags = () => {
  const title =
    "MSME Exemption Under QCO 2026 | New Quality Control Order Amendment Explained";
  const ogTitle =
    "Government Grants MSME Exemption in QCO 2026 – Full Notification Explained";
  const twitterTitle =
    "MSME Relief: QCO Amendment 2026 Explained";
  const metaDescription =
    "Government of India amends multiple Quality Control Orders (QCOs) on 12 February 2026. MSMEs registered under Udyam with investment up to ₹1 crore and turnover up to ₹5 crore are exempt from mandatory BIS compliance for specified products. Read full details.";
  const ogDescription =
    "The Ministry of Commerce & Industry amends key Quality Control Orders. MSMEs registered under Udyam with investment up to ₹1 crore and turnover up to ₹5 crore are now exempt from mandatory BIS compliance for specified products.";
  const twitterDescription =
    "New QCO notification exempts eligible Udyam-registered MSMEs from BIS compliance for 8 product categories. Check investment and turnover criteria now.";
  const metaKeywords =
    "QCO amendment 2026 , MSME exemption QCO , Quality Control Order update , BIS compliance";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/msme-exemption-qco-2026";
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
                    MSME Exemption Under QCO 2026
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
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          New Quality Control Order (QCO) Amendments for MSMEs (Feb 2026)
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          On 12 February 2026 the Ministry of Commerce &amp; Industry (DPIIT)
          issued a Gazette notification (S.O. 777(E)) amending several BIS
          Quality Control Orders (QCOs). These orders – legal rules under the
          Bureau of Indian Standards Act – require certain products to meet
          safety and quality standards. The government stated that the changes
          are “necessary or expedient in the public interest”. In practice, the
          amendments exempt qualified MSMEs from these QCO requirements,
          reducing their regulatory burden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Exemptions for Udyam-registered MSMEs
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Under the new rules, goods made by Micro and Small Enterprises
          (MSMEs) registered on the Udyam Portal (Government of India&apos;s
          official MSME registry) are exempted from the QCOs, if they meet all
          of the following conditions:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <span className="font-semibold">Registered MSME:</span> The
            business must be listed on the Udyam Portal (Ministry of MSME).
          </li>
          <li>
            <span className="font-semibold">Investment limit:</span> Total
            investment in plant, machinery or equipment (original cost) is
            less than or equal to ₹1 crore.
          </li>
          <li>
            <span className="font-semibold">Turnover limit:</span> Annual
            turnover for the previous financial year is less than or equal to
            ₹5 crore, certified by a Chartered Accountant.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          If a Udyam-registered enterprise satisfies these criteria, nothing in
          the relevant QCOs will apply to goods or articles manufactured by
          that enterprise. In other words, it does not need to obtain BIS
          certification under those QCOs.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Products covered by the exemptions
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The exemptions apply to eight specific product categories whose QCOs
          have been amended. In each case, goods made in India by eligible
          MSMEs will be exempt from the mandatory BIS standards. The affected
          categories are:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Flame-producing lighters</li>
          <li>Potable water bottles</li>
          <li>Welding rods &amp; electrodes</li>
          <li>Insulated flasks, bottles &amp; containers (for domestic use)</li>
          <li>Electric ceiling-type fans</li>
          <li>Laboratory glassware</li>
          <li>Air coolers and air filters</li>
          <li>Furniture</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For example, a small fan manufacturer registered on Udyam with
          investment less than or equal to ₹1 crore and turnover less than or
          equal to ₹5 crore will be exempt from the fan QCO. The same logic
          applies to manufacturers of bottles, lighters, furniture and other
          listed products.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Effective date
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          These amendments came into force immediately upon publication in the
          Official Gazette. Since the notification was published on 12 February
          2026, the exemptions are effective from that date. Eligible MSMEs can
          rely on the new rules right away; they do not need to retroactively
          apply BIS marks to goods made on or after 12 February 2026.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Support for MSMEs and ease of doing business
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          This move is part of the government&apos;s efforts to support small
          businesses and streamline compliance. By carving out a clear
          exemption for genuine Micro and Small Enterprises, the government
          aims to reduce the burden of mandatory certification on tiny
          industries.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In practice, qualified MSMEs in the above sectors no longer need to
          undergo the time-consuming BIS testing and labeling process for these
          products. This should help manufacturers focus on production and
          growth, knowing the government is easing regulatory hurdles for them.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Government&apos;s latest QCO amendment dated 12 February 2026 is
          a significant relief measure for Micro and Small Enterprises across
          multiple manufacturing sectors. By introducing a clear exemption for
          Udyam-registered MSMEs with:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Investment in plant and machinery up to ₹1 crore, and</li>
          <li>
            Turnover up to ₹5 crore (previous financial year, Chartered
            Accountant certified)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          the government has meaningfully reduced compliance pressure on
          genuinely small manufacturers. However, businesses must carefully
          evaluate their investment and turnover thresholds and ensure proper
          documentation, including Udyam registration and CA certification, to
          claim the exemption confidently.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This amendment reflects the Government&apos;s intent to balance
          product quality regulation with practical support for small
          enterprises, ensuring that compliance requirements do not hinder
          early-stage manufacturing growth.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Frequently Asked Questions (FAQ) – QCO Amendment for MSMEs
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          1. What is the latest QCO amendment issued in February 2026?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Commerce &amp; Industry (DPIIT) issued a notification
          dated 12 February 2026 amending several existing Quality Control
          Orders (QCOs). The amendment provides an exemption to certain MSMEs
          from mandatory compliance under specified QCOs.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          2. Who can claim exemption under the new QCO amendment?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The exemption applies to MSMEs registered under the Udyam Portal of
          the Ministry of Micro, Small and Medium Enterprises, provided they
          meet both of the following conditions:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Investment in plant and machinery or equipment does not exceed ₹1
            crore (original cost).
          </li>
          <li>
            Turnover does not exceed ₹5 crore in the previous financial year,
            certified by a Chartered Accountant.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          If both conditions are satisfied, the applicable QCO will not apply
          to goods manufactured by such enterprises.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          3. Is Udyam Registration mandatory to claim this exemption?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Only enterprises registered on the Udyam Portal are eligible.
          Without valid Udyam registration, the exemption cannot be claimed.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          4. Does this exemption apply to all manufacturers?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. This exemption applies only to eligible MSMEs that meet the
          investment and turnover limits. Medium and large manufacturers must
          continue to comply with the applicable QCO requirements and obtain
          mandatory BIS certification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          5. Which products are covered under this QCO amendment?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The exemption applies to the following product categories:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Flame-producing lighters</li>
          <li>Potable water bottles</li>
          <li>Welding rods and electrodes</li>
          <li>Insulated flasks, bottles and containers (for domestic use)</li>
          <li>Electric ceiling type fans</li>
          <li>Laboratory glassware</li>
          <li>Air coolers and air filters</li>
          <li>Furniture</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Only MSMEs manufacturing these products and meeting the criteria are
          eligible.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          6. From when is this amendment effective?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The amendment came into force from the date of publication in the
          Official Gazette, i.e. 12 February 2026. The exemption is effective
          immediately from that date.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          7. Do eligible MSMEs still need BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          If an MSME qualifies under the investment and turnover limits and is
          registered on the Udyam Portal, then BIS certification under the
          specified QCOs is not mandatory for those products. However,
          voluntary certification may still be considered for market
          credibility.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          8. How will investment and turnover be verified?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Investment and turnover will be verified through proper
          documentation:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Investment must be calculated based on the original cost of plant
            and machinery or equipment.
          </li>
          <li>
            Turnover must be certified by a Chartered Accountant for the
            previous financial year.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Proper records should be maintained in case of regulatory
          verification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          9. What happens if an MSME exceeds the ₹1 crore or ₹5 crore limit?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          If an enterprise crosses either the investment or turnover threshold:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>The exemption will no longer apply.</li>
          <li>The manufacturer must comply with the applicable QCO.</li>
          <li>
            BIS certification will become mandatory under the respective order.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          10. Why has the government introduced this exemption?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The government aims to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Support Micro and Small Enterprises</li>
          <li>Reduce regulatory burden</li>
          <li>Promote ease of doing business</li>
          <li>Encourage small-scale manufacturing growth</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This amendment balances quality control objectives with practical
          relief for smaller manufacturers.
        </p>

        <ServiceAuthorEng />
      </div>

      {/* PDF Viewer Section */}
      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/msme-exemption-qco-2026.pdf"
          title="MSME Exemption Under QCO 2026 Gazette Notification PDF"
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

