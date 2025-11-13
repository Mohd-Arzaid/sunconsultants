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

const PublicWorksAndMechanicalItalian = () => {
  return (
    <div className="relative w-full">
      <PublicWorksAndMechanicalMetaTags />
      <PublicWorksAndMechanicalBreadcrumb />
      <PublicWorksAndMechanicalMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default PublicWorksAndMechanicalItalian;

const PublicWorksAndMechanicalMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Lavori Pubblici e Apparecchiature Meccaniche";
  const description =
    "La Certificazione BIS Schema X per macchine per lavori pubblici e costruzioni, e apparecchiature meccaniche è un passo strategico per garantire la sicurezza industriale, qualità uniforme e accesso al mercato.";
  const keywords =
    "Certificazione BIS per Lavori Pubblici e Apparecchiature Meccaniche, Certificazione BIS Schema X per Lavori Pubblici e Apparecchiature Meccaniche, Certificazione Schema X per Lavori Pubblici e Apparecchiature Meccaniche, BIS per Lavori Pubblici e Apparecchiature Meccaniche, OTR per Lavori Pubblici e Apparecchiature Meccaniche";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Lavori Pubblici e Apparecchiature Meccaniche in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per Lavori Pubblici e Apparecchiature Meccaniche in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

const PublicWorksAndMechanicalBreadcrumb = () => {
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
                    Certificazione BIS per Lavori Pubblici e Apparecchiature
                    Meccaniche
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

const PublicWorksAndMechanicalMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PublicWorksAndMechanicalMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Lavori Pubblici e Apparecchiature Meccaniche
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-Machines-for-public-works -&-building.png"
            alt="Certificazione BIS Schema X per Lavori Pubblici e Apparecchiature Meccaniche"
            title="Licenza BIS per Macchine per Lavori Pubblici e Costruzioni"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Con il rapido sviluppo delle infrastrutture e la modernizzazione
          industriale, prestazioni e macchine affidabili sono essenziali.
          Macchine e apparecchiature meccaniche svolgono un ruolo centrale nei
          lavori di ingegneria, produzione e costruzione di opere pubbliche e
          industrie specializzate. È fondamentale mantenere la loro qualità e
          conformità. Questo è un obbligo legale imposto dal Bureau of Indian
          Standards (BIS) sotto la Certificazione Schema X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Per implementare e semplificare l'applicazione degli standard
          obbligatori in varie categorie di macchine industriali, il Regolamento
          Tecnico Omnibus (OTR), 2024 è stato emanato dal Ministero
          dell'Industria Pesante. Questo ordine stabilisce che tutti i tipi di
          macchine per lavori pubblici, costruzioni edili e altre
          apparecchiature meccaniche, comprese quelle non menzionate
          esplicitamente in altre suddivisioni del Capitolo 84, sono tenute ad
          ottenere la certificazione BIS sotto lo Schema X.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In questo post, tratteremo tutti i tipi di macchine e apparecchiature
          utilizzate per lavori pubblici e costruzioni, apparecchiature
          meccaniche con funzioni individuali, i loro assemblaggi,
          sottoassemblaggi, l'importanza e l'ambito dello schema molto discusso,
          il processo di certificazione e i vantaggi, nonché i documenti che
          devono essere presentati.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Significato della BIS per Lavori Pubblici e Apparecchiature Meccaniche
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Queste macchine sono comunemente utilizzate in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Costruzione di infrastrutture pubbliche (strade, ponti,
            approvvigionamento idrico)
          </li>
          <li>Progetti di ingegneria e costruzioni pesanti</li>
          <li>Servizi urbani e utilities</li>
          <li>
            Impianti industriali che richiedono sollevamento o lavorazione
            meccanica
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza la BIS per Lavori Pubblici e Apparecchiature Meccaniche, i
          rischi includono:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Guasti delle macchine durante progetti critici in corso</li>
          <li>Problemi di sicurezza per lavoratori e utenti finali</li>
          <li>Costi di manutenzione e tempi di inattività più elevati</li>
          <li>Esclusione da progetti finanziati dal governo</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificazione Schema X per Lavori Pubblici e Apparecchiature
          Meccaniche garantisce che le macchine operino in modo sicuro,
          efficiente e con rischio di guasti minimo.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per Lavori Pubblici e
          Apparecchiature Meccaniche?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Lavori Pubblici e Apparecchiature
          Meccaniche rientra nel Regolamento di Valutazione della Conformità
          BIS, 2018. È un mezzo identificato e uno strumento normativo per
          garantire che le macchine industriali e infrastrutturali siano
          conformi agli Standard Indiani.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Aspetti Chiave della Qualificazione Schema X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Applicabile a produttori indiani ed esteri</li>
          <li>Include macchine per lavori pubblici e utilities</li>
          <li>Test in laboratori riconosciuti dalla BIS</li>
          <li>
            Audit di fabbrica e ispezioni di conformità di routine incluse nel
            processo
          </li>
          <li>
            Conferisce il diritto di utilizzare il Marchio Standard BIS dopo la
            certificazione
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR per Lavori Pubblici e Apparecchiature Meccaniche
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Ministero dell'Industria Pesante ha emanato il Regolamento Tecnico
          Omnibus (OTR) per Lavori Pubblici e Apparecchiature Meccaniche nel
          2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Entro il 1° settembre 2026, tutti i produttori e importatori
          devono conformarsi alla certificazione Schema X per Lavori Pubblici e
          Apparecchiature Meccaniche. Dopo questa data, le macchine non
          registrate non saranno autorizzate ad essere prodotte, vendute o
          importate in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Lavori Pubblici e
          Apparecchiature Meccaniche
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza del Prodotto: Previene crolli dovuti a problemi meccanici
            e operazioni affidabili.
          </li>
          <li>
            Conformità Normativa: Soddisfa l'OTR per Lavori Pubblici e
            Apparecchiature Meccaniche.
          </li>
          <li>
            Vantaggio di Mercato: La certificazione è spesso richiesta per gare
            pubbliche e progetti governativi.
          </li>
          <li>
            Fiducia del Cliente: Le macchine certificate ufficialmente sono più
            preferite da alcuni acquirenti, poiché rappresentano una garanzia di
            qualità.
          </li>
          <li>
            Riduzione della Responsabilità: Riduce la potenziale esposizione
            legale e del marchio con prodotti certificati.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Lavori Pubblici e Apparecchiature Meccaniche nell'OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo Schema X BIS per la Certificazione di Lavori Pubblici e
          Apparecchiature Meccaniche copre i seguenti prodotti:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Macchine per la costruzione e manutenzione stradale</li>
          <li>Macchine di sollevamento idrauliche e manuali</li>
          <li>
            Apparecchiature per servizi urbani (apparecchiature di distribuzione
            idrica, ecc.)
          </li>
          <li>Apparecchiature per servizi e movimentazione meccanica</li>
          <li>
            Apparecchiature progettate specificamente per uso industriale in
            lavori pubblici e servizi
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Devono conformarsi agli Standard Indiani appropriati (codice IS), se
          applicabile, incluso IS 16819:2018/ISO 12100:2010 (Sicurezza delle
          Macchine Principi Generali per la Progettazione - Valutazione del
          Rischio e Riduzione del Rischio). Tutte queste forme devono essere
          prodotte in conformità con gli Standard Indiani applicabili per
          sicurezza, prestazioni e qualità.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Lavori Pubblici e Apparecchiature
          Meccaniche
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificazione dello Standard Rilevante: Selezionare il codice IS
            applicabile per la vostra macchina.
          </li>
          <li>
            Test del Prodotto: Eseguire test di prestazioni e sicurezza in
            Laboratori approvati BIS.
          </li>
          <li>
            Ispezione di Fabbrica: I funzionari BIS visitano l'impianto di
            produzione per garantire che i controlli di qualità siano in atto.
          </li>
          <li>
            Documentazione: Presentare modulo di domanda, rapporti tecnici e
            manuale di qualità
          </li>
          <li>
            Rilascio della Licenza: BIS rilascia la certificazione e autorizza
            l'uso del Marchio Standard BIS.
          </li>
          <li>
            Conformità Continua: Sono previsti test e audit continui per
            garantire la conformità costante.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          La non conformità alla Certificazione BIS per Lavori Pubblici e
          Apparecchiature Meccaniche stabilita nell'OTR per Lavori Pubblici e
          Apparecchiature Meccaniche comporterà:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Divieto di vendita o importazione di macchine non certificate</li>
          <li>Multe pesanti e sequestro dei prodotti</li>
          <li>Esclusione da gare governative e procedure contrattuali</li>
          <li>Reputazione gravemente danneggiata</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS Schema X per lavori pubblici e apparecchiature
          meccaniche supportato dall'OTR per lavori pubblici e apparecchiature
          meccaniche (2024), porta il paese un passo più vicino a stabilire
          livelli di qualità uniforme e sicurezza nelle macchine
          infrastrutturali.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Per produttori e importatori, l'ottenimento della certificazione
          Schema X per Lavori Pubblici e Apparecchiature Meccaniche è più che
          semplice conformità – rappresenta un investimento strategico.
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
                Miglior Consulente per Certificati in India
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
