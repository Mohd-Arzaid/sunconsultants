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

const BISCertificateForWorkChairsKorean = () => {
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

export default BISCertificateForWorkChairsKorean;

const MetaTags = () => {
  const title = "업무용 의자용 BIS 인증서 | IS 17631:2022 BIS 라이선스";
  const ogTitle = "업무용 의자용 BIS 인증 – IS 17631:2022 가이드";
  const twitterTitle = "업무용 의자용 BIS 라이선스 | IS 17631:2022";
  const metaDescription =
    "IS 17631:2022에 따른 업무용 의자용 BIS 인증서를 받으세요. 인도의 BIS 인증을 위한 프로세스, 문서, 테스트, 비용 및 일정.";
  const ogDescription =
    "IS 17631:2022에 따른 업무용 의자용 BIS 인증에 대한 완전한 가이드. 프로세스, 비용, 문서, 테스트 및 BIS 라이선스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 17631:2022에 따른 업무용 의자용 BIS 인증서를 신청하세요. 인도의 BIS 프로세스, 문서, 테스트, 수수료 및 일정을 알아보세요.";
  const metaKeywords =
    "업무용 의자용 BIS 인증서, 업무용 의자용 BIS 라이선스, IS 17631:2022, 업무용 의자용 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal, Sun Certification India 운영 책임자";

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
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
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
                    업무용 의자 BIS 인증 (IS 17631:2022)
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
          업무용 의자 BIS 인증 (IS 17631:2022) – ISI 마크 인증 완전 가이드
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="업무용 의자용 BIS 라이선스"
            alt="업무용 의자 BIS 인증 - IS 17631:2022 ISI 마크 가이드"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          업무용 의자는 현대 직장, 교육 기관, 정부 사무실, 공동 작업 공간 및
          홈 오피스 환경에서 필수적인 요소가 되었습니다. 조직이 직원의 편안함,
          생산성, 직장 인체공학 및 직업적 웰빙에 더 많은 중점을 두면서 고품질
          업무용 의자에 대한 수요는 계속 증가하고 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          설계가 잘못된 의자는 자세, 편안함 및 생산성에 부정적인 영향을 미칠 수
          있습니다. 이러한 이유로 품질, 안전, 내구성 및 인체공학적 성능은
          제조업체, 구매자 및 조달 기관에게 중요한 고려 사항입니다. 업계 전반에
          걸쳐 균일한 품질 기준을 보장하기 위해 인도 표준국(BIS)은 업무용
          의자에 적용되는 인도 표준 IS 17631:2022를 수립했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          해당 규제 프레임워크에 포함된 제조업체는 BIS 인증을 취득하고 준수
          제품에 ISI 마크를 사용해야 합니다. BIS 인증은 업무용 의자가 안전,
          강도, 안정성, 내구성 및 인체공학적 성능과 관련된 규정 요건에 대해
          평가되었음을 입증합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 종합 가이드는 IS 17631:2022에 따른 업무용 의자 BIS 인증에 대해
          제조업체, 수입업체, 가구 브랜드, 조달 전문가 및 사업주가 알아야 할
          모든 것을 설명합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자 BIS 인증 빠른 개요
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
                ["제품", "업무용 의자"],
                ["적용 인도 표준", "IS 17631:2022"],
                ["인증 유형", "BIS 제품 인증"],
                ["적용 인증 제도", "Scheme-I (ISI 마크 인증)"],
                ["적용 마크", "ISI 마크"],
                ["규제 기관", "Bureau of Indian Standards (BIS)"],
                ["적용 부처", "상업 및 산업부"],
                [
                  "준수 요건",
                  "해당 가구 QCO(품질관리명령)에 따른 의무",
                ],
                [
                  "신청 가능 대상",
                  "인도 제조업체 및 외국 제조업체 ",
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
                    {particular === "적용 인증 제도" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Scheme-I (ISI 마크 인증)
                      </a>
                    ) : particular === "준수 요건" ? (
                      <>
                        해당{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>가구 QCO(품질관리명령)</strong>
                        </a>
                        에 따른 의무
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
          업무용 의자 BIS 인증이란?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          업무용 의자 BIS 인증은 인도 표준국 제품 인증 제도에 따라 수행되는
          적합성 평가 절차입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증의 목적은 업무용 의자가 IS 17631:2022에 명시된 요건을 충족하는지
          확인하는 것입니다. 인증에 성공하면 제조업체는 제품에 ISI 마크를
          사용할 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          인증 절차는 업무용 의자의 다양한 성능 및 안전 측면을 평가합니다.
          여기에는 다음이 포함됩니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>인체공학적 설계</li>
          <li>구조적 무결성</li>
          <li>안정성</li>
          <li>내구성</li>
          <li>안전 요건</li>
          <li>제작 품질</li>
          <li>제품 성능</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ISI 마크는 제품이 인정된 인도 표준에 대해 평가되었으며 규정된 품질
          요건을 충족함을 보증합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자 BIS 인증이 중요한 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          업무용 의자는 사무실, 교육 기관, 상업 시설 및 홈 워크스페이스에서
          장시간 사용됩니다. 사용자가 하루 중 상당 부분을 앉아 보내기 때문에
          이러한 의자의 품질과 인체공학적 성능은 편안함과 직장 효율성에 직접적인
          영향을 미칩니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증은 인증된 업무용 의자가 다음을 충족하도록 돕습니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>규정된 안전 요건 충족</li>
          <li>신뢰할 수 있는 성능 제공</li>
          <li>적절한 구조적 강도 확보</li>
          <li>사용 중 안정성 유지</li>
          <li>장기 내구성 지원</li>
          <li>인도 품질 표준 준수</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체에게 인증은 규제 준수와 시장 수용을 지원하면서 제품 품질을
          입증하는 데 도움이 됩니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17631:2022 개요
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022는 업무용 의자에 대한 요건을 규정하는 인도 표준입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 다음과 관련된 요건을 수립합니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>안전</li>
          <li>강도</li>
          <li>안정성</li>
          <li>내구성</li>
          <li>인체공학적 고려사항</li>
          <li>기능적 성능</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          목표는 업무용 의자가 직장 환경에서 장기간 사용 시 안전하고 신뢰할 수
          있는 성능을 제공할 수 있도록 하는 것입니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>IS 17631:2022 적용 범위</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          표준에 따르면 IS 17631:2022는 업무용 의자를 포함하며 다음에
          적용됩니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>완전히 제조된 업무용 의자</li>
          <li>제작된 업무용 의자</li>
          <li>조립 후 조립식 업무용 의자</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          표준의 요건은 사용을 위해 조립된 제품에 적용됩니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17631:2022에 적용되는 업무용 의자 유형
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          제품 설계 및 의도된 용도에 따라 이 표준은 다양한 직장 좌석 가구
          카테고리에 적용될 수 있습니다. 여기에는 다음이 포함됩니다:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>사무용 업무 의자 —</strong> 기업 사무실, 행정 부서 및
            전문 직장 환경에서 사용되는 좌석.
          </li>
          <li>
            <strong>작업용 의자 —</strong> 일상적인 책상 작업, 워크스테이션 및
            일반적인 좌석 업무를 위해 제작된 의자.
          </li>
          <li>
            <strong>조절 가능한 업무용 의자 —</strong> 편안함과 인체공학을
            개선하기 위해 높이, 기울기 또는 기타 조절 기능이 있는 모델.
          </li>
          <li>
            <strong>기관용 업무 의자 —</strong> 학교, 대학, 정부 사무실 및
            상업 기관에 공급되는 의자.
          </li>
          <li>
            <strong>홈 오피스 의자 —</strong> 원격 근무, 프리랜서 및 주택
            사무실 환경을 위해 설계된 업무용 의자.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          의자가 IS 17631:2022 범위에 해당하는지 확인하려면 제품 설계, 메커니즘
          및 의도된 용도를 신중하게 검토하세요.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            의무 BIS 인증 대상 가구 제품도 확인하세요 —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>가구 BIS 인증</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17631:2022의 주요 요건
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 표준은 업무용 의자의 품질과 안전에 기여하는 여러 중요한 성능
          특성에 중점을 둡니다.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>인체공학적 설계 —</strong> 사용자 편안함, 좌석 및 등받이
            지지, 조절성 및 적절한 자세를 다루어 피로를 줄이고 직장 생산성을
            향상시킵니다.
          </li>
          <li>
            <strong>강도 요건 —</strong> 프레임, 접합부 및 지지 구조는 손상이나
            무결성 손실 없이 정상적인 사용을 견뎌야 합니다.
          </li>
          <li>
            <strong>안정성 요건 —</strong> 의자는 전도를 저항하고 일반적인
            좌석 사용 및 이동 중 안정성을 유지해야 합니다.
          </li>
          <li>
            <strong>내구성 요건 —</strong> 제품은 의도된 수명 동안 장기간 및
            반복적인 일상 사용 후에도 일관된 성능을 유지해야 합니다.
          </li>
          <li>
            <strong>안전 요건 —</strong> 설계 및 구조는 불안정성, 결함 또는
            불안전한 제작으로 인한 피할 수 있는 위험을 최소화해야 합니다.
          </li>
          <li>
            <strong>재료 품질 —</strong> 구성 요소 및 마감은 안전하고 내구성
            있으며 신뢰할 수 있는 성능을 지원하는 품질 기준을 충족해야 합니다.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자 BIS 인증 테스트 요건
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증이 부여되기 전에 제품 샘플은 인정된 실험실에서 테스트를 통해
          평가됩니다. 테스트는 IS 17631:2022에 명시된 요건 준수 여부를
          확인하는 데 도움이 됩니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>수행되는 주요 테스트</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
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
              {[
                ["4", "디자인 및 제작"],
                ["7.3.1", "전면 가장자리 전도"],
                ["7.3.2", "전방 전도"],
                [
                  "7.3.3",
                  "발판이 있는 의자의 전방 전도",
                ],
                [
                  "7.3.4",
                  "팔걸이가 없는 의자의 측면 전도",
                ],
                [
                  "7.3.5",
                  "팔걸이가 있는 의자의 측면 전도",
                ],
                [
                  "7.3.6",
                  "등받이가 없는 의자의 후방 전도",
                ],
                ["7.4.1", "좌석 전면 가장자리 정적 하중 테스트"],
                ["7.4.2", "좌석 및 등받이 결합 정적 하중 테스트"],
                ["7.4.3", "팔걸이 하향 정적 하중 테스트 — 중앙"],
                ["7.4.4", "팔걸이 하향 정적 하중 테스트 — 전면"],
                ["7.4.5", "팔걸이 측면 정적 하중 테스트"],
                ["7.4.6", "발판 정적 하중 테스트"],
              ].map(([clause, requirement], index) => (
                <TableRow
                  key={clause}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {clause}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {requirement}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자 BIS 인증 절차
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022에 따른 BIS 인증을 받으려는 제조업체는 체계적인 인증
          절차를 완료해야 합니다.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>1단계: 제품 적용성 평가 —</strong> 인증을 시작하기 전에
            업무용 의자가 IS 17631:2022 및 해당 가구 QCO에 해당하는지
            확인합니다.
          </li>
          <li>
            <strong>2단계: 서류 준비 —</strong> BIS 검토에 필요한 기술, 제조,
            품질 관리 및 법적 기록을 작성합니다.
          </li>
          <li>
            <strong>3단계: 제품 테스트 —</strong> IS 17631:2022에 대한 평가를
            위해 BIS 인정 실험실에 샘플을 제출합니다.
          </li>
          <li>
            <strong>4단계: 신청서 제출 —</strong> 테스트 보고서, 공장 세부
            정보 및 지원 준수 서류와 함께 BIS 신청서를 제출합니다.
          </li>
          <li>
            <strong>5단계: 공장 검사 —</strong> BIS는 제조 시설의 생산 시스템,
            QC 절차 및 추적 가능성을 평가합니다.
          </li>
          <li>
            <strong>6단계: 기술 검토 —</strong> BIS는 최종 승인 전에 신청서,
            실험실 결과 및 검사 결과를 평가합니다.
          </li>
          <li>
            <strong>7단계: BIS 라이선스 부여 —</strong> 준수에 성공하면 BIS는
            라이선스를 발급하고 인증된 업무용 의자에 ISI 마크 사용을
            승인합니다.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          인도 제조업체를 위한 BIS 인증
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          인도 제조업체는 일반적으로 국내 인증 경로를 통해 신청합니다. 절차에는
          일반적으로 다음이 포함됩니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>BIS 인정 실험실에서의 제품 테스트</li>
          <li>서류 검토 및 BIS 신청서 제출</li>
          <li>BIS의 공장 평가 및 기술 평가</li>
          <li>BIS 라이선스 부여 및 ISI 마크 승인</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증 후 제조업체는 BIS 감시, 마킹 및 품질 요건에 대한 지속적인
          준수를 유지해야 합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          외국 제조업체를 위한 BIS 인증
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도로 업무용 의자를 수출하려는 외국 제조업체도 의무 인증 요건에
          해당하는 제품을 공급하기 전에 BIS 인증을 취득해야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          절차에는 일반적으로 다음이 포함됩니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>공인 인도 대리인(AIR) 임명</li>
          <li>해외 제품 테스트 및 공장 평가</li>
          <li>BIS 신청서 검토 및 인증 승인</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이를 통해 수입 제품이 국내 제조업체에 적용되는 동일한 품질 및 안전
          요건을 충족하도록 보장합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자 BIS 인증에 필요한 서류
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          서류는 업무용 의자 BIS 인증 절차의 중요한 부분입니다. 요건은
          신청자가 인도 제조업체, 외국 제조업체 또는 수입업체인지, 그리고
          따르는 인증 제도에 따라 달라질 수 있습니다. 불완전하거나 일관성
          없는 기록은 신청 지연의 가장 흔한 원인 중 하나입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17631:2022에 따른 업무용 의자 BIS 인증 중 일반적으로 필요한
          서류는 다음과 같습니다:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>사업 서류 —</strong> 회사 등록 증명서, 제조 허가(해당
            시), GST 등록, 사업장 주소 증명, 신원 및 주소 증명이 포함된
            승인 서명자 세부 정보.
          </li>
          <li>
            <strong>제조 서류 —</strong> 공장 배치도, 제조 공정 흐름도, 생산
            기계 및 테스트 장비 목록, 생산 인프라 및 설치 용량 세부 정보.
          </li>
          <li>
            <strong>제품 서류 —</strong> 제품 사양, 엔지니어링 또는 기술
            도면, 제품 카탈로그 또는 모델 목록, 자재 명세서(BOM), 업무용
            의자에 사용되는 원자재, 구성 요소 및 핵심 부품 세부 정보.
          </li>
          <li>
            <strong>품질 관리 서류 —</strong> 서면 품질 관리 절차, 입고
            자재 검사 기록, 공정 중 및 완제품 검사 보고서, 내부 테스트
            방법, 측정 및 테스트 장비 교정 증명서.
          </li>
          <li>
            <strong>인증 서류 —</strong> BIS 인정 실험실의 테스트 보고서,
            적절히 작성된 BIS 신청서, 선언 및 서약, 라벨 또는 마킹 샘플,
            특정 인증 경로에 대해 BIS가 규정한 추가 서류.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          모든 서류는 정확하고 완전하며 BIS 신청서에 제출된 제품 세부 정보와
          일치해야 합니다. 제조업체는 인증 처리의 불필요한 지연을 피하기 위해
          제출 전에 서류 요건을 신중하게 검토하는 것이 좋습니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자 BIS 인증의 혜택
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>규제 준수 —</strong> 합법적인 제조 및 판매를 위한 의무
            인도 표준 및 QCO 요건 충족.
          </li>
          <li>
            <strong>합법적 시장 접근 —</strong> 해당 제품 카테고리에 대해
            규제 위험 없이 인도에서 인증된 업무용 의자 공급.
          </li>
          <li>
            <strong>신뢰성 향상 —</strong> ISI 마크는 IS 17631:2022에 대한
            검증된 품질, 안전 및 적합성을 나타냅니다.
          </li>
          <li>
            <strong>고객 신뢰 —</strong> 기업 구매자, 기관 및 최종 사용자는
            국가 기준에 대해 테스트된 제품을 신뢰합니다.
          </li>
          <li>
            <strong>조달 개선 —</strong> 정부, 기관 및 대량 상업 입찰에서
            자격 향상.
          </li>
          <li>
            <strong>브랜드 평판 강화 —</strong> 품질, 인체공학 및 장기 제품
            신뢰성에 대한 헌신을 입증합니다.
          </li>
          <li>
            <strong>품질 관리 개선 —</strong> 체계적인 QC 시스템, 추적
            가능성 및 일관된 생산 기준을 장려합니다.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증 과정에서의 일반적인 과제
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>기술적 해석 —</strong> IS 17631:2022 조항을 특정 의자
            설계, 메커니즘 및 변형에 매핑하는 것은 복잡할 수 있습니다.
          </li>
          <li>
            <strong>테스트 실패 —</strong> 약한 프레임, 불안정한 안정성 또는
            메커니즘 문제는 종종 전도 또는 하중 테스트 거부로 이어집니다.
          </li>
          <li>
            <strong>서류 부족 —</strong> 일치하지 않는 도면, 불완전한 QC
            기록 또는 누락된 선언은 일반적으로 승인을 지연시킵니다.
          </li>
          <li>
            <strong>공장 준수 —</strong> 생산 관리, 추적 가능성 및 사내
            테스트는 라이선스 부여 전에 업그레이드가 필요할 수 있습니다.
          </li>
          <li>
            <strong>규제 조정 —</strong> 실험실 테스트, BIS 검사 및 후속
            문의를 조정하는 데 전문가 지원 없이는 시간이 걸립니다.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sun Certifications India를 선택하는 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India는 인도 시장에 필요한 다양한 인증 및
          승인 취득을 지원하는 규제 준수 컨설팅 회사입니다. 제조업체,
          수입업체, 수출업체 및 기업을 지원합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          저희 팀은 IS 17631:2022에 따른 업무용 의자 BIS 인증에 대한
          엔드투엔드 지원을 제공합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>제공 서비스</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>제품 적용성 평가 —</strong> 업무용 의자가 IS 17631:2022
            및 해당 QCO에 해당하는지 확인합니다.
          </li>
          <li>
            <strong>BIS 준수 컨설팅 —</strong> 인증 경로, 의무 및 표준
            요건에 대한 전문가 지침.
          </li>
          <li>
            <strong>서류 지원 —</strong> 모든 BIS 신청 및 공장 기록의
            준비, 검토 및 정리.
          </li>
          <li>
            <strong>테스트 조정 —</strong> 인정된 실험실에서의 샘플 제출 및
            테스트에 대한 엔드투엔드 지원.
          </li>
          <li>
            <strong>공장 검사 지원 —</strong> BIS 공장 평가 및 준수 평가를
            위한 준비 점검.
          </li>
          <li>
            <strong>신청 관리 —</strong> BIS 제출, 후속 조치 및 규제
            커뮤니케이션을 대신 처리합니다.
          </li>
          <li>
            <strong>인증 후 지원 —</strong> 감시, 마킹 규칙 및 라이선스
            유지 요건에 대한 지속적인 지원.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022에 따른 업무용 의자 BIS 인증은 직장 좌석 제품의 품질,
          안전, 내구성, 안정성 및 인체공학적 성능을 보장하는 데 중요한 역할을
          합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증을 취득하고 ISI 마크를 사용함으로써 제조업체는 인도 표준
          준수를 입증하고, 고객 신뢰를 강화하며, 제품 신뢰성을 개선하고, 장기
          사업 성장을 지원할 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도 제조업체이든 인도 시장 접근을 원하는 해외 제조업체이든 IS
          17631:2022의 요건을 이해하는 것은 규제 준수와 시장 성공을 위한
          필수적인 단계입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022에 따른 업무용 의자 BIS 인증을 계획하고 있다면 Sun
          Certifications India가 전문 규제 지침과 엔드투엔드 준수 지원을
          통해 절차를 간소화하는 데 도움을 드릴 수 있습니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 업무용 의자 BIS 인증 (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 업무용 의자 BIS 인증이란?</strong>
              <br />
              BIS 인증은 업무용 의자가 IS 17631:2022 및 해당 인증 요건을
              충족함을 확인합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. IS 17631:2022란?</strong>
              <br />
              IS 17631:2022는 안전, 강도, 안정성, 내구성 및 인체공학적
              고려사항을 포함하여 업무용 의자에 대한 요건을 규정하는 인도
              표준입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 업무용 의자 BIS 인증은 의무입니까?</strong>
              <br />
              해당 규제 프레임워크에 포함된 업무용 의자는 BIS 인증 요건을
              준수해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ISI 마크란?</strong>
              <br />
              ISI 마크는 BIS 제품 인증 제도에 따라 발급되는 표준 인증
              마크입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. BIS 인증은 누가 신청할 수 있습니까?</strong>
              <br />
              인도 제조업체와 외국 제조업체 모두 신청할 수 있습니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. BIS 인증에 제품 테스트가 필요합니까?</strong>
              <br />
              예. 제품 테스트는 인증 절차의 중요한 부분입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. 수입 업무용 의자에 BIS 인증이 필요합니까?
              </strong>
              <br />
              의무 인증 요건에 해당하는 제품은 인도에서 공급되기 전에 해당
              BIS 규정을 준수해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. IS 17631:2022에 따라 어떤 테스트가 수행됩니까?</strong>
              <br />
              이 표준에는 설계 및 제작 평가, 치수 검증, 안정성 테스트 및
              정적 하중 테스트와 같은 평가가 포함됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 업무용 의자에 인체공학적 설계가 중요한 이유는?</strong>
              <br />
              인체공학적 설계는 사용자 편안함을 개선하고, 적절한 자세를
              지원하며, 더 나은 직장 경험에 기여합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications India는 어떻게 도움을 줄 수 있습니까?</strong>
              <br />
              Sun Certifications India는 적용성 평가, 서류, 테스트 조정,
              검사 준비, 신청 관리 및 준수 지원을 제공합니다.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="업무용 의자 BIS 인증 - IS 17631:2022 PDF"
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
              {" "}
              ISI 인증서
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              외국 제조업체용 BIS 인증서
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadKorean />

        <FaqAuthorKorean questionNumber={4} />
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
                인도 최고의 인증서 컨설턴트
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
              외국 제조업체용 BIS 마크 (ISI 라이선스)
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
