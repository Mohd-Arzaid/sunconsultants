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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForChairAndStoolsJapanese = () => {
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

export default BISCertificateForChairAndStoolsJapanese;

const MetaTags = () => {
  const title = "椅子とスツールのBIS認証 | IS 17632:2022 BISライセンス";
  const ogTitle = "椅子とスツールのBIS認証 – IS 17632:2022ガイド";
  const twitterTitle = "椅子とスツールのBISライセンス | IS 17632:2022";
  const metaDescription =
    "IS 17632:2022に基づく椅子とスツールのBIS認証を取得。インドでのBIS認証のプロセス、書類、テスト、費用、タイムライン。";
  const ogDescription =
    "IS 17632:2022に基づく椅子とスツールのBIS認証の完全ガイド。プロセス、費用、書類、テスト、BISライセンスのメリットを理解する。";
  const twitterDescription =
    "IS 17632:2022に基づく椅子とスツールのBIS認証を申請。インドでのBISプロセス、書類、テスト、費用、タイムラインを学ぶ。";
  const metaKeywords =
    "椅子とスツールのBIS認証, 椅子とスツールのBISライセンス, IS 17632:2022, 椅子とスツールのBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Sun Certification India オペレーション責任者";

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
                    椅子とスツールのBIS認証 – IS 17632:2022
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
          一般用途の椅子とスツールのBIS認証 – IS 17632:2022の完全ガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="椅子とスツールのBISライセンス"
            alt="椅子とスツールのBIS認証 - IS 17632:2022 BIS認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          一般用途の椅子とスツールのBIS認証は、インド規格IS
          17632:2022に基づく必須要件です。この規格は、家庭、オフィス、商業エリア、教育機関、カフェテリア、レストラン、ホテル、公共スペースで使用される椅子とスツールの安全性、耐久性、性能要件を規定しています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          椅子とスツールは最も使用される家具アイテムの一つであり、常に負荷、動き、反復的なストレスにさらされています。構造的に弱い椅子やスツールは突然崩壊し、怪我を引き起こす可能性があります。このような危険を防ぎ、消費者の安全を確保するために、インド標準局（BIS）はすべての製造業者と輸入業者に、インドで販売する前に椅子とスツールのBIS認証を取得することを要求しています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          このページでは、IS
          17632:2022に基づく椅子とスツールのBIS認証に関する完全ガイドを提供し、認証プロセス、必要な書類、テスト要件、費用、課題、罰則、メリットを含みます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証は、インドの国家標準機関であるインド標準局が管理する製品コンプライアンスシステムです。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS証明書の意味
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS証明書は、製品が以下を満たしていることを保証します：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドの安全性および品質基準を満たしている</li>
          <li>BIS承認の実験室テストを通過している</li>
          <li>工場検査を受けた</li>
          <li>消費者を安全でないまたは標準以下の製品から保護する</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証製品にはISIマークが表示され、インド規格への準拠を示します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          適用規格 – 椅子とスツールのIS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          椅子とスツールのBIS規格は次のとおりです：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> –
          一般用途の椅子とスツール：安全性要件
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          この規格は、家庭、オフィス、商業環境、公共の場所、機関の設定で座席目的で使用されるすべての非専門椅子とスツールをカバーします。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17632:2022がカバーする製品
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>一般用途の椅子</li>
          <li>ダイニングチェア</li>
          <li>オフィス来客用椅子</li>
          <li>学習用椅子</li>
          <li>カフェテリア用椅子</li>
          <li>レストラン用椅子</li>
          <li>会議室用椅子</li>
          <li>待合室用椅子</li>
          <li>木製椅子</li>
          <li>金属製椅子</li>
          <li>プラスチック製椅子（非専門）</li>
          <li>一般用途のスツール</li>
          <li>バースツール</li>
          <li>ダイニングスツール</li>
          <li>ステップスツール（定義された基準内）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          主要な安全性および性能パラメータ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022は以下を評価します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>構造的強度</li>
          <li>安定性</li>
          <li>反復使用下の耐久性</li>
          <li>座席の強度</li>
          <li>背もたれの性能</li>
          <li>脚の衝撃抵抗</li>
          <li>接合部の強度</li>
          <li>表面仕上げの品質</li>
          <li>エッジとコーナーの安全性</li>
          <li>材料品質</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          インドで販売されるすべての椅子とスツールは、これらのパラメータに準拠し、椅子とスツールのBISライセンスを取得する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子とスツールにBIS認証が必須である理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          椅子とスツールは人間の体重を支え、すべての環境で頻繁に使用されます。構造的故障は以下を引き起こす可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>崩壊する椅子</li>
          <li>脚の破損</li>
          <li>座席のひび割れ</li>
          <li>背もたれの故障</li>
          <li>鋭いエッジによる怪我</li>
          <li>転倒につながる不安定性</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS認証のメリット
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>安全な座席製品を確保</li>
          <li>事故と怪我を防止</li>
          <li>製品の耐久性を向上</li>
          <li>標準以下の輸入を防止</li>
          <li>統一された市場品質を確立</li>
          <li>顧客の信頼を強化</li>
          <li>インド法による必須（BIS QCOs）</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証なしでは、製造業者はインドで合法的に椅子やスツールを販売することはできません。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子とスツールのBIS認証プロセス（IS 17632:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BISプロセスはISIマーク認証スキームに従い、テスト、検査、申請の検証を含みます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ1 – 製品タイプと規格の特定
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          椅子/スツールがIS
          17632:2022に該当することを確認します。設計バリエーションと使用材料を特定します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ2 – BIS申請をオンラインで提出
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          申請はBIS Manakオンラインポータルを通じて提出され、以下が必要です：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造業者の詳細</li>
          <li>工場情報</li>
          <li>製品仕様</li>
          <li>ブランド/商標の詳細</li>
          <li>製造プロセスのワークフロー</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ3 – BIS認証費用の支払い
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          費用には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請費用</li>
          <li>処理費用</li>
          <li>サンプルテスト料金</li>
          <li>工場検査費用</li>
          <li>マーキング費用</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ4 – IS 17632:2022に基づく製品テスト
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          必須テストはBIS承認の実験室で実施されます。
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          テストには以下が含まれます：
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>安定性テスト</li>
          <li>座席の強度テスト</li>
          <li>背もたれの耐久性テスト</li>
          <li>脚の前/横/後方荷重テスト</li>
          <li>座席衝撃テスト</li>
          <li>落下テスト</li>
          <li>疲労テスト</li>
          <li>表面仕上げテスト</li>
          <li>鋭いエッジテスト</li>
          <li>反復サイクル下の構造的耐久性</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          テスト結果はIS 17632:2022への完全な準拠を示す必要があります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ5 – BISによる工場検査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS職員が工場を訪問し、以下を評価します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造プロセス</li>
          <li>原材料検査</li>
          <li>品質管理手順</li>
          <li>テスト能力</li>
          <li>機器の較正</li>
          <li>生産量</li>
          <li>BISテストおよび検査スキーム（STI）への準拠</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ6 – BISライセンスの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          テストと検査が成功した場合、BISは以下を発行します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS証明書（ISIマークライセンス）</li>
          <li>CML番号</li>
          <li>椅子とスツールにISIマークを貼付する承認</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ7 – ライセンス後の義務
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製造業者は以下を行う必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BISラベリング要件に従ってISIマークを使用</li>
          <li>品質管理記録を維持</li>
          <li>定期的なBIS監視検査を受ける</li>
          <li>1〜2年ごとにライセンスを更新</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子とスツールのBISライセンスの範囲
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          この規格は、一般用途の椅子とスツールの要件をカバーします。この規格は、完全に製造/加工された一般用途の椅子とスツールに適用されます。組み立て準備済みユニットにも適用され、その場合、この規格の要件は組み立てられたユニットに適用されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子とスツールのBIS認証に必要な書類
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          製造業者の書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場ライセンス/登録</li>
          <li>製造プロセスのフローチャート</li>
          <li>機械リスト</li>
          <li>社内テスト機器リスト</li>
          <li>較正証明書</li>
          <li>工場レイアウトと平面図</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技術書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>椅子/スツールの図面</li>
          <li>寸法と仕様</li>
          <li>材料リスト</li>
          <li>安全機能の説明</li>
          <li>社内品質テストレポート</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>身分証明と住所証明</li>
          <li>ブランド承認書</li>
          <li>商標証明書（オプション）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS申請書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請フォーム</li>
          <li>テスト依頼フォーム</li>
          <li>宣言フォーム</li>
          <li>承認書</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子とスツールのテスト要件（IS 17632:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022には、広範な機械的、構造的、安全性テストが含まれます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          必須テスト
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  条項
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  要件
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  設計と工作
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  アームなし椅子の前方および横方向のバランス崩れ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  後方のバランス崩れ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  アーム付き椅子の横方向のバランス崩れ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  スツール/プーフ（全方向）
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  強度テスト
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          これらのテストは、実際の条件下での安全な日常使用を保証します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          一般的な課題と回避方法
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>安定性テストに失敗する椅子</strong>
            <br />
            不適切な重量分布が原因で発生します。
            <br />
            修正：脚の設計を改善し、ベースエリアを広げます。
          </li>
          <li>
            <strong>テスト失敗を引き起こす弱い接合部</strong>
            <br />
            修正：補強材料とより良いコネクタを使用します。
          </li>
          <li>
            <strong>不十分な社内テスト機器</strong>
            <br />
            修正：必要なBIS準拠機器を設置します。
          </li>
          <li>
            <strong>書類の不整合</strong>
            <br />
            修正：申請前に体系的に書類を準備します。
          </li>
          <li>
            <strong>製品バリエーションが適切にマッピングされていない</strong>
            <br />
            修正：構造とテストパラメータに基づいて製品をグループ化します。
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子とスツールのBIS認証のメリット
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドでの販売の法的許可</li>
          <li>製品安全性の向上</li>
          <li>顧客の信頼の強化</li>
          <li>製品責任リスクの低下</li>
          <li>eコマースリストに必要</li>
          <li>政府入札に不可欠</li>
          <li>ブランドの信頼性の向上</li>
          <li>競争上の優位性</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          非準拠に対する罰則
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証なしで椅子やスツールを販売すると、以下につながる可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>多額の罰金</li>
          <li>製品のリコール/差し押さえ</li>
          <li>工場ライセンスの取り消し</li>
          <li>刑事訴追</li>
          <li>輸入制限</li>
          <li>市場のブラックリスト登録</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          罰則はBIS法2016に基づいて執行されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          椅子とスツールのBIS認証が必要な人
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">必須対象：</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドの製造業者</li>
          <li>インドに輸出する外国の製造業者</li>
          <li>輸入業者</li>
          <li>ブランド所有者/貿易業者</li>
          <li>OEM/ODMサプライヤー</li>
          <li>小売チェーン</li>
          <li>オンライン販売業者</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          各工場には別々のBISライセンスが必要です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17632:2022に基づく一般用途の椅子とスツールのBIS証明書は、製品の安全性、構造的安定性、耐久性を確保するために必須です。BIS認証は、製造業者が高品質基準を維持するのに役立つだけでなく、合法的な市場アクセスを可能にし、消費者の信頼を高めます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          専門的な支援により、テストから検査、承認までの認証プロセスは、スムーズで予測可能で、完全に準拠したものになります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 椅子とスツールのBIS証明書
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 椅子とスツールにBIS認証は必須ですか？</strong>
              <br />
              はい、IS
              17632:2022に基づき、すべての一般用途の椅子とスツールは、インドで販売する前にBIS認証を受けている必要があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. どのようなテストが必要ですか？</strong>
              <br />
              安定性、強度、耐久性、衝撃、疲労、材料安全性テスト。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. BIS認証にはどのくらい時間がかかりますか？</strong>
              <br />
              通常30〜45日。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 認証費用はいくらですか？</strong>
              <br />
              テストと検査に応じて約₹60,000〜₹1,30,000。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 外国の製造業者は申請できますか？</strong>
              <br />
              はい、FMCSスキームの下で申請できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ISIマーキングは必須ですか？</strong>
              <br />
              はい、BISライセンスが付与された後は必須です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 椅子がBISテストに失敗する理由は？</strong>
              <br />
              一般的な原因には、弱い脚、接合部の強度不足、不安定性が含まれます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. 複数のモデルを1つのライセンスでカバーできますか？
              </strong>
              <br />
              類似性と規格準拠基準を満たす場合のみ可能です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 工場検査は必要ですか？</strong>
              <br />
              はい、ISIマーク認証には必須です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. どのような書類が必要ですか？</strong>
              <br />
              工場ライセンス、技術仕様、機械リスト、QC計画、製品図面など。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="椅子とスツールのBIS証明書 - IS 17632:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadJapanese />

        <FaqAuthorJapanese questionNumber={1} />
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
