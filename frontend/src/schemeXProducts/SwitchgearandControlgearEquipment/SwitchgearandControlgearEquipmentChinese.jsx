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
  
  const SwitchgearandControlgearEquipmentChinese = () => {
    return (
      <div className="relative w-full">
        <SwitchgearandControlgearEquipmentMetaTags />
        <SwitchgearandControlgearEquipmentBreadcrumb />
        <SwitchgearandControlgearEquipmentMainContent />
        <Services />
        <VideoSection />
        <FooterChinese />
      </div>
    );
  };
  
  export default SwitchgearandControlgearEquipmentChinese;
  
  const SwitchgearandControlgearEquipmentMetaTags = () => {
    const title =
      "BIS方案X认证适用于高达1000伏的开关和控制设备";
    const description =
      "BIS方案X认证适用于高达1000V的开关和控制设备及其组件、子组件和部件，是在印度确保质量和安全的强制性要求";
    const keywords =
      "开关和控制设备BIS认证, 开关和控制设备BIS方案X认证, 开关和控制设备方案X认证, 开关和控制设备BIS, 开关和控制设备OTR";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "印度高达1000伏的开关和控制设备BIS方案X认证 | 完整指南";
    const ogDescription =
      "了解印度高达1000V的开关和控制设备BIS方案X认证的所有信息。了解OTR 2024合规性、BIS许可证流程、ISI标志要求，以及如何在2026年9月截止日期前获得认证";
  
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
  
  const SwitchgearandControlgearEquipmentBreadcrumb = () => {
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
                      BIS认证适用于高达1000伏的开关和控制设备
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
  
  const SwitchgearandControlgearEquipmentMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <SwitchgearandControlgearEquipmentMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentChinese />
        </div>
      </div>
    );
  };
  
  const SwitchgearandControlgearEquipmentMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS认证适用于高达1000伏的开关和控制设备
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-for-switch-gear-and-control-gear-equipment.png"
              alt="BIS方案X认证适用于高达1000伏的开关和控制设备"
              title="BIS方案X许可证适用于开关和控制设备"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            在这个自动化和电气化的时代，仪表开关和控制开关是安全有效电力系统的组成部分。从家庭布线到复杂的工业系统，这些设备管理着保护、控制和电源流的隔离。由于这些设备的重要地位，印度标准局（BIS）已根据方案X对这些设备制定了强制性认证，以确保它们满足印度制定的安全和性能基准。
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            重工业部根据2024年综合技术法规，已对2026年9月1日起在印度销售、进口和生产的所有开关和控制设备（≤ 1000V）实施强制性BIS认证。为了解决不合规和不安全的电气设备，并提高市场上提供的产品标准，BIS根据方案X认证，已对这些在1000伏或以下运行的设备制定了强制性认证。
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            本博客概述了认证程序及其优势、范围、目的、支持证据和重要文件，这些对于所有类型的开关和控制设备及其在不超过1000伏电压下运行的组件/子组件/部件的方案X认证至关重要。
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS对开关和控制设备的重要性
          </h2>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            高达1000伏的开关和控制设备在以下方面非常重要：
          </h3>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>家庭和商业电力分配安装</li>
            <li>工业电力管理系统</li>
            <li>可再生能源设施（太阳能/风能发电厂）</li>
            <li>公共基础设施项目</li>
            <li>
              需要电路保护的关键安全应用
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            没有适当的认证，风险包括：
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>电击或火灾风险</li>
            <li>设备损坏和昂贵的停机</li>
            <li>违反印度安全规范</li>
            <li>
              被禁止参与需要认证设备的招标和项目
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            开关和控制设备的方案X认证确保这些产品满足性能、安全和耐用性标准。
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            什么是开关和控制设备的BIS方案X证书？
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            开关和控制设备的BIS方案X认证是2018年BIS合格评定法规的一部分。它要求进行强制性产品测试、工厂检查，并遵守适用的印度标准。
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            开关和控制设备的方案X认证：主要特点：
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>适用于所有印度和外国制造商</li>
            <li>
              涵盖各种设备：断路器、隔离开关、隔离开关、熔断器组合单元和控制设备，最高1000V。
            </li>
            <li>
              需要在BIS认可的设施进行实验室测试
            </li>
            <li>包括生产系统和质量审核</li>
            <li>
              认证后授予在产品上使用标准标志的权利
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            开关和控制设备的BIS OTR
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            开关和控制设备的OTR由重工业部于2024年宣布，要求进行方案X认证。
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            截止日期：所有制造商和进口商必须在2026年9月1日之前根据方案X获得有效的开关和控制设备BIS许可证。"这将阻止未认证的开关和控制设备在印度销售、进口或生产，"政府官员表示。
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            开关和控制设备BIS认证的优势
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              电气安全：保护免受短路、过载和潜在火灾危险。
            </li>
            <li>
              法规合规：开关和控制设备OTR的强制性要求。
            </li>
            <li>
              市场接受度：注册产品可被所有政府和私人项目接受。
            </li>
            <li>
              客户信任：开关和控制设备上的BIS标准标志为客户提供质量和安全保障。
            </li>
            <li>
              竞争优势：提升品牌声誉并为新业务打开大门。
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            开关和控制设备BIS认证流程
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              识别相关印度标准：识别与高达1000伏的开关和控制设备相关的IS代码。
            </li>
            <li>
              产品测试：在BIS认可的实验室进行安全、性能和耐用性测试。
            </li>
            <li>
              工厂审核：BIS检查员验证工厂和质量控制系统。
            </li>
            <li>
              提交文件：所有详细规格、测试报告和合规支持文件。
            </li>
            <li>
              颁发BIS许可证：如果获得批准，BIS颁发使用标准标志的许可证。
            </li>
            <li>
              持续合规：定期对标准进行审核和产品测试，确保认证保持有效。
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            不合规的处罚
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            不遵守OTR方案下开关和控制设备BIS认证将产生以下后果：
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              禁止制造、进口或销售任何未认证的产品
            </li>
            <li>不合规设备将被没收；并处以罚款。</li>
            <li>无法参与政府招标</li>
            <li>损害业务关系和市场信任。</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            结论
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            在OTR 2024中实施开关和控制设备BIS方案X认证是确保印度安全、可靠和高效电力管理的一步。
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            对于制造商和进口商来说，开关和控制设备的方案X认证不仅是法律义务，也是战略投资，确保市场准入、品牌信誉和整体客户信任。
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
                外国制造商的BIS标志（ISI许可证）
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
                BIS注册（CRS）
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
                ISI标志（BIS）适用于印度制造商
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  