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

const BISCertificateForWorkChairsJapanese = () => {
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

export default BISCertificateForWorkChairsJapanese;

const MetaTags = () => {
  const title = "作業用椅子のBIS認証 | IS 17631:2022 BISライセンス";
  const ogTitle = "作業用椅子のBIS認証 – IS 17631:2022ガイド";
  const twitterTitle = "作業用椅子のBISライセンス | IS 17631:2022";
  const metaDescription =
    "IS 17631:2022に基づく作業用椅子のBIS認証を取得。インドでのBIS認証のプロセス、書類、テスト、費用、タイムライン。";
  const ogDescription =
    "IS 17631:2022に基づく作業用椅子のBIS認証の完全ガイド。プロセス、費用、書類、テスト、BISライセンスのメリットを理解する。";
  const twitterDescription =
    "IS 17631:2022に基づく作業用椅子のBIS認証を申請。インドでのBISプロセス、書類、テスト、費用、タイムラインを学ぶ。";
  const metaKeywords =
    "作業用椅子のBIS認証, 作業用椅子のBISライセンス, IS 17631:2022, 作業用椅子のBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631";
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
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
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
                    作業用椅子のBIS認証（IS 17631:2022）
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
          作業用椅子のBIS認証（IS 17631:2022）– ISIマーク認証の完全ガイド
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="作業用椅子のBISライセンス"
            alt="作業用椅子のBIS認証 - IS 17631:2022 ISIマークガイド"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          作業用椅子は、現代の職場、教育機関、政府機関、コワーキングスペース、ホームオフィス環境において不可欠な存在となっています。企業が従業員の快適性、生産性、職場の人間工学、労働福祉により大きな重点を置くにつれ、高品質な作業用椅子への需要は増え続けています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          設計の不十分な椅子は、姿勢、快適性、生産性に悪影響を及ぼす可能性があります。このため、品質、安全性、耐久性、人間工学的性能は、製造業者、購入者、調達機関にとって重要な考慮事項です。業界全体で均一な品質基準を確保するため、インド標準局（BIS）は作業用椅子に適用されるインド標準IS
          17631:2022を制定しました。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          適用される規制枠組みの対象となる製造業者は、BIS認証を取得し、適合製品にISIマークを使用する必要があります。BIS認証は、作業用椅子が安全性、強度、安定性、耐久性、人間工学的性能に関する所定の要件に対して評価されたことを示します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本包括的ガイドでは、IS
          17631:2022に基づく作業用椅子のBIS認証について、製造業者、輸入業者、家具ブランド、調達担当者、事業主が知っておくべきすべての情報を説明します。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBIS認証の概要
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
                ["製品", "作業用椅子"],
                ["適用インド標準", "IS 17631:2022"],
                ["認証タイプ", "BIS製品認証"],
                ["適用認証スキーム", "スキームI（ISIマーク認証）"],
                ["適用マーク", "ISIマーク"],
                ["規制当局", "インド標準局（BIS）"],
                ["適用省庁", "商工省"],
                [
                  "コンプライアンス要件",
                  "適用される家具QCO（品質管理命令）に基づく義務",
                ],
                [
                  "申請資格者",
                  "インド製造業者および外国製造業者 ",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "適用認証スキーム" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        スキームI（ISIマーク認証）
                      </a>
                    ) : particular === "コンプライアンス要件" ? (
                      <>
                        適用される{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>家具QCO（品質管理命令）</strong>
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
          作業用椅子のBIS認証とは？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          作業用椅子のBIS認証は、インド標準局製品認証スキームの下で実施される適合性評価プロセスです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証の目的は、作業用椅子がIS
          17631:2022で規定された要件に適合していることを確認することです。認証に成功すると、製造業者は製品にISIマークを使用することが許可されます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          認証プロセスでは、作業用椅子のさまざまな性能および安全面が評価されます。これには以下が含まれます：
        </p>

        <ul className={LIST_CLASS}>
          <li>人間工学的設計</li>
          <li>構造的完全性</li>
          <li>安定性</li>
          <li>耐久性</li>
          <li>安全要件</li>
          <li>工作精度</li>
          <li>製品性能</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ISIマークは、製品が認められたインド標準に対して評価され、所定の品質要件を満たしていることを保証します。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子においてBIS認証が重要な理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          作業用椅子は、オフィス、教育機関、商業施設、在宅ワークスペースで長時間使用されます。ユーザーが1日のかなりの時間を座って過ごすため、これらの椅子の品質と人間工学的性能は、快適性と職場効率に直接影響します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証は、認証された作業用椅子が以下を満たすことを支援します：
        </p>

        <ul className={LIST_CLASS}>
          <li>所定の安全要件を満たす</li>
          <li>信頼性の高い性能を提供する</li>
          <li>十分な構造強度を備える</li>
          <li>使用中の安定性を維持する</li>
          <li>長期的な耐久性を確保する</li>
          <li>インドの品質基準に適合する</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          製造業者にとって、認証は製品品質を示すとともに、規制コンプライアンスと市場受容を支援します。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17631:2022の概要
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022は、作業用椅子の要件を規定するインド標準です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          本標準は、以下に関する要件を定めています：
        </p>

        <ul className={LIST_CLASS}>
          <li>安全性</li>
          <li>強度</li>
          <li>安定性</li>
          <li>耐久性</li>
          <li>人間工学的考慮事項</li>
          <li>機能的性能</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          目的は、作業用椅子が職場環境での長期使用において、安全で信頼性の高い性能を提供できることを確保することです。
        </p>

        <h3 className={SUB_HEADING_CLASS}>IS 17631:2022の適用範囲</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          標準によると、IS 17631:2022は作業用椅子を対象とし、以下に適用されます：
        </p>

        <ul className={LIST_CLASS}>
          <li>完全に製造された作業用椅子</li>
          <li>組み立て加工された作業用椅子</li>
          <li>組み立て後の組立て式作業用椅子</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          標準の要件は、使用を目的とした組み立て済み製品に適用されます。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17631:2022で対象となる作業用椅子の種類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          製品設計と用途によって、本標準はさまざまなカテゴリーの職場用座席家具に適用される場合があります。これには以下が含まれます：
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>オフィス作業用椅子 —</strong>{" "}
            企業オフィス、管理部門、プロフェッショナルな職場環境で使用される座席。
          </li>
          <li>
            <strong>タスクチェア —</strong>{" "}
            日常のデスクワーク、ワークステーション、定型的な着座作業向けに設計された椅子。
          </li>
          <li>
            <strong>調整可能な作業用椅子 —</strong>{" "}
            高さ、傾斜、その他の調整機能を備え、快適性と人間工学を向上させるモデル。
          </li>
          <li>
            <strong>機関向け作業用椅子 —</strong>{" "}
            学校、大学、政府機関、商業施設に供給される椅子。
          </li>
          <li>
            <strong>ホームオフィスチェア —</strong>{" "}
            リモートワーク、フリーランス、在宅オフィス向けに設計された作業用椅子。
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          製品設計、機構、使用目的を慎重に確認し、椅子がIS
          17631:2022の適用範囲内かどうかを判断してください。
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            義務的BIS認証の対象となる家具製品もご確認ください —
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
          IS 17631:2022の主要要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          本標準は、作業用椅子の品質と安全性に寄与するいくつかの重要な性能特性に焦点を当てています。
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>人間工学的設計 —</strong>{" "}
            ユーザーの快適性、シートおよび背もたれのサポート、調整性、適切な姿勢に対応し、疲労を軽減して職場の生産性を向上させます。
          </li>
          <li>
            <strong>強度要件 —</strong>{" "}
            フレーム、接合部、支持構造は、通常使用において故障や完全性の喪失なく耐えなければなりません。
          </li>
          <li>
            <strong>安定性要件 —</strong>{" "}
            椅子は転倒に抵抗し、通常の着座使用および移動中も安定を維持しなければなりません。
          </li>
          <li>
            <strong>耐久性要件 —</strong>{" "}
            製品は、想定される使用期間にわたる長期かつ反復的な日常使用後も一貫した性能を発揮しなければなりません。
          </li>
          <li>
            <strong>安全要件 —</strong>{" "}
            設計および構造は、不安定さ、欠陥、不安全な製作による回避可能な危険を最小限に抑える必要があります。
          </li>
          <li>
            <strong>材料品質 —</strong>{" "}
            部品および仕上げは、安全で耐久性があり信頼性の高い性能を支える品質基準を満たす必要があります。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBIS認証における試験要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証が付与される前に、製品サンプルは認定試験所での試験を通じて評価されます。試験は、IS
          17631:2022で規定された要件への適合を確認するのに役立ちます。
        </p>

        <h3 className={SUB_HEADING_CLASS}>実施される主要試験</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
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
              {[
                ["4", "設計と工作"],
                ["7.3.1", "前縁転倒"],
                ["7.3.2", "前方転倒"],
                [
                  "7.3.3",
                  "足置き付き椅子の前方転倒",
                ],
                [
                  "7.3.4",
                  "アームレストなし椅子の横転倒",
                ],
                [
                  "7.3.5",
                  "アームレスト付き椅子の横転倒",
                ],
                [
                  "7.3.6",
                  "バックレストなし椅子の後方転倒",
                ],
                ["7.4.1", "シート前縁静的負荷試験"],
                ["7.4.2", "シートとバックの組み合わせ静的負荷試験"],
                ["7.4.3", "アームレスト下方静的負荷試験 — 中央"],
                ["7.4.4", "アームレスト下方静的負荷試験 — 前方"],
                ["7.4.5", "アームレスト横方向静的負荷試験"],
                ["7.4.6", "足置き静的負荷試験"],
              ].map(([clause, requirement], index) => (
                <TableRow
                  key={clause}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {clause}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {requirement}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBIS認証プロセス
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17631:2022に基づくBIS認証を求める製造業者は、体系的な認証プロセスを完了する必要があります。
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>ステップ1：製品適用性評価 —</strong>{" "}
            認証開始前に、作業用椅子がIS
            17631:2022および適用される家具QCOの対象かどうかを確認します。
          </li>
          <li>
            <strong>ステップ2：書類準備 —</strong>{" "}
            BIS審査に必要な技術、製造、品質管理、法務記録を整理します。
          </li>
          <li>
            <strong>ステップ3：製品試験 —</strong>{" "}
            サンプルをBIS認定試験所に提出し、IS
            17631:2022に対して評価します。
          </li>
          <li>
            <strong>ステップ4：申請提出 —</strong>{" "}
            試験報告書、工場詳細、コンプライアンス関連書類とともにBIS申請を提出します。
          </li>
          <li>
            <strong>ステップ5：工場検査 —</strong>{" "}
            BISは製造施設の生産システム、QC手順、トレーサビリティを評価します。
          </li>
          <li>
            <strong>ステップ6：技術審査 —</strong>{" "}
            BISは最終承認前に、申請、試験結果、検査所見を評価します。
          </li>
          <li>
            <strong>ステップ7：BISライセンス付与 —</strong>{" "}
            適合が確認されると、BISはライセンスを発行し、認証された作業用椅子へのISIマーク使用を承認します。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          インド製造業者向けBIS認証
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          インド製造業者は通常、国内認証ルートを通じて申請します。プロセスには一般的に以下が含まれます：
        </p>

        <ul className={LIST_CLASS}>
          <li>BIS認定試験所での製品試験</li>
          <li>書類審査およびBIS申請提出</li>
          <li>BISによる工場評価および技術審査</li>
          <li>BISライセンス付与およびISIマーク承認</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証後、製造業者はBISの監視、マーキング、品質要件への継続的な適合を維持する必要があります。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          外国製造業者向けBIS認証
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          作業用椅子をインドに輸出する予定の外国製造業者も、義務的認証要件の対象となる製品を供給する前にBIS認証を取得する必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          プロセスには一般的に以下が含まれます：
        </p>

        <ul className={LIST_CLASS}>
          <li>Authorized Indian Representative（AIR）の任命</li>
          <li>海外での製品試験および工場評価</li>
          <li>BIS申請審査および認証承認</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これにより、輸入製品が国内製造業者に適用されるのと同じ品質および安全要件を満たすことが保証されます。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBIS認証に必要な書類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          書類は作業用椅子のBIS認証プロセスにおいて重要な要素です。要件は、申請者がインド製造業者、外国製造業者、または輸入業者であるか、および従う認証スキームによって異なる場合があります。不完全または不一致の記録は、申請遅延の最も一般的な原因の一つです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS
          17631:2022に基づく作業用椅子のBIS認証では、以下の書類が一般的に必要です：
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>事業書類 —</strong>{" "}
            会社登録証明書、製造ライセンス（該当する場合）、GST登録、事業所住所証明、および身分証明書・住所証明付きの権限ある署名者の詳細。
          </li>
          <li>
            <strong>製造書類 —</strong>{" "}
            工場レイアウト図、製造プロセスフローチャート、生産機械および試験設備リスト、生産インフラおよび設置能力の詳細。
          </li>
          <li>
            <strong>製品書類 —</strong>{" "}
            製品仕様書、エンジニアリングまたは技術図面、製品カタログまたはモデルリスト、部品表（BOM）、作業用椅子に使用される原材料、部品、重要部品の詳細。
          </li>
          <li>
            <strong>品質管理書類 —</strong>{" "}
            書面による品質管理手順、入荷材料検査記録、工程内および完成品検査報告書、内部試験方法、計測および試験機器の校正証明書。
          </li>
          <li>
            <strong>認証書類 —</strong>{" "}
            BIS認定試験所からの試験報告書、適切に記入されたBIS申請書、宣言および誓約書、ラベルまたはマーキングサンプル、特定の認証ルートについてBISが定める追加書類。
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          すべての書類は正確で完全であり、BIS申請で提出された製品詳細と一致している必要があります。製造業者は、認証処理の不必要な遅延を避けるため、提出前に書類要件を慎重に確認することをお勧めします。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          作業用椅子のBIS認証のメリット
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>規制コンプライアンス —</strong>{" "}
            合法的な製造および販売のための義務的インド標準およびQCO要件を満たします。
          </li>
          <li>
            <strong>合法的な市場アクセス —</strong>{" "}
            対象製品カテゴリーについて、規制リスクなくインドで認証された作業用椅子を供給できます。
          </li>
          <li>
            <strong>信頼性の向上 —</strong>{" "}
            ISIマークは、IS
            17631:2022に対する検証済みの品質、安全性、適合性を示します。
          </li>
          <li>
            <strong>顧客の信頼 —</strong>{" "}
            企業購買者、機関、エンドユーザーは、国家基準に対して試験された製品を信頼します。
          </li>
          <li>
            <strong>調達機会の拡大 —</strong>{" "}
            政府、機関、大規模商業入札での適格性が向上します。
          </li>
          <li>
            <strong>ブランド評判の強化 —</strong>{" "}
            品質、人間工学、長期的な製品信頼性へのコミットメントを示します。
          </li>
          <li>
            <strong>品質管理の改善 —</strong>{" "}
            体系的なQCシステム、トレーサビリティ、一貫した生産基準を促進します。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証における一般的な課題
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>技術的解釈 —</strong>{" "}
            IS
            17631:2022の条項を特定の椅子設計、機構、バリエーションに対応付けることは複雑な場合があります。
          </li>
          <li>
            <strong>試験不合格 —</strong>{" "}
            フレームの弱さ、安定性の不足、機構の問題は、転倒試験や負荷試験の不合格につながることが多いです。
          </li>
          <li>
            <strong>書類の不足 —</strong>{" "}
            図面の不一致、QC記録の不完全さ、宣言書の欠落は、承認を遅らせる一般的な原因です。
          </li>
          <li>
            <strong>工場コンプライアンス —</strong>{" "}
            生産管理、トレーサビリティ、社内試験は、ライセンス付与前に改善が必要な場合があります。
          </li>
          <li>
            <strong>規制調整 —</strong>{" "}
            試験所試験、BIS検査、フォローアップ問い合わせの調整には、専門家のサポートがなければ時間がかかります。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sun Certifications Indiaを選ぶ理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications
          Indiaは、インド市場に必要な各種認証および承認の取得を、製造業者、輸入業者、輸出業者、事業者に支援する規制コンプライアンスコンサルタントです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          当社チームは、IS
          17631:2022に基づく作業用椅子のBIS認証について、エンドツーエンドの支援を提供します。
        </p>

        <h3 className={SUB_HEADING_CLASS}>当社のサービス内容</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>製品適用性評価 —</strong>{" "}
            作業用椅子がIS 17631:2022および適用QCOの対象かどうかを確認します。
          </li>
          <li>
            <strong>BISコンプライアンスコンサルティング —</strong>{" "}
            認証ルート、義務、標準要件に関する専門的なガイダンス。
          </li>
          <li>
            <strong>書類作成支援 —</strong>{" "}
            すべてのBIS申請および工場記録の準備、レビュー、整理。
          </li>
          <li>
            <strong>試験調整 —</strong>{" "}
            認定試験所でのサンプル提出および試験に関するエンドツーエンドのサポート。
          </li>
          <li>
            <strong>工場検査サポート —</strong>{" "}
            BIS工場評価およびコンプライアンス審査に向けた準備状況チェック。
          </li>
          <li>
            <strong>申請管理 —</strong>{" "}
            BIS申請、フォローアップ、規制当局との連絡を代行します。
          </li>
          <li>
            <strong>認証後サポート —</strong>{" "}
            監視、マーキング規則、ライセンス維持要件に関する継続的な支援。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17631:2022に基づく作業用椅子のBIS認証は、職場用座席製品の品質、安全性、耐久性、安定性、人間工学的性能を確保する上で重要な役割を果たします。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証を取得しISIマークを使用することで、製造業者はインド標準への適合を示し、顧客の信頼を強化し、製品の信頼性を向上させ、長期的な事業成長を支援できます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          インド製造業者であれ、インド市場へのアクセスを求める海外製造業者であれ、IS
          17631:2022の要件を理解することは、規制コンプライアンスと市場成功に向けた不可欠なステップです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17631:2022に基づく作業用椅子のBIS認証取得を計画している場合、Sun
          Certifications
          Indiaは、専門的な規制ガイダンスとエンドツーエンドのコンプライアンスサポートを通じて、プロセスを簡素化できます。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – 作業用椅子のBIS認証（IS 17631:2022）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. 作業用椅子のBIS認証とは何ですか？</strong>
              <br />
              BIS認証は、作業用椅子がIS
              17631:2022の要件および適用される認証要件に適合していることを確認します。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. IS 17631:2022とは何ですか？</strong>
              <br />
              IS
              17631:2022は、安全性、強度、安定性、耐久性、人間工学的考慮事項を含む作業用椅子の要件を規定するインド標準です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. 作業用椅子にBIS認証は義務付けられていますか？</strong>
              <br />
              適用される規制枠組みの対象となる作業用椅子は、BIS認証要件への適合が求められます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ISIマークとは何ですか？</strong>
              <br />
              ISIマークは、BIS製品認証スキームの下で発行される標準的な認証マークです。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. 誰がBIS認証を申請できますか？</strong>
              <br />
              インド製造業者および外国製造業者の双方が申請できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. BIS認証には製品試験が必要ですか？</strong>
              <br />
              はい。製品試験は認証プロセスの重要な部分です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. 輸入作業用椅子にもBIS認証が必要ですか？
              </strong>
              <br />
              義務的認証要件の対象となる製品は、インドで供給される前に適用されるBIS規制への適合が必要です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. IS 17631:2022の下でどのような試験が実施されますか？</strong>
              <br />
              本標準には、設計および工作の評価、寸法確認、安定性試験、静的負荷試験などの評価が含まれます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 作業用椅子において人間工学的設計が重要な理由は何ですか？</strong>
              <br />
              人間工学的設計は、ユーザーの快適性を向上させ、適切な姿勢をサポートし、より良い職場体験に貢献します。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications Indiaはどのように支援できますか？</strong>
              <br />
              Sun Certifications
              Indiaは、適用性評価、書類作成、試験調整、検査準備、申請管理、コンプライアンスサポートを提供します。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="作業用椅子のBIS認証 - IS 17631:2022 PDF"
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
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline"> ISI証明書</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">外国製造業者向けBIS証明書</a>
          </li>
        </ul>

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
