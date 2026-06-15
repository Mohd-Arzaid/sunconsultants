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

const BISCertificateForTablesAndDesksUnitJapanese = () => {
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

export default BISCertificateForTablesAndDesksUnitJapanese;

const MetaTags = () => {
  const title =
    "テーブルと机のBIS認証 | IS 17633:2022 BISライセンス";
  const ogTitle = "テーブルと机のBIS認証 – IS 17633:2022ガイド";
  const twitterTitle = "テーブルと机のBISライセンス | IS 17633:2022";
  const metaDescription =
    "IS 17633:2022に基づくテーブルと机のBIS認証を取得。インドでのBIS認証のプロセス、書類、テスト、費用、タイムライン。";
  const ogDescription =
    "IS 17633:2022に基づくテーブルと机のBIS認証の完全ガイド。プロセス、費用、書類、テスト、BISライセンスのメリットを理解する。";
  const twitterDescription =
    "IS 17633:2022に基づくテーブルと机のBIS認証を申請。インドでのBISプロセス、書類、テスト、費用、タイムラインを学ぶ。";
  const metaKeywords =
    "テーブルと机のBIS認証, テーブルと机のBISライセンス, IS 17633:2022, テーブルと机のBIS認証";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/teburu-to-tsukue-is-17633";
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
                    テーブルと机のBIS認証（IS 17633:2022）
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
          テーブルと机のBIS認証（IS 17633:2022） – ISIマーク認証の完全ガイド
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="テーブルと机のBISライセンス"
            alt="テーブルと机のBIS認証 - IS 17633:2022 ISIマークガイド"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          テーブルと机は、オフィス、教育機関、商業施設、政府機関、住宅空間で
          最も広く使用されている家具製品の一つです。これらの製品は、利用者の
          安全性、安定性、耐久性を確保しながら日常的な使用に耐えることが
          求められるため、認められた品質基準への準拠が製造業者と輸入業者に
          とってますます重要になっています。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          インドでは、IS 17633:2022の対象となるテーブルと机は、インド標準局
          （BIS）が定める該当する品質および安全性要件に準拠することが
          求められます。これらの要件を満たした製造業者は、BISライセンスを
          取得し、製品にISIマークを使用して、該当するインド規格への適合性を
          示すことができます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証プロセスでは、強度、安定性、耐久性、工作、寸法、全体的な安全性
          など、製品性能のさまざまな側面が評価されます。準拠は、企業が規制
          要件を満たすのに役立つだけでなく、製品の信頼性と市場での受け入れを
          向上させます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          この包括的なガイドでは、適用範囲、認証要件、テストパラメータ、書類、
          メリット、認証プロセスを含め、IS 17633:2022に基づくテーブルと机の
          BIS認証について、製造業者、輸入業者、家具ブランド、調達担当者が
          知っておくべきすべてを説明します。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          テーブルと机のBIS認証の主なハイライト
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
                ["製品", "テーブルと机"],
                ["適用規格", "IS 17633:2022"],
                ["認証タイプ", "BIS製品認証"],
                ["適用マーク", "ISIマーク"],
                ["認証スキーム", "スキーム-I（ISIマーク認証）"],
                ["規制当局", "インド標準局（BIS）"],
                ["適用分野", "家具"],
                [
                  "対象申請者",
                  "インドの製造業者および外国の製造業者",
                ],
                [
                  "準拠要件",
                  "該当する家具QCO（品質管理命令）に基づき必須",
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
                        スキーム-I（ISIマーク認証）
                      </a>
                    ) : particular === "準拠要件" ? (
                      <>
                        該当する{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>家具QCO（品質管理命令）</strong>
                        </a>
                        に基づき必須
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
          テーブルと机のBIS認証とは何ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          テーブルと机のBIS認証は、インド標準局（BIS）製品認証スキームに
          基づいて実施される適合性評価プロセスです。この認証は、製品が
          IS 17633:2022に規定された要件に準拠していることを確認します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証が成功すると、製造業者は製品にISIマークを使用することが許可され、
          該当するインド規格への準拠を示します。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          この認証は、インド市場で供給されるテーブルと机が、以下に関する確立
          された要件を満たすことを確保することを目的としています：
        </p>

        <ul className={LIST_CLASS}>
          <li>通常使用時の構造的な強度と安定性</li>
          <li>耐久性、利用者の安全性、材料の工作</li>
          <li>IS 17633:2022に基づく完全な性能要件</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          購入者および調達機関にとって、ISIマークは、家具が認められた品質と
          安全性のベンチマークに対して評価されたことの保証となります。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          テーブルと机に関するIS 17633:2022の概要
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022は、座った状態および立った状態での用途における成人
          利用者向けのテーブルと机の性能および安全性要件を規定するインド規格
          です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          この規格は次の両方をカバーしています：
        </p>

        <ul className={LIST_CLASS}>
          <li>完全に製造された（既製の）テーブルと机</li>
          <li>組み立て式（RTA）ユニット — 完全に組み立てた後にテスト</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          この規格の目的は、家具が想定される耐用年数を通じて安定し、耐久性が
          あり、安全であることを確保するのに役立つ最低限の性能および安全性
          要件を確立することです。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          IS 17633:2022でカバーされる主要分野
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          この規格は、以下を含むいくつかの重要な性能特性に焦点を当てて
          います：
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>強度要件 —</strong> テーブルと机は、故障や過度の変形なく、
            通常使用時に予想される負荷に耐えなければなりません。
          </li>
          <li>
            <strong>安定性要件 —</strong> 家具は使用中に安定を保ち、予見可能な
            負荷条件下で転倒に耐えなければなりません。
          </li>
          <li>
            <strong>耐久性要件 —</strong> 製品は、長期間にわたる繰り返し使用後も
            性能と構造的完全性を維持しなければなりません。
          </li>
          <li>
            <strong>安全性要件 —</strong> 設計と構造は、不安定性、鋭い縁、
            不安全な造り、または構造的故障によるリスクを最小限に抑えなければ
            なりません。
          </li>
          <li>
            <strong>工作と構造品質 —</strong> 工作、組み立て、接合部、留め具、
            全体的な造りが、信頼できる長期性能のために評価されます。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          インドでテーブルと机のBIS認証は必須ですか？
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          はい。該当する家具品質管理命令（QCO）の対象となるテーブルと机は、
          インド市場で製造、輸入、販売、流通、または提供される前に、関連する
          インド規格に準拠し、BIS認証を取得することが求められます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          必須認証の目的は以下のとおりです：
        </p>

        <ul className={LIST_CLASS}>
          <li>家具業界全体でより高い製品品質を確保する</li>
          <li>検証済みの規格を通じて消費者の安全を保護する</li>
          <li>基準以下の家具が市場に出回るのを防ぐ</li>
          <li>標準化と統一された品質ベンチマークを促進する</li>
          <li>ISIマーク認証製品に対する購入者の信頼を構築する</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          該当する規制の対象となる製造業者は、BISライセンスを取得し、BIS要件に
          従ってISIマークを使用する必要があります。
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            必須BIS認証の対象となる家具製品もご確認ください —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            <strong>家具のBIS認証</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022でカバーされる製品範囲
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022の範囲は、住宅、商業、機関、職場環境全体にわたって成人
          利用者向けに設計されたさまざまなカテゴリのテーブルと机に及びます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          一般的にカバーされる製品の例は以下のとおりです：
        </p>

        <ul className={LIST_CLASS}>
          <li>オフィス、学習、コンピューター用デスク</li>
          <li>ワークステーションと多目的デスク</li>
          <li>会議用テーブル</li>
          <li>機関用および実験室用テーブル</li>
          <li>コワーキングおよび商業用家具</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          製造業者は、自社製品がIS 17633:2022の範囲に該当するかどうかを判断
          するために、製品仕様と用途を慎重に確認する必要があります。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022に基づく主要な技術要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証を取得するには、テーブルと机が規格で規定されたさまざまな
          性能および安全性要件を満たす必要があります。
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>構造的完全性 —</strong> 製品は規定された負荷の下で性能を
            発揮しなければならず、接合部と支持構造はテスト中に安定を保ちます。
          </li>
          <li>
            <strong>耐荷重性能 —</strong> テーブルと机は、許容できない変形、
            損傷、または故障なく、指定された負荷を支えなければなりません。
          </li>
          <li>
            <strong>安定性性能 —</strong> 家具は使用中に安定を保ち、怪我や
            物的損害を引き起こす可能性のある転倒リスクを軽減しなければ
            なりません。
          </li>
          <li>
            <strong>耐久性性能 —</strong> 製品は、許容可能な性能を維持しながら、
            繰り返しの使用サイクルに耐えなければなりません。
          </li>
          <li>
            <strong>材料と工作 —</strong> 材料、仕上げ、組み立て方法は、一貫した
            生産のための品質管理を満たさなければなりません。
          </li>
          <li>
            <strong>安全性への配慮 —</strong> 設計は、消費者および機関購入者に
            とっての家具使用による危険を最小限に抑えなければなりません。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          家具製造業者にとってBIS認証が重要な理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          インドの家具市場はますます品質を重視するようになっています。政府
          部門、教育機関、企業の購入者、大規模な調達機関は、認められた規格に
          準拠した製品を好むことが多くあります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS認証の取得は、製造業者が以下を行うのに役立ちます：
        </p>

        <ul className={LIST_CLASS}>
          <li>該当するインド規格への準拠を証明する</li>
          <li>製品の信頼性とブランドの評判を高める</li>
          <li>顧客および機関購入者の信頼を獲得する</li>
          <li>政府および企業の調達における受け入れを改善する</li>
          <li>社内の品質管理慣行を強化する</li>
          <li>進化する規制要件に先んじる</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          長期的な成長を目指す製造業者にとって、BIS認証は、準拠要件と戦略的な
          事業上の利点の両方として見なされることがよくあります。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          IS 17633:2022に基づくテーブルと机のテスト要件
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          製造業者がBIS認証を取得する前に、製品サンプルはBIS認定実験室での
          テストを通じて、IS 17633:2022の該当する要件に対して評価される必要が
          あります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          テストの目的は、家具が安全性、安定性、強度、耐久性、全体的な性能に
          関する規定された基準を満たしていることを検証することです。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          正確なテストパラメータは製品設計や認証要件によって異なる場合が
          ありますが、製造業者は一般的に以下の特性について評価されます：
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>設計と工作 —</strong> 構造品質、組み立て、仕上げ、全体的な
            製品の完全性が、安全な長期使用のために検査されます。
          </li>
          <li>
            <strong>寸法検証 —</strong> 重要な寸法が規格および承認された製品
            仕様に対して確認されます。
          </li>
          <li>
            <strong>安定性テスト —</strong> 製品が通常使用時に安定を保つことを
            確認し、転倒や構造的な弱点を特定します。
          </li>
          <li>
            <strong>静的負荷テスト —</strong> 故障、過度の変形、または損傷なく
            耐荷重能力を検証します。
          </li>
          <li>
            <strong>強度テスト —</strong> 通常使用時の運用ストレス下で、フレーム、
            接合部、支持部を評価します。
          </li>
          <li>
            <strong>耐久性評価 —</strong> 繰り返しの使用サイクル後の性能維持を
            確認します。
          </li>
          <li>
            <strong>安全性評価 —</strong> 不安定性、欠陥、または不安全な設計
            特性による回避可能なリスクを排除します。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          テーブルと机のBIS認証プロセス
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022に基づくBIS認証を求める製造業者は、インド標準局が
          確立した体系的な認証プロセスに従う必要があります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          具体的な要件は申請者のタイプや製造場所によって異なる場合があります
          が、一般的なプロセスは同様です。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          ステップ1：製品範囲の評価
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          最初のステップでは、製品がIS 17633:2022および該当する品質管理命令の
          範囲に該当するかどうかを判断します。通常、認証プロセスを開始する前に、
          製品仕様、用途、材料、構造に関する技術的レビューが実施されます。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          ステップ2：書類の準備
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          製造業者は、会社情報、製造詳細、製品仕様、品質管理手順、関連する
          技術記録を含む必要な書類を準備します。この段階での不備は認証を遅らせる
          可能性があるため、適切な書類作成が極めて重要です。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          ステップ3：製品テスト
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          製品サンプルはBIS認定実験室でテストされ、IS 17633:2022の要件への
          準拠が検証されます。テストレポートは、認証申請を裏付ける主要な技術
          書類の一つとして役立ちます。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          ステップ4：申請の提出
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS申請は、関連書類、テストレポート、製造情報、品質管理記録とともに
          提出されます。申請は、完全性と技術的準拠についてBISによってレビュー
          されます。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          ステップ5：工場評価
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BISは以下を評価するために工場検査を実施する場合があります：
        </p>
        <ul className={LIST_CLASS}>
          <li>製造インフラと生産能力</li>
          <li>品質管理システムと社内テスト施設</li>
          <li>原材料管理と製品トレーサビリティの仕組み</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          目的は、製造業者が準拠製品を一貫して生産する能力を検証することです。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          ステップ6：評価とレビュー
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BISは、認証決定を下す前に、申請、検査結果、実験室テストレポートを
          レビューします。レビュープロセス中に提起された所見は、申請者が
          対処する必要があります。
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          ステップ7：BISライセンスの付与
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          すべての要件が正常に完了すると、BISはライセンスを付与し、製造業者が
          認証済みのテーブルと机にISIマークを使用することを許可します。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          インドの製造業者向けBIS認証
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          インドの製造業者は、一般的にBISが規定する国内認証手順に基づいて
          申請します。プロセスには通常、以下が含まれます：
        </p>

        <ul className={LIST_CLASS}>
          <li>BIS認定実験室での製品テスト</li>
          <li>関連書類を添えた申請の提出</li>
          <li>BISによる工場検査と技術的レビュー</li>
          <li>BISライセンスの付与とISIマーク使用の許可</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証を取得した後、製造業者はBIS要件への準拠を継続し、ライセンス期間中
          一貫した製品品質を維持する必要があります。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          外国の製造業者向けBIS認証
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          テーブルと机をインドに輸出しようとする外国の製造業者も、該当する
          品質管理命令の対象となる製品を供給する前にBIS認証を取得する必要が
          あります。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          認証プロセスには一般的に以下が含まれます：
        </p>

        <ul className={LIST_CLASS}>
          <li>権限を有するインド代表者（AIR）の任命</li>
          <li>海外での製品テストと工場評価</li>
          <li>書類レビューとBIS認証の承認</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          外国の製造業者は、認証の有効性を維持するために、BIS要件への継続的な
          準拠を確保する必要があります。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          テーブルと机のBIS認証に必要な書類
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          書類要件は、製造業者と認証ルートによって異なる場合があります。
          ただし、認証プロセス中に以下の書類が一般的に必要となります。
        </p>

        <h3 className={SUB_HEADING_CLASS}>事業および法的書類</h3>
        <ul className={LIST_CLASS}>
          <li>会社登録、製造ライセンス、GST（該当する場合）</li>
          <li>権限を有する署名者の詳細とID証明</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>製造情報</h3>
        <ul className={LIST_CLASS}>
          <li>プロセスフロー図、工場レイアウト、機械の詳細</li>
          <li>生産インフラと能力の記録</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>製品情報</h3>
        <ul className={LIST_CLASS}>
          <li>製品仕様、技術図面、カタログ</li>
          <li>部品表と材料/部品の詳細</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>品質管理書類</h3>
        <ul className={LIST_CLASS}>
          <li>社内テスト、検査、QC手順</li>
          <li>品質管理記録と機器の較正レポート</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>認証書類</h3>
        <ul className={LIST_CLASS}>
          <li>実験室テストレポートと記入済みのBIS申請書</li>
          <li>宣言書、約束書、その他BISが規定する書類</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          製造業者は、提出前にすべての書類が正確、完全、かつ一貫していることを
          確保する必要があります。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS認証中の一般的な課題
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          認証プロセスは適切に管理されれば簡単ですが、製造業者はいくつかの課題に
          直面することがよくあります。
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>技術的解釈 —</strong> IS 17633:2022の要件を特定の製品設計に
            対応付けることは、専門的なガイダンスなしでは難しい場合があります。
          </li>
          <li>
            <strong>テストの失敗 —</strong> 弱い接合部、不十分な安定性、または
            材料の問題は、実験室テストの不合格につながることがよくあります。
          </li>
          <li>
            <strong>書類の不備 —</strong> 不完全または不一致の記録は、申請の
            遅延の頻繁な原因です。
          </li>
          <li>
            <strong>工場の準拠 —</strong> QCシステム、トレーサビリティ、または
            生産管理は、ライセンス付与前にアップグレードが必要な場合が
            あります。
          </li>
          <li>
            <strong>規制の調整 —</strong> 実験室テスト、検査、BISのフォロー
            アップを調整するには、体系的なサポートなしでは時間がかかります。
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          専門的なBIS認証支援のメリット
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          経験豊富なBISコンサルタントと協力することで、製造業者は費用のかかる
          遅延を回避し、認証の道のりを合理化することができます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          専門的なサポートには通常、以下が含まれます：
        </p>

        <ul className={LIST_CLASS}>
          <li>製品範囲のレビューと規格の解釈</li>
          <li>書類の準備と申請の提出</li>
          <li>実験室テストと工場検査の調整</li>
          <li>継続的な準拠と認証後のサポート</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          これにより、製造業者は規制要件が効率的に対処されることを確保しながら、
          生産に集中することができます。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sun Certifications Indiaを選ぶ理由
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications Indiaは、インド全土で認証および承認要件に関して
          製造業者、輸入業者、輸出業者、企業を支援する規制コンプライアンス
          コンサルタント会社です。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          当社の専門家は、IS 17633:2022に基づくテーブルと机のBIS認証について
          エンドツーエンドのサポートを提供します。
        </p>

        <h3 className={SUB_HEADING_CLASS}>当社のサービス内容</h3>

        <ul className={LIST_CLASS}>
          <li>製品適用性評価とBISコンプライアンスコンサルティング</li>
          <li>書類サポートと申請管理</li>
          <li>テスト調整と工場検査支援</li>
          <li>規制当局とのコミュニケーションと認証後の準拠サポート</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          当社の目標は、遅延とコンプライアンスの課題を最小限に抑えながら、企業が
          認証プロセスを効率的に進められるよう支援することです。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          結論
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022に基づくテーブルと机のBIS認証は、インド市場で準拠した
          家具製品を供給しようとする製造業者にとって重要な要件です。この認証は、
          テーブルと机が安全性、安定性、耐久性、強度、品質に関する確立された
          規格を満たすことを確保するのに役立ちます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS認証を取得しISIマークを使用することで、製造業者はインド規格への
          準拠を示し、顧客の信頼を向上させ、市場での地位を強化し、長期的な
          事業成長を支えることができます。
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022に基づくテーブルと机のBIS認証の取得を計画している場合、
          Sun Certifications Indiaはエンドツーエンドのコンプライアンスサポートで
          支援し、認証プロセスを効率的かつ確実に進めるお手伝いをします。
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          よくある質問 – テーブルと机のBIS認証（IS 17633:2022）
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. IS 17633:2022とは何ですか？</strong>
              <br />
              IS 17633:2022は、座った状態および立った状態での用途における成人
              利用者向けのテーブルと机に関する最低限の性能、安定性、耐久性、
              安全性要件を定める、インド標準局（BIS）が発行したインド規格です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. テーブルと机にBIS認証は必須ですか？</strong>
              <br />
              はい — 該当する家具品質管理命令（QCO）の対象となる製品については
              必須です。製造業者と輸入業者は、インドでそのような家具を製造、輸入、
              販売、または流通させる前に、有効なBISライセンスを保有し、
              IS 17633:2022に準拠する必要があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. テーブルと机に適用される認証マークはどれですか？</strong>
              <br />
              認証されたテーブルと机は、BIS製品認証スキームに基づきISIマークを
              表示することが許可され、製品が該当するインド規格に適合していること
              を示します。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. 誰がBIS認証を申請できますか？</strong>
              <br />
              インドの製造業者と外国の製造業者の両方が、テーブルと机が該当する
              QCOの範囲に該当し、IS 17633:2022の要件を満たす場合に申請できます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. BIS認証の目的は何ですか？</strong>
              <br />
              BIS認証は、家具が安全性、構造性能、耐久性、工作に関する国家的に
              認められたベンチマークを満たしていることを確認し、エンドユーザーを
              保護し、市場全体で品質基準を維持するのに役立ちます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. IS 17633:2022の対象となる製品は何ですか？</strong>
              <br />
              この規格は、オフィス、教育機関、商業施設、職場環境で使用される
              成人用のテーブルと机をカバーしており、オフィスデスク、ワーク
              ステーション、学習テーブル、会議用テーブル、および類似の家具
              カテゴリを含みます。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. 実験室テストは必須ですか？</strong>
              <br />
              はい。製品サンプルはBIS認定実験室でテストする必要があり、その結果の
              テストレポートは、IS 17633:2022への準拠を示すための認証申請における
              重要な書類です。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. 輸入されたテーブルと机はBIS認証なしで販売できますか？</strong>
              <br />
              いいえ。必須認証の対象となる輸入製品は、有効なBIS承認なしにインドで
              合法的に供給することはできません。輸入業者は、製品を市場に出す前に
              該当する規格への準拠を確保する必要があります。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. 工場検査の役割は何ですか？</strong>
              <br />
              BISは、製造業者が準拠したテーブルと机を一貫して製造するための
              十分な生産インフラ、品質管理システム、製品トレーサビリティを
              維持していることを検証するために工場評価を実施します。
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications Indiaはどのように支援できますか？</strong>
              <br />
              Sun Certifications Indiaは、製品範囲の評価、書類の準備、実験室
              テストの調整、BIS申請管理、工場検査の準備、IS 17633:2022に基づく
              テーブルと机の認証後の準拠サポートを含む、エンドツーエンドの支援を
              提供します。
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="テーブルと机のBIS認証 - IS 17633:2022 PDF"
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
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ISIマークライセンス</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS FMCS証明書</a>
          </li>
        </ul>

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
                alt="EPR認証ロゴ"
                title="EPR認証ロゴ"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR認証
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
              LMPC認証
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
              インド製造のためのISIマーク（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
