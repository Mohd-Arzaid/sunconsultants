import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
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

const BISCertificationCombinationSideCuttingPliersDutch = () => {
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




export default BISCertificationCombinationSideCuttingPliersDutch;

const MetaTags = () => {
  const title =
    "BIS-certificaat voor combinatietangen met zijsnijden | IS 3650:1981 BIS-licentie";
  const ogTitle =
    "BIS-certificering voor combinatietangen met zijsnijden – IS 3650:1981 Gids";
  const twitterTitle =
    "BIS-licentie voor combinatietangen met zijsnijden | IS 3650:1981";
  const metaDescription =
    "Verkrijg BIS-certificaat voor combinatietangen met zijsnijden onder IS 3650:1981. Proces, documenten, testen, kosten en tijdlijn voor BIS-certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS-certificering voor combinatietangen met zijsnijden volgens IS 3650:1981. Ken het proces, kosten, documenten, testen en BIS-licentievoordelen.";
  const twitterDescription =
    "Aanvragen BIS-certificaat voor combinatietangen met zijsnijden onder IS 3650:1981. Leer BIS-proces, documenten, testen, vergoedingen en tijdlijn in India.";
  const metaKeywords =
    "BIS-certificaat voor combinatietangen met zijsnijden, BIS-licentie voor combinatietangen met zijsnijden, IS 3650:1981, BIS-certificering voor combinatietangen met zijsnijden";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/combinatie-zijsnij-tangen-is-3650";
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
                    <Link to="/Blogs">Laatste blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS-certificaat voor combinatietangen met zijsnijden – IS
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
          BIS-certificering combinatietangen met zijsnijden – Volledige gids voor
          IS 3650:1981
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="BIS-licentie voor combinatietangen met zijsnijden"
            alt="BIS-certificaat voor combinatietangen met zijsnijden - IS 3650:1981 BIS-certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Combinatietangen met zijsnijden zijn een van de meest gebruikte handgereedschappen
          bij elektrisch werk, mechanisch onderhoud, bouw, productie-eenheden,
          werkplaatsen, automotive-service en huishoudelijke reparaties. Deze gereedschappen
          zijn ontworpen voor meerdere functies zoals grijpen, buigen, draaien en
          het knippen van draden. Omdat ze vaak worden gebruikt voor het knippen van
          metaaldraden, elektrische geleiders en kleine onderdelen, kunnen tangen van
          slechte kwaliteit leiden tot breuk, elektrocutierisico&apos;s, handblessures
          en ernstige arbeidsongevallen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Om veiligheid, duurzaamheid en uniforme kwaliteit te waarborgen, verplicht
          de Indiase overheid naleving van de Indiase normen voor handgereedschap.
          Het verkrijgen van een BIS-certificaat voor combinatietangen met zijsnijden
          onder IS 3650:1981 is een cruciale wettelijke en kwaliteitseis voor
          fabrikanten en importeurs die deze gereedschappen in India verkopen. Een geldig
          BIS-certificaat voor combinatietangen met zijsnijden bevestigt dat het product
          is getest op mechanische sterkte, snijprestaties, materiaalhardheid en
          algehele veiligheidsprestaties.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze gedetailleerde productpagina is bedoeld voor fabrikanten, buitenlandse
          fabrikanten, importeurs, handelaren, distributeurs, hardwaremerken,
          e-commercesellers en compliance-professionals die een volledig inzicht willen
          in de BIS-licentie voor combinatietangen met zijsnijden, inclusief het
          BIS-certificeringsproces in India, testvereisten, documentatie, kosten,
          tijdlijnen, sancties en voordelen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS-certificering?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS-certificering is een systeem voor conformiteitsbeoordeling van producten,
          gereguleerd door het Bureau of Indian Standards, de Indiase nationale
          autoriteit voor standaardisatie, certificering en kwaliteitsborging.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Betekenis van BIS-certificaat
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De betekenis van het BIS-certificaat verwijst naar officiële goedkeuring
          afgegeven door BIS die bevestigt dat een product voldoet aan de van
          toepassing zijnde Indiase norm (IS) en wordt geproduceerd onder een
          gecontroleerd kwaliteitssysteem.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          De belangrijkste doelstellingen van BIS-certificering zijn:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Consumenten beschermen tegen onveilige producten</li>
          <li>Consistente productkwaliteit waarborgen</li>
          <li>Toezicht op naleving ondersteunen</li>
          <li>Standaardisatie in de Indiase industrie bevorderen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI-keurmerk uitgelegd
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Het BIS-certificeringsmerk, algemeen bekend als het ISI-keurmerk, is een
          symbool van vertrouwen en naleving. Voor combinatietangen met zijsnijden
          geeft het ISI-keurmerk aan dat:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Het gereedschap voldoet aan de vereisten van IS 3650:1981</li>
          <li>Mechanische en snijprestaties zijn geverifieerd</li>
          <li>Het product wettelijk is goedgekeurd voor verkoop in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Van toepassing zijnde BIS-norm voor combinatietangen met zijsnijden
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – Specificatie voor combinatietangen
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          De van toepassing zijnde Indiase norm voor dit product is IS 3650:1981,
          die de vereisten specificeert voor combinatietangen met zijsnijvlakken
          voor grijp- en snijtoepassingen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Toepassingsgebied van IS 3650:1981
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Deze norm omvat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Combinatietangen met zijsnijvlakken</li>
          <li>Afmetingen, vorm en afwerkingsvereisten</li>
          <li>Materiaalkwaliteit en warmtebehandeling</li>
          <li>Mechanische sterkte en snijprestaties</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Veiligheid, prestaties en testdoel
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 3650:1981 is ontworpen om ervoor te zorgen dat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tangen voldoende snijcapaciteit hebben</li>
          <li>Kaken en snijvlakken niet afbrokkelen of vervormen</li>
          <li>Handvatten waar van toepassing veilige grip en isolatie bieden</li>
          <li>Het gereedschap betrouwbaar presteert onder normale werkomstandigheden</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wie moet voldoen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrikanten van combinatietangen met zijsnijden in India</li>
          <li>Importeurs en distributeurs</li>
          <li>Buitenlandse fabrikanten die de Indiase markt bevoorraden</li>
          <li>Merken die tangen onder eigen merk verkopen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS-certificering verplicht is voor combinatietangen met zijsnijden
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumentenveiligheidsrisico&apos;s
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ondermaatse tangen kunnen leiden tot:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Plotselinge breuk tijdens het knippen</li>
          <li>Uitglijden en handblessures</li>
          <li>Elektrocutierisico&apos;s bij elektrische toepassingen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Overheids- en regelgevingsnaleving
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Volgens BIS-normen en BIS-meldingen moeten handgereedschappen zoals
          combinatietangen die onder IS 3650:1981 vallen voldoen aan de BIS-
          certificeringsvereisten voordat ze in India mogen worden verkocht.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische gevolgen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Het verkopen of importeren van niet-gecertificeerde tangen kan resulteren in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inbeslagname van producten door autoriteiten</li>
          <li>Geldboetes</li>
          <li>Intrekking van handelsvergunningen</li>
          <li>Juridische vervolging onder de BIS-wet</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Markt- en merkvoordelen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS-licentie voor combinatietangen met zijsnijden helpt merken:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vertrouwen op te bouwen bij kopers en aannemers</li>
          <li>In aanmerking te komen voor overheids- en PSU-aanbestedingen</li>
          <li>Te concurreren met gevestigde hardwaremerken</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Stapsgewijs BIS-certificeringsproces voor combinatietangen met zijsnijden
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Toepasselijkheid en normidentificatie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De eerste stap is bevestigen dat het product:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Onder combinatietangen met zijsnijden valt</li>
          <li>Onder IS 3650:1981 valt</li>
          <li>Past binnen het toepassingsgebied van de norm qua maat en gebruik</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-onlineaanvraagproces
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fabrikanten moeten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registreren op het BIS-portaal</li>
          <li>IS 3650:1981 selecteren onder productnormen</li>
          <li>Het BIS-aanvraagformulier invullen</li>
          <li>Alle vereiste documenten uploaden</li>
          <li>Van toepassing zijnde vergoedingen betalen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Deze fase wordt gewoonlijk BIS online aanvragen of BIS-
          certificaatregistratie genoemd.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vergoedingen en koststructuur voor BIS-licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De BIS-certificeringskosten omvatten doorgaans:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraag- en verwerkingskosten</li>
          <li>Producttestkosten</li>
          <li>Fabrieksinspectiekosten</li>
          <li>Licentie- en markeeringskosten</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          De totale kosten van BIS-certificering hangen af van:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aantal varianten</li>
          <li>Testcomplexiteit</li>
          <li>Fabriekslocatie</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Productmonstertesten (volgens IS 3650:1981)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Monsters worden getest in door BIS erkende laboratoria voor:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hardheid van het snijvlak</li>
          <li>Snijprestaties</li>
          <li>Mechanische sterkte</li>
          <li>Dimensionele nauwkeurigheid</li>
          <li>Oppervlakteafwerking en vakmanschap</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrieksinspectie en audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS-functionaris voert een fabrieksaudit uit om te verifiëren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productieproces</li>
          <li>Warmtebehandeling en afwerkingsoperaties</li>
          <li>Kwaliteitscontrolesysteem</li>
          <li>Test- en inspectiefaciliteiten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Verlening van BIS-licentie en ISI-keurmerk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Na succesvolle tests en inspectie:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Verleent BIS de Bureau of Indian Standards-licentie</li>
          <li>
            De fabrikant mag het ISI-keurmerk op goedgekeurde tangen gebruiken
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Naleving na certificering
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Vereisten na goedkeuring omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Toezichtinspecties</li>
          <li>Marktmonstertesten</li>
          <li>Tijdige verlenging van de licentie</li>
          <li>Voortdurende naleving van IS 3650:1981</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vereiste documenten voor BIS-certificering
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrikantdocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrieksregistratiecertificaat</li>
          <li>Stroomschema van het productieproces</li>
          <li>Lijst van machines en testapparatuur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ondernemingsoprichtingscertificaat</li>
          <li>GST-registratie</li>
          <li>Handelsmerkmachtiging (indien van toepassing)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Producttekeningen en specificaties</li>
          <li>Grondstofgegevens</li>
          <li>Warmtebehandelings- en QC-plan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-aanvraagdocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-aanvraagformulier</li>
          <li>Testaanvraaggegevens</li>
          <li>Verklaringen en ondernemingen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze worden gezamenlijk BIS CERTIFICAATDOCUMENTEN of BIS
          CERTIFICERINGSDOCUMENTEN genoemd.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten volgens IS 3650:1981
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Verplichte tests omvatten:
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clausule
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Vereisten
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vervaardiging
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vakmanschap en afwerking
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Conservering en verpakking
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Afmetingen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Hardheid
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Isolatie (behalve isolatietest)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Isolatietest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Snijtest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Buisgriptest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Schoktest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Torsietest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Handvatbelastingtest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Buigtest
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Alle tests moeten uitsluitend in door BIS erkende laboratoria worden uitgevoerd.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende uitdagingen en hoe ze te vermijden
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Veelvoorkomende problemen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Falen bij hardheids- of snijtests</li>
          <li>Onjuiste warmtebehandeling</li>
          <li>Slechte oppervlakteafwerking</li>
          <li>Onvolledige documentatie</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Best practices
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interne voortesten uitvoeren</li>
          <li>Juiste warmtebehandelingsprocedures volgen</li>
          <li>Kwaliteitsregistraties per batch bijhouden</li>
          <li>Expert BIS-consultancy inschakelen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS-certificering voor fabrikanten en importeurs
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische voordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Volledige naleving van Indiase regelgeving</li>
          <li>Bescherming tegen boetes en inbeslagnames</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commerciële voordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Acceptatie door distributeurs en aannemers</li>
          <li>In aanmerking komen voor bulk- en institutionele orders</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Merkvoordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI-keurmerk verhoogt de geloofwaardigheid van het merk</li>
          <li>Differentiatie van ongeorganiseerde leveranciers</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Marktuitbreiding
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Toetreding tot georganiseerde hardware-detailhandelsketens</li>
          <li>Verhoogde acceptatie in exportgerichte bedrijven</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sancties voor niet-naleving
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Niet-naleving kan leiden tot:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zware geldboetes</li>
          <li>Inbeslagname van producten</li>
          <li>Verstoring van de bedrijfsvoering</li>
          <li>Juridische stappen op basis van de BIS-wet</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie heeft BIS-certificering nodig voor combinatietangen met zijsnijden?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Importeurs</li>
          <li>Buitenlandse fabrikanten (met geautoriseerde Indiase vertegenwoordiger)</li>
          <li>Handelaren die onder eigen merk verkopen</li>
          <li>E-commercesellers die tangen aanbieden</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het verkrijgen van een BIS-certificaat voor combinatietangen met zijsnijden
          onder IS 3650:1981 is een cruciale wettelijke en kwaliteitseis voor de
          verkoop van deze gereedschappen in India. BIS-certificering voor combinatietangen
          met zijsnijden waarborgt productveiligheid, consistente prestaties en
          regelgevingsnaleving, terwijl de BIS-licentie voor combinatietangen met
          zijsnijden de geloofwaardigheid van het merk en marktacceptatie versterkt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voor fabrikanten, importeurs en verkopers betekent tijdige naleving niet
          alleen het vermijden van sancties, maar ook toegang tot grotere markten
          en langetermijngroei. Met deskundige begeleiding wordt het BIS-certificeringsproces
          soepeler, sneller en volledig conform de Indiase normen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde vragen – BIS-certificering voor combinatietangen met zijsnijden
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V1. Is BIS-certificering verplicht voor combinatietangen met zijsnijden?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, naleving van IS 3650:1981 is verplicht in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V2. Wat is de volledige vorm van BIS-certificaat?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V3. Hoe lang duurt het BIS-certificeringsproces?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Doorgaans 30–60 werkdagen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V4. Wat zijn de kosten van het BIS-certificaat?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              De kosten hangen af van de testscope en productvarianten.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V5. Kunnen importeurs BIS-certificering aanvragen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, met juiste machtiging van de fabrikant.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V6. Is het ISI-keurmerk verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, ISI-markering is verplicht na certificering.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V7. Kunnen buitenlandse fabrikanten BIS-certificering verkrijgen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, via een geautoriseerde Indiase vertegenwoordiger.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V8. Welke tests zijn vereist onder IS 3650:1981?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Hardheid, snijprestaties, sterkte en dimensionale tests.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V9. Is fabrieksinspectie verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, BIS voert een fabrieksaudit uit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V10. Kunnen meerdere maten onder één licentie vallen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, onder voorbehoud van testen en goedkeuring.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V11. Wat gebeurt er als niet-gecertificeerde tangen worden verkocht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Boetes, inbeslagname en juridische stappen kunnen volgen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V12. Is BIS online aanvragen verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, aanvragen worden alleen online ingediend.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V13. Zijn verlengingen vereist voor BIS-licenties?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, licenties moeten periodiek worden verlengd.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V14. Kunnen consultants goedkeuringsvertragingen verminderen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, professionele consultants helpen fouten en afwijzingen te voorkomen.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="BIS-certificaat voor combinatietangen met zijsnijden - IS 3650:1981 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoRead />
        <FaqAuthorEng questionNumber={2} />
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
              Onze diensten
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s beste certificaatconsultant
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
              BIS-keurmerk (ISI-licentie) voor buitenlandse productie
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
              CDSCO-registratiecertificering
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Beheer van plastic afval
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
              EPR-certificaatcertificeringen
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
              LMPC-certificaatcertificeringen
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
              BIS-registratiecertificaat
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
              ISI-keurmerk (BIS) voor Indiase fabrikanten
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
