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

const BISCertificateForFlashlightDutch = () => {
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

export default BISCertificateForFlashlightDutch;

const MetaTags = () => {
  const title = "BIS Certificaat voor Zaklamp | IS 2083:2024 BIS Licentie";
  const ogTitle = "BIS Certificering voor Zaklamp – IS 2083:2024 Gids";
  const twitterTitle = "BIS Licentie voor Zaklamp | IS 2083:2024";
  const metaDescription =
    "Verkrijg BIS Certificaat voor Zaklamp onder IS 2083:2024. Proces, documenten, testen, kosten en tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor Zaklamp volgens IS 2083:2024. Ken het proces, kosten, documenten, testen en BIS licentie voordelen.";
  const twitterDescription =
    "Vraag BIS Certificaat aan voor Zaklamp onder IS 2083:2024. Leer BIS proces, documenten, testen, kosten en tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Zaklamp, BIS Licentie voor Zaklamp, IS 2083:2024, BIS Certificering voor Zaklamp";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/zaklamp-is-2083";
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
                    BIS Certificaat voor Zaklamp – IS 2083:2024
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
          BIS Certificaat voor Zaklamp onder IS 2083:2024 – Volledige Compliance
          Gids
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="BIS Licentie voor Zaklamp"
            alt="BIS Certificaat voor Zaklamp - IS 2083:2024 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zaklampen (vaak aangeduid als fakkels) zijn essentiële draagbare
          verlichtingsapparaten die worden gebruikt in huishoudens, industrieën,
          hulpdiensten, veiligheidsdiensten, buitenactiviteiten en
          rampenbestrijding. Omdat zaklampen elektrische producten zijn die
          batterijen, circuits, lichtbronnen en behuizingen bevatten, is
          kwaliteit en veiligheidsnaleving van cruciaal belang.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Om de productkwaliteit, prestaties en consumentenveiligheid te
          reguleren, heeft het Bureau of Indian Standards (BIS) IS 2083:2024 –
          Zaklamp: Specificatie bekendgemaakt, waardoor BIS Certificering
          verplicht is voor zaklampen die in India worden verkocht, vervaardigd
          of geïmporteerd.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze pagina biedt een uitgebreide en originele uitleg van BIS
          Certificering voor zaklampen, inclusief de toepasselijke standaard,
          certificeringsproces, testvereisten, documentatie, kosten, tijdlijnen,
          boetes en nalevingsverantwoordelijkheden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificering en Waarom het van Toepassing is op Zaklampen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het Bureau of Indian Standards (BIS) is India&apos;s nationale
          normalisatie-instantie die verantwoordelijk is voor het waarborgen dat
          producten die op de Indiase markt worden verkocht voldoen aan
          voorgeschreven veiligheids-, kwaliteits- en prestatienormen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Betekenis van BIS Certificering
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS Certificaat bevestigt dat een zaklamp:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Voldoet aan de Indiase Standaard IS 2083:2024</li>
          <li>Alle verplichte laboratoriumtests heeft doorstaan</li>
          <li>Voldoet aan elektrische, mechanische en prestatie-eisen</li>
          <li>Veilig is voor consumentengebruik</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Eenmaal goedgekeurd, mag de fabrikant het ISI-merk aanbrengen, wat
          naleving van Indiase Standaarden betekent.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Toepasselijke Indiase Standaard – IS 2083:2024 (Zaklamp: Specificatie)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – Zaklamp: Specificatie
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 2083:2024 definieert de constructie-, prestatie-, veiligheids- en
          testvereisten voor draagbare zaklampen die worden gebruikt voor
          algemene verlichting.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Reikwijdte van IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De standaard dekt:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Handzaklampen (fakkels)</li>
          <li>Op batterijen werkende zaklampen</li>
          <li>Oplaadbare zaklampen</li>
          <li>LED zaklampen</li>
          <li>Nood- en gebruikszaklampen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Belangrijke Gebieden Gedekt door de Standaard
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Elektrische veiligheid</li>
          <li>Lichtprestaties</li>
          <li>Mechanische sterkte</li>
          <li>Batterijcompatibiliteit</li>
          <li>Schakelaar duurzaamheid</li>
          <li>Bescherming tegen oververhitting</li>
          <li>Weerstand tegen normale slijtage</li>
          <li>Markerings- en etiketteringsvereisten</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke zaklamp die onder deze reikwijdte valt, moet een BIS Licentie
          voor Zaklamp verkrijgen voordat deze de Indiase markt betreedt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering Verplicht is voor Zaklampen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zaklampen worden breed gebruikt door consumenten van alle
          leeftijdsgroepen en in kritieke situaties zoals noodsituaties,
          stroomuitval en industriële operaties. Ondermaatse zaklampen kunnen
          veroorzaken:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Elektrische kortsluitingen</li>
          <li>Batterijlekkage of explosie</li>
          <li>Oververhitting</li>
          <li>Brandgevaar</li>
          <li>Slechte verlichtingsprestaties</li>
          <li>Voortijdig falen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificering Waarborgt
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Elektrische en gebruikersveiligheid</li>
          <li>Consistente lichtopbrengst</li>
          <li>Duurzame constructie</li>
          <li>Veilige batterijwerking</li>
          <li>Naleving van Indiase regelgevingsvereisten</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het verkopen van niet-gecertificeerde zaklampen is een wettelijke
          overtreding onder de BIS Act, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Reikwijdte van BIS Licentie voor Zaklamp
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Deze standaard specificeert de vereisten en tests
          voor zaklampen aangedreven door verwisselbare primaire batterijen en
          verwisselbare/ingebouwde secundaire batterijen met een maximale
          spanning van 48 V DC.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Deze standaard is van toepassing op vooraf
          gefocuste en focusserende typen zaklampen met gloeilamp en LED-module
          als lichtbron.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> Het volgende valt niet onder de reikwijdte van
          deze standaard:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Snoer- en stekkerverbonden handlampen die binnen de reikwijdte van
            IS 10322 (Deel 5/Sec 6) vallen;
          </li>
          <li>
            Noodverlichting die binnen de reikwijdte van IS 10322 (Deel 5/Sec 8)
            valt; en
          </li>
          <li>Zaklampen die bestemd zijn voor gevaarlijke locaties.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificeringsproces voor Zaklampen (IS 2083:2024)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS certificeringsproces voor zaklampen wordt uitgevoerd onder het
          ISI Mark Certificeringsschema (Schema-I) en omvat meerdere fasen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 1 – Productidentificatie en Standaardmapping
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De fabrikant moet bevestigen dat het product in aanmerking komt als
          zaklamp onder IS 2083:2024 en identificeren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Type zaklamp</li>
          <li>Stroombron (batterij/oplaadbaar)</li>
          <li>Lichtbron (LED, lamp, enz.)</li>
          <li>Varianten en modellen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 2 – Online BIS Aanvraag
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De aanvraag wordt ingediend via het BIS Manak Online Portaal, samen
          met:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrikantgegevens</li>
          <li>Fabriekadres</li>
          <li>Productbeschrijving</li>
          <li>Merk-/handelsmerkengegevens</li>
          <li>Productieprocesinformatie</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 3 – Betaling van BIS Kosten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Toepasselijke kosten omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagkosten</li>
          <li>Verwerkingskosten</li>
          <li>Producttestkosten</li>
          <li>Fabrieksinspectiekosten</li>
          <li>Markeringskosten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 4 – Producttesten volgens IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Monsters worden getest in een door BIS erkend laboratorium.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Verplichte Tests voor Zaklampen
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lichtintensiteitstest</li>
          <li>Lichtopbrengststabiliteitstest</li>
          <li>Batterijuithoudingsvermogenstest</li>
          <li>Schakelaarwerkingstest</li>
          <li>Mechanische sterkte (valtest)</li>
          <li>Isolatieweerstandstest</li>
          <li>Temperatuurstijgingstest</li>
          <li>Elektrische veiligheidstest</li>
          <li>Markerings- en etiketteringsverificatie</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testrapporten worden rechtstreeks door het laboratorium bij BIS
          ingediend.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 5 – Fabrieksinspectie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS-functionaris voert een inspectie ter plaatse uit om te
          verifiëren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productie-opstelling</li>
          <li>Kwaliteitscontrolesysteem</li>
          <li>Inkomende materiaalscontrole</li>
          <li>Procescontroles</li>
          <li>Eindproducttesten</li>
          <li>Kalibratie van testinstrumenten</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Naleving van het Test- en Inspectieschema (STI) is verplicht.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 6 – Verlening van BIS Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Na succesvolle testen en inspectie geeft BIS uit:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificaat</li>
          <li>ISI Mark goedkeuring</li>
          <li>CML (Certificate of Manufacturing Licence) nummer</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          De fabrikant kan nu legaal zaklampen vervaardigen en verkopen in
          India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 7 – Post-Certificering Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Na certificering moeten fabrikanten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI Mark correct gebruiken op product en verpakking</li>
          <li>Batchgewijze kwaliteitsgegevens bijhouden</li>
          <li>BIS toezichtsinspecties toestaan</li>
          <li>De licentie periodiek vernieuwen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vereiste Documenten voor BIS Certificering van Zaklampen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Productiedocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabriekregistratie/licentie</li>
          <li>Productieproces flowchart</li>
          <li>Lijst van machines</li>
          <li>Lijst van intern testapparatuur</li>
          <li>Kalibratiecertificaten</li>
          <li>Fabrieksindeling</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productspecificatieblad</li>
          <li>Circuitdiagrammen</li>
          <li>Batterijspecificaties</li>
          <li>Materiaallijst</li>
          <li>Interne testrapporten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identiteitsbewijs van gemachtigde ondertekenaar</li>
          <li>Adresbewijs</li>
          <li>Merkautomatiseringsbrief</li>
          <li>Handelsmerkencertificaat (indien van toepassing)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Specifieke Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS aanvraagformulier</li>
          <li>Verplichtingen en verklaringen</li>
          <li>Testverzoekbrief</li>
          <li>Label ontwerp (ISI markeringsformaat)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten onder IS 2083:2024 (Gedetailleerd)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zaklampen moeten rigoureuze testen ondergaan om veiligheid en
          prestaties te waarborgen.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Alleen producten die alle verplichte tests doorstaan, komen in
          aanmerking voor BIS goedkeuring.
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test voor afwerking
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Controle van afmetingen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Controle van markeringen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Functionele test voor schakelaar
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Isolatieweerstandstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lichtverdelingstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Circuitstroom van LED zaklamp
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test voor laadstroom in ingebouwde oplaadbare batterij
                  werkende zaklampen
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende Uitdagingen in BIS Certificering voor Zaklampen
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Falen in temperatuurstijgingstest</li>
          <li>Inconsistente lichtopbrengst</li>
          <li>Slechte schakelaar duurzaamheid</li>
          <li>Batterijcompatibiliteitsproblemen</li>
          <li>Onjuist ISI-labelformaat</li>
          <li>Onvolledige documentatie</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voorafgaande testen en expertbegeleiding verminderen aanzienlijk de
          risico&apos;s van afwijzing.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Zaklampfabrikanten
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Wettelijke toestemming om te verkopen in India</li>
          <li>Verbeterd consumentenvertrouwen</li>
          <li>Verbeterde productbetrouwbaarheid</li>
          <li>Acceptatie op e-commerceplatforms</li>
          <li>In aanmerking komen voor overheidsopdrachten</li>
          <li>Verminderde aansprakelijkheid en terugroepacties</li>
          <li>Sterke merkgeloofwaardigheid</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Boetes voor het Verkopen van Zaklampen Zonder BIS Certificering
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Niet-naleving kan resulteren in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productinbeslagname</li>
          <li>Zware geldelijke boetes</li>
          <li>Importverboden</li>
          <li>Productie-stilleggingen</li>
          <li>Strafrechtelijke vervolging onder de BIS Act</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie Heeft BIS Certificering Nodig voor Zaklampen?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Buitenlandse fabrikanten die exporteren naar India</li>
          <li>Importeurs</li>
          <li>Merkeigenaren</li>
          <li>OEM/ODM leveranciers</li>
          <li>Online verkopers en distributeurs</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke productie-eenheid vereist een afzonderlijke BIS licentie.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Certificaat voor Zaklamp onder IS 2083:2024 is een verplichte
          regelgevingsvereiste die veiligheid, prestaties en betrouwbaarheid van
          draagbare verlichtingsproducten in India waarborgt. Naleving beschermt
          niet alleen consumenten, maar versterkt ook merkgeloofwaardigheid en
          markttoegang. Met professionele begeleiding kunnen fabrikanten en
          importeurs BIS certificering soepel en efficiënt verkrijgen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde Vragen – BIS Certificaat voor Zaklamp (IS 2083:2024)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS Certificering verplicht voor zaklampen in India?
              </strong>
              <br />
              Ja. Zaklampen die onder IS 2083:2024 vallen, moeten BIS
              gecertificeerd zijn.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Welke standaard is van toepassing op zaklampen?
              </strong>
              <br />
              IS 2083:2024 – Zaklamp: Specificatie.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Hoe lang duurt het BIS-proces?</strong>
              <br />
              Ongeveer 30-45 werkdagen voor Indiase Fabrikanten en ongeveer 120
              dagen voor Buitenlandse Fabrikanten.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Kunnen buitenlandse fabrikanten BIS certificering aanvragen?
              </strong>
              <br />
              Ja, via het FMCS-schema.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Is ISI-markering verplicht?</strong>
              <br />
              Ja, ISI Mark moet worden weergegeven op gecertificeerde zaklampen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Wat gebeurt er als een zaklamp de test niet doorstaat?
              </strong>
              <br />
              Het product moet worden gecorrigeerd en opnieuw getest.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Zijn oplaadbare zaklampen ook gedekt?</strong>
              <br />
              Ja, als ze binnen de reikwijdte van IS 2083:2024 vallen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Hoe lang is de BIS licentie geldig?</strong>
              <br />
              1-2 jaar, verlengbaar.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Kunnen meerdere modellen onder één licentie worden gedekt?
              </strong>
              <br />
              Ja, als ze voldoen aan gelijkeniscriteria.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-2083-2024-Sun-Certifications-India.pdf"
            title="BIS Certificate for Flashlight - IS 2083:2024 PDF"
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
              BIS Mark (ISI Licentie) voor Buitenlandse Fabrikanten
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
              Beheer van Plastic Afval
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
              ISI MARK (BIS) voor Indiase Fabrikanten
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
