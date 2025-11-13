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

const PackingMachineryItalian = () => {
  return (
    <div className="relative w-full">
      <PackingMachineryItalianMetaTags />

      <PackingMachineryBreadcrumb />
      <PackingMachineryMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default PackingMachineryItalian;

const PackingMachineryItalianMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Macchinari per Imballaggio e Loro Assemblaggi";
  const description =
    "La Certificazione BIS Schema X per tutti i tipi di macchine per riempimento, chiusura, sigillatura, etichettatura di bottiglie, confezionamento o avvolgimento, e/o loro assemblaggi, sottoassemblaggi e componenti, rappresenta un passo importante verso la standardizzazione della sicurezza e qualità nel settore manifatturiero indiano";
  const keywords =
    "Certificazione BIS per Macchinari per Imballaggio, Certificazione BIS Schema X per Macchinari per Imballaggio, Certificazione Schema X per Macchinari per Imballaggio, BIS per Macchinari per Imballaggio, OTR per Macchinari per Imballaggio";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Macchinari per Imballaggio in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per macchinari per imballaggio in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

const PackingMachineryBreadcrumb = () => {
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
                    Certificazione BIS per Macchinari per Imballaggio
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

const PackingMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PackingMachineryMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const PackingMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Macchinari per Imballaggio
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-filling-closing-sealing-labelling.png"
            title="Licenza BIS Schema X per Macchinari per Imballaggio"
            alt="Certificazione BIS Schema X per Macchinari per Imballaggio"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          I macchinari per imballaggio sono essenziali per le industrie nei
          settori alimentare, delle bevande, farmaceutico, chimico, dei beni di
          consumo e della logistica. Queste macchine garantiscono un imballaggio
          accurato, sicuro e di qualità dei prodotti.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Per garantire sicurezza, affidabilità e redditività, il BIS (Bureau of
          Indian Standards) ha reso obbligatoria la Certificazione BIS Schema X
          per Macchinari per Imballaggio. Questa certificazione è fornita per
          garantire che tutti i macchinari per imballaggio, sia venduti in India
          che importati in India, rispettino gli standard di qualità nazionali
          applicabili.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In questo articolo, spiegheremo il significato della Certificazione
          Schema X per Macchinari per Imballaggio, il Ruolo dell'OTR per
          Macchinari per Imballaggio e il processo per ottenere la Licenza BIS e
          il Marchio Standard BIS per Macchinari per Imballaggio.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS Certification Matters Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importanza della Certificazione BIS per Macchinari per Imballaggio
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I macchinari per imballaggio sono utilizzati in tutte le aziende per i
          seguenti scopi:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Imballaggio di Alimenti e Bevande</li>
          <li>Farmaci e prodotti medici</li>
          <li>Imballaggio utilizzato nell'industria chimica e industriale</li>
          <li>Prodotti di consumo e vendita al dettaglio</li>
          <li>Soluzioni di imballaggio per mercati di esportazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza la certificazione BIS per Macchinari per Imballaggio: I prodotti
          non certificati BIS possono causare:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Guasti nell'imballaggio, integrità del prodotto e contaminazione
          </li>
          <li>
            Rischi per la sicurezza nei segmenti alimentare e farmaceutico
          </li>
          <li>Operazioni inefficienti e tempi di inattività</li>
          <li>Mancato rispetto delle norme sugli appalti pubblici</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Il marchio BIS sui Macchinari per Imballaggio garantisce agli
          acquirenti Qualità, Sicurezza e lunga durata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is X-Scheme Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è il Certificato BIS Schema X per Macchinari per Imballaggio?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          I Macchinari per Imballaggio fanno parte della certificazione Schema X
          Parte II, sotto il Regolamento sulla Valutazione della Conformità BIS
          2018 e la conformità a questo è obbligatoria sia per i produttori
          indiani che stranieri.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Certificazione Schema X per Macchinari per Imballaggio:
          Caratteristiche principali:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Adatto per qualsiasi macchinario per imballaggio (manuale,
            semiautomatico e automatico)
          </li>
          <li>
            Richiede test del prodotto, audit per la fabbrica e controllo
            qualità
          </li>
          <li>Obbligatorio per vendite e importazioni in India</li>
          <li>
            Concede il permesso di utilizzare il marchio BIS per Macchinari per
            Imballaggio sulle attrezzature certificate
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR BIS per Macchinari per Imballaggio
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'OTR per Macchinari per Imballaggio è stato annunciato dal Ministero
          dell'Industria Pesante nel 2024, che richiede la certificazione Schema
          X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Tutti i macchinari per imballaggio devono essere dotati del
          Certificato BIS Schema X e tutti i macchinari per imballaggio devono
          ottenere la Licenza BIS per Macchinari per Imballaggio entro il 1°
          settembre 2026. "Questo impedirà ai macchinari per imballaggio non
          certificati di essere venduti, importati o di partecipare a gare
          d'appalto in tutto il paese," hanno dichiarato funzionari governativi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Macchinari per Imballaggio
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza e Igiene: I macchinari per imballaggio certificati evitano
            anche problemi di contaminazione (alimentare e farmaceutico).
          </li>
          <li>
            Garanzia di Qualità: Mantiene le macchine funzionanti in modo fluido
            ed efficiente.
          </li>
          <li>
            Accesso al Mercato: La Licenza BIS per Macchinari per Imballaggio è
            solitamente richiesta per gli appalti da parte di enti pubblici.
          </li>
          <li>
            Fiducia dei Consumatori: Il Marchio BIS per Macchinari per
            Imballaggio fornisce informazioni ai clienti sulla qualità del
            prodotto e la durabilità.
          </li>
          <li>
            Vantaggio Competitivo: I marchi/produttori certificati BIS sono
            preferiti nei mercati regolamentati e per le gare d'appalto
            governative.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Packing Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Macchinari per Imballaggio Sotto lo Schema di Certificazione
          BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'accreditamento Schema X per Macchinari per Imballaggio copre vari
          tipi come:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Macchinari per imballaggio di alimenti e bevande</li>
          <li>
            Macchinari per confezionamento blister e strip per farmaceutici
          </li>
          <li>Macchine per avvolgimento, sigillatura e riempimento</li>
          <li>Macchine per cartoni ed etichettatura</li>
          <li>Sistemi di imballaggio sottovuoto e termoretraibile</li>
          <li>Macchinari per imballaggio industriale e alla rinfusa</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni tipo di macchinario per imballaggio deve soddisfare i requisiti
          degli Standard Indiani appropriati (codice IS) incluso IS
          16819:2018/ISO 12100:2010 (Sicurezza delle Macchine Principi Generali
          per la Progettazione - Valutazione del Rischio e Riduzione del
          Rischio).
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          I tipi di macchine devono soddisfare gli Standard Indiani appropriati
          per prestazioni, sicurezza, igiene ed efficienza.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Macchinari per Imballaggio
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identificazione dello Standard Rilevante: Fare riferimento al codice
            IS rilevante per il tipo di Macchinari per Imballaggio.
          </li>
          <li>
            Test del Prodotto: Condurre i test di prestazione e sicurezza
            necessari secondo gli standard di settore, in laboratori accreditati
            BIS.
          </li>
          <li>
            Ispezione di Fabbrica: Verifica del sistema di garanzia della
            qualità presso il sito di produzione da parte di funzionari BIS.
          </li>
          <li>
            Applicazione e Documentazione: Fornire requisiti tecnici, manuali di
            qualità e rapporti di test.
          </li>
          <li>
            Rilascio della Licenza BIS per Macchinari per Imballaggio: È
            possibile apporre il marchio BIS dopo l'approvazione.
          </li>
          <li>
            Conformità Continua: BIS effettua controlli e audit non programmati
            per la conformità agli standard.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per la Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori che non hanno tutti i modelli di macchinari per
          imballaggio certificati con la Certificazione BIS per Macchinari per
          Imballaggio entro il 1° settembre 2026 affrontano i rischi di:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Divieto di vendita/importazione per macchinari per imballaggio non
            certificati
          </li>
          <li>Sequestro di attrezzature non conformi e sanzioni pecuniarie</li>
          <li>
            Questo vi renderà non idonei per gare d'appalto governative o PSU
          </li>
          <li>
            Il valore del marchio viene permanentemente compromesso in India
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'implementazione della Certificazione BIS Schema X per Macchinari per
          Imballaggio nell'OTR 2024 è un passo per portare sicurezza, efficienza
          e qualità nel settore industriale e dell'imballaggio in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Produttori, Importatori ed Esportatori beneficiano di questo processo
          ottenendo la Certificazione BIS per Macchinari per Imballaggio,
          acquisendo la Licenza BIS per Macchinari per Imballaggio e apponendo
          il marchio BIS per Macchinari per Imballaggio sui loro prodotti,
          dimostrando che i loro prodotti soddisfano il sistema normativo del
          mercato locale e i requisiti dei clienti.
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
                I Migliori Consulenti per Certificati in India
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
