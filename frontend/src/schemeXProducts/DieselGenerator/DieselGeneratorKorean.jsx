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

const DieselGeneratorKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>디젤 발전기용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="디젤 발전기 및 그 구성 요소에 대한 BIS Scheme X 인증은 인도의 품질과 안전을 표준화하고 보호하기 위한 중요한 규제 조치입니다."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="디젤 발전기용 BIS 인증, 디젤 발전기용 BIS Scheme X 인증, 디젤 발전기용 Scheme X 인증, 디젤 발전기용 BIS, 디젤 발전기용 OTR"
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
          content="인도 디젤 발전기용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 디젤 발전기용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-seukim-x-injeung-dijel-baljeongi"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 디젤 발전기용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 디젤 발전기용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-seukim-x-injeung-dijel-baljeongi"
        />
      </Helmet>

      <DieselGeneratorKoreanBreadcrumb />
      <DieselGeneratorKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default DieselGeneratorKorean;

const DieselGeneratorKoreanBreadcrumb = () => {
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
                  디젤 발전기용 BIS Scheme X 인증
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const DieselGeneratorKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <DieselGeneratorKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const DieselGeneratorKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          디젤 발전기용 BIS Scheme X 인증
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Diesel-Generator.png"
            alt="디젤 발전기용 BIS Scheme X 인증"
            title="디젤 발전기용 BIS Scheme X 라이센스"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          디젤 발전기는 상업 시설, 산업, 병원, 인프라 프로젝트, 주거 프로젝트 및
          기타 많은 장소에서 전력 공급의 보조 공급원으로 사용됩니다. 전력 공급의
          연속성을 보장할 책임이 있는 경제적 자산으로서, 기계가 안전하고 효율적이며
          국가 표준을 충족하는 것이 중요합니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          이를 위해 디젤 발전기의 BIS 인증이 인도 표준국(BIS)의 Scheme X 인증에
          포함되었습니다. 이 제도는 국내 및 글로벌 제조업체 모두 인도에서 제품을
          판매하기 전에 엄격하고 까다로운 인도 표준을 충족하도록 보장하기 위해
          마련되었습니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 게시물은 디젤 발전기의 BIS Scheme X 인증의 중요성, 2024년 OTR 의무 및
          제조업체가 인증을 받는 방법에 대해 자세히 설명합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          디젤 발전기에 대한 BIS의 중요성
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          디젤 발전기는 다음과 같은 곳에서 사용됩니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>공장 및 작업 현장</li>
          <li>병원 및 응급 대응자</li>
          <li>데이터 센터 및 IT 허브</li>
          <li>상업 및 주거 건물</li>
          <li>공공 사업 및 공공 시설</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          디젤 발전기가 제대로 인증되지 않은 경우 위험이 큽니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            계량기 고장(기계적 및 전기적)으로 인한 공급 부족
          </li>
          <li>비준수 장치의 화재 및 안전 위험 증가</li>
          <li>배출량 과다 및 에너지 비효율</li>
          <li>법적 장벽, 입찰 제외</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          디젤 발전기는 Scheme X 인증을 쉽게 충족할 수 있으며, 이는 제조업체가
          인도에서 사용하기 위해 안전하고 신뢰할 수 있으며 환경 친화적인 제품을
          판매할 수 있도록 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          디젤 발전기의 BIS Scheme X 인증이란 무엇인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          디젤 발전기용 BIS Scheme X 인증은 공식 인증 프로세스이며 BIS 적합성 평가
          규정 2018에 의해 설정된 시스템입니다. 인도 표준 준수를 검증하기 위해
          엄격한 테스트 및 품질 평가를 의무화합니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Scheme X 인증의 주요 특징:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            모든 제조업체 - 인도 및 외국 제조업체 모두 - 필수 요구사항
          </li>
          <li>
            다양한 용량의 모든 유형의 디젤 발전기에 적용 가능
          </li>
          <li>BIS 승인 실험실에서 제품 테스트 포함</li>
          <li>
            공장 감사, 작업장 방문 및 생산 프로세스 확인, 품질 및 안전 표준을
            보장하기 위해 독립적으로 현장 공장 검사를 수행합니다.
          </li>
          <li>라이센스가 있을 때 BIS 표준 마크 사용 라이센스 제공</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          디젤 발전기(DG)용 BIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부는 2024년 디젤 발전기용 OTR에 대한 통지를 발표했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          시행일: 모든 생산자 및 수입자는 2026년 9월 1일까지 인증을 받아야 합니다.
          이 날짜부터 인증되지 않은 디젤 발전기의 생산, 판매 또는 수입이 인도에서
          금지됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          디젤 발전기에 대한 BIS 인증의 장점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            안전 보장: 기계적 고장을 최소화하고, 화재, 단락 및 사고를 방지하기 위한
            화재 예방 기술을 기반으로 합니다.
          </li>
          <li>
            환경 준수: 에너지 절약 및 배출 감소 표준을 준수하도록 보장합니다.
          </li>
          <li>
            시장 접근: 디젤 발전기용 OTR - 인증은 인도에서 판매를 위해 필수입니다
          </li>
          <li>
            고객 신뢰: BIS 표준 마크는 높은 신뢰성과 안전성을 보장합니다.
          </li>
          <li>
            입찰 자격: 정부/공공 기업 계약의 경우 제품이 인증되어야 합니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Diesel Generators Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scheme X에 포함된 디젤 발전기 유형
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          디젤 발전기 인증 Scheme X에는 다음 그룹이 포함됩니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>디젤을 사용하는 모바일 홈 발전기</li>
          <li>상업용 디젤 발전기 세트(고용량)</li>
          <li>비상 및 대기 전원 공급 발전기</li>
          <li>
            상업용 소음 방지 디젤 발전기 세트(응용 및 도시용)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          각 하위 유형은 IS 16819:2018 / ISO 12100:2010(기계 안전 설계 일반 원칙
          - 위험 평가 및 위험 감소)과 같은 해당 인도 표준(IS 코드)을 준수해야
          합니다. 각 유형은 자체 인도 표준을 충족해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          디젤 발전기의 BIS 인증 절차
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            적용 가능한 표준 식별: 발전기 유형에 대한 IS 코드를 찾아보세요.
          </li>
          <li>
            제품 테스트: BIS 인정 실험실에서 안전, 성능 및 배출 테스트를 수행합니다.
          </li>
          <li>
            공장 감사: BIS 담당자가 제조 품질 관리 프로세스를 검사합니다.
          </li>
          <li>
            문서 제출: 사양, 테스트 결과 및 준수 문서를 제공합니다.
          </li>
          <li>
            라이센스 부여: 승인되면 BIS는 라이센스를 발급하고 표준 마크 사용을
            허가합니다.
          </li>
          <li>
            지속적인 준수: 인증이 유효한 상태로 유지되도록 감사 및 제품 검사를
            수행합니다.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수 시 처벌
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          디젤 발전기용 OTR의 디젤 발전기에 대한 BIS 인증을 준수하지 않으면 다음
          결과가 발생할 수 있습니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            비인증 장비의 판매, 수입 및 제조 금지
          </li>
          <li>상품 압수 및 재정적 처벌</li>
          <li>정부 계약 부적격</li>
          <li>영구적인 명성 및 재정적 손상</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          디젤 발전기용 OTR(2024)에 따른 디젤 발전기용 BIS Scheme X 인증은 인도
          전력 백업 산업에서 제품 안전성, 신뢰성 및 효율성 향상을 위한 여정에서
          중요한 이정표입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          제조업체/수입업체에게 디젤 발전기에 대한 Scheme X 인증은 단순한 법적
          필요사항이 아니라 신뢰성, 준수 및 시장 신뢰를 반영하는 경쟁 우위입니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

