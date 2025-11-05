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

const CompressorsKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>압축기용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="압축기, 조립품 또는 구성 요소에 대한 BIS scheme X 인증은 2024년 Omnibus Technical Regulation Order에 따라 의무화되어 제품 안전성과 인도의 표준화를 향상시킵니다"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="압축기용 BIS 인증, 압축기용 BIS Scheme X 인증, 압축기용 Scheme X 인증, 압축기용 BIS, 압축기용 OTR"
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
          content="인도 압축기용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 압축기용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-seukim-x-injeung-apchukgi"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 압축기용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 압축기용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-seukim-x-injeung-apchukgi"
        />
      </Helmet>

      <CompressorsKoreanBreadcrumb />
      <CompressorsKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default CompressorsKorean;

const CompressorsKoreanBreadcrumb = () => {
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
                <BreadcrumbPage>압축기용 BIS Scheme X</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CompressorsKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CompressorsKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const CompressorsKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          압축기용 BIS Scheme X
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Compressors.png"
            title="압축기용 BIS Scheme X 라이센스"
            alt="압축기용 BIS Scheme X 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          압축기는 냉동, HVAC, 석유화학, 제조, 식품 가공 및 제약 응용 분야와 같은
          다양한 산업에서 중요한 장비입니다. 급성장하는 인도 산업은 빠른 속도로
          성장하고 있으며 압축기의 품질과 안전성이 최우선 관심사입니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          이를 보장하기 위해 인도 표준국(BIS)은 Scheme X 인증 하에 압축기용 BIS
          인증을 구현했습니다. 이 인증은 인도 지역에 도입되는 모든 압축기가 특정
          안전, 성능 및 효율 표준을 준수하도록 보장합니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 가이드에서는 압축기용 BIS Scheme X 인증 및 압축기용 OTR, 그리고
          제조업체가 인도에서 압축기용 BIS 마크를 사용하기 위해 압축기용 BIS
          라이센스를 얻는 방법을 제공합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Compressors is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          압축기에 대한 BIS가 중요한 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          압축기는 다음에서 사용됩니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>에어컨/냉동 시스템</li>
          <li>가스 전송 라인 및 저장</li>
          <li>석유 및 가스 공정 시설</li>
          <li>
            발전 시설 및 화학 산업 시설
          </li>
          <li>식품 및 음료 생산</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          각 유형은 IS 17093:2019와 같은 적용 가능한 인도 표준(IS 코드)을
          충족해야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          압축기용 BIS가 없으면 열등하거나 표시되지 않은 제품으로 인해 다음이
          발생할 수 있습니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>고장, 유지보수 기간 및 유휴 시간</li>
          <li>높은 에너지 요금에 대비한 낭비적인 에너지 생산</li>
          <li>과열 또는 누출과 같은 안전 위험</li>
          <li>명성 손실 및 금전적 손해</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          따라서 ISI 인증이 완료된 압축기용 BIS 마크는 안전성, 신뢰성 및 품질에
          대한 보증입니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          압축기용 BIS Scheme X 인증이란 무엇입니까?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          압축기용 BIS Scheme X 인증은 BIS 적합성 평가 규정 2018에 따른 인도의
          적합성 평가 계획입니다. 이는 국내 및 외국 제조업체 모두가 인도 품질을
          준수하도록 확인하는 것입니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          압축기용 Scheme X 인증서의 특징:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            모든 제조업체(인도 및 외국 모두)에게 의무
          </li>
          <li>
            인도 표준에 따라 고시된 다양한 유형의 압축기를 다룹니다
          </li>
          <li>
            제3자 테스트, 공장 검사 및 정기 준수 확인 기능
          </li>
          <li>
            라이센스 취득자의 제품에 인증 제품으로 압축기용 BIS 마크 사용 허용
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          압축기용 BIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부에서 2024년에 발표한 압축기용 Omnibus Technical Regulation
          (OTR)은 압축기용 Scheme X 인증을 의무화합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          준수 마감일: 2026년 9월 1일까지 모든 제조업체 및 수입업체는 Scheme – X
          하에서 압축기의 유효한 BIS 라이센스를 보유해야 합니다. 미준수 시 인도에서
          인증되지 않은 압축기의 판매 및 수입이 완전히 금지됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          압축기용 BIS 인증의 장점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            안전성 및 성능: 누출, 과열 및 기계 고장과 같은 위험을 피하는 데
            도움이 됩니다.
          </li>
          <li>
            시장 접근: BIS 인증 압축기는 공공 입찰 및 정부 프로젝트에서 사용할 수
            있습니다.
          </li>
          <li>
            소비자 신뢰: 압축기용 BIS 마크는 구매자에게 제품이 인도 표준에
            부합한다는 신뢰를 제공합니다.
          </li>
          <li>
            경쟁 우위: 인증된 브랜드만 더 많은 신뢰와 시장 선호를 얻습니다.
          </li>
          <li>
            국제 브랜드의 접근 가능한 시장 진입: 압축기용 BIS 라이센스는 외국
            제조업체가 인도 시장에 쉽게 접근할 수 있도록 지원합니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Compressor Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Scheme X에서 다루는 압축기 유형
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X 인증은 다음과 같은 다양한 유형의 압축기에 사용할 수
          있습니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>양변위 왕복 압축기</li>
          <li>회전 압축기</li>
          <li>스크류 압축기</li>
          <li>터보 압축기</li>
          <li>축류 압축기</li>
          <li>산업용 및 휴대용 공기 압축기</li>
          <li>에어컨 및 냉동 압축기</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          압축기의 다양한 기술은 성능, 에너지 소비, 재료 품질 및 안전에 대한
          요구사항을 규정하는 각 인도 표준을 준수해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          압축기용 BIS 라이센스 단계별 가이드 – 신청 방법은?
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            적용 가능한 표준 식별: 압축기의 적절한 IS 코드를 찾으세요.
          </li>
          <li>
            제품 테스트: BIS 인정 실험실에서 의무 성능, 안전 및 에너지 효율 테스트를
            수행하세요.
          </li>
          <li>
            공장 검사: BIS 담당자가 제조 절차 및 품질 관리 방법을 확인하기 위해
            현장 방문을 수행합니다.
          </li>
          <li>
            문서화 및 신청: BIS 신청서와 함께 테스트 보고서, 기술 사양 및 품질
            매뉴얼을 포함하세요.
          </li>
          <li>
            압축기용 BIS 라이센스 발급: 승인되면 제조업체는 압축기용 BIS 마크를
            사용할 권리를 받습니다.
          </li>
          <li>
            지속적인 준수: 지속적인 준수를 위해 BIS가 정기 감사 및 제품 테스트를
            수행합니다.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수에 대한 처벌
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          압축기용 OTR에 따라 2026년 9월 1일까지 압축기용 BIS 인증을 받지 않은
          제조업체는 다음을 받게 됩니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>비유형 테스트 압축기의 판매/수입 허용 안 됨</li>
          <li>준수하지 않는 상품의 몰수 및 사업 처벌</li>
          <li>정부 입찰 및 공공 부문 기업 거래 금지</li>
          <li>인도 시장 신뢰 상실</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          압축기용 OBR(2024)에 의한 압축기용 BIS Scheme X 인증의 구현은 인도의
          산업 안전, 에너지 효율 및 품질 보증을 위한 중요한 전진입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          압축기용 BIS 인증서를 받고 압축기용 BIS 인증서를 확보하는 프로세스를
          거치는 제조업체, 수입업체 및 수출업체는 인도 소비자에게 제공하는 제품이
          사용하기에 안전하고 환경 위험이 적으며 품질이 좋다고 간주되도록 보장함으로써
          이 시장의 일부가 될 권리를 얻습니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};