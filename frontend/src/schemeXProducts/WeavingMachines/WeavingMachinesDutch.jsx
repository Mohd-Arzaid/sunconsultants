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
  
  const WeavingMachinesDutch = () => {
    return (
      <div className="relative w-full">
        <WeavingMachinesMetaTags />
        <WeavingMachinesBreadcrumb />
        <WeavingMachinesMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default WeavingMachinesDutch;
  
  const WeavingMachinesMetaTags = () => {
    const title = "BIS Schema X Certificering voor Weefmachines en hun Samenstellingen";
    const description =
      "BIS Schema X Certificering is een verplichte kwaliteitscertificering voor alle soorten weefmachines (getouwen) en/of hun samenstellingen, sub-assemblages en componenten";
    const keywords =
      "BIS Certificering voor Weefmachines, BIS Schema X Certificering voor Weefmachines, Schema X Certificering voor Weefmachines, BIS voor Weefmachines, OTR voor Weefmachines";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Weefmachines in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor weefmachines in India. Begrijp OTR 2024 naleving, BIS Licentie proces, ISI markering vereisten, en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const WeavingMachinesBreadcrumb = () => {
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
                      BIS Certificering voor Weefmachines
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
  
  const WeavingMachinesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <WeavingMachinesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const WeavingMachinesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Schema X Certificering voor Weefmachines
          </h1>
  
          {/* BIS Scheme X Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-weaving-machines-(looms).png"
              title="BIS Schema X Certificering voor Weefmachines (Getouwen)"
              alt="BIS Schema X Licentie voor weefmachines (getouwen)"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            De Indiase textiel- en kledingindustrie is een van de grootste
            ondersteuners van productie, export en werkgelegenheid in het land. Het
            hart van deze industrie zijn weefmachines, die nodig zijn voor het maken
            van stoffen voor kleding, huishoudtextiel en industrieel gebruik. Met
            de voortdurend groeiende binnenlandse vraag en de grote exportfocus van
            het land is er behoefte aan het waarborgen van kwaliteits- en
            veiligheidsnormen voor weefmachines in het binnenland.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Om dit te waarborgen is het Bureau of Indian Standards (BIS), het
            Nationale Standaardbureau van India, opgericht en BIS heeft
            productcertificeringsschema's in India geformuleerd en geïmplementeerd
            waarbij producten worden gecertificeerd. Deze normen zorgen ervoor dat
            machines die de Indiase markt betreden voldoen aan Indiase normen voor
            prestaties, duurzaamheid en veiligheid.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            In dit artikel zullen we het belang van BIS Schema X Certificaat voor
            weefmachines uitleggen, het nalevingsproces onder OTR voor weefmachines
            en hoe u BIS certificering in India kunt krijgen, BIS Registratie voor
            Weefmachines en het labelen van ISI markering voor Weefmachines.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Waarom BIS voor Weefmachines?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Weefmachines worden gebruikt in:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Textielfabrieken en kledingfabrieken</li>
            <li>Productie-eenheden voor huishoudtextiel</li>
            <li>Industriële stofproductie</li>
            <li>Textielfabrieken gericht op export</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Zonder BIS voor Weefmachines kunnen niet-gemerkte machines leiden tot:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Stoffen van lage kwaliteit en defecten.</li>
            <li>
              Hoge schade, mechanische problemen en uitvaltijd
            </li>
            <li>Verhoogde operationele kosten, afval en afvalbeheer</li>
            <li>Overtreding van overheids- en exportcontracten</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Het BIS Merkteken op Weefmachines geeft consumenten en inspecteurs
            vertrouwen dat het product voldoet aan Indiase normen.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificering voor Weefmachines?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X Certificering voor Weefmachines maakt deel uit van de BIS
            Conformiteitsbeoordelingsregeling, 2018, die tot doel heeft kwaliteit in
            kritieke machines te reguleren.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Enkele Kenmerken van Schema X certificering voor Weefmachines:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Verplicht voor zowel Indiase als Buitenlandse Fabrikanten die aan
              India leveren
            </li>
            <li>
              Omvat verschillende weefmachines met betrekking tot geldende Indiase
              normen
            </li>
            <li>
              Vereist machinetesten, fabrieksinspecties en voortdurende audits
              van tijd tot tijd
            </li>
            <li>Maakt gebruik van officieel BIS merkteken voor Weefmachines mogelijk</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Weefmachines
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Schema X Certificering wordt verplicht onder de Omnibus Technische
            Regeling (OTR) 2024 voor Weefmachines, uitgegeven door het Ministerie
            van Zware Industrie.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: 1 september 2026 Aanvraag voor verlenen van BIS Licentie voor
            Weefmachines is verplicht voor alle fabrikanten en importeurs. Na de
            deadline kunnen niet-geregistreerde weefmachines niet worden verkocht,
            geïmporteerd of verzonden voor commercieel gebruik in India.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Weefmachines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Productkwaliteitsgarantie: Gecertificeerde machines zorgen voor
              ononderbroken productie en optimale stofefficiëntie.
            </li>
            <li>
              Markttoegang & Aanbestedingen: BIS Licentie voor Weefmachines is
              over het algemeen verplicht in overheidsaanbestedingen en grote
              leveringsorders.
            </li>
            <li>
              Kopersvertrouwen: Het BIS Merkteken voor Weefmachines zorgt voor
              vertrouwen op binnenlandse en buitenlandse markten.
            </li>
            <li>
              Wettelijke & Regelgevingsnaleving: Zorgt voor naleving van Indiase
              regelgeving onder OTR voor Weefmachines.
            </li>
            <li>
              Concurrentievoordeel: Gecertificeerde machines zijn zeldzaam in de
              zeer competitieve textielapparatuurindustrie.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Weaving Machines Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Weefmachines onder Schema X Certificering
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Weefmachines die Schema X certificering ontvangen:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Krachtgetouwen</li>
            <li>Rapiergetouwen</li>
            <li>Luchtstraalgetouwen</li>
            <li>Waterstraalgetouwen</li>
            <li>Schietspoelgetouwen</li>
            <li>Automatische getouwen</li>
            <li>Speciale industriële weefmachines</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Alle moeten voldoen aan geldende Indiase normen (IS-codes) zoals IS
            17361(Deel 6): 2020 / ISO 11111: (Deel 6): 2005 (Veiligheidsvereisten
            voor Textielmachines Deel 6 Stoffabricagemachines). Alle typen moeten
            voldoen aan relevante Indiase normen (IS-codes) op basis van ontwerp,
            prestaties, veiligheid en energiebesparing.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Proces van BIS Licentie voor Weefmachines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              Identificatie van Toepasselijke Normen: Zoek het IS-nummer voor uw
              type weefmachine.
            </li>
            <li>
              Producttesten: Machines worden getest in door BIS geaccrediteerde
              laboratoria voor veiligheid en efficiëntie.
            </li>
            <li>
              Fabrieksinspectie: BIS inspecteurs voeren grondige controles uit van
              productieprocessen en kwaliteitscontrolesystemen.
            </li>
            <li>
              Aanvraag Indienen: Verzend documenten zoals technische details,
              testrapporten en kwaliteitshandleidingen.
            </li>
            <li>
              Uitgifte van BIS Licentie voor Weefmachines: Met goedkeuring kunnen
              fabrikanten BIS op producten markeren.
            </li>
            <li>
              Voortdurende Naleving: Audits en testen worden regelmatig uitgevoerd
              om ervoor te zorgen dat we onze normen blijven naleven.
            </li>
          </ul>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Niet-naleving
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Niet-naleving van BIS Certificering voor Weefmachines in OTR zal
            resulteren in:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Verbod op verkoop of import van niet-gecertificeerde machines</li>
            <li>Zware boetes en inbeslagname van producten.</li>
            <li>Diskwalificatie in overheidsopdrachten/aanbestedingen</li>
            <li>Langdurige schade aan merk en marktreputatie</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusie
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            De lancering van BIS Schema X Certificering voor Weefmachines via OTR
            voor Weefmachines (2024) is een belangrijke mijlpaal in het hebben
            van een textielindustrie in India die veilige, kwaliteitsvolle en
            betrouwbare machines gebruikt.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Voor fabrikanten/importeurs is het verkrijgen van een BIS Licentie
            voor Weefmachines en het markeren van producten met het BIS embleem
            niet alleen een verplichte naleving maar voegt ook productwaarde toe
            voor marketing. Dit consolideert marktbetrouwbaarheid en waarborgt
            naleving, en bevordert op middellange termijn concurrentievermogen op
            binnenlandse en internationale textielmarkten.
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
  