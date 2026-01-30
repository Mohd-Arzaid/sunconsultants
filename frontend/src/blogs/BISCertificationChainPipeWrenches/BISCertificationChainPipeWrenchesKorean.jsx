import FaqAuthorKorean from "@/components/common/FaqAuthor/FaqAuthorKorean";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
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

const BISCertificationChainPipeWrenchesKorean = () => {
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

export default BISCertificationChainPipeWrenchesKorean;

const MetaTags = () => {
  const title =
    "체인 파이프 렌치 BIS 인증서 | IS 4123:1982 BIS 라이선스";
  const ogTitle =
    "체인 파이프 렌치 BIS 인증 - IS 4123:1982 가이드";
  const twitterTitle = "체인 파이프 렌치 BIS 라이선스 | IS 4123:1982";
  const metaDescription =
    "IS 4123:1982에 따른 체인 파이프 렌치 BIS 인증서 취득. 인도 BIS 인증 절차, 서류, 시험, 비용 및 소요 기간.";
  const ogDescription =
    "IS 4123:1982에 따른 체인 파이프 렌치 BIS 인증 완벽 가이드. 절차, 비용, 서류, 시험 및 BIS 라이선스 혜택 안내.";
  const twitterDescription =
    "IS 4123:1982에 따른 체인 파이프 렌치 BIS 인증서 신청. 인도 BIS 절차, 서류, 시험, 수수료 및 소요 기간 안내.";
  const metaKeywords =
    "체인 파이프 렌치 BIS 인증서, 체인 파이프 렌치 BIS 라이선스, IS 4123:1982, 체인 파이프 렌치 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/chein-paipeu-renchi-is-4123";
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
                    체인 파이프 렌치 BIS 인증서 – IS 4123:1982
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
          체인 파이프 렌치 BIS 인증 – IS 4123:1982 완벽 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforChainPipeWrenches.png"
            title="체인 파이프 렌치 BIS 라이선스"
            alt="체인 파이프 렌치 BIS 인증서 - IS 4123:1982 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          체인 파이프 렌치는 일반 파이프 렌치로는 효과가 없는 대구경 파이프, 원형 피팅,
          원통형 부품을 조이고, 죄고, 풀기 위한 전문 중공업용 수공구입니다. 이 공구는
          석유·가스 파이프라인, 정유소, 발전소, 석유화학 시설, 조선소, 수도 공급 사업,
          중공업 작업장 및 인프라 건설 현장에서 광범위하게 사용됩니다. 그립 메커니즘은
          파이프를 감싸는 경화된 체인에 의존하여 균일한 하중 분포와 높은 토크 적용이
          가능합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          체인 파이프 렌치는 고부하·안전 중요 작업에 사용되므로, 재질, 체인 강도,
          핸들 설계 또는 잠금 장치의 결함은 미끄러짐, 갑작스러운 해제, 공구 고장,
          심각한 부상, 장비 손상 및 막대한 가동 중단으로 이어질 수 있습니다. 이러한
          위험을 방지하고 시장 전반의 품질을 표준화하기 위해 인도 정부는 이 공구에
          대해 인도 표준 준수를 의무화하고 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          따라서 IS 4123:1982에 따른 체인 파이프 렌치 BIS 인증서 취득은 인도에서
          체인 파이프 렌치를 판매하는 제조업체 및 수입업체에게 법적 필수 요건입니다.
          유효한 체인 파이프 렌치 BIS 인증은 해당 제품이 인도 표준에 따라 강도,
          그립 성능, 치수 정확도 및 전반적인 안전성에 대해 시험 및 승인되었음을
          확인합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증이란?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증은 인도 표준국(Bureau of Indian Standards)이 운영하는 제품 적합성 및
          품질 보증 제도로, 인도에서 제품의 표준화, 시험 및 인증을 담당하는 국가 기관입니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증서의 의미
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증서의 의미는 BIS가 발급한 공식 승인으로, 해당 제품이 관련 인도 표준(IS)에
          적합하고 통제된 품질 시스템 하에 제조되었음을 확인합니다. 이 인증을 통해
          제조업체는 인증된 제품에 ISI 마크를 사용할 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증의 목적:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>불안전하고 부적합한 제품으로부터 사용자 보호</li>
          <li>제조업체 전반의 일관된 품질 보장</li>
          <li>품질 관리 규정 시행 지원</li>
          <li>인도 및 수입 산업 제품에 대한 신뢰 증진</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI 마크 설명
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증 마크인 ISI 마크는 준수 여부를 나타내는 시각적 상징입니다. 체인 파이프
          렌치의 경우 ISI 마크는 구매자에게 다음을 보장합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>해당 공구가 IS 4123:1982를 준수함</li>
          <li>체인과 핸들이 규정 하중을 견딜 수 있음</li>
          <li>해당 제품이 인도에서 합법적으로 판매 승인됨</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          체인 파이프 렌치에 적용되는 BIS 표준
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 4123:1982 – 체인 파이프 렌치 규격
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          체인 파이프 렌치에 적용되는 인도 표준은 IS 4123:1982로, 체인 파이프 렌치의
          설계, 재질, 치수, 성능 및 시험에 대한 요구사항을 규정합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 4123:1982 적용 범위
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 다음을 포함합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>다양한 크기 및 용량의 체인 파이프 렌치</li>
          <li>핸들 구조 및 체인 조립</li>
          <li>체인 재질, 링크 치수 및 강도</li>
          <li>치수 공차 및 제작 품질</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          안전, 성능 및 시험 목적
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 4123:1982는 다음을 보장하기 위해 설계되었습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>체인이 파이프에 균일하고 안전한 그립 제공</li>
          <li>렌치가 고장 없이 높은 토크를 견딤</li>
          <li>핸들과 조인트가 하중 하에서 변형되지 않음</li>
          <li>공구가 중공업 적용에서 안전하게 작동함</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          파이프 렌치 BIS 라이선스 준수 대상
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>체인 파이프 렌치 인도 제조업체</li>
          <li>수입업체 및 유통업체</li>
          <li>인도에 공급하는 해외 제조업체</li>
          <li>자체 브랜드로 판매하는 무역업체 및 브랜드</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          체인 파이프 렌치에 BIS 인증이 필수인 이유
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          소비자 및 작업장 안전 위험
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          비표준 체인 파이프 렌치는 다음을 초래할 수 있습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>체인 미끄러짐 또는 파손</li>
          <li>고토크 하중의 갑작스러운 해제</li>
          <li>손, 팔 또는 신체의 심각한 부상</li>
          <li>파이프라인 및 피팅 손상</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          정부 및 규제 준수
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          적용되는 BIS 고시 및 품질 관리 규정에 따라, IS 4123:1982에 해당하는
          체인 파이프 렌치는 인도에서 판매, 수입 또는 유통 전 BIS 인증을 취득해야 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 영향
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          비인증 체인 파이프 렌치 판매 시 다음이 발생할 수 있습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 압수</li>
          <li>과중한 재정적 처벌</li>
          <li>사업 운영 중단</li>
          <li>BIS법에 따른 법적 조치</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          시장 및 브랜드 혜택
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          체인 파이프 렌치 BIS 라이선스를 통해 기업은 다음이 가능합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>산업 구매자 및 EPC 계약업체와의 신뢰 구축</li>
          <li>정부, 공공기업 및 인프라 입찰 참가 자격</li>
          <li>국내외 유명 브랜드와 경쟁</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          체인 파이프 렌치 BIS 인증 단계별 절차
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          적용 여부 및 표준 확인
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          첫 단계에서는 다음을 확인합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 분류: 체인 파이프 렌치</li>
          <li>적용 표준: IS 4123:1982</li>
          <li>크기 범위 및 용량 변형</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 온라인 신청 절차
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 포털에 등록</li>
          <li>BIS 신청서에서 IS 4123:1982 선택</li>
          <li>필요한 기술 및 법적 서류 업로드</li>
          <li>적용 정부 수수료 납부</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          이 절차는 일반적으로 BIS 온라인 신청 또는 BIS 인증서 등록으로 알려져 있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          수수료 및 비용 구조
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증 비용에는 일반적으로 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 및 처리 수수료</li>
          <li>시료 시험 비용</li>
          <li>공장 검사 비용</li>
          <li>라이선스 및 마킹 수수료</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증 총 비용은 다음에 따라 달라집니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>렌치 크기 수</li>
          <li>시험 복잡도</li>
          <li>제조 지역</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          제품 시료 시험 (IS 4123:1982 기준)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          시료는 BIS 인정 시험소에서 다음 항목으로 시험됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>체인 인장 강도</li>
          <li>하중 및 토크 저항</li>
          <li>치수 정확도</li>
          <li>핸들 강도 및 제작 품질</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          공장 검사 및 감사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 담당자가 현장 감사를 수행하여 다음을 확인합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조 및 조립 공정</li>
          <li>체인 제조 또는 조달 관리</li>
          <li>품질 관리 시스템</li>
          <li>사내 시험 및 검사 시설</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 라이선스 및 ISI 마크 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          시험 및 검사 성공 후:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS가 인도 표준국 라이선스 발급</li>
          <li>
            제조업체는 체인 파이프 렌치에 ISI 마크를 부착할 수 있는 권한을 받음
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          인증 후 준수 사항
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          인증 후 의무 사항에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>정기 감시 감사</li>
          <li>시장 시료 시험</li>
          <li>적시 라이선스 갱신</li>
          <li>IS 4123:1982 지속 준수</li>
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
          <li>공장 등록 또는 MSME 인증서</li>
          <li>제조 공정 흐름도</li>
          <li>기계 및 시험 장비 목록</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>회사 설립 인증서</li>
          <li>GST 등록</li>
          <li>상표권 승인(해당 시)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          기술 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 도면 및 규격서</li>
          <li>체인 재질 및 열처리 상세</li>
          <li>품질 관리 및 검사 계획</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 신청 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 신청서</li>
          <li>시험 요청 상세</li>
          <li>선언서 및 각서</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이는 통칭하여 BIS 인증서 서류 또는 BIS 인증 서류로 불립니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 4123:1982에 따른 시험 요구사항
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          필수 시험 항목:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>체인 인장 강도 시험</li>
          <li>하중 및 토크 시험</li>
          <li>치수 검증</li>
          <li>재질 및 제작 품질 검사</li>
          <li>기능적 그립 성능 시험</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          모든 시험은 BIS 인정 시험소에서만 수행되어야 합니다.
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
          <li>체인 강도 시험 불합격</li>
          <li>체인 링크의 부적절한 열처리</li>
          <li>치수 부적합</li>
          <li>불완전한 서류</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          해결책 및 모범 사례
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>사내 사전 시험 수행</li>
          <li>인증 원자재 사용</li>
          <li>엄격한 공정 관리 유지</li>
          <li>경험 많은 BIS 컨설턴트 활용</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Manufacturers & Importers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Full compliance with Indian regulations</li>
          <li>Protection from penalties and enforcement actions</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Higher acceptance by industrial buyers</li>
          <li>Eligibility for PSU and infrastructure projects</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Branding Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI Mark enhances credibility and trust</li>
          <li>Differentiation from unorganized suppliers</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market Expansion
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Easier access to large industrial markets</li>
          <li>Improved export credibility</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          미준수 시 처벌
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          미준수 시 다음이 발생할 수 있습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>과중한 금전적 벌과</li>
          <li>제품 압수</li>
          <li>라이선스 취소</li>
          <li>BIS법에 따른 법적 기소</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          체인 파이프 렌치 BIS 인증이 필요한 대상
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>수입업체</li>
          <li>해외 제조업체(인도 대리인 지정 시)</li>
          <li>무역업체 및 산업 공급업체</li>
          <li>체인 파이프 렌치를 등록하는 이커머스 판매자</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Choose Us for BIS Certification Consulting?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          We provide end-to-end BIS certification consulting services,
          including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product applicability and gap analysis</li>
          <li>Documentation preparation and verification</li>
          <li>Coordination with BIS-recognized laboratories</li>
          <li>Factory inspection and audit support</li>
          <li>Faster approvals with minimal queries</li>
          <li>Post-certification compliance and renewal support</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Our expertise in industrial hand tools and heavy-duty equipment
          ensures a smooth, reliable, and fully compliant BIS certification
          journey.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 4123:1982에 따른 체인 파이프 렌치 BIS 인증서 취득은 인도에서 이
          중공업용 공구를 판매하기 위한 중요한 법적·품질 요건입니다. 체인 파이프
          렌치 BIS 인증은 안전, 강도 및 신뢰성을 보장하며, 체인 파이프 렌치 BIS
          라이선스는 브랜드 신뢰도와 시장 수용도를 높입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체, 수입업체 및 판매자에게 적시 준수는 처벌을 방지할 뿐만 아니라
          고가치 산업, 인프라 및 정부 프로젝트 참여 기회를 열어줍니다. 전문가
          가이드와 체계적인 준수 지원으로 BIS 인증 절차는 효율적이고 예측 가능하며
          인도 표준과 완전히 부합하게 됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          자주 묻는 질문 – 체인 파이프 렌치 BIS 인증
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. 체인 파이프 렌치에 BIS 인증이 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인도에서는 IS 4123:1982 준수가 필수입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. BIS 인증서의 전체 명칭은 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              인도 표준국 인증서(Bureau of Indian Standards Certificate).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. BIS 인증 절차는 얼마나 걸리나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              일반적으로 인도 제조업체는 45~60 영업일, 해외 제조업체는 90~120일 소요됩니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. BIS 인증 비용은 얼마인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              제품 크기 범위 및 시험 범위에 따라 달라집니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. 수입업체도 BIS 인증을 신청할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 제조업체의 적절한 위임이 있으면 가능합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. ISI 마크는 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인증 후 ISI 마킹은 의무입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. 해외 제조업체도 BIS 인증을 받을 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인도 대리인을 통해 가능합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. IS 4123:1982에 따른 필수 시험은 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              체인 강도, 하중, 치수 및 제작 품질 시험입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. 공장 검사는 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, BIS가 현장 감사를 수행합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. 하나의 라이선스로 여러 크기를 포함할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 시험 및 승인에 따라 가능합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. 비인증 체인 파이프 렌치를 판매하면 어떻게 되나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              처벌, 압수 및 법적 조치가 있을 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. BIS 온라인 신청이 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 모든 신청은 온라인으로 제출됩니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. BIS 라이선스 갱신이 필요한가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 정기 갱신이 의무입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. 컨설턴트가 승인 지연을 줄일 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 전문 컨설턴트가 실수를 방지하는 데 도움이 됩니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. BIS 인증이 구매자 신뢰를 높이나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 시장 신뢰를 크게 향상시킵니다.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-4123-2024-Sun-Certifications-India.pdf"
            title="체인 파이프 렌치 BIS 인증서 - IS 4123:2024 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoRead />

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
              해외 제조 BIS 마크(ISI 라이선스)
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
              EPR 인증서
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
              LMPC 인증서
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
              인도 제조 ISI 마크 (BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
