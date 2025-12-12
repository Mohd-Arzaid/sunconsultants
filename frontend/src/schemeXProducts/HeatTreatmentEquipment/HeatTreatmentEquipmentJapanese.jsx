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

const HeatTreatmentEquipmentJapanese = () => {
  return (
    <div className="relative w-full">
      <HeatTreatmentEquipmentMetaTags />
      <HeatTreatmentEquipmentBreadcrumb />
      <HeatTreatmentEquipmentMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default HeatTreatmentEquipmentJapanese;

const HeatTreatmentEquipmentMetaTags = () => {
  const title = "熱処理設備のBISスキームX認証";
  const description =
    "BISスキームX認証は、温度変化および/またはその組立、サブ組立、コンポーネントを含むプロセスを通じて材料を処理するすべての種類の機械がBIS認証を受ける必要があることを義務付けています";
  const keywords =
    "熱処理設備のBIS認証、熱処理設備のBISスキームX認証、熱処理設備のスキームX認証、熱処理設備のBIS、熱処理設備のOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle = "インドにおける熱処理設備のBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおける熱処理設備のBISスキームX認証についてすべて学びましょう。OTR 2024への準拠、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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

const HeatTreatmentEquipmentBreadcrumb = () => {
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
                    熱処理設備のBIS認証
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

const HeatTreatmentEquipmentMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <HeatTreatmentEquipmentMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const HeatTreatmentEquipmentMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          熱処理設備のBIS認証
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Heat-treatment-of-material.png"
            title="材料熱処理のBISスキームXライセンス"
            alt="熱処理設備のBISスキームX認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          熱処理設備は、自動車、航空宇宙、鋳造、鍛造、重工業などの産業において最も重要な用途の一つです。これは、焼きなまし、冷却、硬化、焼戻しなどの操作を通じて金属の物理的および機械的特性を変更する装置です。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          その重要性を考慮し、インド標準局（BIS）は、スキームX認証の下で熱処理設備のBIS認証を義務付けています。これにより、インドおよびグローバルな製造業者が、同国で設備を販売する前に厳格なインド標準に準拠することが保証されます。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          この投稿では、熱処理設備のBISスキームX認証の重要性、熱処理設備のOTR、および熱処理設備のBISマークを使用した熱処理設備のBISライセンスを取得するプロセスについて説明します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Heat Treatment Equipment is Mandatory Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          熱処理設備のBISの重要性
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          熱処理炉は一般的に以下で使用されます：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>金属および冶金産業</li>
          <li>自動車および航空宇宙生産</li>
          <li>工具および金型製造</li>
          <li>エネルギーおよびその他の重機械産業</li>
          <li>防衛および精密エンジニアリング</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          熱処理設備のBIS認証がない場合、低品質の機械が生じ、以下を引き起こす可能性があります：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>過熱または不適切な処理</li>
          <li>最終製品のメカニズムおよび構造の故障</li>
          <li>エネルギー消費の増加および効率の欠如</li>
          <li>オペレーターへの安全上の危険</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          BIS認証は、設備が産業の性能要件に従って適切かつ安全に機能するだけでなく、環境基準も満たすことを保証します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          熱処理設備のBISスキームX認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          スキームX -
          熱処理設備は、インド政府鉄鋼省と連携しており、2018年インドBIS適合性評価規則の下で義務的な認証スキームです。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          熱処理設備のスキームX認証：主な特徴：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>インドおよび外国の製造業者に義務付けられています</li>
          <li>ほとんどの種類の熱処理設備および燃焼設備に適用可能</li>
          <li>
            製品テスト、工場検査、継続的なコンプライアンス監査を含みます。
          </li>
          <li>製造業者はBIS標準マークの使用が許可されています。</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          熱処理設備のBIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          重工業省は2024年に熱処理設備の包括的技術規則（OTR）を発行し、スキームXへの準拠が義務付けられています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          期限：すべての製造業者および輸入業者は、2026年9月1日までに熱処理設備の有効なBISライセンスを取得する必要があります。この日付以降、認証されていない熱処理設備は、販売、輸入、または公共入札への入札の資格がありません。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          熱処理設備のBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>運転安全性：過熱、不均一な処理、設備の損傷から保護します。</li>
          <li>
            製品の信頼性：処理されたアイテムが硬度、耐久性、靭性の仕様を満たすことを保証します
          </li>
          <li>
            エネルギー効率：認証された設備は最適なエネルギー使用のためにテストされ、運転コストを削減します。
          </li>
          <li>
            市場アクセス：熱処理設備のBISマークは、公共調達および政府入札でしばしば必須です。
          </li>
          <li>
            グローバルな優位性：グローバルブランドは、熱処理設備のBISライセンスを取得することで、インド市場への容易なアクセスを得ることができます。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS認証スキームの下での熱処理設備の種類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          熱処理設備のBISスキームX認証には、以下のような多数の機械が含まれます：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>焼きなまし炉</li>
          <li>冷却炉</li>
          <li>硬化および焼戻し炉</li>
          <li>連続熱処理用ロータリー炉</li>
          <li>浸炭および窒化炉</li>
          <li>誘導および電気熱処理設備</li>
          <li>ガスおよびオイル燃料熱処理装置</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          各タイプは、IS 16819:2018/ISO
          12100:2010などの関連するインド標準（ISコード）に準拠する必要があります。性能特性、材料グレード、省エネルギー機能は、各設備タイプの関連するインド標準（ISコード）に準拠する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          熱処理設備のBIS認証プロセス
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            関連標準の特定：熱処理設備のタイプに応じた関連するISコードを参照します。
          </li>
          <li>
            BIS認定ラボでのテスト：性能、安全性、効率のテストを実施します。
          </li>
          <li>工場検査：BISが品質管理システムおよび生産施設を検査します。</li>
          <li>
            申請および文書化：結果、実施されたテスト、技術仕様、品質マニュアルを提供します。
          </li>
          <li>
            熱処理設備のBISライセンス発行：承認により、熱処理設備のBISマークの使用が可能になります。
          </li>
          <li>
            継続的なコンプライアンス：品質基準を維持するために、定期的な監査および検査が実施されます。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不遵守に対する制裁
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          熱処理設備のOTRが2026年9月1日までに満たされない場合：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>認証されていない設備の販売/輸入の禁止</li>
          <li>罰金および製品の没収</li>
          <li>政府およびPSU入札の資格喪失</li>
          <li>インド市場での長期的なブランドエクイティの損失</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR
          2024の下での熱処理設備のスキームX認証の義務化は、インドの産業基準を向上させる重要なマイルストーンです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          熱処理設備の製造業者、輸入業者、輸出業者にとって、熱処理設備のBIS認証を取得し、熱処理設備のBISライセンスを取得し、熱処理設備のBIS標準マークを使用するプロセスは、単にコンプライアンスの問題ではなく、規制された市場で競争力のある安全で信頼性の高い製品を構築することです。
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
              外国製造業者向けBISマーク（ISIライセンス）
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
                alt="BISCRS logo"
                title="BISCRS logo"
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
                alt="PlasticWasteManagement logo"
                title="PlasticWasteManagement logo"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
                alt="ISIMark logo"
                title="ISIMark logo"
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
