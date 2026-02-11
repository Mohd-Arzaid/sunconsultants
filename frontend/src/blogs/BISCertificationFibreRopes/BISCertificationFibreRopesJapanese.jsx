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

const BISCertificationFibreRopesJapanese = () => {
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

export default BISCertificationFibreRopesJapanese;

const MetaTags = () => {
  const title =
    "繊維ロープ・ポリエチレン向けBIS証明書 | IS 8674:2013 BISライセンス";
  const ogTitle =
    "繊維ロープ・ポリエチレン－BIS認証－IS 8674:2013ガイド";
  const twitterTitle =
    "繊維ロープ・ポリエチレン向けBISライセンス | IS 8674:2013";
  const metaDescription =
    "IS 8674:2013に基づく繊維ロープ・ポリエチレン向けBIS証明書を取得。インドにおけるBIS認証のプロセス、書類、試験、費用、スケジュール。";
  const ogDescription =
    "IS 8674:2013に準拠した繊維ロープ・ポリエチレンのBIS認証完全ガイド。プロセス、費用、書類、試験、BISライセンスのメリットをご説明します。";
  const twitterDescription =
    "IS 8674:2013に基づく繊維ロープ・ポリエチレン向けBIS証明書の申請。インドでのBISプロセス、書類、試験、手数料、スケジュールをご確認ください。";
  const metaKeywords =
    "繊維ロープ・ポリエチレンBIS証明書, 繊維ロープ・ポリエチレンBISライセンス, IS 8674:2013, 繊維ロープ・ポリエチレンBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/sen-i-ro-pu-pori-etiren-8674";
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
                    繊維ロープ・ポリエチレン向けBIS証明書 – IS 8674:2013
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
          繊維ロープ・ポリエチレン－BIS認証－IS 8674:2013完全ガイド
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFibreRopesPolyethylene.png"
            title="繊維ロープ・ポリエチレン向けBISライセンス"
            alt="繊維ロープ・ポリエチレン向けBIS証明書 - IS 8674:2013 BIS認証"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ポリエチレン繊維ロープは、インド全土で海事作業、漁業、港湾、農業、建設、物流、運輸、一般産業活動に広く使用されています。軽量で強度対重量比が高く、耐湿性、耐薬品性、耐摩耗性に優れ、過酷な環境に最適です。ただし、品質不良や粗悪な製造により繊維ロープが荷重下で破断すると、機器損傷から重傷、死亡に至るまで深刻な結果を招く可能性があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          安全性、均一な品質、性能の信頼性を確保するため、インド政府はIS 8674:2013に基づく繊維ロープ・ポリエチレンのBIS認証を義務化しています。インド市場でポリエチレン繊維ロープを供給する製造業者または輸入業者は、有効な繊維ロープ・ポリエチレン向けBIS証明書を取得する必要があります。この認証がない製品は不適合とみなされ、法的制裁、押収、販売禁止の対象となる可能性があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本製品ページは、製造業者、輸入業者、輸出業者、商社、卸売業者、海事サプライヤー、インフラ請負業者、EC販売者向けに作成されています。繊維ロープ・ポリエチレンのBIS認証の全体像、規格要件、試験手順、書類、費用、スケジュール、適合責任について説明しています。繊維ロープ・ポリエチレン向けBISライセンスの取得を検討されている場合は、本ガイドでプロセスを明確かつ自信を持って進められます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証とは
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証は、インドの国家標準機関であるインド標準局（BIS）が管轄する製品適合性評価制度です。BISはBureau of Indian Standards（インド標準局）の略称で、2016年BIS法に基づき設立されました。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS証明書の意味
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS証明書の意味は、製品が特定のインド規格（IS）に適合し、安全、強度、耐久性、性能に関する所定の要件を満たしていることを公式に認めることを指します。BIS認証製品は、BIS認定試験所での試験および工場検査・品質監査による評価を受けます。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ISIマークとBIS認証マーク
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BISの下で認証された製品には、BIS認証マーク（一般にISIマークとして知られる）と固有のライセンス番号が付きます。BISマークは、購入者、検査官、規制当局に製品が適用BIS規格に適合していることを保証します。
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BISが存在する理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BISは次の目的で存在します：
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>不安全・粗悪製品から使用者を保護する</li>
          <li>製造における一貫性と信頼性を確保する</li>
          <li>BIS通知を通じて政府規制を執行する</li>
          <li>インド市場における信頼、品質、公正取引を促進する</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          繊維ロープ・ポリエチレンに適用されるBIS規格
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 8674:2013 － インド規格の説明
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          本製品に適用されるインド規格はIS 8674:2013で、タイトルは「繊維ロープ—ポリエチレン—仕様」です。この規格は、一般用途および産業用途向けのポリエチレン繊維ロープの要件を定義しています。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 8674:2013の適用範囲
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          規格は以下をカバーします：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ポリエチレン繊維ロープの構造と分類</li>
          <li>原材料要件と繊維特性</li>
          <li>ロープ径、線密度、許容差</li>
          <li>最小破断荷重と強度要件</li>
          <li>マーキング、表示、包装の規定</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          安全、性能および試験の目的
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 8674:2013は、ポリエチレン繊維ロープが以下であることを確保することを目的としています：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>一貫した引張強度を発揮する</li>
          <li>静的・動的荷重下で信頼して性能を発揮する</li>
          <li>湿気、腐敗、薬品暴露に耐える</li>
          <li>吊り上げ、牽引、係留、結束作業に安全である</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          適合が義務となる者
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 8674:2013への適合は以下に義務付けられています：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ポリエチレン繊維ロープのインド国内製造業者</li>
          <li>ポリエチレンロープをインドに輸入する輸入業者</li>
          <li>インド法人を通じて販売する海外製造業者</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          繊維ロープ・ポリエチレンにBIS認証が義務となる理由
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. 消費者および労働者の安全リスク
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ポリエチレン繊維ロープは、荷重支持および安全上重要な作業で頻繁に使用されます。粗悪なロープは突然破断し、事故、負傷、機器損傷、経済的損失につながる可能性があります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. 政府への適合
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS通知および品質管理規制に基づき、IS 8674:2013の対象となる繊維ロープは、インドでの販売、供給、流通の前にBIS認証を受けている必要があります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. 法的影響
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証なしでポリエチレン繊維ロープを販売すると、以下の結果を招く可能性があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>商品の押収</li>
          <li>金銭的制裁</li>
          <li>契約・入札の取消</li>
          <li>2016年BIS法に基づく起訴</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. 市場およびブランドのメリット
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          繊維ロープ・ポリエチレン向けBIS証明書は、市場での受容性を高め、購入者の信頼を築き、政府、公企業、海事、インフラプロジェクトへの参加を可能にします。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          繊維ロープ・ポリエチレン向けBIS認証プロセス（ステップ別）
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          適用性と規格の特定
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          最初のステップは、ロープの構造、径範囲、用途を含め、製品がIS 8674:2013に該当することを確認することです。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISオンライン申請プロセス
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          製造業者はBISオンライン申請ポータルを通じてBIS申請を提出する必要があります。申請には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製品およびモデルの詳細</li>
          <li>製造拠点の情報</li>
          <li>適用BIS規格</li>
          <li>品質管理および試験の詳細</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          これによりBIS証明書登録プロセスが開始されます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          手数料および費用構成
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証費用には一般的に以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>申請料</li>
          <li>製品試験料</li>
          <li>工場検査料</li>
          <li>ライセンス料</li>
          <li>年間マーキング料</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証の総費用は、ロープの種類、径範囲、試験範囲によって異なります。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          製品サンプル試験（規格に基づく詳細試験）
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ポリエチレン繊維ロープのサンプルは、IS 8674:2013に厳密に従い、BIS認定試験所で試験されます。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          工場検査および監査
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS職員は以下を確認するため工場監査を実施します：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>製造プロセスと管理</li>
          <li>原材料検査手順</li>
          <li>工程内品質チェック</li>
          <li>試験および校正設備</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BISライセンスおよびISIマークの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          試験および検査が成功した後、BISはインド標準局ライセンスを付与し、認証されたポリエチレン繊維ロープにISIマークの使用を許可します。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          認証後の適合
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          認証後、ライセンス保持者は以下を行う必要があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>一貫した品質を維持する</li>
          <li>定期試験を実施する</li>
          <li>監視検査を受ける</li>
          <li>BISライセンスを定期的に更新する</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 8674:2013に基づくBISライセンスの範囲
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BISライセンスは以下の用途向けのポリエチレン繊維ロープに適用されます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>海事および漁業作業</li>
          <li>港湾、海運、物流</li>
          <li>農業および一般用途</li>
          <li>産業および商業用途</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          範囲はIS 8674:2013仕様に適合するロープに厳格に限定されます。
        </p>

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
          <li>製造プロセスフローチャート</li>
          <li>機械および試験装置の一覧</li>
          <li>品質管理計画</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法定書類
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
          <li>製品仕様および図面</li>
          <li>ロープ構造および材料詳細</li>
          <li>径および破断荷重データ</li>
          <li>社内試験手順</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS申請書類
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS申請書</li>
          <li>BIS認定試験所からの試験報告書</li>
          <li>誓約書および宣言書</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          以上がBIS認証書類の一式です。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 8674:2013に基づく試験要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          義務試験には以下が含まれます：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>径および線密度の測定</li>
          <li>破断荷重および引張強度試験</li>
          <li>伸び試験</li>
          <li>構造およびよりの検証</li>
          <li>外観検査および仕上品質</li>
          <li>マーキングおよび表示の適合</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          すべての試験はBIS認定試験所でのみ実施する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          よくある課題と回避方法
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          原材料品質のばらつき
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          対策：管理グレードのポリエチレン繊維および認定サプライヤーを使用すること。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          試験不合格
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          対策：社内事前試験を実施し、プロセスの一貫性を改善すること。
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          書類の誤り
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          対策：BIS提出前に正確かつ完全な書類を準備すること。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          製造業者・輸入業者におけるBIS認証のメリット
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          法的メリット
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インド規制への適合</li>
          <li>制裁および押収リスクの低減</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          商業的メリット
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>政府、公企業、海事契約の入札資格</li>
          <li>産業購入者からの受容性向上</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ブランディングのメリット
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS認証マークによる信頼</li>
          <li>ブランド信頼性の向上</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          市場拡大
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>規制された国内および輸出向け市場へのアクセス</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          不適合に対する制裁
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS要件を満たさない場合、以下につながる可能性があります：
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>多額の金銭的制裁</li>
          <li>不適合製品の押収</li>
          <li>輸入および販売の制限</li>
          <li>法的起訴</li>
          <li>永久的な市場参入禁止</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          繊維ロープ・ポリエチレンにBIS認証が必要な者
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>インド国内製造業者</li>
          <li>輸入業者</li>
          <li>海外製造業者</li>
          <li>商社および卸売業者</li>
          <li>EC販売者</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          インド市場にポリエチレン繊維ロープを供給するすべての事業者は、BIS適合を確保する必要があります。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          まとめ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 8674:2013に基づく繊維ロープ・ポリエチレン向けBIS証明書の取得は、インドで事業を営む企業にとって法的要件であり、戦略的優位性となります。繊維ロープ・ポリエチレンのBIS認証は、製品の安全性、強度、信頼性を確保し、使用者を保護し、ブランドの信頼性を高めます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          有効な繊維ロープ・ポリエチレン向けBISライセンスを取得した製造業者および輸入業者は、規制市場に自信を持ってアクセスし、高額契約に参加し、法的リスクを回避できます。適切な準備、正確な書類、専門家の指導により、BIS認証プロセスはスムーズで効率的になり、長期的な成長に大いに役立ちます。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          よくある質問 － 繊維ロープ・ポリエチレン向けBIS認証
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. インドではポリエチレン繊維ロープにBIS認証は義務ですか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、IS 8674:2013に基づくBIS認証は義務です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. BISの正式名称は何ですか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards（インド標準局）です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. BIS認証なしでポリエチレンロープを販売できますか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              いいえ、無認証ロープのインドでの販売は違法です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. BIS証明書の費用はいくらですか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              製品の種類および試験範囲によって異なります。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. BIS認証プロセスにはどのくらいかかりますか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              通常6～10週間です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. ISIマークは義務ですか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、認証後はISIマーキングが義務です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. 1つのライセンスで複数のロープ径をカバーできますか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、適合および試験範囲に応じて可能です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. 工場検査は義務ですか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、BISが工場監査を実施します。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. スタートアップもBIS認証を申請できますか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、製造設備が適合していれば申請できます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. BIS認証は更新が必要ですか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、定期更新が義務です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. 製品試験が不合格の場合どうなりますか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              是正措置および再試験が必要です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. BIS認定試験所は必須ですか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、BIS認定試験所のみが認められます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. 海外製造業者は直接申請できますか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、インド国内の認可代理人を通じて申請できます。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. 漁業用ロープはこの規格の対象ですか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              はい、IS 8674:2013に適合していれば対象です。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. 購入者にとってBIS認証は何を意味しますか。
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              安全性、強度、一貫した品質を保証します。
            </p>
          </div>
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
              インド製造向けISIマーク（BIS）
             </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
