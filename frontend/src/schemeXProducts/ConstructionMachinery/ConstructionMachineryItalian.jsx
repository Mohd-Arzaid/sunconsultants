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
import FooterItalian from "@/components/manual/Footer/FooterItalian";
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const ConstructionMachineryItalian = () => {
  return (
    <div className="relative w-full">
      <ConstructionMachineryMetaTags />
      <ConstructionMachineryBreadcrumb />
      <ConstructionMachineryMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default ConstructionMachineryItalian;

const ConstructionMachineryMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Macchinari da Costruzione, Scavi e Miniere";
  const description =
    "La certificazione BIS Schema X è obbligatoria per macchinari da costruzione, scavi e miniere per garantire sicurezza, qualità e standardizzazione nei settori industriali critici";
  const keywords =
    "Certificazione BIS per Macchinari da Costruzione, Certificazione BIS Schema X per Macchinari da Costruzione, Certificazione Schema X per Macchinari da Costruzione, BIS per Macchinari da Costruzione, OTR per Macchinari da Costruzione";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Macchinari da Costruzione in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla certificazione BIS Schema X per macchinari da costruzione in India. Comprendi la conformità OTR 2024, il processo di licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

const ConstructionMachineryBreadcrumb = () => {
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
                    Certificazione BIS Schema X per Macchinari da Costruzione
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

const ConstructionMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <ConstructionMachineryMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const ConstructionMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Macchinari da Costruzione
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Construction-Machinery.png"
            alt="Certificazione BIS Schema X per Macchinari da Costruzione"
            title="Licenza BIS Schema X per Macchinari da Costruzione"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Escavatori, pale caricatrici, bulldozer, betoniere e rulli compressori
          sono i principali macchinari da costruzione utilizzati nello sviluppo
          delle infrastrutture indiane. La crescente domanda di macchine sicure
          e affidabili deriva da investimenti significativi in autostrade, città
          intelligenti, stabilimenti industriali e progetti abitativi.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Il Bureau of Indian Standards (BIS) ha reso obbligatoria la
          Certificazione BIS secondo lo Schema X per i Macchinari da Costruzione
          per garantire qualità, prestazioni e sicurezza. Questo assicura che le
          attrezzature siano conformi agli standard indiani prima di essere
          vendute o importate in India.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In questo articolo, scoprirai tutto sulla Certificazione BIS Schema X
          per Macchinari da Costruzione, i requisiti OTR per i Macchinari da
          Costruzione e il processo per ottenere la Licenza BIS per Macchinari
          da Costruzione insieme al marchio BIS per Macchinari da Costruzione.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS per Macchinari da Costruzione è
          Importante
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I macchinari da costruzione vengono impiegati nella crescita delle
          infrastrutture e nei grandi cantieri di sviluppo edilizio.
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Sviluppo di strade e autostrade</li>
          <li>Progetti immobiliari e abitativi</li>
          <li>Attività minerarie e di scavo</li>
          <li>Costruzioni industriali e ingegneria pesante</li>
          <li>Progetti portuali, aeroportuali e metropolitani</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le conseguenze dell'assenza della certificazione BIS per le
          Attrezzature da Costruzione sono le seguenti:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Guasti alle attrezzature e costosi tempi di inattività</li>
          <li>Maggiore probabilità di incidenti e rischi per la sicurezza</li>
          <li>Non conformità con le gare d'appalto governative</li>
          <li>Aumento dei costi di manutenzione e operativi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Il marchio BIS per Macchinari da Costruzione indica che il prodotto è
          sicuro, affidabile e conforme agli standard indiani.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per Macchinari da Costruzione?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X è disciplinata dai Requisiti di
          Valutazione della Conformità del Bureau of Indian Standards (BIS)
          (2018) che fornisce linee guida per i prodotti. In questo schema, il
          BIS verifica la qualità del prodotto e garantisce che riduca i rischi
          per la salute umana.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caratteristiche Principali - Certificazione Schema X per Attrezzature
          da Costruzione:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obbligatoria per produttori domestici ed esteri</li>
          <li>
            Copre tutti i tipi di macchinari pesanti e attrezzature da
            costruzione
          </li>
          <li>
            Test obbligatori sui prodotti, ispezioni obbligatorie degli
            stabilimenti e audit di conformità devono essere eseguiti
            regolarmente
          </li>
          <li>Autorizza l'uso del marchio BIS per Macchinari da Costruzione</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR BIS per Attrezzature da Costruzione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione Schema X diventerà obbligatoria nell'ambito del
          Regolamento Tecnico Omnibus (OTR) 2024 per i Macchinari da Costruzione
          annunciato dal Ministero dell'Industria Pesante.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Tutti i produttori e importatori devono ottenere la Licenza
          BIS per Macchinari da Costruzione secondo lo Schema X entro il 01
          settembre 2026. A partire da questa data, le attrezzature non
          certificate non potranno essere prodotte, trasportate o vendute per
          progetti di infrastrutture pubbliche.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Attrezzature o Macchinari da
          Costruzione
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza e Affidabilità: Riduce i rischi di guasti meccanici o
            incidenti nei cantieri edili.
          </li>
          <li>
            Accesso al Mercato ed Eleggibilità alle Gare d'Appalto: I prodotti
            Certificati BIS sono idonei per gare d'appalto governative e aziende
            pubbliche.
          </li>
          <li>
            Fiducia di Consumatori e Appaltatori: Il marchio BIS per Macchinari
            da Costruzione garantisce prodotti sicuri e di qualità per tutti gli
            acquirenti.
          </li>
          <li>
            Ingresso nel Mercato Globale: La Licenza BIS per Macchinari da
            Costruzione può avvantaggiare le aziende straniere per un facile
            accesso al mercato indiano.
          </li>
          <li>
            Conformità Legale: Protezione da multe, divieti e sanzioni secondo
            l'OTR per Macchinari da Costruzione.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Construction Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Attrezzature da Costruzione Coperte dallo Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Macchinari da Costruzione si
          applica a varie categorie di attrezzature come:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Escavatori e Terne</li>
          <li>Bulldozer e Rulli Compressori</li>
          <li>Gru utilizzate nei cantieri edili</li>
          <li>Betoniere e Impianti di Betonaggio</li>
          <li>Impianti di Asfalto e Pavimentatrici</li>
          <li>Macchine per Palificazione e Perforazione</li>
          <li>Attrezzature per Movimentazione Materiali e Movimento Terra</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Ogni categoria deve soddisfare i relativi standard indiani (Codice IS)
          conformemente a IS 17055 (Parte 7):2020, IS 17055 (Parte 8):2020 e IS
          17055 (Parte 12):2020 in termini di design, sicurezza, prestazioni,
          ecc.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedura per la Licenza BIS per Attrezzature da Costruzione
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificare lo Standard Applicabile: Trova il codice IS per il tuo
            tipo di Macchinari da Costruzione.
          </li>
          <li>
            Test del Prodotto: Conduci test di sicurezza e prestazioni in
            laboratori riconosciuti dal BIS.
          </li>
          <li>
            Ispezione dello Stabilimento: Gli auditor del BIS verificano
            letteralmente i processi di QC e produzione.
          </li>
          <li>
            Domanda e Documentazione: Fornisci rapporti, specifiche e manuali
            per la revisione.
          </li>
          <li>
            Licenza BIS per Macchinari da Costruzione: Una volta approvato, il
            produttore è autorizzato ad apporre il marchio BIS per Macchinari da
            Costruzione.
          </li>
          <li>
            Conformità Continua: Ispezioni e monitoraggio frequenti mantengono
            la conformità continua.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La mancata ottenimento del Certificato BIS per Macchinari da
          Costruzione entro il 1° settembre 2026 per quanto riguarda l'OTR per
          Macchinari da Costruzione avrà le seguenti implicazioni:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Divieto di vendita e importazione di attrezzature non certificate
          </li>
          <li>Multe significative e sequestro dei prodotti</li>
          <li>Squalifica da progetti e appalti governativi</li>
          <li>
            Potenziali danni alla reputazione illimitati per anni a venire
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'implementazione obbligatoria della Certificazione BIS Schema X per
          Macchinari da Costruzione secondo l'OTR per Macchinari da Costruzione
          (2024) è un passo significativo verso la sicurezza, l'efficienza e la
          standardizzazione nell'industria domestica indiana.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Per produttori, importatori ed esportatori di macchinari da
          costruzione, ottenere la Licenza BIS per Macchinari da Costruzione e
          apporre il marchio BIS per Macchinari da Costruzione non è solo un
          requisito di conformità, è una mossa strategica per espandersi verso
          nuovi mercati, penetrare nel mercato delle costruzioni indiano in
          rapida crescita e costruire la propria reputazione a lungo termine.
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
