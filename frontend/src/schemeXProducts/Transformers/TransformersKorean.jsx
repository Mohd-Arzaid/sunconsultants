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

const TransformersKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>변압기용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="변압기용 BIS Scheme X 인증은 인도에서 변압기 제조 및 수입을 위한 품질 및 안전 표준을 지정합니다."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="변압기용 BIS 인증, 변압기용 BIS Scheme X 인증, 변압기용 Scheme X 인증, 변압기용 BIS, 변압기용 OTR"
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
          content="인도 변압기용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 변압기용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-seukim-x-injeung-byeonab-gi"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 변압기용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 변압기용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-seukim-x-injeung-byeonab-gi"
        />
      </Helmet>

      <TransformersKoreanBreadcrumb />
      <TransformersKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default TransformersKorean;

const TransformersKoreanBreadcrumb = () => {
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
                <BreadcrumbPage>변압기용 BIS Scheme X 인증</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const TransformersKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <TransformersKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const TransformersKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          변압기용 BIS Scheme X 인증
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-licence-for-Transformers.png"
            alt="변압기용 BIS Scheme X 인증"
            title="변압기용 BIS Scheme X 라이센스"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          변압기는 모든 송전 및 배전 네트워크의 필수 구성 요소입니다. 산업, 상업 또는 유틸리티 운영에서의
          응용 분야와 관계없이 변압기는 그 기능의 중요한 특성 때문에 최고 수준의 안전 및 운영 성능을
          갖춘 장비이며 항상 그렇게 유지되어야 합니다. 인도 전기 장비 산업의 안전, 신뢰성 및 표준화를
          향상시키기 위해 인도 표준국(BIS)은 Scheme X 인증 하에서 모든 유형의 변압기 및 그 조립품,
          하위 조립품, 구성 요소 및 하위 구성 요소에 대한 BIS 인증을 필수로 만들었습니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부는 2024년 종합 기술 규정 명령을 통해 원산국과 관계없이 모든 제조업체가 2026년 9월
          1일까지 변압기 및 유사 장비에 대해 Scheme X 하에서 BIS 인증을 달성해야 하는 마감일을
          지정했습니다. 변압기용 BIS Scheme X 인증은 인도 제품의 품질, 일관성, 신뢰성 및 전기 안전성을
          향상시키기 위한 한 단계입니다. 구성 요소가 있는 변압기의 제조업체, 수입업체 또는 OEM 공급업체에게
          이러한 표준은 단순한 준수 의무 이상입니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 블로그는 모든 유형의 변압기 및 (또는) 그 조립품, 하위 조립품, 구성 요소 및 조립품에 대한
          Scheme X 인증의 범위, 중요성 및 장점, 프로세스 및 필요한 서류와 관련된 모든 관련 정보를
          다룹니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why Scheme X is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          변압기용 Scheme X가 중요한 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          변압기는 다음에서 광범위하게 사용됩니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>발전 시설</li>
          <li>송전 및 배전 네트워크</li>
          <li>공장 및 생산 건물</li>
          <li>재생 에너지 프로젝트(태양광/풍력/수력)</li>
          <li>상업용 부동산/주거 단지</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          적절한 준수가 없는 경우 변압기는 다음을 유발할 수 있습니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>과열, 화재 및 감전</li>
          <li>송전 중 전력 손실 및 낭비</li>
          <li>시스템 고장으로 인한 정전</li>
          <li>공공 입찰, 정부 프로젝트에서 거부</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          변압기용 Scheme X 인증은 높은 안전성, 에너지 효율성 및 제품 신뢰성을 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          변압기용 Scheme X 인증이란?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          변압기용 BIS Scheme X 인증은 2018년 BIS 적합성 평가 규정에 따른 법적 프레임워크입니다. 엄격한
          테스트 및 검사를 의무화하고 인도 표준에 따른 품질을 확인하기 위해 더 높은 수준의 서류를
          요구합니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Scheme X 인증의 주요 특징:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>모든 제조업체, 인도 및 외국에 적용</li>
          <li>
            배전 변압기, 전력 변압기 및 특수 목적 변압기 포함
          </li>
          <li>
            BIS 승인 실험실에서의 성능, 효율성 및 안전 테스트가 의무적입니다
          </li>
          <li>
            검사된 제조 프로세스 및 품질 시스템에 대한 공장 감사
          </li>
          <li>BIS 표준 마크 사용을 위한 라이센스 제공</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          변압기용 BIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부는 2024년 변압기용 종합 기술 규정(OTR)을 도입했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          준수 날짜: 모든 제조업체 및 수입업체는 2026년 9월 1일까지 인증을 받아야 합니다. 그 이후에는
          인증되지 않은 변압기를 제조하거나 국내로 가져오거나 인도에서 판매할 수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          변압기용 BIS의 장점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            안전 및 신뢰성: 변압기가 전기 안전 및 화재 예방 요구사항을 준수하는지 확인합니다.
          </li>
          <li>
            에너지 효율성: 적은 전력 손실과 더 나은 전력 성능을 장려합니다.
          </li>
          <li>
            시장 준수: OTR에 명시된 변압기 규제 요구사항을 준수합니다.
          </li>
          <li>
            입찰 자격: 인증된 제품은 정부 및 공기업 입찰에 자격이 있습니다.
          </li>
          <li>
            고객 신뢰: BIS 표준 마킹은 제품 품질 및 내구성을 보장합니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Transformers Section */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-4">
          포함되는 변압기 유형
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          변압기용 BIS scheme X 인증은 다음에 적용됩니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            배전 변압기(지역 그리드 및 주거 공급에서 사용)
          </li>
          <li>
            전력 변압기(고전압 송전 네트워크 수준)
          </li>
          <li>
            특수 목적 변압기(산업, 철도 및 재생 에너지 프로젝트 응용)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          각 유형은 IS 16819:2018/ISO 12100:2010(기계 안전 일반 설계 원칙 – 위험 평가 및 위험 감소)과
          같은 관련 IS(참고 참조) SO 코드를 충족해야 합니다. 모든 유형은 인증을 위해 해당 IS 코드를
          준수해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          변압기용 BIS 인증 프로세스
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            적용 가능한 표준 식별: 다양한 유형의 변압기에 대한 IS 코드를 참조하세요.
          </li>
          <li>
            제품 테스트: BIS 승인 실험실에서 안전, 에너지 효율성 및 성능 검사를 수행합니다.
          </li>
          <li>
            공장 감사: BIS 인원이 제조업체의 생산 및 품질 관리 시스템을 관찰합니다.
          </li>
          <li>
            서류 제출: 사양, 테스트 보고서 및 준수 데이터를 제출합니다.
          </li>
          <li>
            라이센스 발급: 모든 조항이 충족되면 BIS가 표준 마크 사용에 대한 라이센스를 제공합니다.
          </li>
          <li>
            지속적인 준수: 인증 유효성을 유지하기 위해 정기적인 테스트 및 검토가 수행됩니다.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수에 대한 처벌
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          변압기용 OTR에 따른 변압기용 BIS 인증을 준수하지 못하면 다음을 의미합니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            인증되지 않은 변압기의 판매 제조 및 수입 금지
          </li>
          <li>
            비준수 제품의 강제 압수 및 엄중한 처벌
          </li>
          <li>정부 및 공기업 입찰에서 실격</li>
          <li>장기적인 평판, 재정적 손상</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          변압기용 OTR(2024)에서 요구되는 변압기용 BIS Scheme X 인증은 신뢰할 수 있고 효율적이며 안전한
          제품으로 인도의 전력 인프라를 업그레이드하는 중요한 단계입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          제조업체 및 수입업체에게 변압기용 Scheme X 인증은 단순한 의무적 인증이 아니라 인도 시장에서
          신뢰를 얻고 국가의 전력 산업에서 장기적인 성공을 유지하기 위한 전략적 도구입니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

