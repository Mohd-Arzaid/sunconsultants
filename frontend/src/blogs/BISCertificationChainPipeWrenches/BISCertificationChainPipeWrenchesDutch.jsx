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

const BISCertificationChainPipeWrenchesDutch = () => {
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

export default BISCertificationChainPipeWrenchesDutch;

const MetaTags = () => {
  const title =
    "BIS Certificaat voor Ketting Pijpsleutels | IS 4123:1982 BIS Licentie";
  const ogTitle =
    "BIS Certificering voor Ketting Pijpsleutels - IS 4123:1982 Gids";
  const twitterTitle = "BIS Licentie voor Ketting Pijpsleutels | IS 4123:1982";
  const metaDescription =
    "Verkrijg BIS Certificaat voor Ketting Pijpsleutels onder IS 4123:1982. Proces, documenten, testen, kosten en tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor Ketting Pijpsleutels volgens IS 4123:1982. Ken het proces, kosten, documenten, testen en BIS licentie voordelen.";
  const twitterDescription =
    "Vraag BIS Certificaat aan voor Ketting Pijpsleutels onder IS 4123:1982. Leer BIS proces, documenten, testen, kosten en tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Ketting Pijpsleutels, BIS Licentie voor Ketting Pijpsleutels, IS 4123:1982, BIS Certificering voor Ketting Pijpsleutels";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ketting-pijpsleutels-is-4123";
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
                    BIS Certificaat voor Ketting Pijpsleutels – IS 4123:1982
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
          BIS Certificering Ketting Pijpsleutels – Volledige Gids voor IS 4123:1982
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforChainPipeWrenches.png"
            title="BIS Licentie voor Ketting Pijpsleutels"
            alt="BIS Certificaat voor Ketting Pijpsleutels - IS 4123:1982 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ketting Pijpsleutels zijn gespecialiseerde zware handgereedschappen die worden gebruikt voor het grijpen, aandraaien en losdraaien van pijpen met grote diameter, ronde fittingen en cilindrische componenten waar conventionele pijpsleutels niet effectief zijn. Deze gereedschappen worden uitgebreid gebruikt in olie- en gaspijpleidingen, raffinaderijen, elektriciteitscentrales, petrochemische eenheden, scheepswerven, watervoorzieningsprojecten, zware technische werkplaatsen en infrastructuurbouwplaatsen. Het grijpmechanisme vertrouwt op een geharde ketting die om de pijp wikkelt, waardoor uniforme belastingverdeling en hoge koppeltoepassing mogelijk is.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Omdat ketting pijpsleutels worden gebruikt in hoge-stress, veiligheidskritische operaties, kan elk defect in materiaalkwaliteit, kettingsterkte, handvatontwerp of vergrendelmechanisme resulteren in slippen, plotselinge vrijgave, gereedschapsfalen, ernstige verwondingen, apparatuurschade en kostbare stilstand. Om dergelijke risico's te voorkomen en om kwaliteit te standaardiseren op de markt, verplicht de Indiase overheid naleving van Indiase Normen voor deze gereedschappen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het verkrijgen van een BIS Certificaat voor Ketting Pijpsleutels onder IS 4123:1982 is daarom een verplichte wettelijke vereiste voor fabrikanten en importeurs die ketting pijpsleutels in India verkopen. Een geldig BIS Certificering voor Ketting Pijpsleutels bevestigt dat het product is getest en goedgekeurd voor sterkte, grijpprestaties, maatnauwkeurigheid en algehele veiligheid in overeenstemming met Indiase Normen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificering?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering is een productconformiteits- en kwaliteitsborgingssysteem beheerd door het Bureau of Indian Standards, de nationale autoriteit verantwoordelijk voor standaardisatie, testen en certificering van producten in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificaat Betekenis
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De BIS Certificaat betekenis verwijst naar een officiële goedkeuring uitgegeven door BIS die bevestigt dat een product voldoet aan de relevante Indiase Norm (IS) en wordt vervaardigd onder een gecontroleerd kwaliteitssysteem. Deze certificering staat de fabrikant toe om het ISI Merk op het gecertificeerde product te gebruiken.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS certificering bestaat om:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gebruikers te beschermen tegen onveilige en ondermaatse producten</li>
          <li>Consistente kwaliteit te waarborgen over fabrikanten</li>
          <li>Handhaving van kwaliteitscontroleregelingen te ondersteunen</li>
          <li>Vertrouwen in Indiase en geïmporteerde industriële goederen te bevorderen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI Merk Uitleg
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Het BIS certificeringsmerk, algemeen bekend als het ISI Merk, is een zichtbaar symbool van naleving. Voor ketting pijpsleutels verzekert het ISI Merk kopers dat:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Het gereedschap voldoet aan IS 4123:1982</li>
          <li>De ketting en handvat de gespecificeerde belastingen kunnen weerstaan</li>
          <li>Het product wettelijk is goedgekeurd voor verkoop in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Toepasselijke BIS Norm voor Ketting Pijpsleutels
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 4123:1982 – Specificatie voor Ketting Pijpsleutels
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De toepasselijke Indiase Norm voor ketting pijpsleutels is IS 4123:1982, die eisen vastlegt voor ontwerp, materialen, afmetingen, prestaties en testen van ketting pijpsleutels.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bereik van IS 4123:1982
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Deze norm dekt:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ketting pijpsleutels van verschillende maten en capaciteiten</li>
          <li>Handvatconstructie en kettingassemblage</li>
          <li>Kettingmateriaal, schakelafmetingen en sterkte</li>
          <li>Maattoleranties en vakmanschap</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Veiligheid, Prestaties en Testdoel
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 4123:1982 is ontworpen om te zorgen dat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>De ketting een uniforme en veilige grip op pijpen biedt</li>
          <li>De sleutel hoog koppel weerstaat zonder falen</li>
          <li>Handvatten en verbindingen niet vervormen onder belasting</li>
          <li>Het gereedschap veilig presteert in zware industriële toepassingen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wie Moet Voldoen voor BIS Licentie voor Pijpsleutels
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten van ketting pijpsleutels</li>
          <li>Importeurs en distributeurs</li>
          <li>Buitenlandse fabrikanten die aan India leveren</li>
          <li>Handelaren en merken die onder private labels verkopen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering Verplicht is voor Ketting Pijpsleutels
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumenten- en Werkplekveiligheidsrisico's
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Niet-standaard ketting pijpsleutels kunnen leiden tot:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kettingslippen of breuk</li>
          <li>Plotselinge vrijgave van hoge-koppelbelasting</li>
          <li>Ernstige hand-, arm- of lichaamsverwondingen</li>
          <li>Schade aan pijpleidingen en fittingen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Overheids- en Regelgevende Naleving
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Volgens toepasselijke BIS meldingen en kwaliteitscontroleregelingen moeten ketting pijpsleutels die vallen onder IS 4123:1982 BIS certificering verkrijgen vóór verkoop, import of distributie in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Implicaties
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Het verkopen van niet-gecertificeerde ketting pijpsleutels kan resulteren in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inbeslagname van goederen</li>
          <li>Zware financiële boetes</li>
          <li>Opschorting van bedrijfsactiviteiten</li>
          <li>Juridische actie onder de BIS Wet</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Markt- en Merkvoordelen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS Licentie voor Ketting Pijpsleutels stelt bedrijven in staat om:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vertrouwen op te bouwen met industriële kopers en EPC aannemers</li>
          <li>Te kwalificeren voor overheids-, PSU- en infrastructuuraanbestedingen</li>
          <li>Te concurreren met gevestigde binnenlandse en internationale merken</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Stapsgewijs BIS Certificeringsproces voor Ketting Pijpsleutels
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Toepasbaarheid en Normidentificatie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De eerste stap omvat het bevestigen van:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productcategorie: Ketting Pijpsleutels</li>
          <li>Toepasselijke norm: IS 4123:1982</li>
          <li>Maatbereik en capaciteitsvarianten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Aanvraagproces
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fabrikanten moeten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registreren op het BIS portaal</li>
          <li>IS 4123:1982 selecteren in de BIS aanvraag</li>
          <li>Vereiste technische en juridische documenten uploaden</li>
          <li>De toepasselijke overheidskosten betalen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dit proces staat algemeen bekend als BIS online aanvragen of BIS certificaatregistratie.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kosten en Kostenstructuur
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De BIS certificeringskosten omvatten over het algemeen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraag- en verwerkingskosten</li>
          <li>Monstertestkosten</li>
          <li>Fabrieksinspectiekosten</li>
          <li>Licentie- en markeringskosten</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          De totale kosten van BIS certificering zijn afhankelijk van:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aantal sleutelmaten</li>
          <li>Testcomplexiteit</li>
          <li>Productielocatie</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Productmonstertesten (Volgens IS 4123:1982)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Monsters worden getest bij BIS-erkende laboratoria voor:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kettingtreksterkte</li>
          <li>Belasting- en koppelweerstand</li>
          <li>Maatnauwkeurigheid</li>
          <li>Handvatsterkte en vakmanschap</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrieksinspectie en Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS functionaris voert een audit ter plaatse uit om te verifiëren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productie- en assemblageprocessen</li>
          <li>Kettingproductie of inkoopcontrole</li>
          <li>Kwaliteitscontrolesysteem</li>
          <li>Interne test- en inspectiefaciliteiten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Verlening van BIS Licentie en ISI Merk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Na succesvolle testen en inspectie:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS geeft de Bureau of Indian Standards Licentie uit</li>
          <li>De fabrikant is gemachtigd om het ISI Merk op ketting pijpsleutels aan te brengen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certificering Naleving
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Post-certificeringsverplichtingen omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Periodieke surveillanceaudits</li>
          <li>Marktmonstertesten</li>
          <li>Tijdige licentieverlenging</li>
          <li>Continue naleving van IS 4123:1982</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vereiste Documenten voor BIS Certificering
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrieksdocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrieksregistratie of MSME certificaat</li>
          <li>Productieproces stroomschema</li>
          <li>Lijst van machines en testapparatuur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bedrijfsregistratiecertificaat</li>
          <li>GST registratie</li>
          <li>Merkauthorisatie (indien van toepassing)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Producttekeningen en specificaties</li>
          <li>Kettingmateriaal en warmtebehandelingsdetails</li>
          <li>Kwaliteitscontrole- en inspectieplan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Aanvraagdocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS aanvraagformulier</li>
          <li>Testaanvraagdetails</li>
          <li>Verklaringen en toezeggingen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze worden gezamenlijk BIS CERTIFICAAT DOCUMENTEN of BIS CERTIFICERINGSDOCUMENTEN genoemd.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten volgens IS 4123:1982
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Verplichte tests omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kettingtreksterktetest</li>
          <li>Belasting- en koppeltest</li>
          <li>Maatverificatie</li>
          <li>Materiaal- en vakmanschapinspectie</li>
          <li>Functionele grijpprestatietest</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alle tests moeten alleen worden uitgevoerd bij BIS-erkende laboratoria.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende Uitdagingen en Hoe Deze te Vermijden
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Veelvoorkomende Problemen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Falen in kettingsterktetests</li>
          <li>Onjuiste warmtebehandeling van kettingschakels</li>
          <li>Maatnon-conformiteiten</li>
          <li>Onvolledige documentatie</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Oplossingen en Best Practices
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interne voortesten uitvoeren</li>
          <li>Gecertificeerde grondstoffen gebruiken</li>
          <li>Strikte procescontrole handhaven</li>
          <li>Ervaren BIS consultants inschakelen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Fabrikanten en Importeurs
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Voordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Volledige naleving van Indiase regelgeving</li>
          <li>Bescherming tegen boetes en handhavingsacties</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commerciële Voordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hogere acceptatie door industriële kopers</li>
          <li>Geschiktheid voor PSU- en infrastructuurprojecten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Merkvoordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI Merk verhoogt geloofwaardigheid en vertrouwen</li>
          <li>Differentiatie van ongeorganiseerde leveranciers</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Marktuitbreiding
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gemakkelijker toegang tot grote industriële markten</li>
          <li>Verbeterde exportgeloofwaardigheid</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Boetes voor Niet-Naleving
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Niet-naleving kan resulteren in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zware geldboetes</li>
          <li>Inbeslagname van producten</li>
          <li>Annulering van licenties</li>
          <li>Juridische vervolging onder de BIS Wet</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie Heeft BIS Certificering Nodig voor Ketting Pijpsleutels?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Importeurs</li>
          <li>Buitenlandse fabrikanten (met Geautoriseerde Indiase Vertegenwoordiger)</li>
          <li>Handelaren en industriële leveranciers</li>
          <li>E-commerceverkopers die ketting pijpsleutels aanbieden</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom Voor Ons Kiezen voor BIS Certificering Consulting?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Wij bieden end-to-end BIS certificering consultingdiensten, waaronder:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Producttoepasbaarheid en gap-analyse</li>
          <li>Documentvoorbereiding en verificatie</li>
          <li>Coördinatie met BIS-erkende laboratoria</li>
          <li>Fabrieksinspectie en auditondersteuning</li>
          <li>Snellere goedkeuringen met minimale vragen</li>
          <li>Post-certificering naleving en verlengingsondersteuning</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Onze expertise in industrieel handgereedschap en zware apparatuur zorgt voor een soepele, betrouwbare en volledig conforme BIS certificeringsreis.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het verkrijgen van een BIS Certificaat voor Ketting Pijpsleutels onder IS 4123:1982 is een cruciale wettelijke en kwaliteitsvereiste voor het verkopen van deze zware gereedschappen in India. BIS Certificering voor Ketting Pijpsleutels zorgt voor veiligheid, sterkte en betrouwbaarheid, terwijl de BIS Licentie voor Ketting Pijpsleutels merkgeloofwaardigheid en marktacceptatie versterkt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voor fabrikanten, importeurs en verkopers voorkomt tijdige naleving niet alleen boetes, maar ontsluit het ook toegang tot hoogwaardige industriële, infrastructuur- en overheidsprojecten. Met deskundige begeleiding en gestructureerde nalevingsondersteuning wordt het BIS certificeringsproces efficiënt, voorspelbaar en volledig in lijn met Indiase Normen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ's – BIS Certificering voor Ketting Pijpsleutels
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V1. Is BIS certificering verplicht voor ketting pijpsleutels?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, naleving van IS 4123:1982 is verplicht in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V2. Wat is de volledige naam van BIS certificaat?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificaat.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V3. Hoe lang duurt het BIS certificeringsproces?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Meestal 45-60 werkdagen voor Indiase fabrikanten en 90-120 dagen voor buitenlandse fabrikanten.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V4. Wat zijn de BIS certificeringskosten?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Dit hangt af van het productmaatbereik en testomvang.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V5. Kunnen importeurs BIS certificering aanvragen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, met juiste fabrikantautorisatie.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V6. Is het ISI Merk verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, ISI markering is verplicht na certificering.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V7. Kunnen buitenlandse fabrikanten BIS certificering verkrijgen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, via een Geautoriseerde Indiase Vertegenwoordiger.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V8. Welke tests zijn vereist onder IS 4123:1982?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Kettingsterkte, belasting, maatnauwkeurigheid en vakmanschaptests.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V9. Is fabrieksinspectie verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, BIS voert een audit ter plaatse uit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V10. Kunnen meerdere maten onder één licentie worden gedekt?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, onderhevig aan testen en goedkeuring.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V11. Wat gebeurt er als niet-gecertificeerde ketting pijpsleutels worden verkocht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Boetes, inbeslagname en juridische actie kunnen volgen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V12. Is BIS online aanvragen verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, alle aanvragen worden online ingediend.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V13. Zijn verlengingen vereist voor BIS licenties?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, periodieke verlenging is verplicht.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V14. Kunnen consultants goedkeuringsvertragingen verminderen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, professionele consultants helpen fouten te vermijden.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V15. Verbetert BIS certificering kopersvertrouwen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, het verbetert het marktvertrouwen aanzienlijk.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-4123-2024-Sun-Certifications-India.pdf"
            title="BIS Certificaat voor Ketting Pijpsleutels - IS 4123:2024 PDF"
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
