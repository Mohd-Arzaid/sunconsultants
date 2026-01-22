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

const BISCertificateBatteryOperatedAirPurifierKorean = () => {
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

export default BISCertificateBatteryOperatedAirPurifierKorean;

const MetaTags = () => {
  const title =
    "전지 구동 공기 정화기 BIS 인증서 | IS 302 (Part 1):2024 BIS 라이센스";
  const ogTitle =
    "전지 구동 공기 정화기 BIS 인증 – IS 302 (Part 1):2024 가이드";
  const twitterTitle =
    "전지 구동 공기 정화기 BIS 라이센스 | IS 302 (Part 1):2024";
  const metaDescription =
    "IS 302 (Part 1):2024에 따른 전지 구동 공기 정화기 BIS 인증서를 받으세요. 인도에서 BIS 인증을 위한 프로세스, 서류, 테스트, 비용 및 일정.";
  const ogDescription =
    "IS 302 (Part 1):2024에 따른 전지 구동 공기 정화기 BIS 인증 완전 가이드. 프로세스, 비용, 서류, 테스트 및 BIS 라이센스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 302 (Part 1):2024에 따른 전지 구동 공기 정화기 BIS 인증서를 신청하세요. 인도에서 BIS 프로세스, 서류, 테스트, 수수료 및 일정을 알아보세요.";
  const metaKeywords =
    "전지 구동 공기 정화기 BIS 인증서, 전지 구동 공기 정화기 BIS 라이센스, IS 302 (Part 1):2024, 전지 구동 공기 정화기 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/jeonji-gudong-gonggi-jeonghwagi-is-302";
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
                    전지 구동 공기 정화기 BIS 인증서 – IS 302
                    (Part 1):2024
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
          전지 구동 공기 정화기 BIS 인증 – IS 302 (Part 1):2024 완전 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedAirPurifier.png"
            title="전지 구동 공기 정화기 BIS 라이센스"
            alt="전지 구동 공기 정화기 BIS 인증서 - IS 302 (Part 1):2024 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도에서 전지 구동 공기 정화기에 대한 수요는 대기 오염 수준의 상승, 건강 인식의 증가, 그리고 휴대용이고 에너지 효율적인 공기 정화 솔루션의 필요성으로 인해 급속히 성장했습니다. 기존의 플러그인 공기 정화기와 달리, 전지 구동 모델은 특히 중단 없는 전원 공급이 보장되지 않는 곳에서 가정, 사무실, 병원, 차량, 호텔, 학교 및 개인 공간에서 널리 사용됩니다. 이러한 기기는 전기, 전자 및 배터리 구성 요소와 직접 상호 작용하므로 전기 안전, 화재 보호, 절연 무결성 및 사용자 보호가 매우 중요합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          소비자 안전 및 규제 준수를 보장하기 위해 인도 정부는 인도 전기 안전 표준에 대한 적합성을 의무화했습니다. IS 302 (Part 1):2024에 따른 전지 구동 공기 정화기 BIS 인증서 취득은 이러한 제품을 인도 시장에서 판매하기 전에 제조업체 및 수입업체에게 필수적인 법적 요구사항입니다. 유효한 전지 구동 공기 정화기 BIS 인증은 기기가 최신 인도 표준에 따라 전기, 기계 및 열 안전성에 대해 테스트되었음을 확인합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증이란 무엇인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증은 인도 표준국에서 관리하는 인도의 공식 제품 적합성 평가 시스템입니다. BIS는 소비자 사무부 산하에서 기능하며 인도에서 판매되는 제품이 정의된 안전, 품질 및 신뢰성 표준을 충족하도록 보장하는 책임이 있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증서의 의미
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증서의 의미는 BIS가 발급하는 인증을 의미하며, 제조업체가 특정 인도 표준(IS)을 준수하는 제품을 제조, 수입 및 판매할 수 있도록 허용합니다. 이 인증서는 승인된 제품에 BIS 인증 마크(ISI 마크) 사용도 허용합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS는 다음을 위해 존재합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>소비자를 안전하지 않은 전기 기기로부터 보호</li>
          <li>화재, 감전 및 배터리 관련 위험 방지</li>
          <li>균일한 제품 품질 촉진</li>
          <li>안전 규정의 시행 가능</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI 마크 설명
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          전지 구동 공기 정화기의 BIS 마크(ISI 마크)는 다음을 나타냅니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품이 IS 302 (Part 1):2024를 준수함</li>
          <li>전기 절연 및 구조가 안전함</li>
          <li>기기가 인도에서 판매에 대해 법적으로 승인됨</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          전지 구동 공기 정화기에 적용되는 BIS 표준
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (Part 1):2024 – 가정용 및 유사 전기 기기의 안전성
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          전지 구동 공기 정화기에 적용되는 인도 표준은 IS 302 (Part 1):2024로, 가정용 및 유사 용도를 위한 전기 기기의 일반적인 안전 요구사항을 규정합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (Part 1):2024의 범위
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 다음을 다룹니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            배터리 또는 하이브리드 전원을 사용하는 기기의 전기 안전성
          </li>
          <li>감전에 대한 보호</li>
          <li>화재 및 과열 위험</li>
          <li>기계적 및 구조적 안전성</li>
          <li>절연, 표면 거리 및 간격 요구사항</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          안전성, 성능 및 테스트 의도
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (Part 1):2024는 다음을 보장하는 것을 목표로 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            배터리 구동 기기가 정상 및 비정상 조건에서 안전하게 작동함
          </li>
          <li>
            사용자가 전기적, 열적 및 기계적 위험으로부터 보호됨
          </li>
          <li>구성 요소가 과열되거나 화재를 일으키지 않음</li>
          <li>기기가 의도된 수명 주기 동안 안전함</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          준수해야 할 대상
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도의 전지 구동 공기 정화기 제조업체</li>
          <li>수입업체 및 유통업체</li>
          <li>인도에 공급하는 외국 제조업체</li>
          <li>프라이빗 라벨로 공기 정화기를 판매하는 브랜드</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          전지 구동 공기 정화기에 BIS 인증이 필수인 이유
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          소비자 안전 위험
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          인증되지 않은 공기 정화기는 다음을 일으킬 수 있습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>불량 절연으로 인한 감전</li>
          <li>배터리 과열 또는 폭발</li>
          <li>충전 중 또는 작동 중 화재 위험</li>
          <li>내부 구성 요소의 기계적 고장</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          정부 및 규제 준수
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 고시 및 전기 안전 규정에 따라 공기 정화기는 필수 인증 대상입니다. BIS 인증서 없이 판매하는 것은 불법입니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 영향
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          비준수는 다음을 초래할 수 있습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 압수</li>
          <li>과중한 벌금 및 제재</li>
          <li>수입 금지</li>
          <li>BIS 법에 따른 형사 책임</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          시장 및 브랜드 혜택
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          전지 구동 공기 정화기 BIS 라이센스는 다음에 도움이 됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>소비자 신뢰 구축</li>
          <li>전자상거래 플랫폼에 등록 가능</li>
          <li>기관 및 정부 조달 자격 획득</li>
          <li>브랜드 평판 강화</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          전지 구동 공기 정화기 BIS 인증 프로세스 (단계별)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 라이센스의 적용성 및 표준 식별
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          프로세스는 다음을 확인하는 것으로 시작됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 유형: 전지 구동 공기 정화기</li>
          <li>적용 표준: IS 302 (Part 1):2024</li>
          <li>전압, 배터리 유형, 충전기 구성</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 온라인 신청 프로세스
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 포털에 등록</li>
          <li>BIS 신청서를 온라인으로 제출</li>
          <li>기술 및 법적 서류 업로드</li>
          <li>적용되는 정부 수수료 지불</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          이 단계는 일반적으로 BIS apply online 또는 BIS 인증서 등록이라고 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          공기 정화기 BIS 인증서의 수수료 및 비용 구조
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증 비용에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 수수료</li>
          <li>테스트 요금</li>
          <li>공장 검사 수수료</li>
          <li>라이센스 및 마킹 수수료</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증의 총 비용은 다음에 따라 다릅니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 복잡성</li>
          <li>배터리 및 충전기 설계</li>
          <li>제조 위치</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          제품 샘플 테스트 (IS 302 Part 1:2024에 따라)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          샘플은 BIS 인정 실험실에서 다음에 대해 테스트됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>감전에 대한 보호</li>
          <li>가열 및 비정상 작동</li>
          <li>절연 저항</li>
          <li>유전 강도</li>
          <li>배터리 안전성 및 충전 안전성</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          공장 검사 및 감사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 담당자는 다음을 확인합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조 프로세스</li>
          <li>품질 관리 시스템</li>
          <li>구성 요소 추적성</li>
          <li>사내 테스트 시설</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 라이센스 및 ISI 마크 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          테스트 및 검사가 성공한 후:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS가 인도 표준국 라이센스를 발급함</li>
          <li>제조업체가 BIS 마크 사용 권한을 받음</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증에 필요한 서류
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          제조업체 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 등록 인증서</li>
          <li>제조 프로세스 흐름도</li>
          <li>기계 및 테스트 장비 목록</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>회사 설립 인증서</li>
          <li>GST 등록</li>
          <li>브랜드 인가 (해당되는 경우)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          기술 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>회로도</li>
          <li>구성 요소 데이터시트</li>
          <li>배터리 및 충전기 사양</li>
          <li>사용자 매뉴얼 및 라벨</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 신청 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 신청서</li>
          <li>테스트 요청서</li>
          <li>선언 및 약속</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이것들은 BIS 인증서 서류 또는 BIS 인증 서류로 알려져 있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 302 (Part 1):2024에 따른 테스트 요구사항
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          필수 테스트에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>감전 보호 테스트</li>
          <li>가열 및 비정상 작동 테스트</li>
          <li>절연 저항 테스트</li>
          <li>유전 강도 테스트</li>
          <li>배터리 충전 안전성 테스트</li>
          <li>기계적 강도 및 안정성 테스트</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          테스트는 BIS 인정 실험실에서만 수행해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          일반적인 과제 및 해결 방법
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          일반적인 문제
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>가열 또는 절연 테스트 실패</li>
          <li>안전하지 않은 배터리 구성</li>
          <li>불완전한 문서화</li>
          <li>비준수 라벨링</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          해결책 및 모범 사례
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>사전 준수 테스트 수행</li>
          <li>인증된 구성 요소 사용</li>
          <li>정확한 기술 서류 준비</li>
          <li>경험이 풍부한 BIS 컨설턴트와 협력</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          제조업체 및 수입업체를 위한 BIS 인증의 혜택
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 법률 준수</li>
          <li>제재로부터 보호</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          상업적 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 전역 시장 접근</li>
          <li>전자상거래 플랫폼에서의 수용</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          브랜딩 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 마크가 신뢰를 향상시킴</li>
          <li>더 높은 고객 신뢰</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          시장 확장
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>기관 시장 진입 용이</li>
          <li>장기적인 브랜드 신뢰성</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          전지 구동 공기 정화기 BIS 인증이 필요한 대상
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>수입업체</li>
          <li>외국 제조업체 (AIR 포함)</li>
          <li>무역업체 및 브랜드 소유자</li>
          <li>온라인 판매자 및 마켓플레이스</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증 컨설팅에서 우리를 선택하는 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          우리는 엔드투엔드 BIS 인증 서비스를 제공합니다. 다음을 포함합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>적용성 평가</li>
          <li>문서화 준비</li>
          <li>실험실 테스트 조정</li>
          <li>공장 검사 지원</li>
          <li>더 빠른 승인</li>
          <li>인증 후 준수</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          전기 및 전자 기기에 대한 우리의 전문 지식은 원활하고 준수하는 인증 여정을 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 302 (Part 1):2024에 따른 전지 구동 공기 정화기 BIS 인증서 취득은 단순한 규제 형식이 아닙니다—이는 중요한 안전 및 시장 요구사항입니다. 전지 구동 공기 정화기 BIS 인증은 전기 안전성, 배터리 신뢰성 및 소비자 보호를 보장하며, 전지 구동 공기 정화기 BIS 라이센스는 브랜드 신뢰성 및 법적 지위를 강화합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체 및 수입업체에게 적시 준수는 제재를 방지하고, 원활한 시장 진입을 가능하게 하며, 장기적인 신뢰를 구축합니다. 전문가의 지도와 구조화된 준수 지원을 통해 BIS 인증 프로세스는 효율적이고 예측 가능하며 인도 표준에 완전히 부합하게 됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 전지 구동 공기 정화기 BIS 인증
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. 전지 구동 공기 정화기에 BIS 인증이 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, IS 302 (Part 1):2024에 따라 필수입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. BIS 인증서의 전체 형식은 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              인도 표준국 인증서입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. BIS 인증에는 얼마나 걸리나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              일반적으로 인도 제조업체는 6–8주, 외국 제조업체는 12-16주가 소요됩니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. BIS 인증서 비용은 얼마인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              테스트 및 제품 복잡성에 따라 다릅니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. 수입업체가 BIS 인증을 신청할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 적절한 인가가 있으면 가능합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. ISI 마크가 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인증 후에는 필수입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. 배터리 안전성 테스트가 포함되나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 배터리 및 충전 안전성은 필수입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. 공장 검사가 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 라이센스 부여를 위해 필수입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. 여러 모델을 포함할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 테스트 승인 대상입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. 온라인 신청이 필요한가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, BIS apply online은 필수입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. 외국 브랜드가 BIS 인증을 받을 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인가된 인도 대표자를 통해 가능합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. BIS 규칙을 위반하면 어떻게 되나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              제재, 압수 및 법적 조치가 취해집니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. BIS 인증이 판매를 개선하나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 신뢰를 크게 향상시킵니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. 갱신이 필요한가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 정기적인 갱신이 필수입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. 컨설턴트가 승인을 가속화할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 경험이 풍부한 컨설턴트는 지연을 줄입니다.
            </p>
          </div>
        </div>

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
              외국 제조를 위한 BIS 마크 (ISI 라이센스)
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
              인도 제조업체를 위한 ISI 마크 (BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
