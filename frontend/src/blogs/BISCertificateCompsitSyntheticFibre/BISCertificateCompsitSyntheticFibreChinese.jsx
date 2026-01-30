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
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterChinese from "@/components/manual/Footer/FooterChinese";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateCompsitSyntheticFibreChinese = () => {
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

export default BISCertificateCompsitSyntheticFibreChinese;

const MetaTags = () => {
  const title =
    "复合合成纤维绳 BIS 证书 | IS 14928:2001 BIS 许可证";
  const ogTitle =
    "复合合成纤维绳 BIS 认证 – IS 14928:2001 指南";
  const twitterTitle =
    "复合合成纤维绳 BIS 许可证 | IS 14928:2001";
  const metaDescription =
    "获取符合 IS 14928:2001 的复合合成纤维绳 BIS 证书。印度 BIS 认证流程、文件、测试、费用及时间表。";
  const ogDescription =
    "IS 14928:2001 复合合成纤维绳 BIS 认证完整指南。流程、费用、文件、测试及 BIS 许可证优势。";
  const twitterDescription =
    "申请符合 IS 14928:2001 的复合合成纤维绳 BIS 证书。印度 BIS 流程、文件、测试、费用及时间表。";
  const metaKeywords =
    "复合合成纤维绳 BIS 证书, 复合合成纤维绳 BIS 许可证, IS 14928:2001, 复合合成纤维绳 BIS 认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/fuhe-hecheng-xianwei-sheng-is-14928";
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
                    复合合成纤维绳 BIS 证书 – IS 14928:2001
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

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          复合合成纤维绳 BIS 认证 – IS 14928:2001 完整指南
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCompositeSyntheticFibreRopes.png"
            title="复合合成纤维绳 BIS 许可证"
            alt="复合合成纤维绳 BIS 证书 - IS 14928:2001 BIS 认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          复合合成纤维绳广泛应用于海上作业、港口码头、海上设施、渔业、航运、建筑、农业及重物搬运。此类绳索由两种或多种合成纤维（如涤纶、聚丙烯、尼龙或其他人造纤维）组合而成，兼具强度、柔韧性、耐磨性、浮力与耐用性。由于复合合成纤维绳常用于承重、拖曳、系泊、起重及安全关键应用，即使轻微的质量缺陷也可能导致严重事故、设备损坏或作业失败。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          为控制此类风险并确保质量一致，印度政府根据印度标准 IS 14928:2001 规定复合合成纤维绳须获得 BIS 认证。制造商和进口商在制造、销售、分销或向印度市场进口此类产品前，必须持有有效的复合合成纤维绳 BIS 证书。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本页为复合合成纤维绳 BIS 认证的完整合规指南，涵盖 IS 14928:2001 范围、安全意图、测试要求、文件、费用考量及分步认证流程，面向希望清楚了解如何在印度取得复合合成纤维绳 BIS 许可证的制造商、进口商、境外制造商、贸易商及电商卖家。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是 BIS 认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 认证是由印度标准局（BIS）依据 2016 年 BIS 法案运作的产品合格评定制度。BIS 负责制定印度标准、认证产品，并确保在印度销售的商品符合规定的安全、质量与性能基准。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 证书含义
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 证书含义指 BIS 授予的正式批准，确认产品符合相关印度标准。一经认证，制造商可在产品及包装上使用 BIS 认证标志（俗称 ISI 标志）。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI 标志说明
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ISI 标志表示：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品已在 BIS 认可实验室进行测试</li>
          <li>生产设施已由 BIS 官员评估</li>
          <li>已建立持续的质量控制与监督机制</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 存在的目的
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 旨在：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>保护消费者与工人安全</li>
          <li>防止不合格产品流通</li>
          <li>确保工业品的统一性与可靠性</li>
          <li>加强监管执法与公平贸易</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          对于常在危险与高负荷条件下使用的复合合成纤维绳，BIS 认证在事故预防与质量保证方面起着关键作用。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          复合合成纤维绳适用的 BIS 标准
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          本产品适用的印度标准为：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14928:2001</strong> – 复合合成纤维绳
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          该标准规定了复合合成纤维绳的材料、结构、尺寸、性能特性、标志、取样及测试要求。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 14928:2001 范围
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001 涵盖：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>由多种合成纤维组合制造的绳索</li>
          <li>捻制与编织等多种绳索结构</li>
          <li>用于海上、渔业、工业及通用用途的绳索</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          安全、性能与测试意图
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          标准旨在确保：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>足够的破断强度与承重能力</li>
          <li>一致的直径与结构质量</li>
          <li>耐磨、防潮及耐环境老化</li>
          <li>使用寿命内可预测且安全的性能</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          谁必须遵守
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          以下主体必须遵守 IS 14928:2001：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>印度复合合成纤维绳制造商</li>
          <li>在印度市场供应此类绳索的进口商</li>
          <li>通过印度代表销售的境外制造商</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为何复合合成纤维绳必须取得 BIS 认证
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 消费者与工人安全风险
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          复合合成纤维绳用于：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>系泊与拖曳作业</li>
          <li>起重与固定重物</li>
          <li>渔网与海上设备</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          绳索断裂可能导致伤亡、船舶损坏及项目延误。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 政府合规要求
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          根据 BIS 通知与质量控制要求，IS 14928:2001 涵盖的产品未经 BIS 认证不得合法销售。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 法律后果
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          不合规可能导致：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>未认证产品被没收</li>
          <li>依据 BIS 法案的罚款</li>
          <li>起诉与法律诉讼</li>
          <li>进口清关被拒</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. 市场与品牌优势
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          复合合成纤维绳 BIS 许可证可提升：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>客户信心</li>
          <li>政府及国企招标资格</li>
          <li>国内与出口市场的品牌信誉</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          复合合成纤维绳 BIS 认证分步流程
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          适用性与标准确认
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          流程从确认产品属于 IS 14928:2001 范围开始，需明确：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>纤维成分与混纺</li>
          <li>绳索结构类型</li>
          <li>直径范围与用途</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          准确识别可避免测试错误与申请被拒。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 在线申请流程
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          制造商须通过 BIS 门户在线申请并提交：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品详情</li>
          <li>工厂与制造信息</li>
          <li>质量控制安排</li>
          <li>测试申请详情</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          正确填写的 BIS 申请表对及时处理至关重要。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          费用与成本结构
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 证书费用包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申请费</li>
          <li>BIS 认可实验室测试费</li>
          <li>工厂审查费</li>
          <li>年度许可证与标志使用费</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          总体 BIS 认证成本因绳索结构、规格范围及测试复杂度而异。合理规划有助于有效控制 BIS 认证与 BIS 许可证成本。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          产品样品测试（依据 IS 14928:2001）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          产品样品在 BIS 认可实验室抽取并测试，以验证符合标准全部要求。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          工厂审查与审核
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS 官员进行工厂审核以核实：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造过程控制</li>
          <li>原材料管理</li>
          <li>内部测试设施</li>
          <li>质量保证体系与记录</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 许可证与 ISI 标志的授予
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          满足全部要求后，BIS 授予印度标准局许可证，允许制造商在复合合成纤维绳上使用 ISI 标志。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          认证后合规
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          认证后，持证人须：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>保持产品质量一致</li>
          <li>接受定期监督审核</li>
          <li>材料、工艺或设计变更时通知 BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 认证所需文件
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          制造商文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂注册证书</li>
          <li>制造工艺流程图</li>
          <li>机械设备与测试设备清单</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>公司注册证书</li>
          <li>GST 登记</li>
          <li>签字人授权书</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技术文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品规格与图纸</li>
          <li>原材料规格</li>
          <li>内部测试程序</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS 申请文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>填写完整的 BIS 申请表</li>
          <li>测试申请函</li>
          <li>标志与标签详情</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          以上共同构成 BIS 认证必备文件。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          依据 IS 14928:2001 的测试要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          必检项目包括：
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  条款
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  要求
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  结构
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  结构型式
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  处理
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  绳索
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  直径
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  质量
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  破断强度
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  长度
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          所有测试须仅在 BIS 认可实验室进行。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题及应对
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>产品分类错误</strong>
            <br />
            应对：进行认证前技术评估。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>测试不合格</strong>
            <br />
            应对：使原材料质量与过程控制符合 IS 14928:2001。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>文件不完整</strong>
            <br />
            应对：认真准备 BIS 所需文件并在提交前核对。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>审核不合规</strong>
            <br />
            应对：保持完整记录、校准及内部质量检查。
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS 认证对制造商与进口商的好处
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律层面
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>符合印度法规</li>
          <li>顺利清关</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          商业层面
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>具备政府及机构招标资格</li>
          <li>提高买家认可度</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          品牌层面
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>获准使用 BIS 标志</li>
          <li>提升信任与市场信誉</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          市场拓展
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>进入受监管领域</li>
          <li>长期业务增长</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          不合规的处罚
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          未取得 BIS 认证可能导致：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>高额罚款</li>
          <li>产品没收或召回</li>
          <li>进口禁令</li>
          <li>法律起诉</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          谁需要为复合合成纤维绳取得 BIS 认证？
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>印度制造商</li>
          <li>进口商</li>
          <li>向印度供货的境外制造商</li>
          <li>贸易商与分销商</li>
          <li>电商卖家</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          任何在印度市场投放复合合成纤维绳的主体均须确保符合 BIS 要求。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据 IS 14928:2001 取得复合合成纤维绳 BIS 证书既是法律义务，也是重要的安全要求。有效的复合合成纤维绳 BIS 认证/许可证可确保合规、保护终端用户并提升市场信誉。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          对制造商与进口商而言，BIS 认证不仅是获批，更关乎信任、安全与可持续业务增长。在充分技术准备与专业指导下，印度 BIS 认证流程可顺利高效完成。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 – 复合合成纤维绳 BIS 认证
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. BIS 全称是什么？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              印度标准局（Bureau of Indian Standards）。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. 复合合成纤维绳是否必须取得 BIS 认证？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是，依据 IS 14928:2001。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. BIS 证书全称是什么？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              印度标准局证书（Bureau of Indian Standards Certificate）。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. 可以在线申请 BIS 证书吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              可以，通过官方门户在线申请 BIS。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. BIS 认证需要多长时间？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              通常 1–2 个月。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. BIS 认证费用是多少？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              视测试与审核范围而定。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. 进口商是否需要 BIS 认证？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              进口商须确保产品已获认证。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. 境外制造商可以申请吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              可以，通过授权印度代表申请。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. BIS 注册与 BIS 许可证是否相同？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              不同，纤维绳需取得 BIS 许可证。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. 产品测试不合格会怎样？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              需采取纠正措施并重新测试。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. ISI 标志是否必须使用？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是，认证后必须使用。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. BIS 许可证有效期多长？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              通常 1–2 年，可续期。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. 监督审核是否强制？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是，BIS 会进行定期审核。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. 许可证范围可以后续扩展吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              可以，通过范围扩展批准。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. 未认证产品可以在线销售吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              不可以，电商销售也须符合 BIS 要求。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-14928-2001-Sun-Certifications-India.pdf"
            title="复合合成纤维绳 BIS 证书 - IS 14928:2001 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadChinese />

        <FaqAuthorChinese questionNumber={1} />
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
                印度最佳证书顾问
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
              境外制造 BIS 标志（ISI 许可证）
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
              CDSCO 注册认证
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
              BIS (CRS) 注册
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
              EPR 证书认证
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
              LMPC 证书认证
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
              BIS 注册证书
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
              印度制造 ISI 标志（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
