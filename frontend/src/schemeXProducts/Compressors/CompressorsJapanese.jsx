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
import FooterJapanese from "@/components/manual/Footer/FooterJapanese";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentJapanese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentJapanese";
import ServiceAuthorJapanese from "@/components/manual/ServiceAuthor/ServiceAuthorJapanese";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";

const CompressorsJapanese = () => {
  return (
    <div className="relative w-full">
      <CompressorsMetaTags />
      <CompressorsBreadcrumb />
      <CompressorsMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default CompressorsJapanese;

const CompressorsMetaTags = () => {
  const title = "コンプレッサーのBISスキームX認証";
  const description =
    "コンプレッサー、組立品、またはそのコンポーネントのBISスキームX認証は、2024年オムニバス技術規則の下で必須であり、製品の安全性とインドでの標準化を向上させます";
  const keywords =
    "コンプレッサーのBIS認証, コンプレッサーのBISスキームX認証, コンプレッサーのスキームX認証, コンプレッサーのBIS, コンプレッサーのOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Sun Certification Indiaオペレーション責任者";
  const ogTitle = "インドにおけるコンプレッサーのBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおけるコンプレッサーのBISスキームX認証についてすべてを学びましょう。OTR 2024コンプライアンス、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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
                    <Link to="/">ホーム</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/SchemeX-Products">SchemeX製品</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    コンプレッサーのBISスキームX認証
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
        <ServicesRightSideContentJapanese />
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
          コンプレッサーのBISスキームX認証
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Compressors.png"
            title="コンプレッサーのBISスキームXライセンス"
            alt="コンプレッサーのBISスキームX認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          コンプレッサーは、冷凍、HVAC、石油化学、製造、食品加工、製薬などの様々な産業で重要な機器です。急速に成長しているインドの産業は急速に拡大しており、コンプレッサーの品質と安全性が主要な関心事となっています。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          これを確保するため、インド標準局（BIS）は、スキームX認証の下でコンプレッサーのBIS認証を実施しています。この認証により、インドに導入されるすべてのコンプレッサーが特定の安全性、性能、効率基準を遵守することが保証されます。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          このガイドでは、コンプレッサーのBISスキームX認証とコンプレッサーのOTR、および製造業者がインドでコンプレッサーのBISマークを使用するためのコンプレッサーのBISライセンスを取得する方法について説明します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Compressors is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          コンプレッサーのBISの重要性
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          コンプレッサーは以下の分野で使用されています：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>空調/冷凍システム</li>
          <li>ガス輸送と貯蔵</li>
          <li>石油・ガス処理施設</li>
          <li>発電所と化学工業施設</li>
          <li>食品・飲料製造</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          各タイプは、IS
          17093:2019などの適用されるインド規格（ISコード）を満たす必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          コンプレッサーのBISがない場合、低品質または未認証の製品が以下を引き起こす可能性があります：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>故障、メンテナンス期間、ダウンタイム</li>
          <li>エネルギー浪費と高額なユーティリティ請求</li>
          <li>過熱や漏れなどの安全リスク</li>
          <li>評判の損失と金銭的損害</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          したがって、ISI認証済みのコンプレッサーのBISマークは、安全性、信頼性、品質の保証です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          コンプレッサーのBISスキームX認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          コンプレッサーのBISスキームX認証は、2018年BIS適合性評価規則の下でのインドの適合性評価スキームです。これは、国内および外国の製造業者の両方がインドの品質基準を遵守することを確保するためのものです。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          コンプレッサーのスキームX認証の特徴：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>すべての製造業者（インドおよび外国）に必須</li>
          <li>インド規格の下で通知された様々な種類のコンプレッサーをカバー</li>
          <li>第三者試験、工場検査、定期的な適合性検査を含む</li>
          <li>
            ライセンス保持者が認証製品としてコンプレッサーのBISマークを使用することを許可
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          コンプレッサーのBIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          2024年に重工業省によって発表されたコンプレッサーのオムニバス技術規則（OTR）は、コンプレッサーのスキームX認証を要求しています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          コンプライアンス期限：2026年9月1日までに、すべての製造業者および輸入業者は、スキームXの下で有効なコンプレッサーのBISライセンスを取得する必要があります。不遵守は、インドでの未認証コンプレッサーの販売および輸入の完全な禁止を引き起こします。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          コンプレッサーのBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            安全性と性能：漏れ、過熱、機械故障などの危険を回避するのに役立ちます。
          </li>
          <li>
            市場アクセス：BIS認証のコンプレッサーは、公共入札および政府プロジェクトで使用できます。
          </li>
          <li>
            消費者信頼：コンプレッサーのBISマークは、購入者に製品がインド規格に準拠しているという確信を与えます。
          </li>
          <li>
            競争優位性：認証されたブランドのみがより多くの信頼と市場の好みを得ます。
          </li>
          <li>
            国際ブランドの市場アクセスの容易さ：コンプレッサーのBISライセンスは、外国の製造業者がインド市場に簡単にアクセスできるようにします。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Compressor Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BISスキームXでカバーされるコンプレッサーの種類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BISスキームX認証は、以下のような様々な種類のコンプレッサーに利用できます：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>往復式容積型コンプレッサー</li>
          <li>ロータリーコンプレッサー</li>
          <li>スクリューコンプレッサー</li>
          <li>ターボコンプレッサー</li>
          <li>軸流コンプレッサー</li>
          <li>産業用およびポータブル空気コンプレッサー</li>
          <li>空調および冷凍コンプレッサー</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          異なるコンプレッサー技術は、それぞれのインド規格に準拠する必要があり、これらは性能、エネルギー消費、材料品質、安全性の要件を規定しています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          コンプレッサーのBISライセンスのステップバイステップ – 申請方法は？
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>適用規格の特定：コンプレッサーに適したISコードを見つけます。</li>
          <li>
            製品試験：BIS認定実験室で必須の性能、安全性、エネルギー効率試験を実施します。
          </li>
          <li>
            工場検査：BIS職員が製造手順と品質管理方法を検証するために現場訪問を行います。
          </li>
          <li>
            文書化と申請：試験報告書、技術仕様、品質マニュアルをBIS申請と一緒に提出します。
          </li>
          <li>
            コンプレッサーのBISライセンス発行：承認されると、製造業者はコンプレッサーのBISマークを使用する権利が与えられます。
          </li>
          <li>
            継続的なコンプライアンス：BISは継続的なコンプライアンスのために定期的な監査および製品試験を実施します。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不遵守に対する制裁
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          コンプレッサーのOTRの下で、2026年9月1日までにコンプレッサーのBIS認証を取得していない製造業者は、以下に直面します：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>未試験タイプのコンプレッサーの販売/輸入は許可されません</li>
          <li>不適合製品の没収および事業制裁</li>
          <li>政府入札およびPSU契約からの禁止</li>
          <li>インド市場での信頼の喪失</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          コンプレッサーのOTR（2024）によるコンプレッサーのBISスキームX認証の実施は、インドにおける産業安全性、エネルギー効率、品質保証のための重要な前進です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          コンプレッサーのBIS証明書を取得するプロセスを経て、コンプレッサーのBIS証明書を確保した製造業者、輸入業者、輸出業者は、インドの消費者に提供する製品が安全に使用でき、環境リスクが低く、高品質であることを確保することで、この市場の一部となる権利を獲得します。
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
                インド最高の認証コンサルタント
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
              海外製造業者向けBISマーク（ISIライセンス）
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
