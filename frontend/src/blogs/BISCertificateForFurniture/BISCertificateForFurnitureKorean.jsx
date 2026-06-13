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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Building2,
  Check,
  ClipboardCheck,
  Clock,
  Eye,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  Package,
  RefreshCw,
  Scale,
  ShieldCheck,
  ShoppingCart,
  SlashIcon,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterKorean from "@/components/manual/Footer/FooterKorean";

const BISCertificateForFurnitureKorean = () => {
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

export default BISCertificateForFurnitureKorean;

const MetaTags = () => {
  const title =
    "인도 가구용 BIS 인증서 | BIS 인증, 라이선스 및 프로세스 가이드";
  const ogTitle = "인도 가구용 BIS 인증서 - 완전한 BIS 인증 가이드";
  const twitterTitle = "가구용 BIS 인증서 | 인도 BIS의 완전한 BIS 인증 가이드";
  const metaDescription =
    "인도 가구용 BIS 인증서 - 가구 제조업체를 위한 BIS 인증, BIS 라이선스, 비용, 문서, 표준, 프로세스, 온라인 신청 및 BIS 마크에 대한 완전한 가이드.";
  const ogDescription =
    "인도 가구용 BIS 인증을 찾고 계신가요? BIS 라이선스, BIS 마크, 적용 가능한 표준, 인증 프로세스, 비용, 문서 및 규정 준수 요구사항에 대해 자세히 알아보세요.";
  const twitterDescription =
    "인도 가구용 BIS 인증서 완전 가이드 - BIS 인증 프로세스, 비용, 문서, BIS 마크, 표준 및 온라인 신청 설명.";
  const metaKeywords =
    "가구용 BIS 인증서, 가구용 BIS 인증, 가구용 BIS 라이선스, BIS란 무엇인가, 인도 BIS";
  const websiteUrl = "https://bis-certifications.com/blogs/isi-products/gagu";
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
                    인도 가구 BIS 인증
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

const TABLE_WRAP =
  "mt-6 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]";

const SectionDivider = () => (
  <div className="service-left-content-divider my-8 md:my-10" />
);

const SectionHeading = ({ children }) => (
  <h2 className="text-xl md:text-2xl font-geist font-bold text-[#1e1e1e] mb-4 pl-4 border-l-4 border-[#1A8781]">
    {children}
  </h2>
);

const SubSectionHeading = ({ children }) => (
  <h3 className="text-base md:text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-4">
    {children}
  </h3>
);

const IntroCallout = ({ children }) => (
  <div className="rounded-md bg-[#EAF3FF] border-l-4 border-[#1A8781] px-4 py-3 mb-6">
    {children}
  </div>
);

const CheckPointsList = ({ points, variant = "check" }) => {
  const Icon = variant === "warning" ? AlertTriangle : Check;
  const iconBg =
    variant === "warning" ? "bg-amber-500/10" : "bg-green-500/10";

  return (
    <div className="bg-white/50 rounded-xl p-4 ring-1 ring-gray-900/[0.05] mt-2 mb-4">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`${iconBg} p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5`}
            >
              <Icon size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-base text-[#42434d] tracking-wide text-left max-w-full leading-relaxed flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NumberedSteps = ({ steps, showTimeline = true }) => {
  if (!showTimeline) {
    return (
      <div className="mt-4 mb-4 flex flex-col gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
          >
            <div className="w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base font-geist">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 mb-4 border-l-2 border-[#1A8781]/30 ml-3 pl-6 flex flex-col gap-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
        >
          <div className="absolute -left-[31px] top-4 w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center">
            {index + 1}
          </div>
          <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
            {step.title}
          </h3>
          <p className="text-gray-600 text-base font-geist">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

const InfoCardGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white/60 rounded-lg p-4 ring-1 ring-gray-900/[0.06] hover:ring-gray-900/[0.12] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {Icon && (
              <div className="mb-3 w-9 h-9 rounded-full bg-[#1A8781]/10 text-[#1A8781] flex items-center justify-center">
                <Icon size={18} />
              </div>
            )}
            <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base font-geist leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const FaqAccordion = ({ items }) => {
  return (
    <div className="rounded-xl bg-white/60 p-4 md:p-5 ring-1 ring-gray-900/[0.06]">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left font-geist font-semibold text-[#1e1e1e] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 font-geist text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          인도 가구 BIS 인증: BIS 표준, ISI 마크, 프로세스 및 규정 준수 완벽
          가이드
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="가구용 BIS 라이선스"
            alt="인도 가구 BIS 인증 - ISI 마크 가이드"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            가구는 주택, 사무실 및 공공 공간의 필수 구성 요소입니다. 가구의
            안전성, 내구성 및 품질을 보장하는 것은 소비자와 제조업체 모두에게
            매우 중요합니다. 인도에서는 Furniture (Quality Control) Order,
            2025에 따라 특정 가구 카테고리에 대해{" "}
            <strong>가구 BIS 인증</strong>이 의무입니다. 이 가이드는 BIS
            표준, ISI 마크, 인증 프로세스 및 규정 준수 요구사항에 대한
            상세한 개요를 제공합니다.
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>가구 BIS 인증이란?</SectionHeading>

        <SubSectionHeading>가구 BIS 인증의 의미</SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 인증은 인도 표준국(Bureau of Indian Standards, BIS)이 제품을
          평가하여 인도 표준을 준수하는지 확인하는 공식 프로세스입니다. 가구의
          경우 이 인증은 제품이 정의된 안전, 성능 및 품질 기준을 충족함을
          보장합니다. 인증 후 제조업체는 가구에 <strong>ISI 마크</strong>를
          사용하여 구매자에게 규정 준수를 알릴 수 있습니다.
        </p>

        <SubSectionHeading>
          가구 BIS 인증과 ISI 마크의 차이
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>BIS 인증</strong> — BIS에 의한 평가, 테스트 및 승인
              프로세스입니다.
            </>,
            <>
              <strong>ISI 마크</strong> — BIS 인증 후 부여되는 마크로, 제품이
              인도 표준을 준수함을 나타냅니다. ISI 마크는 소비자에게 보이는
              규정 준수 보증입니다.
            </>,
          ]}
        />

        <SubSectionHeading>
          가구 제조업체와 수입업체에게 BIS 인증이 중요한 이유
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "인도 규정에 따른 법적 규정 준수",
            "인도 시장 및 정부 조달 기회 접근",
            "강화된 소비자 신뢰 및 경쟁 우위",
            "리콜, 벌금 또는 수입 제한 위험 감소",
          ]}
        />

        <SectionDivider />

        <SectionHeading>가구 제조업체를 위한 BIS 인증 요건</SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  요건
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  세부 사항
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["인증 기관", "Bureau of Indian Standards (BIS)"],
                ["인증 스키마", "스키마-I (ISI 마크 인증)"],
                ["적용 법률", "Furniture (Quality Control) Order, 2025"],
                ["필수 마킹", "BIS 라이선스 번호가 포함된 ISI 마크"],
                ["제품 테스트", "BIS 인정 실험실을 통한 테스트 필수"],
                ["공장 검사", "라이선스 부여 전 의무"],
                [
                  "적용 대상",
                  "인도 제조업체, 외국 제조업체, 수입업체",
                ],
                ["인증 후 감시", "필수"],
                ["라이선스 갱신", "BIS 요건에 따른 주기적 갱신"],
              ].map(([req, details], i) => (
                <TableRow
                  key={req}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {req}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <SectionDivider />

        <SectionHeading>
          인도 가구 BIS 인증의 규제 프레임워크
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "Furniture QCO 2025는 특정 가구 카테고리가 BIS 표준을 준수해야 함을 규정합니다. QCO는 의무 인증의 법적 근거를 형성하며 포함되는 가구 유형을 정의합니다.",
            },
            {
              icon: Building2,
              title: "인도 표준국(BIS)의 역할",
              description:
                "BIS는 인도 표준(IS)을 개발하고, 제조 단위를 평가하며, 제품 테스트를 수행하고, ISI 마크 사용 라이선스를 부여합니다. 감사 및 감시를 통해 규정 준수를 모니터링합니다.",
            },
          ]}
        />

        <SubSectionHeading>
          가구 BIS 인증: 의무 vs 자발적
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>의무</strong> — Furniture QCO에 나열된 침대, 의자, 수납
              장치 등의 카테고리입니다.
            </>,
            <>
              <strong>자발적</strong> — 제조업체는 시장 신뢰도를 높이기 위해
              추가 제품 카테고리를 자발적으로 인증받을 수 있습니다.
            </>,
          ]}
        />

        <SubSectionHeading>
          Furniture QCO의 제조업체 및 수입업체 적용
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "QCO 대상 가구를 생산하는 인도 제조업체",
            "인도로 수출하는 외국 제조업체",
            "국내에서 가구를 판매하는 수입업체",
          ]}
        />

        <SectionDivider />

        <SectionHeading>BIS 인증 대상 가구 제품</SectionHeading>

        <SubSectionHeading>
          가구 카테고리 및 적용 BIS 표준
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  가구 카테고리
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  적용 인도 표준
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  표준 제목
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  인증 요건
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "사무용 의자",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "일반용 의자 및 스툴",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "테이블 및 책상",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "수납 장치",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "침대",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "이층 침대",
                  standard: "IS 17636:2022",
                  title:
                    "Furniture – Bunk Beds for Domestic Use – Requirements and Test Methods",
                  link: "/blogs/isi-products/bunk-beds-is-17636",
                },
              ].map((row, i) => (
                <TableRow
                  key={row.standard}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-[#1e1e1e]">
                    <Link
                      to={row.link}
                      className="text-blue-600 hover:underline"
                    >
                      {row.category}
                    </Link>
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.standard}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.title}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 text-gray-600">
                    Furniture QCO에 따라 의무
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          포함된 모든 제품은 인도에서 판매되기 전에 관련 BIS 표준을 준수하고
          유효한 ISI 마크를 표시해야 합니다. 이러한 표준은 가구의 안전, 안정성
          및 사용성에 대한 최소 요건을 정의합니다.
        </p>

        <SectionDivider />

        <SectionHeading>가구 BIS 표준 및 요건</SectionHeading>

        <SubSectionHeading>
          BIS 가구 표준에 따른 성능 요건
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          가구는 변형되거나 구조적으로 손상되지 않고 일반적인 사용을 견뎌야
          합니다.
        </p>
        <CheckPointsList
          points={[
            "일반 및 최대 하중 조건에서의 하중 지지 능력",
            "접합부 강도 및 연결 내구성",
            "뒤틀림이나 열화 없는 재료 안정성",
          ]}
        />

        <SubSectionHeading>
          안전 및 내구성 테스트 요건
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          가구는 사고를 예방하기 위한 안전 기준과 장기 수명을 보장하기 위한
          내구성 기준을 충족해야 합니다.
        </p>
        <CheckPointsList
          points={[
            "전도 방지(의자, 스툴 및 불안정한 유닛)",
            "정격 하중에서의 붕괴 방지(침대, 이층 침대, 수납 장치)",
            "반복 사용 성능 테스트를 통한 장기 내구성",
          ]}
        />

        <SubSectionHeading>인증 시 평가되는 품질 매개변수</SubSectionHeading>
        <CheckPointsList
          points={[
            "재료 품질 및 표면 마감",
            "하중 지지 능력",
            "안정성, 인체공학 및 안전 기능",
          ]}
        />

        <SubSectionHeading>
          다양한 가구 카테고리별 규정 준수 요건
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          각 가구 유형에는 치수, 성능 테스트 및 허용 공차가 포함된 특정 IS
          표준이 있습니다. 준수는 모든 제조업체 간 일관성과 품질을
          보장합니다.
        </p>

        <SectionDivider />

        <SectionHeading>누가 가구 BIS 인증이 필요한가?</SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "인도 가구 제조업체",
              description:
                "Furniture QCO 대상 가구를 생산하는 모든 국내 제조업체는 판매 전 BIS 인증을 받아야 합니다.",
            },
            {
              icon: Globe,
              title: "인도로 가구를 수출하는 외국 제조업체",
              description:
                "수출업체는 인도에서 가구를 합법적으로 판매하고 ISI 마크를 사용하려면 BIS 표준을 준수해야 합니다.",
            },
            {
              icon: Package,
              title: "가구 수입업체 및 브랜드 소유자",
              description:
                "수입업체는 해외에서 제조되었더라도 인도로 반입하는 가구가 BIS 규범을 준수하는지 확인해야 합니다.",
            },
            {
              icon: ShoppingCart,
              title: "전자상거래 판매자 및 소매업체",
              description:
                "대상 카테고리 가구를 판매하는 온·오프라인 판매자는 법적 책임 위험을 피하기 위해 BIS 인증을 확인해야 합니다.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          가구 BIS-ISI 인증: 단계별 프로세스
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "제품 식별 및 적용 표준 선택",
              description:
                "테스트 및 인증을 위해 가구 카테고리와 관련 BIS 표준(IS 17631–IS 17636)을 식별합니다.",
            },
            {
              title: "BIS 인정 실험실에서의 제품 테스트",
              description:
                "가구는 BIS 승인 실험실에서 강도, 안정성 및 내구성을 테스트합니다. 테스트 보고서는 신청에 필수입니다.",
            },
            {
              title: "BIS 신청서 제출",
              description:
                "제조업체는 제품 사양, 기술 세부 사항 및 테스트 보고서와 함께 BIS에 신청서를 제출합니다.",
            },
            {
              title: "공장 검사 및 평가",
              description:
                "BIS는 제조 프로세스, 품질 관리 시스템 및 생산 일관성을 확인하기 위해 공장 감사를 수행합니다.",
            },
            {
              title: "BIS 라이선스 및 ISI 마크 승인",
              description:
                "승인 후 BIS는 제조업체가 인증된 가구에 ISI 마크를 사용할 수 있도록 라이선스를 부여합니다.",
            },
            {
              title: "인증 후 규정 준수 요건",
              description:
                "인증을 유지하려면 정기 감사, 주기적 테스트 및 BIS 표준 준수가 필요합니다.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>가구 BIS 인증에 필요한 서류</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>사업 등록 및 제조 서류</strong> — 사업자 등록증, GST
              등록 및 제조 시설 세부 사항입니다.
            </>,
            <>
              <strong>기술 제품 사양 및 도면</strong> — 상세 설계, 사용
              재료 및 조립 지침입니다.
            </>,
            <>
              <strong>테스트 보고서 및 품질 관리 서류</strong> — IS 표준
              준수를 입증하는 BIS 승인 실험실 보고서입니다.
            </>,
            <>
              <strong>공장 및 생산 프로세스 서류</strong> — 품질 관리
              시스템, 프로세스 흐름 및 검사 절차입니다.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>BIS 인증 가구의 테스트 요건</SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  테스트 영역
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  목적
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["강도 테스트", "하중 지지 능력 확인"],
                ["안정성 테스트", "전도 및 붕괴 방지"],
                ["내구성 테스트", "반복 사용 시 성능 평가"],
                ["구조적 무결성 검사", "접합부, 프레임 및 연결부 평가"],
                ["안전 테스트", "일반 사용 시 부상 위험 감소"],
                ["기능 성능 검사", "의도된 기능 및 사용성 확인"],
              ].map(([area, purpose], i) => (
                <TableRow
                  key={area}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {area}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {purpose}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          가구는 안전, 성능 및 내구성 주장을 검증하기 위해 BIS 인정
          실험실에서 테스트되어야 합니다.
        </p>

        <SectionDivider />

        <SectionHeading>
          가구 ISI 마크: 사용 및 규정 준수 요건
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>ISI 마크가 나타내는 것</strong> — 가구가 인도 표준을
              준수하고 BIS에 의해 인증되었음을 확인합니다.
            </>,
            <>
              <strong>ISI 마크 부착 규칙</strong> — 마크는 BIS 지침에 따라
              눈에 잘 띄고, 영구적이며 올바른 형식이어야 합니다.
            </>,
            <>
              <strong>오용의 결과</strong> — 불법 사용은 2016년 BIS법에
              따른 벌금, 라이선스 취소 및 법적 조치로 이어질 수 있습니다.
            </>,
            <>
              <strong>구매자 확인 방법</strong> — 소비자는 BIS 공식
              웹사이트에서 라이선스 번호를 확인할 수 있습니다.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS 인증 일정, 유효기간 및 갱신
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "가구 제품 인증 일정",
              description:
                "일반적으로 테스트 및 공장 검사 일정에 따라 2–3개월 소요됩니다.",
            },
            {
              icon: ShieldCheck,
              title: "BIS 라이선스 유효기간",
              description:
                "라이선스는 1–3년간 유효하며 만료 전에 갱신해야 합니다.",
            },
            {
              icon: RefreshCw,
              title: "BIS 인증 갱신 프로세스",
              description:
                "갱신에는 업데이트된 테스트 보고서, 공장 검사 및 규정 준수 확인이 포함됩니다.",
            },
            {
              icon: Eye,
              title: "감시 및 지속적인 규정 준수 요건",
              description:
                "BIS는 표준의 지속적인 준수를 보장하기 위해 표본 감사 및 테스트를 수행합니다.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>BIS 인증 가구의 혜택</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>법적 규정 준수 및 시장 접근</strong> — 인도에서 특정
              가구 유형 판매에 필수입니다.
            </>,
            <>
              <strong>향상된 제품 품질 및 소비자 신뢰</strong> — BIS
              인증은 신뢰성과 안전성을 나타냅니다.
            </>,
            <>
              <strong>제조업체를 위한 경쟁 우위</strong> — 인증된 가구는
              더 높은 시장 신뢰도와 조달 자격을 갖습니다.
            </>,
            <>
              <strong>정부 조달 자격</strong> — BIS 인증 제품만 정부 또는
              기관 구매자에게 공급할 수 있습니다.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS 가구 규정 미준수 시 처벌
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>미인증 가구 제조 또는 판매</strong> — QCO 위반으로
              벌금 및 제품 압수로 이어집니다.
            </>,
            <>
              <strong>비준수 가구 수입 제한</strong> — 미인증 수입품은
              세관에서 차단될 수 있습니다.
            </>,
            <>
              <strong>2016년 BIS법에 따른 처벌</strong> — 벌금, 징역 및
              판매 금지를 포함합니다.
            </>,
            <>
              <strong>미준수 시 사업 위험</strong> — 소비자 신뢰 상실,
              법적 분쟁 및 시장 접근 제한입니다.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          가구 BIS 인증 취득의 어려움
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "올바른 인도 표준 식별",
              description:
                "제조업체는 제품이 적용 가능한 IS 17631–IS 17636 표준을 준수하는지 확인해야 합니다.",
            },
            {
              title: "테스트 및 서류 요건 관리",
              description:
                "적절한 실험실 테스트 및 서류는 승인에 필수입니다.",
            },
            {
              title: "공장 감사 지적 사항 해결",
              description:
                "감사 중 미준수는 인증을 지연시킬 수 있습니다.",
            },
            {
              title: "인증 후 지속적인 규정 준수 유지",
              description:
                "벌금을 피하려면 지속적인 품질 모니터링 및 BIS 표준 준수가 필요합니다.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Sun Certifications India가 도울 수 있는 방법
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "신청 및 서류 지원",
              description:
                "완전하고 정확한 BIS 신청서 제출을 안내합니다.",
            },
            {
              icon: FlaskConical,
              title: "제품 테스트 지원",
              description:
                "BIS 승인 실험실과의 조율을 지원합니다.",
            },
            {
              icon: ClipboardCheck,
              title: "감사 준비 및 규정 준수 자문",
              description:
                "검사 전 공장 프로세스가 BIS 요건을 충족하도록 보장합니다.",
            },
            {
              icon: ShieldCheck,
              title: "라이선스 부여 후 규정 준수 관리",
              description:
                "기록 유지, 감시 감사 및 표준 업데이트에 대해 자문합니다.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>가구 BIS 인증 FAQ</SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "모든 가구 제품에 BIS 인증이 의무인가요?",
              answer:
                "아닙니다. Furniture QCO 2025에 나열된 가구만 의무 BIS 인증이 필요합니다.",
            },
            {
              question:
                "BIS 인증 없이 수입 가구를 판매할 수 있나요?",
              answer:
                "아닙니다. 의무 카테고리에 해당하는 가구는 BIS 승인 없이 인도에서 판매할 수 없습니다.",
            },
            {
              question: "가구 인증에는 얼마나 걸리나요?",
              answer:
                "일반적으로 테스트 및 검사에 따라 2–3개월 소요됩니다.",
            },
            {
              question:
                "BIS 인증과 ISI 마크의 차이는 무엇인가요?",
              answer:
                "BIS 인증은 승인 프로세스이고, ISI 마크는 가구에 부착되는 인증 라벨입니다.",
            },
            {
              question: "가구에 적용되는 BIS 표준은 무엇인가요?",
              answer:
                "IS 17631–IS 17636은 의자, 스툴, 사무용 의자, 테이블, 침대, 이층 침대 및 수납 장치를 포함합니다.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>관련 자료</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                BIS-ISI 인증
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                외국 제조업체용 BIS 인증서
              </a>
            </>,
          ]}
        />

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
                alt="BIS 로고"
                title="BIS 로고"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              외국 제조업체용 BIS 마크(ISI 라이선스)
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
              BIS(CRS) 등록
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
              인도 제조업체용 ISI 마크(BIS)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
