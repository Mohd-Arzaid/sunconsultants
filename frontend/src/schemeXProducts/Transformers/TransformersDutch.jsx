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
import ServiceAuthorDutch from "@/components/manual/ServiceAuthor/ServiceAuthorDutch";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
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

const TransformersDutch = () => {
  return (
    <div className="relative w-full">
      <TransformersMetaTags />
      <TransformersBreadcrumb />
      <TransformersMainContent />
      <Services />
      <VideoSection />
      <FooterDutch />
    </div>
  );
};

export default TransformersDutch;

const TransformersMetaTags = () => {
  const title = "BIS Schema X Certificering voor Transformators";
  const description =
    "BIS Schema X Certificering voor Transformators bepaalt kwaliteits- en veiligheidsnormen voor de productie en import van transformators naar India";
  const keywords =
    "BIS Certificering voor Transformators, BIS Schema X Certificering voor Transformators, Schema X Certificering voor Transformators, BIS voor Transformators, OTR voor Transformators";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";
  const ogTitle =
    "BIS Schema X Certificering voor Transformators in India | Volledige Gids";
  const ogDescription =
    "Leer alles over BIS Schema X Certificering voor Transformators in India. Begrijp OTR 2024 naleving, BIS Licentie proces, ISI markering vereisten, en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";

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

const TransformersBreadcrumb = () => {
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
                    BIS Certificering voor Transformators
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

const TransformersMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <TransformersMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentDutch />
      </div>
    </div>
  );
};

const TransformersMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certificering voor Transformators
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-licence-for-Transformers.png"
            alt="BIS Schema X Certificering voor Transformators"
            title="BIS Schema X Licentie voor Transformators"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Transformators zijn integrale componenten van elk transmissie- en
          distributienetwerk. Ongeacht hun toepassing in industriële,
          commerciële of nutsbedrijfsoperaties, transformators zijn en moeten
          altijd apparatuur blijven met de hoogste operationele veiligheid en
          prestaties vanwege de kritieke aard van hun functie. Om veiligheid,
          betrouwbaarheid en standaardisatie in de elektrische
          apparatuurindustrie in India te verbeteren, heeft het Bureau of Indian
          Standards (BIS) BIS certificering voor alle soorten transformators en
          hun samenstellingen, sub-assemblages, componenten en sub-componenten
          verplicht gesteld onder Schema X Certificering.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Het Ministerie van Zware Industrie heeft, via de Omnibus Technische
          Regeling Order 2024, een deadline vastgesteld voor alle fabrikanten,
          ongeacht land van herkomst, om BIS certificering onder Schema X te
          behalen voor transformators en soortgelijke apparatuur op 1 september
          2026. BIS Schema X Certificering voor transformators is een stap naar
          verbeterde kwaliteit, consistentie, betrouwbaarheid en elektrische
          veiligheid van producten in India. Voor fabrikanten, importeurs of OEM
          leveranciers van transformators met componenten is deze standaard meer
          dan alleen een nalevingsverplichting.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Deze blog bevat alle relevante informatie met betrekking tot de
          reikwijdte, het belang en de voordelen van certificering, het proces
          en de vereiste documentatie voor Schema X certificering voor alle
          soorten Transformators en (of) hun samenstellingen, sub-assemblages,
          componenten en/of assemblages.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why Scheme X is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Waarom is Schema X voor Transformators Belangrijk
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Transformators worden veel gebruikt in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Stroomopwekkingsfaciliteiten</li>
          <li>Transmissie- en distributienetwerken</li>
          <li>Fabrieken en productiegebouwen</li>
          <li>Hernieuwbare energieprojecten (zon / wind / waterkracht)</li>
          <li>Commerciële / residentiële eigendommen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zonder juiste naleving kunnen transformators leiden tot:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Oververhitting, brand en elektrische schokken.</li>
          <li>Vermogensverlies en verspilling tijdens transmissie</li>
          <li>Stroomuitval door systeemschade</li>
          <li>Afwijzing in openbare aanbestedingen, overheidsprojecten</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Schema X Certificering voor Transformators zorgt voor hoge veiligheid,
          energie-efficiëntie en productbetrouwbaarheid.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Wat is Schema X Certificering voor Transformators?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Certificering voor Transformators is een juridisch kader
          onder de BIS Conformiteitsbeoordelingsregeling, 2018. Het vereist
          strenge testen en inspecties en eist een hoger niveau van documentatie
          om kwaliteit volgens Indiase normen te waarborgen.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Belangrijkste Kenmerken van Schema X Certificering:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Voor alle fabrikanten, Indiaas en buitenlands.</li>
          <li>
            Omvat distributietransformators, vermogenstransformators en speciale
            transformators
          </li>
          <li>
            Testen van prestaties, efficiëntie en veiligheid in door BIS
            goedgekeurde laboratoria is verplicht
          </li>
          <li>
            Fabrieken worden geauditeerd voor productieprocessen en
            kwaliteitssystemen worden gecontroleerd
          </li>
          <li>
            Verleent licentie voor gebruik van het BIS Standaard Merkteken.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR voor Transformators
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het Ministerie van Zware Industrie heeft de Omnibus Technische
          Regeling (OTR) voor Transformators geïntroduceerd in 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Nalevingsdatum: Alle fabrikanten en importeurs moeten gecertificeerd
          zijn op 1 september 2026. Daarna kunnen niet-gecertificeerde
          transformators niet worden geproduceerd, het land binnen gebracht of
          verkocht in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Voordelen van BIS voor Transformators
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Veiligheid & Betrouwbaarheid: Verifieert dat transformators voldoen
            aan elektrische veiligheidsvereisten en brandpreventie.
          </li>
          <li>
            Energie-efficiëntie: Bevordert vermindering van vermogensverlies en
            betere vermogensprestaties.
          </li>
          <li>
            Marktnaleving: Voldoet aan regelgevingsvereisten voor
            transformators, zoals uiteengezet in OTR.
          </li>
          <li>
            Aanbestedingsgeschiktheid: Gecertificeerde producten komen in
            aanmerking voor overheids- en publieke sector aanbestedingen.
          </li>
          <li>
            Klantvertrouwen: Het BIS Standaard Merkteken waarborgt
            productkwaliteit en duurzaamheid.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Transformers Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Soorten Transformators die Worden Gedekt
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Certificering voor Transformators is van toepassing op:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Distributietransformators (voor gebruik in lokale netwerken en
            residentiële toevoer)
          </li>
          <li>
            Vermogenstransformators (op hoogspanningsnetwerktransmissieniveau)
          </li>
          <li>
            Speciale Transformators (industriële toepassingen, spoorwegen en
            hernieuwbare energieprojecten)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Elk type moet voldoen aan de relevante IS-codes (zie notitie) zoals IS
          16819:2018/ISO 12100:2010 (machines veiligheid Algemene principes voor
          ontwerp – Risicobeoordeling en risicovermindering). Alle typen moeten
          voldoen aan hun respectieve IS-codes voor certificering.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proces van BIS Certificering voor Transformators
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificatie van Toepasselijke Normen: Raadpleeg de IS-codes voor
            verschillende soorten transformators.
          </li>
          <li>
            Producttesten: Uitvoeren van veiligheids-, energie-efficiëntie- en
            prestatiecontroles in door BIS goedgekeurde laboratoria.
          </li>
          <li>
            Fabrieksaudit: BIS personeel observeert productie van fabrikanten en
            kwaliteitscontrolesystemen.
          </li>
          <li>
            Documentatie Indienen: Verzend specificaties, testrapporten en
            nalevingsgegevens.
          </li>
          <li>
            Licentie Verlening: BIS verleent licentie voor gebruik van het
            Standaard Merkteken wanneer alle voorwaarden zijn vervuld.
          </li>
          <li>
            Voortdurende Naleving: Regelmatige testen en beoordelingen worden
            uitgevoerd om de geldigheid van certificering te behouden.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sancties voor Niet-naleving
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het niet naleven van BIS / OTR voor Transformators BIS Certificering
          voor Transformators onder OTR voor Transformators zal het volgende
          betekenen:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verbod op productie, verkoop en import van niet-gecertificeerde
            transformators.
          </li>
          <li>
            Verplichte inbeslagname van niet-conforme producten en zware
            sancties.
          </li>
          <li>
            Diskwalificatie van overheids- en publieke sector aanbestedingen
          </li>
          <li>Langdurige reputatieschade, financiële verliezen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Certificering voor Transformators, die verplicht zal
          worden onder OTR voor Transformators (2024), is een belangrijke stap
          in het verbeteren van de Indiase energie-infrastructuur met
          betrouwbare, efficiënte en veilige producten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Voor fabrikanten en importeurs is Schema X certificering voor
          Transformators niet alleen een verplichte certificering maar ook een
          strategisch instrument om vertrouwen te winnen op de Indiase markt en
          langetermijnsucces te behouden in de energie-industrie van het land.
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
                Beste Certificaat Consultant India
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
              BIS Merkteken (ISI Licentie) voor Buitenlandse Fabrikanten
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
              Plastic Afvalbeheer
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
              ISI MERKTEKEN (BIS) voor Indiase Fabrikanten
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
