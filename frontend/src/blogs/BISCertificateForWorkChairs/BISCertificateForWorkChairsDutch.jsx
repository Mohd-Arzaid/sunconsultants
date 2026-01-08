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

const BISCertificateForWorkChairsDutch = () => {
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

export default BISCertificateForWorkChairsDutch;

const MetaTags = () => {
  const title = "BIS Certificaat voor Werkstoelen | IS 17631:2022 BIS Licentie";
  const ogTitle = "BIS Certificering voor Werkstoelen – IS 17631:2022 Gids";
  const twitterTitle = "BIS Licentie voor Werkstoelen | IS 17631:2022";
  const metaDescription =
    "Krijg BIS Certificaat voor werkstoelen volgens IS 17631:2022. Proces, documenten, testen, kosten en tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor Werkstoelen volgens IS 17631:2022. Ken het proces, kosten, documenten, testen en BIS licentie voordelen.";
  const twitterDescription =
    "Vraag BIS Certificaat aan voor Werkstoelen volgens IS 17631:2022. Leer BIS proces, documenten, testen, kosten en tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Werkstoelen, BIS Licentie voor Werkstoelen, IS 17631:2022, BIS Certificering voor Werkstoelen";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631";
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
                    BIS Certificaat voor Werkstoelen – IS 17631:2022
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
          BIS Certificaat voor Werkstoelen – Een Volledige Nalevingsgids voor IS
          17631:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="BIS Licentie voor Werkstoelen"
            alt="BIS Certificaat voor Werkstoelen - IS 17631:2022 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het toenemende gebruik van kantoor- en taakstoelen—of het nu in
          bedrijfsruimtes, co-working centra, thuis kantoren of institutionele
          opstellingen is—heeft veiligheid en ergonomische prestaties essentieel
          gemaakt. Om ervoor te zorgen dat fabrikanten structureel stabiele,
          duurzame en gebruikersveilige zitproducten leveren, heeft de regering
          van India BIS Certificering voor Werkstoelen onder IS 17631:2022
          verplicht gesteld.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Werkstoelen doorstaan doorgaans herhaaldelijke belasting, continue
          lichaamsbeweging, kantelen, draaien en hoogteaanpassingen. Een falen
          in een prestatiekenmerk kan leiden tot ernstig letsel. Daarom is
          naleving van IS 17631:2022 – Werkstoelen: Veiligheidseisen nu
          verplicht voor alle fabrikanten en importeurs.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze gids legt het volledige BIS licentieproces uit, inclusief normen,
          testen, kosten, documentatie, verantwoordelijkheden, voordelen en
          uitdagingen—gecreëerd met verse inhoud om duplicatie op uw website te
          voorkomen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificering voor Werkstoelen Begrijpen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het Bureau of Indian Standards (BIS) houdt toezicht op de kwaliteit en
          veiligheid van producten die op de Indiase markt worden geleverd. Elk
          product dat onder een Indiase norm valt die in een verplichte
          Kwaliteitscontrole Order is opgenomen, moet door BIS worden
          geëvalueerd en gecertificeerd voordat het wordt verkocht.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificaat – Wat Het Vertegenwoordigt
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS Certificaat geeft aan dat een werkstoel:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prestatie- en duurzaamheidstesten heeft doorstaan</li>
          <li>Voldoet aan materiaal- en constructiespecificaties</li>
          <li>Veilig is voor langdurig dagelijks gebruik</li>
          <li>
            Voldoet aan de ergonomische en structurele richtlijnen in Indiase
            Normen
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten die aan deze eisen voldoen, krijgen een BIS Licentie
          waarmee ze het ISI Merk mogen aanbrengen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Toepasselijke Norm voor Werkstoelen – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De toepasselijke norm voor taak- en kantoorwerkstoelen is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – Werkstoelen: Veiligheidseisen
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Deze norm richt zich op zitplaatsen bedoeld voor langdurig gebruik in
          werkomgevingen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Producten Gedekt Onder Deze Norm
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ergonomische kantoorstoelen</li>
          <li>Taakstoelen</li>
          <li>Draaistoelen</li>
          <li>Werkbureaustoelen</li>
          <li>Werkstoelen met verstelbare hoogte</li>
          <li>Uitvoerende werkstoelen</li>
          <li>Werkstoelen met mesh of stoffen rugleuning</li>
          <li>Stoelen uitgerust met armsteunen</li>
          <li>Stoelen met kantel-/vergrendelingsmechanismen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom IS 17631:2022 Naleving Cruciaal Is
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Werkstoelen verschillen aanzienlijk van algemene stoelen omdat ze:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Continue beweging ondersteunen</li>
          <li>Mechanische en aanpassingsmechanismen gebruiken</li>
          <li>Dynamische belasting dragen</li>
          <li>Duurzaamheid vereisen voor langdurig gebruik</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Slecht gebouwde stoelen kunnen falen bij:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Basisverbindingen</li>
          <li>Draaimechanismen</li>
          <li>Gasliftsystemen</li>
          <li>Zit-/rugondersteuning</li>
          <li>Poot- of wielstructuur</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Dit kan leiden tot werkplekletsels, operationele stilstand en
          productaansprakelijkheidsproblemen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Verplichte BIS Certificering Zorgt Voor
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Veilig ergonomisch ontwerp</li>
          <li>Betrouwbare draagkracht</li>
          <li>Sterke duurzaamheid onder cyclische testen</li>
          <li>Weerstand tegen mechanische slijtage</li>
          <li>Naleving van gebruikersveiligheidsparameters</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het verkrijgen van een BIS Licentie voor Werkstoelen is dus
          niet-onderhandelbaar voor Indiase en buitenlandse fabrikanten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Reikwijdte van BIS Licentie voor Werkstoelen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze norm dekt de eisen voor werkstoelen. Deze norm is van toepassing
          op volledig gefabriceerde werkstoelen. Het is ook van toepassing op
          klaar-voor-montage eenheden; in dat geval zijn de eisen van deze norm
          van toepassing op de gemonteerde eenheden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Stap-voor-Stap BIS Certificeringsproces voor Werkstoelen (IS
          17631:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het certificeringsproces voor werkstoelen omvat een mix van
          laboratoriumevaluatie, fabrieksaudit en technische controle.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 1 – Productevaluatie & Norm Mapping
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Identificeer alle stoelvarianten en stem ze af op IS 17631:2022.
          Begrijp welke modellen dezelfde constructie delen en welke aparte
          testen vereisen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 2 – Online Aanvraag Indienen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De fabrikant dient de aanvraag in via het Manak Online BIS Portaal.
          Vereiste informatie omvat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabriekslocatiegegevens</li>
          <li>Grondstofcontroles</li>
          <li>Technische specificaties</li>
          <li>Productiecapaciteiten</li>
          <li>Merkeigendomsdocumentatie</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 3 – Kostenbetaling
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Kosten moeten worden betaald voor:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraag</li>
          <li>Verwerking</li>
          <li>Testen</li>
          <li>Inspectie</li>
          <li>Merken</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 4 – Monstertesten (IS 17631:2022 Eisen)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een door BIS erkend laboratorium evalueert de stoel tegen meerdere
          veiligheids- en prestatiecriteria.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Werkstoel Testen Omvatten
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zit- en rug statische belastingstesten</li>
          <li>Duurzaamheidsbelastingscycli</li>
          <li>Draai-/rotatietesten</li>
          <li>Kantelmechanisme uithoudingsvermogen</li>
          <li>Gasliftmechanisme prestaties</li>
          <li>Wielsterkte en rolweerstand</li>
          <li>Basisstabiliteit en overbelastingstesten</li>
          <li>Armsteun belastingscapaciteit</li>
          <li>Schokbestendigheidstesten</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het laboratorium geeft een gedetailleerd testrapport af aan BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 5 – Fabrieksaudit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS inspecteurs beoordelen de faciliteit&apos;s:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productiesysteem</li>
          <li>Materiaalinspectierecords</li>
          <li>Interne kwaliteitsborgingsprocessen</li>
          <li>Testinstrumenten & kalibratielogboeken</li>
          <li>Naleving van het Test- en Inspectieschema (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 6 – Verlening van BIS Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Zodra conformiteit is bevestigd, verleent BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>De BIS Licentie/ISI Merk certificering</li>
          <li>Een uniek CML nummer</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 7 – Consistente Naleving
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fabrikanten moeten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Voortdurende interne controles handhaven</li>
          <li>Merkenregels volgen</li>
          <li>Meewerken tijdens toezichtinspecties</li>
          <li>De licentie periodiek vernieuwen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenten Vereist voor BIS Certificering van Werkstoelen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Een complete set documenten zorgt voor snellere goedkeuring.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bedrijfs- & Fabrieksdocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrieksregistratie</li>
          <li>Productiediagram & indeling</li>
          <li>Productieworkflow</li>
          <li>Machinelijst</li>
          <li>Testapparatuurlijst</li>
          <li>Kalibratiecertificaten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stoel technische tekeningen</li>
          <li>Mechanismespecificaties</li>
          <li>Materiaaldatabladen</li>
          <li>Stuklijst</li>
          <li>Montage-instructies</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identiteitsbewijs van gemachtigde ondertekenaar</li>
          <li>Merkautorisatiebrieven</li>
          <li>Handelsmerk certificaat</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Specifieke Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagformulier</li>
          <li>Verklaringen</li>
          <li>Testaanvraagformulier</li>
          <li>Labelsamples</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testeisen Volgens IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Werkstoelen ondergaan complexere testen dan algemene stoelen vanwege
          bewegende onderdelen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Belangrijkste Uitgevoerde Testen
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clausule
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Eisen
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
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Voorrand Omkanteling
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Voorwaartse Omkanteling
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Voorwaartse Omkanteling voor Stoelen met Voetsteun
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Zijwaartse Omkanteling voor Stoelen Zonder Armsteunen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Zijwaartse Omkanteling voor Stoelen Met Armsteunen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Achterwaartse Omkanteling voor Stoelen Zonder Rugleuning
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Zit Voorrand Statische Belastingstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Gecombineerde Zit en Rug Statische Belastingstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Armsteun Neerwaartse Statische Belastingstest — Centraal
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Armsteun Neerwaartse Statische Belastingstest — Voor
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Armsteun Zijwaartse Statische Belastingstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Voetsteun Statische Belastingstest
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Deze testen simuleren maanden of jaren van regelmatig gebruik binnen
          enkele dagen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende Uitdagingen bij BIS Certificering voor Werkstoelen
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>✔ 1. Falen in mechanische/kanteltesten</strong> – Vaak
            veroorzaakt door zwakke mechanismen of lage kwaliteit hardware.
          </li>
          <li>
            <strong>✔ 2. Gasliftmechanisme niet-conformiteit</strong> –
            Gasliften moeten voldoen aan strikte druk- en veiligheidsparameters.
          </li>
          <li>
            <strong>✔ 3. Onvoldoende testinfrastructuur</strong> – Werkstoel
            testen vereist gespecialiseerde opstellingen.
          </li>
          <li>
            <strong>✔ 4. Onjuiste productgroepering</strong> – Verschillende
            mechanismen = aparte testen.
          </li>
          <li>
            <strong>✔ 5. STI niet-conformiteit</strong> – STI fouten kunnen
            licentieverlening vertragen.
          </li>
          <li>
            <strong>✔ 6. Documentmismatches</strong> – Merknaam en modelnaam
            moeten exact overeenkomen met BIS aanvraag.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Werkstoelen
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Faciliteert legale verkoop in heel India</li>
          <li>Verhoogt klantvertrouwen & merk reputatie</li>
          <li>Zorgt voor langdurige duurzaamheid</li>
          <li>Vermindert garantieclaims en storingen</li>
          <li>Beschermt tegen regelgevingsboetes</li>
          <li>Maakt vermelding op e-commerce platforms mogelijk</li>
          <li>Verplicht voor overheidsaanbestedingen en bedrijfsleveringen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Boetes voor Verkoop van Werkstoelen Zonder BIS Certificering
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Niet-naleving kan resulteren in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zware financiële boetes</li>
          <li>Inbeslagname van voorraad</li>
          <li>Productiestop bevelen</li>
          <li>Importverbod</li>
          <li>Strafrechtelijke vervolging</li>
          <li>Intrekking van bedrijfslicentie</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Strikte handhaving wordt uitgevoerd onder de BIS Wet, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie Moet BIS Certificering voor Werkstoelen Verkrijgen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Verplicht voor:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Buitenlandse fabrikanten die naar India exporteren</li>
          <li>Merkeigenaren</li>
          <li>Importeurs</li>
          <li>OEM/ODM leveranciers</li>
          <li>Magazijn distributeurs</li>
          <li>Retail en online meubelmerken</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke fabriek vereist een unieke BIS licentie.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Certificaat voor Werkstoelen onder IS 17631:2022 is cruciaal
          voor het waarborgen van veilige, duurzame en ergonomisch verantwoorde
          zitproducten in India. Verplichte certificering verhoogt
          klantvertrouwen, vermindert productaansprakelijkheidsrisico&apos;s en
          zorgt voor naleving van nationale kwaliteitsnormen. Met professionele
          ondersteuning wordt het certificeringstraject—van testen tot inspectie
          tot licentieverlening—efficiënt en voorspelbaar.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde Vragen – BIS Certificaat voor Werkstoelen (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Welke stoelen vallen onder IS 17631:2022?</strong>
              <br />
              Elke stoel ontworpen voor werkomgevingen, inclusief ergonomische
              kantoorstoelen, taakstoelen, draaistoelen en verstelbare stoelen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Is BIS Certificering verplicht voor werkstoelen?
              </strong>
              <br />
              Ja. BIS certificering is verplicht voordat werkstoelen worden
              gefabriceerd, verkocht of geïmporteerd in India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Wat maakt werkstoel testen anders dan algemene stoel testen?
              </strong>
              <br />
              Werkstoelen gebruiken mechanismen zoals draaipunten, gasliften,
              kantelsystemen en wielen—wat geavanceerde mechanische en
              uithoudingstesten vereist.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Hoe lang duurt BIS certificering?</strong>
              <br />
              Meestal 30–45 dagen voor Indiase fabrikanten en ongeveer 120 dagen
              voor buitenlandse fabrikanten, afhankelijk van testen en
              documentatie.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Kunnen buitenlandse fabrikanten aanvragen?</strong>
              <br />
              Ja, via het FMCS (Foreign Manufacturers Certification Scheme).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Wat als een stoel faalt bij BIS testen?</strong>
              <br />
              Deze moet worden herontworpen, gecorrigeerd en opnieuw getest
              totdat deze voldoet aan IS 17631:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Welke documenten zijn vereist voor BIS aanvraag?
              </strong>
              <br />
              Fabrieksgegevens, producttekeningen, machinelijst, QC documenten,
              merkeigendom en juridische papieren.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Vereisen alle stoelmodellen aparte testen?</strong>
              <br />
              Als modellen verschillen in ontwerp, mechanisme of structuur,
              kunnen aparte testen nodig zijn.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Is ISI merken verplicht na goedkeuring?</strong>
              <br />
              Ja, het ISI merk moet verschijnen op het product, label en
              verpakking.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="BIS Certificaat voor Werkstoelen - IS 17631:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadDutch />

        <FaqAuthorDutch questionNumber={4} />
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
              BIS Merk (ISI Licentie) voor Buitenlandse Fabrikanten
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
                alt="LMPC logo"
                title="LMPC logo"
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
