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
  
  const SwitchgearandControlgearEquipmentDutch = () => {
    return (
      <div className="relative w-full">
        <SwitchgearandControlgearEquipmentMetaTags />
        <SwitchgearandControlgearEquipmentBreadcrumb />
        <SwitchgearandControlgearEquipmentMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default SwitchgearandControlgearEquipmentDutch;
  
  const SwitchgearandControlgearEquipmentMetaTags = () => {
    const title =
      "BIS Schema X Certificering voor Schakel- en Besturingsapparatuur tot 1000 Volt";
    const description =
      "BIS Schema X Certificering voor schakel- en besturingsapparatuur tot 1000V en hun samenstellingen, sub-assemblages en componenten, is verplicht om kwaliteit en veiligheid in India te waarborgen";
    const keywords =
      "BIS Certificering voor Schakel- en Besturingsapparatuur, BIS Schema X Certificering voor Schakel- en Besturingsapparatuur, Schema X Certificering voor Schakel- en Besturingsapparatuur, BIS voor Schakel- en Besturingsapparatuur, OTR voor Schakel- en Besturingsapparatuur";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Schakel- en Besturingsapparatuur tot 1000 Volt in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor schakel- en besturingsapparatuur tot 1000V in India. Begrijp OTR 2024 naleving, BIS Licentie proces, ISI markering vereisten, en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const SwitchgearandControlgearEquipmentBreadcrumb = () => {
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
                      BIS Certificering voor Schakel- en Besturingsapparatuur tot 1000
                      Volt
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
  
  const SwitchgearandControlgearEquipmentMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <SwitchgearandControlgearEquipmentMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const SwitchgearandControlgearEquipmentMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Schakel- en Besturingsapparatuur tot 1000 Volt
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-for-switch-gear-and-control-gear-equipment.png"
              alt="BIS Schema X Certificering voor Schakel- en Besturingsapparatuur tot 1000 Volt"
              title="BIS Schema X Licentie voor Schakel- en Besturingsapparatuur"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            In dit tijdperk van automatisering en elektrificatie zijn schakel- en
            besturingsapparatuur integrale componenten van veilige en effectieve
            elektrische systemen. Van huishoudelijke bedrading tot geavanceerde
            industriële systemen beheren deze apparaten bescherming, controle en
            isolatie van stroomstromen. Vanwege de cruciale positie die deze
            apparaten innemen, heeft het Bureau of Indian Standards (BIS) verplichte
            certificering voor deze apparaten vastgesteld onder Schema X om ervoor
            te zorgen dat ze voldoen aan de veiligheids- en prestatiebenchmarks die
            in India zijn vastgesteld.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Het Ministerie van Zware Industrie, onder de Omnibus Technische Regeling,
            2024, heeft verplichte BIS certificering ingesteld voor alle schakel- en
            besturingsapparatuur (≤ 1000V) die wordt verkocht, geïmporteerd en
            geproduceerd in India vanaf 1 september 2026. Om niet-conforme en
            onveilige elektrische apparatuur aan te pakken, en om de productstandaarden
            die op de markt worden aangeboden te verbeteren, heeft BIS, onder Schema X
            Certificering, verplichte certificering gemaakt voor deze apparaten die
            werken op of onder 1000 volt.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            Deze blog beschrijft de certificeringsprocedures samen met hun voordelen,
            reikwijdte, doel, ondersteunend bewijs en belangrijke documentatie, die
            essentieel zijn voor Schema X certificering voor alle soorten schakel- en
            besturingsapparatuur die werken (of) hun
            samenstellingen/sub-assemblages/componenten die werken op spanningen niet
            hoger dan 1000 volt.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Belang van BIS voor Schakel- en Besturingsapparatuur
          </h2>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Schakel- en besturingsapparatuur tot 1000 volt is cruciaal in:
          </h3>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Huishoudelijke en commerciële elektrische distributie-installaties</li>
            <li>Vermogensbeheersystemen voor industrie</li>
            <li>Hernieuwbare energie faciliteiten (zonne-/windcentrales)</li>
            <li>Openbare infrastructuurprojecten</li>
            <li>
              Kritieke veiligheidstoepassingen die circuitbescherming vereisen
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Zonder juiste certificering omvatten risico's:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Risico op elektrische schokken of brand</li>
            <li>Apparatuurschade en kostbare stilstandtijd</li>
            <li>Overtreding van Indiase veiligheidsnormen</li>
            <li>
              Uitsluiting van aanbestedingen en projecten die gecertificeerde
              apparatuur vereisen
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Schema X Certificering voor Schakel- en Besturingsapparatuur zorgt
            ervoor dat deze producten voldoen aan normen voor prestaties, veiligheid
            en duurzaamheid.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificaat voor Schakel- en Besturingsapparatuur?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering voor Schakel- en Besturingsapparatuur maakt
            deel uit van de BIS Conformiteitsbeoordelingsregeling, 2018. Dit legt
            verplichte producttesten, fabrieksinspecties en naleving van de geldende
            Indiase normen op.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Schema X Certificering voor Schakel- en Besturingsapparatuur:
            Belangrijkste kenmerken:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Van toepassing op alle Indiase en buitenlandse fabrikanten</li>
            <li>
              Omvat verschillende apparaten: stroomonderbrekers, scheiders,
              scheidingsschakelaars, zekeringcombinatie-eenheden en besturingsapparaten
              tot 1000V.
            </li>
            <li>
              Vereist laboratoriumtesten in door BIS erkende faciliteiten
            </li>
            <li>Omvat audits van productie- en kwaliteitssystemen</li>
            <li>
              Geeft het recht om het Standaard Merkteken op producten te gebruiken na
              certificering
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Schakel- en Besturingsapparatuur
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            OTR voor Schakel- en Besturingsapparatuur werd aangekondigd door het
            Ministerie van Zware Industrie in 2024, wat Schema X certificering vereist.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Alle fabrikanten en importeurs zijn verplicht om een geldige BIS
            Licentie voor Schakel- en Besturingsapparatuur onder Schema X te verkrijgen
            op 1 september 2026. "Dit zal niet-gecertificeerde schakel- en
            besturingsapparatuur stoppen van verkoop, import of productie in India,"
            zei een overheidsfunctionaris.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Schakel- en Besturingsapparatuur
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Elektrische Veiligheid: Beschermt tegen kortsluiting, overbelasting en
              potentiële brandgevaren.
            </li>
            <li>
              Regelgevingsnaleving: Verplicht door OTR voor Schakel- en
              Besturingsapparatuur.
            </li>
            <li>
              Marktacceptatie: Geregistreerde producten zijn acceptabel voor alle
              overheids- en particuliere projecten.
            </li>
            <li>
              Klantvertrouwen: Het BIS Standaard Merkteken op Schakel- en
              Besturingsapparatuur geeft klanten vertrouwen in kwaliteit en veiligheid.
            </li>
            <li>
              Concurrentievoordeel: Verbetert merk reputatie en opent deuren voor
              nieuwe zakelijke kansen.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Proces van BIS Certificering voor Schakel- en Besturingsapparatuur
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              Identificatie van Relevante Indiase Normen: Identificeer de IS-codes
              gerelateerd aan schakel- en besturingsapparatuur tot 1000 volt.
            </li>
            <li>
              Producttesten: Uitvoeren van veiligheids-, prestatie- en
              duurzaamheidstests in door BIS goedgekeurde laboratoria.
            </li>
            <li>
              Fabrieksaudit: BIS inspecteurs verifiëren fabrieken en
              kwaliteitscontrolesystemen.
            </li>
            <li>
              Documentatie Indienen: Alle gedetailleerde specificaties, testrapporten
              en ondersteunende nalevingsbestanden.
            </li>
            <li>
              Uitgifte van BIS Licentie: Indien geaccepteerd, verleent BIS een licentie
              voor gebruik van het Standaard Merkteken.
            </li>
            <li>
              Voortdurende Naleving: Audits van normen en producttesten op regelmatige
              intervallen zorgen ervoor dat certificering geldig blijft.
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Niet-naleving
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Niet-naleving van BIS Certificering voor Schakel- en Besturingsapparatuur
            onder het OTR schema heeft de volgende gevolgen:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              Verbod op productie, import of verkoop van niet-gecertificeerde producten
            </li>
            <li>Niet-conforme apparatuur wordt in beslag genomen; en boetes.</li>
            <li>Diskwalificatie voor overheidsaanbestedingen</li>
            <li>Schadelijk voor zakelijke relaties en vertrouwen op de markt.</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusie
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Implementatie van BIS Schema X Certificering voor Schakel- en
            Besturingsapparatuur in OTR 2024 is een stap om veilig, betrouwbaar en
            efficiënt vermogensbeheer in India te waarborgen.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Voor fabrikanten en importeurs, voor wie Schema X certificering van
            Schakel- en Besturingsapparatuur niet alleen een wettelijke verplichting
            is maar ook een strategische investering, zorgt dit voor markttoegang,
            merk geloofwaardigheid en algemeen klantvertrouwen.
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
  