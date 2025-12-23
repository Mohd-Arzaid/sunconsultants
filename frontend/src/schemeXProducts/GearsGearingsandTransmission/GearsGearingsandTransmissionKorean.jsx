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

const GearsGearingsandTransmissionKorean = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>기어, 기어링 및 전송 요소용 BIS Scheme X 인증</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="모든 유형의 기어 및 기어링, 톱니바퀴, 체인 스프로킷, 전송 요소, 볼 또는 롤러 스크루, 기어박스 및 속도 변경기를 다루는 제조업체에게 BIS Scheme X 인증은 필수입니다."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="기어, 기어링 및 전송 요소용 BIS 인증, 기어, 기어링 및 전송 요소용 BIS Scheme X 인증, 기어, 기어링 및 전송 요소용 Scheme X 인증, 기어, 기어링 및 전송 요소용 BIS, 기어, 기어링 및 전송 요소용 OTR"
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
          content="인도 기어, 기어링 및 전송 요소용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          property="og:description"
          content="인도 기어, 기어링 및 전송 요소용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-seukim-x-injeung-gie-gearing-jeonseung-yosu"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="인도 기어, 기어링 및 전송 요소용 BIS Scheme X 인증 | 완전 가이드"
        />
        <meta
          name="twitter:description"
          content="인도 기어, 기어링 및 전송 요소용 BIS Scheme X 인증에 대한 모든 것을 배우세요. OTR 2024 준수, BIS 라이센스 프로세스, ISI 마크 요구사항 및 2026년 9월 마감일 전에 인증받는 방법을 이해하세요"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-seukim-x-injeung-gie-gearing-jeonseung-yosu"
        />

        {/* Hreflang Tags for Multi-language Support */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-gears-gearing-and-transmission-elements"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-roues-dentees-et-elements-de-transmission"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-zahnraeder-getriebe-und-uebertragungselemente"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-banh-rang-he-thong-truyen-dong-va-cac-bo-phan-truyen-tai"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-engranajes-engranajes-y-elementos-de-transmision"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-gie-gearing-jeonseung-yosu"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-roda-gigi-dan-elemen-transmisi"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-ingranaggi-ingranamento-ed-elementi-di-trasmissione"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-gia-gearing-oyobi-densha-yoso"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-chi-lun-chi-lun-xi-tong-he-chuan-dong-yuan-jian-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-fueang-rab-khia-lae-ong-prakop-kan-song-kamlang"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-tandwielen-overbrenging-en-transmissie-elementen"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-turus-wa-anmatim-al-turus-wa-anasir-al-naql"
        />
      </Helmet>

      <GearsGearingsandTransmissionKoreanBreadcrumb />
      <GearsGearingsandTransmissionKoreanMainContent />
      <ServicesKorean />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default GearsGearingsandTransmissionKorean;

const GearsGearingsandTransmissionKoreanBreadcrumb = () => {
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
                  기어, 기어링 및 전송 요소용 BIS Scheme X 인증
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionKoreanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <GearsGearingsandTransmissionKoreanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionKoreanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          기어, 기어링 및 전송 요소용 BIS Scheme X 인증
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-gears-and-gearing-toothed-wheels-chain-sprocket.png"
            alt="기어, 기어링 및 전송 요소용 BIS Scheme X 인증"
            title="기어 및 기어링, 톱니바퀴, 체인 스프로킷용 BIS Scheme X 라이센스"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          산업의 변화하는 세계에서 기계 부품의 안전성과 품질은 매우 중요합니다.
          인도 표준국에 따르면 인도에서 제조된 모든 기계 및 전기 부품은 BIS가
          설정한 안전 및 표준을 준수해야 하며, 기계 및 전기 장비 안전(종합 기술
          규정) 명령 2024에 자세히 설명되어 있습니다. 이 명령에는 모든 산업의
          기계 작동에 필수적인 기어, 기어링 요소 및 전송의 다양한 부품과 같은
          기계 모듈, 부품 및 조립 부품이 포함됩니다.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          모든 제조업체(국내 또는 외국)는 중공업부가 설정하고 제정한 명령에 따라
          2026년 9월 1일까지 Scheme X 인증의 표준 요구사항을 충족해야 합니다.
          기어 및 기어박스 산업의 모든 제조업체와 모든 관련 전송 요소는 시장에
          접근하고 산업 표준을 설정할 수 있도록 이 규정을 준수해야 합니다.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          이 블로그에는 기어, 기어박스 및 관련 전송 부품 통합 인증에 대한 모든
          중요한 정보와 그 가치, 범위, 인증 장점 및 필요한 서류가 포함되어
          있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          기어, 기어링 및 전송 요소에 대한 Scheme X의 중요성
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 기계 부품은 다음에서 중요합니다:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>자동차, 트럭 및 기차</li>
          <li>항공 및 방어 장비</li>
          <li>제조 기계 및 로봇 공학</li>
          <li>에너지 및 전력 생성 시스템</li>
          <li>해양(중공업 및 경공업)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          기어, 기어링 및 전송 요소 BIS 없이는 위험이 높습니다:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>기어 고장으로 인한 고장 및 비용이 많이 드는 가동 중단</li>
          <li>운송 및 중공업에서의 건강 위험</li>
          <li>비효율적인 에너지 전송 및 에너지 소산</li>
          <li>공공 입찰 및 조달 기회에 대한 제한된 접근성</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          마지막으로, 기어, 기어링 및 전송 요소의 Scheme X 인증은 내구성 향상,
          운영 위험 최소화 및 국내 표준과의 일관성을 제공합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          기어, 기어링 및 전송 요소용 BIS Scheme X 인증이란 무엇인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          기어, 기어링 및 전송 요소용 BIS Scheme X 인증은 BIS 적합성 평가 규정
          2018의 일부입니다. 설계, 재료 품질 및 운영 성능에 대한 엄격한
          벤치마크를 정의합니다.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Scheme X 인증의 주요 특징:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>모든 제조업체(인도 및 해외)에게 필수</li>
          <li>다양한 기어, 샤프트 및 전송 부품에 적합</li>
          <li>BIS 승인 실험실에서 제품 테스트 수행</li>
          <li>품질 관리를 검증하기 위한 공장 감사 포함</li>
          <li>제품이 인증되면 BIS 표준 마크 사용 권한 부여</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          기어, 기어링 및 전송 요소용 OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          중공업부는 기어, 기어링 및 전송 요소에 대한 종합 기술 규정(OTR) 2024를
          채택했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          준수 날짜: 모든 생산자 및 수입업체는 2026년 9월 1일까지 인증을 받아야
          합니다. 이 날 이후에는 비인증 상품을 더 이상 인도에서 제조, 수입 또는
          판매할 수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          기어, 기어링 및 전송 요소용 BIS 인증의 장점
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            안전성 및 신뢰성: 중요한 시스템 응용의 감독되지 않은 고장을
            방지합니다.
          </li>
          <li>
            시장 경쟁력: 인증된 회사는 공공 및 민간 입찰 모두에서 우선권을
            누립니다.
          </li>
          <li>
            고객 신뢰: 구매자는 공식 BIS 인정을 받은 제품에 대해 신뢰를
            가집니다.
          </li>
          <li>법적 준수: 기어, 기어링 및 전송 부품용 OTR에 따른 처벌 없음</li>
          <li>
            글로벌 시장 진입: 외국 제조업체가 인도 시장에 쉽게 진입할 수 있도록
            지원
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Gears Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          포함된 기어 및 전송 부품 유형
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Scheme X 인증은 다음과 같은 다양한 기어, 기어링 및 전송 요소에
          적용됩니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>스퍼, 헬리컬, 베벨 및 웜 휠 기어</li>
          <li>기어 샤프트 및 커플링</li>
          <li>기어박스 및 전송 부품</li>
          <li>체인 및 벨트 드라이브 구성 요소</li>
          <li>항공 우주 및 로봇 공학, 고급 자동차, 오토바이에 사용되는 기어</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          모든 유형은 IS 16819:2018/ISO 12100:2010(기계 안전 설계 일반 원칙 -
          위험 평가 및 위험 감소)과 같은 인도 표준(IS 코드)을 준수해야 합니다.
          각 제품 유형은 설계 및 성능 측면에서 적절한 인도 표준을 준수해야
          합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          기어, 기어링 및 전송 요소용 BIS 인증 절차
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          적용 가능한 표준 식별: 기어/전송 제품에 적용 가능한 IS 코드를
          참조하세요.
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            제품 테스트: BIS 인정 실험실에서 재료 및 성능 테스트를 수행합니다.
          </li>
          <li>
            공장 감사: BIS가 생산 현장에서 품질 관리 감사를 위해 도착합니다.
          </li>
          <li>
            문서 제출: 기술 세부사항, 테스트 서류 및 품질 매뉴얼을 공유합니다.
          </li>
          <li>
            라이센스 부여: BIS는 문서의 정확성을 확인한 후 인증을 부여하고 표준
            마크 사용을 허용합니다.
          </li>
          <li>
            지속적인 준수: 인증의 유효성을 유지하기 위한 정기적인 감사 및
            재테스트
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          미준수 시 처벌
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          기어, 기어링 및 전송 요소용 OTR에 따라 기어, 기어링 및 전송 요소의 BIS
          인증 미준수는 다음을 초래합니다:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>비인증 항목의 판매 및 제조 금지</li>
          <li>상품 압수 및 금전적 벌금</li>
          <li>정부 입찰 및 계약 부적격</li>
          <li>장기간에 걸친 평판 손상</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          결론
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          기어, 기어링 및 전송 요소용 OTR(2024)에 따라 통지된 기어, 기어링 및
          전송 요소용 BIS Scheme X 인증은 인도의 엔지니어링 및 제조 구조의 품질
          및 안전 표준을 향상시키기 위한 중요한 조치가 될 것입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          인도 시장에서 판매를 추구하는 기어, 기어링 및 동력 전송 솔루션의
          제조업체 및 수입업체는 기어, 기어링 및 동력 전송 시스템에 대한 Scheme
          X 인증을 적용함으로써 수익이 증가하고 시장 이득으로의 문이 열릴 것임을
          알게 될 것입니다.
        </p>

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};
