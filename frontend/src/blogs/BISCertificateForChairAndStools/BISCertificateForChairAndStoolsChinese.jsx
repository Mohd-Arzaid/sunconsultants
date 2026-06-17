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

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForChairAndStoolsChinese = () => {
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

export default BISCertificateForChairAndStoolsChinese;

const MetaTags = () => {
  const title = "通用椅子和凳子BIS认证 | IS 17632:2022";
  const ogTitle = "通用椅子和凳子BIS认证 | IS 17632:2022";
  const twitterTitle = "通用椅子和凳子BIS认证 | IS 17632:2022";
  const metaDescription =
    "了解IS 17632:2022标准下通用椅子和凳子BIS认证的所有内容。掌握ISI标志要求、测试、认证流程、文件、优势和常见问题。";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "通用椅子和凳子BIS认证, IS 17632:2022, ISI标志椅子和凳子, BIS许可证椅子和凳子, 家具BIS认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/yizi-he-dengzi-is-17632";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/yizi-he-dengzi-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stoelen-en-krukken-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-et-tabourets-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/stuhle-und-hocker-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-dan-bangku-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-e-sgabelli-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-y-taburetes-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-lae-mang-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632"
      />
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
                    通用椅子和凳子BIS认证 (IS 17632:2022)
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
          通用椅子和凳子BIS认证 (IS 17632:2022) – ISI标志认证完整指南
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="通用椅子和凳子BIS许可证"
            alt="通用椅子和凳子BIS认证 - IS 17632:2022 ISI标志指南"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          通用椅子和凳子是家庭、办公室、教育机构、医疗机构、零售场所、公共空间和商业环境中最常用的家具产品之一。由于这些座椅产品需要经受日常和长期使用，它们必须满足特定的质量、安全、强度和耐用性要求，以确保可靠的使用性能。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          随着对产品质量和消费者权益保护日益重视，符合印度标准已成为家具制造商和进口商的重要要求。根据IS
          17632:2022标准进行的通用椅子和凳子BIS认证，有助于确保产品在进入印度市场之前满足规定的性能和安全要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          在印度标准局（BIS）框架下获得认证后，制造商可以在合规产品上使用ISI标志。ISI标志表明产品符合公认的印度质量标准，并已通过所需的评估流程。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          随着家具行业持续增长，采购机构越来越倾向于选择认证产品，BIS认证已成为制造商重要的合规和市场准入要求。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          通用椅子和凳子BIS认证要点
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  项目
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  详情
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["产品名称", "通用椅子和凳子"],
                ["适用印度标准", "IS 17632:2022"],
                ["认证类型", "BIS产品认证"],
                ["认证方案", "方案-I（ISI标志认证）"],
                ["适用标志", "ISI标志"],
                ["监管机构", "印度标准局（BIS）"],
                ["适用部委", "商工部"],
                [
                  "合规要求",
                  "根据适用的家具QCO（质量控制令）强制要求",
                ],
                ["产品类别", "家具"],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "认证方案" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        方案-I（ISI标志认证）
                      </a>
                    ) : particular === "合规要求" ? (
                      <>
                        根据适用的{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>家具QCO（质量控制令）</strong>
                        </a>
                        强制要求
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是通用椅子和凳子BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          通用椅子和凳子BIS认证是在BIS产品认证方案下进行的符合性评估流程。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          认证的目的是验证产品是否符合IS
          17632:2022标准规定的要求。获得认证后，制造商被授权在其产品上使用ISI标志。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          认证流程评估产品性能的多个方面，包括：
        </p>

        <ul className={LIST_CLASS}>
          <li>强度</li>
          <li>稳定性</li>
          <li>耐用性</li>
          <li>结构性能</li>
          <li>安全要求</li>
          <li>材料质量</li>
          <li>工艺质量</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          该认证有助于确保印度市场上供应的座椅产品满足既定的质量和安全基准。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17632:2022概述
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022是规定通用椅子和凳子要求的印度标准。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          该标准确立了与安全性、强度、耐用性、稳定性以及用于一般用途的座椅家具整体性能相关的要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准适用于：
        </p>

        <ul className={LIST_CLASS}>
          <li>完全制造的椅子和凳子</li>
          <li>组装的椅子和凳子</li>
          <li>即装即用产品在组装完成后</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          该标准的目的是确保家具产品在其预期使用寿命内提供安全、可靠和耐用的性能。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17632:2022下的关键要求
        </h2>

        <h3 className={SUB_HEADING_CLASS}>强度要求</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          通用椅子和凳子必须具有足够的结构强度，以承受正常使用期间的预期载荷条件。
        </p>

        <h3 className={SUB_HEADING_CLASS}>稳定性要求</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具在预期使用期间应保持稳定，不应存在不必要的倾倒风险。
        </p>

        <h3 className={SUB_HEADING_CLASS}>耐用性要求</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          产品必须能够在反复使用周期中保持其结构完整性和性能。
        </p>

        <h3 className={SUB_HEADING_CLASS}>安全要求</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          该标准包含旨在降低家具使用相关风险的安全要求。
        </p>

        <h3 className={SUB_HEADING_CLASS}>材料质量和工艺</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          材料质量、制造工艺、组装方法、接头和表面处理对符合该标准具有重要作用。
        </p>

        <h3 className={SUB_HEADING_CLASS}>人体工程学考虑</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          该标准纳入了有助于用户舒适度和实际功能的性能相关考虑因素。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17632:2022涵盖的产品
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准通常适用于：
        </p>

        <ul className={LIST_CLASS}>
          <li>通用椅子</li>
          <li>通用凳子</li>
          <li>用于一般用途的固定座椅家具</li>
          <li>组装完成后的即装即用座椅产品</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          制造商应仔细审查标准的适用范围，以确定其产品是否适用。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            另请查看强制性BIS认证涵盖的家具产品——
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>家具BIS认证</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          通用椅子和凳子BIS认证是强制性的吗？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          是的。适用家具质量控制令（QCO）涵盖的家具产品，必须符合相关印度标准并在印度市场制造、进口、销售、分销或供应之前获得BIS认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          适用监管框架涵盖的制造商必须获得BIS许可证，并遵守BIS规定的标识要求。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS认证的测试要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          在授予认证之前，必须在认可的实验室对样品进行测试评估。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          测试通常关注以下参数：
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>结构性能评估——</strong>
            确定椅子或凳子在正常使用条件下是否能够承受载荷而不发生故障。
          </li>
          <li>
            <strong>稳定性测试——</strong>
            评估家具在预期使用期间是否保持稳定并抵抗倾倒。
          </li>
          <li>
            <strong>强度评估——</strong>
            评估框架、接头和支撑结构的承载能力和结构完整性。
          </li>
          <li>
            <strong>耐用性评估——</strong>
            检查产品在使用寿命内经过反复使用周期后性能的保持情况。
          </li>
          <li>
            <strong>安全评估——</strong>
            识别潜在危险并验证是否符合规定的安全要求。
          </li>
          <li>
            <strong>工艺检查——</strong>
            审查构造质量、表面处理、组装完整性及整体制造标准。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          产品标识要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          根据IS 17632:2022认证的产品通常需要标注以下识别信息：
        </p>

        <ul className={LIST_CLASS}>
          <li>制造商名称或商标</li>
          <li>型号或设计标识</li>
          <li>批次或批号</li>
          <li>制造日期</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ISI标志只能在获得有效的BIS许可证后方可使用。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          通用椅子和凳子BIS认证流程
        </h2>

        <h3 className={SUB_HEADING_CLASS}>步骤1：产品范围评估</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          第一步是确定产品是否属于IS 17632:2022标准及适用家具QCO的适用范围。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          在启动认证流程之前，应审查椅子或凳子的类型、预期用途、材料和构造。
        </p>

        <h3 className={SUB_HEADING_CLASS}>步骤2：文件准备</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          制造商准备认证所需的技术和合规文件，包括公司记录、工厂详情、产品规格和质量控制程序。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          完整准确的文件有助于避免BIS审查过程中出现不必要的延误。
        </p>

        <h3 className={SUB_HEADING_CLASS}>步骤3：产品测试</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          代表性样品在BIS认可的实验室进行测试，以验证是否符合IS
          17632:2022的要求。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          实验室测试报告是支持认证申请的关键技术文件。
        </p>

        <h3 className={SUB_HEADING_CLASS}>步骤4：提交BIS申请</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          连同支持性文件、测试报告和制造信息一起提交认证申请。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          BIS在继续推进之前会审查申请的完整性和技术合规性。
        </p>

        <h3 className={SUB_HEADING_CLASS}>步骤5：工厂检查</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS可能会评估制造设施、生产系统和质量控制流程，以验证持续生产合规产品的能力。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          该评估通常涵盖生产基础设施、质量控制体系、原材料控制和产品的可追溯性。
        </p>

        <h3 className={SUB_HEADING_CLASS}>步骤6：技术审查</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          在做出认证决定之前，BIS会对申请、测试报告和检查结果进行审查。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          审查过程中提出的任何意见或缺陷必须由申请人予以解决。
        </p>

        <h3 className={SUB_HEADING_CLASS}>步骤7：授予许可证</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          在确认符合要求后，BIS授予许可证并授权在经认证的通用椅子和凳子上使用ISI标志。
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          制造商必须在整个许可证有效期内继续遵守BIS要求。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS认证的优势
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>符合印度法规——</strong>
            满足适用家具QCO下的强制性质量和安全要求。
          </li>
          <li>
            <strong>合法市场准入——</strong>
            根据适用监管要求在印度供应经认证的椅子和凳子。
          </li>
          <li>
            <strong>提升产品信誉——</strong>
            ISI标志表明符合公认的印度标准。
          </li>
          <li>
            <strong>增强客户信心——</strong>
            消费者和机构买家更倾向于选择经过既定基准评估的产品。
          </li>
          <li>
            <strong>竞争优势——</strong>
            在商业和政府采购流程中获得更高的认可度。
          </li>
          <li>
            <strong>提升品牌声誉——</strong>
            展示对产品质量、安全性和长期可靠性的承诺。
          </li>
          <li>
            <strong>支持中小企业——</strong>
            帮助中小型制造商加强市场存在并建立客户信任。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          认证过程中常见挑战
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>产品测试失败——</strong>
            设计或制造缺陷可能导致实验室评估期间不符合要求。
          </li>
          <li>
            <strong>文件问题——</strong>
            不完整或不一致的记录经常导致认证延误。
          </li>
          <li>
            <strong>制造合规差距——</strong>
            质量控制体系可能需要在授予认证之前进行改进。
          </li>
          <li>
            <strong>监管复杂性——</strong>
            在没有专家指导的情况下，管理测试、检查和认证程序可能具有挑战性。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么选择Sun Certifications India？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications
          India协助制造商、进口商、出口商和企业满足印度的监管合规要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          我们的服务包括：
        </p>

        <ul className={LIST_CLASS}>
          <li>产品适用性评估</li>
          <li>BIS认证咨询</li>
          <li>文件支持</li>
          <li>实验室测试协调</li>
          <li>工厂检查准备</li>
          <li>申请管理</li>
          <li>监管合规协助</li>
          <li>认证后支持</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          我们的目标是帮助客户高效应对认证要求，并以最少的延误实现合规。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据IS
          17632:2022标准进行的通用椅子和凳子BIS认证在确保产品质量、安全性、强度、稳定性和耐用性方面发挥着重要作用。该认证帮助制造商证明其符合印度标准，同时增强客户信心并支持市场准入。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          随着对质量有保障的家具产品需求持续增长，BIS认证和ISI标志为消费者、机构和采购机构提供了有价值的保障。投资于合规的制造商不仅满足监管要求，还提升了竞争力和长期市场声誉。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          如果您计划根据IS
          17632:2022标准获得通用椅子和凳子BIS认证，Sun Certifications
          India可以在整个认证过程中提供专家指导和端到端合规支持。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 – 通用椅子和凳子BIS认证 (IS 17632:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 什么是IS 17632:2022？</strong>
              <br />
              IS 17632:2022是规定通用椅子和凳子要求的印度标准。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. 通用椅子和凳子BIS认证是强制性的吗？
              </strong>
              <br />
              适用家具质量控制令（QCO）涵盖的产品必须符合BIS认证要求。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 什么是ISI标志？</strong>
              <br />
              ISI标志是在BIS产品认证方案下颁发的标准认证标志。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 谁可以申请BIS认证？</strong>
              <br />
              印度制造商和外国制造商均可申请认证。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. BIS认证是否需要产品测试？</strong>
              <br />
              是的。产品测试是认证流程的重要组成部分。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. 即装即用椅子是否涵盖在IS 17632:2022范围内？
              </strong>
              <br />
              是的。该标准适用于组装完成后的即装即用产品。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. 哪些产品被排除在IS 17632:2022范围之外？
              </strong>
              <br />
              躺椅、摇椅、倾斜椅、长椅以及某些专用座椅产品通常被排除在外。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 获得BIS认证有哪些优势？</strong>
              <br />
              优势包括监管合规、提升产品信誉、增强客户信心以及更好的市场认可度。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 外国制造商可以获得BIS认证吗？</strong>
              <br />
              可以。外国制造商可以通过适用于海外制造商的BIS认证途径申请。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications India如何提供帮助？</strong>
              <br />
              Sun Certifications
              India提供BIS认证的端到端支持，包括文件准备、测试协调、申请管理和合规协助。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="椅子和凳子BIS证书 - IS 17632:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          相关资源
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              ISI认证
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              外国制造商BIS认证
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadChinese />

        <FaqAuthorChinese questionNumber={1} />
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
                alt="BIS标志"
                title="BIS标志"
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
                alt="CDSCO标志"
                title="CDSCO标志"
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
                alt="BISCRS标志"
                title="BISCRS标志"
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
                alt="塑料废物管理"
                title="塑料废物管理"
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
                alt="EPR证书标志"
                title="EPR证书标志"
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
                alt="LMPC标志"
                title="LMPC标志"
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
                alt="BIS标志"
                title="BIS标志"
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
                alt="ISI标志"
                title="ISI标志"
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
