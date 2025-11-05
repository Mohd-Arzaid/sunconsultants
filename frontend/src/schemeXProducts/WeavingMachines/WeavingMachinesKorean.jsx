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

const WeavingMachinesKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>직조기용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X 인증은 모든 유형의 직조기(직기) 및 (또는) 그 조립품/하위 조립품/구성 요소에 대한 필수 품질 인증입니다."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="직조기용 BIS 인증, 직조기용 BIS Scheme X 인증, 직조기용 Scheme X 인증, 직조기용 BIS, 직조기용 OTR"
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
          content="인도 직조기용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 직조기용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-seukim-x-injeung-jigjo-gi"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 직조기용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 직조기용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-seukim-x-injeung-jigjo-gi"
        />
      </Helmet>

      <WeavingMachinesKoreanBreadcrumb />
      <WeavingMachinesKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default WeavingMachinesKorean;

const WeavingMachinesKoreanBreadcrumb = () => {
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
                <BreadcrumbPage>직조기용 BIS Scheme X 인증</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const WeavingMachinesKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <WeavingMachinesKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const WeavingMachinesKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          직조기용 BIS Scheme X 인증
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-weaving-machines-(looms).png"
            title="직조기(직기)용 BIS Scheme X 인증"
            alt="직조기(직기)용 BIS Scheme X 라이센스"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          인도의 섬유 및 의류 산업은 제조, 수출 및 일자리의 가장 큰 지원자 중 하나입니다. 이 산업의
          핵심은 의류, 가정용 섬유 및 산업용을 위한 직물을 만드는 데 필요한 직조기입니다. 국내 수요가
          계속 증가하고 국가의 강한 수출 집중과 함께 국내 직조기의 품질 및 안전 표준을 보장할 필요가
          있습니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          이를 보장하기 위해 인도 표준국(BIS), 인도의 국가 표준 기관이 설립되었으며 인도에서 제품이
          인증되는 제품 인증 체계를 수립하고 시행하는 것은 BIS입니다. 이 표준은 인도 시장에 진입하는
          기계가 성능, 내구성 및 안전에 대한 인도 표준을 충족하도록 보장합니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 글에서는 직조기용 BIS Scheme X 인증서의 중요성, 직조기용 OTR 하에서의 준수 프로세스,
          인도에서 BIS 인증을 받는 방법, 직조기용 BIS 등록 및 직조기용 ISI 마크 라벨링에 대해
          설명합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          직조기용 BIS가 중요한 이유는 무엇입니까?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          직조기는 다음에서 사용됩니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>섬유 공장 및 의류 공장</li>
          <li>가정용 섬유 생산 단위</li>
          <li>산업용 직물 제조</li>
          <li>수출 중심 섬유 공장</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          직조기용 BIS 없이 브랜드 없는 기계는 다음을 초래할 수 있습니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>열등한 직물 및 결함</li>
          <li>
            고장률, 기계적 문제 및 작동 중단 시간의 측정
          </li>
          <li>운영 비용, 폐기물 및 폐기물 관리 증가</li>
          <li>정부 및 수출 계약 위반</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          직조기의 BIS 마크는 제품이 인도 표준에 부합한다는 것을 소비자 및 검사관에게 신뢰를
          제공합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          직조기용 BIS Scheme X 인증이란?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          직조기용 BIS Scheme X 인증은 2018년 BIS 적합성 평가 규정의 일부로, 중요한 기계의 품질을
          규제하는 것을 목표로 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          직조기용 Scheme X 인증의 특징 중 일부:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            인도에 공급하는 인도 및 외국 제조업체 모두에 필수
          </li>
          <li>
            인도 표준이 시행 중인 다양한 직조기 포함
          </li>
          <li>
            시간이 지나면서 계속되는 기계 테스트, 공장 검사 및 감사 요구
          </li>
          <li>직조기에 대한 공식 BIS 마크 사용 허용</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          직조기용 BIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Scheme X 인증은 중공업부에서 발행한 직조기용 종합 기술 규정(OTR) 2024에 따라 필수가
          됩니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          마감일: 2026년 9월 1일 직조기용 BIS 라이센스 발급 신청은 모든 제조업체 및 수입업체에
          필수입니다. 마감일 이후 등록되지 않은 직조기는 인도에서 판매, 수입 또는 상업적 사용을 위해
          배송할 수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          직조기용 BIS 인증의 장점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            제품 품질 보증: 인증된 기계는 중단 없는 생산 및 직물의 최적 효율성을 보장합니다.
          </li>
          <li>
            시장 접근 및 입찰: 직조기용 BIS 라이센스는 일반적으로 정부 입찰 및 대규모 공급 주문에서
            필수입니다.
          </li>
          <li>
            구매자 신뢰: 직조기용 BIS 마크는 국내 및 해외 시장에서의 신뢰를 보장합니다.
          </li>
          <li>
            법적 및 규제 준수: 직조기용 OTR에 따른 인도 규정 준수를 보장합니다.
          </li>
          <li>
            경쟁 우위: 인증된 기계는 매우 경쟁이 치열한 섬유 장비 산업에서 드뭅니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Weaving Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scheme X 인증 대상 직조기 유형
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          직조기는 Scheme X 인증을 받습니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>동력 직기</li>
          <li>래피어 직기</li>
          <li>에어 제트 직기</li>
          <li>워터 제트 직기</li>
          <li>셔틀 직기</li>
          <li>자동 직기</li>
          <li>산업용 특수 직조 기계</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          모든 것은 IS 17361(Part 6): 2020 / ISO 11111: (Part 6) : 2005(섬유 기계 안전 요구사항
          제6부 직물 제조 기계)와 같은 적용 가능한 인도 표준(IS 코드)에 따라야 합니다. 모든 유형은
          설계, 성능, 안전 및 에너지 절약을 기반으로 관련 인도 표준(IS 코드)을 준수해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          직조기용 BIS 라이센스 프로세스
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            적용 가능한 표준 식별: 직조기 유형의 IS 번호를 찾으세요.
          </li>
          <li>
            제품 테스트: 기계는 안전 및 효율성을 위해 BIS가 인정한 실험실에서 테스트됩니다.
          </li>
          <li>
            공장 검사: BIS 검사관이 제조 프로세스 및 품질 관리 시스템을 철저히 검사합니다.
          </li>
          <li>
            신청서 제출: 기술 세부 사항, 테스트 보고서 및 품질 매뉴얼과 같은 서류를 제출합니다.
          </li>
          <li>
            직조기용 BIS 라이센스 발급: 승인 시 제조업체는 제품에 BIS를 표시할 수 있습니다.
          </li>
          <li>
            지속적인 준수: 표준을 계속 충족하기 위해 정기적으로 감사 및 테스트가 수행됩니다.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수에 대한 처벌
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR 내에서 직조기용 BIS 인증 미준수는 다음을 초래합니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            인증되지 않은 기계의 판매 또는 수입 금지
          </li>
          <li>높은 벌금 및 제품 압수</li>
          <li>정부 작업/입찰에서 실격</li>
          <li>브랜드 및 시장 평판에 장기적인 손상</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          직조기용 OTR(2024)을 통한 직조기용 BIS Scheme X 인증의 롤아웃은 안전하고 품질이 좋으며
          신뢰할 수 있는 기계를 사용하는 인도의 섬유 산업을 갖는 데 중요한 이정표입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          제조업체/수입업체에게 직조기용 BIS 라이센스를 취득하고 제품에 BIS 마크를 표시하는 것은
          필수적인 준수일 뿐만 아니라 마케팅을 위한 제품에 가치를 추가합니다. 시장 신뢰성을 강화하고
          준수를 보장하며, 중기적으로는 섬유의 국내 및 국제 시장에서의 경쟁력을 촉진합니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

