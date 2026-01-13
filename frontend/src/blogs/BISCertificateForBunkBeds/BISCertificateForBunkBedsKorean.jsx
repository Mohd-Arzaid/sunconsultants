import FaqAuthorKorean from "@/components/common/FaqAuthor/FaqAuthorKorean";
import ManyUsersAlsoReadKorean from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadKorean";
import ServicesRightSideContentKorean from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentKorean";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterKorean from "@/components/manual/Footer/FooterKorean";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForBunkBedsKorean = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterKorean />
    </div>
  );
};

export default BISCertificateForBunkBedsKorean;

const MetaTags = () => {
  const title = "이층 침대용 BIS 인증서 | IS 17636:2022 BIS 라이선스";
  const ogTitle = "이층 침대용 BIS 인증 – IS 17636:2022 가이드";
  const twitterTitle = "이층 침대용 BIS 라이선스 | IS 17636:2022";
  const metaDescription =
    "IS 17636:2022에 따른 이층 침대용 BIS 인증서를 받으세요. 인도의 BIS 인증을 위한 프로세스, 문서, 테스트, 비용 및 일정.";
  const ogDescription =
    "IS 17636:2022에 따른 이층 침대용 BIS 인증에 대한 완전한 가이드. 프로세스, 비용, 문서, 테스트 및 BIS 라이선스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 17636:2022에 따른 이층 침대용 BIS 인증서를 신청하세요. 인도에서 BIS 프로세스, 문서, 테스트, 수수료 및 일정을 알아보세요.";
  const metaKeywords =
    "이층 침대용 BIS 인증서, 이층 침대용 BIS 라이선스, IS 17636:2022, 이층 침대용 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/icheung-chimdae-is-17636";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal, Sun Certification India 운영 책임자";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/bunk-beds-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/bunk-beds-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-muzdawijat-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/shuang-ceng-chuang-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stapelbedden-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-superposes-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/etagenbetten-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-susun-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-a-castello-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/nidan-beddo-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/icheung-chimdae-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/literas-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-song-chan-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-tang-is-17636"
      />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">홈</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">최신 블로그</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    이층 침대용 BIS 인증서 – IS 17636:2022
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentKorean />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          이층 침대용 BIS 인증서 – IS 17636:2022 BIS 인증 완전 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="이층 침대용 BIS 라이선스"
            alt="이층 침대용 BIS 인증서 - IS 17636:2022 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          이층 침대용 BIS 인증서는 IS 17636:2022에 따라 인도에서 필수
          요구사항이며, 가정, 호스텔, 기숙사, PG 숙소, 학교, 호텔 및 상업
          시설에서 사용되는 이층 침대의 안전, 성능 및 구조적 요구사항을
          규정합니다. 인도 또는 외국 제조업체는 인도 시장에서 이층 침대를 판매,
          수입, 수출 또는 유통하기 전에 이층 침대용 BIS 인증을 받아야 합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          공간 절약형 가구에 대한 수요가 증가함에 따라 이층 침대는 필수 제품
          카테고리가 되었습니다. 그러나 낙상, 붕괴, 끼임 및 구조적 실패와 같은
          안전 위험으로 인해 이층 침대용 BIS 라이선스는 소비자 보호를 보장하는
          데 중요합니다. 이 포괄적인 페이지는 이층 침대용 BIS 등록, 테스트
          요구사항, 문서화, 수수료, 일정, 처벌 및 혜택을 안내합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체, 수입업체, 수출업체, 무역업체 또는 스타트업이든, 이 가이드는
          인도 표준국(BIS)의 규정 준수 요구사항을 이해하는 데 도움이 됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증이란 무엇인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증은 인도의 국가 표준 기관인 인도 표준국이 관리하는 품질 및 안전
          규정 준수 프로그램입니다. 제품이 지정된 인도 표준을 준수하고 안전하고
          신뢰할 수 있으며 사용하기에 적합한지 보장합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증서란 무엇인가요?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증서는 제조업체에게 발급되는 공식 라이선스로, ISI 마크를 사용할
          수 있게 하며 BIS가 규정한 제품 표준을 준수함을 보여줍니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증서의 의미
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제품이 다음을 통과했음을 증명합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>실험실 테스트</li>
          <li>공장 검사</li>
          <li>품질 관리 평가</li>
          <li>안전 규정 준수</li>
          <li>인도 표준 준수</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증 제품은 BIS 로고(ISI 마크라고도 함)를 표시하여 인도 품질
          기준을 충족함을 나타냅니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          이층 침대에 적용되는 BIS 표준은 무엇인가요? (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          이층 침대는 새로 도입된 표준에 따라 필수 BIS 인증 대상입니다:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — 이층 침대 – 안전 요구사항
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 이층 침대가 엄격한 안전, 구조 및 내구성 기준을 충족하도록
          보장합니다. 다음을 포함합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>구조적 안정성</li>
          <li>가드레일</li>
          <li>끼임 위험</li>
          <li>하중 지지 능력</li>
          <li>치수 요구사항</li>
          <li>재료 사양</li>
          <li>가장자리 및 표면 마감</li>
          <li>사다리 구조</li>
          <li>내구성 및 성능 테스트</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도에서 이층 침대를 판매하려는 모든 제조업체는 IS 17636:2022에 따라
          이층 침대용 BIS 라이선스를 받아야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          이층 침대에 BIS 인증이 필요한 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          이층 침대는 어린이와 성인에게 널리 사용되며, 안전 문제로 인해 규정
          준수가 필수적입니다. BIS는 다음을 방지하기 위해 인증을 의무화했습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>붕괴 또는 구조적 실패</li>
          <li>신체 부위 끼임</li>
          <li>상층 침대에서 낙상</li>
          <li>사다리 관련 부상</li>
          <li>낮은 재료 품질</li>
          <li>화재 위험</li>
          <li>위험한 마감 또는 날카로운 가장자리</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          이층 침대용 BIS 라이선스가 필수인 이유
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>기계적 강도와 내구성 보장</li>
          <li>소비자(특히 어린이)를 부상으로부터 보호</li>
          <li>균일한 품질 표준 유지</li>
          <li>브랜드가 신뢰와 신뢰성 구축에 도움</li>
          <li>정부 규정 준수 보장</li>
          <li>법적 문제 및 처벌 방지</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 등록 없이는 제조업체와 수입업체가 법적으로 인도 시장에서 제품을
          판매할 수 없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          이층 침대용 BIS 인증 프로세스 단계별 가이드 (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도의 BIS 인증 프로세스에는 테스트, 문서화 및 공장 검사가 포함됩니다.
          다음은 단계별 절차입니다:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1단계 — 적용 가능성 및 표준 결정
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — 필수
          </li>
          <li>제품 카테고리 및 제조 단위 세부사항을 확인합니다.</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2단계 — BIS 신청 (양식 제출)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS Manak 온라인 포털을 통해 온라인으로 신청합니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          요구사항에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조업체 세부사항</li>
          <li>공장 주소 및 증명</li>
          <li>제품 카테고리 및 브랜드</li>
          <li>제조 능력</li>
          <li>품질 관리 프로세스</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          이 단계는 공식 승인 주기를 시작합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3단계 — BIS 인증서 비용 지불
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제출 후 다음을 지불합니다:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 수수료</li>
          <li>테스트 수수료</li>
          <li>감사 수수료</li>
          <li>마킹 수수료</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          수수료는 다음에 따라 다릅니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 변형 수</li>
          <li>브랜드 이름</li>
          <li>공장 위치</li>
          <li>테스트 매개변수</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4단계 — 샘플 테스트 (IS 17636:2022에 따라)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          테스트는 BIS 인정 실험실에서 수행됩니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          테스트에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>구조적 안정성 테스트</li>
          <li>충격 테스트</li>
          <li>끼임 테스트</li>
          <li>가드레일 강도 테스트</li>
          <li>마감 품질 테스트</li>
          <li>사다리 안전 테스트</li>
          <li>하중 테스트</li>
          <li>내구성 테스트</li>
          <li>가장자리 안전 평가</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          테스트 보고서는 BIS 포털에 직접 업로드됩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5단계 — BIS 공장 검사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 담당자가 공장을 방문하여 다음을 확인합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>품질 관리 시스템</li>
          <li>원자재 관리</li>
          <li>공정 중 검사</li>
          <li>최종 제품 테스트</li>
          <li>생산 능력</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 테스트 및 검사 계획(STI) 준수를 확인합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6단계 — BIS 라이선스 발급
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          모든 단계가 완료되면 BIS는 다음을 발급합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 인증서</li>
          <li>ISI 마크 승인</li>
          <li>CML 라이선스 번호</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          이제 이층 침대와 포장에 BIS 마크를 법적으로 사용할 수 있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          7단계 — 라이선스 발급 후 의무사항
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>내부 테스트 유지</li>
          <li>정기적인 BIS 검사 허용</li>
          <li>라이선스를 1년 또는 2년마다 갱신</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          이층 침대용 BIS 라이선스 범위
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> 이 표준은 가정용 및 비가정용 이층 침대의 성능 및
          안전, 즉 강도, 안정성 및 내구성과 관련된 요구사항을 다룹니다. 이
          표준은 또한 마감 바닥면에서 침대 바닥 높이가 800mm 이상인 단일
          침대에도 적용되며, 아래 공간의 용도와 관계없이 적용됩니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> 이 표준은 완전히 제조/제작된 이층 침대에
          적용됩니다. 조립 준비 완료 단위에도 적용되며, 이 경우 이 표준의
          요구사항은 조립된 단위에 적용됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          이층 침대용 BIS 인증에 필요한 문서
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          다음은 BIS 인증서 문서의 전체 목록입니다:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          제조업체 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 등록 증명서</li>
          <li>제조 공정 흐름도</li>
          <li>기계 및 장비 목록</li>
          <li>테스트 장비 목록</li>
          <li>교정 증명서</li>
          <li>공장 배치/플랜트 배치</li>
          <li>CEO/이사 인증서</li>
          <li>ISO 9001 인증서(있는 경우)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신분 증명</li>
          <li>주소 증명</li>
          <li>브랜드 인증(제3자 브랜드인 경우)</li>
          <li>상표 등록 문서(선택사항)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          기술 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 사양</li>
          <li>자재 명세서</li>
          <li>안전 기능 설명</li>
          <li>품질 관리 계획</li>
          <li>내부 테스트 보고서</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 신청 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>약정 및 선언</li>
          <li>테스트 요청 양식</li>
          <li>샘플 승인서</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          적절한 문서를 갖추면 지연을 줄이고 원활한 승인을 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          이층 침대 테스트 요구사항 (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          테스트는 BIS 등록 프로세스의 필수 부분입니다. 이층 침대는 안전성과
          내구성을 보장하기 위해 엄격한 테스트를 거칩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          이층 침대 검사 및 테스트 계획
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  조항
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  요구사항
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  디자인 및 제작
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  치수
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  상층 침대 안전 장벽
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  간격
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  침대 바닥
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  사다리
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  프레임 및 고정 장치의 강도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  안정성
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  상층 침대를 하층 침대에 고정
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          테스트는 BIS 인정 실험실에서만 수행해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          일반적인 문제 및 해결 방법
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>잘못된 제품 분류</strong>
            <br />
            항상 올바른 인도 표준을 확인하세요.
          </li>
          <li>
            <strong>부적절한 문서화</strong>
            <br />
            누락된 문서는 지연을 초래합니다—미리 준비하세요.
          </li>
          <li>
            <strong>실험실 테스트 실패</strong>
            <br />
            고품질 재료, 용접, 가드레일 및 마감을 보장하세요.
          </li>
          <li>
            <strong>검사 준비가 안 된 공장</strong>
            <br />
            QMS 및 테스트 장비가 제대로 유지 관리되도록 하세요.
          </li>
          <li>
            <strong>상표 문제</strong>
            <br />
            브랜드 이름은 라이선스 신청서와 일치해야 합니다.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 문제를 조기에 해결하면 처리 시간이 크게 단축됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          제조업체 및 수입업체를 위한 BIS 인증의 혜택
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도에서 이층 침대를 법적으로 판매</li>
          <li>고객과의 신뢰 구축</li>
          <li>제품 반품 감소</li>
          <li>브랜드 평판 향상</li>
          <li>안전 규정 준수 보장</li>
          <li>경쟁 우위 확보</li>
          <li>소매 체인 및 전자상거래 플랫폼으로 확장</li>
          <li>정부 입찰 접근</li>
          <li>처벌 및 법적 조치 방지</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          규정 미준수에 대한 처벌
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증 없이 이층 침대를 판매하면 다음이 발생할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 압수</li>
          <li>재정적 처벌</li>
          <li>공장 폐쇄 명령</li>
          <li>법적 기소</li>
          <li>인도 시장 금지</li>
          <li>브랜드 블랙리스트</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          규정 준수는 선택사항이 아닙니다—필수입니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          이층 침대용 BIS 인증이 필요한 사람은 누구인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          다음 기업은 이층 침대용 BIS 라이선스를 받아야 합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>인도로 수출하는 외국 제조업체</li>
          <li>수입업체</li>
          <li>유통업체</li>
          <li>전자상거래 판매자</li>
          <li>OEM/ODM 제조업체</li>
          <li>가구 브랜드 및 소매업체</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          모든 공장(회사가 아님)은 별도의 BIS 라이선스가 필요합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증 컨설팅을 위해 저희를 선택하는 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          저희는 이층 침대용 BIS 등록을 위한 엔드투엔드 지원을 제공하며, 다음을
          포함합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>표준 해석 (IS 17636:2022)</li>
          <li>문서 준비</li>
          <li>실험실 테스트 조정</li>
          <li>BIS 포털 신청</li>
          <li>공장 검사 지원</li>
          <li>BIS 담당자와의 소통</li>
          <li>라이선스 승인 지원</li>
          <li>인증 후 규정 준수</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          수년간의 전문 지식으로 빠르고 정확하며 번거로움 없는 BIS 인증을
          보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — 이층 침대용 BIS 인증
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. 인도에서 이층 침대에 대한 BIS 인증이 필수인가요?
              </strong>
              <br />
              네. IS 17636:2022에 따라 모든 제조업체와 수입업체에게 필수입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 이층 침대용 BIS 인증에는 얼마나 걸리나요?</strong>
              <br />
              일반적으로 준비 상태와 문서에 따라 30–45일이 소요됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 외국 제조업체도 BIS를 신청할 수 있나요?</strong>
              <br />
              네, FMCS(외국 제조업체 인증 계획)를 통해 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. BIS 인증서를 온라인으로 신청할 수 있나요?</strong>
              <br />
              네, BIS Manak 온라인 포털을 통해 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 이층 침대 인증에 필요한 테스트는 무엇인가요?</strong>
              <br />
              하중 테스트, 가드레일 테스트, 안정성 테스트, 충격 테스트, 끼임
              테스트 등입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. BIS 라이선스는 얼마나 유효한가요?</strong>
              <br />
              일반적으로 1–2년이며 갱신 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. 하나의 라이선스로 여러 모델을 포함할 수 있나요?
              </strong>
              <br />
              동일한 표준 및 카테고리에 속하는 경우에만 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 이층 침대에 ISI 마크가 필요한가요?</strong>
              <br />
              네, 인증 후 ISI 마크는 필수입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. 제품이 실험실 테스트에 실패하면 어떻게 되나요?
              </strong>
              <br />
              제품을 수정하고 샘플을 다시 제출해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>11. BIS가 공장 인프라를 확인하나요?</strong>
              <br />
              네, 검사 중에 확인합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. 무역업체도 BIS를 신청할 수 있나요?</strong>
              <br />
              브랜드 소유자이고 제조업체와 계약이 있는 경우에만 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. BIS 로고란 무엇인가요?</strong>
              <br />
              제품 적합성을 나타내는 표준 ISI 마크 기호입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>14. BIS 인증에 필요한 문서는 무엇인가요?</strong>
              <br />
              공장 라이선스, 배치, 기계 목록, BOM, QC 계획, 테스트 보고서
              등입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>15. BIS 테스트는 공장에서 수행되나요?</strong>
              <br />
              아니요, BIS 인정 실험실에서만 수행됩니다.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17636:2022에 따른 이층 침대용 BIS 인증서를 받는 것은 필수일 뿐만
          아니라 인도에서 소비자 안전, 제품 신뢰성 및 법적 규정 준수를 보장하는
          데 필수적입니다. 인증 프로세스에는 제품 테스트, 문서화, 공장 검사, 및
          라이선스 발급이 포함됩니다. 적절한 계획과 전문가의 지도로 프로세스는
          원활하고 빠르며 비용 효율적이 됩니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체, 수입업체 또는 브랜드 소유자이든, BIS 인증을 받으면 시장
          지위가 강화되고 고객 신뢰가 증가하며 새로운 비즈니스 기회가 열립니다.
          저희 전문 컨설팅 팀은 이층 침대용 엔드투엔드 BIS 인증을 지원할 준비가
          되어 있습니다.
        </p>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17636-2021-Sun-Certifications-India.pdf"
            title="이층 침대용 BIS 인증서 - IS 17636:2021 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadKorean />

        <FaqAuthorKorean questionNumber={5} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              저희 서비스
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                인도의 최고 인증 컨설턴트
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              외국 제조용 BIS 마크 (ISI 라이선스)
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO 로고"
                title="CDSCO 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO 등록 인증
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS 로고"
                title="BISCRS 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) 등록
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="플라스틱 폐기물 관리"
                title="플라스틱 폐기물 관리"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              플라스틱 폐기물 관리
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPR 인증서 로고"
                title="EPR 인증서 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR 인증서 인증
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC 로고"
                title="LMPC 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC 인증서 인증
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS 로고"
                title="BIS 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS 등록 인증서
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISI 마크 로고"
                title="ISI 마크 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              인도 제조업체용 ISI 마크 (BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
