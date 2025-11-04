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

const PackingMachineryKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>포장 기계용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="충전, 밀봉, 봉인, 라벨링 병, 포장 또는 래핑용 모든 유형의 기계 및(또는) 그 조립품/하위 조립품/구성 요소에 대한 BIS Scheme X 인증은 인도 제조업의 안전 및 품질 표준화를 위한 중요한 단계입니다"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="포장 기계용 BIS 인증, 포장 기계용 BIS Scheme X 인증, 포장 기계용 Scheme X 인증, 포장 기계용 BIS, 포장 기계용 OTR"
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
          content="인도 포장 기계용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 포장 기계용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-seukim-x-injeung-pojang-gigye"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 포장 기계용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 포장 기계용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-seukim-x-injeung-pojang-gigye"
        />
      </Helmet>

      <PackingMachineryKoreanBreadcrumb />
      <PackingMachineryKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default PackingMachineryKorean;

const PackingMachineryKoreanBreadcrumb = () => {
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
                  포장 기계용 BIS Scheme X 인증
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PackingMachineryKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PackingMachineryKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const PackingMachineryKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          포장 기계용 BIS Scheme X 인증
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-filling-closing-sealing-labelling.png"
            title="충전, 밀봉, 봉인, 라벨링용 BIS 라이센스 기계"
            alt="포장 기계용 BIS Scheme X 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          포장 기계는 식품, 음료, 의약품, 화학, 소비재 및 물류 산업에 필수적입니다.
          이들은 제품의 적절하고 안전하며 품질 좋은 포장을 보장하는 기계입니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          안전, 신뢰성 및 수익성을 보장하기 위해 BIS(인도 표준국)는 포장 기계용 BIS
          Scheme X 인증을 필수로 만들었습니다. 이 인증은 인도에서 판매되거나 인도로
          수입되는 모든 포장 기계가 시행 중인 국가 품질 표준을 준수하도록 보장하기
          위해 제공됩니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 블로그에서는 포장 기계용 Scheme X 인증의 중요성, 포장 기계용 OTR의 역할,
          포장 기계용 BIS 라이센스 및 포장 기계용 BIS 표준 마크 취득 프로세스를 설명합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS Certification Matters Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          포장 기계용 BIS 인증이 중요한 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          포장 기계는 다음을 위해 모든 사업에서 사용됩니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>식품 및 음료 포장</li>
          <li>의약품 및 의료 제품 포장</li>
          <li>화학 및 산업 산업에서 사용되는 포장</li>
          <li>소비재 및 소매 제품</li>
          <li>수출 시장용 포장 솔루션</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          포장 기계용 BIS가 없는 경우: BIS에 의해 인증되지 않은 제품은 다음을
          초래할 수 있습니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>포장, 제품 무결성 및 오염 실패</li>
          <li>식품 및 의약품 부문의 안전 위험</li>
          <li>비효율적인 운영 및 가동 중단</li>
          <li>정부 구매 규칙 준수 실패</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          포장 기계의 BIS 마크는 구매자에게 품질, 안전성 및 장수명을 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is X-Scheme Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          포장 기계용 X-Scheme 인증이란 무엇인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          포장 기계는 Scheme X 인증의 Part II이며, BIS 적합성 평가 규정 2018에
          따라 인도 및 외국 제조업체 모두에게 필수입니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          포장 기계용 BIS Scheme X 인증의 주요 특징:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            모든 포장 기계에 적합(수동, 반자동 및 자동)
          </li>
          <li>
            제품 테스트, 공장 감사 및 품질 관리 필요
          </li>
          <li>인도에서 판매 및 수입에 필수</li>
          <li>
            인증된 장비에 포장 기계용 BIS 마크 사용 권한 부여
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          포장 기계용 OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체에 대한 준수 프레임워크는 중공업부가 2024년에 발행한 포장 기계용
          종합 기술 규정(OTR)에 규정되어 있습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          마감일: 모든 포장 기계는 BIS Scheme X 인증서로 커버되어야 하며, 모든
          포장 기계는 2026년 9월 1일까지 포장 기계용 BIS 라이센스를 받아야 합니다.
          인증되지 않은 포장 기계는 2026년 9월 1일부터 인도에서 제조, 판매 및
          수입할 수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          포장 기계용 BIS Scheme X의 장점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            안전 및 위생: 인증된 포장 기계는 오염 문제(식품 및 의약품)를 방지합니다.
          </li>
          <li>
            품질 보장: 기계가 원활하고 효율적으로 작동하도록 유지합니다.
          </li>
          <li>
            시장 이점: BIS 포장 기계 라이센스는 정부 입찰에 일반적으로 필요한
            라이센스 요구사항입니다.
          </li>
          <li>
            소비자 신뢰: 포장 기계용 BIS(인도 표준국) 마크는 품질을 반영하고 신뢰성
            수준을 보장합니다.
          </li>
          <li>
            글로벌 시장 접근: 외국 브랜드는 제품 등록을 통해 인도의 규제된 시장에
            쉽게 접근할 수 있습니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Packing Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scheme X에 포함된 포장 기계 유형
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          포장 기계용 BIS Scheme X 인증은 다양한 포장 기계를 포함합니다.
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>식품 및 음료 포장 기계</li>
          <li>의약품용 블리스터 및 스트립 포장 기계</li>
          <li>래핑, 밀봉 및 충전 기계</li>
          <li>카토닝 및 라벨링 기계</li>
          <li>진공 및 수축 포장 시스템</li>
          <li>대량 및 산업용 포장 기계</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          각 종류의 포장 기계는 IS 16819 :2018/ISO 12100 : 2010 (기계 안전 설계
          일반 원칙 - 위험 평가 및 위험 감소)을 포함한 적절한 인도 표준(IS 코드)의
          요구사항을 충족해야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          기계 유형은 성능, 안전성, 청결성 및 효율성에 대한 적절한 인도 표준을
          충족해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          포장 기계용 BIS 라이센스 프로세스
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            적용 가능한 표준 식별: 포장 기계 클래스에 적합한 IS 코드를 식별합니다.
          </li>
          <li>
            BIS 인정 실험실에서 테스트: 필수 성능, 위생 및 안전 테스트
          </li>
          <li>
            공장 검사: BIS 인원이 제조 현장 감사를 직접 수행합니다.
          </li>
          <li>
            신청 및 문서화: 테스트 보고서, 기술 사양 및 품질 매뉴얼 업로드
          </li>
          <li>
            포장 기계용 BIS 라이센스 발급: 공장 부지를 떠난 후 포장 기계에 대한 승인을
            받은 후부터 사용할 수 있습니다.
          </li>
          <li>
            지속적인 준수: 무작위 BIS 검사 및 모니터링 프로세스를 통해 선반의 제품
            샘플을 확인하여 지속적으로 일관성을 유지합니다.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수 시 처벌
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          포장 기계용 OTR을 충족하지 않고 2026년 9월 1일까지 인증받지 않은 경우:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>비인증 장비의 제조/수입 금지</li>
          <li>심각한 벌금, 제품 압수</li>
          <li>PSU 프로젝트 및 공공 입찰에서 제외</li>
          <li>지속적인 브랜드 평판 손상 및 신뢰성 손실</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          포장 기계용 OTR(2024)에 따른 포장 기계용 BIS Scheme X 인증은 국가 산업
          포장 분야의 안전 및 품질 표준화를 위한 주요 이니셔티브입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          수입업체/수출업체 및 제조업체는 이미 포장 기계용 BIS 라이센스 및 BIS 마킹을
          전략적 도구로 활용하여 시장 접근 및 신뢰성을 확보하고 과도하게 규제된
          시장에서 우위를 차지하는 데 도움을 받고 있습니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

