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

const CentrifugesJapanese = () => {
  return (
    <div className="relative w-full">
      <CentrifugesMetaTags />
      <CentrifugesBreadcrumb />
      <CentrifugesMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default CentrifugesJapanese;

const CentrifugesMetaTags = () => {
  const title = "遠心分離機およびろ過・精製機械のBISスキームX認証";
  const description =
    "遠心分離機、液体およびガス用のろ過または精製機械、およびその組立品、サブアセンブリ、コンポーネントのBISスキームX認証は、産業機械セクターにとって重要な規制上のマイルストーンです";
  const keywords =
    "遠心分離機のBIS認証, 遠心分離機のBISスキームX認証, 遠心分離機のスキームX認証, 遠心分離機のBIS, 遠心分離機のOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Sun Certification Indiaオペレーション責任者";
  const ogTitle = "インドにおける遠心分離機のBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおける遠心分離機のBISスキームX認証についてすべてを学びましょう。OTR 2024コンプライアンス、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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

const CentrifugesBreadcrumb = () => {
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
                    遠心分離機のBIS認証
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

const CentrifugesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CentrifugesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const CentrifugesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          遠心分離機のBIS認証
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-centrifuges-filtering-or-purifying-machinery.png"
            title="遠心分離機のBISスキームXライセンス"
            alt="遠心分離機およびろ過・精製機械のBISスキームX認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          遠心分離機は、実験室、製薬、食品加工、バイオテクノロジー、石油化学、鉱業などの産業で広く使用されている重要な機械です。これらの機械は回転によって動作し、高速回転により混合物を分離します。この分離は、適切で安全かつ迅速な処理にとって非常に重要です。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          様々な産業でのより広範な応用により、遠心分離機の信頼性と安全性を向上させることが非常に重要です。遠心分離機の品質管理パラメータを維持するため、BISは遠心分離機のスキームX認証として知られるBIS認証スキームを導入しました。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          この記事では、遠心分離機のBISスキームX認証とは何か、遠心分離機のOTRとは何か、および遠心分離機の正式なBISマークを使用した遠心分離機のBISライセンスを取得する方法について説明します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          遠心分離機のBISの重要性
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          遠心分離機は以下の分野で使用されています：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>製薬およびバイオテクノロジーセクター</li>
          <li>食品加工および飲料製造</li>
          <li>石油精製および石油化学産業</li>
          <li>医療実験室</li>
          <li>環境および水処理</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          遠心分離機のBISがない場合、低品質または未認証の遠心分離機の使用につながり、以下を引き起こす可能性があります：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>機械的損傷のリスク</li>
          <li>脆弱なセクターでの汚染の可能性</li>
          <li>時間の損失と収益の損失</li>
          <li>低効率とエネルギー消費の増加</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          遠心分離機のBISマーク付きのBIS認証遠心分離機は、安全性、品質、信頼性を意味します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          遠心分離機のBISスキームX証明書とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          遠心分離機のBISスキームX認証は、2018年BIS適合性評価規則の下での必須認証スキームです。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          遠心分離機のスキームX認証：主な特徴：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>インドおよび外国の製造業者に適用</li>
          <li>
            産業実験室および研究開発で見られるすべてのタイプの遠心分離機に適用
          </li>
          <li>十分な製品試験、監査、および適合性検証が必要</li>
          <li>
            上記の遠心分離機の認証に基づいて製造業者がBIS登録を申請することを可能にします。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          遠心分離機のBIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          遠心分離機のOTRは、2024年に重工業省によって発表され、スキームX認証を要求しています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          期限：すべての製造業者および輸入業者は、2026年9月1日までにスキームXの下で有効な遠心分離機のBISライセンスを取得する必要があります。「これにより、未認証の遠心分離機の販売、輸入、または全国の入札への参加が停止されます」と政府関係者は述べています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          遠心分離機のBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            安全性とコンプライアンス：高速での機械的損傷による事故を回避します。
          </li>
          <li>
            品質と信頼性：認証された遠心分離機は、高い精度と正確さで性能を発揮します。
          </li>
          <li>
            市場アクセス：遠心分離機のBISライセンスは、公共機関による調達に通常必要です。
          </li>
          <li>
            消費者信頼：遠心分離機のBISマークは、顧客に製品の品質と耐久性について情報を提供します。
          </li>
          <li>
            競争優位性：BIS認証のブランド/製造業者は、規制市場および政府入札で優先されます。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Centrifuge Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS認証スキームの下での遠心分離機の種類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          遠心分離機のスキームX認証には、以下のような様々な種類が含まれます：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>実験室用遠心分離機</li>
          <li>産業用セパレーター</li>
          <li>冷却式遠心分離機</li>
          <li>超遠心分離機</li>
          <li>ガス遠心分離機</li>
          <li>バスケット遠心分離機</li>
          <li>デカンター遠心分離機</li>
          <li>連続およびバッチ遠心分離機</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          これらすべての種類は、IS 16819:2018/ISO 12100:2010（機械の安全性 -
          設計の一般原則 -
          リスク評価およびリスク削減）などの適用されるインド規格（ISコード）を満たす必要があります。すべての種類は、品質、安全性、およびエネルギー効率について適切なインド規格（ISコード）を満たす必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          遠心分離機のBIS認証プロセス
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            関連規格の特定：遠心分離機の種類に応じた関連ISコードを参照します。
          </li>
          <li>
            製品試験：BIS認定実験室で、産業規格に従って必要な性能および安全性試験を実施します。
          </li>
          <li>工場検査：BIS当局が生産現場で品質保証システムを検査します。</li>
          <li>
            申請および文書化：技術要件、品質マニュアル、試験報告書を提供します。
          </li>
          <li>
            遠心分離機のBISライセンス発行：承認後、BISマークを付けることができます。
          </li>
          <li>
            継続的なコンプライアンス：BISは規格への適合性を確保するため、定期監査および予告なしの監査を実施します。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          非適合に対する制裁
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          2026年9月1日までに遠心分離機のBIS認証ですべての遠心分離機モデルを認証していない製造業者は、以下のリスクに直面します：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>未認証遠心分離機の販売/輸入禁止</li>
          <li>非適合機器の没収および金銭的制裁</li>
          <li>政府またはPSU入札への参加資格喪失</li>
          <li>インドでのブランドエクイティへの永続的な影響</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR
          2024における遠心分離機のBISスキームX認証の実施は、インドの産業および実験室セクターに安全性、効率性、品質をもたらすための一歩です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          製造業者、輸入業者、輸出業者は、遠心分離機のBIS認証を取得し、遠心分離機のBISライセンスを取得し、製品に遠心分離機のBISマークを付けることで、このプロセスを活用し、製品がローカル市場の規制システムおよび顧客要件を満たしていることを示します。
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
                alt="BIS Logo"
                title="BIS Logo"
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
                alt="BIS Logo"
                title="BIS Logo"
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
