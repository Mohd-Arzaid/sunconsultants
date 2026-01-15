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

const BISCertificateForSeamlessPipesAndTubesChinese = () => {
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

export default BISCertificateForSeamlessPipesAndTubesChinese;

const MetaTags = () => {
  const title = "无缝管和管BIS证书 | IS 17875:2022 BIS许可证";
  const ogTitle = "无缝管和管BIS认证 – IS 17875:2022指南";
  const twitterTitle = "无缝管和管BIS许可证 | IS 17875:2022";
  const metaDescription =
    "获取IS 17875:2022下的无缝管和管BIS证书。了解印度BIS认证的流程、文件、测试、成本和时间表。";
  const ogDescription =
    "IS 17875:2022无缝管和管BIS认证完整指南。了解流程、成本、文件、测试和BIS许可证优势。";
  const twitterDescription =
    "申请IS 17875:2022下的无缝管和管BIS证书。了解印度的BIS流程、文件、测试、费用和时间表。";
  const metaKeywords =
    "无缝管和管BIS证书, 无缝管和管BIS许可证, IS 17875:2022, 无缝管和管BIS认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/wufeng-guan-he-guan-is-17875";
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
                    无缝管和管BIS证书 – IS 17875:2022
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
          无缝管和管BIS证书（IS 17875:2022）— 完整认证指南
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="无缝管和管BIS许可证"
            alt="无缝管和管BIS证书 - IS 17875:2022 BIS认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          无缝钢管和管材因其在关键、高压和高温应用中的卓越性能而广受认可。它们在石油和天然气、石化、炼油厂、重型工程、汽车、热力厂、航空航天、液压和一般机械系统等行业中必不可少。由于无缝管没有焊接缝，与焊接管相比，它们提供更大的强度、均匀性和压力处理能力。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          为确保制造商遵循一致的生产质量并向印度市场供应安全、无缺陷的产品，印度政府已根据IS
          17875:2022对无缝管和管材强制要求BIS认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本综合页面详细解释了获得BIS许可证的整个过程，包括文件、强制性测试、质量合规要求、费用、时间表、技术挑战、优势、处罚和行业适用性
          — 以扩展、详细和SEO丰富的格式编写。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是无缝管和管BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS证书是由印度标准局颁发的官方批准，确认制造商根据IS
          17875:2022规定的规格生产无缝管/管材。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          无缝管必须接受严格的测试，涉及：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>耐压性</li>
          <li>拉伸强度</li>
          <li>冲击韧性</li>
          <li>可弯曲性</li>
          <li>化学成分</li>
          <li>尺寸精度</li>
          <li>无损评估</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          只有满足这些性能要求的制造商才能获得ISI标志，使他们能够在印度合法生产、进口或销售无缝管。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS认证的关键目标
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>防止不合格或危险的管道系统进入工业供应链</li>
          <li>确保一致和可靠的制造质量</li>
          <li>保护依赖高压流体或气体传输的行业</li>
          <li>维护国家安全和质量基准</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          了解IS 17875:2022 — 无缝管和管材的印度标准
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17875:2022规定了用于一般服务的无缝钢管和管材的质量、测试、制造和性能要求。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          无缝管和管材BIS许可证范围
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong>{" "}
          该标准涵盖用于一般服务的无缝不锈钢管和管材的要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong>{" "}
          该标准不规定用于特定目的的无缝不锈钢管和管材的要求，这些要求由单独的印度标准涵盖。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17875:2022涵盖的应用
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>石油和天然气管道</li>
          <li>高温流体服务</li>
          <li>锅炉管</li>
          <li>化工厂</li>
          <li>液压和气动系统</li>
          <li>热交换器</li>
          <li>结构应用</li>
          <li>汽车部件</li>
          <li>蒸汽应用</li>
          <li>高压工业管道</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17875:2022中的关键质量参数
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. 化学成分要求：</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          规定碳、锰、铬、镍、钼、硫、磷等的限值。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. 机械性能：</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>拉伸强度</li>
          <li>屈服强度</li>
          <li>硬度</li>
          <li>延展性</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. 尺寸公差：</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>外径</li>
          <li>壁厚</li>
          <li>长度公差</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. 表面状况：</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          管道必须无裂纹、分层、接缝、划痕或任何有害缺陷。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. 静水压测试：</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          确保管道能够承受内部压力而不泄漏。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. 无损测试（NDT）：</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          包括涡流、超声波测试或磁粉测试。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          无缝管BIS认证完整流程（IS 17875:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          无缝管的BIS认证流程比大多数其他产品更加技术性和详细，因为制造和测试要求广泛。以下是高度详细的逐步说明。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤1 — 确定适用性和产品分类
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">制造商必须：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>识别所有使用的钢材等级</li>
          <li>确定尺寸和厚度范围</li>
          <li>确认所有变体是否属于IS 17875的范围</li>
          <li>准备BIS测试的产品分类</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          如果多个尺寸和等级共享相同的制造设施和流程，单个BIS许可证可以涵盖它们。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤2 — 准备文件并在线提交BIS申请
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          制造商必须在Manak在线BIS门户上申请。
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">信息包括：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂详细信息和布局</li>
          <li>生产能力和流程</li>
          <li>炉子和热处理详情</li>
          <li>轧制、穿孔和拉拔设备</li>
          <li>质量控制系统</li>
          <li>原材料采购文件</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          错误的申请是BIS申请被拒绝的最常见原因之一。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤3 — 费用提交
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">费用包括：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申请费</li>
          <li>处理费</li>
          <li>实验室测试费</li>
          <li>检查和差旅费用</li>
          <li>基于生产量的标志费</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤4 — 样品选择和BIS实验室测试
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          无缝管接受广泛的机械和化学测试。
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          这是BIS认证中最耗时和技术性最强的部分。
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 化学成分测试</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          使用以下方法进行：
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>光学发射光谱</li>
          <li>湿化学方法</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          确保根据IS 17875的精确化学成分。
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 机械测试</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>拉伸测试</strong> — 评估极限拉伸强度、屈服点和伸长率。
          </li>
          <li>
            <strong>硬度测试</strong> — 确认材料韧性。
          </li>
          <li>
            <strong>压扁测试</strong> —
            测试延展性和可焊性（即使是无缝的，压扁检查材料完整性）。
          </li>
          <li>
            <strong>扩口/翻边测试</strong> — 确保可变形性而不开裂。
          </li>
          <li>
            <strong>冲击测试（夏比）</strong> — 评估低温性能。
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 静水压测试</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          管道承受高内部压力，确保不发生泄漏或变形。
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – 无损测试</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          检测内部缺陷的强制性要求。
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          方法包括：
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>超声波检查</li>
          <li>涡流检查</li>
          <li>磁粉检查（MPI）</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 视觉和尺寸检查</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">评估：</p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>表面光洁度</li>
          <li>直线度</li>
          <li>椭圆度</li>
          <li>厚度公差</li>
          <li>直径精度</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 金相检查</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          微观结构分析确认晶粒结构、热处理有效性和材料稳定性。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤5 — BIS工厂检查
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          一旦测试结果成功，BIS官员访问工厂。
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">他们检查：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>原材料储存</li>
          <li>炉子/热处理流程</li>
          <li>穿孔机、减径机和冷拉台</li>
          <li>静水压测试设施</li>
          <li>NDT设施</li>
          <li>实验室设备和校准</li>
          <li>质量控制日志</li>
          <li>制造能力验证</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          工厂必须完全符合测试和检查计划（STI）。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤6 — 授予BIS许可证
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          如果测试和检查满足BIS要求，制造商收到：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS证书</li>
          <li>CML编号</li>
          <li>在无缝管上使用ISI标志的授权</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          如果即使一个要求未满足，BIS也可能拒绝申请 — 这使得专家指导极其宝贵。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤7 — 认证后义务
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">制造商必须：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>在标签、包装和管道上正确使用ISI标志</li>
          <li>根据STI维护内部测试</li>
          <li>接受定期BIS监督检查</li>
          <li>确保每批都符合IS 17875:2022</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          未能保持合规可能导致许可证暂停或取消。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          无缝管BIS认证所需文件
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          A. 制造和生产文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂许可证</li>
          <li>带机械定位的布局图</li>
          <li>质量控制流程手册</li>
          <li>热处理记录</li>
          <li>原材料轧制测试证书</li>
          <li>轧制/穿孔流程详情</li>
          <li>拉拔台详情</li>
          <li>测试设备校准证书</li>
          <li>内部测试报告</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          B. 技术文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>材料清单</li>
          <li>化学等级规格</li>
          <li>机械性能表</li>
          <li>尺寸公差图表</li>
          <li>管道图纸和规格</li>
          <li>材料可追溯性系统文件</li>
          <li>生产标准操作程序</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          C. 法律和组织文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>授权书</li>
          <li>品牌/商标所有权文件</li>
          <li>身份和地址证明</li>
          <li>BIS要求的承诺和声明</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17875:2022下无缝管测试要求
        </h2>

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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  钢包分析
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  产品分析
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  拉伸要求
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  管道
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  管材
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  扩口测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  压扁测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  晶粒尺寸
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  泄漏密封性测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  工艺、光洁度、外观
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  尺寸和公差
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS认证中的常见挑战
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>化学成分测试失败</strong>
            <br />
            由于钢材等级不一致而发生。
          </li>
          <li>
            <strong>机械测试失败</strong>
            <br />
            通常由热处理不正确引起。
          </li>
          <li>
            <strong>NDT拒绝</strong>
            <br />
            内部裂纹或夹杂物可能导致样品失败。
          </li>
          <li>
            <strong>校准不足</strong>
            <br />
            导致测试数据不准确。
          </li>
          <li>
            <strong>STI不合规</strong>
            <br />
            检查期间记录保存不正确成为主要拒绝原因。
          </li>
          <li>
            <strong>尺寸变化</strong>
            <br />
            管道直径或厚度不一致导致失败。
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          无缝管BIS认证的优势
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>在印度制造/销售的合法批准</li>
          <li>确保安全性和可靠性</li>
          <li>提高品牌声誉</li>
          <li>政府招标必需</li>
          <li>公共部门和私营行业要求</li>
          <li>保护消费者免受不合格产品</li>
          <li>增强出口竞争力</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          不合规处罚
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          根据BIS法案，销售未认证的无缝管会导致：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品没收</li>
          <li>重罚</li>
          <li>制造停产</li>
          <li>进口限制</li>
          <li>品牌黑名单</li>
          <li>刑事起诉</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          谁必须获得BIS认证？
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>印度制造商</li>
          <li>向印度出口的外国制造商</li>
          <li>贸易商（品牌所有者）</li>
          <li>OEM和工程公司</li>
          <li>进口商和库存商</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          每个制造单位必须获得单独的许可证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据IS
          17875:2022，无缝管和管材BIS证书是确保高压服务管道满足印度严格安全和质量标准的关键监管要求。从化学成分到先进的无损测试，BIS确保每根认证的管道都耐用、无缺陷，并能够在苛刻的工业条件下运行。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          通过专业指导，制造商可以简化认证过程，最大限度地减少延误，并顺利实现合规。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 — 无缝管BIS认证（扩展和SEO丰富）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 为什么无缝管必须进行BIS认证？</strong>
              <br />
              因为无缝管用于高压和安全关键应用。政府法规确保只有高质量的管道进入印度市场。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 哪个标准适用于无缝管？</strong>
              <br />
              IS 17875:2022。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 认证过程需要多长时间？</strong>
              <br />
              通常印度制造商需要40-60天，外国制造商约120天，具体取决于测试负荷和检查安排。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 需要哪些测试？</strong>
              <br />
              化学分析、拉伸测试、硬度、静水压、NDT、压扁、扩口和尺寸检查。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 外国公司可以申请BIS认证吗？</strong>
              <br />
              可以，通过FMCS计划。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 如果产品测试失败怎么办？</strong>
              <br />
              必须纠正并重新测试；BIS在完全合规之前不会颁发许可证。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 需要哪些文件？</strong>
              <br />
              工厂许可证、机械清单、测试设备、图纸、质量控制文件、原材料证书等。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ISI标志是否强制？</strong>
              <br />
              是的。销售不显示ISI标志的无缝管是违法的。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 一个许可证中是否允许多个等级？</strong>
              <br />
              可以，如果使用相同的设施和流程生产（需BIS批准）。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. BIS许可证有效期多长？</strong>
              <br />
              1-2年，可无限期续签。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="无缝管和管BIS证书 - IS 17875:2022 PDF"
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
