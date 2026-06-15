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

const BISCertificateForTablesAndDesksUnitChinese = () => {
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

export default BISCertificateForTablesAndDesksUnitChinese;

const MetaTags = () => {
  const title =
    "桌子和办公桌BIS证书 | IS 17633:2022 BIS许可证";
  const ogTitle = "桌子和办公桌BIS认证 – IS 17633:2022指南";
  const twitterTitle = "桌子和办公桌BIS许可证 | IS 17633:2022";
  const metaDescription =
    "获取IS 17633:2022标准下的桌子和办公桌BIS证书。了解印度BIS认证的流程、文件、测试、成本和时间表。";
  const ogDescription =
    "根据IS 17633:2022标准，桌子和办公桌BIS认证完整指南。了解流程、成本、文件、测试和BIS许可证优势。";
  const twitterDescription =
    "申请IS 17633:2022标准下的桌子和办公桌BIS证书。了解印度的BIS流程、文件、测试、费用和时间表。";
  const metaKeywords =
    "桌子和办公桌BIS证书, 桌子和办公桌BIS许可证, IS 17633:2022, 桌子和办公桌BIS认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/zhuozi-he-bangongzhuo-is-17633";
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
                    桌子和办公桌BIS证书 – IS 17633:2022
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
          桌子和办公桌BIS认证（IS 17633:2022）——ISI标志认证完整指南
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="桌子和办公桌BIS许可证"
            alt="桌子和办公桌BIS认证 - IS 17633:2022 ISI标志指南"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          桌子和办公桌是办公室、教育机构、商业场所、政府组织和住宅空间中使用最广泛的家具产品之一。由于这些产品需要在确保用户安全、稳定性和耐久性的同时承受日常使用，因此对制造商和进口商而言，符合公认的质量标准变得越来越重要。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          在印度，IS 17633:2022标准涵盖的桌子和办公桌必须符合印度标准局（BIS）规定的适用质量和安全要求。成功满足这些要求的制造商可以获得BIS许可证，并在其产品上使用ISI标志，以证明符合相关的印度标准。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          认证流程评估产品性能的各个方面，包括强度、稳定性、耐久性、工艺、尺寸和整体安全性。合规不仅有助于企业满足监管要求，还能提高产品的可信度和市场接受度。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本综合指南解释了制造商、进口商、家具品牌和采购专业人士需要了解的有关IS 17633:2022标准下桌子和办公桌BIS认证的所有信息，包括适用性、认证要求、测试参数、文件、益处和认证流程。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          桌子和办公桌BIS认证的关键要点
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
                ["产品", "桌子和办公桌"],
                ["适用标准", "IS 17633:2022"],
                ["认证类型", "BIS产品认证"],
                ["适用标志", "ISI标志"],
                ["认证计划", "计划-I（ISI标志认证）"],
                ["监管机构", "印度标准局（BIS）"],
                ["适用行业", "家具"],
                [
                  "合格申请人",
                  "印度制造商和外国制造商",
                ],
                [
                  "合规要求",
                  "根据适用的家具QCO（质量控制令）强制执行",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "认证计划" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        计划-I（ISI标志认证）
                      </a>
                    ) : particular === "合规要求" ? (
                      <>
                        根据适用的{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
                          className="text-blue-600 hover:underline"
                        >
                         <strong>家具QCO（质量控制令）</strong>
                        </a>
                        {" "}强制执行
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
          什么是桌子和办公桌BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          桌子和办公桌BIS认证是在印度标准局（BIS）产品认证计划下进行的符合性评估流程。该认证确认产品符合IS 17633:2022标准规定的要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          认证成功后，制造商被允许在其产品上使用ISI标志，表明符合适用的印度标准。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该认证旨在确保在印度市场供应的桌子和办公桌满足与以下方面相关的既定要求：
        </p>

        <ul className={LIST_CLASS}>
          <li>正常使用过程中的结构强度和稳定性</li>
          <li>耐久性、用户安全和材料工艺</li>
          <li>IS 17633:2022标准下的全部性能要求</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          对于买家和采购机构而言，ISI标志保证家具已根据公认的质量和安全基准进行了评估。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          桌子和办公桌IS 17633:2022概述
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022是印度标准，规定了供成人在坐姿和站姿应用中使用的桌子和办公桌的性能和安全要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准涵盖以下两种类型：
        </p>

        <ul className={LIST_CLASS}>
          <li>完全制造（成品）的桌子和办公桌</li>
          <li>即装即用（RTA）单元——在完全组装后进行测试</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          该标准的目标是确立最低性能和安全要求，以帮助确保家具在其预期使用寿命内保持稳定、耐用和安全。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          IS 17633:2022涵盖的关键领域
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准着重于几个重要的性能特征，包括：
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>强度要求——</strong>桌子和办公桌必须能够承受正常使用过程中的预期载荷，而不会发生故障或过度变形。
          </li>
          <li>
            <strong>稳定性要求——</strong>家具在使用时必须保持稳定，并在可预见的载荷条件下抵抗翻倒。
          </li>
          <li>
            <strong>耐久性要求——</strong>产品在长时间反复使用后必须保持性能和结构完整性。
          </li>
          <li>
            <strong>安全要求——</strong>设计和构造必须将因不稳定、锋利边缘、不安全构造或结构故障带来的风险降至最低。
          </li>
          <li>
            <strong>工艺与构造质量——</strong>对工艺、组装、接头、紧固件和整体构造进行评估，以确保可靠的长期性能。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          桌子和办公桌BIS认证在印度是强制性的吗？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          是的。适用的家具质量控制令（QCO）涵盖的桌子和办公桌必须符合相关的印度标准，并在印度市场制造、进口、销售、分销或提供之前获得BIS认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          强制认证的目标是：
        </p>

        <ul className={LIST_CLASS}>
          <li>确保整个家具行业的产品质量更高</li>
          <li>通过经过验证的标准保护消费者安全</li>
          <li>防止不合标准的家具进入市场</li>
          <li>促进标准化和统一的质量基准</li>
          <li>建立买家对ISI标志认证产品的信心</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          适用法规涵盖的制造商必须获得BIS许可证，并按照BIS要求使用ISI标志。
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            另请查看强制性BIS认证涵盖的家具产品——
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            <strong>家具BIS认证</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022涵盖的产品范围
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022的范围扩展到为住宅、商业、机构和工作场所环境中的成人用户设计的各类桌子和办公桌。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          通常涵盖的产品示例包括：
        </p>

        <ul className={LIST_CLASS}>
          <li>办公桌、学习桌和电脑桌</li>
          <li>工作站和多用途办公桌</li>
          <li>会议桌和会客桌</li>
          <li>机构和实验室桌</li>
          <li>联合办公和商用家具</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          制造商应仔细审查产品规格和预期用途，以确定其产品是否属于IS 17633:2022的范围。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022下的关键技术要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          要获得BIS认证，桌子和办公桌必须满足该标准规定的各种性能和安全要求。
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>结构完整性——</strong>产品必须在规定载荷下正常工作；接头和支撑结构在测试期间保持牢固。
          </li>
          <li>
            <strong>承载性能——</strong>桌子和办公桌必须支撑规定的载荷，而不会出现不可接受的变形、损坏或故障。
          </li>
          <li>
            <strong>稳定性性能——</strong>家具在使用时必须保持稳定，并降低可能造成人身伤害或财产损失的翻倒风险。
          </li>
          <li>
            <strong>耐久性性能——</strong>产品必须承受反复使用周期，同时保持可接受的性能。
          </li>
          <li>
            <strong>材料与工艺——</strong>材料、表面处理和组装方法必须满足质量控制，以实现一致的生产。
          </li>
          <li>
            <strong>安全考虑——</strong>设计必须将家具使用过程中对消费者和机构买家的危害降至最低。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么BIS认证对家具制造商很重要
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          印度家具市场越来越注重质量。政府部门、教育机构、企业买家和大型采购机构通常更青睐符合公认标准的产品。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          获得BIS认证有助于制造商：
        </p>

        <ul className={LIST_CLASS}>
          <li>证明符合适用的印度标准</li>
          <li>提升产品可信度和品牌声誉</li>
          <li>赢得客户和机构买家的信任</li>
          <li>提高在政府和企业采购中的接受度</li>
          <li>加强内部质量管理实践</li>
          <li>领先于不断变化的监管要求</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          对于寻求长期增长的制造商而言，BIS认证通常被视为合规要求和战略业务优势。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022下桌子和办公桌的测试要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          在制造商获得BIS认证之前，产品样品必须在BIS认可的实验室通过测试，根据IS 17633:2022的适用要求进行评估。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          测试的目标是验证家具是否满足安全、稳定性、强度、耐久性和整体性能的规定标准。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          虽然具体的测试参数可能因产品设计和认证要求而异，但制造商通常会针对以下特征进行评估：
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>设计与工艺——</strong>检查构造质量、组装、表面处理和整体产品完整性，以确保安全的长期使用。
          </li>
          <li>
            <strong>尺寸验证——</strong>根据标准和批准的产品规格检查关键尺寸。
          </li>
          <li>
            <strong>稳定性测试——</strong>确认产品在正常使用中保持稳定，并标记翻倒或结构薄弱问题。
          </li>
          <li>
            <strong>静载荷测试——</strong>验证承载能力，无故障、过度变形或损坏。
          </li>
          <li>
            <strong>强度测试——</strong>评估在常规使用中操作应力下的框架、接头和支撑。
          </li>
          <li>
            <strong>耐久性评估——</strong>检查反复使用周期后的性能保持情况。
          </li>
          <li>
            <strong>安全评估——</strong>排除因不稳定、缺陷或不安全设计特征带来的可避免风险。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          桌子和办公桌BIS认证流程
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据IS 17633:2022寻求BIS认证的制造商必须遵循印度标准局制定的结构化认证流程。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          尽管具体要求可能因申请人类型和制造地点而异，但总体流程基本相似。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          步骤1：产品范围评估
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          第一步是确定产品是否属于IS 17633:2022和适用质量控制令的范围。在启动认证流程之前，通常会对产品规格、预期用途、材料和构造进行技术审查。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          步骤2：文件准备
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          制造商准备所需的文件，包括公司信息、制造细节、产品规格、质量控制程序和支持性技术记录。妥善的文件至关重要，因为此阶段的缺陷可能会延误认证。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          步骤3：产品测试
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          产品样品在BIS认可的实验室进行测试，以验证是否符合IS 17633:2022的要求。测试报告是支持认证申请的主要技术文件之一。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          步骤4：申请提交
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS申请连同支持文件、测试报告、制造信息和质量管理记录一并提交。BIS会审查申请的完整性和技术合规性。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          步骤5：工厂评估
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS可能会进行工厂检查以评估：
        </p>
        <ul className={LIST_CLASS}>
          <li>制造基础设施和生产能力</li>
          <li>质量控制系统和内部测试设施</li>
          <li>原材料控制和产品可追溯性机制</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          目标是验证制造商持续生产合规产品的能力。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          步骤6：评估与审查
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS在做出认证决定之前会审查申请、检查结果和实验室测试报告。审查过程中提出的任何意见都必须由申请人处理。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          步骤7：授予BIS许可证
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          在成功完成所有要求后，BIS授予许可证，并授权制造商在经过认证的桌子和办公桌上使用ISI标志。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          印度制造商的BIS认证
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          印度制造商通常根据BIS规定的国内认证程序申请。该流程通常包括：
        </p>

        <ul className={LIST_CLASS}>
          <li>在BIS认可的实验室进行产品测试</li>
          <li>连同支持文件提交申请</li>
          <li>BIS进行工厂检查和技术审查</li>
          <li>授予BIS许可证和ISI标志授权</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          一旦获得认证，制造商必须在许可证有效期内继续遵守BIS要求并保持一致的产品质量。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          外国制造商的BIS认证
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          打算向印度出口桌子和办公桌的外国制造商在供应适用质量控制令涵盖的产品之前，也必须获得BIS认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          认证流程通常包括：
        </p>

        <ul className={LIST_CLASS}>
          <li>任命授权印度代表（AIR）</li>
          <li>在海外进行产品测试和工厂评估</li>
          <li>文件审查和BIS认证批准</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          外国制造商必须确保持续遵守BIS要求，以保持认证的有效性。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          桌子和办公桌BIS认证所需文件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          文件要求可能因制造商和认证途径而异。但是，认证过程中通常需要以下文件。
        </p>

        <h3 className={SUB_HEADING_CLASS}>商业和法律文件</h3>
        <ul className={LIST_CLASS}>
          <li>公司注册、制造许可证和GST（如适用）</li>
          <li>授权签署人详细信息和身份证明</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>制造信息</h3>
        <ul className={LIST_CLASS}>
          <li>工艺流程图、工厂布局和机械详情</li>
          <li>生产基础设施和产能记录</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>产品信息</h3>
        <ul className={LIST_CLASS}>
          <li>产品规格、技术图纸和目录</li>
          <li>材料清单和材料/组件详情</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>质量控制文件</h3>
        <ul className={LIST_CLASS}>
          <li>内部测试、检查和质量控制程序</li>
          <li>质量控制记录和设备校准报告</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>认证文件</h3>
        <ul className={LIST_CLASS}>
          <li>实验室测试报告和填写完整的BIS申请表</li>
          <li>声明、承诺书和其他BIS规定的文件</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          制造商应确保所有文件在提交前准确、完整且一致。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS认证过程中的常见挑战
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          尽管认证流程在妥善管理时是简单明了的，但制造商常常会遇到一些挑战。
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>技术解释——</strong>在没有专家指导的情况下，将IS 17633:2022要求映射到特定产品设计可能很困难。
          </li>
          <li>
            <strong>测试失败——</strong>接头薄弱、稳定性差或材料问题常常导致实验室测试被拒。
          </li>
          <li>
            <strong>文件缺口——</strong>不完整或不匹配的记录是申请延误的常见原因。
          </li>
          <li>
            <strong>工厂合规——</strong>质量控制系统、可追溯性或生产控制可能需要在许可证授予前进行升级。
          </li>
          <li>
            <strong>监管协调——</strong>在没有结构化支持的情况下，协调实验室测试、检查和BIS跟进需要时间。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          专业BIS认证协助的益处
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          与经验丰富的BIS顾问合作可以帮助制造商避免代价高昂的延误，并简化认证过程。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          专业支持通常包括：
        </p>

        <ul className={LIST_CLASS}>
          <li>产品范围审查和标准解释</li>
          <li>文件准备和申请提交</li>
          <li>实验室测试和工厂检查协调</li>
          <li>持续合规和认证后支持</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          这使制造商能够专注于生产，同时确保高效地满足监管要求。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么选择Sun Certifications India？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India是一家监管合规咨询公司，协助制造商、进口商、出口商和企业满足印度各地的认证和审批要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          我们的专家为IS 17633:2022标准下的桌子和办公桌BIS认证提供端到端支持。
        </p>

        <h3 className={SUB_HEADING_CLASS}>我们的服务包括</h3>

        <ul className={LIST_CLASS}>
          <li>产品适用性评估和BIS合规咨询</li>
          <li>文件支持和申请管理</li>
          <li>测试协调和工厂检查协助</li>
          <li>监管沟通和认证后合规支持</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          我们的目标是帮助企业高效地完成认证流程，同时最大限度地减少延误和合规挑战。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据IS 17633:2022，桌子和办公桌BIS认证是制造商寻求在印度市场供应合规家具产品的重要要求。该认证有助于确保桌子和办公桌符合与安全、稳定性、耐久性、强度和质量相关的既定标准。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          通过获得BIS认证并使用ISI标志，制造商可以证明符合印度标准，提高客户信心，巩固市场地位，并支持长期业务增长。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          如果您计划获得IS 17633:2022标准下的桌子和办公桌BIS认证，Sun Certifications India可以为您提供端到端的合规支持，帮助您高效、自信地完成认证流程。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 – 桌子和办公桌BIS认证（IS 17633:2022）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 什么是IS 17633:2022？</strong>
              <br />
              IS 17633:2022是由印度标准局（BIS）发布的印度标准，为供成人在坐姿和站姿应用中使用的桌子和办公桌制定了最低性能、稳定性、耐久性和安全要求。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 桌子和办公桌的BIS认证是强制性的吗？</strong>
              <br />
              是的——对于适用的家具质量控制令（QCO）涵盖的产品。制造商和进口商在印度制造、进口、销售或分销此类家具之前，必须持有有效的BIS许可证并符合IS 17633:2022。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 桌子和办公桌适用哪种认证标志？</strong>
              <br />
              经过认证的桌子和办公桌被授权在BIS产品认证计划下使用ISI标志，表明产品符合适用的印度标准。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 谁可以申请BIS认证？</strong>
              <br />
              印度制造商和外国制造商均可申请，前提是其桌子和办公桌属于适用QCO的范围并满足IS 17633:2022的要求。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. BIS认证的目的是什么？</strong>
              <br />
              BIS认证确认家具符合国家认可的安全、结构性能、耐久性和工艺基准——有助于保护最终用户并维护整个市场的质量标准。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. IS 17633:2022涵盖哪些产品？</strong>
              <br />
              该标准涵盖用于办公室、教育机构、商业场所和工作场所环境的成人用桌子和办公桌——包括办公桌、工作站、学习桌、会议桌和类似家具类别。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 实验室测试是强制性的吗？</strong>
              <br />
              是的。产品样品必须在BIS认可的实验室进行测试，所产生的测试报告是认证申请中证明符合IS 17633:2022的关键文件。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 进口的桌子和办公桌可以在没有BIS认证的情况下销售吗？</strong>
              <br />
              不可以。属于强制认证范围的进口产品在未获得有效BIS批准的情况下不能在印度合法供应。进口商必须在将产品投放市场之前确保符合适用标准。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 工厂检查的作用是什么？</strong>
              <br />
              BIS进行工厂评估，以验证制造商是否维护了足够的生产基础设施、质量控制系统和产品可追溯性，以持续制造合规的桌子和办公桌。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications India如何提供帮助？</strong>
              <br />
              Sun Certifications India提供端到端的协助——包括产品范围评估、文件准备、实验室测试协调、BIS申请管理、工厂检查准备，以及IS 17633:2022标准下桌子和办公桌的认证后合规支持。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="桌子和办公桌BIS认证 - IS 17633:2022 PDF"
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
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ISI标志许可证</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS FMCS证书</a>
          </li>
        </ul>

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
