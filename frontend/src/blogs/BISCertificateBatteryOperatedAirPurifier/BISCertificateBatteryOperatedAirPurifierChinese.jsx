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

const BISCertificateBatteryOperatedAirPurifierChinese = () => {
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

export default BISCertificateBatteryOperatedAirPurifierChinese;

const MetaTags = () => {
  const title =
    "电池空气净化器BIS证书 | IS 302 (第1部分):2024 BIS许可证";
  const ogTitle =
    "电池空气净化器BIS认证 – IS 302 (第1部分):2024指南";
  const twitterTitle =
    "电池空气净化器BIS许可证 | IS 302 (第1部分):2024";
  const metaDescription =
    "根据IS 302 (第1部分):2024获取电池空气净化器BIS证书。了解印度BIS认证的流程、文件、测试、成本和时间表。";
  const ogDescription =
    "根据IS 302 (第1部分):2024的电池空气净化器BIS认证完整指南。了解流程、成本、文件、测试和BIS许可证的好处。";
  const twitterDescription =
    "根据IS 302 (第1部分):2024申请电池空气净化器BIS证书。了解印度的BIS流程、文件、测试、费用和时间表。";
  const metaKeywords =
    "电池空气净化器BIS证书, 电池空气净化器BIS许可证, IS 302 (第1部分):2024, 电池空气净化器BIS认证";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/dianchi-kongqi-jinghuaqi-is-302";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal，Sun Certification India运营主管";

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
                    电池空气净化器BIS证书 – IS 302 (第1部分):2024
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
          电池空气净化器BIS认证 – IS 302 (第1部分):2024完整指南
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedAirPurifier.png"
            title="电池空气净化器BIS许可证"
            alt="电池空气净化器BIS证书 - IS 302 (第1部分):2024 BIS认证"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          由于空气污染水平上升、健康意识增强以及对便携式、节能空气净化解决方案的需求，印度对电池空气净化器的需求迅速增长。与传统的插电式空气净化器不同，电池驱动的型号广泛用于家庭、办公室、医院、车辆、酒店、学校和个人空间，特别是在无法保证不间断电源供应的地方。这些设备直接与电气、电子和电池组件交互，使电气安全、防火、绝缘完整性和用户保护变得极其重要。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          为确保消费者安全和监管合规，印度政府已强制要求符合印度电气安全标准。根据IS 302 (第1部分):2024获得电池空气净化器BIS证书是制造商和进口商在印度市场销售这些产品之前的强制性法律要求。有效的电池空气净化器BIS认证确认该设备已根据最新印度标准进行了电气、机械和热安全测试。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          什么是BIS认证？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS认证是印度标准局管理的印度官方产品符合性评估系统。BIS隶属于消费者事务部，负责确保在印度销售的产品符合规定的安全、质量和可靠性标准。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS证书含义
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS证书含义是指BIS颁发的授权，允许制造商生产、进口和销售符合特定印度标准(IS)的产品。此证书还允许在批准的产品上使用BIS认证标志(ISI标志)。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS的存在是为了：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>保护消费者免受不安全的电气设备</li>
          <li>防止火灾、电击和电池相关危险</li>
          <li>促进统一的产品质量</li>
          <li>确保安全法规的执行</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI标志说明
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          电池空气净化器上的BIS标志(ISI标志)表示：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品符合IS 302 (第1部分):2024</li>
          <li>电气绝缘和结构安全</li>
          <li>该设备已获准在印度合法销售</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          电池空气净化器适用的BIS标准
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (第1部分):2024 – 家用和类似用途电气设备安全
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          电池空气净化器适用的印度标准是IS 302 (第1部分):2024，该标准规定了用于家用和类似用途的电气设备的一般安全要求。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (第1部分):2024的范围
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          该标准涵盖：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            使用电池或混合电源的设备的电气安全
          </li>
          <li>防电击保护</li>
          <li>火灾和过热风险</li>
          <li>机械和结构安全</li>
          <li>绝缘、爬电距离和间隙要求</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          安全、性能和测试目的
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (第1部分):2024旨在确保：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            电池供电设备在正常和异常条件下安全运行
          </li>
          <li>
            用户免受电气、热和机械危险
          </li>
          <li>组件不会过热或引起火灾</li>
          <li>设备在其预期生命周期内保持安全</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          谁必须遵守
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>印度电池空气净化器制造商</li>
          <li>进口商和分销商</li>
          <li>向印度供应的外国制造商</li>
          <li>以自有品牌销售空气净化器的品牌</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么电池空气净化器必须进行BIS认证
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          消费者安全风险
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          未认证的空气净化器可能导致：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>因绝缘不良导致电击</li>
          <li>电池过热或爆炸</li>
          <li>充电或运行期间的火灾危险</li>
          <li>内部组件的机械故障</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          政府和监管合规
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          根据BIS通知和电气安全法规，空气净化器属于强制性认证。在印度没有BIS证书销售是违法的。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律后果
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          不合规可能导致：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品被没收</li>
          <li>巨额罚款和处罚</li>
          <li>进口禁令</li>
          <li>根据BIS法案承担刑事责任</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          市场和品牌优势
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          电池空气净化器BIS许可证有助于：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>建立消费者信任</li>
          <li>在电子商务平台上架</li>
          <li>符合机构和政府采购资格</li>
          <li>加强品牌声誉</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          电池空气净化器BIS认证分步流程
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS许可证的适用性和标准识别
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          流程从确认以下内容开始：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品类型：电池空气净化器</li>
          <li>适用标准：IS 302 (第1部分):2024</li>
          <li>电压、电池类型、充电器配置</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS在线申请流程
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          制造商必须：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>在BIS门户网站注册</li>
          <li>在线提交BIS申请</li>
          <li>上传技术和法律文件</li>
          <li>支付适用的政府费用</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          此步骤通常称为BIS在线申请或BIS证书注册。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          空气净化器BIS证书的费用和成本结构
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS认证成本包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申请费</li>
          <li>测试费用</li>
          <li>工厂检查费</li>
          <li>许可证和标记费</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS认证的总成本取决于：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>产品复杂性</li>
          <li>电池和充电器设计</li>
          <li>制造地点</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          产品样品测试（根据IS 302第1部分:2024）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          样品在BIS认可的实验室中进行以下测试：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>防电击保护</li>
          <li>加热和异常操作</li>
          <li>绝缘电阻</li>
          <li>介电强度</li>
          <li>电池安全和充电安全</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          工厂检查和审计
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS官员验证：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>制造过程</li>
          <li>质量控制系统</li>
          <li>组件可追溯性</li>
          <li>内部测试设施</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          授予BIS许可证和ISI标志
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          成功测试和检查后：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS颁发印度标准局许可证</li>
          <li>制造商被授权使用BIS标志</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS认证所需文件
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          制造商文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工厂注册证书</li>
          <li>制造工艺流程图</li>
          <li>机械和测试设备清单</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>公司注册证书</li>
          <li>GST注册</li>
          <li>品牌授权（如适用）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技术文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>电路图</li>
          <li>组件数据表</li>
          <li>电池和充电器规格</li>
          <li>用户手册和标签</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS申请文件
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS申请表</li>
          <li>测试申请表</li>
          <li>声明和承诺</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          这些文件被称为BIS证书文件或BIS认证文件。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          根据IS 302 (第1部分):2024的测试要求
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          强制性测试包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>防电击保护测试</li>
          <li>加热和异常操作测试</li>
          <li>绝缘电阻测试</li>
          <li>介电强度测试</li>
          <li>电池充电安全测试</li>
          <li>机械强度和稳定性测试</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          测试必须在BIS认可的实验室进行。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见挑战及如何避免
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          常见问题
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>加热或绝缘测试失败</li>
          <li>不安全的电池配置</li>
          <li>文件不完整</li>
          <li>标签不符合要求</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          解决方案和最佳实践
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>进行预合规测试</li>
          <li>使用认证组件</li>
          <li>准备准确的技术文件</li>
          <li>与经验丰富的BIS顾问合作</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS认证对制造商和进口商的好处
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法律优势
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>符合印度法律</li>
          <li>免受处罚</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          商业优势
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>在印度全境的市场准入</li>
          <li>在电子商务平台上被接受</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          品牌优势
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS标志增强信任</li>
          <li>更高的客户信心</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          市场扩张
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>更容易进入机构市场</li>
          <li>长期品牌信誉</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          谁需要电池空气净化器BIS认证？
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>印度制造商</li>
          <li>进口商</li>
          <li>外国制造商（带AIR）</li>
          <li>贸易商和品牌所有者</li>
          <li>在线卖家和市场</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          为什么选择我们进行BIS认证咨询？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          我们提供端到端的BIS认证服务，包括：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>适用性评估</li>
          <li>文件准备</li>
          <li>实验室测试协调</li>
          <li>工厂检查支持</li>
          <li>更快的审批</li>
          <li>认证后合规</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          我们在电气和电子设备方面的专业知识确保了顺利和合规的认证过程。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          结论
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          根据IS 302 (第1部分):2024获得电池空气净化器BIS证书不仅仅是监管形式——这是关键的安全和市场要求。电池空气净化器BIS认证确保电气安全、电池可靠性和消费者保护，而电池空气净化器BIS许可证则加强了品牌信誉和法律地位。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          对于制造商和进口商来说，及时合规可以防止处罚，实现顺利的市场进入，并建立长期信任。通过专家指导和结构化合规支持，BIS认证过程变得高效、可预测，并完全符合印度标准。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          常见问题 – 电池空气净化器BIS认证
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题1. 电池空气净化器是否必须进行BIS认证？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，根据IS 302 (第1部分):2024，这是强制性的。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题2. BIS证书的全称是什么？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              印度标准局证书。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题3. BIS认证需要多长时间？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              印度制造商通常需要6-8周，外国制造商需要12-16周。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题4. BIS证书的费用是多少？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              这取决于测试和产品的复杂性。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题5. 进口商可以申请BIS认证吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              可以，需要适当的授权。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题6. ISI标志是强制性的吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，认证后是强制性的。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题7. 是否包括电池安全测试？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，电池和充电安全是强制性的。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题8. 工厂检查是强制性的吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，颁发许可证需要。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题9. 可以涵盖多个型号吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              可以，但需要测试批准。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题10. 是否需要在线申请？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，BIS在线申请是强制性的。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题11. 外国品牌可以获得BIS认证吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              可以，通过授权的印度代表。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题12. 如果违反BIS规则会怎样？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              处罚、没收和法律行动。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题13. BIS认证能提高销售额吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，它显著增强了信任。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题14. 需要续期吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，定期续期是强制性的。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              问题15. 顾问可以加快审批速度吗？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是的，经验丰富的顾问可以减少延误。
            </p>
          </div>
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
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
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
                alt="BISCRS logo"
                title="BISCRS logo"
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              印度制造商的ISI标志（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
