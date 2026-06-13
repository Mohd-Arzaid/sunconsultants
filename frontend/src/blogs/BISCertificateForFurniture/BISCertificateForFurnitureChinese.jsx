import FaqAuthorChinese from "@/components/common/FaqAuthor/FaqAuthorChinese";
import ManyUsersAlsoReadChinese from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadChinese";
import ServicesRightSideContentChinese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentChinese";
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
import FooterChinese from "@/components/manual/Footer/FooterChinese";

const BISCertificateForFurnitureChinese = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterChinese />
    </div>
  );
};

export default BISCertificateForFurnitureChinese;

const MetaTags = () => {
  const title = "印度家具BIS证书 | BIS认证、许可证和流程指南";
  const ogTitle = "印度家具BIS证书 - 完整的BIS认证指南";
  const twitterTitle = "家具BIS证书 | 印度BIS完整认证指南";
  const metaDescription =
    "印度家具BIS证书 - 关于BIS认证、BIS许可证、成本、文件、标准、流程、在线申请和家具制造商BIS标志的完整指南。";
  const ogDescription =
    "正在寻找印度家具BIS认证？详细了解BIS许可证、BIS标志、适用标准、认证流程、成本、文件和合规要求。";
  const twitterDescription =
    "印度家具BIS证书完整指南 - BIS认证流程、成本、文件、BIS标志、标准和在线申请说明。";
  const metaKeywords =
    "家具BIS证书, 家具BIS认证, 家具BIS许可证, 家具BIS许可, 什么是BIS, 印度BIS";
  const websiteUrl = "https://bis-certifications.com/blogs/isi-products/jiaju";
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
                    <Link to="/">首页</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">最新博客</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    印度家具BIS认证
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
        <ServicesRightSideContentChinese />
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
          印度家具BIS认证：BIS标准、ISI标志、流程与合规完整指南
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="家具BIS许可证"
            alt="印度家具BIS认证 - ISI标志指南"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            家具是家庭、办公室和公共场所的重要组成部分。确保家具的安全性、耐用性和质量对消费者和制造商都至关重要。在印度，根据2025年家具（质量控制）令，某些类别的家具必须获得
            <strong>家具BIS认证</strong>
            。本指南详细介绍了BIS标准、ISI标志、认证流程和合规要求。
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>什么是家具BIS认证？</SectionHeading>

        <SubSectionHeading>家具BIS认证的含义</SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS认证是印度标准局（BIS）评估产品以确保其符合印度标准的正式流程。对于家具而言，该认证确保产品满足既定的安全性、性能和品质参数。获得认证后，制造商可以在家具上使用
          <strong>ISI标志</strong>，向购买者表明产品符合合规要求。
        </p>

        <SubSectionHeading>
          家具BIS认证与ISI标志的区别
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>BIS认证</strong> — BIS进行评估、测试和批准的流程。
            </>,
            <>
              <strong>ISI标志</strong> —
              BIS认证后授予的标志，表明产品符合印度标准。ISI标志是消费者可见的合规保证。
            </>,
          ]}
        />

        <SubSectionHeading>
          为什么家具BIS认证对制造商和进口商很重要
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "符合印度法规的法律合规性",
            "进入印度市场和政府采购机会",
            "增强消费者信任和竞争优势",
            "降低召回、罚款或进口限制的风险",
          ]}
        />

        <SectionDivider />

        <SectionHeading>家具制造商的BIS认证要求</SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  要求
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  详情
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["认证机构", "印度标准局（BIS）"],
                ["认证计划", "计划一（ISI标志认证）"],
                ["适用法律", "Furniture (Quality Control) Order, 2025"],
                ["强制性标记", "带有BIS许可证号的ISI标志"],
                ["产品测试", "须通过BIS认可的实验室进行"],
                ["工厂检查", "颁发许可证前为强制性要求"],
                [
                  "适用范围",
                  "印度制造商、外国制造商、进口商",
                ],
                ["认证后监督", "必需"],
                ["许可证续期", "根据BIS要求定期续期"],
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

        <SectionHeading>印度家具BIS认证的监管框架</SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "家具QCO 2025规定某些家具类别必须符合BIS标准。QCO为强制性认证提供法律依据，并明确涵盖的家具类型。",
            },
            {
              icon: Building2,
              title: "印度标准局（BIS）的作用",
              description:
                "BIS制定印度标准（IS），评估制造单位，进行产品测试，并颁发使用ISI标志的许可证。它还通过审计和监督来监控合规情况。",
            },
          ]}
        />

        <SubSectionHeading>强制性 vs 自愿性家具BIS认证</SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>强制性</strong> —
              家具QCO中规定的类别，如床、椅子和储物单元。
            </>,
            <>
              <strong>自愿性</strong> —
              制造商可以选择对额外产品类别进行认证，以提升市场信誉。
            </>,
          ]}
        />

        <SubSectionHeading>
          家具QCO对制造商和进口商的适用性
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "生产QCO涵盖家具的印度制造商",
            "向印度出口的外国制造商",
            "在国内销售家具的进口商",
          ]}
        />

        <SectionDivider />

        <SectionHeading>BIS认证涵盖的家具产品</SectionHeading>

        <SubSectionHeading>家具类别及适用的BIS标准</SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  家具类别
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  适用的印度标准
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  标准标题
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  认证要求
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "工作椅",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "通用椅子和凳子",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "桌子和办公桌",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "储物单元",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "床",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "双层床",
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
                    根据家具QCO为强制性要求
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          所有涵盖的产品必须符合相关BIS标准，并在印度销售前持有有效的ISI标志。这些标准定义了家具安全性、稳定性和可用性的最低要求。
        </p>

        <SectionDivider />

        <SectionHeading>家具BIS标准及其要求</SectionHeading>

        <SubSectionHeading>BIS家具标准下的性能要求</SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          家具必须能够承受正常使用，而不发生变形或结构失效。
        </p>
        <CheckPointsList
          points={[
            "正常和峰值负载条件下的承重能力",
            "连接强度和连接耐久性",
            "材料稳定性，无翘曲或降解",
          ]}
        />

        <SubSectionHeading>安全性和耐用性测试要求</SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          家具必须满足安全规范以防止事故，并满足耐用性标准以确保使用寿命。
        </p>
        <CheckPointsList
          points={[
            "防止倾倒（椅子、凳子和不稳定的单元）",
            "防止额定负载下坍塌（床、双层床、储物单元）",
            "通过重复使用性能测试实现长期耐用性",
          ]}
        />

        <SubSectionHeading>认证期间评估的质量参数</SubSectionHeading>
        <CheckPointsList
          points={[
            "材料质量和表面处理",
            "承重能力",
            "稳定性、人体工程学和安全性特征",
          ]}
        />

        <SubSectionHeading>不同家具类别的合规要求</SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          每种家具类型都有特定的IS标准，详细规定尺寸、性能测试和允许公差。合规确保各制造商之间的统一性和质量。
        </p>

        <SectionDivider />

        <SectionHeading>谁需要家具BIS认证？</SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "印度家具制造商",
              description:
                "所有生产家具QCO涵盖家具的国内制造商在销售产品前必须获得BIS认证。",
            },
            {
              icon: Globe,
              title: "向印度出口家具的外国制造商",
              description:
                "出口商必须遵守BIS标准，才能合法在印度销售家具并使用ISI标志。",
            },
            {
              icon: Package,
              title: "家具进口商和品牌所有者",
              description:
                "进口商必须确保其进口到印度的家具符合BIS规范，即使产品是在国外制造的。",
            },
            {
              icon: ShoppingCart,
              title: "电子商务卖家和零售企业",
              description:
                "销售涵盖类别家具的线上和线下零售商必须核实BIS认证，以避免法律责任。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>家具BIS ISI认证：分步流程</SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "产品识别和适用标准选择",
              description:
                "确定家具类别及相关BIS标准（IS 17631–IS 17636），用于测试和认证。",
            },
            {
              title: "在BIS认可实验室进行产品测试",
              description:
                "家具在BIS批准的实验室中进行强度、稳定性和耐用性测试。测试报告为申请所必需。",
            },
            {
              title: "提交BIS申请",
              description:
                "制造商向BIS提交申请，包括产品规格、技术细节和测试报告。",
            },
            {
              title: "工厂检查和评估",
              description:
                "BIS进行工厂审计，检查制造流程、质量控制系统和生产一致性。",
            },
            {
              title: "授予BIS许可证和ISI标志许可",
              description:
                "批准后，BIS颁发许可证，允许制造商在认证家具上使用ISI标志。",
            },
            {
              title: "认证后合规要求",
              description:
                "需要定期审计、周期性测试和遵守BIS标准以维持认证。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>家具BIS认证所需文件</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>公司注册和制造文件</strong> —
              营业执照、GST注册和制造设施详情。
            </>,
            <>
              <strong>产品技术规格和图纸</strong> —
              详细设计、所用材料和组装说明。
            </>,
            <>
              <strong>测试报告和质量控制文件</strong> —
              来自BIS批准实验室的报告，证明符合IS标准。
            </>,
            <>
              <strong>工厂和生产流程文件</strong> —
              质量管理体系、流程图和检验程序。
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>BIS认证家具的测试要求</SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  测试领域
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  目的
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["强度测试", "验证承重能力"],
                ["稳定性测试", "防止倾倒和坍塌"],
                ["耐用性测试", "评估重复使用下的性能"],
                ["结构完整性测试", "评估连接、框架和接合处"],
                ["安全测试", "降低正常使用中的受伤风险"],
                ["功能性能测试", "确认预期功能和可用性"],
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
          家具必须在BIS认可的实验室进行测试，以验证安全性、性能和耐用性声明。
        </p>

        <SectionDivider />

        <SectionHeading>家具ISI标志：使用与合规要求</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>ISI标志的含义</strong> —
              确认家具符合印度标准并已由BIS认证。
            </>,
            <>
              <strong>ISI标志粘贴规则</strong> —
              标志应可见、永久且按照BIS指南正确格式化。
            </>,
            <>
              <strong>滥用的后果</strong> —
              非法使用可能导致根据2016年BIS法案受到处罚、许可证撤销和法律诉讼。
            </>,
            <>
              <strong>购买者如何验证</strong> —
              消费者可以在BIS官方网站上验证许可证号。
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>BIS认证的时间表、有效性和续期</SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "家具产品认证时间表",
              description:
                "通常为2–3个月，取决于测试和工厂检查安排。",
            },
            {
              icon: ShieldCheck,
              title: "BIS许可证有效期",
              description:
                "许可证有效期为1–3年，须在到期前续期。",
            },
            {
              icon: RefreshCw,
              title: "BIS认证续期流程",
              description:
                "续期包括更新的测试报告、工厂检查和合规确认。",
            },
            {
              icon: Eye,
              title: "监督和持续合规要求",
              description:
                "BIS进行随机审计和测试，确保持续遵守标准。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>BIS认证家具的优势</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>法律合规和市场准入</strong> —
              在印度销售某些类型家具的强制性要求。
            </>,
            <>
              <strong>提高产品质量和消费者信任</strong> —
              BIS认证表明可靠性和安全性。
            </>,
            <>
              <strong>制造商的竞争优势</strong> —
              认证家具具有更高的市场信誉和采购资格。
            </>,
            <>
              <strong>政府采购资格</strong> —
              只有BIS认证产品才能供应给政府或机构采购方。
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>违反BIS家具法规的处罚</SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>制造或销售未认证家具</strong> —
              违反QCO，导致罚款和产品扣押。
            </>,
            <>
              <strong>对不合规家具的进口限制</strong> —
              未认证的进口产品可能在海关被拦截。
            </>,
            <>
              <strong>根据2016年BIS法案的处罚</strong> —
              包括罚款、监禁和禁止销售。
            </>,
            <>
              <strong>不合规的商业风险</strong> —
              失去消费者信任、法律纠纷和受限的市场准入。
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>获得家具BIS认证的挑战</SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "确定正确的印度标准",
              description:
                "制造商必须确保其产品符合适用的IS 17631–IS 17636标准。",
            },
            {
              title: "管理测试和文件要求",
              description:
                "适当的实验室测试和文件是批准所必需的。",
            },
            {
              title: "解决工厂审计意见",
              description:
                "审计期间的不合规可能延迟认证。",
            },
            {
              title: "认证后保持持续合规",
              description:
                "需要持续的质量监控和遵守BIS标准以避免处罚。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>Sun Certifications India 如何提供帮助</SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "申请和文件支持",
              description:
                "指导提交完整准确的BIS申请。",
            },
            {
              icon: FlaskConical,
              title: "产品测试协助",
              description:
                "协助与BIS批准的实验室进行协调。",
            },
            {
              icon: ClipboardCheck,
              title: "审计准备和合规指导",
              description:
                "确保工厂流程在检查前符合BIS要求。",
            },
            {
              icon: ShieldCheck,
              title: "许可证后合规管理",
              description:
                "就记录保存、监督审计和标准更新提供建议。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>关于家具BIS认证的常见问题</SectionHeading>

        <FaqAccordion
          items={[
            {
              question: "所有家具产品是否都必须进行BIS认证？",
              answer:
                "不是。只有家具QCO 2025中列出的家具才需要强制性BIS认证。",
            },
            {
              question: "进口家具可以在没有BIS认证的情况下销售吗？",
              answer:
                "不可以。强制性类别下的家具未经BIS批准不得在印度销售。",
            },
            {
              question: "家具认证需要多长时间？",
              answer:
                "通常为2–3个月，取决于测试和检查。",
            },
            {
              question: "BIS认证和ISI标志有什么区别？",
              answer:
                "BIS认证是批准流程；ISI标志是显示在家具上的认证标签。",
            },
            {
              question: "家具适用的BIS标准有哪些？",
              answer:
                "IS 17631–IS 17636涵盖椅子、凳子、工作椅、桌子、床、双层床和储物单元。",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>相关资源</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                BIS ISI认证
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                外国制造商BIS证书
              </a>
            </>,
          ]}
        />

        <ManyUsersAlsoReadChinese />

        <FaqAuthorChinese questionNumber={2} />
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
              我们的服务
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                印度最佳证书咨询公司
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
              外国制造商BIS标志（ISI许可证）
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
              CDSCO注册认证
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
              BIS（CRS）注册
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
              塑料废物管理
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
              EPR证书认证
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
              LMPC证书认证
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
              BIS注册证书
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
              印度制造商ISI标志（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
