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

const BISCertificationFibreRopesPolyamideChinese = () => {
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

export default BISCertificationFibreRopesPolyamideChinese;

const MetaTags = () => {
  const title =
    "聚酰胺纤维绳BIS证书 | IS 4572:2022 BIS许可证";
  const ogTitle =
    "聚酰胺纤维绳BIS认证 – IS 4572:2022 指南";
  const twitterTitle = "聚酰胺纤维绳BIS许可证 | IS 4572:2022";
  const metaDescription =
    "根据IS 4572:2022获取聚酰胺纤维绳BIS证书。印度BIS认证流程、文件、测试、费用及时间。";
  const ogDescription =
    "IS 4572:2022聚酰胺纤维绳BIS认证完整指南。了解流程、费用、文件、测试及BIS许可证优势。";
  const twitterDescription =
    "根据IS 4572:2022申请聚酰胺纤维绳BIS证书。了解印度BIS流程、文件、测试、费用及时间。";
  const metaKeywords =
    "聚酰胺纤维绳BIS证书, 聚酰胺纤维绳BIS许可证, IS 4572:2022, 聚酰胺纤维绳BIS认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ju-xian-an-xian-wei-sheng-is-4572";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Sun Certification India 运营主管";

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
                    聚酰胺纤维绳BIS证书 – IS 4572:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          聚酰胺纤维绳BIS认证：IS 4572:2022 完整指南
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFibreRopesPolyamide.png"
            title="聚酰胺纤维绳BIS许可证"
            alt="聚酰胺纤维绳BIS证书 - IS 4572:2022 BIS认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          由于聚酰胺（尼龙）纤维绳具有高抗拉强度、耐磨性、弹性和耐久性，其在印度的需求迅速增长。这些绳索广泛应用于海洋作业、航运、渔业、建筑、起重、工业搬运、港口、海上平台及国防相关活动。由于纤维绳常用于承重和安全关键环境，任何失效都可能导致严重事故、经济损失和法律责任。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          为确保质量一致、性能可靠和用户安全，印度政府规定根据IS 4572:2022，聚酰胺纤维绳必须获得BIS认证。制造商和进口商在印度市场销售、分销或进口此类产品前，必须获得有效的聚酰胺纤维绳BIS证书。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本页为制造商、进口商、出口商、贸易商和品牌商提供完整的合规指南，帮助您了解聚酰胺纤维绳BIS认证流程、适用标准、测试要求、费用、文件及法律义务。若您计划申请聚酰胺纤维绳BIS许可证，本指南将助您做出明智决策并规避合规风险。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS认证是由印度标准局（BIS）管理的合格评定体系，BIS是印度国家标准化机构。BIS根据《2016年BIS法案》运作，旨在确保在印度销售的产品符合印度标准（IS）规定的安全、质量和性能要求。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS证书含义
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS证书是正式批准文件，确认产品符合适用的印度标准并适合在印度市场使用。一经认证，制造商可在产品及其包装上使用BIS认证标志（通常称为ISI标志）。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ISI标志说明
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          ISI标志表示：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品已在BIS认可实验室进行测试</li>
          <li>生产设施已通过BIS评估</li>
          <li>已建立持续合规与监督机制</li>
        </ul>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS存在的目的
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS旨在：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>保护消费者安全</li>
          <li>防止不合格产品流通</li>
          <li>促进统一质量标准</li>
          <li>支持公平贸易和法规合规</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          对于高风险作业中使用的纤维绳，BIS认证在防止因劣质材料或不当制造导致的事故方面发挥着关键作用。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          聚酰胺纤维绳适用BIS标准
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          聚酰胺纤维绳适用的印度标准为：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 4572:2022</strong> – 纤维绳（聚酰胺）
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          该标准规定了聚酰胺纤维绳的结构、材料成分、尺寸公差、机械性能、性能指标及测试方法。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 4572:2022 范围
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 4572:2022 涵盖：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>由聚酰胺纤维制成的绳索</li>
          <li>不同绳索结构（捻制、编织、编结）</li>
          <li>用于海洋、工业、商业及一般用途的绳索</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          标准目的
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          该标准旨在确保：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>足够的断裂强度</li>
          <li>统一的直径和结构</li>
          <li>耐磨损、耐磨损及耐环境应力</li>
          <li>使用寿命期间性能一致</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          谁必须合规
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          以下主体必须符合IS 4572:2022：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>聚酰胺纤维绳印度制造商</li>
          <li>将此类绳索进口至印度的进口商</li>
          <li>通过印度实体在印度销售的外国制造商</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为何聚酰胺纤维绳必须获得BIS认证
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 安全风险
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          聚酰胺纤维绳常用于：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>起重</li>
          <li>系泊船舶</li>
          <li>固定设备</li>
          <li>工业搬运</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          绳索因质量差而失效可能导致严重伤害、死亡和财产损失。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 政府合规
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          根据BIS通知及质量控制法规，纳入公告标准的产品未经BIS认证不得销售。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 法律后果
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          销售未经认证的纤维绳可能导致：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>货物没收</li>
          <li>罚款</li>
          <li>依据BIS法案起诉</li>
          <li>进口清关取消</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. 市场与品牌优势
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          聚酰胺纤维绳BIS许可证可提升：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>买家信心</li>
          <li>政府及国企招标中的认可度</li>
          <li>国内及出口市场的品牌信誉</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          聚酰胺纤维绳BIS认证分步流程
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          适用性与标准确认
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          第一步是确认您的产品属于IS 4572:2022范围并明确：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>绳索材料（聚酰胺）</li>
          <li>结构类型</li>
          <li>预期用途</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          此步骤确保测试计划正确并避免申请被拒。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS在线申请流程
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          制造商须通过BIS门户在线提交BIS申请。申请包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品详情</li>
          <li>工厂信息</li>
          <li>制造工艺</li>
          <li>质量控制安排</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          此阶段准确性对顺利审批至关重要。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          费用与成本结构
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS证书费用取决于：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申请费</li>
          <li>产品测试费</li>
          <li>工厂检验费</li>
          <li>年度许可证费</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS认证成本因产品复杂度和测试要求而异。合理规划有助于控制整体BIS认证成本。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          产品样品测试
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          产品样品将在BIS认可实验室按IS 4572:2022进行抽样和测试。仅合规产品可进入下一阶段。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          工厂检验与审核
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS官员进行工厂审核以核实：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造能力</li>
          <li>内部测试设施</li>
          <li>质量保证体系</li>
          <li>原材料控制</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS许可证及ISI标志颁发
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          一经确认合规，BIS将颁发印度标准局许可证，允许在纤维绳上使用ISI标志。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          认证后合规
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          认证后，制造商必须：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>保持质量一致</li>
          <li>接受定期监督审核</li>
          <li>在要求时对产品进行复测</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS认证所需文件
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          制造商文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂注册证书</li>
          <li>制造流程图</li>
          <li>厂房与设备详情</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>公司注册证明</li>
          <li>GST登记</li>
          <li>授权书</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技术文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品规格</li>
          <li>图纸与设计详情</li>
          <li>原材料规格</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS申请文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS申请表</li>
          <li>测试委托书</li>
          <li>标志与标签详情</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          以上共同构成BIS认证文件集。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          根据IS 4572:2022的测试要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          强制性测试包括：
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
                  结构与制造
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  捻制
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  标志与标签
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  包装、发票及交货长度
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.0
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  线密度
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.0
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  最小断裂强度
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          所有测试必须在BIS认可实验室进行。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见挑战及应对方法
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          产品分类错误
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          解决方案：申请前进行预评估。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          测试不合格
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          解决方案：使原材料和过程控制符合IS 4572:2022。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          文件错误
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          解决方案：认真准备BIS专用文件。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          审核不合规
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          解决方案：落实质量检查与记录。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          制造商与进口商BIS认证的好处
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律优势
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>符合印度法规</li>
          <li>顺利清关</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          商业优势
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>具备投标资格</li>
          <li>更广的市场准入</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          品牌优势
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>使用BIS标志</li>
          <li>提升客户信任</li>
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

        <p className="text-gray-600 text-base font-geist mb-3">
          不合规可能导致：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>高额罚款</li>
          <li>产品召回</li>
          <li>进口禁令</li>
          <li>法律起诉</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          谁需要聚酰胺纤维绳BIS认证？
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>印度制造商</li>
          <li>进口商</li>
          <li>外国制造商</li>
          <li>贸易商与经销商</li>
          <li>电商卖家</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          任何在印度市场投放该产品的实体均须确保合规。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为何选择我们的BIS认证咨询？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          我们提供一站式BIS认证服务，包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>适用性评估</li>
          <li>文件编制</li>
          <li>实验室协调</li>
          <li>审核支持</li>
          <li>认证后合规</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          我们的专业经验可助您加快获批、降低合规风险。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据IS 4572:2022取得聚酰胺纤维绳BIS证书不仅是法律要求，更是确保安全、可靠与市场信誉的关键一步。无论您是制造商还是进口商，获得聚酰胺纤维绳BIS认证/ BIS许可证都能在加强客户信任的同时，保护您的业务免受监管风险。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          在正确指导、完善文件和合规导向的方法下，BIS认证流程可以平稳可期。与经验丰富的BIS顾问合作，可确保更快获批、降低成本并实现长期合规成功。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          若您计划在印度为聚酰胺纤维绳申请BIS认证，现在正是行动并保持合规的合适时机。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 – 聚酰胺纤维绳BIS认证
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. BIS全称是什么？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS指印度标准局（Bureau of Indian Standards）。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. 聚酰胺纤维绳是否必须获得BIS认证？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，根据IS 4572:2022，BIS认证为强制性要求。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. BIS证书全称是什么？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              印度标准局证书（Bureau of Indian Standards Certificate）。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. 可以在线申请BIS证书吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              可以，通过BIS官方门户在线申请。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. 印度BIS认证流程是什么？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              申请、测试、工厂审核、许可证颁发。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. BIS认证需要多长时间？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              通常为1–2个月，视合规准备情况而定。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. BIS许可证费用是多少？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              费用因测试与检验要求而异。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. 外国制造商可以申请吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              可以，须通过印度授权代表申请。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. BIS注册与BIS许可证有何不同？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              不同。注册主要适用于电子产品；纤维绳需申请许可证。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. 产品测试不合格怎么办？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              需采取纠正措施并重新测试。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. 包装上是否必须标注BIS标志？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，必须严格遵循标志要求。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. BIS许可证有效期多长？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              通常为1–2年，到期可续期。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. 之后可以扩大范围吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              可以，通过范围扩展流程办理。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. 监督审核是否强制？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，BIS会进行定期监督。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. 未经认证的产品可以在线销售吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              不可以，电商平台也要求合规。
            </p>
          </div>
        </div>

        <ManyUsersAlsoReadChinese />

        <FaqAuthorChinese questionNumber={5} />
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
              我们的服务
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                印度最佳认证顾问
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
