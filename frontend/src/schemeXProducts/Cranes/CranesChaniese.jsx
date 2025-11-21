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
import FooterChinese from "@/components/manual/Footer/FooterChinese";
import ServiceAuthorChinese from "@/components/manual/ServiceAuthor/ServiceAuthorChinese";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentChinese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentChinese";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const CranesChinese = () => {
  return (
    <div className="relative w-full">
      <CranesMetaTags />

      <CranesBreadcrumb />
      <CranesMainContent />
      <Services />
      <VideoSection />
      <FooterChinese />
    </div>
  );
};

export default CranesChinese;

const CranesMetaTags = () => {
  const title = "BIS方案X起重机认证";
  const description =
    "印度标准局（BIS）已为所有类型的起重机及其组件、子组件和部件引入了强制性方案X认证。";
  const keywords =
    "起重机BIS认证, 起重机BIS方案X认证, 起重机方案X认证, 起重机BIS, 起重机OTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "印度BIS方案X起重机认证 | 完整指南";
  const ogDescription =
    "了解印度BIS方案X起重机认证的一切。了解OTR 2024合规性、BIS许可证流程、ISI标志要求，以及如何在2026年9月截止日期前获得认证";

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

const CranesBreadcrumb = () => {
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
                    BIS方案X起重机
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

const CranesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CranesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentChinese />
      </div>
    </div>
  );
};

const CranesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS方案X起重机
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
            alt="BIS方案X起重机认证"
            title="BIS方案X起重机许可证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          起重机主要用于提升和运输材料，以及用于制造、建筑、生产和采矿。由于它们的功能对安全至关重要，不合格或质量差的起重机可能导致滑落和坠落、设备损坏或昂贵的损失。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          考虑到这些危险，印度标准局（BIS）已使起重机BIS认证在方案X认证下成为强制性要求。这确保在印度使用的起重机安全、可靠、高效且具有世界级质量。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          在本博客中，我们将指导您了解BIS方案X起重机注册的重要性、起重机OTR的法律方面，以及如何获得起重机BIS许可证并标记起重机BIS标准标志。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          为什么起重机BIS认证很重要
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          起重机广泛用于：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>建筑和基础设施工作</li>
          <li>海港、造船厂和其他物流中心</li>
          <li>工厂和装配厂</li>
          <li>金属采矿和重型物料搬运</li>
          <li>发电厂和其他工业</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          没有起重机BIS认证，未认证的设备可能导致：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>机械故障和事故</li>
          <li>可用性下降和维护成本增加</li>
          <li>失去政府项目资格</li>
          <li>工人和基础设施面临安全危险</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          起重机BIS标志为消费者和监管机构提供信心，确保产品符合严格的印度质量和安全规范。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          什么是BIS方案X起重机认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据BIS合格评定法规（2018），起重机方案X认证在BIS下是强制性的，该法规要求对关键机械进行产品认证。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          起重机方案X的主要特点：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>对国内和外国制造商都是必需的</li>
          <li>
            适用于所有主要类别的起重机，并在印度标准下通知
          </li>
          <li>
            必须进行产品测试、工厂审计和持续合规性评估
          </li>
          <li>
            授权在认证产品上使用起重机BIS标志
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS起重机OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          重工业部于2024年公布的起重机综合技术法规（OTR）旨在强制要求认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          截止日期：所有起重机制造商/进口商需要在2026年9月1日之前在方案X下获得起重机BIS许可证。之后，未认证的起重机不得在印度销售、进口或用于公共投标。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS起重机认证的优势
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            提高安全性：认证起重机最大限度地减少机械故障和事故。
          </li>
          <li>
            市场优势：政府机构和私营公司在电子投标和大型项目中优先选择BIS认证的起重机。
          </li>
          <li>
            消费者和承包商信任：起重机BIS标志建立对质量和可靠性的信任。
          </li>
          <li>
            进入全球市场：对于外国制造商，起重机BIS许可证允许无障碍进入受监管的印度市场。
          </li>
          <li>
            遵守印度法律：避免罚款、扣押和排除在政府合同之外。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Cranes Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          方案X认证中包含的起重机类型
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          方案X认证下列出的起重机包括各种类型，例如：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>塔式起重机</li>
          <li>移动式起重机</li>
          <li>门式和门座式起重机</li>
          <li>桥式/门式起重机</li>
          <li>履带式起重机</li>
          <li>悬臂起重机</li>
          <li>浮式起重机</li>
          <li>工业和车间起重机</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          每个变体必须遵守相应的印度标准（IS代码），如IS 4573:2020（动力移动式起重机规范）和IS/ISO 15442:2012（起重机 - 装载起重机的安全要求）。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          设备类型必须遵守相关的印度标准（IS代码），涉及设计、负载能力、安全和性能。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          获得起重机BIS许可证的程序
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            确定相关IS标准：确定适用于您起重机类型的印度标准。
          </li>
          <li>
            在BIS认可的实验室进行测试：必须进行安全和有效性测试。
          </li>
          <li>
            工厂检查：BIS检查生产地点和质量系统。
          </li>
          <li>
            申请和文件：提交技术报告、测试结果和质量手册。
          </li>
          <li>
            起重机BIS许可证：批准后，制造商有权在起重机BIS标志上应用。
          </li>
          <li>
            持续合规：定期审计和检查确保持续合规。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不合规的处罚
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          如果有人不遵守起重机OTR，并且在2026年9月1日之前未获得起重机BIS认证，会发生什么？
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>禁止销售和进口未认证的起重机</li>
          <li>产品扣押和巨额罚款</li>
          <li>取消政府投标和PSU的资格</li>
          <li>对品牌的长期负面影响</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS方案X认证的实施将是一个重要的里程碑，将提高安全性、可靠性并在印度提供通用行业标准。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          对于起重机制造商、进口商和出口商，拥有起重机BIS许可证并能够通过在线申请门户申请BIS起重机注册以遵守标准、建立消费者信任，并避免与BIS或印度政府发生潜在冲突非常重要。
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
