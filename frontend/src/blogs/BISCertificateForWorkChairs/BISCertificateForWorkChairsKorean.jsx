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

const BISCertificateForWorkChairsKorean = () => {
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

export default BISCertificateForWorkChairsKorean;

const MetaTags = () => {
  const title = "업무용 의자용 BIS 인증서 | IS 17631:2022 BIS 라이선스";
  const ogTitle = "업무용 의자용 BIS 인증 – IS 17631:2022 가이드";
  const twitterTitle = "업무용 의자용 BIS 라이선스 | IS 17631:2022";
  const metaDescription =
    "IS 17631:2022에 따른 업무용 의자용 BIS 인증서를 받으세요. 인도의 BIS 인증을 위한 프로세스, 문서, 테스트, 비용 및 일정.";
  const ogDescription =
    "IS 17631:2022에 따른 업무용 의자용 BIS 인증에 대한 완전한 가이드. 프로세스, 비용, 문서, 테스트 및 BIS 라이선스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 17631:2022에 따른 업무용 의자용 BIS 인증서를 신청하세요. 인도의 BIS 프로세스, 문서, 테스트, 수수료 및 일정을 알아보세요.";
  const metaKeywords =
    "업무용 의자용 BIS 인증서, 업무용 의자용 BIS 라이선스, IS 17631:2022, 업무용 의자용 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631";
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
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
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
                    업무용 의자용 BIS 인증서 – IS 17631:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          업무용 의자용 BIS 인증서 – IS 17631:2022 완전한 규정 준수 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="업무용 의자용 BIS 라이선스"
            alt="업무용 의자용 BIS 인증서 - IS 17631:2022 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          기업 워크스페이스, 공동 작업 공간, 홈 오피스 또는 기관 설정에서든
          사무실 및 작업용 좌석 사용이 증가하면서 안전성과 인체공학적 성능이
          필수적이 되었습니다. 제조업체가 구조적으로 안정적이고 내구성이 있으며
          사용자에게 안전한 좌석 제품을 공급하도록 보장하기 위해 인도 정부는 IS
          17631:2022에 따라 업무용 의자에 대한 BIS 인증을 의무화했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          업무용 의자는 일반적으로 반복적인 하중, 지속적인 신체 움직임, 기울임,
          회전 및 높이 조정을 견뎌야 합니다. 모든 성능 기능의 실패는 심각한
          부상을 초래할 수 있습니다. 이것이 IS 17631:2022 – 업무용 의자: 안전
          요구사항 준수가 모든 제조업체 및 수입업체에게 현재 의무화된
          이유입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 가이드는 표준, 테스트, 수수료, 문서화, 책임, 혜택 및 과제를 포함한
          완전한 BIS 라이선스 프로세스를 설명합니다—웹사이트 전체에서 중복을
          피하기 위해 새로운 콘텐츠로 작성되었습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자용 BIS 인증 이해
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도 표준국(BIS)은 인도 시장 내에서 공급되는 제품의 품질과 안전을
          감독합니다. 의무적인 품질 관리 명령에 나열된 인도 표준에 해당하는 모든
          제품은 판매 전에 BIS에 의해 평가 및 인증되어야 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증서 – 그것이 나타내는 것
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증서는 업무용 의자가 다음을 나타냅니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>성능 및 내구성 테스트를 통과했습니다</li>
          <li>재료 및 구조 사양을 충족합니다</li>
          <li>장기간 일일 사용에 안전합니다</li>
          <li>인도 표준의 인체공학적 및 구조적 지침을 준수합니다</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 요구사항을 충족하는 제조업체는 ISI 마크를 부착할 수 있는 BIS
          라이선스를 발급받습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자에 적용되는 표준 – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          작업 및 사무실 업무용 의자를 관리하는 표준은 다음과 같습니다:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – 업무용 의자: 안전 요구사항
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 작업 환경에서 장기간 사용을 위한 좌석에 중점을 둡니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          이 표준에 포함된 제품
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인체공학적 사무용 의자</li>
          <li>작업용 의자</li>
          <li>회전 의자</li>
          <li>작업용 책상 의자</li>
          <li>높이 조절 가능한 업무용 의자</li>
          <li>임원용 업무용 의자</li>
          <li>메쉬 또는 패브릭 백 업무용 의자</li>
          <li>팔걸이가 있는 의자</li>
          <li>기울임/잠금 메커니즘이 있는 의자</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17631:2022 준수가 중요한 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          업무용 의자는 일반 용도 의자와 크게 다릅니다. 왜냐하면:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>지속적인 움직임을 지원합니다</li>
          <li>기계적 및 조정 메커니즘을 사용합니다</li>
          <li>동적 하중을 운반합니다</li>
          <li>장기간 사용을 위한 내구성이 필요합니다</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          제대로 만들지 않은 의자는 다음에서 실패할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>베이스 조인트</li>
          <li>회전 메커니즘</li>
          <li>가스 리프트 시스템</li>
          <li>좌석/등받이 지지대</li>
          <li>다리 또는 캐스터 구조</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          이것은 작업장 부상, 운영 중단 및 제품 책임 문제로 이어질 수 있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          의무적인 BIS 인증이 보장하는 것
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>안전한 인체공학적 디자인</li>
          <li>신뢰할 수 있는 하중 지지 능력</li>
          <li>순환 테스트 하에서 강한 내구성</li>
          <li>기계적 마모에 대한 저항</li>
          <li>사용자 안전 매개변수 준수</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          따라서 업무용 의자에 대한 BIS 라이선스 취득은 인도 및 외국
          제조업체에게 필수입니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자용 BIS 라이선스 범위
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 표준은 업무용 의자의 요구사항을 다룹니다. 이 표준은 완전히
          제조/제작된 업무용 의자에 적용됩니다. 또한 조립 준비 완료 유닛에도
          적용되며, 이 경우 이 표준의 요구사항은 조립된 유닛에 적용됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자용 BIS 인증 프로세스 단계별 가이드 (IS 17631:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          업무용 의자의 인증 프로세스에는 실험실 평가, 공장 감사 및 기술 검토가
          혼합되어 있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 1 – 제품 평가 및 표준 매핑
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          모든 의자 변형을 식별하고 IS 17631:2022와 정렬합니다. 어떤 모델이
          동일한 구조를 공유하고 어떤 것이 별도의 테스트를 필요로 하는지
          이해합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 2 – 온라인 신청서 제출
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 Manak 온라인 BIS 포털을 통해 신청서를 제출합니다. 필요한
          정보에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조 현장 세부사항</li>
          <li>원자재 관리</li>
          <li>기술 사양</li>
          <li>생산 능력</li>
          <li>브랜드 소유권 문서</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 3 – 수수료 지불
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          다음에 대한 수수료를 지불해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청</li>
          <li>처리</li>
          <li>테스트</li>
          <li>검사</li>
          <li>마킹</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 4 – 샘플 테스트 (IS 17631:2022 요구사항)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인정 실험실이 여러 안전 및 성능 기준에 대해 의자를 평가합니다.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          업무용 의자 테스트에는 다음이 포함됩니다
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>좌석 및 등받이 정적 하중 테스트</li>
          <li>내구성 하중 사이클</li>
          <li>회전/회전 테스트</li>
          <li>기울임 메커니즘 내구성</li>
          <li>가스 리프트 메커니즘 성능</li>
          <li>캐스터 강도 및 구름 저항</li>
          <li>베이스 안정성 및 과부하 테스트</li>
          <li>팔걸이 하중 능력</li>
          <li>충격 저항 테스트</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          실험실은 BIS에 상세한 테스트 보고서를 발행합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 5 – 공장 감사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 검사관은 시설의 다음을 검토합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>생산 시스템</li>
          <li>재료 검사 기록</li>
          <li>내부 품질 보증 프로세스</li>
          <li>테스트 기기 및 교정 로그</li>
          <li>테스트 및 검사 계획(STI) 준수</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 6 – BIS 라이선스 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          적합성이 확인되면 BIS는 다음을 부여합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 라이선스/ISI 마크 인증</li>
          <li>고유한 CML 번호</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 7 – 지속적인 준수
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>지속적인 내부 점검 유지</li>
          <li>마킹 규칙 준수</li>
          <li>감시 검사 중 협력</li>
          <li>라이선스를 정기적으로 갱신</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자용 BIS 인증에 필요한 문서
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          완전한 문서 세트는 더 빠른 승인을 보장합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          사업 및 공장 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 등록</li>
          <li>제조 다이어그램 및 레이아웃</li>
          <li>생산 워크플로우</li>
          <li>기계 목록</li>
          <li>테스트 장비 목록</li>
          <li>교정 인증서</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          기술 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>의자 엔지니어링 도면</li>
          <li>메커니즘 사양</li>
          <li>재료 데이터 시트</li>
          <li>자재 명세서</li>
          <li>조립 지침서</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>승인 서명자의 신원 증명</li>
          <li>브랜드 승인 서한</li>
          <li>상표 인증서</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 특정 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청서</li>
          <li>약정서</li>
          <li>테스트 요청서</li>
          <li>라벨 샘플</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17631:2022에 따른 테스트 요구사항
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          업무용 의자는 움직이는 부품으로 인해 일반 의자보다 더 복잡한 테스트를
          거칩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          수행되는 주요 테스트
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
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  전면 가장자리 전도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  전방 전도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  발판이 있는 의자의 전방 전도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  팔걸이가 없는 의자의 측면 전도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  팔걸이가 있는 의자의 측면 전도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  등받이가 없는 의자의 후방 전도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  좌석 전면 가장자리 정적 하중 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  좌석 및 등받이 결합 정적 하중 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  팔걸이 하향 정적 하중 테스트 — 중앙
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  팔걸이 하향 정적 하중 테스트 — 전면
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  팔걸이 측면 정적 하중 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  발판 정적 하중 테스트
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          이러한 테스트는 며칠 내에 몇 달 또는 몇 년의 정기적인 사용을
          시뮬레이션합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자용 BIS 인증의 일반적인 과제
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>✔ 1. 기계/기울임 테스트 실패</strong> – 약한 메커니즘 또는
            저품질 하드웨어로 인한 경우가 많습니다.
          </li>
          <li>
            <strong>✔ 2. 가스 리프트 메커니즘 미준수</strong> – 가스 리프트는
            엄격한 압력 및 안전 매개변수를 충족해야 합니다.
          </li>
          <li>
            <strong>✔ 3. 불충분한 테스트 인프라</strong> – 업무용 의자
            테스트에는 전문 장비가 필요합니다.
          </li>
          <li>
            <strong>✔ 4. 잘못된 제품 그룹화</strong> – 다른 메커니즘 = 별도의
            테스트.
          </li>
          <li>
            <strong>✔ 5. STI 미준수</strong> – STI 오류는 라이선스 발급을
            지연시킬 수 있습니다.
          </li>
          <li>
            <strong>✔ 6. 문서 불일치</strong> – 브랜드 이름과 모델 이름은 BIS
            신청서와 정확히 일치해야 합니다.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자용 BIS 인증의 장점
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 전역에서 합법적인 판매를 용이하게 합니다</li>
          <li>고객 신뢰 및 브랜드 평판 향상</li>
          <li>장기적인 내구성 보장</li>
          <li>보증 청구 및 고장 감소</li>
          <li>규제 처벌로부터 보호</li>
          <li>전자상거래 플랫폼에 등록 가능</li>
          <li>정부 입찰 및 기업 공급에 필수</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증 없이 업무용 의자를 판매할 경우의 처벌
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          미준수는 다음을 초래할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>심각한 금전적 처벌</li>
          <li>재고 압수</li>
          <li>생산 중단 명령</li>
          <li>수입 금지</li>
          <li>형사 기소</li>
          <li>사업 라이선스 취소</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          엄격한 집행은 BIS법 2016에 따라 수행됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          업무용 의자용 BIS 인증을 받아야 하는 사람은 누구인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          다음에 필수입니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>인도로 수출하는 외국 제조업체</li>
          <li>브랜드 소유자</li>
          <li>수입업체</li>
          <li>OEM/ODM 공급업체</li>
          <li>창고 유통업체</li>
          <li>소매 및 온라인 가구 브랜드</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          각 공장에는 고유한 BIS 라이선스가 필요합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022에 따른 업무용 의자용 BIS 인증서는 인도에서 안전하고
          내구성이 있으며 인체공학적으로 건전한 좌석 제품을 보장하는 데
          중요합니다. 의무적인 인증은 고객 신뢰를 향상시키고, 제품 책임 위험을
          줄이며, 국가 품질 표준 준수를 보장합니다. 전문적인 지원을 통해
          테스트부터 검사, 라이선싱까지의 인증 여정이 효율적이고 예측
          가능해집니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 업무용 의자용 BIS 인증서 (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. IS 17631:2022에 해당하는 의자는 무엇입니까?</strong>
              <br />
              작업 환경을 위해 설계된 모든 의자, 사무용 인체공학적 의자, 작업용
              의자, 회전 의자 및 조절 가능한 의자를 포함합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 업무용 의자에 BIS 인증이 필수입니까?</strong>
              <br />
              예. 인도에서 업무용 의자를 제조, 판매 또는 수입하기 전에 BIS
              인증이 의무입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. 업무용 의자 테스트가 일반 의자 테스트와 다른 이유는
                무엇입니까?
              </strong>
              <br />
              업무용 의자는 회전, 가스 리프트, 기울임 시스템 및 캐스터와 같은
              메커니즘을 사용하므로 고급 기계적 및 내구성 테스트가 필요합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. BIS 인증에는 얼마나 걸립니까?</strong>
              <br />
              테스트 및 문서에 따라 인도 제조업체의 경우 일반적으로 30-45일,
              외국 제조업체의 경우 약 120일이 소요됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 외국 제조업체도 신청할 수 있습니까?</strong>
              <br />
              예, FMCS(외국 제조업체 인증 계획)를 통해 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 의자가 BIS 테스트에 실패하면 어떻게 됩니까?</strong>
              <br />
              IS 17631:2022를 충족할 때까지 재설계, 수정 및 재테스트해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. BIS 신청에 필요한 문서는 무엇입니까?</strong>
              <br />
              공장 세부사항, 제품 도면, 기계 목록, QC 문서, 브랜드 소유권 및
              법적 서류.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 모든 의자 모델에 별도의 테스트가 필요합니까?</strong>
              <br />
              모델이 디자인, 메커니즘 또는 구조에서 다른 경우 별도의 테스트가
              필요할 수 있습니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 승인 후 ISI 마킹이 필수입니까?</strong>
              <br />
              예, ISI 마크는 제품, 라벨 및 포장에 표시되어야 합니다.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="업무용 의자용 BIS 인증서 - IS 17631:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadKorean />

        <FaqAuthorKorean questionNumber={4} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              우리의 서비스
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                인도 최고의 인증서 컨설턴트
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
              외국 제조업체용 BIS 마크 (ISI 라이선스)
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
