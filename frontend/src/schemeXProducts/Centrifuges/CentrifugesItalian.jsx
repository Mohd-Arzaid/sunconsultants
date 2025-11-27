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

const CentrifugesItalian = () => {
  return (
    <div className="relative w-full">
      <CentrifugesMetaTags />
      <CentrifugesBreadcrumb />
      <CentrifugesMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default CentrifugesItalian;

const CentrifugesMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Centrifughe e Macchinari di Filtrazione o Purificazione";
  const description =
    "La certificazione BIS Schema X per centrifughe, macchinari di filtrazione o purificazione per liquidi e gas, e/o loro assemblaggi, sottoassemblaggi e componenti, rappresenta una pietra miliare normativa cruciale per il settore dei macchinari industriali";
  const keywords =
    "Certificazione BIS per Centrifughe, Certificazione BIS Schema X per Centrifughe, Certificazione Schema X per Centrifughe, BIS per Centrifughe, OTR per Centrifughe";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Centrifughe in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per centrifughe in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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
                    <Link to="/SchemeX-Products">Prodotti SchemeX</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificazione BIS per Centrifughe
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
        <ServicesRightSideContentItalian />
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
          Certificazione BIS per Centrifughe
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-centrifuges-filtering-or-purifying-machinery.png"
            title="Licenza BIS Schema X per Centrifughe"
            alt="Certificazione BIS Schema X per Centrifughe e Macchinari di Filtrazione o Purificazione"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Le centrifughe sono macchine vitali ampiamente utilizzate nei settori
          dei laboratori, farmaceutico, lavorazione alimentare, biotecnologia,
          petrolchimico e minerario. Queste macchine funzionano mediante
          rotazione, e la rotazione ad alta velocità separa le miscele, questa
          separazione è essenziale per un trattamento accurato, sicuro e rapido.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Con applicazioni più ampie in vari settori, è fondamentale migliorare
          l'affidabilità e la sicurezza delle centrifughe. Per mantenere i
          parametri di controllo qualità per le centrifughe, il BIS ha
          introdotto uno schema di Certificazione BIS noto come Certificazione
          Schema-X per Centrifughe.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In questo post, discuteremo cos'è la Certificazione BIS Schema X per
          Centrifughe, cos'è l'OTR per Centrifughe e come ottenere la Licenza
          BIS per Centrifughe con il marchio BIS ufficiale per Centrifughe.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Significato del BIS per le Centrifughe
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le centrifughe sono utilizzate in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Settore Farmaceutico e Biotecnologico</li>
          <li>Lavorazione alimentare e produzione di bevande</li>
          <li>Raffinerie petrolifere e industria petrolchimica</li>
          <li>Laboratori medici</li>
          <li>Trattamento ambientale e delle acque</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'assenza del BIS per le Centrifughe può portare all'uso di
          Centrifughe di bassa qualità o non certificate che possono causare:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Rischio di guasti meccanici</li>
          <li>Possibilità di contaminazione in settori delicati</li>
          <li>Perdita di tempo e perdita di entrate</li>
          <li>Bassa efficienza e aumento del consumo energetico.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Le centrifughe certificate BIS con il marchio BIS per Centrifughe
          implicano sicurezza, qualità e affidabilità.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è il Certificato BIS Schema X per le Centrifughe?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificazione BIS Schema X per Centrifughe è uno schema di
          certificazione obbligatorio ai sensi delle Norme di Valutazione della
          Conformità BIS, 2018.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Certificazione Schema X per Centrifughe: Caratteristiche principali:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Applicabile sia ai produttori indiani che stranieri</li>
          <li>
            Applicabile a tutti i tipi di centrifughe presenti nei laboratori
            industriali e di R&S
          </li>
          <li>
            Sono obbligatori test di prodotto, audit e convalida della
            conformità adeguati
          </li>
          <li>
            Consente ai produttori di presentare la registrazione BIS basata
            sulla certificazione per le Centrifughe sopra menzionate.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR per le Centrifughe
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'OTR per le Centrifughe è stato annunciato dal Ministero
          dell'Industria Pesante nel 2024, che richiede la certificazione Schema
          X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Tutti i produttori e importatori sono tenuti a ottenere una
          Licenza BIS per Centrifughe valida ai sensi dello Schema X entro il 1°
          settembre 2026. "Ciò impedirà alle centrifughe non certificate di
          essere vendute, importate o di partecipare a gare d'appalto in tutto
          il paese," ha dichiarato un funzionario governativo.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per le Centrifughe
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza e Conformità: Evita incidenti dovuti a guasti meccanici ad
            alta velocità.
          </li>
          <li>
            Qualità e Affidabilità: Le Centrifughe Certificate funzionano con
            elevata precisione e accuratezza.
          </li>
          <li>
            Accesso al Mercato: La Licenza BIS per Centrifughe è generalmente
            richiesta per gli appalti pubblici.
          </li>
          <li>
            Fiducia del Consumatore: Il marchio BIS per le Centrifughe informa i
            clienti sulla qualità del prodotto e sulla durabilità.
          </li>
          <li>
            Vantaggio Competitivo: I marchi/produttori certificati BIS sono
            preferiti nei mercati regolamentati e per gli appalti governativi.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Centrifuge Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Centrifughe nello Schema di Certificazione BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'accreditamento Schema X per le Centrifughe copre vari tipi come:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Centrifughe da Laboratorio</li>
          <li>Separatori Industriali</li>
          <li>Centrifughe Refrigerate</li>
          <li>Ultracentrifughe</li>
          <li>Centrifughe a Gas</li>
          <li>Centrifughe a Cestello</li>
          <li>Centrifughe Decanter</li>
          <li>Centrifughe Continue e Batch</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tutti questi tipi devono soddisfare gli Standard Indiani applicabili
          (codice IS) come IS 16819:2018/ISO 12100:2010 (Sicurezza delle
          Macchine Principi Generali per la Progettazione - Valutazione del
          Rischio e Riduzione del Rischio). Tutte le varietà devono soddisfare
          gli Standard Indiani (codice IS) appropriati per qualità, sicurezza ed
          efficienza energetica.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per le Centrifughe
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identificazione degli Standard Rilevanti: Fare riferimento al codice
            IS pertinente per il vostro tipo di Centrifuga.
          </li>
          <li>
            Test del Prodotto: Eseguire i test di prestazione e sicurezza
            richiesti secondo gli standard di settore, in laboratori accreditati
            BIS.
          </li>
          <li>
            Ispezione dello Stabilimento: Verifica del sistema di garanzia della
            qualità presso il sito di produzione da parte di funzionari BIS.
          </li>
          <li>
            Applicazione e Documentazione: Fornire requisiti tecnici, manuale di
            qualità e rapporti di prova.
          </li>
          <li>
            Rilascio della Licenza BIS per Centrifughe: È possibile apporre il
            marchio BIS dopo l'approvazione.
          </li>
          <li>
            Conformità Continua: Il BIS verifica e conduce audit non programmati
            per la conformità agli standard.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori che non hanno tutti i modelli di centrifughe certificati
          con la Certificazione BIS per Centrifughe entro il 1° settembre 2026
          rischiano:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Vendita/importazione vietata per centrifughe non certificate</li>
          <li>Sequestro di attrezzature non conformi e sanzioni pecuniarie</li>
          <li>
            Questo vi renderà non idonei per gare d'appalto governative o PSU
          </li>
          <li>Reputazione del marchio permanentemente compromessa in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'implementazione della Certificazione BIS Schema X per le Centrifughe
          nell'OTR 2024 è un passo avanti per portare sicurezza, efficienza e
          qualità nel settore industriale e di laboratorio in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          I produttori, importatori ed esportatori traggono vantaggio da questo
          processo ottenendo la Certificazione BIS per Centrifughe, acquisendo
          la Licenza BIS per Centrifughe e apponendo il marchio BIS per
          Centrifughe sui loro prodotti, dimostrando che i loro prodotti
          soddisfano il sistema normativo del mercato locale e i requisiti dei
          clienti.
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
