import FaqAuthorKorean from "@/components/common/FaqAuthor/FaqAuthorKorean";
import ServicesRightSideContentKorean from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentKorean";
import ManyUsersAlsoReadKorean from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadKorean";
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
import FooterKorean from "@/components/manual/Footer/FooterKorean";
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

const BISCertificateForBedsKorean = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default BISCertificateForBedsKorean;

const MetaTags = () => {
  const title = "침대용 BIS 인증서 | IS 17635:2022 BIS 라이선스";
  const ogTitle = "침대용 BIS 인증 – IS 17635:2022 가이드";
  const twitterTitle = "침대용 BIS 라이선스 | IS 17635:2022";
  const metaDescription =
    "IS 17635:2022에 따른 침대용 BIS 인증서를 받으세요. 인도의 BIS 인증을 위한 프로세스, 문서, 테스트, 비용 및 일정.";
  const ogDescription =
    "IS 17635:2022에 따른 침대용 BIS 인증에 대한 완전한 가이드. 프로세스, 비용, 문서, 테스트 및 BIS 라이선스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 17635:2022에 따른 침대용 BIS 인증서를 신청하세요. 인도에서 BIS 프로세스, 문서, 테스트, 수수료 및 일정을 알아보세요.";
  const metaKeywords =
    "침대용 BIS 인증서, 침대용 BIS 라이선스, IS 17635:2022, 침대용 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/chimdae-is-17635";
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
              "https://bis-certifications.com/blogs/isi-products/chimdae-is-17635",
          },
          headline: "침대용 BIS 인증서",
          description:
            "인도에서 침대용 BIS 인증은 주로 IS 17635:2022에 따른 필수 품질 보증으로, 안전, 내구성 및 성능 기준을 보장합니다.",
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
          name: "침대용 BIS 인증서",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "인도에서 침대용 BIS 인증은 주로 IS 17635:2022에 따른 필수 품질 보증으로, 안전, 내구성 및 성능 기준을 보장합니다.",
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
              name: "인도에서 침대에 BIS 인증이 필수인가요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "네, IS 17635:2022에 따라 필수입니다.",
              },
            },
            {
              "@type": "Question",
              name: "BIS 인증서의 유효기간은 얼마인가요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1~2년, 갱신 가능합니다.",
              },
            },
            {
              "@type": "Question",
              name: "외국 제조업체도 신청할 수 있나요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "네, FMCS에 따라 신청할 수 있습니다.",
              },
            },
            {
              "@type": "Question",
              name: "BIS 인증서를 온라인으로 신청할 수 있나요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "네.",
              },
            },
            {
              "@type": "Question",
              name: "침대에 ISI 마크가 필수인가요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "네.",
              },
            },
            {
              "@type": "Question",
              name: "프로세스는 얼마나 걸리나요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30~45일.",
              },
            },
            {
              "@type": "Question",
              name: "나무 및 금속 침대 모두 포함되나요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "네, IS 17635:2022를 준수하는 경우.",
              },
            },
            {
              "@type": "Question",
              name: "공장 검사가 필수인가요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "네.",
              },
            },
            {
              "@type": "Question",
              name: "무역업체도 BIS에 신청할 수 있나요?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "제조 관리를 보유한 브랜드 소유자만 가능합니다.",
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
                    <Link to="/">홈</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">최신 블로그</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    침대용 BIS 인증서 – IS 17635:2022
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
        <ServicesRightSideContentKorean />
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
          침대용 BIS 인증서 – IS 17635:2022 완전 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="침대용 BIS 라이선스"
            alt="침대용 BIS 인증서 - IS 17635:2022 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          침대용 BIS 인증서는 가정용 및 상업용 침대를 제조 및 수입하는 제조업체 및
          수입업체를 위한 인도의 필수 규정 준수 요건입니다. 최신 인도 표준 IS
          17635:2022 – 침대(안전 요구사항)에 따라 모든 침대는 인도 시장에서
          판매되기 전에 엄격한 안전, 내구성, 구조 및 성능 기준을 충족해야
          합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          침대는 가정, 호텔, 병원, 호스텔, PG 숙소 및 기관 시설에서 매일
          사용되는 필수 가구 제품입니다. 구조적 약점, 날카로운 가장자리, 재료
          실패 또는 낮은 하중 지지 능력은 심각한 부상을 초래할 수 있습니다.
          이러한 위험을 방지하기 위해 인도 표준국(BIS)은{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            BIS 인증
          </a>{" "}
          을 침대에 의무화합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 포괄적인 가이드는 적용 가능한 표준, 인증 프로세스, 테스트 요구사항,
          문서, 수수료, 일정, 처벌 및 혜택을 포함하여 침대용 BIS 라이선스에 대한
          모든 것을 설명합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          침대용 BIS 인증의 주요 하이라이트
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  항목
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  세부사항
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["제품", "침대"],
                ["인도 표준", "IS 17635:2022"],
                ["표준 명칭", "침대 – 규격"],
                ["인증 제도", "BIS ISI 마크 인증"],
                ["규제 기관", "Bureau of Indian Standards (BIS)"],
                ["적용 마크", "ISI 마크"],
                [
                  "신청 자격자",
                  "인도 제조업체 및 외국 제조업체",
                ],
                [
                  "규정 준수 요건",
                  "해당 가구 QCO(Quality Control Order)에 따른 필수 사항",
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
                    {particular === "인증 제도" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        BIS ISI 마크 인증
                      </a>
                    ) : particular === "규정 준수 요건" ? (
                      <>
                        해당{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>가구 QCO(Quality Control Order)</strong>
                        </a>
                        에 따른 필수 사항
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
          침대용 BIS 인증이란?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          침대용 BIS 인증은 제조업체가 IS 17635:2022에 명시된 요구사항을
          준수함을 입증하는 적합성 평가 프로세스입니다. 테스트, 공장 평가 및
          규제 검토를 통해 규정 준수가 확인되면 제조업체는 BIS 라이선스를
          부여받고 인증 제품에 ISI 마크를 부착할 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          인증 프레임워크는 인도 시장에서 판매되는 침대가 다음과 관련된
          확립된 요구사항을 충족하도록 설계되었습니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>구조적 강도</li>
          <li>안정성</li>
          <li>내구성</li>
          <li>표면 성능</li>
          <li>정상 사용 시 안전성</li>
          <li>예상 가능한 오용 조건에서의 성능</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 요구사항은 다양한 침대 설계 및 제조 재료에 걸쳐 품질 및
          소비자 보호를 위한 일관된 기준을 만드는 데 도움이 됩니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          침대에 BIS 인증이 중요한 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          침대는 장기간 상당한 하중을 지지하도록 설계되기 때문에 사용자
          안전에 직접적인 영향을 미칩니다. 설계가 불량하거나 테스트가
          불충분한 제품은 구조적 실패, 불안정성, 변형 또는 조기 열화를
          겪을 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022는 제품이 시장에 출시되기 전에 제조업체가 충족해야
          하는 표준화된 성능 및 안전 요구사항을 정의하여 이러한 우려를
          해결합니다. 이 표준에는 강도, 안정성, 내구성, 제작 품질 및 표면
          성능과 관련된 요구사항이 포함됩니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체에게 BIS 인증은 여러 가지 이점을 제공합니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>인도에서 해당 제품을 판매할 법적 권한</li>
          <li>인도 표준 준수 입증</li>
          <li>시장 수용성 향상</li>
          <li>소비자 신뢰 증대</li>
          <li>규제 조치 위험 감소</li>
          <li>기관 및 상업 조달에서의 경쟁 우위</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          침대용 IS 17635:2022 개요
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도 정부는 시장에 출시되는 제품이 규정된 안전 및 품질 요구사항을
          충족하도록 여러 가구 제품에 대한 품질 관리 명령(QCO)을 도입했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022가 해당 가구 QCO에 포함되는 경우, 제조업체는 제1호
          제도(Schema-I)에 따라 BIS 인증을 취득하고 BIS 라이선스 요건에
          따라 표준 마크(ISI 마크)를 사용해야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022는 가정 및 비가정 환경에서 성인 사용자를 위한 침대의
          성능 및 안전 요구사항을 규정하는 인도 표준입니다. 이 표준은 침대가
          의도된 사용 수명 동안 안전하고 기능적이며 내구성 있게 유지되도록
          요구사항을 수립합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>IS 17635:2022의 목적</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022는 다양한 재료 및 제작 방법으로 제조된 현대 침대
          설계에 적용 가능한 포괄적인 성능 기반 표준을 제공하기 위해
          개발되었습니다. 이 표준은 주로 목재 침대에 초점을 맞춘 이전
          IS 7259 (Part 1):1988을 대체합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 표준은 특정 재료나 제조 공정에 규정 준수를 제한하지 않고
          침대를 평가합니다. 대신 규정된 테스트 조건에서 완성품이 어떻게
          성능을 발휘하는지에 초점을 맞춥니다. 이 접근 방식은 목재,
          금속, 엔지니어드 우드 및 기타 침대 구조의 일관된 평가를
          가능하게 합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>IS 17635:2022의 적용 범위</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          표준에 따르면 IS 17635:2022는 성인 사용자를 위해 설계된 침대의
          성능 및 안전과 관련된 요구사항을 다룹니다. 이 표준은 가정 및
          비가정 환경 모두에서 사용하기 위한 제품에 적용됩니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 다음에 적용됩니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>완전히 제조된 침대</li>
          <li>제작된 침대</li>
          <li>조립 후 조립식(RTA) 침대</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이를 통해 조립된 형태 또는 분해 조립(knock-down) 형태로
          공급되는 제품도 동일한 성능 및 안전 기준으로 평가됩니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>표준의 목표</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022의 주요 목표는 다음과 같습니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>사용자 안전 보장</li>
          <li>구조적 강도 검증</li>
          <li>제품 안정성 평가</li>
          <li>반복 사용 시 내구성 평가</li>
          <li>최소 성능 요구사항 수립</li>
          <li>제조업체 간 일관된 제품 품질 촉진</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 표준에는 정상 사용 조건 및 합리적으로 예상 가능한 오용
          시나리오에서 침대를 평가하기 위한 테스트 방법론도 포함됩니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17635:2022에 포함되는 제품
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022는 가정 및 비가정 환경에서 성인 사용자를 위한
          침대에 적용됩니다. 이 표준은 특정 재료나 제조 방법에 규정
          준수를 제한하기보다 완성품의 성능, 안전, 강도, 안정성 및
          내구성에 초점을 맞춥니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 다음에 적용됩니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>완전히 제조된 침대</li>
          <li>제작된 침대</li>
          <li>조립 후 조립식(RTA) 침대</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          분해 조립 상태로 침대를 공급하는 제조업체는 조립된 제품이
          표준의 모든 해당 요구사항을 준수하도록 해야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>참고:</strong> 이 표준은 워터베드, 에어베드, 접이식
          침대, 이층 침대 및 특수 요구사항이 있는 사람을 위한 침대, 그리고
          의료 및 의학 목적의 침대를 다루지 않습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            필수 BIS 인증 대상 가구 제품도 확인하세요 —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>가구용 BIS 인증</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17635:2022의 주요 요구사항
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022의 주요 목적은 침대가 정상 사용 조건에서 의도된
          목적에 안전하고, 안정적이며, 내구성 있고 적합하게 유지되도록
          하는 것입니다. 이 목적을 달성하기 위해 표준은 여러 주요 성능
          요구사항을 수립합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>안정성 요구사항</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          침대는 정상 사용 중 전도 및 불안정성에 대한 적절한 저항력을
          입증해야 합니다. 안정성 테스트는 예상 하중 조건 및 사용자
          움직임에 노출될 때 제품이 안전하게 유지되는지 평가합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          안정적인 침대는 사고 위험을 최소화하고 전반적인 사용자
          안전을 향상시킵니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>강도 요구사항</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          강도 테스트는 침대 구조가 구조적 실패 없이 상당한 하중을
          견딜 수 있는 능력을 평가합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이러한 평가는 일반적으로 다음을 검사합니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>침대 프레임 무결성</li>
          <li>접합부 강도</li>
          <li>하중 지지 능력</li>
          <li>과도한 변형에 대한 저항</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          목적은 제품이 일상적인 사용 중 의도된 사용자를 안전하게
          지지할 수 있도록 하는 것입니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>내구성 요구사항</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          내구성 테스트는 반복적인 하중 및 움직임 주기를 통해 장기
          사용을 시뮬레이션합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          목적은 다음을 판단하는 것입니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>구조적 연결이 안전하게 유지되는지</li>
          <li>구성 요소가 올바르게 계속 기능하는지</li>
          <li>시간이 지남에 따라 제품 성능이 허용 가능한 수준을 유지하는지</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          내구성 요구사항은 인증된 침대가 예상 사용 수명 동안
          신뢰성을 유지하도록 돕습니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>표면 성능 요구사항</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022는 가구 마감에 적용되는 표면 성능 요구사항을
          참조합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          구조 및 사용된 재료에 따라 표면은 다음에 대한 저항력을
          평가받을 수 있습니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>기계적 손상</li>
          <li>습열</li>
          <li>건열</li>
          <li>얼룩</li>
          <li>접착 성능</li>
          <li>마모 및 내마모성</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 요구사항은 정상 사용 중 기능과 외관을 모두
          보존하는 데 도움이 됩니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>설계 및 제작 품질 요구사항</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준에는 설계 품질 및 제작 품질과 관련된 요구사항도
          포함됩니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          기타 고려 사항 중:
        </p>

        <ul className={LIST_CLASS}>
          <li>접근 가능한 가장자리는 부상 위험을 제시해서는 안 됩니다.</li>
          <li>날카로운 가장자리와 불안전한 돌출부는 피해야 합니다.</li>
          <li>필요한 경우 중공 단면은 적절히 밀봉되어야 합니다.</li>
          <li>움직이는 구성 요소는 부상 위험을 줄이도록 설계되어야 합니다.</li>
          <li>
            완성된 제품은 선언된 설계 및 모델 사양에 부합해야 합니다.
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>안전 요구사항</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          안전은 IS 17635:2022 전반에 걸친 핵심 원칙입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준에는 다음에서 발생하는 위험을 줄이기 위한 요구사항이
          포함됩니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>구조적 붕괴</li>
          <li>날카로운 가장자리</li>
          <li>불안전한 돌출부</li>
          <li>구성 요소 고장</li>
          <li>반복 사용 스트레스</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 요구사항을 준수하면 침대가 정상 사용 및 합리적으로
          예상 가능한 오용 조건에서 안전하게 유지됩니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          인도에서 침대용 BIS 인증이 필수인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          네, 해당 품질 관리 명령(QCO)에 포함되는 가구 제품의 경우,
          해당 제품을 인도에서 제조, 수입, 판매, 유통, 보관 또는
          판매 목적으로 제공하기 전에 BIS 인증이 필수입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          규제 요구사항은 수시로 업데이트될 수 있으므로 제조업체는
          인도 정부가 발행한 최신 고시 상태 및 시행일을 확인해야
          합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>ISI 마크 사용 요건</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          ISI 마크는 제품이 관련 인도 표준을 준수하며 유효한 BIS
          라이선스 하에 제조되었음을 증명합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          마크는 다음 이후에만 부착할 수 있습니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>성공적인 제품 테스트</li>
          <li>공장 평가</li>
          <li>BIS 신청 승인</li>
          <li>라이선스 부여</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ISI 마크의 무단 사용은 BIS Act, 2016에 따라 금지됩니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          침대용 BIS 인증 프로세스 (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도의 BIS 인증 프로세스는 ISI 인증 제도 하에서 구조화된
          절차를 따릅니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1단계 – 표준 및 제품 범위 식별
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022에 따른 적용 가능성을 확인하고 제품 변형을
          결정합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2단계 – BIS 신청 (온라인)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS Manak 온라인 포털을 통해 다음을 포함하여 신청을 제출합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조업체 세부사항</li>
          <li>공장 주소</li>
          <li>제품 설명</li>
          <li>브랜드명</li>
          <li>품질 관리 세부사항</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3단계 – BIS 인증 수수료
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          다음을 포함한 적용 수수료를 지불합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 수수료</li>
          <li>처리 수수료</li>
          <li>테스트 비용</li>
          <li>검사 비용</li>
          <li>마킹 수수료</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4단계 – 제품 테스트
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          샘플은 BIS 인정 실험실에서 테스트됩니다.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          테스트에는 다음이 포함됩니다
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>정적 하중 테스트</li>
          <li>내구성 테스트</li>
          <li>안정성 테스트</li>
          <li>접합부 강도 테스트</li>
          <li>표면 마감 테스트</li>
          <li>가장자리 안전 테스트</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5단계 – 공장 검사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 담당자가 다음을 검사합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조 시설</li>
          <li>원자재 관리</li>
          <li>공정 중 테스트</li>
          <li>품질 보증 시스템</li>
          <li>테스트 장비</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6단계 – BIS 라이선스 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          규정 준수 후 BIS는 다음을 발급합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 인증서</li>
          <li>ISI 마크 허가</li>
          <li>CML 번호</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          7단계 – 인증 후 규정 준수
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>감시 검사</li>
          <li>1~2년마다 갱신</li>
          <li>지속적인 품질 관리</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          침대용 BIS 인증에 필요한 서류
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          다음은 BIS 인증서 서류의 전체 목록입니다:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          제조업체 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 등록/라이선스</li>
          <li>제조 공정 흐름도</li>
          <li>기계 목록</li>
          <li>테스트 장비 목록</li>
          <li>교정 인증서</li>
          <li>공장 배치도</li>
          <li>품질 관리 계획</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>주소 증명</li>
          <li>신분 증명</li>
          <li>브랜드 승인</li>
          <li>상표 인증서 (해당되는 경우)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          기술 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 도면</li>
          <li>사양</li>
          <li>자재 명세서</li>
          <li>내부 테스트 보고서</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          침대용 테스트 요구사항 (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          침대는 규정 준수를 보장하기 위해 엄격한 테스트를 거쳐야 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          필수 테스트
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  조항
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  요구사항
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  설계 및 제작
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  치수
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  안정성 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  침대 베이스에 대한 수직 정적 하중
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  사이드 레일에 대한 수직 정적 하중
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  수평 정적 하중 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  수직 충격 테스트
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          테스트는 BIS 승인 실험실에서만 수행해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          일반적인 문제 및 해결 방법
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>잘못된 표준 선택</strong> – 항상 올바른 인도 표준을
            확인하세요.
          </li>
          <li>
            <strong>서류 부족</strong> – 누락된 서류는 지연을 초래합니다. 사전에
            준비하세요.
          </li>
          <li>
            <strong>실험실 테스트 실패</strong> – 고품질 재료 및 제작을
            보장하세요.
          </li>
          <li>
            <strong>공장 준비 부족</strong> – QMS 및 테스트 장비가 적절히 유지
            관리되는지 확인하세요.
          </li>
          <li>
            <strong>상표 불일치</strong> – 브랜드명은 라이선스 신청과 일치해야
            합니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          규정 미준수에 대한 처벌
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증 없이 침대를 판매하면 다음이 발생할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>과중한 벌금</li>
          <li>제품 압수</li>
          <li>사업 중단</li>
          <li>법적 조치</li>
          <li>시장 금지</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          침대용 BIS 인증에서 우리를 선택하는 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          다음을 포함한 엔드투엔드 BIS 컨설팅을 제공합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>표준 매핑</li>
          <li>서류 지원</li>
          <li>테스트 조정</li>
          <li>신청 제출</li>
          <li>공장 검사 처리</li>
          <li>BIS 연락</li>
          <li>라이선스 발급</li>
          <li>갱신 및 감시 지원</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022에 따른 침대용 BIS 인증서는 안전, 품질 및 내구성을
          보장하는 필수 법적 요구사항입니다. 침대용 BIS 라이선스를 취득하면
          소비자를 보호하고, 브랜드 가치를 강화하며, 인도 전역에서 합법적인 시장
          접근을 가능하게 합니다. 전문가 지원을 통해 인증 프로세스가 원활하고
          효율적으로 진행됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 침대용 BIS 인증서
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 인도에서 침대에 BIS 인증이 필수인가요?</strong>
              <br />
              네, IS 17635:2022에 따라 필수입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. BIS 인증서의 유효기간은 얼마인가요?</strong>
              <br />
              1~2년, 갱신 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 외국 제조업체도 신청할 수 있나요?</strong>
              <br />
              네, FMCS에 따라 신청할 수 있습니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. BIS 인증서를 온라인으로 신청할 수 있나요?</strong>
              <br />
              네.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 침대에 ISI 마크가 필수인가요?</strong>
              <br />
              네.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 프로세스는 얼마나 걸리나요?</strong>
              <br />
              30~45일.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 나무 및 금속 침대 모두 포함되나요?</strong>
              <br />
              네, IS 17635:2022를 준수하는 경우.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 공장 검사가 필수인가요?</strong>
              <br />
              네.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 무역업체도 BIS에 신청할 수 있나요?</strong>
              <br />
              제조 관리를 보유한 브랜드 소유자만 가능합니다.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="침대용 BIS 인증서 - IS 17635:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          관련 자료
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              ISI 마크 인증서
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS FMCS 라이선스
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadKorean />

        <FaqAuthorKorean questionNumber={1} />
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
              우리의 서비스
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                인도 최고의 인증 컨설턴트
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
                alt="BIS 로고"
                title="BIS 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              외국 제조용 BIS 마크 (ISI 라이선스)
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO 로고"
                title="CDSCO 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO 등록 인증
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS 로고"
                title="BISCRS 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) 등록
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="플라스틱 폐기물 관리"
                title="플라스틱 폐기물 관리"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              플라스틱 폐기물 관리
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPR 인증서 로고"
                title="EPR 인증서 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR 인증서 인증
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC 로고"
                title="LMPC 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC 인증서 인증
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS 로고"
                title="BIS 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS 등록 인증서
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISI 마크 로고"
                title="ISI 마크 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              인도 제조업체용 ISI 마크 (BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
