import FaqAuthorDutch from "@/components/common/FaqAuthor/FaqAuthorDutch";
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

const BISCertificationFibreRopesDutch = () => {
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

export default BISCertificationFibreRopesDutch;

const MetaTags = () => {
  const title =
    "BIS Certificaat voor Vezeltouwen - Polyethyleen | IS 8674:2013 BIS Licentie";
  const ogTitle =
    "BIS Certificering voor Vezeltouwen - Polyethyleen - IS 8674:2013 Gids";
  const twitterTitle =
    "BIS Licentie voor Vezeltouwen - Polyethyleen | IS 8674:2013";
  const metaDescription =
    "Krijg BIS Certificaat voor Vezeltouwen - Polyethyleen onder IS 8674:2013. Proces, documenten, testen, kosten en tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor Vezeltouwen - Polyethyleen volgens IS 8674:2013. Ken het proces, kosten, documenten, testen en BIS licentievoordelen.";
  const twitterDescription =
    "Aanvragen BIS Certificaat voor Vezeltouwen - Polyethyleen onder IS 8674:2013. Leer BIS proces, documenten, testen, kosten en tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Vezeltouwen - Polyethyleen, BIS Licentie voor Vezeltouwen - Polyethyleen, IS 8674:2013, BIS Certificering voor Vezeltouwen - Polyethyleen";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/vezeltouwen-polyethyleen-8674";
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
                    BIS Certificaat voor Vezeltouwen – Polyethyleen – IS
                    8674:2013
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
          BIS Certificering Vezeltouwen – Polyethyleen – Volledige Gids voor IS
          8674:2013
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFibreRopesPolyethylene.png"
            title="BIS Licentie voor Vezeltouwen - Polyethyleen"
            alt="BIS Certificaat voor Vezeltouwen - Polyethyleen - IS 8674:2013 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Polyethyleen vezeltouwen worden veel gebruikt in India voor maritieme
          operaties, visserij, havens, landbouw, bouw, logistiek, transport en
          algemene industriële activiteiten. Hun lichte gewicht, hoge
          sterkte-gewichtsverhouding, weerstand tegen vocht, chemicaliën en
          slijtage maken ze ideaal voor veeleisende omgevingen. Wanneer
          vezeltouwen echter bezwijken onder belasting door slechte kwaliteit of
          ondermaatse fabricage, kunnen de gevolgen ernstig zijn—van
          apparatuurschade tot ernstig letsel en zelfs verlies van mensenlevens.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Om veiligheid, uniforme kwaliteit en betrouwbare prestaties te
          waarborgen, heeft de Indiase overheid BIS Certificering voor
          Vezeltouwen – Polyethyleen verplicht gesteld onder IS 8674:2013. Elke
          fabrikant of importeur die polyethyleen vezeltouwen op de Indiase
          markt levert, moet een geldig BIS Certificaat voor Vezeltouwen –
          Polyethyleen verkrijgen. Zonder deze certificering wordt het product
          als niet-conform beschouwd en kan het juridische boetes, inbeslagname
          of verkoopverbod riskeren.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze gedetailleerde productpagina is geschreven voor fabrikanten,
          importeurs, exporteurs, handelaren, distributeurs, maritieme leveranciers,
          infrastructuurcontractanten en e-commercesellers. Het legt het volledige
          kader van BIS Certificering voor Vezeltouwen – Polyethyleen uit,
          inclusief standaardvereisten, testprocedures, documentatie, kosten,
          tijdlijnen en nalevingsverantwoordelijkheden. Als u van plan bent een
          BIS Licentie voor Vezeltouwen – Polyethyleen aan te vragen, helpt deze
          gids u het proces met helderheid en vertrouwen te doorlopen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificering?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering is een systeem voor conformiteitsbeoordeling van
          producten dat wordt beheerd door het Bureau of Indian Standards (BIS),
          de nationale normeninstantie van India. De volledige vorm van BIS is
          Bureau of Indian Standards, opgericht onder de BIS-wet 2016.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Betekenis van BIS Certificaat
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De betekenis van het BIS Certificaat verwijst naar officiële erkenning
          dat een product voldoet aan een specifieke Indiase norm (IS) en
          voldoet aan voorgeschreven vereisten met betrekking tot veiligheid,
          sterkte, duurzaamheid en prestaties. Een BIS-gecertificeerd product
          ondergaat testen in door BIS erkende laboratoria en beoordeling via
          fabrieksinspectie en kwaliteitsaudits.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ISI Merk en BIS Certificeringsmerk
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Producten die onder BIS zijn gecertificeerd, dragen het BIS
          certificeringsmerk, algemeen bekend als het ISI Merk, samen met een
          uniek licentienummer. Het BIS Merk verzekert kopers, inspecteurs en
          toezichthouders dat het product voldoet aan de toepasselijke BIS-normen.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS bestaat
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS bestaat om:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gebruikers te beschermen tegen onveilige en ondermaatse producten</li>
          <li>Consistentie en betrouwbaarheid in de productie te waarborgen</li>
          <li>Overheidsregelgeving door BIS-meldingen af te dwingen</li>
          <li>Vertrouwen, kwaliteit en eerlijke handel op de Indiase markt te bevorderen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Toepasselijke BIS-norm voor Vezeltouwen – Polyethyleen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 8674:2013 – Indiase norm uitgelegd
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          De toepasselijke Indiase norm voor dit product is IS 8674:2013,
          getiteld &quot;Vezeltouwen — Polyethyleen — Specificatie&quot;. Deze
          norm definieert vereisten voor polyethyleen vezeltouwen bestemd voor
          algemeen gebruik en industriële toepassingen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Toepassingsgebied van IS 8674:2013
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De norm omvat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Constructie en classificatie van polyethyleen vezeltouwen</li>
          <li>Grondstofvereisten en vezelkenmerken</li>
          <li>Touwdoorsnede, lineaire dichtheid en toleranties</li>
          <li>Minimale breekbelasting en sterktevereisten</li>
          <li>Markering, etikettering en verpakkingsbepalingen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Veiligheid, prestaties en testdoel
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 8674:2013 beoogt ervoor te zorgen dat polyethyleen vezeltouwen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Consistente trekkracht leveren</li>
          <li>Betrouwbaar presteren onder statische en dynamische belastingen</li>
          <li>Bestand zijn tegen vocht, rotting en blootstelling aan chemicaliën</li>
          <li>Veilig zijn voor hijs-, sleep-, afmeer- en bindwerkzaamheden</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wie moet voldoen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Naleving van IS 8674:2013 is verplicht voor:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten van polyethyleen vezeltouwen</li>
          <li>Importeurs die polyethyleen touwen India binnenbrengen</li>
          <li>Buitenlandse fabrikanten die via Indiase entiteiten verkopen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering verplicht is voor Vezeltouwen – Polyethyleen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Risico&apos;s voor consumenten en werknemers
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Polyethyleen vezeltouwen worden vaak gebruikt bij dragende en
          veiligheidskritische operaties. Ondermaatse touwen kunnen plotseling
          breken, wat leidt tot ongevallen, letsel, apparatuurschade en
          financiële verliezen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Overheidsnaleving
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Onder BIS-meldingen en kwaliteitscontrolevoorschriften moeten
          vezeltouwen die onder IS 8674:2013 vallen, BIS-gecertificeerd zijn
          vóór verkoop, levering of distributie in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Juridische gevolgen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Verkoop van polyethyleen vezeltouwen zonder BIS-certificering kan
          leiden tot:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inbeslagname van goederen</li>
          <li>Geldboetes</li>
          <li>Annulering van contracten en aanbestedingen</li>
          <li>Vervolging onder de BIS-wet 2016</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Markt- en merkvoordelen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Een BIS Certificaat voor Vezeltouwen – Polyethyleen verbetert de
          marktacceptatie, bouwt vertrouwen bij kopers op en maakt deelname aan
          overheids-, PSU-, maritieme en infrastructuurprojecten mogelijk.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Stapsgewijs BIS Certificeringsproces voor Vezeltouwen – Polyethyleen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Toepasselijkheid en normidentificatie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De eerste stap is bevestigen dat het product onder IS 8674:2013 valt,
          inclusief touwconstructie, diameterbereik en beoogde toepassing.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS online aanvraagproces
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fabrikanten moeten de BIS-aanvraag indienen via het BIS online
          aanvraagportaal. De aanvraag omvat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product- en modelgegevens</li>
          <li>Informatie over de productie-eenheid</li>
          <li>Toepasselijke BIS-norm</li>
          <li>Kwaliteitscontrole- en testgegevens</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dit start het BIS certificaatregistratieproces.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vergoedingen en kostestructuur
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De BIS certificeringskosten omvatten doorgaans:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagkosten</li>
          <li>Producttestkosten</li>
          <li>Fabrieksinspectiekosten</li>
          <li>Licentiekosten</li>
          <li>Jaarlijkse markeeringskosten</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          De totale kosten van BIS certificering hangen af van touwvarianten,
          diameterbereiken en testomvang.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Productmonstertesten (gedetailleerde tests volgens norm)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Monsters van polyethyleen vezeltouwen worden getest in door BIS
          erkende laboratoria strikt volgens IS 8674:2013.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrieksinspectie en audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS-functionarissen voeren een fabrieksaudit uit om te verifiëren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productieproces en -controles</li>
          <li>Grondstoffinspectieprocedures</li>
          <li>Kwaliteitscontroles tijdens het proces</li>
          <li>Test- en kalibratiefaciliteiten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Verlening van BIS Licentie en ISI Merk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Na succesvolle tests en inspectie verleent BIS de Bureau of Indian
          Standards Licentie, waardoor gebruik van het ISI Merk op gecertificeerde
          polyethyleen vezeltouwen is toegestaan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Naleving na certificering
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Na certificering moeten licentiehouders:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Consistente kwaliteit handhaven</li>
          <li>Routinematige tests uitvoeren</li>
          <li>Toezichtinspecties toestaan</li>
          <li>De BIS-licentie periodiek vernieuwen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Toepassingsgebied van BIS Licentie volgens IS 8674:2013
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De BIS-licentie is van toepassing op polyethyleen vezeltouwen bestemd voor:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maritieme en visserijoperaties</li>
          <li>Havens, scheepvaart en logistiek</li>
          <li>Landbouw en algemeen nut</li>
          <li>Industriële en commerciële toepassingen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Het toepassingsgebied is strikt beperkt tot touwen die voldoen aan de
          specificaties van IS 8674:2013.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vereiste documenten voor BIS Certificering
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrikantdocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrieksregistratiecertificaat</li>
          <li>Stroomschema productieproces</li>
          <li>Lijst van machines en testapparatuur</li>
          <li>Kwaliteitscontroleplan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Oprichtingsakte van het bedrijf</li>
          <li>GST-registratie</li>
          <li>Handelsmerkmachtiging (indien van toepassing)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productspecificaties en tekeningen</li>
          <li>Touwconstructie en materiaalgegevens</li>
          <li>Diameter- en breekbelastingsgegevens</li>
          <li>Interne testprocedures</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS aanvraagdocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS aanvraagformulier</li>
          <li>Testrapporten van door BIS erkende laboratoria</li>
          <li>Verklaringen en bevestigingen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Deze vormen het volledige pakket BIS CERTIFICERINGSDOCUMENTEN.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten volgens IS 8674:2013
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Verplichte tests omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diameter- en lineaire dichtheidsmeting</li>
          <li>Breekbelasting- en treksterktetest</li>
          <li>Rektest</li>
          <li>Constructie- en legverificatie</li>
          <li>Visuele inspectie en afwerkingskwaliteit</li>
          <li>Naleving van markering en etikettering</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Alle tests moeten uitsluitend worden uitgevoerd in door BIS erkende laboratoria.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende uitdagingen en hoe ze te vermijden
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inconsistente kwaliteit van grondstoffen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Oplossing: Gebruik polyethyleenvezels van gecontroleerde kwaliteit en
          goedgekeurde leveranciers.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Testfalen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Oplossing: Voer interne voortesten uit en verbeter de procesconsistentie.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentatiefouten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Oplossing: Bereid nauwkeurige en volledige documenten voor vóór
          indiening bij BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor fabrikanten en importeurs
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische voordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Naleving van Indiase regelgeving</li>
          <li>Verminderd risico op boetes en inbeslagnames</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commerciële voordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>In aanmerking komen voor overheids-, PSU- en maritieme contracten</li>
          <li>Verbeterde acceptatie door industriële kopers</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Merkvoordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vertrouwen via het BIS certificeringsmerk</li>
          <li>Verbeterde merkgeloofwaardigheid</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Marktuitbreiding
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Toegang tot gereguleerde binnenlandse en exportgerichte markten</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Boetes voor niet-naleving
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het niet voldoen aan BIS-vereisten kan leiden tot:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zware geldboetes</li>
          <li>Inbeslagname van niet-conforme producten</li>
          <li>Import- en verkoopbeperkingen</li>
          <li>Juridische vervolging</li>
          <li>Permanente marktverboden</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie heeft BIS Certificering nodig voor Vezeltouwen – Polyethyleen?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Importeurs</li>
          <li>Buitenlandse fabrikanten</li>
          <li>Handelaren en distributeurs</li>
          <li>E-commercesellers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke partij die polyethyleen vezeltouwen op de Indiase markt brengt,
          moet zorgen voor BIS-naleving.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het verkrijgen van een BIS Certificaat voor Vezeltouwen – Polyethyleen
          onder IS 8674:2013 is een juridische noodzaak en een strategisch
          voordeel voor bedrijven die in India actief zijn. BIS Certificering
          voor Vezeltouwen – Polyethyleen waarborgt productveiligheid, sterkte
          en betrouwbaarheid en beschermt gebruikers en versterkt de
          merkgeloofwaardigheid.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten en importeurs die een geldige BIS Licentie voor
          Vezeltouwen – Polyethyleen verkrijgen, kunnen met vertrouwen
          toegang krijgen tot gereguleerde markten, deelnemen aan
          hoogwaardige contracten en juridische risico&apos;s vermijden. Met
          goede voorbereiding, nauwkeurige documentatie en deskundige
          begeleiding wordt het BIS certificeringsproces soepel, efficiënt en
          zeer gunstig voor langetermijngroei.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde vragen – BIS Certificering voor Vezeltouwen – Polyethyleen
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V1. Is BIS certificering verplicht voor polyethyleen vezeltouwen in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, BIS certificering onder IS 8674:2013 is verplicht.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V2. Wat is de volledige vorm van BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V3. Kunnen polyethyleen touwen zonder BIS certificering worden verkocht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nee, niet-gecertificeerde touwen mogen niet legaal in India worden verkocht.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V4. Wat zijn de kosten van het BIS certificaat?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Het hangt af van productvarianten en testomvang.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V5. Hoe lang duurt het BIS certificeringsproces?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Doorgaans 6–10 weken.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V6. Is het ISI merk verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, ISI-markering is verplicht na certificering.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V7. Kunnen meerdere touwdiameters onder één licentie vallen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, onder voorbehoud van naleving en testdekking.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V8. Is fabrieksinspectie verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, BIS voert fabrieksaudits uit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V9. Kunnen startups BIS certificering aanvragen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, als de productiefaciliteiten voldoen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V10. Moet BIS certificering worden vernieuwd?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, periodieke vernieuwing is verplicht.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V11. Wat gebeurt er als de producttest faalt?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Corrigerende maatregelen en hertesten zijn vereist.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V12. Zijn door BIS erkende laboratoria verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, alleen door BIS goedgekeurde laboratoria worden geaccepteerd.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V13. Kunnen buitenlandse fabrikanten direct aanvragen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, via een geautoriseerde Indiase vertegenwoordiger.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V14. Vallen vistouwen onder deze norm?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, als ze voldoen aan IS 8674:2013.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V15. Wat betekent BIS certificering voor kopers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Het waarborgt veiligheid, sterkte en consistente kwaliteit.
            </p>
          </div>
        </div>

        <ManyUsersAlsoRead />
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
              BIS Merk (ISI Licentie) voor buitenlandse fabrikanten
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
              ISI MERK (BIS) voor Indiase fabrikanten
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
