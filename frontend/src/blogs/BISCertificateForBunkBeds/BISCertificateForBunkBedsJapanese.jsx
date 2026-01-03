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
import FaqAuthorJapanese from "../../components/common/FaqAuthor/FaqAuthorJapanese";
import ManyUsersAlsoReadJapanese from "../../components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadJapanese";

const BISCertificateForBunkBedsJapanese = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <ServicesJapanese />
      <VideoSection />
      <FooterJapanese />
    </div>
  );
};

export default BISCertificateForBunkBedsJapanese;

const MetaTags = () => {
  const title = "二段ベッドのBIS認証 | IS 17636:2022 BISライセンス";
  const ogTitle = "二段ベッドのBIS認証 – IS 17636:2022ガイド";
  const twitterTitle = "二段ベッドのBISライセンス | IS 17636:2022";
  const metaDescription =
    "IS 17636:2022に基づく二段ベッドのBIS認証を取得。インドでのBIS認証のプロセス、書類、テスト、費用、タイムライン。";
  const ogDescription =
    "IS 17636:2022に基づく二段ベッドのBIS認証の完全ガイド。プロセス、費用、書類、テスト、BISライセンスのメリットを理解する。";
  const twitterDescription =
    "IS 17636:2022に基づく二段ベッドのBIS認証を申請。インドでのBISプロセス、書類、テスト、費用、タイムラインを学ぶ。";
  const metaKeywords =
    "二段ベッドのBIS認証, 二段ベッドのBISライセンス, IS 17636:2022, 二段ベッドのBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/nidan-beddo-is-17636";
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
                    二段ベッドのBIS認証 – IS 17636:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          二段ベッドのBIS認証 – IS 17636:2022 BIS認証の完全ガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="二段ベッドのBISライセンス"
            alt="二段ベッドのBIS認証 - IS 17636:2022 BIS認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          二段ベッドのBIS認証は、IS
          17636:2022に基づき、インドで必須要件となっています。この規格は、家庭、ホステル、寮、PG宿泊施設、学校、ホテル、商業施設で使用される二段ベッドの安全性、性能、構造要件を定めています。インドの製造業者または外国の製造業者を問わず、インド市場で二段ベッドを販売、輸入、輸出、または流通させる前に、二段ベッドのBIS認証を取得する必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          省スペース家具への需要の増加に伴い、二段ベッドは重要な製品カテゴリーとなっています。しかし、落下、崩壊、挟み込み、構造的故障などの安全リスクにより、消費者保護を確保するために二段ベッドのBISライセンスが重要になっています。この包括的なページでは、二段ベッドのBIS登録、テスト要件、書類、費用、タイムライン、罰則、メリットについてご案内します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          製造業者、輸入業者、輸出業者、貿易業者、またはスタートアップであるかどうかにかかわらず、このガイドはインド標準局（BIS）のコンプライアンス要件を理解するのに役立ちます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          BIS認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証は、インドの国家標準機関であるインド標準局が管理する品質および安全性コンプライアンスプログラムです。製品が指定されたインド規格に準拠し、安全で信頼性が高く、使用に適していることを保証します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS証明書とは何ですか？
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS証明書は、製造業者に発行される公式ライセンスで、ISIマークの使用を許可し、BISが規定する製品規格への準拠を示します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS証明書の意味
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製品が以下を通過したことを証明します：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>実験室テスト</li>
          <li>工場検査</li>
          <li>品質管理評価</li>
          <li>安全性コンプライアンス</li>
          <li>インド規格への準拠</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証製品には、BISロゴ（ISIマークとも呼ばれる）が表示され、インドの品質基準を満たしていることを示します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          二段ベッドに適用されるBIS規格は？（IS 17636:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          二段ベッドは、新しく導入された規格に基づき、必須のBIS認証の対象となります：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — 二段ベッド – 安全性要件
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          この規格は、二段ベッドが厳格な安全性、構造、耐久性の基準を満たすことを保証します。以下をカバーします：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>構造的安定性</li>
          <li>ガードレール</li>
          <li>挟み込みの危険</li>
          <li>耐荷重能力</li>
          <li>寸法要件</li>
          <li>材料仕様</li>
          <li>エッジと表面仕上げ</li>
          <li>はしごの構造</li>
          <li>耐久性および性能テスト</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          インドで二段ベッドを販売したい製造業者は、IS
          17636:2022に基づく二段ベッドのBISライセンスを取得する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          二段ベッドにBIS認証が必要な理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          二段ベッドは子供や大人に広く使用されており、安全性への懸念からコンプライアンスが不可欠です。BISは以下を防ぐために認証を義務付けています：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>崩壊または構造的故障</li>
          <li>身体の部位の挟み込み</li>
          <li>上段からの落下</li>
          <li>はしご関連の怪我</li>
          <li>材料品質の低さ</li>
          <li>火災の危険</li>
          <li>有害な仕上げまたは鋭いエッジ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          二段ベッドのBISライセンスが必須である理由
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>機械的強度と耐久性を確保</li>
          <li>消費者、特に子供を怪我から保護</li>
          <li>統一された品質基準を維持</li>
          <li>ブランドの信頼性と信頼性の構築に役立つ</li>
          <li>政府規制への準拠を確保</li>
          <li>法的問題と罰則を防止</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS登録なしでは、製造業者と輸入業者はインド市場で合法的に製品を販売することはできません。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          二段ベッドのBIS認証プロセス（ステップバイステップ）（IS 17636:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          インドでのBIS認証プロセスには、テスト、書類、工場検査が含まれます。以下がステップバイステップの手順です：
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ1 — 適用性と規格の決定
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — 必須
          </li>
          <li>製品カテゴリーと製造ユニットの詳細を確認します。</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ2 — BIS申請（フォーム提出）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS Manakオンラインポータルを通じてオンラインで申請します。
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          要件には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造業者の詳細</li>
          <li>工場住所と証明</li>
          <li>製品カテゴリーとブランド</li>
          <li>製造能力</li>
          <li>品質管理プロセス</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          このステップで公式承認サイクルが開始されます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ3 — BIS証明書費用の支払い
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          提出後、以下を支払います：
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>申請費用</li>
          <li>テスト費用</li>
          <li>監査費用</li>
          <li>マーキング費用</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          費用は以下によって異なります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品バリエーションの数</li>
          <li>ブランド名</li>
          <li>工場の場所</li>
          <li>テストパラメータ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ4 — サンプルテスト（IS 17636:2022に基づく）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          テストはBIS認定の実験室で実施されます。
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          テストには以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>構造的安定性テスト</li>
          <li>衝撃テスト</li>
          <li>挟み込みテスト</li>
          <li>ガードレール強度テスト</li>
          <li>仕上げ品質テスト</li>
          <li>はしご安全性テスト</li>
          <li>負荷テスト</li>
          <li>耐久性テスト</li>
          <li>エッジ安全性評価</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          テストレポートはBISポータルに直接アップロードされます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ5 — BIS工場検査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS担当者が工場を訪問し、以下を確認します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>品質管理体制</li>
          <li>原材料管理</li>
          <li>工程中の検査</li>
          <li>最終製品テスト</li>
          <li>生産能力</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BISテスト・検査スキーム（STI）への準拠を確認します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ6 — BISライセンスの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          すべてのステップがクリアされると、BISは以下を発行します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS証明書</li>
          <li>ISIマーク承認</li>
          <li>CMLライセンス番号</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          これで、二段ベッドとパッケージにBISマークを合法的に使用できます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ステップ7 — ライセンス後の義務
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製造業者は以下を実施する必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>内部テストの維持</li>
          <li>定期的なBIS検査の許可</li>
          <li>1年または2年ごとのライセンス更新</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          二段ベッドのBISライセンスの範囲
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong>{" "}
          この規格は、家庭用および非家庭用の二段ベッドの性能と安全性、すなわち強度、安定性、耐久性に関する要件をカバーします。この規格は、完成床面から800mm以上の高さで使用されるベッドベースの単一ベッドにも適用され、下のスペースの用途に関係なく適用されます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong>{" "}
          この規格は、完全に製造/組み立てられた二段ベッドに適用されます。組み立て済みユニットにも適用され、その場合、この規格の要件は組み立て済みユニットに適用されます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          二段ベッドのBIS認証に必要な書類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          以下がBIS証明書の書類の完全なリストです：
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          製造業者の書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場登録証明書</li>
          <li>製造プロセスフローチャート</li>
          <li>機械・設備のリスト</li>
          <li>テスト設備のリスト</li>
          <li>校正証明書</li>
          <li>工場レイアウト/プラントレイアウト</li>
          <li>CEO/取締役からの承認書</li>
          <li>ISO 9001証明書（利用可能な場合）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>身分証明書</li>
          <li>住所証明</li>
          <li>ブランド承認（サードパーティブランドの場合）</li>
          <li>商標登録書類（オプション）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技術書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品仕様</li>
          <li>材料リスト</li>
          <li>安全機能の説明</li>
          <li>品質管理計画</li>
          <li>内部テストレポート</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS申請書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>誓約書と宣言</li>
          <li>テスト依頼フォーム</li>
          <li>サンプル承認書</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          適切な書類を用意することで、遅延を減らし、スムーズな承認を確保できます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          二段ベッドのテスト要件（IS 17636:2022）
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          テストはBIS登録プロセスの必須部分です。二段ベッドは安全性と耐久性を確保するために厳格なテストを受けます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          二段ベッドの検査・テストスキーム
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
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  上段ベッドの安全バリア
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  隙間
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ベッドベース
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  はしご
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  フレームと固定具の強度
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  安定性
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  上段ベッドと下段ベッドの固定
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          テストはBIS認定の実験室でのみ実施する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          一般的な課題と回避方法
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>製品分類の誤り</strong>
            <br />
            常に正しいインド規格を確認してください。
          </li>
          <li>
            <strong>不適切な書類</strong>
            <br />
            書類の不足は遅延の原因となります。事前に準備してください。
          </li>
          <li>
            <strong>実験室テストの失敗</strong>
            <br />
            高品質の材料、溶接、ガードレール、仕上げを確保してください。
          </li>
          <li>
            <strong>検査準備が整っていない工場</strong>
            <br />
            QMSとテスト設備が適切に維持されていることを確認してください。
          </li>
          <li>
            <strong>商標の問題</strong>
            <br />
            ブランド名はライセンス申請と一致する必要があります。
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらを早期に解決することで、処理時間を大幅に短縮できます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          製造業者と輸入業者にとってのBIS認証のメリット
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドで合法的に二段ベッドを販売</li>
          <li>顧客との信頼関係を構築</li>
          <li>製品返品を削減</li>
          <li>ブランドの評判を向上</li>
          <li>安全性コンプライアンスを確保</li>
          <li>競争優位性を獲得</li>
          <li>小売チェーンとeコマースプラットフォームへの展開</li>
          <li>政府入札へのアクセス</li>
          <li>罰則と法的措置を回避</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          非準拠に対する罰則
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証なしで二段ベッドを販売すると、以下の結果になる可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品の差し押さえ</li>
          <li>金銭的罰則</li>
          <li>工場閉鎖命令</li>
          <li>法的起訴</li>
          <li>インド市場からの禁止</li>
          <li>ブランドのブラックリスト化</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          コンプライアンスは任意ではなく、必須です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          二段ベッドのBIS認証が必要なのは誰ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          以下の事業者は二段ベッドのBISライセンスを取得する必要があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インドの製造業者</li>
          <li>インドに輸出する外国の製造業者</li>
          <li>輸入業者</li>
          <li>流通業者</li>
          <li>eコマース販売者</li>
          <li>OEM/ODM製造業者</li>
          <li>家具ブランドと小売業者</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          各工場（会社ではなく）には別々のBISライセンスが必要です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          BIS認証コンサルティングで私たちを選ぶ理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          二段ベッドのBIS登録について、エンドツーエンドのサポートを提供します。以下を含みます：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>規格の解釈（IS 17636:2022）</li>
          <li>書類の準備</li>
          <li>実験室テストの調整</li>
          <li>BISポータル申請</li>
          <li>工場検査サポート</li>
          <li>BIS担当者との連絡</li>
          <li>ライセンス承認支援</li>
          <li>認証後のコンプライアンス</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          長年の専門知識により、迅速で正確、かつ手間のかからないBIS認証を保証します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          よくある質問 — 二段ベッドのBIS認証
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. インドで二段ベッドのBIS認証は必須ですか？</strong>
              <br />
              はい。IS
              17636:2022に基づき、すべての製造業者と輸入業者に義務付けられています。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. 二段ベッドのBIS認証にはどのくらい時間がかかりますか？
              </strong>
              <br />
              準備状況と書類によって異なりますが、通常30〜45日です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 外国の製造業者はBISに申請できますか？</strong>
              <br />
              はい、FMCS（外国製造業者認証スキーム）を通じて申請できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. BIS証明書をオンラインで申請できますか？</strong>
              <br />
              はい、BIS Manakオンラインポータルを通じて申請できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. 二段ベッドの認証にはどのようなテストが必要ですか？
              </strong>
              <br />
              負荷テスト、ガードレールテスト、安定性テスト、衝撃テスト、挟み込みテストなど。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. BISライセンスの有効期限はどのくらいですか？</strong>
              <br />
              通常1〜2年で、更新可能です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. 1つのライセンスで複数のモデルをカバーできますか？
              </strong>
              <br />
              同じ規格とカテゴリーに該当する場合のみ可能です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 二段ベッドにISIマークは必要ですか？</strong>
              <br />
              はい、認証後はISIマークが必須です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. 製品が実験室テストに不合格になった場合はどうなりますか？
              </strong>
              <br />
              製品を修正し、サンプルを再提出する必要があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>11. BISは工場のインフラをチェックしますか？</strong>
              <br />
              はい、検査中にチェックします。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. 貿易業者はBISに申請できますか？</strong>
              <br />
              ブランド所有者であり、製造業者との契約がある場合のみ可能です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. BISロゴとは何ですか？</strong>
              <br />
              製品の適合性を示す標準的なISIマークシンボルです。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>14. BIS認証にはどのような書類が必要ですか？</strong>
              <br />
              工場ライセンス、レイアウト、機械リスト、BOM、QC計画、テストレポートなど。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>15. BISテストは工場で行われますか？</strong>
              <br />
              いいえ、BIS認定の実験室でのみ実施されます。
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17636:2022に基づく二段ベッドのBIS証明書の取得は、インドでの消費者安全性、製品の信頼性、法的コンプライアンスを確保するために、必須であるだけでなく、不可欠です。認証プロセスには、製品テスト、書類、工場検査、ライセンス発行が含まれます。適切な計画と専門家のガイダンスにより、プロセスはスムーズで迅速、かつ費用対効果の高いものになります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          製造業者、輸入業者、またはブランド所有者であるかどうかにかかわらず、BIS認証を取得することで、市場での地位を強化し、顧客の信頼を高め、新しいビジネス機会を開くことができます。私たちの専門コンサルティングチームは、二段ベッドのエンドツーエンドのBIS認証をサポートする準備ができています。
        </p>

        <ManyUsersAlsoReadJapanese />

        <FaqAuthorJapanese questionNumber={5} />
      </div>
    </div>
  );
};

const ServicesJapanese = () => {
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
