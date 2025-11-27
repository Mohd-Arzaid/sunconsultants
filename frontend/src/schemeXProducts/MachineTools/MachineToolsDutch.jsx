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
  
  const MachineToolsDutch = () => {
    return (
      <div className="relative w-full">
        <MachineToolsMetaTags />
        <MachineToolsBreadcrumb />
        <MachineToolsMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default MachineToolsDutch;
  
  const MachineToolsMetaTags = () => {
    const title = "BIS Schema X Certificering voor Werktuigmachines";
    const description =
      "BIS Schema X Certificering is verplicht voor werktuigmachines inclusief draaibanken, freesmachines, boormachines, slijpmachines, CNC-systemen en gereedschappen voor het bewerken van steen, keramiek, beton en soortgelijke materialen";
    const keywords =
      "BIS Certificering voor Werktuigmachines, BIS Schema X Certificering voor Werktuigmachines, Schema X Certificering voor Werktuigmachines, BIS voor Werktuigmachines, OTR voor Werktuigmachines";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Werktuigmachines in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor Werktuigmachines in India. Begrijp OTR 2024-naleving, BIS Licentieproces, ISI-markering vereisten en hoe u certificering kunt krijgen vóór de deadline van september 2026";
  
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
  
  const MachineToolsBreadcrumb = () => {
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
                      BIS Certificering voor Werktuigmachines
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
  
  const MachineToolsMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <MachineToolsMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const MachineToolsMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Werktuigmachines
          </h1>
  
          {/* BIS Scheme X License Image */}
          <div className="mb-6">
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
              BIS Schema X Licentie voor Werktuigmachines
            </h3>
            <img
              src="/schemXproductImages/BIS-Scheme-X-License-for-Machine-Tools.png"
              alt="BIS Schema X Certificering Voor Werktuigmachines"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Gezien kwaliteit en veiligheid als kritieke aspecten, heeft BIS
            (Bureau of Indian Standards) de veiligheid en normen van
            verschillende industrieën geleid via Schema X Certificering. Dit certificaat is zeer
            belangrijk voor fabrikanten van werktuigmachines die zijn ontworpen om te werken met
            materialen zoals steen, keramiek, beton, asbestcement en mineraalglas
            en soortgelijke materialen, evenals andere werktuigmachines. Certificeringsnaleving voldoet niet alleen
            aan nationale veiligheidsvereisten, maar verhoogt aanzienlijk
            de geloofwaardigheid en marketingmogelijkheden van dergelijke producten.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Deze Schema X Certificering is een vereiste onder Machine-
            en Elektrische Apparatuur Veiligheid (Omnibus Technische Regeling, 2024). Deze regeling
            certificeert dat fabrikanten van machines en elektrische apparatuur
            een Standaardmerk op hun apparatuur moeten hebben. Certificering omvat
            voorbereiding van technische bestanden, fabrieksaudits, onafhankelijke productinspecties,
            en licentieverlening, en de uiterste deadline is 1 september 2026.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            Deze blog bevat alle benodigde informatie met betrekking tot certificering
            Schema X voor alle soorten werktuigmachines voor het bewerken van steen, keramiek,
            beton, asbestcement of soortgelijke mineralen (of) en hun assemblages
            /sub-assemblages /componenten, het belang, de reikwijdte, het certificeringsproces,
            voordelen en benodigde documentatie.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Waarom BIS Certificering voor Werktuigmachines Belangrijk is
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Werktuigmachines zijn onmisbaar in:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Productie van auto- en vliegtuigonderdelen</li>
            <li>Scheepsbouwindustrie en zware engineering</li>
            <li>Fabricage van elektriciteitsopwekkingsapparatuur</li>
            <li>Spoorwegen, defensie en precisieapparatuur</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Zonder BIS certificering omvatten de risico's:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Onvoldoende en inconsistente productkwaliteit</li>
            <li>Apparatuurstoringen en vertragingen in productie</li>
            <li>Risico's voor operators</li>
            <li>Juridische zorgen vanwege schending van Indiase wetten</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Door naleving af te dwingen, beschermt Schema X Certificering de industrie
            tegen deze risico's. Dit is ook van toepassing op alle soorten werktuigmachines voor
            het bewerken van steen, keramiek, beton, asbestcement of soortgelijke mineralen
            (of) en hun assemblages /sub-assemblages /componenten.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificering voor Werktuigmachines?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Met BIS Schema X Certificering onder de BIS Conformiteitsbeoordelingsregeling,
            2018, zijn testen, inspecties en licentieverlening
            verplicht geworden voor geïdentificeerde werktuigmachineproducten, vóór
            hun fabricage, import of verkoop in het land.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Belangrijkste Hoogtepunten:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Van toepassing op zowel Indiase fabrikanten als importeurs</li>
            <li>
              Omvat werktuigmachines zoals draaibanken, freesmachines, boormachines,
              slijpmachines, schaafmachines, CNC-systemen en andere
            </li>
            <li>Testen worden alleen uitgevoerd in door BIS goedgekeurde laboratoria.</li>
            <li>Fabrieksaudits en beoordeling van kwaliteitssystemen zijn verplicht</li>
            <li>
              Alleen succesvolle aanvragers krijgen een BIS Licentie om
              het Standaardmerk op hun producten te gebruiken
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            OTR voor Werktuigmachines
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Het Ministerie van Zware Industrie heeft de Omnibus Technische Regeling
            (OTR) uitgegeven die BIS schema X certificering verplicht stelt voor Werktuigmachines.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Alle fabrikanten en importeurs moeten BIS certificering
            hebben op 1 september 2026. Vanaf de datum van deze kennisgeving
            kunnen niet-gecertificeerde werktuigmachines niet meer
            worden geproduceerd, verkocht of geïmporteerd in India.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Benefits Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Werktuigmachines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Kwaliteitsgarantie: Geverifieerde nauwkeurigheid, duurzaamheid van gecertificeerde
              gereedschappen.
            </li>
            <li>
              Markttoegang – essentieel voor toegang tot openbare en
              particuliere sectorprojecten.
            </li>
            <li>
              Consumentenvertrouwen – Het BIS Standaardmerk is een garantie voor kwaliteit &
              productveiligheid.
            </li>
            <li>
              Concurrentievoordeel - Geautoriseerde fabrikanten hebben voorkeur bij
              aanbestedingen en inkoop.
            </li>
            <li>
              Risicovermindering – Geen apparatuurstoringen, verbeterde
              operatorveiligheid en preventie van stilstandtijd.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS Certificeringsproces voor Werktuigmachines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              Identificeer Normen – Koppel het type werktuigmachine en het gebruik
              aan Indiase Normen.
            </li>
            <li>
              Producttesten – Testen voor prestaties, veiligheid en duurzaamheid in
              door BIS geaccrediteerde laboratoria.
            </li>
            <li>
              Fabrieksaudit – Audit van kwaliteitscontrole voor productie van elektrische apparatuur.
            </li>
            <li>
              Documentatie: Technische rapporten, handleidingen en bewijs van naleving moeten
              worden verstrekt.
            </li>
            <li>
              Licentieverlening – BIS verleent licentie (certificaat) en
              staat gebruik van het Standaardmerk toe.
            </li>
            <li>
              Monitoring – Regelmatige beoordelingen en willekeurige inspecties worden uitgevoerd om
              ervoor te zorgen dat ze voldoen aan de regels.
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Schema X Certificering is verplicht voor alle machines voor het bewerken van steen,
            keramiek, beton, asbestcement of soortgelijke mineralen (of) en
            hun assemblages/sub-assemblages/onderdelen.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Niet-naleving
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Niet-naleving van BIS certificeringsnormen onder OTR kan resulteren in:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              Verbod op productie, import en handel in niet-gecertificeerde
              goederen
            </li>
            <li>Inbeslagname van goederen en boetes</li>
            <li>Verlies van defensie- en overheidscontracten</li>
            <li>Permanente merkschade en reputatieschade op lange termijn</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusie
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            BIS Schema X Certificering, vereist onder OTR 2024, is niet
            alleen een regelgevingsverplichting—het is de sleutel tot vertrouwen,
            veiligheid en succes in de Indiase productie-industrie.
            Certificering is belangrijk voor Indiase & Wereldwijde Fabrikanten voor Markttoegang,
            Naleving en Langetermijnsucces.
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
  