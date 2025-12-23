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

const HeatTreatmentEquipmentItalian = () => {
  return (
    <div className="relative w-full">
      <HeatTreatmentEquipmentMetaTags />
      <HeatTreatmentEquipmentBreadcrumb />
      <HeatTreatmentEquipmentMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default HeatTreatmentEquipmentItalian;

const HeatTreatmentEquipmentMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Apparecchiature di Trattamento Termico";
  const description =
    "La Certificazione BIS Schema X richiede che tutti i tipi di macchine per il trattamento di materiali attraverso processi che comportano cambiamenti di temperatura e/o i loro assemblaggi, sub-assemblaggi e componenti debbano essere certificati BIS";
  const keywords =
    "Certificazione BIS per Apparecchiature di Trattamento Termico, Certificazione BIS Schema X per Apparecchiature di Elaborazione Termica, Certificazione Schema X per Apparecchiature di Trattamento Termico, BIS per Apparecchiature di Elaborazione Termica, OTR per Apparecchiature di Trattamento Termico";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Apparecchiature di Trattamento Termico in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per apparecchiature di trattamento termico in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

      {/* Hreflang Tags for Multi-language Support */}
      <link
        rel="alternate"
        hreflang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-heat-treatment-equipment"
      />
      <link
        rel="alternate"
        hreflang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-equipements-de-traitement-thermique"
      />
      <link
        rel="alternate"
        hreflang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-waermebehandlungsausruestung"
      />
      <link
        rel="alternate"
        hreflang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-thiet-bi-xu-ly-nhiet"
      />
      <link
        rel="alternate"
        hreflang="es"
        href="https://bis-certifications.com/certificacion-bis-scheme-x-para-equipos-de-tratamiento-termico"
      />
      <link
        rel="alternate"
        hreflang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-yeolcheori-jangbi"
      />
      <link
        rel="alternate"
        hreflang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-peralatan-perlakuan-panas"
      />
      <link
        rel="alternate"
        hreflang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-apparecchiature-di-trattamento-termico"
      />
      <link
        rel="alternate"
        hreflang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-netsu-shori-souchi"
      />
      <link
        rel="alternate"
        hreflang="zh"
        href="https://bis-certifications.com/bis-fang-an-x-re-chu-li-she-bei-ren-zheng"
      />
      <link
        rel="alternate"
        hreflang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-uppakon-bambat-khwam-ron"
      />
      <link
        rel="alternate"
        hreflang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-warmtebehandelingsapparatuur"
      />
      <link
        rel="alternate"
        hreflang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-maadat-al-mualaja-al-harariya"
      />
    </Helmet>
  );
};

