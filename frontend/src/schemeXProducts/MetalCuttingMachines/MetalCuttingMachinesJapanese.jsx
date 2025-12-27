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

const MetalCuttingJapanese = () => {
  return (
    <div className="relative w-full">
      <MetalCuttingMachinesMetaTags />
      <MetalCuttingMachinesBreadcrumb />
      <MetalCuttingMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default MetalCuttingJapanese;

const MetalCuttingMachinesMetaTags = () => {
  const title = "金属切削工作機械およびその組立品のBISスキームX認証";
  const description =
    "BIS認証は、HSコード8456から8461に該当するすべての種類の金属切削工作機械および/またはその組立品、サブアセンブリ、コンポーネントに対して現在必須となっています";
  const keywords =
    "金属切削機械のBIS認証、金属切削機械のBISスキームX認証、金属切削機械のスキームX認証、金属切削機械のBIS、金属切削機械のOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "インドにおける金属切削工作機械のBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおける金属切削工作機械のBISスキームX認証についてすべて学びましょう。OTR 2024コンプライアンス、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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

      {/* Hreflang Tags for Multi-language Support */}
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-metal-cutting-machine-tools"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-outils-de-machines-de-coupe-metallique"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-metallschneidemaschinen"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-cong-cu-cat-kim-loai"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/certificacion-bis-scheme-x-para-herramientas-de-corte-de-metal"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-geumsog-jeoldan-gongjag-gigye"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-perkakas-mesin-pemotong-logam"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-utensili-per-macchine-da-taglio-metalli"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-kinzoku-setsusaku-kousaku-kikai"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/bis-fang-an-x-jin-shu-qie-xiao-ji-chuang-ren-zheng"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-tat-lohak"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-metaalsnijmachines"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-adawat-alat-qata-al-maadin"
      />
    </Helmet>
  );
};

const MetalCuttingMachinesBreadcrumb = () => {
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
                    金属切削機械のBIS認証
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

const MetalCuttingMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MetalCuttingMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const MetalCuttingMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          金属切削機械のBIS認証
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-metal-cutting-machine- tools.png"
            alt="金属切削工作機械のBISスキームX認証"
            title="金属切削工作機械のBISスキームXライセンス"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          金属切削は、機械、自動車、航空宇宙、製造業のインド産業を支える信頼性の高い加工技術です。これらの機械は、CNC旋盤やフライス盤からレーザーカッターまで多岐にわたり、世界中の産業で生産性を高く保ち、コストを低く抑えるのに役立ちます。インドでの高品質機械の需要が高まる中、政府は品質と安全性を確保するために、金属切削機械のBIS認証を義務化しました。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          金属切削機械のBIS（インド標準局）スキームX認証に従い、外国およびインドの製造業者の両方が、インド市場で販売する前にインド標準を満たす必要があります。これは、機械を安全に使用できるようにし、顧客の信頼を確保する方法です。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          この投稿では、金属切削機械のスキームX認証、金属切削機械のOTR
          2024要件、および金属切削機械のBISマークを貼付するためのBISライセンスを取得する手順について説明します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          金属切削機械にBISが必須な理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          金属切削機械は以下の分野で使用されています：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>自動車製造および自動車部品</li>
          <li>航空宇宙および防衛産業</li>
          <li>重工業および建設</li>
          <li>電子・電気産業</li>
          <li>金型製造および鋳造</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          金属切削機械のBISを取得していない企業は、以下の問題に直面する可能性があります：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>加工精度の低下と生産性の低下</li>
          <li>機械の故障と生産損失（稼働時間 vs ダウンタイム）</li>
          <li>オペレーターへの潜在的な危険</li>
          <li>公共入札および規制されたビジネスからの排除</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          BISマークは、金属切削機械が局によって設定された品質基準に準拠していることを保証します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          金属切削機械のBISスキームX認証とは？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          金属切削機械のBISスキームX認証は、2018年のBIS適合性評価規則の下にあり、製品が現在の産業機器に必要な品質基準を満たすことを確保するために策定されました。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          金属切削機械のスキームX認証の主な特徴
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>インドおよび外国の製造業者に必須</li>
          <li>インド標準の下で通知されたさまざまな金属切削機械に適用</li>
          <li>実験室でのテスト、工場検査、定期監査を含む</li>
          <li>金属切削機械のBISマークの表示を承認</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          金属切削機械のBIS OTR必須化
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          重工業省による2024年の金属切削機械の包括的技術規則（OTR）により、認証が義務化されました。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          期限：BISライセンスは、2026年9月1日からすべての金属切削機械の製造業者および輸入業者に必須となります。この日から、認証されていない機械はインドで販売、輸入、または設置することができません。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          金属切削機械のBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            製品の信頼性：機械は精度、耐久性、一貫した性能について認証されています。
          </li>
          <li>
            市場競争力：金属切削機械のBISライセンスは、多くの産業および政府の注文を獲得するために必須です。
          </li>
          <li>
            顧客の信頼：金属切削機械のBISマークは、購入者に信頼を育みます。
          </li>
          <li>法的コンプライアンス：金属切削機械のOTRおよびBISに準拠。</li>
          <li>
            グローバルな利点：外国の製造業者がインド市場にアクセスしやすくなります。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Metal Cutting Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          スキームX承認に含まれる金属切削機械の種類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          スキームX証明書には、金属切削機械の以下の種類が含まれますが、これらに限定されません：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>CNC旋盤および旋削センター</li>
          <li>フライス盤</li>
          <li>ボーリングマシン</li>
          <li>研削盤</li>
          <li>CNC切断機</li>
          <li>レーザー切断機または装置</li>
          <li>プラズマ切断機</li>
          <li>ウォータージェット切断用機械</li>
          <li>バンドソーおよびハックソー</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          これらのすべての種類の金属切削機械は、IS 17277（パート1）：2019 / ISO
          16092-1：2017（機械工具の安全性 プレス機械 パート1
          一般的な安全要件）などの関連するインド標準（ISコード）に従う必要があります。各機械モデルは、安全性、エネルギー効率、精度に関する独自のISコードを満たす必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          金属切削機械のBISライセンス手順
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            適用されるIS標準の特定：機械の種類に応じて適切な標準を選択します。
          </li>
          <li>
            製品テスト：政府が承認したBIS研究所で機械をテストに提出します。
          </li>
          <li>
            工場監査：BIS職員による直接訪問が行われ、適切な品質の生産を確保します。
          </li>
          <li>
            書類提出：技術マニュアル、テストレポート、品質保証書類を提供します。
          </li>
          <li>
            金属切削機械のBISライセンス付与：製造業者は、上記の標準に従って製品認証の下でBISマークを貼付できるようになりました。
          </li>
          <li>
            継続的なコンプライアンス：継続的なBISコンプライアンスを保証するために、監視と定期監査が実施されます。
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不遵守に対する罰則
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          金属切削機械のOTRの下での金属切削機械のBIS認証の不遵守は、以下をもたらす可能性があります：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>認証されていない機械の販売/輸入の禁止</li>
          <li>高額な罰金および製品の没収</li>
          <li>政府契約からの排除</li>
          <li>ブランドおよびビジネスの評判への長期的な損害</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          結論
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          金属切削機械のOTR（2024）における金属切削機械のBISスキームX認証は、インド産業の精度、安全性、信頼性において重要な役割を果たしています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          製造業者および輸入業者にとって、金属切削機械のBISライセンスを取得し、金属切削機械にBISマークを貼付することは、単なるコンプライアンスの行為ではなく、製品の優位性、顧客の信頼、市場の優位性という形で倍増するリターンを提供する戦略的投資です。
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
