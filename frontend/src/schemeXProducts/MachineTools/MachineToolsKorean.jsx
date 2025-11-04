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

const MachineToolsKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>공작 기계용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X 인증은 선반, 밀링 머신, 드릴링 머신, 연삭기, CNC 시스템 및 돌, 세라믹, 콘크리트 및 유사 재료 작업용 공구를 포함한 공작 기계에 필수입니다"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="공작 기계용 BIS 인증, 공작 기계용 BIS Scheme X 인증, 공작 기계용 Scheme X 인증, 공작 기계용 BIS, 공작 기계용 OTR"
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
          content="인도 공작 기계용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 공작 기계용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-seukim-x-injeung-gongjag-gigye"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 공작 기계용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 공작 기계용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-seukim-x-injeung-gongjag-gigye"
        />
      </Helmet>

      <MachineToolsKoreanBreadcrumb />
      <MachineToolsKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default MachineToolsKorean;

const MachineToolsKoreanBreadcrumb = () => {
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
                  공작 기계용 BIS Scheme X 인증
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const MachineToolsKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MachineToolsKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const MachineToolsKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          공작 기계용 BIS Scheme X 인증
        </h1>

        {/* BIS Scheme X License Image */}
        <div className="mb-6">
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            공작 기계용 BIS Scheme X 라이센스
          </h3>
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Machine-Tools.png"
            alt="공작 기계용 BIS Scheme X 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          품질과 안전을 중요하게 고려하여 BIS(인도 표준국)는 Scheme X 인증을 통해
          다양한 산업의 안전 및 표준을 주도해 왔습니다. 이 인증서는 돌, 세라믹,
          콘크리트, 석면 시멘트 및 유사한 광물 유리 및 기타 가공 공구와 같은 재료를
          처리하도록 설계된 공작 기계 제조업체에게 매우 중요합니다. 인증 준수는
          국가 안전 요구사항을 충족할 뿐만 아니라 이러한 제품의 신뢰성과 시장성을
          크게 향상시킵니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          이 Scheme X 인증은 기계 및 전기 장비 안전(종합 기술 규정, 2024)에 따른
          요구사항입니다. 규정은 기계 및 전기 장비 제조업체가 장비에 표준 마크를
          부착해야 함을 인증합니다. 인증에는 기술 파일 준비, 공장 감사, 독립 제품
          확인 및 라이센싱이 포함되며 최종 마감일은 2026년 9월 1일입니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 블로그는 돌, 세라믹, 콘크리트, 석면 시멘트 또는 유사한 광물(또는)
          작업용 모든 유형의 공작 기계 및 그 조립품/하위 조립품/구성 요소에 대한
          Scheme X 인증과 관련된 모든 필요한 정보, 그 중요성, 범위, 인증 프로세스,
          장점 및 필요한 문서를 다룹니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          공작 기계용 BIS 인증이 중요한 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          공작 기계는 다음에서 필수적입니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>자동차 및 항공기 부품 생산</li>
          <li>조선 및 중공업 산업</li>
          <li>전력 생성 장비 제조</li>
          <li>철도, 방어 및 정밀 공구</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증 없이는 다음 위험이 포함됩니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>제품의 부적절하고 일관성 없는 품질</li>
          <li>장비 오작동 및 생산 지연</li>
          <li>작업자에 대한 위험</li>
          <li>인도 법률 위반에 대한 법적 우려</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          준수를 시행함으로써 Scheme X 인증은 산업을 이러한 위험으로부터 보호합니다.
          또한 돌, 세라믹, 콘크리트, 석면 시멘트 또는 유사한 광물(또는) 작업용 모든
          유형의 공작 기계 및 그 조립품/하위 조립품/구성 요소에 적용됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          공작 기계용 BIS Scheme X 인증이란 무엇인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 적합성 평가 규정 2018에 따른 BIS Scheme X 인증으로, 해당 제품 공작
          기계에 대해 국가에서 제조, 수입 또는 판매하기 전에 이러한 테스트, 검사 및
          라이센싱이 필수가 되었습니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          주요 특징:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>인도 및 수입 제조업체에 적용</li>
          <li>
            선반, 밀링 머신, 드릴링 머신, 연삭기, 셰이핑 머신, CNC 시스템 등을 포함한
            공작 기계 커버
          </li>
          <li>테스트는 BIS 승인 실험실에서만 수행됩니다.</li>
          <li>공장 감사 및 품질 시스템 검토가 필수입니다</li>
          <li>
            성공한 신청자만 제품에 표준 마크를 사용할 수 있는 BIS 라이센스를 받습니다
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          공작 기계용 OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부는 공작 기계에 대한 BIS scheme X 인증을 의무화하는 종합 기술 규정(OTR)을
          발표했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          마감일: 모든 생산자 및 수입업체는 2026년 9월 1일까지 BIS 인증을 받아야 합니다.
          이러한 통지 날짜부터 모든 비인증 공작 기계는 인도에서 제조, 판매 또는 수입될
          수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          공작 기계용 BIS 인증의 이점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            품질 보장: 인증된 공구의 검증된 정확성, 내구성
          </li>
          <li>
            시장 접근 – 공공 및 민간 부문 작업 진입에 필수
          </li>
          <li>
            소비자 신뢰 – BIS 표준 마크는 제품의 품질 및 안전에 대한 보장입니다.
          </li>
          <li>
            경쟁 우위 - 승인된 제조업체는 입찰 및 조달에 선호됩니다.
          </li>
          <li>
            위험 감소 – 장비 고장 없음, 작업자 안전 향상 및 가동 중단 방지
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          공작 기계의 BIS 인증 프로세스
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            표준 식별 – 공작 기계 유형 및 사용을 인도 표준과 연관시킵니다.
          </li>
          <li>
            제품 테스트 – BIS 인정 실험실에서 성능, 안전성 및 내구성 테스트를 수행합니다.
          </li>
          <li>
            공장 감사 – 전기 장비 생산의 품질 관리 감사
          </li>
          <li>
            문서화: 기술 보고서, 매뉴얼 및 준수 증명을 제공해야 합니다.
          </li>
          <li>
            라이센스 부여 – BIS는 라이센스(인증서)를 부여하고 표준 마크 사용을 허용합니다.
          </li>
          <li>
            모니터링 – 규칙을 준수하는지 확인하기 위해 정기적인 검토 및 무작위 검사가
            실시됩니다.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Scheme X 인증은 돌, 세라믹, 콘크리트, 석면 시멘트 또는 유사한 광물(또는)
          작업용 모든 기계 및 그 조립품/하위 조립품/부품에 필수입니다.
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수 시 처벌
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR에 따른 BIS 인증 규범을 준수하지 않으면 다음이 발생할 수 있습니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            비인증 상품의 생산, 수입 및 거래 금지
          </li>
          <li>상품 몰수 및 벌금</li>
          <li>방어 및 정부 계약 손실</li>
          <li>장기적으로 영구적인 브랜드 및 평판 손상</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          OTR 2024에 따라 요구되는 BIS Scheme X 인증은 단순한 규제 의무가 아닙니다.
          이는 인도 제조업의 신뢰, 안전 및 성공의 열쇠입니다. 인증은 시장 접근, 준수
          및 장기 성공을 위해 인도 및 글로벌 제조업체에게 중요합니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

