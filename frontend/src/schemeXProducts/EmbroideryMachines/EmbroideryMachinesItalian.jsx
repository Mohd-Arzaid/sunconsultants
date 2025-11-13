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
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";

const EmbroideryMachinesItalian = () => {
  return (
    <div className="relative w-full">
      <EmbroideryMachinesMetaTags />
      <EmbroideryMachinesBreadcrumb />
      <EmbroideryMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default EmbroideryMachinesItalian;

const EmbroideryMachinesMetaTags = () => {
  const title = "Certificazione BIS Schema X per Macchine da Ricamo";
  const description =
    "Certificazione BIS Schema X per macchine da ricamo, i produttori garantiscono che i loro prodotti siano conformi alla legge, tecnicamente eccellenti e affidabili per i clienti";
  const keywords =
    "Certificazione BIS per Macchine da Ricamo, Certificazione BIS Schema X per Macchine da Ricamo, Certificazione Schema X per Macchine da Ricamo, BIS per Macchine da Ricamo, OTR per Macchine da Ricamo";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Macchine da Ricamo in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per macchine da ricamo in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione prima della scadenza di settembre 2026";

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

const EmbroideryMachinesBreadcrumb = () => {
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
                    Certificazione BIS per Macchine da Ricamo
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

const EmbroideryMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <EmbroideryMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const EmbroideryMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Macchine da Ricamo
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-making-embroidery.png"
            alt="Certificazione BIS Schema X Per Macchine da Ricamo"
            title="Licenza BIS Schema X per Macchine da Ricamo"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Il settore del ricamo è una parte importante dell'industria tessile e
          dell'abbigliamento indiana che produce tessuti a valore aggiunto per
          la moda, la casa e l'esportazione. Le macchine da ricamo multi-testa
          computerizzate o le macchine industriali sono essenziali per ottenere
          alta qualità nei prodotti ricamati in quanto offrono efficienza e
          precisione nel ricamo.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Per garantire sicurezza, stabilità e prestazioni, il BIS (Bureau of
          Indian Standards) ha imposto la certificazione obbligatoria per le
          Macchine da Ricamo sotto lo schema di certificazione X del BIS. Questo
          assicura che solo le macchine conformi agli Standard Indiani siano
          autorizzate ad entrare nel mercato indiano.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In questo articolo, discuteremo l'importanza dell'Approvazione BIS
          Schema X per Macchine da Ricamo, le normative sotto l'OTR (Regolamento
          Tessile) per Macchine da Ricamo e il processo per ottenere la Licenza
          BIS per Macchine da Ricamo.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Significato del BIS per Macchine da Ricamo
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le macchine da ricamo sono utilizzate in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Fabbriche di abbigliamento e indumenti</li>
          <li>Produzione tessile per la casa (tende, lenzuola, federe)</li>
          <li>Ricamo personalizzato e case di alta moda</li>
          <li>Fabbriche tessili orientate all'esportazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I rischi senza BIS per Macchine da Ricamo sono:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Scarsa qualità delle cuciture e rottura del filo.</li>
          <li>Eccessivi tempi di fermo macchina</li>
          <li>Rischi per la sicurezza negli ambienti industriali</li>
          <li>Esclusione dai mercati nazionali ed esteri</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Il Marchio BIS per Macchine da Ricamo è una garanzia per i Clienti che
          il vostro prodotto è stato rigorosamente testato e certificato
          seguendo tutte le linee guida necessarie del BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è il Certificato BIS Schema X per Macchine da Ricamo?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Quadro per la Certificazione BIS Schema X per Macchine da Ricamo si
          basa sui parametri menzionati nel Regolamento di Valutazione della
          Conformità BIS, 2018 (sviluppato per la conformità nella gestione
          della qualità tra i fornitori di attrezzature industriali).
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Certificazione Schema X per Macchine da Ricamo: Caratteristiche
          principali:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obbligatorio per produttori sia indiani che esteri</li>
          <li>
            Include test, controlli di sicurezza e verifica dell'efficienza
          </li>
          <li>Sono richieste visite regolari in fabbrica e audit di qualità</li>
          <li>
            Consente di apporre il marchio BIS sotto licenza per Macchine da
            Ricamo sui prodotti certificati
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR per Macchine da Ricamo
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Ministero dell'Industria Pesante ha introdotto il Regolamento
          Tecnico Omnibus (OTR) 2024 per Macchine da Ricamo che rende
          obbligatoria la certificazione per tutte le macchine che rientrano
          nella categoria delle macchine da ricamo.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Tutti i produttori e importatori sono tenuti ad ottenere la
          Licenza BIS per Macchine da Ricamo da vendere o importare in India
          entro il 1 settembre 2026 per evitare multe o procedimenti legali.
          Dopo tale data, le macchine da ricamo non certificate non potranno
          essere commercializzate o utilizzate per scopi commerciali in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Macchine da Ricamo
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza e Affidabilità del Prodotto: Le macchine certificabili
            operano secondo gli standard previsti e di sicurezza.
          </li>
          <li>
            Accettazione del Mercato: La Licenza BIS per Macchine da Ricamo è
            obbligatoria per appalti governativi e accordi di quantità.
          </li>
          <li>
            Fiducia dell'Acquirente: Le Macchine da Ricamo ricevono il Marchio
            BIS che conferma la loro qualità e standard.
          </li>
          <li>
            Conformità Normativa: Rispetta l'OTR per Macchine da Ricamo senza
            incorrere in multe.
          </li>
          <li>
            Vantaggi per l'Esportazione: Gli acquirenti indiani ottengono
            tranquillità con macchine certificate e le aziende internazionali
            ottengono un accesso più facile all'India.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Embroidery Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Macchine da Ricamo sotto lo Schema di Certificazione BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione Schema X per Macchine da Ricamo si applica a:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Macchine da ricamo multi-testa</li>
          <li>Ricamo computerizzato a macchina</li>
          <li>Macchine da ricamo a testa singola</li>
          <li>Macchine per ricamo a punto catenella</li>
          <li>Macchine da ricamo Schiffli</li>
          <li>Attrezzature speciali per ricamo tessile</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Ogni categoria può conformarsi agli standard IS correlati (codice IS),
          come IS 17361 (Parte 1): 2020 / ISO 11111 (Parte 1): 2016 (Requisiti
          di Sicurezza delle Macchine Tessili Parte 1 Requisiti Generali). Tutte
          devono conformarsi rispettivamente secondo il codice IS per design,
          durabilità, sicurezza ed economicità nell'operazione.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Macchine da Ricamo
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificare lo Standard Rilevante: Cercare il codice IS rilevante
            per il modello della vostra macchina da ricamo.
          </li>
          <li>
            Test del Prodotto: Le macchine sono testate in laboratori
            accreditati BIS per sicurezza e prestazioni.
          </li>
          <li>
            Ispezione di Fabbrica: Gli auditor BIS visitano la fabbrica per
            valutare i controlli di qualità.
          </li>
          <li>
            Documentazione e Applicazione: Fornire al BIS rapporti tecnici,
            manuali e documenti di qualità.
          </li>
          <li>
            Licenza BIS per Macchine da Ricamo: Dopo l'accettazione, i
            produttori avranno l'opzione di marcare i loro prodotti con il
            marchio BIS.
          </li>
          <li>
            Conformità Continua: Ispezioni regolari e test ripetuti garantiscono
            la conformità continua.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Conseguenze della mancanza di Certificazione BIS per Macchine da
          Ricamo sotto l'OTR per Macchine da Ricamo a partire dal 1 settembre
          2026:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Restrizioni alla vendita/importazione di macchine non certificate
          </li>
          <li>Multe, sanzioni e potenziale sequestro del prodotto</li>
          <li>
            Inidoneità per contratti governativi ed esportazioni significative
          </li>
          <li>La reputazione del marchio sarà danneggiata a lungo termine</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'implementazione della Certificazione BIS Schema X per Macchine da
          Ricamo nell'OTR per Macchine da Ricamo (2024) è un passo importante
          per il settore tessile e del ricamo indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Dal punto di vista dei Produttori e Importatori di Macchine da Ricamo,
          per ottenere la Registrazione BIS per Macchine da Ricamo e apporre il
          Marchio BIS per Macchine da Ricamo non è solo conformità ai requisiti
          legali ma ha anche un supporto straordinario per la qualità del
          prodotto, la fiducia del mercato e il vantaggio competitivo per
          l'industria tessile in continua crescita in India.
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
