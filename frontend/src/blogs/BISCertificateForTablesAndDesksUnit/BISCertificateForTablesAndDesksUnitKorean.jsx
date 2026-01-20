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
                    테이블 및 책상 BIS 인증 – IS 17633:2022
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
          테이블 및 책상 BIS 인증 – IS 17633:2022 BIS 인증 완전 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="테이블 및 책상 BIS 라이센스"
            alt="테이블 및 책상 BIS 인증 - IS 17633:2022 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          테이블 및 책상 BIS 인증서는 인도의 모든 테이블 및 책상 제조업체, 수입업체 및 판매업체에게 필수입니다. 인도 표준 IS 17633:2022 – 테이블 및 책상: 안전 요구사항에 따라 이러한 가구 품목은 인도 시장에서 합법적으로 판매되기 전에 인도 표준국(BIS)에서 테스트 및 인증을 받아야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          테이블과 책상은 가정, 사무실, 학교, 대학, 상업 공간, 호스피탈리티 환경 및 산업 작업장의 필수 구성 요소입니다. 무게, 충격 및 지속적인 사용을 지지하는 경우가 많기 때문에 구조적 강도와 안전성이 중요합니다. 소비자 보호와 제품 신뢰성을 보장하기 위해 BIS는 필수 인증을 의무화합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 포괄적인 가이드는 IS 17633:2022, BIS 등록 프로세스, 테스트, 필요한 문서화, 수수료, 타임라인, 처벌 및 제조업체와 수입업체를 위한 혜택을 설명합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증이란 무엇입니까?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증은 인도의 국가 표준 기관인 인도 표준국에서 관리하는 규제 준수 프로세스입니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증서의 의미
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증서는 제품이 인도 표준에서 설정한 안전, 품질, 성능 및 내구성 요구사항을 충족함을 확인합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증의 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>소비자 안전 보장</li>
          <li>고품질 제조 지원</li>
          <li>제품 고장 위험 감소</li>
          <li>시장 수용성 향상</li>
          <li>BIS 품질 관리 명령(QCO)에 따라 법적으로 요구됨</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          승인되면 제품에 라이센스 번호와 함께 BIS 마크(ISI 마크)가 표시됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          테이블 및 책상에 적용되는 인도 표준은 무엇입니까? – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          적용 가능한 BIS 표준은 다음과 같습니다:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – 테이블 및 책상: 안전 요구사항
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 주거, 상업, 호스피탈리티 및 기관 환경에서 사용되는 모든 유형의 테이블 및 책상에 대한 성능, 구조적 안전성 및 내구성 요구사항을 정의합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          포함된 제품
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>사무용 책상</li>
          <li>컴퓨터 책상</li>
          <li>학습 테이블</li>
          <li>식탁</li>
          <li>커피 테이블</li>
          <li>작업 책상</li>
          <li>교육용 책상</li>
          <li>학교/대학 책상</li>
          <li>교사용 테이블</li>
          <li>모듈식 작업대 테이블</li>
          <li>작업 테이블</li>
          <li>회의/컨퍼런스 테이블</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17633:2022의 주요 안전 매개변수
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>구조적 안정성</li>
          <li>하중 지지 능력</li>
          <li>충격 저항성</li>
          <li>수평/수직 힘 성능</li>
          <li>표면 마감 품질</li>
          <li>모서리 안전성</li>
          <li>반복 사용 하에서의 내구성</li>
          <li>재료 안전성</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도에서 판매되는 모든 테이블 또는 책상은 테이블 및 책상에 대한 BIS 등록을 통해 이러한 매개변수를 준수해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          테이블 및 책상에 BIS 인증이 필수인 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          테이블과 책상은 가정, 사무실, 학교 및 공공 장소에서 발견되는 고사용 가구 품목입니다. 구조적 고장은 다음과 같은 사고를 일으킬 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>무게 하에서 붕괴</li>
          <li>날카로운 모서리 부상</li>
          <li>사용 중 불안정성</li>
          <li>접합부 파손</li>
          <li>표면 분리</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          이러한 위험을 피하기 위해 BIS 인증은 다음을 보장합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>안전한 설계 및 구조</li>
          <li>구조적 하중 요구사항 준수</li>
          <li>내구성 있는 성능</li>
          <li>전도 및 붕괴 방지</li>
          <li>고품질 재료 선택</li>
          <li>통일된 시장 표준</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          테이블 및 책상에 대한 BIS 라이센스 없이 테이블과 책상을 판매하는 것은 인도에서 불법입니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          테이블 및 책상 BIS 인증 프로세스 (IS 17633:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증 프로세스는 제품 테스트 및 공장 검사를 포함하는 ISI 스키ーム(적합성 평가 스키ーム-I)을 따릅니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 1 – 제품 카테고리 및 표준 식별
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          테이블/책상이 IS 17633:2022에 해당하는지 확인합니다. 변형 및 재료의 수를 식별합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 2 – BIS 신청서 제출 (온라인 제출)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS Manak 온라인 포털에서 다음 정보로 신청서를 작성합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조업체 세부 정보</li>
          <li>공장 주소</li>
          <li>제품 사양</li>
          <li>상표 세부 정보</li>
          <li>품질 관리 시스템</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 3 – BIS 인증 수수료 지불
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">포함 사항:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 수수료</li>
          <li>처리 수수료</li>
          <li>제품 테스트 요금</li>
          <li>공장 검사 수수료</li>
          <li>마킹 수수료</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 4 – BIS 인정 실험실에서 샘플 테스트
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제품은 IS 17633:2022에 따라 규정된 전체 테스트를 받아야 합니다.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          수행되는 테스트
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>안정성 테스트</li>
          <li>강도 테스트 (정적 하중)</li>
          <li>내구성 테스트 (반복 하중)</li>
          <li>충격 테스트</li>
          <li>처짐 측정</li>
          <li>모서리 및 표면 안전성 테스트</li>
          <li>작업 공간 하중 테스트</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          실험실은 테스트 보고서를 직접 BIS에 업로드합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 5 – BIS 공장 검사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 담당자가 제조 시설을 방문하여 다음을 확인합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>품질 관리 시스템</li>
          <li>사내 테스트 능력</li>
          <li>원자재 관리</li>
          <li>생산 라인 및 기계</li>
          <li>계기 교정</li>
          <li>STI(테스트 및 검사 스키ーム) 준수</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 6 – BIS 라이센스 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">BIS가 발행하는 항목:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 인증서</li>
          <li>ISI 마크 승인</li>
          <li>고유 CML 라이센스 번호</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          이 후 제조업체는 합법적으로 테이블/책상에 마크를 표시하고 인도에서 판매할 수 있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 7 – 라이센스 후 준수
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>STI에 따라 기록 유지</li>
          <li>ISI 마킹을 올바르게 사용</li>
          <li>정기적인 BIS 검사 허용</li>
          <li>1-2년마다 라이센스 갱신</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          테이블 및 책상 BIS 라이센스 범위
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> 이 표준은 성인에 의해 앉은 자세 및/또는 서 있는 자세로 사용되는 테이블 및 책상의 성능 및 안전성, 즉 강도, 안정성 및 내구성과 관련된 요구사항을 다룹니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> 이 표준은 완전히 제조/제작된 테이블 및 책상에 적용됩니다. 또한 조립 준비 완료 유닛에도 적용되며, 이 경우 이 표준의 요구사항은 조립된 유닛에 적용됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          테이블 및 책상 BIS 인증에 필요한 서류
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          제조 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 라이센스</li>
          <li>기계 목록</li>
          <li>테스트 장비 목록</li>
          <li>교정 인증서</li>
          <li>공장 배치도</li>
          <li>프로세스 흐름도</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          기술 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>테이블/책상 도면</li>
          <li>자재 명세서</li>
          <li>제품 사양</li>
          <li>내부 품질 테스트 보고서</li>
          <li>제품 사진/동영상</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>승인된 서명자 신분증</li>
          <li>주소 증명</li>
          <li>브랜드 승인서</li>
          <li>상표 등록 인증서</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 신청 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>작성된 신청서</li>
          <li>제조업체 약속서</li>
          <li>테스트 요청서</li>
          <li>승인서</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          완전한 문서화는 더 빠른 승인을 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022에 따른 테스트 요구사항
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          테스트는 강도, 안정성, 내구성 및 안전성을 평가합니다.
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
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  설계 및 제작
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  안정성 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  명시된 하중
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  가끔 있는 무거운 하중용
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  수평 정적 힘 하에서의 강도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  일반
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  유리 테이블 상판의 수직 충격 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  기타 모든 테이블 상판의 수직 충격 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  테이블 상판의 처짐
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  낙하 테스트
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

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. 하중 또는 내구성 테스트에 실패하는 제품</strong>
            <br />
            해결책: 접합부를 강화하고, BIS 준수 재료를 사용하며, 보강을 추가합니다.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. 불완전한 문서화</strong>
            <br />
            해결책: 모든 법적, 기술 및 제조 서류를 사전에 준비합니다.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. 적절한 테스트 장비가 부족한 공장</strong>
            <br />
            해결책: 필요한 계기를 설치하고 BIS 지침에 따라 교정을 유지합니다.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. 잘못된 라벨링</strong>
            <br />
            해결책: ISI 마킹이 BIS 규칙을 정확히 따르는지 확인합니다.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. 제품 모델의 잘못된 분류</strong>
            <br />
            해결책: 변형을 올바르게 분류하기 위해 전문가의 지도를 받습니다.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          테이블 및 책상 BIS 인증의 혜택
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도에서 판매할 수 있는 법적 승인</li>
          <li>고객 신뢰 증가</li>
          <li>더 나은 제품 내구성</li>
          <li>주요 소매업체 및 전자상거래 플랫폼 접근</li>
          <li>낮은 제품 책임 위험</li>
          <li>높은 브랜드 신뢰성</li>
          <li>정부 QCO 준수</li>
          <li>경쟁력 있는 시장 우위</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          비준수에 대한 처벌
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증 없이 테이블/책상을 판매하거나 배포하면 다음이 발생할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 압수</li>
          <li>과중한 벌금</li>
          <li>형사 기소</li>
          <li>수입 금지</li>
          <li>사업 폐쇄 명령</li>
          <li>라이센스 취소</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도 표준국법 2016은 엄격한 처벌을 시행합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          테이블 및 책상 BIS 인증이 필요한 사람은 누구입니까?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 인증은 다음에 필수입니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>외국 제조업체</li>
          <li>수입업체</li>
          <li>무역업체/브랜드 소유자</li>
          <li>OEM/ODM 공급업체</li>
          <li>가구 유통업체</li>
          <li>전자상거래 판매업체</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          각 공장은 별도의 BIS 라이센스를 취득해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증 컨설팅에 우리를 선택하는 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          엔드투엔드 지원을 제공합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>표준 해석 (IS 17633:2022)</li>
          <li>제품 분류</li>
          <li>문서 작성</li>
          <li>테스트 조정</li>
          <li>BIS 포털 제출</li>
          <li>공장 검사 지원</li>
          <li>BIS와의 지속적인 후속 조치</li>
          <li>라이센스 승인</li>
          <li>갱신 및 준수 관리</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          우리의 전문성은 빠르고 번거롭지 않으며 오류 없는 인증을 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022에 따른 테이블 및 책상 BIS 인증서는 제품 안전성, 성능, 내구성 및 국가 표준 준수를 보장하는 필수 적합성 요구사항입니다. 제조업체와 수입업체는 ISI 마크를 얻기 위해 제품 테스트, 공장 검사를 받고 모든 BIS 문서화 및 라벨링 규칙을 준수해야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          전문가의 지원으로 인증 프로세스 전체가 원활하고 빠르며 BIS 규정을 완전히 준수합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          자주 묻는 질문 – 테이블 및 책상 BIS 인증 (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. 테이블 및 책상에 BIS 인증이 필수입니까?
              </strong>
              <br />
              예. IS 17633:2022에 따라 모든 테이블과 책상은 인도에서 판매되기 전에 BIS 인증을 받아야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 인증에 필요한 테스트는 무엇입니까?</strong>
              <br />
              필수 테스트에는 안정성, 강도, 내구성, 처짐, 충격 및 표면 안전성 테스트가 포함됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. BIS 인증 비용은 얼마입니까?</strong>
              <br />
              비용은 테스트 및 검사 요인에 따라 ₹65,000 – ₹1,30,000 사이입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. 외국 제조업체도 BIS 인증이 필요합니까?
              </strong>
              <br />
              예, BIS의 해외 공장 검사를 포함하는 FMCS 스키ーム을 통해 필요합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. 하나의 라이센스로 여러 테이블/책상 모델을 포함할 수 있습니까?
              </strong>
              <br />
              예, 하지만 모델이 구조 및 테스트 매개변수에서 유사한 경우에만 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. BIS 프로세스는 얼마나 걸립니까?</strong>
              <br />
              약 30-45일.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. BIS 인정 실험실에서 테스트가 필수입니까?</strong>
              <br />
              예, BIS 승인 실험실만 테스트를 수행할 수 있습니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 제품이 실패하면 어떻게 됩니까?</strong>
              <br />
              재설계하고 테스트를 위해 다시 제출해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 인증 후 ISI 마킹이 필수입니까?</strong>
              <br />
              예, 제품과 포장에 ISI 마크가 필요합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. 필요한 서류는 무엇입니까?</strong>
              <br />
              기술 도면, BOM, 공장 서류, 테스트 보고서, QC 계획 및 법적 서류.
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
