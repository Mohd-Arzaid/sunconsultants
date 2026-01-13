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

const BISCertificateForFlashlightKorean = () => {
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

export default BISCertificateForFlashlightKorean;

const MetaTags = () => {
  const title = "손전등 BIS 인증서 | IS 2083:2024 BIS 라이센스";
  const ogTitle = "손전등 BIS 인증 – IS 2083:2024 가이드";
  const twitterTitle = "손전등 BIS 라이센스 | IS 2083:2024";
  const metaDescription =
    "IS 2083:2024에 따른 손전등 BIS 인증서를 받으세요. 인도에서 BIS 인증을 위한 프로세스, 서류, 테스트, 비용 및 일정.";
  const ogDescription =
    "IS 2083:2024에 따른 손전등 BIS 인증 완전 가이드. 프로세스, 비용, 서류, 테스트 및 BIS 라이센스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 2083:2024에 따른 손전등 BIS 인증서를 신청하세요. 인도에서 BIS 프로세스, 서류, 테스트, 수수료 및 일정을 알아보세요.";
  const metaKeywords =
    "손전등 BIS 인증서, 손전등 BIS 라이센스, IS 2083:2024, 손전등 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/sonjeondeung-is-2083";
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
                    손전등 BIS 인증서 – IS 2083:2024
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
          IS 2083:2024에 따른 손전등 BIS 인증서 – 완전한 규정 준수 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="손전등 BIS 라이센스"
            alt="손전등 BIS 인증서 - IS 2083:2024 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          손전등(일반적으로 토치라고 불림)은 가정, 산업, 응급 서비스, 보안 작업,
          야외 활동 및 재난 관리에서 사용되는 필수 휴대용 조명 장치입니다.
          손전등은 배터리, 회로, 광원 및 외장을 포함하는 전기 제품이기 때문에
          품질 및 안전 규정 준수가 중요합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          제품 품질, 성능 및 소비자 안전을 규제하기 위해 인도 표준국(BIS)은 IS
          2083:2024 – 손전등: 사양을 고시하여 인도에서 판매, 제조 또는 수입되는
          손전등에 BIS 인증을 의무화했습니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 페이지는 손전등에 대한 BIS 인증에 대한 포괄적이고 독창적인 설명을
          제공하며, 적용 가능한 표준, 인증 프로세스, 테스트 요구사항, 문서,
          수수료, 일정, 처벌 및 규정 준수 책임을 다룹니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증이란 무엇이며 손전등에 적용되는 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도 표준국(BIS)은 인도 시장에서 판매되는 제품이 규정된 안전, 품질 및
          성능 기준을 충족하도록 보장하는 책임을 맡은 인도의 국가 표준
          기관입니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증의 의미
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증서는 손전등이 다음을 확인합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 표준 IS 2083:2024를 준수함</li>
          <li>모든 필수 실험실 테스트를 통과함</li>
          <li>전기, 기계 및 성능 요구사항을 충족함</li>
          <li>소비자 사용에 안전함</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          승인되면 제조업체는 인도 표준 준수를 나타내는 ISI 마크를 부착할 수
          있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          적용 가능한 인도 표준 – IS 2083:2024 (손전등: 사양)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – 손전등: 사양
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 2083:2024는 일반 조명에 사용되는 휴대용 손전등의 구조, 성능, 안전
          및 테스트 요구사항을 정의합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 2083:2024의 적용 범위
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 다음을 다룹니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>휴대용 손전등(토치)</li>
          <li>배터리 작동 손전등</li>
          <li>충전식 손전등</li>
          <li>LED 손전등</li>
          <li>비상 및 유틸리티 손전등</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          표준에서 다루는 주요 영역
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>전기 안전</li>
          <li>발광 성능</li>
          <li>기계적 강도</li>
          <li>배터리 호환성</li>
          <li>스위치 내구성</li>
          <li>과열 방지</li>
          <li>일반 마모에 대한 저항</li>
          <li>표시 및 라벨링 요구사항</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 범위에 속하는 모든 손전등은 인도 시장에 진입하기 전에 손전등 BIS
          라이센스를 취득해야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          손전등에 BIS 인증이 의무인 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          손전등은 모든 연령대의 소비자에게 널리 사용되며 응급 상황, 정전 및
          산업 운영과 같은 중요한 상황에서 사용됩니다. 기준 미달 손전등은 다음을
          유발할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>전기 단락</li>
          <li>배터리 누출 또는 폭발</li>
          <li>과열</li>
          <li>화재 위험</li>
          <li>조명 성능 저하</li>
          <li>조기 고장</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증이 보장하는 것
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>전기 및 사용자 안전</li>
          <li>일관된 광 출력</li>
          <li>내구성 있는 구조</li>
          <li>안전한 배터리 작동</li>
          <li>인도 규제 요구사항 준수</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증되지 않은 손전등 판매는 BIS법 2016에 따른 법적 위반입니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          손전등 BIS 라이센스의 적용 범위
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> 이 표준은 교체 가능한 1차 배터리 및 최대 48V
          d.c.의 교체 가능/내장 2차 배터리로 작동하는 손전등의 요구사항 및
          테스트를 규정합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> 이 표준은 백열 전구 및 LED 모듈을 광원으로 하는
          사전 초점 및 초점 조절형 손전등에 적용됩니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> 다음은 이 표준의 적용 범위에 포함되지 않습니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            IS 10322(Part 5/Sec 6)의 적용 범위에 있는 코드 및 플러그 연결
            핸드램프;
          </li>
          <li>IS 10322(Part 5/Sec 8)의 적용 범위에 있는 비상 조명; 및</li>
          <li>위험한 장소용 손전등.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          손전등 BIS 인증 프로세스 (IS 2083:2024)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          손전등의 BIS 인증 프로세스는 ISI 마크 인증 제도(Scheme-I)에 따라
          수행되며 여러 단계를 포함합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 1 – 제품 식별 및 표준 매핑
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 제품이 IS 2083:2024에 따라 손전등 자격을 갖추었는지
          확인하고 다음을 식별해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>손전등 유형</li>
          <li>전원(배터리/충전식)</li>
          <li>광원(LED, 전구 등)</li>
          <li>변형 및 모델</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 2 – 온라인 BIS 신청
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          신청서는 BIS Manak 온라인 포털을 통해 다음과 함께 제출됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조업체 세부정보</li>
          <li>공장 주소</li>
          <li>제품 설명</li>
          <li>브랜드/상표 세부정보</li>
          <li>제조 프로세스 정보</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 3 – BIS 수수료 지불
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          적용 수수료에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 수수료</li>
          <li>처리 수수료</li>
          <li>제품 테스트 수수료</li>
          <li>공장 검사 수수료</li>
          <li>표시 수수료</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 4 – IS 2083:2024에 따른 제품 테스트
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          샘플은 BIS 인정 실험실에서 테스트됩니다.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          손전등 필수 테스트
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>발광 강도 테스트</li>
          <li>광 출력 안정성 테스트</li>
          <li>배터리 내구성 테스트</li>
          <li>스위치 작동 테스트</li>
          <li>기계적 강도(낙하 테스트)</li>
          <li>절연 저항 테스트</li>
          <li>온도 상승 테스트</li>
          <li>전기 안전 테스트</li>
          <li>표시 및 라벨링 검증</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          테스트 보고서는 실험실에서 직접 BIS에 제출됩니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 5 – 공장 검사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 담당자가 현장 검사를 수행하여 다음을 확인합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조 시설</li>
          <li>품질 관리 시스템</li>
          <li>입고 자재 검사</li>
          <li>공정 중 검사</li>
          <li>완제품 테스트</li>
          <li>테스트 기기 교정</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          테스트 및 검사 제도(STI) 준수가 필수입니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 6 – BIS 라이센스 발급
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          테스트 및 검사가 성공적으로 완료된 후 BIS는 다음을 발급합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 인증서</li>
          <li>ISI 마크 승인</li>
          <li>CML(제조 라이센스 인증서) 번호</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          제조업체는 이제 인도에서 합법적으로 손전등을 제조 및 판매할 수
          있습니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 7 – 인증 후 규정 준수
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          인증 후 제조업체는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 및 포장에 ISI 마크를 올바르게 사용</li>
          <li>배치별 품질 기록 유지</li>
          <li>BIS 감시 검사 허용</li>
          <li>라이센스를 정기적으로 갱신</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          손전등 BIS 인증에 필요한 서류
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          제조 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 등록/라이센스</li>
          <li>제조 프로세스 흐름도</li>
          <li>기계 목록</li>
          <li>사내 테스트 장비 목록</li>
          <li>교정 인증서</li>
          <li>공장 배치도</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          기술 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 사양서</li>
          <li>회로도</li>
          <li>배터리 사양</li>
          <li>자재 명세서</li>
          <li>내부 테스트 보고서</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>승인된 서명자의 신원 증명</li>
          <li>주소 증명</li>
          <li>브랜드 승인서</li>
          <li>상표 인증서(해당되는 경우)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 특정 서류
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 신청서</li>
          <li>약속 및 선언</li>
          <li>테스트 요청서</li>
          <li>라벨 원고(ISI 표시 형식)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 2083:2024에 따른 테스트 요구사항 (상세)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          손전등은 안전성과 성능을 보장하기 위해 엄격한 테스트를 거쳐야 합니다.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          모든 필수 테스트를 통과한 제품만 BIS 승인을 받을 수 있습니다.
        </p>

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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  마감 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  치수 확인
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  표시 확인
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  스위치 기능 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  절연 저항 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  광 분포 테스트
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  LED 손전등 회로 전류
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  내장 충전식 배터리 작동 손전등의 충전 전류 테스트
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          손전등 BIS 인증의 일반적인 과제
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>온도 상승 테스트 실패</li>
          <li>일관성 없는 발광 출력</li>
          <li>스위치 내구성 부족</li>
          <li>배터리 호환성 문제</li>
          <li>잘못된 ISI 라벨 형식</li>
          <li>불완전한 문서</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          사전 테스트 및 전문가 지도는 거부 위험을 크게 줄입니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          손전등 제조업체를 위한 BIS 인증의 이점
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도에서 판매할 수 있는 법적 허가</li>
          <li>향상된 소비자 신뢰</li>
          <li>개선된 제품 신뢰성</li>
          <li>전자상거래 플랫폼에서의 수용</li>
          <li>정부 조달 자격</li>
          <li>책임 및 리콜 감소</li>
          <li>강력한 브랜드 신뢰성</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증 없이 손전등을 판매하는 것에 대한 처벌
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          비준수는 다음을 초래할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제품 압수</li>
          <li>과중한 금전적 처벌</li>
          <li>수입 금지</li>
          <li>제조 중단</li>
          <li>BIS법에 따른 형사 기소</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          손전등 BIS 인증이 필요한 사람은 누구인가?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>인도로 수출하는 외국 제조업체</li>
          <li>수입업자</li>
          <li>브랜드 소유자</li>
          <li>OEM/ODM 공급업체</li>
          <li>온라인 판매자 및 유통업체</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          각 제조 단위는 별도의 BIS 라이센스가 필요합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 2083:2024에 따른 손전등 BIS 인증서는 인도에서 휴대용 조명 제품의
          안전성, 성능 및 신뢰성을 보장하는 필수 규제 요구사항입니다. 규정
          준수는 소비자를 보호할 뿐만 아니라 브랜드 신뢰성과 시장 접근성을
          강화합니다. 전문가의 지도를 통해 제조업체와 수입업체는 원활하고
          효율적으로 BIS 인증을 달성할 수 있습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 손전등 BIS 인증서 (IS 2083:2024)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 인도에서 손전등에 BIS 인증이 의무인가요?</strong>
              <br />
              예. IS 2083:2024에 해당하는 손전등은 BIS 인증을 받아야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 손전등에 적용되는 표준은 무엇인가요?</strong>
              <br />
              IS 2083:2024 – 손전등: 사양.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. BIS 프로세스는 얼마나 걸리나요?</strong>
              <br />
              인도 제조업체의 경우 약 30–45 영업일, 외국 제조업체의 경우 약
              120일이 소요됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 외국 제조업체도 BIS 인증을 신청할 수 있나요?</strong>
              <br />
              예, FMCS 제도를 통해 신청할 수 있습니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ISI 표시가 의무인가요?</strong>
              <br />
              예, 인증된 손전등에는 ISI 마크를 표시해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 손전등이 테스트에 실패하면 어떻게 되나요?</strong>
              <br />
              제품을 수정하고 재테스트해야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 충전식 손전등도 포함되나요?</strong>
              <br />
              예, IS 2083:2024의 적용 범위에 속하면 포함됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. BIS 라이센스는 얼마나 유효한가요?</strong>
              <br />
              1–2년, 갱신 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. 하나의 라이센스로 여러 모델을 포함할 수 있나요?
              </strong>
              <br />
              예, 유사성 기준을 충족하면 가능합니다.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-2083-2024-Sun-Certifications-India.pdf"
            title="BIS Certificate for Flashlight - IS 2083:2024 PDF"
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
                인도 최고의 인증 컨설턴트
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
              외국 제조를 위한 BIS 마크 (ISI 라이센스)
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
                alt="BISCRS logo"
                title="BISCRS logo"
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
                alt="BIS Logo"
                title="BIS Logo"
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
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              인도 제조를 위한 ISI 마크 (BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
