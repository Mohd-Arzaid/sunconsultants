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

const BISCertificationChainPipeWrenchesJapanese = () => {
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

export default BISCertificationChainPipeWrenchesJapanese;

const MetaTags = () => {
  const title =
    "チェーンパイプレンチのBIS認証 | IS 4123:1982 BISライセンス";
  const ogTitle =
    "チェーンパイプレンチのBIS認証 - IS 4123:1982ガイド";
  const twitterTitle = "チェーンパイプレンチのBISライセンス | IS 4123:1982";
  const metaDescription =
    "IS 4123:1982に基づくチェーンパイプレンチのBIS認証を取得。インドでのBIS認証のプロセス、書類、試験、費用、スケジュール。";
  const ogDescription =
    "IS 4123:1982に基づくチェーンパイプレンチのBIS認証の完全ガイド。プロセス、費用、書類、試験、BISライセンスのメリットをご確認ください。";
  const twitterDescription =
    "IS 4123:1982に基づくチェーンパイプレンチのBIS認証に申請。インドでのBISプロセス、書類、試験、費用、スケジュールをご確認ください。";
  const metaKeywords =
    "チェーンパイプレンチのBIS認証, チェーンパイプレンチのBISライセンス, IS 4123:1982, チェーンパイプレンチのBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/chein-paipu-renchi-is-4123";
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
                    <Link to="/Blogs">最新ブログ</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    チェーンパイプレンチのBIS認証 – IS 4123:1982
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
          チェーンパイプレンチのBIS認証 – IS 4123:1982完全ガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforChainPipeWrenches.png"
            title="チェーンパイプレンチのBISライセンス"
            alt="チェーンパイプレンチのBIS認証 - IS 4123:1982 BIS認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          チェーンパイプレンチは、従来のパイプレンチでは効果のない大口径パイプ、丸形フィッティング、円筒部品の把持・締め付け・緩めに使用する特殊な重作業用手工具です。石油・ガスパイプライン、製油所、発電所、石油化学プラント、造船所、上水道プロジェクト、重工業ワークショップ、インフラ建設現場で広く使用されています。把持機構はパイプに巻き付く硬化チェーンに依存し、均一な荷重分布と高トルクの適用を可能にします。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          チェーンパイプレンチは高負荷・安全重視の作業で使用されるため、材料品質、チェーン強度、ハンドル設計、ロック機構の欠陥は、滑り、急な解放、工具破損、重傷、機器損傷、高額な停止を招く可能性があります。こうしたリスクを防ぎ市場全体の品質を標準化するため、インド政府はこれらの工具にインド規格の適合を義務付けています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          したがって、IS 4123:1982に基づくチェーンパイプレンチのBIS認証取得は、インドでチェーンパイプレンチを販売する製造業者および輸入業者にとって法的に義務付けられた要件です。有効なチェーンパイプレンチのBIS認証は、製品がインド規格に従い強度、把持性能、寸法精度、総合的な安全性について試験・承認されたことを示します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証とは？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証は、インドにおける製品の標準化、試験、認証を担当する国家機関であるインド標準局（BIS）が実施する製品適合性・品質保証制度です。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS証明書の意味
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS証明書の意味は、BISが発行する公式承認を指し、製品が該当するインド規格（IS）に適合し、管理された品質システムの下で製造されていることを確認します。この認証により、製造業者は認証製品にISIマークを使用できます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証の目的は以下のとおりです：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>不安全・粗悪品から使用者を保護する</li>
          <li>製造業者間で一貫した品質を確保する</li>
          <li>品質管理規制の施行を支援する</li>
          <li>インドおよび輸入工業製品への信頼を促進する</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISIマークの説明
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証マーク（一般にISIマークとして知られる）は、適合の目に見えるシンボルです。チェーンパイプレンチの場合、ISIマークは購入者に以下を保証します：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工具がIS 4123:1982に適合している</li>
          <li>チェーンとハンドルが規定荷重に耐えられる</li>
          <li>製品がインドでの販売について法的に承認されている</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          チェーンパイプレンチに適用されるBIS規格
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 4123:1982 – チェーンパイプレンチの仕様
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          チェーンパイプレンチに適用されるインド規格はIS 4123:1982で、設計、材料、寸法、性能、およびチェーンパイプレンチの試験に関する要件を定めています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 4123:1982の適用範囲
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          この規格は以下を対象とします：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>各種サイズ・容量のチェーンパイプレンチ</li>
          <li>ハンドル構造とチェーン組立</li>
          <li>チェーン材料、リンク寸法、強度</li>
          <li>寸法公差と仕上げ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          安全、性能および試験の目的
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 4123:1982は以下を確保するために策定されています：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>チェーンがパイプに均一かつ確実に把持する</li>
          <li>レンチが高トルクに耐え破損しない</li>
          <li>ハンドルと継手が荷重下で変形しない</li>
          <li>重工業用途で安全に使用できる</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          パイプレンチのBISライセンスの対象者
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>チェーンパイプレンチのインド国内製造業者</li>
          <li>輸入業者および販売業者</li>
          <li>インドに供給する海外製造業者</li>
          <li>プライベートブランドで販売する業者・ブランド</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          チェーンパイプレンチにBIS認証が義務付けられる理由
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          消費者および職場の安全リスク
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          規格外のチェーンパイプレンチは以下を招く可能性があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>チェンの滑りまたは破断</li>
          <li>高トルク荷重の急な解放</li>
          <li>手、腕、体の重傷</li>
          <li>パイプラインおよび継手の損傷</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          政府および規制への適合
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          適用されるBIS通知および品質管理規則に従い、IS 4123:1982の対象となるチェーンパイプレンチは、インドでの販売、輸入、流通の前にBIS認証を取得する必要があります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的影響
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          認証のないチェーンパイプレンチの販売は以下につながる可能性があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>商品の差押え</li>
          <li>多額の罰金</li>
          <li>事業停止</li>
          <li>BIS法に基づく法的措置</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          市場およびブランドのメリット
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          チェーンパイプレンチのBISライセンスにより、企業は以下が可能になります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>産業バイヤーおよびEPC請負業者との信頼構築</li>
          <li>政府、PSU、インフラ入札への参加資格</li>
          <li>国内・国際の既存ブランドとの競争</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          チェーンパイプレンチのBIS認証プロセス（ステップ別）
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          適用性および規格の特定
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          最初のステップでは以下を確認します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品カテゴリ：チェーンパイプレンチ</li>
          <li>適用規格：IS 4123:1982</li>
          <li>サイズ範囲および容量バリエーション</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISオンライン申請プロセス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製造業者は以下を行う必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BISポータルに登録する</li>
          <li>BIS申請でIS 4123:1982を選択する</li>
          <li>必要な技術・法的書類をアップロードする</li>
          <li>適用される政府手数料を支払う</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          このプロセスは一般にBISオンライン申請またはBIS証明書登録として知られています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          手数料および費用構成
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証費用には一般的に以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請および処理手数料</li>
          <li>サンプル試験料</li>
          <li>工場検査料</li>
          <li>ライセンスおよびマーキング料</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証の総費用は以下により異なります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>レンチサイズの数</li>
          <li>試験の複雑さ</li>
          <li>製造拠点</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          製品サンプル試験（IS 4123:1982に準拠）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          サンプルはBIS認定試験所で以下について試験されます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>チェン引張強度</li>
          <li>荷重およびトルク耐性</li>
          <li>寸法精度</li>
          <li>ハンドル強度および仕上げ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          工場検査および監査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS職員が現地監査を実施し、以下を確認します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造および組立プロセス</li>
          <li>チェン製造または調達管理</li>
          <li>品質管理体制</li>
          <li>社内試験および検査設備</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISライセンスおよびISIマークの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          試験および検査が成功した後：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BISがインド標準局ライセンスを発行する</li>
          <li>
            製造業者はチェーンパイプレンチにISIマークを表示する権限を得る
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          認証後の適合
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          認証後の義務には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>定期サーベイランス監査</li>
          <li>市場サンプル試験</li>
          <li>ライセンスの適時の更新</li>
          <li>IS 4123:1982への継続的な適合</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証に必要な書類
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          製造業者書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場登録またはMSME証明書</li>
          <li>製造プロセスフローチャート</li>
          <li>機械および試験装置の一覧</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>会社設立証明書</li>
          <li>GST登録</li>
          <li>商標使用許諾（該当する場合）</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技術書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品図面および仕様書</li>
          <li>チェン材料および熱処理詳細</li>
          <li>品質管理および検査計画</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS申請書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS申請書</li>
          <li>試験依頼詳細</li>
          <li>宣言および誓約書</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらは総称してBIS証明書書類またはBIS認証書類と呼ばれます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 4123:1982に基づく試験要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          必須試験には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>チェン引張強度試験</li>
          <li>荷重およびトルク試験</li>
          <li>寸法検証</li>
          <li>材料および仕上げ検査</li>
          <li>把持性能機能試験</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          すべての試験はBIS認定試験所でのみ実施する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          よくある課題と対策
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          よくある問題
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>チェン強度試験の不合格</li>
          <li>チェンリンクの不適切な熱処理</li>
          <li>寸法不適合</li>
          <li>書類の不備</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          解決策およびベストプラクティス
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>社内事前試験の実施</li>
          <li>認証済み原材料の使用</li>
          <li>厳格なプロセス管理の維持</li>
          <li>経験豊富なBISコンサルタントの活用</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Manufacturers & Importers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Full compliance with Indian regulations</li>
          <li>Protection from penalties and enforcement actions</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Higher acceptance by industrial buyers</li>
          <li>Eligibility for PSU and infrastructure projects</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Branding Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI Mark enhances credibility and trust</li>
          <li>Differentiation from unorganized suppliers</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market Expansion
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Easier access to large industrial markets</li>
          <li>Improved export credibility</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          不適合に対する罰則
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          不適合は以下につながる可能性があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>多額の罰金</li>
          <li>製品の差押え</li>
          <li>ライセンスの取消し</li>
          <li>BIS法に基づく法的訴追</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Chain Pipe Wrenches?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Importers</li>
          <li>Foreign manufacturers (with Authorized Indian Representative)</li>
          <li>Traders and industrial suppliers</li>
          <li>E-commerce sellers listing chain pipe wrenches</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証コンサルティングを当社にご依頼いただく理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          当社は以下のようなBIS認証コンサルティングを一貫して提供しています：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品適用性およびギャップ分析</li>
          <li>書類作成および検証</li>
          <li>BIS認定試験所との調整</li>
          <li>工場検査および監査サポート</li>
          <li>問い合わせを最小限にした迅速な承認</li>
          <li>認証後の適合および更新サポート</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          産業用手工具および重機における当社の専門知識により、スムーズで信頼性が高く、完全に適合したBIS認証のプロセスをご提供します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          まとめ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 4123:1982に基づくチェーンパイプレンチのBIS認証取得は、インドでこれらの重作業用工具を販売するための重要な法的・品質要件です。チェーンパイプレンチのBIS認証は安全性、強度、信頼性を保証し、チェーンパイプレンチのBISライセンスはブランドの信頼性と市場での受入を高めます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          製造業者、輸入業者、販売業者にとって、適時の適合は罰則を防ぐだけでなく、高付加価値の産業、インフラ、政府プロジェクトへのアクセスも可能にします。専門家のガイダンスと体系的な適合サポートにより、BIS認証プロセスは効率的で予測可能となり、インド規格に完全に適合します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          よくある質問 – チェーンパイプレンチのBIS認証
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. チェーンパイプレンチにBIS認証は義務ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、インドではIS 4123:1982への適合が義務付けられています。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. BIS証明書の正式名称は？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              インド標準局証明書（Bureau of Indian Standards Certificate）。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. BIS認証プロセスにはどのくらいかかりますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              通常、インド国内製造業者は45〜60営業日、海外製造業者は90〜120日程度です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. BIS認証の費用は？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              製品サイズ範囲および試験範囲により異なります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. 輸入業者はBIS認証に申請できますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、製造業者の適切な授権があれば可能です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. ISIマークは必須ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、認証後はISIマーキングが義務付けられています。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. 海外製造業者はBIS認証を取得できますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、インド国内認証代理人を通じて取得可能です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. IS 4123:1982で必要な試験は？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              チェン強度、荷重、寸法、仕上げの試験です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. 工場検査は必須ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、BISが現地監査を実施します。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. 1つのライセンスで複数サイズをカバーできますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、試験および承認の対象となります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. 認証のないチェーンパイプレンチを販売するとどうなりますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              罰則、差押え、法的措置が行われる可能性があります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. BISオンライン申請は必須ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、すべての申請はオンラインで提出されます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. BISライセンスの更新は必要ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、定期更新が義務付けられています。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. コンサルタントは承認遅延を減らせますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、専門コンサルタントはミスを防ぐのに役立ちます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. BIS認証はバイヤーの信頼を高めますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、市場の信頼を大幅に高めます。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-4123-2024-Sun-Certifications-India.pdf"
            title="BIS Certificate for Chain Pipe Wrenches - IS 4123:2024 PDF"
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
            to="/ja/bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis"
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
              海外製造向けBISマーク（ISIライセンス）
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
            to="/ja/crs-bis-toha-nani-ka-crs-toroku"
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
            to="/ja/bis-shomeisho-toha-nani-ka-indo-no-bis"
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
            to="/ja/bis-isi-mark-shounin"
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
              インド製造向けISIマーク（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
