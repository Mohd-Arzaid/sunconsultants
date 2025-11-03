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

const ConstructionMachineryKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>건설 기계용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="건설, 토공 및 채광 기계에 대한 BIS Scheme X 인증은 중요한 산업 부문에서 안전성, 품질 및 표준화를 보장하기 위해 의무화됩니다"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="건설 기계용 BIS 인증, 건설 기계용 BIS Scheme X 인증, 건설 기계용 Scheme X 인증, 건설 기계용 BIS, 건설 기계용 OTR"
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
          content="인도 건설 기계용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 건설 기계용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/ko/bis-seukim-x-injeung-geonseol-gigye"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 건설 기계용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 건설 기계용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/ko/bis-seukim-x-injeung-geonseol-gigye"
        />
      </Helmet>

      <ConstructionMachineryKoreanBreadcrumb />
      <ConstructionMachineryKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default ConstructionMachineryKorean;

const ConstructionMachineryKoreanBreadcrumb = () => {
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
                  건설 기계용 BIS Scheme X
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const ConstructionMachineryKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <ConstructionMachineryKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const ConstructionMachineryKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          건설 기계용 BIS 인증
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Construction-Machinery.png"
            alt="건설 기계용 BIS Scheme X 인증"
            title="건설 기계용 BIS Scheme X 라이센스"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          굴착기, 로더, 불도저, 콘크리트 믹서 및 도로 롤러는 인도의 인프라 건설에
          사용되는 주요 건설 기계입니다. 안전하고 신뢰할 수 있는 기계에 대한 높은
          수요는 고속도로, 스마트 시티, 공장 및 주택에 대한 막대한 투자에서 비롯됩니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          인도 표준국(BIS)은 건설 기계에 대한 품질, 서비스 및 안전 보장을 제공하기
          위해 건설 기계에 대한 Scheme-X 하에서 BIS 인증을 의무화했습니다. 이는
          장치가 인도에서 판매되거나 수입되기 전에 인도 표준을 준수하도록 보장합니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 글에서는 건설 기계용 BIS Scheme X 인증, 건설 기계용 OTR 요구사항,
          그리고 건설 기계용 BIS 라이센스 및 건설 기계용 BIS 마크를 얻는 프로세스에
          대해 배우게 됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          건설 기계에 대한 BIS가 중요한 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          건설 기계는 인프라 성장 및 대형 건설 개발 사이트에 적용됩니다.
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>도로 및 고속도로 개발</li>
          <li>부동산 및 주택 프로젝트</li>
          <li>채광 및 채석</li>
          <li>산업 건설 및 중공업</li>
          <li>항구, 공항 및 지하철 프로젝트</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          건설 장비에 대한 BIS 부재의 결과는 다음과 같습니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>장비 고장 및 비용이 많이 드는 가동 중단</li>
          <li>사고 및 위험 위험의 높은 확률</li>
          <li>정부 입찰 미준수</li>
          <li>유지보수 및 운영 비용 증가</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          건설 기계용 BIS 마크는 제품이 안전하고 신뢰할 수 있으며 인도 표준을
          준수함을 나타냅니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          건설 기계용 BIS Scheme X 인증이란 무엇입니까?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X 인증은 제품에 대한 지침을 제공하는 인도 표준국(BIS) 적합성
          평가 요구사항(2018)에 포함되어 있습니다. 이 계획에서 BIS는 제품의 품질을
          결정하고 인간 건강 위험을 완화하는지 확인합니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          건설 장비용 Scheme X 인증의 주요 특징:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>국내 및 외국 제조업체에게 의무</li>
          <li>
            모든 유형의 중장비 및 건설 장비를 포함합니다
          </li>
          <li>
            제품 테스트 필수, 공장 방문 의무 및 준수 감사를 정기적으로 수행해야
            합니다
          </li>
          <li>
            건설 기계용 BIS 마크 사용을 승인합니다
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          건설 장비용 BIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Scheme X 인증은 중공업부에서 발표한 건설 기계용 2024 Omnibus Technical
          Regulation (OTR)의 일부로 의무화됩니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          마감일: 모든 제조업체 및 수입업체는 2026년 9월 1일 이전에 Scheme X 하에서
          건설 기계용 BIS 라이센스를 받아야 합니다. 이 날짜부터 인증되지 않은 장비는
          공공 인프라 프로그램을 위해 생산, 운송 또는 판매될 수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          건설 장비 또는 기계용 BIS 인증의 이점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            안전성 및 신뢰성: 건설 현장에서 기계적 고장 또는 사고의 위험을
            줄입니다.
          </li>
          <li>
            시장 접근 및 입찰 자격: BIS 인증 제품은 정부 및 공공 부문 기업 입찰에
            참가할 수 있습니다.
          </li>
          <li>
            소비자 및 계약자 신뢰: 건설 기계 BIS 마크는 모든 구매자에게 안전하고
            품질 높은 제품을 보장합니다.
          </li>
          <li>
            글로벌 시장 진입: 건설 기계용 BIS 라이센스는 외국 회사가 인도 시장에
            쉽게 접근하는 데 도움이 될 수 있습니다.
          </li>
          <li>
            법적 준수: 건설 기계 OTR에 따른 벌금, 금지 및 제재에서 면제됩니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Construction Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scheme X에서 다루는 건설 장비 유형
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          건설 기계용 BIS Scheme X 인증은 다음과 같은 다양한 범주의 장비에 적용됩니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>굴착기 및 백호우 로더</li>
          <li>불도저 및 도로 롤러</li>
          <li>건설 현장에서 사용되는 크레인</li>
          <li>콘크리트 믹서 및 배칭 플랜트</li>
          <li>아스팔트 플랜트 및 포장기</li>
          <li>파일링 및 드릴링 기계</li>
          <li>자재 취급 및 토공 장비</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          각 범주는 설계, 안전, 성능 등에 대해 IS 17055 (Part 7):2020, IS 17055
          (Part 8):2020 및 IS 17055 (Part 12):2020에 따라 관련 인도 표준(IS 코드)을
          충족해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          건설 장비용 BIS 라이센스 절차
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            적용 가능한 표준 식별: 건설 기계 유형에 대한 IS 코드를 찾으세요.
          </li>
          <li>
            제품 테스트: BIS 인정 실험실에서 안전 및 성능 테스트를 수행하세요.
          </li>
          <li>
            공장 검사: BIS 감사관이 실제 QC 및 생산 프로세스를 검사합니다.
          </li>
          <li>
            신청 및 문서화: 검토를 위해 보고서, 사양 및 매뉴얼을 제공하세요.
          </li>
          <li>
            건설 기계용 BIS 라이센스: 포함되면 제조업체는 건설 기계용 BIS 마크를
            부착할 수 있습니다.
          </li>
          <li>
            지속적인 준수: 빈번한 검사 및 모니터링이 지속적인 준수를 유지합니다.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수에 대한 처벌
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          건설 기계용 OTR에 따라 2026년 9월 1일까지 건설 기계용 BIS 인증서의 대량
          실패 또는 미발급은 다음과 같은 영향을 미칩니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>인증되지 않은 장비의 판매 및 수입 금지</li>
          <li>대규모 벌금 및 제품 구류</li>
          <li>정부 프로젝트 및 수상에서 실격</li>
          <li>
            향후 수년간 평판에 대한 무제한 잠재적 손상
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          건설 기계용 OTR(2024) 하에서 건설 기계용 BIS Scheme X 인증의 의무적
          구현은 인도의 토착 산업에서 안전, 효율성 및 표준화를 향한 중요한
          단계입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          건설 기계 제조업체, 수입업체 및 수출업체의 경우, 건설 기계용 BIS 라이센스를
          취득하고 건설 기계용 BIS 마크를 부착하는 것은 단순한 준수 요구사항이 아니라,
          새로운 시장으로 확장하고, 번성하는 인도 건설 시장에 진입하며, 장기적으로
          평판을 구축하기 위한 전략적 조치입니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};