const HeatTreatmentEquipmentBreadcrumb = () => {
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
                    Certificazione BIS per Apparecchiature di Trattamento
                    Termico
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

const HeatTreatmentEquipmentMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <HeatTreatmentEquipmentMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const HeatTreatmentEquipmentMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Apparecchiature di Trattamento Termico
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Heat-treatment-of-material.png"
            title="Licenza BIS Schema X per il trattamento termico dei materiali"
            alt="Certificazione BIS Schema X Per Apparecchiature Di Trattamento Termico"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Le apparecchiature di trattamento termico sono una delle applicazioni
          più critiche in industrie come l'automotive, l'aerospaziale, la
          fonderia, la forgiatura e l'ingegneria pesante. Questi sono
          dispositivi che modificano gli attributi fisici e meccanici dei
          metalli attraverso operazioni come ricottura, tempra, indurimento,
          rinvenimento, ecc.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Vista la sua importanza, il Bureau of Indian Standards (BIS) ha reso
          obbligatoria la Certificazione BIS per Apparecchiature di Trattamento
          Termico nell'ambito della Certificazione Schema X. Questo garantisce
          che i produttori indiani e globali rispettino rigorosi Standard
          Indiani prima di commercializzare le apparecchiature nel paese.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In questo articolo, spiegheremo l'importanza della Certificazione BIS
          Schema X per Apparecchiature di Trattamento Termico, l'OTR per
          Apparecchiature di Trattamento Termico e il processo per ottenere la
          Licenza BIS per Apparecchiature di Trattamento Termico con il Marchio
          BIS per Apparecchiature di Trattamento Termico.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Heat Treatment Equipment is Mandatory Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importanza del BIS per Apparecchiature di Trattamento Termico
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I forni di trattamento termico sono comunemente utilizzati in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Industria metallurgica e dei metalli</li>
          <li>Produzione automotive e aerospaziale</li>
          <li>Fabbricazione di utensili e stampi</li>
          <li>Industria energetica e altre macchine pesanti</li>
          <li>Difesa e ingegneria di precisione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'assenza del BIS per Apparecchiature di Trattamento Termico può
          portare a macchinari di bassa qualità che possono causare:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Surriscaldamento o lavorazione inadeguata</li>
          <li>Guasti meccanici e strutturali del prodotto finale</li>
          <li>Aumento del consumo energetico e mancanza di efficienza</li>
          <li>Rischi per la sicurezza degli operatori</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificazione BIS non solo garantisce che le apparecchiature
          funzionino correttamente e in sicurezza secondo le esigenze
          prestazionali industriali, ma soddisfano anche i criteri ambientali.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è il Certificato BIS Schema X per Apparecchiature di Trattamento
          Termico?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Schema X - Apparecchiature di Trattamento Termico, in linea con il
          Ministero dell'Acciaio, Governo dell'India, è uno schema di
          certificazione obbligatorio secondo il Regolamento di Valutazione
          della Conformità BIS India, 2018.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Certificazione Schema X per Apparecchiature di Trattamento Termico:
          Caratteristiche principali:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obbligatoria per produttori indiani ed esteri</li>
          <li>
            Applicabile alla maggior parte dei tipi di apparecchiature di
            trattamento termico e combustione
          </li>
          <li>
            Include test di prodotto, ispezioni in fabbrica e audit di
            conformità continua.
          </li>
          <li>
            I produttori sono autorizzati ad utilizzare il Marchio Standard BIS.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR per Apparecchiature di Trattamento Termico
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Ministero dell'Industria Pesante nel 2024 ha emanato il Regolamento
          Tecnico Omnibus (OTR) per Apparecchiature di Trattamento Termico, in
          cui la conformità allo Schema X è obbligatoria.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: Tutti i produttori e importatori devono ottenere una Licenza
          BIS valida per Apparecchiature di Trattamento Termico entro il 1°
          settembre 2026. Dopo questa data, le Apparecchiature di Trattamento
          Termico Non Certificate non saranno idonee per essere vendute,
          importate o presentate in gare d'appalto pubbliche.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Apparecchiature di Trattamento
          Termico
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicurezza Operativa: Protegge dal surriscaldamento, trattamento non
            uniforme e danni alle apparecchiature.
          </li>
          <li>
            Affidabilità del Prodotto: Garantisce che gli articoli trattati
            soddisfino le specifiche di durezza, resistenza e tenacità
          </li>
          <li>
            Efficienza Energetica: Le apparecchiature certificate sono testate
            per un utilizzo energetico ottimale, riducendo i costi operativi.
          </li>
          <li>
            Accesso al Mercato: Il Marchio BIS per Apparecchiature di
            Trattamento Termico è spesso obbligatorio per acquisti pubblici e
            gare d'appalto governative.
          </li>
          <li>
            Vantaggio Globale: I marchi globali possono ottenere un facile
            accesso al mercato indiano ottenendo la Licenza BIS per
            Apparecchiature di Trattamento Termico.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Apparecchiature di Trattamento Termico nello Schema di
          Certificazione BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Apparecchiature di Trattamento
          Termico copre un gran numero di macchine come:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Forni di Ricottura</li>
          <li>Forni di Tempra</li>
          <li>Forni di Indurimento e Rinvenimento</li>
          <li>Forni Rotativi per Trattamento Termico Continuo</li>
          <li>Forni di Cementazione e Nitrurazione.</li>
          <li>
            Apparecchiature di Trattamento Termico a Induzione ed Elettriche
          </li>
          <li>Dispositivi di Trattamento Termico a Gas e Olio</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Ogni tipo deve conformarsi agli Standard Indiani rilevanti (codice IS)
          come IS 16819:2018/ISO 12100:2010. Le caratteristiche prestazionali, i
          gradi dei materiali e le funzionalità di conservazione energetica
          devono essere conformi agli Standard Indiani rilevanti (codice IS) per
          ogni tipo di apparecchiatura.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Apparecchiature di Trattamento
          Termico
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identificare lo Standard Rilevante: Fare riferimento al codice IS
            rilevante per il tipo di Apparecchiature di Trattamento Termico.
          </li>
          <li>
            Test in Laboratori Riconosciuti BIS: Condurre test di prestazioni,
            sicurezza ed efficienza.
          </li>
          <li>
            Ispezione in Fabbrica: Il BIS esamina il sistema di controllo
            qualità e le strutture di produzione.
          </li>
          <li>
            Applicazione & Documentazione: Fornire risultati, test condotti e
            specifiche tecniche oltre al manuale di qualità.
          </li>
          <li>
            Rilascio della Licenza BIS per Apparecchiature di Trattamento
            Termico: L'approvazione consente l'uso del Marchio BIS per
            Apparecchiature di Trattamento Termico.
          </li>
          <li>
            Conformità Continua: Audit e ispezioni regolari vengono condotti per
            mantenere gli standard di qualità.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Se l'OTR per Apparecchiature di Trattamento Termico non viene
          rispettato entro il 1° set 2026:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Divieto di vendita/importazione di apparecchiature non certificate
          </li>
          <li>Multe e sequestro dei prodotti</li>
          <li>Inidoneità per gare d'appalto governative e PSU</li>
          <li>Perdita di brand equity a lungo termine nel mercato indiano</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'applicazione obbligatoria della Certificazione Schema X per
          Apparecchiature di Trattamento Termico secondo l'OTR 2024 è una pietra
          miliare importante nell'innalzamento degli standard industriali
          indiani.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Per i produttori, importatori ed esportatori di Apparecchiature di
          Trattamento Termico, il processo per ottenere la Certificazione BIS
          per Apparecchiature di Trattamento Termico, per ottenere la Licenza
          BIS per Apparecchiature di Trattamento Termico e utilizzare il Marchio
          Standard BIS per Apparecchiature di Trattamento Termico non riguarda
          solo la conformità, si tratta di costruire prodotti sicuri e prodotti
          affidabili che siano competitivi nel mercato regolamentato.
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
                alt="CDSCO logo"
                title="CDSCO logo"
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
                alt="BISCRS logo"
                title="BISCRS logo"
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
                alt="PlasticWasteManagement logo"
                title="PlasticWasteManagement logo"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
                alt="ISIMark logo"
                title="ISIMark logo"
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
