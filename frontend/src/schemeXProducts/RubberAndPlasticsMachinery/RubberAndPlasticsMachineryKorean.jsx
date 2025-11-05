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

const RubberAndPlasticsMachineryKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>고무 및 플라스틱 기계용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="고무 및 플라스틱 기계, 조립품, 하위 조립품 및 구성 요소에 대한 BIS Scheme X 인증은 Scheme X 하에서 품질, 안전 및 고객 신뢰를 보장하기 위해 필수입니다"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="고무 및 플라스틱 기계용 BIS 인증, 고무 및 플라스틱 기계용 BIS Scheme X 인증, 고무 및 플라스틱 기계용 Scheme X 인증, 고무 및 플라스틱 기계용 BIS, 고무 및 플라스틱 기계용 OTR"
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
          content="인도 고무 및 플라스틱 기계용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 고무 및 플라스틱 기계용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-seukim-x-injeung-gomu-mich-peullaseutig-gigye"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 고무 및 플라스틱 기계용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 고무 및 플라스틱 기계용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-seukim-x-injeung-gomu-mich-peullaseutig-gigye"
        />
      </Helmet>

      <RubberAndPlasticsMachineryKoreanBreadcrumb />
      <RubberAndPlasticsMachineryKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default RubberAndPlasticsMachineryKorean;

