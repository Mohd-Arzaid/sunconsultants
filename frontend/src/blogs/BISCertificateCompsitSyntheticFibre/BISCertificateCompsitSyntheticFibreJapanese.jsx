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
import FooterEng from "@/components/manual/Footer/FooterEng";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateCompsitSyntheticFibreJapanese = () => {
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

export default BISCertificateCompsitSyntheticFibreJapanese;

const MetaTags = () => {
  const title =
    "複合合成繊維ロープのBIS証明書 | IS 14928:2001 BISライセンス";
  const ogTitle =
    "複合合成繊維ロープのBIS認証 – IS 14928:2001ガイド";
  const twitterTitle =
    "複合合成繊維ロープのBISライセンス | IS 14928:2001";
  const metaDescription =
    "IS 14928:2001に基づく複合合成繊維ロープのBIS証明書を取得。インドでのBIS認証のプロセス、書類、試験、費用、期間について。";
  const ogDescription =
    "IS 14928:2001に基づく複合合成繊維ロープのBIS認証の完全ガイド。プロセス、費用、書類、試験、BISライセンスのメリットを知る。";
  const twitterDescription =
    "IS 14928:2001に基づく複合合成繊維ロープのBIS証明書を申請。インドでのBISプロセス、書類、試験、手数料、期間を学ぶ。";
  const metaKeywords =
    "複合合成繊維ロープのBIS証明書, 複合合成繊維ロープのBISライセンス, IS 14928:2001, 複合合成繊維ロープのBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928";
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
                    <Link to="/Blogs">最新ブログ</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    複合合成繊維ロープのBIS証明書 – IS
                    14928:2001
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
          複合合成繊維ロープのBIS認証 – IS 14928:2001の完全ガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCompositeSyntheticFibreRopes.png"
            title="複合合成繊維ロープのBISライセンス"
            alt="複合合成繊維ロープのBIS証明書 - IS 14928:2001 BIS認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          複合合成繊維ロープは、海洋作業、港湾、沖合設備、漁業、海運、建設、農業、重量物運搬などで広く使用されています。これらのロープは、ポリエステル、ポリプロピレン、ナイロン、その他の人工繊維を2つ以上組み合わせて製造され、強度、柔軟性、耐摩耗性、浮力、耐久性のバランスの取れた特性を提供します。複合合成繊維ロープは、荷重支持、牽引、係留、揚げ下ろし、安全が重要な用途で頻繁に使用されるため、わずかな品質欠陥でも深刻な事故、設備損傷、または運用障害につながる可能性があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらのリスクを管理し、一貫した品質を確保するため、インド政府は適用されるインド規格IS 14928:2001に基づき、複合合成繊維ロープのBIS認証を義務付けています。複合合成繊維ロープの有効なBIS証明書は、製造業者および輸入業者がインド市場で製造、販売、流通、または輸入する前に法的要件となります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          このページは、IS 14928:2001の範囲、安全性の意図、試験要件、文書化、費用考慮事項、段階的な認証プロセスを含む、複合合成繊維ロープのBIS認証に関する完全なコンプライアンス重視のガイドとして機能します。インドで複合合成繊維ロープのBISライセンス/BISライセンスを取得する方法を明確に理解したい製造業者、輸入業者、海外製造業者、商人、eコマース販売業者向けに設計されています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証とは？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証は、BIS法2016に基づき運営されるインド基準局（BIS）が実施する製品適合性評価システムです。BISはインド基準の開発、製品の認証、インドで販売される商品が定義された安全性、品質、性能基準を満たすことを確保する責任を負っています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS証明書の意味
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS証明書の意味は、製品が関連するインド規格に準拠していることをBISが確認した正式な承認を指します。一度認証されると、製造業者は製品およびパッケージにBIS認証マーク、一般にISIマークとして知られるものを使用することが許可されます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISIマークの説明
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ISIマークは以下を示します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品がBIS認定試験所で試験された</li>
          <li>製造施設がBIS職員によって評価された</li>
          <li>継続的な品質管理と監視メカニズムが整備されている</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISが存在する理由
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BISは以下のために存在します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>消費者と労働者の安全を保護する</li>
          <li>低品質製品の流通を防止する</li>
          <li>工業製品の均一性と信頼性を確保する</li>
          <li>規制の執行と公正な貿易を強化する</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          複合合成繊維ロープの場合—危険で高荷重条件で使用されることが多いため—BIS認証は事故防止と品質保証において重要な役割を果たします。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          複合合成繊維ロープに適用されるBIS規格
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          この製品に適用されるインド規格は：
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14928:2001</strong> – 複合合成繊維ロープ
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          この規格は、複合合成繊維ロープの材料、構造、寸法、性能特性、表示、サンプリング、試験の要件を規定しています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 14928:2001の範囲
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001は以下を対象とします：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>異なる合成繊維の組み合わせを使用して製造されたロープ</li>
          <li>より合わせや編み込み構造などの様々なロープ構造</li>
          <li>海洋、漁業、工業、一般用途向けのロープ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          安全性、性能、試験の意図
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          この規格は以下を確保することを目的としています：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>適切な破断強度と荷重支持能力</li>
          <li>一貫した直径と構造品質</li>
          <li>摩耗、湿気、環境劣化への耐性</li>
          <li>サービス寿命全体にわたる予測可能で安全な性能</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          誰が準拠する必要があるか
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001への準拠は以下にとって必須です：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>複合合成繊維ロープのインド製造業者</li>
          <li>インド市場でこれらのロープを供給する輸入業者</li>
          <li>インドの代理人を通じて販売する海外製造業者</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          なぜ複合合成繊維ロープにBIS認証が必須なのか
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 消費者と労働者の安全リスク
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          複合合成繊維ロープは以下で使用されます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>係留および牽引作業</li>
          <li>重量物の揚げ下ろしと固定</li>
          <li>漁網と海洋設備</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ロープの破損は、負傷、死亡、船舶損傷、プロジェクト遅延を引き起こす可能性があります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 政府のコンプライアンス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS通知および品質管理要件に基づき、IS 14928:2001で対象となる製品はBIS認証なしでは合法的に販売できません。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 法的影響
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          非コンプライアンスは以下につながる可能性があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>非認証製品の押収</li>
          <li>BIS法に基づく財政的罰則</li>
          <li>起訴と法的措置</li>
          <li>輸入通関の拒否</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. 市場とブランドのメリット
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          複合合成繊維ロープのBISライセンスは以下を改善します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>顧客の信頼</li>
          <li>政府およびPSU入札の適格性</li>
          <li>国内および輸出市場でのブランド信頼性</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          複合合成繊維ロープのBIS認証プロセスの段階的ガイド
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          適用性と規格の特定
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          プロセスは、製品がIS 14928:2001に該当することを確認することから始まります。これには以下の特定が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>繊維の組成と配合</li>
          <li>ロープ構造タイプ</li>
          <li>直径範囲と意図される用途</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          正確な特定は、試験エラーと申請拒否を回避します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISオンライン申請プロセス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          製造業者はBISポータルを通じてオンラインでBISを申請し、以下を提出する必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品詳細</li>
          <li>工場と製造情報</li>
          <li>品質管理手配</li>
          <li>試験要求詳細</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          正しく記入されたBIS申請は、迅速な処理に不可欠です。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          料金と費用構造
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS証明書費用には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請料</li>
          <li>BIS認定試験所での試験費用</li>
          <li>工場検査料</li>
          <li>年間ライセンスと表示料</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          全体のBIS認証費用は、ロープ構造、サイズ範囲、試験の複雑さに応じて異なります。適切な計画は、BIS認証費用とBISライセンス費用を効果的に管理するのに役立ちます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          製品サンプル試験（IS 14928:2001に基づく）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          製品サンプルは、規格のすべての要件への準拠を確認するため、BIS認定試験所で抽出され試験されます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          工場検査と監査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS職員は以下を確認するために工場監査を実施します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造プロセス管理</li>
          <li>原材料の取り扱い</li>
          <li>社内試験設備</li>
          <li>品質保証システムと記録</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISライセンスとISIマークの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          すべての要件が満たされると、BISはインド基準局ライセンスを付与し、製造業者が複合合成繊維ロープにISIマークを使用することを許可します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          認証後のコンプライアンス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          認証後、ライセンス保持者は以下を行う必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>一貫した製品品質を維持する</li>
          <li>定期的な監視監査を許可する</li>
          <li>材料、プロセス、設計の変更についてBISに通知する</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証に必要な書類
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          製造業者の書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工場登録証明書</li>
          <li>製造プロセスフローチャート</li>
          <li>機械および試験装置のリスト</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>会社設立証明書</li>
          <li>GST登録</li>
          <li>署名者のための委任状</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          技術書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品仕様と図面</li>
          <li>原材料仕様</li>
          <li>社内試験手順</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS申請書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>適切に記入されたBIS申請書</li>
          <li>試験要求書</li>
          <li>表示とラベリングの詳細</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらは集合的に必須のBIS認証書類を形成します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 14928:2001に基づく試験要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          必須試験には以下が含まれます：
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
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  構造
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  構造
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  処理
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ロープ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  直径
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  質量
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  破断強度
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  長さ
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          すべての試験はBIS認定試験所でのみ実施する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          一般的な課題と回避方法
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>製品分類の誤り</strong>
            <br />
            解決策：認証前の技術評価を実施する。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>試験不合格</strong>
            <br />
            解決策：原材料品質とプロセス管理をIS 14928:2001に合わせる。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>不完全な文書化</strong>
            <br />
            解決策：BIS固有の書類を慎重に準備し、提出前に確認する。
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>監査の非コンプライアンス</strong>
            <br />
            解決策：適切な記録、校正、内部品質チェックを維持する。
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          製造業者と輸入業者のためのBIS認証のメリット
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的メリット
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インド規制へのコンプライアンス</li>
          <li>円滑な通関</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          商業的メリット
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>政府および機関入札の適格性</li>
          <li>買い手の受容性の向上</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ブランディングメリット
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BISマークの使用許可</li>
          <li>信頼性と市場での信頼性の向上</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          市場拡大
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>規制部門への参入</li>
          <li>長期的な事業成長</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          非コンプライアンスに対する罰則
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証を取得しない場合、以下の結果につながる可能性があります：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>重大な金銭的罰則</li>
          <li>製品の押収またはリコール</li>
          <li>輸入禁止</li>
          <li>法的起訴</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          誰が複合合成繊維ロープのBIS認証を必要とするか
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インド製造業者</li>
          <li>輸入業者</li>
          <li>インドに供給する海外製造業者</li>
          <li>商人および卸売業者</li>
          <li>eコマース販売業者</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          インド市場で複合合成繊維ロープを配置するすべての団体は、BISコンプライアンスを確保する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001に基づく複合合成繊維ロープのBIS証明書を取得することは、法的義務であり、重要な安全要件でもあります。複合合成繊維ロープの有効なBIS認証/BISライセンスは、規制コンプライアンスを確保し、エンドユーザーを保護し、市場での信頼性を向上させます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          製造業者と輸入業者にとって、BIS認証は単なる承認ではありません—それは信頼、安全、持続可能な事業成長についてです。適切な技術的準備と専門的な指導により、インドでのBIS認証プロセスは円滑かつ効率的に完了することができます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          よくある質問 – 複合合成繊維ロープのBIS認証
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. BISの正式名称は？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              インド基準局。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. 複合合成繊維ロープにBIS認証は必須ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、IS 14928:2001に基づきます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. BIS証明書の正式名称は？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              インド基準局証明書。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. BIS証明書をオンラインで申請できますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、公式ポータルを通じてBISをオンラインで申請できます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. BIS認証にはどのくらいかかりますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              通常1〜2ヶ月。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. BIS認証費用は？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              試験と監査の範囲によって異なります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. 輸入業者はBIS認証が必要ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              輸入業者は製品が認証されていることを確認する必要があります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. 海外製造業者は申請できますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、インドの代理人を通じて。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. BIS登録とBISライセンスは同じですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              いいえ、繊維ロープにはBISライセンスが必要です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. 製品が試験に不合格の場合はどうなりますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是正措置と再試験が必要です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. ISI表示は必須ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、認証後。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. BISライセンスの有効期間は？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              通常1〜2年、更新可能。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. 監視監査は必須ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、BISは定期的な監査を実施します。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. ライセンス範囲を後で拡張できますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、範囲拡張承認を通じて。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. 非認証製品をオンラインで販売できますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              いいえ、eコマース販売もBISコンプライアンスが必要です。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-14928-2001-Sun-Certifications-India.pdf"
            title="複合合成繊維ロープのBIS証明書 - IS 14928:2001 PDF"
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
              海外製造業者向けBISマーク（ISIライセンス）
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
              インド製造業者向けISIマーク（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
