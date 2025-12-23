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

const EmbroideryMachinesKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>자수 기계용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="자수 기계용 BIS Scheme X 인증을 통해 제조업체는 제품이 법적으로 준수하고 기술적으로 우수하며 고객의 신뢰를 받을 수 있도록 보장합니다"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="자수 기계용 BIS 인증, 자수 기계용 BIS Scheme X 인증, 자수 기계용 Scheme X 인증, 자수 기계용 BIS, 자수 기계용 OTR"
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
          content="인도 자수 기계용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 자수 기계용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-seukim-x-injeung-jasu-gigye"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 자수 기계용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 자수 기계용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-seukim-x-injeung-jasu-gigye"
        />

        {/* Hreflang Tags for Multi-language Support */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-embroidery-machinery"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-machines-a-broderie"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-stickmaschinen"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-moc-theu"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-maquinaria-de-bordado"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-jasu-gigye"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-mesin-bordir"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-macchine-da-ricamo"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-shishu-kikai"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-ci-xiu-ji-xie-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-thai-rua"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-borduurmachines"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-alat-al-tatriz"
        />
      </Helmet>

      <EmbroideryMachinesKoreanBreadcrumb />
      <EmbroideryMachinesKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default EmbroideryMachinesKorean;

const EmbroideryMachinesKoreanBreadcrumb = () => {
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
                <BreadcrumbPage>자수 기계용 BIS Scheme X 인증</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const EmbroideryMachinesKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <EmbroideryMachinesKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const EmbroideryMachinesKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          자수 기계용 BIS Scheme X 인증
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-making-embroidery.png"
            alt="자수 기계용 BIS Scheme X 인증"
            title="자수 기계용 BIS Scheme X 라이센스"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          자수 부문은 인도의 섬유 및 의류 산업의 중요한 부분으로 패션, 가정 및
          수출용 부가가치 직물을 생산합니다. 컴퓨터화된 다중 헤드 자수 기계 또는
          산업용 기계는 자수 제품에서 고품질을 얻기 위해 필수적이며 자수에서
          효율성과 정밀도를 제공합니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          안전성, 안정성 및 성능을 보장하기 위해 BIS(인도 표준국)는 BIS의 인증
          계획 X에 따라 자수 기계에 대한 필수 인증을 시행했습니다. 이를 통해
          인도 표준을 준수하는 기계만 인도 시장에 허용됩니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          본 문서에서는 자수 기계용 BIS Scheme X 승인의 중요성, 자수 기계용
          OTR(섬유 규칙 명령)에 따른 규정 및 자수 기계용 BIS 라이센스 취득
          절차에 대해 논의합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          자수 재봉 기계에 대한 BIS의 중요성
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          자수 기계는 다음에서 사용됩니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>의류 및 겉옷 공장</li>
          <li>홈 텍스타일 생산(커튼, 침대 린넨, 쿠션 커버)</li>
          <li>맞춤 자수 및 오뜨르 하우스</li>
          <li>수출 중심 섬유 공장</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          자수 기계에 대한 BIS가 없을 때의 위험은 다음과 같습니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>불량한 바느질 품질 및 끊어진 실</li>
          <li>기계의 과도한 기계적 다운타임</li>
          <li>산업 환경에서의 안전 위험</li>
          <li>국내 및 수출 시장 모두에서 배제</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          자수 기계용 BIS 마크는 제품이 BIS의 모든 필수 지침에 따라 엄격하게
          테스트되고 인증되었음을 고객에게 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          자수 기계용 BIS Scheme X란 무엇인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          자수 기계용 BIS Scheme X 인증 프레임워크는 BIS 적합성 평가 규정
          2018(산업 장비 공급업체 간 품질 관리 준수를 위해 개발됨)에 언급된
          매개변수를 기반으로 합니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          자수 기계용 Scheme X 인증의 중요한 특징:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>인도 및 외국 제조업체 모두에게 필수</li>
          <li>테스트, 안전 점검 및 효율성 검증 포함</li>
          <li>정기적인 공장 방문 및 품질 감사 필요</li>
          <li>
            인증된 제품에 대해 자수 기계용 라이센스 하에 BIS 마크를 부착할 수
            있도록 허용
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          자수 기계용 BIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부는 자수 기계 범주에 속하는 모든 기계에 대한 인증을 의무화하는
          자수 기계용 종합 기술 규정(OTR) 2024를 도입했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          마감일: 모든 제조업체 및 수입업체는 처벌 또는 기소를 피하기 위해
          2026년 9월 1일까지 인도에서 판매되거나 수입되는 자수 기계용 BIS
          라이센스를 받아야 합니다. 그 이후에는 비인증 자수 기계가 인도에서
          거래되거나 상업적 목적으로 사용될 수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          자수 기계용 BIS 인증의 장점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            제품 안전 및 신뢰성: 인증 가능한 기계는 예상 및 안전 표준을
            충족합니다.
          </li>
          <li>
            시장 수용: 자수 기계용 BIS 라이센스는 정부 입찰 및 수량 계약에
            필수입니다.
          </li>
          <li>
            구매자 신뢰: 자수 기계는 BIS 마크가 표시되어 품질과 표준을
            확인합니다.
          </li>
          <li>규제 준수: 자수 기계용 OTR을 준수하며 처벌을 받지 않습니다.</li>
          <li>
            수출 이점: 인도 구매자는 인증된 기계로 안심할 수 있고 국제 기업은
            인도에 더 쉽게 접근할 수 있습니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Embroidery Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scheme X에 포함된 자수 기계 유형
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          자수 기계용 Scheme X 인증은 다음에 적용됩니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>다중 헤드 자수 기계</li>
          <li>기계 구동 컴퓨터화 자수</li>
          <li>단일 헤드 자수 기계</li>
          <li>체인 스티치 자수용 기계</li>
          <li>쉬플리 자수 기계</li>
          <li>전문 섬유 자수 장비</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          각 범주는 IS 17361(Part 1): 2020 / ISO 11111(Part 1): 2016(섬유 기계
          안전 요구사항 Part 1 일반 요구사항)과 같은 관련 IS 표준(IS 코드)을
          준수할 수 있습니다. 모두 설계, 내구성, 안전 및 운영 경제성에 대한 IS
          코드에 따라 각각 준수해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          자수 기계용 BIS 라이센스 절차
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>관련 표준 식별: 자수 기계 모델과 관련된 IS 코드를 찾아보세요.</li>
          <li>
            제품 테스트: 기계는 BIS 인정 실험실에서 안전성 및 성능을 위해
            테스트됩니다.
          </li>
          <li>공장 검사: BIS 감사관이 공장에 와서 품질 관리를 평가합니다.</li>
          <li>
            문서 및 신청: BIS에 기술 보고서, 매뉴얼 및 품질 문서를 제공합니다.
          </li>
          <li>
            자수 기계용 BIS 라이센스: 승인 시 제조업체는 제품에 BIS 마크를
            표시할 수 있는 옵션을 갖게 됩니다.
          </li>
          <li>
            지속적인 준수: 정기적인 검사 및 재테스트는 지속적인 준수를
            보장합니다.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수 시 처벌
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          자수 기계용 OTR에 따라 자수 기계에 대한 BIS 인증이 없는 경우의 결과는
          2026년 9월 1일부터:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>비인증 기계의 판매/수입 제한</li>
          <li>벌금, 처벌 및 잠재적 제품 압수</li>
          <li>중요한 정부 및 수출 계약 부적격</li>
          <li>장기간 브랜드 평판 손상</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          자수 기계용 OTR(2024)에 따른 자수 기계용 BIS Scheme X 인증의 의미는
          인도 섬유 및 자수 부문을 위한 획기적인 조치입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          자수 기계 제조업체 및 수입업체의 관점에서 자수 기계용 BIS 등록을 받고
          자수 기계용 BIS 마크를 부착하는 것은 법적 요구사항에 대한 준수일 뿐만
          아니라 제품 품질, 시장 신뢰 및 인도에서 끊임없이 성장하는 섬유 산업에
          대한 경쟁 우위에 대한 엄청난 구매를 의미합니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};
