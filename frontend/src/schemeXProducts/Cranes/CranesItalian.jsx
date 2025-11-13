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
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const CranesItalian = () => {
  return (
    <div className="relative w-full">
      <CranesMetaTags />

      <CranesBreadcrumb />
      <CranesMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default CranesItalian;

const CranesMetaTags = () => {
  const title = "Certificazione BIS Schema X per Gru";
  const description =
    "Il Bureau of Indian Standards (BIS) ha introdotto la certificazione Schema X obbligatoria per tutti i tipi di gru insieme ai loro assiemi, sotto-assiemi e componenti.";
  const keywords =
    "Certificazione BIS per Gru, Certificazione BIS Schema X per Gru, Certificazione Schema X per Gru, BIS per Gru, OTR per Gru";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Gru in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per Gru in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione prima della scadenza di settembre 2026";

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

const CranesBreadcrumb = () => {
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
                    BIS Schema X per Gru
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

const CranesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CranesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const CranesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Schema X per Gru
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
            alt="Certificazione BIS Schema X per Gru"
            title="Licenza BIS Schema X per Gru"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Le gru sono principalmente utilizzate per sollevare e trasportare
          materiali e nella produzione, costruzione, fabbricazione e attività
          minerarie. Poiché la loro funzione può essere critica per la
          sicurezza, gru non qualificate o di scarsa qualità possono causare
          scivolamenti e cadute, danni alle attrezzature o perdite costose.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Considerando questi pericoli, il Bureau of Indian Standards (BIS) ha
          reso obbligatoria la Certificazione BIS per Gru sotto la
          Certificazione Schema – X. Questo garantisce che le gru utilizzate in
          India siano sicure, affidabili, efficienti e di qualità di classe
          mondiale.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In questo blog, vi guideremo sull'importanza della Registrazione BIS
          Schema X per Gru, sugli aspetti legali dell'OTR per Gru e su come
          ottenere la Licenza BIS per Gru e apporre il marchio Standard BIS per
          Gru.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Perché il BIS per Gru è Importante
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le gru sono ampiamente utilizzate in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Lavori di costruzione e infrastrutture</li>
          <li>Porti marittimi, cantieri navali e altri centri logistici</li>
          <li>Stabilimenti di produzione e assemblaggio</li>
          <li>Estrazione di metalli e movimentazione di materiali pesanti</li>
          <li>Centrali elettriche e altre industrie</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza BIS per Gru, le attrezzature non certificate possono causare:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Guasti meccanici e incidenti</li>
          <li>Ridotta disponibilità e aumento dei costi di manutenzione</li>
          <li>Perdita di idoneità per progetti governativi</li>
          <li>
            Lavoratori e infrastrutture esposti a pericoli per la sicurezza
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Il marchio BIS per Gru fornisce garanzia ai consumatori e ai
          regolatori che il prodotto rispetta le rigide norme di qualità e
          sicurezza indiane.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per Gru?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione Schema X per Gru sotto BIS è obbligatoria secondo il
          Regolamento di Valutazione della Conformità BIS, 2018, che rende
          obbligatoria la certificazione del prodotto per macchinari critici.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caratteristiche Principali dello Schema X per Gru:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Richiesto per produttori sia nazionali che esteri</li>
          <li>
            Applicabile a tutte le principali categorie di gru e notificato
            sotto gli Standard Indiani
          </li>
          <li>
            Test del prodotto, audit di fabbrica e valutazione continua della
            conformità sono obbligatori
          </li>
          <li>
            Fornisce licenza per l'uso del marchio BIS su Gru sui prodotti
            certificati
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR per Gru
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Regolamento Tecnico Omnibus (OTR) per Gru, notificato dal Ministero
          dell'Industria Pesante nel 2024, mira a rendere obbligatoria la
          certificazione.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Tutti i Produttori / Importatori di Gru devono ottenere la
          Licenza BIS per Gru sotto lo Schema X entro il 01 settembre 2026. Dopo
          tale data, le gru non certificate non potranno essere
          commercializzate, importate o utilizzate in appalti pubblici in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Gru
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Maggiore Sicurezza: Le gru certificate minimizzano i guasti
            meccanici e gli incidenti.
          </li>
          <li>
            Vantaggio di Mercato: Gli enti governativi e le aziende private
            danno preferenza alle gru certificate BIS negli e-tender e nei
            grandi progetti.
          </li>
          <li>
            Fiducia di Consumatori e Appaltatori: Il marchio BIS per Gru crea
            fiducia nella qualità e affidabilità.
          </li>
          <li>
            Accesso al Mercato Globale: Per i produttori esteri, la Licenza BIS
            per Gru permette una penetrazione senza ostacoli nel mercato indiano
            regolamentato.
          </li>
          <li>
            Conformità alle Leggi Indiane: Previene multe, sequestri ed
            esclusione da contratti governativi.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Cranes Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Gru Inclusi nella Certificazione Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le gru elencate sotto la certificazione Schema X comprendono vari
          tipi, ad esempio:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Gru a Torre</li>
          <li>Gru Mobili</li>
          <li>Gru a Portale e Goliath</li>
          <li>Gru OH/BR</li>
          <li>Gru Cingolate</li>
          <li>Gru a Braccio</li>
          <li>Gru Galleggianti</li>
          <li>Gru Industriali e da Officina</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni variante deve rispettare gli appropriati Standard Indiani (codice
          IS) come IS 4573:2020 per le Specifiche delle Gru Mobili Motorizzate e
          IS/ISO 15442:2012 per Gru - Requisiti di sicurezza per gru loader.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Il tipo di attrezzatura deve conformarsi agli standard indiani
          rilevanti (codice IS) per design, capacità di carico, sicurezza e
          prestazioni.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedura per Ottenere la Licenza BIS per Gru
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificare lo Standard IS Rilevante: Identificare lo Standard
            Indiano applicabile per il vostro tipo di gru.
          </li>
          <li>
            Test in Laboratorio Riconosciuto BIS: Obbligatorio condurre test di
            sicurezza ed efficacia.
          </li>
          <li>
            Ispezione di Fabbrica: BIS conduce ispezioni del sito di produzione
            e del sistema qualità.
          </li>
          <li>
            Applicazione e Documentazione: Presentare report tecnici, risultati
            dei test e manuali di qualità.
          </li>
          <li>
            Licenza BIS su Gru: Dopo l'approvazione, i produttori hanno il
            privilegio di applicare il marchio BIS per Gru.
          </li>
          <li>
            Conformità Continua: Audit e ispezioni regolari garantiscono la
            conformità continua.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cosa succede se qualcuno non segue l'OTR per Gru e non ottiene la
          Certificazione BIS per Gru entro il 1 settembre 2026?
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Divieto di vendita e importazione di gru non certificate</li>
          <li>Sequestro del prodotto e multe pesanti</li>
          <li>Squalifica da appalti governativi e PSU</li>
          <li>Impatto negativo a lungo termine sul marchio</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'applicazione della Certificazione BIS Schema X sarà una pietra
          miliare importante che migliorerà la sicurezza, l'affidabilità e
          fornirà standard industriali comuni in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Per i produttori, importatori ed esportatori di Gru, è importante
          ottenere la Licenza BIS per Gru e possono presentare domanda tramite
          il portale di applicazione online per la Registrazione BIS Gru per
          conformarsi agli standard, costruire la fiducia dei consumatori e
          anche per evitare potenziali conflitti con BIS o il Governo Indiano.
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
