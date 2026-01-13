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

const BISCertificateForFlashlightJapanese = () => {
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

export default BISCertificateForFlashlightJapanese;

const MetaTags = () => {
  const title = "懐中電灯のBIS証明書 | IS 2083:2024 BISライセンス";
  const ogTitle = "懐中電灯のBIS認証 – IS 2083:2024ガイド";
  const twitterTitle = "懐中電灯のBISライセンス | IS 2083:2024";
  const metaDescription =
    "IS 2083:2024に基づく懐中電灯のBIS証明書を取得。インドでのBIS認証のプロセス、書類、テスト、費用、タイムライン。";
  const ogDescription =
    "IS 2083:2024に基づく懐中電灯のBIS認証の完全ガイド。プロセス、費用、書類、テスト、BISライセンスの利点を確認。";
  const twitterDescription =
    "IS 2083:2024に基づく懐中電灯のBIS証明書を申請。インドでのBISプロセス、書類、テスト、料金、タイムラインを学ぶ。";
  const metaKeywords =
    "懐中電灯のBIS証明書, 懐中電灯のBISライセンス, IS 2083:2024, 懐中電灯のBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/kaichu-dento-is-2083";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal、Sun Certification India運営責任者";

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
                    懐中電灯のBIS証明書 – IS 2083:2024
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
          IS 2083:2024に基づく懐中電灯のBIS証明書 – 完全コンプライアンスガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="懐中電灯のBISライセンス"
            alt="懐中電灯のBIS証明書 - BIS認証 IS 2083:2024"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          懐中電灯（一般的にトーチと呼ばれる）は、家庭、産業、緊急サービス、セキュリティ業務、屋外活動、災害管理で使用される必須の携帯型照明デバイスです。懐中電灯はバッテリー、回路、光源、外装を含む電気製品であるため、品質と安全性のコンプライアンスが重要です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          製品品質、性能、消費者安全を規制するため、インド標準局（BIS）はIS
          2083:2024 –
          懐中電灯：仕様を通知し、インドで販売、製造、または輸入される懐中電灯にBIS認証を義務付けています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          このページは、懐中電灯のBIS認証について、適用される標準、認証プロセス、テスト要件、文書、費用、タイムライン、罰則、コンプライアンス責任をカバーする包括的で独自の説明を提供します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証とは何か、なぜ懐中電灯に適用されるのか
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          インド標準局（BIS）は、インド市場で販売される製品が規定の安全性、品質、性能の基準を満たすことを確保する責任を負うインドの国家標準機関です。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS認証の意味
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS証明書は、懐中電灯が以下であることを確認します：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インド標準IS 2083:2024に準拠している</li>
          <li>すべての必須の実験室テストに合格している</li>
          <li>電気、機械、性能要件を満たしている</li>
          <li>消費者使用に安全である</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          承認されると、製造者はインド標準への準拠を示すISIマークを貼付することが許可されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          適用されるインド標準 – IS 2083:2024（懐中電灯：仕様）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – 懐中電灯：仕様
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          2083:2024は、一般的な照明に使用される携帯型懐中電灯の構造、性能、安全性、テスト要件を定義しています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 2083:2024の適用範囲
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          この標準は以下をカバーします：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ハンドヘルド懐中電灯（トーチ）</li>
          <li>バッテリー駆動の懐中電灯</li>
          <li>充電式懐中電灯</li>
          <li>LED懐中電灯</li>
          <li>緊急用およびユーティリティ懐中電灯</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          標準でカバーされる主要領域
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>電気的安全性</li>
          <li>発光性能</li>
          <li>機械的強度</li>
          <li>バッテリー互換性</li>
          <li>スイッチの耐久性</li>
          <li>過熱保護</li>
          <li>通常の摩耗に対する耐性</li>
          <li>マーキングおよびラベリング要件</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          この範囲に該当するすべての懐中電灯は、インド市場に参入する前に懐中電灯のBISライセンスを取得する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          なぜ懐中電灯にBIS認証が義務付けられているのか
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          懐中電灯は、あらゆる年齢層の消費者によって広く使用され、緊急事態、停電、産業運営などの重要な状況で使用されます。基準以下の懐中電灯は以下を引き起こす可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>電気的短絡</li>
          <li>バッテリーの漏れまたは爆発</li>
          <li>過熱</li>
          <li>火災の危険</li>
          <li>照明性能の低下</li>
          <li>早期故障</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS認証が保証するもの
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>電気的およびユーザーの安全性</li>
          <li>一貫した光出力</li>
          <li>耐久性のある構造</li>
          <li>安全なバッテリー動作</li>
          <li>インドの規制要件への準拠</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証されていない懐中電灯の販売は、BIS法2016に基づく法的違反です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          懐中電灯のBISライセンスの適用範囲
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong>
          この標準は、交換可能な一次バッテリーおよび最大48V
          d.c.の交換可能/内蔵二次バッテリーで駆動される懐中電灯の要件とテストを規定しています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong>
          この標準は、白熱電球とLEDモジュールを光源とするプリフォーカス型およびフォーカス型の懐中電灯に適用されます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> 以下はこの標準の適用範囲に含まれません：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            IS 10322（Part 5/Sec
            6）の適用範囲内にあるコードおよびプラグ接続のハンドランプ；
          </li>
          <li>IS 10322（Part 5/Sec 8）の適用範囲内にある緊急照明；および</li>
          <li>危険な場所向けの懐中電灯。</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          懐中電灯のBIS認証プロセス（IS 2083:2024）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          懐中電灯のBIS認証プロセスは、ISIマーク認証スキーム（スキーム-I）の下で実施され、複数の段階を含みます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ1 – 製品識別と標準マッピング
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製造者は、製品がIS
          2083:2024の下で懐中電灯として適格であることを確認し、以下を識別する必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>懐中電灯の種類</li>
          <li>電源（バッテリー/充電式）</li>
          <li>光源（LED、電球など）</li>
          <li>バリエーションとモデル</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ2 – オンラインBIS申請
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          申請は、BIS
          Manakオンラインポータルを通じて、以下とともに提出されます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造者の詳細</li>
          <li>工場住所</li>
          <li>製品説明</li>
          <li>ブランド/商標の詳細</li>
          <li>製造プロセス情報</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ3 – BIS費用の支払い
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          適用される費用には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請料</li>
          <li>処理手数料</li>
          <li>製品テスト費用</li>
          <li>工場検査費用</li>
          <li>マーキング料</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ4 – IS 2083:2024に基づく製品テスト
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          サンプルはBIS認定の実験室でテストされます。
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          懐中電灯の必須テスト
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>光度テスト</li>
          <li>光出力安定性テスト</li>
          <li>バッテリー耐久テスト</li>
          <li>スイッチ動作テスト</li>
          <li>機械的強度（落下テスト）</li>
          <li>絶縁抵抗テスト</li>
          <li>温度上昇テスト</li>
          <li>電気的安全性テスト</li>
          <li>マーキングおよびラベリング検証</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          テストレポートは実験室によって直接BISに提出されます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ5 – 工場検査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS職員が現地検査を実施し、以下を確認します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造設備</li>
          <li>品質管理システム</li>
          <li>入荷材料検査</li>
          <li>工程中のチェック</li>
          <li>完成品テスト</li>
          <li>テスト機器の較正</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          テストおよび検査スキーム（STI）への準拠が義務付けられています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ6 – BISライセンスの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          テストと検査が成功した後、BISは以下を発行します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS証明書</li>
          <li>ISIマーク承認</li>
          <li>CML（製造ライセンス証明書）番号</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          製造者は、インドで合法的に懐中電灯を製造および販売できるようになります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ7 – 認証後のコンプライアンス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          認証後、製造者は以下を行う必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品および包装にISIマークを正しく使用する</li>
          <li>ロットごとの品質記録を維持する</li>
          <li>BIS監視検査を許可する</li>
          <li>ライセンスを定期的に更新する</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          懐中電灯のBIS認証に必要な書類
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          製造書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場登録/ライセンス</li>
          <li>製造プロセスフローチャート</li>
          <li>機械のリスト</li>
          <li>社内テスト機器リスト</li>
          <li>較正証明書</li>
          <li>工場レイアウト</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技術書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品仕様書</li>
          <li>回路図</li>
          <li>バッテリー仕様</li>
          <li>部品表</li>
          <li>内部テストレポート</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>承認された署名者の身分証明</li>
          <li>住所証明</li>
          <li>ブランド承認書</li>
          <li>商標証明書（該当する場合）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS固有の書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS申請フォーム</li>
          <li>約束および宣言</li>
          <li>テスト依頼書</li>
          <li>ラベル原稿（ISIマーキング形式）</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 2083:2024に基づくテスト要件（詳細）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          懐中電灯は、安全性と性能を確保するために厳格なテストを受ける必要があります。
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          すべての必須テストに合格した製品のみがBIS承認の対象となります。
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  仕上げテスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  寸法の確認
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  マーキングの確認
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  スイッチの機能テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  絶縁抵抗テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  光分布テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  LED懐中電灯の回路電流
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  内蔵充電式バッテリー駆動懐中電灯の充電電流テスト
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          懐中電灯のBIS認証における一般的な課題
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>温度上昇テストの失敗</li>
          <li>一貫性のない発光出力</li>
          <li>スイッチの耐久性の低さ</li>
          <li>バッテリー互換性の問題</li>
          <li>ISIラベル形式の誤り</li>
          <li>不完全な文書</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          事前テストと専門家のガイダンスは、拒否リスクを大幅に減らします。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          懐中電灯製造者にとってのBIS認証の利点
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドでの販売の法的許可</li>
          <li>消費者信頼の向上</li>
          <li>製品信頼性の向上</li>
          <li>eコマースプラットフォームでの受け入れ</li>
          <li>政府調達の資格</li>
          <li>責任とリコールの削減</li>
          <li>強力なブランド信頼性</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証なしで懐中電灯を販売することに対する罰則
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          非準拠は以下をもたらす可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品の差し押さえ</li>
          <li>重い金銭的罰則</li>
          <li>輸入禁止</li>
          <li>製造停止</li>
          <li>BIS法に基づく刑事訴追</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          懐中電灯のBIS認証が必要なのは誰か
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドの製造者</li>
          <li>インドに輸出する外国の製造者</li>
          <li>輸入業者</li>
          <li>ブランド所有者</li>
          <li>OEM/ODMサプライヤー</li>
          <li>オンライン販売者および流通業者</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          各製造ユニットには別々のBISライセンスが必要です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          2083:2024に基づく懐中電灯のBIS証明書は、インドでの携帯型照明製品の安全性、性能、信頼性を確保する必須の規制要件です。コンプライアンスは消費者を保護するだけでなく、ブランドの信頼性と市場アクセスも強化します。専門家のガイダンスにより、製造者と輸入業者はスムーズかつ効率的にBIS認証を達成できます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 懐中電灯のBIS証明書（IS 2083:2024）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. インドでは懐中電灯にBIS認証が義務付けられていますか？
              </strong>
              <br />
              はい。IS 2083:2024に該当する懐中電灯はBIS認証が必要です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 懐中電灯に適用される標準はどれですか？</strong>
              <br />
              IS 2083:2024 – 懐中電灯：仕様。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. BISプロセスにはどのくらい時間がかかりますか？</strong>
              <br />
              インドの製造者には約30–45営業日、外国の製造者には約120日かかります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 外国の製造者はBIS認証を申請できますか？</strong>
              <br />
              はい、FMCSスキームを通じて申請できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ISIマーキングは義務ですか？</strong>
              <br />
              はい、認証された懐中電灯にはISIマークを表示する必要があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. 懐中電灯がテストに不合格になった場合どうなりますか？
              </strong>
              <br />
              製品を修正して再テストする必要があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 充電式懐中電灯も対象になりますか？</strong>
              <br />
              はい、IS 2083:2024の適用範囲内であれば対象です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. BISライセンスの有効期間はどのくらいですか？</strong>
              <br />
              1–2年、更新可能です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. 1つのライセンスで複数のモデルをカバーできますか？
              </strong>
              <br />
              はい、類似性基準を満たしていれば可能です。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-2083-2024-Sun-Certifications-India.pdf"
            title="BIS Certificate for Flashlight - IS 2083:2024 PDF"
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
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
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
