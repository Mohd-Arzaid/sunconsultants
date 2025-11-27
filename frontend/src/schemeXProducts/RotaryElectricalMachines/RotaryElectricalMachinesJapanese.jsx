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

const RotaryElectricalMachinesJapanese = () => {
  return (
    <div className="relative w-full">
      <RotaryElectricalMachinesMetaTags />
      <RotaryElectricalMachinesBreadcrumb />
      <RotaryElectricalMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default RotaryElectricalMachinesJapanese;

const RotaryElectricalMachinesMetaTags = () => {
  const title = "回転電気機械のBISスキームX認証";
  const description =
    "発電機などの回転電気機械、および/またはその組立、サブ組立、コンポーネントのBISスキームX認証は、重要な産業機器の品質と安全性に向けた重要な規制措置です";
  const keywords =
    "回転電気機械のBIS認証、回転電気機械のBISスキームX認証、回転電気機械のスキームX認証、回転電気機械のBIS、回転電気機械のOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle = "インドにおける回転電気機械のBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおける回転電気機械のBISスキームX認証についてすべて学びましょう。OTR 2024コンプライアンス、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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

const RotaryElectricalMachinesBreadcrumb = () => {
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
                    回転電気機械のBIS認証
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

const RotaryElectricalMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RotaryElectricalMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const RotaryElectricalMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          回転電気機械のBIS認証
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Rotary-electrical-machines.png"
            alt="回転電気機械のBISスキームX認証"
            title="回転電気機械のBISスキームXライセンス"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          発電機、モーター、オルタネーターなどの回転電気機械は、産業の運営、電力の生成、さらには情報技術インフラやその他のグローバルレベルのニーズを満たすなど、数多くの重要な活動で使用される重要な機械の種類です。これらの機械は、機械エネルギーを電気に変換するか、その逆を行うため、電力や輸送、製造、商業複合施設などのセクターで連携して機能します。このような機械は重要であり、したがって、その品質、信頼性、安全性が重要です。インドでは、BISは他の電気機器とともに、回転電気機械とその組立およびコンポーネントのスキームX認証でこの問題に対処しています。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          包括技術規制令2024において、重工業省は、回転機械およびその他の関連機器を製造するすべての製造業者（外国または国内）が、2026年9月1日までにスキームX認証に準拠しなければならないと述べています。この規制セットには、発電機、オルタネーター、同期および非同期モーター、およびすべての機械の組立、サブ組立、コンポーネントを含む、回転電気機械のすべての配列が記載されています。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          このブログでは、あらゆる種類の回転電気機械のスキームX認証の重要性、範囲、認証手順、利点、およびその他の関連文書について説明します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          回転電気機械のBISの重要性
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          回転電気機械は以下で広く使用されています：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>電力の発電と配電</li>
          <li>産業自動化と機器</li>
          <li>輸送（鉄道、船舶、電気自動車）</li>
          <li>石油、ガス、エネルギーセクター</li>
          <li>消費者および商業用途の電気機器</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証なしで発生する可能性のあるリスクには以下が含まれます：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>電気的危険、短絡、火災の危険</li>
          <li>機械的故障と高額なダウンタイム</li>
          <li>エネルギーの浪費</li>
          <li>政府の入札とプロジェクトからの禁止</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          回転電気機械のスキームX認証は、これらの製品が厳格な品質、効率、安全性基準を満たしていることを保証します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          回転電気機械のBISスキームX認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          回転電気機械のBISスキームX認証は、BIS適合性評価規則2018の下での政府規制スキームです。これは、インド市場に入る前に、インド標準に適合する商品を認証します。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          回転電気機械のスキームX認証：主な機能：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>インドおよび外国の製造業者に適用</li>
          <li>
            モーター、発電機、オルタネーター、およびその他の回転電気機械に適用
          </li>
          <li>十分な製品テスト、監査、コンプライアンス検証が必要</li>
          <li>品質管理を確保するための工場検査</li>
          <li>
            上記の回転電気機械の認証に基づいて、製造業者がBIS登録を申請することを可能にします。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          回転機械のBIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          回転電気機械のOTRは、2024年に重工業省によって発表され、スキームX認証を要求しています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          期限：すべての製造業者および輸入業者は、2026年9月1日までにスキームXの下で有効な回転電気機械のBISライセンスを取得する必要があります。「これにより、認証されていない回転電気機械の販売、輸入、または全国の入札への参加が停止されます」と政府関係者は述べています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          回転電気機械のBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            安全性とコンプライアンス：厳格な基準により、電気的および機械的危険を回避します。
          </li>
          <li>
            品質と信頼性：認証された回転電気機械は、高い精度と正確さで性能を発揮します。
          </li>
          <li>
            市場アクセス：回転電気機械のBISライセンスは、公共機関による調達に通常必要です。
          </li>
          <li>
            消費者の信頼：回転電気機械のBISマークは、顧客に製品の品質と耐久性について情報を提供します。
          </li>
          <li>
            競争上の優位性：BIS認証されたブランド/製造業者は、規制された市場および政府の入札で好まれます。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS認証スキームの下での回転電気機械の種類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          回転電気機械のスキームX認証には、以下のようなさまざまな種類が含まれます：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ACおよびDCモーター</li>
          <li>発電機とオルタネーター</li>
          <li>ターボ発電機と水力発電機</li>
          <li>産業およびユーティリティで使用される特殊なタイプの回転機械</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          これらすべてのタイプは、IS 16819:2018/ISO 12100:2010（機械の安全性
          設計の一般原則 -
          リスク評価とリスク低減）などの適用されるインド標準（ISコード）を満たす必要があります。すべてのバリエーションは、品質、安全性、エネルギー効率について適切なインド標準（ISコード）を満たす必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          回転電気機械のBIS認証プロセス
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            関連標準の特定：回転電気機械のタイプに関連するISコードを参照してください。
          </li>
          <li>
            製品テスト：BIS認定の実験室で、業界標準に従って必要な性能および安全性テストを実施します。
          </li>
          <li>工場検査：BIS職員による生産現場での品質保証システムの検査。</li>
          <li>
            申請と文書化：技術要件、品質マニュアル、テストレポートを提供します。
          </li>
          <li>
            回転電気機械のBISライセンスの発行：承認後、BISマークを配置できます。
          </li>
          <li>
            継続的なコンプライアンス：BISは標準へのコンプライアンスについて検査および予告なしの監査を実施します。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          非遵守に対する制裁
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          2026年9月1日までに回転電気機械のBIS認証で認証されていないすべての回転電気機械モデルを持つ製造業者は、以下のリスクに直面します：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>認証されていない回転電気機械の販売/輸入の禁止</li>
          <li>非準拠機器の没収および金銭的制裁</li>
          <li>これにより、政府またはPSUの入札の資格がなくなります</li>
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
          2024における回転電気機械のBISスキームX認証の実装は、インドの電気産業セクターに安全性、効率、品質をもたらすためのステップです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          製造業者、輸入業者、輸出業者は、回転電気機械のBIS認証を確保し、回転電気機械のBISライセンスを取得し、製品に回転電気機械のBISマークを配置することで、このプロセスを活用し、製品がローカル市場の規制システムと顧客要件を満たしていることを示しています。
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
              外国製造のためのBISマーク（ISIライセンス）
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
              インド製造のためのISIマーク（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
