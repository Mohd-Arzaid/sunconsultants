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

const CentrifugesKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          원심분리기 및 여과 또는 정제 기계용 BIS Scheme X 인증
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="액체 및 기체용 원심분리기, 여과 또는 정제 기계 및/또는 그 조립품, 하위 조립품, 구성 요소에 대한 BIS Scheme X 인증은 산업 기계 부문에 중요한 규제 이정표입니다"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="원심분리기용 BIS 인증, 원심분리기용 BIS Scheme X 인증, 원심분리기용 Scheme X 인증, 원심분리기용 BIS, 원심분리기용 OTR"
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
          content="인도 원심분리기용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 원심분리기용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/ko/bis-seukim-x-injeung-wonsimbunligi-mich-yeorgwa-ttoneun-jeongje-gigye"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 원심분리기용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 원심분리기용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/ko/bis-seukim-x-injeung-wonsimbunligi-mich-yeorgwa-ttoneun-jeongje-gigye"
        />
      </Helmet>

      <CentrifugesKoreanBreadcrumb />
      <CentrifugesKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default CentrifugesKorean;

const CentrifugesKoreanBreadcrumb = () => {
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
                  원심분리기용 BIS 인증
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CentrifugesKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CentrifugesKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

// ... existing code ...

// ... existing code ...

const CentrifugesKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          원심분리기용 BIS 인증
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-centrifuges-filtering-or-purifying-machinery.png"
            title="원심분리기용 BIS Scheme X 라이센스"
            alt="원심분리기 및 여과 또는 정제 기계용 BIS Scheme X 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          원심분리기는 실험실, 제약, 식품 가공, 생명공학, 석유화학 및 채광 산업에서
          널리 적용되는 중요한 기계입니다. 이러한 기계는 회전으로 작동하며, 빠른
          회전으로 혼합물을 분리하는데, 이 분리는 정밀하고 안전하며 빠른 처리를
          위해 필수적입니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          다양한 산업에서 더 넓은 적용을 위해 원심분리기의 신뢰성과 안전성을
          높이는 것이 중요합니다. 원심분리기의 품질 관리 매개변수를 유지하기 위해
          BIS는 원심분리기용 Scheme -X 인증으로 알려진 BIS 인증 계획을 도입했습니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 글에서는 원심분리기용 BIS Scheme X 인증이 무엇인지, 원심분리기용 OTR이
          무엇인지, 원심분리기용 공식 BIS 마크를 포함하여 원심분리기용 BIS 라이센스를
          얻는 방법을 다룹니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          원심분리기에 대한 BIS의 중요성
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          원심분리기는 다음에서 사용됩니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>제약 및 생명공학 부문</li>
          <li>식품 가공 및 음료 제조</li>
          <li>정유소 및 석유화학 산업</li>
          <li>의료 실험실</li>
          <li>환경 및 수처리</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          원심분리기용 BIS가 없으면 낮은 품질 또는 인증되지 않은 원심분리기의 사용으로
          이어질 수 있으며, 이는 다음을 초래할 수 있습니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>기계적 고장 위험</li>
          <li>취약한 부문에서 오염 가능성</li>
          <li>시간 손실 및 수익 손실</li>
          <li>낮은 효율성 및 에너지 사용 증가</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          원심분리기용 BIS 마크가 있는 BIS 인증 원심분리기는 보안, 품질 및 신뢰를 의미합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          원심분리기용 BIS Scheme X 인증서란 무엇입니까?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          원심분리기의 BIS Scheme X 인증은 BIS 적합성 평가 규정 2018에 따른
          의무 인증 계획입니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          원심분리기용 Scheme X 인증: 주요 기능:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>인도 및 외국 제조업체 모두에게 적용</li>
          <li>
            산업 및 연구개발 실험실에서 발견되는 모든 유형의 원심분리기에 적용
          </li>
          <li>
            상당한 양의 제품 테스트, 감사 및 준수 검증이 필수입니다
          </li>
          <li>
            제조업체가 위에 언급된 원심분리기 인증을 기반으로 BIS 등록을 신청할 수
            있도록 허용합니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          원심분리기용 BIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          원심분리기용 OTR은 중공업부에서 2024년에 공고했으며, Scheme X 인증을
          요구합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          마감일: 모든 제조업체 및 수입업체는 2026년 9월 1일까지 Scheme X 하에서
          원심분리기의 유효한 BIS 라이센스를 받아야 합니다.
          "이것은 인증되지 않은 원심분리기가 전국에서 판매, 수입 또는 입찰에 참여하는
          것을 막을 것입니다,"라고 정부 관리들이 말했습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          원심분리기용 BIS 인증의 장점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            안전성 및 준수: 고속에서의 기계적 고장으로 인한 사고를 방지합니다.
          </li>
          <li>
            품질 및 신뢰성: 인증된 원심분리기는 높은 정확도와 정밀도로 작동합니다.
          </li>
          <li>
            시장 접근: BIS 원심분리기 라이센스는 일반적으로 공공 기관의 조달에
            필요합니다.
          </li>
          <li>
            소비자 신뢰: 원심분리기용 BIS 마크는 고객에게 제품 품질과 내구성에 대한
            정보를 제공합니다.
          </li>
          <li>
            경쟁 우위: BIS 인증 브랜드/제조업체는 규제 시장 및 정부 입찰에서
            선호됩니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Centrifuge Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS 인증 계획 하의 원심분리기 유형
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          원심분리기용 Scheme X 인정은 다음과 같은 다양한 유형을 다룹니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>실험실 원심분리기</li>
          <li>산업용 분리기</li>
          <li>냉동 원심분리기</li>
          <li>초원심분리기</li>
          <li>가스 원심분리기</li>
          <li>바구니 원심분리기</li>
          <li>디캔터 원심분리기</li>
          <li>연속 및 배치 원심분리기</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          이러한 모든 유형은 IS 16819:2018/ISO 12100:2010(기계 안전 - 설계에 대한 일반
          원칙 - 위험 평가 및 위험 감소)과 같은 적용 가능한 인도 표준(IS 코드)을 충족해야
          합니다. 모든 종류는 품질, 안전 및 에너지 효율을 위한 적절한 인도 표준(IS 코드)을
          충족해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          원심분리기용 BIS 인증 프로세스
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            관련 표준 식별: 원심분리기 유형에 관련된 IS 코드를 참조하세요.
          </li>
          <li>
            제품 테스트: BIS 인증 실험실에서 산업 표준이 요구하는 성능 및 안전 테스트를
            수행하세요.
          </li>
          <li>
            공장 검사: BIS 관리자가 생산 현장의 품질 보증 시스템을 확인합니다.
          </li>
          <li>
            신청 및 문서화: 기술 요구사항, 품질 핸드북 및 테스트 보고서를 제공하세요.
          </li>
          <li>
            원심분리기용 BIS 라이센스 발급: 승인 후 BIS 마크를 붙일 수 있습니다.
          </li>
          <li>
            지속적인 준수: BIS는 표준 준수를 위해 확인 및 예정되지 않은 감사를 수행합니다.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수에 대한 처벌
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          2026년 9월 1일까지 모든 모델 원심분리기를 원심분리기용 BIS 인증으로 인증받지
          않은 제조업체는 다음의 위험에 처합니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>인증되지 않은 원심분리기의 판매/수입 금지</li>
          <li>준수하지 않는 장비의 몰수 및 금전적 처벌</li>
          <li>정부 또는 공공 부문 기업 입찰에 참여할 수 없게 됩니다</li>
          <li>인도에서 브랜드 자산이 영구적으로 영향을 받습니다</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR 2024에서 원심분리기용 BIS Scheme X 인증의 구현은 인도의 산업 및 실험실
          부문에 안전성, 효율성 및 품질을 가져오는 단계입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          제조업체, 수입업체 및 수출업체는 원심분리기용 BIS 인증을 확보하고, 원심분리기용
          BIS 라이센스를 획득하며, 제품에 원심분리기용 BIS 마크를 부착함으로써 이
          프로세스를 활용하고 있으며, 이는 제품이 현지 시장 규제 시스템 및 고객의 요구사항을
          충족함을 보여줍니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

