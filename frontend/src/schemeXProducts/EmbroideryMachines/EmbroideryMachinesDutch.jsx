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
  import ServiceAuthorDutch from "@/components/manual/ServiceAuthor/ServiceAuthorDutch";
  
  const EmbroideryMachinesDutch = () => {
    return (
      <div className="relative w-full">
        <EmbroideryMachinesMetaTags />
        <EmbroideryMachinesBreadcrumb />
        <EmbroideryMachinesMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default EmbroideryMachinesDutch;
  
  const EmbroideryMachinesMetaTags = () => {
    const title = "BIS Schema X Certificering voor Borduurmachines";
    const description =
      "BIS Schema X Certificering voor borduurmachines, fabrikanten zorgen ervoor dat hun producten juridisch conform zijn, technisch superieur en vertrouwd door klanten";
    const keywords =
      "BIS Certificering voor Borduurmachines, BIS Schema X Certificering voor Borduurmachines, Schema X certificering voor Borduurmachines, BIS voor Borduurmachines, OTR voor Borduurmachines";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Borduurmachines in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor borduurmachines in India. Begrijp OTR 2024-naleving, BIS Licentieproces, ISI-markeringvereisten en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const EmbroideryMachinesBreadcrumb = () => {
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
                      BIS Certificering voor Borduurmachines
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
  
  const EmbroideryMachinesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <EmbroideryMachinesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const EmbroideryMachinesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Borduurmachines
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-machinery-for-making-embroidery.png"
              alt="BIS Schema X Certificering voor Borduurmachines"
              title="BIS Schema X Licentie voor Borduurmachines"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            De borduursector is een belangrijk onderdeel van de Indiase textiel- en
            kledingindustrie die waardetoegevoegde stoffen produceert voor mode, huis
            en export. Gecomputeriseerde multi-kop borduurmachines of industriële
            machines zijn essentieel voor het bereiken van hoge kwaliteit in
            borduurproducten omdat ze efficiëntie en precisie bieden in borduurwerk.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Om veiligheid, stabiliteit en prestaties te waarborgen, heeft BIS (Bureau
            of Indian Standards) verplichte certificering voor Borduurmachines
            ingevoerd onder het BIS Schema X certificeringsschema. Dit zorgt ervoor
            dat alleen machines die voldoen aan Indiase Normen worden toegestaan op
            de Indiase markt.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            In dit artikel bespreken we het belang van BIS Schema X Goedkeuring voor
            Borduurmachines, de regelgeving onder OTR (Textielregeling) voor
            Borduurmachines, en het proces om BIS Licentie voor Borduurmachines te
            verkrijgen.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Belang van BIS voor Borduurmachines
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Borduurmachines worden gebruikt in:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Kleding- en confectiefabrieken</li>
            <li>Huis textielproductie (gordijnen, lakens, kussenslopen)</li>
            <li>Maatwerk borduurwerk en couturehuizen</li>
            <li>Exportgerichte textielfabrieken</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Risico's zonder BIS voor Borduurmachines zijn:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Slechte naadkwaliteit en draadbreuk.</li>
            <li>Overmatige mechanische stilstandtijd van machines</li>
            <li>Veiligheidsrisico's in industriële omgevingen</li>
            <li>Uitsluiting van binnenlandse en exportmarkten</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Het BIS-merk voor Borduurmachines is een garantie voor Klanten dat uw
            product rigoureus is getest en gecertificeerd volgens alle benodigde
            richtlijnen van BIS.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificaat voor Borduurmachines?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Het Kader voor BIS Schema X Certificering voor Borduurmachines is gebaseerd
            op parameters genoemd onder de BIS Conformiteitsbeoordelingsregeling, 2018
            (die is ontwikkeld voor naleving in kwaliteitsmanagement onder leveranciers
            van industriële apparatuur).
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Schema X Certificering voor Borduurmachines: Belangrijkste kenmerken:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Verplicht voor zowel Indiase als buitenlandse fabrikanten</li>
            <li>
              Omvat tests, veiligheidsinspecties en verificatie van efficiëntie
            </li>
            <li>Regelmatige fabrieksbezoeken en kwaliteitsaudits zijn vereist</li>
            <li>
              Maakt het mogelijk om het BIS-merk onder licentie voor Borduurmachines
              te plaatsen op gecertificeerde producten
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Borduurmachines
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Het Ministerie van Zware Industrie heeft de Omnibus Technische Regeling
            (OTR) 2024 voor Borduurmachines geïntroduceerd die certificering verplicht
            stelt voor alle machines die onder de categorie borduurmachines vallen.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Alle fabrikanten en importeurs zijn verplicht om BIS Licentie
            voor Borduurmachines te verkrijgen die in India zullen worden verkocht of
            geïmporteerd op 1 september 2026 om boetes of vervolging te voorkomen.
            Daarna kunnen niet-gecertificeerde borduurmachines niet worden verhandeld
            of gebruikt voor commerciële doeleinden in India.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Borduurmachines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Productveiligheid & Betrouwbaarheid: Certificeerbare machines presteren
              volgens verwachte normen en veiligheid.
            </li>
            <li>
              Marktacceptatie: BIS Licentie voor Borduurmachines is verplicht voor
              overheidsaanbestedingen en kwantiteitscontracten.
            </li>
            <li>
              Kopersvertrouwen: Borduurmachines krijgen het BIS-merk dat kwaliteit
              en normen bevestigt.
            </li>
            <li>
              Regelgevingsnaleving: Voldoet aan OTR voor Borduurmachines en voorkomt
              boetes.
            </li>
            <li>
              Exportvoordelen: Indiase kopers krijgen gemoedsrust met gecertificeerde
              machines en internationale bedrijven krijgen eenvoudigere toegang tot
              India.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Embroidery Machines Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Borduurmachines onder BIS Certificeringsschema
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Schema X Certificering voor Borduurmachines is van toepassing op:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Borduurmachines met multi-kop</li>
            <li>Gecomputeriseerde machine-aangedreven borduurwerk</li>
            <li>Borduurmachines met enkele kop</li>
            <li>Machines voor kettingsteek borduurwerk</li>
            <li>Schiffli borduurmachines</li>
            <li>Gespecialiseerde textiel borduurapparatuur</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Elke categorie kan voldoen aan relevante IS-normen (IS-code), zoals IS
            17361 (Deel 1): 2020 / ISO 11111 (Deel 1): 2016 (Veiligheidsvereisten
            Textielmachines Deel 1 Algemene Vereisten). Ze moeten allemaal voldoen
            aan hun respectieve IS-codes voor ontwerp, duurzaamheid, veiligheid en
            economie in bedrijf.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Proces voor BIS Certificering voor Borduurmachines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              Identificatie van Relevante Normen: Zoek de relevante IS-code voor uw
              borduurmachinemodel.
            </li>
            <li>
              Producttests: Machines worden getest in BIS-geaccrediteerde laboratoria
              voor veiligheid en prestaties.
            </li>
            <li>
              Fabrieksinspectie: BIS-auditors komen naar de fabriek om
              kwaliteitscontroles te evalueren.
            </li>
            <li>
              Documentatie & Aanvraag: Verstrek BIS met technische rapporten,
              handleidingen en kwaliteitsdocumenten.
            </li>
            <li>
              BIS Licentie voor Borduurmachines: Na acceptatie hebben fabrikanten de
              optie om hun producten te markeren met het BIS-merk.
            </li>
            <li>
              Continue Naleving: Regelmatige inspecties en hertests zorgen voor
              continue naleving.
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Naleving
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Gevolgen van het niet hebben van BIS Certificering voor Borduurmachines
            onder OTR voor Borduurmachines vanaf 1 september 2026:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Beperkingen op verkoop/import van niet-gecertificeerde machines</li>
            <li>Potentiële boetes, straffen en productinbeslagname</li>
            <li>
              Niet-kwalificatie voor overheidscontracten en significante export
            </li>
            <li>Merkreputatie zal voor lange tijd worden beschadigd</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusie
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Implementatie van BIS Schema X Certificering voor Borduurmachines in OTR
            voor Borduurmachines (2024) is een belangrijke stap voor de Indiase textiel-
            en borduursector.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Vanuit het perspectief van Fabrikanten en Importeurs van Borduurmachines
            is het verkrijgen van BIS Registratie voor Borduurmachines en het plaatsen
            van het BIS-merk voor Borduurmachines niet alleen naleving van juridische
            vereisten maar heeft ook buitengewone ondersteuning voor productkwaliteit,
            marktvertrouwen & concurrentievoordeel voor de snelgroeiende textielindustrie
            in India.
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
                  alt="BIS"
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
                ISI MERK (BIS) voor Indiase Fabrikanten
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  