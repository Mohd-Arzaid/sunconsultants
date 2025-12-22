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
import ServiceAuthorDutch from "@/components/manual/ServiceAuthor/ServiceAuthorDutch";
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

const DieselGeneratorDutch = () => {
  return (
    <div className="relative w-full">
      <DieselGeneratorMetaTags />
      <DieselGeneratorBreadcrumb />
      <DieselGeneratorMainContent />
      <Services />
      <VideoSection />
      <FooterDutch />
    </div>
  );
};

export default DieselGeneratorDutch;

const DieselGeneratorMetaTags = () => {
  const title = "BIS Schema X Certificering voor Dieselgeneratoren";
  const description =
    "BIS Schema X Certificering voor dieselgeneratoren en hun componenten is een cruciale regelgevingsstap gericht op standaardisatie en het waarborgen van kwaliteit en veiligheid in India";
  const keywords =
    "BIS Certificering voor Dieselgeneratoren, BIS Schema X Certificering voor Dieselgeneratoren, Schema X certificering voor Dieselgeneratoren, BIS voor Dieselgeneratoren, OTR voor Dieselgeneratoren";
  const canonicalUrl =
    "https://bis-certifications.com/bis-schema-x-certificering-voor-dieselgeneratoren";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "BIS Schema X Certificering voor Dieselgeneratoren in India | Volledige Gids";
  const ogDescription =
    "Leer alles over BIS Schema X Certificering voor dieselgeneratoren in India. Begrijp OTR 2024-naleving, BIS Licentieproces, ISI-markeringvereisten en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";

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

      {/* Hreflang Tags for Multi-language Support - English is the default language */}
      <link
        rel="alternate"
        hreflang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-diesel-generators"
      />
      <link
        rel="alternate"
        hreflang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-dizeru-hatsudenki"
      />
      <link
        rel="alternate"
        hreflang="zh"
        href="https://bis-certifications.com/bis-fang-an-x-chai-you-fa-dian-ji-ren-zheng"
      />
      <link
        rel="alternate"
        hreflang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-generateurs-diesel"
      />
      <link
        rel="alternate"
        hreflang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-dieselgeneratoren"
      />
      <link
        rel="alternate"
        hreflang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-phat-dien-diesel"
      />
      <link
        rel="alternate"
        hreflang="es"
        href="https://bis-certifications.com/certificacion-bis-scheme-x-para-generadores-diesel"
      />
      <link
        rel="alternate"
        hreflang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-dijel-baljeongi"
      />
      <link
        rel="alternate"
        hreflang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-generator-diesel"
      />
      <link
        rel="alternate"
        hreflang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-generatori-diesel"
      />
      <link
        rel="alternate"
        hreflang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-khuean-ngan-fa-fa-diesel"
      />
      <link
        rel="alternate"
        hreflang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-dieselgeneratoren"
      />
      <link
        rel="alternate"
        hreflang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-mawalid-al-dizil"
      />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-diesel-generators"
      />
    </Helmet>
  );
};

const DieselGeneratorBreadcrumb = () => {
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
                    BIS Schema X Certificering voor Dieselgeneratoren
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

const DieselGeneratorMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <DieselGeneratorMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentDutch />
      </div>
    </div>
  );
};

const DieselGeneratorMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS SCHEMA X CERTIFICERING VOOR DIESELGENERATOREN
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Diesel-Generator.png"
            alt="BIS Schema X Certificering voor Dieselgeneratoren"
            title="BIS Schema X Licentie voor Dieselgeneratoren"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Dieselgeneratoren worden gebruikt op commerciële, industriële,
          ziekenhuis-, infrastructuurprojecten, woningbouwprojecten en op vele
          andere plaatsen als secundaire stroombron. Als economische activa met
          de verantwoordelijkheid om continuïteit van stroomvoorziening te
          garanderen, is het belangrijk dat machines veilig, efficiënt en
          voldoen aan nationale normen.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          In een poging om dit te doen, valt BIS Certificering voor
          Dieselgeneratoren onder Schema X Certificering van het Bureau of
          Indian Standards (BIS). Dit schema is ingevoerd om ervoor te zorgen
          dat zowel nationale als wereldwijde fabrikanten voldoen aan strikte en
          strenge Indiase Normen voordat ze hun producten in India verkopen.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dit bericht beschrijft het belang van BIS Schema X Certificering voor
          Dieselgeneratoren, het OTR-mandaat van 2024 en hoe fabrikanten
          certificering kunnen verkrijgen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Belang van BIS voor Dieselgeneratoren
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dieselgeneratoren worden gebruikt in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Fabrieken en werkplaatsen</li>
          <li>Ziekenhuizen en noodhulp</li>
          <li>Datacenters en IT-hubs</li>
          <li>Commerciële en residentiële gebouwen</li>
          <li>Openbare Werken en Nutsvoorzieningen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          De risico's zijn enorm als dieselgeneratoren niet correct zijn
          gecertificeerd:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Meterfalen (mechanisch en elektrisch) wat resulteert in gebrek aan
            voorziening
          </li>
          <li>
            Hoge risico's op brand en veiligheidsgevaren op niet-conforme units
          </li>
          <li>Te hoge emissies en energie-inefficiënt</li>
          <li>Juridische belemmeringen, uitgesloten van aanbestedingen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Dieselgeneratoren kunnen eenvoudig voldoen aan Schema X certificering
          die fabrikanten in staat stelt om veilige, betrouwbare en
          milieuvriendelijke producten te verkopen voor gebruik in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Wat is BIS Schema X Certificering voor Dieselgeneratoren?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Certificering voor Dieselgeneratoren is een officieel
          certificeringsproces en is een systeem opgericht door de BIS
          Conformiteitsbeoordelingsregeling 2018. Dit vereist strenge tests en
          kwaliteitsbeoordeling om naleving van Indiase Normen te valideren.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Hoogtepunten van Schema X Certificering:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Alle fabrikanten - Indiaas of buitenlands - Verplichte vereiste
          </li>
          <li>
            Van toepassing op alle soorten dieselgeneratoren met verschillende
            capaciteiten
          </li>
          <li>Omvat producttests in door BIS geautoriseerde laboratoria</li>
          <li>
            Fabrieksaudit, Werkplaatsbezoeken en Productieprocesinspecties, om
            onafhankelijk fabrieksinspecties op locatie uit te voeren om
            kwaliteits- en veiligheidsnormen te waarborgen.
          </li>
          <li>
            Biedt licentie voor gebruik van het BIS Standaardmerk wanneer
            gelicentieerd
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR voor Dieselgeneratoren (DG)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het Ministerie van Zware Industrie heeft een kennisgeving uitgegeven
          voor OTR voor Dieselgeneratoren in 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Datum van Inwerkingtreding: Alle fabrikanten en importeurs moeten
          certificering verkrijgen vóór 1 september 2026. Vanaf deze datum zal
          productie, verkoop of import van niet-gecertificeerde
          dieselgeneratoren worden verboden in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Dieselgeneratoren
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Veiligheidsgarantie: Minimaliseert mechanisch falen, gebaseerd op
            brandpreventietechnologie om brand, kortsluiting en ongevallen te
            voorkomen.
          </li>
          <li>
            Milieunaleving: Zorgt ervoor dat energiebesparende normen en
            emissiereductie worden gevolgd.
          </li>
          <li>
            Markttoegang: OTR voor Dieselgeneratoren - Verplichte certificering
            om te verkopen in India
          </li>
          <li>
            Klantvertrouwen: Het BIS Standaardmerk zorgt voor hoge
            betrouwbaarheid en veiligheid.
          </li>
          <li>
            Aanbestedingskwalificatie: Voor Overheids- / PSU-contracten moeten
            producten gecertificeerd zijn.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Diesel Generators Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Soorten Dieselgeneratoren die worden gedekt onder Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het Dieselgenerator X certificeringsschema omvat de volgende groepen:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Mobiele dieselgeneratoren voor thuisgebruik</li>
          <li>Commerciële dieselgeneratoren (hoge capaciteit)</li>
          <li>Nood- en standby stroomvoorzieningsgeneratoren</li>
          <li>
            Geluidsarme Dieselgeneratorsets voor Commercieel (Stedelijke
            Toepassingen en Gebruik)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Elk subtype moet voldoen aan de van toepassing zijnde Indiase Normen
          (IS-code) zoals IS 16819:2018 / ISO 12100:2010 (Machineveiligheid
          Algemene Principes Ontwerp - Risicobeoordeling & Risicovermindering).
          Elk type moet voldoen aan zijn eigen Indiase Normen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedure voor BIS Certificering voor Dieselgeneratoren
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificatie van Van Toepassing Zijnde Normen: Zoek de IS-code voor
            uw type generator.
          </li>
          <li>
            Producttests: Voer veiligheids-, prestaties- en emissietests uit in
            BIS-erkende laboratoria.
          </li>
          <li>
            Fabrieksaudit: BIS-functionarissen controleren
            productiekwaliteitscontroleprocessen.
          </li>
          <li>
            Documentatie Indienen: Verstrek specificaties, testresultaten en
            nalevingsdocumentatie.
          </li>
          <li>
            Licentie Uitgifte: Na goedkeuring geeft BIS licentie uit en staat
            gebruik van het Standaardmerk toe.
          </li>
          <li>
            Continue Naleving: Audits en productinspecties worden uitgevoerd om
            ervoor te zorgen dat certificering geldig blijft.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sancties voor Naleving
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het niet naleven van BIS Certificering voor Dieselgeneratoren van OTR
          voor Dieselgeneratoren kan resulteren in:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verbod op verkoop, import en fabricage van Niet-Gecertificeerde
            Apparatuur.
          </li>
          <li>Goederen inbeslagname en financiële boetes</li>
          <li>Niet-kwalificatie voor overheidscontracten</li>
          <li>Permanente reputatie- en financiële schade</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusie
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Certificering voor Dieselgeneratoren in overeenstemming
          met OTR voor Dieselgeneratoren (2024) is een belangrijke mijlpaal in
          de reis naar verbetering van productveiligheid, betrouwbaarheid en
          efficiëntie in de Indiase back-up stroomindustrie.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Voor fabrikanten/importeurs is Schema X certificering voor
          Dieselgeneratoren niet alleen een juridische vereiste, maar ook een
          concurrentievoordeel dat geloofwaardigheid, naleving en
          marktvertrouwen weerspiegelt.
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
