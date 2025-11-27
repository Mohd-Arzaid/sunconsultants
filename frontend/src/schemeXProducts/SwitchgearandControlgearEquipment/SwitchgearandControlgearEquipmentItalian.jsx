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

const SwitchgearandControlgearEquipmentItalian = () => {
  return (
    <div className="relative w-full">
      <SwitchgearandControlgearEquipmentMetaTags />
      <SwitchgearandControlgearEquipmentBreadcrumb />
      <SwitchgearandControlgearEquipmentMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default SwitchgearandControlgearEquipmentItalian;

const SwitchgearandControlgearEquipmentMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Apparecchiature di Interruttori e Controllori fino a 1000 Volt";
  const description =
    "La certificazione BIS Schema X per apparecchiature di interruttori e controllori fino a 1000V e i loro assemblaggi, sottoassemblaggi e componenti, è obbligatoria per garantire qualità e sicurezza in India";
  const keywords =
    "Certificazione BIS per Apparecchiature di Interruttori e Controllori, Certificazione BIS Schema X per Apparecchiature di Interruttori e Controllori, Certificazione Schema X per Apparecchiature di Interruttori e Controllori, BIS per Apparecchiature di Interruttori e Controllori, OTR per Apparecchiature di Interruttori e Controllori";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Responsabile Operazioni presso Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Apparecchiature di Interruttori e Controllori fino a 1000 Volt in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per apparecchiature di interruttori e controllori fino a 1000V in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

const SwitchgearandControlgearEquipmentBreadcrumb = () => {
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
                    Controllori fino a 1000 Volt
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

const SwitchgearandControlgearEquipmentMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Apparecchiature di Interruttori e Controllori
          fino a 1000 Volt
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-switch-gear-and-control-gear-equipment.png"
            alt="Certificazione BIS Schema X Per Apparecchiature Di Interruttori E Controllori Fino A 1000 Volt"
            title="Licenza BIS Schema X per Apparecchiature di Interruttori e Controllori"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          In quest'era di automazione ed elettrificazione, gli interruttori e i
          controllori sono componenti integrali di sistemi elettrici sicuri ed
          efficienti. Dagli impianti domestici ai sistemi industriali avanzati,
          questi dispositivi gestiscono la protezione, il controllo e
          l'isolamento del flusso di corrente. Data l'importanza cruciale che
          questi dispositivi ricoprono, il Bureau of Indian Standards (BIS) ha
          stabilito la certificazione obbligatoria per questi dispositivi sotto
          lo Schema X per garantire che soddisfino i parametri di sicurezza e
          prestazione stabiliti in India.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Il Ministero dell'Industria Pesante, nell'ambito della Normativa
          Tecnica Omnibus, 2024, ha reso obbligatoria la certificazione BIS per
          tutte le apparecchiature di interruttori e controllori (≤ 1000V)
          vendute, importate e prodotte in India a partire dal 1° settembre
          2026. Per affrontare le apparecchiature elettriche non conformi e non
          sicure, e per migliorare gli standard dei prodotti offerti sul
          mercato, il BIS, sotto la Certificazione Schema X, ha reso
          obbligatoria la certificazione per questi dispositivi che operano a
          1000 volt o meno.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Questo articolo delinea la procedura di certificazione insieme ai suoi
          vantaggi, ambito, scopo, prove a sostegno e documentazione importante,
          essenziale per la certificazione Schema X per tutti i tipi di
          apparecchiature di interruttori e controllori che operano (o) i loro
          assemblaggi/sottoassemblaggi/componenti che operano a una tensione non
          superiore a 1000 volt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importanza del BIS per Apparecchiature di Interruttori e Controllori
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Gli interruttori e controllori fino a 1000 volt sono fondamentali in:
        </h3>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Installazioni di distribuzione elettrica domestica e commerciale
          </li>
          <li>Sistemi di gestione dell'energia per l'industria</li>
          <li>Impianti di energia rinnovabile (impianti solari/eolici)</li>
          <li>Progetti di infrastrutture pubbliche</li>
          <li>
            Applicazioni critiche per la sicurezza che richiedono protezione del
            circuito
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza una certificazione adeguata, i rischi includono:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Rischio di scosse elettriche o incendi</li>
          <li>Danni alle apparecchiature e costosi tempi di inattività</li>
          <li>Violazione delle norme di sicurezza indiane</li>
          <li>
            Esclusione da gare d'appalto e progetti che richiedono
            apparecchiature certificate
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificazione Schema X per Apparecchiature di Interruttori e
          Controllori garantisce che questi prodotti soddisfino gli standard di
          prestazione, sicurezza e durata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è il Certificato BIS Schema X per Interruttori e Controllori?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Apparecchiature di Interruttori e
          Controllori fa parte del Regolamento di Valutazione della Conformità
          BIS, 2018. Impone test obbligatori del prodotto, ispezioni di fabbrica
          e conformità agli Standard Indiani applicabili.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Certificazione Schema X per Interruttori e Controllori:
          Caratteristiche principali:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Applicabile a tutti i produttori indiani e stranieri</li>
          <li>
            Copre vari dispositivi: interruttori automatici, interruttori di
            isolamento, interruttori-sezionatori, unità di combinazione con
            fusibili e dispositivi di controllo fino a 1000V.
          </li>
          <li>
            Richiede test di laboratorio in strutture riconosciute dal BIS
          </li>
          <li>Include audit del sistema di produzione e qualità</li>
          <li>
            Conferisce il diritto di utilizzare il Marchio Standard sui prodotti
            dopo la certificazione
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR per Apparecchiature di Interruttori e Controllori
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'OTR per Apparecchiature di Interruttori e Controllori è stato
          annunciato dal Ministero dell'Industria Pesante nel 2024, che richiede
          la certificazione Schema X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Tutti i produttori e importatori sono tenuti a ottenere una
          Licenza BIS valida per Apparecchiature di Interruttori e Controllori
          sotto lo Schema X entro il 1° settembre 2026. "Questo impedirà alle
          apparecchiature di interruttori e controllori non certificate di
          essere vendute, importate o prodotte in India," affermano funzionari
          governativi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Interruttori e Controllori
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza Elettrica: Protegge da cortocircuiti, sovraccarichi e
            potenziali rischi di incendio.
          </li>
          <li>
            Conformità Normativa: Obbligatorio per l'OTR per Dispositivi di
            Interruttori e Controllori.
          </li>
          <li>
            Accettazione di Mercato: I prodotti registrati possono essere
            accettati per tutti i progetti governativi e privati.
          </li>
          <li>
            Fiducia del Cliente: Il Marchio Standard BIS su Interruttori e
            Controllori fornisce ai clienti garanzia di qualità e sicurezza.
          </li>
          <li>
            Vantaggio Competitivo: Migliora la reputazione del marchio e apre le
            porte a nuovi affari.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Interruttori e Controllori
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificazione dello Standard Indiano Rilevante: Identificare il
            codice IS relativo agli interruttori e controllori fino a 1000 volt.
          </li>
          <li>
            Test del Prodotto: Eseguire test di sicurezza, prestazioni e durata
            in laboratori approvati dal BIS.
          </li>
          <li>
            Audit della Fabbrica: Gli ispettori BIS verificano la fabbrica e il
            sistema di controllo qualità.
          </li>
          <li>
            Presentazione della Documentazione: Tutte le specifiche dettagliate,
            rapporti di test e file di conformità di supporto.
          </li>
          <li>
            Emissione della Licenza BIS: Se accettato, il BIS emette una licenza
            per l'utilizzo del Marchio Standard.
          </li>
          <li>
            Conformità Continua: Audit degli standard e test del prodotto a
            intervalli regolari garantiscono che la certificazione rimanga
            valida.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          La non conformità alla Certificazione BIS per Apparecchiature di
          Interruttori e Controllori nell'ambito dello schema OTR ha le seguenti
          conseguenze:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Divieto di produzione, importazione o vendita di qualsiasi prodotto
            non certificato
          </li>
          <li>Le apparecchiature non conformi saranno sequestrate; e multe.</li>
          <li>Inidoneità nelle gare d'appalto governative</li>
          <li>Danni ai rapporti commerciali e alla fiducia nel mercato.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'implementazione della Certificazione BIS Schema X per
          Apparecchiature di Interruttori e Controllori nell'OTR 2024 è un passo
          per garantire una gestione dell'energia sicura, affidabile ed
          efficiente in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Per produttori e importatori, la certificazione Schema X per
          Apparecchiature di Interruttori e Controllori non è solo un obbligo
          legale ma anche un investimento strategico, che garantisce l'accesso
          al mercato, la credibilità del marchio e la fiducia complessiva dei
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
                Miglior Consulente di Certificazione in India
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
