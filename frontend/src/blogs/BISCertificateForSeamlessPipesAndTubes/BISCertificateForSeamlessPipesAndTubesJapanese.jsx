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

const BISCertificateForSeamlessPipesAndTubesJapanese = () => {
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

export default BISCertificateForSeamlessPipesAndTubesJapanese;

const MetaTags = () => {
  const title =
    "無接合パイプおよびチューブのBIS証明書 | IS 17875:2022 BISライセンス";
  const ogTitle = "無接合パイプおよびチューブのBIS認証 – IS 17875:2022 ガイド";
  const twitterTitle =
    "無接合パイプおよびチューブのBISライセンス | IS 17875:2022";
  const metaDescription =
    "IS 17875:2022に基づく無接合パイプおよびチューブのBIS証明書を取得。インドにおけるBIS認証のプロセス、書類、テスト、費用、タイムライン。";
  const ogDescription =
    "IS 17875:2022に基づく無接合パイプおよびチューブのBIS認証の完全ガイド。プロセス、費用、書類、テスト、BISライセンスの利点を学びましょう。";
  const twitterDescription =
    "IS 17875:2022に基づく無接合パイプおよびチューブのBIS証明書を申請。インドにおけるBISプロセス、書類、テスト、費用、タイムラインを学びましょう。";
  const metaKeywords =
    "無接合パイプおよびチューブのBIS証明書, 無接合パイプおよびチューブのBISライセンス, IS 17875:2022, 無接合パイプおよびチューブのBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/muketsu-kan-kan-is-17875";
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
                    無接合パイプおよびチューブのBIS証明書 – IS 17875:2022
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
          IS 17875:2022に基づく無接合パイプおよびチューブのBIS証明書 —
          完全な認証ガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="無接合パイプおよびチューブのBISライセンス"
            alt="無接合パイプおよびチューブのBIS証明書 - IS 17875:2022 BIS認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          無接合鋼管およびチューブは、重要な高圧、高温アプリケーションにおける優れた性能で広く認識されています。石油・ガス、石油化学、製油所、重工業、自動車、火力発電所、航空宇宙、油圧、一般機械システムなどの産業において不可欠です。無接合パイプには溶接シームがないため、溶接管と比較してより高い強度、均一性、圧力処理能力を提供します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          メーカーが一貫した生産品質を維持し、安全で欠陥のない製品をインド市場に供給することを確保するため、インド政府はIS
          17875:2022に基づく無接合パイプおよびチューブのBIS認証を義務付けています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          この包括的なページでは、書類、必須テスト、品質コンプライアンス要件、費用、タイムライン、技術的課題、利点、罰則、産業適用性を含む、BISライセンス取得の全プロセスを説明しています
          — 拡張された、非常に詳細で、SEOに富んだ形式で書かれています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          無接合パイプおよびチューブのBIS認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS証明書は、インド標準局によって発行される公式承認で、メーカーがIS
          17875:2022で定義された仕様に従って無接合パイプ/チューブを生産していることを確認します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          無接合パイプは以下の厳格なテストを受ける必要があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>耐圧性</li>
          <li>引張強度</li>
          <li>衝撃靭性</li>
          <li>曲げ性</li>
          <li>化学組成</li>
          <li>寸法精度</li>
          <li>非破壊評価</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらの性能要件を満たすメーカーのみがISIマークを受け取り、インドで合法的に無接合パイプを生産、輸入、または販売することができます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS認証の主要な目的
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            基準以下のまたは危険な配管システムが産業サプライチェーンに入ることを防ぐ
          </li>
          <li>一貫した信頼性の高い製造品質を確保する</li>
          <li>高圧流体またはガス伝送に依存する産業を保護する</li>
          <li>国の安全性と品質のベンチマークを維持する</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17875:2022の理解 — 無接合パイプおよびチューブのインド標準
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17875:2022は、一般サービスを目的とした無接合鋼管およびチューブの品質、テスト、製造、性能要件を規定しています。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          無接合パイプおよびチューブのBISライセンスの範囲
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong>{" "}
          この標準は、一般サービス用の無接合ステンレス鋼管およびチューブの要件をカバーしています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong>{" "}
          この標準は、別の目的を意図した無接合ステンレス鋼管およびチューブの要件を規定しておらず、これらは別のインド標準によってカバーされています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17875:2022でカバーされるアプリケーション
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>石油・ガスパイプライン</li>
          <li>高温流体サービス</li>
          <li>ボイラーチューブ</li>
          <li>化学処理プラント</li>
          <li>油圧および空圧システム</li>
          <li>熱交換器</li>
          <li>構造用途</li>
          <li>自動車部品</li>
          <li>蒸気アプリケーション</li>
          <li>高圧工業パイプライン</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17875:2022の主要な品質パラメータ
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. 化学組成要件：</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          炭素、マンガン、クロム、ニッケル、モリブデン、硫黄、リンなどの限界を規定します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. 機械的特性：</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>引張強度</li>
          <li>降伏強度</li>
          <li>硬度</li>
          <li>延性</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. 寸法公差：</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>外径</li>
          <li>壁厚</li>
          <li>長さ公差</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. 表面状態：</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          パイプは、亀裂、ラミネーション、シーム、スコアリング、または有害な欠陥がない必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. 静水圧テスト：</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          パイプが漏れなく内部圧力に耐えられることを確保します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. 非破壊テスト（NDT）：</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          渦電流、超音波テスト、または磁粉探傷テストを含みます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          無接合パイプのBIS認証プロセス（IS 17875:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          無接合パイプのBIS認証プロセスは、製造およびテスト要件が広範であるため、他のほとんどの製品よりも技術的で詳細です。以下は非常に詳細なステップバイステップの説明です。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ1 — 適用性と製品分類の決定
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          メーカーは以下を行う必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>使用されているすべての鋼種を特定する</li>
          <li>寸法と厚さの範囲を決定する</li>
          <li>
            すべてのバリエーションがIS 17875の範囲内に収まるかどうかを確認する
          </li>
          <li>BISテスト用の製品分類を準備する</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          単一のBISライセンスは、同じ製造施設とプロセスを共有する場合、複数のサイズとグレードをカバーできます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ2 — 書類の準備とオンラインBIS申請の提出
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          メーカーはManakオンラインBISポータルで申請する必要があります。
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          情報には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場の詳細とレイアウト</li>
          <li>生産能力とプロセス</li>
          <li>炉と熱処理の詳細</li>
          <li>圧延、穿孔、引き抜き設備</li>
          <li>品質管理システム</li>
          <li>原材料調達書類</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          不正確な提出は、BIS申請拒否の最も一般的な原因の一つです。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ3 — 費用の支払い
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          費用には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請費</li>
          <li>処理費</li>
          <li>ラボテスト料金</li>
          <li>検査および旅行費用</li>
          <li>生産量に基づくマーキング料金</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ4 — サンプル選択とBISラボテスト
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          無接合パイプは広範な機械的および化学的テストを受けます。
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          これはBIS認証の中で最も時間がかかり、最も技術的な部分です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 化学組成テスト</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          以下を使用して実行されます：
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>発光分光法</li>
          <li>湿式化学方法</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          IS 17875に従った正確な化学組成を確保します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 機械的テスト</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>引張テスト</strong> —
            最大引張強度、降伏点、伸びを評価します。
          </li>
          <li>
            <strong>硬度テスト</strong> — 材料の靭性を確認します。
          </li>
          <li>
            <strong>圧平テスト</strong> —
            延性と溶接性をテストします（無接合であっても、圧平は材料の完全性をチェックします）。
          </li>
          <li>
            <strong>フレアリング/フランジングテスト</strong> —
            亀裂なしで変形性を確保します。
          </li>
          <li>
            <strong>衝撃テスト（シャルピー）</strong> —
            低温での性能を評価します。
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 静水圧テスト</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          パイプは高い内部圧力にさらされ、漏れや変形が発生しないことを確保します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – 非破壊テスト</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          内部欠陥の検出に必須です。
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          方法には以下が含まれます：
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>超音波検査</li>
          <li>渦電流検査</li>
          <li>磁粉探傷検査（MPI）</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 視覚的および寸法検査</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          以下を評価します：
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>表面仕上げ</li>
          <li>真直度</li>
          <li>楕円度</li>
          <li>厚さ公差</li>
          <li>直径精度</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ 冶金学的検査</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          微細構造分析は、結晶構造、熱処理の有効性、材料の安定性を確認します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ5 — BIS工場検査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          テスト結果が成功したら、BIS職員が工場を訪問します。
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          以下を検査します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>原材料の保管</li>
          <li>炉/熱処理プロセス</li>
          <li>穿孔ミル、リデューサー、冷間引き抜きベンチ</li>
          <li>静水圧テスト施設</li>
          <li>NDT施設</li>
          <li>ラボ設備と校正</li>
          <li>品質管理ログブック</li>
          <li>製造能力の検証</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          工場は、テストおよび検査スキーム（STI）に完全に準拠する必要があります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ6 — BISライセンスの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          テストと検査がBIS要件を満たす場合、メーカーは以下を受け取ります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS証明書</li>
          <li>CML番号</li>
          <li>無接合パイプにISIマークを使用する許可</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BISは、1つの要件でも満たされない場合、申請を拒否する可能性があります —
          専門家のガイダンスが非常に価値があります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ7 — 認証後の義務
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          メーカーは以下を行う必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ラベル、包装、パイプにISIマークを正しく使用する</li>
          <li>STIに従って内部テストを維持する</li>
          <li>定期的なBIS監視検査を受ける</li>
          <li>すべてのバッチがIS 17875:2022に準拠していることを確保する</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          コンプライアンスを維持できない場合、ライセンスの停止または取消しにつながる可能性があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          無接合パイプのBIS認証に必要な書類
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          A. 製造および生産書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場ライセンス</li>
          <li>機械配置を含むレイアウト図</li>
          <li>品質管理プロセスマニュアル</li>
          <li>熱処理記録</li>
          <li>原材料ミルテスト証明書</li>
          <li>圧延/穿孔プロセスの詳細</li>
          <li>引き抜きベンチの詳細</li>
          <li>テスト設備の校正証明書</li>
          <li>社内テストレポート</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          B. 技術書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>材料表</li>
          <li>化学グレード仕様</li>
          <li>機械的特性シート</li>
          <li>寸法公差チャート</li>
          <li>パイプの図面と仕様</li>
          <li>材料トレーサビリティシステムの書類</li>
          <li>生産の標準作業手順</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          C. 法的および組織的書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>承認書</li>
          <li>ブランド/商標所有権書類</li>
          <li>身分証明と住所証明</li>
          <li>BISが要求する約束と宣言</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17875:2022に基づく無接合パイプのテスト要件
        </h2>

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
                  パイプ
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
                  フレアリングテスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  圧平テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  結晶粒径
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  漏れ密閉性テスト
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  工作、仕上げ、外観
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
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
          BIS認証における一般的な課題
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>化学組成テストの失敗</strong>
            <br />
            一貫性のない鋼種が原因で発生します。
          </li>
          <li>
            <strong>機械的テストの失敗</strong>
            <br />
            しばしば不正確な熱処理が原因です。
          </li>
          <li>
            <strong>NDT拒否</strong>
            <br />
            内部亀裂や介在物がサンプルの失敗を引き起こす可能性があります。
          </li>
          <li>
            <strong>不適切な校正</strong>
            <br />
            不正確なテストデータにつながります。
          </li>
          <li>
            <strong>STI非準拠</strong>
            <br />
            検査中の不正確な記録保持が主要な拒否理由になります。
          </li>
          <li>
            <strong>寸法変動</strong>
            <br />
            パイプの直径または厚さの不一致が失敗を引き起こします。
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          無接合パイプのBIS認証の利点
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドで製造/販売する法的承認</li>
          <li>安全性と信頼性を確保する</li>
          <li>ブランドの評判を向上させる</li>
          <li>政府入札に不可欠</li>
          <li>PSUおよび民間産業によって要求される</li>
          <li>消費者を基準以下の製品から保護する</li>
          <li>輸出競争力を向上させる</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          非準拠に対する罰則
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS法の下、非認証の無接合パイプの販売は以下をもたらします：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品の没収</li>
          <li>重い罰金</li>
          <li>製造停止</li>
          <li>輸入制限</li>
          <li>ブランドのブラックリスト化</li>
          <li>刑事訴追</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証を取得する必要があるのは誰ですか？
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドのメーカー</li>
          <li>インドに輸出する外国のメーカー</li>
          <li>トレーダー（ブランド所有者）</li>
          <li>OEMおよびエンジニアリング会社</li>
          <li>輸入業者および在庫業者</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          すべての製造ユニットは別々のライセンスを取得する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17875:2022に基づく無接合パイプおよびチューブのBIS証明書は、高圧サービスパイプがインドの厳格な安全性と品質基準を満たすことを確保する重要な規制要件です。化学組成から高度な非破壊テストまで、BISはすべての認証パイプが耐久性があり、欠陥がなく、要求の厳しい産業条件下で機能できることを確保します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          専門家のガイダンスにより、メーカーは認証の旅を合理化し、遅延を最小限に抑え、スムーズにコンプライアンスを達成できます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — 無接合パイプBIS認証（拡張版およびSEOリッチ）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. なぜ無接合パイプにBIS認証が義務付けられているのですか？
              </strong>
              <br />
              無接合パイプは高圧および安全性が重要なアプリケーションで使用されるためです。政府規制により、高品質のパイプのみがインド市場に入ることが保証されています。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. 無接合パイプに適用される標準はどれですか？</strong>
              <br />
              IS 17875:2022です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 認証プロセスにはどのくらい時間がかかりますか？</strong>
              <br />
              通常、インドのメーカーで40-60日、外国のメーカーで約120日、テスト負荷と検査スケジュールによって異なります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. どのようなテストが必要ですか？</strong>
              <br />
              化学分析、引張テスト、硬度、静水圧、NDT、圧平、フレアリング、寸法チェック。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 外国企業はBIS認証を申請できますか？</strong>
              <br />
              はい、FMCSスキームを通じて申請できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. 製品がテストに失敗した場合はどうなりますか？</strong>
              <br />
              修正して再テストする必要があります。BISは完全なコンプライアンスが達成されるまでライセンスを発行しません。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. どのような書類が必要ですか？</strong>
              <br />
              工場ライセンス、機械リスト、テスト設備、図面、QC書類、原材料証明書など。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ISIマーキングは必須ですか？</strong>
              <br />
              はい。ISIマークを表示せずに無接合パイプを販売することは違法です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. 1つのライセンスで複数のグレードが許可されますか？
              </strong>
              <br />
              はい、同じ施設とプロセスを使用して生産される場合（BISの承認に従う）。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. BISライセンスの有効期間はどのくらいですか？</strong>
              <br />
              1-2年、無期限に更新可能です。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="無接合パイプおよびチューブのBIS証明書 - IS 17875:2022 PDF"
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
              外国製造向けBISマーク（ISIライセンス）
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
              インド製造者向けISIマーク（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
