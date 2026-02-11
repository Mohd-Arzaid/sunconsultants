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

const BISCertificationFibreRopesKorean = () => {
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

export default BISCertificationFibreRopesKorean;

const MetaTags = () => {
  const title =
    "섬유 로프 폴리에틸렌 BIS 인증서 | IS 8674:2013 BIS 라이선스";
  const ogTitle =
    "섬유 로프 폴리에틸렌 BIS 인증 – IS 8674:2013 가이드";
  const twitterTitle =
    "섬유 로프 폴리에틸렌 BIS 라이선스 | IS 8674:2013";
  const metaDescription =
    "IS 8674:2013에 따른 섬유 로프 폴리에틸렌 BIS 인증서 취득. 인도 BIS 인증 절차, 서류, 시험, 비용 및 일정.";
  const ogDescription =
    "IS 8674:2013에 따른 섬유 로프 폴리에틸렌 BIS 인증 완벽 가이드. 절차, 비용, 서류, 시험 및 BIS 라이선스 혜택 안내.";
  const twitterDescription =
    "IS 8674:2013에 따른 섬유 로프 폴리에틸렌 BIS 인증서 신청. 인도 BIS 절차, 서류, 시험, 수수료 및 일정 확인.";
  const metaKeywords =
    "섬유 로프 폴리에틸렌 BIS 인증서, 섬유 로프 폴리에틸렌 BIS 라이선스, IS 8674:2013, 섬유 로프 폴리에틸렌 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/seomyu-ropeu-pollyetillen-8674";
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
                    섬유 로프 폴리에틸렌 BIS 인증서 – IS 8674:2013
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
          섬유 로프 폴리에틸렌 BIS 인증 – IS 8674:2013 완벽 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFibreRopesPolyethylene.png"
            title="섬유 로프 폴리에틸렌 BIS 라이선스"
            alt="섬유 로프 폴리에틸렌 BIS 인증서 - IS 8674:2013 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          폴리에틸렌 섬유 로프는 인도 전역에서 해상 작업, 어업, 항만, 농업, 건설, 물류, 운송 및 일반 산업 활동에 널리 사용됩니다. 경량이면서 강도 대비 중량 비율이 높고, 습기·화학약품·마모에 강해 가혹한 환경에 적합합니다. 다만 품질 불량이나 부적합한 제조로 인해 섬유 로프가 하중 하에 파단되면 장비 손상부터 중상, 사망에 이르기까지 심각한 결과를 초래할 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          안전성, 균일한 품질, 성능 신뢰성을 확보하기 위해 인도 정부는 IS 8674:2013에 따른 섬유 로프 폴리에틸렌 BIS 인증을 의무화했습니다. 인도 시장에 폴리에틸렌 섬유 로프를 공급하는 제조업체 또는 수입업체는 유효한 섬유 로프 폴리에틸렌 BIS 인증서를 취득해야 합니다. 이 인증이 없으면 해당 제품은 부적합으로 간주되며 법적 제재, 압수 또는 판매 금지 대상이 될 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          본 제품 페이지는 제조업체, 수입업체, 수출업체, 무역업체, 유통업체, 해양 공급업체, 인프라 계약업체, 이커머스 판매업체를 위해 작성되었습니다. 섬유 로프 폴리에틸렌 BIS 인증의 전체 구조, 규격 요구사항, 시험 절차, 서류, 비용, 일정, 적합 책임을 설명합니다. 섬유 로프 폴리에틸렌 BIS 라이선스 취득을 계획 중이라면 본 가이드로 절차를 명확하고 자신 있게 진행할 수 있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증이란?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증은 인도 국가 표준 기관인 인도표준청(BIS)이 관할하는 제품 적합성 평가 제도입니다. BIS는 Bureau of Indian Standards(인도표준청)의 약칭이며, 2016년 BIS법에 따라 설립되었습니다.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증서의 의미
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증서의 의미는 제품이 특정 인도 규격(IS)에 적합하고 안전, 강도, 내구성, 성능에 관한 규정 요건을 충족함을 공식적으로 인정하는 것을 말합니다. BIS 인증 제품은 BIS 인정 시험소에서의 시험과 공장 검사·품질 감사를 통한 평가를 거칩니다.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ISI 마크와 BIS 인증 마크
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 아래에서 인증된 제품에는 BIS 인증 마크(일반적으로 ISI 마크로 알려짐)와 고유 라이선스 번호가 부여됩니다. BIS 마크는 구매자, 검사관, 규제 기관에게 제품이 적용 BIS 규격을 준수함을 보증합니다.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS가 존재하는 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS는 다음 목적으로 존재합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>불안전·부적합 제품으로부터 사용자 보호</li>
          <li>제조의 일관성과 신뢰성 확보</li>
          <li>BIS 고시를 통한 정부 규정 시행</li>
          <li>인도 시장에서의 신뢰, 품질, 공정 거래 촉진</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          섬유 로프 폴리에틸렌 적용 BIS 규격
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 8674:2013 – 인도 규격 설명
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          본 제품에 적용되는 인도 규격은 IS 8674:2013이며, 명칭은 「섬유 로프 — 폴리에틸렌 — 규격」입니다. 이 규격은 일반용 및 산업용 폴리에틸렌 섬유 로프의 요구사항을 정의합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 8674:2013 적용 범위
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          규격은 다음을 다룹니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>폴리에틸렌 섬유 로프의 구조 및 분류</li>
          <li>원자재 요구사항 및 섬유 특성</li>
          <li>로프 직경, 선밀도 및 공차</li>
          <li>최소 파단 하중 및 강도 요구사항</li>
          <li>표시, 라벨링 및 포장 규정</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          안전, 성능 및 시험 목적
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 8674:2013은 폴리에틸렌 섬유 로프가 다음을 충족하도록 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>일정한 인장 강도 제공</li>
          <li>정적·동적 하중 하에서 안정적 성능</li>
          <li>습기, 부패, 화학 노출에 대한 저항</li>
          <li>인양, 견인, 계류, 결속 작업에 안전</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          준수 의무 대상
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 8674:2013 준수는 다음에 의무입니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>폴리에틸렌 섬유 로프 인도 내 제조업체</li>
          <li>인도로 폴리에틸렌 로프를 수입하는 수입업체</li>
          <li>인도 법인을 통해 판매하는 해외 제조업체</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          섬유 로프 폴리에틸렌에 BIS 인증이 의무인 이유
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 소비자 및 작업자 안전 위험
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          폴리에틸렌 섬유 로프는 하중 지지 및 안전 중요 작업에 자주 사용됩니다. 부적합 로프는 갑자기 파단되어 사고, 부상, 장비 손상, 재정적 손실로 이어질 수 있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 정부 적합
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 고시 및 품질 관리 규정에 따라 IS 8674:2013 대상 섬유 로프는 인도에서 판매, 공급 또는 유통 전 BIS 인증을 받아야 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 법적 영향
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증 없이 폴리에틸렌 섬유 로프를 판매하면 다음이 발생할 수 있습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>물품 압수</li>
          <li>금전적 제재</li>
          <li>계약 및 입찰 취소</li>
          <li>2016년 BIS법에 따른 기소</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. 시장 및 브랜드 혜택
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          섬유 로프 폴리에틸렌 BIS 인증서는 시장 수용성을 높이고 구매자 신뢰를 구축하며 정부, 공기업, 해양, 인프라 사업 참여를 가능하게 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          섬유 로프 폴리에틸렌 BIS 인증 절차(단계별)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          적용성 및 규격 확인
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          첫 단계는 로프 구조, 직경 범위, 용도를 포함해 제품이 IS 8674:2013에 해당하는지 확인하는 것입니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 온라인 신청 절차
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 BIS 온라인 신청 포털을 통해 BIS 신청서를 제출해야 합니다. 신청서에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 및 모델 세부사항</li>
          <li>제조 단위 정보</li>
          <li>적용 BIS 규격</li>
          <li>품질 관리 및 시험 세부사항</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          이를 통해 BIS 인증서 등록 절차가 시작됩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          수수료 및 비용 구조
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증 비용에는 일반적으로 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 수수료</li>
          <li>제품 시험 비용</li>
          <li>공장 검사 수수료</li>
          <li>라이선스 수수료</li>
          <li>연간 표시 수수료</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증 총 비용은 로프 종류, 직경 범위, 시험 범위에 따라 다릅니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          제품 샘플 시험(규격에 따른 상세 시험)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          폴리에틸렌 섬유 로프 샘플은 IS 8674:2013에 따라 BIS 인정 시험소에서 엄격히 시험됩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          공장 검사 및 감사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 담당자는 다음을 확인하기 위해 공장 감사를 수행합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조 공정 및 관리</li>
          <li>원자재 검사 절차</li>
          <li>공정 내 품질 검사</li>
          <li>시험 및 교정 시설</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 라이선스 및 ISI 마크 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          시험 및 검사가 성공적으로 완료된 후 BIS는 인도표준청 라이선스를 부여하며, 인증된 폴리에틸렌 섬유 로프에 ISI 마크 사용을 허용합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          인증 후 적합
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          인증 후 라이선스 보유자는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>일관된 품질 유지</li>
          <li>정기 시험 수행</li>
          <li>감시 검사 수용</li>
          <li>BIS 라이선스 정기 갱신</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 8674:2013에 따른 BIS 라이선스 범위
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 라이선스는 다음 용도의 폴리에틸렌 섬유 로프에 적용됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>해상 및 어업 작업</li>
          <li>항만, 선박, 물류</li>
          <li>농업 및 일반 용도</li>
          <li>산업 및 상업용</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          범위는 IS 8674:2013 규격에 적합한 로프로 엄격히 제한됩니다.
        </p>

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
          <li>품질 관리 계획</li>
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
          <li>제품 규격 및 도면</li>
          <li>로프 구조 및 재료 세부사항</li>
          <li>직경 및 파단 하중 데이터</li>
          <li>내부 시험 절차</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 신청 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 신청서</li>
          <li>BIS 인정 시험소 시험 보고서</li>
          <li>서약서 및 선언서</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          위 서류가 BIS 인증 서류의 전체 세트를 구성합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 8674:2013에 따른 시험 요구사항
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          의무 시험에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>직경 및 선밀도 측정</li>
          <li>파단 하중 및 인장 강도 시험</li>
          <li>연신 시험</li>
          <li>구조 및 꼬임 검증</li>
          <li>외관 검사 및 표면 품질</li>
          <li>표시 및 라벨링 적합</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          모든 시험은 BIS 인정 시험소에서만 수행해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          흔한 과제 및 예방 방법
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          원자재 품질 불일치
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          대책: 관리 등급 폴리에틸렌 섬유 및 인정 공급업체를 사용하세요.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          시험 불합격
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          대책: 내부 사전 시험을 수행하고 공정 일관성을 개선하세요.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          서류 오류
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          대책: BIS 제출 전 정확하고 완전한 서류를 준비하세요.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          제조업체·수입업체를 위한 BIS 인증 혜택
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 규정 준수</li>
          <li>제재 및 압수 위험 감소</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          상업적 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>정부, 공기업, 해양 계약 참가 자격</li>
          <li>산업 구매자 수용성 향상</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          브랜딩 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 인증 마크를 통한 신뢰</li>
          <li>브랜드 신뢰도 향상</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          시장 확대
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>규제 국내 시장 및 수출 시장 접근</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          미준수 시 제재
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 요건을 충족하지 않으면 다음이 발생할 수 있습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>과중한 금전적 제재</li>
          <li>부적합 제품 압수</li>
          <li>수입 및 판매 제한</li>
          <li>법적 기소</li>
          <li>영구 시장 진입 금지</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          섬유 로프 폴리에틸렌 BIS 인증이 필요한 대상
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 내 제조업체</li>
          <li>수입업체</li>
          <li>해외 제조업체</li>
          <li>무역업체 및 유통업체</li>
          <li>이커머스 판매업체</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도 시장에 폴리에틸렌 섬유 로프를 공급하는 모든 사업자는 BIS 적합을 확보해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          맺음말
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 8674:2013에 따른 섬유 로프 폴리에틸렌 BIS 인증서 취득은 인도에서 사업을 하는 기업에게 법적 필수 요건이자 전략적 이점입니다. 섬유 로프 폴리에틸렌 BIS 인증은 제품의 안전성, 강도, 신뢰성을 보장하고 사용자를 보호하며 브랜드 신뢰도를 높입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          유효한 섬유 로프 폴리에틸렌 BIS 라이선스를 취득한 제조업체와 수입업체는 규제 시장에 자신 있게 진입하고 고가치 계약에 참여하며 법적 위험을 피할 수 있습니다. 적절한 준비, 정확한 서류, 전문가 안내를 통해 BIS 인증 절차는 원활하고 효율적이며 장기 성장에 매우 유리합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          자주 묻는 질문 – 섬유 로프 폴리에틸렌 BIS 인증
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. 인도에서 폴리에틸렌 섬유 로프에 BIS 인증이 의무인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, IS 8674:2013에 따른 BIS 인증은 의무입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. BIS의 정식 명칭은 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards(인도표준청)입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. BIS 인증 없이 폴리에틸렌 로프를 판매할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              아니요, 비인증 로프의 인도 판매는 불법입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. BIS 인증서 비용은 얼마인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              제품 종류 및 시험 범위에 따라 다릅니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. BIS 인증 절차에 얼마나 걸리나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              일반적으로 6~10주입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. ISI 마크는 의무인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인증 후 ISI 표시는 의무입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. 하나의 라이선스로 여러 로프 직경을 포함할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 적합 및 시험 범위에 따라 가능합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. 공장 검사는 의무인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, BIS가 공장 감사를 수행합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. 스타트업도 BIS 인증을 신청할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 제조 시설이 요건을 충족하면 신청할 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. BIS 인증은 갱신이 필요한가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 정기 갱신이 의무입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. 제품 시험이 불합격하면 어떻게 되나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              시정 조치 및 재시험이 필요합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. BIS 인정 시험소가 필수인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, BIS 승인 시험소만 인정됩니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. 해외 제조업체가 직접 신청할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인도 내 인가 대리인을 통해 신청할 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. 어업용 로프도 이 규격에 포함되나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, IS 8674:2013에 적합하면 포함됩니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. 구매자에게 BIS 인증은 무엇을 의미하나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              안전성, 강도, 일관된 품질을 보장합니다.
            </p>
          </div>
        </div>

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
                alt="BIS 로고"
                title="BIS 로고"
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
              인도 제조용 ISI 마크(BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
