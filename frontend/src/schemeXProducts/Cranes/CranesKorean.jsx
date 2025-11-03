import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentKorean from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentKorean";
import ServiceAuthorKorean from "@/components/manual/ServiceAuthor/ServiceAuthorKorean";
import { ServicesKorean } from "../PumpsAndLiquidElevators/PumpsAndLiquidElevatorsKorean";
import FooterKorean from "@/components/manual/Footer/FooterKorean";

const CranesKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>크레인용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="인도 표준국(BIS)은 모든 유형의 크레인 및 그 조립품, 하위 조립품, 구성 요소에 대한 의무 Scheme X 인증을 도입했습니다."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="크레인용 BIS 인증, 크레인용 BIS Scheme X 인증, 크레인용 Scheme X 인증, 크레인용 BIS, 크레인용 OTR"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta
          name="publisher"
          content="Dhruv Aggarwal, Sun Certification India 운영 책임자"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="인도 크레인용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 크레인용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/ko/bis-seukim-x-injeung-keurein"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 크레인용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 크레인용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/ko/bis-seukim-x-injeung-keurein"
        />
      </Helmet>

      <CranesKoreanBreadcrumb />
      <CranesKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default CranesKorean;

const CranesKoreanBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">홈</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/SchemeX-Products">SchemeX 제품</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>크레인용 BIS Scheme X</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CranesKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CranesKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

// ... existing code ...

const CranesKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          크레인용 BIS Scheme X
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
            alt="크레인용 BIS Scheme X 인증"
            title="크레인용 BIS Scheme X 라이센스"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          크레인은 주로 제조, 건설, 생산 및 채광에서 자재를 들어 올리고 운송하는
          데 사용됩니다. 그 기능이 안전에 중요할 수 있으므로 자격이 없거나 품질이
          나쁜 크레인은 미끄러짐 및 낙상, 장비 오작동 또는 비용이 많이 드는 손실을
          초래할 수 있습니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 위험을 고려하여 인도 표준국(BIS)은 Scheme – X 인증 하에 크레인용
          BIS 인증을 의무화했습니다. 이는 인도에서 사용되는 크레인이 안전하고
          신뢰할 수 있으며 효율적이며 세계적 수준의 품질임을 보장합니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 블로그에서는 크레인용 BIS Scheme X 등록의 중요성, 크레인용 OTR의
          법적 측면, 그리고 크레인용 BIS 라이센스를 얻고 크레인용 BIS 표준 마크를
          표시하는 방법에 대해 안내합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          크레인에 대한 BIS가 중요한 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          크레인은 다음에서 광범위하게 사용됩니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>건물 및 인프라 작업</li>
          <li>해양 항구, 선박 조선소 및 기타 물류 센터</li>
          <li>공장 및 조립 공장</li>
          <li>금속 채광 및 무거운 자재 취급</li>
          <li>발전소 및 기타 산업</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          크레인용 BIS가 없으면 인증되지 않은 장비로 인해 다음이 발생할 수 있습니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>기계적 고장 및 사고</li>
          <li>가용성 감소 및 유지보수 비용 증가</li>
          <li>정부 프로젝트 자격 상실</li>
          <li>근로자 및 인프라가 안전 위험에 노출됨</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          크레인용 BIS 마크는 제품이 인도의 강력한 품질 및 안전 규범을 준수한다는
          점에 대해 소비자와 규제 당국 모두에게 신뢰를 제공합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          크레인용 BIS Scheme X 인증이란 무엇입니까?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 하에서 크레인용 Scheme X 인증은 중요한 기계에 대한 제품 인증을
          의무화하는 BIS 적합성 평가 규정 2018에 따라 의무적입니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          크레인용 Scheme X의 주요 특징:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>국내 및 외국 제조업체 모두에게 필요</li>
          <li>
            모든 주요 범주의 크레인에 적용되며 인도 표준에 따라 고시됨
          </li>
          <li>
            제품 테스트, 공장 감사 및 지속적인 준수 평가가 의무화됨
          </li>
          <li>
            인증 제품에 크레인용 BIS 마크 사용을 위한 라이센스 제공
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          크레인용 BIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부에서 2024년에 고시한 크레인용 Omnibus Technical Regulation
          (OTR)은 인증을 의무화하려고 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          마감일: 모든 크레인 제조업체/수입업체는 2026년 9월 1일까지 최신으로
          Scheme X 하에서 크레인용 BIS 라이센스를 받아야 합니다. 그 이후 인증되지
          않은 크레인은 인도에서 판매, 수입 또는 공공 입찰에 사용될 수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          크레인에 대한 BIS 인증의 장점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            향상된 안전성: 인증된 크레인은 기계적 고장과 사고를 최소화합니다.
          </li>
          <li>
            시장 우위: 정부 기관 및 기업은 전자 입찰 및 대규모 프로젝트에서
            BIS 인증 크레인을 선호합니다.
          </li>
          <li>
            소비자 및 계약자 신뢰: 크레인용 BIS 마크는 품질과 신뢰성에 대한
            신뢰를 만듭니다.
          </li>
          <li>
            글로벌 시장 진입: 해외 제조업체의 경우 크레인용 BIS 라이센스는
            규제된 인도 시장에 쉽게 진입할 수 있게 해줍니다.
          </li>
          <li>
            인도 법률 준수: 벌금, 몰수 및 정부 계약에서 제외되는 것을 방지합니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Cranes Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scheme X 인증에 포함된 크레인 유형
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Scheme X 인증 하에 나열된 크레인은 다음과 같은 다양한 유형입니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>타워 크레인</li>
          <li>모바일 크레인</li>
          <li>갠트리 및 골리앗 크레인</li>
          <li>OH/BR 크레인</li>
          <li>크롤러 크레인</li>
          <li>짚 크레인</li>
          <li>플로팅 크레인</li>
          <li>산업용 및 작업장 크레인</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          각 변형은 동력 구동 모바일 크레인 사양에 대한 IS 4573:2020 및 로더
          크레인에 대한 안전 요구사항인 IS/ISO 15442:2012와 같은 적절한 인도
          표준(IS 코드)을 준수해야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          장비 유형은 설계, 하중 운반 능력, 안전 및 성능에 대한 관련 인도 표준(IS
          코드)을 준수해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          크레인용 BIS 라이센스 취득 절차
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            관련 IS 표준 식별: 크레인 유형에 적용 가능한 인도 표준을 식별하세요.
          </li>
          <li>
            BIS 인정 실험실에서 테스트: 안전 및 효능 테스트를 수행하는 것이
            의무입니다.
          </li>
          <li>
            공장 검사: BIS는 생산 현장 및 품질 시스템에 대한 검사를 수행합니다.
          </li>
          <li>
            신청 및 문서화: 기술 보고서, 테스트 결과 및 품질 매뉴얼을 제시하세요.
          </li>
          <li>
            크레인용 BIS 라이센스: 승인되면 제조업체는 크레인용 BIS 마크를 적용할
            권한을 갖습니다.
          </li>
          <li>
            지속적인 준수: 정기적인 감사 및 검사가 지속적인 준수를 보장합니다.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수에 대한 처벌
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          크레인용 OTR을 따르지 않고 2026년 9월 1일까지 크레인용 BIS 인증을 받지
          않으면 어떻게 됩니까?
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>인증되지 않은 크레인의 판매 및 수입 금지</li>
          <li>제품 압수 및 막대한 벌금</li>
          <li>정부 및 공공 부문 기업 입찰에서 실격</li>
          <li>장기적인 부정적인 브랜드 영향</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X 인증의 시행은 안전성과 신뢰성을 향상시키고 인도에서 공통
          산업 표준을 제공하는 중요한 이정표가 될 것입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          크레인 제조업체, 수입업체, 수출업체의 경우 크레인용 BIS 라이센스를
          보유하는 것이 중요하며, 표준을 준수하고 소비자 신뢰를 구축하며 BIS 또는
          인도 정부와의 잠재적 충돌을 피하기 위해 크레인용 BIS 등록을 위한 온라인
          신청 포털을 통해 동일한 신청을 할 수 있습니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};
