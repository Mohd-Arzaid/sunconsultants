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
import ServiceAuthorJapanese from "@/components/manual/ServiceAuthor/ServiceAuthorJapanese";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentJapanese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentJapanese";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const CranesJapanese = () => {
  return (
    <div className="relative w-full">
      <CranesMetaTags />
      <CranesBreadcrumb />
      <CranesMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default CranesJapanese;

const CranesMetaTags = () => {
  const title = "クレーンのBISスキームX認証";
  const description =
    "インド標準局（BIS）は、すべての種類のクレーンとその組立、サブ組立、コンポーネントに対する必須のスキームX認証を導入しました。";
  const keywords =
    "クレーンのBIS認証、クレーンのBISスキームX認証、クレーンのスキームX認証、クレーンのBIS、クレーンのOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle = "インドにおけるクレーンのBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおけるクレーンのBISスキームX認証についてすべて学びましょう。OTR 2024への準拠、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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

const CranesBreadcrumb = () => {
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
                    クレーンのBISスキームX
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

const CranesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CranesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const CranesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          クレーンのBISスキームX認証
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
            alt="クレーンのBISスキームX認証"
            title="クレーンのBISスキームXライセンス"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          クレーンは主に材料の持ち上げと輸送、および製造、建設、生産、採掘に使用されます。その機能は安全性にとって重要であるため、資格のないクレーンや品質の低いクレーンは、滑落や落下、機器の損傷、または高額な損失を引き起こす可能性があります。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          これらの危険性を考慮して、インド標準局（BIS）は、スキームX認証の下でクレーンのBIS認証を必須としました。これにより、インドで使用されるクレーンが安全で信頼性が高く、効率的で、世界クラスの品質であることが保証されます。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          このブログでは、クレーンのBISスキームX登録の重要性、クレーンのOTRの法的側面、クレーンのBISライセンスの取得方法、およびクレーンのBIS標準マークの表示方法についてご案内します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          クレーンのBISが重要な理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          クレーンは以下の場所で広く使用されています：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>建設工事とインフラ</li>
          <li>海港、造船所、その他の物流センター</li>
          <li>工場と組立工場</li>
          <li>金属採掘と重材料の取り扱い</li>
          <li>発電所とその他の産業</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          クレーンのBIS認証がない場合、認証されていない機器は以下を引き起こす可能性があります：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>機械的故障と事故</li>
          <li>可用性の低下とメンテナンスコストの増加</li>
          <li>政府プロジェクトへの参加資格の喪失</li>
          <li>労働者とインフラへの安全上の危険</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          クレーンのBISマークは、消費者と規制当局に、製品がインドの厳格な品質と安全基準に準拠していることを保証します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          クレーンのBISスキームX認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BISの下でのクレーンのスキームX認証は、重要な機械の製品認証を義務付ける2018年のBIS適合性評価規則に基づいて必須です。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          クレーンのスキームXの主な特徴：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>国内および外国の製造業者に必要</li>
          <li>
            すべての主要なクレーンカテゴリーに適用され、インド標準の下で通知される
          </li>
          <li>
            製品テスト、工場監査、継続的なコンプライアンス評価が義務付けられている
          </li>
          <li>認証製品にクレーンのBISマークを使用するためのライセンスを提供</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          クレーンのBIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          2024年に重工業省によって通知されたクレーンの包括的技術規則（OTR）は、認証を義務付けることを目的としています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          期限：すべてのクレーンの製造業者/輸入業者は、2026年9月1日までにスキームXの下でクレーンのBISライセンスを取得する必要があります。その後、認証されていないクレーンは、インドで販売、輸入、または公共入札で使用することはできません。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          クレーンのBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            安全性の向上：認証されたクレーンは機械的故障と事故を最小限に抑えます。
          </li>
          <li>
            市場優位性：政府機関と民間企業は、電子入札や大規模プロジェクトでBIS認証クレーンを優先します。
          </li>
          <li>
            消費者と請負業者の信頼：クレーンのBISマークは、品質と信頼性への信頼を生み出します。
          </li>
          <li>
            グローバル市場への参入：外国の製造業者にとって、クレーンのBISライセンスは、規制されたインド市場への障壁のない参入を可能にします。
          </li>
          <li>インド法への準拠：罰金、没収、政府契約からの除外を防ぎます。</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Cranes Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          スキームX認証に含まれるクレーンの種類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          スキームX認証の下にリストされているクレーンは、以下のようなさまざまな種類で構成されています：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>タワークレーン</li>
          <li>移動式クレーン</li>
          <li>ガントリークレーンとゴライアスクレーン</li>
          <li>OH/BRクレーン</li>
          <li>クローラークレーン</li>
          <li>ジブクレーン</li>
          <li>浮遊クレーン</li>
          <li>産業用およびワークショップクレーン</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          各バリアントは、動力付き移動式クレーンの仕様のIS 4573:2020や、クレーン
          - ローダークレーンの安全要件のIS/ISO
          15442:2012など、適切なインド標準（ISコード）に準拠する必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          機器の種類は、設計、負荷容量、安全性、性能について、関連するインド標準（ISコード）に準拠する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          クレーンのBISライセンスを取得する手順
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            関連するIS標準の特定：お客様のクレーンタイプに適用されるインド標準を特定します。
          </li>
          <li>
            BIS認定ラボでのテスト：安全性と有効性のテストが義務付けられています。
          </li>
          <li>工場検査：BISが生産場所と品質システムを検査します。</li>
          <li>
            申請と文書化：技術レポート、テスト結果、品質マニュアルを提出します。
          </li>
          <li>
            クレーンのBISライセンス：承認後、製造業者はクレーンのBISマークを適用する権利を取得します。
          </li>
          <li>
            継続的なコンプライアンス：定期的な監査と検査により、継続的なコンプライアンスが確保されます。
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          不遵守に対する罰則
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          クレーンのOTRに従わず、2026年9月1日までにクレーンのBIS認証を取得しない場合、どうなりますか？
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>認証されていないクレーンの販売と輸入の禁止</li>
          <li>製品の没収と高額な罰金</li>
          <li>政府入札と公共事業からの失格</li>
          <li>ブランドへの長期的な悪影響</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          結論
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BISスキームX認証の実施は、安全性と信頼性を向上させ、インドに共通の産業標準を提供する重要なマイルストーンとなるでしょう。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          クレーンの製造業者、輸入業者、輸出業者にとって、クレーンのBISライセンスを取得し、オンライン申請ポータルを通じてクレーンのBIS登録を申請することが重要です。これにより、基準に準拠し、消費者の信頼を構築し、BISやインド政府との潜在的な紛争を回避できます。
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
