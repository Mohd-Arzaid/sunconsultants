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

const SwitchgearandControlgearEquipmentJapanese = () => {
  return (
    <div className="relative w-full">
      <SwitchgearandControlgearEquipmentMetaTags />
      <SwitchgearandControlgearEquipmentBreadcrumb />
      <SwitchgearandControlgearEquipmentMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default SwitchgearandControlgearEquipmentJapanese;

const SwitchgearandControlgearEquipmentMetaTags = () => {
  const title = "1000ボルト以下の開閉装置および制御装置のBISスキームX認証";
  const description =
    "1000V以下の開閉装置および制御装置、ならびにその組立、サブ組立、コンポーネントのBISスキームX認証は、インドにおける品質と安全性を確保するための義務です";
  const keywords =
    "開閉装置および制御装置のBIS認証、開閉装置および制御装置のBISスキームX認証、開閉装置および制御装置のスキームX認証、開閉装置および制御装置のBIS、開閉装置および制御装置のOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "インドにおける1000ボルト以下の開閉装置および制御装置のBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおける1000V以下の開閉装置および制御装置のBISスキームX認証についてすべて学びましょう。OTR 2024コンプライアンス、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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

const SwitchgearandControlgearEquipmentBreadcrumb = () => {
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
                    1000ボルト以下の開閉装置および制御装置のBIS認証
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

const SwitchgearandControlgearEquipmentMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          1000ボルト以下の開閉装置および制御装置のBIS認証
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-switch-gear-and-control-gear-equipment.png"
            alt="1000ボルト以下の開閉装置および制御装置のBISスキームX認証"
            title="開閉装置および制御装置のBISスキームXライセンス"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          自動化と電化の時代において、計器スイッチと制御スイッチは、安全で効果的な電気システムの不可欠なコンポーネントです。住宅配線から高度な産業システムまで、これらのデバイスは電力の流れの保護、制御、絶縁を管理します。これらのデバイスの重要な位置づけにより、インド標準局（BIS）は、インドで設定された安全性と性能のベンチマークを満たすことを確保するため、スキームXの下でこれらのデバイスに必須認証を設定しました。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          重工業省は、2024年の包括技術規則の下で、2026年9月1日からインドで販売、輸入、製造されるすべての開閉装置および制御装置（≤
          1000V）にBIS認証を義務付けました。非準拠で安全でない電気機器に対処し、市場で提供される製品の基準を向上させるため、BISはスキームX認証の下で、1000ボルト以下で動作するこれらのデバイスに必須認証を作成しました。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          このブログでは、1000ボルトを超えない電圧で動作するすべての種類の開閉装置および制御装置、またはその組立/サブ組立/コンポーネントのスキームX認証に不可欠な、認証手順、その利点、範囲、目的、支持証拠、および重要な文書化について説明します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          開閉装置および制御装置のBISの重要性
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          1000ボルト以下の開閉装置および制御装置は、以下において非常に重要です：
        </h3>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>家庭用および商業用電気配電設備</li>
          <li>産業用電力管理システム</li>
          <li>再生可能エネルギー施設（太陽光/風力発電所）</li>
          <li>公共インフラプロジェクト</li>
          <li>回路保護を必要とする重要な安全アプリケーション</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          適切な認証がない場合、リスクには以下が含まれます：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>感電や火災のリスク</li>
          <li>機器の損傷と高額なダウンタイム</li>
          <li>インドの安全基準違反</li>
          <li>認証機器を必要とする入札およびプロジェクトからの排除</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          開閉装置および制御装置のスキームX認証は、これらの製品が性能、安全性、耐久性の基準を満たすことを保証します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          開閉装置および制御装置のBISスキームX認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          開閉装置および制御装置のBISスキームX認証は、2018年のBIS適合性評価規則の一部です。これは必須の製品テスト、工場検査、および適用されるインド標準への準拠を義務付けています。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          開閉装置および制御装置のスキームX認証：主な機能：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>インドおよび外国のすべての製造業者に適用</li>
          <li>
            幅広いデバイスをカバー：回路遮断器、負荷開閉器、負荷開閉スイッチ、ヒューズユニット組み合わせ、1000Vまでの制御デバイス。
          </li>
          <li>BIS認定施設での実験室テストが必要</li>
          <li>生産システムと品質の監査を含む</li>
          <li>認証後、製品に標準マークを使用する権利を付与</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          開閉装置および制御装置のBIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          開閉装置および制御装置のOTRは、2024年に重工業省によって発表され、スキームX認証を必要とします。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          期限：すべての製造業者および輸入業者は、2026年9月1日までにスキームXの下で有効な開閉装置および制御装置のBISライセンスを取得する必要があります。「これにより、認証されていない開閉装置および制御装置がインドで販売、輸入、または製造されることが停止されます」と政府関係者は述べています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          開閉装置および制御装置のBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>電気安全：短絡、過負荷、潜在的な火災の危険から保護します。</li>
          <li>
            規制遵守：開閉装置および制御装置のOTRによって義務付けられています。
          </li>
          <li>
            市場受容性：登録された製品は、すべての政府および民間プロジェクトで受け入れられます。
          </li>
          <li>
            顧客の信頼：開閉装置および制御装置のBIS標準マークは、顧客に品質と安全性への確信を与えます。
          </li>
          <li>
            競争上の優位性：ブランドの評判を向上させ、新しいビジネスの扉を開きます。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          開閉装置および制御装置のBIS認証プロセス
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            関連するインド標準の特定：1000ボルト以下の開閉装置および制御装置に関連するISコードを特定します。
          </li>
          <li>
            製品テスト：BIS承認の実験室で安全性、性能、耐久性のテストを実施します。
          </li>
          <li>工場監査：BIS検査官が工場と品質管理システムを検証します。</li>
          <li>
            文書提出：すべての詳細仕様、テストレポート、コンプライアンスファイルのサポート。
          </li>
          <li>
            BISライセンスの発行：承認された場合、BISは標準マークの使用のためのライセンスを発行します。
          </li>
          <li>
            継続的なコンプライアンス：定期的な間隔での標準と製品テストの監査により、認証が有効なままであることを保証します。
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          非準拠に対する制裁
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTRスキームの下での開閉装置および制御装置のBIS認証への非準拠には、以下の結果があります：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>認証されていない製品の製造、輸入、または販売の禁止</li>
          <li>非準拠機器は没収され、罰金が科せられます。</li>
          <li>政府入札への参加不可</li>
          <li>ビジネス関係と市場での信頼への悪影響。</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR
          2024における開閉装置および制御装置のBISスキームX認証の実施は、インドにおける安全で信頼性が高く効率的な電力管理を保証するためのステップです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          製造業者および輸入業者にとって、開閉装置および制御装置のスキームX認証は、単なる法的義務ではなく、市場へのアクセス、ブランドの信頼性、そして一般的な顧客の信頼を確保する戦略的投資でもあります。
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
