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

const RubberAndPlasticsMachineryJapanese = () => {
  return (
    <div className="relative w-full">
      <RubberAndPlasticsMachineryMetaTags />

      <RubberAndPlasticsMachineryBreadcrumb />
      <RubberAndPlasticsMachineryMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default RubberAndPlasticsMachineryJapanese;

const RubberAndPlasticsMachineryMetaTags = () => {
  const title = "ゴム・プラスチック機械のBISスキームX認証";
  const description =
    "ゴム・プラスチック機械、その組立、サブ組立、コンポーネントのBISスキームX認証は、品質、安全性、顧客の信頼を確保するためにスキームXの下で必須です";
  const keywords =
    "ゴム・プラスチック機械のBIS認証、ゴム・プラスチック機械のBISスキームX認証、ゴム・プラスチック機械のスキームX認証、ゴム・プラスチック機械のBIS、ゴム・プラスチック機械のOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "インドにおけるゴム・プラスチック機械のBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおけるゴム・プラスチック機械のBISスキームX認証についてすべて学びましょう。OTR 2024コンプライアンス、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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

const RubberAndPlasticsMachineryBreadcrumb = () => {
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
                    ゴム・プラスチック機械のBIS認証
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

const RubberAndPlasticsMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RubberAndPlasticsMachineryMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          ゴム・プラスチック機械のBIS認証
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-machinery-for-working-rubber-and-plastics.png"
            title="ゴム・プラスチック機械のBISスキームXライセンス"
            alt="ゴム・プラスチック機械のBISスキームX認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          インドの産業セクターは急速に変化しており、標準化された、安全で高性能な機械への需要が高まっています。特に、ゴムとプラスチックを加工する機械は、自動車、建設、包装、消費財など、さまざまな産業にとって極めて重要です。製品の安全性、製品の消費者保護をさらに向上させ、品質保証を促進するために、インド標準局（BIS）は、スキームXコンプライアンスの認証を義務付ける規制フレームワークを確立しました。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          重工業省は、包括技術規制（OTR）命令2024の下で、国内および国際的なすべての製造業者に対し、特定の機械カテゴリーについてスキームXの下でBIS認証を取得することを義務付けています。これには、ゴムとプラスチックを加工するすべての種類の機械、その組立、サブ組立、コンポーネントが含まれます。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          このブログでは、スキームX認証の重要性と関連性、認証プロセス、ゴム・プラスチック機械およびそのすべての組立、サブ組立、コンポーネントに必要な文書に関連する利点について説明します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ゴム・プラスチック機械のBISの重要性
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ゴム・プラスチック機械は、以下の分野で広く使用されています：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>自動車部品製造（タイヤ、ホース、シール、ダッシュボード）</li>
          <li>プラスチック包装および消費財</li>
          <li>医療用品および医薬品包装</li>
          <li>建設およびインフラ建築材料</li>
          <li>電気・電子部品</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ゴム・プラスチック機械のBISがない場合、業界は以下に直面する可能性があります：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>運営の非効率性と頻繁な故障</li>
          <li>オペレーターとエンドユーザーへの安全上の危険</li>
          <li>低品質の製品収量</li>
          <li>政府入札または大規模プロジェクトからの失格</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          ゴム・プラスチック機械のBISスキームX認証は、機械が厳格なインド規格に準拠していることを保証し、機械をより安全で、より耐久性があり、市場準備が整ったものにします。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ゴム・プラスチック機械のBISスキームX証明書とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          インドにおけるゴム・プラスチック機械のBISスキームX認証は、BIS適合性評価規則2018の下にあります。これは、ゴムおよびプラスチック加工機械の性能および安全基準を確立します。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          ゴム・プラスチック機械のスキームX認証：主な特徴：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>インドおよび外国の製造業者に必須</li>
          <li>
            通知されたISコードに従って、幅広いゴム・プラスチック機械をカバー
          </li>
          <li>製品のテスト、製造プロセスの監査、継続的な監視が必要です。</li>
          <li>認証時にBIS標準マークの使用。</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          この証明書は、機械の安全性、エネルギー効率、産業およびエンドユーザー向けの信頼性の高い生産を保証します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ゴム・プラスチック機械のBIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ゴム・プラスチック機械のOTRは、2024年に重工業省によって発表され、スキームX認証を要求しています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          期限：すべての製造業者および輸入業者は、2026年9月1日までにスキームXの下で有効なゴム・プラスチック機械のBISライセンスを取得する必要があります。「これにより、認証されていないゴム・プラスチック機械がインドで製造、輸入、または販売されることがなくなります」と政府関係者は述べています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ゴム・プラスチック機械のBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>品質保証：性能と耐久性に関するインド規格に準拠。</li>
          <li>
            市場競争力：認証製品は、公共部門および民間部門の調達で優先されます。
          </li>
          <li>
            顧客の信頼：購入者は、ゴム・プラスチック機械のBIS認証付き機械を購入する際に、より大きな信頼を持っています。
          </li>
          <li>
            法的コンプライアンス：ゴム・プラスチック機械のOTRに準拠した後は、罰則や制限を受けることはありません。
          </li>
          <li>
            グローバルな優位性：認証を持つ国際的なOEMは、インド市場への道を見つけやすくなります。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS認証スキームの下でカバーされるゴム・プラスチック機械
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ゴム・プラスチック機械のスキームX認証には、以下のような幅広い機器が含まれます：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>射出成形機</li>
          <li>押出機およびブロー成形機</li>
          <li>ゴム混練機および内部ミキサー</li>
          <li>カレンダー機</li>
          <li>圧縮成形用プレス</li>
          <li>リサイクルおよび造粒機</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          各カテゴリーは、IS/ISO 20430:
          2020（プラスチックおよびゴム機械-射出成形機-安全要件）などの適用可能なインド規格（ISコード）に準拠する必要があります。すべての機械タイプは、安全性、性能、信頼性の面で適用可能なインド規格を満たす必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ゴム・プラスチック機械のBIS認証プロセス
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>関連規格の特定：機械のタイプに関連するISコードを選択します。</li>
          <li>
            製品テスト：BIS認定の実験室で、業界標準に従って必要な性能および安全性テストを実施します。
          </li>
          <li>工場検査：BIS職員による生産現場での品質保証システムの検査。</li>
          <li>
            申請および文書化：技術要件、品質マニュアル、テストレポートを提供します。
          </li>
          <li>
            ゴム・プラスチック機械のBISライセンス発行：承認後、BISマークを付けることができます。
          </li>
          <li>
            継続的なコンプライアンス：BISは、規格への準拠について予告なしの監査を実施します。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不遵守に対する制裁
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          2026年9月1日までに、ゴム・プラスチック機械のBIS認証ですべてのモデルのゴム・プラスチック機械を認証していない製造業者は、以下のリスクに直面します：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>認証されていないゴム・プラスチック機械の販売/輸入の禁止</li>
          <li>不遵守機器の没収および金銭的制裁</li>
          <li>これにより、政府入札またはPSUの資格がなくなります</li>
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
          2024におけるゴム・プラスチック機械のBISスキームX認証の実施は、インドの産業セクターに安全性、効率性、品質をもたらすためのステップです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          製造業者、輸入業者、輸出業者は、ゴム・プラスチック機械のBIS認証を取得し、ゴム・プラスチック機械のBISライセンスを取得し、製品にゴム・プラスチック機械のBISマークを付けることで、このプロセスを活用し、製品がローカル市場の規制システムと顧客要件を満たしていることを示しています。
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
