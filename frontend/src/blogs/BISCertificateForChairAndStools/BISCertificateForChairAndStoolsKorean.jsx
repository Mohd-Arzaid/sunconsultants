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

const BISCertificateForChairAndStoolsKorean = () => {
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

export default BISCertificateForChairAndStoolsKorean;

const MetaTags = () => {
  const title = "의자 및 스툴용 BIS 인증서 | IS 17632:2022 BIS 라이선스";
  const ogTitle = "의자 및 스툴용 BIS 인증 – IS 17632:2022 가이드";
  const twitterTitle = "의자 및 스툴용 BIS 라이선스 | IS 17632:2022";
  const metaDescription =
    "IS 17632:2022에 따른 의자 및 스툴용 BIS 인증서를 받으세요. 인도의 BIS 인증을 위한 프로세스, 문서, 테스트, 비용 및 일정.";
  const ogDescription =
    "IS 17632:2022에 따른 의자 및 스툴용 BIS 인증에 대한 완전한 가이드. 프로세스, 비용, 문서, 테스트 및 BIS 라이선스 혜택을 알아보세요.";
  const twitterDescription =
    "IS 17632:2022에 따른 의자 및 스툴용 BIS 인증서를 신청하세요. 인도에서 BIS 프로세스, 문서, 테스트, 수수료 및 일정을 알아보세요.";
  const metaKeywords =
    "의자 및 스툴용 BIS 인증서, 의자 및 스툴용 BIS 라이선스, IS 17632:2022, 의자 및 스툴용 BIS 인증";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632";
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
                    의자 및 스툴용 BIS 인증서 – IS 17632:2022
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
          일반용 의자 및 스툴용 BIS 인증서 – IS 17632:2022 완전 가이드
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="의자 및 스툴용 BIS 라이선스"
            alt="의자 및 스툴용 BIS 인증서 - IS 17632:2022 BIS 인증"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          일반용 의자 및 스툴용 BIS 인증서는 인도 표준 IS 17632:2022에 따라 필수
          요구사항입니다. 이 표준은 가정, 사무실, 상업 지역, 교육 기관,
          카페테리아, 레스토랑, 호텔 및 공공 장소에서 사용되는 의자와 스툴의
          안전성, 내구성 및 성능 요구사항을 규정합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          의자와 스툴은 가장 많이 사용되는 가구 품목 중 하나이며 지속적으로
          하중, 움직임 및 반복적인 스트레스를 받습니다. 구조적으로 약한 의자나
          스툴은 갑자기 무너져 부상을 초래할 수 있습니다. 이러한 위험을 방지하고
          소비자 안전을 보장하기 위해 인도 표준국(BIS)은 모든 제조업체와
          수입업체가 인도에서 판매하기 전에 의자 및 스툴용 BIS 인증을 받도록
          요구합니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 페이지는 IS 17632:2022에 따른 의자 및 스툴용 BIS 인증에 대한 완전한
          가이드를 제공하며, 인증 프로세스, 필요한 문서, 테스트 요구사항,
          수수료, 과제, 처벌 및 혜택을 포함합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 인증이란 무엇인가요?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증은 인도의 국가 표준 기관인 인도 표준국이 관리하는 제품 규정
          준수 시스템입니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증서의 의미
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증서는 제품이 다음을 보장합니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 안전 및 품질 표준을 충족</li>
          <li>BIS 승인 실험실 테스트를 통과</li>
          <li>공장 검사를 받음</li>
          <li>소비자를 불안전하거나 기준 미달 제품으로부터 보호</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인증 제품은 ISI 마크를 표시하여 인도 표준 준수를 보여줍니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          적용 표준 – 의자 및 스툴용 IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          의자 및 스툴용 BIS 표준은 다음과 같습니다:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> – 일반용 의자 및 스툴: 안전 요구사항
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          이 표준은 가정, 사무실, 상업 환경, 공공 장소 및 기관 설정에서 좌석
          목적으로 사용되는 모든 비전문 의자 및 스툴을 다룹니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17632:2022가 다루는 제품
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>일반용 의자</li>
          <li>식탁 의자</li>
          <li>사무실 방문객용 의자</li>
          <li>학습용 의자</li>
          <li>카페테리아 의자</li>
          <li>레스토랑 의자</li>
          <li>회의실 의자</li>
          <li>대기실 의자</li>
          <li>나무 의자</li>
          <li>금속 의자</li>
          <li>플라스틱 의자(비전문)</li>
          <li>일반용 스툴</li>
          <li>바 스툴</li>
          <li>식탁 스툴</li>
          <li>스텝 스툴(정의된 기준 내)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          주요 안전 및 성능 매개변수
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022는 다음을 평가합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>구조적 강도</li>
          <li>안정성</li>
          <li>반복 사용 시 내구성</li>
          <li>좌석 강도</li>
          <li>등받이 성능</li>
          <li>다리 충격 저항</li>
          <li>조인트 강도</li>
          <li>표면 마감 품질</li>
          <li>가장자리 및 모서리 안전</li>
          <li>재료 품질</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          인도에서 판매되는 모든 의자와 스툴은 이러한 매개변수를 준수하고 의자
          및 스툴용 BIS 라이선스를 받아야 합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          의자 및 스툴에 BIS 인증이 필수인 이유
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          의자와 스툴은 사람의 체중을 지지하며 모든 환경에서 자주 사용됩니다.
          구조적 실패는 다음을 초래할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>의자 붕괴</li>
          <li>다리 파손</li>
          <li>좌석 균열</li>
          <li>등받이 고장</li>
          <li>날카로운 가장자리로 인한 부상</li>
          <li>전도로 이어지는 불안정성</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 인증의 혜택
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>안전한 좌석 제품 보장</li>
          <li>사고 및 부상 방지</li>
          <li>제품 내구성 향상</li>
          <li>기준 미달 수입 방지</li>
          <li>균일한 시장 품질 확립</li>
          <li>고객 신뢰 향상</li>
          <li>인도 법률에 의한 필수(BIS QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증 없이는 제조업체가 인도에서 합법적으로 의자나 스툴을 판매할 수
          없습니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          의자 및 스툴용 BIS 인증 프로세스(IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 프로세스는 ISI 마크 인증 계획을 따르며, 테스트, 검사 및 신청
          검증을 포함합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 1 – 제품 유형 및 표준 식별
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          의자/스툴이 IS 17632:2022에 해당하는지 확인합니다. 사용된 디자인 변형
          및 재료를 식별합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 2 – BIS 신청서 온라인 제출
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          신청서는 BIS Manak 온라인 포털을 통해 제출되며 다음이 필요합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조업체 세부 정보</li>
          <li>공장 정보</li>
          <li>제품 사양</li>
          <li>브랜드/상표 세부 정보</li>
          <li>제조 프로세스 워크플로우</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 3 – BIS 인증 수수료 지불
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          수수료에는 다음이 포함됩니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청 수수료</li>
          <li>처리 수수료</li>
          <li>샘플 테스트 요금</li>
          <li>공장 검사 수수료</li>
          <li>마킹 수수료</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 4 – IS 17632:2022에 따른 제품 테스트
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          필수 테스트는 BIS 인정 실험실에서 수행됩니다.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          테스트에는 다음이 포함됩니다:
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>안정성 테스트</li>
          <li>좌석 강도 테스트</li>
          <li>등받이 내구성 테스트</li>
          <li>다리 전방/측면/후방 하중 테스트</li>
          <li>좌석 충격 테스트</li>
          <li>낙하 테스트</li>
          <li>피로 테스트</li>
          <li>표면 마감 테스트</li>
          <li>날카로운 가장자리 테스트</li>
          <li>반복 사이클 하의 구조적 내구성</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          테스트 결과는 IS 17632:2022에 대한 완전한 준수를 보여야 합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 5 – BIS에 의한 공장 검사
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 담당자가 공장을 방문하여 다음을 평가합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>제조 프로세스</li>
          <li>원자재 검사</li>
          <li>품질 관리 절차</li>
          <li>테스트 능력</li>
          <li>장비 교정</li>
          <li>생산량</li>
          <li>BIS 테스트 및 검사 계획(STI) 준수</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 6 – BIS 라이선스 부여
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          테스트와 검사가 성공적이면 BIS는 다음을 발급합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 인증서(ISI 마크 라이선스)</li>
          <li>CML 번호</li>
          <li>의자 및 스툴에 ISI 마크를 부착할 수 있는 승인</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          단계 7 – 라이선스 후 의무
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          제조업체는 다음을 수행해야 합니다:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS 라벨링 요구사항에 따라 ISI 마크 사용</li>
          <li>품질 관리 기록 유지</li>
          <li>정기적인 BIS 감시 검사 받기</li>
          <li>1~2년마다 라이선스 갱신</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          의자 및 스툴용 BIS 라이선스 범위
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          이 표준은 일반용 의자 및 스툴에 대한 요구사항을 다룹니다. 이 표준은
          완전히 제조/제작된 일반용 의자 및 스툴에 적용됩니다. 또한 조립 준비
          완료 유닛에도 적용되며, 이 경우 이 표준의 요구사항은 조립된 유닛에
          적용됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          의자 및 스툴용 BIS 인증에 필요한 문서
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          제조업체 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>공장 라이선스/등록</li>
          <li>제조 프로세스 플로우차트</li>
          <li>기계 목록</li>
          <li>사내 테스트 장비 목록</li>
          <li>교정 인증서</li>
          <li>공장 레이아웃 및 평면도</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          기술 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>의자/스툴 도면</li>
          <li>치수 및 사양</li>
          <li>자재 명세서</li>
          <li>안전 기능 설명</li>
          <li>내부 품질 테스트 보고서</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          법적 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신분증 및 주소 증명</li>
          <li>브랜드 승인서</li>
          <li>상표 인증서(선택사항)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 신청 문서
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>신청서</li>
          <li>테스트 요청서</li>
          <li>선언서</li>
          <li>승인서</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          의자 및 스툴용 테스트 요구사항(IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022는 광범위한 기계적, 구조적 및 안전 테스트를 포함합니다.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          필수 테스트
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
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  팔걸이 없는 의자의 전방 및 측면 전도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  후방 전도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  팔걸이 있는 의자의 측면 전도
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  스툴/푸프(모든 방향)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  강도 테스트
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          이러한 테스트는 실제 조건에서 안전한 일상 사용을 보장합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          일반적인 과제 및 해결 방법
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>안정성 테스트에 실패하는 의자</strong>
            <br />
            부적절한 무게 분배로 인해 발생합니다.
            <br />
            해결책: 다리 디자인 개선, 베이스 영역 확대.
          </li>
          <li>
            <strong>테스트 실패를 유발하는 약한 조인트</strong>
            <br />
            해결책: 보강 재료 및 더 나은 커넥터 사용.
          </li>
          <li>
            <strong>부적절한 사내 테스트 장비</strong>
            <br />
            해결책: 필요한 BIS 준수 장비 설치.
          </li>
          <li>
            <strong>문서 불일치</strong>
            <br />
            해결책: 신청 전에 체계적으로 문서 준비.
          </li>
          <li>
            <strong>제품 변형이 제대로 매핑되지 않음</strong>
            <br />
            해결책: 구조 및 테스트 매개변수에 따라 제품 그룹화.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          의자 및 스툴용 BIS 인증의 혜택
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도에서 판매할 수 있는 법적 허가</li>
          <li>제품 안전성 향상</li>
          <li>고객 신뢰 강화</li>
          <li>제품 책임 위험 감소</li>
          <li>전자상거래 목록에 필요</li>
          <li>정부 입찰에 필수</li>
          <li>브랜드 신뢰성 향상</li>
          <li>경쟁 우위</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          비준수에 대한 처벌
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS 인증 없이 의자나 스툴을 판매하면 다음이 발생할 수 있습니다:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>과중한 금전적 벌금</li>
          <li>제품 리콜/압수</li>
          <li>공장 라이선스 취소</li>
          <li>형사 기소</li>
          <li>수입 제한</li>
          <li>시장 블랙리스트 등록</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          처벌은 BIS법 2016에 따라 집행됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          의자 및 스툴용 BIS 인증이 필요한 사람
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">필수 대상:</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>인도 제조업체</li>
          <li>인도로 수출하는 외국 제조업체</li>
          <li>수입업체</li>
          <li>브랜드 소유자/무역업자</li>
          <li>OEM/ODM 공급업체</li>
          <li>소매 체인</li>
          <li>온라인 판매업체</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          각 공장에는 별도의 BIS 라이선스가 필요합니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          결론
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022에 따른 일반용 의자 및 스툴용 BIS 인증서는 제품 안전,
          구조적 안정성 및 내구성을 보장하기 위해 필수입니다. BIS 인증은
          제조업체가 고품질 표준을 유지하는 데 도움이 될 뿐만 아니라 합법적인
          시장 접근을 가능하게 하고 소비자 신뢰를 높입니다.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          전문적인 지원을 통해 테스트부터 검사 및 승인까지의 인증 프로세스는
          원활하고 예측 가능하며 완전히 준수하게 됩니다.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 의자 및 스툴용 BIS 인증서
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 의자 및 스툴에 BIS 인증이 필수인가요?</strong>
              <br />
              네, IS 17632:2022에 따라 모든 일반용 의자 및 스툴은 인도에서
              판매되기 전에 BIS 인증을 받아야 합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 어떤 테스트가 필요한가요?</strong>
              <br />
              안정성, 강도, 내구성, 충격, 피로 및 재료 안전 테스트.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. BIS 인증에는 얼마나 걸리나요?</strong>
              <br />
              일반적으로 30~45일.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 인증 비용은 얼마인가요?</strong>
              <br />
              테스트 및 검사에 따라 약 ₹60,000~₹1,30,000.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 외국 제조업체도 신청할 수 있나요?</strong>
              <br />
              네, FMCS 계획 하에서 신청할 수 있습니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ISI 마킹이 필수인가요?</strong>
              <br />
              네, BIS 라이선스가 부여된 후 필수입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. 의자가 BIS 테스트에 실패하는 이유는 무엇인가요?
              </strong>
              <br />
              일반적인 원인에는 약한 다리, 조인트 강도 부족, 불안정성이
              포함됩니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. 여러 모델을 하나의 라이선스로 커버할 수 있나요?
              </strong>
              <br />
              유사성 및 표준 준수 기준을 충족하는 경우에만 가능합니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 공장 검사가 필요한가요?</strong>
              <br />
              네, ISI 마크 인증에는 필수입니다.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. 어떤 문서가 필요한가요?</strong>
              <br />
              공장 라이선스, 기술 사양, 기계 목록, QC 계획, 제품 도면 등.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="의자 및 스툴용 BIS 인증서 - IS 17632:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadKorean />

        <FaqAuthorKorean questionNumber={1} />
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
