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

const MetalCuttingMachinesItalian = () => {
  return (
    <div className="relative w-full">
      <MetalCuttingMachinesMetaTags />
      <MetalCuttingMachinesBreadcrumb />
      <MetalCuttingMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default MetalCuttingMachinesItalian;

const MetalCuttingMachinesMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Macchine Utensili da Taglio Metalli e Loro Assemblaggi";
  const description =
    "La certificazione BIS è ora obbligatoria per tutti i tipi di macchine utensili da taglio metalli e/o loro assemblaggi, sottoassemblaggi e componenti che rientrano nei codici HS da 8456 a 8461";
  const keywords =
    "Certificazione BIS per Macchine Utensili da Taglio Metalli, Certificazione BIS Schema X per Macchine Utensili da Taglio Metalli, Certificazione Schema X per Macchine Utensili da Taglio Metalli, BIS per Macchine Utensili da Taglio Metalli, OTR per Macchine Utensili da Taglio Metalli";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Macchine Utensili da Taglio Metalli in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per macchine utensili da taglio metalli in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

const MetalCuttingMachinesBreadcrumb = () => {
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
                    Certificazione BIS per Macchine Utensili da Taglio Metalli
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

const MetalCuttingMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MetalCuttingMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const MetalCuttingMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Macchine Utensili da Taglio Metalli
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-metal-cutting-machine- tools.png"
            alt="Certificazione BIS Schema X per Macchine Utensili da Taglio Metalli"
            title="Licenza BIS Schema X per macchine utensili da taglio metalli"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Il taglio dei metalli è una tecnologia di fabbricazione fondamentale
          che supporta le industrie meccaniche, automobilistiche, aerospaziali e
          manifatturiere indiane. Queste macchine vanno dai torni CNC e
          fresatrici ai tagliatori laser e aiutano anche a mantenere alta la
          produzione e bassi i costi nelle industrie di tutto il mondo. Con
          l'aumento della domanda di macchine di alta qualità in India, il
          governo ha reso la Certificazione BIS per Macchine Utensili da Taglio
          Metalli obbligatoria per garantire qualità e sicurezza.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Secondo la Certificazione BIS (Bureau of Indian Standards) Schema X
          per Macchine Utensili da Taglio Metalli, sia i produttori stranieri
          che indiani devono rispettare gli Standard Indiani prima di poter
          essere venduti sul mercato indiano. Questo è il modo per garantire che
          le macchine possano essere utilizzate in sicurezza, nonché per
          assicurare la fiducia dei clienti.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Questo articolo fornisce informazioni sulla certificazione schema X
          per Macchine Utensili da Taglio Metalli, i requisiti OTR 2024 per
          Macchine Utensili da Taglio Metalli, e la procedura per ottenere la
          Licenza BIS per Macchine Utensili da Taglio Metalli per apporre il
          marchio BIS per Macchine Utensili da Taglio Metalli.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Perché BIS è Obbligatorio per le Macchine Utensili da Taglio Metalli?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le macchine utensili da taglio metalli sono utilizzate in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Produzione automobilistica e componenti automobilistici</li>
          <li>Industria aeronautica e della difesa</li>
          <li>Ingegneria pesante e costruzioni</li>
          <li>Industria elettronica ed elettrica</li>
          <li>Produzione di stampi e fusione in stampi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le aziende che non dispongono di BIS per Macchine Utensili da Taglio
          Metalli possono affrontare:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Scarsa precisione di lavorazione e bassi risultati produttivi</li>
          <li>
            Guasti alle macchine e perdita di produzione - Tempo operativo vs
            Tempo di inattività.
          </li>
          <li>Potenziali pericoli per gli operatori</li>
          <li>Esclusione da gare pubbliche e affari regolamentati</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Il marchio BIS garantisce che le macchine utensili da taglio metalli
          rispettino le norme di qualità stabilite dal bureau.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per Macchine Utensili da Taglio
          Metalli?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Macchine Utensili da Taglio Metalli
          rientra nel Regolamento sulla Valutazione della Conformità BIS, 2018
          che è stato formulato per garantire che i prodotti soddisfino gli
          standard di qualità richiesti che sono necessari per le attrezzature
          industriali.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caratteristiche Principali della Certificazione Schema X per Macchine
          Utensili da Taglio Metalli
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obbligatoria per produttori indiani e stranieri</li>
          <li>
            Applicabile a varie macchine utensili da taglio metalli notificate
            sotto gli Standard Indiani
          </li>
          <li>
            Coinvolge test di laboratorio, ispezioni di fabbrica e audit di
            routine
          </li>
          <li>
            Autorizza l'apposizione del Marchio BIS per macchine utensili da
            taglio metalli.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR BIS Obbligatorio per Macchine Utensili da Taglio Metalli
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'ordine del Dipartimento dell'Industria Pesante riguardante il
          Regolamento Tecnico Omnibus (OTR) per Macchine Utensili da Taglio
          Metalli nel 2024 ha reso la certificazione obbligatoria.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: La Licenza BIS diventerà obbligatoria per tutti i produttori
          e importatori di macchine utensili da taglio metalli a partire dal 1°
          settembre 2026. Da questa data, le macchine non certificate non
          potranno essere offerte in vendita, importate o installate in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Macchine Utensili da Taglio
          Metalli
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Affidabilità del Prodotto: Le macchine sono certificate per
            precisione, durata e prestazioni consistenti.
          </li>
          <li>
            Competitività sul Mercato: La Licenza BIS per Macchine Utensili da
            Taglio Metalli è obbligatoria per ottenere molti ordini Industriali
            e Governativi.
          </li>
          <li>
            Fiducia del Cliente: Il Marchio BIS per Macchine Utensili da Taglio
            Metalli coltiva la fiducia negli acquirenti.
          </li>
          <li>
            Conformità Legale: Conforme all'OTR per Macchine Utensili da Taglio
            Metalli e BIS.
          </li>
          <li>
            Vantaggio Globale: Accesso più facile per i produttori stranieri al
            mercato indiano.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Metal Cutting Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Macchine Utensili da Taglio Metalli Inclusi nell'Approvazione
          Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato Schema X copre i seguenti tipi di Macchine Utensili da
          Taglio Metalli ma non è limitato a:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Torni CNC e centri di tornitura</li>
          <li>Fresatrici</li>
          <li>Trapani</li>
          <li>Rettificatrici</li>
          <li>Macchine da taglio CNC</li>
          <li>Macchine o attrezzature da taglio laser</li>
          <li>Macchine da taglio al plasma</li>
          <li>Macchine per taglio water-jet</li>
          <li>Seghe a nastro e seghetti</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tutti questi tipi di macchine utensili da taglio metalli devono
          seguire gli Standard Indiani pertinenti (codice IS) come IS 17277
          (Parte 1): 2019 / ISO 16092-1: 2017 (Macchine Utensili Sicurezza
          Presse Parte 1 Requisiti di Sicurezza Generali). Ogni modello di
          macchina deve soddisfare il proprio codice IS per sicurezza,
          efficienza energetica e precisione.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedura per la Licenza BIS per Macchine Utensili da Taglio Metalli
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificazione dello Standard IS Applicabile: Scegliere lo standard
            appropriato in base al tipo di macchina.
          </li>
          <li>
            Test del Prodotto: Sottoporre la macchina a test presso laboratori
            BIS riconosciuti dal governo.
          </li>
          <li>
            Audit di Fabbrica: Visite dirette effettuate dai funzionari BIS per
            garantire una produzione di qualità conforme.
          </li>
          <li>
            Presentazione dei Documenti: Fornire manuali tecnici, rapporti di
            test e documenti di garanzia della qualità.
          </li>
          <li>
            Concessione della Licenza BIS per Macchine Utensili da Taglio
            Metalli: I produttori possono ora apporre il marchio BIS sotto la
            certificazione del prodotto conforme agli standard di cui sopra.
          </li>
          <li>
            Conformità Continua: Vengono effettuati monitoraggi e audit
            periodici per garantire la conformità continua con BIS.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per la Non Conformità
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La non conformità alla Certificazione BIS per Macchine Utensili da
          Taglio Metalli sotto l'OTR per Macchine Utensili da Taglio Metalli può
          comportare:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Divieto di vendita/importazione di macchine non certificate</li>
          <li>Elevate sanzioni pecuniarie e sequestro dei prodotti</li>
          <li>Esclusione dai contratti governativi</li>
          <li>
            Danni a lungo termine alla reputazione del marchio e dell'azienda
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Macchine Utensili da Taglio Metalli
          nell'OTR per Macchine Utensili da Taglio Metalli (2024) ha un ruolo
          importante nella precisione, sicurezza e affidabilità dell'industria
          indiana.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Per i produttori e gli importatori, avere la Licenza BIS per Macchine
          Utensili da Taglio Metalli e apporre il marchio BIS sulle Macchine
          Utensili da Taglio Metalli non è solo un'azione di conformità, è un
          investimento strategico che offre ritorni molteplici in termini di
          eccellenza del prodotto, fiducia dei consumatori e superiorità sul
          mercato.
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
