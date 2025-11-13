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
import FooterItalian from "@/components/manual/Footer/FooterItalian";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";

const CompressorsItalian = () => {
  return (
    <div className="relative w-full">
      <CompressorsMetaTags />
      <CompressorsBreadcrumb />
      <CompressorsMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default CompressorsItalian;

const CompressorsMetaTags = () => {
  const title = "Certificazione BIS Schema X per Compressori";
  const description =
    "La certificazione BIS schema X per compressori, assemblaggi o loro componenti è obbligatoria secondo il Regolamento Tecnico Omnibus, 2024 che migliora la sicurezza del prodotto e la standardizzazione in India";
  const keywords =
    "Certificazione BIS per Compressori, Certificazione BIS Schema X per Compressori, Certificazione Schema X per Compressori, BIS per Compressori, OTR per Compressori";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Compressori in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per compressori in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione prima della scadenza di settembre 2026";

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

const CompressorsBreadcrumb = () => {
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
                    <Link to="/SchemeX-Products">Prodotti SchemeX</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Schema X per Compressori
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

const CompressorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CompressorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const CompressorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Schema X per Compressori
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Compressors.png"
            title="Licenza BIS Schema X per Compressori"
            alt="Certificazione BIS Schema X per Compressori"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          I compressori sono apparecchiature essenziali in vari settori come la
          refrigerazione, HVAC, petrolchimica, produzione, lavorazione
          alimentare e applicazioni farmaceutiche. L'industria indiana in rapida
          crescita si sta espandendo velocemente e la qualità e la sicurezza dei
          compressori sono diventate una preoccupazione primaria.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Per garantire ciò, il Bureau of Indian Standards (BIS) ha implementato
          la Certificazione BIS per Compressori sotto la Certificazione Schema
          X. Questa certificazione assicura che ogni compressore introdotto nel
          territorio indiano rispetti determinati standard di sicurezza,
          prestazioni ed efficienza.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In questa guida, forniamo informazioni sulla certificazione BIS Schema
          X per Compressori e OTR per Compressori, oltre a come i produttori
          possono ottenere la Licenza BIS per Compressori per utilizzare il
          Marchio BIS per Compressori in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Compressors is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Perché BIS per Compressori è Importante
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I compressori sono utilizzati in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Sistemi di aria condizionata/refrigerazione</li>
          <li>Linee di trasmissione gas e stoccaggio</li>
          <li>Impianti di processo petrolio e gas</li>
          <li>
            Installazioni di generazione elettrica e impianti industriali
            chimici
          </li>
          <li>Produzione di alimenti e bevande</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni tipo deve soddisfare gli Standard Indiani applicabili (codice IS)
          come IS 17093:2019.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza BIS per Compressori, prodotti inferiori o non marcati possono
          causare:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Guasti, periodi di manutenzione e tempi di inattività</li>
          <li>
            Produzione energetica inefficiente con bollette elettriche elevate
          </li>
          <li>Rischi per la sicurezza, come surriscaldamento o perdite</li>
          <li>Perdita di reputazione e danni monetari</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pertanto, il Marchio BIS per Compressori con certificazione ISI è una
          garanzia di sicurezza, affidabilità e qualità.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per Compressori?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificazione BIS Schema X per Compressori è uno schema di
          valutazione della conformità in India secondo il Regolamento di
          Valutazione della Conformità BIS, 2018. Serve a garantire che sia i
          produttori nazionali che stranieri rispettino gli standard di qualità
          indiani.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caratteristiche del Certificato Schema X per Compressori:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Obbligatorio per tutti i produttori (sia indiani che stranieri)
          </li>
          <li>
            Copre vari tipi di compressori notificati secondo gli Standard
            Indiani
          </li>
          <li>
            Prevede test di terze parti, ispezioni in fabbrica e verifiche
            periodiche di conformità
          </li>
          <li>
            Consente l'uso del Marchio BIS per Compressori sui prodotti del
            titolare della licenza come prodotti certificati
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR per Compressori
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Regolamento Tecnico Omnibus (OTR) per Compressori rilasciato dal
          Ministero dell'Industria Pesante nel 2024 rende obbligatoria la
          Certificazione Schema X per Compressori.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza per la Conformità: Entro il 1 settembre 2026, tutti i
          produttori e importatori sono tenuti ad avere una Licenza BIS per
          Compressori valida sotto lo Schema X. Qualsiasi non conformità
          comporterà il divieto totale di vendita e importazione di compressori
          non certificati in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Compressori
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza e Prestazioni: Aiuta a evitare pericoli come perdite,
            surriscaldamento e guasti della macchina.
          </li>
          <li>
            Accesso al Mercato: I compressori certificati BIS possono essere
            utilizzati in appalti pubblici e progetti governativi.
          </li>
          <li>
            Fiducia dei Consumatori: Il Marchio BIS per Compressori offre agli
            acquirenti la certezza che il prodotto rispetta gli Standard
            Indiani.
          </li>
          <li>
            Vantaggio Competitivo: Solo i marchi certificati ottengono maggiore
            fiducia e preferenza sul mercato.
          </li>
          <li>
            Facile Accesso al Mercato per Marchi Internazionali: La Licenza BIS
            per Compressori facilita l'accesso semplice al mercato indiano per i
            produttori stranieri.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Compressor Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Compressori Coperti da BIS Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X è disponibile per vari tipi di
          compressori come:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Compressori Alternativi a Spostamento Positivo</li>
          <li>Compressori Rotativi</li>
          <li>Compressori a Vite</li>
          <li>Turbocompressori</li>
          <li>Compressori a Flusso Assiale</li>
          <li>Compressori d'Aria Industriali e Portatili</li>
          <li>Compressori per aria condizionata e refrigerazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Le diverse tecnologie di compressori devono conformarsi ai rispettivi
          Standard Indiani, che stabiliscono requisiti per prestazioni, consumo
          energetico, qualità dei materiali e sicurezza.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Passo dopo Passo Licenza BIS per Compressori – Come Fare Domanda?
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identificare lo Standard Applicabile: Trovare il codice IS
            appropriato per il vostro compressore.
          </li>
          <li>
            Test del Prodotto: Eseguire test obbligatori di prestazioni,
            sicurezza ed efficienza energetica in laboratori riconosciuti dal
            BIS.
          </li>
          <li>
            Ispezione della Fabbrica: Il personale BIS effettua visite sul campo
            per verificare le procedure di produzione e i metodi di controllo
            qualità.
          </li>
          <li>
            Documentazione e Domanda: Includere rapporti di test, specifiche
            tecniche e manuali di Qualità insieme alla domanda BIS.
          </li>
          <li>
            Rilascio della Licenza BIS per Compressori: Una volta approvato, al
            produttore viene concesso il diritto di utilizzare il Marchio BIS
            per Compressori.
          </li>
          <li>
            Conformità Continua: Audit di sorveglianza regolari e test sui
            prodotti vengono effettuati dal BIS per garantire la conformità
            continua.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori che non ottengono la Certificazione BIS per Compressori
          entro il 1 settembre 2026 secondo l'OTR per Compressori saranno
          soggetti a:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Vendita/Importazione di compressori non testati non consentita
          </li>
          <li>Confisca di merci non conformi e sanzioni commerciali</li>
          <li>Esclusione da gare governative e contratti PSU</li>
          <li>Perdita di fiducia nel mercato indiano</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'implementazione della Certificazione BIS Schema X per Compressori
          attraverso l'OTR per Compressori (2024) è un passo avanti
          significativo per la sicurezza industriale, l'efficienza energetica e
          la garanzia di qualità in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          I produttori, importatori ed esportatori che completano il processo di
          ottenimento del Certificato BIS per Compressori e assicurano il
          certificato BIS per Compressori ottengono il diritto di far parte di
          questo mercato garantendo che i prodotti che offrono ai consumatori
          indiani siano considerati sicuri da usare, abbiano un rischio
          ambientale inferiore e siano di buona qualità.
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
                Migliori Consulenti di Certificazione in India
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
              Marchio BIS (Licenza ISI) per Produttori Stranieri
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
              Certificato di Registrazione BIS
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
