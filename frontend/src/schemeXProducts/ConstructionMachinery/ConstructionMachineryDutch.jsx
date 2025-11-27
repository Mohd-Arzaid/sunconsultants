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
  
  
  const ConstructionMachineryDutch = () => {
    return (
      <div className="relative w-full">
        <ConstructionMachineryMetaTags />
  
        <ConstructionMachineryBreadcrumb />
        <ConstructionMachineryMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default ConstructionMachineryDutch;
  
  const ConstructionMachineryMetaTags = () => {
    const title =
      "BIS Schema X Certificering voor Bouwmachines, Grondverzet en Mijnbouwmachines";
    const description =
      "BIS Schema X Certificering is verplicht voor bouwmachines, grondverzet en mijnbouwmachines om veiligheid, kwaliteit en standaardisatie in kritieke industriële sectoren te waarborgen";
    const keywords =
      "BIS Certificering voor Bouwmachines, BIS Schema X Certificering voor Bouwmachines, Schema X certificering voor Bouwmachines, BIS voor Bouwmachines, OTR voor Bouwmachines";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Bouwmachines in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor bouwmachines in India. Begrijp OTR 2024-naleving, BIS Licentieproces, ISI-markeringvereisten en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const ConstructionMachineryBreadcrumb = () => {
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
                      BIS Schema X Certificering voor Bouwmachines
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
  
  const ConstructionMachineryMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <ConstructionMachineryMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const ConstructionMachineryMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Bouwmachines
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-License-for-Construction-Machinery.png"
              alt="BIS Schema X Certificering voor Bouwmachines"
              title="BIS Schema X Licentie voor Bouwmachines"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Graafmachines, laadmachines, bulldozers, betonmixers en wegwalsen zijn
            belangrijke bouwmachines die worden gebruikt in de infrastructuuropbouw
            van India. Een hogere vraag naar veilige en betrouwbare machines komt
            voort uit grote investeringen in snelwegen, slimme steden, fabrieken en
            woningbouw.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Het Bureau of Indian Standards (BIS) heeft Verplichte BIS Certificering
            onder Schema-X voor Bouwmachines geïntroduceerd om kwaliteits-, service-
            en veiligheidsgaranties te bieden. Dit zorgt ervoor dat apparaten
            voldoen aan Indiase Normen voordat ze beschikbaar zijn voor verkoop of
            import in India.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            In dit artikel leert u over BIS Schema X Certificering voor
            Bouwmachines, OTR-vereisten voor Bouwmachines, en het proces om BIS
            Licentie voor Bouwmachines te verkrijgen evenals het BIS-merk voor
            Bouwmachines.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Waarom BIS voor Bouwmachines Belangrijk is
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Bouwmachines worden toegepast in infrastructuurgroei en grote
            bouwontwikkelingslocaties.
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Weg- en snelwegontwikkeling</li>
            <li>Vastgoed- en woningbouwprojecten</li>
            <li>Mijnbouw en grondverzet</li>
            <li>Industriële bouw en zware techniek</li>
            <li>Haven-, luchthaven- en metropojecten</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            De gevolgen van het ontbreken van BIS voor Bouwapparatuur zijn als
            volgt:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Apparatuurfalen en kostbare stilstandtijd</li>
            <li>Hogere waarschijnlijkheid van ongevallen en gevarenrisico</li>
            <li>Niet-naleving met overheidsaanbestedingen</li>
            <li>Verhoogde onderhouds- en operationele kosten</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Het BIS-merk voor Bouwmachines geeft aan dat het product veilig,
            betrouwbaar en in overeenstemming met Indiase Normen is.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificering voor Bouwmachines?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering valt onder de Conformiteitsbeoordelingsvereisten
            van het Bureau of Indian Standards (BIS) (2018) die richtlijnen bieden voor
            producten. In dit schema bepaalt BIS de productkwaliteit en zorgt ervoor
            dat het product gezondheidsrisico's voor mensen vermindert.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Belangrijkste Kenmerken - Schema X Certificering voor Bouwapparatuur:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Verplicht voor binnenlandse en buitenlandse fabrikanten</li>
            <li>Omvat alle soorten zware machines en bouwapparatuur</li>
            <li>
              Verplichte producttests, verplichte fabrieksbezoeken en nalevingsaudits
              moeten regelmatig worden uitgevoerd
            </li>
            <li>Autoriseert gebruik van het BIS-merk voor Bouwmachines</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Bouwapparatuur
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Schema X Certificering wordt verplicht als onderdeel van de Omnibus
            Technische Regeling (OTR) 2024 voor Bouwmachines die is aangekondigd door
            het Ministerie van Zware Industrie.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Alle fabrikanten en importeurs moeten BIS Licentie voor
            Bouwmachines onder Schema X verkrijgen vóór 01 september 2026. Vanaf
            deze datum mogen niet-gecertificeerde apparatuur niet worden geproduceerd,
            vervoerd noch verkocht voor openbare infrastructuurprogramma's.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Bouwapparatuur of Bouwmachines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Veiligheid & Betrouwbaarheid: Vermindert risico op mechanisch falen of
              ongevallen op bouwlocaties.
            </li>
            <li>
              Markttoegang & Aanbestedingskwalificatie: BIS Gecertificeerde Producten
              komen in aanmerking voor Overheidsaanbestedingen en PSU's.
            </li>
            <li>
              Consumenten- & Aannemersvertrouwen: Het BIS Bouwmachines-merk zorgt
              voor veilige en kwaliteitsvolle producten voor al hun kopers.
            </li>
            <li>
              Toegang tot de Wereldmarkt: BIS Licentie voor Bouwmachines kan
              voordelig zijn voor buitenlandse bedrijven voor eenvoudige toegang tot
              de Indiase markt.
            </li>
            <li>
              Juridische Naleving: Immuniteit van boetes, verboden en sancties onder
              OTR Bouwmachines.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Construction Equipment Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Bouwapparatuur die worden gedekt onder Schema X
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering voor Bouwmachines is van toepassing op
            verschillende categorieën apparatuur zoals:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Graafmachines en Backhoe Loaders</li>
            <li>Bulldozers en Wegwalsen</li>
            <li>Kranen gebruikt op bouwlocaties</li>
            <li>Betonmixers en Batching Plants</li>
            <li>Asfaltinstallaties en Wegverharders</li>
            <li>Hei- en Boorapparatuur</li>
            <li>Materiaalhandling- en Grondverzetapparatuur</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Elke categorie moet voldoen aan de relevante Indiase Normen (IS-code)
            in overeenstemming met IS 17055 (Deel 7):2020, IS 17055 (Deel 8):2020 en
            IS 17055 (Deel 12):2020 in termen van ontwerp, veiligheid, prestaties,
            enz.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Procedure voor BIS Licentie voor Bouwapparatuur
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              Identificatie van Van Toepassing Zijnde Normen: Zoek de IS-code voor uw
              type Bouwmachine.
            </li>
            <li>
              Producttests: Voer veiligheids- en prestatietests uit in BIS-erkende
              laboratoria.
            </li>
            <li>
              Fabrieksinspectie: BIS-auditors controleren letterlijk QC- en
              productieprocessen.
            </li>
            <li>
              Aanvraag & Documentatie: Verstrek rapporten, specificaties en
              handleidingen voor beoordeling.
            </li>
            <li>
              BIS Licentie voor Bouwmachines: Na goedkeuring mogen fabrikanten het
              BIS-merk voor Bouwmachines plaatsen.
            </li>
            <li>
              Continue Naleving: Regelmatige inspecties en monitoring handhaven
              continue naleving.
            </li>
          </ul>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Naleving
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Massaal falen of niet-uitgifte van BIS Certificaat Bouwmachines tot 1
            september 2026 in het geval van OTR voor Bouwmachines zal de volgende
            implicaties hebben:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              Verbod op verkoop en import van niet-gecertificeerde apparatuur
            </li>
            <li>Grote boetes en productinbeslagname</li>
            <li>Diskwalificatie van overheidsprojecten en -opdrachten</li>
            <li>
              Potentieel onbeperkte reputatieschade gedurende vele jaren in de
              toekomst
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusie
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Implementatie van Verplichte BIS Schema X Certificering voor
            Bouwmachines onder OTR voor Bouwmachines (2024) is een significante stap
            naar veiligheid, efficiëntie en standaardisatie in de binnenlandse
            industrie van India.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Voor fabrikanten, importeurs en exporteurs van bouwmachines is het
            verkrijgen van BIS Licentie voor Bouwmachines en het plaatsen van het
            BIS-merk voor Bouwmachines niet alleen een nalevingsvereiste, het is een
            strategische stap om uit te breiden naar nieuwe markten, door te dringen
            tot de snelgroeiende Indiase bouwmarkt, en uw reputatie op lange termijn
            op te bouwen.
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
  