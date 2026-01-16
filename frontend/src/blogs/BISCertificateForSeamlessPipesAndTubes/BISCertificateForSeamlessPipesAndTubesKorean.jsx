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

const BISCertificateForSeamlessPipesAndTubesKorean = () => {
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

export default BISCertificateForSeamlessPipesAndTubesKorean;

const MetaTags = () => {
  const title =
    "무봉합 파이프 및 튜브용 BIS 인증서 | IS 17875:2022 BIS 라이선스";
  const ogTitle = "무봉합 파이프 및 튜브용 BIS 인증 – IS 17875:2022 가이드";
  const twitterTitle = "무봉합 파이프 및 튜브용 BIS 라이선스 | IS 17875:2022";
  const metaDescription =
    "IS 17875:2022에 따른 무봉합 파이프 및 튜브용 BIS 인증서를 받으세요. 인도에서의 BIS 인증 프로세스, 문서, 테스트, 비용 및 타임라인.";
  const ogDescription =
    "IS 17875:2022에 따른 무봉합 파이프 및 튜브용 BIS 인증에 대한 완전한 가이드. 프로세스, 비용, 문서, 테스트 및 BIS 라이선스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 17875:2022에 따른 무봉합 파이프 및 튜브용 BIS 인증서를 신청하세요. 인도에서의 BIS 프로세스, 문서, 테스트, 수수료 및 타임라인을 알아보세요.";
  const metaKeywords =
    "무봉합 파이프 및 튜브용 BIS 인증서, 무봉합 파이프 및 튜브용 BIS 라이선스, IS 17875:2022, 무봉합 파이프 및 튜브용 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/mubonghab-gwan-mich-tyubeu-is-17875";
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
                    무봉합 파이프 및 튜브용 BIS 인증서 – IS 17875:2022
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
          IS 17875:2022에 따른 무봉합 파이프 및 튜브용 BIS 인증서 — 완전한 인증
          가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="무봉합 파이프 및 튜브용 BIS 라이선스"
            alt="무봉합 파이프 및 튜브용 BIS 인증서 - IS 17875:2022 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          무봉합 강관 및 튜브는 중요한 고압 및 고온 응용 분야에서 우수한
          성능으로 널리 인정받고 있습니다. 석유 및 가스, 석유화학, 정유소,
          중공업, 자동차, 열발전소, 항공우주, 유압 및 일반 기계 시스템과 같은
          산업에서 필수적입니다. 무봉합 파이프는 용접 이음매가 없기 때문에 용접
          파이프에 비해 더 큰 강도, 균일성 및 압력 처리 능력을 제공합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체가 일관된 생산 품질을 따르고 인도 시장에 안전하고 결함이 없는
          제품을 공급하도록 보장하기 위해 인도 정부는 IS 17875:2022에 따라
          무봉합 파이프 및 튜브에 대한 BIS 인증을 의무화했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 포괄적인 페이지는 문서화, 필수 테스트, 품질 준수 요구사항, 수수료,
          타임라인, 기술적 도전, 혜택, 처벌 및 산업 적용 가능성을 포함하여 BIS
          라이선스를 취득하는 전체 프로세스를 설명합니다 — 확장되고 매우
          상세하며 SEO가 풍부한 형식으로 작성되었습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          무봉합 파이프 및 튜브용 BIS 인증이란 무엇인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증서는 인도 표준국에서 발급하는 공식 승인으로, 제조업체가 IS
          17875:2022에 정의된 사양에 따라 무봉합 파이프/튜브를 생산한다는 것을
          확인합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          무봉합 파이프는 다음과 관련된 엄격한 테스트를 거쳐야 합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>압력 저항</li>
          <li>인장 강도</li>
          <li>충격 인성</li>
          <li>굽힘성</li>
          <li>화학 조성</li>
          <li>치수 정확도</li>
          <li>비파괴 평가</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이러한 성능 요구사항을 충족하는 제조업체만 ISI 마크를 받아 인도에서
          무봉합 파이프를 합법적으로 생산, 수입 또는 판매할 수 있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증의 주요 목표
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            산업 공급망에 부적합하거나 위험한 배관 시스템이 유입되는 것을 방지
          </li>
          <li>일관되고 신뢰할 수 있는 제조 품질 보장</li>
          <li>고압 유체 또는 가스 전송에 의존하는 산업 보호</li>
          <li>국가 안전 및 품질 기준 유지</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17875:2022 이해하기 — 무봉합 파이프 및 튜브에 대한 인도 표준
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17875:2022는 일반 서비스를 위한 무봉합 강관 및 튜브의 품질, 테스트,
          제조 및 성능 요구사항을 규정합니다.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          무봉합 파이프 및 튜브용 BIS 라이선스 범위
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> 이 표준은 일반 서비스를 위한 무봉합 스테인리스
          강관 및 튜브의 요구사항을 다룹니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> 이 표준은 특정 목적을 위한 무봉합 스테인리스 강관
          및 튜브의 요구사항을 규정하지 않으며, 이는 별도의 인도 표준에서
          다룹니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17875:2022에서 다루는 응용 분야
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>석유 및 가스 파이프라인</li>
          <li>고온 유체 서비스</li>
          <li>보일러 튜브</li>
          <li>화학 처리 공장</li>
          <li>유압 및 공압 시스템</li>
          <li>열교환기</li>
          <li>구조적 응용</li>
          <li>자동차 부품</li>
          <li>증기 응용</li>
          <li>고압 산업 파이프라인</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17875:2022의 주요 품질 매개변수
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. 화학 조성 요구사항:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          탄소, 망간, 크롬, 니켈, 몰리브덴, 황, 인 등의 한계를 규정합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. 기계적 특성:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인장 강도</li>
          <li>항복 강도</li>
          <li>경도</li>
          <li>연성</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. 치수 허용 오차:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>외경</li>
          <li>벽 두께</li>
          <li>길이 허용 오차</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. 표면 상태:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          파이프는 균열, 박리, 이음매, 긁힘 또는 기타 유해한 결함이 없어야
          합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. 정수압 테스트:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          파이프가 누출 없이 내부 압력을 견딜 수 있도록 보장합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. 비파괴 테스트 (NDT):</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          와전류, 초음파 테스트 또는 자분 탐상 테스트를 포함합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          무봉합 파이프용 완전한 BIS 인증 프로세스 (IS 17875:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          무봉합 파이프에 대한 BIS 인증 프로세스는 제조 및 테스트 요구사항이
          광범위하기 때문에 대부분의 다른 제품보다 더 기술적이고 상세합니다.
          아래는 매우 상세한 단계별 설명입니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 1 — 적용 가능성 및 제품 분류 결정
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>사용 중인 모든 강종 식별</li>
          <li>치수 및 두께 범위 결정</li>
          <li>모든 변형이 IS 17875의 범위 내에 있는지 확인</li>
          <li>BIS 테스트를 위한 제품 분류 준비</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          단일 BIS 라이선스는 동일한 제조 시설과 프로세스를 공유하는 경우 여러
          크기와 등급을 포함할 수 있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 2 — 문서 준비 및 온라인 BIS 신청서 제출
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 Manak 온라인 BIS 포털에 신청해야 합니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          정보에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 세부사항 및 배치도</li>
          <li>생산 능력 및 프로세스</li>
          <li>용광로 및 열처리 세부사항</li>
          <li>압연, 천공 및 인발 장비</li>
          <li>품질 관리 시스템</li>
          <li>원자재 조달 문서</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          잘못된 제출은 BIS 신청 거부의 가장 일반적인 원인 중 하나입니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 3 — 수수료 제출
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          수수료에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 수수료</li>
          <li>처리 수수료</li>
          <li>실험실 테스트 비용</li>
          <li>검사 및 여행 비용</li>
          <li>생산량에 따른 마킹 수수료</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 4 — 샘플 선택 및 BIS 실험실 테스트
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          무봉합 파이프는 광범위한 기계적 및 화학적 테스트를 거칩니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          이것은 BIS 인증의 가장 시간이 많이 걸리고 가장 기술적인 부분입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 화학 조성 테스트</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          다음을 사용하여 수행됩니다:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>광학 방출 분광법</li>
          <li>습식 화학 방법</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          IS 17875에 따른 정확한 화학 조성을 보장합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 기계적 테스트</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>인장 테스트</strong> — 최대 인장 강도, 항복점 및 연신율을
            평가합니다.
          </li>
          <li>
            <strong>경도 테스트</strong> — 재료의 인성을 확인합니다.
          </li>
          <li>
            <strong>평탄화 테스트</strong> — 연성 및 용접성을 테스트합니다
            (무봉합이지만 평탄화는 재료의 무결성을 확인합니다).
          </li>
          <li>
            <strong>플레어링 / 플랜징 테스트</strong> — 균열 없이 변형 가능성을
            보장합니다.
          </li>
          <li>
            <strong>충격 테스트 (샤피)</strong> — 저온에서의 성능을 평가합니다.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 정수압 테스트</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          파이프는 누출이나 변형이 발생하지 않도록 높은 내부 압력을 받습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – 비파괴 테스트</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          내부 결함을 감지하기 위한 필수 사항입니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          방법에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>초음파 검사</li>
          <li>와전류 검사</li>
          <li>자분 탐상 검사 (MPI)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 시각 및 치수 검사</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          다음을 평가합니다:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>표면 마감</li>
          <li>직선도</li>
          <li>타원도</li>
          <li>두께 허용 오차</li>
          <li>직경 정확도</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 금속학적 검사</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          미세구조 분석은 결정 구조, 열처리 효과 및 재료 안정성을 확인합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 5 — BIS 공장 검사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          테스트 결과가 성공적이면 BIS 담당자가 공장을 방문합니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          다음을 검사합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>원자재 저장</li>
          <li>용광로/열처리 프로세스</li>
          <li>천공 밀, 감소기 및 냉간 인발 벤치</li>
          <li>정수압 테스트 시설</li>
          <li>NDT 시설</li>
          <li>실험실 장비 및 교정</li>
          <li>품질 관리 로그북</li>
          <li>제조 능력 확인</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          공장은 테스트 및 검사 계획(STI)을 완전히 준수해야 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 6 — BIS 라이선스 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          테스트 및 검사가 BIS 요구사항을 충족하면 제조업체는 다음을 받습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 인증서</li>
          <li>CML 번호</li>
          <li>무봉합 파이프에 ISI 마크 사용 권한</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS는 하나의 요구사항이라도 충족되지 않으면 신청을 거부할 수 있습니다
          — 전문가의 지도가 극히 중요합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 7 — 인증 후 의무사항
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>라벨, 포장 및 파이프에 ISI 마크를 올바르게 사용</li>
          <li>STI에 따라 내부 테스트 유지</li>
          <li>정기적인 BIS 감시 검사 받기</li>
          <li>모든 배치가 IS 17875:2022를 준수하는지 확인</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          준수 사항을 유지하지 못하면 라이선스가 정지되거나 취소될 수 있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          무봉합 파이프 BIS 인증에 필요한 문서
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          A. 제조 및 생산 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 라이선스</li>
          <li>기계 배치가 포함된 배치도</li>
          <li>품질 관리 프로세스 매뉴얼</li>
          <li>열처리 기록</li>
          <li>원자재 밀 테스트 인증서</li>
          <li>압연/천공 프로세스 세부사항</li>
          <li>인발 벤치 세부사항</li>
          <li>테스트 장비 교정 인증서</li>
          <li>내부 테스트 보고서</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          B. 기술 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>자재 명세서</li>
          <li>화학 등급 사양</li>
          <li>기계적 특성 시트</li>
          <li>치수 허용 오차 차트</li>
          <li>파이프 도면 및 사양</li>
          <li>자재 추적 시스템 문서</li>
          <li>생산 표준 운영 절차</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          C. 법적 및 조직 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>권한 부여서</li>
          <li>브랜드/상표 소유권 문서</li>
          <li>신원 및 주소 증명</li>
          <li>BIS가 요구하는 각서 및 선언서</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17875:2022에 따른 무봉합 파이프 테스트 요구사항
        </h2>

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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  용탕 분석
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  제품 분석
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  인장 요구사항
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  파이프
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  튜브
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  플레어링 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  평탄화 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  결정 크기
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  누출 밀봉 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  제작, 마감, 외관
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  치수 및 허용 오차
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증의 일반적인 도전 과제
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>화학 조성 테스트 실패</strong>
            <br />
            일관되지 않은 강종으로 인해 발생합니다.
          </li>
          <li>
            <strong>기계적 테스트 실패</strong>
            <br />
            잘못된 열처리로 인해 자주 발생합니다.
          </li>
          <li>
            <strong>NDT 거부</strong>
            <br />
            내부 균열이나 개재물이 샘플 실패를 유발할 수 있습니다.
          </li>
          <li>
            <strong>부적절한 교정</strong>
            <br />
            부정확한 테스트 데이터로 이어집니다.
          </li>
          <li>
            <strong>STI 미준수</strong>
            <br />
            검사 중 잘못된 기록 보관이 주요 거부 이유가 됩니다.
          </li>
          <li>
            <strong>치수 변동</strong>
            <br />
            파이프 직경 또는 두께 불일치로 인해 실패가 발생합니다.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          무봉합 파이프용 BIS 인증의 혜택
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도에서 제조/판매할 수 있는 법적 승인</li>
          <li>안전성과 신뢰성 보장</li>
          <li>브랜드 평판 향상</li>
          <li>정부 입찰에 필수</li>
          <li>공공기관 및 민간 산업에서 요구</li>
          <li>소비자를 부적합 제품으로부터 보호</li>
          <li>수출 경쟁력 향상</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          미준수에 대한 처벌
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 법에 따라 인증되지 않은 무봉합 파이프 판매는 다음을 초래합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 압수</li>
          <li>과중한 처벌</li>
          <li>제조 중단</li>
          <li>수입 제한</li>
          <li>브랜드 블랙리스트</li>
          <li>형사 기소</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          누가 BIS 인증을 받아야 하나요?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>인도로 수출하는 외국 제조업체</li>
          <li>무역업자 (브랜드 소유자)</li>
          <li>OEM 및 엔지니어링 회사</li>
          <li>수입업자 및 재고업자</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          모든 제조 단위는 별도의 라이선스를 취득해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17875:2022에 따른 무봉합 파이프 및 튜브용 BIS 인증서는 고압 서비스
          파이프가 인도의 엄격한 안전 및 품질 기준을 충족하도록 보장하는 중요한
          규제 요구사항입니다. 화학 조성부터 고급 비파괴 테스트까지, BIS는 모든
          인증된 파이프가 내구성이 있고 결함이 없으며 까다로운 산업 조건에서
          작동할 수 있도록 보장합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          전문가의 지도를 통해 제조업체는 인증 여정을 간소화하고 지연을
          최소화하며 원활하게 준수를 달성할 수 있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          자주 묻는 질문 — 무봉합 파이프 BIS 인증 (확장 및 SEO 풍부)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. 무봉합 파이프에 BIS 인증이 의무적인 이유는 무엇인가요?
              </strong>
              <br />
              무봉합 파이프는 고압 및 안전이 중요한 응용 분야에서 사용되기
              때문입니다. 정부 규정은 고품질 파이프만 인도 시장에 진입하도록
              보장합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 무봉합 파이프에 적용되는 표준은 무엇인가요?</strong>
              <br />
              IS 17875:2022입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 인증 프로세스는 얼마나 걸리나요?</strong>
              <br />
              일반적으로 인도 제조업체의 경우 40–60일, 외국 제조업체의 경우 약
              120일이 소요되며, 테스트 부하 및 검사 일정에 따라 다릅니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 어떤 테스트가 필요한가요?</strong>
              <br />
              화학 분석, 인장 테스트, 경도, 정수압, NDT, 평탄화, 플레어링 및
              치수 검사입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 외국 회사도 BIS 인증을 신청할 수 있나요?</strong>
              <br />
              네, FMCS 제도를 통해 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 제품이 테스트에 실패하면 어떻게 되나요?</strong>
              <br />
              수정하고 재테스트해야 하며, BIS는 완전한 준수가 달성될 때까지
              라이선스를 발급하지 않습니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 어떤 문서가 필요한가요?</strong>
              <br />
              공장 라이선스, 기계 목록, 테스트 장비, 도면, QC 문서, 원자재
              인증서 등입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ISI 마킹이 의무인가요?</strong>
              <br />
              네. ISI 마크를 표시하지 않고 무봉합 파이프를 판매하는 것은
              불법입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 하나의 라이선스에 여러 등급이 허용되나요?</strong>
              <br />
              네, 동일한 시설과 프로세스를 사용하여 생산하는 경우 (BIS 승인
              필요) 허용됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. BIS 라이선스는 얼마나 유효한가요?</strong>
              <br />
              1–2년이며, 무기한 갱신 가능합니다.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="무봉합 파이프 및 튜브용 BIS 인증서 - IS 17875:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadKorean />
        <FaqAuthorKorean questionNumber={2} />
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
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Best Certificate Consultant
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
              BIS Mark (ISI License) for Foreign Manufacture
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO Registration Certification
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registration
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plastic Waste Management
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificate certifications
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Certificate certifications
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
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
              BIS Registration Certificate
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
