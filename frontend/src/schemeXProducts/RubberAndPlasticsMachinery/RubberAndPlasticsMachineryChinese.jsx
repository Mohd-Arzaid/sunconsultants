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

const RubberAndPlasticsMachineryChinese = () => {
  return (
    <div className="relative w-full">
      <RubberAndPlasticsMachineryMetaTags />

      <RubberAndPlasticsMachineryBreadcrumb />
      <RubberAndPlasticsMachineryMainContent />
      <Services />
      <VideoSection />
      <FooterChinese />
    </div>
  );
};

export default RubberAndPlasticsMachineryChinese;

const RubberAndPlasticsMachineryMetaTags = () => {
  const title = "BIS方案X橡胶和塑料机械认证";
  const description =
    "BIS方案X认证对橡胶和塑料机械、其组件、子组件和部件是强制性的，在方案X下确保质量、安全和客户信任";
  const keywords =
    "橡胶和塑料机械BIS认证, 橡胶和塑料机械BIS方案X认证, 橡胶和塑料机械方案X认证, 橡胶和塑料机械BIS, 橡胶和塑料机械OTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "印度BIS方案X橡胶和塑料机械认证 | 完整指南";
  const ogDescription =
    "了解印度BIS方案X橡胶和塑料机械认证的一切。了解OTR 2024合规性、BIS许可证流程、ISI标志要求，以及如何在2026年9月截止日期前获得认证";

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

const RubberAndPlasticsMachineryBreadcrumb = () => {
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
                    BIS橡胶和塑料机械认证
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

const RubberAndPlasticsMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RubberAndPlasticsMachineryMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentChinese />
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS橡胶和塑料机械认证
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-machinery-for-working-rubber-and-plastics.png"
            title="BIS方案X橡胶和塑料机械许可证"
            alt="BIS方案X橡胶和塑料机械认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          印度工业部门正在快速变化，导致对标准化、安全和高性能机械的需求增加。特别是，用于加工橡胶和塑料的机械对各种行业至关重要，包括汽车、建筑、包装和消费品。为了进一步提高产品安全性、消费者产品保护并促进质量保证，印度标准局（BIS）已建立了一个监管框架，要求进行方案X合规性认证。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          重工业部在2024年综合技术法规（OTR）命令下，要求所有制造商，无论是国内还是国际，都必须获得某些类别机械的方案X下的BIS认证。这包括所有类型的用于加工橡胶和塑料的机械及其组件、子组件和部件。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          本文档概述了方案X认证的重要性和相关性、认证流程，以及与橡胶和塑料机械及其所有组件、子组件和部件相关的所需文件的优势。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS橡胶和塑料机械认证的重要性
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          橡胶和塑料机械广泛用于：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>汽车零部件制造（轮胎、软管、密封件、仪表板）</li>
          <li>塑料包装和消费品</li>
          <li>医疗用品和制药包装</li>
          <li>建筑和基础设施材料</li>
          <li>电气和电子组件</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          没有橡胶和塑料机械BIS认证，行业可能面临：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            操作效率低下和频繁故障
          </li>
          <li>操作人员和最终用户的安全危险</li>
          <li>低质量的产品结果</li>
          <li>被取消政府投标或大型项目的资格</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          橡胶和塑料机械的BIS方案X认证确保机械符合严格的印度标准，使机械更安全、更耐用并准备好进入市场。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          什么是BIS方案X橡胶和塑料机械认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS方案X橡胶和塑料机械认证在印度属于BIS合格评定法规（2018）。它为橡胶和塑料加工机械设定了性能和安全性标准。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          橡胶和塑料机械方案X认证：主要特点：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>对印度和外国制造商都是强制性的</li>
          <li>
            涵盖根据通知的IS代码的各种橡胶和塑料机械
          </li>
          <li>
            需要产品测试、制造过程审计和持续监督。
          </li>
          <li>认证时使用BIS标准标志。</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          该证书保证机械的安全性、能源效率和为行业和最终用户提供可靠的生产。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS橡胶和塑料机械OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          重工业部于2024年发布了橡胶和塑料机械OTR，要求进行方案X认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          截止日期：所有制造商和进口商必须在2026年9月1日之前在方案X下获得有效的BIS橡胶和塑料机械许可证。政府官员表示："这将阻止未认证的橡胶和塑料机械在印度制造、进口或销售。"
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS橡胶和塑料机械认证的优势
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            质量保证：符合印度关于性能和耐用性的标准。
          </li>
          <li>
            市场竞争力：认证产品在公共和私营部门采购中优先考虑。
          </li>
          <li>
            客户信任：当买家购买具有橡胶和塑料机械BIS认证的机械时，会有更大的信任。
          </li>
          <li>
            法律合规：遵守橡胶和塑料机械OTR后，您将不会受到处罚或限制。
          </li>
          <li>
            全球优势：拥有认证的国际OEM更容易进入印度市场。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS认证方案下涵盖的橡胶和塑料机械
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          橡胶和塑料机械方案X认证涵盖各种设备，包括：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>注塑成型机械</li>
          <li>挤出机和吹塑机械</li>
          <li>橡胶混炼机和内部混合机</li>
          <li>压延机械</li>
          <li>压缩成型压力机</li>
          <li>回收和造粒机械</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          每个类别必须遵守适用的印度标准（IS代码），如IS/ISO 20430:2020（塑料和橡胶机械-注塑成型机械-安全要求）。每种类型的机械必须满足适用的印度标准，涉及安全性、性能和可靠性。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS橡胶和塑料机械认证流程
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            确定相关标准：选择与机械类型相关的IS代码。
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
            颁发橡胶和塑料机械BIS许可证：批准后，您可以放置BIS标志。
          </li>
          <li>
            持续合规：BIS进行检查并进行不定期审计以确保符合标准。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不合规的处罚
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          在2026年9月1日之前未获得所有橡胶和塑料机械型号的BIS橡胶和塑料机械认证的制造商面临风险：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            禁止销售/进口未认证的橡胶和塑料机械
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
          在OTR 2024下实施BIS方案X橡胶和塑料机械认证是向印度工业部门带来安全、效率和质量的一步。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          制造商、进口商和出口商通过获得橡胶和塑料机械BIS认证、获得橡胶和塑料机械BIS许可证并在其产品上放置橡胶和塑料机械BIS标志来利用这一流程，表明他们的产品满足当地市场监管系统和客户要求。
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
