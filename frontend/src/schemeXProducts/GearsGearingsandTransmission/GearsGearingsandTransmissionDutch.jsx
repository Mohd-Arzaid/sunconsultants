import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
import ServiceAuthorDutch from "@/components/manual/ServiceAuthor/ServiceAuthorDutch";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import FooterDutch from "@/components/manual/Footer/FooterDutch";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const GearsGearingsandTransmissionDutch = () => {
  return (
    <div className="relative w-full">
      <GearsGearingsandTransmissionMetaTags />
      <GearsGearingsandTransmissionBreadcrumb />
      <GearsGearingsandTransmissionMainContent />
      <Services />
      <VideoSection />
      <FooterDutch />
    </div>
  );
};

export default GearsGearingsandTransmissionDutch;

const GearsGearingsandTransmissionMetaTags = () => {
  const title =
    "BIS Schema X Certificering voor Tandwielen, Overbrenging en Transmissie-elementen";
  const description =
    "BIS Schema X Certificering voor tandwielen en overbrenging, getande wielen, kettingtandwielen, transmissie-elementen, kogel- of rollenschroeven, versnellingsbakken en snelheidsveranderaars, is een belangrijke regelgevingsmijlpaal voor de industriële machinesector";
  const keywords =
    "BIS Certificering voor Tandwielen, Overbrenging en Transmissie-elementen, BIS Schema X Certificering voor Tandwielen, Overbrenging en Transmissie-elementen, Schema X Certificering voor Tandwielen, Overbrenging en Transmissie-elementen, BIS voor Tandwielen, Overbrenging en Transmissie-elementen, OTR voor Tandwielen, Overbrenging en Transmissie-elementen";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "BIS Schema X Certificering voor Tandwielen, Overbrenging en Transmissie-elementen in India | Volledige Gids";
  const ogDescription =
    "Leer alles over BIS Schema X Certificering voor tandwielen, overbrenging en transmissie-elementen in India. Begrijp OTR 2024-naleving, BIS Licentieproces, ISI-markering vereisten en hoe u certificering kunt krijgen vóór de deadline van september 2026";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

const GearsGearingsandTransmissionBreadcrumb = () => {
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
                    <Link to="/SchemeX-Products">SchemeX Producten</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certificering voor Tandwielen, Overbrenging en Transmissie-elementen
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

const GearsGearingsandTransmissionMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <GearsGearingsandTransmissionMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentDutch />
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Schema X Certificering voor Tandwielen, Overbrenging en Transmissie-elementen
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-gears-and-gearing-toothed-wheels-chain-sprocket.png"
            alt="BIS Schema X Certificering Voor Tandwielen Overbrenging En Transmissie-elementen"
            title="BIS Schema X Licentie voor tandwielen en overbrenging, getande wielen, kettingtandwielen"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          In een voortdurend veranderende industriële wereld zijn veiligheid en kwaliteit
          van mechanische componenten van cruciaal belang. Volgens het Bureau of Indian Standards
          moeten alle in India geproduceerde machines en elektrische componenten
          voldoen aan de veiligheids- en kwaliteitsnormen die door BIS zijn vastgesteld en
          uiteengezet in de Machine- en Elektrische Apparatuur Veiligheid
          (Omnibus Technical Regulation) Order, 2024. Deze order omvat
          mechanische modules, componenten en assemblage-onderdelen zoals tandwielen,
          overbrengingselementen en verschillende transmissie-onderdelen die essentieel zijn voor
          de werking van machines in elke industrie.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Alle fabrikanten, zowel binnenlands als buitenlands, zijn verplicht om te voldoen aan
          de standaardvereisten voor Schema X Certificering op 1 september 2026
          zoals vastgesteld door de order en geïnstitutionaliseerd door het
          Ministerie van Zware Industrie. Alle fabrikanten in de tandwiel- en
          versnellingsbakindustrie en alle gerelateerde transmissie-elementen moeten voldoen aan
          deze regelgeving om toegang tot de markt te krijgen en normen te stellen
          voor de industrie.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Deze blog bevat alle belangrijke informatie voor certificering van tandwielen,
          versnellingsbakken en gerelateerde transmissie-onderdelen, waarom
          dit waardevol is, de reikwijdte, voordelen van certificering en benodigde
          documenten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Waarom Schema X Belangrijk is voor Tandwielen, Overbrenging en Transmissie-elementen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze mechanische onderdelen zijn belangrijk in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Auto's, vrachtwagens en treinen</li>
          <li>Luchtvaart- en defensieapparatuur</li>
          <li>Productiemachines en robotica</li>
          <li>Energiesystemen en elektriciteitscentrales</li>
          <li>Maritiem (zware en lichte engineering industrie)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zonder BIS voor Tandwielen, Overbrenging en Transmissie-elementen zijn de risico's
          zeer hoog:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Tandwielstoringen die leiden tot schade en dure stilstandtijd
          </li>
          <li>Gezondheidsrisico's in transport en zware industrie</li>
          <li>Inefficiënte energieoverdracht en energiedissipatie</li>
          <li>
            Beperkte toegankelijkheid tot openbare aanbestedingen en inkoopkansen
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Uiteindelijk biedt Schema X certificering voor Tandwielen, Overbrenging en
          Transmissie-elementen verbeterde duurzaamheid, minimaliseert
          operationele risico's en is consistent met binnenlandse normen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Wat is BIS Schema X Certificering voor Tandwielen, Overbrenging en Transmissie-elementen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Certificering voor Tandwielen, Overbrenging en Transmissie-elementen
          maakt deel uit van de BIS Conformiteitsbeoordelingsregeling, 2018.
          Het definieert strikte benchmarks voor ontwerp, materiaalkwaliteit
          en operationele prestaties.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Belangrijkste Kenmerken van Schema X Certificering zijn:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Verplicht voor alle fabrikanten (India en buitenland)</li>
          <li>Geschikt voor verschillende tandwielen, assen en transmissie-onderdelen</li>
          <li>Producttesten uitvoeren in door BIS goedgekeurde laboratoria</li>
          <li>Omvat fabrieksaudits om kwaliteitscontrole te valideren</li>
          <li>
            Recht op gebruik van het BIS Standaardmerk na productcertificering
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR voor Tandwielen, Overbrenging en Transmissie-elementen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het Ministerie van Zware Industrie heeft de Omnibus Technische Regeling (OTR)
          2024 aangenomen voor Tandwielen, Overbrenging en Transmissie-elementen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Nalevingsdatum: Alle fabrikanten en importeurs zijn verplicht om
          certificering te hebben op 1 september 2026. Na deze datum
          kunnen niet-gecertificeerde goederen niet meer worden gemaakt, geïmporteerd
          of verkocht in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Tandwielen, Overbrenging en Transmissie-elementen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Veiligheid en Betrouwbaarheid: Voorkomt ongecontroleerde storingen
            in vitale systeemtoepassingen.
          </li>
          <li>
            Marktconcurrentie: Gecertificeerde bedrijven genieten voorkeur
            bij openbare en particuliere aanbestedingen.
          </li>
          <li>
            Klantvertrouwen: Kopers hebben vertrouwen in producten met
            officiële BIS-erkenning.
          </li>
          <li>
            Wettelijke Naleving: Geen boetes met OTR voor Tandwielen,
            Overbrenging en Transmissie-onderdelen.
          </li>
          <li>
            Toegang tot Wereldmarkt: Stelt buitenlandse fabrikanten in staat om gemakkelijk
            de Indiase markt te betreden.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Gears Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Soorten Tandwielen en Transmissie-onderdelen die zijn Inbegrepen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Schema X Certificering is van toepassing op verschillende Tandwielen, Overbrenging en
          Transmissie-elementen zoals hieronder:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Rechte, schuine, kegel- en wormwielen</li>
          <li>Tandwielassen en koppelingen</li>
          <li>Versnellingsbakken en transmissie-onderdelen</li>
          <li>Ketting- en riemaandrijvingscomponenten</li>
          <li>
            Tandwielen gebruikt in luchtvaart en robotica, luxe auto's,
            motorfietsen.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Alle soorten moeten voldoen aan Indiase Normen (IS-code) zoals IS
          16819:2018/ISO 12100:2010 (Machineveiligheid Algemene Principes voor
          Ontwerp - Risicobeoordeling en Risicovermindering). Elk producttype
          moet voldoen aan de relevante Indiase Normen met betrekking tot ontwerp
          en prestaties.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Certificeringsprocedure voor Tandwielen, Overbrenging en Transmissie-elementen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Identificeer Toepasselijke Normen: Raadpleeg de toepasselijke IS-code
          voor uw tandwiel-/transmissieproduct.
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Producttesten: Voer materiaal- en prestatietesten uit in
            door BIS geaccrediteerde laboratoria.
          </li>
          <li>Fabrieksaudit: BIS voert een kwaliteitsaudit uit op de productielocatie.</li>
          <li>
            Dien Documentatie in: Deel technische details, testdocumenten en
            kwaliteitshandboeken.
          </li>
          <li>
            Licentieverlening: BIS verleent na controle van documenten op nauwkeurigheid
            certificering en staat gebruik van het Standaardmerk toe.
          </li>
          <li>
            Voortdurende Naleving: Regelmatige audits en hertesten om
            de geldigheid van certificering te behouden.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Boetes voor Naleving
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Niet-naleving van BIS Certificering voor Tandwielen, Overbrenging
          en Transmissie-elementen onder OTR voor Tandwielen, Overbrenging en
          Transmissie-elementen zal resulteren in:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verbod op verkoop en fabricage van niet-gecertificeerde items
          </li>
          <li>Inbeslagname van goederen en monetaire boetes</li>
          <li>Niet in aanmerking komen voor overheidsaanbestedingen en contracten</li>
          <li>Reputatieschade op lange termijn</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusie
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Certificering voor Tandwielen, Overbrenging en Transmissie-elementen,
          zoals aangekondigd onder OTR voor Tandwielen, Overbrenging
          en Transmissie-elementen (2024) zal een cruciale stap zijn naar
          verbeterde kwaliteits- en veiligheidsnormen voor engineering- en
          productiestructuren in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Fabrikanten en importeurs van Tandwiel-, Overbrenging- en Vermogenstransmissie-
          oplossingen die verkoop op de Indiase markt zoeken, zullen ontdekken dat
          hun voordelen zullen toenemen en deuren zullen openen voor
          marktvoordelen door Schema X certificering toe te passen voor Tandwielen,
          Overbrenging en Vermogenstransmissiesystemen.
        </p>

        <ServiceAuthorDutch />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Onze Diensten
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Beste Certificeringsconsulenten van India
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
                src={BISImage}
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
                src={CDSCO}
                alt="CDSCO"
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
                src={BISCRS}
                alt="BISCRS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Registratie (CRS)
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Kunststofafvalbeheer
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
                alt="EPRCertificate"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificaat Certificering
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Certificaat Certificering
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
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
                src={ISIMarkImage}
                alt="ISIMark"
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
