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

const BISCertificationCombinationSideCuttingPliersJapanese = () => {
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




export default BISCertificationCombinationSideCuttingPliersJapanese;

const MetaTags = () => {
  const title =
    "コンビネーション・サイド・カッティング・プライヤー BIS認証 | IS 3650:1981 BISライセンス";
  const ogTitle =
    "コンビネーション・サイド・カッティング・プライヤー BIS認証 – IS 3650:1981 ガイド";
  const twitterTitle =
    "コンビネーション・サイド・カッティング・プライヤー BISライセンス | IS 3650:1981";
  const metaDescription =
    "IS 3650:1981に基づくコンビネーション・サイド・カッティング・プライヤーのBIS認証を取得。インドでのBIS認証のプロセス、書類、試験、費用、スケジュール。";
  const ogDescription =
    "IS 3650:1981に準拠したコンビネーション・サイド・カッティング・プライヤーBIS認証の完全ガイド。プロセス、費用、書類、試験、BISライセンスのメリット。";
  const twitterDescription =
    "IS 3650:1981に基づくコンビネーション・サイド・カッティング・プライヤーBIS認証を申請。インドでのBISプロセス、書類、試験、費用、スケジュール。";
  const metaKeywords =
    "コンビネーション・サイド・カッティング・プライヤー BIS認証, コンビネーション・サイド・カッティング・プライヤー BISライセンス, IS 3650:1981, BIS認証 コンビネーション・サイド・カッティング・プライヤー";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/kumiawase-yokogiri-puraiya-is-3650";
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
                    コンビネーション・サイド・カッティング・プライヤー BIS認証 – IS
                    3650:1981
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
          コンビネーション・サイド・カッティング・プライヤー BIS認証 – IS 3650:1981 完全ガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="コンビネーション・サイド・カッティング・プライヤー BISライセンス"
            alt="コンビネーション・サイド・カッティング・プライヤー BIS認証 - IS 3650:1981 BIS認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          コンビネーション・サイド・カッティング・プライヤーは、電気作業、機械保全、建設、製造現場、工場、自動車整備、家庭の修理などで最もよく使われる手工具の一つです。把持、曲げ、ねじり、ワイヤー切断など複数の機能を果たすよう設計されています。金属線、電線、小部品の切断に頻繁に使われるため、品質の低いプライヤーは工具の破損、感電リスク、手の怪我、重大な労働災害の原因となります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          安全性、耐久性、均一な品質を確保するため、インド政府は手工具に関するインド規格への適合を義務付けています。IS 3650:1981に基づくコンビネーション・サイド・カッティング・プライヤーのBIS認証取得は、インドでこれらの工具を販売する製造業者および輸入業者にとって法的・品質上の重要な要件です。有効なBIS認証は、製品が機械的強度、切断効率、材料硬度、総合的な安全性能について試験済みであることを示します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          この詳細な製品ページは、コンビネーション・サイド・カッティング・プライヤーのBISライセンスについて、インドでのBIS認証プロセス、試験要件、書類、費用、スケジュール、罰則、メリットを含め完全に理解したい製造業者、海外製造業者、輸入業者、販売業者、卸売業者、金物ブランド、eコマース販売者、コンプライアンス担当者向けに作成されています。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証とは
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証は、インドの標準化・認証・品質保証の国家機関であるインド標準局（Bureau of Indian Standards）が管轄する製品適合性評価制度です。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS証明書の意味
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS証明書の意味は、BISが発行する公式の承認を指し、製品が適用されるインド規格（IS）に適合し、管理された品質システムの下で製造されていることを確認するものです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証の主な目的は以下のとおりです。
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>消費者を不安全な製品から守る</li>
          <li>一貫した製品品質を確保する</li>
          <li>規制の執行を支援する</li>
          <li>インド産業の標準化を促進する</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISIマークの説明
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ISIマークとして一般的に知られるBIS認証マークは、信頼と適合の象徴です。コンビネーション・サイド・カッティング・プライヤーにおいて、ISIマークは以下を示します。
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>工具がIS 3650:1981の要件を満たしている</li>
          <li>機械的・切断性能が検証されている</li>
          <li>製品がインドでの販売について法的に承認されている</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          コンビネーション・サイド・カッティング・プライヤーに適用されるBIS規格
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – コンビネーションプライヤーの仕様
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本製品に適用されるインド規格はIS 3650:1981で、把持および切断用途に使用する横切り刃付きコンビネーションプライヤーの要件を規定しています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 3650:1981の適用範囲
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          本規格は以下を対象とします。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>横切り刃付きコンビネーションプライヤー</li>
          <li>寸法、形状、仕上げの要件</li>
          <li>材料品質および熱処理</li>
          <li>機械的強度および切断性能</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          安全性、性能および試験の目的
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 3650:1981は以下を確保するために設計されています。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>プライヤーに十分な切断能力がある</li>
          <li>くちばしおよび切断刃が欠けたり変形したりしない</li>
          <li>ハンドルが安全なグリップと（該当する場合）絶縁を提供する</li>
          <li>通常の使用条件下で工具が確実に機能する</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          適合が義務付けられる者
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インド国内のコンビネーション・サイド・カッティング・プライヤー製造業者</li>
          <li>輸入業者および販売業者</li>
          <li>インド市場に供給する海外製造業者</li>
          <li>プライベートブランドでプライヤーを販売するブランド</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          コンビネーション・サイド・カッティング・プライヤーにBIS認証が義務付けられる理由
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          消費者の安全リスク
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          規格未達のプライヤーは以下を引き起こす可能性があります。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>切断中の突然の破損</li>
          <li>滑りや手の怪我</li>
          <li>電気用途における感電の危険</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          政府および規制への適合
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS規格およびBIS通知に従い、IS 3650:1981の対象となるコンビネーションプライヤーなどの手工具は、インドで販売する前にBIS認証要件を満たす必要があります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的影響
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          認証されていないプライヤーの販売または輸入は、以下につながる可能性があります。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>当局による製品差し押さえ</li>
          <li>金銭的罰則</li>
          <li>貿易ライセンスの取消し</li>
          <li>BIS法に基づく法的措置</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          市場およびブランドのメリット
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          コンビネーション・サイド・カッティング・プライヤーのBISライセンスは、ブランドが以下を行うのに役立ちます。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>購入者および請負業者との信頼関係を構築する</li>
          <li>政府およびPSU入札の資格を得る</li>
          <li>確立された金物ブランドと競争する</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          コンビネーション・サイド・カッティング・プライヤー BIS認証のステップ別プロセス
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          適用性および規格の特定
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          最初のステップは、製品が以下であることを確認することです。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>コンビネーション・サイド・カッティング・プライヤーに該当する</li>
          <li>IS 3650:1981の対象である</li>
          <li>寸法および用途の面で規格の適用範囲に合致する</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISオンライン申請プロセス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製造業者は以下を行う必要があります。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BISポータルに登録する</li>
          <li>製品規格の下でIS 3650:1981を選択する</li>
          <li>BIS申請書に記入する</li>
          <li>必要な書類をすべてアップロードする</li>
          <li>適用される手数料を支払う</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          この段階は、BISオンライン申請またはBIS証明書登録として一般的に呼ばれます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISライセンスの手数料および費用構成
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証費用には一般的に以下が含まれます。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請および審査手数料</li>
          <li>製品試験費用</li>
          <li>工場検査費用</li>
          <li>ライセンスおよびマーキング手数料</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証の総費用は以下に依存します。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>バリエーション数</li>
          <li>試験の複雑さ</li>
          <li>工場の所在地</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          製品サンプル試験（IS 3650:1981に準拠）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          サンプルはBIS認定試験所で以下について試験されます。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>切断刃の硬度</li>
          <li>切断性能</li>
          <li>機械的強度</li>
          <li>寸法精度</li>
          <li>表面仕上げおよび工作</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          工場検査および監査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS担当官が工場監査を実施し、以下を確認します。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造プロセス</li>
          <li>熱処理および仕上げ作業</li>
          <li>品質管理体制</li>
          <li>試験および検査設備</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISライセンスおよびISIマークの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          試験および検査が成功した後：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BISがインド標準局ライセンスを発行する</li>
          <li>
            製造業者は承認されたプライヤーにISIマークを使用することが許可される
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          認証後の適合
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          承認後の要件には以下が含まれます。
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>サーベイランス検査</li>
          <li>市場サンプル試験</li>
          <li>ライセンスの適時の更新</li>
          <li>IS 3650:1981への継続的な適合</li>
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
          <li>工場登録証明書</li>
          <li>製造工程フローチャート</li>
          <li>機械および試験設備一覧</li>
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
          <li>原材料詳細</li>
          <li>熱処理およびQC計画</li>
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
          IS 3650:1981に基づく試験要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          必須試験には以下が含まれます。
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
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  製造
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  工作および仕上げ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  保存および梱包
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  寸法
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  硬度
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  絶縁（絶縁試験を除く）
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  絶縁試験
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  切断試験
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  チューブ把持試験
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  衝撃試験
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ねじり試験
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ハンドル荷重試験
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  曲げ試験
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
          よくある課題と回避方法
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          よくある問題
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>硬度または切断試験の不合格</li>
          <li>不適切な熱処理</li>
          <li>表面仕上げ不良</li>
          <li>書類の不備</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ベストプラクティス
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>社内事前試験を実施する</li>
          <li>適切な熱処理手順に従う</li>
          <li>ロット別品質記録を維持する</li>
          <li>専門のBISコンサルティング支援を受ける</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          製造業者・輸入業者向けBIS認証のメリット
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的メリット
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インド規制への完全適合</li>
          <li>罰則および差し押さえからの保護</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          商業的メリット
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>卸売業者および請負業者からの受入れ</li>
          <li>大口および機関向け発注の資格</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ブランディングのメリット
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISIマークがブランドの信頼性を高める</li>
          <li>非組織的サプライヤーとの差別化</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          市場拡大
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>組織的な金物小売チェーンへの参入</li>
          <li>輸出志向ビジネスでの受入れ拡大</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          不適合時の罰則
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          不適合は以下につながる可能性があります。
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>多額の罰金</li>
          <li>製品の差し押さえ</li>
          <li>事業の中断</li>
          <li>BIS法に基づく法的措置</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          コンビネーション・サイド・カッティング・プライヤーのBIS認証が必要なのは誰か
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インド国内の製造業者</li>
          <li>輸入業者</li>
          <li>海外製造業者（インド国内認可代理人を有する場合）</li>
          <li>自社ブランドで販売する貿易業者</li>
          <li>プライヤーを掲載するeコマース販売者</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          まとめ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 3650:1981に基づくコンビネーション・サイド・カッティング・プライヤーのBIS証明書の取得は、インドでこれらの工具を販売するための法的・品質上の重要な要件です。コンビネーション・サイド・カッティング・プライヤーのBIS認証は製品の安全性、一貫した性能、規制適合を保証し、BISライセンスはブランドの信頼性と市場での受入れを高めます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          製造業者、輸入業者、販売業者にとって、適時の適合は罰則を避けるだけでなく、より大きな市場と長期的な事業成長への道を開きます。専門家の指導により、BIS認証プロセスはよりスムーズで迅速になり、インド規格に完全に適合します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          よくある質問 – コンビネーション・サイド・カッティング・プライヤー BIS認証
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. コンビネーション・サイド・カッティング・プライヤーにBIS認証は必須ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、インドではIS 3650:1981への適合が義務付けられています。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. BIS証明書の正式名称は何ですか？
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
              通常30〜60営業日です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. BIS証明書の費用はいくらですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              費用は試験範囲および製品バリエーションにより異なります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. 輸入業者がBIS認証を申請できますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、製造業者からの適切な委任があれば申請できます。
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
              はい、インド国内認可代理人を通じて取得できます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. IS 3650:1981で必要な試験は何ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              硬度、切断性能、強度、寸法試験です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. 工場検査は必須ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、BISが工場監査を実施します。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. 複数サイズを1つのライセンスでカバーできますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、試験および承認の対象となります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. 非認証プライヤーを販売するとどうなりますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              罰則、差し押さえ、法的措置が発生する可能性があります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. BISはオンライン申請が必須ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、申請はオンラインのみで提出されます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. BISライセンスの更新は必要ですか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、ライセンスは定期的に更新する必要があります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. コンサルタントは承認遅延を減らせますか？
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、専門コンサルタントはミスや却下を避けるのに役立ちます。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="コンビネーション・サイド・カッティング・プライヤー BIS証明書 - IS 3650:1981 PDF"
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
              サービス一覧
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
                alt="BIS Logo"
                title="BIS Logo"
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
              インド製造向けISIマーク（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
