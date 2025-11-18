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
  
  const PackingMachineryDutch = () => {
    return (
      <div className="relative w-full">
        <PackingMachineryMetaTags />
  
        <PackingMachineryBreadcrumb />
        <PackingMachineryMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default PackingMachineryDutch;
  
  const PackingMachineryMetaTags = () => {
    const title =
      "BIS Schema X Certificering voor Verpakkingsmachines en hun Samenstellingen";
    const description =
      "BIS Schema X Certificering voor alle soorten machines voor het vullen, sluiten, verzegelen, etiketteren van flessen, verpakken of inpakken, en/of hun samenstellingen, sub-assemblages en componenten, is een belangrijke stap naar standaardisatie van veiligheid en kwaliteit in de Indiase productiesector";
    const keywords =
      "BIS Certificering voor Verpakkingsmachines, BIS Schema X Certificering voor Verpakkingsmachines, Schema X Certificering voor Verpakkingsmachines, BIS voor Verpakkingsmachines, OTR voor Verpakkingsmachines";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Verpakkingsmachines in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor verpakkingsmachines in India. Begrijp OTR 2024 naleving, BIS Licentie proces, ISI markering vereisten, en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const PackingMachineryBreadcrumb = () => {
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
                      BIS Certificering voor Verpakkingsmachines
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
  
  const PackingMachineryMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <PackingMachineryMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const PackingMachineryMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Verpakkingsmachines
          </h1>
  
          {/* BIS Scheme X Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-machinery-for-filling-closing-sealing-labelling.png"
              title="BIS Schema X Licentie voor Verpakkingsmachines"
              alt="BIS Schema X Certificering voor Verpakkingsmachines"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Verpakkingsmachines zijn cruciaal voor industrieën in de voedsel-,
            dranken-, farmaceutische, chemische, consumentengoederen- en
            logistieksector. Deze machines zorgen voor juiste, veilige en
            kwalitatieve productverpakking.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Om veiligheid, betrouwbaarheid en winstgevendheid te waarborgen, heeft
            BIS (Bureau of Indian Standards) BIS Schema X Certificering voor
            Verpakkingsmachines verplicht gesteld. Deze certificering wordt gegeven
            om te garanderen dat alle verpakkingsmachines die in India worden
            verkocht of geïmporteerd, voldoen aan de geldende nationale
            kwaliteitsnormen.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            In dit artikel zullen we het belang van Schema X Certificering voor
            Verpakkingsmachines uitleggen, de rol van OTR voor Verpakkingsmachines
            en het proces voor het verkrijgen van een BIS Licentie en het BIS
            Standaard Merkteken voor Verpakkingsmachines.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS Certification Matters Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Belang van BIS voor Verpakkingsmachines
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Verpakkingsmachines worden in alle bedrijven gebruikt voor het
            volgende:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Verpakking van Voedsel en Dranken</li>
            <li>Geneesmiddelen en medische producten</li>
            <li>Verpakking gebruikt in chemische en industriële industrie</li>
            <li>Consumentenproducten en detailhandel</li>
            <li>Verpakkingsoplossingen voor exportmarkten</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Zonder BIS voor Verpakkingsmachines: Niet-gecertificeerde BIS
            producten kunnen leiden tot:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Falen in verpakking, productintegriteit en besmetting</li>
            <li>Veiligheidsrisico's in voedsel- en farmaceutische segmenten</li>
            <li>Inefficiënte operaties en stilstandtijd</li>
            <li>Falen om overheidsaankoopregels te volgen</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Het BIS merkteken op Verpakkingsmachines garandeert kopers Kwaliteit,
            Veiligheid en duurzaamheid.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is X-Scheme Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificaat voor Verpakkingsmachines?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Verpakkingsmachines maken deel uit van deel II van Schema X
            certificering, onder de BIS Conformiteitsbeoordelingsregeling 2018 en
            naleving hiervan is verplicht voor zowel Indiase als buitenlandse
            fabrikanten.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Schema X Certificering voor Verpakkingsmachines: Belangrijkste
            kenmerken:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Geschikt voor elke verpakkingsmachine (handmatig, semi-automatisch &
              automatisch)
            </li>
            <li>
              Vereist producttesten, fabrieksaudit en kwaliteitscontrole
            </li>
            <li>Verplicht voor verkoop en import in India</li>
            <li>
              Geeft toestemming om het BIS merkteken voor Verpakkingsmachines te
              gebruiken op gecertificeerde apparatuur
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Verpakkingsmachines
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            OTR voor Verpakkingsmachines werd aangekondigd door het Ministerie
            van Zware Industrie in 2024, wat Schema X certificering vereist.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Alle verpakkingsmachines moeten zijn uitgerust met BIS Schema
            X Certificaat en alle verpakkingsmachines moeten een BIS Licentie voor
            Verpakkingsmachines hebben verkregen op 1 september 2026. "Dit zal
            niet-gecertificeerde verpakkingsmachines stoppen van verkoop, import of
            deelname aan aanbestedingen in het hele land," zei een overheidsfunctionaris.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Verpakkingsmachines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Veiligheid & Hygiëne: Gecertificeerde verpakkingsmachines voorkomen
              ook besmettingsproblemen (voedsel en farmaceutisch).
            </li>
            <li>
              Kwaliteitsgarantie: Houdt machines soepel en efficiënt draaiend.
            </li>
            <li>
              Markttoegang: BIS Verpakkingsmachine Licentie is meestal vereist
              voor aanbestedingen door publieke instanties.
            </li>
            <li>
              Klantvertrouwen: Het BIS merkteken voor Verpakkingsmachines geeft
              klanten informatie over productkwaliteit en duurzaamheid.
            </li>
            <li>
              Concurrentievoordeel: BIS-gecertificeerde merken/fabrikanten worden
              de voorkeur gegeven in gereguleerde markten en voor overheidsaanbestedingen.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Packing Machinery Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Verpakkingsmachines onder BIS Certificeringsschema
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Schema X Accreditatie voor Verpakkingsmachines omvat verschillende
            soorten zoals:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Voedsel- en drankenverpakkingsmachines</li>
            <li>Blister- en stripverpakkingsmachines voor farmaceutica</li>
            <li>Inpak-, verzegel- en vulmachines</li>
            <li>Karton- en etiketteermachines</li>
            <li>Vacuum- en krimpverpakkingssystemen</li>
            <li>Bulk- en industriële verpakkingsmachines</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Elk type verpakkingsmachine moet voldoen aan de relevante Indiase
            normvereisten (IS-codes) inclusief IS 16819:2018/ISO 12100:2010
            (Machineveiligheid Algemene Principes voor Ontwerp - Risicobeoordeling
            en Risicovermindering).
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Machinetypes moeten voldoen aan de relevante Indiase normen voor
            prestaties, veiligheid, hygiëne en efficiëntie.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Proces van BIS Certificering voor Verpakkingsmachines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Identificatie van Relevante Normen: Verwijzen naar relevante IS-codes
              voor uw type Verpakkingsmachine.
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
              Uitgifte van BIS Licentie voor Verpakkingsmachines: U kunt het BIS
              merkteken aanbrengen na goedkeuring.
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
            Fabrikanten die niet alle modellen verpakkingsmachines hebben
            gecertificeerd met BIS Certificering voor Verpakkingsmachines op 1
            september 2026 lopen het risico van:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              Verkoop/import verbod voor niet-gecertificeerde verpakkingsmachines
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
            Implementatie van BIS Schema X Certificering voor Verpakkingsmachines
            in OTR 2024 is een stap om veiligheid, efficiëntie en kwaliteit te
            brengen in de industriële en verpakkingssector in India.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Fabrikanten, Importeurs en Exporteurs profiteren van dit proces door
            BIS Certificering voor Verpakkingsmachines te verkrijgen, door een
            BIS Licentie voor Verpakkingsmachines te verkrijgen, en door het BIS
            merkteken voor Verpakkingsmachines op hun producten aan te brengen,
            wat aantoont dat hun producten voldoen aan lokale marktreguleringssystemen
            en klantvereisten.
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
  