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
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import FooterItalian from "@/components/manual/Footer/FooterItalian";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const GearsGearingsandTransmissionItalian = () => {
  return (
    <div className="relative w-full">
      <GearsGearingsandTransmissionMetaTags />
      <GearsGearingsandTransmissionBreadcrumb />
      <GearsGearingsandTransmissionMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default GearsGearingsandTransmissionItalian;

const GearsGearingsandTransmissionMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Ingranaggi, Ingranamento ed Elementi di Trasmissione";
  const description =
    "La Certificazione BIS Schema X per ingranaggi e ingranamento, ruote dentate, pignoni a catena, elementi di trasmissione, viti a sfere o rulli, scatole degli ingranaggi e variatori di velocità, rappresenta una pietra miliare normativa importante per il settore delle macchine industriali";
  const keywords =
    "Certificazione BIS per Ingranaggi, Ingranamento ed Elementi di Trasmissione, Certificazione BIS Schema X per Ingranaggi, Ingranamento ed Elementi di Trasmissione, Certificazione Schema X per Ingranaggi, Ingranamento ed Elementi di Trasmissione, BIS per Ingranaggi, Ingranamento ed Elementi di Trasmissione, OTR per Ingranaggi, Ingranamento ed Elementi di Trasmissione";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Ingranaggi, Ingranamento ed Elementi di Trasmissione in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per ingranaggi, ingranamento ed elementi di trasmissione in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

const GearsGearingsandTransmissionBreadcrumb = () => {
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
                    <Link to="/SchemeX-Products">Prodotti SchemaX</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificazione BIS per Ingranaggi, Ingranamento ed Elementi
                    di Trasmissione
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

const GearsGearingsandTransmissionMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <GearsGearingsandTransmissionMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS Schema X per Ingranaggi, Ingranamento ed Elementi
          di Trasmissione
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-gears-and-gearing-toothed-wheels-chain-sprocket.png"
            alt="Certificazione BIS Schema X Per Ingranaggi Ingranamento Ed Elementi Di Trasmissione"
            title="Licenza BIS Schema X per ingranaggi e ingranamento, ruote dentate, pignoni a catena"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Nel mondo industriale in continua evoluzione, la sicurezza e la
          qualità dei componenti meccanici sono fondamentali. Secondo il Bureau
          of Indian Standards, tutte le macchine e i componenti elettrici
          prodotti in India devono rispettare la sicurezza e gli standard
          stabiliti dal BIS e descritti nell'Ordine sulla Sicurezza di Macchine
          e Apparecchiature Elettriche (Omnibus Technical Regulation) Order,
          2024. Questo ordine copre moduli meccanici, componenti e componenti di
          assemblaggio come ingranaggi, elementi di ingranamento e varie parti
          di trasmissione essenziali per il funzionamento delle macchine in
          qualsiasi industria.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Tutti i produttori, nazionali ed esteri, sono obbligati a soddisfare i
          requisiti standard della Certificazione Schema X entro il 1° settembre
          2026 come stabilito dall'ordine e istituito dal Ministero
          dell'Industria Pesante. Tutti i produttori nell'industria degli
          ingranaggi e delle scatole degli ingranaggi e tutti gli elementi di
          trasmissione correlati devono conformarsi a questa regolamentazione
          per poter accedere al mercato e stabilire standard per l'industria.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Questo blog contiene tutte le informazioni importanti per la
          certificazione di ingranaggi, scatole degli ingranaggi e
          l'incorporazione di parti di trasmissione correlate, insieme al perché
          questo è prezioso, il suo ambito, i vantaggi della certificazione e i
          documenti necessari.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Perché lo Schema X è Importante per Ingranaggi, Ingranamento ed
          Elementi di Trasmissione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questi componenti meccanici sono fondamentali in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Automobili, camion e treni</li>
          <li>Attrezzature aeronautiche e di difesa</li>
          <li>Macchine di produzione e robotica</li>
          <li>Sistemi Energetici e Centrali Elettriche</li>
          <li>
            Settore marittimo (industria ingegneristica pesante e leggera)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza BIS per Ingranaggi, Ingranamento ed Elementi di Trasmissione, i
          pericoli sono molto elevati:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Guasti agli ingranaggi che causano danni e tempi di inattività
            costosi
          </li>
          <li>
            Rischi per la sicurezza nei trasporti e nell'industria pesante
          </li>
          <li>Trasferimento di energia e dissipazione di energia inefficaci</li>
          <li>
            Accessibilità limitata a gare d'appalto pubbliche e opportunità di
            approvvigionamento
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Infine, la certificazione Schema X per Ingranaggi, Ingranamento ed
          Elementi di Trasmissione fornisce una maggiore durata, minimizza i
          rischi operativi ed è coerente con gli standard nazionali.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per Ingranaggi, Ingranamento ed
          Elementi di Trasmissione?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Ingranaggi, Ingranamento ed
          Elementi di Trasmissione fa parte del Regolamento di Valutazione della
          Conformità BIS, 2018. Definisce parametri rigorosi per il design, la
          qualità dei materiali e le prestazioni operative.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Le Caratteristiche Principali della Certificazione Schema X sono:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obbligatoria per tutti i produttori (indiani ed esteri)</li>
          <li>Applicabile a vari ingranaggi, alberi e parti di trasmissione</li>
          <li>Esegue test sui prodotti in laboratori approvati dal BIS</li>
          <li>Include audit di fabbrica per validare il controllo qualità</li>
          <li>
            Diritto di utilizzare il Marchio Standard BIS dopo la certificazione
            del prodotto
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR per Ingranaggi, Ingranamento ed Elementi di Trasmissione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Ministero dell'Industria Pesante ha adottato il Regolamento Tecnico
          Omnibus (OTR) 2024 su Ingranaggi, Ingranamento ed Elementi di
          Trasmissione.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Data di Conformità: Tutti i produttori e importatori sono obbligati ad
          avere la certificazione entro il 1° settembre 2026. Dopo questa data,
          i prodotti non certificati non potranno più essere prodotti, importati
          o venduti in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Ingranaggi, Ingranamento ed
          Elementi di Trasmissione
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza e Affidabilità: Evita guasti non previsti in applicazioni
            di sistemi vitali.
          </li>
          <li>
            Competitività di Mercato: Le aziende certificate godono di
            preferenze in gare d'appalto pubbliche e private.
          </li>
          <li>
            Fiducia dei Clienti: Gli acquirenti hanno fiducia nei prodotti con
            il riconoscimento ufficiale BIS.
          </li>
          <li>
            Conformità Legale: Nessuna penalità con l'OTR per Ingranaggi,
            Ingranamento e Parti di Trasmissione.
          </li>
          <li>
            Accesso al Mercato Globale: Consente ai produttori esteri di entrare
            nel mercato indiano con facilità.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Gears Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Ingranaggi e Parti di Trasmissione Inclusi
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione Schema X si applica a vari Ingranaggi, Ingranamento
          ed Elementi di Trasmissione come segue:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Ingranaggi cilindrici, elicoidali, conici e viti senza fine</li>
          <li>Alberi degli ingranaggi e giunti</li>
          <li>Scatole degli ingranaggi e parti di trasmissione</li>
          <li>Componenti di trasmissione a catena e cinghia</li>
          <li>
            Ingranaggi utilizzati nell'aerospaziale e nella robotica, auto di
            lusso, motociclette.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tutti i tipi devono essere conformi agli Standard Indiani (codice IS)
          come IS 16819:2018/ISO 12100:2010 (Sicurezza delle Macchine Principi
          Generali per il Design - Valutazione del Rischio e Riduzione del
          Rischio). Ogni tipo di prodotto deve essere conforme allo Standard
          Indiano appropriato per quanto riguarda il design e le prestazioni.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedura di Certificazione BIS per Ingranaggi, Ingranamento ed
          Elementi di Trasmissione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Identificare lo Standard Applicabile: Consultare il codice IS
          applicabile per il vostro prodotto di ingranaggi / trasmissione.
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Test del Prodotto: Eseguire test sui materiali e sulle prestazioni
            in laboratori accreditati BIS.
          </li>
          <li>
            Audit di Fabbrica: BIS effettua un audit Q.S. presso il sito di
            produzione.
          </li>
          <li>
            Presentare la Documentazione: Condividere dettagli tecnici,
            documenti di test e manuale di qualità.
          </li>
          <li>
            Concessione della Licenza: BIS, dopo aver verificato l'accuratezza
            dei documenti, concede la certificazione e autorizza l'uso del
            Marchio Standard.
          </li>
          <li>
            Conformità Continua: Audit e test periodici per mantenere la
            validità della certificazione.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalità per Non Conformità
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La non conformità alla Certificazione BIS per Ingranaggi, Ingranamento
          ed Elementi di Trasmissione secondo l'OTR per Ingranaggi, Ingranamento
          ed Elementi di Trasmissione comporterà:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Divieto di vendita e fabbricazione di articoli non certificati
          </li>
          <li>Sequestro di merci e multe pecuniarie</li>
          <li>Inidoneità per gare d'appalto e contratti governativi</li>
          <li>Danni alla reputazione a lungo termine</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Ingranaggi, Ingranamento ed
          Elementi di Trasmissione, notificata secondo l'OTR per Ingranaggi,
          Ingranamento ed Elementi di Trasmissione (2024) sarà un passo chiave
          verso l'aumento degli standard di qualità e sicurezza nelle strutture
          ingegneristiche e manifatturiere in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          I produttori e importatori di Soluzioni per Ingranaggi, Ingranamento e
          Trasmissione di Potenza che cercano di vendere nel mercato indiano
          troveranno che i loro profitti aumenteranno e apriranno le porte ai
          vantaggi di mercato implementando la certificazione Schema X per
          Ingranaggi, Ingranamento e Sistemi di Trasmissione di Potenza.
        </p>

        <ServiceAuthorItalian />
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
              I Nostri Servizi
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Miglior Consulente Certificazioni India
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
              Marchio BIS (Licenza ISI) per Produttori Esteri
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certificazione Registrazione CDSCO
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
              Registrazione BIS (CRS)
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
              Gestione Rifiuti Plastici
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
              Certificazione Certificato EPR
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
              Certificazione Certificato LMPC
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
              Certificato Registrazione BIS
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
              MARCHIO ISI (BIS) per Produttori Indiani
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
