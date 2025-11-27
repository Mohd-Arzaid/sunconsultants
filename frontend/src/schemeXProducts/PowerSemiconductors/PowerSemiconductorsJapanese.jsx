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

const PowerSemiconductorsJapanese = () => {
  return (
    <div className="relative w-full">
      <PowerSemiconductorsMetaTags />
      <PowerSemiconductorsBreadcrumb />
      <PowerSemiconductorsMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default PowerSemiconductorsJapanese;

const PowerSemiconductorsMetaTags = () => {
  const title = "電力半導体コンバーターのBISスキームX認証";
  const description =
    "BISスキームX認証は、インドにおける品質と安全性を確保するため、すべての種類の電力半導体コンバーターおよびその組立品、サブアセンブリ、コンポーネントに適用されます";
  const keywords =
    "電力半導体コンバーターのBIS認証、電力半導体コンバーターのBISスキームX認証、電力半導体コンバーターのスキームX認証、電力半導体コンバーターのBIS、電力半導体コンバーターのOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "インドにおける電力半導体コンバーターのBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおける電力半導体コンバーターのBISスキームX認証についてすべて学びましょう。OTR 2024コンプライアンス、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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

const PowerSemiconductorsBreadcrumb = () => {
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
                    電力半導体コンバーターのBIS認証
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

const PowerSemiconductorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PowerSemiconductorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const PowerSemiconductorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          電力半導体コンバーターのBIS認証
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Power-Semiconductor-Converter.png"
            alt="電力半導体コンバーターのBISスキームX認証"
            title="電力半導体コンバーターのBISスキームXライセンス"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          電力半導体コンバーターは、さまざまなアプリケーションにおいて、電気エネルギーを一つの形式から別の形式へ効果的に実行および変更することを可能にします。これらのアプリケーションには、再生可能エネルギー、電気自動車、産業オートメーション、および消費者向け電子機器が含まれます。これらは、電気および電子機器の基盤として機能します。これらのデバイスが国のエネルギーおよび産業セクターにおいて継続的に拡大する重要性と意義により、インド標準局（BIS）は、スキームX認証の枠組みの下で電力半導体コンバーターの認証を組み込みました。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          重工業省によって与えられた命令に従い、2026年9月1日までに、国内または海外で事業を展開しているかどうかに関わらず、あらゆる種類の製造業者が、電力半導体コンバーターおよびそのサブアセンブリ、コンポーネントのBIS認証に準拠することが期待されています。電力半導体コンバーターのBISスキームX認証は、規制認証スキームであり、安全性、品質、およびグローバルに競争力のある基準の向上を通じてインドの製造業を向上させるためのステップです。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          このブログは、すべてのサブアセンブリ、コンポーネント、および/または電力半導体コンバーターの種類に対するスキームX認証に関する文書化、範囲と重要性、認証プロセス、利点、およびその他の情報について必要な情報を提供するのに役立ちます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          電力半導体コンバーターに対するBISの重要性
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          電力半導体コンバーターのアプリケーションには以下が含まれます：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>太陽光および風力発電プロジェクト</li>
          <li>EV充電ステーションおよびドライブ</li>
          <li>工場オートメーションおよびロボティクス</li>
          <li>消費者向け電子機器およびPSU</li>
          <li>送電および配電ネットワーク</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証がない場合、リスクには以下が含まれます：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>電気的損傷および過熱</li>
          <li>安全でない状態および機器の損傷</li>
          <li>エネルギー効率の低下</li>
          <li>プロジェクトおよび政府入札からの否定的な結果</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          スキームX認証を取得している電力半導体コンバーターは、この製品が性能、安全性、および信頼性について厳格なインド標準に準拠していることを示しています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          電力半導体コンバーターのBISスキームX証明書とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          電力半導体コンバーターのBISスキームX認証は、2018年のBIS適合性評価規則の下にあり、製品がインド市場に入る前に厳格なテスト、検査、およびコンプライアンス審査を受けることを保証します。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          主な特徴：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>すべての外国およびインドの製造業者に必須</li>
          <li>
            電力半導体デバイス、ゲートドライブ設計、および受動コンポーネントに関する包括的な導入を含む。
          </li>
          <li>BIS認定研究所での必須製品テスト</li>
          <li>都市作業、および政府プロジェクトおよび入札からの除外。</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          認証は、電力半導体コンバーターが性能、安全性、および耐久性について厳格なインド標準に準拠していることを保証します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          電力半導体コンバーターのBISスキームX認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          電力半導体コンバーターのBISスキームX認証は、2018年のBIS適合性評価規則の下に含まれており、製品がここで市場に投入される前に、インドで厳格なテスト、検査、およびコンプライアンスが必要になることを示しています。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          主な特徴：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>インドおよび外国の製造業者に必須</li>
          <li>
            さまざまな電力半導体アプリケーション（AC-DC、DC-DC、DC-AC、およびAC-AC）を含む
          </li>
          <li>BIS承認研究所による電力および安全性認証を必須とする</li>
          <li>工場監査および品質システムを含む</li>
          <li>
            製品がBISライセンスも取得している場合、BIS標準マークを使用する権利を付与する。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          電力半導体コンバーターのBIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          電力半導体コンバーターの新しい包括的技術規則（OTR）2024が重工業省によって発行されました。このOTR命令は、品質と消費者の安全性を確保するために、この製品に対してスキームX認証を義務付けています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          期限：すべての製造業者および輸入業者は、2026年9月1日までに認証を取得することが義務付けられています。この期限日以降、認証されていないコンバーターは、インドで製造、販売、または輸入することができません。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          電力半導体コンバーターのBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            製品の安全性：過熱、火災事故、および短絡のリスクを軽減します。
          </li>
          <li>
            エネルギー効率：最適化された性能と省エネルギー基準への適合を保証します。
          </li>
          <li>
            市場アクセス：電力半導体コンバーターのOTRは、インドでの市場アクセスに認証を必要とします。
          </li>
          <li>競争上の優位性：政府および民間の入札は認証製品を優先します。</li>
          <li>
            顧客の信頼：BIS標準マークは、信頼性、安全性、および品質を示します。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          電力半導体コンバーターのBIS認証プロセス
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            関連するIS標準の特定：コンバーターの種類に応じて関連するISコードを参照します。
          </li>
          <li>
            製品テスト：BIS認定研究所で、業界標準に従って必要な性能および安全性テストを実施します。
          </li>
          <li>工場検査：BIS職員による生産現場での品質保証システムの検査。</li>
          <li>
            申請および文書化：技術要件、品質マニュアル、およびテストレポートを提供します。
          </li>
          <li>
            電力半導体コンバーターのBISライセンス発行：承認後、BISマークを貼付できます。
          </li>
          <li>
            継続的なコンプライアンス：BISは標準へのコンプライアンスについて監視および予告なしの監査を実施します。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不遵守に対する制裁
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          2026年9月1日までに、電力半導体コンバーターのBIS認証で認証されたすべてのモデルのコンバーターを持っていない製造業者は、以下のリスクに直面します：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>認証されていないコンバーターの販売/輸入の禁止</li>
          <li>非準拠機器の没収および金銭的制裁</li>
          <li>これにより、政府またはPSUの入札に参加する資格がなくなります</li>
          <li>インドでのブランドエクイティが永続的に影響を受ける</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR
          2024における電力半導体コンバーターのBISスキームX認証の実装は、急速に成長しているインドのエネルギーおよび電子セクターに安全性、効率性、および品質をもたらすためのステップです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          製造業者、輸入業者、および輸出業者は、電力半導体コンバーターのBIS認証を取得し、電力半導体コンバーターのBISライセンスを取得し、製品に電力半導体コンバーターのBISマークを貼付することで、このプロセスを活用し、製品がローカル市場の規制システムおよび顧客要件を満たしていることを示します。
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
              BIS（CRS）登録
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
