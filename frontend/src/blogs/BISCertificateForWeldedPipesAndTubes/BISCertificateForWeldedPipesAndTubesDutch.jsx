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

const BISCertificateForWeldedPipesAndTubesDutch = () => {
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

export default BISCertificateForWeldedPipesAndTubesDutch;

const MetaTags = () => {
  const title =
    "BIS Certificaat voor Gelaste Buizen en Buizen | IS 17876:2022 BIS Licentie";
  const ogTitle =
    "BIS Certificering voor Gelaste Buizen en Buizen – IS 17876:2022 Gids";
  const twitterTitle = "BIS Licentie voor Gelaste Buizen en Buizen | IS 17876:2022";
  const metaDescription =
    "Krijg BIS Certificaat voor Gelaste Buizen en Buizen onder IS 17876:2022. Proces, documenten, testen, kosten en tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor Gelaste Buizen en Buizen volgens IS 17876:2022. Ken het proces, kosten, documenten, testen en BIS licentie voordelen.";
  const twitterDescription =
    "Dien een aanvraag in voor BIS Certificaat voor Gelaste Buizen en Buizen onder IS 17876:2022. Leer BIS proces, documenten, testen, kosten en tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Gelaste Buizen en Buizen, BIS Licentie voor Gelaste Buizen en Buizen, IS 17876:2022, BIS Certificering voor Gelaste Buizen en Buizen";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/gelaste-buizen-en-buizen-is-17876";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Hoofd van Operaties bij Sun Certification India";

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
                    BIS Certificaat voor Gelaste Buizen en Buizen – IS 17876:2022
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
          BIS Certificaat voor Roestvrijstalen Gelaste Buizen en Buizen onder IS
          17876:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="BIS Licentie voor Gelaste Buizen en Buizen"
            alt="BIS Certificaat voor Gelaste Buizen en Buizen - IS 17876:2022 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Roestvrijstalen gelaste buizen en buizen worden uitgebreid gebruikt in
          industrieën zoals bouw, chemische verwerking, voedsel & dranken,
          waterdistributie, structurele toepassingen en algemene engineering.
          Omdat deze buizen vloeistoffen, gassen en in sommige gevallen corrosieve
          chemicaliën vervoeren, moeten hun sterkte, corrosieweerstand en
          productie-integriteit worden geverifieerd voordat ze de markt betreden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Om de kwaliteit te reguleren en de openbare en industriële veiligheid te
          waarborgen, heeft de regering van India BIS Certificering verplicht
          gesteld voor roestvrijstalen gelaste buizen en buizen onder IS 17876:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze uitgebreide gids legt het volledige BIS goedkeuringsproces uit,
          documentatie, testvereisten, kosten, tijdlijn, fabrikant
          verplichtingen, voordelen en nalevingsregels — geschreven in een frisse en
          unieke format, met nul duplicatie van eerdere content.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificering voor Roestvrijstalen Gelaste Buizen en Buizen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het Bureau of Indian Standards (BIS) reguleert productkwaliteit in
          India via verschillende certificeringsschema&apos;s. Een product dat valt
          onder een verplichte Quality Control Order (QCO) moet een BIS
          Licentie verkrijgen voordat het wordt geproduceerd, geïmporteerd, opgeslagen, verkocht of
          gedistribueerd.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wat BIS Certificering Waarborgt
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS certificaat bevestigt dat roestvrijstalen gelaste buizen/buizen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Voldoen aan dimensionele nauwkeurigheid</li>
          <li>Beschikken over vereiste mechanische sterkte</li>
          <li>Corrosieweerstand vertonen</li>
          <li>Geproduceerd zijn met goedgekeurde soorten roestvrij staal</li>
          <li>Voldoen aan Indiase testomstandigheden</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Eenmaal gecertificeerd moeten producten het ISI Merk dragen samen met het licentie
          (CML) nummer.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Norm voor Roestvrijstalen Gelaste Buizen en Buizen – IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De toepasselijke norm is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – Roestvrijstalen Gelaste Buizen en
          Buizen voor Algemene Service
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Deze norm schetst:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chemische samenstelling</li>
          <li>Mechanische eigenschapsvereisten</li>
          <li>Productietoleranties</li>
          <li>Dimensionele specificaties</li>
          <li>Oppervlakte- en afwerkingsrichtlijnen</li>
          <li>Hydrostatische en niet-destructieve testen</li>
          <li>Veiligheidsprestatiecriteria</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze buizen worden gebruikt voor algemene service toepassingen, wat betekent dat ze
          moeten voldoen aan een breed scala aan operationele omgevingen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering Verplicht is voor IS 17876:2022 Producten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Roestvrijstalen gelaste buizen worden veel gebruikt in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Waterleidingen</li>
          <li>Chemisch transport</li>
          <li>Voedsel & farmaceutische fabrieken</li>
          <li>Structurele engineering</li>
          <li>Uitlaat- en ventilatiesystemen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Als ze niet correct worden geproduceerd, kunnen deze buizen leiden tot:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lekkage falen</li>
          <li>Barsten onder druk</li>
          <li>Corrosie en besmetting</li>
          <li>Structurele instabiliteit</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Om te voorkomen dat ondermaatse materialen de toeleveringsketen binnendringen, vereist BIS
          dat elke fabrikant — binnenlands of buitenlands — de BIS
          Licentie voor Roestvrijstalen Gelaste Buizen en Buizen verkrijgt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificeringsproces voor IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het certificeringsproces omvat rigoureuze laboratoriumtesten en
          inspectie.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 1 – Identificeer Productcategorie & Soort
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Evalueer de specifieke soort(en) roestvrij staal die worden geproduceerd
          en bevestig dat ze vallen onder IS 17876:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 2 – Dien Online Aanvraag in
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fabrikanten moeten een aanvraag indienen via het Manak Online BIS Portaal,
          waarbij ze indienen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrieksgegevens</li>
          <li>Productiecapaciteit</li>
          <li>Processtroomdiagram</li>
          <li>Grondstofbronnen</li>
          <li>Kwaliteitsborgingsdocumentatie</li>
          <li>Merk & handelsmerkgegevens</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 3 – Betaal BIS Kosten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Betalingen omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagkosten</li>
          <li>Verwerkingskosten</li>
          <li>Testkosten</li>
          <li>Fabrieksinspectiekosten</li>
          <li>Merkkosten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 4 – Fabrieksinspectie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS functionarissen inspecteren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productievolgorde</li>
          <li>Grondstofopslag</li>
          <li>Lasapparatuur</li>
          <li>Gloeien/warmtebehandelingsprocessen</li>
          <li>Kwaliteitsdocumentatie</li>
          <li>Testinfrastructuur</li>
          <li>Kalibratierecords</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ze verifiëren naleving van het Schema van Testen & Inspectie (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 5 – Verlening van BIS Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Als alle parameters voldoen aan BIS vereisten, ontvangt de fabrikant:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificaat</li>
          <li>ISI Merk autorisatie</li>
          <li>Een uniek CML licentienummer</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 6 – Verplichtingen na Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Licentiehouders moeten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Voortdurende interne kwaliteitstesten handhaven</li>
          <li>Het ISI Merk correct gebruiken</li>
          <li>Meewerken tijdens periodieke BIS toezichtinspecties</li>
          <li>De licentie op tijd verlengen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Reikwijdte van BIS Licentie voor Roestvrijstalen Gelaste Buizen en Buizen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Deze norm dekt de vereisten voor gelaste
          roestvrijstalen buizen en buizen voor algemene diensten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Deze norm specificeert geen vereisten voor
          gelaste roestvrijstalen buizen en buizen bedoeld voor verschillende doeleinden,
          die worden gedekt door afzonderlijke Indiase Normen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenten Vereist voor BIS Certificering (IS 17876:2022)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Productiedocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabriekslicentie/registratie</li>
          <li>Lay-outdiagram</li>
          <li>Processtroomdiagram</li>
          <li>Machinelijst (lassen, vormen, gloeien, testen)</li>
          <li>Interne testapparatuur lijst</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Technische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Soort specificaties</li>
          <li>Chemische & mechanische testgegevens</li>
          <li>Lasprocedurespecificaties</li>
          <li>Warmtebehandelingsrecords</li>
          <li>Dimensionele tolerantiegrafieken</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Juridische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identiteitsbewijs</li>
          <li>Adresbewijs</li>
          <li>Merkeigendomsdocumenten</li>
          <li>Geautoriseerde ondertekenaar brief</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. BIS Aanvraagdocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ingevuld aanvraagformulier</li>
          <li>Verklaringen & verklaringen</li>
          <li>Testaanvraagdocumenten</li>
          <li>Label artwork voor ISI markering</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten Onder IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testen is de kern van BIS goedkeuring en zorgt ervoor dat elke batch voldoet aan
          strenge kwaliteitsnormen.
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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pananalyse
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Productanalyse
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Trekkrachtvereisten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Buizen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Buizen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Flenstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Omgekeerde Platdruktest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Platdruktest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Korrelgrootte
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lekdichtheidstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vakmanschap, Afwerking, Uiterlijk
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Afmetingen en Toleranties
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Uitdagingen Tijdens BIS Certificering
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Falen bij Chemische Samenstellingstesten</strong>
            <br />
            Niet-standaard legeringselementen of onzuiverheden veroorzaken afwijzing.
          </li>
          <li>
            <strong>Lasdefecten Tijdens NDT</strong>
            <br />
            Slechte lasprocessen of inconsistente warmtebehandeling kunnen
            gebreken veroorzaken.
          </li>
          <li>
            <strong>Dimensionele Niet-Naleving</strong>
            <br />
            Wanddikte variaties leiden vaak tot falen.
          </li>
          <li>
            <strong>Onvolledige Documentatie</strong>
            <br />
            Ontbrekende of onduidelijke records vertragen licentie goedkeuring.
          </li>
          <li>
            <strong>Kalibratieproblemen</strong>
            <br />
            Niet-gekalibreerde apparatuur resulteert in onbetrouwbare testresultaten.
          </li>
          <li>
            <strong>Onjuiste merk/label indiening</strong>
            <br />
            ISI merk artwork moet overeenkomen met BIS specificaties.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Roestvrijstalen Buizen en Buizen
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Juridische goedkeuring om te produceren/verkopen in India</li>
          <li>Waarborg van kwaliteit en veiligheid</li>
          <li>Verbeterde reputatie en marktgeloofwaardigheid</li>
          <li>Acceptatie door overheids- en PSU aanbestedingen</li>
          <li>Verhoogd exportpotentieel</li>
          <li>Verminderde productfalen risico&apos;s</li>
          <li>Bescherming tegen namaak of ondermaatse concurrenten</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Boetes voor Niet-Naleving
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Fabrikanten/importeurs die niet-gecertificeerde producten verkopen krijgen te maken met:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product inbeslagname</li>
          <li>Zware boetes onder de BIS Wet</li>
          <li>Sluiting van productieactiviteiten</li>
          <li>Importbeperkingen</li>
          <li>Juridische vervolging</li>
          <li>Annulering van bestaande licenties</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Naleving is verplicht en wordt strikt gehandhaafd.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie Moet BIS Licentie Krijgen voor SS Gelaste Buizen en Buizen?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Buitenlandse fabrikanten die naar India exporteren</li>
          <li>Importeurs van roestvrijstalen buizen</li>
          <li>OEM leveranciers</li>
          <li>Industriële distributeurs</li>
          <li>Private label merken</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke productielocatie moet zijn eigen licentie verkrijgen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Certificaat voor Roestvrijstalen Gelaste Buizen en Buizen onder
          IS 17876:2022 waarborgt de betrouwbaarheid, duurzaamheid en prestaties van
          kritieke leidingsproducten die worden gebruikt in meerdere industrieën. Met
          verplichte certificering die nu wordt gehandhaafd, moeten fabrikanten en importeurs
          hun processen, testen en documentatie afstemmen op BIS
          vereisten om legaal hun producten te leveren op de Indiase markt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Met expertbegeleiding wordt het BIS licentieproces sneller,
          soepeler en volledig compliant.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde Vragen — BIS Certificering voor Roestvrijstalen Gelaste Buizen en Buizen
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS Certificering verplicht voor roestvrijstalen gelaste
                buizen?
              </strong>
              <br />
              Ja. Onder IS 17876:2022 is BIS certificering verplicht voor alle
              fabrikanten en importeurs.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Welke testen zijn vereist?</strong>
              <br />
              Chemische analyse, trektest, hardheidstest, hydrostatisch
              testen, NDT, platdrukken en dimensionele controles.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Hoe lang duurt BIS certificering?</strong>
              <br />
              Meestal 35–50 dagen voor Indiase Fabrikant en ongeveer 120 dagen
              voor buitenlandse fabrikant, afhankelijk van test- en inspectie
              gereedheid.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Kunnen buitenlandse fabrikanten BIS certificering verkrijgen?
              </strong>
              <br />
              Ja, via het FMCS (Foreign Manufacturers Certification
              Scheme).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Welke documenten zijn vereist?</strong>
              <br />
              Fabriekslicentie, testapparatuur lijst, BOM, processtroom, tekeningen,
              QC plan, merkdocumenten, enz.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Wat als een monster faalt bij testen?</strong>
              <br />
              De fabrikant moet het probleem corrigeren, het product opnieuw bewerken en
              opnieuw indienen voor testen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Is ISI markering verplicht na goedkeuring?</strong>
              <br />
              Ja. Producten moeten ISI Merk + CML nummer tonen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Zijn alle soorten gedekt onder IS 17876?</strong>
              <br />
              Alleen specifieke soorten gedefinieerd onder de norm komen in aanmerking.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Hoe vaak voert BIS toezicht uit?</strong>
              <br />
              Periodieke audits en willekeurige monstertesten worden uitgevoerd tijdens de
              licentie geldigheid.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17876-2022-Sun-Certifications-India.pdf"
            title="BIS Certificaat voor Gelaste Buizen en Buizen - IS 17876:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadDutch />

        <FaqAuthorDutch questionNumber={3} />
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="ISIMark logo"
                title="ISIMark logo"
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
