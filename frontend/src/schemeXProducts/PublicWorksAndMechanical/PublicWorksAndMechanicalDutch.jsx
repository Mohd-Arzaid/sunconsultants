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
  
  const PublicWorksAndMechanicalDutch = () => {
    return (
      <div className="relative w-full">
        <PublicWorksAndMechanicalMetaTags />
        <PublicWorksAndMechanicalBreadcrumb />
        <PublicWorksAndMechanicalMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default PublicWorksAndMechanicalDutch;
  
  const PublicWorksAndMechanicalMetaTags = () => {
    const title =
      "BIS Schema X Certificering voor Openbare Werken en Mechanische Apparaten";
    const description =
      "BIS Schema X Certificering voor machines voor openbare werken & bouw, en mechanische apparaten is een strategische stap om industriële veiligheid, uniforme kwaliteit en markttoegang te waarborgen.";
    const keywords =
      "BIS Certificering voor Openbare Werken en Mechanische Apparaten, BIS Schema X Certificering voor Openbare Werken en Mechanische Apparaten, Schema X Certificering voor Openbare Werken en Mechanische Apparaten, BIS voor Openbare Werken en Mechanische Apparaten, OTR voor Openbare Werken en Mechanische Apparaten";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Openbare Werken en Mechanische Apparaten in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor Openbare Werken en Mechanische Apparaten in India. Begrijp OTR 2024 naleving, BIS Licentie proces, ISI markering vereisten, en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const PublicWorksAndMechanicalBreadcrumb = () => {
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
                      BIS Certificering voor Openbare Werken en Mechanische Apparaten
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
  
  const PublicWorksAndMechanicalMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <PublicWorksAndMechanicalMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const PublicWorksAndMechanicalMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Openbare Werken en Mechanische Apparaten
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-for-Machines-for-public-works -&-building.png"
              alt="BIS Schema X Certificering voor Openbare Werken en Mechanische Apparaten"
              title="BIS Licentie voor Machines voor Openbare Werken en Bouw"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Met de snelle ontwikkeling van infrastructuur en industrialisatie is
            betrouwbare prestaties en machines cruciaal. Machines en mechanische
            apparaten fungeren als de ruggengraat in technische werkzaamheden,
            productie en constructie van openbare werken en gespecialiseerde
            industrieën. Het is essentieel om hun kwaliteit en conformiteit te
            waarborgen. Dit is een wettelijke verplichting opgelegd door het
            Bureau of Indian Standards (BIS) onder Schema X Certificering.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Om de handhaving van verplichte normen in verschillende categorieën
            industriële machines te implementeren en te stroomlijnen, heeft het
            Ministerie van Zware Industrie de Omnibus Technische Regeling (OTR),
            2024 uitgegeven. Dit bevel stelt dat alle soorten machines voor
            openbare werken, bouwconstructie en andere mechanische apparaten,
            inclusief die niet expliciet genoemd in andere onderverdelingen van
            Hoofdstuk 84, verplicht zijn om BIS certificering onder Schema X te
            verkrijgen.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            In dit bericht zullen we alle soorten machines en apparaten bespreken
            die worden gebruikt voor openbare werken en bouwconstructie, mechanische
            apparaten met individuele functies, hun samenstellingen, sub-assemblages,
            het belang en de reikwijdte van het veelbesproken schema, het
            certificeringsproces en voordelen, en de documenten die moeten worden
            ingediend.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Significance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Belang van BIS voor Openbare Werken en Mechanische Apparaten
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Deze machines worden algemeen gebruikt in:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>
              Constructie van openbare infrastructuur (wegen, bruggen, watervoorziening)
            </li>
            <li>Technische en zware constructieprojecten</li>
            <li>Gemeentelijke diensten en nutsvoorzieningen</li>
            <li>
              Industriële faciliteiten die hef- of verwerkingsmachines vereisen
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Zonder BIS voor Openbare Werken en Mechanische Apparaten omvatten
            risico's:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Machinestoring tijdens kritieke projecten</li>
            <li>Veiligheidsproblemen voor werknemers en eindgebruikers</li>
            <li>Hogere onderhoudskosten en stilstandtijd</li>
            <li>Uitsluiting van door de overheid gefinancierde projecten</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Schema X Certificering voor Openbare Werken en Mechanische Apparaten
            zorgt ervoor dat machines veilig, efficiënt en met minimaal risico op
            falen werken.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificering voor Openbare Werken en Mechanische
            Apparaten?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering voor Openbare Werken en Mechanische Apparaten
            valt onder de BIS Conformiteitsbeoordelingsregeling, 2018. Dit is een
            geïdentificeerd middel en regelgevingsinstrument om ervoor te zorgen dat
            industriële machines en infrastructuur voldoen aan Indiase normen.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Belangrijkste Aspecten van Schema X Kwalificatie:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Van toepassing op zowel Indiase als buitenlandse fabrikanten</li>
            <li>Omvat machines voor openbare werken en nutsvoorzieningen</li>
            <li>Testen in door BIS erkende laboratoria</li>
            <li>
              Fabrieksaudit en routinematige nalevingsinspecties zijn onderdeel van
              het proces
            </li>
            <li>
              Geeft het recht om het BIS Standaard Merkteken te gebruiken na
              certificering
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Openbare Werken en Mechanische Apparaten
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Het Ministerie van Zware Industrie heeft de Omnibus Technische Regeling
            (OTR) voor Openbare Werken en Mechanische Apparaten uitgegeven in 2024.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Op 1 september 2026 moeten alle fabrikanten en importeurs
            voldoen aan Schema X certificering voor Openbare Werken en Mechanische
            Apparaten. Na deze datum zullen niet-geregistreerde machines niet
            mogen worden geproduceerd, verkocht of geïmporteerd in India.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Benefits Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Openbare Werken en Mechanische
            Apparaten
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Productveiligheid: Voorkomt instortingen door mechanische problemen en
              betrouwbare werking.
            </li>
            <li>
              Regelgevingsnaleving: Voldoet aan OTR voor Openbare Werken en
              Mechanische Apparaten.
            </li>
            <li>
              Marktvoordeel: Certificering is vaak vereist voor openbare aanbestedingen
              en overheidsprojecten.
            </li>
            <li>
              Klantvertrouwen: Officieel gecertificeerde machines worden door veel
              kopers de voorkeur gegeven, omdat dit een kwaliteitsgarantie is.
            </li>
            <li>
              Aansprakelijkheidsvermindering: Vermindert potentiële juridische en
              merkblootstelling met gecertificeerde producten.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Machinery Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Openbare Werken en Mechanische Apparaten in OTR
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X voor Certificering van Openbare Werken en Mechanische
            Apparaten omvat de volgende producten:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Machines voor wegconstructie en onderhoud</li>
            <li>Hydraulische en handmatige hefmachines</li>
            <li>Gemeentelijke dienstapparatuur (waterdistributieapparatuur, enz.)</li>
            <li>Mechanische dienst- en handelingsapparatuur</li>
            <li>
              Apparatuur specifiek ontworpen voor industrieel gebruik in openbare
              werken en diensten
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Ze moeten voldoen aan de relevante Indiase normen (IS-codes), indien
            van toepassing, inclusief IS 16819:2018/ISO 12100:2010 (Machineveiligheid
            Algemene Principes voor Ontwerp - Risicobeoordeling en Risicovermindering).
            Alle vormen hiervan moeten worden geproduceerd in overeenstemming met
            de geldende Indiase normen voor veiligheid, prestaties en kwaliteit.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Proces van BIS Certificering voor Openbare Werken en Mechanische
            Apparaten
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              Identificatie van Relevante Normen: Selecteer de IS-codes die van
              toepassing zijn op uw machine.
            </li>
            <li>
              Producttesten: Voer prestaties- en veiligheidstests uit in door BIS
              goedgekeurde laboratoria.
            </li>
            <li>
              Fabrieksinspectie: BIS functionarissen bezoeken productiefaciliteiten
              om ervoor te zorgen dat kwaliteitscontroles op hun plaats zijn.
            </li>
            <li>
              Documentatie: Dien aanvraagformulieren, technische rapporten en
              kwaliteitshandleidingen in
            </li>
            <li>
              Uitgifte van Licentie: BIS verleent certificering en staat het gebruik
              van het BIS Standaard Merkteken toe.
            </li>
            <li>
              Voortdurende Naleving: Er zijn voortdurende tests en audits om
              continue naleving te waarborgen.
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Niet-naleving
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Niet-naleving van BIS Certificering voor Openbare Werken en Mechanische
            Apparaten zoals vastgesteld in OTR voor Openbare Werken en Mechanische
            Apparaten zal resulteren in:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Verbod op verkoop of import van niet-gecertificeerde machines</li>
            <li>Zware boetes en inbeslagname van producten</li>
            <li>Uitsluiting van overheidsaanbestedingen en contractprocessen</li>
            <li>Zeer bezoedelde reputatie</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusie
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Het BIS Schema X Certificaat voor openbare werken en mechanische
            apparaten, ondersteund door OTR voor openbare werken en mechanische
            apparaten (2024), brengt het land een stap dichter bij het vaststellen
            van uniforme kwaliteits- en veiligheidsniveaus in infrastructuurmachines.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Voor fabrikanten en importeurs is het verkrijgen van Schema X certificering
            voor Openbare Werken en Mechanische Apparaten meer dan alleen naleving –
            het vertegenwoordigt een strategische investering.
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
  