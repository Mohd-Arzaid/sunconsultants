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

const SwitchgearandControlgearEquipmentKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>1000볼트 이하 개폐기 및 제어 장비용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="1000V 이하 개폐기 및 제어 장비 및 그 조립품/하위 조립품/구성 요소에 대한 BIS Scheme X 인증은 인도에서 품질과 안전을 보장하기 위해 필수입니다"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="개폐기 및 제어 장비용 BIS 인증, 개폐기 및 제어 장비용 BIS Scheme X 인증, 개폐기 및 제어 장비용 Scheme X 인증, 개폐기 및 제어 장비용 BIS, 개폐기 및 제어 장비용 OTR"
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
          content="인도 1000볼트 이하 개폐기 및 제어 장비용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 1000V 이하 개폐기 및 제어 장비용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-seukim-x-injeung-gaepye-gi-mich-jejeo-jangbi-1000-bolteu-iha"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 1000볼트 이하 개폐기 및 제어 장비용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 1000V 이하 개폐기 및 제어 장비용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-seukim-x-injeung-gaepye-gi-mich-jejeo-jangbi-1000-bolteu-iha"
        />
      </Helmet>

      <SwitchgearandControlgearEquipmentKoreanBreadcrumb />
      <SwitchgearandControlgearEquipmentKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default SwitchgearandControlgearEquipmentKorean;

