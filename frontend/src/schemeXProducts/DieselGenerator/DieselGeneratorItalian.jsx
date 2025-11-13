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
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
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

const DieselGeneratorItalian = () => {
  return (
    <div className="relative w-full">
      <DieselGeneratorMetaTags />
      <DieselGeneratorBreadcrumb />
      <DieselGeneratorMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default DieselGeneratorItalian;

const DieselGeneratorMetaTags = () => {
  const title = "Certificazione BIS Schema X per Generatori Diesel";
  const description =
    "La Certificazione BIS Schema X per generatori diesel e i loro componenti è una fase normativa importante che mira a standardizzare e mantenere la qualità e la sicurezza in India";
  const keywords =
    "Certificazione BIS per Generatori Diesel, Certificazione BIS Schema X per Generatori Diesel, Certificazione Schema X per Generatori Diesel, BIS per Generatori Diesel, OTR per Generatori Diesel";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Generatori Diesel in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per generatori diesel in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione prima della scadenza di settembre 2026";

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
                    <Link to="/SchemeX-Products">Prodotti SchemaX</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificazione BIS Schema X per Generatori Diesel
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
        <ServicesRightSideContentItalian />
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
          CERTIFICAZIONE BIS SCHEMA X PER GENERATORI DIESEL
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Diesel-Generator.png"
            alt="Certificazione BIS Schema X per Generatori Diesel"
            title="Licenza BIS Schema X per Generatori Diesel"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          I Generatori Diesel sono utilizzati in ambienti commerciali,
          industriali, ospedali, progetti infrastrutturali, progetti
          residenziali e in molti altri luoghi come fonte di alimentazione
          secondaria. Come asset economico con la responsabilità di garantire la
          continuità dell'alimentazione elettrica, è essenziale che le macchine
          siano sicure, efficienti e conformi agli standard nazionali.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Nel tentativo di farlo, la Certificazione BIS per Generatori Diesel
          rientra nella Certificazione Schema X del Bureau of Indian Standards
          (BIS). Questo schema è stato implementato per garantire che sia i
          produttori nazionali che quelli internazionali rispettino gli standard
          indiani rigorosi e severi prima di vendere i loro prodotti in India.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Questo post descrive l'importanza della Certificazione BIS Schema X
          per Generatori Diesel, il mandato OTR del 2024 e come i produttori
          possono ottenere la certificazione.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importanza del BIS per Generatori Diesel
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I generatori diesel sono utilizzati in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Fabbriche e cantieri</li>
          <li>Ospedali e servizi di emergenza</li>
          <li>Data center e hub IT</li>
          <li>Edifici commerciali e residenziali</li>
          <li>Lavori Pubblici e Utilities</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I rischi sono elevati se i gruppi elettrogeni diesel non sono
          adeguatamente certificati:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Guasti del contatore (meccanici ed elettrici) che causano mancanza
            di alimentazione
          </li>
          <li>
            Alto rischio di incendio e pericoli per la sicurezza su unità non
            conformi
          </li>
          <li>Emissioni troppo elevate e inefficienza energetica</li>
          <li>Ostacoli legali, esclusione da gare d'appalto</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          I Generatori Diesel possono facilmente soddisfare la certificazione
          Schema X che consente ai produttori di vendere prodotti sicuri,
          affidabili ed ecologici per l'uso in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per Generatori Diesel?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Generatori Diesel è un processo di
          certificazione ufficiale ed è un sistema istituito dal Regolamento di
          Valutazione della Conformità BIS 2018. Richiede test rigorosi e
          valutazione della qualità per validare la conformità agli Standard
          Indiani.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Punti Salienti della Certificazione Schema X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Tutti i produttori - indiani ed esteri - Requisito obbligatorio
          </li>
          <li>
            Applicabile a tutti i tipi di generatori diesel con capacità diverse
          </li>
          <li>Include test del prodotto in laboratori autorizzati BIS</li>
          <li>
            Audit di Fabbrica, Visite in Officina e Ispezione del Processo di
            Produzione, per condurre ispezioni in loco indipendenti per
            garantire standard di qualità e sicurezza.
          </li>
          <li>
            Offre licenza per utilizzare il Marchio Standard BIS quando
            autorizzato
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR per Generatori Diesel (DG)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Ministero dell'Industria Pesante ha emesso una notifica per l'OTR
          per Generatori Diesel nel 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Data di Applicazione: Tutti i produttori e importatori devono ottenere
          la certificazione entro il 1 settembre 2026. Da questa data, la
          produzione, vendita o importazione di gruppi elettrogeni diesel non
          certificati sarà vietata in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Generatori Diesel
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Garanzia di Sicurezza: Minimizza i guasti meccanici, basato su
            tecnologia di prevenzione incendi per evitare incendi, cortocircuiti
            e incidenti.
          </li>
          <li>
            Conformità Ambientale: Garantisce che siano seguiti standard di
            efficienza energetica e riduzione delle emissioni.
          </li>
          <li>
            Accesso al Mercato: OTR per Generatori Diesel - Certificazione
            obbligatoria per la vendita in India
          </li>
          <li>
            Fiducia del Cliente: Il Marchio Standard BIS garantisce alta
            affidabilità e sicurezza.
          </li>
          <li>
            Idoneità per Appalti: Per contratti Governativi / PSU, i prodotti
            devono essere certificati.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Diesel Generators Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Generatori Diesel Coperti dallo Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo schema di certificazione Generatori Diesel X copre i seguenti
          gruppi:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Generatori domestici portatili a diesel</li>
          <li>Gruppi elettrogeni diesel commerciali (alta capacità)</li>
          <li>Generatori di alimentazione di emergenza e standby</li>
          <li>
            Set Generatori Diesel Silenziosi per Uso Commerciale (Applicazioni e
            Uso Urbano)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Ogni sottotipo deve conformarsi agli Standard Indiani applicabili
          (codice IS) come IS 16819:2018 / ISO 12100:2010 (Sicurezza delle
          Macchine Principi Generali di Progettazione - Valutazione del Rischio
          e Riduzione del Rischio). Ogni tipo deve soddisfare i propri Standard
          Indiani.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedura di Certificazione BIS per Generatori Diesel
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificare lo Standard Applicabile: Scoprire il codice IS per il
            tipo di generatore.
          </li>
          <li>
            Test del Prodotto: Condurre test di sicurezza, prestazioni ed
            emissioni in laboratori riconosciuti BIS.
          </li>
          <li>
            Audit di Fabbrica: Gli ufficiali BIS esaminano i processi di
            controllo qualità della produzione.
          </li>
          <li>
            Presentazione della Documentazione: Fornire specifiche, risultati
            dei test e documentazione di conformità.
          </li>
          <li>
            Concessione della Licenza: Dopo l'approvazione, BIS rilascia la
            licenza e autorizza l'uso del Marchio Standard.
          </li>
          <li>
            Conformità Continua: Audit e ispezioni del prodotto vengono condotti
            per garantire che la certificazione rimanga valida.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il mancato rispetto della Certificazione BIS per Generatori Diesel
          dall'OTR per Generatori Diesel può comportare:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Divieto di vendita, importazione e produzione di Attrezzature Non
            Certificate.
          </li>
          <li>Sequestro della merce e multe finanziarie</li>
          <li>Inidoneità per contratti governativi</li>
          <li>Danno reputazionale e finanziario permanente</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Generatori Diesel in conformità con
          l'OTR per Generatori Diesel (2024) rappresenta una pietra miliare
          importante nel percorso di miglioramento della sicurezza del prodotto,
          affidabilità ed efficienza nell'industria dell'alimentazione di
          riserva indiana.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Per i produttori/importatori, la certificazione Schema X per
          Generatori Diesel non è solo un requisito legale, ma anche un
          vantaggio competitivo che riflette credibilità, conformità e fiducia
          del mercato.
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
                I Migliori Consulenti di Certificazione in India
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
              Marchio BIS (Licenza ISI) per Produttori Esteri
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
                alt="BIS"
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
