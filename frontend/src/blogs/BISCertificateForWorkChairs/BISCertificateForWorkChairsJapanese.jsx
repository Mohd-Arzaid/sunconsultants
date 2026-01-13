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

const BISCertificateForWorkChairsJapanese = () => {
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

export default BISCertificateForWorkChairsJapanese;

const MetaTags = () => {
  const title = "作業用椅子のBIS認証 | IS 17631:2022 BISライセンス";
  const ogTitle = "作業用椅子のBIS認証 – IS 17631:2022ガイド";
  const twitterTitle = "作業用椅子のBISライセンス | IS 17631:2022";
  const metaDescription =
    "IS 17631:2022に基づく作業用椅子のBIS認証を取得。インドでのBIS認証のプロセス、書類、テスト、費用、タイムライン。";
  const ogDescription =
    "IS 17631:2022に基づく作業用椅子のBIS認証の完全ガイド。プロセス、費用、書類、テスト、BISライセンスのメリットを理解する。";
  const twitterDescription =
    "IS 17631:2022に基づく作業用椅子のBIS認証を申請。インドでのBISプロセス、書類、テスト、費用、タイムラインを学ぶ。";
  const metaKeywords =
    "作業用椅子のBIS認証, 作業用椅子のBISライセンス, IS 17631:2022, 作業用椅子のBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
      />
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
                    作業用椅子のBIS認証 – IS 17631:2022
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
          作業用椅子のBIS認証 – IS 17631:2022の完全コンプライアンスガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="作業用椅子のBISライセンス"
            alt="作業用椅子のBIS認証 - IS 17631:2022 BIS認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          オフィスや作業用の座席の使用が増加している—企業のワークスペース、コワーキングセンター、ホームオフィス、または機関のセットアップにおいて—安全性と人間工学的性能が不可欠になっています。製造業者が構造的に安定した、耐久性があり、ユーザーに安全な座席製品を供給することを確保するため、インド政府はIS
          17631:2022に基づく作業用椅子のBIS認証を義務付けています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          作業用椅子は通常、繰り返しの負荷、継続的な体の動き、傾斜、回転、高さ調整に耐えます。いかなる性能特性の故障も重傷につながる可能性があります。これが、IS
          17631:2022 –
          作業用椅子：安全性要件への準拠が、すべての製造業者と輸入業者にとって現在義務付けられている理由です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          このガイドは、標準、テスト、費用、文書化、責任、メリット、課題を含む完全なBISライセンスプロセスを説明します—ウェブサイト全体での重複を避けるために新鮮なコンテンツで作成されています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBIS認証の理解
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          インド標準局（BIS）は、インド市場内で供給される製品の品質と安全性を監督しています。必須の品質管理命令に記載されているインド標準に該当する製品は、販売前にBISによって評価および認証されなければなりません。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS認証 – それが表すもの
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証は、作業用椅子が以下であることを示します：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>性能と耐久性テストに合格している</li>
          <li>材料と構造の仕様を満たしている</li>
          <li>長期的な日常使用に安全である</li>
          <li>インド標準の人間工学的および構造的ガイドラインに準拠している</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらの要件を満たす製造業者は、ISIマークを貼付することを許可するBISライセンスを発行されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子に適用される標準 – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          タスクおよびオフィス作業用椅子を管理する標準は：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – 作業用椅子：安全性要件
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          この標準は、作業環境での長時間使用を目的とした座席に焦点を当てています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          この標準でカバーされる製品
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>人間工学的オフィスチェア</li>
          <li>タスクチェア</li>
          <li>回転チェア</li>
          <li>作業デスクチェア</li>
          <li>高さ調整可能な作業用椅子</li>
          <li>エグゼクティブ作業用椅子</li>
          <li>メッシュまたはファブリックバックの作業用椅子</li>
          <li>アームレスト付きの椅子</li>
          <li>傾斜/ロック機構付きの椅子</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17631:2022準拠が重要な理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          作業用椅子は、汎用椅子とは大きく異なります。なぜなら：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>継続的な動きをサポートする</li>
          <li>機械的および調整メカニズムを使用する</li>
          <li>動的負荷を運ぶ</li>
          <li>長時間使用のための耐久性が必要</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          不十分に作られた椅子は、以下で故障する可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ベースジョイント</li>
          <li>回転メカニズム</li>
          <li>ガスリフトシステム</li>
          <li>シート/バックサポート</li>
          <li>脚またはキャスター構造</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          これは、職場での負傷、運転停止、製品責任問題につながる可能性があります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          必須BIS認証が保証するもの
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>安全な人間工学的設計</li>
          <li>信頼性のある耐荷重能力</li>
          <li>循環テスト下での強力な耐久性</li>
          <li>機械的摩耗への耐性</li>
          <li>ユーザー安全性パラメータへの準拠</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          したがって、作業用椅子のBISライセンスの取得は、インドおよび外国の製造業者にとって交渉の余地がありません。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBISライセンスの範囲
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          この標準は、作業用椅子の要件をカバーしています。この標準は、完全に製造/組み立てられた作業用椅子に適用されます。また、組み立て準備済みユニットにも適用されます。その場合、この標準の要件は組み立てられたユニットに適用されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBIS認証プロセス（IS 17631:2022）ステップバイステップ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          作業用椅子の認証プロセスには、ラボ評価、工場監査、技術的審査の組み合わせが含まれます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ1 – 製品評価と標準マッピング
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          すべての椅子バリエーションを特定し、IS
          17631:2022に合わせます。どのモデルが同じ構造を共有し、どれが別々のテストを必要とするかを理解します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ2 – オンライン申請提出
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製造業者は、Manak Online
          BISポータルを通じて申請を提出します。必要な情報には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造現場の詳細</li>
          <li>原材料管理</li>
          <li>技術仕様</li>
          <li>生産能力</li>
          <li>ブランド所有権文書</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ3 – 費用支払い
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          以下の費用を支払う必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請</li>
          <li>処理</li>
          <li>テスト</li>
          <li>検査</li>
          <li>マーキング</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ4 – サンプルテスト（IS 17631:2022要件）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認定の研究室が、複数の安全性および性能基準に対して椅子を評価します。
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          作業用椅子のテストには以下が含まれます
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>シートとバックの静的負荷テスト</li>
          <li>耐久性負荷サイクル</li>
          <li>回転/回転テスト</li>
          <li>傾斜メカニズムの耐久性</li>
          <li>ガスリフトメカニズムの性能</li>
          <li>キャスター強度と転がり抵抗</li>
          <li>ベース安定性と過負荷テスト</li>
          <li>アームレスト負荷能力</li>
          <li>衝撃抵抗テスト</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          研究室はBISに詳細なテストレポートを発行します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ5 – 工場監査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS検査官は、施設の以下を確認します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>生産システム</li>
          <li>材料検査記録</li>
          <li>内部品質保証プロセス</li>
          <li>テスト機器と校正ログ</li>
          <li>テストおよび検査スキーム（STI）への準拠</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ6 – BISライセンスの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          適合性が確認されると、BISは以下を付与します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BISライセンス/ISIマーク認証</li>
          <li>固有のCML番号</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ7 – 一貫した準拠
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製造業者は以下を実行する必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>継続的な内部チェックを維持する</li>
          <li>マーキングルールに従う</li>
          <li>監視検査中に協力する</li>
          <li>ライセンスを定期的に更新する</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBIS認証に必要な書類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          完全な書類セットにより、より迅速な承認が保証されます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          事業および工場書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場登録</li>
          <li>製造図面とレイアウト</li>
          <li>生産ワークフロー</li>
          <li>機械リスト</li>
          <li>テスト機器リスト</li>
          <li>校正証明書</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技術書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>椅子のエンジニアリング図面</li>
          <li>メカニズム仕様</li>
          <li>材料データシート</li>
          <li>材料リスト</li>
          <li>組み立て指示書</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>承認署名者の身分証明</li>
          <li>ブランド承認書</li>
          <li>商標証明書</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS固有の書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請書</li>
          <li>約束書</li>
          <li>テスト依頼書</li>
          <li>ラベルサンプル</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17631:2022に基づくテスト要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          作業用椅子は、可動部品があるため、一般的な椅子よりも複雑なテストを受けます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          実施される主要テスト
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
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  前縁転倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  前方転倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  足置き付き椅子の前方転倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  アームレストなし椅子の横転倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  アームレスト付き椅子の横転倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  バックレストなし椅子の後方転倒
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  シート前縁静的負荷テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  シートとバックの組み合わせ静的負荷テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  アームレスト下方静的負荷テスト — 中央
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  アームレスト下方静的負荷テスト — 前方
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  アームレスト横方向静的負荷テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  足置き静的負荷テスト
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          これらのテストは、数日で数ヶ月または数年の通常使用をシミュレートします。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBIS認証における一般的な課題
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>✔ 1. 機械/傾斜テストの失敗</strong> –
            弱いメカニズムや低品質のハードウェアが原因であることが多い。
          </li>
          <li>
            <strong>✔ 2. ガスリフトメカニズムの非準拠</strong> –
            ガスリフトは厳格な圧力と安全性パラメータを満たす必要がある。
          </li>
          <li>
            <strong>✔ 3. 不十分なテストインフラ</strong> –
            作業用椅子のテストには専用のリグが必要。
          </li>
          <li>
            <strong>✔ 4. 製品グループ化の誤り</strong> – 異なるメカニズム =
            別々のテスト。
          </li>
          <li>
            <strong>✔ 5. STI非準拠</strong> –
            STIエラーはライセンス発行を遅らせる可能性がある。
          </li>
          <li>
            <strong>✔ 6. 書類の不一致</strong> –
            ブランド名とモデル名はBIS申請と完全に一致する必要がある。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBIS認証の利点
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インド全土での合法的な販売を促進</li>
          <li>顧客の信頼とブランドの評判を向上</li>
          <li>長期的な耐久性を保証</li>
          <li>保証請求と故障を削減</li>
          <li>規制上の罰則から保護</li>
          <li>eコマースプラットフォームでのリストを可能にする</li>
          <li>政府の入札および企業供給に必須</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証なしで作業用椅子を販売することに対する罰則
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          非準拠は以下をもたらす可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>重い金銭的罰則</li>
          <li>在庫の没収</li>
          <li>生産停止命令</li>
          <li>輸入禁止</li>
          <li>刑事訴追</li>
          <li>事業ライセンスの取り消し</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          厳格な執行は、BIS法2016の下で実施されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBIS認証を取得する必要があるのは誰か？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">以下に必須：</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドの製造業者</li>
          <li>インドに輸出する外国の製造業者</li>
          <li>ブランド所有者</li>
          <li>輸入業者</li>
          <li>OEM/ODMサプライヤー</li>
          <li>倉庫ディストリビューター</li>
          <li>小売およびオンラインファニチャーブランド</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          各工場には固有のBISライセンスが必要です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17631:2022に基づく作業用椅子のBIS認証は、インドで安全で耐久性があり、人間工学的に健全な座席製品を確保するために重要です。必須認証は顧客の信頼を高め、製品責任リスクを削減し、国家品質基準への準拠を保証します。専門的なサポートにより、テストから検査、ライセンスまでの認証の旅は効率的で予測可能になります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 作業用椅子のBIS認証（IS 17631:2022）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. IS 17631:2022に該当する椅子はどれですか？</strong>
              <br />
              作業環境向けに設計された椅子、オフィス人間工学的椅子、タスクチェア、回転チェア、調整可能な椅子を含む。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 作業用椅子にBIS認証は必須ですか？</strong>
              <br />
              はい。インドで作業用椅子を製造、販売、または輸入する前に、BIS認証が義務付けられています。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3.
                作業用椅子のテストが一般的な椅子のテストと異なる理由は何ですか？
              </strong>
              <br />
              作業用椅子は回転、ガスリフト、傾斜システム、キャスターなどのメカニズムを使用するため、高度な機械的および耐久性テストが必要です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. BIS認証にはどのくらい時間がかかりますか？</strong>
              <br />
              インドの製造業者では通常30〜45日、外国の製造業者では約120日、テストと文書化によって異なります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 外国の製造業者は申請できますか？</strong>
              <br />
              はい、FMCS（外国製造業者認証スキーム）を通じて。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. 椅子がBISテストに不合格になった場合はどうなりますか？
              </strong>
              <br />
              IS 17631:2022を満たすまで、再設計、修正、再テストが必要です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. BIS申請に必要な書類は何ですか？</strong>
              <br />
              工場詳細、製品図面、機械リスト、QC文書、ブランド所有権、法的書類。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. すべての椅子モデルに別々のテストが必要ですか？</strong>
              <br />
              モデルが設計、メカニズム、または構造で異なる場合、別々のテストが必要になる場合があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 承認後、ISIマーキングは必須ですか？</strong>
              <br />
              はい、ISIマークは製品、ラベル、包装に表示される必要があります。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="作業用椅子のBIS認証 - IS 17631:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadJapanese />

        <FaqAuthorJapanese questionNumber={4} />
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
