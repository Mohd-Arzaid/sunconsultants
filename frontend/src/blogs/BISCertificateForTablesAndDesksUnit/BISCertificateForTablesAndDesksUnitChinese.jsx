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

const BISCertificateForTablesAndDesksUnitChinese = () => {
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

export default BISCertificateForTablesAndDesksUnitChinese;

const MetaTags = () => {
  const title =
    "桌子和办公桌BIS证书 | IS 17633:2022 BIS许可证";
  const ogTitle = "桌子和办公桌BIS认证 – IS 17633:2022指南";
  const twitterTitle = "桌子和办公桌BIS许可证 | IS 17633:2022";
  const metaDescription =
    "获取IS 17633:2022标准下的桌子和办公桌BIS证书。了解印度BIS认证的流程、文件、测试、成本和时间表。";
  const ogDescription =
    "根据IS 17633:2022标准，桌子和办公桌BIS认证完整指南。了解流程、成本、文件、测试和BIS许可证优势。";
  const twitterDescription =
    "申请IS 17633:2022标准下的桌子和办公桌BIS证书。了解印度的BIS流程、文件、测试、费用和时间表。";
  const metaKeywords =
    "桌子和办公桌BIS证书, 桌子和办公桌BIS许可证, IS 17633:2022, 桌子和办公桌BIS认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/zhuozi-he-bangongzhuo-is-17633";
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
                    桌子和办公桌BIS证书 – IS 17633:2022
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
          桌子和办公桌BIS证书 – IS 17633:2022 BIS认证完整指南
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="桌子和办公桌BIS许可证"
            alt="桌子和办公桌BIS证书 - IS 17633:2022 BIS认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          桌子和办公桌BIS证书对于印度所有桌子和办公桌的制造商、进口商和销售商都是强制性的。根据印度标准IS 17633:2022 – 桌子和办公桌：安全要求，这些家具产品必须经过印度标准局（BIS）的测试和认证，才能在印度市场合法销售。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          桌子和办公桌是家庭、办公室、学校、大学、商业空间、酒店环境和工业工作场所的重要组成部分。由于它们经常承受重量、冲击和持续使用，其结构强度和安全至关重要。为确保消费者保护和产品可靠性，BIS强制要求认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本综合指南解释了IS 17633:2022、BIS注册流程、测试、所需文件、费用、时间表、处罚以及对制造商和进口商的益处。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS认证是由印度标准局（印度国家标准机构）管理的监管合规流程。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS证书的含义
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS证书确认产品符合印度标准规定的安全、质量、性能和耐久性要求。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS认证的益处
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>确保消费者安全</li>
          <li>支持高质量制造</li>
          <li>降低产品故障风险</li>
          <li>提高市场接受度</li>
          <li>BIS质量控制令（QCOs）法律要求</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          一旦获得批准，产品将带有BIS标志（ISI标志）以及许可证号码。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          适用于桌子和办公桌的印度标准是什么？– IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          适用的BIS标准是：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – 桌子和办公桌：安全要求
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准定义了用于住宅、商业、酒店和机构环境的所有类型桌子和办公桌的性能、结构安全和耐久性要求。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          涵盖的产品
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>办公桌</li>
          <li>电脑桌</li>
          <li>学习桌</li>
          <li>餐桌</li>
          <li>咖啡桌</li>
          <li>工作桌</li>
          <li>培训桌</li>
          <li>学校/大学课桌</li>
          <li>教师桌</li>
          <li>模块化工作站桌</li>
          <li>写字桌</li>
          <li>会议/会议室桌</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17633:2022下的关键安全参数
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>结构稳定性</li>
          <li>承载能力</li>
          <li>抗冲击性</li>
          <li>水平/垂直力性能</li>
          <li>表面处理质量</li>
          <li>边缘安全</li>
          <li>重复使用下的耐久性</li>
          <li>材料安全</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          在印度销售的每张桌子或办公桌都必须通过桌子和办公桌BIS注册符合这些参数。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么桌子和办公桌需要BIS认证
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          桌子和办公桌是在家庭、办公室、学校和公共场所常见的高使用率家具。结构故障可能导致事故，例如：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>承重时坍塌</li>
          <li>尖锐边缘伤害</li>
          <li>使用时不稳定</li>
          <li>接头断裂</li>
          <li>表面脱落</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          为避免这些危险，BIS认证确保：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>安全的设计和构造</li>
          <li>符合结构载荷要求</li>
          <li>耐用的性能</li>
          <li>防止翻倒和坍塌</li>
          <li>高质量材料选择</li>
          <li>统一的市场标准</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          在印度，没有桌子和办公桌BIS许可证就销售桌子和办公桌是违法的。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          桌子和办公桌BIS认证流程（IS 17633:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS认证流程遵循ISI计划（符合性评估计划-I），包括产品测试和工厂检查。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤1 – 确定产品类别和标准
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          确认桌子/办公桌属于IS 17633:2022。确定变体数量和材料。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤2 – 提交BIS申请（在线提交）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          在BIS Manak在线门户上填写申请，包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造商详细信息</li>
          <li>工厂地址</li>
          <li>产品规格</li>
          <li>商标详细信息</li>
          <li>质量控制系统</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤3 – 支付BIS认证费用
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">包括：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申请费</li>
          <li>处理费</li>
          <li>产品测试费用</li>
          <li>工厂检查费用</li>
          <li>标记费用</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤4 – 在BIS认可的实验室进行样品测试
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          产品必须按照IS 17633:2022的规定进行完整测试。
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          进行的测试
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>稳定性测试</li>
          <li>强度测试（静载荷）</li>
          <li>耐久性测试（重复加载）</li>
          <li>冲击测试</li>
          <li>挠度测量</li>
          <li>边缘和表面安全测试</li>
          <li>工作空间载荷测试</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          实验室直接将测试报告上传到BIS。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤5 – BIS工厂检查
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS官员访问制造设施以验证：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>质量管理系统</li>
          <li>内部测试能力</li>
          <li>原材料控制</li>
          <li>生产线和机械</li>
          <li>仪器校准</li>
          <li>符合STI（测试和检查计划）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤6 – 授予BIS许可证
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">BIS颁发：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS证书</li>
          <li>ISI标志批准</li>
          <li>唯一的CML许可证号码</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          此后，制造商可以在印度合法标记和销售桌子/办公桌。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤7 – 许可证后合规
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          制造商必须：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>按照STI维护记录</li>
          <li>正确使用ISI标记</li>
          <li>允许定期BIS检查</li>
          <li>每1-2年更新许可证</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          桌子和办公桌BIS许可证范围
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> 本标准涵盖与性能和安全性相关的要求，即用于坐姿和/或站姿、供成人使用的桌子和办公桌的强度、稳定性和耐久性。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> 本标准适用于完全制造/制造的桌子和办公桌。它也适用于即装即用单元；在这种情况下，本标准的要求应适用于组装单元。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          桌子和办公桌BIS认证所需文件
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          制造文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂许可证</li>
          <li>机械清单</li>
          <li>测试设备清单</li>
          <li>校准证书</li>
          <li>工厂布局</li>
          <li>工艺流程图</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技术文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>桌子/办公桌图纸</li>
          <li>材料清单</li>
          <li>产品规格</li>
          <li>内部质量测试报告</li>
          <li>产品照片/视频</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>授权签署人身份证明</li>
          <li>地址证明</li>
          <li>品牌授权书</li>
          <li>商标注册证书</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS申请文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>填写的申请表</li>
          <li>制造商承诺书</li>
          <li>测试请求函</li>
          <li>授权书</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          完整的文件确保更快的审批。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022下的测试要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          测试评估强度、稳定性、耐久性和安全性。
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
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  设计和工艺
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  稳定性测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  规定载荷
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  偶尔重载
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  水平静力下的强度
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  一般
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  玻璃桌面垂直冲击测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  所有其他桌面垂直冲击测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  桌面挠度
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  跌落测试
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          测试必须在BIS认可的实验室进行。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见挑战及如何避免
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. 产品在载荷或耐久性测试中失败</strong>
            <br />
            解决方案：加强接头，使用符合BIS的材料，增加加固。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. 文件不完整</strong>
            <br />
            解决方案：提前准备所有法律、技术和制造文件。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. 工厂缺乏适当的测试设备</strong>
            <br />
            解决方案：安装所需仪器，并按照BIS指南维护校准。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. 标签不正确</strong>
            <br />
            解决方案：确保ISI标记完全遵循BIS规则。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. 产品型号分类错误</strong>
            <br />
            解决方案：获得专业指导以正确分类变体。
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          桌子和办公桌BIS认证的益处
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>在印度合法销售的授权</li>
          <li>增加客户信任</li>
          <li>更好的产品耐久性</li>
          <li>进入主要零售商和电子商务平台</li>
          <li>降低产品责任风险</li>
          <li>更高的品牌可信度</li>
          <li>符合政府QCOs</li>
          <li>市场竞争优势</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          不合规的处罚
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          在没有BIS认证的情况下销售或分销桌子/办公桌可能导致：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品没收</li>
          <li>重罚</li>
          <li>刑事起诉</li>
          <li>禁止进口</li>
          <li>业务关闭令</li>
          <li>许可证取消</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          2016年《印度标准局法》执行严格的处罚。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          谁需要桌子和办公桌BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          此认证对以下人员是强制性的：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>印度制造商</li>
          <li>外国制造商</li>
          <li>进口商</li>
          <li>贸易商/品牌所有者</li>
          <li>OEM/ODM供应商</li>
          <li>家具分销商</li>
          <li>电子商务卖家</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          每个工厂必须获得单独的BIS许可证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么选择我们进行BIS认证咨询？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          我们提供端到端的协助：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>标准解释（IS 17633:2022）</li>
          <li>产品分类</li>
          <li>文件起草</li>
          <li>测试协调</li>
          <li>BIS门户提交</li>
          <li>工厂检查支持</li>
          <li>与BIS持续跟进</li>
          <li>许可证批准</li>
          <li>续期和合规管理</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          我们的专业知识确保快速、无忧、无错误的认证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据IS 17633:2022，桌子和办公桌BIS证书是一项强制性符合性要求，确保产品安全、性能、耐久性以及符合国家标准。制造商和进口商必须进行产品测试、工厂检查，并满足所有BIS文件和标签规则，才能获得ISI标志。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          在专家协助下，整个认证过程变得顺畅、快速，并完全符合BIS法规。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 – 桌子和办公桌BIS证书（IS 17633:2022）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. 桌子和办公桌的BIS认证是强制性的吗？
              </strong>
              <br />
              是的。根据IS 17633:2022，所有桌子和办公桌在印度销售前必须获得BIS认证。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 认证需要哪些测试？</strong>
              <br />
              强制性测试包括稳定性、强度、耐久性、挠度、冲击和表面安全测试。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. BIS认证费用是多少？</strong>
              <br />
              费用在₹65,000 – ₹1,30,000之间，取决于测试和检查因素。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. 外国制造商需要BIS认证吗？
              </strong>
              <br />
              是的，通过FMCS计划，包括BIS对海外工厂的检查。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. 一个许可证可以涵盖多个桌子/办公桌型号吗？
              </strong>
              <br />
              是的，但前提是型号在结构和测试参数上相似。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. BIS流程需要多长时间？</strong>
              <br />
              大约30-45天。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 测试必须在BIS认可的实验室进行吗？</strong>
              <br />
              是的，只有BIS认可的实验室才能进行测试。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 如果产品失败会怎样？</strong>
              <br />
              必须重新设计并重新提交测试。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 认证后ISI标记是强制性的吗？</strong>
              <br />
              是的，产品和包装上需要ISI标志。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. 需要哪些文件？</strong>
              <br />
              技术图纸、物料清单、工厂文件、测试报告、质量控制计划和法律文件。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="桌子和办公桌BIS证书 - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

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
