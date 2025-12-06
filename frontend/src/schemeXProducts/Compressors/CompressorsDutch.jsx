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
  import { Helmet } from "react-helmet-async";
  import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
  import ServiceAuthorDutch from "@/components/manual/ServiceAuthor/ServiceAuthorDutch";
  const BISImage = "/services-images/BIS.jpg";
  const CDSCO = "/services-images/CDSCO.jpg";
  const BISCRS = "/services-images/BISCRS.jpg";
  const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
  const EPRCertificate = "/services-images/EPRCertificate.jpg";
  const LMPC = "/services-images/LMPC.jpg";
  const ISIMarkImage = "/services-images/ISIMark.jpg";
  import { BoxReveal } from "@/components/magicui/box-reveal";
  import { Separator } from "@/components/ui/separator";
  
  const CompressorsDutch = () => {
    return (
      <div className="relative w-full">
        <CompressorsMetaTags />
        <CompressorsBreadcrumb />
        <CompressorsMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default CompressorsDutch;
  
  const CompressorsMetaTags = () => {
    const title = "BIS Schema X Certificering voor Compressoren";
    const description =
      "BIS schema X certificering voor compressoren, assemblages of componenten is verplicht onder de Omnibus Technische Regeling Order, 2024 verbetert productveiligheid, standaardisatie in India";
    const keywords =
      "BIS Certificering voor Compressoren, BIS Schema X Certificering voor Compressoren, Schema X certificering voor Compressoren, BIS voor Compressoren, OTR voor Compressoren";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Compressoren in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor compressoren in India. Begrijp OTR 2024-naleving, BIS Licentieproces, ISI-markeringvereisten en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const CompressorsBreadcrumb = () => {
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
                      BIS Schema X voor Compressoren
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
  
  const CompressorsMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <CompressorsMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const CompressorsMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Schema X voor Compressoren
          </h1>
  
          {/* BIS Scheme X Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-License-for-Compressors.png"
              title="BIS Schema X Licentie voor Compressoren"
              alt="BIS Schema X Certificering voor Compressoren"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Compressoren zijn essentiële apparatuur in verschillende industrieën zoals
            koeling, HVAC, petrochemie, productie, voedselverwerking en farmaceutische
            toepassingen. De snelgroeiende Indiase industrie groeit snel en kwaliteit
            en veiligheid van compressoren worden een belangrijk aandachtspunt.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Om hetzelfde te waarborgen, heeft het Bureau of Indian Standards (BIS) BIS
            Certificering voor Compressoren geïmplementeerd onder Schema X
            Certificering. Deze certificering zorgt ervoor dat elke compressor die in
            het Indiase grondgebied wordt geïntroduceerd, voldoet aan bepaalde
            veiligheids-, prestatie- en efficiëntienormen.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            In deze gids bieden we BIS Schema X Certificering voor Compressoren en OTR
            voor Compressoren, evenals hoe fabrikanten BIS Licentie voor Compressoren
            kunnen verkrijgen om het BIS-merk voor Compressoren in India te gebruiken.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS for Compressors is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Waarom BIS voor Compressoren Belangrijk is
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Compressoren worden gebruikt in:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Luchtkoeling/koelsystemen</li>
            <li>Gastransmissiepijpleidingen en opslag</li>
            <li>Olie & gas verwerkingsfaciliteiten</li>
            <li>Elektriciteitsopwekking en chemische industriële installaties</li>
            <li>Voedsel- en drankproductie</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Elke soort moet voldoen aan de van toepassing zijnde Indiase Normen (IS-code)
            zoals IS 17093:2019.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Zonder BIS voor Compressoren kunnen inferieure of ongemarkeerde producten
            leiden tot:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Schade, onderhoudsperioden en stilstandtijd</li>
            <li>
              Verspilde energieproductie tegen hoge energierekeningen
            </li>
            <li>Veiligheidsrisico's, zoals oververhitting of lekkage</li>
            <li>Reputatieverlies en monetaire schade</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Daarom is het BIS-merk voor Compressoren dat ISI-certificering heeft
            ondergaan een garantie voor veiligheid, betrouwbaarheid en kwaliteit.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certificate Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificering voor Compressoren?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            BIS Schema X Certificering voor Compressoren is een conformiteitsbeoordelingsschema
            in India onder de BIS Conformiteitsbeoordelingsregeling, 2018. Dit is om
            ervoor te zorgen dat zowel binnenlandse als buitenlandse fabrikanten
            voldoen aan Indiase kwaliteit.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Kenmerken van Schema X Certificaat voor Compressoren:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Verplicht voor alle fabrikanten (zowel Indiaas als buitenlands)</li>
            <li>
              Omvat verschillende soorten compressoren die zijn aangekondigd onder
              Indiase Normen
            </li>
            <li>
              Toont derdepartijstests, fabrieksinspecties en periodieke
              nalevingscontroles
            </li>
            <li>
              Maakt gebruik van het BIS-merk voor Compressoren op licentieproducten
              mogelijk als gecertificeerde producten
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Compressoren
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            De Omnibus Technische Regeling (OTR) voor Compressoren die in 2024 door
            het Ministerie van Zware Industrie is vrijgegeven, maakt Schema X
            Certificering voor Compressoren verplicht.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Nalevingsdeadline: Op 1 september 2026 zijn alle fabrikanten en importeurs
            verplicht om een geldige BIS Licentie voor Compressoren onder Schema – X te
            hebben. Elke niet-naleving zal leiden tot een totaal verbod op verkoop en
            import van niet-gecertificeerde compressoren in India.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Compressoren
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Veiligheid & Prestaties: Helpt gevaren zoals lekkage, oververhitting en
              machinefalen te voorkomen.
            </li>
            <li>
              Markttoegang: Door BIS gecertificeerde compressoren kunnen worden gebruikt
              in openbare aanbestedingen en overheidsprojecten.
            </li>
            <li>
              Consumentenvertrouwen: Het BIS-merk voor Compressoren geeft kopers
              vertrouwen dat het product voldoet aan Indiase Normen.
            </li>
            <li>
              Concurrentievoordeel: Alleen gecertificeerde merken krijgen meer
              vertrouwen en marktvoorkeur.
            </li>
            <li>
              Eenvoudige Markttoegang voor Internationale Merken: BIS Licentie voor
              Compressoren vergemakkelijkt eenvoudige toegang tot de Indiase markt voor
              buitenlandse fabrikanten.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Compressor Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Compressoren die worden gedekt onder BIS Schema X
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering is beschikbaar voor verschillende soorten
            compressoren zoals:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Reciprocating Positieve Verplaatsing Compressoren</li>
            <li>Rotatiecompressoren</li>
            <li>Schroefcompressoren</li>
            <li>Turbo Compressoren</li>
            <li>Axiale Stroom Compressoren</li>
            <li>Industriële en Draagbare Luchtcompressoren</li>
            <li>Luchtkoeling en koelcompressoren</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Verschillende compressortechnologieën moeten voldoen aan hun respectieve
            Indiase Normen, die vereisten stellen voor prestaties, energieverbruik,
            materiaalkwaliteit en veiligheid.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Stap voor Stap BIS Licentie voor Compressoren – Hoe Aan te Vragen?
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Identificatie van Van Toepassing Zijnde Normen: Zoek de relevante IS-code
              voor uw compressor.
            </li>
            <li>
              Producttests: Voer verplichte prestatietests, veiligheidstests en
              energie-efficiëntietests uit in BIS-erkende laboratoria.
            </li>
            <li>
              Fabrieksinspectie: BIS-personeel voert veldbezoeken uit om
              productieprocedures en kwaliteitscontrolemethoden te verifiëren.
            </li>
            <li>
              Documentatie & Aanvraag: Voeg testrapporten, technische specificaties en
              Kwaliteitshandleidingen toe samen met uw BIS-aanvraag.
            </li>
            <li>
              Uitgifte van BIS Licentie voor Compressoren: Wanneer geaccepteerd, krijgen
              fabrikanten het recht om het BIS-merk voor Compressoren te gebruiken.
            </li>
            <li>
              Continue Naleving: Regelmatige toezichtscontroles & producttests worden
              uitgevoerd door BIS voor continue naleving.
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Naleving
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Fabrikanten die geen BIS Certificering voor Compressoren hebben verkregen
            tot 1 september 2026 onder OTR voor Compressoren zullen worden onderworpen
            aan:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              Verkoop/Import van niet-getypeerde compressoren is niet toegestaan
            </li>
            <li>Inbeslagname van niet-conforme goederen en zakelijke sancties</li>
            <li>Verbod op overheidsaanbestedingen en PSU-overeenkomsten</li>
            <li>Verlies van marktvertrouwen in India</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusie
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Implementatie van BIS Schema X Certificering voor Compressoren door OBR voor
            Compressoren (2024) is een significante stap voorwaarts voor industriële
            veiligheid, energie-efficiëntie en kwaliteitsborging in India.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Fabrikanten, importeurs en exporteurs die het proces doorlopen om BIS
            Certificaat voor Compressoren te verkrijgen, en BIS-certificering voor
            Compressoren te verkrijgen, verwerven het recht om deel uit te maken van deze
            markt door ervoor te zorgen dat de producten die zij aan Indiase consumenten
            aanbieden, als veilig in gebruik worden beschouwd, een lager milieurisico
            hebben en van goede kwaliteit zijn.
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
                  alt="BISCRS logo"
                  title="BISCRS logo"
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
                  alt="PlasticWasteManagement logo"
                  title="PlasticWasteManagement logo"
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
                  alt="EPRCertificate logo"
                  title="EPRCertificate logo"
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
                  alt="LMPC logo"
                  title="LMPC logo"
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
                  alt="BIS logo"
                  title="BIS logo"
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
  