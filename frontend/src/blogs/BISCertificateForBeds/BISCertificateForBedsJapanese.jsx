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
import LanguageSelector from "./LanguageSelector";
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

const BISCertificateForBedsJapanese = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
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

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
              "https://bis-certifications.com/blogs/isi-products/beddo-is-17635",
          },
          headline: "ベッドのBIS認証",
          description:
            "インドにおけるベッドのBIS認証は、主にIS 17635:2022に基づく必須の品質保証制度であり、安全性、耐久性、性能基準を確保します。",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          author: {
            "@type": "Person",
            name: "Dhruv Aggarwal",
            url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
          },
          publisher: {
            "@type": "Organization",
            name: "Sun Certifications India",
            logo: {
              "@type": "ImageObject",
              url: "https://bis-certifications.com/company-logo/company-logo.webp",
            },
          },
          datePublished: "2026-02-01",
          dateModified: "2026-04-14",
        })}
      </script>

      {/* Rating Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "ベッドのBIS認証",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "インドにおけるベッドのBIS認証は、主にIS 17635:2022に基づく必須の品質保証制度であり、安全性、耐久性、性能基準を確保します。",
          brand: {
            "@type": "Brand",
            name: "Sun Certifications India",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "58042",
          },
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "インドでベッドにBIS認証は必須ですか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "はい、IS 17635:2022に基づきます。",
              },
            },
            {
              "@type": "Question",
              name: "BIS証明書の有効期限は？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1〜2年、更新可能です。",
              },
            },
            {
              "@type": "Question",
              name: "外国の製造業者は申請できますか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "はい、FMCSの下で申請できます。",
              },
            },
            {
              "@type": "Question",
              name: "BIS証明書はオンラインで申請できますか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "はい。",
              },
            },
            {
              "@type": "Question",
              name: "ベッドにISIマークは必須ですか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "はい。",
              },
            },
            {
              "@type": "Question",
              name: "プロセスにはどのくらい時間がかかりますか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30〜45日。",
              },
            },
            {
              "@type": "Question",
              name: "木製と金属製のベッドの両方が対象ですか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "はい、IS 17635:2022に準拠している場合。",
              },
            },
            {
              "@type": "Question",
              name: "工場検査は必須ですか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "はい。",
              },
            },
            {
              "@type": "Question",
              name: "貿易業者はBISに申請できますか？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "製造管理を有するブランド所有者のみ。",
              },
            },
          ],
        })}
      </script>
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
          ベッドのBIS認証は、家庭用および商業用に供されるベッドを製造・輸入する製造業者および輸入業者にとって、インドにおける必須のコンプライアンス要件です。最新のインド規格IS
          17635:2022 – ベッド（安全性要件）に基づき、すべてのベッドはインド市場で販売される前に、厳格な安全性、耐久性、構造、性能の基準を満たす必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ベッドは、家庭、ホテル、病院、ホステル、PG宿泊施設、機関施設で日常的に使用される重要な家具製品です。構造的な弱点、鋭いエッジ、材料の故障、または耐荷重能力の低さは、深刻な怪我を引き起こす可能性があります。このようなリスクを防ぐために、インド標準局（BIS）はベッドの{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            BIS認証
          </a>{" "}
          を義務付けています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          この包括的なガイドでは、ベッドのBISライセンスについて、適用される規格、認証プロセス、テスト要件、書類、費用、タイムライン、罰則、メリットを含めて説明します。
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッドのBIS認証の主なハイライト
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
                ["製品", "ベッド"],
                ["インド規格", "IS 17635:2022"],
                ["規格名称", "ベッド – 仕様"],
                ["認証スキーム", "BIS ISIマーク認証"],
                ["規制当局", "Bureau of Indian Standards (BIS)"],
                ["適用マーク", "ISIマーク"],
                [
                  "申請資格者",
                  "インド国内メーカーおよび外国メーカー",
                ],
                [
                  "コンプライアンス要件",
                  "該当する家具QCO（Quality Control Order）に基づく義務",
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
                    {particular === "認証スキーム" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        BIS ISIマーク認証
                      </a>
                    ) : particular === "コンプライアンス要件" ? (
                      <>
                        該当する{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
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
          ベッドのBIS認証とは？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ベッドのBIS認証は、製造業者が自社製品がIS
          17635:2022で定められた要件に適合していることを証明する適合性評価プロセスです。テスト、工場評価、規制当局による審査を通じてコンプライアンスが確認されると、製造業者にはBISライセンスが付与され、認証製品にISIマークを表示できます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          認証フレームワークは、インド市場で流通するベッドが以下に関する確立された要件を満たすことを目的としています：
        </p>

        <ul className={LIST_CLASS}>
          <li>構造的強度</li>
          <li>安定性</li>
          <li>耐久性</li>
          <li>表面性能</li>
          <li>通常使用時の安全性</li>
          <li>予見可能な誤使用条件下での性能</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらの要件は、さまざまなベッドのデザインや製造材料にわたって、品質と消費者保護の一貫した基準を確立するのに役立ちます。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッドにBIS認証が重要な理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ベッドは長期間にわたって大きな荷重を支えるように設計されているため、ユーザーの安全に直接影響します。設計が不十分またはテストが不十分な製品は、構造的故障、不安定さ、変形、または早期劣化を起こす可能性があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022は、製品が市場に投入される前に製造業者が満たす必要のある標準化された性能および安全要件を定義することで、これらの懸念に対処します。本規格には、強度、安定性、耐久性、仕上げ、表面性能に関する要件が含まれます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          製造業者にとって、BIS認証には以下のような利点があります：
        </p>

        <ul className={LIST_CLASS}>
          <li>インドでの対象製品の合法的な販売許可</li>
          <li>インド規格への適合の証明</li>
          <li>市場受容性の向上</li>
          <li>消費者の信頼の強化</li>
          <li>規制当局による措置のリスク低減</li>
          <li>機関・商業調達における競争優位</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ベッド向けIS 17635:2022の概要
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          インド政府は、市場に投入される製品が所定の安全および品質要件を満たすことを確保するため、複数の家具製品に対してQuality
          Control Order（QCO）を導入しています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022が該当する家具QCOの対象となる場合、製造業者はスキームIに基づくBIS認証を取得し、BISライセンス要件に従って標準マーク（ISIマーク）を使用する必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022は、家庭および非家庭環境で使用される成人向けベッドの性能および安全要件を定めるインド規格です。本規格は、ベッドが意図された使用期間を通じて安全で機能的かつ耐久性があることを確保する要件を定めています。
        </p>

        <h3 className={SUB_HEADING_CLASS}>IS 17635:2022の目的</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022は、さまざまな材料および製造方法で製造される現代的なベッドデザインに適用可能な包括的な性能ベースの規格を提供するために策定されました。本規格は、主に木製ベッドに焦点を当てていた以前のIS
          7259（Part 1）:1988に取って代わります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          本規格は、特定の材料や製造プロセスにコンプライアンスを限定することなくベッドを評価します。代わりに、所定のテスト条件下で完成品がどのように性能を発揮するかに焦点を当てます。このアプローチにより、木製、金属製、合板製、その他のベッド構造を一貫して評価できます。
        </p>

        <h3 className={SUB_HEADING_CLASS}>IS 17635:2022の適用範囲</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          本規格によると、IS
          17635:2022は成人向けベッドの性能および安全性に関連する要件をカバーします。本規格は、家庭および非家庭環境の両方で使用されることを意図した製品に適用されます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          本規格は以下に適用されます：
        </p>

        <ul className={LIST_CLASS}>
          <li>完全に製造されたベッド</li>
          <li>組立て製ベッド</li>
          <li>組立後の即組み立て式（RTA）ベッド</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これにより、組立済みまたはノックダウン形式で供給される製品も、同じ性能および安全基準で評価されます。
        </p>

        <h3 className={SUB_HEADING_CLASS}>規格の目的</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022の主な目的には以下が含まれます：
        </p>

        <ul className={LIST_CLASS}>
          <li>ユーザーの安全確保</li>
          <li>構造的強度の検証</li>
          <li>製品安定性の評価</li>
          <li>反復使用下での耐久性の評価</li>
          <li>最低性能要件の確立</li>
          <li>製造業者間での一貫した製品品質の促進</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          本規格には、通常使用条件および合理的に予見可能な誤使用シナリオ下でベッドを評価するためのテスト方法も含まれています。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17635:2022の対象製品
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022は、家庭および非家庭環境で使用される成人向けベッドに適用されます。本規格は、特定の材料や製造方法にコンプライアンスを制限するのではなく、完成品の性能、安全性、強度、安定性、耐久性に焦点を当てています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          本規格は以下に適用されます：
        </p>

        <ul className={LIST_CLASS}>
          <li>完全に製造されたベッド</li>
          <li>組立て製ベッド</li>
          <li>組立後の即組み立て式（RTA）ベッド</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ノックダウン状態でベッドを供給する製造業者は、組立後の製品が本規格のすべての適用要件に適合していることを確認する必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>注：</strong>
          本規格は、ウォーターベッド、エアベッド、折りたたみベッド、二段ベッド、特別なニーズを持つ人向けのベッド、および医療・ヘルスケア目的のベッドを対象としません。
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
          IS 17635:2022の主要要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS
          17635:2022の主な目的は、ベッドが通常の使用条件下で安全で安定し、耐久性があり、意図された用途に適していることを確保することです。この目的を達成するため、本規格はいくつかの主要な性能要件を定めています。
        </p>

        <h3 className={SUB_HEADING_CLASS}>安定性要件</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          ベッドは、通常使用時に転倒や不安定さに対する十分な抵抗性を示す必要があります。安定性テストでは、予想される荷重条件およびユーザーの動きにさらされた際に製品が安全に保持されるかを評価します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          安定したベッドは事故のリスクを最小限に抑え、全体的なユーザー安全を向上させます。
        </p>

        <h3 className={SUB_HEADING_CLASS}>強度要件</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          強度テストは、ベッド構造が構造的故障なく大きな荷重に耐えられる能力を評価します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          これらの評価では通常、以下を検査します：
        </p>

        <ul className={LIST_CLASS}>
          <li>ベッドフレームの完全性</li>
          <li>接合部の強度</li>
          <li>耐荷重能力</li>
          <li>過度の変形に対する抵抗性</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          目的は、製品が日常使用において意図されたユーザーを安全に支えられることを確保することです。
        </p>

        <h3 className={SUB_HEADING_CLASS}>耐久性要件</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          耐久性テストは、反復的な荷重および動作サイクルを通じて長期使用をシミュレートします。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          目的は以下を判断することです：
        </p>

        <ul className={LIST_CLASS}>
          <li>構造接合部が安全に保持されるか</li>
          <li>部品が正しく機能し続けるか</li>
          <li>時間経過後も製品性能が許容範囲内か</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          耐久性要件は、認証されたベッドが期待される使用期間を通じて信頼性を維持することを確保するのに役立ちます。
        </p>

        <h3 className={SUB_HEADING_CLASS}>表面性能要件</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS
          17635:2022は、家具仕上げに適用される表面性能要件を参照しています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          構造および使用材料に応じて、表面は以下に対する抵抗性が評価される場合があります：
        </p>

        <ul className={LIST_CLASS}>
          <li>機械的損傷</li>
          <li>湿熱</li>
          <li>乾熱</li>
          <li>染色</li>
          <li>密着性能</li>
          <li>摩耗と擦れ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらの要件は、通常使用時の機能性と外観の両方を維持するのに役立ちます。
        </p>

        <h3 className={SUB_HEADING_CLASS}>設計および仕上げ要件</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          本規格には、設計品質および仕上げに関する要件も含まれています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          その他の考慮事項には以下が含まれます：
        </p>

        <ul className={LIST_CLASS}>
          <li>アクセス可能なエッジは怪我の危険を呈してはなりません。</li>
          <li>鋭いエッジや安全でない突出部は避ける必要があります。</li>
          <li>必要な場合、中空部は適切に閉じる必要があります。</li>
          <li>可動部品は怪我のリスクを低減するよう設計する必要があります。</li>
          <li>
            完成品は、宣言されたデザインおよびモデル仕様に適合している必要があります。
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>安全要件</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          安全性はIS 17635:2022全体を通じて中核的な原則です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          本規格には、以下から生じるリスクを低減するための要件が組み込まれています：
        </p>

        <ul className={LIST_CLASS}>
          <li>構造的崩壊</li>
          <li>鋭いエッジ</li>
          <li>安全でない突出部</li>
          <li>部品の故障</li>
          <li>反復使用による応力</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これらの要件への適合は、ベッドが通常使用および合理的に予見可能な誤使用条件下でも安全であることを確保するのに役立ちます。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          インドでベッドのBIS認証は必須ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          はい。該当するQuality Control
          Order（QCO）の対象となる家具製品については、インドで製造、輸入、販売、流通、保管、または販売提供を行う前にBIS認証が必須です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          規制要件は随時更新される可能性があるため、製造業者はインド政府が発行する最新の通知状況および実施日を確認する必要があります。
        </p>

        <h3 className={SUB_HEADING_CLASS}>ISIマーク使用の要件</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          ISIマークは、製品が関連するインド規格に適合し、有効なBISライセンスの下で製造されていることの証拠となります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          マークは以下の後にのみ表示できます：
        </p>

        <ul className={LIST_CLASS}>
          <li>製品テストの成功</li>
          <li>工場評価</li>
          <li>BISによる申請承認</li>
          <li>ライセンスの付与</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ISIマークの無許可使用は、BIS Act,
          2016の下で禁止されています。
        </p>

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
              ISIマーク証明書
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS FMCSライセンス
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
