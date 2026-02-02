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

const BISCertificateCompsitSyntheticFibreKorean = () => {
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

export default BISCertificateCompsitSyntheticFibreKorean;

const MetaTags = () => {
  const title =
    "복합 합성 섬유 로프용 BIS 인증서 | IS 14928:2001 BIS 라이선스";
  const ogTitle =
    "복합 합성 섬유 로프용 BIS 인증 – IS 14928:2001 가이드";
  const twitterTitle =
    "복합 합성 섬유 로프용 BIS 라이선스 | IS 14928:2001";
  const metaDescription =
    "IS 14928:2001에 따른 복합 합성 섬유 로프용 BIS 인증서를 받으세요. 인도에서 BIS 인증을 위한 프로세스, 서류, 테스트, 비용 및 시간표.";
  const ogDescription =
    "IS 14928:2001에 따른 복합 합성 섬유 로프용 BIS 인증에 대한 완전한 가이드. 프로세스, 비용, 서류, 테스트 및 BIS 라이선스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 14928:2001에 따른 복합 합성 섬유 로프용 BIS 인증서를 신청하세요. 인도에서 BIS 프로세스, 서류, 테스트, 수수료 및 시간표를 배우세요.";
  const metaKeywords =
    "복합 합성 섬유 로프용 BIS 인증서, 복합 합성 섬유 로프용 BIS 라이선스, IS 14928:2001, 복합 합성 섬유 로프용 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928";
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
                    복합 합성 섬유 로프용 BIS 인증서 – IS 14928:2001
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
          복합 합성 섬유 로프용 BIS 인증 – IS 14928:2001 완전 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCompositeSyntheticFibreRopes.png"
            title="복합 합성 섬유 로프용 BIS 라이선스"
            alt="복합 합성 섬유 로프용 BIS 인증서 - IS 14928:2001 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          복합 합성 섬유 로프는 해양 작업, 항구 및 부두, 해외 설치, 어업, 선박, 건설, 농업 및 중량물 취급 분야에서 널리 사용됩니다. 이러한 로프는 폴리에스터, 폴리프로필렌, 나일론 또는 기타 인조 섬유와 같은 두 개 이상의 합성 섬유를 결합하여 설계되며, 강도, 유연성, 마모 저항성, 부력 및 내구성의 균형 잡힌 조합을 제공합니다. 복합 합성 섬유 로프는 하중 지지, 견인, 계류, 리프팅 및 안전 중요 응용 분야에서 자주 사용되므로, 사소한 품질 결함으로도 심각한 사고, 장비 손상 또는 운영 실패로 이어질 수 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 위험을 통제하고 일관된 품질을 보장하기 위해, 인도 정부는 적용 가능한 인도 표준 IS 14928:2001에 따라 복합 합성 섬유 로프용 BIS 인증을 의무화하고 있습니다. 복합 합성 섬유 로프용 유효한 BIS 인증서는 제조업체 및 수입업체가 해당 제품을 인도 시장에서 제조, 판매, 유통 또는 수입하기 전에 필요한 법적 요구사항입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 페이지는 IS 14928:2001의 범위, 안전 의도, 테스트 요구사항, 서류화, 비용 고려사항 및 단계별 인증 프로세스를 포함하여 복합 합성 섬유 로프용 BIS 인증에 대한 완전한 규정 준수 중심 가이드 역할을 합니다. 이는 인도에서 복합 합성 섬유 로프용 BIS 라이선스/BIS 라이선스를 얻는 방법에 대한 명확한 이해를 원하는 제조업체, 수입업체, 해외 제조업체, 거래자 및 전자상거래 판매자를 위해 설계되었습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증이란 무엇인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증은 BIS 법 2016에 따라 운영되는 인도 표준국(BIS)에서 운영하는 제품 적합성 평가 시스템입니다. BIS는 인도 표준 개발, 제품 인증 및 인도에서 판매되는 상품이 정의된 안전, 품질 및 성능 벤치마크를 충족하도록 보장하는 책임을 집니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증서 의미
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증서 의미는 제품이 관련 인도 표준을 준수함을 확인하는 BIS가 부여하는 공식 승인을 나타냅니다. 인증되면 제조업체는 제품 및 포장에 ISI 마크로 일반적으로 알려진 BIS 인증 마크를 사용할 수 있는 권한을 부여받습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI 마크 설명
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ISI 마크는 다음을 나타냅니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품이 BIS 인정 실험실에서 테스트되었습니다</li>
          <li>제조 시설이 BIS 관계자에 의해 평가되었습니다</li>
          <li>지속적인 품질 관리 및 감시 메커니즘이 마련되어 있습니다</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS가 존재하는 이유
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS는 다음을 위해 존재합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>소비자 및 근로자 안전 보호</li>
          <li>저품질 제품 유통 방지</li>
          <li>산업 상품의 균일성 및 신뢰성 보장</li>
          <li>규제 집행 및 공정한 거래 강화</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          위험하고 고하중 조건에서 자주 사용되는 복합 합성 섬유 로프의 경우 BIS 인증은 사고 예방 및 품질 보증에서 중요한 역할을 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          복합 합성 섬유 로프에 적용되는 BIS 표준
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 제품에 적용되는 인도 표준은 다음과 같습니다:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14928:2001</strong> – 복합 합성 섬유 로프
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 표준은 복합 합성 섬유 로프의 재료, 구조, 치수, 성능 특성, 표시, 샘플링 및 테스트 요구사항을 명시합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 14928:2001의 범위
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001은 다음을 포함합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>다양한 합성 섬유의 조합을 사용하여 제조된 로프</li>
          <li>연선 및 편조 구조와 같은 다양한 로프 구조</li>
          <li>해양, 어업, 산업 및 일반 목적 응용을 위한 로프</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          안전, 성능 및 테스트 의도
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          표준은 다음을 보장하는 것을 목표로 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>적절한 파단 강도 및 하중 지지 능력</li>
          <li>일관된 직경 및 구조 품질</li>
          <li>마모, 습기 및 환경적 열화에 대한 저항성</li>
          <li>서비스 수명 전체에 걸친 예측 가능하고 안전한 성능</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          누가 준수해야 하는가
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001 준수는 다음에 대해 의무적입니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>복합 합성 섬유 로프의 인도 제조업체</li>
          <li>인도 시장에서 이러한 로프를 공급하는 수입업체</li>
          <li>인도 대리인을 통해 판매하는 해외 제조업체</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          복합 합성 섬유 로프에 BIS 인증이 의무적인 이유
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 소비자 및 근로자 안전 위험
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          복합 합성 섬유 로프는 다음에 사용됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>계류 및 견인 작업</li>
          <li>중량물 리프팅 및 고정</li>
          <li>어업 네트 및 해양 장비</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          로프 고장은 부상, 생명 손실, 선박 손상 및 프로젝트 지연을 유발할 수 있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 정부 규정 준수
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 통지 및 품질 관리 요구사항에 따라 IS 14928:2001에 포함된 제품은 BIS 인증 없이는 합법적으로 판매할 수 없습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 법적 영향
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          비준수는 다음을 초래할 수 있습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>비인증 제품 압수</li>
          <li>BIS 법에 따른 재정적 벌금</li>
          <li>기소 및 법적 조치</li>
          <li>수입 통관 거부</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. 시장 및 브랜드 혜택
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          복합 합성 섬유 로프용 BIS 라이선스는 다음을 향상시킵니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>고객 신뢰</li>
          <li>정부 및 PSU 입찰 자격</li>
          <li>국내 및 수출 시장에서의 브랜드 신뢰성</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          복합 합성 섬유 로프용 단계별 BIS 인증 프로세스
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          적용성 및 표준 식별
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          프로세스는 제품이 IS 14928:2001에 해당하는지 확인하는 것으로 시작합니다. 이는 다음을 식별하는 것을 포함합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>섬유 구성 및 혼합</li>
          <li>로프 구조 유형</li>
          <li>직경 범위 및 의도된 응용</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          정확한 식별은 테스트 오류 및 신청 거부를 방지합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 온라인 신청 프로세스
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체는 다음을 제출하여 BIS 포털을 통해 BIS 온라인으로 신청해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 세부 정보</li>
          <li>공장 및 제조 정보</li>
          <li>품질 관리 장치</li>
          <li>테스트 요청 세부 정보</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          올바르게 작성된 BIS 신청서는 적시 처리에 중요합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          수수료 및 비용 구조
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증서 비용은 다음을 포함합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 수수료</li>
          <li>BIS 인정 실험실에서의 테스트 요금</li>
          <li>공장 검사 수수료</li>
          <li>연간 라이선스 및 표시 수수료</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          전체 BIS 인증 비용은 로프 구조, 크기 범위 및 테스트 복잡성에 따라 다릅니다. 적절한 계획은 BIS 인증 비용 및 BIS 라이선스 비용을 효과적으로 관리하는 데 도움이 됩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          제품 샘플 테스트 (IS 14928:2001에 따라)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          제품 샘플은 표준의 모든 요구사항에 대한 준수를 확인하기 위해 BIS 인정 실험실에서 테스트됩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          공장 검사 및 감사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 관계자는 다음을 확인하기 위해 공장 감사를 수행합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조 프로세스 제어</li>
          <li>원자재 취급</li>
          <li>내부 테스트 시설</li>
          <li>품질 보증 시스템 및 기록</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 라이선스 및 ISI 마크 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          모든 요구사항이 충족되면 BIS는 인도 표준국 라이선스를 부여하여 제조업체가 복합 합성 섬유 로프에 ISI 마크를 사용할 수 있도록 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          인증 후 규정 준수
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          인증 후 라이선스 수여자는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>일관된 제품 품질 유지</li>
          <li>주기적인 감시 감사 허용</li>
          <li>재료, 프로세스 또는 설계의 변경 사항을 BIS에 알림</li>
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
          <li>제조 프로세스 흐름 차트</li>
          <li>기계 및 테스트 장비 목록</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>회사 설립 증명서</li>
          <li>GST 등록</li>
          <li>서명자 위임장</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          기술 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 사양 및 도면</li>
          <li>원자재 사양</li>
          <li>내부 테스트 절차</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 신청 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>올바르게 작성된 BIS 신청서</li>
          <li>테스트 요청 편지</li>
          <li>표시 및 라벨링 세부 정보</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 서류들이 모여 필수적인 BIS 인증 서류를 구성합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 14928:2001에 따른 테스트 요구사항
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          필수 테스트는 다음을 포함합니다:
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
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  구조
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  구조
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  처리
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  로프
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  직경
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  질량
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  파단 강도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  길이
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          모든 테스트는 BIS 인정 실험실에서만 수행되어야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          일반적인 문제 및 피하는 방법
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>잘못된 제품 분류</strong>
            <br />
            해결책: 인증 전 기술 평가를 수행하세요.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>테스트 실패</strong>
            <br />
            해결책: 원자재 품질 및 프로세스 제어를 IS 14928:2001에 맞추세요.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>불완전한 서류화</strong>
            <br />
            해결책: BIS 특정 서류를 신중하게 준비하고 제출 전에 확인하세요.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>감사 비준수</strong>
            <br />
            해결책: 적절한 기록, 교정 및 내부 품질 검사를 유지하세요.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          제조업체 및 수입업체를 위한 BIS 인증의 혜택
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 규정 준수</li>
          <li>원활한 세관 통관</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          상업적 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>정부 및 기관 입찰 자격</li>
          <li>구매자 수용성 향상</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          브랜딩 혜택
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 마크의 공인된 사용</li>
          <li>향상된 신뢰 및 시장 신뢰성</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          시장 확장
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>규제된 부문 진입</li>
          <li>장기적인 사업 성장</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          비준수에 대한 벌칙
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증을 받지 않으면 다음이 발생할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>과도한 재정적 벌금</li>
          <li>제품 압수 또는 리콜</li>
          <li>수입 금지</li>
          <li>법적 기소</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          복합 합성 섬유 로프에 BIS 인증이 필요한 사람은 누구인가요?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>수입업체</li>
          <li>인도에 공급하는 해외 제조업체</li>
          <li>거래자 및 유통업체</li>
          <li>전자상거래 판매자</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도 시장에서 복합 합성 섬유 로프를 배치하는 모든 기관은 BIS 규정 준수를 보장해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001에 따른 복합 합성 섬유 로프용 BIS 인증서를 얻는 것은 법적 의무이자 중요한 안전 요구사항입니다. 복합 합성 섬유 로프용 유효한 BIS 인증/BIS 라이선스는 규제 준수를 보장하고, 최종 사용자를 보호하며, 시장 신뢰성을 향상시킵니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체 및 수입업체에게 BIS 인증은 단순한 승인이 아닙니다—그것은 신뢰, 안전 및 지속 가능한 사업 성장에 관한 것입니다. 적절한 기술적 준비와 전문적인 지도를 통해 인도에서 BIS 인증 프로세스는 원활하고 효율적으로 완료될 수 있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          자주 묻는 질문 – 복합 합성 섬유 로프용 BIS 인증
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. BIS의 전체 이름은 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              인도 표준국.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. 복합 합성 섬유 로프에 BIS 인증이 의무적인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, IS 14928:2001에 따릅니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. BIS 인증서의 전체 이름은 무엇인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              인도 표준국 인증서.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. BIS 인증서를 온라인으로 신청할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 공식 포털을 통해 BIS 온라인으로 신청할 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. BIS 인증에는 얼마나 걸리나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              일반적으로 1~2개월.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. BIS 인증 비용은 얼마인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              테스트 및 감사 범위에 따라 다릅니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. 수입업체에게 BIS 인증이 필요한가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              수입업체는 제품이 인증되었는지 확인해야 합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. 해외 제조업체가 신청할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인도 대리인을 통해.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. BIS 등록과 BIS 라이선스가 동일한가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              아니요, 섬유 로프에는 BIS 라이선스가 필요합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. 제품이 테스트에 실패하면 어떻게 되나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              시정 조치 및 재테스트가 필요합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. ISI 마킹이 의무적인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 인증 후.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. BIS 라이선스의 유효 기간은 얼마인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              일반적으로 1~2년, 갱신 가능.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. 감시 감사가 의무적인가요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, BIS는 주기적인 감사를 수행합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. 나중에 라이선스 범위를 확장할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              네, 범위 확장 승인을 통해.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. 비인증 제품을 온라인으로 판매할 수 있나요?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              아니요, 전자상거래 판매도 BIS 규정 준수가 필요합니다.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-14928-2001-Sun-Certifications-India.pdf"
            title="복합 합성 섬유 로프용 BIS 인증서 - IS 14928:2001 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
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
              해외 제조업체용 BIS 마크 (ISI 라이선스)
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
              인도 제조업체용 ISI 마크 (BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
