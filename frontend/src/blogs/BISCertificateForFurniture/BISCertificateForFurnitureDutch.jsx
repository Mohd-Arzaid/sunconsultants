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

const BISCertificateForFurnitureDutch = () => {
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

export default BISCertificateForFurnitureDutch;

const MetaTags = () => {
  const title =
    "BIS Certificaat voor Meubels in India | BIS Certificering, Licentie & Proces Gids";
  const ogTitle =
    "BIS Certificaat voor Meubels in India - Volledige BIS Certificeringsgids";
  const twitterTitle =
    "BIS Certificaat voor Meubels | Volledige BIS Certificeringsgids van Indiaas BIS";
  const metaDescription =
    "BIS Certificaat voor Meubels in India - volledige gids over BIS Certificering, BIS Licentie, kosten, documenten, normen, proces, online aanvraag & BIS Markering voor meubelfabrikanten.";
  const ogDescription =
    "Zoekt u BIS Certificering voor Meubels in India? Leer over BIS Licentie, BIS Markering, toepasselijke normen, certificeringsproces, kosten, documenten & nalevingsvereisten in detail.";
  const twitterDescription =
    "Volledige gids voor BIS Certificaat voor Meubels in India - BIS Certificeringsproces, kosten, documenten, BIS Markering, normen & online aanvraag uitgelegd.";
  const metaKeywords =
    "BIS Certificaat voor Meubels, BIS Certificering voor Meubels, BIS Licentie voor Meubels, Wat is BIS, Indiaas BIS";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/meubels";
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
                    BIS Certificaat voor Meubels in India – Volledige
                    Gedetailleerde Gids
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
          BIS Certificaat voor Meubels in India – Volledige Gedetailleerde Gids
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="BIS Licentie voor Meubels"
            alt="BIS Certificaat voor Meubels in India - Volledige BIS Certificeringsgids"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Introductie: BIS Certificering en de Indiase Meubelindustrie
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          In India worden productkwaliteit, veiligheid en standaardisatie
          beheerd door een centrale statutaire autoriteit genaamd het Bureau of
          Indian Standards (BIS). BIS is de nationale normenorganisatie van
          India, opgericht onder de BIS-wet om ervoor te zorgen dat producten
          die op de Indiase markt worden verkocht, voldoen aan gedefinieerde
          veiligheids-, kwaliteits- en prestatie- benchmarks.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Volledige Vorm staat voor Bureau of Indian Standards. Het
          functioneert onder het Ministerie van Consumentenzaken, Voedsel &
          Openbare Distributie, Regering van India. BIS speelt een cruciale rol
          bij het beschermen van consumenten- belangen terwijl fabrikanten
          worden ondersteund door een transparant standaardisatie- en
          certificeringsecosysteem.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          De Indiase meubelindustrie heeft een snelle groei doorgemaakt door:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Verstedelijking</li>
          <li>Uitbreiding van residentiële en commerciële infrastructuur</li>
          <li>
            Groei in horeca, onderwijs, gezondheidszorg en co-living sectoren
          </li>
          <li>
            Toenemend consumentenbewustzijn over productveiligheid en
            duurzaamheid
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Meubels worden niet langer beschouwd als een puur esthetisch product.
          Het is direct gekoppeld aan gebruikersveiligheid, ergonomie,
          structurele stabiliteit, brand- weerstand en langetermijnduurzaamheid.
          Incidenten met instortende bedden, onveilige stapelbedden, instabiele
          stoelen of ondermaatse opslageenheden hebben zorgen gewekt bij
          regelgevers en consumenten.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Om deze risico&apos;s aan te pakken, is BIS Certificering voor Meubels
          een kritische nalevingsvereiste geworden. BIS zorgt ervoor dat
          meubelproducten voldoen aan Indiase Normen (IS) met betrekking tot:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structurele sterkte</li>
          <li>Draagvermogen</li>
          <li>Materiaalkwaliteit</li>
          <li>Ontwerpveiligheid</li>
          <li>Prestaties onder gebruiksomstandigheden</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Voor fabrikanten, importeurs, exporteurs, MKB&apos;s, startups en
          meubelmerkeigenaren is het verkrijgen van een BIS Certificaat voor
          Meubels niet langer alleen een regelgevingsformaliteit—het is een
          marktbehoefte.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering voor Meubels Belangrijk is
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Het zorgt voor wettelijke naleving onder Indiase regelgeving</li>
          <li>Het versterkt consumentenvertrouwen en merkgeloofwaardigheid</li>
          <li>
            Het maakt onbeperkte verkoop en distributie in heel India mogelijk
          </li>
          <li>Het minimaliseert productaansprakelijkheidsrisico&apos;s</li>
          <li>Het verbetert exportbereidheid en wereldwijde acceptatie</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Deze uitgebreide gids is ontworpen om de meest gezaghebbende en
          gedetailleerde bron over BIS Certificering voor Meubels in India te
          zijn. Of u nu een eerste keer fabrikant bent of een gevestigd
          meubelmerk, deze gids beantwoordt elke mogelijke vraag met betrekking
          tot BIS Licentie voor Meubels, BIS Registratie voor Meubels,
          toepasselijke normen, proces, kosten, documenten, tijdlijnen en
          post-certificering naleving.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificaat voor Meubels?
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificaat Betekenis
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Een BIS Certificaat voor Meubels is een officiële goedkeuring verleend
          door het Bureau of Indian Standards die bevestigt dat een specifiek
          meubel- product voldoet aan de relevante Indiase Norm (IS).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wat is BIS Markering?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De BIS Markering, algemeen bekend als de ISI Markering, is een
          standaard conformiteit- markering die op gecertificeerde producten
          verschijnt. Het betekent dat het meubel heeft:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Laboratoriumtesten doorstaan</li>
          <li>Fabrieksinspectie doorstaan</li>
          <li>Aan alle standaardvereisten voldaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Logo Uitleg
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Logo vertegenwoordigt het gezag van BIS als India&apos;s
          nationale normenorganisatie. Wanneer gebruikt met de ISI Markering op
          meubelproducten, geeft het kopers de zekerheid dat het product voldoet
          aan BIS Normen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificaat India – Juridische Status
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          In India kan het produceren, importeren of verkopen van
          meubelproducten die onder gemelde normen vallen zonder BIS
          Certificering leiden tot:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inbeslagname van goederen</li>
          <li>Zware geldboetes</li>
          <li>Vervolging onder BIS-wet</li>
          <li>Verbod op verkoop of import</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Daarom heeft een BIS Certificaat voor Meubels in India een sterke
          juridische betekenis.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering Belangrijk is voor Meubelproducten
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering voor Meubels is cruciaal om meerdere redenen:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Veiligheid & Structurele Integriteit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Meubelfalen kan verwondingen of dodelijke slachtoffers veroorzaken.
          BIS Normen evalueren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Draagvermogen</li>
          <li>Stabiliteit tegen kantelen</li>
          <li>Verbindingssterkte</li>
          <li>Materiaalprestaties</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Kwaliteit & Duurzaamheid
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Gecertificeerde meubelproducten zorgen voor:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lange levensduur</li>
          <li>Weerstand tegen slijtage</li>
          <li>Uniforme prestaties</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Consumentenvertrouwen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De BIS Certificeringsmarkering bouwt direct vertrouwen op bij kopers,
          instellingen en bulkinkopers.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Markttoegang
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Veel overheidsaanbestedingen, institutionele kopers en grote bedrijven
          vereisen BIS-gecertificeerde meubels.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Juridische Naleving
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Het verkopen van niet-gecertificeerde meubels onder verplichte
          BIS-normen kan boetes en juridische actie aantrekken.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Meubelproducten Gedekt Onder BIS Certificering
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Meubels is een brede algemene categorie onder BIS, die meerdere
          producttypen omvat, elk beheerd door verschillende Indiase Normen (IS
          Nummers).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Belangrijkste Meubelcategorieën Gedekt:
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. Werkstoelen
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Gebruikt in kantoren, fabrieken en commerciële ruimtes. Normen richten
          zich op ergonomie, stabiliteit en belastingsprestaties.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. Algemene Doel Stoelen en Krukken
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Gebruikt in huizen, scholen en openbare ruimtes. BIS evalueert
          structurele veiligheid en materiaalsterkte.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. Tafels en Bureaus
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Inclusief kantoorbureaus, studietafels, werkstations. Normen testen
          belasting- capaciteit en oppervlakteduurzaamheid.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. Opslageenheden
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kasten, kasten, lockers, planken. Nadruk op stabiliteit, scherpe
          randen en veilige toegang.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. Bedden
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Enkele bedden, tweepersoonsbedden, opklapbedden. BIS controleert frame
          sterkte en langetermijnprestaties.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. Stapelbedden
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Zeer gereguleerd vanwege veiligheidsrisico&apos;s. Focus op leuningen,
          ladder- veiligheid en valpreventie.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. Gestoffeerde Composieten voor Niet-Domestieke Meubels
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Gebruikt in kantoren, hotels, auditoria. Normen omvatten brand-
          weerstand en duurzaamheidstests.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Andere Meubelproducten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Schoolmeubels</li>
          <li>Institutionele zitplaatsen</li>
          <li>Ziekenhuismeubels</li>
          <li>Modulaire meubels</li>
          <li>Metalen & houten meubelsystemen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Elke productcategorie heeft zijn eigen toepasselijke IS Nummer, apart
          gemeld door BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Normen Toepasbaar op Meubels
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wat zijn BIS Normen?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Normen zijn technische specificaties gepubliceerd door BIS om te
          definiëren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Materiaalvereisten</li>
          <li>Prestatieparameters</li>
          <li>Testmethoden</li>
          <li>Markeringrichtlijnen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Betekenis van IS Nummers
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Een IS Nummer (Indian Standard Number) identificeert uniek een norm
          toepasbaar op een product.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Melding Proces
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS geeft officiële BIS Meldingen uit die bepaalde normen verplicht
          maken. Eenmaal gemeld:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Naleving wordt verplicht</li>
          <li>Niet-gecertificeerde producten zijn illegaal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Hoe de Juiste BIS Norm te Identificeren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten moeten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productcategorie identificeren</li>
          <li>Toepasselijke IS-omvang bestuderen</li>
          <li>Normtoepasbaarheid bevestigen</li>
          <li>Verkeerde normselectie vermijden (een veelvoorkomende fout)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Soorten BIS Certificering Toepasbaar voor Meubels
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Licentie onder ISI Schema
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Meubelproducten vallen over het algemeen onder het ISI Certificering-
          Schema, dat omvat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Producttesten</li>
          <li>Fabrieksinspectie</li>
          <li>Toezichtscontroles</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Registratie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Registratie is voornamelijk voor elektronica en IT-producten.
          Meubels vereisen meestal BIS Licentie, niet Registratie.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificeringsproces voor Meubels in India
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 1: Voorbereiding voor Aanvraag
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Toepasselijke IS Norm identificeren</li>
          <li>Productontwerp naleving beoordelen</li>
          <li>Technische documentatie voorbereiden</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 2: BIS Aanvraag
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dien BIS Aanvraag in met:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productdetails</li>
          <li>Productiedetails</li>
          <li>Normreferentie</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 3: BIS Online Aanvragen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Aanvraag wordt ingediend via BIS online portaal.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 4: Producttesten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Monsters getest in BIS-erkende laboratoria.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 5: Fabrieksinspectie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS-functionarissen verifiëren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productieproces</li>
          <li>Kwaliteitscontrole</li>
          <li>Testfaciliteiten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 6: Verlening van BIS Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bij naleving verleent BIS de licentie.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 7: Gebruik van BIS Certificeringsmarkering
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikant kan BIS Markering / ISI Markering aanbrengen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten voor Meubels
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Testen is een verplicht onderdeel van het BIS registratieproces.
          Meubels ondergaan rigoureuze tests om veiligheid en duurzaamheid te
          waarborgen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Verplichte Tests voor Meubels:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structurele Belastingstest</li>
          <li>Stabiliteitstest</li>
          <li>Leuningsterktetest</li>
          <li>Impacttest</li>
          <li>Beklemming Gevaartest</li>
          <li>Ladder Sterkte & Hoektest</li>
          <li>Materiaalveiligheidstest</li>
          <li>Randradius & Scherptetest</li>
          <li>Matrasondersteuningstest</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tests moeten alleen worden uitgevoerd in een BIS-erkend laboratorium.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenten Vereist voor BIS Certificering voor Meubels
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Belangrijke Documenten Inclusief:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrieksregistratiebewijs</li>
          <li>Producttekeningen & specificaties</li>
          <li>Grondstofdetails</li>
          <li>Testrapporten</li>
          <li>Kwaliteitscontrole records</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Veelvoorkomende Documentatiefouten:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Onjuiste normreferentie</li>
          <li>Onvolledige testgegevens</li>
          <li>Mismatch in productomvang</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kosten van BIS Certificering voor Meubels
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificaat Kostencomponenten:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Overheidsaanvraagkosten</li>
          <li>Testkosten</li>
          <li>Inspectiekosten</li>
          <li>Licentiekosten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificeringskostenfactoren:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productcomplexiteit</li>
          <li>Aantal modellen</li>
          <li>Testvereisten</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Opmerking: Professionele advieskosten zijn gescheiden van
          overheidskosten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tijdlijn voor BIS Certificaat Registratie
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Gemiddelde Tijdlijn:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Testen: 3–6 weken</li>
          <li>Inspectie: 1–2 weken</li>
          <li>Licentie Verlening: 2–4 weken</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Totaal: 8–12 weken (ongeveer)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hoe BIS Certificering te Krijgen in India voor Meubelfabrikanten
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Praktische Tips:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kies de juiste IS norm</li>
          <li>Zorg voor fabrieksbereidheid</li>
          <li>Houd testrecords bij</li>
          <li>Vermijd documentatiefouten</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificaat Online Aanvraag – Praktisch Overzicht
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Online Portaal Uitdagingen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Technische fouten</li>
          <li>Document upload problemen</li>
          <li>Normselectie verwarring</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Juiste begeleiding vermindert vertragingen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Gebruik van BIS Markering & BIS Certificeringsmarkering Na Goedkeuring
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Markeringregels:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Juiste IS referentie</li>
          <li>Licentienummer</li>
          <li>Juiste grootte & zichtbaarheid</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Niet-naleving kan leiden tot schorsing.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Uitdagingen in BIS Certificering voor Meubels
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Normen interpreteren</li>
          <li>Producttestfalen</li>
          <li>Inspectie niet-conformiteiten</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Rol van BIS Consultants bij Meubelcertificering
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Professionele BIS consultants helpen door:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Juiste normen identificeren</li>
          <li>Testen & inspectie beheren</li>
          <li>Goedkeuringstijd verkorten</li>
          <li>Kostbare afwijzingen vermijden</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering voor Meubels is een hoeksteen van kwaliteit,
          veiligheid, en juridische naleving in India&apos;s groeiende
          meubelmarkt. Of u nu een fabrikant, importeur of merkeigenaar bent,
          het verkrijgen van een BIS Certificaat voor Meubels in India zorgt
          voor:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Regelgevingsnaleving</li>
          <li>Consumentenvertrouwen</li>
          <li>Langetermijnmarktsucces</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Door het BIS Certificeringsproces, Normen, Kosten en
          Nalevingsvereisten te begrijpen, kunnen bedrijven vol vertrouwen
          navigeren in het regelgevingslandschap en veiligere, sterkere en
          betrouwbaardere meubelproducten bouwen voor de Indiase markt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde Vragen over BIS Licentie
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Is BIS Certificering verplicht voor alle meubelproducten in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nee, BIS Certificering is alleen verplicht voor die meubel-
              producten die onder gemelde BIS Normen vallen. Echter, zodra een
              meubelproductcategorie wordt gemeld door het Bureau of Indian
              Standards, wordt het produceren, importeren, verkopen of
              distribueren van dat product zonder een geldige BIS Licentie
              illegaal in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Welke meubelproducten vereisen BIS Licentie in plaats van BIS
              Registratie?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Meubelproducten vallen over het algemeen onder het ISI
              Certificering- Schema, dat een BIS Licentie vereist, niet BIS
              Registratie. BIS Registratie (CRS) is voornamelijk van toepassing
              op elektronica en IT-producten, terwijl meubelproducten testen +
              fabrieksinspectie + BIS Licentie vereisen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Kunnen geïmporteerde meubels in India worden verkocht zonder BIS
              Certificering?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nee. Geïmporteerde meubelproducten die onder verplichte BIS Normen
              vallen, moeten BIS Certificering hebben vóór douaneafhandeling.
              Het importeren van niet-gecertificeerde meubels kan resulteren in:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Douane-inbeslagname</li>
              <li>Heruitvoer of vernietiging</li>
              <li>Zware boetes</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              Buitenlandse fabrikanten moeten BIS Licentie verkrijgen voordat ze
              meubels naar India exporteren.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Kunnen buitenlandse meubelfabrikanten BIS Certificering aanvragen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja. Buitenlandse fabrikanten kunnen aanvragen onder het
              Buitenlandse Fabrikanten Certificeringsschema (FMCS). Zij moeten:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>
                Een Geautoriseerde Indiase Vertegenwoordiger (AIR) aanstellen
              </li>
              <li>Voldoen aan Indiase Normen</li>
              <li>BIS fabrieksinspectie in het buitenland toestaan.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Is BIS Certificering vereist voor handgemaakte of kleinschalige
              meubelfabrikanten?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, als het meubelproduct onder een verplichte BIS norm valt,
              moeten zelfs MKB&apos;s, startups en kleinschalige eenheden BIS
              Certificering verkrijgen. Er is geen vrijstelling op basis van
              productievolume.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Is BIS Certificering vereist voor houten meubels?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, houten meubelproducten zoals bedden, stoelen, tafels, bureaus
              en opslageenheden kunnen BIS Certificering vereisen als ze onder
              gemelde normen vallen. BIS normen zijn van toepassing op zowel
              houten als metalen meubels, afhankelijk van producttype en
              gebruik.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Kan één BIS Licentie meerdere meubelmodellen dekken?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, meerdere modellen of varianten kunnen worden gedekt onder één
              BIS Licentie, mits:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Ze vallen onder dezelfde IS Norm</li>
              <li>
                Constructie, materiaal en ontwerpparameters zijn vergelijkbaar
              </li>
              <li>BIS keurt de groepering goed tijdens de aanvraag.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Kan BIS Certificering worden overgedragen aan een andere
              fabrikant?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nee. BIS Licentie is niet overdraagbaar. Elke fabrikant moet zijn
              eigen BIS Certificaat verkrijgen, zelfs als het productontwerp
              identiek is.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Wat is BIS Certificaat?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Het is officieel bewijs van naleving van BIS Normen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Is BIS Certificering verplicht voor meubels?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, voor meubelproducten die onder gemelde normen vallen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Hoe BIS Certificering te krijgen in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Via testen, inspectie en BIS licentie goedkeuring.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Wat is BIS Markering?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Een conformiteitsmarkering die BIS goedkeuring toont.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS Certificeringskosten?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Hangt af van producttype, testen en omvang.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS Volledige Vorm?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
            </p>
          </div>
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
