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
import FooterEng from "@/components/manual/Footer/FooterEng";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificationCombinationSideCuttingPliersKorean = () => {
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




export default BISCertificationCombinationSideCuttingPliersKorean;

const MetaTags = () => {
  const title =
    "조합 측면 절단 펜치 BIS 인증 | IS 3650:1981 BIS 라이선스";
  const ogTitle =
    "조합 측면 절단 펜치 BIS 인증 – IS 3650:1981 가이드";
  const twitterTitle =
    "조합 측면 절단 펜치 BIS 라이선스 | IS 3650:1981";
  const metaDescription =
    "IS 3650:1981에 따른 조합 측면 절단 펜치 BIS 인증 취득. 인도 BIS 인증 절차, 서류, 시험, 비용 및 일정.";
  const ogDescription =
    "IS 3650:1981에 따른 조합 측면 절단 펜치 BIS 인증 완벽 가이드. 절차, 비용, 서류, 시험 및 BIS 라이선스 혜택.";
  const twitterDescription =
    "IS 3650:1981에 따른 조합 측면 절단 펜치 BIS 인증 신청. 인도 BIS 절차, 서류, 시험, 수수료 및 일정.";
  const metaKeywords =
    "조합 측면 절단 펜치 BIS 인증, 조합 측면 절단 펜치 BIS 라이선스, IS 3650:1981, 조합 측면 절단 펜치 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/johab-cheokmyeon-jeoldan-penchi-is-3650";
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
                    조합 측면 절단 펜치 BIS 인증 – IS 3650:1981
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
          조합 측면 절단 펜치 BIS 인증 – IS 3650:1981 완벽 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="조합 측면 절단 펜치 BIS 라이선스"
            alt="조합 측면 절단 펜치 BIS 인증 - IS 3650:1981 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          조합 측면 절단 펜치는 전기 작업, 기계 정비, 건설, 제조 현장, 작업장, 자동차 정비, 가정용 수리 등에서 가장 많이 사용되는 수공구 중 하나입니다. 집게, 굽히기, 비틀기, 전선 절단 등 여러 기능을 수행하도록 설계되어 있습니다. 금속선, 전선, 소형 부품 절단에 자주 사용되므로 저품질 펜치는 공구 파손, 감전 위험, 손 부상, 심각한 작업장 사고를 일으킬 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          안전, 내구성, 균일한 품질을 보장하기 위해 인도 정부는 수공구에 대한 인도 표준 준수를 의무화하고 있습니다. IS 3650:1981에 따른 조합 측면 절단 펜치 BIS 인증 취득은 인도에서 이 공구를 판매하는 제조업체 및 수입업체에게 법적·품질상 중요한 요건입니다. 유효한 BIS 인증은 제품이 기계적 강도, 절단 효율, 재질 경도, 전반적인 안전 성능에 대해 시험되었음을 확인합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 상세 제품 페이지는 조합 측면 절단 펜치 BIS 라이선스에 대한 완전한 이해를 원하는 제조업체, 해외 제조업체, 수입업체, 무역업체, 유통업체, 하드웨어 브랜드, 이커머스 판매자, 규정 준수 담당자를 위해 제작되었으며, 인도 BIS 인증 절차, 시험 요건, 서류, 비용, 일정, 벌칙, 혜택을 포함합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증이란?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증은 인도 표준화·인증·품질 보증의 국가 기관인 인도표준국(Bureau of Indian Standards)이 관할하는 제품 적합성 평가 제도입니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 증명서의 의미
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 증명서의 의미는 BIS가 발급한 공식 승인을 말하며, 제품이 해당 인도 규격(IS)에 적합하고 관리된 품질 시스템 하에서 제조되었음을 확인합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증의 주요 목적은 다음과 같습니다.
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>불안전한 제품으로부터 소비자 보호</li>
          <li>일관된 제품 품질 확보</li>
          <li>규제 집행 지원</li>
          <li>인도 산업의 표준화 촉진</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI 마크 설명
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ISI 마크로 널리 알려진 BIS 인증 마크는 신뢰와 적합의 상징입니다. 조합 측면 절단 펜치의 경우 ISI 마크는 다음을 나타냅니다.
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공구가 IS 3650:1981 요건을 충족함</li>
          <li>기계적·절단 성능이 검증됨</li>
          <li>제품이 인도에서 판매되도록 법적으로 승인됨</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          조합 측면 절단 펜치에 적용되는 BIS 표준
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – 조합 펜치 규격
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 제품에 적용되는 인도 규격은 IS 3650:1981로, 집게 및 절단 용도로 사용되는 측면 절단 날이 있는 조합 펜치의 요건을 규정합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 3650:1981 적용 범위
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          본 규격은 다음을 다룹니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>측면 절단 날이 있는 조합 펜치</li>
          <li>치수, 형상 및 마무리 요건</li>
          <li>재질 품질 및 열처리</li>
          <li>기계적 강도 및 절단 성능</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          안전, 성능 및 시험 목적
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 3650:1981은 다음을 보장하도록 설계되었습니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>펜치가 충분한 절단 능력을 갖춤</li>
          <li>집게와 절단 날이 깨지거나 변형되지 않음</li>
          <li>손잡이가 해당 시 안전한 그립과 절연 제공</li>
          <li>일반 작업 조건에서 공구가 안정적으로 작동함</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          준수 대상
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 내 조합 측면 절단 펜치 제조업체</li>
          <li>수입업체 및 유통업체</li>
          <li>인도 시장에 공급하는 해외 제조업체</li>
          <li>자체 브랜드로 펜치를 판매하는 브랜드</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          조합 측면 절단 펜치에 BIS 인증이 필수인 이유
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          소비자 안전 위험
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          규격 미달 펜치는 다음을 유발할 수 있습니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>절단 중 갑작스러운 파손</li>
          <li>미끄러짐 및 손 부상</li>
          <li>전기 용도에서의 감전 위험</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          정부 및 규제 준수
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 표준 및 BIS 고시에 따라 IS 3650:1981에 포함되는 조합 펜치와 같은 수공구는 인도에서 판매되기 전에 BIS 인증 요건을 충족해야 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 영향
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          비인증 펜치 판매 또는 수입은 다음으로 이어질 수 있습니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>당국에 의한 제품 압수</li>
          <li>재정적 벌금</li>
          <li>무역 라이선스 취소</li>
          <li>BIS법에 따른 법적 소추</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          시장 및 브랜드 혜택
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          조합 측면 절단 펜치 BIS 라이선스는 브랜드가 다음을 하는 데 도움이 됩니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>구매자 및 수급업체와의 신뢰 구축</li>
          <li>정부 및 PSU 입찰 자격</li>
          <li>기존 하드웨어 브랜드와 경쟁</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          조합 측면 절단 펜치 BIS 인증 단계별 절차
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          적용 여부 및 규격 확인
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          첫 단계는 제품이 다음임을 확인하는 것입니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>조합 측면 절단 펜치에 해당함</li>
          <li>IS 3650:1981 적용 대상임</li>
          <li>크기 및 용도 측면에서 규격 적용 범위와 일치함</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 온라인 신청 절차
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 다음을 수행해야 합니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 포털에 등록</li>
          <li>제품 규격에서 IS 3650:1981 선택</li>
          <li>BIS 신청서 작성</li>
          <li>필요 서류 모두 업로드</li>
          <li>해당 수수료 납부</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          이 단계는 일반적으로 BIS 온라인 신청 또는 BIS 증명서 등록이라고 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 라이선스 수수료 및 비용 구조
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증 비용에는 일반적으로 다음이 포함됩니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 및 처리 수수료</li>
          <li>제품 시험 비용</li>
          <li>공장 검사 비용</li>
          <li>라이선스 및 마킹 수수료</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증 총 비용은 다음에 따라 달라집니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>변형 수</li>
          <li>시험 복잡도</li>
          <li>공장 위치</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          제품 샘플 시험 (IS 3650:1981 준수)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          샘플은 BIS 인정 시험소에서 다음에 대해 시험됩니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>절단 날 경도</li>
          <li>절단 성능</li>
          <li>기계적 강도</li>
          <li>치수 정확도</li>
          <li>표면 마무리 및 제작</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          공장 검사 및 감사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 담당관이 공장 감사를 실시하여 다음을 확인합니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조 공정</li>
          <li>열처리 및 마무리 작업</li>
          <li>품질 관리 체계</li>
          <li>시험 및 검사 시설</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 라이선스 및 ISI 마크 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          시험 및 검사가 성공한 후:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS가 인도표준국 라이선스를 발급함</li>
          <li>제조업체는 승인된 펜치에 ISI 마크 사용이 허가됨</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          인증 후 준수
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          승인 후 요건에는 다음이 포함됩니다.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>감시 검사</li>
          <li>시장 샘플 시험</li>
          <li>적시 라이선스 갱신</li>
          <li>IS 3650:1981 지속 준수</li>
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
          <li>공장 등록 증명서</li>
          <li>제조 공정 흐름도</li>
          <li>기계 및 시험 장비 목록</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>회사 설립 증명서</li>
          <li>GST 등록</li>
          <li>상표 사용 허가(해당 시)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          기술 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 도면 및 규격서</li>
          <li>원자재 세부사항</li>
          <li>열처리 및 QC 계획</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 신청 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 신청서</li>
          <li>시험 요청 세부사항</li>
          <li>선언 및 서약서</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이는 통칭 BIS 증명서 서류 또는 BIS 인증 서류로 알려져 있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 3650:1981에 따른 시험 요건
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          필수 시험에는 다음이 포함됩니다.
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  조항
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  요건
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  제조
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  제작 및 마무리
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  보존 및 포장
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  치수
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  경도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  절연(절연 시험 제외)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  절연 시험
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  절단 시험
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  튜브 그립 시험
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  충격 시험
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  비틀림 시험
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  핸들 하중 시험
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  굽힘 시험
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          모든 시험은 BIS 인정 시험소에서만 수행해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          흔한 과제 및 예방 방법
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          흔한 문제
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>경도 또는 절단 시험 불합격</li>
          <li>부적절한 열처리</li>
          <li>불량한 표면 마무리</li>
          <li>불완전한 서류</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          모범 사례
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>사내 사전 시험 실시</li>
          <li>적절한 열처리 절차 준수</li>
          <li>로트별 품질 기록 유지</li>
          <li>전문 BIS 컨설팅 지원 활용</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          제조업체 및 수입업체를 위한 BIS 인증 혜택
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 규정 완전 준수</li>
          <li>벌칙 및 압수로부터 보호</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          상업적 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>유통업체 및 수급업체의 수용</li>
          <li>대량 및 기관 주문 자격</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          브랜딩 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI 마크가 브랜드 신뢰도 향상</li>
          <li>비조직 공급업체와의 차별화</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          시장 확대
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>조직화된 하드웨어 소매 체인 진입</li>
          <li>수출 중심 사업에서 수용도 증가</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          미준수 시 벌칙
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          미준수 시 다음으로 이어질 수 있습니다.
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>과중한 벌금</li>
          <li>제품 압수</li>
          <li>사업 중단</li>
          <li>BIS법에 따른 법적 조치</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          조합 측면 절단 펜치 BIS 인증이 필요한 대상
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>수입업체</li>
          <li>해외 제조업체(인도 대리인 보유 시)</li>
          <li>자체 브랜드로 판매하는 무역업체</li>
          <li>펜치를 등록하는 이커머스 판매자</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 3650:1981에 따른 조합 측면 절단 펜치 BIS 증명서 취득은 인도에서 이 공구를 판매하기 위한 중요한 법적·품질 요건입니다. 조합 측면 절단 펜치 BIS 인증은 제품 안전, 일관된 성능, 규제 준수를 보장하고, BIS 라이선스는 브랜드 신뢰도와 시장 수용을 높입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체, 수입업체, 판매자에게 적시 준수는 벌칙을 피할 뿐 아니라 더 큰 시장과 장기 사업 성장으로의 문을 열어 줍니다. 전문가의 안내로 BIS 인증 절차는 더 원활하고 빠르며 인도 표준에 완전히 부합합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          자주 묻는 질문 – 조합 측면 절단 펜치 BIS 인증
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. 조합 측면 절단 펜치에 BIS 인증이 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인도에서는 IS 3650:1981 준수가 의무입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. BIS 증명서의 정식 명칭은 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              인도표준국 증명서(Bureau of Indian Standards Certificate).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. BIS 인증 절차는 얼마나 걸리나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              일반적으로 30~60 영업일입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. BIS 증명서 비용은 얼마인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              비용은 시험 범위 및 제품 변형에 따라 다릅니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. 수입업체도 BIS 인증을 신청할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 제조업체의 적절한 위임이 있으면 신청할 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. ISI 마크는 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인증 후 ISI 마킹이 의무입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. 해외 제조업체도 BIS 인증을 받을 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인도 대리인을 통해 받을 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. IS 3650:1981에 필요한 시험은 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              경도, 절단 성능, 강도, 치수 시험입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. 공장 검사는 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, BIS가 공장 감사를 실시합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. 여러 크기를 하나의 라이선스로 포함할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 시험 및 승인 대상입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. 비인증 펜치를 판매하면 어떻게 되나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              벌칙, 압수, 법적 조치가 있을 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. BIS 온라인 신청이 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 신청은 온라인으로만 제출됩니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. BIS 라이선스 갱신이 필요한가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 라이선스는 정기적으로 갱신해야 합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. 컨설턴트가 승인 지연을 줄일 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 전문 컨설턴트가 오류와 반려를 피하는 데 도움이 됩니다.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="조합 측면 절단 펜치 BIS 증명서 - IS 3650:1981 PDF"
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
              서비스 안내
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
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              해외 제조용 BIS 마크(ISI 라이선스)
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
              EPR 증명서 인증
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
              LMPC 증명서 인증
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
              BIS 등록 증명서
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
              인도 제조용 ISI 마크(BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
