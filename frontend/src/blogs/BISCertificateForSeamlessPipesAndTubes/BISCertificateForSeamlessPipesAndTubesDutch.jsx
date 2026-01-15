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

const BISCertificateForSeamlessPipesAndTubesDutch = () => {
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

export default BISCertificateForSeamlessPipesAndTubesDutch;

const MetaTags = () => {
  const title =
    "BIS Certificaat voor Naadloze Buizen en Buizen | IS 17875:2022 BIS Licentie";
  const ogTitle =
    "BIS Certificering voor Naadloze Buizen en Buizen – IS 17875:2022 Gids";
  const twitterTitle =
    "BIS Licentie voor Naadloze Buizen en Buizen | IS 17875:2022";
  const metaDescription =
    "Krijg BIS Certificaat voor Naadloze Buizen en Buizen onder IS 17875:2022. Proces, documenten, testen, kosten en tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor Naadloze Buizen en Buizen volgens IS 17875:2022. Ken het proces, kosten, documenten, testen en BIS licentie voordelen.";
  const twitterDescription =
    "Dien een aanvraag in voor BIS Certificaat voor Naadloze Buizen en Buizen onder IS 17875:2022. Leer BIS proces, documenten, testen, kosten en tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Naadloze Buizen en Buizen, BIS Licentie voor Naadloze Buizen en Buizen, IS 17875:2022, BIS Certificering voor Naadloze Buizen en Buizen";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/naadloze-buizen-en-buizen-is-17875";
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
                    BIS Certificaat voor Naadloze Buizen en Buizen – IS
                    17875:2022
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
          BIS Certificaat voor Naadloze Buizen en Buizen onder IS 17875:2022 —
          Volledige Certificeringsgids
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="BIS Licentie voor Naadloze Buizen en Buizen"
            alt="BIS Certificaat voor Naadloze Buizen en Buizen - IS 17875:2022 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Naadloze stalen buizen en buizen worden algemeen erkend om hun
          superieure prestaties in kritieke, hoge druk en hoge temperatuur
          toepassingen. Ze zijn essentieel in industrieën zoals olie en gas,
          petrochemie, raffinaderijen, zware engineering, automobiel, thermische
          centrales, lucht- en ruimtevaart, hydraulica en algemene mechanische
          systemen. Omdat naadloze buizen geen lasnaad hebben, bieden ze grotere
          sterkte, uniformiteit en drukbestendigheid in vergelijking met gelaste
          buizen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Om ervoor te zorgen dat fabrikanten consistente productiekwaliteit
          volgen en veilige, defectvrije producten leveren aan de Indiase markt,
          heeft de Indiase regering BIS Certificering verplicht gesteld voor
          naadloze buizen en buizen onder IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze uitgebreide pagina legt het volledige proces uit voor het
          verkrijgen van een BIS Licentie, inclusief documentatie, verplichte
          testen, kwaliteitsnalevingsvereisten, kosten, tijdlijnen, technische
          uitdagingen, voordelen, straffen en industrie toepasbaarheid —
          geschreven in een uitgebreid, zeer gedetailleerd en SEO-rijk formaat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificering voor Naadloze Buizen en Buizen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Een BIS Certificaat is een officiële goedkeuring uitgegeven door het
          Bureau of Indian Standards, die bevestigt dat de fabrikant naadloze
          buizen/buizen produceert volgens de specificaties gedefinieerd onder
          IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Naadloze buizen moeten strenge testen ondergaan met betrekking tot:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Drukweerstand</li>
          <li>Trekkracht</li>
          <li>Slagvastheid</li>
          <li>Buigbaarheid</li>
          <li>Chemische samenstelling</li>
          <li>Dimensionele nauwkeurigheid</li>
          <li>Niet-destructieve evaluaties</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alleen fabrikanten die aan deze prestatievereisten voldoen, ontvangen
          het ISI Merk, waardoor ze legaal naadloze buizen kunnen produceren,
          importeren of verkopen in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Belangrijkste Doelstellingen van BIS Certificering
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Voorkomen dat ondermaatse of gevaarlijke leidingsystemen de
            industriële toeleveringsketens binnendringen
          </li>
          <li>Zorgen voor consistente en betrouwbare productiekwaliteit</li>
          <li>
            Industrieën beschermen die afhankelijk zijn van hoge druk vloeistof-
            of gastransmissie
          </li>
          <li>Nationale veiligheids- en kwaliteitsnormen handhaven</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Begrijpen van IS 17875:2022 — De Indiase Norm voor Naadloze Buizen en
          Buizen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17875:2022 specificeert de kwaliteits-, test-, productie- en
          prestatievereisten voor naadloze stalen buizen en buizen bedoeld voor
          algemene service.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Reikwijdte van BIS Licentie voor Naadloze Buizen en Buizen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Deze norm dekt de vereisten voor naadloze
          roestvrijstalen buizen en buizen voor algemene diensten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Deze norm specificeert geen vereisten voor
          naadloze roestvrijstalen buizen en buizen bedoeld voor verschillende
          doeleinden, die worden gedekt door afzonderlijke Indiase Normen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Toepassingen Gedekt onder IS 17875:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Olie- en gaspijpleidingen</li>
          <li>Hoge temperatuur vloeistofservice</li>
          <li>Ketelbuizen</li>
          <li>Chemische verwerkingsfabrieken</li>
          <li>Hydraulische en pneumatische systemen</li>
          <li>Warmtewisselaars</li>
          <li>Structurele toepassingen</li>
          <li>Automobielcomponenten</li>
          <li>Stoomtoepassingen</li>
          <li>Hoge druk industriële pijpleidingen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Belangrijkste Kwaliteitsparameters in IS 17875:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. Chemische Samenstellingsvereisten:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Specificeert limieten voor koolstof, mangaan, chroom, nikkel,
          molybdeen, zwavel, fosfor, enz.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. Mechanische Eigenschappen:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Trekkracht</li>
          <li>Vloeigrens</li>
          <li>Hardheid</li>
          <li>Vervormbaarheid</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. Dimensionele Toleranties:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Buitendiameter</li>
          <li>Wanddikte</li>
          <li>Lengtetoleranties</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. Oppervlaktecondities:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Buizen moeten vrij zijn van scheuren, laminaties, naden, krassen of
          enige schadelijke defecten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. Hydrostatische Test:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Zorgt ervoor dat buizen interne druk kunnen weerstaan zonder lekkage.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. Niet-Destructieve Test (NDT):</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Omvat wervelstroom-, ultrasone testen of magnetische deeltjestesten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Volledig BIS Certificeringsproces voor Naadloze Buizen (IS 17875:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS certificeringsproces voor naadloze buizen is technischer en
          gedetailleerder dan de meeste andere producten omdat de productie- en
          testvereisten uitgebreid zijn. Hieronder volgt een zeer gedetailleerde
          stap-voor-stap uitleg.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          STAP 1 — Bepaal Toepasbaarheid en Productcategorisering
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De fabrikant moet:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Alle gebruikte staalsoorten identificeren</li>
          <li>De afmetingen en diktebereiken bepalen</li>
          <li>
            Bevestigen of alle varianten binnen het bereik van IS 17875 vallen
          </li>
          <li>Productclassificatie voorbereiden voor BIS testen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Een enkele BIS licentie kan meerdere maten en soorten dekken als ze
          dezelfde productiefaciliteit en proces delen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          STAP 2 — Bereid Documentatie voor en Dien Online BIS Aanvraag in
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De fabrikant moet een aanvraag indienen op het Manak Online BIS
          Portaal.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Informatie omvat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrieksgegevens en lay-out</li>
          <li>Productiecapaciteit en processen</li>
          <li>Oven- en warmtebehandelingsgegevens</li>
          <li>Wals-, doorboor- en trektechnologie</li>
          <li>Kwaliteitscontrolesystemen</li>
          <li>Documentatie voor grondstofbronnen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Onjuiste indiening is een van de meest voorkomende oorzaken van BIS
          aanvraagafwijzing.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          STAP 3 — Kostenbetaling
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De kosten omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagkosten</li>
          <li>Verwerkingskosten</li>
          <li>Laboratoriumtestkosten</li>
          <li>Inspectie- en reiskosten</li>
          <li>Merkkosten gebaseerd op productievolume</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          STAP 4 — Monsterselectie en BIS Laboratoriumtesten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Naadloze buizen ondergaan uitgebreide mechanische en chemische testen.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dit is het meest tijdrovende en meest technische deel van BIS
          certificering.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Chemische Samenstellingstest</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Uitgevoerd met:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Optische emissiespectroscopie</li>
          <li>Natte chemische methoden</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Zorgt voor de exacte chemische samenstelling volgens IS 17875.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Mechanische Test</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Trektest</strong> — Evalueert ultieme trekkracht, vloeipunt
            en rek.
          </li>
          <li>
            <strong>Hardheidstest</strong> — Bevestigt materiaalsterkte.
          </li>
          <li>
            <strong>Platdruktest</strong> — Test vervormbaarheid en lasbaarheid
            (ook al is het naadloos, platdrukken controleert
            materiaalintegriteit).
          </li>
          <li>
            <strong>Uitzet- / Flens Test</strong> — Zorgt voor vervormbaarheid
            zonder scheuren.
          </li>
          <li>
            <strong>Slagtest (Charpy)</strong> — Evalueert prestaties bij lage
            temperaturen.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Hydrostatische Test</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Buizen worden onderworpen aan hoge interne druk om te zorgen dat er
          geen lekkage of vervorming optreedt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – Niet-Destructieve Test</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Verplicht voor het detecteren van interne gebreken.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Methoden omvatten:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ultrasoon Inspectie</li>
          <li>Wervelstroomonderzoek</li>
          <li>Magnetische Deeltjes Inspectie (MPI)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Visuele en Dimensionele Inspectie</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Evalueert:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Oppervlakteafwerking</li>
          <li>Rechtheid</li>
          <li>Ovaliteit</li>
          <li>Diktetolerantie</li>
          <li>Diameternauwkeurigheid</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Metallurgisch Onderzoek</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Microstructuuranalyse bevestigt korrelstructuur, effectiviteit van
          warmtebehandeling en materiaalstabiliteit.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          STAP 5 — BIS Fabrieksinspectie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Zodra testresultaten succesvol zijn, bezoeken BIS functionarissen de
          fabriek.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ze inspecteren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Grondstofopslag</li>
          <li>Oven/warmtebehandelingsprocessen</li>
          <li>Doorboormolens, reducers en koudtrekbanken</li>
          <li>Hydrostatische testfaciliteit</li>
          <li>NDT faciliteit</li>
          <li>Laboratoriumapparatuur en kalibratie</li>
          <li>Kwaliteitscontrole logboeken</li>
          <li>Verificatie van productiecapaciteit</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          De fabriek moet volledig voldoen aan het Schema van Testen en
          Inspectie (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          STAP 6 — Verlening van BIS Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Als testen en inspectie voldoen aan BIS vereisten, ontvangt de
          fabrikant:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificaat</li>
          <li>CML nummer</li>
          <li>Autorisatie om ISI Merk te gebruiken op naadloze buizen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS kan aanvragen afwijzen als zelfs één vereiste niet wordt nageleefd
          — waardoor expertbegeleiding uiterst waardevol is.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          STAP 7 — Verplichtingen na Certificering
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fabrikanten moeten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI Merk correct gebruiken op labels, verpakking en buizen</li>
          <li>Interne testen handhaven volgens STI</li>
          <li>Regelmatige BIS toezichtinspecties ondergaan</li>
          <li>Zorgen dat elke batch voldoet aan IS 17875:2022</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Het niet handhaven van naleving kan resulteren in licentieopschorting
          of annulering.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenten Vereist voor BIS Certificering van Naadloze Buizen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          A. Productie- en Productiedocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabriekslicentie</li>
          <li>Lay-outdiagram met machinepositionering</li>
          <li>Kwaliteitscontroleproceshandboek</li>
          <li>Warmtebehandelingsrecords</li>
          <li>Grondstofmolen testcertificaten</li>
          <li>Wals-/doorboorprocesdetails</li>
          <li>Trekbankdetails</li>
          <li>Kalibratiecertificaten voor testapparatuur</li>
          <li>Interne testrapporten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          B. Technische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Materiaallijst</li>
          <li>Chemische graadspecificaties</li>
          <li>Mechanische eigenschappenbladen</li>
          <li>Dimensionele tolerantiegrafieken</li>
          <li>Tekeningen en specificaties van buizen</li>
          <li>Materiaaltraceerbaarheidssysteem documentatie</li>
          <li>Standaard bedrijfsprocedures voor productie</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          C. Juridische en Organisatiedocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Autorisatiebrief</li>
          <li>Merk/merknaam eigendomsdocument</li>
          <li>Identiteits- en adresbewijzen</li>
          <li>Verplichtingen en verklaringen zoals vereist door BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten voor Naadloze Buizen onder IS 17875:2022
        </h2>

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
                  Trekeigenschappen
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
                  Uitzettest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Platdruktest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Korrelgrootte
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lekdichtheidstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vakmanschap, Afwerking, Uiterlijk
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
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
          Veelvoorkomende Uitdagingen in BIS Certificering
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Falen in chemische samenstellingstest</strong>
            <br />
            Komt voor door inconsistente staalsoorten.
          </li>
          <li>
            <strong>Falen van mechanische testen</strong>
            <br />
            Vaak veroorzaakt door onjuiste warmtebehandeling.
          </li>
          <li>
            <strong>NDT afwijzing</strong>
            <br />
            Interne scheuren of insluitsels kunnen monsterfalen veroorzaken.
          </li>
          <li>
            <strong>Onvoldoende kalibratie</strong>
            <br />
            Leidt tot onnauwkeurige testgegevens.
          </li>
          <li>
            <strong>STI niet-naleving</strong>
            <br />
            Onjuiste registratie tijdens inspectie wordt een belangrijke
            afwijzingsreden.
          </li>
          <li>
            <strong>Dimensionele variatie</strong>
            <br />
            Buisdiameter- of dikte-inconsistenties veroorzaken falen.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Naadloze Buizen
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Juridische goedkeuring om te produceren/verkopen in India</li>
          <li>Zorgt voor veiligheid en betrouwbaarheid</li>
          <li>Verbetert merk reputatie</li>
          <li>Essentieel voor overheidsaanbestedingen</li>
          <li>Vereist door PSU en particuliere industrieën</li>
          <li>Beschermt consumenten tegen ondermaatse producten</li>
          <li>Verhoogt exportconcurrentievermogen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Straffen voor Niet-Naleving
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Onder de BIS Wet resulteert de verkoop van niet-gecertificeerde
          naadloze buizen in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productinbeslagname</li>
          <li>Zware boetes</li>
          <li>Productiestop</li>
          <li>Importbeperkingen</li>
          <li>Merk blacklisting</li>
          <li>Strafrechtelijke vervolging</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie Moet BIS Certificering Krijgen?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Buitenlandse fabrikanten die naar India exporteren</li>
          <li>Handelaren (merkeigenaren)</li>
          <li>OEM en engineeringbedrijven</li>
          <li>Importeurs en grossiers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke productie-eenheid moet een afzonderlijke licentie verkrijgen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Certificaat voor Naadloze Buizen en Buizen onder IS 17875:2022
          is een kritieke regelgevingsvereiste die ervoor zorgt dat
          hoge-drukservicebuizen voldoen aan de strenge veiligheids- en
          kwaliteitsnormen van India. Van chemische samenstelling tot
          geavanceerde niet-destructieve testen, BIS zorgt ervoor dat elke
          gecertificeerde buis duurzaam, defectvrij en in staat is om te
          presteren onder veeleisende industriële omstandigheden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Met professionele begeleiding kunnen fabrikanten het
          certificeringstraject stroomlijnen, vertragingen minimaliseren en
          soepel naleving bereiken.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde Vragen — Naadloze Buizen BIS Certificering (Uitgebreid en
          SEO-Rijk)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Waarom is BIS Certificering verplicht voor naadloze buizen?
              </strong>
              <br />
              Omdat naadloze buizen worden gebruikt in hoge druk en
              veiligheidskritieke toepassingen. Overheidsregelgeving zorgt
              ervoor dat alleen hoogwaardige buizen de Indiase markt betreden.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Welke norm is van toepassing op naadloze buizen?
              </strong>
              <br />
              IS 17875:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Hoe lang duurt het certificeringsproces?</strong>
              <br />
              Meestal 40-60 dagen voor Indiase Fabrikant en ongeveer 120 dagen
              voor buitenlandse fabrikant, afhankelijk van testbelasting en
              inspectieplanning.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Welke testen zijn nodig?</strong>
              <br />
              Chemische analyse, trektest, hardheid, hydrostatisch, NDT,
              platdrukken, uitzetten en dimensionele controles.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Kunnen buitenlandse bedrijven een aanvraag indienen voor BIS
                certificering?
              </strong>
              <br />
              Ja, via het FMCS-schema.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Wat als het product faalt bij testen?</strong>
              <br />
              Het moet worden gecorrigeerd en opnieuw getest; BIS zal de
              licentie niet afgeven totdat volledige naleving is bereikt.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Welke documenten zijn vereist?</strong>
              <br />
              Fabriekslicentie, machinelijst, testapparatuur, tekeningen,
              kwaliteitscontrole documenten, grondstofcertificaten, enz.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Is ISI-markering verplicht?</strong>
              <br />
              Ja. Het is illegaal om naadloze buizen te verkopen zonder het ISI
              merk te tonen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Zijn meerdere soorten toegestaan in één licentie?
              </strong>
              <br />
              Ja, indien geproduceerd met dezelfde faciliteit en proces (onder
              voorbehoud van BIS goedkeuring).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Hoe lang is de BIS licentie geldig?</strong>
              <br />
              1-2 jaar, onbeperkt verlengbaar.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="BIS Certificaat voor Naadloze Buizen en Buizen - IS 17875:2022 PDF"
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
