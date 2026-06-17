import FaqAuthorDutch from "@/components/common/FaqAuthor/FaqAuthorDutch";
import ManyUsersAlsoReadDutch from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadDutch";
import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
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
import FooterDutch from "@/components/manual/Footer/FooterDutch";
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

const BISCertificateForChairAndStoolsDutch = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterDutch />
    </div>
  );
};

export default BISCertificateForChairAndStoolsDutch;

const MetaTags = () => {
  const title =
    "BIS Certificering voor Algemene Stoelen en Krukken | IS 17632:2022";
  const ogTitle =
    "BIS Certificering voor Algemene Stoelen en Krukken | IS 17632:2022";
  const twitterTitle =
    "BIS Certificering voor Algemene Stoelen en Krukken | IS 17632:2022";
  const metaDescription =
    "Leer alles over BIS Certificering voor Algemene Stoelen en Krukken onder IS 17632:2022. Begrijp ISI Merk vereisten, testen, certificeringsproces, documenten, voordelen en FAQ's";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "BIS Certificering voor Algemene Stoelen en Krukken, IS 17632:2022, ISI Merk Stoelen en Krukken, BIS Licentie Stoelen Krukken, BIS Certificering Meubels";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/stoelen-en-krukken-is-17632";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";

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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Laatste blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certificering voor Algemene Stoelen en Krukken (IS
                    17632:2022)
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
        <ServicesRightSideContentDutch />
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
          BIS Certificering voor Algemene Stoelen en Krukken (IS 17632:2022) –
          Volledige Gids voor ISI Merk Certificering
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="BIS Licentie voor Algemene Stoelen en Krukken"
            alt="BIS Certificering voor Algemene Stoelen en Krukken - IS 17632:2022 ISI Merk Gids"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Algemene stoelen en krukken behoren tot de meest gebruikte
          meubelproducten in woningen, kantoren, onderwijsinstellingen,
          gezondheidszorgfaciliteiten, retailvestigingen, openbare ruimtes en
          commerciële omgevingen. Omdat deze zitproducten regelmatig en langdurig
          worden gebruikt, moeten ze voldoen aan specifieke eisen op het gebied
          van kwaliteit, veiligheid, sterkte en duurzaamheid om betrouwbare
          prestaties te garanderen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Met de toenemende nadruk op productkwaliteit en consumentenveiligheid
          is naleving van Indiase Normen een belangrijke vereiste geworden voor
          meubelfabrikanten en importeurs. BIS Certificering voor Algemene
          Stoelen en Krukken onder IS 17632:2022 helpt ervoor te zorgen dat
          producten voldoen aan de voorgeschreven prestatie- en
          veiligheidseisen voordat ze op de Indiase markt worden gebracht.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certificering onder het Bureau of Indian Standards (BIS) stelt
          fabrikanten in staat het ISI Merk op conforme producten te gebruiken.
          Het ISI Merk dient als garantie dat het product voldoet aan erkende
          Indiase kwaliteitsnormen en het vereiste evaluatieproces heeft
          doorlopen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nu de meubelindustrie blijft groeien en inkooporganisaties steeds
          vaker gecertificeerde producten prefereren, is BIS Certificering een
          belangrijke nalevings- en markttoegangsvereiste geworden voor
          fabrikanten.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Belangrijkste Hoogtepunten van BIS Certificering voor Algemene Stoelen
          en Krukken
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Bijzonderheden
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Productnaam", "Algemene Stoelen en Krukken"],
                ["Toepasselijke Indiase Norm", "IS 17632:2022"],
                ["Certificeringstype", "BIS Productcertificering"],
                ["Certificatieschema", "Schema-I (ISI Merk Certificering)"],
                ["Toepasselijk Merk", "ISI Merk"],
                ["Regelgevende Autoriteit", "Bureau of Indian Standards"],
                ["Toepasselijk Ministerie", "Ministerie van Handel en Industrie"],
                [
                  "Nalevingsvereiste",
                  "Verplicht onder toepasselijke Meubel QCO (Quality Control Order)",
                ],
                ["Productcategorie", "Meubels"],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Certificatieschema" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Schema-I (ISI Merk Certificering)
                      </a>
                    ) : particular === "Nalevingsvereiste" ? (
                      <>
                        Verplicht onder toepasselijke{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>Meubel QCO (Quality Control Order)</strong>
                        </a>
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
          Wat is BIS Certificering voor Algemene Stoelen en Krukken?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering voor Algemene Stoelen en Krukken is een
          conformiteitsbeoordelingsproces dat wordt uitgevoerd onder het BIS
          Productcertificeringsschema.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het doel van certificering is om te verifiëren dat het product voldoet
          aan de vereisten gespecificeerd in IS 17632:2022. Na verlening van
          certificering zijn fabrikanten gemachtigd het ISI Merk op hun producten
          aan te brengen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het certificeringsproces evalueert verschillende aspecten van
          productprestaties, waaronder:
        </p>

        <ul className={LIST_CLASS}>
          <li>Sterkte</li>
          <li>Stabiliteit</li>
          <li>Duurzaamheid</li>
          <li>Structurele prestaties</li>
          <li>Veiligheidseisen</li>
          <li>Materiaalkwaliteit</li>
          <li>Vakmanschap</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          De certificering helpt ervoor te zorgen dat zitproducten die op de
          Indiase markt worden aangeboden, voldoen aan vastgestelde kwaliteits-
          en veiligheidsnormen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Overzicht van IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 is de Indiase Norm die eisen specificeert voor Algemene
          Stoelen en Krukken.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          De norm stelt eisen vast met betrekking tot veiligheid, sterkte,
          duurzaamheid, stabiliteit en algehele prestaties van zitmeubilair
          bedoeld voor algemeen gebruik.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          De norm is van toepassing op:
        </p>

        <ul className={LIST_CLASS}>
          <li>Volledig gefabriceerde stoelen en krukken</li>
          <li>Gefabriceerde stoelen en krukken</li>
          <li>Klaar-voor-montage producten na montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het doel van de norm is ervoor te zorgen dat meubelproducten veilige,
          betrouwbare en duurzame prestaties leveren gedurende hun beoogde
          levensduur.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Belangrijkste Vereisten onder IS 17632:2022
        </h2>

        <h3 className={SUB_HEADING_CLASS}>Sterktevereisten</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Algemene stoelen en krukken moeten voldoende structurele sterkte
          bezitten om verwachte belastingsomstandigheden tijdens normaal gebruik
          te weerstaan.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Stabiliteitsvereisten</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Het meubelstuk moet stabiel blijven tijdens het beoogde gebruik en
          geen onnodige kiprisico&apos;s presenteren.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Duurzaamheidsvereisten</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Producten moeten in staat zijn hun structurele integriteit en
          prestaties te behouden over herhaalde gebruikscycli.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Veiligheidseisen</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De norm omvat veiligheidsgerelateerde vereisten die bedoeld zijn om
          risico&apos;s verbonden aan meubelgebruik te minimaliseren.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Materiaalkwaliteit en Vakmanschap</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De kwaliteit van materialen, fabricagemethoden, montagetechnieken,
          verbindingen en afwerking dragen aanzienlijk bij aan naleving van de
          norm.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Ergonomische Overwegingen</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De norm omvat prestatiegerelateerde overwegingen die bijdragen aan
          gebruikerscomfort en praktische functionaliteit.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Producten Gedekt onder IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          De norm is over het algemeen van toepassing op:
        </p>

        <ul className={LIST_CLASS}>
          <li>Algemene stoelen</li>
          <li>Algemene krukken</li>
          <li>Vaste zitmeubelen bedoeld voor algemeen gebruik</li>
          <li>Klaar-voor-montage zitproducten na montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten moeten de reikwijdte van de norm zorgvuldig beoordelen om
          de toepasbaarheid op hun producten te bepalen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Bekijk ook Meubelproducten Gedekt onder Verplichte BIS
            Certificering —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>BIS Certificering voor meubels</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Is BIS Certificering Verplicht voor Algemene Stoelen en Krukken?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ja. Meubelproducten die onder de toepasselijke Meubel Quality Control
          Order (QCO) vallen, moeten voldoen aan de relevante Indiase Norm en
          BIS Certificering verkrijgen voordat ze op de Indiase markt worden
          vervaardigd, geïmporteerd, verkocht, gedistribueerd of geleverd.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten die onder het toepasselijke regelgevingskader vallen,
          moeten een BIS licentie verkrijgen en voldoen aan de
          merkingsvereisten voorgeschreven door BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten voor BIS Certificering
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voordat certificering wordt verleend, moeten productmonsters worden
          geëvalueerd via testen uitgevoerd in erkende laboratoria.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Testen richten zich over het algemeen op de volgende parameters:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Evaluatie van Structurele Prestaties —</strong> Bepaalt of
            de stoel of kruk normale gebruiksomstandigheden kan weerstaan zonder
            falen.
          </li>
          <li>
            <strong>Stabiliteitstest —</strong> Beoordeelt of het meubelstuk
            stabiel blijft tijdens het beoogde gebruik en kippen weerstaat.
          </li>
          <li>
            <strong>Sterktebeoordeling —</strong> Evalueert draagvermogen en
            structurele integriteit van frames, verbindingen en steunen.
          </li>
          <li>
            <strong>Duurzaamheidsevaluatie —</strong> Controleert
            prestatiebehoud na herhaalde gebruikscycli over de levensduur van
            het product.
          </li>
          <li>
            <strong>Veiligheidsbeoordeling —</strong> Identificeert potentiële
            gevaren en verifieert naleving van voorgeschreven
            veiligheidseisen.
          </li>
          <li>
            <strong>Vakmanschapsinspectie —</strong> Beoordeelt
            constructiekwaliteit, afwerking, montage-integriteit en algemene
            bouwnormen.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Productmerkingsvereisten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Producten gecertificeerd onder IS 17632:2022 moeten over het algemeen
          identificatie-informatie dragen zoals:
        </p>

        <ul className={LIST_CLASS}>
          <li>Naam of handelsmerk van de fabrikant</li>
          <li>Model- of ontwerpidentificatie</li>
          <li>Batch- of lotnummer</li>
          <li>Productiedatum</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het ISI Merk mag alleen worden aangebracht na het verkrijgen van een
          geldige BIS licentie.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificeringsproces voor Algemene Stoelen en Krukken
        </h2>

        <h3 className={SUB_HEADING_CLASS}>Stap 1: Evaluatie van Productreikwijdte</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De eerste stap omvat het bepalen of het product binnen de reikwijdte
          van IS 17632:2022 en de toepasselijke Meubel QCO valt.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Beoordeel het type stoel of kruk, beoogd gebruik, materialen en
          constructie voordat u het certificeringsproces start.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Stap 2: Documentatievoorbereiding</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De fabrikant bereidt technische en nalevingsdocumentatie voor die
          vereist is voor certificering, inclusief bedrijfsgegevens,
          fabrieksdetails, productspecificaties en kwaliteitscontroleprocedures.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Volledige en accurate documentatie helpt onnodige vertragingen tijdens
          BIS-beoordeling te voorkomen.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Stap 3: Producttesten</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Representatieve monsters worden getest in een BIS-erkend laboratorium
          om naleving van de vereisten van IS 17632:2022 te verifiëren.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Het laboratoriumtestrapport is een belangrijk technisch document ter
          ondersteuning van de certificeringsaanvraag.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Stap 4: Indiening BIS-aanvraag</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De certificeringsaanvraag wordt ingediend samen met ondersteunende
          documentatie, testrapporten en fabricage-informatie.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          BIS beoordeelt de aanvraag op volledigheid en technische naleving
          voordat verder wordt gegaan.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Stap 5: Fabrieksinspectie</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS kan de fabricagefaciliteit, productiesystemen en
          kwaliteitscontroleprocessen evalueren om het vermogen te verifiëren
          om consistent conforme producten te produceren.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Deze beoordeling omvat typisch productie-infrastructuur, QC-systemen,
          grondstofcontroles en producttraceerbaarheid.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Stap 6: Technische Beoordeling</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De aanvraag, testrapporten en inspectiebevindingen worden door BIS
          beoordeeld voordat een certificeringsbeslissing wordt genomen.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Eventuele observaties of tekortkomingen die tijdens de beoordeling
          worden geconstateerd, moeten door de aanvrager worden aangepakt.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Stap 7: Verlening van Licentie</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bij bevredigende naleving verleent BIS de licentie en machtigt het
          gebruik van het ISI Merk op gecertificeerde algemene stoelen en
          krukken.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten moeten gedurende de licentieperiode blijven voldoen aan
          BIS-vereisten.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Naleving van Indiase Regelgeving —</strong> Voldoen aan
            verplichte kwaliteits- en veiligheidseisen onder de toepasselijke
            Meubel QCO.
          </li>
          <li>
            <strong>Legale Markttoegang —</strong> Gecertificeerde stoelen en
            krukken leveren in India in overeenstemming met toepasselijke
            regelgevingsvereisten.
          </li>
          <li>
            <strong>Verbeterde Productgeloofwaardigheid —</strong> Het ISI Merk
            toont naleving van erkende Indiase normen aan.
          </li>
          <li>
            <strong>Verhoogd Klantvertrouwen —</strong> Consumenten en
            institutionele kopers prefereren producten die zijn geëvalueerd aan
            vastgestelde benchmarks.
          </li>
          <li>
            <strong>Concurrentievoordeel —</strong> Grotere acceptatie in
            commerciële en overheidsaanbestedingsprocessen.
          </li>
          <li>
            <strong>Verbeterde Merkreputatie —</strong> Toont toewijding aan
            productkwaliteit, veiligheid en langdurige betrouwbaarheid.
          </li>
          <li>
            <strong>Ondersteuning voor MKB —</strong> Helpt kleine en middelgrote
            fabrikanten hun marktaanwezigheid te versterken en
            klantvertrouwen op te bouwen.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende Uitdagingen tijdens Certificering
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Mislukte Producttesten —</strong> Ontwerp- of
            fabricagetekortkomingen kunnen leiden tot niet-naleving tijdens
            laboratoriumevaluatie.
          </li>
          <li>
            <strong>Documentatieproblemen —</strong> Onvolledige of inconsistente
            records veroorzaken vaak certificeringsvertragingen.
          </li>
          <li>
            <strong>Tekortkomingen in Fabricagenaleving —</strong>
            Kwaliteitscontrolesystemen moeten mogelijk worden verbeterd voordat
            certificering kan worden verleend.
          </li>
          <li>
            <strong>Regelgevingscomplexiteit —</strong> Het beheren van testen,
            inspecties en certificeringsprocedures kan uitdagend zijn zonder
            deskundige begeleiding.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom Sun Certifications India Kiezen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India ondersteunt fabrikanten, importeurs,
          exporteurs en bedrijven bij regelgevingsnalevingsvereisten in heel
          India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Onze diensten omvatten:
        </p>

        <ul className={LIST_CLASS}>
          <li>Beoordeling van producttoepasbaarheid</li>
          <li>BIS certificeringsadvies</li>
          <li>Documentatie-ondersteuning</li>
          <li>Coördinatie van laboratoriumtesten</li>
          <li>Voorbereiding op fabrieksinspectie</li>
          <li>Aanvraagbeheer</li>
          <li>Ondersteuning bij regelgevingsnaleving</li>
          <li>Ondersteuning na certificering</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ons doel is om klanten te helpen certificeringsvereisten efficiënt te
          navigeren en naleving te bereiken met minimale vertragingen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering voor Algemene Stoelen en Krukken onder IS 17632:2022
          speelt een belangrijke rol bij het waarborgen van productkwaliteit,
          veiligheid, sterkte, stabiliteit en duurzaamheid. De certificering
          helpt fabrikanten naleving van Indiase Normen aan te tonen, het
          klantvertrouwen te versterken en markttoegang te ondersteunen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nu de vraag naar kwaliteitsgegarandeerde meubelproducten blijft
          groeien, bieden BIS Certificering en het ISI Merk waardevolle
          zekerheid voor consumenten, instellingen en inkooporganisaties.
          Fabrikanten die investeren in naleving voldoen niet alleen aan
          regelgevingsvereisten, maar versterken ook hun concurrentievermogen en
          langdurige marktreputatie.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Als u van plan bent BIS Certificering voor Algemene Stoelen en
          Krukken onder IS 17632:2022 te verkrijgen, kan Sun Certifications
          India deskundige begeleiding en end-to-end nalevingsondersteuning
          bieden gedurende het hele certificeringsproces.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ&apos;s – BIS Certificering voor Algemene Stoelen en Krukken (IS
          17632:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Wat is IS 17632:2022?</strong>
              <br />
              IS 17632:2022 is de Indiase Norm die eisen specificeert voor
              Algemene Stoelen en Krukken.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Is BIS Certificering verplicht voor Algemene Stoelen en
                Krukken?
              </strong>
              <br />
              Producten die onder de toepasselijke Meubel Quality Control Order
              vallen, moeten voldoen aan BIS certificeringsvereisten.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Wat is het ISI Merk?</strong>
              <br />
              Het ISI Merk is het standaard certificeringsmerk uitgegeven onder
              het BIS Productcertificeringsschema.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Wie kan BIS Certificering aanvragen?</strong>
              <br />
              Zowel Indiase als buitenlandse fabrikanten kunnen certificering
              aanvragen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Vereist BIS Certificering producttesten?</strong>
              <br />
              Ja. Producttesten zijn een belangrijk onderdeel van het
              certificeringsproces.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Vallen klaar-voor-montage stoelen onder IS 17632:2022?
              </strong>
              <br />
              Ja. De norm is van toepassing op klaar-voor-montage producten na
              montage.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Welke producten zijn uitgesloten van de reikwijdte van IS
                17632:2022?
              </strong>
              <br />
              Producten zoals ligstoelen, schommelstoelen, kantelstoelen,
              banken en bepaalde gespecialiseerde zitproducten zijn over het
              algemeen uitgesloten.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Wat zijn de voordelen van het verkrijgen van BIS Certificering?
              </strong>
              <br />
              Voordelen omvatten regelgevingsnaleving, verbeterde
              productgeloofwaardigheid, verhoogd klantvertrouwen en betere
              marktacceptatie.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Kunnen buitenlandse fabrikanten BIS Certificering verkrijgen?
              </strong>
              <br />
              Ja. Buitenlandse fabrikanten kunnen aanvragen via de toepasselijke
              BIS certificeringsroute voor fabrikanten in het buitenland.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Hoe kan Sun Certifications India helpen?</strong>
              <br />
              Sun Certifications India biedt end-to-end ondersteuning voor BIS
              certificering, inclusief documentatie, testcoördinatie,
              aanvraagbeheer en nalevingsondersteuning.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="BIS Certificaat voor Stoelen & Krukken - IS 17632:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Gerelateerde Bronnen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              ISI Certificering
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS Certificering voor Buitenlandse Fabrikant
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadDutch />

        <FaqAuthorDutch questionNumber={1} />
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
              Onze Diensten
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Beste Certificaat Consultant
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
              BIS Merk (ISI Licentie) voor Buitenlandse Fabricage
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
              CDSCO Registratie Certificering
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
              BIS (CRS) Registratie
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="Plasticafvalbeheer"
                title="Plasticafvalbeheer"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plasticafvalbeheer
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPR Certificaat logo"
                title="EPR Certificaat logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificaat certificeringen
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
              LMPC Certificaat certificeringen
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
              BIS Registratie Certificaat
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISI Merk logo"
                title="ISI Merk logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI MERK (BIS) voor Indiase Fabrikanten
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
