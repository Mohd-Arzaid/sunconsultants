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
    "BIS Certificaat voor Stoelen & Krukken | IS 17632:2022 BIS Licentie";
  const ogTitle =
    "BIS Certificering voor Stoelen & Krukken – IS 17632:2022 Gids";
  const twitterTitle = "BIS Licentie voor Stoelen & Krukken | IS 17632:2022";
  const metaDescription =
    "Krijg BIS Certificaat voor Stoelen & Krukken volgens IS 17632:2022. Proces, documenten, testen, kosten en tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor Stoelen & Krukken volgens IS 17632:2022. Ken het proces, kosten, documenten, testen en BIS licentie voordelen.";
  const twitterDescription =
    "Vraag BIS Certificaat aan voor Stoelen & Krukken volgens IS 17632:2022. Leer BIS proces, documenten, testen, kosten en tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Stoelen & Krukken, BIS Licentie voor Stoelen & Krukken, IS 17632:2022, BIS Certificering voor Stoelen & Krukken";
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
                    BIS Certificaat voor Stoelen & Krukken – IS 17632:2022
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
          BIS Certificaat voor Algemene Stoelen en Krukken – Volledige Gids voor
          IS 17632:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="BIS Licentie voor Stoelen & Krukken"
            alt="BIS Certificaat voor Stoelen & Krukken - IS 17632:2022 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Certificaat voor Algemene Stoelen en Krukken is een verplichte
          vereiste volgens de Indiase Norm IS 17632:2022. Deze norm specificeert
          de veiligheids-, duurzaamheids- en prestatievereisten voor stoelen en
          krukken gebruikt in woningen, kantoren, commerciële gebieden,
          onderwijsinstellingen, cafetaria&apos;s, restaurants, hotels en
          openbare ruimtes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Stoelen en krukken behoren tot de meest gebruikte meubelstukken en
          worden constant blootgesteld aan belasting, beweging en repetitieve
          stress. Een structureel zwakke stoel of kruk kan plotseling instorten,
          wat leidt tot verwondingen. Om dergelijke gevaren te voorkomen en
          consumentenveiligheid te waarborgen, vereist het Bureau of Indian
          Standards (BIS) dat elke fabrikant en importeur BIS Certificering voor
          Stoelen en Krukken verkrijgt voordat ze deze in India verkopen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze pagina biedt een volledige gids voor BIS Certificering voor
          stoelen en krukken volgens IS 17632:2022, inclusief het
          certificeringsproces, vereiste documenten, testvereisten, kosten,
          uitdagingen, boetes en voordelen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificering?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering is een productnalevingssysteem beheerd door het
          Bureau of Indian Standards, de nationale normenautoriteit van India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Betekenis van BIS Certificaat
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS Certificaat zorgt ervoor dat een product:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Voldoet aan Indiase veiligheids- en kwaliteitsnormen</li>
          <li>
            Laboratoriumtesten heeft doorstaan die door BIS zijn goedgekeurd
          </li>
          <li>Fabrieksinspectie heeft ondergaan</li>
          <li>
            Consumenten beschermt tegen onveilige of ondermaatse producten
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Gecertificeerde producten tonen het ISI Merk, wat naleving van Indiase
          Normen aantoont.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Toepasbare Norm – IS 17632:2022 voor Stoelen & Krukken
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De BIS Norm voor stoelen en krukken is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> – Algemene Stoelen en Krukken:
          Veiligheidsvereisten
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Deze norm dekt alle niet-gespecialiseerde stoelen en krukken gebruikt
          voor zitdoeleinden in woningen, kantoren, commerciële omgevingen,
          openbare plaatsen en institutionele instellingen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Producten Gedekt Onder IS 17632:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Algemene stoelen</li>
          <li>Eetkamerstoelen</li>
          <li>Kantoor bezoekersstoelen</li>
          <li>Studie stoelen</li>
          <li>Cafetaria stoelen</li>
          <li>Restaurant stoelen</li>
          <li>Vergaderruimte stoelen</li>
          <li>Wachtruimte stoelen</li>
          <li>Houten stoelen</li>
          <li>Metalen stoelen</li>
          <li>Plastic stoelen (niet-gespecialiseerd)</li>
          <li>Algemene krukken</li>
          <li>Bar krukken</li>
          <li>Eetkamer krukken</li>
          <li>Traptrede krukken (binnen gedefinieerde criteria)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Belangrijke Veiligheids- en Prestatieparameters
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022 evalueert:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structurele sterkte</li>
          <li>Stabiliteit</li>
          <li>Duurzaamheid bij herhaald gebruik</li>
          <li>Zitsterkte</li>
          <li>Rugleuning prestaties</li>
          <li>Poot impactweerstand</li>
          <li>Verbinding sterkte</li>
          <li>Oppervlakteafwerking kwaliteit</li>
          <li>Rand- en hoekveiligheid</li>
          <li>Materiaalkwaliteit</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alle stoelen en krukken verkocht in India moeten voldoen aan deze
          parameters en een BIS Licentie voor Stoelen en Krukken verkrijgen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering Verplicht is voor Stoelen & Krukken
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Stoelen en krukken dragen menselijk gewicht en worden veelvuldig
          gebruikt in alle omgevingen. Structureel falen kan leiden tot:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Instortende stoelen</li>
          <li>Breuk van poten</li>
          <li>Zitting scheuren</li>
          <li>Rugleuning falen</li>
          <li>Verwonding door scherpe randen</li>
          <li>Instabiliteit leidend tot vallen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Voordelen van BIS Certificering
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zorgt voor veilige zitproducten</li>
          <li>Voorkomt ongelukken en verwondingen</li>
          <li>Verbetert productduurzaamheid</li>
          <li>Voorkomt ondermaatse importen</li>
          <li>Stelt uniforme marktkwaliteit vast</li>
          <li>Verhoogt klantvertrouwen</li>
          <li>Verplicht volgens Indiase wet (BIS QCO&apos;s)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zonder BIS Certificering kunnen fabrikanten legaal geen stoelen of
          krukken verkopen in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificeringsproces voor Stoelen en Krukken (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS proces volgt het ISI Merk Certificeringsschema, waarbij
          testen, inspectie en aanvraagverificatie betrokken zijn.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 1 – Identificeer Producttype & Norm
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bevestig dat de stoel/kruk valt onder IS 17632:2022. Identificeer
          ontwerpvarianten en gebruikte materialen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 2 – Dien BIS Aanvraag Online In
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Aanvraag wordt ingediend via het BIS Manak Online Portaal, vereist:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrikantdetails</li>
          <li>Fabrieksinformatie</li>
          <li>Productspecificaties</li>
          <li>Merk/handelsmerkdetails</li>
          <li>Productieproces workflow</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 3 – Betaal BIS Certificeringskosten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Kosten omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagkosten</li>
          <li>Verwerkingskosten</li>
          <li>Monster testkosten</li>
          <li>Fabrieksinspectiekosten</li>
          <li>Merkingkosten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 4 – Producttesten volgens IS 17632:2022
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Verplichte testen worden uitgevoerd in een door BIS erkend
          laboratorium.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Testen Omvatten:
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabiliteitstest</li>
          <li>Sterktetest voor Zitting</li>
          <li>Rugleuning Duurzaamheidstest</li>
          <li>Poot Voorwaarts/Zijwaarts/Achterwaarts Belastingstest</li>
          <li>Zitting Impacttest</li>
          <li>Valtest</li>
          <li>Vermoeidheidstest</li>
          <li>Oppervlakteafwerking Test</li>
          <li>Scherpe Rand Test</li>
          <li>Structurele duurzaamheid onder herhaalde cycli</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Testresultaten moeten volledige naleving van IS 17632:2022 tonen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 5 – Fabrieksinspectie door BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS functionaris bezoekt de fabriek om te evalueren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productieproces</li>
          <li>Grondstofinspectie</li>
          <li>Kwaliteitscontroleprocedures</li>
          <li>Testcapaciteit</li>
          <li>Kalibratie van apparatuur</li>
          <li>Productievolume</li>
          <li>Naleving van BIS Schema van Testen & Inspectie (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 6 – Verlening van BIS Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Als testen en inspectie succesvol zijn, verleent BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificaat (ISI Merk Licentie)</li>
          <li>CML Nummer</li>
          <li>
            Goedkeuring om het ISI Merk op stoelen en krukken aan te brengen
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 7 – Post-Licentie Verplichtingen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fabrikanten moeten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Het ISI Merk gebruiken volgens BIS etiketteringsvereisten</li>
          <li>Kwaliteitscontrole records bijhouden</li>
          <li>Regelmatige BIS toezichtinspecties ondergaan</li>
          <li>Licentie elke 1–2 jaar vernieuwen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Reikwijdte van BIS Licentie voor Stoelen & Krukken
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze norm dekt de vereisten voor algemene stoelen en krukken. Deze
          norm is van toepassing op volledig gefabriceerde/gemaakte algemene
          stoelen en krukken. Het is ook van toepassing op klaar-voor-montage
          eenheden; in dat geval zijn de vereisten van deze norm van toepassing
          op de gemonteerde eenheden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenten Vereist voor BIS Certificering van Stoelen & Krukken
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrikant Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabriekslicentie/registratie</li>
          <li>Productieproces stroomdiagram</li>
          <li>Machinelijst</li>
          <li>Interne testapparatuur lijst</li>
          <li>Kalibratiecertificaten</li>
          <li>Fabrieksindeling & plattegrond</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stoel/kruk tekeningen</li>
          <li>Afmetingen & specificaties</li>
          <li>Stuklijst</li>
          <li>Veiligheidskenmerken beschrijving</li>
          <li>Interne kwaliteitstest rapporten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identiteits- & adresbewijs</li>
          <li>Merkautorisatiebrief</li>
          <li>Handelsmerk certificaat (optioneel)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Aanvraag Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagformulier</li>
          <li>Testaanvraagformulier</li>
          <li>Verklaring formulieren</li>
          <li>Autorisatiebrief</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten voor Stoelen & Krukken (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 omvat uitgebreide mechanische, structurele en
          veiligheidstesten.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Verplichte Testen
        </h3>

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
                  Ontwerp en afwerking
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Voorwaartse Overbalancering en Zijwaartse Overbalancering voor
                  Stoelen zonder Armleuningen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Achterwaartse Overbalancering
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Zijwaartse Overbalancering voor Stoelen met Armleuningen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Krukken/ Poufs (Alle Richtingen)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sterktetest
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Deze testen zorgen voor veilig dagelijks gebruik onder realistische
          omstandigheden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende Uitdagingen & Hoe Ze te Vermijden
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Stoel faalt stabiliteitstesten</strong>
            <br />
            Komt voor door onjuiste gewichtsverdeling.
            <br />
            Oplossing: Verbeter pootontwerp, verbreed basisoppervlak.
          </li>
          <li>
            <strong>Zwakke verbindingen veroorzaken testfalen</strong>
            <br />
            Oplossing: Gebruik versterkte materialen & betere connectoren.
          </li>
          <li>
            <strong>Onvoldoende interne testapparatuur</strong>
            <br />
            Oplossing: Installeer vereiste BIS-conforme instrumenten.
          </li>
          <li>
            <strong>Documentatie inconsistenties</strong>
            <br />
            Oplossing: Bereid documenten systematisch voor voordat u aanvraagt.
          </li>
          <li>
            <strong>Productvarianten niet correct in kaart gebracht</strong>
            <br />
            Oplossing: Groepeer producten op basis van structuur &
            testparameters.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Stoelen & Krukken
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Legaal toestemming om te verkopen in India</li>
          <li>Verbeterde productveiligheid</li>
          <li>Verhoogd klantvertrouwen</li>
          <li>Lager productaansprakelijkheidsrisico</li>
          <li>Vereist voor e-commerce vermeldingen</li>
          <li>Essentieel voor overheidsaanbestedingen</li>
          <li>Hogere merkgeloofwaardigheid</li>
          <li>Concurrentievoordeel</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Boetes voor Non-Conformiteit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het verkopen van stoelen of krukken zonder BIS certificering kan
          leiden tot:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zware financiële boetes</li>
          <li>Product terugroeping/inbeslagname</li>
          <li>Intrekking van fabriekslicenties</li>
          <li>Strafrechtelijke vervolging</li>
          <li>Importbeperkingen</li>
          <li>Markt zwarte lijst</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Boetes worden gehandhaafd onder de BIS Act, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie Heeft BIS Certificering Nodig voor Stoelen & Krukken?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Verplicht voor:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Buitenlandse fabrikanten die naar India exporteren</li>
          <li>Importeurs</li>
          <li>Merkeigenaren/handelaren</li>
          <li>OEM/ODM leveranciers</li>
          <li>Retailketens</li>
          <li>Online verkopers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke fabriek vereist een aparte BIS Licentie.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Certificaat voor Algemene Stoelen en Krukken onder IS
          17632:2022 is verplicht voor het waarborgen van productveiligheid,
          structurele stabiliteit en duurzaamheid. BIS certificering helpt
          fabrikanten niet alleen om hoge kwaliteitsnormen te handhaven, maar
          maakt ook legale markttoegang mogelijk en verhoogt het
          consumentenvertrouwen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Met professionele ondersteuning wordt het certificeringsproces—van
          testen tot inspectie en goedkeuring—soepel, voorspelbaar en volledig
          conform.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ&apos;s – BIS Certificaat voor Stoelen en Krukken
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS Certificering verplicht voor stoelen en krukken?
              </strong>
              <br />
              Ja, volgens IS 17632:2022 moeten alle algemene stoelen en krukken
              BIS gecertificeerd zijn voordat ze in India worden verkocht.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Welke testen zijn vereist?</strong>
              <br />
              Stabiliteit, sterkte, duurzaamheid, impact, vermoeidheid en
              materiaalveiligheidstesten.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Hoe lang duurt BIS certificering?</strong>
              <br />
              Meestal 30–45 dagen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Wat zijn de certificeringskosten?</strong>
              <br />
              Ongeveer ₹60,000–₹1,30,000 afhankelijk van testen en inspectie.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Kunnen buitenlandse fabrikanten aanvragen?</strong>
              <br />
              Ja, onder het FMCS schema.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Is ISI merking verplicht?</strong>
              <br />
              Ja, nadat BIS licentie is verleend.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Waarom falen stoelen bij BIS testen?</strong>
              <br />
              Veelvoorkomende oorzaken zijn zwakke poten, slechte
              verbindingssterkte en instabiliteit.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Kunnen meerdere modellen onder één licentie vallen?
              </strong>
              <br />
              Alleen als ze voldoen aan gelijkenis- en
              standaardnalevingscriteria.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Is een fabrieksinspectie vereist?</strong>
              <br />
              Ja, het is verplicht voor ISI merk certificering.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Welke documenten zijn nodig?</strong>
              <br />
              Fabriekslicentie, technische specificaties, machinelijst, QC plan,
              producttekeningen, enz.
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
