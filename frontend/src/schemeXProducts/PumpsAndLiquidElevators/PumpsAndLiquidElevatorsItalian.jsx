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
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const PumpsAndLiquidElevatorsItalian = () => {
  return (
    <div className="relative w-full">
      <PumpsAndLiquidElevatorsMetaTags />
      <PumpsAndLiquidElevatorsItalianPageBreadcrumb />
      <PumpsAndLiquidElevatorsItalianPageMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default PumpsAndLiquidElevatorsItalian;

const PumpsAndLiquidElevatorsMetaTags = () => {
  const title = "Certificazione BIS Schema X per Pompe e Elevatori di Liquidi";
  const description =
    "La Certificazione BIS Schema X per pompe e elevatori di liquidi secondo il Regolamento Tecnico Omnibus 2024 richiede che tutti i tipi di pompe e elevatori di liquidi siano conformi alla Certificazione Schema X entro settembre 2026";
  const keywords =
    "Certificazione BIS per Pompe, Certificazione BIS Schema X per Pompe, Certificazione Schema X per Pompe, BIS per Pompe, Certificazione BIS per Pompe e Elevatori di Liquidi, OTR per Pompe";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Pompe e Elevatori di Liquidi in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per Pompe e Elevatori di Liquidi in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

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

      {/* HrefLang Tags */}
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-peomp-mich-aegche-seunggangi"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-pompen-en-vloeistofelevators"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
    </Helmet>
  );
};

const PumpsAndLiquidElevatorsItalianPageBreadcrumb = () => {
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
                    Certificazione BIS Schema X per Pompe e Elevatori di Liquidi
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

const PumpsAndLiquidElevatorsItalianPageMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PumpsAndLiquidElevatorsPageMainContentLeftItalian />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsPageMainContentLeftItalian = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS Schema X per Pompe e Elevatori di Liquidi in India
        </h1>

        {/* BIS License for Pumps Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-For-Pumps.png"
            alt="Licenza BIS per Pompe e Elevatori di Liquidi"
            title="Licenza BIS per Pompe e Elevatori di Liquidi"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          La rapida crescita industriale e infrastrutturale in India richiede
          macchine che operino maggiormente e garantiscano la soddisfazione
          della domanda domestica e internazionale. Pompe ed elevatori di
          liquidi sono essenziali per risorse idriche, agricoltura, costruzioni,
          energia, industria e molti altri settori. Apparecchiature difettose
          possono mettere a rischio la sicurezza, interrompere le operazioni e
          creare perdite finanziarie se non prodotte secondo le specifiche
          corrette con controlli di qualità adeguati.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Per controllare questo aspetto, il BIS (Bureau of Indian Standards) ha
          lanciato la certificazione Schema X, che richiede che ogni pompa ed
          elevatore di liquidi soddisfi gli standard di qualità nazionali prima
          di essere venduti in India.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In questo articolo, intendiamo discutere l'importanza della
          Certificazione BIS per Pompe, l'importanza del Regolamento Tecnico
          Omnibus (OTR) 2024 e il processo per ottenere la Licenza BIS per Pompe
          sotto lo Schema X per i produttori aspiranti.
        </p>

        {/* Why Pumps and Elevators Matter Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Perché Pompe e Elevatori di Liquidi Sono Importanti
        </div>

        {/* Pumps Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pompe
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le pompe sono dispositivi essenziali per spostare fluidi o fanghi
          attraverso varie industrie. Sono ampiamente utilizzate in:
        </p>

        {/* Pumps Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Sistemi agricoli e di irrigazione</li>
          <li>Approvvigionamento idrico pubblico e uso domestico</li>
          <li>Stazioni di trattamento acque reflue ed effluenti</li>
          <li>Condutture di petrolio e gas</li>
          <li>Sistemi di climatizzazione e raffreddamento industriale</li>
        </ul>

        {/* Liquid Elevators Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Elevatori di Liquidi
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pompe di sollevamento, elevatori verticali di liquidi per sollevare
          liquidi funzionano per il pompaggio:
        </p>

        {/* Liquid Elevators Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Sistemi di distribuzione idrica con pompe ad alta portata</li>
          <li>Silos industriali/serbatoi di stoccaggio</li>
          <li>Nelle industrie energetiche, chimiche e di processo</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Poiché sono comuni, pompe economiche o elevatori di liquidi possono
          causare:
        </p>

        {/* Problems with Poor Quality Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Guasti meccanici</li>
          <li>Pericoli elettrici</li>
          <li>Perdite e corrosione</li>
          <li>
            Incidenti causati da rischi per la sicurezza e perdite economiche
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Ecco perché la BIS per Pompe e Elevatori di Liquidi è una protezione
          estremamente necessaria sia per i produttori che per gli acquirenti.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS and What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la BIS e cos'è lo Schema X?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Il Bureau of Indian Standards (BIS) è l'ente di standardizzazione
          nazionale dell'India per certificare la qualità e la sicurezza dei
          prodotti. Per controllare installazioni e macchinari vitali, il BIS ha
          reso obbligatorio l'ottenimento della Certificazione Schema X dal 16
          marzo 2022 secondo il Regolamento di Valutazione della Conformità BIS,
          2018.
        </p>

        {/* Scheme X Key Highlights */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Punti Chiave della Certificazione Schema X per Pompe
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obbligatorio per produttori indiani ed esteri</li>
          <li>
            Si applica a pompe, motori ed elevatori di liquidi coperti dagli
            Standard Indiani
          </li>
          <li>
            Include test di laboratorio, ispezioni di fabbrica, verifica della
            conformità costante
          </li>
          <li>
            Aggiunge forza legale per consentire l'uso del marchio BIS per Pompe
            da parte dei produttori come prova di certificazione.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Regolamento Tecnico Omnibus (OTR) per Pompe
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'OTR 2024 è stato annunciato dal Ministero dell'Industria Pesante,
          che stabilisce che tutte le pompe e gli elevatori di liquidi devono
          conformarsi alla Certificazione Schema X.
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Scadenza per la Conformità:
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          Entro il 1° settembre 2026, tutti i produttori e importatori devono
          ottenere una Licenza BIS valida per Pompe sotto lo Schema X. La non
          conformità può comportare multe pesanti, nonché la chiusura delle
          vendite e l'esclusione dagli appalti pubblici.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Perché la certificazione BIS per Pompe e Elevatori di Liquidi è
          importante?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          1. Garanzia di Sicurezza: Garantisce che le apparecchiature siano
          progettate e costruite per la precisione operativa e non causino:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Guasti elettrici</li>
          <li>Perdite e ruggine</li>
          <li>Danni e guasti alle macchine</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          2. Vantaggio di Mercato
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Le pompe certificate BIS sono spesso richieste per progetti
            pubblici, gare governative, ecc.
          </li>
          <li>
            Fornisce un vantaggio competitivo rispetto ai prodotti non
            certificati.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          3. Fiducia del Consumatore: Il marchio ISI sulle Pompe fornisce
          fiducia agli acquirenti sulla qualità e garantisce l'efficienza del
          prodotto.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          4. I Marchi Globali Ottengono Accesso Facile al Mercato: Gli OEM
          esteri ottengono accesso facile al mercato regolare indiano
          conformandosi agli standard Schema X.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Pumps Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Pompe Sotto la Registrazione BIS Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo Schema X BIS include vari tipi di pompe tra cui:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Pompe Centrifughe</li>
          <li>Pompe Sommerse</li>
          <li>Pompe Booster</li>
          <li>Pompe Multistadio</li>
          <li>Pompe a Spostamento Positivo</li>
          <li>Pompe a Turbina Verticale</li>
          <li>Pompe per Processi Chimici</li>
          <li>Pompe a Diaframma</li>
          <li>Pompe per Fanghi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni tipo deve conformarsi agli Standard Indiani rilevanti (codice IS)
          come IS 16819:2018/ISO 12100:2010 (Sicurezza delle Macchine - Principi
          Generali per la Progettazione - Valutazione del Rischio e Riduzione
          del Rischio).
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Per gli elevatori di liquidi, la certificazione include:
        </div>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Portata e altezza di scarico</li>
          <li>Compatibilità dei materiali</li>
          <li>Efficienza energetica</li>
          <li>Sicurezza operativa</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* How to Get BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Come Ottenere la BIS Schema X per Pompe?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Identificazione dello Standard Applicabile: La citazione deve
          specificare il codice IS appropriato (ad esempio, IS 9079 per pompe
          sommerse).
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Test del Prodotto: Test di prestazioni e sicurezza obbligatori in
          laboratori accettati dalla BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ispezione di Fabbrica: Le autorità BIS ispezionano il sito di
          produzione per verificare l'implementazione delle procedure di
          controllo qualità.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Documentazione e Applicazione: Specifiche tecniche, rapporti di test e
          manuale di qualità devono accompagnare il modulo di domanda BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Rilascio del Certificato BIS per Pompe: I produttori, dopo
          l'approvazione, ricevono una licenza per applicare il marchio BIS
          sotto lo Schema X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Supervisione Continua: La BIS conduce audit di routine e ispezioni
          casuali dei prodotti per garantire la conformità continua.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Penalties Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Sanzioni per Non Conformità
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori che non riescono a ottenere la certificazione BIS entro
          il 1° settembre 2026 saranno soggetti a:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Divieto di vendita/importazione di pompe non certificate</li>
          <li>Sequestro di beni e multe.</li>
          <li>Squalifica da ordini governativi e PSU</li>
          <li>Danni a lungo termine alla reputazione in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-medium text-[#1e1e1e]">Conclusione:</span> La
          Certificazione BIS Schema X per Pompe e Elevatori di Liquidi con l'OTR
          2024 sarà implementata; una pietra miliare nella standardizzazione
          dell'Industria Indiana.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per coloro che hanno attività di produzione, importazione o
          esportazione, la registrazione BIS per pompe non è solo un processo di
          conformità legale da completare, ma anche una decisione strategica per
          garantire la dominanza della sicurezza sui rischi potenziali,
          costruire fiducia dei consumatori e entrare nel mercato indiano
          espanso.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificazione BIS per Pompe e Elevatori di Liquidi è un
          investimento a lungo termine per costruire le credenziali e il mercato
          del vostro Prodotto.
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
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
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
                alt="BIS logo"
                title="BIS logo"
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
