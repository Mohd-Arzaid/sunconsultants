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

const SwitchgearandControlgearEquipmentabove1000VoltsItalian = () => {
  return (
    <div className="relative w-full">
      <SwitchgearandControlgearEquipmentabove1000VoltsMetaTags />
      <SwitchgearandControlgearEquipmentabove1000VoltsBreadcrumb />
      <SwitchgearandControlgearEquipmentabove1000VoltsMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default SwitchgearandControlgearEquipmentabove1000VoltsItalian;

const SwitchgearandControlgearEquipmentabove1000VoltsMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Apparecchiature di Interruttori e Controllori Oltre 1000 Volt";
  const description =
    "Certificazione BIS Schema X per apparecchiature di interruttori e controllori oltre 1000V. Esplora la conformità obbligatoria, i test, le fasi del processo, i vantaggi e altro ancora.";
  const keywords =
    "Certificazione BIS per Apparecchiature di Interruttori e Controllori, Certificazione BIS Schema X per Apparecchiature di Interruttori e Controllori, Certificazione Schema X per Apparecchiature di Interruttori e Controllori, BIS per Apparecchiature di Interruttori e Controllori, OTR per Apparecchiature di Interruttori e Controllori";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Responsabile Operazioni presso Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Apparecchiature di Interruttori e Controllori Oltre 1000 Volt in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per Apparecchiature di Interruttori e Controllori in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

const SwitchgearandControlgearEquipmentabove1000VoltsBreadcrumb = () => {
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
                    Certificazione BIS per Apparecchiature di Interruttori e
                    Controllori Oltre 1000 Volt
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

const SwitchgearandControlgearEquipmentabove1000VoltsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentabove1000VoltsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentabove1000VoltsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS Schema X per Apparecchiature di Interruttori e
          Controllori Oltre 1000 Volt
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-switch-gear-exceeding-1000-volts.png"
            alt="Certificazione BIS Schema X per Apparecchiature di Interruttori e Controllori Oltre 1000 Volt"
            title="Licenza BIS per apparecchiature di interruttori oltre 1000 volt"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Le apparecchiature di interruttori e controllori ad alta tensione si
          integrano perfettamente con la distribuzione dell'energia e i processi
          operativi nello sforzo di elettrificazione della civiltà contemporanea
          in continua evoluzione. Questi sistemi sono progettati per garantire
          il controllo e la distribuzione sicura dell'elettricità oltre i 1000
          volt e sono estremamente preziosi nelle aree critiche di richiesta di
          energia per i sistemi di gestione del rischio e continuità energetica.
          Con la crescente attenzione alla sicurezza e standardizzazione delle
          apparecchiature, il Bureau of Indian Standards (BIS) ha adottato
          misure concrete per controllare il settore con la Certificazione
          Schema X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Il Regolamento Tecnico Omnibus (OTR) che fa parte di questa
          legislazione, ha reso obbligatoria la Certificazione Schema X per
          tutti i produttori di apparecchiature ad alta tensione schematiche da
          utilizzare nei settori energetico e industriale. Questi produttori,
          sia nazionali che internazionali, saranno soggetti a questo
          regolamento a partire dal 1° settembre 2026.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Questo blog copre tutte le informazioni necessarie relative alla
          certificazione Schema X per tutti i tipi di apparecchiature di
          interruttori e controllori che operano a tensioni superiori a 1000
          volt e (o) i loro assemblaggi, sottoassemblaggi, componenti, la loro
          importanza, ambito, processo di certificazione, vantaggi e
          documentazione richiesta.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS per Interruttori e Controllori è
          Importante?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le apparecchiature di interruttori e controllori ad alta tensione sono
          ampiamente utilizzate in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Impianti di generazione elettrica</li>
          <li>Sottostazioni di trasmissione e distribuzione</li>
          <li>Sistemi di elettrificazione metropolitana e ferroviaria</li>
          <li>Petrolio & gas e industria pesante</li>
          <li>Parchi di energia rinnovabile (solare, eolico, idroelettrico)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza un'adeguata certificazione, i rischi includono:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Pericolo di incendio e incidenti ad arco elettrico</li>
          <li>
            Guasti alle apparecchiature che causano interruzioni di corrente
            diffuse
          </li>
          <li>Violazione degli standard di sicurezza indiani</li>
          <li>Squalifica da contratti governativi e privati su larga scala</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificazione Schema X è una garanzia che i sistemi critici siano
          isolati secondo le norme di sicurezza e qualità più rigorose. Questo
          si applica anche agli assemblaggi (BS8867) correlati a questo tipo di
          apparecchiature che operano a tensioni superiori a 1000V secondo
          necessità.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per interruttori e controllori?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS Schema X è stabilito ai sensi del Regolamento di
          Valutazione della Conformità BIS, 2018, per garantire che i test, le
          ispezioni e le licenze per interruttori e controllori siano richiesti
          prima che il prodotto possa entrare nel mercato indiano.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caratteristiche Principali:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obbligatorio per aziende indiane e straniere</li>
          <li>
            Copre tutti gli interruttori e controllori ad alta tensione a o
            sopra i 1000 volt
          </li>
          <li>Richiede test in laboratori accreditati BIS</li>
          <li>Include audit di fabbrica e sistema qualità</li>
          <li>
            Fornisce Licenza BIS per utilizzare il Marchio Standard sulle
            apparecchiature specificate
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR per Apparecchiature di Interruttori e Controllori
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Ministero dell'Industria Pesante ha introdotto il Regolamento
          Tecnico Omnibus (OTR) per le Apparecchiature di Interruttori e
          Controllori nel 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Tutti i produttori e importatori devono essere certificati
          BIS entro il 1° settembre 2026. Dopo questa data, le apparecchiature
          non approvate per tipo non possono essere prodotte, vendute o
          importate in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Interruttori e Controllori
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza Elettrica – Protegge da guasti, archi elettrici e danni al
            sistema.
          </li>
          <li>
            Conformità Normativa – Requisito obbligatorio per l'ingresso nel
            mercato ai sensi dell'OTR.
          </li>
          <li>
            Accesso al Mercato – I prodotti certificati sono idonei per progetti
            infrastrutturali pubblici e privati.
          </li>
          <li>
            Credibilità & Fiducia – Il Marchio Standard BIS riflette conformità
            a qualità e affidabilità.
          </li>
          <li>
            Efficienza Operativa – Garantisce prestazioni robuste e ininterrotte
            della rete ad alta tensione
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedura di Certificazione BIS per Interruttori e Controllori
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificazione degli Standard – Scopri gli standard indiani
            rilevanti per il tuo prodotto.
          </li>
          <li>
            Test del Prodotto – Esegui tutti i test di prestazione e sicurezza
            richiesti in laboratori approvati BIS.
          </li>
          <li>
            Ispezione di Fabbrica – Gli auditor BIS verificano i processi e i
            controlli qualità nella fabbrica.
          </li>
          <li>
            Presentazione della Documentazione – Presenta i rapporti di test;
            specifiche standard; registri di conformità.
          </li>
          <li>
            Concessione della Licenza: BIS concederà la Licenza per utilizzare
            il Marchio Standard.
          </li>
          <li>
            Monitoraggio Post-Certificazione: Ispezioni continue e controlli a
            sorpresa garantiscono la conformità.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questo processo si applica allo stesso modo a tutti i tipi di
          apparecchiature di interruttori e controllori che operano a tensioni
          superiori a 1000 volt e (o) ai loro assemblaggi, sottoassemblaggi,
          componenti.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il mancato ottenimento della certificazione ai sensi del modello OTR
          può comportare:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Divieto di vendere, importare o produrre apparecchiature non
            certificate
          </li>
          <li>Sequestro delle merci e pesanti multe</li>
          <li>Esclusione da gare e contratti governativi</li>
          <li>
            Danni Reputazionali e Finanziari: Danni significativi alla
            reputazione e finanziari
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificazione BIS Schema X, resa obbligatoria ai sensi dell'OTR
          2024, garantisce che l'infrastruttura energetica ad alta tensione
          indiana sia costruita su apparecchiature sicure, affidabili e
          conformi. Per produttori e importatori, ottenere la certificazione non
          riguarda solo il rispetto delle normative—si tratta di guadagnare la
          fiducia dei clienti, aprire opportunità di mercato e sostenere la
          crescita energetica e infrastrutturale dell'India.
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
