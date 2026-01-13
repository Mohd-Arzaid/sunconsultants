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

const BISCertificateForFlashlightChinese = () => {
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

export default BISCertificateForFlashlightChinese;

const MetaTags = () => {
  const title = "手电筒BIS认证 | IS 2083:2024 BIS许可证";
  const ogTitle = "手电筒BIS认证 – IS 2083:2024指南";
  const twitterTitle = "手电筒BIS许可证 | IS 2083:2024";
  const metaDescription =
    "根据IS 2083:2024获取手电筒BIS认证。了解印度BIS认证的流程、文件、测试、费用和时间表。";
  const ogDescription =
    "根据IS 2083:2024的手电筒BIS认证完整指南。了解流程、费用、文件、测试和BIS许可证的好处。";
  const twitterDescription =
    "根据IS 2083:2024申请手电筒BIS认证。了解印度的BIS流程、文件、测试、费用和时间表。";
  const metaKeywords =
    "手电筒BIS认证, 手电筒BIS许可证, IS 2083:2024, 手电筒BIS认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/shoudiantong-is-2083";
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
                    手电筒BIS认证 – IS 2083:2024
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
          IS 2083:2024下的手电筒BIS认证 – 完整合规指南
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="手电筒BIS许可证"
            alt="手电筒BIS认证 - IS 2083:2024 BIS认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          手电筒（通常称为手电）是必不可少的便携式照明设备，广泛应用于家庭、工业、紧急服务、安全操作、户外活动和灾难管理。由于手电筒是涉及电池、电路、光源和外壳的电气产品，质量和安全合规至关重要。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          为了规范产品质量、性能和消费者安全，印度标准局（BIS）已通知IS
          2083:2024 –
          手电筒：规范，使在印度销售、制造或进口的手电筒必须获得BIS认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本页面提供了手电筒BIS认证的全面和原创解释，涵盖适用标准、认证流程、测试要求、文件、费用、时间表、处罚和合规责任。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是BIS认证以及为什么适用于手电筒
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          印度标准局（BIS）是印度的国家标准机构，负责确保在印度市场销售的产品符合规定的安全、质量和性能基准。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS认证的含义
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS证书确认手电筒：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>符合印度标准IS 2083:2024</li>
          <li>通过所有强制性实验室测试</li>
          <li>满足电气、机械和性能要求</li>
          <li>对消费者使用安全</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          一旦获得批准，制造商就可以贴上ISI标志，这标志着符合印度标准。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          适用的印度标准 – IS 2083:2024（手电筒：规范）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – 手电筒：规范
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          2083:2024定义了用于一般照明的便携式手电筒的结构、性能、安全和测试要求。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 2083:2024的范围
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">该标准涵盖：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>手持手电筒（手电）</li>
          <li>电池操作的手电筒</li>
          <li>可充电手电筒</li>
          <li>LED手电筒</li>
          <li>紧急和实用手电筒</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          标准涵盖的关键领域
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>电气安全</li>
          <li>发光性能</li>
          <li>机械强度</li>
          <li>电池兼容性</li>
          <li>开关耐久性</li>
          <li>防止过热保护</li>
          <li>抗正常磨损</li>
          <li>标记和标签要求</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          任何属于此范围的手电筒必须在进入印度市场之前获得手电筒BIS许可证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么手电筒必须进行BIS认证
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          手电筒被所有年龄段的消费者广泛使用，并在紧急情况、停电和工业操作等关键情况下使用。不合格的手电筒可能导致：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>电气短路</li>
          <li>电池泄漏或爆炸</li>
          <li>过热</li>
          <li>火灾危险</li>
          <li>照明性能差</li>
          <li>过早失效</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS认证确保
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>电气和用户安全</li>
          <li>一致的光输出</li>
          <li>耐用的结构</li>
          <li>安全的电池操作</li>
          <li>符合印度监管要求</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据2016年BIS法案，销售未经认证的手电筒是违法行为。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          手电筒BIS许可证的范围
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong>{" "}
          本标准规定了由可更换一次电池和可更换/内置二次电池供电的手电筒的要求和测试，最大电压为48伏直流电。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong>{" "}
          本标准适用于预聚焦和聚焦类型的手电筒，使用白炽灯泡和LED模块作为光源。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> 以下内容不在本标准范围内：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>属于IS 10322（第5部分/第6节）范围内的电线和插头连接的手提灯；</li>
          <li>属于IS 10322（第5部分/第8节）范围内的应急照明；以及</li>
          <li>用于危险场所的手电筒。</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          手电筒BIS认证流程（IS 2083:2024）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          手电筒的BIS认证流程根据ISI标志认证方案（方案I）进行，涉及多个阶段。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤1 – 产品识别和标准映射
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          制造商必须确认产品符合IS 2083:2024下的手电筒资格并识别：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>手电筒类型</li>
          <li>电源（电池/可充电）</li>
          <li>光源（LED、灯泡等）</li>
          <li>变体和型号</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤2 – 在线BIS申请
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          通过BIS Manak在线门户提交申请，同时提供：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造商详细信息</li>
          <li>工厂地址</li>
          <li>产品描述</li>
          <li>品牌/商标详细信息</li>
          <li>制造过程信息</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤3 – 支付BIS费用
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          适用费用包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申请费</li>
          <li>处理费</li>
          <li>产品测试费</li>
          <li>工厂检查费</li>
          <li>标记费</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤4 – 根据IS 2083:2024进行产品测试
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          样品在BIS认可的实验室进行测试。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          手电筒的强制性测试
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>发光强度测试</li>
          <li>光输出稳定性测试</li>
          <li>电池耐久性测试</li>
          <li>开关操作测试</li>
          <li>机械强度（跌落测试）</li>
          <li>绝缘电阻测试</li>
          <li>温升测试</li>
          <li>电气安全测试</li>
          <li>标记和标签验证</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          测试报告由实验室直接提交给BIS。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤5 – 工厂检查
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS官员进行现场检查以验证：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造设置</li>
          <li>质量控制系统</li>
          <li>进料检查</li>
          <li>过程中检查</li>
          <li>成品测试</li>
          <li>测试仪器校准</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          遵守测试和检查方案（STI）是强制性的。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤6 – 授予BIS许可证
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          测试和检查成功后，BIS颁发：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS证书</li>
          <li>ISI标志批准</li>
          <li>CML（制造许可证）号码</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          制造商现在可以在印度合法制造和销售手电筒。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤7 – 认证后合规
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          认证后，制造商必须：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>在产品和包装上正确使用ISI标志</li>
          <li>保持批次质量记录</li>
          <li>允许BIS监督检查</li>
          <li>定期更新许可证</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          手电筒BIS认证所需文件
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          制造文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂注册/许可证</li>
          <li>制造过程流程图</li>
          <li>机械清单</li>
          <li>内部测试设备清单</li>
          <li>校准证书</li>
          <li>工厂布局</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技术文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品规格表</li>
          <li>电路图</li>
          <li>电池规格</li>
          <li>材料清单</li>
          <li>内部测试报告</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>授权签字人身份证明</li>
          <li>地址证明</li>
          <li>品牌授权书</li>
          <li>商标证书（如适用）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS特定文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS申请表</li>
          <li>承诺和声明</li>
          <li>测试请求信</li>
          <li>标签设计（ISI标记格式）</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 2083:2024下的测试要求（详细）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          手电筒必须经过严格的测试以确保安全和性能。
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          只有通过所有强制性测试的产品才有资格获得BIS批准。
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  表面处理测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  尺寸检查
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  标记检查
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  开关功能测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  绝缘电阻测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  光分布测试
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  LED手电筒的电路电流
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  内置可充电电池操作手电筒的充电电流测试
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          手电筒BIS认证的常见挑战
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>温升测试失败</li>
          <li>发光输出不一致</li>
          <li>开关耐久性差</li>
          <li>电池兼容性问题</li>
          <li>ISI标签格式不正确</li>
          <li>文件不完整</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          预测试和专家指导可显著降低拒绝风险。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          手电筒制造商BIS认证的好处
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>在印度销售的合法许可</li>
          <li>增强消费者信任</li>
          <li>提高产品可靠性</li>
          <li>在电子商务平台上被接受</li>
          <li>政府采购资格</li>
          <li>减少责任和召回</li>
          <li>强大的品牌信誉</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          销售未经BIS认证的手电筒的处罚
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          不合规可能导致：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品扣押</li>
          <li>重罚款</li>
          <li>进口禁令</li>
          <li>制造业关闭</li>
          <li>根据BIS法案进行刑事起诉</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          谁需要手电筒BIS认证？
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>印度制造商</li>
          <li>向印度出口的外国制造商</li>
          <li>进口商</li>
          <li>品牌所有者</li>
          <li>OEM/ODM供应商</li>
          <li>在线销售商和分销商</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          每个制造单位都需要单独的BIS许可证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          2083:2024下的手电筒BIS证书是强制性监管要求，确保印度便携式照明产品的安全、性能和可靠性。合规不仅保护消费者，还加强品牌信誉和市场准入。通过专业指导，制造商和进口商可以顺利高效地获得BIS认证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 – 手电筒BIS证书（IS 2083:2024）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 在印度手电筒是否必须进行BIS认证？</strong>
              <br />
              是的。IS 2083:2024涵盖的手电筒必须获得BIS认证。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 哪个标准适用于手电筒？</strong>
              <br />
              IS 2083:2024 – 手电筒：规范。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. BIS流程需要多长时间？</strong>
              <br />
              印度制造商约需30-45个工作日，外国制造商约需120天。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 外国制造商可以申请BIS认证吗？</strong>
              <br />
              可以，通过FMCS方案。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ISI标记是否强制性的？</strong>
              <br />
              是的，必须在经认证的手电筒上显示ISI标志。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 如果手电筒测试失败会怎样？</strong>
              <br />
              必须更正产品并重新测试。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 可充电手电筒也包括在内吗？</strong>
              <br />
              是的，如果它们属于IS 2083:2024的范围。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. BIS许可证的有效期有多长？</strong>
              <br />
              1-2年，可续期。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 一个许可证可以涵盖多个型号吗？</strong>
              <br />
              可以，如果它们符合相似性标准。
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
              外国制造商的BIS标志（ISI许可证）
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
              印度制造商的ISI标志（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
