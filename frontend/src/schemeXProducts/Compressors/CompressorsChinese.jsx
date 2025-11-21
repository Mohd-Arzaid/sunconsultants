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
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentChinese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentChinese";
import ServiceAuthorChinese from "@/components/manual/ServiceAuthor/ServiceAuthorChinese";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";

const CompressorsChinese = () => {
  return (
    <div className="relative w-full">
      <CompressorsMetaTags />
      <CompressorsBreadcrumb />
      <CompressorsMainContent />
      <Services />
      <VideoSection />
      <FooterChinese />
    </div>
  );
};

export default CompressorsChinese;

const CompressorsMetaTags = () => {
  const title = "BIS方案X压缩机认证";
  const description =
    "BIS方案X压缩机、组件或其部件的认证在2024年综合技术法规下是强制性的，提高了产品安全性，实现了印度的标准化";
  const keywords =
    "压缩机BIS认证, 压缩机BIS方案X认证, 压缩机方案X认证, 压缩机BIS, 压缩机OTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "印度BIS方案X压缩机认证 | 完整指南";
  const ogDescription =
    "了解印度BIS方案X压缩机认证的一切。了解OTR 2024合规性、BIS许可证流程、ISI标志要求，以及如何在2026年9月截止日期前获得认证";

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

const CompressorsBreadcrumb = () => {
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
                    BIS方案X压缩机
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

const CompressorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CompressorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentChinese />
      </div>
    </div>
  );
};

const CompressorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS方案X压缩机
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Compressors.png"
            title="BIS方案X压缩机许可证"
            alt="BIS方案X压缩机认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          压缩机是制冷、暖通空调、石化、制造、食品加工和制药应用等各个行业的重要设备。快速发展的印度工业正在快速增长，压缩机的质量和安全成为主要关注点。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          为了确保这一点，印度标准局（BIS）已在方案X认证下实施了压缩机BIS认证。此认证确保引入印度地区的每台压缩机都符合特定的安全、性能和效率标准。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          在本指南中，我们提供压缩机BIS方案X认证和压缩机OTR，以及制造商如何获得压缩机BIS许可证以在印度使用压缩机BIS标志。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Compressors is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          为什么压缩机BIS认证很重要
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          压缩机用于：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>空调/制冷系统</li>
          <li>气体传输管道和储存</li>
          <li>石油和天然气加工设施</li>
          <li>发电厂安装和化工工业设施</li>
          <li>食品和饮料生产</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          每种类型都必须满足适用的印度标准（IS代码），如IS 17093:2019。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          没有BIS认证的压缩机，劣质或未标记的产品可能导致：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>故障、维护期和停机时间</li>
          <li>
            能源浪费导致高额公用事业账单
          </li>
          <li>安全风险，如过热或泄漏</li>
          <li>声誉损失和货币损失</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          因此，经过ISI认证的压缩机BIS标志是安全、可靠性和质量的保证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          什么是BIS方案X压缩机认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          BIS方案X压缩机认证是2018年BIS合格评定法规下的印度合格评定方案。这是为了确保国内和外国制造商都遵守印度质量标准。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          压缩机方案X证书的特点：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>对所有制造商（印度和外国）都是强制性的</li>
          <li>
            涵盖根据印度标准通知的各种类型的压缩机
          </li>
          <li>
            包括第三方测试、工厂检查和定期合规性检查
          </li>
          <li>
            允许许可证持有者在产品上使用压缩机BIS标志作为认证产品
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS压缩机OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          重工业部于2024年发布的压缩机综合技术法规（OTR）要求进行压缩机方案X认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          合规截止日期：2026年9月1日，所有制造商和进口商必须拥有方案X下的有效压缩机BIS许可证。任何不合规都将导致在印度完全禁止销售和进口未认证的压缩机。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS压缩机认证的优势
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            安全与性能：有助于避免泄漏、过热和机器故障等危险。
          </li>
          <li>
            市场准入：BIS认证的压缩机可用于公共投标和政府项目。
          </li>
          <li>
            消费者信任：压缩机BIS标志为买家提供产品符合印度标准的信心。
          </li>
          <li>
            竞争优势：只有认证品牌才能获得更多市场信任和偏好。
          </li>
          <li>
            国际品牌轻松市场准入：压缩机BIS许可证为外国制造商提供轻松进入印度市场的途径。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Compressor Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS方案X涵盖的压缩机类型
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS方案X认证适用于各种类型的压缩机，例如：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>往复式正排量压缩机</li>
          <li>旋转式压缩机</li>
          <li>螺杆压缩机</li>
          <li>涡轮压缩机</li>
          <li>轴流压缩机</li>
          <li>工业和便携式空气压缩机</li>
          <li>空调和制冷压缩机</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          不同的压缩机技术必须符合各自的印度标准，这些标准规定了性能、能耗、材料质量和安全要求。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          压缩机BIS许可证逐步流程 – 如何申请？
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            确定适用标准：找到适合您压缩机的IS代码。
          </li>
          <li>
            产品测试：在BIS认可的实验室中进行强制性的性能、安全和能效测试。
          </li>
          <li>
            工厂检查：BIS人员实地访问以验证制造程序和质量控制方法。
          </li>
          <li>
            文件和申请：在BIS申请中包含测试报告、技术规格和质量手册。
          </li>
          <li>
            颁发压缩机BIS许可证：获得批准后，制造商有权使用压缩机BIS标志。
          </li>
          <li>
            持续合规：BIS进行定期监督审计和产品测试以确保持续合规。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不合规的处罚
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          在压缩机OTR下，截至2026年9月1日未获得压缩机BIS认证的制造商将面临：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            不允许销售/进口未进行型式试验的压缩机
          </li>
          <li>没收不合规货物和商业处罚</li>
          <li>禁止参与政府投标和PSU协议</li>
          <li>失去印度市场信任</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          通过压缩机OTR（2024）实施BIS方案X压缩机认证是印度工业安全、能源效率和质量保证的重要进步。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          通过获得压缩机BIS证书并确保压缩机BIS认证流程的制造商、进口商和出口商，获得了成为这个市场一部分的权利，确保他们向印度消费者提供的产品被认为是安全使用的，具有较低的环境风险并且质量良好。
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
