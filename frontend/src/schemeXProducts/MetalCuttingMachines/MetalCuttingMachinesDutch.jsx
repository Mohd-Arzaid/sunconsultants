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
  
  const MetalCuttingMachinesDutch = () => {
    return (
      <div className="relative w-full">
        <MetalCuttingMachinesMetaTags />
        <MetalCuttingMachinesBreadcrumb />
        <MetalCuttingMachinesMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default MetalCuttingMachinesDutch;
  
  const MetalCuttingMachinesMetaTags = () => {
    const title =
      "BIS Schema X Certificering voor Metaalsnijmachines en hun Samenstellingen";
    const description =
      "BIS certificering is nu verplicht voor alle soorten metaalsnijmachines en/of hun samenstellingen, sub-assemblages en componenten die vallen onder HS-codes 8456 tot 8461";
    const keywords =
      "BIS Certificering voor Metaalsnijmachines, BIS Schema X Certificering voor Metaalsnijmachines, Schema X Certificering voor Metaalsnijmachines, BIS voor Metaalsnijmachines, OTR voor Metaalsnijmachines";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Metaalsnijmachines in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor metaalsnijmachines in India. Begrijp OTR 2024 naleving, BIS Licentie proces, ISI markering vereisten, en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const MetalCuttingMachinesBreadcrumb = () => {
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
                      BIS Certificering voor Metaalsnijmachines
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
  
  const MetalCuttingMachinesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <MetalCuttingMachinesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const MetalCuttingMachinesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Metaalsnijmachines
          </h1>

          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-metal-cutting-machine- tools.png"
              alt="BIS Schema X Certificering voor Metaalsnijmachine Gereedschappen"
              title="BIS Schema X Licentie voor metaalsnijmachine gereedschappen"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Metaalbewerking is een cruciale fabricagetechnologie die de machine-,
            auto-, luchtvaart- en productie-industrie in India ondersteunt. Deze
            machines variëren van CNC draaibanken en freesmachines tot lasersnijders
            en helpen ook om de productie hoog en de kosten laag te houden in
            industrieën over de hele wereld. Met de toenemende vraag naar
            hoogwaardige machines in India heeft de overheid BIS Certificering
            voor Metaalsnijmachines verplicht gesteld om kwaliteit en veiligheid te
            waarborgen.
          </p>

          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            In overeenstemming met BIS (Bureau of Indian Standards) Schema X
            Certificering voor Metaalsnijmachines moeten zowel buitenlandse als
            Indiase fabrikanten voldoen aan Indiase normen voordat ze kunnen worden
            verkocht op de Indiase markt. Dit is een manier om ervoor te zorgen dat
            machines veilig kunnen worden gebruikt en klantvertrouwen te waarborgen.
          </p>

          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            Dit artikel biedt informatie over Schema X certificering voor
            Metaalsnijmachines, OTR 2024 vereisten voor Metaalsnijmachines, en de
            procedure voor het verkrijgen van een BIS Licentie voor Metaalsnijmachines
            om het BIS merkteken op Metaalsnijmachines aan te brengen.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Waarom is BIS Verplicht voor Metaalsnijmachines?
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            Metaalsnijmachines worden toegepast in:
          </p>

          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Auto- en auto-onderdelen productie</li>
            <li>Luchtvaart- en defensie-industrie</li>
            <li>Zwaar machinebouw en constructie</li>
            <li>Elektronica- en elektrische industrie</li>
            <li>Matrijsfabricage en matrijsgieten</li>
          </ul>

          <p className="text-gray-600 text-base font-geist mb-4">
            Bedrijven die geen BIS hebben voor Metaalsnijmachines kunnen
            geconfronteerd worden met:
          </p>

          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Slechte bewerkingsnauwkeurigheid en lage productie-output</li>
            <li>
              Machinefalen en productieverlies - Bedrijfstijd versus stilstandtijd.
            </li>
            <li>Potentiële gevaren voor operators</li>
            <li>Uitsluiting van openbare aanbestedingen en gereguleerde bedrijven</li>
          </ul>

          <p className="text-gray-600 text-base font-geist mb-6">
            Het BIS merkteken zorgt ervoor dat metaalsnijmachines voldoen aan de
            kwaliteitsnormen die door het bureau zijn vastgesteld.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificering voor Metaalsnijmachines?
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering voor Metaalsnijmachines valt onder de BIS
            Conformiteitsbeoordelingsregeling, 2018, die is opgesteld om ervoor te
            zorgen dat producten voldoen aan de vereiste kwaliteitsnormen die een
            huidige behoefte zijn voor industriële apparatuur.
          </p>

          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Belangrijkste Kenmerken van Schema X Certificering voor Metaalsnijmachines
          </h3>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Verplicht voor Indiase en buitenlandse fabrikanten</li>
            <li>
              Van toepassing op verschillende metaalsnijmachines die zijn
              aangemeld onder Indiase normen
            </li>
            <li>
              Omvat laboratoriumtests, fabrieksinspecties en regelmatige audits
            </li>
            <li>
              Autoriseert het gebruik van het BIS merkteken voor metaalsnijmachines.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            OTR BIS Verplicht voor Metaalsnijmachines
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            Het bevel van het Ministerie van Zware Industrie betreffende de Omnibus
            Technische Regeling (OTR) voor Metaalsnijmachines in 2024 heeft
            certificering verplicht gesteld.
          </p>

          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: BIS Licentie wordt verplicht voor alle fabrikanten en
            importeurs van metaalsnijmachines vanaf 1 september 2026. Vanaf deze
            datum kunnen niet-gecertificeerde machines niet worden aangeboden voor
            verkoop, geïmporteerd of geïnstalleerd in India.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Metaalsnijmachines
          </h2>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Productbetrouwbaarheid: Machines zijn gecertificeerd voor nauwkeurigheid,
              duurzaamheid en consistente prestaties.
            </li>
            <li>
              Marktconcurrentievermogen: BIS Licentie voor Metaalsnijmachines is
              verplicht om veel industriële en overheidsorders te krijgen.
            </li>
            <li>
              Klantvertrouwen: Het BIS merkteken voor Metaalsnijmachines wekt
              vertrouwen bij kopers.
            </li>
            <li>
              Wettelijke Naleving: In overeenstemming met OTR voor Metaalsnijmachines
              en BIS.
            </li>
            <li>
              Wereldwijde Voordelen: Gemakkelijkere toegang voor buitenlandse
              fabrikanten tot de Indiase markt.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Metal Cutting Machines Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Metaalsnijmachines die Vallen onder Schema X Goedkeuring
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            Schema X Certificaat omvat de volgende soorten voor Metaalsnijmachines
            maar is niet beperkt tot:
          </p>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>CNC draaibanken en draaicentra</li>
            <li>Freesmachines</li>
            <li>Boormachines</li>
            <li>Slijpmachines</li>
            <li>CNC snijmachines</li>
            <li>Lasersnijmachines of -apparatuur</li>
            <li>Plasmasnijmachines</li>
            <li>Machines voor waterstraalsnijden</li>
            <li>Bandzagen en ijzerzagen</li>
          </ul>

          <p className="text-gray-600 text-base font-geist mb-6">
            Alle soorten metaalsnijmachines moeten voldoen aan de relevante Indiase
            normen (IS-codes) zoals IS 17277 (Deel 1): 2019 / ISO 16092-1: 2017
            (Machineveiligheid Pers Deel 1 Algemene Veiligheidsvereisten). Elk
            machinemodel moet voldoen aan zijn eigen IS-code met betrekking tot
            veiligheid, energie-efficiëntie en nauwkeurigheid.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Procedure voor BIS Licentie voor Metaalsnijmachines
          </h2>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              Identificatie van Toepasselijke IS-normen: Kies de juiste norm
              volgens het type machine.
            </li>
            <li>
              Producttesten: Dien de machine in voor testen in door de overheid
              erkende BIS laboratoria.
            </li>
            <li>
              Fabrieksaudit: Directe bezoeken worden uitgevoerd door BIS functionarissen
              om passende kwaliteitsproductie te waarborgen.
            </li>
            <li>
              Documentindiening: Verstrek technische handleidingen, testrapporten en
              kwaliteitsborgingsdocumenten.
            </li>
            <li>
              Verlening van BIS Licentie voor Metaalsnijmachines: Fabrikanten kunnen
              nu het BIS merkteken aanbrengen onder productcertificering volgens
              de bovenstaande normen.
            </li>
            <li>
              Voortdurende Naleving: Toezicht en periodieke audits worden uitgevoerd
              om voortdurende naleving met BIS te waarborgen.
            </li>
          </ul>

          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Straf voor Niet-naleving
          </div>

          <p className="text-gray-600 text-base font-geist mb-4">
            Niet-naleving van BIS Certificering voor Metaalsnijmachines onder OTR
            voor Metaalsnijmachines kan resulteren in:
          </p>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Verbod op verkoop/import van niet-gecertificeerde machines</li>
            <li>Hoge boetes en productinbeslagname</li>
            <li>Uitsluiting van overheidscontracten</li>
            <li>Langdurige schade aan merk- en bedrijfsreputatie</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusie
          </div>

          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering voor Metaalsnijmachines in OTR voor
            Metaalsnijmachines (2024) speelt een cruciale rol in de nauwkeurigheid,
            veiligheid en betrouwbaarheid van de Indiase industrie.
          </p>

          <p className="text-gray-600 text-base font-geist mb-6">
            Voor fabrikanten en importeurs is het hebben van een BIS Licentie voor
            Metaalsnijmachines en het aanbrengen van het BIS merkteken op
            Metaalsnijmachines niet alleen een nalevingsactie, het is een
            strategische investering die veelvoudige rendementen biedt in de vorm
            van productvoordelen, klantvertrouwen en marktsuperioriteit.
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
                  alt="BIS"
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
                ISI MERKTEKEN (BIS) voor Indiase Fabrikanten
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  };