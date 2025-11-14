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

const RubberAndPlasticsMachineryItalian = () => {
  return (
    <div className="relative w-full">
      <RubberAndPlasticsMachineryMetaTags />

      <RubberAndPlasticsMachineryBreadcrumb />
      <RubberAndPlasticsMachineryMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default RubberAndPlasticsMachineryItalian;

const RubberAndPlasticsMachineryMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Macchinari di Gomma e Plastica";
  const description =
    "La certificazione BIS Schema X è obbligatoria per macchinari di gomma e plastica, assemblaggi, sottoassemblaggi e componenti sotto lo Schema X per garantire qualità, sicurezza e fiducia del cliente";
  const keywords =
    "Certificazione BIS per Macchinari di Gomma e Plastica, Certificazione BIS Schema X per Macchinari di Gomma e Plastica, Certificazione Schema X per Macchinari di Gomma e Plastica, BIS per Macchinari di Gomma e Plastica, OTR per Macchinari di Gomma e Plastica";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Responsabile Operazioni presso Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Macchinari di Gomma e Plastica in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per macchinari di gomma e plastica in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

const RubberAndPlasticsMachineryBreadcrumb = () => {
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
                    Certificazione BIS per Macchinari di Gomma e Plastica
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

const RubberAndPlasticsMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RubberAndPlasticsMachineryMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Macchinari di Gomma e Plastica
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-machinery-for-working-rubber-and-plastics.png"
            title="Licenza BIS Schema X per Macchinari di Gomma e Plastica"
            alt="Certificazione BIS Schema X Per Macchinari Di Gomma E Plastica"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Il settore industriale indiano sta evolvendo rapidamente, portando a
          una crescente domanda di macchinari standardizzati, sicuri e ad alte
          prestazioni. In particolare, i macchinari per la lavorazione di gomma
          e plastica sono fondamentali per diverse industrie, tra cui
          automotive, costruzioni, imballaggio e beni di consumo. Per migliorare
          ulteriormente la sicurezza dei prodotti, la protezione dei consumatori
          e facilitare la garanzia della qualità, il Bureau of Indian Standards
          (BIS) ha stabilito un quadro normativo che richiede la certificazione
          per la conformità allo Schema X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Il Ministero dell'Industria Pesante, nell'ambito dell'Ordine Omnibus
          Technical Regulation (OTR), 2024, richiede a tutti i produttori, sia
          nazionali che internazionali, di ottenere la certificazione BIS sotto
          lo Schema X per specifiche categorie di macchinari. Questo include
          tutti i tipi di macchinari per la lavorazione di gomma e plastica,
          nonché i loro assemblaggi, sottoassemblaggi e componenti.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Questo articolo delinea l'importanza e la rilevanza della
          Certificazione Schema X, il processo di certificazione e i vantaggi
          associati con la documentazione richiesta per i macchinari di gomma e
          plastica e tutti i loro assemblaggi, sottoassemblaggi e componenti.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importanza del BIS per Macchinari di Gomma e Plastica
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I Macchinari di Gomma e Plastica sono ampiamente utilizzati in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Produzione di componenti automobilistici (pneumatici, tubi,
            guarnizioni, cruscotti)
          </li>
          <li>Imballaggio in plastica e prodotti di consumo</li>
          <li>Forniture mediche e imballaggio farmaceutico</li>
          <li>Materiali da costruzione e infrastrutture</li>
          <li>Componenti elettrici ed elettronici</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          In assenza di BIS per Macchinari di Gomma e Plastica, le industrie
          potrebbero affrontare:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Inefficienze operative e guasti frequenti</li>
          <li>Rischi per la sicurezza degli operatori e degli utenti finali</li>
          <li>Risultati di prodotto di bassa qualità</li>
          <li>Squalifica per gare d'appalto governative o grandi progetti</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificazione BIS Schema X per Macchinari di Gomma e Plastica
          garantisce che i macchinari rispettino i rigorosi Standard Indiani,
          rendendoli più sicuri, più durevoli e pronti per il mercato.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è il Certificato BIS Schema X per Macchinari di Gomma e Plastica?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Macchinari di Gomma e Plastica in
          India rientra nel Regolamento di Valutazione della Conformità BIS,
          2018. Stabilisce criteri di prestazione e sicurezza per macchinari di
          lavorazione di gomma e plastica.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Certificazione Schema X per Macchinari di Gomma e Plastica:
          Caratteristiche principali:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>Obbligatoria per produttori indiani e stranieri</li>
          <li>
            Copre un'ampia gamma di macchinari di gomma e plastica secondo i
            codici IS notificati
          </li>
          <li>
            Richiede test del prodotto, audit dei processi di produzione e
            sorveglianza continua.
          </li>
          <li>Utilizzo del marchio standard BIS una volta certificato.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Questo certificato garantisce la sicurezza dei macchinari,
          l'efficienza energetica e una produzione affidabile per le industrie e
          gli utenti finali.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR per Macchinari di Gomma e Plastica
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'OTR per Macchinari di Gomma e Plastica è stato annunciato dal
          Ministero dell'Industria Pesante nel 2024, che richiede la
          certificazione Schema X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Tutti i produttori e importatori sono tenuti a ottenere una
          Licenza BIS valida per Macchinari di Gomma e Plastica sotto lo Schema
          X entro il 1° settembre 2026. "Questo impedirà ai macchinari di gomma
          e plastica non certificati di essere prodotti, importati o venduti in
          India," affermano funzionari governativi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Macchinari di Gomma e Plastica
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Garanzia di Qualità: Conformità agli Standard Indiani sulle
            prestazioni e la durabilità.
          </li>
          <li>
            Competitività di Mercato: I prodotti certificati sono prioritari per
            gli appalti del settore pubblico e privato.
          </li>
          <li>
            Fiducia del Cliente: C'è maggiore fiducia da parte degli acquirenti
            quando acquistano macchinari con Certificazione BIS per Macchinari
            di Gomma e Plastica.
          </li>
          <li>
            Conformità Legale: Non sarete soggetti a sanzioni o restrizioni dopo
            aver rispettato l'OTR per Macchinari di Gomma e Plastica.
          </li>
          <li>
            Vantaggio Globale: Gli OEM internazionali con certificazione trovano
            più facile l'accesso al mercato indiano.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Macchinari di Gomma e Plastica Coperti dallo Schema di Certificazione
          BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione Schema X per Macchinari di Gomma e Plastica copre
          un'ampia gamma di attrezzature, tra cui:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Macchine per stampaggio a iniezione</li>
          <li>Estrusori e macchine per soffiaggio</li>
          <li>Mescolatori per gomma e mixer interni</li>
          <li>Macchine calandratrici</li>
          <li>Presse per stampaggio a compressione</li>
          <li>Macchine per riciclaggio e granulazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Ogni categoria deve rispettare gli Standard Indiani applicabili
          (codici IS) come IS/ISO 20430: 2020 (Macchine per Plastica e Gomma -
          Macchine per Stampaggio a Iniezione - Requisiti di Sicurezza). Ogni
          tipo di macchinario deve soddisfare gli Standard Indiani applicabili
          in termini di sicurezza, prestazioni e affidabilità.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Macchinari di Gomma e Plastica
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificazione dello Standard Rilevante: Selezionare il codice IS
            pertinente al tipo di macchinario.
          </li>
          <li>
            Test del Prodotto: Eseguire i test di prestazione e sicurezza
            richiesti secondo gli standard industriali, in laboratori
            accreditati BIS.
          </li>
          <li>
            Ispezione della Fabbrica: Verificare il sistema di garanzia della
            qualità nel sito di produzione da parte di funzionari BIS.
          </li>
          <li>
            Applicazione e Documentazione: Fornire requisiti tecnici, manuale
            della qualità e rapporti di test.
          </li>
          <li>
            Emissione della Licenza BIS per Macchinari di Gomma e Plastica: È
            possibile apporre il marchio BIS dopo l'approvazione.
          </li>
          <li>
            Conformità Continua: BIS effettua controlli e audit non programmati
            per la conformità agli standard.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori che non hanno tutti i modelli di macchinari di gomma e
          plastica certificati con Certificazione BIS per Macchinari di Gomma e
          Plastica entro il 1° settembre 2026 affrontano i rischi di:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Vendita/importazione vietata per macchinari di gomma e plastica non
            certificati
          </li>
          <li>Sequestro di attrezzature non conformi e sanzioni pecuniarie</li>
          <li>
            Ciò vi renderà non idonei per gare d'appalto governative o PSU
          </li>
          <li>Reputazione del marchio permanentemente danneggiata in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'implementazione della Certificazione BIS Schema X per Macchinari di
          Gomma e Plastica nell'OTR 2024 è un passo per portare sicurezza,
          efficienza e qualità nel settore industriale in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          I produttori, importatori ed esportatori possono beneficiare di questo
          processo ottenendo la Certificazione BIS per Macchinari di Gomma e
          Plastica, acquisendo la Licenza BIS per Macchinari di Gomma e Plastica
          e apponendo il marchio BIS per Macchinari di Gomma e Plastica sui loro
          prodotti, dimostrando che i loro prodotti soddisfano il sistema
          regolatorio del mercato locale e i requisiti dei clienti.
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
