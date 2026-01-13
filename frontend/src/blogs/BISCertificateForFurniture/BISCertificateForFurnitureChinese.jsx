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
                    印度家具BIS证书 – 完整详细指南
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
          印度家具BIS证书 – 完整详细指南
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="家具BIS许可证"
            alt="印度家具BIS证书 - 完整BIS认证指南"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          简介：BIS认证与印度家具行业
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          在印度，产品质量、安全和标准化由中央法定机构印度标准局（BIS）管理。BIS是印度的国家标准组织，根据BIS法案设立，旨在确保在印度市场销售的产品符合既定的安全、质量和性能基准。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是BIS？
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS全称是印度标准局。它在印度政府消费者事务、食品和公共分配部领导下运作。BIS在保护消费者利益的同时，通过透明的标准化和认证生态系统支持制造商，发挥着关键作用。
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          印度家具行业由于以下原因经历了快速增长：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>城市化</li>
          <li>住宅和商业基础设施的扩张</li>
          <li>酒店、教育、医疗和共同生活领域的增长</li>
          <li>消费者对产品安全和耐用性意识的提高</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具不再被视为纯粹的美学产品。它直接关系到用户安全、人体工程学、结构稳定性、防火性和长期耐用性。涉及坍塌床、不安全的双层床、不稳定的椅子或不合格储物单元的事件引起了监管机构和消费者的关注。
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          为了解决这些风险，家具BIS认证已成为关键的合规要求。BIS确保家具产品符合与以下方面相关的印度标准（IS）：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>结构强度</li>
          <li>承载能力</li>
          <li>材料质量</li>
          <li>设计安全性</li>
          <li>使用条件下的性能</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          对于制造商、进口商、出口商、中小微企业、初创企业和家具品牌所有者而言，获得家具BIS证书不再仅仅是监管形式——它是市场必需品。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么家具BIS认证很重要
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>它确保符合印度法规的法律合规性</li>
          <li>它增强消费者信任和品牌信誉</li>
          <li>它使产品能够在印度全境无限制销售和分销</li>
          <li>它最大限度地降低产品责任风险</li>
          <li>它提高出口准备度和全球接受度</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          本综合指南旨在成为印度家具BIS认证最权威和详细的资源。无论您是首次制造商还是成熟的家具品牌，本指南都回答了与家具BIS许可证、家具BIS注册、适用标准、流程、成本、文件、时间表和认证后合规相关的所有可能问题。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是家具BIS证书？
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS证书含义
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具BIS证书是印度标准局授予的正式批准，确认特定家具产品符合相关印度标准（IS）。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          什么是BIS标志？
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS标志，通常称为ISI标志，是出现在认证产品上的标准符合性标志。它表示家具已：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>通过实验室测试</li>
          <li>通过工厂检查</li>
          <li>满足所有标准要求</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS标志说明
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS标志代表BIS作为印度国家标准机构的权威。当在家具产品上与ISI标志一起使用时，它向购买者保证产品符合BIS标准。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          印度BIS证书 – 法律地位
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          在印度，制造、进口或销售属于已通知标准范围内的家具产品而未获得BIS认证可能导致：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>货物被扣押</li>
          <li>巨额罚款</li>
          <li>根据BIS法案被起诉</li>
          <li>禁止销售或进口</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          因此，印度家具BIS证书具有重要的法律意义。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么BIS认证对家具产品很重要
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具BIS认证因多种原因至关重要：
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 安全性和结构完整性
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具故障可能导致伤害或死亡。BIS标准评估：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>承载能力</li>
          <li>抗倾覆稳定性</li>
          <li>连接强度</li>
          <li>材料性能</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 质量和耐用性
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          认证家具产品确保：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>使用寿命长</li>
          <li>抗磨损</li>
          <li>性能一致</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 消费者信任
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS认证标志在购买者、机构和批量采购者中建立即时信心。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. 市场准入
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          许多政府招标、机构购买者和大型公司要求使用BIS认证家具。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. 法律合规
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          在强制性BIS规范下销售未认证家具可能招致罚款和法律诉讼。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS认证涵盖的家具产品
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具是BIS下的一个广泛通用类别，涵盖多种产品类型，每种产品由不同的印度标准（IS编号）管理。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          涵盖的主要家具类别：
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. 工作椅
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          用于办公室、工厂和商业空间。标准侧重于人体工程学、稳定性和负载性能。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. 通用椅子和凳子
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          用于家庭、学校和公共场所。BIS评估结构安全性和材料强度。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. 桌子和办公桌
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          包括办公桌、学习桌、工作站。标准测试负载能力和表面耐用性。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. 储物单元
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          衣柜、橱柜、储物柜、架子。强调稳定性、锋利边缘和安全通道。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. 床
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          单人床、双人床、折叠床。BIS检查框架强度和长期性能。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. 双层床
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          由于安全风险而受到严格监管。重点关注护栏、梯子安全和防坠落。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. 非家用家具的软包复合材料
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          用于办公室、酒店、礼堂。标准包括防火性和耐用性测试。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          其他家具产品
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>学校家具</li>
          <li>机构座椅</li>
          <li>医院家具</li>
          <li>模块化家具</li>
          <li>金属和木制家具系统</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          每个产品类别都有自己的适用IS编号，由BIS单独通知。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          适用于家具的BIS标准
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          什么是BIS标准？
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS标准是BIS发布的技术规范，用于定义：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>材料要求</li>
          <li>性能参数</li>
          <li>测试方法</li>
          <li>标记指南</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS编号的含义
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS编号（印度标准编号）唯一标识适用于产品的标准。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS通知流程
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS发布官方BIS通知，使某些标准成为强制性标准。一旦通知：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>合规成为强制性要求</li>
          <li>未认证产品为非法</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          如何识别正确的BIS标准
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">制造商必须：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>识别产品类别</li>
          <li>研究适用的IS范围</li>
          <li>确认标准适用性</li>
          <li>避免错误的标准选择（常见错误）</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          适用于家具的BIS认证类型
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI计划下的BIS许可证
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具产品通常属于ISI认证计划，该计划涉及：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品测试</li>
          <li>工厂检查</li>
          <li>监督审核</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS注册
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS注册主要用于电子和IT产品。家具通常需要BIS许可证，而不是注册。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          印度家具BIS认证流程
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤1：申请前准备
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>识别适用的IS标准</li>
          <li>评估产品设计合规性</li>
          <li>准备技术文件</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤2：BIS申请
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          提交BIS申请，包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品详情</li>
          <li>制造详情</li>
          <li>标准参考</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤3：BIS在线申请
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          通过BIS在线门户提交申请。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤4：产品测试
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          在BIS认可的实验室测试样品。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤5：工厂检查
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">BIS官员验证：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造过程</li>
          <li>质量控制</li>
          <li>测试设施</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤6：授予BIS许可证
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          符合要求后，BIS授予许可证。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤7：使用BIS认证标志
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          制造商可以贴附BIS标志/ISI标志。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具测试要求
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          测试是BIS注册流程的强制性部分。家具经过严格测试以确保安全性和耐用性。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          家具强制性测试：
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>结构负载测试</li>
          <li>稳定性测试</li>
          <li>护栏强度测试</li>
          <li>冲击测试</li>
          <li>夹陷危险测试</li>
          <li>梯子强度和角度测试</li>
          <li>材料安全测试</li>
          <li>边缘半径和锋利度测试</li>
          <li>床垫支撑测试</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          测试必须在BIS认可的实验室进行。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具BIS认证所需文件
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          关键文件包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂注册证明</li>
          <li>产品图纸和规格</li>
          <li>原材料详情</li>
          <li>测试报告</li>
          <li>质量控制记录</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          常见文件错误：
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>标准参考错误</li>
          <li>测试数据不完整</li>
          <li>产品范围不匹配</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具BIS认证成本
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS证书成本组成部分：
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>政府申请费</li>
          <li>测试费用</li>
          <li>检查费</li>
          <li>许可证费</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS认证成本因素：
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品复杂性</li>
          <li>型号数量</li>
          <li>测试要求</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          注意：专业咨询费与政府费用分开。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS证书注册时间表
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">平均时间表：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>测试：3-6周</li>
          <li>检查：1-2周</li>
          <li>许可证授予：2-4周</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          总计：8-12周（大约）
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          印度家具制造商如何获得BIS认证
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">实用提示：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>选择正确的IS标准</li>
          <li>确保工厂准备就绪</li>
          <li>维护测试记录</li>
          <li>避免文件错误</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS证书在线申请 – 实用概述
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          在线门户挑战：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>技术错误</li>
          <li>文件上传问题</li>
          <li>标准选择混淆</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          适当的指导可以减少延误。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          批准后使用BIS标志和BIS认证标志
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">标记规则：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>正确的IS参考</li>
          <li>许可证编号</li>
          <li>适当的尺寸和可见性</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          不合规可能导致暂停。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具BIS认证的挑战
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>标准解释</li>
          <li>产品测试失败</li>
          <li>检查不符合项</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS咨询师在家具认证中的作用
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          专业BIS咨询师通过以下方式提供帮助：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>识别正确的标准</li>
          <li>管理测试和检查</li>
          <li>减少批准时间</li>
          <li>避免昂贵的拒绝</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具BIS认证是印度不断增长的家具市场中质量、安全和法律合规的基石。无论您是制造商、进口商还是品牌所有者，在印度获得家具BIS证书可确保：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>监管合规</li>
          <li>消费者信任</li>
          <li>长期市场成功</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          通过了解BIS认证流程、标准、成本和合规要求，企业可以自信地应对监管环境，为印度市场打造更安全、更坚固、更可靠的家具产品。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS许可证常见问题
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              印度所有家具产品是否都需要BIS认证？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              不是，BIS认证仅对属于已通知BIS标准范围内的家具产品是强制性的。但是，一旦家具产品类别被印度标准局通知，在没有有效BIS许可证的情况下制造、进口、销售或分销该产品在印度是违法的。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              哪些家具产品需要BIS许可证而不是BIS注册？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              家具产品通常属于ISI认证计划，需要BIS许可证，而不是BIS注册。BIS注册（CRS）主要用于电子和IT产品，而家具产品需要测试+工厂检查+BIS许可证。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              进口家具是否可以在没有BIS认证的情况下在印度销售？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              不可以。属于强制性BIS标准范围内的进口家具产品必须在清关前获得BIS认证。进口未认证家具可能导致：
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>海关扣留</li>
              <li>重新出口或销毁</li>
              <li>巨额罚款</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              外国制造商必须在向印度出口家具前获得BIS许可证。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              外国家具制造商可以申请BIS认证吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              可以。外国制造商可以根据外国制造商认证计划（FMCS）申请。他们必须：
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>指定授权印度代表（AIR）</li>
              <li>遵守印度标准</li>
              <li>允许BIS在海外进行工厂检查</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              手工或小型家具制造商是否需要BIS认证？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，如果家具产品属于强制性BIS标准范围内，那么即使是中小微企业、初创企业和小型单位也必须获得BIS认证。没有基于生产量的豁免。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              木制家具是否需要BIS认证？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，如果床、椅子、桌子、办公桌和储物单元等木制家具产品属于已通知标准范围内，则可能需要BIS认证。BIS标准适用于木制和金属家具，具体取决于产品类型和用途。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              一个BIS许可证可以涵盖多个家具型号吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              可以，多个型号或变体可以在单个BIS许可证下涵盖，前提是：
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>它们属于相同的IS标准</li>
              <li>结构、材料和设计参数相似</li>
              <li>BIS在申请期间批准分组</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS认证可以转让给另一个制造商吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              不可以。BIS许可证不可转让。每个制造商必须获得自己的BIS证书，即使产品设计相同。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              什么是BIS证书？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              它是符合BIS标准的正式证明。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              家具是否需要BIS认证？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，对于属于已通知标准范围内的家具产品。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              如何在印度获得BIS认证？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              通过测试、检查和BIS许可证批准。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              什么是BIS标志？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              显示BIS批准符合性标志。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS认证成本？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              取决于产品类型、测试和范围。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS全称是什么？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              印度标准局。
            </p>
          </div>
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
