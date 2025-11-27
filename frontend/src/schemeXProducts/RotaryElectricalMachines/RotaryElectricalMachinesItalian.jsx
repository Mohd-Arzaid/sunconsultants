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
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";
import { Helmet } from "react-helmet-async";
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

const RotaryElectricalMachinesItalian = () => {
  return (
    <div className="relative w-full">
      <RotaryElectricalMachinesMetaTags />
      <RotaryElectricalMachinesBreadcrumb />
      <RotaryElectricalMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default RotaryElectricalMachinesItalian;

const RotaryElectricalMachinesMetaTags = () => {
  const title = "Certificazione BIS Schema X per Macchine Elettriche Rotanti";
  const description =
    "La Certificazione BIS Schema X per macchine elettriche rotanti, come generatori, ecc., e/o loro assemblaggi/sottoassemblaggi/componenti, rappresenta una mossa normativa fondamentale verso la qualità e la sicurezza delle attrezzature industriali essenziali";
  const keywords =
    "Certificazione BIS per Macchine Elettriche Rotanti, Certificazione BIS Schema X per Macchine Elettriche Rotanti, Certificazione Schema X per Macchine Elettriche Rotanti, BIS per Macchine Elettriche Rotanti, OTR per Macchine Elettriche Rotanti";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Macchine Elettriche Rotanti in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per macchine elettriche rotanti in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione prima della scadenza di settembre 2026";

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

const RotaryElectricalMachinesBreadcrumb = () => {
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
                    Certificazione BIS per Macchine Elettriche Rotanti
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

const RotaryElectricalMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RotaryElectricalMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const RotaryElectricalMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Macchine Elettriche Rotanti
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Rotary-electrical-machines.png"
            alt="Certificazione BIS Schema X Per Macchine Elettriche Rotanti"
            title="Licenza BIS Schema X per Macchine Elettriche Rotanti"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          I generatori, i motori e gli alternatori come macchine elettriche
          rotanti sono tipi essenziali di macchinari utilizzati in numerose
          attività importanti come la gestione delle industrie, la generazione
          di energia e persino il soddisfacimento delle infrastrutture
          tecnologiche informatiche e altre esigenze a livello globale. Queste
          macchine lavorano insieme in settori come energia e trasporti,
          manifattura e complessi commerciali perché convertono l'energia
          meccanica in elettrica o viceversa. Tali macchine sono critiche e
          pertanto, la loro qualità, affidabilità e sicurezza sono importanti.
          In India, il BIS ha affrontato questa questione con la certificazione
          Schema X per macchine elettriche rotanti e i loro assemblaggi e
          componenti insieme ad altre apparecchiature elettriche.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Nel Regolamento Tecnico Omnibus Order 2024, il Ministero delle
          Industrie Pesanti ha dichiarato che tutti i produttori, sia esteri che
          locali, che producono macchine rotanti e tutte le altre
          apparecchiature correlate, devono conformarsi alla Certificazione
          Schema X entro la data del 1° settembre 2026. Questo insieme normativo
          menziona tutti i tipi di macchine elettriche rotanti tra cui
          generatori, alternatori, motori sincroni e asincroni, e tutti gli
          assemblaggi, sottoassemblaggi e componenti delle macchine.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Questo blog discute l'importanza, l'ambito, le procedure di
          certificazione, i benefici e altra documentazione correlata della
          certificazione Schema X per tutti i tipi di macchine elettriche
          rotanti.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importanza del BIS per le Macchine Elettriche Rotanti
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le macchine elettriche rotanti sono ampiamente utilizzate in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Generazione e distribuzione di elettricità</li>
          <li>Automazione industriale e apparecchiature</li>
          <li>Trasporti (ferrovie, navi, auto elettriche)</li>
          <li>Settori petrolio, gas ed energia</li>
          <li>Elettrodomestici per uso consumer e commerciale</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alcuni dei possibili rischi senza certificazione includono:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Pericoli elettrici, cortocircuiti e rischi di incendio</li>
          <li>Guasti meccanici e costosi tempi di inattività</li>
          <li>Spreco di energia</li>
          <li>Divieto da gare d'appalto e progetti governativi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La certificazione Schema X per Macchine Elettriche Rotanti garantisce
          che questi prodotti soddisfino rigorosi standard di qualità,
          efficienza e sicurezza.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per Macchine Elettriche Rotanti?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Macchine Elettriche Rotanti è uno
          schema normativo governativo ai sensi del Regolamento di Valutazione
          della Conformità BIS, 2018. Certifica i beni secondo gli Standard
          Indiani prima che entrino nel mercato indiano.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Alcune delle caratteristiche della Certificazione Schema X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obbligatoria per tutti i produttori (nazionali ed esteri)</li>
          <li>
            Include motori, generatori, alternatori e altre macchine elettriche
            rotanti
          </li>
          <li>Richiede test in laboratori riconosciuti dal BIS</li>
          <li>Audit di fabbrica per garantire il controllo qualità</li>
          <li>
            Consente l'uso del Marchio Standard BIS sul prodotto dopo la
            certificazione
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR per Macchine Rotanti
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Regolamento Tecnico Omnibus (OTR) per Macchine Elettriche Rotanti è
          stato annunciato dal Ministero delle Industrie Pesanti nel 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Data di Conformità: Secondo questo schema OTR, tutti i produttori e
          importatori di Macchine Elettriche Rotanti devono essere certificati
          sotto la certificazione BIS Schema X entro il 1° settembre 2026. Dopo
          questa scadenza, le macchine elettriche rotanti non certificate non
          possono essere vendute, prodotte o importate in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Macchine Elettriche Rotanti
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza e Affidabilità del Prodotto: Garantisce la sicurezza con
            standard elettrici e meccanici.
          </li>
          <li>
            Conformità Normativa: Soddisfa i requisiti dell'OTR per Macchine
            Elettriche Rotanti.
          </li>
          <li>
            Competitività di Mercato: La certificazione è un vantaggio negli
            appalti governativi e privati.
          </li>
          <li>
            Fiducia dei Consumatori: Il Marchio Standard BIS garantisce qualità
            e sicurezza per l'uso.
          </li>
          <li>
            Accesso al Mercato Globale: Aiuta i marchi esteri a penetrare
            facilmente nel mercato strettamente regolamentato dell'India.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Macchine Elettriche Rotanti Incluse
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificazione Schema X per Macchine Elettriche Rotanti copre
          un'ampia varietà di apparecchiature come elencato di seguito:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Motori AC e DC</li>
          <li>Generatori e alternatori</li>
          <li>Turbo-generatori e idro-generatori</li>
          <li>
            Tipi speciali di macchine rotanti impiegate in Industrie e Utilities
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tutti i tipi devono essere conformi agli appropriati Standard Indiani
          (codici IS) come IS 16819:2018/ ISO 12100:2010 (Sicurezza delle
          Macchine Principi Generali per la Progettazione - Valutazione del
          Rischio e Riduzione del Rischio). Tutti i tipi di macchine devono
          conformarsi agli Standard Indiani corrispondenti per essere approvati.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Macchine Elettriche Rotanti
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identificare gli Standard: Consultare i codici IS applicabili al
            tipo di macchina.
          </li>
          <li>
            Test del Prodotto: Eseguire test di prestazione, sicurezza ed
            efficienza in laboratori approvati dal BIS.
          </li>
          <li>
            Ispezione di Fabbrica: Revisione dei funzionari BIS sull'impianto di
            produzione e sui sistemi di garanzia qualità.
          </li>
          <li>
            Presentazione della Documentazione: Presentare documentazione
            tecnica, specifiche e distinta base.
          </li>
          <li>
            Concessione della Licenza: Se l'applicazione è approvata, il BIS
            concede la certificazione e permette l'uso del Marchio Standard BIS.
          </li>
          <li>
            Conformità Continua: Test e audit regolari per mantenere la
            certificazione corrente.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalità per la Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori che non seguono la Certificazione BIS per Macchine
          Elettriche Rotanti coperte dall'OTR per Macchine Elettriche Rotanti
          sono soggetti a:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Divieto di vendita o importazione di articoli non certificati</li>
          <li>Confisca degli articoli e multe sostanziali</li>
          <li>Eliminazione da lavori o progetti e gare governative</li>
          <li>Perdite economiche e danni alla reputazione</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Macchine Elettriche Rotanti, in
          linea con l'OTR per Macchine Elettriche Rotanti (2024), è un passo
          vitale per rafforzare la sicurezza industriale, la conservazione
          dell'energia e le loro prestazioni nell'industria dei macchinari
          elettrici dell'India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Per i produttori e gli importatori, la certificazione Schema X per
          Macchine Elettriche Rotanti non è solo un esercizio di spunta delle
          caselle, è importante cavalcare questa certificazione e posizionarsi
          strategicamente vantaggiosi per essere visti come credibili dal
          cliente come parte della loro storia di crescita.
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
              Gestione dei Rifiuti Plastici
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
