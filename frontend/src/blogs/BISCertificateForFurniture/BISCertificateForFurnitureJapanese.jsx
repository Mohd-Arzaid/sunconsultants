import FaqAuthorJapanese from "@/components/common/FaqAuthor/FaqAuthorJapanese";
import ManyUsersAlsoReadJapanese from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadJapanese";
import ServicesRightSideContentJapanese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentJapanese";
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
import FooterJapanese from "@/components/manual/Footer/FooterJapanese";

const BISCertificateForFurnitureJapanese = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default BISCertificateForFurnitureJapanese;

const MetaTags = () => {
  const title =
    "インドにおける家具のBIS証明書 | BIS認証、ライセンス、プロセスガイド";
  const ogTitle = "インドにおける家具のBIS証明書 - 完全なBIS認証ガイド";
  const twitterTitle = "家具のBIS証明書 | インドBISの完全なBIS認証ガイド";
  const metaDescription =
    "インドにおける家具のBIS証明書 - BIS認証、BISライセンス、費用、書類、標準、プロセス、オンライン申請、家具メーカー向けBISマークの完全ガイド。";
  const ogDescription =
    "インドにおける家具のBIS認証をお探しですか？BISライセンス、BISマーク、適用標準、認証プロセス、費用、書類、コンプライアンス要件について詳しく学びましょう。";
  const twitterDescription =
    "インドにおける家具のBIS証明書の完全ガイド - BIS認証プロセス、費用、書類、BISマーク、標準、オンライン申請について説明。";
  const metaKeywords =
    "家具のBIS証明書, 家具のBIS認証, 家具のBISライセンス, BISとは, インドBIS";
  const websiteUrl = "https://bis-certifications.com/blogs/isi-products/kagu";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
                    <Link to="/">ホーム</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">最新のブログ</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    インドにおける家具のBIS認証
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
        <ServicesRightSideContentJapanese />
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
          インドにおける家具のBIS認証：BIS標準、ISIマーク、プロセス、コンプライアンスの完全ガイド
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="家具のBISライセンス"
            alt="インドにおける家具のBIS認証 - ISIマークガイド"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            家具は住宅、オフィス、公共空間に欠かせない要素です。家具の安全性、耐久性、品質の確保は、消費者とメーカーの双方にとって極めて重要です。インドでは、Furniture
            (Quality Control) Order, 2025に基づき、特定の家具カテゴリーに対して
            <strong>家具のBIS認証</strong>
            が義務付けられています。本ガイドでは、BIS標準、ISIマーク、認証プロセス、コンプライアンス要件について詳しく解説します。
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>家具のBIS認証とは？</SectionHeading>

        <SubSectionHeading>家具のBIS認証の意義</SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証は、インド標準局（Bureau of Indian
          Standards、BIS）が製品を評価し、インド標準への適合を確認する正式なプロセスです。家具においては、この認証により製品が定められた安全性、性能、品質の基準を満たしていることが保証されます。認証後、メーカーは家具に
          <strong>ISIマーク</strong>
          を表示でき、購入者に対してコンプライアンスを示すことができます。
        </p>

        <SubSectionHeading>
          家具におけるBIS認証とISIマークの違い
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>BIS認証</strong> —
              BISによる評価、試験、承認のプロセス。
            </>,
            <>
              <strong>ISIマーク</strong> —
              BIS認証後に付与されるマークで、製品がインド標準に適合していることを示します。ISIマークは消費者にとって目に見えるコンプライアンスの保証です。
            </>,
          ]}
        />

        <SubSectionHeading>
          家具メーカーと輸入業者にとってBIS認証が重要な理由
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "インドの規制に基づく法的コンプライアンス",
            "インド市場および政府調達機会へのアクセス",
            "消費者の信頼の強化と競争上の優位性",
            "リコール、罰則、輸入制限のリスク低減",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          家具メーカー向けBIS認証要件
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  要件
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  詳細
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["認証機関", "インド標準局（Bureau of Indian Standards、BIS）"],
                ["認証スキーム", "スキームI（ISIマーク認証）"],
                ["適用法令", "Furniture (Quality Control) Order, 2025"],
                ["義務的表示", "BISライセンス番号付きISIマーク"],
                ["製品試験", "BIS認定試験所での実施が必要"],
                ["工場検査", "ライセンス付与前に義務"],
                [
                  "適用対象",
                  "インド国内メーカー、外国メーカー、輸入業者",
                ],
                ["認証後の監視", "必要"],
                [
                  "ライセンス更新",
                  "BIS要件に基づく定期的な更新",
                ],
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
          インドにおける家具BIS認証の規制枠組み
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "Furniture QCO 2025は、特定の家具カテゴリーがBIS標準に適合しなければならないことを規定しています。QCOは義務的認証の法的根拠となり、対象となる家具の種類を定めています。",
            },
            {
              icon: Building2,
              title: "インド標準局（BIS）の役割",
              description:
                "BISはインド標準（IS）を策定し、製造拠点を評価し、製品試験を実施し、ISIマークの使用ライセンスを付与します。監査とサーベイランスを通じてコンプライアンスを監督します。",
            },
          ]}
        />

        <SubSectionHeading>
          家具における義務的BIS認証と任意BIS認証
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>義務的</strong> —
              Furniture QCOに記載されているベッド、椅子、収納ユニットなどのカテゴリー。
            </>,
            <>
              <strong>任意</strong> —
              メーカーは市場の信頼性向上のため、追加の製品カテゴリーを任意で認証を受けることができます。
            </>,
          ]}
        />

        <SubSectionHeading>
          Furniture QCOのメーカーおよび輸入業者への適用
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "QCOの対象となる家具を製造するインド国内メーカー",
            "インドへ輸出する外国メーカー",
            "国内で家具を販売する輸入業者",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS認証の対象となる家具製品
        </SectionHeading>

        <SubSectionHeading>
          家具カテゴリーと適用BIS標準
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  家具カテゴリー
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  適用インド標準
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  標準タイトル
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  認証要件
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "作業用椅子",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "一般用途の椅子とスツール",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "テーブルとデスク",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "収納ユニット",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "ベッド",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "二段ベッド",
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
                    Furniture QCOに基づき義務的
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          対象となるすべての製品は、インドで販売する前に関連するBIS標準に適合し、有効なISIマークを表示しなければなりません。これらの標準は、家具の安全性、安定性、使いやすさに関する最低要件を定めています。
        </p>

        <SectionDivider />

        <SectionHeading>
          家具向けBIS標準とその要件
        </SectionHeading>

        <SubSectionHeading>
          BIS家具標準に基づく性能要件
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          家具は、変形や構造的破損なく通常使用に耐えなければなりません。
        </p>
        <CheckPointsList
          points={[
            "通常使用およびピーク負荷条件下での耐荷重能力",
            "接合部の強度と接続の耐久性",
            "ねじれや劣化のない材料の安定性",
          ]}
        />

        <SubSectionHeading>
          安全性および耐久性試験要件
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          家具は事故を防ぐための安全基準と、長寿命を確保するための耐久性基準を満たす必要があります。
        </p>
        <CheckPointsList
          points={[
            "転倒防止（椅子、スツール、不安定なユニット）",
            "定格荷重下での崩壊防止（ベッド、二段ベッド、収納ユニット）",
            "反復使用性能試験による長期耐久性",
          ]}
        />

        <SubSectionHeading>
          認証時に評価される品質パラメーター
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "材料品質と表面仕上げ",
            "耐荷重能力",
            "安定性、人間工学、安全機能",
          ]}
        />

        <SubSectionHeading>
          家具カテゴリー別のコンプライアンス要件
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          各家具タイプには、寸法、性能試験、許容公差を定めた固有のIS標準があります。適合により、すべてのメーカー間で均一性と品質が確保されます。
        </p>

        <SectionDivider />

        <SectionHeading>
          誰が家具のBIS認証を必要とするのか？
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "インド国内の家具メーカー",
              description:
                "Furniture QCOの対象となる家具を製造するすべての国内メーカーは、販売前にBIS認証を取得する必要があります。",
            },
            {
              icon: Globe,
              title: "インドへ家具を輸出する外国メーカー",
              description:
                "輸出業者は、インドで合法的に家具を販売しISIマークを使用するためにBIS標準への適合が必要です。",
            },
            {
              icon: Package,
              title: "家具輸入業者およびブランドオーナー",
              description:
                "輸入業者は、海外で製造された場合でも、インドに持ち込む家具がBIS規格に適合していることを確認する必要があります。",
            },
            {
              icon: ShoppingCart,
              title: "Eコマース販売者および小売業者",
              description:
                "対象カテゴリーの家具を販売するオンライン・オフライン販売者は、法的責任リスクを回避するためBIS認証を確認する必要があります。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          家具向けBIS-ISI認証：ステップバイステップのプロセス
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "製品の特定と適用標準の選択",
              description:
                "家具カテゴリーと試験・認証に関連するBIS標準（IS 17631〜IS 17636）を特定します。",
            },
            {
              title: "BIS認定試験所での製品試験",
              description:
                "家具はBIS認可ラボで強度、安定性、耐久性について試験されます。試験報告書は申請に必須です。",
            },
            {
              title: "BIS申請の提出",
              description:
                "メーカーは製品仕様、技術詳細、試験報告書を添えてBISに申請を提出します。",
            },
            {
              title: "工場検査と評価",
              description:
                "BISは製造プロセス、品質管理システム、生産の一貫性を確認するための工場監査を実施します。",
            },
            {
              title: "BISライセンスおよびISIマークの承認",
              description:
                "承認後、BISは認証された家具にISIマークを表示することを許可するライセンスを付与します。",
            },
            {
              title: "認証後のコンプライアンス要件",
              description:
                "認証を維持するには、定期的な監査、定期試験、BIS標準の継続的な遵守が必要です。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          家具BIS認証に必要な書類
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>事業登録および製造関連書類</strong> —
              事業許可証、GST登録、製造拠点の詳細。
            </>,
            <>
              <strong>技術的製品仕様および図面</strong> —
              詳細な設計図、使用材料、組立手順。
            </>,
            <>
              <strong>試験報告書および品質管理書類</strong> —
              IS標準への適合を証明するBIS認可ラボの報告書。
            </>,
            <>
              <strong>工場および生産プロセス書類</strong> —
              品質管理システム、工程フロー、検査手順。
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS認証家具の試験要件
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  試験分野
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  目的
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["強度試験", "耐荷重能力の確認"],
                ["安定性試験", "転倒および崩壊の防止"],
                ["耐久性試験", "反復使用時の性能評価"],
                ["構造完全性検査", "接合部、フレーム、接続部の評価"],
                ["安全性試験", "通常使用時の負傷リスクの低減"],
                ["機能性能検査", "意図した機能性と使いやすさの確認"],
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
          家具はBIS認定試験所で試験され、安全性、性能、耐久性の要件を検証する必要があります。
        </p>

        <SectionDivider />

        <SectionHeading>
          家具向けISIマーク：使用およびコンプライアンス要件
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>ISIマークが示すもの</strong> —
              家具がインド標準に適合し、BISによって認証されたことを確認します。
            </>,
            <>
              <strong>ISIマークの表示ルール</strong> —
              マークは目立つ位置に、永続的に、BISガイドラインに従った正しい形式で表示する必要があります。
            </>,
            <>
              <strong>不正使用の結果</strong> —
              違法な使用は、2016年BIS法に基づく罰則、ライセンス取消、法的措置につながる可能性があります。
            </>,
            <>
              <strong>購入者による確認方法</strong> —
              消費者はBIS公式ウェブサイトでライセンス番号を確認できます。
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS認証の期間、有効性、更新
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "家具製品の認証期間",
              description:
                "試験および工場検査のスケジュールにより、通常2〜3か月。",
            },
            {
              icon: ShieldCheck,
              title: "BISライセンスの有効性",
              description:
                "ライセンスは1〜3年間有効で、期限前に更新する必要があります。",
            },
            {
              icon: RefreshCw,
              title: "BIS認証の更新プロセス",
              description:
                "更新には最新の試験報告書、工場検査、コンプライアンス確認が含まれます。",
            },
            {
              icon: Eye,
              title: "監視および継続的コンプライアンス要件",
              description:
                "BISは抜き取り監査と試験を実施し、標準の継続的な遵守を確保します。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS認証家具のメリット
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>法的コンプライアンスと市場アクセス</strong> —
              インドで特定の家具タイプを販売するために義務的。
            </>,
            <>
              <strong>製品品質の向上と消費者の信頼</strong> —
              BIS認証は信頼性と安全性を示します。
            </>,
            <>
              <strong>メーカーにとっての競争上の優位性</strong> —
              認証された家具は市場の信頼性と調達資格が高くなります。
            </>,
            <>
              <strong>政府調達への資格</strong> —
              BIS認証製品のみが政府または機関の購入者に供給できます。
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          家具BIS規制の不遵守に対する罰則
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>未認証家具の製造または販売</strong> —
              QCO違反となり、罰金および製品の差し押さえにつながります。
            </>,
            <>
              <strong>不適合家具の輸入制限</strong> —
              未認証の輸入品は税関で差し止められる可能性があります。
            </>,
            <>
              <strong>2016年BIS法に基づく罰則</strong> —
              罰金、禁固、販売禁止が含まれます。
            </>,
            <>
              <strong>不遵守によるビジネスリスク</strong> —
              消費者の信頼の喪失、訴訟、市場アクセスの制限。
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          家具BIS認証取得における課題
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "正しいインド標準の特定",
              description:
                "メーカーは製品が適用されるIS 17631〜IS 17636標準に適合していることを確認する必要があります。",
            },
            {
              title: "試験および書類要件の管理",
              description:
                "適切なラボ試験と書類は承認に必須です。",
            },
            {
              title: "工場監査指摘事項の是正",
              description:
                "監査時の不適合は認証を遅延させる可能性があります。",
            },
            {
              title: "認証後の継続的コンプライアンスの維持",
              description:
                "罰則を回避するには、継続的な品質監視とBIS標準の遵守が必要です。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Sun Certifications Indiaが支援できること
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "申請および書類作成のサポート",
              description:
                "完全かつ正確なBIS申請の提出に関するガイダンス。",
            },
            {
              icon: FlaskConical,
              title: "製品試験のサポート",
              description:
                "BIS認可試験所との調整を支援します。",
            },
            {
              icon: ClipboardCheck,
              title: "監査準備およびコンプライアンスコンサルティング",
              description:
                "検査前に工場プロセスがBIS要件を満たしていることを確認します。",
            },
            {
              icon: ShieldCheck,
              title: "ライセンス付与後のコンプライアンス管理",
              description:
                "記録管理、監視監査、標準の更新に関するアドバイス。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          家具BIS認証に関するよくある質問
        </SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "すべての家具製品にBIS認証は義務付けられていますか？",
              answer:
                "いいえ。Furniture QCO 2025に記載されている家具のみが義務的なBIS認証を必要とします。",
            },
            {
              question:
                "BIS認証なしで輸入家具を販売できますか？",
              answer:
                "いいえ。義務的カテゴリーの家具は、BIS承認なしではインドで販売できません。",
            },
            {
              question: "家具の認証にはどのくらい時間がかかりますか？",
              answer:
                "試験と検査により、通常2〜3か月です。",
            },
            {
              question:
                "BIS認証とISIマークの違いは何ですか？",
              answer:
                "BIS認証は承認プロセスであり、ISIマークは家具に表示される認証ラベルです。",
            },
            {
              question: "家具に適用されるBIS標準は何ですか？",
              answer:
                "IS 17631〜IS 17636は、椅子、スツール、作業用椅子、テーブル、ベッド、二段ベッド、収納ユニットをカバーしています。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>関連リソース</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                BIS-ISI認証
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                外国メーカー向けBIS証明書
              </a>
            </>,
          ]}
        />

        <ManyUsersAlsoReadJapanese />

        <FaqAuthorJapanese questionNumber={2} />
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
              私たちのサービス
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                インド最高の証明書コンサルタント
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
                alt="BISロゴ"
                title="BISロゴ"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              外国製造用BISマーク（ISIライセンス）
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCOロゴ"
                title="CDSCOロゴ"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO登録認証
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRSロゴ"
                title="BISCRSロゴ"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS（CRS）登録
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="プラスチック廃棄物管理"
                title="プラスチック廃棄物管理"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              プラスチック廃棄物管理
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPR証明書ロゴ"
                title="EPR証明書ロゴ"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR証明書認証
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPCロゴ"
                title="LMPCロゴ"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC証明書認証
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BISロゴ"
                title="BISロゴ"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS登録証明書
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISIマークロゴ"
                title="ISIマークロゴ"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              インド製造業者向けISIマーク（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
