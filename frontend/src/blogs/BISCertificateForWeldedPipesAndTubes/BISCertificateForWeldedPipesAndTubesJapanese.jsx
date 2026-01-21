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

const BISCertificateForWeldedPipesAndTubesJapanese = () => {
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

export default BISCertificateForWeldedPipesAndTubesJapanese;

const MetaTags = () => {
  const title =
    "溶接管・チューブのBIS証明書 | IS 17876:2022 BISライセンス";
  const ogTitle =
    "溶接管・チューブのBIS認証 – IS 17876:2022ガイド";
  const twitterTitle = "溶接管・チューブのBISライセンス | IS 17876:2022";
  const metaDescription =
    "IS 17876:2022の下で溶接管・チューブのBIS証明書を取得。インドでのBIS認証のプロセス、書類、テスト、費用、タイムライン。";
  const ogDescription =
    "IS 17876:2022に基づく溶接管・チューブのBIS認証の完全ガイド。プロセス、費用、書類、テスト、BISライセンスの利点を知る。";
  const twitterDescription =
    "IS 17876:2022の下で溶接管・チューブのBIS証明書を申請。インドでのBISプロセス、書類、テスト、費用、タイムラインを学ぶ。";
  const metaKeywords =
    "溶接管・チューブのBIS証明書, 溶接管・チューブのBISライセンス, IS 17876:2022, 溶接管・チューブのBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/yousetsu-kan-chuubu-is-17876";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal、Sun Certification India運営責任者";

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
                    溶接管・チューブのBIS証明書 – IS 17876:2022
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
          IS 17876:2022の下でのステンレス鋼溶接管・チューブのBIS証明書
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="溶接管・チューブのBISライセンス"
            alt="溶接管・チューブのBIS証明書 - IS 17876:2022 BIS認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ステンレス鋼溶接管・チューブは、建設、化学処理、食品・飲料、水の配布、
          構造用途、一般エンジニアリングなどの業界で広く使用されています。
          これらの管は流体、ガス、場合によっては腐食性化学物質を運ぶため、
          市場に出る前に、その強度、耐食性、製造の完全性を検証する必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          品質を規制し、公共および産業の安全性を確保するため、インド政府は
          IS 17876:2022の下でステンレス鋼溶接管・チューブのBIS認証を義務付けています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          この包括的なガイドは、完全なBIS承認プロセス、文書化、テスト要件、
          費用、タイムライン、製造者の義務、利点、コンプライアンス規則を説明しています
          — 新鮮で独自の形式で書かれており、以前のコンテンツとの重複をゼロにしています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ステンレス鋼溶接管・チューブのBIS認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          インド標準局（BIS）は、さまざまな認証スキームを通じてインドの製品品質を
          規制しています。必須の品質管理命令（QCO）の対象となる製品は、
          製造、輸入、在庫、販売、または配布される前にBISライセンスを取得する必要があります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS認証が保証するもの
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS証明書は、ステンレス鋼溶接管・チューブが以下であることを確認します：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>寸法精度を満たしている</li>
          <li>必要な機械的強度を有している</li>
          <li>耐食性を示している</li>
          <li>承認されたグレードのステンレス鋼を使用して製造されている</li>
          <li>インドのテスト条件に準拠している</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証後、製品にはライセンス（CML）番号とともにISIマークを表示する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ステンレス鋼溶接管・チューブのBIS標準 – IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          適用される標準は：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – 一般用途のステンレス鋼溶接管・チューブ
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          この標準は以下を概説しています：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>化学組成</li>
          <li>機械的特性要件</li>
          <li>製造公差</li>
          <li>寸法仕様</li>
          <li>表面と仕上げのガイドライン</li>
          <li>静水圧および非破壊テスト</li>
          <li>安全性パフォーマンス基準</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらの管は一般用途のアプリケーションに使用され、幅広い動作環境を
          満たす必要があることを意味します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17876:2022製品にBIS認証が必須である理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ステンレス鋼溶接管は以下で広く使用されています：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>水道パイプライン</li>
          <li>化学物質輸送</li>
          <li>食品・医薬品工場</li>
          <li>構造エンジニアリング</li>
          <li>排気および換気システム</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          適切に製造されていない場合、これらの管は以下につながる可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>漏れの故障</li>
          <li>圧力下での破裂</li>
          <li>腐食と汚染</li>
          <li>構造的不安定性</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          基準以下の材料がサプライチェーンに入るのを防ぐため、BISは
          すべての製造者（国内または外国）にステンレス鋼溶接管・チューブの
          BISライセンスを取得することを要求しています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17876:2022のBIS認証プロセス
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証手順には、厳格な実験室テストと検査が含まれます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ1 – 製品カテゴリーとグレードの特定
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          製造されているステンレス鋼の特定のグレードを評価し、
          IS 17876:2022の対象であることを確認します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ2 – オンライン申請の提出
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製造者はManak Online BISポータルを通じて申請し、以下を提出する必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場の詳細</li>
          <li>生産能力</li>
          <li>プロセスフロー図</li>
          <li>原材料の供給源</li>
          <li>品質保証文書</li>
          <li>ブランドおよび商標の詳細</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ3 – BIS費用の支払い
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          支払いには以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請料</li>
          <li>処理料</li>
          <li>テスト料</li>
          <li>工場検査料</li>
          <li>マーキング料</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ4 – 工場検査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS職員は以下を検査します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>生産順序</li>
          <li>原材料の保管</li>
          <li>溶接機械</li>
          <li>焼鈍/熱処理プロセス</li>
          <li>品質文書</li>
          <li>テストインフラ</li>
          <li>校正記録</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          テスト・検査スキーム（STI）への準拠を確認します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ5 – BISライセンスの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          すべてのパラメータがBIS要件を満たす場合、製造者は以下を受け取ります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS証明書</li>
          <li>ISIマークの承認</li>
          <li>固有のCMLライセンス番号</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ6 – ライセンス後の義務
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ライセンス保持者は以下を行う必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>継続的な内部品質テストを維持する</li>
          <li>ISIマークを正しく使用する</li>
          <li>定期的なBIS監視検査中に協力する</li>
          <li>ライセンスを時間内に更新する</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ステンレス鋼溶接管・チューブのBISライセンスの範囲
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> この標準は、一般用途のステンレス鋼溶接管・チューブの
          要件をカバーしています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> この標準は、特定の目的のために意図された
          ステンレス鋼溶接管・チューブの要件を指定しておらず、これらは
          別のインド標準によってカバーされています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証に必要な書類（IS 17876:2022）
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 製造文書
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場ライセンス/登録</li>
          <li>レイアウト図</li>
          <li>プロセスフローチャート</li>
          <li>機械リスト（溶接、成形、焼鈍、テスト）</li>
          <li>社内テスト機器リスト</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 技術文書
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>グレード仕様</li>
          <li>化学および機械的テストデータ</li>
          <li>溶接手順仕様</li>
          <li>熱処理記録</li>
          <li>寸法公差チャート</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 法的文書
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>身分証明書</li>
          <li>住所証明</li>
          <li>ブランド所有権文書</li>
          <li>承認された署名者からの手紙</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. BIS申請文書
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>記入済み申請書</li>
          <li>約束および宣言</li>
          <li>テスト要求文書</li>
          <li>ISIマーキング用ラベルアートワーク</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17876:2022の下でのテスト要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          テストはBIS承認の核心であり、すべてのバッチが厳格な品質基準を
          満たすことを保証します。
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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  取鍋分析
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  製品分析
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  引張要件
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  管
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  チューブ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  フランジングテスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  逆フラットニングテスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  フラットニングテスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  結晶粒度
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  漏れ密閉性テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  工作、仕上げ、外観
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  寸法と公差
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証中に直面する課題
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>化学組成テストの失敗</strong>
            <br />
            非標準の合金元素や不純物が拒否の原因となります。
          </li>
          <li>
            <strong>NDT中の溶接欠陥</strong>
            <br />
            不十分な溶接プロセスや一貫性のない熱処理が欠陥を引き起こす可能性があります。
          </li>
          <li>
            <strong>寸法非適合</strong>
            <br />
            壁厚の変動が一般的に失敗につながります。
          </li>
          <li>
            <strong>不完全な文書</strong>
            <br />
            欠落または不明確な記録がライセンス承認を遅らせます。
          </li>
          <li>
            <strong>校正の問題</strong>
            <br />
            未校正の機器は信頼できないテスト結果をもたらします。
          </li>
          <li>
            <strong>誤ったブランディング/ラベル提出</strong>
            <br />
            ISIマークのアートワークはBIS仕様と一致する必要があります。
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ステンレス鋼管・チューブのBIS認証の利点
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドでの製造/販売の法的承認</li>
          <li>品質と安全性の保証</li>
          <li>評判と市場の信頼性の向上</li>
          <li>政府およびPSU入札での受容性</li>
          <li>輸出ポテンシャルの増加</li>
          <li>製品故障リスクの削減</li>
          <li>偽造または基準以下の競合他社からの保護</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          非遵守に対する罰則
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          非認証製品を販売する製造者/輸入者は以下に直面します：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品の押収</li>
          <li>BIS法の下での重い罰則</li>
          <li>製造業務の閉鎖</li>
          <li>輸入制限</li>
          <li>法的起訴</li>
          <li>既存ライセンスの取り消し</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          コンプライアンスは必須であり、厳格に執行されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          SS溶接管・チューブのBISライセンスを取得する必要があるのは誰ですか？
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドの製造者</li>
          <li>インドに輸出する海外の製造者</li>
          <li>ステンレス鋼管の輸入者</li>
          <li>OEMサプライヤー</li>
          <li>産業用ディストリビューター</li>
          <li>プライベートラベルブランド</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          各製造場所は独自のライセンスを取得する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17876:2022の下でのステンレス鋼溶接管・チューブのBIS証明書は、
          複数の業界で使用される重要な配管製品の信頼性、耐久性、パフォーマンスを
          保証します。必須認証が現在実施されているため、製造者と輸入者は、
          インド市場で合法的に製品を供給するために、プロセス、テスト、文書を
          BIS要件に合わせる必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          専門家のガイダンスにより、BISライセンスプロセスはより速く、
          よりスムーズで、完全に準拠したものになります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — ステンレス鋼溶接管・チューブのBIS認証
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. ステンレス鋼溶接管にBIS認証は必須ですか？
              </strong>
              <br />
              はい。IS 17876:2022の下で、BIS認証はすべての製造者と輸入者に
              義務付けられています。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. どのようなテストが必要ですか？</strong>
              <br />
              化学分析、引張テスト、硬度テスト、静水圧テスト、NDT、
              フラットニング、寸法チェック。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. BIS認証にはどのくらい時間がかかりますか？</strong>
              <br />
              通常、インドの製造者で35〜50日、外国の製造者で約120日、
              テストと検査の準備状況によって異なります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. 外国の製造者はBIS認証を取得できますか？
              </strong>
              <br />
              はい、FMCS（外国製造者認証スキーム）を通じて取得できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. どのような書類が必要ですか？</strong>
              <br />
              工場ライセンス、テスト機器リスト、BOM、プロセスフロー、図面、
              QC計画、ブランド文書など。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. サンプルがテストに失敗した場合はどうなりますか？</strong>
              <br />
              製造者は問題を修正し、製品を再加工し、テストのために再提出する必要があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 承認後、ISIマーキングは必須ですか？</strong>
              <br />
              はい。製品にはISIマーク + CML番号を表示する必要があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. IS 17876の下ですべてのグレードがカバーされていますか？</strong>
              <br />
              標準の下で定義された特定のグレードのみが対象となります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. BISはどのくらいの頻度で監視を実施しますか？</strong>
              <br />
              ライセンス有効期間中、定期的な監査とランダムサンプルテストが
              実施されます。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17876-2022-Sun-Certifications-India.pdf"
            title="溶接管・チューブのBIS証明書 - IS 17876:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadJapanese />

        <FaqAuthorJapanese questionNumber={3} />
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
              インド製造者向けISIマーク（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
