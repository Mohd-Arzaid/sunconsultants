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

const BISCertificateForWeldedPipesAndTubesKorean = () => {
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

export default BISCertificateForWeldedPipesAndTubesKorean;

const MetaTags = () => {
  const title =
    "용접 파이프 및 튜브 BIS 인증서 | IS 17876:2022 BIS 라이센스";
  const ogTitle =
    "용접 파이프 및 튜브 BIS 인증 – IS 17876:2022 가이드";
  const twitterTitle = "용접 파이프 및 튜브 BIS 라이센스 | IS 17876:2022";
  const metaDescription =
    "IS 17876:2022에 따라 용접 파이프 및 튜브 BIS 인증서를 받으세요. 인도에서 BIS 인증의 프로세스, 서류, 테스트, 비용 및 타임라인.";
  const ogDescription =
    "IS 17876:2022에 따른 용접 파이프 및 튜브 BIS 인증 완전 가이드. 프로세스, 비용, 서류, 테스트 및 BIS 라이센스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 17876:2022에 따라 용접 파이프 및 튜브 BIS 인증서를 신청하세요. 인도에서 BIS 프로세스, 서류, 테스트, 수수료 및 타임라인을 배우세요.";
  const metaKeywords =
    "용접 파이프 및 튜브 BIS 인증서, 용접 파이프 및 튜브 BIS 라이센스, IS 17876:2022, 용접 파이프 및 튜브 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/yongjeob-paipeu-mich-tyubeu-is-17876";
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
                    용접 파이프 및 튜브 BIS 인증서 – IS 17876:2022
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
          IS 17876:2022에 따른 스테인리스강 용접 파이프 및 튜브 BIS 인증서
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="용접 파이프 및 튜브 BIS 라이센스"
            alt="용접 파이프 및 튜브 BIS 인증서 - IS 17876:2022 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          스테인리스강 용접 파이프 및 튜브는 건설, 화학 처리, 식품 및 음료,
          수도 배급, 구조 응용 및 일반 엔지니어링과 같은 산업 전반에 걸쳐
          광범위하게 사용됩니다. 이러한 파이프는 유체, 가스 및 경우에 따라
          부식성 화학 물질을 운반하므로 시장에 진입하기 전에 강도, 내식성 및
          제조 무결성을 검증해야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          품질을 규제하고 공공 및 산업 안전을 보장하기 위해 인도 정부는
          IS 17876:2022에 따라 스테인리스강 용접 파이프 및 튜브에 대한
          BIS 인증을 의무화했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 포괄적인 가이드는 완전한 BIS 승인 프로세스, 문서화, 테스트 요구사항,
          비용, 타임라인, 제조업체 의무, 혜택 및 규정 준수 규칙을 설명합니다
          — 새로운 고유 형식으로 작성되어 이전 콘텐츠와의 중복을 제로로 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          스테인리스강 용접 파이프 및 튜브 BIS 인증이란 무엇입니까?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도 표준국(BIS)은 다양한 인증 체계를 통해 인도의 제품 품질을
          규제합니다. 의무적 품질 관리 명령(QCO)에 해당하는 제품은
          제조, 수입, 보관, 판매 또는 배포되기 전에 BIS 라이센스를
          취득해야 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증이 보장하는 것
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증서는 스테인리스강 용접 파이프/튜브가 다음을 확인합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>치수 정확도를 충족함</li>
          <li>필요한 기계적 강도를 보유함</li>
          <li>내식성을 나타냄</li>
          <li>승인된 등급의 스테인리스강을 사용하여 제조됨</li>
          <li>인도 테스트 조건을 준수함</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증 후 제품에는 라이센스(CML) 번호와 함께 ISI 마크를 표시해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          스테인리스강 용접 파이프 및 튜브 BIS 표준 – IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          적용 가능한 표준은 다음과 같습니다:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – 일반 용도를 위한 스테인리스강 용접 파이프 및 튜브
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 다음을 설명합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>화학 조성</li>
          <li>기계적 특성 요구사항</li>
          <li>제조 공차</li>
          <li>치수 사양</li>
          <li>표면 및 마무리 가이드라인</li>
          <li>정수압 및 비파괴 테스트</li>
          <li>안전 성능 기준</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 파이프는 일반 용도 응용 분야에 사용되며, 광범위한 작동 환경을
          충족해야 함을 의미합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17876:2022 제품에 BIS 인증이 필수인 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          스테인리스강 용접 파이프는 다음에서 광범위하게 사용됩니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>수도 파이프라인</li>
          <li>화학 물질 운송</li>
          <li>식품 및 제약 공장</li>
          <li>구조 엔지니어링</li>
          <li>배기 및 환기 시스템</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          제대로 제조되지 않으면 이러한 파이프는 다음을 초래할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>누출 고장</li>
          <li>압력 하에서 파열</li>
          <li>부식 및 오염</li>
          <li>구조적 불안정성</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          기준 미달 재료가 공급망에 진입하는 것을 방지하기 위해 BIS는
          모든 제조업체(국내 또는 해외)가 스테인리스강 용접 파이프 및 튜브에 대한
          BIS 라이센스를 취득하도록 요구합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17876:2022 BIS 인증 프로세스
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증 절차에는 엄격한 실험실 테스트 및 검사가 포함됩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 1 – 제품 카테고리 및 등급 식별
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          제조 중인 스테인리스강의 특정 등급을 평가하고
          IS 17876:2022에 해당하는지 확인합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 2 – 온라인 신청서 제출
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 Manak 온라인 BIS 포털을 통해 신청하고 다음을 제출해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 세부사항</li>
          <li>생산 능력</li>
          <li>공정 흐름도</li>
          <li>원자재 공급원</li>
          <li>품질 보증 문서</li>
          <li>브랜드 및 상표 세부사항</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 3 – BIS 수수료 지불
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          지불에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 수수료</li>
          <li>처리 수수료</li>
          <li>테스트 수수료</li>
          <li>공장 검사 수수료</li>
          <li>마킹 수수료</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 4 – 공장 검사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 공무원은 다음을 검사합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>생산 순서</li>
          <li>원자재 저장</li>
          <li>용접 기계</li>
          <li>어닐링/열처리 공정</li>
          <li>품질 문서</li>
          <li>테스트 인프라</li>
          <li>교정 기록</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          테스트 및 검사 계획(STI) 준수를 확인합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 5 – BIS 라이센스 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          모든 매개변수가 BIS 요구사항을 충족하면 제조업체는 다음을 받습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 인증서</li>
          <li>ISI 마크 승인</li>
          <li>고유한 CML 라이센스 번호</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 6 – 라이센스 후 의무
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          라이센스 보유자는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>지속적인 내부 품질 테스트 유지</li>
          <li>ISI 마크를 올바르게 사용</li>
          <li>정기적인 BIS 감시 검사 중 협력</li>
          <li>라이센스를 시간 내에 갱신</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          스테인리스강 용접 파이프 및 튜브 BIS 라이센스 범위
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> 이 표준은 일반 용도를 위한 스테인리스강 용접 파이프 및 튜브의
          요구사항을 다룹니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> 이 표준은 특정 목적을 위해 의도된 스테인리스강 용접 파이프 및 튜브의
          요구사항을 명시하지 않으며, 이는 별도의 인도 표준에서 다룹니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증에 필요한 서류 (IS 17876:2022)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 제조 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 라이센스/등록</li>
          <li>배치도</li>
          <li>공정 흐름도</li>
          <li>기계 목록(용접, 성형, 어닐링, 테스트)</li>
          <li>사내 테스트 장비 목록</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 기술 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>등급 사양</li>
          <li>화학 및 기계적 테스트 데이터</li>
          <li>용접 절차 사양</li>
          <li>열처리 기록</li>
          <li>치수 공차 차트</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 법적 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신분증</li>
          <li>주소 증명</li>
          <li>브랜드 소유권 문서</li>
          <li>승인된 서명자 서한</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. BIS 신청 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>작성된 신청서</li>
          <li>약속 및 선언</li>
          <li>테스트 요청 문서</li>
          <li>ISI 마킹용 라벨 아트워크</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17876:2022에 따른 테스트 요구사항
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          테스트는 BIS 승인의 핵심이며 모든 배치가 엄격한 품질 기준을
          충족하도록 보장합니다.
        </p>

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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  용융 분석
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  제품 분석
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  인장 요구사항
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  파이프
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  튜브
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  플랜징 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  역 평탄화 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  평탄화 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  결정립 크기
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  누출 밀폐 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  제작, 마무리, 외관
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  치수 및 공차
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증 중 직면하는 과제
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>화학 조성 테스트 실패</strong>
            <br />
            비표준 합금 원소 또는 불순물이 거부를 초래합니다.
          </li>
          <li>
            <strong>NDT 중 용접 결함</strong>
            <br />
            불량한 용접 공정 또는 일관성 없는 열처리가 결함을 만들 수 있습니다.
          </li>
          <li>
            <strong>치수 비준수</strong>
            <br />
            벽 두께 변동이 일반적으로 실패로 이어집니다.
          </li>
          <li>
            <strong>불완전한 문서</strong>
            <br />
            누락되거나 불명확한 기록이 라이센스 승인을 지연시킵니다.
          </li>
          <li>
            <strong>교정 문제</strong>
            <br />
            교정되지 않은 장비는 신뢰할 수 없는 테스트 결과를 초래합니다.
          </li>
          <li>
            <strong>잘못된 브랜딩/라벨 제출</strong>
            <br />
            ISI 마크 아트워크는 BIS 사양과 일치해야 합니다.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          스테인리스강 파이프 및 튜브 BIS 인증의 혜택
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도에서 제조/판매할 수 있는 법적 승인</li>
          <li>품질 및 안전 보장</li>
          <li>향상된 평판 및 시장 신뢰성</li>
          <li>정부 및 공공기업 입찰에서의 수용성</li>
          <li>증가된 수출 잠재력</li>
          <li>제품 고장 위험 감소</li>
          <li>위조 또는 기준 미달 경쟁자로부터의 보호</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          비준수에 대한 처벌
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          비인증 제품을 판매하는 제조업체/수입업체는 다음에 직면합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 압수</li>
          <li>BIS 법에 따른 중대한 처벌</li>
          <li>제조 운영 폐쇄</li>
          <li>수입 제한</li>
          <li>법적 기소</li>
          <li>기존 라이센스 취소</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          규정 준수는 필수이며 엄격하게 시행됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          SS 용접 파이프 및 튜브에 대한 BIS 라이센스를 취득해야 하는 사람은 누구입니까?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>인도로 수출하는 해외 제조업체</li>
          <li>스테인리스강 파이프 수입업체</li>
          <li>OEM 공급업체</li>
          <li>산업 유통업체</li>
          <li>프라이빗 라벨 브랜드</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          각 제조 위치는 자체 라이센스를 취득해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17876:2022에 따른 스테인리스강 용접 파이프 및 튜브 BIS 인증서는
          여러 산업에서 사용되는 중요한 배관 제품의 신뢰성, 내구성 및 성능을
          보장합니다. 필수 인증이 현재 시행되고 있으므로 제조업체와 수입업체는
          인도 시장에서 제품을 합법적으로 공급하기 위해 프로세스, 테스트 및
          문서를 BIS 요구사항에 맞춰야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          전문가의 지도로 BIS 라이센스 프로세스는 더 빠르고, 더 원활하며,
          완전히 규정을 준수하게 됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — 스테인리스강 용접 파이프 및 튜브 BIS 인증
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. 스테인리스강 용접 파이프에 BIS 인증이 필수입니까?
              </strong>
              <br />
              예. IS 17876:2022에 따라 BIS 인증은 모든 제조업체 및 수입업체에게
              의무적입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 어떤 테스트가 필요합니까?</strong>
              <br />
              화학 분석, 인장 테스트, 경도 테스트, 정수압 테스트, NDT,
              평탄화 및 치수 검사.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. BIS 인증에는 얼마나 걸립니까?</strong>
              <br />
              일반적으로 인도 제조업체의 경우 35-50일, 외국 제조업체의 경우 약 120일이며,
              테스트 및 검사 준비 상태에 따라 다릅니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. 외국 제조업체가 BIS 인증을 받을 수 있습니까?
              </strong>
              <br />
              예, FMCS(외국 제조업체 인증 계획)를 통해 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 어떤 서류가 필요합니까?</strong>
              <br />
              공장 라이센스, 테스트 장비 목록, BOM, 공정 흐름, 도면,
              QC 계획, 브랜드 문서 등.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 샘플이 테스트에 실패하면 어떻게 됩니까?</strong>
              <br />
              제조업체는 문제를 수정하고 제품을 재작업한 후 테스트를 위해
              다시 제출해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 승인 후 ISI 마킹이 필수입니까?</strong>
              <br />
              예. 제품에는 ISI 마크 + CML 번호를 표시해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. IS 17876에서 모든 등급이 포함됩니까?</strong>
              <br />
              표준에 정의된 특정 등급만 해당됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. BIS는 얼마나 자주 감시를 수행합니까?</strong>
              <br />
              라이센스 유효 기간 동안 정기적인 감사 및 무작위 샘플 테스트가
              수행됩니다.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17876-2022-Sun-Certifications-India.pdf"
            title="용접 파이프 및 튜브 BIS 인증서 - IS 17876:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadKorean />

        <FaqAuthorKorean questionNumber={3} />
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
              외국 제조용 BIS 마크(ISI 라이센스)
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
                alt="BISCRS logo"
                title="BISCRS logo"
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
                alt="BIS Logo"
                title="BIS Logo"
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
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              인도 제조업체용 ISI 마크(BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
