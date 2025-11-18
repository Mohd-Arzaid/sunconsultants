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
  
  const RubberAndPlasticsMachineryDutch = () => {
    return (
      <div className="relative w-full">
        <RubberAndPlasticsMachineryMetaTags />
  
        <RubberAndPlasticsMachineryBreadcrumb />
        <RubberAndPlasticsMachineryMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default RubberAndPlasticsMachineryDutch;
  
  const RubberAndPlasticsMachineryMetaTags = () => {
    const title = "BIS Schema X Certificering voor Rubber en Kunststofmachines";
    const description =
      "BIS Schema X Certificering is verplicht voor rubber- en kunststofmachines, hun samenstellingen, sub-assemblages en componenten onder Schema X om kwaliteit, veiligheid en klantvertrouwen te waarborgen";
    const keywords =
      "BIS Certificering voor Rubber en Kunststofmachines, BIS Schema X Certificering voor Rubber en Kunststofmachines, Schema X Certificering voor Rubber en Kunststofmachines, BIS voor Rubber en Kunststofmachines, OTR voor Rubber en Kunststofmachines";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Rubber en Kunststofmachines in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor rubber- en kunststofmachines in India. Begrijp OTR 2024 naleving, BIS Licentie proces, ISI markering vereisten, en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const RubberAndPlasticsMachineryBreadcrumb = () => {
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
                      BIS Certificering voor Rubber en Kunststofmachines
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
  
  const RubberAndPlasticsMachineryMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <RubberAndPlasticsMachineryMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const RubberAndPlasticsMachineryMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Rubber en Kunststofmachines
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-for-machinery-for-working-rubber-and-plastics.png"
              title="BIS Schema X Licentie voor Rubber en Kunststofmachines"
              alt="BIS Schema X Certificering voor Rubber en Kunststofmachines"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            De industriële sector van India verandert snel, wat leidt tot een
            toenemende vraag naar gestandaardiseerde, veilige en hoogwaardige
            machines. In het bijzonder zijn machines voor het werken met rubber en
            kunststof cruciaal voor verschillende industrieën, waaronder automobiel,
            constructie, verpakking en consumptiegoederen. Om productveiligheid,
            consumentenbescherming en kwaliteitsborging verder te verbeteren, heeft
            het Bureau of Indian Standards (BIS) een regelgevingskader vastgesteld
            dat certificering vereist voor Schema X Naleving.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Het Ministerie van Zware Industrie, onder de Omnibus Technische Regeling
            (OTR) Order, 2024, verplicht alle fabrikanten, zowel binnenlands als
            internationaal, om BIS certificering onder Schema X te verkrijgen voor
            bepaalde machinecategorieën. Dit omvat alle soorten machines voor het
            werken met rubber en kunststof en hun samenstellingen, sub-assemblages
            en componenten.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            Deze blog beschrijft het belang en de relevantie van Schema X
            Certificering, het certificeringsproces en de voordelen die verband
            houden met de vereiste documentatie voor rubber- en kunststofmachines en
            al hun samenstellingen, sub-assemblages en componenten.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Importance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Belang van BIS voor Rubber en Kunststofmachines
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Rubber- en Kunststofmachines worden veel gebruikt in:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Productie van automobielcomponenten (banden, slangen, afdichtingen, dashboard)</li>
            <li>Kunststofverpakking en consumentenproducten</li>
            <li>Medische benodigdheden en farmaceutische verpakking</li>
            <li>Bouwmateriaal en infrastructuur</li>
            <li>Elektrische en elektronische componenten</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Zonder BIS voor Rubber en Kunststofmachines kunnen industrieën
            geconfronteerd worden met:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              Operationele inefficiëntie en frequente storingen
            </li>
            <li>Veiligheidsrisico's voor operators en eindgebruikers</li>
            <li>Producten van lage kwaliteit</li>
            <li>Diskwalificatie voor overheidsaanbestedingen of grote projecten</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            BIS Schema X Certificering voor Rubber en Kunststofmachines zorgt
            ervoor dat machines voldoen aan strikte Indiase normen, waardoor
            machines veiliger, duurzamer en marktklaar zijn.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificaat voor Rubber en Kunststofmachines?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering voor Rubber en Kunststofmachines in India
            valt onder de BIS Conformiteitsbeoordelingsregeling, 2018. Dit stelt
            prestatie- en veiligheidscriteria vast voor machines voor de verwerking
            van rubber en kunststof.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Schema X Certificering voor Rubber en Kunststofmachines: Belangrijkste
            kenmerken:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>Verplicht voor zowel Indiase als buitenlandse fabrikanten</li>
            <li>
              Omvat verschillende soorten rubber- en kunststofmachines volgens de
              aangekondigde IS-codes
            </li>
            <li>
              Vereist producttesten, audits van productieprocessen en voortdurend
              toezicht.
            </li>
            <li>Gebruik van het BIS standaard merkteken wanneer gecertificeerd.</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Dit certificaat garandeert machineveiligheid, energie-efficiëntie en
            betrouwbare productie voor zowel industrie als eindgebruikers.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Rubber en Kunststofmachines
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            OTR voor Rubber en Kunststofmachines werd aangekondigd door het
            Ministerie van Zware Industrie in 2024, wat Schema X certificering vereist.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Alle fabrikanten en importeurs zijn verplicht om een geldige BIS
            Licentie voor Rubber en Kunststofmachines onder Schema X te verkrijgen op
            1 september 2026. "Dit zal niet-gecertificeerde rubber- en
            kunststofmachines stoppen van productie, import of verkoop in India,"
            zei een overheidsfunctionaris.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Benefits Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Rubber en Kunststofmachines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Kwaliteitsgarantie: Voldoet aan Indiase normen voor prestaties en
              duurzaamheid.
            </li>
            <li>
              Marktconcurrentie: Gecertificeerde producten krijgen prioriteit voor
              aanbestedingen in zowel publieke als private sectoren.
            </li>
            <li>
              Klantvertrouwen: Kopers hebben meer vertrouwen wanneer ze machines
              kopen met BIS Certificering voor Rubber en Kunststofmachines.
            </li>
            <li>
              Wettelijke Naleving: U zult geen sancties of beperkingen krijgen
              na naleving van OTR voor Rubber en Kunststofmachines.
            </li>
            <li>
              Wereldwijd Voordeel: Internationale OEM's met certificering vinden
              gemakkelijker toegang tot de Indiase markt.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Machinery Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Rubber en Kunststofmachines Gedekt Onder BIS Certificeringsschema
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Schema X Certificering voor Rubber en Kunststofmachines omvat een breed
            scala aan apparatuur, waaronder:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Machines voor spuitgieten</li>
            <li>Extruders en blaasvormmachines</li>
            <li>Rubber mengmolens & interne mixers</li>
            <li>Kalander machines</li>
            <li>Persen voor compressiegieten</li>
            <li>Recycling- en granulatiemachines</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Elke categorie moet voldoen aan de geldende Indiase normen (IS-codes)
            zoals IS/ISO 20430: 2020 (Kunststof- en Rubbermachines-Spuitgietmachines-
            Veiligheidsvereisten). Elk type machine moet voldoen aan de geldende
            Indiase normen op het gebied van veiligheid, prestaties en betrouwbaarheid.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Proces van BIS Certificering voor Rubber en Kunststofmachines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              Identificatie van Relevante Normen: Selecteer de relevante IS-codes
              voor uw machinetype.
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
              Uitgifte van BIS Licentie voor Rubber en Kunststofmachines: U kunt
              het BIS merkteken aanbrengen na goedkeuring.
            </li>
            <li>
              Voortdurende Naleving: BIS controleert en voert ongeplande audits
              uit voor naleving van normen.
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Niet-naleving
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Fabrikanten die niet alle modellen rubber- en kunststofmachines hebben
            gecertificeerd met BIS Certificering voor Rubber en Kunststofmachines
            op 1 september 2026 lopen het risico van:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              Verkoop/import verbod voor niet-gecertificeerde rubber- en
              kunststofmachines
            </li>
            <li>Inbeslagname van niet-conforme apparatuur en monetaire sancties</li>
            <li>
              Dit maakt u niet in aanmerking komend voor overheidsaanbestedingen
              of PSU's
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
            Implementatie van BIS Schema X Certificering voor Rubber en
            Kunststofmachines in OTR 2024 is een stap om veiligheid, efficiëntie en
            kwaliteit te brengen in de industriële sector in India.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Fabrikanten, Importeurs en Exporteurs profiteren van dit proces door BIS
            Certificering voor Rubber en Kunststofmachines te verkrijgen, door een
            BIS Licentie voor Rubber en Kunststofmachines te verkrijgen, en door het
            BIS merkteken voor Rubber en Kunststofmachines op hun producten aan te
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
  