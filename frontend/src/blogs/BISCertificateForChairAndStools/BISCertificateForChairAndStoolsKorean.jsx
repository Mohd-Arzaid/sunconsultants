import FaqAuthorKorean from "@/components/common/FaqAuthor/FaqAuthorKorean";
import ManyUsersAlsoReadKorean from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadKorean";
import ServicesRightSideContentKorean from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentKorean";
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

const BISCertificateForChairAndStoolsKorean = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default BISCertificateForChairAndStoolsKorean;

const MetaTags = () => {
  const title =
    "일반용 의자 및 스툴용 BIS 인증 | IS 17632:2022";
  const ogTitle =
    "일반용 의자 및 스툴용 BIS 인증 | IS 17632:2022";
  const twitterTitle =
    "일반용 의자 및 스툴용 BIS 인증 | IS 17632:2022";
  const metaDescription =
    "IS 17632:2022에 따른 일반용 의자 및 스툴용 BIS 인증에 대해 알아보세요. ISI 마크 요건, 테스트, 인증 프로세스, 문서, 혜택 및 FAQ를 이해하세요.";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "일반용 의자 및 스툴용 BIS 인증, IS 17632:2022, ISI 마크 의자 및 스툴, BIS 라이선스 의자 스툴, BIS 인증 가구";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Sun Certification India 운영 책임자";

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
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/yizi-he-dengzi-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stoelen-en-krukken-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-et-tabourets-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/stuhle-und-hocker-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-dan-bangku-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-e-sgabelli-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-y-taburetes-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-lae-mang-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632"
      />
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
                    일반용 의자 및 스툴용 BIS 인증 (IS 17632:2022)
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
          일반용 의자 및 스툴용 BIS 인증 (IS 17632:2022) – 완전한 ISI 마크
          인증 가이드
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="일반용 의자 및 스툴용 BIS 라이선스"
            alt="일반용 의자 및 스툴용 BIS 인증 - IS 17632:2022 ISI 마크 가이드"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          일반용 의자와 스툴은 가정, 사무실, 교육 기관, 의료 시설, 소매업체,
          공공 공간 및 상업 환경에서 가장 널리 사용되는 가구 제품 중 하나입니다.
          이러한 좌석 제품은 정기적이고 장시간 사용되므로 신뢰할 수 있는 성능을
          보장하기 위해 특정 품질, 안전, 강도 및 내구성 요건을 충족해야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          제품 품질과 소비자 안전에 대한 강조가 증가함에 따라 인도 표준 준수는
          가구 제조업체와 수입업체에게 중요한 요건이 되었습니다. IS
          17632:2022에 따른 일반용 의자 및 스툴용 BIS 인증은 제품이 인도 시장에
          출시되기 전에 규정된 성능 및 안전 요건을 충족하도록 돕습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도 표준국(Bureau of Indian Standards, BIS)에 따른 인증을 통해
          제조업체는 적합 제품에 ISI 마크를 사용할 수 있습니다. ISI 마크는
          제품이 인정된 인도 품질 표준을 준수하며 필요한 평가 절차를 거쳤음을
          보증합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          가구 산업이 계속 성장하고 조달 기관이 인증 제품을 점점 더 선호함에
          따라 BIS 인증은 제조업체에게 중요한 규정 준수 및 시장 접근 요건이
          되었습니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          일반용 의자 및 스툴용 BIS 인증의 주요 하이라이트
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
                ["제품명", "일반용 의자 및 스툴"],
                ["적용 인도 표준", "IS 17632:2022"],
                ["인증 유형", "BIS 제품 인증"],
                ["인증 제도", "Scheme-I (ISI 마크 인증)"],
                ["적용 마크", "ISI 마크"],
                ["규제 기관", "Bureau of Indian Standards"],
                ["해당 부처", "Ministry of Commerce and Industry"],
                [
                  "규정 준수 요건",
                  "해당 가구 QCO(Quality Control Order)에 따른 필수 사항",
                ],
                ["제품 카테고리", "가구"],
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
                        Scheme-I (ISI 마크 인증)
                      </a>
                    ) : particular === "규정 준수 요건" ? (
                      <>
                        해당{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
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
          일반용 의자 및 스툴용 BIS 인증이란?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          일반용 의자 및 스툴용 BIS 인증은 BIS 제품 인증 제도에 따라 수행되는
          적합성 평가 프로세스입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증의 목적은 제품이 IS 17632:2022에 명시된 요구사항을 준수하는지
          확인하는 것입니다. 인증이 부여되면 제조업체는 제품에 ISI 마크를
          사용할 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          인증 프로세스는 다음을 포함한 제품 성능의 다양한 측면을 평가합니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>강도</li>
          <li>안정성</li>
          <li>내구성</li>
          <li>구조적 성능</li>
          <li>안전 요건</li>
          <li>재료 품질</li>
          <li>제작 품질</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 인증은 인도 시장에 공급되는 좌석 제품이 확립된 품질 및 안전
          기준을 충족하도록 돕습니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17632:2022 개요
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022는 일반용 의자 및 스툴에 대한 요구사항을 규정하는 인도
          표준입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 표준은 일반 용도를 위한 좌석 가구의 안전, 강도, 내구성, 안정성 및
          전반적인 성능과 관련된 요구사항을 수립합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 다음에 적용됩니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>완전히 제조된 의자 및 스툴</li>
          <li>가공된 의자 및 스툴</li>
          <li>조립 후의 조립식 제품</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 표준의 목적은 가구 제품이 의도된 사용 기간 동안 안전하고 신뢰할 수
          있으며 내구성 있는 성능을 제공하도록 하는 것입니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17632:2022의 주요 요건
        </h2>

        <h3 className={SUB_HEADING_CLASS}>강도 요건</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          일반용 의자와 스툴은 정상 사용 중 예상되는 하중 조건을 견딜 수 있는
          충분한 구조적 강도를 갖추어야 합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>안정성 요건</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          가구는 의도된 사용 중 안정적으로 유지되어야 하며 불필요한 전도 위험을
          초래해서는 안 됩니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>내구성 요건</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          제품은 반복적인 사용 주기에 걸쳐 구조적 무결성과 성능을 유지할 수
          있어야 합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>안전 요건</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          이 표준에는 가구 사용과 관련된 위험을 최소화하기 위한 안전 관련
          요건이 포함되어 있습니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>재료 품질 및 제작 품질</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          재료의 품질, 제조 방식, 조립 방법, 접합부 및 마감은 표준 준수에
          크게 기여합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>인체공학적 고려사항</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          이 표준은 사용자 편의와 실용적 기능성에 기여하는 성능 관련
          고려사항을 포함합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17632:2022 적용 제품
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 일반적으로 다음에 적용됩니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>일반용 의자</li>
          <li>일반용 스툴</li>
          <li>일반 용도를 위한 고정 좌석 가구</li>
          <li>조립 후의 조립식 좌석 제품</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체는 자사 제품에 대한 적용 가능성을 판단하기 위해 표준의
          적용 범위를 신중히 검토해야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            또한 필수 BIS 인증 대상 가구 제품도 확인하세요 —
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
          일반용 의자 및 스툴에 BIS 인증이 필수인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          네. 해당 가구 품질관리령(Quality Control Order, QCO)에 포함되는
          가구 제품은 인도 시장에서 제조, 수입, 판매, 유통 또는 공급되기 전에
          관련 인도 표준을 준수하고 BIS 인증을 받아야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          해당 규제 체계에 포함되는 제조업체는 BIS 라이선스를 취득하고 BIS가
          규정한 마킹 요건을 준수해야 합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증을 위한 테스트 요건
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증이 부여되기 전에 제품 샘플은 인정된 실험실에서 수행되는 테스트를
          통해 평가되어야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          테스트는 일반적으로 다음 매개변수에 중점을 둡니다:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>구조적 성능 평가 —</strong> 의자나 스툴이 정상 사용
            조건에서 고장 없이 견딜 수 있는지 확인합니다.
          </li>
          <li>
            <strong>안정성 테스트 —</strong> 가구가 의도된 사용 중 안정적으로
            유지되고 전도에 저항하는지 평가합니다.
          </li>
          <li>
            <strong>강도 평가 —</strong> 프레임, 접합부 및 지지대의 하중
            지지 능력과 구조적 무결성을 평가합니다.
          </li>
          <li>
            <strong>내구성 평가 —</strong> 제품의 사용 수명에 걸친 반복
            사용 주기 후 성능 유지 여부를 확인합니다.
          </li>
          <li>
            <strong>안전 평가 —</strong> 잠재적 위험을 식별하고 규정된 안전
            요건 준수 여부를 검증합니다.
          </li>
          <li>
            <strong>제작 품질 검사 —</strong> 구조 품질, 마감, 조립 무결성
            및 전반적인 제작 기준을 검토합니다.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          제품 마킹 요건
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022에 따라 인증된 제품은 일반적으로 다음과 같은 식별
          정보를 표시해야 합니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>제조업체 이름 또는 상표</li>
          <li>모델 또는 디자인 식별</li>
          <li>배치 또는 로트 번호</li>
          <li>제조일</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ISI 마크는 유효한 BIS 라이선스를 취득한 후에만 부착할 수 있습니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          일반용 의자 및 스툴용 BIS 인증 프로세스
        </h2>

        <h3 className={SUB_HEADING_CLASS}>1단계: 제품 범위 평가</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          첫 번째 단계는 제품이 IS 17632:2022 및 해당 가구 QCO의 적용 범위에
          해당하는지 확인하는 것입니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          인증 프로세스를 시작하기 전에 의자 또는 스툴 유형, 의도된 용도,
          재료 및 구조를 검토하세요.
        </p>

        <h3 className={SUB_HEADING_CLASS}>2단계: 문서 준비</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체는 회사 기록, 공장 세부사항, 제품 사양 및 품질 관리
          절차를 포함하여 인증에 필요한 기술 및 규정 준수 문서를 준비합니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          완전하고 정확한 문서는 BIS 검토 중 불필요한 지연을 방지하는 데
          도움이 됩니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>3단계: 제품 테스트</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          대표 샘플은 BIS 인정 실험실에서 IS 17632:2022 요건 준수 여부를
          확인하기 위해 테스트됩니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          실험실 테스트 보고서는 인증 신청을 뒷받침하는 핵심 기술 문서입니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>4단계: BIS 신청서 제출</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          인증 신청서는 지원 문서, 테스트 보고서 및 제조 정보와 함께
          제출됩니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          BIS는 다음 단계로 진행하기 전에 신청서의 완전성과 기술적 준수
          여부를 검토합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>5단계: 공장 검사</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS는 제조 시설, 생산 시스템 및 품질 관리 프로세스를 평가하여
          적합 제품을 일관되게 생산할 수 있는 능력을 확인할 수 있습니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          이 평가는 일반적으로 생산 인프라, QC 시스템, 원자재 관리 및 제품
          추적성을 포함합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>6단계: 기술 검토</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          인증 결정이 내려지기 전에 신청서, 테스트 보고서 및 검사 결과가
          BIS에 의해 검토됩니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          검토 중 제기된 관찰 사항이나 결함은 신청자가 해결해야 합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>7단계: 라이선스 부여</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          만족스러운 준수가 확인되면 BIS는 라이선스를 부여하고 인증된 일반용
          의자 및 스툴에 ISI 마크 사용을 승인합니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체는 라이선스 기간 전체에 걸쳐 BIS 요건을 계속 준수해야
          합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증의 혜택
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>인도 규정 준수 —</strong> 해당 가구 QCO에 따른 필수 품질
            및 안전 요건 충족.
          </li>
          <li>
            <strong>합법적 시장 접근 —</strong> 관련 규제 요건에 따라 인도에서
            인증된 의자 및 스툴 공급.
          </li>
          <li>
            <strong>제품 신뢰도 향상 —</strong> ISI 마크는 인정된 인도 표준
            준수를 입증합니다.
          </li>
          <li>
            <strong>고객 신뢰 증가 —</strong> 소비자와 기관 구매자는 확립된
            기준에 따라 평가된 제품을 선호합니다.
          </li>
          <li>
            <strong>경쟁 우위 —</strong> 상업 및 정부 조달 프로세스에서 더
            높은 수용성.
          </li>
          <li>
            <strong>브랜드 평판 개선 —</strong> 제품 품질, 안전 및 장기적
            신뢰성에 대한 헌신을 보여줍니다.
          </li>
          <li>
            <strong>중소기업 지원 —</strong> 중소 제조업체가 시장 입지를
            강화하고 고객 신뢰를 구축하는 데 도움.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          인증 과정에서 흔히 직면하는 과제
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>제품 테스트 실패 —</strong> 설계 또는 제조상의 결함으로
            실험실 평가 중 비준수가 발생할 수 있습니다.
          </li>
          <li>
            <strong>문서 문제 —</strong> 불완전하거나 일관되지 않은 기록은
            인증 지연의 흔한 원인입니다.
          </li>
          <li>
            <strong>제조 준수 격차 —</strong> 인증이 부여되기 전에 품질 관리
            시스템을 개선해야 할 수 있습니다.
          </li>
          <li>
            <strong>규제 복잡성 —</strong> 전문가의 안내 없이는 테스트, 검사
            및 인증 절차를 관리하기 어려울 수 있습니다.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sun Certifications India를 선택하는 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India는 인도 전역의 제조업체, 수입업체, 수출업체
          및 기업이 규제 준수 요건을 충족하도록 지원합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          저희 서비스에는 다음이 포함됩니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>제품 적용 가능성 평가</li>
          <li>BIS 인증 컨설팅</li>
          <li>문서 지원</li>
          <li>실험실 테스트 조정</li>
          <li>공장 검사 준비</li>
          <li>신청 관리</li>
          <li>규제 준수 지원</li>
          <li>인증 후 지원</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          저희의 목표는 고객이 인증 요건을 효율적으로 탐색하고 최소한의
          지연으로 규정 준수를 달성하도록 돕는 것입니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022에 따른 일반용 의자 및 스툴용 BIS 인증은 제품 품질,
          안전, 강도, 안정성 및 내구성을 보장하는 데 중요한 역할을 합니다. 이
          인증은 제조업체가 인도 표준 준수를 입증하는 동시에 고객 신뢰를
          강화하고 시장 접근을 지원합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          품질이 보장된 가구 제품에 대한 수요가 계속 증가함에 따라 BIS 인증과
          ISI 마크는 소비자, 기관 및 조달 기관에게 귀중한 보증을 제공합니다.
          규정 준수에 투자하는 제조업체는 규제 요건을 충족할 뿐만 아니라
          경쟁력과 장기적인 시장 평판을 향상시킵니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022에 따른 일반용 의자 및 스툴용 BIS 인증을 계획하고
          계시다면 Sun Certifications India가 인증 프로세스 전반에 걸쳐 전문
          안내와 종합적인 규정 준수 지원을 제공할 수 있습니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 일반용 의자 및 스툴용 BIS 인증 (IS 17632:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. IS 17632:2022란 무엇인가요?</strong>
              <br />
              IS 17632:2022는 일반용 의자 및 스툴에 대한 요구사항을 규정하는
              인도 표준입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. 일반용 의자 및 스툴에 BIS 인증이 필수인가요?
              </strong>
              <br />
              해당 가구 품질관리령에 포함되는 제품은 BIS 인증 요건을
              준수해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ISI 마크란 무엇인가요?</strong>
              <br />
              ISI 마크는 BIS 제품 인증 제도에 따라 발급되는 표준 인증
              마크입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 누가 BIS 인증을 신청할 수 있나요?</strong>
              <br />
              인도 제조업체와 외국 제조업체 모두 인증을 신청할 수 있습니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. BIS 인증에 제품 테스트가 필요한가요?</strong>
              <br />
              네. 제품 테스트는 인증 프로세스의 중요한 구성 요소입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. 조립식 의자도 IS 17632:2022에 포함되나요?
              </strong>
              <br />
              네. 이 표준은 조립 후의 조립식 제품에 적용됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. IS 17632:2022 적용 범위에서 제외되는 제품은 무엇인가요?
              </strong>
              <br />
              리클라이닝 의자, 흔들 의자, 기울임 의자, 소파 및 특정 전문
              좌석 제품 등은 일반적으로 제외됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. BIS 인증의 혜택은 무엇인가요?</strong>
              <br />
              규제 준수, 제품 신뢰도 향상, 고객 신뢰 강화 및 시장 수용성
              개선 등의 혜택이 있습니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. 외국 제조업체도 BIS 인증을 받을 수 있나요?
              </strong>
              <br />
              네. 외국 제조업체는 해외 제조업체를 위한 해당 BIS 인증 경로를
              통해 신청할 수 있습니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications India는 어떻게 도울 수 있나요?</strong>
              <br />
              Sun Certifications India는 문서, 테스트 조정, 신청 관리 및
              규정 준수 지원을 포함한 BIS 인증에 대한 종합 지원을
              제공합니다.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="의자 및 스툴용 BIS 인증서 - IS 17632:2022 PDF"
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
              ISI 인증
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              외국 제조업체용 BIS 인증
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
              저희 서비스
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                인도의 최고 인증 컨설턴트
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
