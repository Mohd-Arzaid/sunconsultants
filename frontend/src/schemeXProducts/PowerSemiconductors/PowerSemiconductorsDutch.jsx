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
  
  const PowerSemiconductorsDutch = () => {
    return (
      <div className="relative w-full">
        <PowerSemiconductorsMetaTags />
        <PowerSemiconductorsBreadcrumb />
        <PowerSemiconductorsMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default PowerSemiconductorsDutch;
  
  const PowerSemiconductorsMetaTags = () => {
    const title = "BIS Schema X Certificering voor Vermogenssemiconductor Omzetters";
    const description =
      "BIS Schema X Certificering is van toepassing op alle soorten vermogenssemiconductor omzetters en hun samenstellingen, sub-assemblages en componenten om kwaliteit en veiligheid in India te waarborgen";
    const keywords =
      "BIS Certificering voor Vermogenssemiconductor Omzetters, BIS Schema X Certificering voor Vermogenssemiconductor Omzetters, Schema X Certificering voor Vermogenssemiconductor Omzetters, BIS voor Vermogenssemiconductor Omzetters, OTR voor Vermogenssemiconductor Omzetters";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Vermogenssemiconductor Omzetters in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor vermogenssemiconductor omzetters in India. Begrijp OTR 2024 naleving, BIS Licentie proces, ISI markering vereisten, en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const PowerSemiconductorsBreadcrumb = () => {
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
                      BIS Certificering voor Vermogenssemiconductor Omzetters
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
  
  const PowerSemiconductorsMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <PowerSemiconductorsMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const PowerSemiconductorsMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Vermogenssemiconductor Omzetters
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-Power-Semiconductor-Converter.png"
              alt="BIS Schema X Certificering voor Vermogenssemiconductor Omzetters"
              title="BIS Schema X Licentie voor Vermogenssemiconductor Omzetters"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Vermogenssemiconductor omzetters maken effectieve uitvoering en
            modificatie van elektrisch vermogen mogelijk van de ene vorm naar de
            andere in verschillende toepassingen. Deze toepassingen omvatten
            hernieuwbare energie, elektrische voertuigen, industriële automatisering
            en consumentenelektronica. Ze fungeren als basis voor elektrische en
            elektronische apparaten en apparatuur. Vanwege het groeiende belang en
            de betekenis van deze apparaten in de energiesector en industrie van het
            land, heeft het Bureau of Indian Standards (BIS) certificering van
            vermogenssemiconductor omzetters opgenomen onder het Schema X
            certificeringskader.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            In overeenstemming met het bevel gegeven door het Ministerie van Zware
            Industrie, wordt van alle soorten fabrikanten verwacht, ongeacht of ze
            lokaal of in het buitenland opereren, om te voldoen aan BIS certificering
            voor Vermogenssemiconductor Omzetters en hun sub-assemblages en
            componenten, op 1 september 2026. BIS Schema X Certificering voor
            Vermogenssemiconductor Omzetters is een regelgevend certificeringsschema,
            een stap naar verbetering van Indiase productie door verhoogde veiligheid,
            kwaliteit en wereldwijd concurrerende normen.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            Deze blog zal helpen bij het verstrekken van de benodigde informatie
            over documentatie betreffende Schema X certificering voor alle
            sub-assemblages, componenten en/of soorten Vermogenssemiconductor
            Omzetters, reikwijdte en belang, certificeringsproces, voordelen, en
            andere informatie.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Significance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Belang van BIS voor Vermogenssemiconductor Omzetters
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Toepassingen van vermogenssemiconductor omzetters omvatten:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Zonne- en windenergieprojecten</li>
            <li>EV oplaadstations en aandrijving</li>
            <li>Fabrieksautomatisering en robotica</li>
            <li>Consumentenelektronica en PSU's</li>
            <li>Transmissie- en distributienetwerken</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Zonder certificering omvatten risico's:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Elektrische schade en oververhitting</li>
            <li>Onveilige omstandigheden en apparatuurschade</li>
            <li>Verminderde energie-efficiëntie</li>
            <li>Negatieve aanbiedingsresultaten van projecten en overheidsaanbestedingen</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Vermogenssemiconductor Omzetters met Schema X certificering tonen aan
            dat deze producten voldoen aan strikte Indiase normen voor prestaties,
            veiligheid en betrouwbaarheid.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificaat voor Vermogenssemiconductor Omzetters?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering voor Vermogenssemiconductor Omzetters valt
            onder de BIS Conformiteitsbeoordelingsregeling, 2018. Dit zorgt ervoor
            dat producten strenge tests, inspecties en nalevingscontroles ondergaan
            voordat ze de Indiase markt betreden.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Belangrijkste Kenmerken:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>Verplicht voor alle buitenlandse en Indiase fabrikanten</li>
            <li>
              Omvat uitgebreide introductie van vermogenssemiconductor apparaten,
              gate drive ontwerp, en passieve componenten.
            </li>
            <li>Verplichte producttesten in door BIS geaccrediteerde laboratoria</li>
            <li>
              Uitsluiting van stedelijke werken, en projecten en aanbestedingen van
              de Overheid.
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Certificering zorgt ervoor dat Vermogenssemiconductor Omzetters voldoen
            aan strikte Indiase normen voor prestaties, veiligheid en duurzaamheid.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificering voor Vermogenssemiconductor Omzetters?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering voor Vermogenssemiconductor Omzetters valt
            onder de BIS Conformiteitsbeoordelingsregeling, 2018. Dit toont aan dat
            een product strenge tests, inspecties en naleving in India zal vereisen
            voordat het naar de markt hier wordt gebracht.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Belangrijkste Kenmerken:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Verplicht voor Indiase en buitenlandse fabrikanten</li>
            <li>
              Omvat verschillende vermogenssemiconductor toepassingen (AC-DC, DC-DC,
              DC-AC en AC-AC)
            </li>
            <li>
              Vereist vermogen- en veiligheidscertificering door door BIS goedgekeurde
              laboratoria
            </li>
            <li>Omvat fabrieksaudit en kwaliteitssystemen</li>
            <li>
              Geeft het recht om het BIS Standaard Merkteken te gebruiken als het
              product ook een BIS licentie heeft.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Vermogenssemiconductor Omzetters
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            De nieuwe Omnibus Technische Regeling (OTR) 2024 voor Vermogenssemiconductor
            Omzetters is uitgegeven door het Ministerie van Zware Industrie. Dit OTR
            bevel vereist Schema X certificering voor deze producten om kwaliteit en
            consumentenveiligheid te waarborgen.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Alle fabrikanten en importeurs zijn verplicht om certificering
            te verkrijgen vóór 1 september 2026. Na deze deadline kunnen niet-gecertificeerde
            omzetters niet worden gemaakt, verkocht of geïmporteerd in India.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Vermogenssemiconductor Omzetters
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Productveiligheid: Vermindert risico op oververhitting, brandongevallen
              en kortsluiting.
            </li>
            <li>
              Energie-efficiëntie: Garandeert geoptimaliseerde prestaties en
              overeenstemming met energiebesparende normen.
            </li>
            <li>
              Markttoegang: OTR voor Vermogenssemiconductor Omzetters vereist
              certificering voor markttoegang in India.
            </li>
            <li>
              Concurrentievoordeel: Overheids- en particuliere aanbestedingen geven
              de voorkeur aan gecertificeerde producten.
            </li>
            <li>
              Klantvertrouwen: Het BIS Standaard Merkteken toont betrouwbaarheid,
              veiligheid en kwaliteit.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Proces van BIS Certificering voor Vermogenssemiconductor Omzetters
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              Identificatie van Relevante IS-normen: Verwijzen naar relevante IS-codes
              voor uw type omzetter.
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
              Uitgifte van BIS Licentie voor Vermogenssemiconductor Omzetters: U
              kunt het BIS merkteken aanbrengen na goedkeuring.
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
            Fabrikanten die niet alle modellen vermogenssemiconductor omzetters hebben
            gecertificeerd met BIS Certificering voor Vermogenssemiconductor Omzetters
            op 1 september 2026 lopen het risico van:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Verkoop/import verbod voor niet-gecertificeerde omzetters</li>
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
            Implementatie van BIS Schema X Certificering voor Vermogenssemiconductor
            Omzetters in OTR 2024 is een stap om veiligheid, efficiëntie en kwaliteit
            te brengen in de snelgroeiende energiesector en elektronica in India.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Fabrikanten, Importeurs en Exporteurs profiteren van dit proces door
            BIS Certificering voor Vermogenssemiconductor Omzetters te verkrijgen,
            door een BIS Licentie voor Vermogenssemiconductor Omzetters te verkrijgen,
            en door het BIS merkteken voor Vermogenssemiconductor Omzetters op hun
            producten aan te brengen, wat aantoont dat hun producten voldoen aan
            lokale marktreguleringssystemen en klantvereisten.
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
  