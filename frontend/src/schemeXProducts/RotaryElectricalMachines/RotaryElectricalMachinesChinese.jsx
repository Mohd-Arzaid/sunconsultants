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

const RotaryElectricalMachinesChinese = () => {
  return (
    <div className="relative w-full">
      <RotaryElectricalMachinesMetaTags />
      <RotaryElectricalMachinesBreadcrumb />
      <RotaryElectricalMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterChinese />
    </div>
  );
};

export default RotaryElectricalMachinesChinese;

const RotaryElectricalMachinesMetaTags = () => {
  const title = "BIS方案X旋转电机认证";
  const description =
    "BIS方案X认证适用于旋转电机，如发电机等，和/或其组件、子组件和部件，这是确保关键工业设备质量和安全的重要监管举措";
  const keywords =
    "旋转电机BIS认证, 旋转电机BIS方案X认证, 旋转电机方案X认证, 旋转电机BIS, 旋转电机OTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "印度BIS方案X旋转电机认证 | 完整指南";
  const ogDescription =
    "了解印度BIS方案X旋转电机认证的一切。了解OTR 2024合规性、BIS许可证流程、ISI标志要求，以及如何在2026年9月截止日期前获得认证";

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

const RotaryElectricalMachinesBreadcrumb = () => {
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
                    BIS旋转电机认证
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

const RotaryElectricalMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RotaryElectricalMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentChinese />
      </div>
    </div>
  );
};

const RotaryElectricalMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS旋转电机认证
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Rotary-electrical-machines.png"
            alt="BIS方案X旋转电机认证"
            title="BIS方案X旋转电机许可证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          发电机、电动机和交流发电机等旋转电机是在各种关键活动中使用的重要机械类型，如运行工业、发电，甚至满足全球信息技术基础设施和其他需求。这些机器在电力和运输、制造以及商业综合体等各个部门协同工作，因为它们将机械能转换为电能，反之亦然。这样的机器非常重要，因此其质量、可靠性和安全性至关重要。在印度，BIS通过方案X认证解决了这个问题，对旋转电机及其组件和部件以及其他电气设备进行认证。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          在2024年综合技术法规命令中，重工业部已声明，所有生产旋转机器和所有其他相关设备的外国和本地制造商必须在2026年9月1日遵守方案X认证。该法规涵盖了所有类型的旋转电机，包括发电机、交流发电机、同步和异步电动机，以及所有组件、子组件和机器部件。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          本文档讨论所有类型旋转电机的方案X认证的重要性、范围、认证程序、优势和相关的其他文件。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS旋转电机认证的重要性
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          旋转电机广泛用于：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>发电和配电</li>
          <li>工业自动化和设备</li>
          <li>运输（铁路、船舶、电动汽车）</li>
          <li>石油、天然气和能源部门</li>
          <li>消费和商业用途的电气设备</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          没有认证可能面临的一些风险包括：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>电气危险、短路和火灾危险</li>
          <li>机械损坏和昂贵的停机时间</li>
          <li>能源浪费</li>
          <li>被禁止参与政府投标和项目</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          旋转电机的方案X认证确保这些产品符合严格的质量、效率和安全性标准。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          什么是BIS方案X旋转电机认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS方案X旋转电机认证是BIS合格评定法规（2018）下的政府监管方案。它在产品进入印度市场之前对其进行印度标准认证。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          旋转电机方案X认证：主要特点：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>适用于印度和外国制造商</li>
          <li>
            适用于电动机、发电机、交流发电机和其他旋转电机
          </li>
          <li>
            必须进行充分的产品测试、审计和合规性验证
          </li>
          <li>工厂检查以确保质量控制</li>
          <li>
            允许制造商根据上述旋转电机的认证申请BIS注册。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS旋转电机OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          重工业部于2024年发布了旋转电机OTR，要求进行方案X认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          截止日期：所有制造商和进口商必须在2026年9月1日之前在方案X下获得有效的BIS旋转电机许可证。政府官员表示："这将阻止未认证的旋转电机在全国范围内销售、进口或参与投标。"
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS旋转电机认证的优势
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            安全与合规：通过严格的标准避免电气和机械危险。
          </li>
          <li>
            质量与可靠性：认证的旋转电机以高精度和精确度运行。
          </li>
          <li>
            市场准入：旋转电机BIS许可证通常是公共机构采购所必需的。
          </li>
          <li>
            客户信任：旋转电机BIS标志向客户提供有关产品质量和耐用性的信息。
          </li>
          <li>
            竞争优势：BIS认证的品牌/制造商在受监管市场和政府投标中更受青睐。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS认证方案下涵盖的旋转电机类型
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          旋转电机方案X认证涵盖各种类型，例如：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>AC和DC电动机</li>
          <li>发电机和交流发电机</li>
          <li>涡轮发电机和水力发电机</li>
          <li>
            在工业和公用事业中使用的特殊类型旋转电机
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          所有这些类型必须满足适用的印度标准（IS代码），如IS 16819:2018/ISO 12100:2010（机械安全设计通用原则 - 风险评估和风险降低）。所有品种必须满足相应的印度标准（IS代码），涉及质量、安全性和能源效率。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS旋转电机认证流程
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            确定相关标准：参考适用于您旋转电机类型的相关IS代码。
          </li>
          <li>
            产品测试：在BIS认可的实验室进行符合行业标准的必要性能和安全性测试。
          </li>
          <li>
            工厂检查：BIS官员检查生产现场的质量保证系统。
          </li>
          <li>
            申请和文件：提供技术规格、质量手册和测试报告。
          </li>
          <li>
            颁发旋转电机BIS许可证：批准后，您可以放置BIS标志。
          </li>
          <li>
            持续合规：BIS进行检查并进行不定期审计以确保符合标准。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不合规的处罚
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          在2026年9月1日之前未获得所有旋转电机型号的BIS旋转电机认证的制造商面临风险：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            禁止销售/进口未认证的旋转电机
          </li>
          <li>扣押不合规设备和货币处罚</li>
          <li>
            这将使您不符合政府或PSU投标的资格
          </li>
          <li>品牌价值在印度永久受到影响</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          在OTR 2024下实施BIS方案X旋转电机认证是向印度电气工业部门带来安全、效率和质量的一步。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          制造商、进口商和出口商通过获得旋转电机BIS认证、获得旋转电机BIS许可证并在其产品上放置旋转电机BIS标志来利用这一流程，表明他们的产品满足当地市场监管系统和客户要求。
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
