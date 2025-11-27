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

const MachineToolsItalian = () => {
  return (
    <div className="relative w-full">
      <MachineToolsMetaTags />
      <MachineToolsBreadcrumb />
      <MachineToolsMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default MachineToolsItalian;

const MachineToolsMetaTags = () => {
  const title = "Certificazione BIS Schema X per Utensili per Macchine";
  const description =
    "La Certificazione BIS Schema X è obbligatoria per utensili per macchine inclusi torni, fresatrici, trapani, rettificatrici, sistemi CNC e utensili per lavorare pietra, ceramica, calcestruzzo e materiali simili";
  const keywords =
    "Certificazione BIS per Utensili per Macchine, Certificazione BIS Schema X per Utensili per Macchine, Certificazione Schema X per Utensili per Macchine, BIS per Utensili per Macchine, OTR per Utensili per Macchine";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Utensili per Macchine in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per Utensili per Macchine in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

const MachineToolsBreadcrumb = () => {
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
                    Certificazione BIS per Utensili per Macchine
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

const MachineToolsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MachineToolsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const MachineToolsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Utensili per Macchine
        </h1>

        {/* BIS Scheme X License Image */}
        <div className="mb-6">
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Licenza BIS Schema X per Utensili per Macchine
          </h3>
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Machine-Tools.png"
            alt="Certificazione BIS Schema X Per Utensili Per Macchine"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Considerando la qualità e la sicurezza come aspetti critici, il BIS
          (Bureau of Indian Standards) ha guidato la sicurezza e gli standard di
          varie industrie attraverso la Certificazione Schema X. Questo
          certificato è essenziale per i produttori di utensili per macchine
          progettati per operare su materiali come pietra, ceramica,
          calcestruzzo, cemento amianto e vetro minerale simile, nonché altri
          utensili per macchine. La conformità alla certificazione non solo
          soddisfa i requisiti di sicurezza nazionali, ma aumenta
          significativamente la credibilità e la commerciabilità di tali
          prodotti.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Questa Certificazione Schema X è un requisito secondo la Sicurezza di
          Macchine e Apparecchiature Elettriche (Regolamento Tecnico Omnibus,
          2024). Questo regolamento certifica che i produttori di macchine e
          apparecchiature elettriche devono avere il Marchio Standard sulle loro
          apparecchiature. La certificazione include la preparazione di
          fascicoli tecnici, audit di fabbrica, ispezioni indipendenti dei
          prodotti e licenze, e la scadenza finale è il 1° settembre 2026.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Questo blog copre tutte le informazioni necessarie relative alla
          certificazione Schema X per tutti i tipi di utensili per macchine per
          lavorare pietra, ceramica, calcestruzzo, cemento amianto o minerali
          simili (o) e i loro assemblaggi /sub-assemblaggi /componenti, la sua
          importanza, ambito, processo di certificazione, vantaggi e
          documentazione necessaria.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS per Utensili per Macchine è Importante
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Gli utensili per macchine sono essenziali in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Produzione di componenti per automobili e aeroplani</li>
          <li>Industria della costruzione navale e ingegneria pesante</li>
          <li>
            Fabbricazione di apparecchiature per la generazione di energia
          </li>
          <li>Ferrovie, difesa e apparecchiature di precisione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza la certificazione BIS, i rischi includono:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Qualità del prodotto inadeguata e incoerente</li>
          <li>Guasti alle apparecchiature e ritardi nella produzione</li>
          <li>Rischi per gli operatori</li>
          <li>
            Preoccupazioni legali dovute alla violazione delle leggi indiane
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Applicando la conformità, la Certificazione Schema X protegge
          l'industria da questi rischi. Si applica anche a tutti i tipi di
          utensili per macchine per lavorare pietra, ceramica, calcestruzzo,
          cemento amianto o minerali simili (o) e i loro assemblaggi
          /sub-assemblaggi /componenti.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per Utensili per Macchine?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con la Certificazione BIS Schema X secondo il Regolamento di
          Valutazione della Conformità BIS, 2018, i test, le ispezioni e le
          licenze sono diventati obbligatori per i prodotti di utensili per
          macchine identificati, prima della loro fabbricazione, importazione o
          vendita nel paese.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Punti Salienti:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Si applica sia ai produttori indiani che agli importatori</li>
          <li>
            Include utensili per macchine come torni, fresatrici, trapani,
            rettificatrici, limatrici, sistemi CNC e altri
          </li>
          <li>I test vengono eseguiti solo in laboratori approvati dal BIS</li>
          <li>
            L'audit di fabbrica e la revisione del sistema qualità sono
            obbligatori
          </li>
          <li>
            Solo i richiedenti approvati ottengono la Licenza BIS per utilizzare
            il Marchio Standard sui loro prodotti
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR per Utensili per Macchine
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Ministero dell'Industria Pesante ha rilasciato il Regolamento
          Tecnico Omnibus (OTR) che rende obbligatoria la certificazione BIS
          schema X per gli Utensili per Macchine.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Tutti i produttori e importatori devono avere la
          certificazione BIS entro il 1° settembre 2026. A partire da tale data,
          gli utensili per macchine non certificati non potranno essere
          prodotti, venduti o importati in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Utensili per Macchine
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Garanzia di Qualità: Precisione verificata, durata degli utensili
            certificati.
          </li>
          <li>
            Accesso al Mercato – essenziale per l'ingresso in progetti del
            settore pubblico e privato.
          </li>
          <li>
            Fiducia dei Consumatori – Il Marchio Standard BIS è una garanzia di
            qualità e sicurezza del prodotto.
          </li>
          <li>
            Vantaggio Competitivo - I produttori autorizzati sono preferiti per
            gare d'appalto e appalti.
          </li>
          <li>
            Riduzione del Rischio – Nessun guasto alle apparecchiature,
            miglioramento della sicurezza degli operatori e prevenzione dei
            tempi di inattività.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Utensili per Macchine
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificazione dello Standard – Collegare il tipo di utensile per
            macchine e il suo utilizzo con gli Standard Indiani.
          </li>
          <li>
            Test del Prodotto – Test di prestazioni, sicurezza e durabilità in
            laboratori accreditati dal BIS.
          </li>
          <li>
            Audit di Fabbrica – Audit del controllo qualità della produzione di
            apparecchiature elettriche.
          </li>
          <li>
            Documentazione: Rapporti tecnici, manuali e prove di conformità
            devono essere forniti.
          </li>
          <li>
            Rilascio della Licenza – Il BIS rilascia la licenza (certificato) e
            autorizza l'uso del Marchio Standard.
          </li>
          <li>
            Monitoraggio – Revisioni di routine e ispezioni casuali vengono
            eseguite per garantire la conformità alle regole.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione Schema X è obbligatoria per tutte le macchine per
          lavorare pietra, ceramica, calcestruzzo, cemento amianto o minerali
          simili (o) e i loro assemblaggi/sub-assemblaggi/parti.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il mancato rispetto delle norme di certificazione BIS secondo l'OTR
          può comportare:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Divieto di produzione, importazione e commercio di merci non
            certificate
          </li>
          <li>Sequestro di merci e multe</li>
          <li>Perdita di contratti governativi e di difesa</li>
          <li>
            Danni permanenti al marchio e alla reputazione a lungo termine
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificazione BIS Schema X, richiesta secondo l'OTR 2024, non è
          solo un obbligo normativo—è la chiave per la fiducia, la sicurezza e
          il successo nell'industria manifatturiera indiana. La certificazione è
          essenziale per i Produttori Indiani e Globali per l'Accesso al
          Mercato, la Conformità e il Successo a Lungo Termine.
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
                Il Miglior Consulente di Certificazione in India
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
