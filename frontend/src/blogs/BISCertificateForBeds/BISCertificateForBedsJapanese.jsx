import FaqAuthorJapanese from "@/components/common/FaqAuthor/FaqAuthorJapanese";
import ServicesRightSideContentJapanese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentJapanese";
import ManyUsersAlsoReadJapanese from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadJapanese";
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

const BISCertificateForBedsJapanese = () => {
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

export default BISCertificateForBedsJapanese;

const MetaTags = () => {
  const title = "ベッドのBIS認証 | IS 17635:2022 BISライセンス";
  const ogTitle = "ベッドのBIS認証 – IS 17635:2022ガイド";
  const twitterTitle = "ベッドのBISライセンス | IS 17635:2022";
  const metaDescription =
    "IS 17635:2022に基づくベッドのBIS認証を取得。インドでのBIS認証のプロセス、書類、テスト、費用、タイムライン。";
  const ogDescription =
    "IS 17635:2022に基づくベッドのBIS認証の完全ガイド。プロセス、費用、書類、テスト、BISライセンスのメリットを理解する。";
  const twitterDescription =
    "IS 17635:2022に基づくベッドのBIS認証を申請。インドでのBISプロセス、書類、テスト、費用、タイムラインを学ぶ。";
  const metaKeywords =
    "ベッドのBIS認証, ベッドのBISライセンス, IS 17635:2022, ベッドのBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/beddo-is-17635";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/chuangju-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/bedden-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/betten-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/beddo-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/chimdae-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/camas-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-is-17635"
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
                    ベッドのBIS認証 – IS 17635:2022
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
          ベッドのBIS認証 – IS 17635:2022 完全ガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="ベッドのBISライセンス"
            alt="ベッドのBIS認証 - IS 17635:2022 BIS認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ベッドのBIS認証は、IS
          17635:2022に基づき、インドで必須要件となっています。この規格は、家庭用および商業用のベッドを製造・輸入する製造業者および輸入業者向けです。最新のインド規格IS
          17635:2022 –
          ベッド（安全性要件）に基づき、すべてのベッドはインド市場で販売される前に、厳格な安全性、耐久性、構造、性能の基準を満たす必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ベッドは、家庭、ホテル、病院、ホステル、PG宿泊施設、機関施設で日常的に使用される重要な家具製品です。構造的な弱点、鋭いエッジ、材料の故障、または耐荷重能力の低さは、深刻な怪我を引き起こす可能性があります。このようなリスクを防ぐために、インド標準局（BIS）はベッドのBIS認証を義務付けています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          この包括的なガイドでは、ベッドのBISライセンスについて、適用される規格、認証プロセス、テスト要件、書類、費用、タイムライン、罰則、メリットを含めて説明します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証は、インドの国家標準機関であるインド標準局が導入した適合性評価スキームです。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS証明書とは何ですか？
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS証明書は、製品がインド規格に準拠し、安全で信頼性が高く、使用に適していることを確認します。認証製品には、一般的にISIマークとして知られるBIS認証マークが表示されます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS証明書の意味
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製品が以下を正常に通過したことを示します：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>実験室テスト</li>
          <li>工場検査</li>
          <li>品質管理の検証</li>
          <li>安全性コンプライアンスの評価</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ベッドのBISロゴは、顧客に製品が政府承認の品質および安全性基準を満たしていることを保証します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッドに適用されるBIS規格 – IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ベッドに適用されるインド規格は次のとおりです：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17635:2022</strong> – ベッド：安全性要件
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          この規格は、住宅および商業環境で使用されるベッドの基本的な安全性および性能要件を定義しています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17635:2022がカバーする内容
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>構造的強度</li>
          <li>耐荷重能力</li>
          <li>安定性と耐久性</li>
          <li>材料品質</li>
          <li>エッジと表面仕上げ</li>
          <li>崩壊に対する安全性</li>
          <li>挟み込みの危険の不在</li>
          <li>長期性能</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          インドで製造または輸入されるすべてのベッドは、IS
          17635:2022に準拠し、ベッドのBIS登録を取得する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッドにBIS認証が必須である理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ベッドは長時間使用され、人間の体重を継続的に支えます。設計が不十分なベッドは、怪我、崩壊、または長期的な健康リスクを引き起こす可能性があります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ベッドにBIS認証が必要な理由
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>構造的完全性を確保</li>
          <li>崩壊と破損を防止</li>
          <li>材料品質を管理</li>
          <li>鋭いエッジと安全でない仕上げを排除</li>
          <li>消費者を保護</li>
          <li>統一された国内品質を確保</li>
          <li>BIS通知に基づく必須要件</li>
          <li>インドでの合法的な販売に必要</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ベッドのBISライセンスなしでは、インドでベッドを販売または輸入することは違法です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッドのBIS認証プロセス（IS 17635:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          インドでのBIS認証プロセスは、ISI認証スキームの下で構造化された手順に従います。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ1 – 規格と製品範囲の特定
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022の下での適用性を確認し、製品バリエーションを決定します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ2 – BIS申請（オンライン）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS Manakオンラインポータルを通じて申請を提出します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造業者の詳細</li>
          <li>工場住所</li>
          <li>製品説明</li>
          <li>ブランド名</li>
          <li>品質管理の詳細</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ3 – BIS認証費用
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          以下を含む適用費用を支払います：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請費用</li>
          <li>処理費用</li>
          <li>テスト費用</li>
          <li>検査費用</li>
          <li>マーキング費用</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ4 – 製品テスト
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          サンプルはBIS認定の実験室でテストされます。
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          テストには以下が含まれます
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>静的荷重テスト</li>
          <li>耐久性テスト</li>
          <li>安定性テスト</li>
          <li>接合部強度テスト</li>
          <li>表面仕上げテスト</li>
          <li>エッジ安全性テスト</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ5 – 工場検査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS職員が以下を検査します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造施設</li>
          <li>原材料管理</li>
          <li>工程中のテスト</li>
          <li>品質保証システム</li>
          <li>テスト設備</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ6 – BISライセンスの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          コンプライアンス後、BISは以下を発行します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS証明書</li>
          <li>ISIマークの許可</li>
          <li>CML番号</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ7 – 認証後のコンプライアンス
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>監視検査</li>
          <li>1〜2年ごとの更新</li>
          <li>継続的な品質管理</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッドのBISライセンスの範囲
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong>
          この規格は、家庭用および非家庭用の成人用ベッドの性能および安全性に関連する要件をカバーします。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong>
          この規格は、完全に製造/組み立てられたベッドに適用されます。組み立て準備済みユニットにも適用され、その場合、この規格の要件は組み立てられたユニットに適用されます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.3</strong>
          この規格は、ウォーターベッド、エアベッド、折りたたみベッド、二段ベッド、特別なニーズを持つ人向けのベッド、および医療・医療目的のベッドをカバーしません。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッドのBIS認証に必要な書類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          以下は、BIS証明書の書類の完全なリストです：
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          製造業者の書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場登録/ライセンス</li>
          <li>製造プロセスのフローチャート</li>
          <li>機械リスト</li>
          <li>テスト設備リスト</li>
          <li>校正証明書</li>
          <li>工場レイアウト</li>
          <li>品質管理計画</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>住所証明</li>
          <li>身分証明</li>
          <li>ブランド認可</li>
          <li>商標証明書（該当する場合）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技術書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品図面</li>
          <li>仕様</li>
          <li>材料リスト</li>
          <li>内部テストレポート</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッドのテスト要件（IS 17635:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ベッドは、コンプライアンスを確保するために厳格なテストを受ける必要があります。
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
                  設計と仕上げ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  寸法
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  安定性テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ベッドベースへの垂直静的荷重
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  サイドレールへの垂直静的荷重
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  水平静的荷重テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  垂直衝撃テスト
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          テストは、BIS承認の実験室でのみ実施する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          一般的な課題と回避方法
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>規格の選択ミス</strong> –
            常に正しいインド規格を確認してください。
          </li>
          <li>
            <strong>書類の不備</strong> –
            書類の不足は遅延を引き起こします。事前に準備してください。
          </li>
          <li>
            <strong>実験室テストの失敗</strong> –
            高品質の材料と構造を確保してください。
          </li>
          <li>
            <strong>工場の準備不足</strong> –
            QMSとテスト設備が適切に維持されていることを確認してください。
          </li>
          <li>
            <strong>商標の不一致</strong> –
            ブランド名はライセンス申請と一致する必要があります。
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッドのBIS認証のメリット
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドでの合法的な販売</li>
          <li>顧客の信頼の向上</li>
          <li>eコマースプラットフォームへのアクセス</li>
          <li>政府入札への参加資格</li>
          <li>責任の軽減</li>
          <li>強力なブランドの信頼性</li>
          <li>インド規格への準拠</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          非準拠に対する罰則
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証なしでベッドを販売すると、以下が発生する可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>多額の罰金</li>
          <li>製品の差し押さえ</li>
          <li>事業の停止</li>
          <li>法的措置</li>
          <li>市場からの禁止</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッドのBIS証明書が必要なのは誰ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          以下の事業者は、ベッドのBISライセンスを取得する必要があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドの製造業者</li>
          <li>外国の製造業者</li>
          <li>輸入業者</li>
          <li>家具ブランド</li>
          <li>OEM/ODMサプライヤー</li>
          <li>eコマース販売業者</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          各製造ユニットには、別々のBISライセンスが必要です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッドのBIS認証で私たちを選ぶ理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          エンドツーエンドのBISコンサルティングを提供します。以下を含みます：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>規格マッピング</li>
          <li>書類サポート</li>
          <li>テスト調整</li>
          <li>申請提出</li>
          <li>工場検査の処理</li>
          <li>BIS連絡</li>
          <li>ライセンス発行</li>
          <li>更新および監視サポート</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022に基づくベッドのBIS証明書は、安全性、品質、耐久性を確保する必須の法的要件です。ベッドのBISライセンスを取得することで、消費者を保護し、ブランド価値を強化し、インド全土での合法的な市場アクセスを可能にします。専門家のサポートにより、認証プロセスはシームレスで効率的になります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – ベッドのBIS証明書
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. インドでベッドにBIS認証は必須ですか？</strong>
              <br />
              はい、IS 17635:2022に基づきます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. BIS証明書の有効期限は？</strong>
              <br />
              1〜2年、更新可能です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 外国の製造業者は申請できますか？</strong>
              <br />
              はい、FMCSの下で申請できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. BIS証明書はオンラインで申請できますか？</strong>
              <br />
              はい。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ベッドにISIマークは必須ですか？</strong>
              <br />
              はい。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. プロセスにはどのくらい時間がかかりますか？</strong>
              <br />
              30〜45日。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 木製と金属製のベッドの両方が対象ですか？</strong>
              <br />
              はい、IS 17635:2022に準拠している場合。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 工場検査は必須ですか？</strong>
              <br />
              はい。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 貿易業者はBISに申請できますか？</strong>
              <br />
              製造管理を有するブランド所有者のみ。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="ベッドのBIS証明書 - IS 17635:2022 PDF"
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
              BIS Mark (ISI License) for Foreign Manufacture
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
              CDSCO Registration Certification
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
              BIS (CRS) Registration
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
              Plastic Waste Management
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
              EPR Certificate certifications
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
              LMPC Certificate certifications
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
              BIS Registration Certificate
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
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
