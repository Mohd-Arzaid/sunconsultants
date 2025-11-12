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

const PumpsAndLiquidElevatorsJapanese = () => {
  return (
    <div className="relative w-full">
      <PumpsAndLiquidElevatorsMetaTags />
      <PumpsAndLiquidElevatorsJapanesePageBreadcrumb />
      <PumpsAndLiquidElevatorsJapanesePageMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default PumpsAndLiquidElevatorsJapanese;

const PumpsAndLiquidElevatorsMetaTags = () => {
  const title = "ポンプおよび液体エレベーターのBISスキームX認証";
  const description =
    "包括的技術規則（OTR）2024の下でのポンプおよび液体エレベーターのBISスキームX認証は、2026年9月までにすべての種類のポンプおよび液体エレベーターがスキームX認証に準拠することを義務付けています";
  const keywords =
    "ポンプのBIS認証、ポンプのBISスキームX認証、ポンプのスキームX認証、ポンプのBIS、ポンプおよび液体エレベーターのBIS認証、ポンプのOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Sun Certification India オペレーション責任者";
  const ogTitle =
    "インドにおけるポンプおよび液体エレベーターのBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおけるポンプおよび液体エレベーターのBISスキームX認証についてすべて学びましょう。OTR 2024コンプライアンス、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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

      {/* HrefLang Tags */}
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-peomp-mich-aegche-seunggangi"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-pompen-en-vloeistofelevators"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
    </Helmet>
  );
};

const PumpsAndLiquidElevatorsJapanesePageBreadcrumb = () => {
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
                    ポンプおよび液体エレベーターのBISスキームX認証
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

const PumpsAndLiquidElevatorsJapanesePageMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PumpsAndLiquidElevatorsPageMainContentLeftJapanese />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsPageMainContentLeftJapanese = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          インドにおけるポンプおよび液体エレベーターのBISスキームX認証
        </h1>

        {/* BIS License for Pumps Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-For-Pumps.png"
            alt="ポンプおよび液体エレベーターのBISライセンス"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          インドにおける急速な産業およびインフラの成長は、より多くの機械の稼働と、国内および国際的な需要の満足を確保することを必要としています。ポンプおよび液体エレベーターは、水資源、農業、建設、エネルギー、産業、およびその他多くのセクターにとって極めて重要です。適切な仕様と品質管理で製造されていない場合、故障した機器は安全性を危険にさらし、操作を妨げ、経済的損失を生み出す可能性があります。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          これを制御するために、BIS（インド標準局）はスキームX認証を開始し、すべてのポンプおよび液体エレベーターがインドで販売される前に国家品質基準を満たすことを要求しています。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          この記事では、ポンプのBIS認証の重要性、包括的技術規則（OTR）2024の重要性、および志望する製造業者向けのスキームXの下でのポンプのBISライセンス取得プロセスについて説明することを目的としています。
        </p>

        {/* Why Pumps and Elevators Matter Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ポンプおよび液体エレベーターが重要な理由
        </div>

        {/* Pumps Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          ポンプ
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ポンプは、さまざまな産業を通じて流体またはスラリーを移動させるために不可欠なデバイスです。これらは以下で広く使用されています：
        </p>

        {/* Pumps Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>農業および灌漑システム</li>
          <li>公共給水および家庭用</li>
          <li>廃水および排水処理ステーション</li>
          <li>石油およびガスパイプライン</li>
          <li>空調および産業冷却システム</li>
        </ul>

        {/* Liquid Elevators Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          液体エレベーター
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          リフトポンプ、液体を上げるための垂直液体エレベーターは、以下のポンプ用途に機能します：
        </p>

        {/* Liquid Elevators Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>高ポンプ質量の水配給システム</li>
          <li>産業用サイロ/貯蔵タンク</li>
          <li>エネルギー、化学、およびプロセス産業</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらが一般的であるため、安価なポンプまたは液体エレベーターは以下を引き起こす可能性があります：
        </p>

        {/* Problems with Poor Quality Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>機械的故障</li>
          <li>電気的危険</li>
          <li>漏れおよび腐食</li>
          <li>安全性リスクおよび経済的損失による事故</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          そのため、ポンプおよび液体エレベーターのBISは、製造業者と購入者の両方にとって不可欠な保護です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS and What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BISとは何か、スキームXとは何か？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          インド標準局（BIS）は、製品の品質と安全性を認証するインドの国家標準化機関です。重要な設備と機械を制御するために、BISは2018年のBIS適合性評価規則の下で、2022年3月16日以降、スキームX認証の取得を義務付けています。
        </p>

        {/* Scheme X Key Highlights */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          ポンプのスキームX認証の主要ポイント
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>インドおよび外国の製造業者に必須</li>
          <li>
            インド標準の下でカバーされるポンプ、モーター、および液体エレベーターに適用
          </li>
          <li>研究所テスト、工場検査、一貫したコンプライアンス検証を含む</li>
          <li>
            製造業者が認証の証拠としてポンプのBISマークを使用する法的権限を付与する。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ポンプの包括的技術規則（OTR）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR
          2024は重工業省によって発表され、すべてのポンプおよび液体エレベーターがスキームX認証に準拠することを義務付けています。
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          コンプライアンスの期限：
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          2026年9月1日までに、すべての製造業者および輸入業者は、スキームXの下でポンプの有効なBISライセンスを取得する必要があります。不遵守は、重い罰金、販売の停止、および公共入札からの除外を引き起こす可能性があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ポンプおよび液体エレベーターのBIS認証が重要な理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          1.
          安全性の保証：機器が操作の正確性のために設計および構築され、以下を引き起こさないことを保証します：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>電気的故障</li>
          <li>漏れおよび錆</li>
          <li>機械的損傷および故障</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">2. 市場の利点</p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            BIS認証ポンプは、公共プロジェクト、政府入札などでしばしば必要とされます。
          </li>
          <li>認証されていない製品と比較して競争上の優位性を提供します。</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          3.
          消費者の信頼：ポンプのISIマークは、購入者に品質についての信頼を提供し、製品の効率を保証します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          4.
          グローバルブランドが市場への容易なアクセスを獲得：外国のOEMは、スキームX基準に準拠することで、規制されたインド市場への容易なアクセスを獲得します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Pumps Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BISスキームX登録の下でのポンプの種類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BISスキームXには、以下のようなさまざまな種類のポンプが含まれます：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>遠心ポンプ</li>
          <li>水中ポンプ</li>
          <li>ブースターポンプ</li>
          <li>多段ポンプ</li>
          <li>容積式ポンプ</li>
          <li>垂直タービンポンプ</li>
          <li>化学プロセスポンプ</li>
          <li>ダイアフラムポンプ</li>
          <li>スラリーポンプ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          各タイプは、IS 16819:2018/ISO 12100:2010（機械の安全性 -
          設計の一般原則 -
          リスク評価およびリスク低減）などの関連するインド標準（ISコード）に準拠する必要があります。
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          液体エレベーターの場合、認証には以下が含まれます：
        </div>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>流量および吐出高さ</li>
          <li>材料の互換性</li>
          <li>エネルギー効率</li>
          <li>操作の安全性</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* How to Get BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ポンプのBISスキームXを取得する方法
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          適用される標準の特定：見積もりは、適切なISコード（例えば、水中ポンプの場合はIS
          9079）を指定する必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          製品テスト：BIS承認研究所での性能および安全性テストが必須です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          工場検査：BIS当局は、品質管理手順の実装を検証するために生産現場を検査します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          文書化および申請：技術仕様、テストレポート、および品質マニュアルをBIS申請フォームに添付する必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ポンプのBIS証明書の発行：承認後、製造業者はスキームXの下でBISマークを適用するライセンスを受け取ります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          継続的な監視：BISは、継続的なコンプライアンスを確保するために、定期的な監査およびランダムな製品検査を実施します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Penalties Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          不遵守に対する罰則
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          2026年9月1日までにBIS認証を取得できなかった製造業者は、以下に従うことになります：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>認証されていないポンプの販売/輸入の禁止</li>
          <li>商品の没収および罰金</li>
          <li>政府およびPSU注文からの失格</li>
          <li>インドでの評判への長期的な損害</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-medium text-[#1e1e1e]">結論：</span> OTR
          2024におけるポンプおよび液体エレベーターのBISスキームX認証が実施されます。これは、インド産業の標準化における重要なマイルストーンです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          製造、輸入、または輸出活動を行う人々にとって、ポンプのBIS登録は、完了すべき法的コンプライアンスプロセスだけでなく、潜在的なリスクに対する安全性の優位性を確保し、消費者の信頼を構築し、拡大するインド市場に参入するための戦略的決定でもあります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          ポンプおよび液体エレベーターのBIS認証は、製品の信頼性と市場を構築するための長期的な投資です。
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
