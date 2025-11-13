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
import ServiceAuthorJapanese from "@/components/manual/ServiceAuthor/ServiceAuthorJapanese";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentJapanese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentJapanese";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import FooterJapanese from "@/components/manual/Footer/FooterJapanese";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const TransformersJapanese = () => {
  return (
    <div className="relative w-full">
      <TransformersMetaTags />
      <TransformersBreadcrumb />
      <TransformersMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default TransformersJapanese;

const TransformersMetaTags = () => {
  const title = "変圧器のためのBISスキームX認証";
  const description =
    "変圧器のBISスキームX認証は、インドでの変圧器の製造および輸入のための品質と安全基準を定義します";
  const keywords =
    "変圧器のBIS認証、変圧器のBISスキームX認証、変圧器のスキームX認証、変圧器のBIS、変圧器のOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle = "インドにおける変圧器のBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおける変圧器のBISスキームX認証についてすべて学びます。2024年OTRコンプライアンス、BISライセンスプロセス、ISIマーク要件、および2026年9月の期限前に認証を取得する方法を理解します";

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

const TransformersBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">ホーム</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/SchemeX-Products">スキームX製品</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    変圧器のBIS認証
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

const TransformersMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <TransformersMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const TransformersMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          変圧器のBIS認証
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-licence-for-Transformers.png"
            alt="変圧器のBISスキームX認証"
            title="変圧器のBISスキームXライセンス"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          変圧器は、すべての送配電ネットワークの不可欠な構成要素です。産業、商業、または公共事業の用途を問わず、変圧器は、その機能の重要性により、最高の安全性と運用性能を備えた機器であり続ける必要があります。インドの電気機器産業における安全性、信頼性、標準化を向上させるため、インド規格局（BIS）は、スキームX認証の下で、すべてのタイプの変圧器およびそのアセンブリ、サブアセンブリ、コンポーネント、サブコンポーネントに対するBIS認証を義務付けました。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          重工業省は、2024年の包括的技術規則命令を通じて、出身国に関係なく、すべての製造業者が2026年9月1日までに変圧器および同様の機器についてスキームXの下でBIS認証を取得する期限を設定しました。変圧器のBISスキームX認証は、インドにおける製品の品質、一貫性、信頼性、および電気安全性の向上への一歩です。コンポーネントを含む変圧器の製造業者、輸入業者、またはOEMサプライヤーにとって、この基準は単なるコンプライアンス義務以上のものです。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          このブログは、すべてのタイプの変圧器および（または）そのアセンブリ、サブアセンブリ、コンポーネント、および（または）アセンブリに対するスキームX認証の範囲、重要性、利点、プロセス、および必要な文書に関連するすべての関連情報をカバーしています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why Scheme X is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          変圧器のスキームXが重要な理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          変圧器は以下の場所で広く使用されています：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>発電施設</li>
          <li>送配電ネットワーク</li>
          <li>工場および生産施設</li>
          <li>再生可能エネルギープロジェクト（太陽光/風力/水力）</li>
          <li>商業/住宅用不動産</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          適切なコンプライアンスがない場合、変圧器は以下を引き起こす可能性があります：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>過熱、火災、感電</li>
          <li>送電中の電力損失と浪費</li>
          <li>システム障害による停電</li>
          <li>公共入札、政府プロジェクトでの失格</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          変圧器のスキームX認証は、高い安全性、エネルギー効率、および製品の信頼性を保証します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          変圧器のスキームX認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          変圧器のBISスキームX認証は、2018年BIS適合性評価規則に基づく法的枠組みです。これは厳格な試験と検査を義務付け、インド規格に従って品質を確保するために、より高いレベルの文書化を要求します。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          スキームX認証の主な特徴：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>インドおよび外国のすべての製造業者が対象</li>
          <li>配電用変圧器、電力用変圧器、特殊用途変圧器を含む</li>
          <li>BIS承認試験所での性能、効率、安全性の試験が義務付けられている</li>
          <li>製造プロセスと品質システムが検査されるために工場が監査される</li>
          <li>BIS標準マークの使用ライセンスを付与する</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          変圧器のBIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          重工業省は、2024年に変圧器の包括的技術規則（OTR）を導入しました。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          コンプライアンス日：すべての製造業者および輸入業者は、2026年9月1日までに認証を取得する必要があります。それ以降、認証されていない変圧器は、インドで製造、輸入、または販売することができません。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          変圧器のBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            安全性と信頼性：変圧器が電気安全および火災予防要件に準拠していることを検証します。
          </li>
          <li>
            エネルギー効率：電力損失の削減とより良い電力性能を促進します。
          </li>
          <li>
            市場コンプライアンス：OTRに記載されているように、変圧器の規制要件を遵守します。
          </li>
          <li>入札資格：認証製品は政府および公営企業の入札に適格です。</li>
          <li>顧客の信頼：BIS標準マークは製品の品質と耐久性を保証します。</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Transformers Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          対象となる変圧器の種類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          変圧器のBISスキームX認証は以下に適用されます：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>配電用変圧器（地域ネットワークおよび住宅用供給での使用）</li>
          <li>電力用変圧器（高電圧送電ネットワークレベル）</li>
          <li>
            特殊用途変圧器（産業、鉄道、再生可能エネルギープロジェクトの用途）
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          各タイプは、IS 16819:2018/ISO 12100:2010（機械の安全性 –
          設計の一般原則 –
          リスクアセスメントとリスク低減）などの関連するIS規格（注を参照）を満たす必要があります。すべてのタイプは、認証のためにそれぞれのIS規格に準拠する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          変圧器のBIS認証プロセス
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            適用可能な規格の特定：さまざまなタイプの変圧器のIS規格を参照してください。
          </li>
          <li>
            製品試験：BIS承認試験所で安全性、エネルギー効率、性能の検査を実施します。
          </li>
          <li>
            工場監査：BIS担当者が製造業者の生産および品質管理システムを監査します。
          </li>
          <li>
            文書の提出：仕様、試験報告書、コンプライアンスデータを提出します。
          </li>
          <li>
            ライセンスの付与：すべての要件が満たされると、BISは標準マークの使用ライセンスを付与します。
          </li>
          <li>
            継続的なコンプライアンス：認証の有効性を維持するために、定期的な試験とレビューが実施されます。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          非コンプライアンスに対する罰則
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          変圧器のOTRの下での変圧器のBIS認証のBIS /
          OTRに準拠しない場合、以下を意味します：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>認証されていない変圧器の製造および輸入販売の禁止</li>
          <li>非準拠製品の強制没収と厳しい罰則</li>
          <li>政府および公営企業の入札からの失格</li>
          <li>長期的な評判の損傷、財務損失</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          変圧器のOTR（2024）の下で義務付けられる変圧器のBISスキームX認証は、信頼性が高く、効率的で安全な製品でインドの電力インフラを強化するための重要なステップです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          製造業者および輸入業者にとって、変圧器のスキームX認証は単なる義務的な認証ではなく、インド市場での信頼を獲得し、国の電力産業における長期的な成功を維持するための戦略的ツールでもあります。
        </p>

        <ServiceAuthorJapanese />
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
              私たちのサービス
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                インドのベスト認証コンサルタント
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
              外国製造業者向けBISマーク（ISIライセンス）
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
              CDSCO登録認証
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
              BIS登録（CRS）
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
              プラスチック廃棄物管理
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
              EPR証明書認証
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
              LMPC証明書認証
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
              BIS登録証明書
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
              インド製造業者向けISIマーク（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
