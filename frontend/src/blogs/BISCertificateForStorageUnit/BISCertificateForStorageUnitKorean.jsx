import FaqAuthorKorean from "@/components/common/FaqAuthor/FaqAuthorKorean";
import ManyUsersAlsoReadKorean from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadKorean";
import ServicesRightSideContentKorean from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentKorean";
import FooterKorean from "@/components/manual/Footer/FooterKorean";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForStorageUnitKorean = () => {
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

export default BISCertificateForStorageUnitKorean;

const MetaTags = () => {
  const title = "수납 유닛 BIS 인증 | IS 17634:2022 BIS 라이센스";
  const ogTitle = "수납 유닛 BIS 인증 – IS 17634:2022 가이드";
  const twitterTitle = "수납 유닛 BIS 라이센스 | IS 17634:2022";
  const metaDescription =
    "IS 17634:2022에 따른 수납 유닛 BIS 인증서를 받으세요. 인도에서 BIS 인증 프로세스, 서류, 테스트, 비용 및 타임라인.";
  const ogDescription =
    "IS 17634:2022에 따른 수납 유닛 BIS 인증 완전 가이드. 프로세스, 비용, 서류, 테스트 및 BIS 라이센스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 17634:2022에 따른 수납 유닛 BIS 인증서를 신청하세요. 인도에서 BIS 프로세스, 서류, 테스트, 수수료 및 타임라인을 배우세요.";
  const metaKeywords =
    "수납 유닛 BIS 인증, 수납 유닛 BIS 라이센스, IS 17634:2022, 수납 유닛 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/sunap-yunit-is-17634";
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
                    <Link to="/Blogs">Latest Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    수납 유닛 BIS 인증 – IS 17634:2022
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
          수납 유닛 BIS 인증 – IS 17634:2022 BIS 인증 완전 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforStorageUnits.png"
            title="수납 유닛 BIS 라이센스"
            alt="수납 유닛 BIS 인증 - IS 17634:2022 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          수납 유닛 BIS 인증서는 인도 표준 IS 17634:2022에 따른 필수 요구사항입니다. 이 표준은 가정, 사무실, 학교, 상업 시설 및 산업 시설에서 사용되는 모든 유형의 수납 가구에 대한 필수 안전성, 내구성 및 구조 성능 요구사항을 다룹니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          수납 유닛에는 다음이 포함됩니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>캐비닛</li>
          <li>옷장</li>
          <li>선반 유닛</li>
          <li>서랍 및 서랍장</li>
          <li>파일 캐비닛</li>
          <li>사이드 수납 유닛</li>
          <li>모듈식 수납 시스템</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          수납 유닛은 주거 및 상업 공간에서 광범위하게 사용되므로 구조적 안정성과 안전성이 매우 중요합니다. 품질이 낮은 수납 유닛은 날카로운 모서리, 약한 접합부 또는 불안정한 구조로 인해 넘어지거나 붕괴되거나 부상을 일으킬 수 있습니다. 고객 안전과 제품 품질을 보장하기 위해 인도에서는 수납 유닛에 대한 BIS 인증이 필수입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 완전 가이드는 IS 17634:2022, 인증 요구사항, BIS 프로세스, 문서화, 테스트, 수수료, 타임라인, 처벌 및 혜택을 설명합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증이란 무엇입니까?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증은 인도 표준국에서 발행하는 제3자 적합성 평가로, 제품이 인도의 안전 및 품질 표준을 준수하는지 보장합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증서의 의미
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증서는 제품이 다음을 충족함을 확인합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 표준을 충족함</li>
          <li>실험실 테스트를 통과함</li>
          <li>공장 검사를 받음</li>
          <li>지속적인 품질 관리를 따름</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증 제품에는 BIS 마크(ISI 마크)가 부여됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          수납 유닛에 적용되는 BIS 표준은 무엇입니까? (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          수납 유닛의 필수 BIS 표준은 다음과 같습니다:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17634:2022</strong> – 수납 유닛: 안전 요구사항
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 모든 유형의 수납 가구를 다룹니다. 일상적인 사용 조건에서 안전한 사용을 보장하기 위해 안전성, 내구성, 하중 용량 및 설계 요구사항을 정의합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17634:2022의 주요 요구사항
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>구조적 안정성</li>
          <li>하중 지지 성능</li>
          <li>서랍 강도</li>
          <li>전도 저항성</li>
          <li>재료 품질</li>
          <li>모서리 안전성</li>
          <li>표면 마감</li>
          <li>반복 사용 하에서의 내구성</li>
          <li>끼임 위험 부재</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도에서 제조되었든 수입되었든, 모든 수납 유닛은 판매 전에 수납 유닛에 대한 BIS 등록을 받아야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          수납 유닛에 대한 BIS 인증이 필수인 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          수납 유닛은 광범위하게 사용되며 종종 무거운 하중을 지지합니다. 구조적 결함은 심각한 부상이나 재산 손상을 초래할 수 있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증이 필요한 이유
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>전도 위험 방지</li>
          <li>하중 지지 용량 보장</li>
          <li>내구성 및 수명 향상</li>
          <li>날카로운 모서리 및 위험한 마감 제거</li>
          <li>주거용 사용에서 어린이 안전 보장</li>
          <li>제품 품질 조화</li>
          <li>BIS 품질 관리 명령에 따른 필수 사항</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체나 수입업체는 수납 유닛에 대한 BIS 라이센스 없이는 합법적으로 수납 유닛을 판매할 수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          수납 유닛에 대한 BIS 인증 프로세스 (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증은 제품 테스트 및 공장 검사를 포함하는 ISI 스킴(적합성 평가 스킴-I)을 따릅니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 1 – 적용 가능성 확인
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          수납 가구 모델이 다음에 해당하는지 분석합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            캐비닛, 선반, 서랍, 옷장 유닛, 파일 유닛 또는 유사한 가구.
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          올바른 표준 확인: IS 17634:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 2 – BIS 신청서 제출
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS Manak 온라인 포털을 통해 온라인으로 신청합니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">제출 항목:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>사업 세부 정보</li>
          <li>제조 단위 정보</li>
          <li>제품 분류</li>
          <li>브랜드명</li>
          <li>공정 흐름도</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 3 – BIS 수수료 지불
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">포함 사항:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 수수료</li>
          <li>처리 수수료</li>
          <li>제품 테스트 수수료</li>
          <li>공장 검사 비용</li>
          <li>마킹 수수료</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 4 – 제품 테스트 (IS 17634:2022 요구사항)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          샘플은 BIS 인정 실험실에서 테스트됩니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          실험실 평가 항목:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>안정성</li>
          <li>구조적 강도</li>
          <li>하중 지지 용량</li>
          <li>서랍 내구성</li>
          <li>선반 강도</li>
          <li>모서리 및 모서리 안전성</li>
          <li>유해 물질 한계</li>
          <li>반복 사용 하에서의 성능</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          테스트 결과는 완전한 준수를 반영해야 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 5 – 공장 검사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 담당자가 다음을 확인합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조 공정</li>
          <li>품질 관리 시스템</li>
          <li>원자재 검사</li>
          <li>내부 테스트 능력</li>
          <li>계기 교정</li>
          <li>테스트 및 검사 스킴(STI) 준수</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 6 – BIS 라이센스 발급
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          성공적인 평가 후 BIS는 다음을 발급합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 인증서</li>
          <li>ISI 마크 사용 허가</li>
          <li>CML 번호</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 7 – 라이센스 후 요구사항
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>마킹 요구사항 준수</li>
          <li>품질 시스템 유지</li>
          <li>BIS 감시 검사</li>
          <li>1-2년마다 라이센스 갱신</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          수납 유닛에 대한 BIS 라이센스 범위
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> 이 표준은 가정용 및 파일 서류 또는 유사한 용도의 기관용으로 의도된 이동 가능한 부분과 이동 불가능한 부분을 포함하여 수납 유닛의 성능 및 안전과 관련된 요구사항을 다룹니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> 이 표준은 완전히 제조/제작된 수납 유닛에 적용됩니다. 또한 조립 준비 유닛에도 적용되며, 이 경우 이 표준의 요구사항은 조립된 유닛에 적용됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          수납 유닛 BIS 인증에 필요한 서류
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          다음은 BIS 인증 서류의 전체 목록입니다:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 제조 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 등록 증명서</li>
          <li>배치 계획</li>
          <li>제조 공정 흐름도</li>
          <li>기계 목록</li>
          <li>테스트 장비 목록</li>
          <li>교정 증명서</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 법적 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신분 증명</li>
          <li>주소 증명</li>
          <li>브랜드 승인(해당되는 경우)</li>
          <li>상표 증명서(선택 사항이지만 권장)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 기술 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 도면</li>
          <li>조립도</li>
          <li>자재 명세서</li>
          <li>내부 테스트 보고서</li>
          <li>안전 기능</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. BIS 신청 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청서</li>
          <li>공장 승인서</li>
          <li>테스트 요청서</li>
          <li>선언서 양식</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          완전한 문서화를 갖추면 처리 지연을 피하는 데 도움이 됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          수납 유닛에 대한 테스트 요구사항 (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          엄격한 테스트는 제품이 안전성 및 내구성 기준을 충족하는지 보장합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          IS 17634:2022에 따른 주요 테스트
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
                  Design and workmanship
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimension
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  General
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Deflection of shelves
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of shelf supports
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sustained load test for tops and bottoms
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of clothes-rail supports
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dislodgement of clothes rails
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test for structure and underframe
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Drop test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tests for units with castors or wheels
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of pivoted doors
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam-shut test of pivoted doors
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam shut/open test of sliding doors and horizontal
                  roll-fronts
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of bottom-hinged flaps
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Drop test for top-hinged flaps
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam shut/open test of vertical roll-fronts
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of extension elements
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.4 / 7.3.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam shut/open test of extension elements / Displacement of
                  extension element bottoms
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Interlock test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength test for locking and latching mechanisms for
                  extension elements
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Locking and latching mechanisms for doors, flaps and
                  roll-fronts
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pull Force Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Top Load Ease Cycle Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.10
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Drop Test – Dynamic – for Units with Seat Surfaces
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Movable parts, shelf supports, tops and bottoms
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sustained load test (overload)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dislodgement test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Units Supported by the Floor
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Units that can be adjusted to a Height of 1 000 mm or less
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Units that can be adjusted to a height
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Opening Doors, Extension Elements and Flaps, All Storage Units
                  Unloaded
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  All storage areas unloaded and all doors, extension elements
                  and flaps open
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  All storage areas unloaded with overturning load
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  All storage areas loaded with overturning load
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Doors, Extension Elements and Flaps Closed and Locked, All
                  Storage Units Loaded
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertical Force Stability Test for Storage Units
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stability Test for Pedestals/Storage Units with Seat Surfaces
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dynamic Stability Test for Units with Castors
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength Test for Wall Attachments
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          테스트는 필수이며 BIS 승인 실험실에서만 수행되어야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          일반적인 문제점 및 해결 방법
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. 수납 유닛의 잘못된 분류</strong>
            <br />
            항상 IS 17634:2022에 따른 범위를 확인하세요.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. 공장 미준비</strong>
            <br />
            QMS, 교정 및 내부 테스트는 검사 전에 준비되어 있어야 합니다.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. 제품 테스트 실패</strong>
            <br />
            다음을 보장하세요:
          </p>
          <ul className="list-disc ml-6 mb-2 space-y-1 text-gray-600 text-base font-geist">
            <li>선반 강도</li>
            <li>서랍 내구성</li>
            <li>전도 방지 안정성</li>
          </ul>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. 서류 누락</strong>
            <br />
            사전에 문서를 준비하여 지연을 피하세요.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. 브랜드명 불일치</strong>
            <br />
            상표 및 라벨과 일치해야 합니다.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          수납 유닛에 대한 BIS 인증의 혜택
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>필수 법적 준수</li>
          <li>고객 안전 보장</li>
          <li>시장 신뢰성 향상</li>
          <li>전자상거래 및 소매 체인 자격</li>
          <li>제품 실패 위험 감소</li>
          <li>정부 입찰 자격</li>
          <li>브랜드 차별화</li>
          <li>높은 소비자 신뢰</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          미준수에 대한 처벌
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 승인 없이 수납 유닛을 판매하거나 수입하면 다음이 발생할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>과중한 벌금</li>
          <li>제품 압수</li>
          <li>제조 금지</li>
          <li>형사 기소</li>
          <li>브랜드 블랙리스트</li>
          <li>시장 철수</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 규칙 및 품질 관리 명령(QCO)에 따라 준수는 필수입니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          수납 유닛에 대한 BIS 인증이 필요한 사람은 누구입니까?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>외국 제조업체</li>
          <li>수입업체</li>
          <li>무역업자(브랜드 소유자)</li>
          <li>OEM 및 ODM 공급업체</li>
          <li>소매 및 온라인 가구 브랜드</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          각 공장은 별도의 BIS 라이센스가 필요합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증 컨설팅을 위해 저희를 선택하는 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          저희는 완전한 엔드투엔드 지원을 제공합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>표준 해석 (IS 17634:2022)</li>
          <li>제품 분류</li>
          <li>문서화 준비</li>
          <li>BIS 인정 실험실과의 조정</li>
          <li>테스트 지원</li>
          <li>BIS 포털 제출</li>
          <li>공장 검사 안내</li>
          <li>라이센스 승인</li>
          <li>갱신 및 감시</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          저희의 전문성은 빠르고 원활하며 오류 없는 인증 프로세스를 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17634:2022에 따른 수납 유닛에 대한 BIS 인증서를 취득하는 것은 제품 안전성, 구조적 성능 및 내구성을 보장하는 데 필수적입니다. 또한 인도에서 수납 가구를 판매하거나 수입하기 위한 필수 법적 요구사항입니다. 적절한 문서화, 테스트 및 전문가 안내를 통해 인증 프로세스가 원활해집니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          저희의 전담 BIS 컨설팅 팀은 제조업체 및 수입업체를 위한 빠른 승인, 정확한 문서화 및 엔드투엔드 준수 지원을 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          자주 묻는 질문 — 수납 유닛 BIS 인증서 (IS 17634:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. 인도에서 수납 유닛에 대한 BIS 인증이 필수입니까?
              </strong>
              <br />
              예. 수납 유닛에 대한 BIS 인증은 인도 표준 IS 17634:2022 – 수납 유닛: 안전 요구사항에 따라 필수입니다. 이 표준은 품질 관리 명령(QCO)에 포함되어 있으며, 이는 제조업체, 수입업체 또는 판매자가 BIS 승인 없이는 인도 시장에서 수납 유닛을 합법적으로 판매할 수 없음을 의미합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. IS 17634:2022에 포함되는 수납 유닛 유형은 무엇입니까?
              </strong>
              <br />
              IS 17634:2022는 주거, 상업 및 기관 공간에서 사용되는 광범위한 수납 가구에 적용됩니다.
              <br />
              이 표준은 다음을 다룹니다:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>캐비닛(목재, 금속, 모듈식)</li>
              <li>찬장 및 옷장</li>
              <li>선반 유닛</li>
              <li>파일 캐비닛</li>
              <li>서랍 유닛 및 서랍장</li>
              <li>사이드보드 및 모듈식 수납 시스템</li>
              <li>사무실 수납 유닛</li>
              <li>컴팩트 수납 가구</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. 수납 유닛의 BIS 인증을 위해 어떤 테스트가 수행됩니까?
              </strong>
              <br />
              수납 유닛은 내구성, 강도, 안전성 및 성능을 평가하기 위해 여러 필수 테스트를 거칩니다.
              <br />
              주요 테스트는 다음과 같습니다:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>
                안정성 테스트: 사용 중 또는 서랍 연장 중 유닛이 넘어지지 않도록 보장합니다.
              </li>
              <li>
                정적 하중 테스트: 선반, 서랍 및 주요 구조의 하중 지지 용량을 측정합니다.
              </li>
              <li>
                내구성/지구력 테스트: 반복 사용 주기에 걸쳐 서랍, 문 및 선반의 성능을 확인합니다.
              </li>
              <li>
                선반 강도 테스트: 하중 하에서 처짐 또는 굽힘을 평가합니다.
              </li>
              <li>
                충격 테스트: 우발적 충격에 대한 구조적 저항을 보장합니다.
              </li>
              <li>
                전도 저항 테스트: 서랍이 완전히 로드되고 연장될 때 전도 방지 성능을 확인합니다.
              </li>
              <li>
                모서리 안전성 및 마감 테스트: 날카로운 모서리나 위험한 마감이 없음을 보장합니다.
              </li>
              <li>재료 안전 테스트: 무독성, 안전한 재료를 확인합니다.</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. 수납 유닛에 대한 BIS 인증 프로세스는 얼마나 걸립니까?
              </strong>
              <br />
              수납 유닛에 대한 일반적인 BIS 인증 타임라인은 제품 준비 상태 및 문서 품질에 따라 30-45 근무일입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. 외국 제조업체가 수납 유닛에 대한 BIS 인증을 신청할 수 있습니까?
              </strong>
              <br />
              예. 외국 제조업체는 FMCS(외국 제조업체 인증 스킴)에 따라 BIS 인증을 받아야 합니다.
              <br />
              주요 요구사항은 다음과 같습니다:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>현지 인도 대리인(AIR)</li>
              <li>BIS 승인 인도 실험실에서의 제품 테스트</li>
              <li>BIS 담당자의 해외 공장 검사</li>
              <li>IS 17634:2022 준수</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. 수납 유닛 제품이 BIS 테스트에 실패하면 어떻게 됩니까?
              </strong>
              <br />
              샘플이 필수 테스트에 실패하면:
            </p>
            <ol className="list-decimal ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>제조업체는 실패 보고서를 받습니다.</li>
              <li>필요한 설계/재료 수정을 해야 합니다.</li>
              <li>수정된 샘플을 재테스트를 위해 제출해야 합니다.</li>
            </ol>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. BIS 인증을 위해 공장 검사가 필수입니까?
              </strong>
              <br />
              예. 공장 검사는 수납 유닛을 포함한 모든 ISI 마크 인증에 필수입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. 무역업자 또는 브랜드 소유자가 BIS 인증을 신청할 수 있습니까?
              </strong>
              <br />
              예, 다음 조건에서만 가능합니다:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>브랜드를 소유하고 있으며,</li>
              <li>
                실제 공장과 법적으로 승인된 제조 계약을 체결한 경우
              </li>
            </ul>
            <p className="text-gray-600 text-base font-geist mt-2">
              BIS 라이센스는 회사별이 아닌 공장별로 발급됩니다.
              <br />
              따라서 실제 제조 위치는 테스트 및 검사를 받아야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. 여러 수납 유닛 모델을 하나의 BIS 라이센스로 포함할 수 있습니까?
              </strong>
              <br />
              다음 조건에서만 가능합니다:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>모델이 동일한 표준에 해당하는 경우</li>
              <li>동일한 공장에서 제조되는 경우</li>
              <li>유사한 구조 및 원자재를 공유하는 경우</li>
              <li>동일한 테스트 매개변수를 충족하는 경우</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. 인증 후 따라야 할 라벨링 요구사항은 무엇입니까?
              </strong>
              <br />
              승인되면 제품에 다음을 표시해야 합니다:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>ISI 마크(BIS 인증 마크)</li>
              <li>표준 번호(IS 17634:2022)</li>
              <li>CML 라이센스 번호</li>
              <li>제조업체 이름 및 주소</li>
              <li>배치 또는 일련 번호</li>
            </ul>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17634-2022-Sun-Certifications-India.pdf"
            title="수납 유닛 BIS 인증서 - IS 17634:2022 PDF"
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
