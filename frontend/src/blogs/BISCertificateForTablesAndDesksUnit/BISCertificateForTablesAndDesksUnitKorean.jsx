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

const BISCertificateForTablesAndDesksUnitKorean = () => {
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

export default BISCertificateForTablesAndDesksUnitKorean;

const MetaTags = () => {
  const title =
    "테이블 및 책상 BIS 인증 | IS 17633:2022 BIS 라이센스";
  const ogTitle = "테이블 및 책상 BIS 인증 – IS 17633:2022 가이드";
  const twitterTitle = "테이블 및 책상 BIS 라이센스 | IS 17633:2022";
  const metaDescription =
    "IS 17633:2022에 따른 테이블 및 책상 BIS 인증서를 받으세요. 인도에서 BIS 인증 프로세스, 서류, 테스트, 비용 및 타임라인.";
  const ogDescription =
    "IS 17633:2022에 따른 테이블 및 책상 BIS 인증 완전 가이드. 프로세스, 비용, 서류, 테스트 및 BIS 라이센스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 17633:2022에 따른 테이블 및 책상 BIS 인증서를 신청하세요. 인도에서 BIS 프로세스, 서류, 테스트, 수수료 및 타임라인을 배우세요.";
  const metaKeywords =
    "테이블 및 책상 BIS 인증, 테이블 및 책상 BIS 라이센스, IS 17633:2022, 테이블 및 책상 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/teibeul-mich-chaegsang-is-17633";
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
                    테이블 및 책상 BIS 인증 (IS 17633:2022)
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
          테이블 및 책상 BIS 인증 (IS 17633:2022) – 완벽한 ISI 마크 인증
          가이드
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="테이블 및 책상 BIS 라이센스"
            alt="테이블 및 책상 BIS 인증 - IS 17633:2022 ISI 마크 가이드"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          테이블과 책상은 사무실, 교육 기관, 상업 시설, 정부 기관 및 주거
          공간 전반에서 가장 널리 사용되는 가구 제품 중 하나입니다. 이러한
          제품은 사용자 안전, 안정성 및 내구성을 보장하면서 일상적인 사용을
          견딜 것으로 기대되기 때문에, 인정된 품질 표준 준수가 제조업체와
          수입업체에게 점점 더 중요해지고 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도에서 IS 17633:2022에 따라 적용되는 테이블 및 책상은 인도
          표준국(BIS)이 규정한 적용 가능한 품질 및 안전 요구사항을 준수해야
          합니다. 이러한 요구사항을 성공적으로 충족하는 제조업체는 BIS
          라이센스를 취득하고 제품에 ISI 마크를 사용하여 관련 인도 표준과의
          적합성을 입증할 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증 프로세스는 강도, 안정성, 내구성, 작업 품질, 치수 및 전반적인
          안전성을 포함한 제품 성능의 다양한 측면을 평가합니다. 준수는
          기업이 규제 요구사항을 충족하는 데 도움이 될 뿐만 아니라 제품
          신뢰성과 시장 수용성도 향상시킵니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 포괄적인 가이드는 제조업체, 수입업체, 가구 브랜드 및 조달
          전문가가 IS 17633:2022에 따른 테이블 및 책상 BIS 인증에 대해 알아야
          할 모든 것을 설명하며, 여기에는 적용 가능성, 인증 요구사항, 테스트
          매개변수, 문서화, 혜택 및 인증 프로세스가 포함됩니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          테이블 및 책상 BIS 인증의 주요 하이라이트
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  항목
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  세부 정보
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["제품", "테이블 및 책상"],
                ["적용 표준", "IS 17633:2022"],
                ["인증 유형", "BIS 제품 인증"],
                ["적용 마크", "ISI 마크"],
                ["인증 스킴", "Scheme-I (ISI 마크 인증)"],
                ["규제 기관", "인도 표준국(BIS)"],
                ["적용 부문", "가구"],
                [
                  "신청 자격",
                  "인도 제조업체 및 외국 제조업체",
                ],
                [
                  "준수 요구사항",
                  "적용 가능한 가구 QCO(품질 관리 명령)에 따라 의무",
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
                    {particular === "인증 스킴" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Scheme-I (ISI 마크 인증)
                      </a>
                    ) : particular === "준수 요구사항" ? (
                      <>
                        적용 가능한 {" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>가구 QCO(품질 관리 명령)</strong>
                        </a>
                        에 따라 의무
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
          테이블 및 책상 BIS 인증이란 무엇입니까?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          테이블 및 책상 BIS 인증은 인도 표준국(BIS) 제품 인증 스킴에 따라
          수행되는 적합성 평가 프로세스입니다. 이 인증은 제품이 IS
          17633:2022에 명시된 요구사항을 준수함을 확인합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증을 성공적으로 받으면 제조업체는 제품에 ISI 마크를 사용할 수
          있으며, 이는 적용 가능한 인도 표준 준수를 나타냅니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 인증은 인도 시장에 공급되는 테이블과 책상이 다음과 관련된 확립된
          요구사항을 충족하도록 보장하기 위한 것입니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>정상적인 사용 중의 구조적 강도 및 안정성</li>
          <li>내구성, 사용자 안전 및 재료 작업 품질</li>
          <li>IS 17633:2022에 따른 전체 성능 요구사항</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          구매자와 조달 기관에게 ISI 마크는 해당 가구가 인정된 품질 및 안전
          기준에 대해 평가되었음을 보증하는 역할을 합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          테이블 및 책상에 대한 IS 17633:2022 개요
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022는 앉은 자세 및 서 있는 자세로 사용하는 성인 사용자를
          위한 테이블 및 책상의 성능 및 안전 요구사항을 명시하는 인도
          표준입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 다음 두 가지를 모두 다룹니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>완전히 제조된(완제품) 테이블 및 책상</li>
          <li>조립 준비 완료(RTA) 유닛 — 완전한 조립 후 테스트됨</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 표준의 목적은 가구가 의도된 사용 수명 전반에 걸쳐 안정적이고,
          내구성이 있으며, 안전하게 유지되도록 돕는 최소 성능 및 안전
          요구사항을 확립하는 것입니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          IS 17633:2022에서 다루는 주요 영역
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 다음을 포함한 여러 중요한 성능 특성에 중점을 둡니다:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>강도 요구사항 —</strong> 테이블과 책상은 고장이나 과도한
            변형 없이 정상적인 사용 중 예상 하중을 견뎌야 합니다.
          </li>
          <li>
            <strong>안정성 요구사항 —</strong> 가구는 사용 시 안정적으로
            유지되어야 하며 예측 가능한 하중 조건에서 전도에 저항해야 합니다.
          </li>
          <li>
            <strong>내구성 요구사항 —</strong> 제품은 장기간에 걸친 반복
            사용 후에도 성능과 구조적 무결성을 유지해야 합니다.
          </li>
          <li>
            <strong>안전 요구사항 —</strong> 설계와 제작은 불안정성, 날카로운
            모서리, 안전하지 않은 구조 또는 구조적 고장으로 인한 위험을
            최소화해야 합니다.
          </li>
          <li>
            <strong>작업 품질 및 제작 품질 —</strong> 작업 품질, 조립,
            접합부, 패스너 및 전반적인 제작이 신뢰할 수 있는 장기 성능을
            위해 평가됩니다.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          인도에서 테이블 및 책상 BIS 인증이 필수입니까?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          예. 적용 가능한 가구 품질 관리 명령(QCO)에 따라 다루어지는 테이블과
          책상은 인도 시장에서 제조, 수입, 판매, 유통 또는 제공되기 전에 관련
          인도 표준을 준수하고 BIS 인증을 받아야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          의무 인증의 목적은 다음과 같습니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>가구 산업 전반에 걸쳐 더 높은 제품 품질 보장</li>
          <li>검증된 표준을 통한 소비자 안전 보호</li>
          <li>표준 미달 가구의 시장 진입 방지</li>
          <li>표준화 및 균일한 품질 기준 촉진</li>
          <li>ISI 마크 인증 제품에 대한 구매자 신뢰 구축</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          적용 가능한 규정에 해당하는 제조업체는 BIS 라이센스를 취득하고 BIS
          요구사항에 따라 ISI 마크를 사용해야 합니다.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            의무 BIS 인증에 해당하는 가구 제품도 확인하세요 —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            <strong>가구에 대한 BIS 인증</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022에서 다루는 제품 범위
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022의 범위는 주거, 상업, 기관 및 작업 환경 전반에 걸쳐
          성인 사용자를 위해 설계된 다양한 범주의 테이블과 책상으로
          확장됩니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          일반적으로 다루어지는 제품의 예는 다음과 같습니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>사무용, 학습용 및 컴퓨터 책상</li>
          <li>워크스테이션 및 다목적 책상</li>
          <li>컨퍼런스 및 회의 테이블</li>
          <li>기관 및 실험실 테이블</li>
          <li>코워킹 및 상업용 가구</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체는 자사 제품이 IS 17633:2022의 범위에 속하는지 판단하기
          위해 제품 사양과 의도된 용도를 신중하게 검토해야 합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022에 따른 주요 기술 요구사항
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증을 받으려면 테이블과 책상이 표준에 명시된 다양한 성능 및
          안전 요구사항을 충족해야 합니다.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>구조적 무결성 —</strong> 제품은 규정된 하중에서 성능을
            발휘해야 하며, 접합부와 지지 구조는 테스트 중 안전하게 유지되어야
            합니다.
          </li>
          <li>
            <strong>하중 지지 성능 —</strong> 테이블과 책상은 허용할 수 없는
            변형, 손상 또는 고장 없이 명시된 하중을 지지해야 합니다.
          </li>
          <li>
            <strong>안정성 성능 —</strong> 가구는 사용 시 안정적으로
            유지되어야 하며 부상이나 재산 피해를 일으킬 수 있는 전도 위험을
            줄여야 합니다.
          </li>
          <li>
            <strong>내구성 성능 —</strong> 제품은 허용 가능한 성능을
            유지하면서 반복적인 사용 주기를 견뎌야 합니다.
          </li>
          <li>
            <strong>재료 및 작업 품질 —</strong> 재료, 마감 및 조립 방법은
            일관된 생산을 위한 품질 관리를 충족해야 합니다.
          </li>
          <li>
            <strong>안전 고려사항 —</strong> 설계는 소비자와 기관 구매자를
            위해 가구 사용으로 인한 위험을 최소화해야 합니다.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구 제조업체에게 BIS 인증이 중요한 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도 가구 시장은 점점 더 품질을 의식하게 되었습니다. 정부 부처,
          교육 기관, 기업 구매자 및 대규모 조달 기관은 종종 인정된 표준을
          준수하는 제품을 선호합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증을 취득하면 제조업체는 다음을 할 수 있습니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>적용 가능한 인도 표준 준수 입증</li>
          <li>제품 신뢰성 및 브랜드 평판 향상</li>
          <li>고객 및 기관 구매자 신뢰 확보</li>
          <li>정부 및 기업 조달에서의 수용성 향상</li>
          <li>사내 품질 관리 관행 강화</li>
          <li>진화하는 규제 요구사항에 앞서 대응</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          장기적인 성장을 추구하는 제조업체에게 BIS 인증은 종종 준수
          요구사항이자 전략적 비즈니스 이점으로 간주됩니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022에 따른 테이블 및 책상 테스트 요구사항
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체가 BIS 인증을 받기 전에 제품 샘플은 BIS 인정 실험실에서의
          테스트를 통해 IS 17633:2022의 적용 가능한 요구사항에 대해 평가되어야
          합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          테스트의 목적은 가구가 안전성, 안정성, 강도, 내구성 및 전반적인
          성능에 대한 규정된 표준을 충족하는지 확인하는 것입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          정확한 테스트 매개변수는 제품 설계 및 인증 요구사항에 따라 다를 수
          있지만, 제조업체는 일반적으로 다음 특성에 대해 평가받습니다:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>설계 및 작업 품질 —</strong> 안전한 장기 사용을 위해
            제작 품질, 조립, 마감 및 전반적인 제품 무결성이 검사됩니다.
          </li>
          <li>
            <strong>치수 검증 —</strong> 중요한 치수는 표준 및 승인된 제품
            사양에 대해 점검됩니다.
          </li>
          <li>
            <strong>안정성 테스트 —</strong> 제품이 정상적인 사용에서
            안정적으로 유지되는지 확인하고 전도 또는 구조적 약점을 표시합니다.
          </li>
          <li>
            <strong>정적 하중 테스트 —</strong> 고장, 과도한 변형 또는 손상
            없이 하중 지지 능력을 검증합니다.
          </li>
          <li>
            <strong>강도 테스트 —</strong> 정상적인 사용 중 작동 응력 하에서
            프레임, 접합부 및 지지대를 평가합니다.
          </li>
          <li>
            <strong>내구성 평가 —</strong> 반복적인 사용 주기 후 성능 유지를
            점검합니다.
          </li>
          <li>
            <strong>안전 평가 —</strong> 불안정성, 결함 또는 안전하지 않은
            설계 특징으로 인한 회피 가능한 위험을 배제합니다.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          테이블 및 책상 BIS 인증 프로세스
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022에 따라 BIS 인증을 추구하는 제조업체는 인도 표준국이
          확립한 구조화된 인증 프로세스를 따라야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          특정 요구사항은 신청자 유형 및 제조 위치에 따라 다를 수 있지만,
          일반적인 프로세스는 유사하게 유지됩니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          단계 1: 제품 범위 평가
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          첫 번째 단계는 제품이 IS 17633:2022 및 적용 가능한 품질 관리 명령의
          범위에 속하는지 판단하는 것입니다. 인증 프로세스를 시작하기 전에
          일반적으로 제품 사양, 의도된 용도, 재료 및 제작에 대한 기술 검토가
          수행됩니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          단계 2: 문서 준비
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체는 회사 정보, 제조 세부 정보, 제품 사양, 품질 관리 절차 및
          뒷받침하는 기술 기록을 포함한 필수 문서를 준비합니다. 이 단계의
          결함이 인증을 지연시킬 수 있으므로 적절한 문서화가 중요합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          단계 3: 제품 테스트
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          제품 샘플은 IS 17633:2022의 요구사항 준수를 확인하기 위해 BIS 인정
          실험실에서 테스트됩니다. 테스트 보고서는 인증 신청을 뒷받침하는
          주요 기술 문서 중 하나의 역할을 합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          단계 4: 신청서 제출
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 신청서는 뒷받침하는 문서, 테스트 보고서, 제조 정보 및 품질 관리
          기록과 함께 제출됩니다. 신청서는 완전성과 기술적 준수를 위해 BIS가
          검토합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          단계 5: 공장 평가
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS는 다음을 평가하기 위해 공장 검사를 수행할 수 있습니다:
        </p>
        <ul className={LIST_CLASS}>
          <li>제조 인프라 및 생산 능력</li>
          <li>품질 관리 시스템 및 사내 테스트 시설</li>
          <li>원자재 관리 및 제품 추적성 메커니즘</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          목적은 제조업체가 준수하는 제품을 일관되게 생산할 수 있는 능력을
          검증하는 것입니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          단계 6: 평가 및 검토
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS는 인증 결정을 내리기 전에 신청서, 검사 결과 및 실험실 테스트
          보고서를 검토합니다. 검토 프로세스 중 제기된 모든 관찰 사항은
          신청자가 해결해야 합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          단계 7: BIS 라이센스 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          모든 요구사항이 성공적으로 완료되면 BIS는 라이센스를 부여하고
          제조업체가 인증된 테이블과 책상에 ISI 마크를 사용하도록
          승인합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          인도 제조업체를 위한 BIS 인증
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          인도 제조업체는 일반적으로 BIS가 규정한 국내 인증 절차에 따라
          신청합니다. 프로세스는 일반적으로 다음을 포함합니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>BIS 인정 실험실에서의 제품 테스트</li>
          <li>뒷받침하는 문서와 함께 신청서 제출</li>
          <li>BIS의 공장 검사 및 기술 검토</li>
          <li>BIS 라이센스 부여 및 ISI 마크 승인</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증을 받으면 제조업체는 BIS 요구사항을 계속 준수하고 라이센스
          기간 동안 일관된 제품 품질을 유지해야 합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          외국 제조업체를 위한 BIS 인증
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          테이블과 책상을 인도로 수출하려는 외국 제조업체도 적용 가능한 품질
          관리 명령에 따라 다루어지는 제품을 공급하기 전에 BIS 인증을 받아야
          합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          인증 프로세스는 일반적으로 다음을 포함합니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>공인 인도 대리인(AIR) 임명</li>
          <li>해외에서의 제품 테스트 및 공장 평가</li>
          <li>문서 검토 및 BIS 인증 승인</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          외국 제조업체는 인증 유효성을 유지하기 위해 BIS 요구사항을 지속적으로
          준수해야 합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          테이블 및 책상 BIS 인증에 필요한 서류
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          문서 요구사항은 제조업체와 인증 경로에 따라 다를 수 있습니다.
          그러나 다음 문서는 인증 프로세스 중 일반적으로 요구됩니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>비즈니스 및 법적 서류</h3>
        <ul className={LIST_CLASS}>
          <li>회사 등록, 제조 라이센스 및 GST(해당하는 경우)</li>
          <li>승인된 서명자 세부 정보 및 신분 증명</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>제조 정보</h3>
        <ul className={LIST_CLASS}>
          <li>프로세스 흐름도, 공장 배치도 및 기계 세부 정보</li>
          <li>생산 인프라 및 용량 기록</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>제품 정보</h3>
        <ul className={LIST_CLASS}>
          <li>제품 사양, 기술 도면 및 카탈로그</li>
          <li>자재 명세서 및 재료/구성품 세부 정보</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>품질 관리 서류</h3>
        <ul className={LIST_CLASS}>
          <li>내부 테스트, 검사 및 QC 절차</li>
          <li>품질 관리 기록 및 장비 교정 보고서</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>인증 서류</h3>
        <ul className={LIST_CLASS}>
          <li>실험실 테스트 보고서 및 작성된 BIS 신청서 양식</li>
          <li>선언서, 약속서 및 기타 BIS 규정 문서</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체는 제출 전에 모든 문서가 정확하고, 완전하며, 일관되도록
          보장해야 합니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증 중 일반적인 과제
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증 프로세스는 적절하게 관리될 때 간단하지만, 제조업체는 종종 여러
          과제에 직면합니다.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>기술적 해석 —</strong> 전문가의 안내 없이 IS 17633:2022
            요구사항을 특정 제품 설계에 매핑하는 것은 어려울 수 있습니다.
          </li>
          <li>
            <strong>테스트 실패 —</strong> 약한 접합부, 부족한 안정성 또는
            재료 문제는 종종 실험실 테스트 거부로 이어집니다.
          </li>
          <li>
            <strong>문서 부족 —</strong> 불완전하거나 일치하지 않는 기록은
            신청 지연의 빈번한 원인입니다.
          </li>
          <li>
            <strong>공장 준수 —</strong> QC 시스템, 추적성 또는 생산 관리는
            라이센스 부여 전에 업그레이드가 필요할 수 있습니다.
          </li>
          <li>
            <strong>규제 조정 —</strong> 실험실 테스트, 검사 및 BIS 후속
            조치를 조정하는 것은 구조화된 지원 없이 시간이 걸립니다.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          전문적인 BIS 인증 지원의 혜택
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          경험이 풍부한 BIS 컨설턴트와 협력하면 제조업체는 비용이 많이 드는
          지연을 피하고 인증 여정을 간소화할 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          전문적인 지원은 일반적으로 다음을 포함합니다:
        </p>

        <ul className={LIST_CLASS}>
          <li>제품 범위 검토 및 표준 해석</li>
          <li>문서 준비 및 신청서 제출</li>
          <li>실험실 테스트 및 공장 검사 조정</li>
          <li>지속적인 준수 및 인증 후 지원</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이를 통해 제조업체는 규제 요구사항이 효율적으로 해결되도록 하면서
          생산에 집중할 수 있습니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sun Certifications India를 선택해야 하는 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India는 인도 전역에서 제조업체, 수입업체,
          수출업체 및 기업의 인증 및 승인 요구사항을 지원하는 규제 준수
          컨설팅 회사입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          저희 전문가는 IS 17633:2022에 따른 테이블 및 책상 BIS 인증을 위한
          엔드투엔드 지원을 제공합니다.
        </p>

        <h3 className={SUB_HEADING_CLASS}>저희 서비스에 포함되는 항목</h3>

        <ul className={LIST_CLASS}>
          <li>제품 적용 가능성 평가 및 BIS 준수 컨설팅</li>
          <li>문서 지원 및 신청서 관리</li>
          <li>테스트 조정 및 공장 검사 지원</li>
          <li>규제 커뮤니케이션 및 인증 후 준수 지원</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          저희의 목표는 지연과 준수 과제를 최소화하면서 기업이 인증
          프로세스를 효율적으로 탐색하도록 돕는 것입니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022에 따른 테이블 및 책상 BIS 인증은 인도 시장에 준수하는
          가구 제품을 공급하려는 제조업체에게 중요한 요구사항입니다. 이 인증은
          테이블과 책상이 안전성, 안정성, 내구성, 강도 및 품질과 관련된
          확립된 표준을 충족하도록 보장하는 데 도움이 됩니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증을 취득하고 ISI 마크를 사용함으로써 제조업체는 인도 표준
          준수를 입증하고, 고객 신뢰를 향상시키며, 시장 입지를 강화하고,
          장기적인 비즈니스 성장을 지원할 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022에 따른 테이블 및 책상 BIS 인증 취득을 계획하고
          있다면, Sun Certifications India가 엔드투엔드 준수 지원으로 인증
          프로세스를 효율적이고 자신 있게 탐색하도록 도와드릴 수 있습니다.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          자주 묻는 질문 – 테이블 및 책상 BIS 인증 (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. IS 17633:2022란 무엇입니까?</strong>
              <br />
              IS 17633:2022는 인도 표준국(BIS)이 발행한 인도 표준으로, 앉은
              자세 및 서 있는 자세로 사용하는 성인 사용자를 위한 테이블과
              책상에 대한 최소 성능, 안정성, 내구성 및 안전 요구사항을
              설정합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 테이블과 책상에 BIS 인증이 필수입니까?</strong>
              <br />
              예 — 적용 가능한 가구 품질 관리 명령(QCO)에 따라 다루어지는
              제품의 경우 그렇습니다. 제조업체와 수입업체는 인도에서 이러한
              가구를 제조, 수입, 판매 또는 유통하기 전에 유효한 BIS
              라이센스를 보유하고 IS 17633:2022를 준수해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 테이블과 책상에 적용되는 인증 마크는 무엇입니까?</strong>
              <br />
              인증된 테이블과 책상은 BIS 제품 인증 스킴에 따라 ISI 마크를
              부착할 수 있는 권한을 받으며, 이는 제품이 적용 가능한 인도
              표준에 적합함을 나타냅니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 누가 BIS 인증을 신청할 수 있습니까?</strong>
              <br />
              인도 제조업체와 외국 제조업체 모두 신청할 수 있으며, 단 자사의
              테이블과 책상이 적용 가능한 QCO의 범위에 속하고 IS 17633:2022의
              요구사항을 충족해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. BIS 인증의 목적은 무엇입니까?</strong>
              <br />
              BIS 인증은 가구가 안전성, 구조적 성능, 내구성 및 작업 품질에
              대한 국가적으로 인정된 기준을 충족함을 확인하여, 최종 사용자를
              보호하고 시장 전반에 걸쳐 품질 표준을 유지하는 데 도움이
              됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. IS 17633:2022에 따라 다루어지는 제품은 무엇입니까?</strong>
              <br />
              이 표준은 사무실, 교육 기관, 상업 시설 및 작업 환경에서 사용되는
              성인용 테이블과 책상을 다루며, 여기에는 사무용 책상,
              워크스테이션, 학습 테이블, 컨퍼런스 테이블 및 유사한 가구
              범주가 포함됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 실험실 테스트가 필수입니까?</strong>
              <br />
              예. 제품 샘플은 BIS 인정 실험실에서 테스트되어야 하며, 그 결과
              테스트 보고서는 IS 17633:2022 준수를 입증하기 위한 인증 신청의
              핵심 문서입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 수입한 테이블과 책상을 BIS 인증 없이 판매할 수 있습니까?</strong>
              <br />
              아니요. 의무 인증에 해당하는 수입 제품은 유효한 BIS 승인 없이
              인도에서 합법적으로 공급될 수 없습니다. 수입업체는 제품을 시장에
              내놓기 전에 적용 가능한 표준 준수를 보장해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 공장 검사의 역할은 무엇입니까?</strong>
              <br />
              BIS는 제조업체가 준수하는 테이블과 책상을 일관되게 제조하기 위해
              적절한 생산 인프라, 품질 관리 시스템 및 제품 추적성을 유지하는지
              확인하기 위해 공장 평가를 수행합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications India는 어떻게 도울 수 있습니까?</strong>
              <br />
              Sun Certifications India는 IS 17633:2022에 따른 테이블과 책상을
              위한 제품 범위 평가, 문서 준비, 실험실 테스트 조정, BIS 신청서
              관리, 공장 검사 준비 및 인증 후 준수 지원을 포함한 엔드투엔드
              지원을 제공합니다.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="테이블 및 책상 BIS 인증 - IS 17633:2022 PDF"
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
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ISI 마크 라이센스</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS FMCS 인증서</a>
          </li>
        </ul>

        <ManyUsersAlsoReadKorean />

        <FaqAuthorKorean questionNumber={2} />
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
              우리 서비스
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
              외국 제조용 BIS 마크 (ISI 라이센스)
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
                alt="EPR 인증 로고"
                title="EPR 인증 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR 인증
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
              LMPC 인증
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
              인도 제조용 ISI 마크 (BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
