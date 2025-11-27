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
  
  const HeatTreatmentEquipmentDutch = () => {
    return (
      <div className="relative w-full">
        <HeatTreatmentEquipmentMetaTags />
        <HeatTreatmentEquipmentBreadcrumb />
        <HeatTreatmentEquipmentMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default HeatTreatmentEquipmentDutch;
  
  const HeatTreatmentEquipmentMetaTags = () => {
    const title = "BIS Schema X Certificering voor Warmtebehandelingsapparatuur";
    const description =
      "BIS Schema X Certificering verplicht dat alle soorten machines voor materiaalbehandeling door een proces waarbij temperatuurverandering en/of hun assemblages, sub-assemblages en componenten betrokken zijn, BIS-gecertificeerd moeten zijn";
    const keywords =
      "BIS Certificering voor Warmtebehandelingsapparatuur, BIS Schema X Certificering voor Thermische Verwerkingsapparatuur, Schema X Certificering voor Warmtebehandelingsapparatuur, BIS voor Thermische Verwerkingsapparatuur, OTR voor Warmtebehandelingsapparatuur";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Warmtebehandelingsapparatuur in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor warmtebehandelingsapparatuur in India. Begrijp OTR 2024-naleving, BIS Licentieproces, ISI-markering vereisten en hoe u certificering kunt krijgen vóór de deadline van september 2026";
  
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
  
  const HeatTreatmentEquipmentBreadcrumb = () => {
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
                      BIS Certificering voor Warmtebehandelingsapparatuur
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
  
  const HeatTreatmentEquipmentMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <HeatTreatmentEquipmentMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const HeatTreatmentEquipmentMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Warmtebehandelingsapparatuur
          </h1>
  
          {/* BIS Scheme X Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-Heat-treatment-of-material.png"
              title="BIS Schema X Licentie voor warmtebehandeling van materiaal"
              alt="BIS Schema X Certificering Voor Warmtebehandelingsapparatuur"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Warmtebehandelingsapparatuur is een van de meest kritieke toepassingen in
            industrieën zoals automotive, luchtvaart, gieten, smeden en
            zware engineering. Dit zijn apparaten die de fysieke en
            mechanische eigenschappen van metalen veranderen door bewerkingen zoals gloeien, koelen, harden,
            temperen, enz.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Gezien het belang heeft het Bureau of Indian Standards (BIS)
            BIS Certificering voor Warmtebehandelingsapparatuur verplicht gesteld onder
            Schema X Certificering. Dit zorgt ervoor dat zowel Indiase als
            wereldwijde fabrikanten voldoen aan strikte Indiase normen voordat ze apparatuur
            op de markt brengen in het land.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            In dit bericht zullen we het belang uitleggen van BIS
            Schema X Certificering voor Warmtebehandelingsapparatuur, OTR voor Warmtebehandelingsapparatuur
            en het proces om een BIS Licentie te verkrijgen voor
            Warmtebehandelingsapparatuur met het BIS Merk voor Warmtebehandelingsapparatuur.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS for Heat Treatment Equipment is Mandatory Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Belang van BIS voor Warmtebehandelingsapparatuur
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Warmtebehandelingsovens worden over het algemeen gebruikt in:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Metaal- en metallurgische industrie</li>
            <li>Automotive- en luchtvaartproductie</li>
            <li>Gereedschap- en matrijzenfabricage</li>
            <li>Energie-industrie en andere zware machines</li>
            <li>Defensie en precisie-engineering</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Het ontbreken van BIS voor Warmtebehandelingsapparatuur kan leiden tot
            machines van lage kwaliteit die kunnen resulteren in:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Oververhitting of onjuiste verwerking</li>
            <li>Mislukking van mechanismen en structuur van eindproducten</li>
            <li>Verhoogd energieverbruik en gebrek aan efficiëntie</li>
            <li>Veiligheidsrisico's voor operators</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            BIS Certificering garandeert niet alleen dat apparatuur goed
            en veilig functioneert volgens industriële prestatie-eisen, maar ook
            voldoet aan milieucriteria.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificaat voor Warmtebehandelingsapparatuur?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Schema X - Warmtebehandelingsapparatuur, in overeenstemming met het Ministerie van Staal,
            Regering van India, is een verplicht certificeringsschema onder
            de BIS India Conformiteitsbeoordelingsregeling, 2018.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Schema X Certificering voor Warmtebehandelingsapparatuur: Belangrijkste kenmerken:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Verplicht voor zowel Indiase als buitenlandse fabrikanten</li>
            <li>
              Toepasbaar op de meeste soorten warmtebehandelingsapparatuur
              en verbrandingsapparatuur
            </li>
            <li>
              Omvat producttesten, fabrieksvloerinspectie en audit
              voor voortdurende naleving.
            </li>
            <li>Fabrikanten mogen het BIS Standaardmerk gebruiken.</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Warmtebehandelingsapparatuur
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Het Ministerie van Zware Industrie heeft in 2024 de Omnibus
            Technische Regeling (OTR) voor Warmtebehandelingsapparatuur uitgegeven, waarbij
            naleving van Schema X verplicht is.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Alle fabrikanten en importeurs moeten een geldige BIS Licentie
            verkrijgen voor Warmtebehandelingsapparatuur op 1 september
            2026. Na deze datum zal niet-gecertificeerde Warmtebehandelingsapparatuur
            niet in aanmerking komen voor verkoop, import of
            het indienen van offertes in openbare aanbestedingen.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Warmtebehandelingsapparatuur
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Operationele Veiligheid: Beschermt tegen oververhitting,
              ongelijke behandeling en apparatuurschade.
            </li>
            <li>
              Productbetrouwbaarheid: Zorgt ervoor dat behandelde items voldoen aan specificaties
              voor hardheid, duurzaamheid en taaiheid
            </li>
            <li>
              Energie-efficiëntie: Gecertificeerde apparatuur wordt getest op optimaal
              energieverbruik, wat de operationele kosten verlaagt.
            </li>
            <li>
              Markttoegang: Het BIS Merk voor Warmtebehandelingsapparatuur is vaak
              verplicht voor openbare aankopen en overheidsaanbestedingen.
            </li>
            <li>
              Wereldwijde Voordelen: Wereldwijde merken kunnen gemakkelijk toegang krijgen tot
              de Indiase markt door een BIS Licentie te verkrijgen voor Warmtebehandelingsapparatuur.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Equipment Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Warmtebehandelingsapparatuur onder BIS Certificeringsschema
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering voor Warmtebehandelingsapparatuur omvat
            een groot aantal machines zoals:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Gloeivuren</li>
            <li>Koelovens</li>
            <li>Hardeer- en temperovens</li>
            <li>Rotatieovens voor continue warmtebehandeling</li>
            <li>Carburatie- en nitreerovens.</li>
            <li>Inductie- en elektrische warmtebehandelingsapparatuur</li>
            <li>Gas- en oliegestookte warmtebehandelingsapparaten</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Elk type moet voldoen aan relevante Indiase Normen (IS-code)
            zoals IS 16819:2018/ISO 12100:2010. Prestatiekenmerken, materiaalkwaliteit
            en energiebesparingsfuncties moeten voldoen aan relevante Indiase
            Normen (IS-code) voor elk type apparatuur.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS Certificeringsproces voor Warmtebehandelingsapparatuur
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Identificeer Relevante Normen: Raadpleeg de relevante IS-code
              voor uw type Warmtebehandelingsapparatuur.
            </li>
            <li>
              Testen in door BIS Erkende Laboratoria: Voer testen uit voor
              prestaties, veiligheid en efficiëntie.
            </li>
            <li>
              Fabrieksinspectie: BIS controleert kwaliteitscontrolesystemen en productiefaciliteiten.
            </li>
            <li>
              Aanvraag & Documentatie: Verstrek resultaten, uitgevoerde testen,
              en technische specificaties en kwaliteitshandboeken.
            </li>
            <li>
              Uitgifte van BIS Licentie voor Warmtebehandelingsapparatuur: Goedkeuring
              staat gebruik toe van het BIS Merk voor Warmtebehandelingsapparatuur.
            </li>
            <li>
              Voortdurende Naleving: Regelmatige audits en inspecties worden uitgevoerd
              om kwaliteitsnormen te handhaven.
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Niet-naleving
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Als OTR Warmtebehandelingsapparatuur niet wordt nageleefd op 1 september
            2026:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Verbod op verkoop/import van niet-gecertificeerde apparatuur</li>
            <li>Boetes en inbeslagname van producten</li>
            <li>Niet in aanmerking komen voor overheidsaanbestedingen en PSU</li>
            <li>Verlies van merkequity op lange termijn in de Indiase markt</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusie
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            De verplichte implementatie van Schema X Certificering voor Warmtebehandelingsapparatuur
            onder OTR 2024 is een belangrijke mijlpaal in het verhogen van de normen
            van de Indiase industrie.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Voor fabrikanten, importeurs en exporteurs van Warmtebehandelingsapparatuur,
            is het proces om BIS Certificering te verkrijgen voor Warmtebehandelingsapparatuur,
            om een BIS Licentie voor Warmtebehandelingsapparatuur te verkrijgen en
            het BIS Standaardmerk voor Warmtebehandelingsapparatuur te gebruiken niet alleen
            over naleving, het gaat om het bouwen van veilige en betrouwbare producten
            die concurrerend zijn op de markt en toegang krijgen tot gereguleerde markten.
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
  