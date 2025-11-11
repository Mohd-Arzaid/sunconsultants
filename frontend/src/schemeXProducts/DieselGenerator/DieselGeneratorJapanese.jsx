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
import ServiceAuthorJapanese from "@/components/manual/ServiceAuthor/ServiceAuthorJapanese";
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

const DieselGeneratorJapanese = () => {
  return (
    <div className="relative w-full">
      <DieselGeneratorMetaTags />
      <DieselGeneratorBreadcrumb />
      <DieselGeneratorMainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default DieselGeneratorJapanese;

const DieselGeneratorMetaTags = () => {
  const title = "ディーゼル発電機のBISスキームX認証";
  const description =
    "ディーゼル発電機とそのコンポーネントのBISスキームX認証は、インドにおける品質と安全性を標準化し維持することを目的とした重要な規制措置です";
  const keywords =
    "ディーゼル発電機のBIS認証、ディーゼル発電機のBISスキームX認証、ディーゼル発電機のスキームX認証、ディーゼル発電機のBIS、ディーゼル発電機のOTR";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "インドにおけるディーゼル発電機のBISスキームX認証 | 完全ガイド";
  const ogDescription =
    "インドにおけるディーゼル発電機のBISスキームX認証についてすべて学びましょう。OTR 2024への準拠、BISライセンスプロセス、ISIマーク要件、2026年9月の期限前に認証を取得する方法を理解してください";

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

const DieselGeneratorBreadcrumb = () => {
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
                    ディーゼル発電機のBISスキームX認証
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

const DieselGeneratorMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <DieselGeneratorMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const DieselGeneratorMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          ディーゼル発電機のBISスキームX認証
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Diesel-Generator.png"
            alt="ディーゼル発電機のBISスキームX認証"
            title="ディーゼル発電機のBISスキームXライセンス"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          ディーゼル発電機は、商業施設、工業施設、病院、インフラプロジェクト、住宅プロジェクト、その他多くの場所で二次電源として使用されています。電力供給の継続性を保証する責任を負う経済資産として、機械が安全で効率的であり、国家基準を満たすことが重要です。
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          これを実現するために、ディーゼル発電機のBIS認証は、インド標準局（BIS）のスキームX認証に含まれています。このスキームは、国内およびグローバルな製造業者がインドで製品を販売する前に、厳格なインド標準を満たすことを確保するために制定されました。
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          この投稿では、ディーゼル発電機のBISスキームX認証の重要性、2024年のOTR指令、および製造業者が認証を取得する方法について詳しく説明します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ディーゼル発電機のBISが重要な理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ディーゼル発電機は以下の場所で使用されています：
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>工場と作業現場</li>
          <li>病院と緊急対応施設</li>
          <li>データセンターとITハブ</li>
          <li>商業ビルと住宅</li>
          <li>公共事業とユーティリティ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ディーゼル発電機が適切に認証されていない場合、リスクは非常に大きくなります：
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>メーターの故障（機械的および電気的）により供給不足が発生</li>
          <li>非準拠ユニットにおける火災と安全上の危険の高いリスク</li>
          <li>排出量が過剰でエネルギー効率が低い</li>
          <li>法的障害、入札からの排除</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          ディーゼル発電機は、スキームX認証を容易に満たすことができ、製造業者がインドで使用する安全で信頼性が高く環境に優しい製品を販売することを可能にします。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ディーゼル発電機のBISスキームX認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ディーゼル発電機のBISスキームX認証は、正式な認証プロセスであり、BIS適合性評価規則2018によって設立されたシステムです。これは、インド標準への準拠を検証するために、厳格なテストと品質評価を義務付けています。
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          スキームX認証のハイライト：
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>すべての製造業者 - インドおよび外国 - 必須要件</li>
          <li>異なる容量のすべての種類のディーゼル発電機に適用</li>
          <li>BIS認定の研究所での製品テストを含む</li>
          <li>
            工場監査、ワークショップ訪問、製造プロセス検査により、品質と安全基準を確保するために現場で工場を独立して検査します。
          </li>
          <li>ライセンス取得時にBIS標準マークを使用するライセンスを提供</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ディーゼル発電機（DG）のBIS OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          重工業省は、2024年にディーゼル発電機のOTRに関する通知を発行しました。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          施行日：すべての製造業者と輸入業者は、2026年9月1日までに認証を取得する必要があります。この日から、認証されていないディーゼル発電機の製造、販売、または輸入はインドで禁止されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ディーゼル発電機のBIS認証の利点
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            安全性の保証：機械的故障を最小限に抑え、火災、短絡、事故を防ぐための防火技術に基づいています。
          </li>
          <li>
            環境への準拠：省エネルギー基準と排出削減が遵守されていることを確保します。
          </li>
          <li>
            市場へのアクセス：ディーゼル発電機のOTR -
            インドで販売するための必須認証
          </li>
          <li>顧客の信頼：BIS標準マークは高い信頼性と安全性を保証します。</li>
          <li>
            入札資格：政府/公共事業の契約では、製品が認証されている必要があります。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Diesel Generators Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          スキームXでカバーされるディーゼル発電機の種類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ディーゼル発電機Xの認証スキームには、以下のグループが含まれます：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ディーゼルを使用するモバイルホーム発電機</li>
          <li>商業用ディーゼル発電機セット（高容量）</li>
          <li>緊急および待機電源供給発電機</li>
          <li>商業用静音ディーゼル発電機セット（都市用途と使用）</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          各サブタイプは、IS 16819:2018 / ISO 12100:2010（機械の安全性 -
          設計の一般原則 -
          リスク評価とリスク低減）などの適用可能なインド標準（ISコード）に準拠する必要があります。各タイプは独自のインド標準を満たす必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ディーゼル発電機のBIS認証手順
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>適用可能な標準の特定：発電機の種類のISコードを調べます。</li>
          <li>
            製品テスト：BIS認定の研究所で安全性、性能、排出のテストを実施します。
          </li>
          <li>工場監査：BIS職員が製造品質管理プロセスを検査します。</li>
          <li>書類提出：仕様、テスト結果、準拠書類を提供します。</li>
          <li>
            ライセンス発行：承認後、BISがライセンスを発行し、標準マークの使用を許可します。
          </li>
          <li>
            継続的な準拠：認証が有効であることを確保するために、監査と製品検査が実施されます。
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          非準拠に対する罰則
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ディーゼル発電機のOTRによるディーゼル発電機のBIS認証に準拠しない場合、以下の結果が生じる可能性があります：
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>認証されていない機器の販売、輸入、製造の禁止。</li>
          <li>物品の没収と金銭的罰金</li>
          <li>政府契約への不適格</li>
          <li>永続的な評判と財務的損害</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          結論
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ディーゼル発電機のOTR（2024）に準拠したディーゼル発電機のBISスキームX認証は、インドのバックアップ電源産業における製品の安全性、信頼性、効率性の向上の旅における重要なマイルストーンです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          製造業者/輸入業者にとって、ディーゼル発電機のスキームX認証は、単なる法的要件ではなく、信頼性、準拠性、市場の信頼を反映する競争上の優位性でもあります。
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
