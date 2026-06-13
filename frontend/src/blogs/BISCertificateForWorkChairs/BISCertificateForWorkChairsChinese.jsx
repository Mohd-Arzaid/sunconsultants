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

const BISCertificateForWorkChairsChinese = () => {
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

export default BISCertificateForWorkChairsChinese;

const MetaTags = () => {
  const title = "工作椅BIS证书 | IS 17631:2022 BIS许可证";
  const ogTitle = "工作椅BIS认证 – IS 17631:2022指南";
  const twitterTitle = "工作椅BIS许可证 | IS 17631:2022";
  const metaDescription =
    "获取IS 17631:2022标准下的工作椅BIS证书。了解印度BIS认证的流程、文件、测试、成本和时间表。";
  const ogDescription =
    "根据IS 17631:2022标准，工作椅BIS认证完整指南。了解流程、成本、文件、测试和BIS许可证优势。";
  const twitterDescription =
    "申请IS 17631:2022标准下的工作椅BIS证书。了解印度的BIS流程、文件、测试、费用和时间表。";
  const metaKeywords =
    "工作椅BIS证书, 工作椅BIS许可证, IS 17631:2022, 工作椅BIS认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631";
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
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
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
                    工作椅BIS认证（IS 17631:2022）
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
          工作椅BIS认证（IS 17631:2022）– ISI标志认证完整指南
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="工作椅BIS许可证"
            alt="工作椅BIS认证 - IS 17631:2022 ISI标志指南"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          工作椅已成为现代工作场所、教育机构、政府办公室、联合办公空间和家庭办公环境的重要组成部分。随着各组织越来越重视员工舒适度、生产力、工作场所人体工程学和职业健康，对高质量工作椅的需求持续增长。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          设计不良的椅子会对姿势、舒适度和生产力产生负面影响。因此，质量、安全、耐用性和人体工程学性能是制造商、采购方和采购机构的关键考量因素。为确保行业统一的质量标准，印度标准局（BIS）已制定适用于工作椅的印度标准IS
          17631:2022。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          适用监管框架涵盖的制造商必须获得BIS认证，并在合规产品上使用ISI标志。BIS认证表明工作椅已按照与安全、强度、稳定性、耐用性和人体工程学性能相关的要求进行了评估。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本综合指南详细说明了制造商、进口商、家具品牌、采购专业人士和企业主在IS
          17631:2022标准下需要了解的工作椅BIS认证的全部内容。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅BIS认证快速概览
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
                ["产品", "工作椅"],
                ["适用印度标准", "IS 17631:2022"],
                ["认证类型", "BIS产品认证"],
                ["适用认证计划", "计划-I（ISI标志认证）"],
                ["适用标志", "ISI标志"],
                ["监管机构", "印度标准局（BIS）"],
                ["适用部门", "商务和工业部"],
                [
                  "合规要求",
                  "根据适用的家具QCO（质量控制令）为强制性要求",
                ],
                ["合格申请人", "印度制造商和外国制造商"],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "适用认证计划" ? (
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
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>家具QCO（质量控制令）</strong>
                        </a>
                        为强制性要求
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
          什么是工作椅BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          工作椅BIS认证是在印度标准局产品认证计划下进行的符合性评估流程。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          认证的目的是验证工作椅是否符合IS
          17631:2022规定的各项要求。成功获得认证后，制造商可以在其产品上使用ISI标志。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          认证流程评估工作椅的多种性能和安全方面，包括：
        </p>

        <ul className={LIST_CLASS}>
          <li>人体工程学设计</li>
          <li>结构完整性</li>
          <li>稳定性</li>
          <li>耐用性</li>
          <li>安全要求</li>
          <li>工艺质量</li>
          <li>产品性能</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ISI标志向消费者保证，产品已按照公认的印度标准进行评估，并满足规定的质量要求。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅BIS认证为何重要
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          工作椅在办公室、教育机构、商业场所和家庭工作空间中长时间使用。由于用户每天有相当比例的时间处于坐姿状态，这些椅子的质量和人体工程学性能直接影响舒适度和工作效率。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS认证有助于确保经过认证的工作椅：
        </p>

        <ul className={LIST_CLASS}>
          <li>满足规定的安全要求</li>
          <li>提供可靠的性能</li>
          <li>具备足够的结构强度</li>
          <li>在使用过程中保持稳定</li>
          <li>支持长期耐用性</li>
          <li>符合印度质量标准</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          对制造商而言，认证有助于展示产品质量，同时支持监管合规和市场认可。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17631:2022概述
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022是规定工作椅要求的印度标准。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准建立了与以下方面相关的要求：
        </p>

        <ul className={LIST_CLASS}>
          <li>安全</li>
          <li>强度</li>
          <li>稳定性</li>
          <li>耐用性</li>
          <li>人体工程学考量</li>
          <li>功能性能</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          其目标是确保工作椅在工作场所环境中长时间使用时能够提供安全可靠的性能。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1">
          IS 17631:2022的适用范围
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          根据该标准，IS 17631:2022涵盖工作椅，适用于：
        </p>

        <ul className={LIST_CLASS}>
          <li>完全制造的工作椅</li>
          <li>组装制造的工作椅</li>
          <li>即装即用工作椅（组装后）</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          该标准的要求适用于供实际使用的组装成品。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17631:2022涵盖的工作椅类型
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据产品设计和预期用途，该标准可能适用于各类工作场所座椅家具，包括：
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>办公工作椅 —</strong>{" "}
            用于企业办公室、行政部门和专业工作场所的座椅。
          </li>
          <li>
            <strong>任务椅 —</strong>{" "}
            专为日常办公桌工作、工作站和常规坐姿任务而设计的椅子。
          </li>
          <li>
            <strong>可调节工作椅 —</strong>{" "}
            具有高度、倾斜或其他可调节功能以提高舒适度和人体工程学性能的型号。
          </li>
          <li>
            <strong>机构工作椅 —</strong>{" "}
            供应给学校、大学、政府办公室和商业机构的椅子。
          </li>
          <li>
            <strong>家庭办公椅 —</strong>{" "}
            为远程工作、自由职业者和家庭办公环境设计的工作椅。
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          请仔细审查产品设计、机制和使用目的，以确认您的椅子是否属于IS
          17631:2022的适用范围。
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            另请查看强制BIS认证涵盖的家具产品 —
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
          IS 17631:2022的主要要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          该标准关注多项重要的性能特征，这些特征对工作椅的质量和安全性至关重要。
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>人体工程学设计 —</strong>{" "}
            关注用户舒适度、座椅和靠背支撑、可调节性以及正确姿势，以减少疲劳并提高工作场所生产力。
          </li>
          <li>
            <strong>强度要求 —</strong>{" "}
            框架、连接件和支撑结构必须能够承受正常使用而不发生故障或结构完整性丧失。
          </li>
          <li>
            <strong>稳定性要求 —</strong>{" "}
            椅子必须抵抗倾倒，在常规坐姿使用和移动过程中保持稳定。
          </li>
          <li>
            <strong>耐用性要求 —</strong>{" "}
            产品在预期使用寿命内经过长期和重复的日常使用后仍须保持一致的性能。
          </li>
          <li>
            <strong>安全要求 —</strong>{" "}
            设计和构造必须最大限度地减少因不稳定、缺陷或不安全结构而带来的可避免的隐患。
          </li>
          <li>
            <strong>材料质量 —</strong>{" "}
            零部件和表面处理必须符合支持安全、耐用和可靠性能的质量标准。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅BIS认证的测试要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          在授予认证之前，产品样品须在认可实验室进行测试评估。测试有助于验证是否符合IS
          17631:2022规定的各项要求。
        </p>

        <h3 className={SUB_HEADING_CLASS}>进行的主要测试</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  条款
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  要求
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["4", "设计和工艺"],
                ["7.3.1", "前缘翻倒"],
                ["7.3.2", "向前翻倒"],
                ["7.3.3", "带脚凳椅子的向前翻倒"],
                ["7.3.4", "无扶手椅子的侧向翻倒"],
                ["7.3.5", "带扶手椅子的侧向翻倒"],
                ["7.3.6", "无靠背椅子的向后翻倒"],
                ["7.4.1", "座椅前缘静态载荷测试"],
                ["7.4.2", "座椅和靠背组合静态载荷测试"],
                ["7.4.3", "扶手向下静态载荷测试 — 中央"],
                ["7.4.4", "扶手向下静态载荷测试 — 前部"],
                ["7.4.5", "扶手侧向静态载荷测试"],
                ["7.4.6", "脚凳静态载荷测试"],
              ].map(([clause, requirement], index) => (
                <TableRow
                  key={clause}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {clause}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {requirement}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅BIS认证流程
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          寻求在IS
          17631:2022标准下获得BIS认证的制造商必须完成结构化的认证流程。
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>步骤1：产品适用性评估 —</strong>{" "}
            在开始认证之前，确认工作椅是否属于IS
            17631:2022及适用的家具QCO范围。
          </li>
          <li>
            <strong>步骤2：文件准备 —</strong>{" "}
            整理BIS审查所需的技术、制造、质量控制和法律记录。
          </li>
          <li>
            <strong>步骤3：产品测试 —</strong>{" "}
            将样品提交至BIS认可实验室，按照IS 17631:2022进行评估。
          </li>
          <li>
            <strong>步骤4：申请提交 —</strong>{" "}
            提交BIS申请，附测试报告、工厂详情和支持性合规文件。
          </li>
          <li>
            <strong>步骤5：工厂检查 —</strong>{" "}
            BIS评估制造设施的生产系统、质量控制程序和可追溯性。
          </li>
          <li>
            <strong>步骤6：技术审查 —</strong>{" "}
            BIS在最终批准前评估申请、实验室结果和检查结果。
          </li>
          <li>
            <strong>步骤7：授予BIS许可证 —</strong>{" "}
            成功合规后，BIS颁发许可证并授权在认证工作椅上使用ISI标志。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          印度制造商的BIS认证
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          印度制造商通常通过国内认证途径申请。流程一般包括：
        </p>

        <ul className={LIST_CLASS}>
          <li>在BIS认可实验室进行产品测试</li>
          <li>文件审查和BIS申请提交</li>
          <li>BIS进行工厂评估和技术审查</li>
          <li>授予BIS许可证和ISI标志授权</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          获得认证后，制造商必须持续遵守BIS监督、标志使用和质量要求。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          外国制造商的BIS认证
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          计划向印度出口工作椅的外国制造商，在供应属于强制认证要求范围的产品之前，也必须获得BIS认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          流程一般包括：
        </p>

        <ul className={LIST_CLASS}>
          <li>指定授权印度代表（AIR）</li>
          <li>海外产品测试和工厂评估</li>
          <li>BIS申请审查和认证批准</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          这确保进口产品满足与国内制造商相同的质量和安全要求。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅BIS认证所需文件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          文件是工作椅BIS认证流程的关键组成部分。要求可能因申请人是印度制造商、外国制造商还是进口商，以及所遵循的认证计划而有所不同。不完整或不一致的记录是申请延迟的最常见原因之一。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          在IS
          17631:2022标准下的工作椅BIS认证过程中，通常需要以下文件：
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>商业文件 —</strong>{" "}
            公司注册证书、制造许可证（如适用）、GST注册、营业地址证明，以及授权签字人的身份和地址证明。
          </li>
          <li>
            <strong>制造文件 —</strong>{" "}
            工厂布局图、制造工艺流程图、生产机械和测试设备清单，以及生产基础设施和安装产能详情。
          </li>
          <li>
            <strong>产品文件 —</strong>{" "}
            产品规格、工程或技术图纸、产品目录或型号清单、物料清单（BOM），以及工作椅所用原材料、零部件和关键部件的详情。
          </li>
          <li>
            <strong>质量控制文件 —</strong>{" "}
            书面质量控制程序、来料检验记录、过程检验和成品检验报告、内部测试方法，以及测量和测试设备的校准证书。
          </li>
          <li>
            <strong>认证文件 —</strong>{" "}
            BIS认可实验室的测试报告、完整填写的BIS申请表、声明和承诺书、标签或标志样本，以及BIS针对特定认证途径规定的任何其他文件。
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          所有文件应准确、完整，并与BIS申请中提交的产品详情一致。建议制造商在提交前仔细审查文件要求，以避免认证处理过程中出现不必要的延迟。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          工作椅BIS认证的优势
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>监管合规 —</strong>{" "}
            满足强制性的印度标准和QCO要求，合法制造和销售。
          </li>
          <li>
            <strong>合法市场准入 —</strong>{" "}
            在涵盖的产品类别中，可在印度供应认证工作椅而无监管风险。
          </li>
          <li>
            <strong>提升信誉 —</strong>{" "}
            ISI标志表明质量、安全性和符合IS 17631:2022标准。
          </li>
          <li>
            <strong>客户信心 —</strong>{" "}
            企业采购方、机构和终端用户信任经过国家标准测试的产品。
          </li>
          <li>
            <strong>更好的采购机会 —</strong>{" "}
            提高在政府、机构和大批量商业招标中的资格。
          </li>
          <li>
            <strong>更强的品牌声誉 —</strong>{" "}
            展示对质量、人体工程学和长期产品可靠性的承诺。
          </li>
          <li>
            <strong>改善质量控制 —</strong>{" "}
            促进结构化QC系统、可追溯性和一致的生产标准。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS认证过程中常见的挑战
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>技术解读 —</strong>{" "}
            将IS
            17631:2022条款对应到特定椅子设计、机制和变体可能较为复杂。
          </li>
          <li>
            <strong>测试失败 —</strong>{" "}
            框架薄弱、稳定性差或机制问题常导致翻倒或载荷测试不合格。
          </li>
          <li>
            <strong>文件缺失 —</strong>{" "}
            图纸不匹配、QC记录不完整或缺少声明通常会延迟批准。
          </li>
          <li>
            <strong>工厂合规 —</strong>{" "}
            生产控制、可追溯性和内部测试可能需要在颁发许可证前进行升级。
          </li>
          <li>
            <strong>监管协调 —</strong>{" "}
            在没有专家支持的情况下，协调实验室测试、BIS检查和后续问询需要时间。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为何选择Sun Certifications India？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications
          India是一家监管合规咨询公司，协助制造商、进口商、出口商和企业获得进入印度市场所需的各种认证和批准。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          我们的团队在IS
          17631:2022标准下为工作椅BIS认证提供端到端协助。
        </p>

        <h3 className={SUB_HEADING_CLASS}>我们的服务包括</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>产品适用性评估 —</strong>{" "}
            我们确认您的工作椅是否属于IS 17631:2022及适用QCO范围。
          </li>
          <li>
            <strong>BIS合规咨询 —</strong>{" "}
            就认证途径、义务和标准要求提供专业指导。
          </li>
          <li>
            <strong>文件协助 —</strong>{" "}
            准备、审查和组织所有BIS申请和工厂记录。
          </li>
          <li>
            <strong>测试协调 —</strong>{" "}
            在认可实验室提供样品提交和测试的端到端支持。
          </li>
          <li>
            <strong>工厂检查支持 —</strong>{" "}
            为BIS工厂评估和合规审查提供准备检查。
          </li>
          <li>
            <strong>申请管理 —</strong>{" "}
            代表您处理BIS申请提交、跟进和监管沟通。
          </li>
          <li>
            <strong>认证后支持 —</strong>{" "}
            在监督、标志规则或许可证维护要求方面提供持续协助。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17631:2022标准下的工作椅BIS认证在确保工作场所座椅产品的质量、安全、耐用性、稳定性和人体工程学性能方面发挥着重要作用。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          通过获得BIS认证并使用ISI标志，制造商可以展示对印度标准的合规性，增强客户信心，提升产品信誉，并支持长期业务增长。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          无论您是印度制造商还是寻求进入印度市场的海外制造商，了解IS
          17631:2022的要求都是实现监管合规和市场成功的关键步骤。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          如果您计划在IS
          17631:2022标准下获得工作椅BIS认证，Sun Certifications
          India可以通过专业的监管指导和端到端合规支持帮助简化流程。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 – 工作椅BIS认证（IS 17631:2022）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 什么是工作椅BIS认证？</strong>
              <br />
              BIS认证确认工作椅符合IS
              17631:2022的要求及适用的认证规定。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 什么是IS 17631:2022？</strong>
              <br />
              IS
              17631:2022是规定工作椅要求的印度标准，包括安全、强度、稳定性、耐用性和人体工程学考量。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 工作椅BIS认证是强制性的吗？</strong>
              <br />
              适用监管框架涵盖的工作椅必须遵守BIS认证要求。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 什么是ISI标志？</strong>
              <br />
              ISI标志是在BIS产品认证计划下颁发的标准认证标志。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 谁可以申请BIS认证？</strong>
              <br />
              印度制造商和外国制造商均可申请。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. BIS认证需要产品测试吗？</strong>
              <br />
              是的。产品测试是认证流程的重要组成部分。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 进口工作椅需要BIS认证吗？</strong>
              <br />
              属于强制认证要求范围的产品在印度供应前必须遵守适用的BIS法规。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. IS 17631:2022下进行哪些测试？</strong>
              <br />
              该标准包括设计和工艺评估、尺寸验证、稳定性测试和静态载荷测试等评估项目。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 人体工程学设计对工作椅为何重要？</strong>
              <br />
              人体工程学设计有助于提高用户舒适度、支持正确姿势，并改善工作场所体验。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications India如何提供帮助？</strong>
              <br />
              Sun Certifications
              India提供适用性评估、文件准备、测试协调、检查准备、申请管理和合规支持方面的协助。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="工作椅BIS证书 - IS 17631:2022 PDF"
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
              ISI证书
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              外国制造商BIS证书
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadChinese />

        <FaqAuthorChinese questionNumber={4} />
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
