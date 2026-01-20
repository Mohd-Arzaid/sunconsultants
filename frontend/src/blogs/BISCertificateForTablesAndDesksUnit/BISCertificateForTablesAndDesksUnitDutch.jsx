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

const BISCertificateForTablesAndDesksUnitDutch = () => {
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

export default BISCertificateForTablesAndDesksUnitDutch;

const MetaTags = () => {
  const title =
    "BIS Certificaat voor Tafels & Bureaus | IS 17633:2022 BIS Licentie";
  const ogTitle = "BIS Certificering voor Tafels & Bureaus – IS 17633:2022 Gids";
  const twitterTitle = "BIS Licentie voor Tafels & Bureaus | IS 17633:2022";
  const metaDescription =
    "Krijg BIS Certificaat voor Tafels & Bureaus onder IS 17633:2022. Proces, documenten, testen, kosten & tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Complete gids voor BIS Certificering voor Tafels & Bureaus volgens IS 17633:2022. Ken het proces, kosten, documenten, testen & BIS licentie voordelen.";
  const twitterDescription =
    "Vraag BIS Certificaat aan voor Tafels & Bureaus onder IS 17633:2022. Leer BIS proces, documenten, testen, kosten & tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Tafels & Bureaus, BIS Licentie voor Tafels & Bureaus, IS 17633:2022, BIS Certificering voor Tafels & Bureaus";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tafels-en-bureaus-is-17633";
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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Laatste Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certificaat voor Tafels & Bureaus – IS 17633:2022
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
          BIS Certificaat voor Tafels en Bureaus – Complete Gids voor IS 17633:2022
          BIS Certificering
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="BIS Licentie voor Tafels en Bureaus"
            alt="BIS Certificaat voor Tafels en Bureaus - IS 17633:2022 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Certificaat voor Tafels en Bureaus is verplicht voor alle
          fabrikanten, importeurs en verkopers van tafels en bureaus in India.
          Volgens de Indiase Standaard IS 17633:2022 – Tafels en Bureaus: Veiligheids-
          vereisten moeten deze meubelstukken worden getest en gecertificeerd door
          het Bureau of Indian Standards (BIS) voordat ze legaal kunnen worden verkocht
          op de Indiase markt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tafels en bureaus zijn essentiële componenten van huizen, kantoren, scholen,
          universiteiten, commerciële ruimtes, horeca-omgevingen en
          industriële werkplekken. Omdat ze vaak gewicht, impact en
          continu gebruik ondersteunen, zijn hun structurele sterkte en veiligheid cruciaal.
          Om consumentenbescherming en productbetrouwbaarheid te waarborgen, verplicht BIS
          verplichte certificering.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze uitgebreide gids legt IS 17633:2022 uit, het BIS-registratie-
          proces, testen, vereiste documentatie, kosten, tijdlijnen, boetes,
          en voordelen voor fabrikanten en importeurs.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificering?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering is een regelgevingsconformiteitsproces beheerd door
          het Bureau of Indian Standards, de nationale normautoriteit van India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Betekenis van BIS Certificaat
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Een BIS Certificaat bevestigt dat het product voldoet aan de veiligheids-, kwaliteits-,
          prestaties- en duurzaamheidseisen vastgesteld door Indiase Normen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Voordelen van BIS Certificering
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zorgt voor consumentenveiligheid</li>
          <li>Ondersteunt hoogwaardige productie</li>
          <li>Vermindert productfoutrisico</li>
          <li>Verbetert marktacceptatie</li>
          <li>Wettelijk vereist onder BIS Kwaliteitscontrole Orders (QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Na goedkeuring draagt het product het BIS Merk (ISI Merk) samen met
          het licentienummer.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Welke Indiase Standaard is van Toepassing op Tafels & Bureaus? – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De toepasselijke BIS-standaard is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – Tafels en Bureaus: Veiligheids-
          vereisten
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Deze standaard definieert prestaties-, structurele veiligheids- en duurzaamheids-
          vereisten voor alle soorten tafels en bureaus gebruikt in residentiële,
          commerciële, horeca- en institutionele omgevingen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Gedekte Producten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kantoorbureaus</li>
          <li>Computerbureaus</li>
          <li>Studietafels</li>
          <li>Eettafels</li>
          <li>Salontafels</li>
          <li>Werkbureaus</li>
          <li>Trainingstafels</li>
          <li>School/universiteit bureaus</li>
          <li>Lerarentafels</li>
          <li>Modulaire werkplektafels</li>
          <li>Schrijftafels</li>
          <li>Vergader-/conferentietafels</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Belangrijke Veiligheidsparameters Onder IS 17633:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structurele stabiliteit</li>
          <li>Draagvermogen</li>
          <li>Schokbestendigheid</li>
          <li>Horizontale/verticale krachtprestaties</li>
          <li>Oppervlakteafwerkingskwaliteit</li>
          <li>Randveiligheid</li>
          <li>Duurzaamheid bij herhaald gebruik</li>
          <li>Materiaalveiligheid</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke tafel of bureau die in India wordt verkocht, moet voldoen aan deze parameters
          via BIS Registratie voor Tafels & Bureaus.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering Verplicht is voor Tafels en Bureaus
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tafels en bureaus zijn veelgebruikte meubelstukken die voorkomen in huizen, kantoren,
          scholen en openbare ruimtes. Structurele storingen kunnen ongevallen veroorzaken
          zoals:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Instorten onder gewicht</li>
          <li>Scherpe randverwondingen</li>
          <li>Instabiliteit tijdens gebruik</li>
          <li>Breuk van verbindingen</li>
          <li>Oppervlakte loslating</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Om deze gevaren te vermijden, zorgt BIS-certificering voor:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Veilig ontwerp en constructie</li>
          <li>Naleving van structurele belastingvereisten</li>
          <li>Duurzame prestaties</li>
          <li>Voorkoming van kantelen en instorten</li>
          <li>Hoogwaardige materiaalkeuze</li>
          <li>Uniforme marktstandaarden</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het verkopen van tafels en bureaus zonder een BIS Licentie voor Tafels & Bureaus is
          illegaal in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificeringsproces voor Tafels en Bureaus (IS 17633:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS-certificeringsproces volgt het ISI Schema (Conformiteits-
          beoordelingsschema-I), dat producttesten en fabrieks-
          inspectie omvat.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 1 – Identificeer Productcategorie & Standaard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bevestig dat de tafel/bureau valt onder IS 17633:2022. Identificeer aantal
          varianten en materialen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 2 – Dien BIS Aanvraag in (Online Indiening)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Vul de aanvraag in op het BIS Manak Online Portaal met:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrikantgegevens</li>
          <li>Fabrieksadres</li>
          <li>Productspecificaties</li>
          <li>Handelsmerkgegevens</li>
          <li>Kwaliteitscontrolesystemen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 3 – Betaling van BIS Certificeringskosten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Omvat:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagkosten</li>
          <li>Verwerkingskosten</li>
          <li>Producttestkosten</li>
          <li>Fabrieksinspectiekosten</li>
          <li>Markeerkosten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 4 – Steekproef Testen in een BIS-Erkend Laboratorium
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Producten moeten volledig worden getest zoals voorgeschreven onder IS 17633:2022.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Uitgevoerde Tests
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabiliteitstest</li>
          <li>Sterktetest (Statische Belasting)</li>
          <li>Duurzaamheidstest (Herhaalde Belasting)</li>
          <li>Schoktest</li>
          <li>Doorbuiging Meting</li>
          <li>Rand- en Oppervlakteveiligheidstest</li>
          <li>Werkruimte Belastingstest</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Lab uploadt de testrapporten direct naar BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 5 – BIS Fabrieksinspectie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS-functionaris bezoekt de productiefaciliteit om te verifiëren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kwaliteitsmanagementsysteem</li>
          <li>Interne testcapaciteit</li>
          <li>Grondstofcontrole</li>
          <li>Productielijn & machines</li>
          <li>Kalibratie van instrumenten</li>
          <li>Naleving van STI (Schema van Testen & Inspectie)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 6 – Verlening van BIS Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">BIS verleent:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificaat</li>
          <li>ISI Merk goedkeuring</li>
          <li>Uniek CML licentienummer</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hierna kan de fabrikant legaal tafels/bureaus markeren en verkopen in
          India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 7 – Naleving na Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fabrikanten moeten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Records bijhouden volgens STI</li>
          <li>ISI-markering correct gebruiken</li>
          <li>Periodieke BIS-inspecties toestaan</li>
          <li>Licentie elke 1-2 jaar vernieuwen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Reikwijdte van BIS Licentie voor Tafels & Bureaus
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Deze standaard dekt de vereisten met betrekking tot
          de prestaties en veiligheid, dat wil zeggen, sterkte, stabiliteit en duurzaamheid
          van tafels en bureaus die worden gebruikt in zittende en/of staande
          posities, gebruikt door volwassenen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Deze standaard is van toepassing op volledig gefabriceerde/
          vervaardigde tafels en bureaus. Het is ook van toepassing op klaar-voor-montage
          eenheden; in dat geval zijn de vereisten van deze standaard van toepassing op
          de gemonteerde eenheden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vereiste Documenten voor BIS Certificering van Tafels & Bureaus
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Productiedocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabriekslicentie</li>
          <li>Machinelijst</li>
          <li>Testapparatuur lijst</li>
          <li>Kalibratiecertificaten</li>
          <li>Fabrieksindeling</li>
          <li>Processtroomdiagram</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tafel/bureau tekeningen</li>
          <li>Materiaallijst</li>
          <li>Productspecificaties</li>
          <li>Interne kwaliteitstestrapporten</li>
          <li>Foto&apos;s/video&apos;s van het product</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Geautoriseerde ondertekenaar ID-bewijs</li>
          <li>Adresbewijs</li>
          <li>Merkautorisatiebrief</li>
          <li>Handelsmerkregistratiecertificaat</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Aanvraagdocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ingevuld aanvraagformulier</li>
          <li>Fabrikant verklaring</li>
          <li>Testverzoekbrief</li>
          <li>Autorisatiebrief</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Volledige documentatie zorgt voor snellere goedkeuringen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten onder IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De test evalueert sterkte, stabiliteit, duurzaamheid en veiligheid.
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clausule
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Vereiste
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ontwerp en vakmanschap
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stabiliteitstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Opgegeven belasting
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Voor incidentele zware belastingen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sterkte onder horizontale statische kracht
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Algemeen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verticale Schoktest voor Glazen Tafelbladen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verticale Schoktest voor Alle Andere Tafelbladen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Doorbuiging van Tafelbladen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Valtest
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Testen moet alleen worden uitgevoerd in BIS-goedgekeurde laboratoria.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende Uitdagingen & Hoe Ze Te Vermijden
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Product faalt belasting- of duurzaamheidstests</strong>
            <br />
            Oplossing: Versterk verbindingen, gebruik BIS-conforme materialen, voeg
            versterking toe.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Onvolledige documentatie</strong>
            <br />
            Oplossing: Bereid alle juridische, technische en productiedocumenten
            van tevoren voor.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Fabriek mist geschikte testapparatuur</strong>
            <br />
            Oplossing: Installeer vereiste instrumenten en handhaaf kalibratie volgens
            BIS-richtlijnen.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Onjuiste etikettering</strong>
            <br />
            Oplossing: Zorg ervoor dat ISI-markering BIS-regels exact volgt.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Verkeerde classificatie van productmodellen</strong>
            <br />
            Oplossing: Krijg professionele begeleiding om varianten correct te categoriseren.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Tafels & Bureaus
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Wettelijke autorisatie om te verkopen in India</li>
          <li>Verhoogd klantvertrouwen</li>
          <li>Betere productduurzaamheid</li>
          <li>Toegang tot grote retailers & e-commerce platforms</li>
          <li>Lager productaansprakelijkheidsrisico</li>
          <li>Hogere merkgeloofwaardigheid</li>
          <li>Naleving van overheids-QCOs</li>
          <li>Concurrentievoordeel op de markt</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Boetes voor Naleving
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het verkopen of distribueren van tafels/bureaus zonder BIS-certificering kan
          resulteren in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product inbeslagname</li>
          <li>Zware boetes</li>
          <li>Strafrechtelijke vervolging</li>
          <li>Verbod op import</li>
          <li>Bedrijfsstopzetting bevelen</li>
          <li>Licentie annulering</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          De Bureau of Indian Standards Act, 2016 handhaaft strenge boetes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie Heeft BIS Certificering Nodig voor Tafels & Bureaus?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Deze certificering is verplicht voor:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Buitenlandse fabrikanten</li>
          <li>Importeurs</li>
          <li>Handelaren/merkeigenaren</li>
          <li>OEM/ODM leveranciers</li>
          <li>Meubeldistributeurs</li>
          <li>E-commerce verkopers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke fabriek moet een aparte BIS Licentie verkrijgen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom Ons Kiezen voor BIS Certificeringsadvies?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Wij bieden end-to-end assistentie:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Standaard interpretatie (IS 17633:2022)</li>
          <li>Productclassificatie</li>
          <li>Documentatie opstellen</li>
          <li>Testcoördinatie</li>
          <li>BIS portaal indiening</li>
          <li>Fabrieksinspectie ondersteuning</li>
          <li>Continue opvolging met BIS</li>
          <li>Licentie goedkeuring</li>
          <li>Vernieuwing en nalevingsbeheer</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Onze expertise zorgt voor snelle, probleemloze en foutloze certificering.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Certificaat voor Tafels en Bureaus onder IS 17633:2022 is een
          verplichte conformiteitsvereiste die productveiligheid,
          prestaties, duurzaamheid en naleving van nationale normen waarborgt.
          Fabrikanten en importeurs moeten producttesten, fabrieks-
          inspectie ondergaan en voldoen aan alle BIS documentatie- en etiketteringsregels om
          het ISI Merk te verkrijgen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Met deskundige assistentie wordt het hele certificeringsproces
          soepel, snel en volledig conform BIS-voorschriften.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde Vragen – BIS Certificaat voor Tafels & Bureaus (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS-certificering verplicht voor tafels en bureaus?
              </strong>
              <br />
              Ja. Volgens IS 17633:2022 moeten alle tafels en bureaus
              BIS-gecertificeerd zijn voordat ze in India worden verkocht.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Welke tests zijn vereist voor certificering?</strong>
              <br />
              Verplichte tests omvatten stabiliteit, sterkte, duurzaamheid,
              doorbuiging, impact en oppervlakteveiligheidstests.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Wat zijn de BIS-certificeringskosten?</strong>
              <br />
              De kosten variëren tussen ₹65.000 – ₹1.30.000, afhankelijk van test-
              en inspectiefactoren.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Hebben buitenlandse fabrikanten BIS Certificering nodig?
              </strong>
              <br />
              Ja, via het FMCS-schema, dat buitenlandse fabrieks-
              inspecties door BIS omvat.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Kan één licentie meerdere tafel/bureau modellen dekken?
              </strong>
              <br />
              Ja, maar alleen als modellen vergelijkbaar zijn in constructie en test-
              parameters.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Hoe lang duurt het BIS-proces?</strong>
              <br />
              Ongeveer 30–45 dagen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Is testen verplicht in een BIS-erkend lab?</strong>
              <br />
              Ja, alleen BIS-goedgekeurde laboratoria kunnen de tests uitvoeren.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Wat gebeurt er als het product faalt?</strong>
              <br />
              Het moet opnieuw worden ontworpen en opnieuw worden ingediend voor testen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Is ISI-markering verplicht na certificering?</strong>
              <br />
              Ja, ISI Merk is vereist op het product en de verpakking.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Welke documenten zijn nodig?</strong>
              <br />
              Technische tekeningen, BOM, fabrieksdocumenten, testrapporten, QC-plan,
              en juridische documenten.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="BIS Certificaat voor Tafels & Bureaus - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadDutch />

        <FaqAuthorDutch questionNumber={2} />
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
              BIS Merk (ISI Licentie) voor Buitenlandse Productie
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
                alt="Plastic Afvalbeheer"
                title="Plastic Afvalbeheer"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plastic Afvalbeheer
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
              EPR Certificaat Certificeringen
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC Certificaat logo"
                title="LMPC Certificaat logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Certificaat Certificeringen
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
