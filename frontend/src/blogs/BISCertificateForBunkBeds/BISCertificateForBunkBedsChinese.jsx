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

const BISCertificateForBunkBedsChinese = () => {
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

export default BISCertificateForBunkBedsChinese;

const MetaTags = () => {
  const title = "双层床BIS证书 | IS 17636:2022 BIS许可证";
  const ogTitle = "双层床BIS认证 – IS 17636:2022指南";
  const twitterTitle = "双层床BIS许可证 | IS 17636:2022";
  const metaDescription =
    "获取IS 17636:2022标准下的双层床BIS证书。了解印度BIS认证的流程、文件、测试、成本和时间表。";
  const ogDescription =
    "根据IS 17636:2022标准，双层床BIS认证完整指南。了解流程、成本、文件、测试和BIS许可证优势。";
  const twitterDescription =
    "申请IS 17636:2022标准下的双层床BIS证书。了解印度的BIS流程、文件、测试、费用和时间表。";
  const metaKeywords =
    "双层床BIS证书, 双层床BIS许可证, IS 17636:2022, 双层床BIS认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/shuang-ceng-chuang-is-17636";
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
        href="https://bis-certifications.com/blogs/isi-products/bunk-beds-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/bunk-beds-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-muzdawijat-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/shuang-ceng-chuang-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stapelbedden-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-superposes-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/etagenbetten-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-susun-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-a-castello-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/nidan-beddo-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/icheung-chimdae-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/literas-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-song-chan-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-tang-is-17636"
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
                    双层床BIS证书 – IS 17636:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          双层床BIS证书 – IS 17636:2022 BIS认证完整指南
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="双层床BIS许可证"
            alt="双层床BIS证书 - IS 17636:2022 BIS认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          双层床BIS证书是印度根据IS
          17636:2022标准的强制性要求，该标准规定了用于家庭、宿舍、宿舍、PG住宿、学校、酒店和商业场所的双层床的安全、性能和结构要求。任何制造商——无论是印度还是外国——在印度市场销售、进口、出口或分销双层床之前，都必须获得双层床BIS认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          随着对节省空间家具的需求不断增加，双层床已成为重要的产品类别。然而，坠落、倒塌、卡住和结构故障等安全风险使得双层床BIS许可证对于确保消费者保护至关重要。本综合页面将指导您了解双层床BIS注册、测试要求、文件、费用、时间表、处罚和优势。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          无论您是制造商、进口商、出口商、贸易商还是初创企业，本指南都将帮助您了解印度标准局（BIS）的合规要求。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS认证是由印度标准局（印度国家标准机构）管理的质量和安全合规计划。它确保产品符合指定的印度标准，并且安全、可靠且适合使用。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          什么是BIS证书？
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS证书是颁发给制造商的官方许可证，允许他们使用ISI标志，证明符合BIS规定的产品标准。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS证书的含义
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          它证明产品已通过：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>实验室测试</li>
          <li>工厂检查</li>
          <li>质量控制评估</li>
          <li>安全合规</li>
          <li>符合印度标准</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          经过BIS认证的产品显示BIS标志，也称为ISI标志，表示它符合印度质量标准。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          哪些BIS标准适用于双层床？(IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据新引入的标准，双层床属于强制性BIS认证：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — 双层床 – 安全要求
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准确保双层床满足严格的安全、结构和耐久性标准。它涵盖：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>结构稳定性</li>
          <li>护栏</li>
          <li>卡住危险</li>
          <li>承载能力</li>
          <li>尺寸要求</li>
          <li>材料规格</li>
          <li>边缘和表面处理</li>
          <li>梯子结构</li>
          <li>耐久性和性能测试</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          任何想在印度销售双层床的制造商都必须获得IS
          17636:2022标准下的双层床BIS许可证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么双层床需要BIS认证
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          双层床被儿童和成人广泛使用，安全考虑使得合规性至关重要。BIS已强制要求认证以防止：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>倒塌或结构故障</li>
          <li>身体部位被卡住</li>
          <li>从上铺坠落</li>
          <li>与梯子相关的伤害</li>
          <li>材料质量差</li>
          <li>火灾危险</li>
          <li>危险的处理或尖锐边缘</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          双层床BIS许可证强制性的原因
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>确保机械强度和耐久性</li>
          <li>保护消费者——尤其是儿童——免受伤害</li>
          <li>保持统一的质量标准</li>
          <li>帮助品牌建立信任和信誉</li>
          <li>确保符合政府法规</li>
          <li>防止法律问题和处罚</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          没有BIS注册，制造商和进口商无法在印度市场合法销售产品。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          双层床BIS认证流程（IS 17636:2022）逐步指南
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          印度的BIS认证流程涉及测试、文件和工厂检查。以下是逐步程序：
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤1 — 确定适用性和标准
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — 强制性
          </li>
          <li>确认产品类别和制造单位详情。</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤2 — BIS申请（表格提交）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          通过BIS Manak在线门户在线申请。
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">要求包括：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造商详情</li>
          <li>工厂地址和证明</li>
          <li>产品类别和品牌</li>
          <li>制造能力</li>
          <li>质量控制流程</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          此步骤启动官方批准周期。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤3 — 支付BIS证书费用
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          提交后，支付：
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>申请费</li>
          <li>测试费</li>
          <li>审核费</li>
          <li>标记费</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">费用取决于：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品变体数量</li>
          <li>品牌名称</li>
          <li>工厂位置</li>
          <li>测试参数</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤4 — 样品测试（根据IS 17636:2022）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          测试在BIS认可的实验室进行。
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">测试包括：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>结构稳定性测试</li>
          <li>冲击测试</li>
          <li>卡住测试</li>
          <li>护栏强度测试</li>
          <li>表面处理质量测试</li>
          <li>梯子安全测试</li>
          <li>负载测试</li>
          <li>耐久性测试</li>
          <li>边缘安全评估</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          测试报告直接上传到BIS门户。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤5 — BIS工厂检查
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS官员访问工厂以验证：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>质量管理体系</li>
          <li>原材料控制</li>
          <li>过程检查</li>
          <li>最终产品测试</li>
          <li>生产能力</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          他们检查是否符合BIS测试和检查计划（STI）。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤6 — 授予BIS许可证
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          一旦所有步骤都通过，BIS将颁发：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS证书</li>
          <li>ISI标志批准</li>
          <li>CML许可证号</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          您现在可以在双层床和包装上合法使用BIS标志。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤7 — 许可证后义务
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">制造商必须：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>保持内部测试</li>
          <li>允许定期BIS检查</li>
          <li>每1或2年更新许可证</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          双层床BIS许可证范围
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong>{" "}
          本标准涵盖与家用和非家用双层床的性能和安全相关的要求，即强度、稳定性和耐久性。本标准也适用于床基高度在完成地面以上800毫米或更高的单人床，无论下方空间用于何种用途。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong>{" "}
          本标准适用于完全制造/制作的双层床。它也适用于即装即用单元；在这种情况下，本标准的要求应适用于组装单元。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          双层床BIS认证所需文件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          以下是BIS证书文件的完整列表：
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          制造商文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂注册证书</li>
          <li>制造工艺流程图</li>
          <li>机械和设备清单</li>
          <li>测试设备清单</li>
          <li>校准证书</li>
          <li>工厂布局/厂房布局</li>
          <li>首席执行官/董事授权书</li>
          <li>ISO 9001证书（如有）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>身份证明</li>
          <li>地址证明</li>
          <li>品牌授权（如果是第三方品牌）</li>
          <li>商标注册文件（可选）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技术文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品规格</li>
          <li>材料清单</li>
          <li>安全功能说明</li>
          <li>质量控制计划</li>
          <li>内部测试报告</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS申请文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>承诺和声明</li>
          <li>测试申请表</li>
          <li>样品批准函</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          拥有适当的文件可以减少延误并确保顺利批准。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          双层床测试要求（IS 17636:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          测试是BIS注册流程的强制性部分。双层床经过严格测试以确保安全性和耐久性。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          双层床检查和测试计划
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
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
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  设计和工艺
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  尺寸
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  上铺安全护栏
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  间隙
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  床基
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  梯子
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  框架和紧固件强度
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  稳定性
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  上铺与下铺的紧固
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          测试必须在BIS认可的实验室进行。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见挑战及如何避免
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>产品分类错误</strong>
            <br />
            始终验证正确的印度标准。
          </li>
          <li>
            <strong>文件不当</strong>
            <br />
            缺少文件会导致延误——请提前准备。
          </li>
          <li>
            <strong>实验室测试失败</strong>
            <br />
            确保高质量的材料、焊接、护栏和表面处理。
          </li>
          <li>
            <strong>工厂未准备好接受检查</strong>
            <br />
            确保质量管理系统和测试设备得到适当维护。
          </li>
          <li>
            <strong>商标问题</strong>
            <br />
            品牌名称必须与许可证申请匹配。
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          及早解决这些问题可以大大减少处理时间。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          制造商和进口商BIS认证的优势
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>在印度合法销售双层床</li>
          <li>与客户建立信任</li>
          <li>减少产品退货</li>
          <li>提高品牌声誉</li>
          <li>确保安全合规</li>
          <li>获得竞争优势</li>
          <li>扩展到零售连锁店和电子商务平台</li>
          <li>获得政府招标</li>
          <li>避免处罚和法律行动</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          不合规的处罚
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          在没有BIS认证的情况下销售双层床可能导致：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品没收</li>
          <li>经济处罚</li>
          <li>工厂关闭令</li>
          <li>法律起诉</li>
          <li>禁止进入印度市场</li>
          <li>品牌列入黑名单</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          合规不是可选的——它是强制性的。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          谁需要双层床BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          以下实体必须获得双层床BIS许可证：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>印度制造商</li>
          <li>向印度出口的外国制造商</li>
          <li>进口商</li>
          <li>分销商</li>
          <li>电子商务卖家</li>
          <li>OEM/ODM制造商</li>
          <li>家具品牌和零售商</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          每个工厂（不是公司）都需要单独的BIS许可证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么选择我们进行BIS认证咨询？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          我们为双层床BIS注册提供端到端支持，包括：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>标准解读（IS 17636:2022）</li>
          <li>文件准备</li>
          <li>实验室测试协调</li>
          <li>BIS门户申请</li>
          <li>工厂检查支持</li>
          <li>与BIS官员沟通</li>
          <li>许可证批准协助</li>
          <li>认证后合规</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          凭借多年的专业知识，我们确保快速、准确且无忧的BIS认证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 — 双层床BIS认证
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 双层床在印度是否必须进行BIS认证？</strong>
              <br />
              是的。根据IS 17636:2022，所有制造商和进口商都必须进行认证。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 双层床BIS认证需要多长时间？</strong>
              <br />
              通常需要30-45天，具体取决于准备情况和文件。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 外国制造商可以申请BIS吗？</strong>
              <br />
              可以，通过FMCS（外国制造商认证计划）。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 我可以在线申请BIS证书吗？</strong>
              <br />
              可以，通过BIS Manak在线门户。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 双层床认证需要哪些测试？</strong>
              <br />
              负载测试、护栏测试、稳定性测试、冲击测试、卡住测试等。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. BIS许可证有效期多长？</strong>
              <br />
              通常为1-2年，可续期。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 一个许可证可以涵盖多个型号吗？</strong>
              <br />
              只有在它们属于同一标准和类别的情况下才可以。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 双层床上是否需要ISI标志？</strong>
              <br />
              是的，认证后ISI标志是强制性的。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. 如果我的产品实验室测试失败会怎样？</strong>
              <br />
              您必须修改产品并重新提交样品。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>11. BIS会检查工厂基础设施吗？</strong>
              <br />
              是的，在检查期间。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. 贸易商可以申请BIS吗？</strong>
              <br />
              只有当他们拥有品牌并且与制造商有合同时才可以。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. BIS标志是什么？</strong>
              <br />
              它是标准的ISI标志符号，表示产品符合性。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>14. BIS认证需要哪些文件？</strong>
              <br />
              工厂许可证、布局、机械清单、材料清单、质量控制计划、测试报告等。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>15. BIS测试是在工厂进行的吗？</strong>
              <br />
              不是，只在BIS认可的实验室进行。
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据IS
          17636:2022获得双层床BIS证书不仅是强制性的，而且对于确保消费者安全、产品可靠性和在印度的法律合规性至关重要。认证过程涉及产品测试、文件、工厂检查和许可证颁发。通过适当的规划和专家指导，该过程变得顺畅、快速且具有成本效益。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          无论您是制造商、进口商还是品牌所有者，获得BIS认证都会加强您的市场地位，增加客户信任，并开启新的商业机会。我们的专家咨询团队随时准备为您提供双层床端到端BIS认证服务。
        </p>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17636-2021-Sun-Certifications-India.pdf"
            title="双层床BIS证书 - IS 17636:2021 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadChinese />

        <FaqAuthorChinese questionNumber={5} />
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
                印度最佳证书咨询公司
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