const RubberAndPlasticsMachineryKoreanBreadcrumb = () => {
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
                <BreadcrumbPage>
                  고무 및 플라스틱 기계용 BIS Scheme X 인증
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RubberAndPlasticsMachineryKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          고무 및 플라스틱 기계용 BIS Scheme X 인증
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-machinery-for-working-rubber-and-plastics.png"
            alt="고무 및 플라스틱 기계용 BIS Scheme X 인증"
            title="고무 및 플라스틱 가공용 기계용 BIS 라이센스"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          인도의 산업 부문은 빠르게 변화하고 있으며, 표준화되고 안전하며 고성능 기계에 대한
          수요가 증가하고 있습니다. 특히 고무 및 플라스틱 작업용 기계는 자동차, 건설, 포장 및
          소비재를 포함한 다양한 산업에 필수적입니다. 제품 안전, 소비자 보호를 더욱 개선하고
          품질 보증을 용이하게 하기 위해 인도 표준국(BIS)은 Scheme X 준수를 위한 인증을
          의무화하는 규제 프레임워크를 마련했습니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부는 2024년 종합 기술 규정(OTR) 명령에 따라 모든 제조업체(국내 또는 국제)가
          특정 범주의 기계에 대해 Scheme X 하에서 BIS 인증을 받도록 요구합니다. 여기에는 고무
          및 플라스틱 작업용 모든 유형의 기계와 그 조립품, 하위 조립품 및 구성 요소가 포함됩니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 블로그에서는 고무 및 플라스틱 기계 및 모든 조립품, 하위 조립품 및 구성 요소에 대한
          Scheme X 인증의 중요성 및 관련성, 인증 프로세스 및 필수 서류와 관련된 이점을 설명합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          고무 및 플라스틱 기계용 BIS의 중요성
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          고무 및 플라스틱 기계는 다음에서 광범위하게 사용됩니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>자동차 구성 요소 제조(타이어, 호스, 씰, 대시보드)</li>
          <li>플라스틱 포장 및 소비재</li>
          <li>의료용품 및 의약품 포장</li>
          <li>건설 및 인프라 건축 자재</li>
          <li>전기 및 전자 구성 요소</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          고무 및 플라스틱 기계용 BIS가 없는 경우 산업은 다음을 직면할 수 있습니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>운영 비효율성 및 빈번한 고장</li>
          <li>운영자 및 최종 사용자에 대한 안전 위험</li>
          <li>저품질 제품 생산</li>
          <li>정부 입찰 또는 대규모 프로젝트에서 제외</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          고무 및 플라스틱 기계용 BIS Scheme X 인증은 기계가 엄격한 인도 표준을 준수하도록
          보장하여 기계를 더 안전하고 내구성이 있으며 시장 준비가 되도록 만듭니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          고무 및 플라스틱 기계용 BIS Scheme X란?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도의 고무 및 플라스틱 기계용 BIS Scheme X 인증은 2018년 BIS 적합성 평가 규정에
          따라 이루어집니다. 고무 및 플라스틱 가공 기계에 대한 성능 및 안전 기준을 설정합니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Scheme X 인증의 주요 특징:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>인도 및 외국 제조업체에 필수</li>
          <li>고시된 IS 코드에 따른 광범위한 고무 및 플라스틱 기계 포함</li>
          <li>제품 테스트, 제조 프로세스 감사 및 지속적인 감시 필요</li>
          <li>인증 시 BIS 표준 마크 사용</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          이 인증서는 산업 및 최종 사용자 모두를 위해 기계 안전, 에너지 효율성 및 신뢰할 수 있는
          생산을 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          고무 및 플라스틱 기계용 OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          중공업부는 2024년 고무 및 플라스틱 기계용 종합 기술 규정(OTR)을 발표했습니다. 모든
          제조업체 및 수입업체가 인증을 받아야 하는 마감일은 2026년 9월 1일입니다. 이 날짜 이후에는
          승인되지 않은 기계를 인도에서 제조, 수입 또는 판매할 수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          고무 및 플라스틱 기계용 BIS 인증의 이점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            품질 보증: 성능 및 내구성에 대한 인도 표준을 준수합니다.
          </li>
          <li>
            시장 경쟁력: 인증된 제품은 공공 및 민간 부문 조달에서 우선순위가 됩니다.
          </li>
          <li>
            고객 신뢰: 고무 및 플라스틱 기계용 BIS 인증을 받은 기계를 구매할 때 구매자의 신뢰가
            더 큽니다.
          </li>
          <li>
            법적 준수: 고무 및 플라스틱 기계용 OTR을 준수하면 벌금이나 제한을 받지 않습니다.
          </li>
          <li>
            글로벌 이점: 인증을 받은 국제 OEM은 인도 시장에 진입하는 경로가 더 쉬워집니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scheme X에 포함된 고무 및 플라스틱 기계
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          고무 및 플라스틱 기계용 Scheme X 인증은 다음을 포함한 다양한 장비를 다룹니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>사출 성형용 기계</li>
          <li>압출기 및 취형 기계</li>
          <li>고무 혼합 밀 및 내부 혼합기</li>
          <li>캘린더링 기계</li>
          <li>압축 성형용 프레스</li>
          <li>재활용 및 과립화 기계</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          각 범주는 IS/ISO 20430: 2020(플라스틱 및 고무 기계-사출 성형 기계-안전 요구사항)과
          같은 적용 가능한 인도 표준(IS 코드)을 준수해야 합니다. 모든 기계 유형은 안전, 성능 및
          신뢰성 측면에서 적용 가능한 인도 표준을 충족해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          고무 및 플라스틱 기계용 BIS 인증 프로세스
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            적용 가능한 표준 식별: 기계 유형과 관련된 IS 코드를 선택합니다.
          </li>
          <li>제품 테스트: BIS 승인 실험실에서 테스트합니다.</li>
          <li>
            공장 감사: BIS 검사관이 제조 및 품질 시스템을 준수 여부를 확인합니다.
          </li>
          <li>
            서류 제출: 기술 표준, 테스트 보고서 및 품질 매뉴얼을 제공합니다.
          </li>
          <li>
            인증 승인: BIS가 인증을 부여하여 제조업체가 표준 마크를 사용할 수 있도록 합니다.
          </li>
          <li>
            지속적인 감시: 정기적인 검토 및 재테스트가 지속적인 준수를 유지합니다.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수에 대한 처벌
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          고무 및 플라스틱 기계용 OTR에 명시된 고무 및 플라스틱 기계용 BIS 요구사항 미준수는 다음을
          초래합니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>인증되지 않은 장비의 판매/수입 금지</li>
          <li>심각한 벌금 또는 제품 압수</li>
          <li>공공 조달 및 입찰에서 제외</li>
          <li>직업 내 평판 손상</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          고무 및 플라스틱 기계용 OTR(2024)에 고무 및 플라스틱 기계용 BIS Scheme X 인증을 추가하는
          것은 기계의 품질 및 안전 준수를 보장하기 위한 중요한 조치입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          제조업체 및 수입업체에게 인증 획득은 규제 준수뿐만 아니라 브랜드 평판 구축, 신뢰성
          보장 및 인도의 빠르게 성장하는 시장 접근을 위한 전략적 투자입니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

