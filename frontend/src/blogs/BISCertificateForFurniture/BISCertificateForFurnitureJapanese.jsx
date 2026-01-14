import FaqAuthorJapanese from "@/components/common/FaqAuthor/FaqAuthorJapanese";
import ManyUsersAlsoReadJapanese from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadJapanese";
import ServicesRightSideContentJapanese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentJapanese";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterJapanese from "@/components/manual/Footer/FooterJapanese";

const BISCertificateForFurnitureJapanese = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default BISCertificateForFurnitureJapanese;

const MetaTags = () => {
  const title =
    "インドにおける家具のBIS証明書 | BIS認証、ライセンス、プロセスガイド";
  const ogTitle = "インドにおける家具のBIS証明書 - 完全なBIS認証ガイド";
  const twitterTitle = "家具のBIS証明書 | インドBISの完全なBIS認証ガイド";
  const metaDescription =
    "インドにおける家具のBIS証明書 - BIS認証、BISライセンス、費用、書類、標準、プロセス、オンライン申請、家具メーカー向けBISマークの完全ガイド。";
  const ogDescription =
    "インドにおける家具のBIS認証をお探しですか？BISライセンス、BISマーク、適用標準、認証プロセス、費用、書類、コンプライアンス要件について詳しく学びましょう。";
  const twitterDescription =
    "インドにおける家具のBIS証明書の完全ガイド - BIS認証プロセス、費用、書類、BISマーク、標準、オンライン申請について説明。";
  const metaKeywords =
    "家具のBIS証明書, 家具のBIS認証, 家具のBISライセンス, BISとは, インドBIS";
  const websiteUrl = "https://bis-certifications.com/blogs/isi-products/kagu";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
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
                    <Link to="/Blogs">最新のブログ</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    インドにおける家具のBIS証明書 – 完全詳細ガイド
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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentJapanese />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          インドにおける家具のBIS証明書 – 完全詳細ガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="家具のBISライセンス"
            alt="インドにおける家具のBIS証明書 - 完全なBIS認証ガイド"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          はじめに：BIS認証とインドの家具産業
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          インドでは、製品の品質、安全性、標準化は、インド標準局（BIS）として知られる中央の法定機関によって管理されています。BISはインドの国家標準機関であり、BIS法の下で設立され、インド市場で販売される製品が定義された安全性、品質、性能の基準に準拠することを保証しています。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BISとは何ですか？
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BISの正式名称はインド標準局（Bureau of Indian
          Standards）です。インド政府の消費者問題、食品・公共配給省の下で機能しています。BISは、透明な標準化および認証エコシステムを通じてメーカーを支援しながら、消費者の利益を保護する上で重要な役割を果たしています。
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          インドの家具産業は、以下の理由により急速な成長を遂げています：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>都市化</li>
          <li>住宅および商業インフラの拡大</li>
          <li>ホスピタリティ、教育、医療、コリビングセクターの成長</li>
          <li>製品の安全性と耐久性に関する消費者の意識の高まり</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具はもはや純粋に美的な製品とは見なされていません。ユーザーの安全性、人間工学、構造的安定性、耐火性、長期的な耐久性に直接関連しています。崩壊するベッド、安全でない二段ベッド、不安定な椅子、または標準以下の収納ユニットに関連する事故は、規制当局と消費者の両方の懸念を引き起こしています。
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          これらのリスクに対処するため、家具のBIS認証は重要なコンプライアンス要件となっています。BISは、家具製品が以下の点に関連するインド標準（IS）を満たすことを保証します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>構造的強度</li>
          <li>耐荷重能力</li>
          <li>材料品質</li>
          <li>設計の安全性</li>
          <li>使用条件での性能</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          メーカー、輸入業者、輸出業者、MSME、スタートアップ、家具ブランド所有者にとって、家具のBIS証明書を取得することは、もはや単なる規制上の形式ではなく、市場の必要性となっています。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具のBIS認証が重要な理由
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドの規制に基づく法的コンプライアンスを保証</li>
          <li>消費者の信頼とブランドの信頼性を向上</li>
          <li>インド全土での無制限の販売と流通を可能に</li>
          <li>製品責任リスクを最小化</li>
          <li>輸出準備とグローバルな受け入れを改善</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          この包括的なガイドは、インドにおける家具のBIS認証に関する最も権威があり詳細なリソースとなるように設計されています。初めてのメーカーであっても、確立された家具ブランドであっても、このガイドは、家具のBISライセンス、家具のBIS登録、適用標準、プロセス、費用、書類、タイムライン、認証後のコンプライアンスに関連するあらゆる質問に答えます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具のBIS証明書とは何ですか？
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS証明書の意味
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具のBIS証明書は、インド標準局によって付与される公式の承認であり、特定の家具製品が関連するインド標準（IS）に準拠していることを確認します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISマークとは何ですか？
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BISマークは、一般的にISIマークとして知られており、認証製品に表示される標準適合マークです。これは、家具が以下を満たしていることを示します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>実験室でのテストに合格</li>
          <li>工場検査をクリア</li>
          <li>すべての標準要件を満たしている</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISロゴの説明
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BISロゴは、インドの国家標準機関としてのBISの権威を表しています。家具製品でISIマークと一緒に使用されると、購入者に製品がBIS標準に準拠していることを保証します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS証明書インド – 法的地位
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          インドでは、通知された標準の下でカバーされる家具製品を、BIS認証なしで製造、輸入、または販売することは、以下につながる可能性があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>商品の差し押さえ</li>
          <li>重い金銭的罰則</li>
          <li>BIS法に基づく起訴</li>
          <li>販売または輸入の禁止</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          したがって、インドにおける家具のBIS証明書は強い法的重要性を持っています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具製品にとってBIS認証が重要な理由
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具のBIS認証は、複数の理由で重要です：
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 安全性と構造的完全性
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具の故障は、けがや死亡を引き起こす可能性があります。BIS標準は以下を評価します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>耐荷重能力</li>
          <li>転倒に対する安定性</li>
          <li>接合部の強度</li>
          <li>材料の性能</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 品質と耐久性
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          認証された家具製品は以下を保証します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>長い耐用年数</li>
          <li>摩耗に対する耐性</li>
          <li>均一な性能</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 消費者の信頼
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証マークは、購入者、機関、大口購入者の間で即座に信頼を構築します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. 市場アクセス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          多くの政府入札、機関購入者、大企業は、BIS認証家具を義務付けています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. 法的コンプライアンス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          必須のBIS規範の下で非認証家具を販売することは、罰則と法的措置を引き起こす可能性があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証の対象となる家具製品
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具はBISの下で広範な一般的カテゴリーであり、複数の製品タイプをカバーし、それぞれが異なるインド標準（IS番号）によって管理されています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          カバーされる主要な家具カテゴリー：
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. 作業用椅子
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          オフィス、工場、商業スペースで使用されます。標準は人間工学、安定性、負荷性能に焦点を当てています。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. 一般用途の椅子とスツール
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          家庭、学校、公共スペースで使用されます。BISは構造的安全性と材料強度を評価します。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. テーブルとデスク
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          オフィスデスク、学習机、ワークステーションを含みます。標準は負荷容量と表面の耐久性をテストします。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. 収納ユニット
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          アルミラ、キャビネット、ロッカー、棚。安定性、鋭いエッジ、安全なアクセスに重点を置いています。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. ベッド
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          シングルベッド、ダブルベッド、折りたたみベッド。BISはフレームの強度と長期的な性能をチェックします。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. 二段ベッド
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          安全リスクのため、高度に規制されています。ガードレール、はしごの安全性、転落防止に焦点を当てています。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. 非家庭用家具用の張り地複合材
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          オフィス、ホテル、講堂で使用されます。標準には耐火性と耐久性テストが含まれます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          その他の家具製品
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>学校用家具</li>
          <li>機関用座席</li>
          <li>病院用家具</li>
          <li>モジュラー家具</li>
          <li>金属および木製家具システム</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          各製品カテゴリーには、BISによって個別に通知される独自の適用IS番号があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具に適用されるBIS標準
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS標準とは何ですか？
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS標準は、BISが公開する技術仕様であり、以下を定義します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>材料要件</li>
          <li>性能パラメータ</li>
          <li>テスト方法</li>
          <li>マーキングガイドライン</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS番号の意味
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS番号（インド標準番号）は、製品に適用される標準を一意に識別します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS通知プロセス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BISは、特定の標準を必須とする公式のBIS通知を発行します。通知されると：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>コンプライアンスが義務化される</li>
          <li>非認証製品は違法となる</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          正しいBIS標準を識別する方法
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          メーカーは以下を行う必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品カテゴリーを識別</li>
          <li>適用IS範囲を研究</li>
          <li>標準の適用性を確認</li>
          <li>間違った標準選択を避ける（よくある間違い）</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具に適用されるBIS認証の種類
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISIスキームの下でのBISライセンス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具製品は一般的にISI認証スキームの下でカバーされており、以下を含みます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品テスト</li>
          <li>工場検査</li>
          <li>監査</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS登録
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS登録は主に電子機器およびIT製品向けです。家具は通常、登録ではなくBISライセンスが必要です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          インドにおける家具のBIS認証プロセス
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ1：申請前の準備
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>適用IS標準を識別</li>
          <li>製品設計のコンプライアンスを評価</li>
          <li>技術文書を準備</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ2：BIS申請
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          以下を含むBIS申請を提出：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品詳細</li>
          <li>製造詳細</li>
          <li>標準参照</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ3：BISオンライン申請
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          申請はBISオンラインポータルを通じて提出されます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ4：製品テスト
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認定ラボでサンプルをテストします。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ5：工場検査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS職員が以下を確認します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造プロセス</li>
          <li>品質管理</li>
          <li>テスト施設</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ6：BISライセンスの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          コンプライアンスが確認されると、BISがライセンスを付与します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ7：BIS認証マークの使用
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          メーカーはBISマーク/ISIマークを貼付できます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具のテスト要件
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          テストはBIS登録プロセスの必須部分です。家具は安全性と耐久性を確保するために厳格なテストを受けます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          家具の必須テスト：
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>構造負荷テスト</li>
          <li>安定性テスト</li>
          <li>ガードレール強度テスト</li>
          <li>衝撃テスト</li>
          <li>閉じ込め危険テスト</li>
          <li>はしご強度と角度テスト</li>
          <li>材料安全性テスト</li>
          <li>エッジ半径と鋭さテスト</li>
          <li>マットレス支持テスト</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          テストはBIS認定ラボでのみ実行する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具のBIS認証に必要な書類
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          主要な書類には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場登録証明</li>
          <li>製品図面と仕様</li>
          <li>原材料詳細</li>
          <li>テストレポート</li>
          <li>品質管理記録</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          よくある書類の間違い：
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>標準参照の誤り</li>
          <li>不完全なテストデータ</li>
          <li>製品範囲の不一致</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具のBIS認証費用
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS証明書費用の構成要素：
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>政府申請料</li>
          <li>テスト料金</li>
          <li>検査料金</li>
          <li>ライセンス料金</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS認証費用の要因：
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品の複雑さ</li>
          <li>モデル数</li>
          <li>テスト要件</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          注：専門コンサルティング料金は政府料金とは別です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS証明書登録のタイムライン
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          平均タイムライン：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>テスト：3〜6週間</li>
          <li>検査：1〜2週間</li>
          <li>ライセンス付与：2〜4週間</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          合計：8〜12週間（約）
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          インドにおける家具メーカーのBIS認証取得方法
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          実践的なヒント：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>正しいIS標準を選択</li>
          <li>工場の準備を確保</li>
          <li>テスト記録を維持</li>
          <li>書類の誤りを避ける</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS証明書オンライン申請 – 実践的概要
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          オンラインポータルの課題：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>技術的エラー</li>
          <li>書類アップロードの問題</li>
          <li>標準選択の混乱</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          適切なガイダンスにより遅延を減らせます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          承認後のBISマークとBIS認証マークの使用
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          マーキングルール：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>正しいIS参照</li>
          <li>ライセンス番号</li>
          <li>適切なサイズと視認性</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          非コンプライアンスは停止につながる可能性があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具のBIS認証における課題
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>標準の解釈</li>
          <li>製品テストの失敗</li>
          <li>検査の不適合</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具認証におけるBISコンサルタントの役割
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          専門のBISコンサルタントは以下で支援します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>正しい標準の識別</li>
          <li>テストと検査の管理</li>
          <li>承認時間の短縮</li>
          <li>コストのかかる却下の回避</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具のBIS認証は、インドの成長する家具市場における品質、安全性、法的コンプライアンスの基盤です。メーカー、輸入業者、またはブランド所有者であるかどうかにかかわらず、インドにおける家具のBIS証明書を取得することで、以下が保証されます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>規制コンプライアンス</li>
          <li>消費者の信頼</li>
          <li>長期的な市場の成功</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証プロセス、標準、費用、コンプライアンス要件を理解することで、企業は規制環境を自信を持ってナビゲートし、インド市場向けにより安全で、より強力で、より信頼性の高い家具製品を構築できます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BISライセンスに関するよくある質問
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              インドでは、すべての家具製品にBIS認証が必須ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              いいえ、BIS認証は通知されたBIS標準の下でカバーされる家具製品にのみ必須です。ただし、インド標準局によって家具製品カテゴリーが通知されると、有効なBISライセンスなしでその製品を製造、輸入、販売、または配布することはインドで違法となります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              どの家具製品がBIS登録ではなくBISライセンスを必要としますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              家具製品は一般的にISI認証スキームの下に分類され、BIS登録ではなくBISライセンスが必要です。BIS登録（CRS）は主に電子機器およびIT製品に適用されますが、家具製品にはテスト+工場検査+BISライセンスが必要です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              輸入家具はBIS認証なしでインドで販売できますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              いいえ。必須BIS標準の下でカバーされる輸入家具製品は、通関前にBIS認証が必要です。非認証家具の輸入は以下につながる可能性があります：
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>税関での差し押さえ</li>
              <li>再輸出または破壊</li>
              <li>重い罰則</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              外国メーカーは、インドに家具を輸出する前にBISライセンスを取得する必要があります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              外国の家具メーカーはBIS認証を申請できますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい。外国メーカーは外国メーカー認証スキーム（FMCS）の下で申請できます。以下が必要です：
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>認可インド代表（AIR）を任命</li>
              <li>インド標準に準拠</li>
              <li>海外でのBIS工場検査を許可</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              手作りまたは小規模の家具メーカーにBIS認証は必要ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、家具製品が必須BIS標準の下でカバーされている場合、MSME、スタートアップ、小規模ユニットでもBIS認証を取得する必要があります。生産量に基づく免除はありません。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              木製家具にBIS認証は必要ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、ベッド、椅子、テーブル、デスク、収納ユニットなどの木製家具製品は、通知された標準の下に該当する場合、BIS認証が必要になる場合があります。BIS標準は、製品タイプと使用に応じて、木製および金属製の家具の両方に適用されます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1つのBISライセンスで複数の家具モデルをカバーできますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、複数のモデルまたはバリエーションは、単一のBISライセンスの下でカバーできます。条件：
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>同じIS標準の下に該当する</li>
              <li>構造、材料、設計パラメータが類似している</li>
              <li>BISが申請中にグループ化を承認する</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS認証は別のメーカーに譲渡できますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              いいえ。BISライセンスは譲渡不可です。各メーカーは、製品設計が同一であっても、独自のBIS証明書を取得する必要があります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS証明書とは何ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS標準への準拠の公式証明です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              家具にBIS認証は必須ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、通知された標準の下でカバーされる家具製品の場合。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              インドでBIS認証を取得する方法は？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              テスト、検査、BISライセンス承認を通じて。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BISマークとは何ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS承認を示す適合マークです。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS認証費用は？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              製品タイプ、テスト、範囲によって異なります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BISの正式名称は？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              インド標準局。
            </p>
          </div>
        </div>

        <ManyUsersAlsoReadJapanese />

        <FaqAuthorJapanese questionNumber={2} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              私たちのサービス
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                インド最高の証明書コンサルタント
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
                src="/services-images/BIS.jpg"
                alt="BISロゴ"
                title="BISロゴ"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              外国製造用BISマーク（ISIライセンス）
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCOロゴ"
                title="CDSCOロゴ"
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
                src="/services-images/BISCRS.jpg"
                alt="BISCRSロゴ"
                title="BISCRSロゴ"
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
                src="/services-images/PlasticWasteManagement.jpg"
                alt="プラスチック廃棄物管理"
                title="プラスチック廃棄物管理"
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
                src="/services-images/EPRCertificate.jpg"
                alt="EPR証明書ロゴ"
                title="EPR証明書ロゴ"
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
                src="/services-images/LMPC.jpg"
                alt="LMPCロゴ"
                title="LMPCロゴ"
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
                src="/services-images/BIS.jpg"
                alt="BISロゴ"
                title="BISロゴ"
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
                src="/services-images/ISIMark.jpg"
                alt="ISIマークロゴ"
                title="ISIマークロゴ"
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
