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
  const title = "椅子和凳子BIS证书 | IS 17632:2022 BIS许可证";
  const ogTitle = "椅子和凳子BIS认证 – IS 17632:2022指南";
  const twitterTitle = "椅子和凳子BIS许可证 | IS 17632:2022";
  const metaDescription =
    "获取IS 17632:2022标准下的椅子和凳子BIS证书。了解印度BIS认证的流程、文件、测试、成本和时间表。";
  const ogDescription =
    "根据IS 17632:2022标准，椅子和凳子BIS认证完整指南。了解流程、成本、文件、测试和BIS许可证优势。";
  const twitterDescription =
    "申请IS 17632:2022标准下的椅子和凳子BIS证书。了解印度的BIS流程、文件、测试、费用和时间表。";
  const metaKeywords =
    "椅子和凳子BIS证书, 椅子和凳子BIS许可证, IS 17632:2022, 椅子和凳子BIS认证";
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
                    椅子和凳子BIS证书 – IS 17632:2022
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
          通用椅子和凳子BIS证书 – IS 17632:2022完整指南
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="椅子和凳子BIS许可证"
            alt="椅子和凳子BIS证书 - IS 17632:2022 BIS认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          通用椅子和凳子BIS证书是根据印度标准IS
          17632:2022的强制性要求。该标准规定了用于家庭、办公室、商业区域、教育机构、自助餐厅、餐厅、酒店和公共场所的椅子和凳子的安全性、耐用性和性能要求。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          椅子和凳子是最常用的家具物品之一，经常承受负载、移动和重复应力。结构薄弱的椅子或凳子可能突然倒塌，导致受伤。为了防止此类危险并确保消费者安全，印度标准局（BIS）要求每个制造商和进口商在印度销售椅子和凳子之前获得BIS认证。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本页提供了IS
          17632:2022标准下椅子和凳子BIS认证的完整指南，包括认证流程、所需文件、测试要求、费用、挑战、处罚和优势。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS认证是由印度标准局（印度的国家标准机构）管理的产品合规性系统。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS证书的含义
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS证书确保产品：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>符合印度安全和质量标准</li>
          <li>已通过BIS认可的实验室测试</li>
          <li>已接受工厂检查</li>
          <li>保护消费者免受不安全或不合格产品的侵害</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          认证产品显示ISI标记，证明符合印度标准。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          适用标准 – IS 17632:2022（椅子和凳子）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          椅子和凳子的BIS标准是：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> – 通用椅子和凳子：安全要求
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          该标准涵盖用于家庭、办公室、商业环境、公共场所和机构设置的座椅用途的所有非专业椅子和凳子。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17632:2022涵盖的产品
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>通用椅子</li>
          <li>餐椅</li>
          <li>办公室访客椅</li>
          <li>学习椅</li>
          <li>自助餐厅椅子</li>
          <li>餐厅椅子</li>
          <li>会议室椅子</li>
          <li>等候区椅子</li>
          <li>木制椅子</li>
          <li>金属椅子</li>
          <li>塑料椅子（非专业）</li>
          <li>通用凳子</li>
          <li>吧台凳</li>
          <li>餐凳</li>
          <li>踏脚凳（在定义的标准内）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          关键安全和性能参数
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022评估：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>结构强度</li>
          <li>稳定性</li>
          <li>重复使用下的耐用性</li>
          <li>座椅强度</li>
          <li>靠背性能</li>
          <li>腿部抗冲击性</li>
          <li>接头强度</li>
          <li>表面处理质量</li>
          <li>边缘和角落安全性</li>
          <li>材料质量</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          在印度销售的所有椅子和凳子必须符合这些参数，并获得椅子和凳子的BIS许可证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么椅子和凳子必须进行BIS认证
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          椅子和凳子承受人体重量，在所有环境中频繁使用。结构故障可能导致：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>椅子倒塌</li>
          <li>腿部断裂</li>
          <li>座椅开裂</li>
          <li>靠背故障</li>
          <li>尖锐边缘造成的伤害</li>
          <li>不稳定导致跌倒</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS认证的优势
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>确保安全的座椅产品</li>
          <li>防止事故和伤害</li>
          <li>提高产品耐用性</li>
          <li>防止不合格进口</li>
          <li>建立统一的市场质量</li>
          <li>增强客户信心</li>
          <li>印度法律强制性要求（BIS QCO）</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          没有BIS认证，制造商不能在印度合法销售椅子或凳子。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子和凳子BIS认证流程（IS 17632:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS流程遵循ISI标记认证计划，包括测试、检查和申请验证。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤1 – 确定产品类型和标准
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          确认椅子/凳子属于IS 17632:2022。确定设计变体和使用的材料。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤2 – 在线提交BIS申请
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          通过BIS Manak在线门户提交申请，需要：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造商详细信息</li>
          <li>工厂信息</li>
          <li>产品规格</li>
          <li>品牌/商标详细信息</li>
          <li>制造工艺流程</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤3 – 支付BIS认证费用
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">费用包括：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申请费</li>
          <li>处理费</li>
          <li>样品测试费</li>
          <li>工厂检查费</li>
          <li>标记费</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤4 – 根据IS 17632:2022进行产品测试
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          强制性测试在BIS认可的实验室进行。
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          测试包括：
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>稳定性测试</li>
          <li>座椅强度测试</li>
          <li>靠背耐用性测试</li>
          <li>腿部前/侧/后加载测试</li>
          <li>座椅冲击测试</li>
          <li>跌落测试</li>
          <li>疲劳测试</li>
          <li>表面处理测试</li>
          <li>尖锐边缘测试</li>
          <li>重复循环下的结构耐用性</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          测试结果必须完全符合IS 17632:2022。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤5 – BIS工厂检查
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS官员访问工厂以评估：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造过程</li>
          <li>原材料检查</li>
          <li>质量控制程序</li>
          <li>测试能力</li>
          <li>设备校准</li>
          <li>生产量</li>
          <li>符合BIS测试和检查计划（STI）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤6 – 授予BIS许可证
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          如果测试和检查成功，BIS将颁发：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS证书（ISI标记许可证）</li>
          <li>CML编号</li>
          <li>在椅子和凳子上粘贴ISI标记的批准</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          步骤7 – 许可证后义务
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">制造商必须：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>根据BIS标签要求使用ISI标记</li>
          <li>维护质量控制记录</li>
          <li>接受定期BIS监督检查</li>
          <li>每1-2年更新许可证</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子和凳子BIS许可证的范围
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          该标准涵盖通用椅子和凳子的要求。该标准适用于完全制造/加工的通用椅子和凳子。它也适用于即装即用单元；在这种情况下，该标准的要求应适用于组装单元。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子和凳子BIS认证所需文件
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          制造商文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂许可证/注册</li>
          <li>制造工艺流程图</li>
          <li>机械清单</li>
          <li>内部测试设备清单</li>
          <li>校准证书</li>
          <li>工厂布局和平面图</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技术文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>椅子/凳子图纸</li>
          <li>尺寸和规格</li>
          <li>材料清单</li>
          <li>安全功能说明</li>
          <li>内部质量测试报告</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>身份和地址证明</li>
          <li>品牌授权书</li>
          <li>商标证书（可选）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS申请文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申请表</li>
          <li>测试申请表</li>
          <li>声明表</li>
          <li>授权书</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子和凳子测试要求（IS 17632:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022包括广泛的机械、结构和安全测试。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          强制性测试
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
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  无扶手椅子的前向和侧向失衡
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  后向失衡
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  有扶手椅子的侧向失衡
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  凳子/蒲团（所有方向）
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  强度测试
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          这些测试确保在真实条件下的安全日常使用。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见挑战及如何避免
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>椅子稳定性测试失败</strong>
            <br />
            由于重量分布不当而发生。
            <br />
            解决方案：改进腿部设计，扩大底座面积。
          </li>
          <li>
            <strong>薄弱接头导致测试失败</strong>
            <br />
            解决方案：使用加固材料和更好的连接器。
          </li>
          <li>
            <strong>内部测试设备不足</strong>
            <br />
            解决方案：安装所需的符合BIS标准的仪器。
          </li>
          <li>
            <strong>文件不一致</strong>
            <br />
            解决方案：在申请前系统地准备文件。
          </li>
          <li>
            <strong>产品变体映射不当</strong>
            <br />
            解决方案：根据结构和测试参数对产品进行分组。
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子和凳子BIS认证的优势
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>在印度销售的合法许可</li>
          <li>提高产品安全性</li>
          <li>增强客户信任</li>
          <li>降低产品责任风险</li>
          <li>电子商务列表所需</li>
          <li>政府招标必需</li>
          <li>更高的品牌可信度</li>
          <li>竞争优势</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          不合规的处罚
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          销售未经BIS认证的椅子或凳子可能导致：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>巨额罚款</li>
          <li>产品召回/没收</li>
          <li>工厂许可证取消</li>
          <li>刑事起诉</li>
          <li>进口限制</li>
          <li>市场黑名单</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          处罚根据2016年BIS法案执行。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          谁需要椅子和凳子的BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          强制性适用于：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>印度制造商</li>
          <li>向印度出口的外国制造商</li>
          <li>进口商</li>
          <li>品牌所有者/贸易商</li>
          <li>OEM/ODM供应商</li>
          <li>零售连锁店</li>
          <li>在线卖家</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          每个工厂都需要单独的BIS许可证。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据IS
          17632:2022标准，通用椅子和凳子的BIS证书对于确保产品安全性、结构稳定性和耐用性是强制性的。BIS认证不仅帮助制造商保持高质量标准，还使合法市场准入成为可能，并增加消费者信心。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          在专业协助下，从测试到检查和批准的认证过程变得顺畅、可预测且完全合规。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 – 椅子和凳子BIS证书
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 椅子和凳子是否必须进行BIS认证？</strong>
              <br />
              是的，根据IS
              17632:2022，所有通用椅子和凳子在印度销售前必须获得BIS认证。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 需要哪些测试？</strong>
              <br />
              稳定性、强度、耐用性、冲击、疲劳和材料安全测试。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. BIS认证需要多长时间？</strong>
              <br />
              通常30-45天。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 认证费用是多少？</strong>
              <br />
              根据测试和检查，大约₹60,000–₹1,30,000。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 外国制造商可以申请吗？</strong>
              <br />
              可以，根据FMCS计划。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ISI标记是否强制？</strong>
              <br />
              是的，在授予BIS许可证后。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 为什么椅子会BIS测试失败？</strong>
              <br />
              常见原因包括腿部薄弱、接头强度差和不稳定。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 多个型号可以包含在一个许可证下吗？</strong>
              <br />
              只有在满足相似性和标准合规性标准的情况下才可以。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 是否需要工厂检查？</strong>
              <br />
              是的，ISI标记认证是强制性的。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. 需要哪些文件？</strong>
              <br />
              工厂许可证、技术规格、机械清单、质量控制计划、产品图纸等。
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
