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
  
  const CentrifugesDutch = () => {
    return (
      <div className="relative w-full">
        <CentrifugesMetaTags />
        <CentrifugesBreadcrumb />
        <CentrifugesMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
      </div>
    );
  };
  
  export default CentrifugesDutch;
  
  const CentrifugesMetaTags = () => {
    const title =
      "BIS Schema X Certificering voor Centrifuges en Filtratie- of Zuiveringsmachines";
    const description =
      "BIS Schema X Certificering voor centrifuges, filtratie- of zuiveringsmachines voor vloeistoffen en gassen, en/of hun assemblages, sub-assemblages en componenten, is een cruciale regelgevingsmijlpaal voor de industriële machinesector";
    const keywords =
      "BIS Certificering voor Centrifuges, BIS Schema X Certificering voor Centrifuges, Schema X certificering voor Centrifuges, BIS voor Centrifuges, OTR voor Centrifuges";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Centrifuges in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor centrifuges in India. Begrijp OTR 2024-naleving, BIS Licentieproces, ISI-markeringvereisten en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
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
  
  const CentrifugesBreadcrumb = () => {
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
                      BIS Certificering voor Centrifuges
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
  
  const CentrifugesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <CentrifugesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const CentrifugesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Certificering voor Centrifuges
          </h1>
  
          {/* BIS Scheme X Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-for-centrifuges-filtering-or-purifying-machinery.png"
              title="BIS Schema X Licentie voor Centrifuges"
              alt="BIS Schema X Certificering voor Centrifuges en Filtratie- of Zuiveringsmachines"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Centrifuges zijn vitale machines die veel worden gebruikt in laboratorium-,
            farmaceutische, voedselverwerkings-, biotechnologie-, petrochemische en
            mijnbouwindustrieën. Deze machines werken door rotatie, en snelle rotatie
            scheidt mengsels, deze scheiding is cruciaal voor juiste, veilige en snelle
            verwerking.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Met bredere toepassingen in verschillende industrieën is het essentieel om
            de betrouwbaarheid en veiligheid van centrifuges te verbeteren. Om
            kwaliteitscontroleparameters voor centrifuges te handhaven, heeft BIS een
            BIS Certificeringsschema geïntroduceerd dat bekend staat als Schema X
            Certificering voor Centrifuges.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            In dit bericht zullen we bespreken wat BIS Schema X Certificering voor
            Centrifuges is, wat OTR voor Centrifuges is, en hoe u een BIS Licentie voor
            Centrifuges kunt verkrijgen met het officiële BIS-merk voor Centrifuges.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Significance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Belang van BIS voor Centrifuges
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Centrifuges worden gebruikt in:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Farmaceutische en Biotechnologiesector</li>
            <li>Voedselverwerking en drankproductie</li>
            <li>Olieraffinaderijen en petrochemische industrie</li>
            <li>Medische laboratoria</li>
            <li>Milieu- en waterverwerking</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Het ontbreken van BIS voor Centrifuges kan leiden tot het gebruik van
            lage kwaliteit of niet-gecertificeerde Centrifuges die kunnen resulteren in:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Risico op mechanische schade</li>
            <li>Mogelijkheid van besmetting in kwetsbare sectoren</li>
            <li>Verlies van tijd en verlies van inkomsten</li>
            <li>Lage efficiëntie en verhoogd energieverbruik.</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            BIS-gecertificeerde Centrifuges met het BIS-merk voor Centrifuges impliceren
            veiligheid, kwaliteit en vertrouwen.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certificate Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS Schema X Certificaat voor Centrifuges?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            BIS Schema X Certificering voor Centrifuges is een verplicht
            certificeringsschema onder de BIS Conformiteitsbeoordelingsregeling, 2018.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Schema X Certificering voor Centrifuges: Belangrijkste kenmerken:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Van toepassing op Indiase en buitenlandse fabrikanten</li>
            <li>
              Van toepassing op alle soorten centrifuges die worden aangetroffen in
              industriële en R&D-laboratoria
            </li>
            <li>
              Voldoende producttests, audits en validatie van naleving zijn een
              vereiste
            </li>
            <li>
              Stelt fabrikanten in staat om BIS-registratie aan te vragen op basis van
              certificering voor de bovengenoemde Centrifuges.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR voor Centrifuges
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            OTR voor Centrifuges werd aangekondigd door het Ministerie van Zware
            Industrie in 2024, wat Schema X-certificering vereist.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: Alle fabrikanten en importeurs zijn verplicht om een geldige BIS
            Centrifuges Licentie onder Schema X te verkrijgen op 1 september 2026. "Dit
            zal niet-gecertificeerde centrifuges stoppen van verkoop, import of
            deelname aan aanbestedingen in het hele land," zei een overheidsfunctionaris.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Voordelen van BIS Certificering voor Centrifuges
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Veiligheid & Naleving: Voorkomt ongevallen door mechanische schade bij
              hoge snelheden.
            </li>
            <li>
              Kwaliteit & Betrouwbaarheid: Gecertificeerde Centrifuges presteren met
              hoge nauwkeurigheid en precisie.
            </li>
            <li>
              Markttoegang: BIS Centrifuges Licentie is meestal vereist voor
              inkoop door publieke instanties.
            </li>
            <li>
              Consumentenvertrouwen: Het BIS-merk voor Centrifuges informeert klanten
              over productkwaliteit en duurzaamheid.
            </li>
            <li>
              Concurrentievoordeel: Gecertificeerde BIS-merken/fabrikanten worden
              de voorkeur gegeven in gereguleerde markten en voor overheidsaanbestedingen.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Centrifuge Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Centrifuges onder BIS Certificeringsschema
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Schema X-accreditatie voor Centrifuges omvat verschillende soorten zoals:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Laboratoriumcentrifuges</li>
            <li>Industriële scheiders</li>
            <li>Gekoelde Centrifuges</li>
            <li>Ultracentrifuges</li>
            <li>Gascentrifuges</li>
            <li>Mandcentrifuges</li>
            <li>Decanter Centrifuges</li>
            <li>Continue en Batch Centrifuges</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Al deze soorten moeten voldoen aan de van toepassing zijnde Indiase
            Normen (IS-code) zoals IS 16819:2018/ISO 12100:2010 (Machineveiligheid
            Algemene Principes voor Ontwerp - Risicobeoordeling en Risicovermindering).
            Alle variëteiten moeten voldoen aan de relevante Indiase Normen (IS-code)
            voor kwaliteit, veiligheid en energie-efficiëntie.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS Certificeringsproces voor Centrifuges
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Identificatie van Relevante Normen: Verwijzen naar de relevante IS-code
              voor uw type Centrifuge.
            </li>
            <li>
              Producttests: Uitvoeren van vereiste prestatietests en veiligheidstests
              volgens industriestandaarden, in BIS-geaccrediteerde laboratoria.
            </li>
            <li>
              Fabrieksinspectie: Controleren van kwaliteitsborgingssystemen op de
              productielocatie door BIS-functionarissen.
            </li>
            <li>
              Aanvraag & Documentatie: Verstrekken van technische specificaties,
              kwaliteitshandleidingen en testrapporten.
            </li>
            <li>
              Uitgifte van BIS Licentie voor Centrifuges: U kunt het BIS-merk
              plaatsen na goedkeuring.
            </li>
            <li>
              Continue Naleving: BIS controleert en voert onaangekondigde audits uit
              voor naleving van normen.
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Sancties voor Naleving
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Fabrikanten die niet alle centrifuge-modellen hebben gecertificeerd met
            BIS Certificering voor Centrifuges op 1 september 2026 lopen het risico:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              Verbod op verkoop/import voor niet-gecertificeerde centrifuges
            </li>
            <li>Inbeslagname van niet-conforme apparatuur en monetaire sancties</li>
            <li>
              Dit maakt u niet in aanmerking komend voor overheidsaanbestedingen of PSU's
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
            Implementatie van BIS Schema X Certificering voor Centrifuges in OTR 2024
            is een stap om veiligheid, efficiëntie en kwaliteit te brengen in de
            industriële en laboratoriumsector in India.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Fabrikanten, Importeurs en Exporteurs profiteren van dit proces door BIS
            Certificering voor Centrifuges te verkrijgen, door BIS Licentie voor
            Centrifuges te verkrijgen, en door het BIS-merk voor Centrifuges op hun
            producten te plaatsen, wat aantoont dat hun producten voldoen aan lokale
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
  