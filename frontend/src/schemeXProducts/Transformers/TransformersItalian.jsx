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

const TransformersItalian = () => {
  return (
    <div className="relative w-full">
      <TransformersMetaTags />
      <TransformersBreadcrumb />
      <TransformersMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default TransformersItalian;

const TransformersMetaTags = () => {
  const title = "Certificazione BIS Schema X per Trasformatori";
  const description =
    "La Certificazione BIS Schema X per Trasformatori stabilisce standard di qualità e sicurezza per la produzione e l'importazione di trasformatori in India";
  const keywords =
    "Certificazione BIS per Trasformatori, Certificazione BIS Schema X per Trasformatori, Certificazione Schema X per Trasformatori, BIS per Trasformatori, OTR per Trasformatori";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Responsabile Operazioni presso Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Trasformatori in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per Trasformatori in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

const TransformersBreadcrumb = () => {
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
                    Certificazione BIS per Trasformatori
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

const TransformersMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <TransformersMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const TransformersMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Trasformatori
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-licence-for-Transformers.png"
            alt="Certificazione BIS Schema X per Trasformatori"
            title="Licenza BIS Schema X per Trasformatori"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          I trasformatori sono componenti integrali di ogni rete di trasmissione
          e distribuzione elettrica. Indipendentemente dalla loro applicazione
          nelle operazioni industriali, commerciali o di pubblica utilità, i
          trasformatori sono e devono sempre rimanere apparecchiature con i più
          alti standard di sicurezza e prestazioni operative a causa della
          natura critica delle loro funzioni. Per migliorare la sicurezza,
          l'affidabilità e la standardizzazione nell'industria delle
          apparecchiature elettriche in India, il Bureau of Indian Standards
          (BIS) ha reso obbligatoria la certificazione BIS per tutti i tipi di
          trasformatori e i loro assemblaggi, sottoassemblaggi, componenti e
          sottocomponenti nell'ambito della Certificazione Schema X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Il Ministero dell'Industria Pesante ha, attraverso l'Ordine di
          Regolamento Tecnico Omnibus 2024, stabilito una scadenza per tutti i
          produttori, indipendentemente dal paese di origine, per ottenere la
          certificazione BIS ai sensi dello Schema X per trasformatori e
          apparecchiature simili entro il 1° settembre 2026. La Certificazione
          BIS Schema X per trasformatori è un passo verso il miglioramento della
          qualità, coerenza, affidabilità e sicurezza elettrica dei prodotti in
          India. Per produttori, importatori o fornitori OEM di trasformatori
          con componenti, questo standard è più di un semplice obbligo di
          conformità.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Questo blog raccoglie tutte le informazioni rilevanti relative
          all'ambito, all'importanza e ai vantaggi della certificazione, al
          processo e alla documentazione richiesta per la certificazione Schema
          X per tutti i tipi di Trasformatori e (o) i loro assemblaggi,
          sottoassemblaggi, componenti e assemblaggi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why Scheme X is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Perché lo Schema X per Trasformatori è Importante
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I trasformatori sono ampiamente utilizzati in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Impianti di generazione elettrica</li>
          <li>Reti di trasmissione e distribuzione</li>
          <li>Fabbriche e edifici di produzione</li>
          <li>
            Progetti di energia rinnovabile (solare / eolico / idroelettrico)
          </li>
          <li>Proprietà commerciali / residenziali</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza un'adeguata conformità, i trasformatori possono causare:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Surriscaldamento, incendi e scosse elettriche.</li>
          <li>Perdite e sprechi di energia durante la trasmissione</li>
          <li>Interruzioni di corrente dovute a guasti del sistema</li>
          <li>Esclusione da gare pubbliche e progetti governativi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificazione Schema X per Trasformatori garantisce elevata
          sicurezza, efficienza energetica e affidabilità del prodotto.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione Schema X per Trasformatori?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Trasformatori è un quadro giuridico
          ai sensi del Regolamento di Valutazione della Conformità BIS, 2018.
          Richiede test e ispezioni rigorose e richiede un livello più elevato
          di documentazione per garantire la qualità secondo gli Standard
          Indiani.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caratteristiche Principali della Certificazione Schema X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Per tutti i produttori, indiani e stranieri.</li>
          <li>
            Include trasformatori di distribuzione, trasformatori di potenza e
            trasformatori per scopi speciali
          </li>
          <li>
            Test di prestazione, efficienza e sicurezza in laboratori approvati
            BIS sono obbligatori
          </li>
          <li>
            Le fabbriche vengono ispezionate per i processi di produzione e i
            sistemi di qualità verificati
          </li>
          <li>Fornisce licenza per l'uso del Marchio Standard BIS.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR BIS per Trasformatori
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Ministero dell'Industria Pesante ha introdotto il Regolamento
          Tecnico Omnibus (OTR) per i Trasformatori nel 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Data di Conformità: Tutti i produttori e importatori devono essere
          certificati entro il 1° settembre 2026. Dopo tale data, i
          trasformatori non certificati non possono essere prodotti, importati o
          venduti in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi BIS per Trasformatori
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza & Affidabilità: Verifica che i trasformatori rispettino i
            requisiti di sicurezza elettrica e prevenzione incendi.
          </li>
          <li>
            Efficienza Energetica: Promuove la riduzione delle perdite di
            energia e migliori prestazioni energetiche.
          </li>
          <li>
            Conformità di Mercato: Rispetta i requisiti normativi per i
            trasformatori, come specificato nell'OTR.
          </li>
          <li>
            Idoneità per Gare d'Appalto: I prodotti certificati sono idonei per
            gare governative e di enti pubblici.
          </li>
          <li>
            Fiducia dei Clienti: Il Marchio Standard BIS garantisce la qualità
            del prodotto e la durabilità.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Transformers Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Trasformatori Coperti
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Trasformatori si applica a:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Trasformatori di Distribuzione (per uso in reti locali e fornitura
            residenziale)
          </li>
          <li>
            Trasformatori di Potenza (a livello di rete di trasmissione ad alta
            tensione)
          </li>
          <li>
            Trasformatori per Scopi Speciali (applicazioni industriali,
            ferroviarie e progetti di energia rinnovabile)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Ogni tipo deve soddisfare il codice IS pertinente (vedere nota) come
          IS 16819:2018/ISO 12100:2010 (sicurezza delle macchine Principi
          generali per la progettazione – Valutazione del rischio e riduzione
          del rischio). Tutti i tipi devono essere conformi al rispettivo codice
          IS per la certificazione.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Trasformatori
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificazione degli Standard Applicabili: Si prega di fare
            riferimento ai codici IS per i vari tipi di trasformatori.
          </li>
          <li>
            Test del Prodotto: Esecuzione di controlli di sicurezza, efficienza
            energetica e prestazioni in laboratori approvati BIS.
          </li>
          <li>
            Audit di Fabbrica: Il personale BIS osserva la produzione del
            produttore e i sistemi di controllo qualità.
          </li>
          <li>
            Presentazione della Documentazione: Inviare specifiche, rapporti di
            test e dati di conformità.
          </li>
          <li>
            Concessione della Licenza: BIS concede la licenza per utilizzare il
            Marchio Standard quando tutti i requisiti sono soddisfatti.
          </li>
          <li>
            Conformità Continuativa: Test e revisioni regolari vengono eseguiti
            per mantenere la validità della certificazione.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il mancato rispetto della Certificazione BIS / OTR per Trasformatori
          comporterà quanto segue:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Divieto di vendita, produzione e importazione di trasformatori non
            certificati.
          </li>
          <li>
            Sequestro obbligatorio di prodotti non conformi e sanzioni severe.
          </li>
          <li>Squalifica da gare governative e di enti pubblici</li>
          <li>Danni alla reputazione a lungo termine, perdite finanziarie</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Trasformatori che sarà resa
          obbligatoria ai sensi dell'OTR per Trasformatori (2024) è un passo
          importante nel miglioramento dell'infrastruttura energetica indiana
          con prodotti affidabili, efficienti e sicuri.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Per produttori e importatori, la certificazione Schema X per
          Trasformatori non è solo una certificazione obbligatoria ma anche uno
          strumento strategico per guadagnare fiducia nel mercato indiano e
          mantenere il successo a lungo termine nell'industria energetica del
          paese.
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
                Miglior Consulente per Certificazioni in India
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
              Certificazione di Registrazione CDSCO
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
