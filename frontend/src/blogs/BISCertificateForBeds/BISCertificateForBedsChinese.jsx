import FaqAuthorChinese from "@/components/common/FaqAuthor/FaqAuthorChinese";
import ServicesRightSideContentChinese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentChinese";
import ManyUsersAlsoReadChinese from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadChinese";
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
import FooterChinese from "@/components/manual/Footer/FooterChinese";
import LanguageSelector from "./LanguageSelector";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForBedsChinese = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterChinese />
    </div>
  );
};

export default BISCertificateForBedsChinese;

const MetaTags = () => {
  const title = "床具BIS证书 | IS 17635:2022 BIS许可证";
  const ogTitle = "床具BIS认证 – IS 17635:2022指南";
  const twitterTitle = "床具BIS许可证 | IS 17635:2022";
  const metaDescription =
    "获取IS 17635:2022下的床具BIS证书。流程、文件、测试、成本及印度BIS认证时间表。";
  const ogDescription =
    "IS 17635:2022床具BIS认证完整指南。了解流程、成本、文件、测试及BIS许可证优势。";
  const twitterDescription =
    "申请IS 17635:2022下的床具BIS证书。了解BIS流程、文件、测试、费用及印度时间表。";
  const metaKeywords =
    "床具BIS证书, 床具BIS许可证, IS 17635:2022, 床具BIS认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/chuangju-is-17635";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal，Sun Certification India运营主管";

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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/chuangju-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/bedden-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/betten-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/beddo-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/chimdae-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/camas-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-is-17635"
      />

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
              "https://bis-certifications.com/blogs/isi-products/chuangju-is-17635",
          },
          headline: "床具BIS证书",
          description:
            "印度床具BIS认证是一项强制性质量保证要求，主要依据IS 17635:2022，确保符合安全、耐用性和性能标准。",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
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
          name: "床具BIS证书",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "印度床具BIS认证是一项强制性质量保证要求，主要依据IS 17635:2022，确保符合安全、耐用性和性能标准。",
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
              name: "床具在印度是否必须进行BIS认证？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "是的，根据IS 17635:2022。",
              },
            },
            {
              "@type": "Question",
              name: "BIS证书有效期是多久？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1–2年，可续期。",
              },
            },
            {
              "@type": "Question",
              name: "外国制造商可以申请吗？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "可以，根据FMCS。",
              },
            },
            {
              "@type": "Question",
              name: "BIS证书可以在线申请吗？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "可以。",
              },
            },
            {
              "@type": "Question",
              name: "床具上是否必须标注ISI标志？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "是的。",
              },
            },
            {
              "@type": "Question",
              name: "流程需要多长时间？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30–45天。",
              },
            },
            {
              "@type": "Question",
              name: "木床和金属床都涵盖吗？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "是的，如果符合IS 17635:2022。",
              },
            },
            {
              "@type": "Question",
              name: "工厂检查是否强制？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "是的。",
              },
            },
            {
              "@type": "Question",
              name: "贸易商可以申请BIS吗？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "只有拥有制造控制权的品牌所有者。",
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
                    <Link to="/">首页</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">最新博客</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    床具BIS证书 – IS 17635:2022
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
        <ServicesRightSideContentChinese />
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
          床具BIS证书 – IS 17635:2022完整指南
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="床具BIS许可证"
            alt="床具BIS证书 - IS 17635:2022 BIS认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          床具BIS证书是印度对用于家庭和商业用途的床具制造商和进口商的强制性合规要求。根据最新印度标准IS
          17635:2022 – 床具（安全要求），所有床具在印度市场销售前必须满足严格的安全、耐用性、结构性和性能基准。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          床具是家庭、酒店、医院、宿舍、PG住宿和机构设施中日常使用的基本家具产品。任何结构缺陷、尖锐边缘、材料故障或负载能力差都可能导致严重伤害。为防止此类风险，印度标准局（BIS）强制要求床具进行{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            BIS认证
          </a>
          。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本综合指南解释了床具BIS许可证的所有内容，包括适用标准、认证流程、测试要求、文件、费用、时间表、处罚和优势。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          床具BIS认证要点
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  项目
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  详情
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["产品", "床具"],
                ["印度标准", "IS 17635:2022"],
                ["标准名称", "床具 – 规范"],
                ["认证计划", "BIS ISI标志认证"],
                ["监管机构", "印度标准局（BIS）"],
                ["适用标志", "ISI标志"],
                ["合格申请人", "印度制造商和外国制造商"],
                [
                  "合规要求",
                  "根据适用的家具QCO（质量控制令）强制要求",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "认证计划" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        BIS ISI标志认证
                      </a>
                    ) : particular === "合规要求" ? (
                      <>
                        根据适用的{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>家具QCO（质量控制令）</strong>
                        </a>
                        强制要求
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是床具BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          床具BIS认证是一种符合性评估流程，制造商通过该流程证明其产品符合IS
          17635:2022中规定的要求。通过测试、工厂评估和监管审查验证合规性后，制造商将获得BIS许可证，并可在认证产品上标注ISI标志。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该认证框架旨在确保印度市场上销售的床具满足以下既定要求：
        </p>

        <ul className={LIST_CLASS}>
          <li>结构强度</li>
          <li>稳定性</li>
          <li>耐用性</li>
          <li>表面性能</li>
          <li>正常使用时的安全性</li>
          <li>可预见误用条件下的性能</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          这些要求有助于为不同床具设计和制造材料建立一致的质量和消费者保护基准。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么床具BIS认证很重要
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          床具直接影响用户安全，因为它们设计用于在较长时间内支撑显著负载。设计不良或测试不足的产品可能出现结构故障、不稳定、变形或过早老化。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022通过定义制造商在产品进入市场前必须满足的标准化性能和安全要求来解决这些担忧。该标准包括与强度、稳定性、耐用性、工艺和表面性能相关的要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          对制造商而言，BIS认证具有多项优势：
        </p>

        <ul className={LIST_CLASS}>
          <li>在印度合法销售涵盖产品的授权</li>
          <li>证明符合印度标准</li>
          <li>提高市场接受度</li>
          <li>增强消费者信心</li>
          <li>降低监管行动风险</li>
          <li>在机构和商业采购中的竞争优势</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17635:2022床具概述
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          印度政府已为多种家具产品引入质量控制令（QCO），以确保投放市场的产品满足规定的安全和质量要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          当IS
          17635:2022纳入适用的家具QCO时，制造商必须根据方案-I获得BIS认证，并按照BIS许可要求使用标准标志（ISI标志）。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022是规定适用于家庭和非家庭环境中成人用户床具的性能和安全要求的印度标准。该标准确立的要求有助于确保床具在其预期使用寿命内保持安全、功能和耐用。
        </p>

        <h3 className={SUB_HEADING_CLASS}>IS 17635:2022的目的</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022旨在为采用各种材料和构造方法制造的现代床具设计提供全面的基于性能的标准。该标准取代了较早的IS
          7259（第1部分）：1988，后者主要关注木制床具。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          该标准评估床具时不将合规性限制于特定材料或制造工艺，而是关注成品在规定的测试条件下的表现。这种方法能够一致地评估木制、金属、工程木材和其他床具结构。
        </p>

        <h3 className={SUB_HEADING_CLASS}>IS 17635:2022的适用范围</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据该标准，IS
          17635:2022涵盖与为成人用户设计的床具的性能和安全相关的要求。该标准适用于家庭和非家庭环境中使用的产品。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准适用于：
        </p>

        <ul className={LIST_CLASS}>
          <li>完全制造的床具</li>
          <li>组装的床具</li>
          <li>组装后的即装即用床具</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          这确保以组装或散装形式供应的产品使用相同的性能和安全标准进行评估。
        </p>

        <h3 className={SUB_HEADING_CLASS}>标准目标</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022的主要目标包括：
        </p>

        <ul className={LIST_CLASS}>
          <li>确保用户安全</li>
          <li>验证结构强度</li>
          <li>评估产品稳定性</li>
          <li>评估重复使用下的耐用性</li>
          <li>建立最低性能要求</li>
          <li>促进各制造商产品质量的一致性</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          该标准还包括旨在评估正常使用条件和合理可预见误用场景下床具的测试方法。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17635:2022涵盖的产品
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022适用于家庭和非家庭环境中成人用户使用的床具。该标准关注成品的性能、安全、强度、稳定性和耐用性，而非将合规性限制于特定材料或制造方法。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准适用于：
        </p>

        <ul className={LIST_CLASS}>
          <li>完全制造的床具</li>
          <li>组装的床具</li>
          <li>组装后的即装即用（RTA）床具</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          以散装形式供应床具的制造商必须确保组装后的产品符合该标准的所有适用要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>注意：</strong>
          本标准不涵盖水床、气床、折叠床、双层床和特殊需求人群的床具，也不涵盖用于医疗保健和医疗目的的床具。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            另请查看强制BIS认证涵盖的家具产品 —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>家具BIS认证</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17635:2022主要要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022的主要目标是确保床具在正常使用条件下保持安全、稳定、耐用且适合其预期用途。为实现这一目标，该标准确立了若干关键性能要求。
        </p>

        <h3 className={SUB_HEADING_CLASS}>稳定性要求</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          床具必须证明在正常使用期间具有足够的抗倾覆和不稳定性能力。稳定性测试评估产品在承受预期负载条件和用户移动时是否保持安全。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          稳定的床具可最大限度地降低事故风险并提高整体用户安全。
        </p>

        <h3 className={SUB_HEADING_CLASS}>强度要求</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          强度测试评估床架结构在不发生结构故障的情况下承受显著负载的能力。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          这些评估通常检查：
        </p>

        <ul className={LIST_CLASS}>
          <li>床架完整性</li>
          <li>接头强度</li>
          <li>承载能力</li>
          <li>抗过度变形能力</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          目的是确保产品在日常使用过程中能够安全支撑预期用户。
        </p>

        <h3 className={SUB_HEADING_CLASS}>耐久性要求</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          耐久性测试通过重复的负载和移动循环模拟长期使用。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          目的是确定：
        </p>

        <ul className={LIST_CLASS}>
          <li>结构连接是否保持牢固</li>
          <li>组件是否继续正常运作</li>
          <li>产品性能是否随时间保持可接受</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          耐久性要求有助于确保认证床具在其预期使用寿命内保持可靠性。
        </p>

        <h3 className={SUB_HEADING_CLASS}>表面性能要求</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022引用了适用于家具饰面的表面性能要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          根据构造和所用材料，表面可能会评估以下方面的抗性：
        </p>

        <ul className={LIST_CLASS}>
          <li>机械损伤</li>
          <li>湿热</li>
          <li>干热</li>
          <li>染色</li>
          <li>附着力性能</li>
          <li>磨损</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          这些要求有助于在正常使用期间保持功能和外观。
        </p>

        <h3 className={SUB_HEADING_CLASS}>设计和工艺要求</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准还包含与设计质量和工艺相关的要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          除其他考虑因素外：
        </p>

        <ul className={LIST_CLASS}>
          <li>可触及的边缘不应构成伤害危险。</li>
          <li>应避免尖锐边缘和不安全的突出物。</li>
          <li>空心部分应在需要时正确封闭。</li>
          <li>活动组件应设计为降低伤害风险。</li>
          <li>成品应符合声明的设计和型号规格。</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>安全要求</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          安全是IS 17635:2022的核心原则。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准纳入旨在降低以下风险的要求：
        </p>

        <ul className={LIST_CLASS}>
          <li>结构倒塌</li>
          <li>尖锐边缘</li>
          <li>不安全的突出物</li>
          <li>组件故障</li>
          <li>重复使用应力</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          遵守这些要求有助于确保床具在正常使用和合理可预见误用条件下保持安全。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          床具BIS认证在印度是否强制？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          是的，对于适用质量控制令（QCO）涵盖的家具产品，在印度制造、进口、销售、分销、储存或提供销售之前，BIS认证是强制性的。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          制造商必须核实印度政府发布的最新通知状态和实施日期，因为监管要求可能会不时更新。
        </p>

        <h3 className={SUB_HEADING_CLASS}>使用ISI标志的要求</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          ISI标志证明产品符合相关印度标准，并在有效的BIS许可证下制造。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标志只能在以下情况之后使用：
        </p>

        <ul className={LIST_CLASS}>
          <li>产品测试成功</li>
          <li>工厂评估</li>
          <li>BIS批准申请</li>
          <li>授予许可证</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据《2016年BIS法》，未经授权使用ISI标志是被禁止的。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          床具BIS认证流程（IS 17635:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          印度的BIS认证流程遵循ISI认证计划下的结构化程序。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤1 – 确定标准和产品范围
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          确认IS 17635:2022下的适用性并确定产品变体。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤2 – BIS申请（在线）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          通过BIS Manak在线门户提交申请，包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造商详情</li>
          <li>工厂地址</li>
          <li>产品描述</li>
          <li>品牌名称</li>
          <li>质量控制详情</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤3 – BIS认证费用
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          支付适用费用，包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申请费</li>
          <li>处理费</li>
          <li>测试费</li>
          <li>检查费</li>
          <li>标记费</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤4 – 产品测试
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          样品在BIS认可的实验室进行测试。
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          测试包括
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>静载测试</li>
          <li>耐久性测试</li>
          <li>稳定性测试</li>
          <li>接头强度测试</li>
          <li>表面处理测试</li>
          <li>边缘安全测试</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤5 – 工厂检查
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS官员检查：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造设施</li>
          <li>原材料控制</li>
          <li>过程测试</li>
          <li>质量保证系统</li>
          <li>测试设备</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤6 – 授予BIS许可证
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          合规后，BIS颁发：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS证书</li>
          <li>ISI标志许可</li>
          <li>CML编号</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤7 – 认证后合规
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>监督检查</li>
          <li>每1–2年续期</li>
          <li>持续质量控制</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          床具BIS认证所需文件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          以下是BIS证书文件的完整列表：
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          制造商文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂注册/许可证</li>
          <li>制造工艺流程图</li>
          <li>机械清单</li>
          <li>测试设备清单</li>
          <li>校准证书</li>
          <li>工厂布局</li>
          <li>质量控制计划</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>地址证明</li>
          <li>身份证明</li>
          <li>品牌授权</li>
          <li>商标证书（如适用）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技术文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品图纸</li>
          <li>规格</li>
          <li>材料清单</li>
          <li>内部测试报告</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          床具测试要求（IS 17635:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          床具必须经过严格测试以确保合规。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          强制性测试
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  条款
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  要求
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  设计和工艺
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  尺寸
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  稳定性测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  床基垂直静载
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  侧轨垂直静载
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  水平静载测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  垂直冲击测试
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          测试必须在BIS批准的实验室进行。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见挑战及如何避免
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>标准选择错误</strong> – 始终验证正确的印度标准。
          </li>
          <li>
            <strong>文件不完整</strong> – 缺失文件导致延误；提前准备。
          </li>
          <li>
            <strong>实验室测试失败</strong> – 确保高质量材料和结构。
          </li>
          <li>
            <strong>工厂未准备好</strong> – 确保QMS和测试设备得到适当维护。
          </li>
          <li>
            <strong>商标不匹配</strong> – 品牌名称必须与许可证申请一致。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          不合规处罚
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          销售未经BIS认证的床具可能导致：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>巨额罚款</li>
          <li>产品没收</li>
          <li>业务关闭</li>
          <li>法律诉讼</li>
          <li>市场禁令</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么选择我们进行床具BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          我们提供端到端BIS咨询服务，包括：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>标准映射</li>
          <li>文件支持</li>
          <li>测试协调</li>
          <li>申请提交</li>
          <li>工厂检查处理</li>
          <li>BIS联络</li>
          <li>许可证颁发</li>
          <li>续期和监督支持</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022下的床具BIS证书是确保安全、质量和耐用性的强制性法律要求。获得床具BIS许可证可保护消费者，增强品牌价值，并在印度全境实现合法市场准入。在专家支持下，认证过程变得无缝且高效。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 – 床具BIS证书
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 床具在印度是否必须进行BIS认证？</strong>
              <br />
              是的，根据IS 17635:2022。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. BIS证书有效期是多久？</strong>
              <br />
              1–2年，可续期。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 外国制造商可以申请吗？</strong>
              <br />
              可以，根据FMCS。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. BIS证书可以在线申请吗？</strong>
              <br />
              可以。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 床具上是否必须标注ISI标志？</strong>
              <br />
              是的。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 流程需要多长时间？</strong>
              <br />
              30–45天。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 木床和金属床都涵盖吗？</strong>
              <br />
              是的，如果符合IS 17635:2022。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 工厂检查是否强制？</strong>
              <br />
              是的。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 贸易商可以申请BIS吗？</strong>
              <br />
              只有拥有制造控制权的品牌所有者。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="床具BIS证书 - IS 17635:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          相关资源
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              ISI标志证书
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS FMCS许可证
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadChinese />

        <FaqAuthorChinese questionNumber={1} />
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
              我们的服务
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                印度最佳证书顾问
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
              外国制造商BIS标志（ISI许可证）
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
              CDSCO注册认证
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
              BIS (CRS) 注册
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
              塑料废物管理
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
              EPR证书认证
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
              LMPC证书认证
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
              BIS注册证书
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
              印度制造商ISI标志（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