const SwitchgearandControlgearEquipmentKoreanBreadcrumb = () => {
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
                  1000볼트 이하 개폐기 및 제어 장비용 BIS 인증
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          1000볼트 이하 개폐기 및 제어 장비용 BIS 인증
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-switch-gear-and-control-gear-equipment.png"
            alt="1000볼트 이하 개폐기 및 제어 장비용 BIS Scheme X 인증"
            title="개폐기 및 제어 장비용 BIS 라이센스 볼트"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          자동화 및 전기화 시대에 계기 스위치 및 제어 스위치는 안전하고 효과적인 전기 시스템의
          필수 구성 요소입니다. 가정 배선부터 정교한 산업 시스템까지, 이러한 장치는 전력 흐름의
          보호, 제어 및 격리를 관리합니다. 이러한 장치가 차지하는 중요한 위치 때문에 인도
          표준국(BIS)은 인도에서 설정된 안전 및 성능 기준을 충족하도록 Scheme X 하에서 이러한
          장치의 필수 인증을 제정했습니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부는 2024년 종합 기술 규정 명령에 따라 2026년 9월 1일부터 인도에서 판매, 수입 및
          제조되는 모든 개폐기 및 제어 장비(≤ 1000V)에 대해 필수 BIS 인증을 시행했습니다. 비준수 및
          불안전한 전기 장비에 대응하고 시장에서 제공되는 제품의 표준을 높이기 위해 BIS는 Scheme X
          인증 하에서 1000볼트 이하에서 작동하는 이러한 장치에 대한 인증을 의무화했습니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 블로그에서는 1000볼트를 초과하지 않는 전압에서 작동하는 모든 유형의 개폐기 및 제어
          장비(또는) 그 조립품/하위 조립품/구성 요소에 대한 Scheme X 인증에 필수적인 인증 절차와
          그 장점, 범위, 목적, 지원 증거 및 필수 서류를 설명합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          개폐기 및 제어 장비용 BIS가 중요한 이유
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          1000볼트 이하 개폐기 및 제어 장비는 다음에서 필수적입니다:
        </h3>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>가정 및 상업용 전기 배전 설비</li>
          <li>산업용 전력 관리 시스템</li>
          <li>재생 에너지 시설(태양광/풍력 발전소)</li>
          <li>공공 인프라 프로젝트</li>
          <li>회로 보호가 필요한 안전 중요 애플리케이션</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          적절한 인증이 없는 경우 위험:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>감전 또는 화재 위험</li>
          <li>장비 고장 및 비용이 많이 드는 가동 중지 시간</li>
          <li>인도 안전 규범 위반</li>
          <li>인증된 장비가 필요한 입찰 및 프로젝트에서 금지</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          개폐기 및 제어 장비용 Scheme X 인증은 이러한 제품이 성능, 안전 및 내구성 표준을 충족하도록
          보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          개폐기 및 제어 장비용 BIS Scheme X 인증이란?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          개폐기 및 제어 장비용 BIS Scheme X 인증은 2018년 BIS 적합성 평가 규정의 일부입니다. 필수
          제품 테스트, 공장 검사 및 적용 가능한 인도 표준 준수를 시행합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">주요 특징:</p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>인도 및 외국 제조업체 모두에 적용 가능</li>
          <li>
            다양한 장치 포함: 회로 차단기, 개폐기, 개폐 스위치, 퓨즈 조합 장치 및 1000V 이하 제어
            장치
          </li>
          <li>BIS가 인정한 시설에서 실험실 테스트 필요</li>
          <li>생산 및 품질 시스템 감사 포함</li>
          <li>인증 시 제품에 표준 마크 사용 권한 부여</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          개폐기 및 제어 장비용 BIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부는 2024년 개폐기 및 제어 장비용 종합 기술 규정(OTR)을 도입했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          준수 마감일: 제조업체 및 수입업체는 2026년 9월 1일까지 인증을 받아야 합니다. 이 날짜 이후
          이러한 인증되지 않은 개폐기 및 제어 장비는 시장에 출시하거나 인도에서 수입하거나 제조할
          수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          개폐기 및 제어 장비용 BIS 인증의 장점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            전기 안전: 단락, 과부하 및 잠재적 화재 위험으로부터 보호합니다.
          </li>
          <li>
            규제 준수: 개폐기 및 제어 장비용 OTR에 의해 필수입니다.
          </li>
          <li>
            시장 수용: 등록된 제품은 모든 정부 및 민간 프로젝트에 허용됩니다.
          </li>
          <li>
            고객 신뢰: 개폐기 및 제어 장비의 BIS 표준 마크는 고객에게 품질과 안전에 대한 신뢰를
            제공합니다.
          </li>
          <li>
            경쟁 우위: 브랜드 평판을 향상시키고 새로운 비즈니스 기회를 열어줍니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          개폐기 및 제어 장비용 BIS 인증 프로세스
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            적용 가능한 인도 표준 식별: 1000볼트 이하 개폐기 및 제어 장비와 관련된 IS 코드를
            식별합니다.
          </li>
          <li>
            제품 테스트: BIS 승인 실험실에서 안전, 성능 및 내구성 테스트를 수행합니다.
          </li>
          <li>
            공장 감사: BIS 검사관이 공장 및 품질 관리 시스템을 확인합니다.
          </li>
          <li>
            서류 제출: 모든 상세 사양, 테스트 보고서 및 준수 파일 지원을 제공합니다.
          </li>
          <li>
            BIS 라이센스 발급: 승인되면 BIS가 표준 마크 사용에 대한 라이센스를 발급합니다.
          </li>
          <li>
            지속적인 준수: 표준에 대한 감사 및 정기적인 제품 테스트가 인증이 유효한 상태로 유지되도록
            보장합니다.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수에 대한 처벌
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR 스킴에 따른 개폐기 및 제어 장비용 BIS 인증 미준수는 다음 결과를 초래합니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>인증되지 않은 모든 제품의 제조, 수입 또는 판매 금지</li>
          <li>비준수 장비는 압수되고 벌금이 부과됩니다</li>
          <li>정부 입찰에서 부적격</li>
          <li>비즈니스 관계 및 시장 신뢰에 대한 손해</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          개폐기 및 제어 장비용 OTR(2024)에 고시된 개폐기 및 제어 장비용 BIS Scheme X 인증은 인도에서
          안전하고 신뢰할 수 있으며 효율적인 전력 관리를 보장하기 위한 핵심 도구입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          제조업체 및 수입업체에게 개폐기 및 제어 장비용 Scheme X 인증은 법적 의무일 뿐만 아니라
          시장 접근, 브랜드 신뢰성 및 일반적으로 고객의 신뢰를 보장하는 전략적 투자입니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

