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
  import FooterDutch from "@/components/manual/Footer/FooterDutch";
  import ServiceAuthorDutch from "@/components/manual/ServiceAuthor/ServiceAuthorDutch";
  import { Helmet } from "react-helmet-async";
  import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
  import { BoxReveal } from "@/components/magicui/box-reveal";
  import { Separator } from "@/components/ui/separator";
  const BISImage = "/services-images/BIS.jpg";
  const CDSCO = "/services-images/CDSCO.jpg";
  const BISCRS = "/services-images/BISCRS.jpg";
  const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
  const EPRCertificate = "/services-images/EPRCertificate.jpg";
  const LMPC = "/services-images/LMPC.jpg";
  const ISIMarkImage = "/services-images/ISIMark.jpg";
  
  const CranesDutch = () => {
    return (
      <div className="relative w-full">
        <CranesMetaTags />
  
        <CranesBreadcrumb />
        <CranesMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default CranesDutch;
  
  const CranesMetaTags = () => {
    const title = "BIS Schema X Certificering voor Kranen";
    const description =
      "Het Bureau of Indian Standards (BIS) heeft verplichte Schema X certificering geïntroduceerd voor alle soorten kranen en hun assemblages, sub-assemblages en componenten.";
    const keywords =
      "BIS Certificering voor Kranen, BIS Schema X Certificering voor Kranen, Schema X certificering voor Kranen, BIS voor Kranen, OTR voor Kranen";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Kranen in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor kranen in India. Begrijp OTR 2024-naleving, BIS Licentieproces, ISI-markeringvereisten en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const CranesBreadcrumb = () => {
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
                      BIS Schema X voor Kranen
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
  
  const CranesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <CranesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const CranesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Schema X voor Kranen
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
              alt="BIS Schema X Certificering voor Kranen"
              title="BIS Schema X Licentie voor Kranen"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Kranen worden voornamelijk gebruikt voor het tillen en transporteren van
            materialen en in productie, bouw, productie en mijnbouw. Omdat hun
            functie kritisch kan zijn voor veiligheid, kunnen ongeschikte of
            slechtkwaliteitskranen leiden tot slippen en vallen, apparatuurschade of
            kostbare verliezen.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Gezien deze gevaren heeft het Bureau of Indian Standards (BIS) BIS
            Certificering voor Kranen verplicht gemaakt onder Schema X Certificering.
            Dit zorgt ervoor dat kranen die in India worden gebruikt veilig,
            betrouwbaar, efficiënt en van wereldklasse kwaliteit zijn.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            In deze blog begeleiden we u over het belang van BIS Schema X Registratie
            voor Kranen, de juridische aspecten van OTR voor Kranen, en hoe u BIS
            Licentie voor Kranen kunt verkrijgen en het BIS Standaardmerk voor
            Kranen kunt markeren.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Waarom BIS voor Kranen Belangrijk is
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Kranen worden veel gebruikt in:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Bouw- en infrastructuurwerk</li>
            <li>Zeehavens, scheepswerven en andere logistieke centra</li>
            <li>Fabrieken en assemblagefabrieken</li>
            <li>Metaalmijnbouw en zwaar materiaalbeheer</li>
            <li>Elektriciteitsopwekking en andere industrieën</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Zonder BIS voor Kranen kunnen niet-gecertificeerde apparatuur leiden tot:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Mechanische schade en ongevallen</li>
            <li>Verminderde beschikbaarheid en verhoogde onderhoudskosten</li>
            <li>Verlies van geschiktheid voor overheidsprojecten</li>
            <li>Werknemers en infrastructuur blootgesteld aan veiligheidsgevaren</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Het BIS-merk voor Kranen geeft consumenten en regelgevers vertrouwen dat
            het product voldoet aan strikte Indiase kwaliteits- en veiligheidsnormen.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificering voor Kranen?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Schema X Certificering voor Kranen onder BIS is verplicht volgens de BIS
            Conformiteitsbeoordelingsregeling, 2018, die productcertificering vereist
            voor kritieke machines.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Belangrijkste Kenmerken Schema X voor Kranen:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Vereist voor zowel binnenlandse als buitenlandse fabrikanten</li>
            <li>
              Van toepassing op alle belangrijke categorieën kranen & aangekondigd
              onder Indiase Normen
            </li>
            <li>
              Producttests, fabrieksaudits en continue nalevingsbeoordeling zijn
              verplicht
            </li>
            <li>
              Verleent licentie voor gebruik van het BIS-merk op Kranen op
              gecertificeerde producten
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Kranen
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            De Omnibus Technische Regeling (OTR) voor Kranen, die in 2024 door het
            Ministerie van Zware Industrie is aangekondigd, is bedoeld om
            certificering verplicht te maken.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Alle Fabrikanten / Importeurs van Kranen moeten BIS Licentie
            voor Kranen onder Schema X verkrijgen uiterlijk op 01 september 2026.
            Daarna kunnen niet-gecertificeerde kranen niet worden verkocht of
            geïmporteerd of worden gebruikt in openbare aanbestedingen in India.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Kranen
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Verbeterde Veiligheid: Gecertificeerde kranen minimaliseren mechanisch
              falen en ongevallen.
            </li>
            <li>
              Marktvoordelen: Overheidsinstanties en particuliere bedrijven geven
              voorkeur aan BIS-gecertificeerde kranen in e-tenders en grote projecten.
            </li>
            <li>
              Consumenten- & Aannemersvertrouwen: Het BIS-merk voor Kranen creëert
              vertrouwen in kwaliteit en betrouwbaarheid.
            </li>
            <li>
              Toegang tot de Wereldmarkt: Voor buitenlandse fabrikanten maakt BIS
              Licentie voor Kranen naadloze penetratie in de gereguleerde Indiase
              markt mogelijk.
            </li>
            <li>
              Naleving van Indiase Wetgeving: Voorkomt boetes, inbeslagname en
              uitsluiting van overheidscontracten.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Cranes Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Kranen die zijn opgenomen in Schema X Certificering
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Kranen die onder Schema X certificering vallen, bestaan uit verschillende
            soorten, bijvoorbeeld:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Torenkranen</li>
            <li>Mobiele Kranen</li>
            <li>Gantry en Goliath Kranen</li>
            <li>OH/BR Kranen</li>
            <li>Rupskranen</li>
            <li>Giek Kranen</li>
            <li>Drijvende Kranen</li>
            <li>Industriële en Werkplaatskranen</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Elke variant moet voldoen aan de relevante Indiase Normen (IS-code) zoals
            IS 4573:2020 voor Specificatie van Aangedreven Mobiele Kranen en
            IS/ISO 15442:2012 voor Kranen - Veiligheidsvereisten voor laadkranen.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Soorten apparatuur moeten voldoen aan relevante Indiase normen (IS-code)
            voor ontwerp, laadvermogen, veiligheid en prestaties.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Procedure voor het Verkrijgen van BIS Licentie voor Kranen
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              Identificatie van Relevante IS-normen: Identificeer de van toepassing
              zijnde Indiase Normen voor uw type kraan.
            </li>
            <li>
              Tests in BIS-erkende Laboratoria: Verplichte veiligheids- en
              doeltreffendheidstests uitvoeren.
            </li>
            <li>
              Fabrieksinspectie: BIS voert inspecties uit van productielocaties en
              kwaliteitssystemen.
            </li>
            <li>
              Aanvraag & Documentatie: Presenteer technische rapporten, testresultaten
              en kwaliteitshandleidingen.
            </li>
            <li>
              BIS Licentie op Kranen: Na goedkeuring hebben fabrikanten het
              voorrecht om het BIS-merk voor Kranen toe te passen.
            </li>
            <li>
              Continue Naleving: Regelmatige audits en inspecties zorgen voor
              continue naleving.
            </li>
          </ul>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Naleving
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Wat gebeurt er als iemand OTR voor Kranen niet volgt en geen BIS
            Certificering voor Kranen heeft verkregen op 1 september 2026?
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Verbod op verkoop en import van niet-gecertificeerde kranen</li>
            <li>Productinbeslagname en grote boetes</li>
            <li>Diskwalificatie van overheidsaanbestedingen en PSU's</li>
            <li>Langetermijn negatieve impact op het merk</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusie
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Implementatie van BIS Schema X Certificering zal een belangrijke
            mijlpaal zijn die veiligheid, betrouwbaarheid zal verbeteren en algemene
            industriestandaarden in India zal bieden.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Voor fabrikanten, importeurs, exporteurs van Kranen is het belangrijk om
            BIS Licentie voor Kranen te hebben en kunnen aanvragen via het online
            aanvraagportaal voor BIS Kraanregistratie om te voldoen aan normen,
            consumentenvertrouwen op te bouwen, en ook om potentiële conflicten met
            BIS of de Indiase regering te vermijden.
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
                  Beste Certificaatconsultant van India
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
                  alt="BIS"
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
                  alt="BIS"
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
  