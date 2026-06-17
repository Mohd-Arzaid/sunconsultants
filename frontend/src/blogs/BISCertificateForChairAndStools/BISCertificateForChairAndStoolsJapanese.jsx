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

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForChairAndStoolsJapanese = () => {
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

export default BISCertificateForChairAndStoolsJapanese;

const MetaTags = () => {
  const title =
    "一般用途の椅子とスツールのBIS認証 | IS 17632:2022";
  const ogTitle =
    "一般用途の椅子とスツールのBIS認証 | IS 17632:2022";
  const twitterTitle =
    "一般用途の椅子とスツールのBIS認証 | IS 17632:2022";
  const metaDescription =
    "IS 17632:2022に基づく一般用途の椅子とスツールのBIS認証についてすべてを学びましょう。ISIマーク要件、テスト、認証プロセス、書類、メリット、FAQを理解できます。";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "一般用途の椅子とスツールのBIS認証, IS 17632:2022, ISIマーク 椅子 スツール, BISライセンス 椅子 スツール, BIS認証 家具";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632";
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
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/yizi-he-dengzi-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stoelen-en-krukken-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-et-tabourets-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/stuhle-und-hocker-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-dan-bangku-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-e-sgabelli-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-y-taburetes-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-lae-mang-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632"
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
                    一般用途の椅子とスツールのBIS認証（IS 17632:2022）
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
          一般用途の椅子とスツールのBIS認証（IS 17632:2022）–
          ISIマーク認証の完全ガイド
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="一般用途の椅子とスツールのBISライセンス"
            alt="一般用途の椅子とスツールのBIS認証 - IS 17632:2022 ISIマークガイド"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          一般用途の椅子とスツールは、家庭、オフィス、教育機関、医療施設、小売店、公共スペース、商業環境など、最も広く使用されている家具製品の一つです。これらの座席製品は日常的かつ長時間使用されるため、信頼性の高い性能を確保するには、品質、安全性、強度、耐久性に関する特定の要件を満たす必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          製品品質と消費者安全への関心が高まる中、インド規格への準拠は家具メーカーおよび輸入業者にとって重要な要件となっています。IS
          17632:2022に基づく一般用途の椅子とスツールのBIS認証は、製品がインド市場に投入される前に、所定の性能および安全要件を満たすことを確保するのに役立ちます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          インド標準局（BIS）による認証により、メーカーは適合製品にISIマークを使用できます。ISIマークは、製品が認められたインドの品質基準に適合し、必要な評価プロセスを経たことを示す保証となります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          家具業界の成長が続き、調達機関が認証製品をますます選好する中、BIS認証はメーカーにとって重要なコンプライアンスおよび市場アクセス要件となっています。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          一般用途の椅子とスツールのBIS認証の主なハイライト
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  項目
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  詳細
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["製品名", "一般用途の椅子とスツール"],
                ["適用インド規格", "IS 17632:2022"],
                ["認証タイプ", "BIS製品認証"],
                ["認証スキーム", "スキームI（ISIマーク認証）"],
                ["適用マーク", "ISIマーク"],
                ["規制当局", "Bureau of Indian Standards（BIS）"],
                ["所管省庁", "商工省"],
                [
                  "コンプライアンス要件",
                  "該当する家具QCO（Quality Control Order）に基づく義務",
                ],
                ["製品カテゴリー", "家具"],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "認証スキーム" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        スキームI（ISIマーク認証）
                      </a>
                    ) : particular === "コンプライアンス要件" ? (
                      <>
                        該当する{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>家具QCO（Quality Control Order）</strong>
                        </a>
                        に基づく義務
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          一般用途の椅子とスツールのBIS認証とは？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          一般用途の椅子とスツールのBIS認証は、BIS製品認証スキームの下で実施される適合性評価プロセスです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証の目的は、製品がIS
          17632:2022に規定された要件に適合していることを確認することです。認証が付与されると、メーカーは製品にISIマークを使用する権限を得ます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          認証プロセスでは、製品性能のさまざまな側面が評価されます。これには以下が含まれます：
        </p>

        <ul className={LIST_CLASS}>
          <li>強度</li>
          <li>安定性</li>
          <li>耐久性</li>
          <li>構造性能</li>
          <li>安全要件</li>
          <li>材料品質</li>
          <li>工作精度</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          この認証は、インド市場に供給される座席製品が確立された品質および安全基準を満たすことを確保するのに役立ちます。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17632:2022の概要
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022は、一般用途の椅子とスツールの要件を規定するインド規格です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          この規格は、一般用途を意図した座席家具の安全性、強度、耐久性、安定性、全体的な性能に関する要件を定めています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          この規格は以下に適用されます：
        </p>

        <ul className={LIST_CLASS}>
          <li>完全に製造された椅子とスツール</li>
          <li>加工された椅子とスツール</li>
          <li>組み立て後の組み立て式製品</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          この規格の目的は、家具製品が意図された使用期間を通じて安全で信頼性が高く、耐久性のある性能を提供することです。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17632:2022の主要要件
        </h2>

        <h3 className={SUB_HEADING_CLASS}>強度要件</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          一般用途の椅子とスツールは、通常使用時の予想される荷重条件に耐えうる十分な構造強度を備えている必要があります。
        </p>

        <h3 className={SUB_HEADING_CLASS}>安定性要件</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          家具は意図された使用時に安定した状態を保ち、不必要な転倒リスクを呈さないものとします。
        </p>

        <h3 className={SUB_HEADING_CLASS}>耐久性要件</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          製品は、反復使用サイクルを通じて構造の完全性と性能を維持できる必要があります。
        </p>

        <h3 className={SUB_HEADING_CLASS}>安全要件</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          この規格には、家具使用に関連するリスクを最小限に抑えることを目的とした安全関連の要件が含まれています。
        </p>

        <h3 className={SUB_HEADING_CLASS}>材料品質と工作精度</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          材料の品質、製造方法、組み立て方法、接合部、仕上げは、規格への適合に大きく寄与します。
        </p>

        <h3 className={SUB_HEADING_CLASS}>人間工学上の考慮事項</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          この規格には、ユーザーの快適性と実用的な機能性に寄与する性能関連の考慮事項が組み込まれています。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17632:2022の対象製品
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          この規格は一般的に以下に適用されます：
        </p>

        <ul className={LIST_CLASS}>
          <li>一般用途の椅子</li>
          <li>一般用途のスツール</li>
          <li>一般用途向けの固定式座席家具</li>
          <li>組み立て後の組み立て式座席製品</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          メーカーは、自社製品への適用可能性を判断するために、規格の適用範囲を慎重に確認する必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            必須BIS認証の対象となる家具製品もご確認ください —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>家具のBIS認証</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          一般用途の椅子とスツールにBIS認証は必須ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          はい。該当する家具品質管理命令（QCO）の対象となる家具製品は、関連するインド規格に適合し、インド市場で製造、輸入、販売、流通、供給される前にBIS認証を取得する必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          該当する規制枠組みの対象となるメーカーは、BISライセンスを取得し、BISが定める表示要件に従う必要があります。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証のテスト要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証が付与される前に、製品サンプルは認定された試験機関でのテストを通じて評価される必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          テストは一般的に以下のパラメータに焦点を当てます：
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>構造性能評価 —</strong>{" "}
            椅子またはスツールが故障することなく通常の使用条件に耐えられるかどうかを判断します。
          </li>
          <li>
            <strong>安定性テスト —</strong>{" "}
            家具が意図された使用時に安定した状態を保ち、転倒に抵抗できるかどうかを評価します。
          </li>
          <li>
            <strong>強度評価 —</strong>{" "}
            フレーム、接合部、支持部の荷重能力と構造の完全性を評価します。
          </li>
          <li>
            <strong>耐久性評価 —</strong>{" "}
            製品の使用期間を通じた反復使用サイクル後の性能維持を確認します。
          </li>
          <li>
            <strong>安全性評価 —</strong>{" "}
            潜在的な危険を特定し、所定の安全要件への適合を検証します。
          </li>
          <li>
            <strong>工作精度の検査 —</strong>{" "}
            施工品質、仕上げ、組み立ての完全性、全体的な製造基準を確認します。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          製品表示要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS
          17632:2022の下で認証された製品は、一般的に以下の識別情報を表示する必要があります：
        </p>

        <ul className={LIST_CLASS}>
          <li>メーカー名または商標</li>
          <li>モデルまたはデザイン識別</li>
          <li>バッチまたはロット番号</li>
          <li>製造日</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ISIマークは、有効なBISライセンスを取得した後にのみ表示できます。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          一般用途の椅子とスツールのBIS認証プロセス
        </h2>

        <h3 className={SUB_HEADING_CLASS}>ステップ1：製品範囲の評価</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          最初のステップは、製品がIS
          17632:2022および該当する家具QCOの範囲に該当するかどうかを判断することです。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          認証プロセスを開始する前に、椅子またはスツールのタイプ、使用目的、材料、構造を確認してください。
        </p>

        <h3 className={SUB_HEADING_CLASS}>ステップ2：書類の準備</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          メーカーは、会社記録、工場詳細、製品仕様、品質管理手順を含む、認証に必要な技術およびコンプライアンス書類を準備します。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          完全かつ正確な書類は、BIS審査中の不要な遅延を回避するのに役立ちます。
        </p>

        <h3 className={SUB_HEADING_CLASS}>ステップ3：製品テスト</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          代表的なサンプルは、BIS認定試験機関でIS
          17632:2022の要件への適合を確認するためにテストされます。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          試験機関のテストレポートは、認証申請を支持する重要な技術文書です。
        </p>

        <h3 className={SUB_HEADING_CLASS}>ステップ4：BIS申請の提出</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          認証申請は、支持書類、テストレポート、製造情報とともに提出されます。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          BISは、次の段階に進む前に、申請の完全性と技術的適合性を審査します。
        </p>

        <h3 className={SUB_HEADING_CLASS}>ステップ5：工場検査</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BISは、製造施設、生産システム、品質管理プロセスを評価し、適合製品を一貫して生産する能力を確認する場合があります。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          この評価には、通常、生産インフラ、QCシステム、原材料管理、製品トレーサビリティが含まれます。
        </p>

        <h3 className={SUB_HEADING_CLASS}>ステップ6：技術審査</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          申請、テストレポート、検査結果は、認証決定が下される前にBISによって審査されます。
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          審査中に指摘された観察事項や不備は、申請者が対処する必要があります。
        </p>

        <h3 className={SUB_HEADING_CLASS}>ステップ7：ライセンスの付与</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          満足のいく適合性が確認されると、BISはライセンスを付与し、認証された一般用途の椅子とスツールへのISIマークの使用を承認します。
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          メーカーは、ライセンス期間を通じてBIS要件への適合を継続する必要があります。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証のメリット
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>インド規制への適合 —</strong>{" "}
            該当する家具QCOに基づく必須の品質および安全要件を満たします。
          </li>
          <li>
            <strong>合法的な市場アクセス —</strong>{" "}
            該当する規制要件に従って、インドで認証された椅子とスツールを供給できます。
          </li>
          <li>
            <strong>製品信頼性の向上 —</strong>{" "}
            ISIマークは、認められたインド規格への適合を示します。
          </li>
          <li>
            <strong>顧客信頼の向上 —</strong>{" "}
            消費者および機関の購入者は、確立された基準に対して評価された製品を選好します。
          </li>
          <li>
            <strong>競争上の優位性 —</strong>{" "}
            商業および政府調達プロセスでの受け入れが高まります。
          </li>
          <li>
            <strong>ブランド評価の向上 —</strong>{" "}
            製品品質、安全性、長期的な信頼性への取り組みを示します。
          </li>
          <li>
            <strong>中小企業（MSME）の支援 —</strong>{" "}
            中小メーカーが市場での存在感を強化し、顧客の信頼を築くのに役立ちます。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          認証中に直面する一般的な課題
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>製品テストの不合格 —</strong>{" "}
            設計または製造上の不備により、試験機関での評価中に不適合が生じる場合があります。
          </li>
          <li>
            <strong>書類の問題 —</strong>{" "}
            不完全または矛盾する記録は、認証の遅延の一般的な原因となります。
          </li>
          <li>
            <strong>製造コンプライアンスのギャップ —</strong>{" "}
            認証が付与される前に、品質管理システムの改善が必要な場合があります。
          </li>
          <li>
            <strong>規制の複雑さ —</strong>{" "}
            専門家のガイダンスなしでは、テスト、検査、認証手続きの管理が困難な場合があります。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sun Certifications Indiaを選ぶ理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications
          Indiaは、インド全土のメーカー、輸入業者、輸出業者、企業の規制コンプライアンス要件を支援しています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          当社のサービスには以下が含まれます：
        </p>

        <ul className={LIST_CLASS}>
          <li>製品適用性の評価</li>
          <li>BIS認証コンサルティング</li>
          <li>書類作成支援</li>
          <li>試験機関テストの調整</li>
          <li>工場検査の準備</li>
          <li>申請管理</li>
          <li>規制コンプライアンス支援</li>
          <li>認証後のサポート</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          当社の目標は、クライアントが認証要件を効率的にナビゲートし、最小限の遅延でコンプライアンスを達成できるよう支援することです。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17632:2022に基づく一般用途の椅子とスツールのBIS認証は、製品の品質、安全性、強度、安定性、耐久性を確保する上で重要な役割を果たします。この認証は、メーカーがインド規格への適合を示し、顧客の信頼を強化し、市場アクセスを支援するのに役立ちます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          品質保証された家具製品への需要が高まる中、BIS認証とISIマークは、消費者、機関、調達機関にとって貴重な保証を提供します。コンプライアンスに投資するメーカーは、規制要件を満たすだけでなく、競争力と長期的な市場評価も向上させます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17632:2022に基づく一般用途の椅子とスツールのBIS認証を取得する予定がある場合、Sun
          Certifications
          Indiaは、認証プロセス全体を通じて専門的なガイダンスとエンドツーエンドのコンプライアンス支援を提供できます。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 一般用途の椅子とスツールのBIS認証（IS 17632:2022）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. IS 17632:2022とは何ですか？</strong>
              <br />
              IS
              17632:2022は、一般用途の椅子とスツールの要件を規定するインド規格です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. 一般用途の椅子とスツールにBIS認証は必須ですか？
              </strong>
              <br />
              該当する家具品質管理命令（QCO）の対象となる製品は、BIS認証要件に適合する必要があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ISIマークとは何ですか？</strong>
              <br />
              ISIマークは、BIS製品認証スキームの下で発行される標準的な認証マークです。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 誰がBIS認証を申請できますか？</strong>
              <br />
              インド国内メーカーと外国メーカーの両方が認証を申請できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. BIS認証には製品テストが必要ですか？</strong>
              <br />
              はい。製品テストは認証プロセスの重要な要素です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. 組み立て式の椅子はIS 17632:2022の対象ですか？
              </strong>
              <br />
              はい。この規格は組み立て後の組み立て式製品に適用されます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. IS 17632:2022の適用範囲から除外される製品は何ですか？
              </strong>
              <br />
              リクライニングチェア、ロッキングチェア、チルトチェア、ソファ、特定の専門座席製品などは、一般的に除外されます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. BIS認証を取得するメリットは何ですか？</strong>
              <br />
              メリットには、規制への適合、製品信頼性の向上、顧客信頼の強化、市場での受け入れの向上が含まれます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 外国メーカーはBIS認証を取得できますか？</strong>
              <br />
              はい。外国メーカーは、海外メーカー向けの該当するBIS認証ルートを通じて申請できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications Indiaはどのように支援できますか？</strong>
              <br />
              Sun Certifications
              Indiaは、書類作成、テスト調整、申請管理、コンプライアンス支援を含む、BIS認証のエンドツーエンドサポートを提供します。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="椅子とスツールのBIS認証 - IS 17632:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          関連リソース
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              ISI認証
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              外国メーカー向けBIS認証
            </a>
          </li>
        </ul>

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
