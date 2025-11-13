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

const PowerSemiconductorsItalian = () => {
  return (
    <div className="relative w-full">
      <PowerSemiconductorsMetaTags />
      <PowerSemiconductorsBreadcrumb />
      <PowerSemiconductorsMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default PowerSemiconductorsItalian;

const PowerSemiconductorsMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Convertitori a Semiconduttore di Potenza";
  const description =
    "La Certificazione BIS Schema X si applica a tutti i tipi di convertitori a semiconduttore di potenza e loro assemblaggi, sottoassemblaggi e componenti per garantire qualità e sicurezza in India";
  const keywords =
    "Certificazione BIS per Convertitori a Semiconduttore di Potenza, Certificazione BIS Schema X per Convertitori a Semiconduttore di Potenza, Certificazione Schema X per Convertitori a Semiconduttore di Potenza, BIS per Convertitori a Semiconduttore di Potenza, OTR per Convertitori a Semiconduttore di Potenza";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Convertitori a Semiconduttore di Potenza in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per convertitori a semiconduttore di potenza in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

const PowerSemiconductorsBreadcrumb = () => {
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
                    Certificazione BIS per Convertitori a Semiconduttore di
                    Potenza
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

const PowerSemiconductorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PowerSemiconductorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const PowerSemiconductorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Convertitori a Semiconduttore di Potenza
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Power-Semiconductor-Converter.png"
            alt="Certificazione BIS Schema X per Convertitori a Semiconduttore di Potenza"
            title="Licenza BIS Schema X per Convertitori a Semiconduttore di Potenza"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          I convertitori a semiconduttore di potenza consentono l'esecuzione e
          la modifica efficace della potenza elettrica da una forma all'altra in
          varie applicazioni. Queste applicazioni includono energia rinnovabile,
          veicoli elettrici, automazione industriale ed elettronica di consumo.
          Funzionano come base per dispositivi e apparecchiature elettriche ed
          elettroniche. A causa dell'importanza e del significato in continua
          evoluzione di questi dispositivi nel settore energetico e industriale
          del paese, il Bureau of Indian Standards (BIS) ha incorporato la
          certificazione dei convertitori a semiconduttore di potenza sotto il
          quadro di certificazione Schema X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Secondo l'ordine emanato dal Ministero dell'Industria Pesante, ci si
          aspetta da tutti i tipi di produttori, indipendentemente dal fatto che
          operino localmente o all'estero, di conformarsi alla certificazione
          BIS per Convertitori a Semiconduttore di Potenza e sottoassemblaggi e
          componenti, entro il 1° settembre 2026. La Certificazione BIS Schema X
          per Convertitori a Semiconduttore di Potenza è uno schema di
          certificazione normativo, un passo verso il miglioramento della
          produzione indiana attraverso il miglioramento della sicurezza, della
          qualità e degli standard competitivi a livello globale.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Questo blog aiuterà a fornire le informazioni necessarie sulla
          documentazione riguardante la certificazione Schema X per tutti i
          sottoassemblaggi, componenti e/o tipi di Convertitori a Semiconduttore
          di Potenza, ambito e importanza, processo di certificazione, vantaggi
          e altre informazioni.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Significato della BIS per Convertitori a Semiconduttore di Potenza
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le applicazioni dei convertitori a semiconduttore di potenza
          includono:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Progetti di energia solare ed eolica</li>
          <li>Stazioni di ricarica EV e drive</li>
          <li>Automazione di fabbrica e robotica</li>
          <li>Elettronica di consumo e PSU</li>
          <li>Reti di trasmissione e distribuzione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza certificazione, i rischi includono:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Guasti elettrici e surriscaldamento</li>
          <li>Condizioni non sicure e danni alle apparecchiature</li>
          <li>Efficienza energetica ridotta</li>
          <li>Risultati negativi nelle gare e negli appalti governativi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          I Convertitori a Semiconduttore di Potenza che hanno la certificazione
          Schema X dimostrano che questo prodotto rispetta gli Standard Indiani
          rigorosi per prestazioni, sicurezza e affidabilità.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è il Certificato BIS Schema X per Convertitori a Semiconduttore di
          Potenza?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Convertitori a Semiconduttore di
          Potenza rientra nel Regolamento di Valutazione della Conformità BIS,
          2018. Garantisce che il prodotto subisca test rigorosi, ispezioni e
          verifiche di conformità prima di entrare nel mercato indiano.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caratteristiche Principali:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>Obbligatorio per tutti i produttori esteri e indiani</li>
          <li>
            Include un'introduzione completa sui dispositivi a semiconduttore di
            potenza, progettazione del gate drive e componenti passivi.
          </li>
          <li>Test di prodotto obbligatori in laboratori accreditati BIS</li>
          <li>Esclusione da progetti urbani e gare e appalti governativi.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La certificazione garantisce che i Convertitori a Semiconduttore di
          Potenza rispettino gli Standard Indiani rigorosi per prestazioni,
          sicurezza e durata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per Convertitori a Semiconduttore
          di Potenza?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Convertitori a Semiconduttore di
          Potenza è coperta dal Regolamento di Valutazione della Conformità BIS,
          2018. Dimostra che un prodotto richiederà test rigorosi, ispezioni e
          conformità in India prima di essere immesso sul mercato qui.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caratteristiche Principali:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obbligatorio per produttori indiani ed esteri</li>
          <li>
            Copre varie applicazioni di semiconduttori di potenza (AC-DC, DC-DC,
            DC-AC e AC-AC)
          </li>
          <li>
            Richiede certificazione di potenza e sicurezza da parte di
            laboratori approvati BIS
          </li>
          <li>Include audit di fabbrica e sistemi di qualità</li>
          <li>
            Conferisce il diritto di utilizzare il Marchio Standard BIS se il
            prodotto è anche autorizzato BIS.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR per Convertitori a Semiconduttore di Potenza
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il nuovo Regolamento Tecnico Omnibus (OTR) 2024 per Convertitori a
          Semiconduttore di Potenza è stato pubblicato dal Ministero
          dell'Industria Pesante. Questo ordine OTR richiede la certificazione
          Schema X per questo prodotto per garantire qualità e sicurezza del
          consumatore.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Tutti i produttori e importatori sono tenuti a ottenere la
          certificazione entro il 1° settembre 2026. Dopo questa data limite, i
          convertitori non certificati non possono essere prodotti, venduti o
          importati in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Convertitori a Semiconduttore di
          Potenza
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza del Prodotto: Riduce il rischio di surriscaldamento,
            incidenti di incendio e cortocircuiti.
          </li>
          <li>
            Efficienza Energetica: Garantisce prestazioni ottimizzate e
            conformità con standard di risparmio energetico.
          </li>
          <li>
            Accesso al Mercato: L'OTR per Convertitori a Semiconduttore di
            Potenza richiede la certificazione per l'accesso al mercato in
            India.
          </li>
          <li>
            Vantaggio Competitivo: Gare governative e private preferiscono
            prodotti certificati.
          </li>
          <li>
            Fiducia del Cliente: Il Marchio Standard BIS dimostra affidabilità,
            sicurezza e qualità.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Convertitori a Semiconduttore di
          Potenza
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificazione dello Standard IS Rilevante: Fare riferimento al
            codice IS rilevante per il tipo di convertitore.
          </li>
          <li>
            Test del Prodotto: Eseguire test di prestazioni e sicurezza
            necessari secondo gli standard del settore, in laboratori
            accreditati BIS.
          </li>
          <li>
            Ispezione di Fabbrica: Verifica dei sistemi di garanzia della
            qualità presso il sito di produzione da parte di funzionari BIS.
          </li>
          <li>
            Applicazione e Documentazione: Fornire requisiti tecnici, manuale di
            qualità e rapporti di test.
          </li>
          <li>
            Rilascio della Licenza BIS per Convertitori a Semiconduttore di
            Potenza: È possibile apporre il marchio BIS dopo l'approvazione.
          </li>
          <li>
            Conformità Continua: BIS controlla e conduce audit non programmati
            per la conformità agli standard.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori che non hanno tutti i modelli di convertitori a
          semiconduttore di potenza certificati con la Certificazione BIS per
          Convertitori a Semiconduttore di Potenza entro il 1° settembre 2026
          affrontano i rischi:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Vendita/importazione vietata per convertitori non certificati</li>
          <li>
            Sequestro di apparecchiature non conformi e sanzioni monetarie
          </li>
          <li>Ciò renderà non idonei per gare governative o PSU</li>
          <li>Equity del marchio permanentemente colpito in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'implementazione della Certificazione BIS Schema X per Convertitori a
          Semiconduttore di Potenza nell'OTR 2024 è un passo per portare
          sicurezza, efficienza e qualità nel settore energetico ed elettronico
          in India in rapida crescita.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Produttori, Importatori ed Esportatori sfruttano questo processo
          ottenendo la Certificazione BIS per Convertitori a Semiconduttore di
          Potenza, acquisendo la Licenza BIS per Convertitori a Semiconduttore
          di Potenza e apponendo il marchio BIS per Convertitori a
          Semiconduttore di Potenza sui loro prodotti, dimostrando che i loro
          prodotti soddisfano il sistema normativo del mercato locale e i
          requisiti dei clienti.
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
