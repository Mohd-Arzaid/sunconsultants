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
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentJapanese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentJapanese";
import ServiceAuthorJapanese from "@/components/manual/ServiceAuthor/ServiceAuthorJapanese";
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

const GearsGearingsandTransmissionJapanese = () => {
  return (
    <div className="relative w-full">
      <GearsGearingsandTransmissionMetaTags />
      <GearsGearingsandTransmissionBreadcrumb />
      <GearsGearingsandTransmissionMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default GearsGearingsandTransmissionJapanese;

const GearsGearingsandTransmissionMetaTags = () => {
  const title = "歯車、歯車システム、および伝動要素のBISスキームX認証";
  const description =
    "歯車および歯車システム、歯付き車輪、チェーンスプロケット、伝動要素、ボールねじまたはローラー、ギアボックスおよび速度変換器のBISスキームX認証は、産業機械セクターにとって重要な規制のマイルストーンです";
  const keywords =
    "歯車、歯車システム、および伝動要素のBIS認証, 歯車、歯車システム、および伝動要素のBISスキームX認証, 歯車、歯車システム、および伝動要素のスキームX認証, 歯車、歯車システム、および伝動要素のBIS, 歯車、歯車システム、および伝動要素のOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Sun Certification India オペレーション責任者";
  const ogTitle =
    "インドにおける歯車、歯車システム、および伝動要素のBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおける歯車、歯車システム、および伝動要素のBISスキームX認証についてすべて学びましょう。OTR 2024への準拠、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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

const GearsGearingsandTransmissionBreadcrumb = () => {
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
                    歯車、歯車システム、および伝動要素のBIS認証
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

const GearsGearingsandTransmissionMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <GearsGearingsandTransmissionMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          歯車、歯車システム、および伝動要素のBISスキームX認証
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-gears-and-gearing-toothed-wheels-chain-sprocket.png"
            alt="歯車、歯車システム、および伝動要素のBISスキームX認証"
            title="歯車および歯車システム、歯付き車輪、チェーンスプロケットのBISスキームXライセンス"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          絶えず変化する産業の世界において、機械部品の安全性と品質は極めて重要です。インド標準局によると、インドで製造されるすべての機械および電気部品は、BISによって設定され、機械および電気機器の安全性（オムニバス技術規制）命令2024で説明されている安全性と標準に準拠する必要があります。この命令には、歯車、歯車システム要素、あらゆる産業の機械機能にとって重要な各種伝動部品などの機械モジュール、部品、組立部品が含まれます。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          すべての製造業者（国内および海外）は、命令によって設定され、重工業省によって制度化された2026年9月1日のスキームX認証の標準要件を満たすことが義務付けられています。歯車およびギアボックス産業のすべての製造業者、および関連するすべての伝動要素は、市場にアクセスし、産業の標準を確立するために、この規制に準拠する必要があります。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          このブログには、歯車、ギアボックス、および関連する伝動部品の統合の認証に関するすべての重要な情報、その価値、範囲、認証の利点、および必要な文書が含まれています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          歯車、歯車システム、および伝動要素にとってスキームXが重要な理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらの機械部品は以下において重要です：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>自動車、トラック、鉄道</li>
          <li>航空および防衛機器</li>
          <li>製造機械およびロボティクス</li>
          <li>エネルギーシステムおよび発電</li>
          <li>海洋（重工業および軽工業）</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          歯車、歯車システム、および伝動要素のBIS認証がない場合、リスクは非常に高くなります：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>歯車の故障による損害と高額なダウンタイム</li>
          <li>輸送および重工業における健康リスク</li>
          <li>非効率的なエネルギー伝達およびエネルギー散逸</li>
          <li>公共入札および調達機会へのアクセス制限</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          最終的に、歯車、歯車システム、および伝動要素のスキームX認証は、耐久性の向上、運用リスクの最小化、国内標準との一貫性を提供します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          歯車、歯車システム、および伝動要素のBISスキームX認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          歯車、歯車システム、および伝動要素のBISスキームX認証は、BIS適合性評価規則2018の一部です。これは、設計、材料品質、および運用性能に対する厳格なベンチマークを定義しています。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          スキームX認証の主な特徴：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>すべての製造業者（インドおよび海外）に必須</li>
          <li>各種歯車、シャフト、伝動部品に適用可能</li>
          <li>BIS承認の研究所で製品テストを実施</li>
          <li>品質管理を検証するための工場監査を含む</li>
          <li>製品が認証された後、BIS標準マークを使用する権利</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          歯車、歯車システム、および伝動要素のOTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          重工業省は、歯車、歯車システム、および伝動要素に関するオムニバス技術規制（OTR）2024を採用しました。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          準拠日：すべての製造業者および輸入業者は、2026年9月1日までに認証を取得する必要があります。この日付以降、認証されていない商品は、インドで製造、輸入、または販売することはできません。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          歯車、歯車システム、および伝動要素のBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            安全性と信頼性：重要なシステムアプリケーションでの監視されていない故障を回避。
          </li>
          <li>
            市場競争力：認証された企業は、公共および民間の入札で優先権を享受します。
          </li>
          <li>
            顧客の信頼：購入者は、正式なBIS承認を持つ製品に自信を持っています。
          </li>
          <li>
            法的準拠：歯車、歯車システム、および伝動部品のOTRによる罰則なし。
          </li>
          <li>
            グローバル市場への参入：海外製造業者がインド市場に簡単に参入できるようにします。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Gears Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          含まれる歯車および伝動部品の種類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          スキームX認証は、以下のような各種歯車、歯車システム、および伝動要素に適用されます：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>平歯車、はすば歯車、ベベルギア、ウォームホイール</li>
          <li>歯車シャフトおよびカップリング</li>
          <li>ギアボックスおよび伝動部品</li>
          <li>チェーンおよびベルト駆動コンポーネント</li>
          <li>
            航空宇宙およびロボティクス、高級車、オートバイで使用される歯車。
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          すべてのタイプは、IS 16819:2018/ISO 12100:2010（機械の安全性 -
          設計のための一般原則 -
          リスク評価およびリスク低減）などのインド標準（ISコード）に準拠する必要があります。各製品タイプは、設計および性能に関して適切なインド標準に準拠する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          歯車、歯車システム、および伝動要素のBIS認証手順
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          適用される標準の特定：歯車/伝動製品に適用されるISコードを確認してください。
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            製品テスト：BIS認定の研究所で材料および性能テストを実施します。
          </li>
          <li>工場監査：BISが生産現場で品質システム監査を実施します。</li>
          <li>
            文書の提出：技術詳細、テスト文書、品質マニュアルを共有します。
          </li>
          <li>
            ライセンス付与：BISは、文書の正確性を確認した後、認証を付与し、標準マークの使用を許可します。
          </li>
          <li>
            継続的な準拠：認証の有効性を維持するための定期的な監査および再テスト。
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不遵守に対する罰則
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          歯車、歯車システム、および伝動要素のOTRの下での歯車、歯車システム、および伝動要素のBIS認証への不遵守は、以下をもたらします：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>認証されていないアイテムの販売および製造の禁止</li>
          <li>商品の没収および金銭的罰金</li>
          <li>政府の入札および契約の資格不適合</li>
          <li>長期的な評判の損失</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          結論
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          歯車、歯車システム、および伝動要素のOTR（2024）の下で通知された歯車、歯車システム、および伝動要素のBISスキームX認証は、インドのエンジニアリングおよび製造構造の品質と安全性の標準向上への重要なステップとなります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          インド市場での販売を求める歯車、歯車システム、および動力伝動ソリューションの製造業者および輸入業者は、歯車、歯車システム、および動力伝動システムのスキームX認証を適用することで、利益が増加し、市場利益への扉が開かれることを発見するでしょう。
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
              当社のサービス
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
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
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