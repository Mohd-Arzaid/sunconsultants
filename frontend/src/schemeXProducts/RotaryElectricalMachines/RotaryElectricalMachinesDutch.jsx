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
  
  const RotaryElectricalMachinesDutch = () => {
    return (
      <div className="relative w-full">
        <RotaryElectricalMachinesMetaTags />
        <RotaryElectricalMachinesBreadcrumb />
        <RotaryElectricalMachinesMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default RotaryElectricalMachinesDutch;
  
  const RotaryElectricalMachinesMetaTags = () => {
    const title = "BIS Schema X Certificering voor Roterende Elektrische Machines";
    const description =
      "BIS Schema X Certificering voor roterende elektrische machines, zoals Generatoren, enz., en/of hun samenstellingen, sub-assemblages en componenten, is een cruciale regelgevingsstap naar kwaliteit en veiligheid van essentiële industriële apparatuur";
    const keywords =
      "BIS Certificering voor Roterende Elektrische Machines, BIS Schema X Certificering voor Roterende Elektrische Machines, Schema X Certificering voor Roterende Elektrische Machines, BIS voor Roterende Elektrische Machines, OTR voor Roterende Elektrische Machines";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Roterende Elektrische Machines in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor roterende elektrische machines in India. Begrijp OTR 2024 naleving, BIS Licentie proces, ISI markering vereisten, en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const RotaryElectricalMachinesBreadcrumb = () => {
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
                      BIS Certificering voor Roterende Elektrische Machines
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
  
  const RotaryElectricalMachinesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <RotaryElectricalMachinesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const RotaryElectricalMachinesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Roterende Elektrische Machines
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-Rotary-electrical-machines.png"
              alt="BIS Schema X Certificering voor Roterende Elektrische Machines"
              title="BIS Schema X Licentie voor Roterende Elektrische Machines"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Generatoren, motoren en alternatoren als roterende elektrische machines
            zijn essentiële soorten machines die worden gebruikt in verschillende
            cruciale activiteiten zoals het runnen van industrieën, het opwekken van
            stroom, en zelfs het vervullen van informatietechnologie-infrastructuur en
            andere behoeften op wereldwijde schaal. Deze machines werken samen in
            sectoren zoals energie en transport, productie, en commerciële complexen
            omdat ze mechanische energie omzetten in elektriciteit of vice versa.
            Dergelijke machines zijn cruciaal en daarom zijn hun kwaliteit,
            betrouwbaarheid en veiligheid belangrijk. In India heeft BIS dit probleem
            aangepakt met Schema X certificering voor roterende elektrische machines
            en hun samenstellingen en componenten samen met andere elektrische
            apparatuur.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            In de Omnibus Technische Regeling Order 2024 heeft het Ministerie van
            Zware Industrie verklaard dat alle fabrikanten, zowel buitenlands als
            lokaal, die roterende machines en alle andere gerelateerde apparatuur
            produceren, moeten voldoen aan Schema X Certificering op 1 september 2026.
            Deze regelgeving vermeldt alle soorten roterende elektrische machines
            inclusief generatoren, alternatoren, synchrone en asynchrone motoren, en
            alle samenstellingen, sub-assemblages en machinecomponenten.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            Deze blog bespreekt het belang, de reikwijdte, certificeringsprocedures,
            voordelen en andere gerelateerde documentatie van Schema X certificering
            voor alle soorten roterende elektrische machines.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Importance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Belang van BIS voor Roterende Elektrische Machines
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Roterende elektrische machines worden veel gebruikt in:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Stroomopwekking en distributie</li>
            <li>Industriële automatisering en apparatuur</li>
            <li>Transport (spoorwegen, schepen, elektrische voertuigen)</li>
            <li>Olie-, gas- en energiesector</li>
            <li>Elektrische apparatuur voor consumenten- en commercieel gebruik</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Enkele risico's die kunnen optreden zonder certificering omvatten:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Elektrische gevaren, kortsluiting en brandrisico's</li>
            <li>Mechanische schade en kostbare stilstandtijd</li>
            <li>Energieverspilling</li>
            <li>Uitsluiting van overheidsaanbestedingen en projecten</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Schema X Certificering voor Roterende Elektrische Machines garandeert dat
            deze producten voldoen aan strikte kwaliteits-, efficiëntie- en
            veiligheidsnormen.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificaat voor Roterende Elektrische Machines?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering voor Roterende Elektrische Machines is een
            overheidsreguleringsschema onder de BIS Conformiteitsbeoordelingsregeling,
            2018. Dit certificeert goederen voor Indiase normen voordat ze de Indiase
            markt betreden.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Schema X Certificering voor Roterende Elektrische Machines: Belangrijkste
            kenmerken:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Van toepassing op zowel Indiase als buitenlandse fabrikanten</li>
            <li>
              Van toepassing op motoren, generatoren, alternatoren en andere roterende
              elektrische machines
            </li>
            <li>
              Voldoende producttesten, audits en nalevingsvalidatie zijn verplicht
            </li>
            <li>Fabrieksinspectie om kwaliteitscontrole te waarborgen</li>
            <li>
              Stelt fabrikanten in staat om BIS registratie aan te vragen op basis van
              certificering voor de bovengenoemde Roterende Elektrische Machines.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Roterende Machines
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            OTR voor Roterende Elektrische Machines werd aangekondigd door het
            Ministerie van Zware Industrie in 2024, wat Schema X certificering vereist.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Alle fabrikanten en importeurs zijn verplicht om een geldige BIS
            Licentie voor Roterende Elektrische Machines onder Schema X te verkrijgen
            op 1 september 2026. "Dit zal niet-gecertificeerde roterende elektrische
            machines stoppen van verkoop, import of deelname aan aanbestedingen in het
            hele land," zei een overheidsfunctionaris.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Roterende Elektrische Machines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Veiligheid & Naleving: Voorkomt elektrische en mechanische gevaren met
              strikte normen.
            </li>
            <li>
              Kwaliteit & Betrouwbaarheid: Gecertificeerde Roterende Elektrische
              Machines presteren met hoge nauwkeurigheid en precisie.
            </li>
            <li>
              Markttoegang: BIS Licentie voor Roterende Elektrische Machines is meestal
              vereist voor aanbestedingen door publieke instanties.
            </li>
            <li>
              Klantvertrouwen: Het BIS merkteken voor Roterende Elektrische Machines
              geeft klanten informatie over productkwaliteit en duurzaamheid.
            </li>
            <li>
              Concurrentievoordeel: BIS-gecertificeerde merken/fabrikanten worden de
              voorkeur gegeven in gereguleerde markten en voor overheidsaanbestedingen.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Machinery Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Roterende Elektrische Machines Onder BIS Certificeringsschema
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Schema X Accreditatie voor Roterende Elektrische Machines omvat
            verschillende soorten zoals:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>AC- en DC-motoren</li>
            <li>Generatoren en alternatoren</li>
            <li>Turbo-generatoren en hydro-generatoren</li>
            <li>
              Gespecialiseerde soorten Roterende Machines gebruikt in Industrie en
              Nutsvoorzieningen
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Alle soorten moeten voldoen aan de geldende Indiase normen (IS-codes)
            zoals IS 16819:2018/ISO 12100:2010 (Machineveiligheid Algemene Principes
            voor Ontwerp - Risicobeoordeling en Risicovermindering). Alle variëteiten
            moeten voldoen aan de relevante Indiase normen (IS-codes) voor kwaliteit,
            veiligheid en energie-efficiëntie.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Proces van BIS Certificering voor Roterende Elektrische Machines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Identificatie van Relevante Normen: Verwijzen naar relevante IS-codes
              voor uw type Roterende Elektrische Machine.
            </li>
            <li>
              Producttesten: Uitvoeren van vereiste prestaties- en
              veiligheidstests volgens industriestandaarden, in door BIS
              geaccrediteerde laboratoria.
            </li>
            <li>
              Fabrieksinspectie: Controleren van kwaliteitsborgingssystemen op
              productielocaties door BIS functionarissen.
            </li>
            <li>
              Aanvraag & Documentatie: Verstrekken van technische vereisten,
              kwaliteitshandleidingen en testrapporten.
            </li>
            <li>
              Uitgifte van BIS Licentie voor Roterende Elektrische Machines: U kunt
              het BIS merkteken aanbrengen na goedkeuring.
            </li>
            <li>
              Voortdurende Naleving: BIS controleert en voert ongeplande audits uit
              voor naleving van normen.
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Niet-naleving
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Fabrikanten die niet alle modellen roterende elektrische machines hebben
            gecertificeerd met BIS Certificering voor Roterende Elektrische Machines
            op 1 september 2026 lopen het risico van:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              Verkoop/import verbod voor niet-gecertificeerde roterende elektrische
              machines
            </li>
            <li>Inbeslagname van niet-conforme apparatuur en monetaire sancties</li>
            <li>
              Dit maakt u niet in aanmerking komend voor overheidsaanbestedingen of
              PSU's
            </li>
            <li>Merkwaarde permanent beïnvloed in India</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusie
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Implementatie van BIS Schema X Certificering voor Roterende Elektrische
            Machines in OTR 2024 is een stap om veiligheid, efficiëntie en kwaliteit
            te brengen in de elektrische industriële sector in India.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Fabrikanten, Importeurs en Exporteurs profiteren van dit proces door BIS
            Certificering voor Roterende Elektrische Machines te verkrijgen, door een
            BIS Licentie voor Roterende Elektrische Machines te verkrijgen, en door het
            BIS merkteken voor Roterende Elektrische Machines op hun producten aan te
            brengen, wat aantoont dat hun producten voldoen aan lokale
            marktreguleringssystemen en klantvereisten.
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
  