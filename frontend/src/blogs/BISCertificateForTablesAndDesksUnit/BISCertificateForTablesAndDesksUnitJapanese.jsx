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

const BISCertificateForTablesAndDesksUnitJapanese = () => {
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

export default BISCertificateForTablesAndDesksUnitJapanese;

const MetaTags = () => {
  const title =
    "テーブルと机のBIS認証 | IS 17633:2022 BISライセンス";
  const ogTitle = "テーブルと机のBIS認証 – IS 17633:2022ガイド";
  const twitterTitle = "テーブルと机のBISライセンス | IS 17633:2022";
  const metaDescription =
    "IS 17633:2022に基づくテーブルと机のBIS認証を取得。インドでのBIS認証のプロセス、書類、テスト、費用、タイムライン。";
  const ogDescription =
    "IS 17633:2022に基づくテーブルと机のBIS認証の完全ガイド。プロセス、費用、書類、テスト、BISライセンスのメリットを理解する。";
  const twitterDescription =
    "IS 17633:2022に基づくテーブルと机のBIS認証を申請。インドでのBISプロセス、書類、テスト、費用、タイムラインを学ぶ。";
  const metaKeywords =
    "テーブルと机のBIS認証, テーブルと机のBISライセンス, IS 17633:2022, テーブルと机のBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/teburu-to-tsukue-is-17633";
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
                    テーブルと机のBIS認証 – IS 17633:2022
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
          テーブルと机のBIS認証 – IS 17633:2022 BIS認証の完全ガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="テーブルと机のBISライセンス"
            alt="テーブルと机のBIS認証 - IS 17633:2022 BIS認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          テーブルと机のBIS認証は、インドのすべてのテーブルと机の製造業者、輸入業者、販売業者に義務付けられています。インド規格IS 17633:2022 – テーブルと机：安全性要件に基づき、これらの家具はインド市場で合法的に販売される前に、インド標準局（BIS）によってテストおよび認証される必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          テーブルと机は、家庭、オフィス、学校、大学、商業スペース、ホスピタリティ環境、産業職場の重要な構成要素です。重量、衝撃、継続的な使用を支えることが多いため、構造的な強度と安全性が重要です。消費者の保護と製品の信頼性を確保するため、BISは必須認証を義務付けています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          この包括的なガイドでは、IS 17633:2022、BIS登録プロセス、テスト、必要な書類、費用、タイムライン、罰則、製造業者と輸入業者へのメリットについて説明します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証は、インドの国家標準機関であるインド標準局が管理する規制遵守プロセスです。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS認証の意味
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証は、製品がインド規格によって設定された安全性、品質、性能、耐久性の要件を満たしていることを確認します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS認証のメリット
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>消費者の安全性を確保</li>
          <li>高品質な製造をサポート</li>
          <li>製品故障のリスクを低減</li>
          <li>市場での受け入れを改善</li>
          <li>BIS品質管理命令（QCO）に基づく法的要件</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          承認されると、製品にはライセンス番号とともにBISマーク（ISIマーク）が表示されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          テーブルと机に適用されるインド規格は？ – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          適用されるBIS規格は次のとおりです：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – テーブルと机：安全性要件
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          この規格は、住宅、商業、ホスピタリティ、機関環境で使用されるあらゆる種類のテーブルと机の性能、構造安全性、耐久性要件を定義しています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          対象製品
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>オフィスデスク</li>
          <li>コンピューターデスク</li>
          <li>学習テーブル</li>
          <li>ダイニングテーブル</li>
          <li>コーヒーテーブル</li>
          <li>ワークデスク</li>
          <li>トレーニングデスク</li>
          <li>学校/大学の机</li>
          <li>教師用テーブル</li>
          <li>モジュラー作業台テーブル</li>
          <li>書き物テーブル</li>
          <li>会議/会議テーブル</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17633:2022の主要安全性パラメータ
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>構造の安定性</li>
          <li>耐荷重能力</li>
          <li>衝撃抵抗性</li>
          <li>水平/垂直力性能</li>
          <li>表面仕上げ品質</li>
          <li>縁の安全性</li>
          <li>繰り返し使用下での耐久性</li>
          <li>材料の安全性</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          インドで販売されるすべてのテーブルまたは机は、テーブルと机のBIS登録を通じてこれらのパラメータに準拠する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          テーブルと机のBIS認証が必須である理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          テーブルと机は、家庭、オフィス、学校、公共エリアで見られる高使用率の家具です。構造的な故障は、以下のような事故を引き起こす可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>重量による崩壊</li>
          <li>鋭い縁による怪我</li>
          <li>使用中の不安定性</li>
          <li>接合部の破損</li>
          <li>表面の剥離</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          これらの危険を避けるため、BIS認証は以下を確保します：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>安全な設計と構造</li>
          <li>構造負荷要件への準拠</li>
          <li>耐久性のある性能</li>
          <li>転倒と崩壊の防止</li>
          <li>高品質な材料の選択</li>
          <li>統一された市場基準</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          テーブルと机のBISライセンスなしにテーブルと机を販売することは、インドでは違法です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          テーブルと机のBIS認証プロセス（IS 17633:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証プロセスは、製品テストと工場検査を含むISIスキーム（適合性評価スキーム-I）に従います。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ1 – 製品カテゴリと規格の特定
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          テーブル/机がIS 17633:2022に該当することを確認します。バリエーションと材料の数を特定します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ2 – BIS申請提出（オンライン提出）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS Manakオンラインポータルで申請を記入します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造業者の詳細</li>
          <li>工場住所</li>
          <li>製品仕様</li>
          <li>商標の詳細</li>
          <li>品質管理システム</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ3 – BIS認証費用の支払い
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">含まれるもの：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請料</li>
          <li>処理料</li>
          <li>製品テスト料</li>
          <li>工場検査料</li>
          <li>マーキング料</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ4 – BIS認定実験室でのサンプルテスト
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製品はIS 17633:2022に規定されている完全なテストを受ける必要があります。
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          実施されるテスト
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>安定性テスト</li>
          <li>強度テスト（静的負荷）</li>
          <li>耐久性テスト（繰り返し負荷）</li>
          <li>衝撃テスト</li>
          <li>たわみ測定</li>
          <li>縁と表面の安全性テスト</li>
          <li>作業スペース負荷テスト</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          実験室はテストレポートを直接BISにアップロードします。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ5 – BIS工場検査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS職員が製造施設を訪問して以下を確認します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>品質管理体制</li>
          <li>社内テスト能力</li>
          <li>原材料管理</li>
          <li>生産ラインと機械</li>
          <li>計器の較正</li>
          <li>STI（テストと検査スキーム）への準拠</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ6 – BISライセンスの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">BISが発行するもの：</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS認証</li>
          <li>ISIマーク承認</li>
          <li>固有のCMLライセンス番号</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          これにより、製造業者は合法的にテーブル/机にマークを付けてインドで販売できます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ7 – ライセンス後のコンプライアンス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製造業者は以下を行う必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>STIに従って記録を維持</li>
          <li>ISIマーキングを正しく使用</li>
          <li>定期的なBIS検査を許可</li>
          <li>1〜2年ごとにライセンスを更新</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          テーブルと机のBISライセンスの範囲
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> この規格は、座った位置および/または立った位置で使用される、成人が使用するテーブルと机の性能と安全性、すなわち強度、安定性、耐久性に関する要件をカバーしています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> この規格は、完全に製造/製作されたテーブルと机に適用されます。組み立て済みユニットにも適用されます。その場合、この規格の要件は組み立て済みユニットに適用されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          テーブルと机のBIS認証に必要な書類
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          製造書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場ライセンス</li>
          <li>機械リスト</li>
          <li>テスト機器リスト</li>
          <li>較正証明書</li>
          <li>工場レイアウト</li>
          <li>プロセスフロー図</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技術書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>テーブル/机の図面</li>
          <li>材料表</li>
          <li>製品仕様</li>
          <li>社内品質テストレポート</li>
          <li>製品の写真/動画</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>承認された署名者のID証明</li>
          <li>住所証明</li>
          <li>ブランド承認書</li>
          <li>商標登録証明書</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS申請書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>記入済み申請書</li>
          <li>製造業者の約束書</li>
          <li>テスト依頼書</li>
          <li>承認書</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          完全な書類により、より迅速な承認が保証されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022に基づくテスト要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          テストは強度、安定性、耐久性、安全性を評価します。
        </p>

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
                  安定性テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  指定負荷
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  時折の重い負荷用
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  水平静的力下での強度
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  一般
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ガラステーブルトップの垂直衝撃テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  その他すべてのテーブルトップの垂直衝撃テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  テーブルトップのたわみ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  落下テスト
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          テストはBIS承認の実験室でのみ実施する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          一般的な課題と回避方法
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. 負荷または耐久性テストに失敗する製品</strong>
            <br />
            解決策：接合部を強化し、BIS準拠材料を使用し、補強を追加します。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. 不完全な書類</strong>
            <br />
            解決策：すべての法的、技術的、製造書類を事前に準備します。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. 適切なテスト機器を備えていない工場</strong>
            <br />
            解決策：必要な計器を設置し、BISガイドラインに従って較正を維持します。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. 誤ったラベリング</strong>
            <br />
            解決策：ISIマーキングがBISルールに正確に従うことを確認します。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. 製品モデルの誤分類</strong>
            <br />
            解決策：バリエーションを正しく分類するために専門的なガイダンスを得ます。
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          テーブルと机のBIS認証のメリット
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドでの販売の法的承認</li>
          <li>顧客の信頼の向上</li>
          <li>製品の耐久性の向上</li>
          <li>大手小売業者とeコマースプラットフォームへのアクセス</li>
          <li>製品責任リスクの低減</li>
          <li>ブランドの信頼性の向上</li>
          <li>政府QCOへの準拠</li>
          <li>競争力のある市場優位性</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          非準拠に対する罰則
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証なしでテーブル/机を販売または配布すると、以下が発生する可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品の差し押さえ</li>
          <li>多額の罰金</li>
          <li>刑事訴追</li>
          <li>輸入禁止</li>
          <li>事業閉鎖命令</li>
          <li>ライセンスの取り消し</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          インド標準局法2016は、厳格な罰則を執行します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          テーブルと机のBIS認証が必要なのは誰ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          この認証は以下に必須です：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドの製造業者</li>
          <li>外国の製造業者</li>
          <li>輸入業者</li>
          <li>貿易業者/ブランド所有者</li>
          <li>OEM/ODMサプライヤー</li>
          <li>家具販売業者</li>
          <li>eコマース販売業者</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          各工場は別々のBISライセンスを取得する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証コンサルティングで私たちを選ぶ理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          エンドツーエンドのサポートを提供します：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>規格の解釈（IS 17633:2022）</li>
          <li>製品分類</li>
          <li>書類作成</li>
          <li>テスト調整</li>
          <li>BISポータル提出</li>
          <li>工場検査サポート</li>
          <li>BISとの継続的なフォローアップ</li>
          <li>ライセンス承認</li>
          <li>更新とコンプライアンス管理</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          私たちの専門知識により、迅速で、問題なく、エラーのない認証が保証されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022に基づくテーブルと机のBIS認証は、製品の安全性、性能、耐久性、国家規格への準拠を確保する必須の適合要件です。製造業者と輸入業者は、ISIマークを取得するために、製品テスト、工場検査を受け、すべてのBIS書類とラベリングルールを満たす必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          専門家の支援により、認証プロセス全体がスムーズで迅速になり、BIS規制に完全に準拠します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          よくある質問 – テーブルと机のBIS認証（IS 17633:2022）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. テーブルと机のBIS認証は必須ですか？
              </strong>
              <br />
              はい。IS 17633:2022に基づき、すべてのテーブルと机はインドで販売される前にBIS認証を受ける必要があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 認証に必要なテストは何ですか？</strong>
              <br />
              必須テストには、安定性、強度、耐久性、たわみ、衝撃、表面安全性テストが含まれます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. BIS認証の費用はいくらですか？</strong>
              <br />
              費用は₹65,000 – ₹1,30,000の範囲で、テストと検査の要因によって異なります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. 外国の製造業者もBIS認証が必要ですか？
              </strong>
              <br />
              はい、BISによる海外工場検査を含むFMCSスキームを通じて必要です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. 1つのライセンスで複数のテーブル/机モデルをカバーできますか？
              </strong>
              <br />
              はい、ただしモデルが構造とテストパラメータで類似している場合のみです。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. BISプロセスにはどのくらい時間がかかりますか？</strong>
              <br />
              約30〜45日。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. BIS認定の実験室でのテストは必須ですか？</strong>
              <br />
              はい、BIS承認の実験室のみがテストを実施できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 製品が不合格になった場合はどうなりますか？</strong>
              <br />
              再設計し、テストのために再提出する必要があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 認証後のISIマーキングは必須ですか？</strong>
              <br />
              はい、製品と包装にISIマークが必要です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. 必要な書類は何ですか？</strong>
              <br />
              技術図面、BOM、工場書類、テストレポート、QC計画、法的書類。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="テーブルと机のBIS認証 - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
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
                src="/services-images/BIS.jpg"
                alt="BISロゴ"
                title="BISロゴ"
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
                alt="EPR認証ロゴ"
                title="EPR認証ロゴ"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR認証
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
              LMPC認証
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
              インド製造のためのISIマーク（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
