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

const BISCertificateForFurnitureKorean = () => {
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

export default BISCertificateForFurnitureKorean;

const MetaTags = () => {
  const title =
    "인도 가구용 BIS 인증서 | BIS 인증, 라이선스 및 프로세스 가이드";
  const ogTitle = "인도 가구용 BIS 인증서 - 완전한 BIS 인증 가이드";
  const twitterTitle = "가구용 BIS 인증서 | 인도 BIS의 완전한 BIS 인증 가이드";
  const metaDescription =
    "인도 가구용 BIS 인증서 - 가구 제조업체를 위한 BIS 인증, BIS 라이선스, 비용, 문서, 표준, 프로세스, 온라인 신청 및 BIS 마크에 대한 완전한 가이드.";
  const ogDescription =
    "인도 가구용 BIS 인증을 찾고 계신가요? BIS 라이선스, BIS 마크, 적용 가능한 표준, 인증 프로세스, 비용, 문서 및 규정 준수 요구사항에 대해 자세히 알아보세요.";
  const twitterDescription =
    "인도 가구용 BIS 인증서 완전 가이드 - BIS 인증 프로세스, 비용, 문서, BIS 마크, 표준 및 온라인 신청 설명.";
  const metaKeywords =
    "가구용 BIS 인증서, 가구용 BIS 인증, 가구용 BIS 라이선스, BIS란 무엇인가, 인도 BIS";
  const websiteUrl = "https://bis-certifications.com/blogs/isi-products/gagu";
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
                    인도 가구용 BIS 인증서 – 완전한 상세 가이드
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
          인도 가구용 BIS 인증서 – 완전한 상세 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="가구용 BIS 라이선스"
            alt="인도 가구용 BIS 인증서 - 완전한 BIS 인증 가이드"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          소개: BIS 인증과 인도 가구 산업
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          인도에서 제품 품질, 안전성 및 표준화는 인도 표준국(BIS)이라는 중앙
          법정 기관에 의해 관리됩니다. BIS는 인도의 국가 표준 기관으로, BIS법에
          따라 설립되어 인도 시장에서 판매되는 제품이 정의된 안전, 품질 및 성능
          기준을 준수하도록 보장합니다.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS란 무엇인가요?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 전체 형태는 인도 표준국(Bureau of Indian Standards)을 의미합니다.
          인도 정부의 소비자 사무, 식품 및 공공 유통부 산하에서 운영됩니다.
          BIS는 투명한 표준화 및 인증 생태계를 통해 제조업체를 지원하면서 소비자
          이익을 보호하는 중요한 역할을 합니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          인도 가구 산업은 다음과 같은 이유로 급속한 성장을 목격했습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>도시화</li>
          <li>주거 및 상업 인프라 확장</li>
          <li>호스피탈리티, 교육, 의료 및 공동 거주 부문의 성장</li>
          <li>제품 안전성 및 내구성에 대한 소비자 인식 증가</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          가구는 더 이상 순수하게 미학적인 제품으로 간주되지 않습니다. 사용자
          안전, 인체공학, 구조적 안정성, 내화성 및 장기 내구성과 직접적으로
          연결되어 있습니다. 붕괴되는 침대, 안전하지 않은 이층 침대, 불안정한
          의자 또는 기준 미달의 수납 장치와 관련된 사고는 규제 기관과 소비자
          모두에게 우려를 불러일으켰습니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 위험을 해결하기 위해 가구용 BIS 인증은 중요한 규정 준수
          요구사항이 되었습니다. BIS는 가구 제품이 다음과 관련된 인도 표준(IS)을
          충족하도록 보장합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>구조적 강도</li>
          <li>하중 지지 능력</li>
          <li>재료 품질</li>
          <li>설계 안전성</li>
          <li>사용 조건 하에서의 성능</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체, 수입업체, 수출업체, MSME, 스타트업 및 가구 브랜드 소유자에게
          가구용 BIS 인증서 취득은 더 이상 단순한 규제 형식이 아닙니다—시장의
          필수 사항입니다.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구용 BIS 인증이 중요한 이유
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 규정에 따른 법적 규정 준수를 보장합니다</li>
          <li>소비자 신뢰와 브랜드 신뢰성을 향상시킵니다</li>
          <li>인도 전역에서 제한 없는 판매 및 유통을 가능하게 합니다</li>
          <li>제품 책임 위험을 최소화합니다</li>
          <li>수출 준비 상태 및 글로벌 수용성을 향상시킵니다</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          이 포괄적인 가이드는 인도 가구용 BIS 인증에 대한 가장 권위 있고 상세한
          리소스로 설계되었습니다. 초보 제조업체이든 기존 가구 브랜드이든, 이
          가이드는 가구용 BIS 라이선스, 가구용 BIS 등록, 적용 가능한 표준,
          프로세스, 비용, 문서, 타임라인 및 인증 후 규정 준수와 관련된 모든
          가능한 질문에 답변합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구용 BIS 인증서란 무엇인가요?
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증서 의미
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          가구용 BIS 인증서는 인도 표준국이 부여하는 공식 승인으로, 특정 가구
          제품이 관련 인도 표준(IS)을 준수함을 확인합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 마크란 무엇인가요?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 마크는 일반적으로 ISI 마크로 알려진 표준 적합성 마크로, 인증
          제품에 표시됩니다. 이는 가구가 다음을 충족했음을 의미합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>실험실 테스트 통과</li>
          <li>공장 검사 통과</li>
          <li>모든 표준 요구사항 충족</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 로고 설명
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 로고는 인도의 국가 표준 기관으로서의 BIS의 권위를 나타냅니다. 가구
          제품에 ISI 마크와 함께 사용될 때, 구매자에게 제품이 BIS 표준을
          준수함을 보장합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          인도 BIS 인증서 – 법적 지위
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          인도에서 고시된 표준에 포함된 가구 제품을 BIS 인증 없이 제조, 수입
          또는 판매하는 것은 다음을 초래할 수 있습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>상품 압수</li>
          <li>과중한 금전적 처벌</li>
          <li>BIS법에 따른 기소</li>
          <li>판매 또는 수입 금지</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          따라서 인도 가구용 BIS 인증서는 강한 법적 중요성을 지닙니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구 제품에 BIS 인증이 중요한 이유
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          가구용 BIS 인증은 여러 가지 이유로 중요합니다:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 안전성 및 구조적 무결성
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          가구 고장은 부상이나 사망을 초래할 수 있습니다. BIS 표준은 다음을
          평가합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>하중 지지 능력</li>
          <li>전도에 대한 안정성</li>
          <li>접합부 강도</li>
          <li>재료 성능</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 품질 및 내구성
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          인증된 가구 제품은 다음을 보장합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>긴 서비스 수명</li>
          <li>마모 및 손상에 대한 저항성</li>
          <li>균일한 성능</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 소비자 신뢰
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증 마크는 구매자, 기관 및 대량 구매자들 사이에서 즉각적인 신뢰를
          구축합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. 시장 접근
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          많은 정부 입찰, 기관 구매자 및 대기업은 BIS 인증 가구를 의무화합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. 법적 규정 준수
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          의무적인 BIS 규범 하에서 비인증 가구를 판매하는 것은 처벌 및 법적
          조치를 초래할 수 있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증 대상 가구 제품
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          가구는 BIS 하에서 광범위한 일반 카테고리로, 여러 제품 유형을 포함하며
          각각 다른 인도 표준(IS 번호)에 의해 관리됩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          포함되는 주요 가구 카테고리:
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. 업무용 의자
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          사무실, 공장 및 상업 공간에서 사용됩니다. 표준은 인체공학, 안정성 및
          하중 성능에 중점을 둡니다.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. 일반용 의자 및 스툴
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          가정, 학교 및 공공 장소에서 사용됩니다. BIS는 구조적 안전성 및 재료
          강도를 평가합니다.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. 테이블 및 책상
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          사무용 책상, 학습용 테이블, 워크스테이션을 포함합니다. 표준은 하중
          용량 및 표면 내구성을 테스트합니다.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. 수납 장치
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          옷장, 캐비닛, 사물함, 선반. 안정성, 날카로운 모서리 및 안전한 접근에
          중점을 둡니다.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. 침대
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          싱글 침대, 더블 침대, 접이식 침대. BIS는 프레임 강도 및 장기 성능을
          확인합니다.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. 이층 침대
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          안전 위험으로 인해 엄격하게 규제됩니다. 가드레일, 사다리 안전 및 낙상
          방지에 중점을 둡니다.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. 비가정용 가구용 소파 복합재
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          사무실, 호텔, 강당에서 사용됩니다. 표준에는 내화성 및 내구성 테스트가
          포함됩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          기타 가구 제품
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>학교 가구</li>
          <li>기관용 좌석</li>
          <li>병원 가구</li>
          <li>모듈식 가구</li>
          <li>금속 및 목재 가구 시스템</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          각 제품 카테고리는 자체 적용 가능한 IS 번호를 가지며, BIS에 의해
          별도로 고시됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구에 적용 가능한 BIS 표준
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 표준이란 무엇인가요?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 표준은 BIS가 발행한 기술 사양으로 다음을 정의합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>재료 요구사항</li>
          <li>성능 매개변수</li>
          <li>테스트 방법</li>
          <li>표시 지침</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 번호의 의미
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 번호(인도 표준 번호)는 제품에 적용 가능한 표준을 고유하게
          식별합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 고시 프로세스
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS는 특정 표준을 의무화하는 공식 BIS 고시를 발행합니다. 고시되면:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>규정 준수가 의무화됩니다</li>
          <li>비인증 제품은 불법입니다</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          올바른 BIS 표준을 식별하는 방법
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 카테고리 식별</li>
          <li>적용 가능한 IS 범위 연구</li>
          <li>표준 적용 가능성 확인</li>
          <li>잘못된 표준 선택 방지(일반적인 실수)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구에 적용 가능한 BIS 인증 유형
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI 제도 하의 BIS 라이선스
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          가구 제품은 일반적으로 ISI 인증 제도에 포함되며, 여기에는 다음이
          포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 테스트</li>
          <li>공장 검사</li>
          <li>감시 감사</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 등록
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 등록은 주로 전자 제품 및 IT 제품용입니다. 가구는 일반적으로 등록이
          아닌 BIS 라이선스가 필요합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          인도 가구용 BIS 인증 프로세스
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 1: 신청 전 준비
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>적용 가능한 IS 표준 식별</li>
          <li>제품 설계 규정 준수 평가</li>
          <li>기술 문서 준비</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 2: BIS 신청
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          다음을 포함하여 BIS 신청서를 제출합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 세부사항</li>
          <li>제조 세부사항</li>
          <li>표준 참조</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 3: BIS 온라인 신청
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          신청은 BIS 온라인 포털을 통해 제출됩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 4: 제품 테스트
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인정 실험실에서 샘플을 테스트합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 5: 공장 검사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 담당자가 다음을 확인합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조 공정</li>
          <li>품질 관리</li>
          <li>테스트 시설</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 6: BIS 라이선스 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          규정 준수 시 BIS가 라이선스를 부여합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 7: BIS 인증 마크 사용
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체는 BIS 마크 / ISI 마크를 부착할 수 있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구 테스트 요구사항
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          테스트는 BIS 등록 프로세스의 필수 부분입니다. 가구는 안전성과 내구성을
          보장하기 위해 엄격한 테스트를 거칩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          가구 필수 테스트:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>구조 하중 테스트</li>
          <li>안정성 테스트</li>
          <li>가드레일 강도 테스트</li>
          <li>충격 테스트</li>
          <li>감금 위험 테스트</li>
          <li>사다리 강도 및 각도 테스트</li>
          <li>재료 안전성 테스트</li>
          <li>모서리 반경 및 날카로움 테스트</li>
          <li>매트리스 지지 테스트</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          테스트는 BIS 인정 실험실에서만 수행되어야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구용 BIS 인증에 필요한 문서
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          주요 문서 포함:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 등록 증명</li>
          <li>제품 도면 및 사양</li>
          <li>원자재 세부사항</li>
          <li>테스트 보고서</li>
          <li>품질 관리 기록</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          일반적인 문서 작성 실수:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>잘못된 표준 참조</li>
          <li>불완전한 테스트 데이터</li>
          <li>제품 범위 불일치</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구용 BIS 인증 비용
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증서 비용 구성 요소:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>정부 신청 수수료</li>
          <li>테스트 비용</li>
          <li>검사 수수료</li>
          <li>라이선스 수수료</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증 비용 요인:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 복잡성</li>
          <li>모델 수</li>
          <li>테스트 요구사항</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          참고: 전문 컨설팅 수수료는 정부 수수료와 별도입니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증서 등록 타임라인
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          평균 타임라인:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>테스트: 3–6주</li>
          <li>검사: 1–2주</li>
          <li>라이선스 부여: 2–4주</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          총: 8–12주(대략)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구 제조업체를 위한 인도 BIS 인증 취득 방법
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">실용적인 팁:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>올바른 IS 표준 선택</li>
          <li>공장 준비 상태 확인</li>
          <li>테스트 기록 유지</li>
          <li>문서 작성 오류 방지</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증서 온라인 신청 – 실용적 개요
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          온라인 포털 과제:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>기술적 오류</li>
          <li>문서 업로드 문제</li>
          <li>표준 선택 혼란</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          적절한 지도는 지연을 줄입니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          승인 후 BIS 마크 및 BIS 인증 마크 사용
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">표시 규칙:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>올바른 IS 참조</li>
          <li>라이선스 번호</li>
          <li>적절한 크기 및 가시성</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          규정 미준수는 정지를 초래할 수 있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구용 BIS 인증의 과제
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>표준 해석</li>
          <li>제품 테스트 실패</li>
          <li>검사 부적합</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          가구 인증에서 BIS 컨설턴트의 역할
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          전문 BIS 컨설턴트는 다음을 통해 도움을 줍니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>올바른 표준 식별</li>
          <li>테스트 및 검사 관리</li>
          <li>승인 시간 단축</li>
          <li>비용이 많이 드는 거부 방지</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          가구용 BIS 인증은 인도의 성장하는 가구 시장에서 품질, 안전 및 법적
          규정 준수의 초석입니다. 제조업체, 수입업체 또는 브랜드 소유자이든,
          인도에서 가구용 BIS 인증서를 취득하면 다음을 보장합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>규제 준수</li>
          <li>소비자 신뢰</li>
          <li>장기 시장 성공</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증 프로세스, 표준, 비용 및 규정 준수 요구사항을 이해함으로써
          기업은 규제 환경을 자신 있게 탐색하고 인도 시장을 위한 더 안전하고
          강하며 신뢰할 수 있는 가구 제품을 구축할 수 있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 라이선스 자주 묻는 질문
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              인도에서 모든 가구 제품에 BIS 인증이 의무인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              아니요, BIS 인증은 고시된 BIS 표준에 포함된 가구 제품에만
              의무입니다. 그러나 가구 제품 카테고리가 인도 표준국에 의해
              고시되면, 유효한 BIS 라이선스 없이 해당 제품을 제조, 수입, 판매
              또는 유통하는 것은 인도에서 불법이 됩니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              어떤 가구 제품이 BIS 등록 대신 BIS 라이선스가 필요한가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              가구 제품은 일반적으로 ISI 인증 제도에 속하며, BIS 등록이 아닌 BIS
              라이선스가 필요합니다. BIS 등록(CRS)은 주로 전자 제품 및 IT 제품에
              적용되는 반면, 가구 제품은 테스트 + 공장 검사 + BIS 라이선스가
              필요합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              수입 가구를 BIS 인증 없이 인도에서 판매할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              아니요. 의무적인 BIS 표준에 포함된 수입 가구 제품은 통관 전에 BIS
              인증이 있어야 합니다. 비인증 가구 수입은 다음을 초래할 수
              있습니다:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>세관 구류</li>
              <li>재수출 또는 폐기</li>
              <li>과중한 처벌</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              외국 제조업체는 인도로 가구를 수출하기 전에 BIS 라이선스를
              취득해야 합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              외국 가구 제조업체가 BIS 인증을 신청할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              예. 외국 제조업체는 외국 제조업체 인증 제도(FMCS)에 따라 신청할 수
              있습니다. 다음을 수행해야 합니다:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>인도 대리인(AIR) 임명</li>
              <li>인도 표준 준수</li>
              <li>해외 BIS 공장 검사 허용</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              수제 또는 소규모 가구 제조업체에 BIS 인증이 필요한가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              예, 가구 제품이 의무적인 BIS 표준에 포함된 경우 MSME, 스타트업 및
              소규모 단위도 BIS 인증을 취득해야 합니다. 생산량에 따른 면제는
              없습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              목재 가구에 BIS 인증이 필요한가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              예, 침대, 의자, 테이블, 책상 및 수납 장치와 같은 목재 가구 제품은
              고시된 표준에 포함된 경우 BIS 인증이 필요할 수 있습니다. BIS
              표준은 제품 유형 및 사용에 따라 목재 및 금속 가구 모두에
              적용됩니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              하나의 BIS 라이선스로 여러 가구 모델을 포함할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              예, 다음 조건 하에서 여러 모델 또는 변형을 단일 BIS 라이선스로
              포함할 수 있습니다:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>동일한 IS 표준에 속함</li>
              <li>구조, 재료 및 설계 매개변수가 유사함</li>
              <li>BIS가 신청 중 그룹화를 승인함</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS 인증을 다른 제조업체로 양도할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              아니요. BIS 라이선스는 양도 불가능합니다. 제품 설계가 동일하더라도
              각 제조업체는 자체 BIS 인증서를 취득해야 합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS 인증서란 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS 표준 준수에 대한 공식 증명입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              가구에 BIS 인증이 의무인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              예, 고시된 표준에 포함된 가구 제품의 경우입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              인도에서 BIS 인증을 받는 방법은 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              테스트, 검사 및 BIS 라이선스 승인을 통해 받습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS 마크란 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS 승인을 보여주는 적합성 마크입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS 인증 비용은 얼마인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              제품 유형, 테스트 및 범위에 따라 다릅니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS 전체 형태는 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              인도 표준국(Bureau of Indian Standards)입니다.
            </p>
          </div>
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
                alt="BIS 로고"
                title="BIS 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              외국 제조업체용 BIS 마크(ISI 라이선스)
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
              BIS(CRS) 등록
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
              인도 제조업체용 ISI 마크(BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
