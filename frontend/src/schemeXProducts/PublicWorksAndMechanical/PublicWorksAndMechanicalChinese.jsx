import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import ServiceAuthorChinese from "@/components/manual/ServiceAuthor/ServiceAuthorChinese";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentChinese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentChinese";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import FooterChinese from "@/components/manual/Footer/FooterChinese";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const PublicWorksAndMechanicalChinese = () => {
  return (
    <div className="relative w-full">
      <PublicWorksAndMechanicalMetaTags />
      <PublicWorksAndMechanicalBreadcrumb />
      <PublicWorksAndMechanicalMainContent />
      <Services />
      <VideoSection />
      <FooterChinese />
    </div>
  );
};

export default PublicWorksAndMechanicalChinese;

const PublicWorksAndMechanicalMetaTags = () => {
  const title =
    "BIS方案X公共工程和机械设备认证";
  const description =
    "BIS方案X认证适用于公共工程和建筑机械以及机械设备，这是确保工业安全、统一质量和市场准入的战略举措。";
  const keywords =
    "公共工程和机械设备BIS认证, 公共工程和机械设备BIS方案X认证, 公共工程和机械设备方案X认证, 公共工程和机械设备BIS, 公共工程和机械设备OTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "印度BIS方案X公共工程和机械设备认证 | 完整指南";
  const ogDescription =
    "了解印度BIS方案X公共工程和机械设备认证的一切。了解OTR 2024合规性、BIS许可证流程、ISI标志要求，以及如何在2026年9月截止日期前获得认证";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

const PublicWorksAndMechanicalBreadcrumb = () => {
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
                    <Link to="/SchemeX-Products">方案X产品</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS公共工程和机械设备认证
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

const PublicWorksAndMechanicalMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PublicWorksAndMechanicalMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentChinese />
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS公共工程和机械设备认证
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-Machines-for-public-works -&-building.png"
            alt="BIS方案X公共工程和机械设备认证"
            title="BIS公共工程和建筑机械许可证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          随着基础设施的快速发展和工业现代化，可靠和高效的机械至关重要。机械和机械设备在工程、制造和公共工程以及专业工业的施工中发挥着核心作用。保持其质量和合规性至关重要。这是印度标准局（BIS）在方案X认证下实施的法律义务。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          为了实施和简化各种工业机械类别的强制性标准执行，重工业部发布了综合技术法规（OTR）2024。该命令规定，所有类型的公共工程、建筑施工机械和其他机械设备，包括在第84章其他细分中未明确提及的，都必须获得方案X下的BIS认证。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          在本文中，我们将讨论用于公共工程和建筑施工的所有类型的机械和设备、具有独立功能的机械设备、其组件、子组件、该方案的重要性和范围、认证流程和优势，以及必须提交的文件。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS公共工程和机械设备认证的重要性
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          这些机械通常用于：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            公共基础设施建设（道路、桥梁、供水）
          </li>
          <li>工程和重型建筑项目</li>
          <li>城市服务和公用事业</li>
          <li>
            需要起重或加工机械的工业设施
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          没有公共工程和机械设备BIS认证，风险包括：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>在重要项目进行中机械故障</li>
          <li>工人和最终用户的安全考虑</li>
          <li>更高的维护成本和停机时间</li>
          <li>被禁止参与政府资助的项目</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          公共工程和机械设备的方案X认证确保机械安全、高效地运行，故障风险最小。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          什么是BIS方案X公共工程和机械设备认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS方案X公共工程和机械设备认证属于BIS合格评定法规（2018）。这是确保工业机械和基础设施符合印度标准的已识别手段和监管工具。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          方案X资格的主要方面：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>适用于印度和外国制造商</li>
          <li>包括用于公共工程和公用事业的机械</li>
          <li>在BIS认可的实验室进行测试</li>
          <li>
            工厂审计和定期合规检查包含在流程中
          </li>
          <li>
            认证后有权使用BIS标准标志
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS公共工程和机械设备OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          重工业部于2024年发布了公共工程和机械设备的综合技术法规（OTR）。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          截止日期：在2026年9月1日，所有制造商和进口商必须遵守公共工程和机械设备的方案X认证。在此日期之后，未注册的机械将不允许在印度生产、销售或进口。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS公共工程和机械设备认证的优势
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            产品安全：防止因机械问题导致的故障和可靠操作。
          </li>
          <li>
            法规合规：符合公共工程和机械设备OTR。
          </li>
          <li>
            市场优势：认证通常是公共投标和政府项目所必需的。
          </li>
          <li>
            客户信任：正式认证的机械更受一些买家青睐，因为这是质量的保证。
          </li>
          <li>
            责任减少：通过认证产品减少潜在的法律和品牌风险。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR中的公共工程和机械设备类型
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS方案X公共工程和机械设备认证涵盖以下产品：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>道路制造和维护机械</li>
          <li>液压和手动起重机械</li>
          <li>城市服务设备（水分配设备等）</li>
          <li>机械服务和处理设备</li>
          <li>
            专为公共工程和服务中的工业用途设计的设备
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          它们必须遵守相应的印度标准（IS代码），如果适用，包括IS 16819:2018/ISO 12100:2010（机械安全设计通用原则 - 风险评估和风险降低）。所有这些形式都必须按照适用于安全性、性能和质量的相关印度标准生产。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS公共工程和机械设备认证流程
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            确定相关标准：选择适用于您机械的IS代码。
          </li>
          <li>
            产品测试：在BIS批准的实验室进行性能和安全性测试。
          </li>
          <li>
            工厂检查：BIS官员访问生产设施，确保质量控制到位。
          </li>
          <li>
            文件：提交申请表、技术报告和质量手册
          </li>
          <li>
            颁发许可证：BIS授予认证并允许使用BIS标准标志。
          </li>
          <li>
            持续合规：进行持续测试和审计以确保持续合规。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不合规的处罚
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          不遵守公共工程和机械设备OTR中规定的BIS公共工程和机械设备认证将导致：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>禁止销售或进口未认证机械</li>
          <li>重罚和产品扣押</li>
          <li>被禁止参与政府投标和合同流程</li>
          <li>声誉严重受损</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          由公共工程和机械设备OTR（2024）支持的BIS方案X公共工程和机械设备证书，使国家更接近在基础设施机械中建立统一的质量和安全水平。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          对于制造商和进口商，获得公共工程和机械设备的方案X认证不仅仅是合规——它代表了一项战略投资。
        </p>

        <ServiceAuthorChinese />
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
                src={BISImage}
                alt="BIS"
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
                src={CDSCO}
                alt="CDSCO"
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
                src={BISCRS}
                alt="BISCRS"
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
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
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
                src={EPRCertificate}
                alt="EPRCertificate"
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
                src={LMPC}
                alt="LMPC"
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
                src={BISImage}
                alt="BIS"
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
                src={ISIMarkImage}
                alt="ISIMark"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              印度制造ISI标志（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
