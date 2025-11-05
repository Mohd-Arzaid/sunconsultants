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

const PublicWorksAndMechanicalKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>공공 사업 및 기계 장비용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="공공 사업 및 건설용 기계 및 기계 장비에 대한 BIS Scheme X 인증은 산업 안전, 균일한 품질 및 시장 접근을 보장하기 위한 전략적 조치입니다"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="공공 사업 및 기계 장비용 BIS 인증, 공공 사업 및 기계 장비용 BIS Scheme X 인증, 공공 사업 및 기계 장비용 Scheme X 인증, 공공 사업 및 기계 장비용 BIS, 공공 사업 및 기계 장비용 OTR"
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
          content="인도 공공 사업 및 기계 장비용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 공공 사업 및 기계 장비용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-seukim-x-injeung-gonggong-sa-eob-mich-gigye-gigu"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 공공 사업 및 기계 장비용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 공공 사업 및 기계 장비용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-seukim-x-injeung-gonggong-sa-eob-mich-gigye-gigu"
        />
      </Helmet>

      <PublicWorksAndMechanicalKoreanBreadcrumb />
      <PublicWorksAndMechanicalKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default PublicWorksAndMechanicalKorean;

const PublicWorksAndMechanicalKoreanBreadcrumb = () => {
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
                  공공 사업 및 기계 장비용 BIS Scheme X 인증
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PublicWorksAndMechanicalKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          공공 사업 및 기계 장비용 BIS Scheme X 인증
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-Machines-for-public-works -&-building.png"
            alt="공공 사업 및 기계 장비용 BIS Scheme X 인증"
            title="공공 사업 및 건설용 기계용 BIS 라이센스"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          인프라의 급속한 발전과 산업의 현대화로 인해 성능과 신뢰할 수 있는 기계의 중요성이
          최우선입니다. 기계 및 기계 장비는 공공 사업 및 전문 산업의 엔지니어링 작업, 제조 및
          건설의 핵심입니다. 품질과 적합성을 보장하는 것이 필수적이며, 이는 Scheme X 인증
          하에서 인도 표준국(BIS)이 강제하는 법적 의무사항입니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          다양한 산업 기계 카테고리 내에서 필수 표준의 시행 및 정리를 구현하기 위해 중공업부는
          2024년 종합 기술 규정 명령(OTR)을 발행했습니다. 이 명령은 도로 제작 및 유지 보수 기계,
          수압 및 수동 리프팅 기계, 시 공공 서비스 기구(상수 배급 장비 등)를 포함하여 84장의
          다른 세부 분류에 명시적으로 언급되지 않은 공공 사업 및 건설용 기계를 포함한 모든 유형의
          기계가 Scheme X에 따라 BIS 인증을 받아야 함을 명시합니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 게시물에서는 공공 사업 및 건설 건설에 사용되는 모든 유형의 기계 및 기계 장비,
          개별 기능을 가진 기계 장비, 그 조립품, 하위 조립품, 널리 논의되는 스킴의 중요성 및
          범위, 인증 프로세스 및 장점, 그리고 제출해야 할 서류에 대해 설명합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          공공 사업 및 기계 장비용 BIS의 중요성
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 기계는 다음에서 일반적으로 사용됩니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>공공 인프라 건설(도로, 다리, 상수도)</li>
          <li>엔지니어링 및 중공업 건설 프로젝트</li>
          <li>도시 서비스 및 유틸리티</li>
          <li>기계 리프팅 또는 가공이 필요한 산업 시설</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          공공 사업 및 기계 장비용 BIS가 없는 경우의 위험:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>중요한 프로젝트 중 기계 고장</li>
          <li>직업 안전 및 최종 사용자 안전 고려사항</li>
          <li>유지 보수 및 가동 중지 시간의 높은 비용</li>
          <li>정부가 자금을 지원하는 프로젝트에서 배제</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          공공 사업 및 기계 장비용 Scheme X 인증은 기계가 안전하고 효율적으로 작동하며 고장
          위험이 최소화되도록 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          공공 사업 및 기계 장비용 BIS Scheme X 인증이란?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          공공 사업 및 기계 장비용 BIS Scheme X 인증은 2018년 BIS 적합성 평가 규정에 따라
          이루어집니다. 산업 및 인프라 기계가 인도 표준을 준수하도록 보장하기 위한 식별된 수단 및
          규제 도구입니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Scheme X 자격의 주요 측면:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>인도 및 외국 제조업체 모두에 적용 가능</li>
          <li>공공 사업 및 유틸리티용 기계 포함</li>
          <li>BIS가 인정한 실험실에서 테스트 수행</li>
          <li>공장 감사 및 정기적인 규정 준수 검사 포함</li>
          <li>인증 후 BIS 표준 마크 사용 권한 부여</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          공공 사업 및 기계 장비용 OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부는 2024년 공공 사업 및 기계 장비용 종합 기술 규정(OTR)을 발행했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          마감일: 2026년 9월 1일까지 모든 제조업체 및 수입업체는 공공 사업 및 기계 장비용 Scheme
          X 인증을 준수해야 합니다. 이 날짜 이후에는 인증되지 않은 기계를 인도에서 제조, 판매
          또는 수입할 수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          공공 사업 및 기계 장비용 BIS의 이점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            제품 안전: 기계적 문제로 인한 고장을 방지하고 신뢰할 수 있는 작동을 보장합니다.
          </li>
          <li>
            규제 준수: 공공 사업 및 기계 장비용 OTR을 충족합니다.
          </li>
          <li>
            시장 우위: 공공 입찰 및 정부 프로젝트에 인증이 종종 필요합니다.
          </li>
          <li>
            고객 신뢰: 공식적으로 인증된 기계는 일부 구매자에게 선호되며, 이는 품질 보증입니다.
          </li>
          <li>
            책임 감소: 인증된 제품으로 법적 및 브랜드 노출 가능성 감소.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR의 공공 사업 및 기계 장비 유형
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          공공 사업 및 기계 장비용 BIS Scheme X 인증은 다음 제품을 포함합니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>도로 제작 및 유지 보수 기계</li>
          <li>수압 및 수동 리프팅 기계</li>
          <li>시 공공 서비스 기구(상수 배급 장비 등)</li>
          <li>서비스 및 기계 처리 장비</li>
          <li>공공 사업 및 서비스에서 산업 사용을 위해 특별히 설계된 장비</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          해당 제품은 적용 가능한 경우 적절한 인도 표준(IS 코드)을 준수해야 하며, 여기에는
          IS 16819:2018/ISO 12100:2010(기계 안전 설계 일반 원칙-위험 평가 및 위험 감소)이
          포함됩니다. 이러한 모든 형식은 안전, 성능 및 품질을 위해 해당 인도 표준에 따라
          제조되어야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          공공 사업 및 기계 장비용 BIS 인증 절차
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            적용 가능한 표준 식별: 기계에 적용 가능한 IS 코드를 선택합니다.
          </li>
          <li>
            제품 테스트: BIS 승인 실험실에서 성능 및 안전 테스트를 수행합니다.
          </li>
          <li>
            공장 검사: BIS 담당자가 생산 시설을 방문하여 품질 관리가 제대로 이루어지고 있는지
            확인합니다.
          </li>
          <li>
            서류: 신청서, 기술 보고서 및 품질 매뉴얼을 제출합니다.
          </li>
          <li>
            라이센스 발급: BIS가 인증을 부여하고 BIS 표준 마크 사용을 허용합니다.
          </li>
          <li>
            지속적인 준수: 지속적인 테스트 및 감사를 통해 지속적인 준수를 보장합니다.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수에 대한 처벌
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          공공 사업 및 기계 장비용 OTR에 명시된 공공 사업 및 기계 장비용 BIS 인증 미준수는 다음을
          초래합니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>인증되지 않은 기계의 판매 또는 수입 금지</li>
          <li>과중한 벌금 및 제품 압수</li>
          <li>정부 입찰 및 계약 프로세스에서 배제</li>
          <li>평판 크게 손상</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          공공 사업 및 기계 장비용 OTR(2024)에 의해 지원되는 공공 사업 및 기계 장비용 BIS Scheme
          X 인증서는 인프라 기계의 균일한 품질 수준 및 안전 수립에 한 걸음 더 가까이 다가갑니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          제조업체 및 수입업체에게 공공 사업 및 기계 장비용 Scheme X 인증 획득은 단순한 준수
          이상이며 전략적 투자를 나타냅니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

