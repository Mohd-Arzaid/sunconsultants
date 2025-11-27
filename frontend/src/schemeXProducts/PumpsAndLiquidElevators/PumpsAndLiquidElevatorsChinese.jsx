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

const PumpsAndLiquidElevatorsChinese = () => {
  return (
    <div className="relative w-full">
      <PumpsAndLiquidElevatorsMetaTags />
      <PumpsAndLiquidElevatorsBreadcrumb />
      <PumpsAndLiquidElevatorsMainContent />
      <Services />
      <VideoSection />
      <FooterChinese />
    </div>
  );
};

export default PumpsAndLiquidElevatorsChinese;

const PumpsAndLiquidElevatorsMetaTags = () => {
  const title = "BIS方案X泵和液体提升机认证";
  const description =
    "BIS方案X认证适用于泵和液体提升机，根据2024年综合技术法规，所有类型的泵和液体提升机必须在2026年9月之前符合方案X认证";
  const keywords =
    "泵BIS认证, 泵BIS方案X认证, 泵方案X认证, 泵BIS, 泵和液体提升机BIS认证, 泵OTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle = "印度BIS方案X泵和液体提升机认证 | 完整指南";
  const ogDescription =
    "了解印度BIS方案X泵和液体提升机认证的一切。了解OTR 2024合规性、BIS许可证流程、ISI标志要求，以及如何在2026年9月截止日期前获得认证";

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

      {/* HrefLang Tags */}
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-peomp-mich-aegche-seunggangi"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-pompen-en-vloeistofelevators"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/bis-fang-an-x-beng-he-ye-ti-ti-sheng-ji-ren-zheng"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
    </Helmet>
  );
};

const PumpsAndLiquidElevatorsBreadcrumb = () => {
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
                    BIS方案X泵和液体提升机认证
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

const PumpsAndLiquidElevatorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PumpsAndLiquidElevatorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentChinese />
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS方案X泵和液体提升机认证在印度
        </h1>

        {/* BIS License for Pumps Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-For-Pumps.png"
            alt="BIS泵和液体提升机许可证"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          印度工业和基础设施的快速增长需要更多运行的机械，并确保满足国内和国际需求。泵和液体提升机对水资源、农业、建筑、能源、工业和许多其他部门至关重要。如果设备不按照正确的规格和质量控制生产，有缺陷的设备可能会危及安全、中断运营并造成财务损失。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          为了控制这一点，BIS（印度标准局）推出了方案X认证，要求每个泵和液体提升机在印度销售之前必须满足国家质量标准。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          在本文中，我们旨在讨论BIS泵认证的重要性、综合技术法规（OTR）2024的重要性，以及有抱负的制造商在方案X下获得BIS泵许可证的流程。
        </p>

        {/* Why Pumps and Elevators Matter Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          为什么泵和液体提升机很重要
        </div>

        {/* Pumps Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          泵
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          泵是在各个行业中移动流体或泥浆的必需设备。它们广泛用于：
        </p>

        {/* Pumps Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>农业和灌溉系统</li>
          <li>公共供水和家庭使用</li>
          <li>废水和污水处理站</li>
          <li>石油和天然气管道</li>
          <li>空调和工业冷却系统</li>
        </ul>

        {/* Liquid Elevators Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          液体提升机
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          提升泵、用于提升液体的垂直液体提升机用于泵送：
        </p>

        {/* Liquid Elevators Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>高泵送质量的水分配系统</li>
          <li>工业筒仓/储存罐</li>
          <li>在能源、化学和加工工业中</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          由于它们很常见，廉价或劣质的泵或液体提升机可能导致：
        </p>

        {/* Problems with Poor Quality Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>机械故障</li>
          <li>电气危险</li>
          <li>泄漏和腐蚀</li>
          <li>由安全风险和经济损失引起的事故</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          这就是为什么泵和液体提升机的BIS认证对制造商和买家来说都是非常必要的保护。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS and What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          什么是BIS和方案X？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          印度标准局（BIS）是印度国家标准化机构，用于认证产品的质量和安全性。为了控制关键安装和机械，BIS自2022年3月16日起在BIS合格评定法规（2018）下强制要求获得方案X认证。
        </p>

        {/* Scheme X Key Highlights */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          泵方案X认证的关键要点
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>对印度和外国制造商都是强制性的</li>
          <li>适用于印度标准下涵盖的泵、电机和液体提升机</li>
          <li>包括实验室测试、工厂检查、持续合规性验证</li>
          <li>为制造商使用泵的BIS标志作为认证证明提供法律效力。</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          泵的综合技术法规（OTR）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          重工业部已发布OTR 2024，要求所有泵和液体提升机必须符合方案X认证。
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          合规截止日期：
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          最迟在2026年9月1日，所有制造商和进口商必须在方案X下获得有效的BIS泵许可证。不合规可能导致重罚，以及停止销售和排除在公共投标之外。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          为什么泵和液体提升机的BIS认证很重要？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          1. 安全保障：确保设备设计和制造用于精确操作，不会导致：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>电气故障</li>
          <li>泄漏和生锈</li>
          <li>机械损坏和故障</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">2. 市场优势</p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>BIS认证的泵通常是公共项目、政府投标等所必需的。</li>
          <li>与未认证产品相比提供竞争优势。</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          3. 客户信任：泵上的ISI标志向买家提供质量保证并确保产品效率。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          4.
          全球品牌获得轻松的市场准入：外国OEM通过遵守方案X标准可以轻松进入受监管的印度市场。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Pumps Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS方案X注册下的泵类型
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS方案X包含各种类型的泵，包括：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>离心泵</li>
          <li>潜水泵</li>
          <li>增压泵</li>
          <li>多级泵</li>
          <li>正排量泵</li>
          <li>垂直涡轮泵</li>
          <li>化学过程泵</li>
          <li>隔膜泵</li>
          <li>泥浆泵</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          每种类型必须遵守相关的印度标准（IS代码），如IS 16819:2018/ISO
          12100:2010（机械安全 - 设计通用原则 - 风险评估和风险降低）。
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          对于液体提升机，认证包括：
        </div>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>流量和排放高度</li>
          <li>材料兼容性</li>
          <li>能源效率</li>
          <li>操作安全性</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* How to Get BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          如何获得泵的BIS方案X认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          确定适用的标准：报价必须确定相应的IS代码（例如，IS 9079用于潜水泵）。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          产品测试：必须在BIS认可的实验室进行强制性的性能和安全性测试。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          工厂检查：BIS当局检查生产地点以验证质量控制程序的实施。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          文件和申请：技术规格、测试报告和质量手册必须随BIS申请表一起提交。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          颁发泵的BIS证书：制造商在获得批准后，获得在方案X下使用BIS标志的许可证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          持续监督：BIS进行定期审计和随机产品检查，以确保持续合规。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Penalties Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          不合规的处罚
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          在2026年9月1日未能获得BIS认证的制造商将面临：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>禁止销售/进口未认证的泵</li>
          <li>货物扣押和罚款。</li>
          <li>被取消政府订单和PSU的资格</li>
          <li>在印度的声誉长期受损</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-medium text-[#1e1e1e]">结论：</span>{" "}
          泵和液体提升机的BIS方案X认证与OTR
          2024将被实施；这是印度工业标准化的一个里程碑。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          对于从事制造、进口或出口活动的企业，泵的BIS注册不仅仅是必须完成的法律合规流程，更是一个战略决策，以确保安全优于潜在风险，建立客户信任，并进入扩大的印度市场。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          泵和液体提升机的BIS认证是建立您的产品信誉和市场的长期投资。
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
