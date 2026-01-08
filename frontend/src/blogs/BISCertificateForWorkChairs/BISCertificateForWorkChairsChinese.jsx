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

const BISCertificateForWorkChairsChinese = () => {
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

export default BISCertificateForWorkChairsChinese;

const MetaTags = () => {
  const title = "工作椅BIS证书 | IS 17631:2022 BIS许可证";
  const ogTitle = "工作椅BIS认证 – IS 17631:2022指南";
  const twitterTitle = "工作椅BIS许可证 | IS 17631:2022";
  const metaDescription =
    "获取IS 17631:2022标准下的工作椅BIS证书。了解印度BIS认证的流程、文件、测试、成本和时间表。";
  const ogDescription =
    "根据IS 17631:2022标准，工作椅BIS认证完整指南。了解流程、成本、文件、测试和BIS许可证优势。";
  const twitterDescription =
    "申请IS 17631:2022标准下的工作椅BIS证书。了解印度的BIS流程、文件、测试、费用和时间表。";
  const metaKeywords =
    "工作椅BIS证书, 工作椅BIS许可证, IS 17631:2022, 工作椅BIS认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631";
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
                    工作椅BIS证书 – IS 17631:2022
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
          工作椅BIS证书 – IS 17631:2022完整合规指南
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="工作椅BIS许可证"
            alt="工作椅BIS证书 - IS 17631:2022 BIS认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          办公和任务座椅的使用日益增加——无论是在企业工作空间、联合办公中心、家庭办公室还是机构设置中——使得安全性和人体工程学性能变得至关重要。为确保制造商提供结构稳定、耐用且对用户安全的座椅产品，印度政府已强制要求工作椅在IS
          17631:2022标准下进行BIS认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          工作椅通常需要承受重复载荷、持续的身体运动、倾斜、旋转和高度调节。任何性能特性的故障都可能导致严重伤害。这就是为什么遵守IS
          17631:2022 – 工作椅：安全要求现在对所有制造商和进口商都是强制性的。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本指南解释了完整的BIS许可流程，包括标准、测试、费用、文件、责任、优势和挑战——采用全新内容编写，以避免在您的网站上重复。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          了解工作椅BIS认证
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          印度标准局（BIS）监督在印度市场供应的产品的质量和安全。任何属于强制性质量控制命令中列出的印度标准的产品必须在销售前由BIS评估和认证。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS证书 – 它代表什么
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS证书表明工作椅：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>已通过性能和耐久性测试</li>
          <li>符合材料和结构规格</li>
          <li>可安全长期日常使用</li>
          <li>符合印度标准中的人体工程学和结构指南</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          满足这些要求的制造商将获得BIS许可证，允许他们使用ISI标记。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅适用标准 – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          任务和办公工作椅的管辖标准是：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – 工作椅：安全要求
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          本标准专注于用于工作环境中长期使用的座椅。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          本标准涵盖的产品
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>人体工程学办公椅</li>
          <li>任务椅</li>
          <li>转椅</li>
          <li>工作台椅</li>
          <li>可调节高度的工作椅</li>
          <li>行政工作椅</li>
          <li>网布或织物靠背工作椅</li>
          <li>配备扶手的椅子</li>
          <li>带倾斜/锁定机构的椅子</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么IS 17631:2022合规性至关重要
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          工作椅与通用椅子显著不同，因为它们：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>支持持续运动</li>
          <li>使用机械和调节机制</li>
          <li>承受动态载荷</li>
          <li>需要长期使用的耐久性</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          制作不良的椅子可能在以下方面失效：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>底座接头</li>
          <li>旋转机制</li>
          <li>气动升降系统</li>
          <li>座椅/靠背支撑</li>
          <li>腿或脚轮结构</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          这可能导致工作场所伤害、运营停机时间和产品责任问题。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          强制性BIS认证确保
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>安全的人体工程学设计</li>
          <li>可靠的承载能力</li>
          <li>循环测试下的强耐久性</li>
          <li>抗机械磨损</li>
          <li>符合用户安全参数</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          因此，对于印度和外国制造商来说，获得工作椅BIS许可证是不可协商的。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅BIS许可证范围
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          本标准涵盖工作椅的要求。本标准适用于完全制造/制作的工作椅。它也适用于即装即用单元；在这种情况下，本标准的要求应适用于组装单元。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅BIS认证流程步骤（IS 17631:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          工作椅的认证过程涉及实验室评估、工厂审计和技术审查的混合。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤1 – 产品评估和标准映射
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          识别所有椅子变体并将其与IS
          17631:2022对齐。了解哪些型号共享相同的结构，哪些需要单独测试。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤2 – 在线申请提交
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          制造商通过Manak在线BIS门户提交申请。所需信息包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造现场详情</li>
          <li>原材料控制</li>
          <li>技术规格</li>
          <li>生产能力</li>
          <li>品牌所有权文件</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤3 – 费用支付
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          必须支付以下费用：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申请费</li>
          <li>处理费</li>
          <li>测试费</li>
          <li>检查费</li>
          <li>标记费</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤4 – 样品测试（IS 17631:2022要求）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS认可的实验室根据多项安全和性能标准评估椅子。
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          工作椅测试包括
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>座椅和靠背静态载荷测试</li>
          <li>耐久性加载循环</li>
          <li>旋转/旋转测试</li>
          <li>倾斜机构耐久性</li>
          <li>气动升降机构性能</li>
          <li>脚轮强度和滚动阻力</li>
          <li>底座稳定性和过载测试</li>
          <li>扶手载荷能力</li>
          <li>抗冲击测试</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          实验室向BIS发布详细的测试报告。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤5 – 工厂审计
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS检查员审查设施：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>生产系统</li>
          <li>材料检查记录</li>
          <li>内部质量保证流程</li>
          <li>测试仪器和校准日志</li>
          <li>符合测试和检查方案（STI）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤6 – 授予BIS许可证
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          一旦确认符合性，BIS授予：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS许可证/ISI标记认证</li>
          <li>唯一的CML编号</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤7 – 持续合规
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">制造商必须：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>保持持续的内部检查</li>
          <li>遵守标记规则</li>
          <li>在监督检查期间配合</li>
          <li>定期更新许可证</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅BIS认证所需文件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          完整的文件集可确保更快的批准。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          商业和工厂文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂注册</li>
          <li>制造图和布局</li>
          <li>生产工作流程</li>
          <li>机械清单</li>
          <li>测试设备清单</li>
          <li>校准证书</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技术文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>椅子工程图纸</li>
          <li>机构规格</li>
          <li>材料数据表</li>
          <li>材料清单</li>
          <li>组装说明</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>授权签字人身份证明</li>
          <li>品牌授权信</li>
          <li>商标证书</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS特定文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申请表</li>
          <li>承诺书</li>
          <li>测试申请表</li>
          <li>标签样本</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          根据IS 17631:2022的测试要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          由于移动部件，工作椅比普通椅子需要更复杂的测试。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          进行的关键测试
        </h3>

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
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  设计和工艺
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  前缘翻倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  向前翻倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  带脚凳椅子的向前翻倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  无扶手椅子的侧向翻倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  带扶手椅子的侧向翻倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  无靠背椅子的向后翻倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  座椅前缘静态载荷测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  座椅和靠背组合静态载荷测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  扶手向下静态载荷测试 — 中央
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  扶手向下静态载荷测试 — 前部
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  扶手侧向静态载荷测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  脚凳静态载荷测试
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          这些测试在几天内模拟数月或数年的常规使用。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅BIS认证的常见挑战
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>✔ 1. 机械/倾斜测试失败</strong> –
            通常由薄弱机制或低质量硬件引起。
          </li>
          <li>
            <strong>✔ 2. 气动升降机构不合规</strong> –
            气动升降必须满足严格的压力和安全参数。
          </li>
          <li>
            <strong>✔ 3. 测试基础设施不足</strong> – 工作椅测试需要专门的设备。
          </li>
          <li>
            <strong>✔ 4. 产品分组不正确</strong> – 不同机制 = 单独测试。
          </li>
          <li>
            <strong>✔ 5. STI不合规</strong> – STI错误可能延迟许可证颁发。
          </li>
          <li>
            <strong>✔ 6. 文件不匹配</strong> –
            品牌名称和型号名称必须与BIS申请完全匹配。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅BIS认证的优势
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>促进在印度的合法销售</li>
          <li>提升客户信任和品牌声誉</li>
          <li>确保长期耐久性</li>
          <li>减少保修索赔和故障</li>
          <li>保护免受监管处罚</li>
          <li>可在电子商务平台上架</li>
          <li>政府招标和企业供应的强制性要求</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          销售无BIS认证工作椅的处罚
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          不合规可能导致：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>巨额经济处罚</li>
          <li>库存没收</li>
          <li>生产停工令</li>
          <li>禁止进口</li>
          <li>刑事起诉</li>
          <li>营业执照取消</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据2016年BIS法案严格执行。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          谁必须获得工作椅BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          强制性适用于：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>印度制造商</li>
          <li>向印度出口的外国制造商</li>
          <li>品牌所有者</li>
          <li>进口商</li>
          <li>OEM/ODM供应商</li>
          <li>仓库分销商</li>
          <li>零售和在线家具品牌</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          每个工厂都需要唯一的BIS许可证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据IS
          17631:2022标准，工作椅BIS证书对于确保印度安全、耐用且符合人体工程学的座椅产品至关重要。强制性认证增强了客户信任，降低了产品责任风险，并确保符合国家质量标准。在专业支持下，从测试到检查再到许可的认证过程变得高效且可预测。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 – 工作椅BIS证书（IS 17631:2022）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 哪些椅子属于IS 17631:2022？</strong>
              <br />
              任何为工作环境设计的椅子，包括办公人体工程学椅、任务椅、转椅和可调节椅子。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 工作椅BIS认证是强制性的吗？</strong>
              <br />
              是的。在印度制造、销售或进口工作椅之前，BIS认证是强制性的。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 工作椅测试与普通椅子测试有何不同？</strong>
              <br />
              工作椅使用旋转、气动升降、倾斜系统和脚轮等机制——需要先进的机械和耐久性测试。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. BIS认证需要多长时间？</strong>
              <br />
              对于印度制造商通常需要30-45天，对于外国制造商大约需要120天，具体取决于测试和文件。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 外国制造商可以申请吗？</strong>
              <br />
              可以，通过FMCS（外国制造商认证计划）。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 如果椅子BIS测试失败怎么办？</strong>
              <br />
              必须重新设计、纠正并重新测试，直到符合IS 17631:2022。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. BIS申请需要哪些文件？</strong>
              <br />
              工厂详情、产品图纸、机械清单、质量控制文件、品牌所有权和法律文件。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 所有椅子型号都需要单独测试吗？</strong>
              <br />
              如果型号在设计、机制或结构上不同，可能需要单独测试。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 批准后ISI标记是强制性的吗？</strong>
              <br />
              是的，ISI标记必须出现在产品、标签和包装上。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="工作椅BIS证书 - IS 17631:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadChinese />

        <FaqAuthorChinese questionNumber={4} />
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
                alt="CDSCO标志"
                title="CDSCO标志"
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
                alt="BISCRS标志"
                title="BISCRS标志"
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
                alt="塑料废物管理"
                title="塑料废物管理"
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
                alt="EPR证书标志"
                title="EPR证书标志"
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
                alt="LMPC标志"
                title="LMPC标志"
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
                alt="BIS标志"
                title="BIS标志"
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
                alt="ISI标志"
                title="ISI标志"
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
