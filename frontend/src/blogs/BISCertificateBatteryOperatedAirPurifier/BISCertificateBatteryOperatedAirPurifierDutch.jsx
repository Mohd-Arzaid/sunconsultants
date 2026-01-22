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

const BISCertificateBatteryOperatedAirPurifierDutch = () => {
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

export default BISCertificateBatteryOperatedAirPurifierDutch;

const MetaTags = () => {
  const title =
    "BIS Certificaat voor Batterij-Aangedreven Luchtzuiveraar | IS 302 (Deel 1):2024 BIS Licentie";
  const ogTitle =
    "BIS Certificering voor Batterij-Aangedreven Luchtzuiveraar – IS 302 (Deel 1):2024 Gids";
  const twitterTitle =
    "BIS Licentie voor Batterij-Aangedreven Luchtzuiveraar | IS 302 (Deel 1):2024";
  const metaDescription =
    "Krijg BIS Certificaat voor Batterij-Aangedreven Luchtzuiveraar onder IS 302 (Deel 1):2024. Proces, documenten, testen, kosten & tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor Batterij-Aangedreven Luchtzuiveraar volgens IS 302 (Deel 1):2024. Ken proces, kosten, documenten, testen & BIS licentie voordelen.";
  const twitterDescription =
    "Aanvragen voor BIS Certificaat voor Batterij-Aangedreven Luchtzuiveraar onder IS 302 (Deel 1):2024. Leer BIS proces, documenten, testen, kosten & tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Batterij-Aangedreven Luchtzuiveraar, BIS Licentie voor Batterij-Aangedreven Luchtzuiveraar, IS 302 (Deel 1):2024, BIS Certificering voor Batterij-Aangedreven Luchtzuiveraar";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/batterij-aangedreven-luchtzuiveraar-is-302";
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
                    BIS Certificaat voor Batterij-Aangedreven Luchtzuiveraar – IS 302
                    (Deel 1):2024
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
          BIS Certificering Batterij-Aangedreven Luchtzuiveraar – Volledige Gids voor IS
          302 (Deel 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedAirPurifier.png"
            title="BIS Licentie voor Batterij-Aangedreven Luchtzuiveraar"
            alt="BIS Certificaat voor Batterij-Aangedreven Luchtzuiveraar - IS 302 (Deel 1):2024 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          De vraag naar batterij-aangedreven luchtzuiveraars in India is snel
          gegroeid door stijgende luchtvervuilingsniveaus, toenemend gezondheidsbewustzijn,
          en de behoefte aan draagbare, energiezuinige luchtzuiveringsoplossingen.
          In tegenstelling tot conventionele stekkerluchtzuiveraars worden
          batterij-aangedreven modellen veel gebruikt in huizen, kantoren, ziekenhuizen,
          voertuigen, hotels, scholen en persoonlijke ruimtes, vooral waar
          ononderbroken stroomvoorziening niet gegarandeerd is. Deze apparaten
          interageren direct met elektrische, elektronische en batterijcomponenten,
          waardoor elektrische veiligheid, brandbescherming, isolatie-integriteit en
          gebruikersbescherming uiterst kritiek zijn.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Om consumentenveiligheid en regelgevingscompliance te waarborgen, heeft de regering van
          India conformiteit met Indiase elektrische veiligheidsnormen verplicht gesteld.
          Het verkrijgen van een BIS Certificaat voor Batterij-Aangedreven Luchtzuiveraar onder IS
          302 (Deel 1):2024 is een verplichte wettelijke vereiste voor fabrikanten
          en importeurs voordat deze producten op de Indiase markt worden verkocht. Een
          geldig BIS Certificering voor Batterij-Aangedreven Luchtzuiveraar bevestigt
          dat het apparaat is getest op elektrische, mechanische en
          thermische veiligheid volgens de nieuwste Indiase norm.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificering?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering is India&apos;s officiële productconformiteit
          beoordelingssysteem beheerd door het Bureau of Indian Standards. BIS
          functioneert onder het Ministerie van Consumentenzaken en is verantwoordelijk
          voor het waarborgen dat producten die in India worden verkocht voldoen aan gedefinieerde normen voor
          veiligheid, kwaliteit en betrouwbaarheid.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificaat Betekenis
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De BIS Certificaat betekenis verwijst naar een autorisatie uitgegeven door BIS
          die een fabrikant toestaat een product te produceren, importeren en verkopen dat
          voldoet aan een specifieke Indiase norm (IS). Dit certificaat staat ook
          het gebruik van het BIS certificeringsmerk (ISI Mark) op het
          goedgekeurde product toe.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS bestaat om:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Consumenten beschermen tegen onveilige elektrische apparaten</li>
          <li>Brand, elektrische schok en batterij-gerelateerde gevaren voorkomen</li>
          <li>Uniforme productkwaliteit bevorderen</li>
          <li>Handhaving van veiligheidsvoorschriften mogelijk maken</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI Mark Uitleg
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Het BIS Mark (ISI Mark) op een batterij-aangedreven luchtzuiveraar geeft aan
          dat:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Het product voldoet aan IS 302 (Deel 1):2024</li>
          <li>Elektrische isolatie en constructie veilig zijn</li>
          <li>Het apparaat wettelijk is goedgekeurd voor verkoop in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Toepasselijke BIS Norm voor Batterij-Aangedreven Luchtzuiveraar
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (Deel 1):2024 – Veiligheid van Huishoudelijke en Soortgelijke Elektrische
          Apparaten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De toepasselijke Indiase norm voor batterij-aangedreven luchtzuiveraars is
          IS 302 (Deel 1):2024, die algemene veiligheidsvereisten specificeert voor
          elektrische apparaten bedoeld voor huishoudelijk en soortgelijk gebruik.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Reikwijdte van IS 302 (Deel 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Deze norm omvat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Elektrische veiligheid van apparaten die batterijen of hybride stroom gebruiken
          </li>
          <li>Bescherming tegen elektrische schok</li>
          <li>Brand- en oververhittingsrisico&apos;s</li>
          <li>Mechanische en constructieve veiligheid</li>
          <li>Isolatie, krupafstand en vrijgavevereisten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Veiligheid, Prestaties & Testdoel
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (Deel 1):2024 heeft tot doel te waarborgen dat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Batterij-aangedreven apparaten veilig werken onder normale en abnormale
            omstandigheden
          </li>
          <li>
            Gebruikers worden beschermd tegen elektrische, thermische en mechanische gevaren
          </li>
          <li>Componenten niet oververhitten of brand veroorzaken</li>
          <li>Het apparaat veilig blijft gedurende zijn beoogde levenscyclus</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wie Moet Voldoen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrikanten van batterij-aangedreven luchtzuiveraars in India</li>
          <li>Importeurs en distributeurs</li>
          <li>Buitenlandse fabrikanten die aan India leveren</li>
          <li>Merken die luchtzuiveraars verkopen onder private labels</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering Verplicht is voor Batterij-Aangedreven Luchtzuiveraar
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumentenveiligheidsrisico&apos;s
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Niet-gecertificeerde luchtzuiveraars kunnen veroorzaken:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Elektrische schok door slechte isolatie</li>
          <li>Batterij oververhitting of explosie</li>
          <li>Brandgevaren tijdens opladen of bediening</li>
          <li>Mechanisch falen van interne componenten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Overheids- en Regelgevingscompliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Onder BIS meldingen en elektrische veiligheidsvoorschriften vallen luchtzuiveraars
          onder verplichte certificering. Verkopen zonder een BIS
          Certificaat India is illegaal.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Implicaties
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Niet-naleving kan resulteren in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inbeslagname van producten</li>
          <li>Zware boetes en straffen</li>
          <li>Importverboden</li>
          <li>Strafrechtelijke aansprakelijkheid onder BIS Wet</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Markt- en Merkvoordelen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS Licentie voor Batterij-Aangedreven Luchtzuiveraar helpt:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Consumentenvertrouwen opbouwen</li>
          <li>Vermelding op e-commerce platforms mogelijk maken</li>
          <li>Kwalificeren voor institutionele en overheidsaankopen</li>
          <li>Merkreputatie versterken</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Stap-voor-Stap BIS Certificeringsproces voor Batterij-Aangedreven Luchtzuiveraar
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Toepasbaarheid & Normidentificatie voor BIS Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Het proces begint met het bevestigen van:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Producttype: Batterij-aangedreven luchtzuiveraar</li>
          <li>Toepasselijke norm: IS 302 (Deel 1):2024</li>
          <li>Spanning, batterijtype, opladerconfiguratie</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Aanvraagproces
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fabrikanten moeten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registreren op het BIS portaal</li>
          <li>De BIS Aanvraag online indienen</li>
          <li>Technische en juridische documenten uploaden</li>
          <li>Toepasselijke overheidskosten betalen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Deze stap wordt gewoonlijk BIS online aanvragen of BIS
          certificaatregistratie genoemd.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kosten & Kostenstructuur voor BIS Certificaat voor Luchtzuiveraar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          De BIS certificeringskosten omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagkosten</li>
          <li>Testkosten</li>
          <li>Fabrieksinspectiekosten</li>
          <li>Licentie- en markeerkosten</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          De totale kosten van BIS certificering hangen af van:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productcomplexiteit</li>
          <li>Batterij- en opladerontwerp</li>
          <li>Productielocatie</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Productmonster Testen (Volgens IS 302 Deel 1:2024)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Monsters worden getest in BIS-erkende laboratoria voor:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bescherming tegen elektrische schok</li>
          <li>Verwarming en abnormale werking</li>
          <li>Isolatieresistentie</li>
          <li>Diëlektrische sterkte</li>
          <li>Batterijveiligheid en oplaadveiligheid</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrieksinspectie & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS functionarissen verifiëren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productieproces</li>
          <li>Kwaliteitscontrolesysteem</li>
          <li>Componenttraceerbaarheid</li>
          <li>Interne testfaciliteiten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Verlening van BIS Licentie & ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Na succesvolle tests en inspectie:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS geeft de Bureau of Indian Standards Licentie uit</li>
          <li>Fabrikant is geautoriseerd om het BIS Mark te gebruiken</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenten Vereist voor BIS Certificering
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrikant Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrieksregistratiecertificaat</li>
          <li>Productieprocesstroomdiagram</li>
          <li>Lijst van machines en testapparatuur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bedrijfsoprichtingscertificaat</li>
          <li>GST registratie</li>
          <li>Merkautorisatie (indien van toepassing)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Circuitschema&apos;s</li>
          <li>Componentdatabladen</li>
          <li>Batterij- en opladerspecificaties</li>
          <li>Gebruikershandleiding en labels</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Aanvraag Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS aanvraagformulier</li>
          <li>Testaanvraagformulier</li>
          <li>Verklaringen en verplichtingen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze staan bekend als BIS CERTIFICAAT DOCUMENTEN of BIS CERTIFICERING
          DOCUMENTEN.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten volgens IS 302 (Deel 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Verplichte tests omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Elektrische schokbeschermingstest</li>
          <li>Verwarming en abnormale werkingstest</li>
          <li>Isolatieresistentietest</li>
          <li>Diëlektrische sterkte test</li>
          <li>Batterij oplaadveiligheidstest</li>
          <li>Mechanische sterkte en stabiliteitstest</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testen moet alleen worden uitgevoerd bij BIS-erkende laboratoria.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende Uitdagingen & Hoe Ze Te Voorkomen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Veelvoorkomende Problemen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Falen in verwarming of isolatietests</li>
          <li>Onveilige batterijconfiguratie</li>
          <li>Onvolledige documentatie</li>
          <li>Niet-conforme etikettering</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Oplossingen & Best Practices
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pre-compliance testen uitvoeren</li>
          <li>Gecertificeerde componenten gebruiken</li>
          <li>Nauwkeurige technische documenten voorbereiden</li>
          <li>Werken met ervaren BIS consultants</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Fabrikanten & Importeurs
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Voordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Naleving van Indiase wet</li>
          <li>Bescherming tegen boetes</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commerciële Voordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Markttoegang in heel India</li>
          <li>Acceptatie op e-commerce platforms</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Merkvoordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Mark versterkt vertrouwen</li>
          <li>Hogere klantvertrouwen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Marktuitbreiding
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Eenvoudigere toegang tot institutionele markten</li>
          <li>Langetermijn merkgeloofwaardigheid</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie Heeft BIS Certificering Nodig voor Batterij-Aangedreven Luchtzuiveraar?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Importeurs</li>
          <li>Buitenlandse fabrikanten (met AIR)</li>
          <li>Handelaren en merkeigenaren</li>
          <li>Online verkopers en marktplaatsen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom Ons Kiezen voor BIS Certificeringsconsultancy?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Wij bieden end-to-end BIS certificeringsdiensten, waaronder:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Toepasbaarheidsbeoordeling</li>
          <li>Documentatievoorbereiding</li>
          <li>Labtestcoördinatie</li>
          <li>Fabrieksinspectieondersteuning</li>
          <li>Snellere goedkeuringen</li>
          <li>Post-certificeringscompliance</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Onze expertise in elektrische en elektronische apparaten zorgt voor een soepele
          en conforme certificeringsreis.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het verkrijgen van een BIS Certificaat voor Batterij-Aangedreven Luchtzuiveraar onder IS
          302 (Deel 1):2024 is niet alleen een regelgevingsformaliteit—het is een kritieke
          veiligheids- en marktvereiste. BIS Certificering voor Batterij-Aangedreven
          Luchtzuiveraar waarborgt elektrische veiligheid, batterijbetrouwbaarheid en
          consumentenbescherming, terwijl de BIS Licentie voor Batterij-Aangedreven Luchtzuiveraar
          merkgeloofwaardigheid en juridische status versterkt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voor fabrikanten en importeurs voorkomt tijdige compliance boetes,
          maakt soepele markttoegang mogelijk en bouwt langetermijnvertrouwen op. Met expert
          begeleiding en gestructureerde complianceondersteuning wordt het BIS certificeringsproces
          efficiënt, voorspelbaar en volledig afgestemd op Indiase
          Normen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde Vragen – BIS Certificering voor Batterij-Aangedreven Luchtzuiveraar
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V1. Is BIS certificering verplicht voor batterij-aangedreven luchtzuiveraars?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, het is verplicht onder IS 302 (Deel 1):2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V2. Wat is de volledige vorm van BIS certificaat?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificaat.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V3. Hoe lang duurt BIS certificering?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Meestal 6–8 weken voor Indiase fabrikanten en 12-16 weken voor
              buitenlandse fabrikanten.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V4. Wat zijn de BIS certificaatkosten?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Het hangt af van testen en productcomplexiteit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V5. Kunnen importeurs BIS certificering aanvragen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, met juiste autorisatie.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V6. Is ISI Mark verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, na certificering.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V7. Zijn batterijveiligheidstests inbegrepen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, batterij- en oplaadveiligheid zijn verplicht.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V8. Is fabrieksinspectie verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, voor verlening van licentie.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V9. Kunnen meerdere modellen worden gedekt?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, onder voorbehoud van testgoedkeuring.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V10. Is online aanvraag vereist?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, BIS online aanvragen is verplicht.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V11. Kunnen buitenlandse merken BIS certificering krijgen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, via een Geautoriseerde Indiase Vertegenwoordiger.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V12. Wat gebeurt er als BIS regels worden overtreden?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Boetes, inbeslagname en juridische actie.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V13. Verbetert BIS certificering de verkoop?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, het versterkt vertrouwen aanzienlijk.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V14. Is verlenging vereist?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, periodieke verlenging is verplicht.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              V15. Kunnen consultants goedkeuring versnellen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, ervaren consultants verminderen vertragingen.
            </p>
          </div>
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
                alt="BISCRS Logo"
                title="BISCRS Logo"
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
                alt="EPR Certificaat Logo"
                title="EPR Certificaat Logo"
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
                alt="LMPC Logo"
                title="LMPC Logo"
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
                alt="ISI Mark Logo"
                title="ISI Mark Logo"
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
