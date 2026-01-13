import FaqAuthorItalian from "@/components/common/FaqAuthor/FaqAuthorItalian";
import ManyUsersAlsoReadItalian from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadItalian";
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterItalian from "@/components/manual/Footer/FooterItalian";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForFlashlightItalian = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default BISCertificateForFlashlightItalian;

const MetaTags = () => {
  const title = "Certificato BIS per Torcia | IS 2083:2024 Licenza BIS";
  const ogTitle = "Certificazione BIS per Torcia – Guida IS 2083:2024";
  const twitterTitle = "Licenza BIS per Torcia | IS 2083:2024";
  const metaDescription =
    "Ottieni il Certificato BIS per Torcia secondo IS 2083:2024. Processo, documenti, test, costi e tempistiche per la Certificazione BIS in India.";
  const ogDescription =
    "Guida completa alla Certificazione BIS per Torcia secondo IS 2083:2024. Scopri processo, costi, documenti, test e vantaggi della licenza BIS.";
  const twitterDescription =
    "Richiedi il Certificato BIS per Torcia secondo IS 2083:2024. Scopri il processo BIS, documenti, test, tariffe e tempistiche in India.";
  const metaKeywords =
    "Certificato BIS per Torcia, Licenza BIS per Torcia, IS 2083:2024, Certificazione BIS per Torcia";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/torcia-is-2083";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Responsabile delle Operazioni presso Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Casa</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Blog Recenti</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificato BIS per Torcia – IS 2083:2024
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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificato BIS per Torcia secondo IS 2083:2024 – Guida Completa alla
          Conformità
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="Licenza BIS per Torcia"
            alt="Certificato BIS per Torcia - Certificazione BIS IS 2083:2024"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le torce (comunemente chiamate lampade tascabili) sono dispositivi di
          illuminazione portatili essenziali utilizzati in case, industrie,
          servizi di emergenza, operazioni di sicurezza, attività
          all&apos;aperto e gestione dei disastri. Poiché le torce sono prodotti
          elettrici che coinvolgono batterie, circuiti, sorgenti luminose e
          involucri, la conformità alla qualità e alla sicurezza è fondamentale.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per regolare la qualità del prodotto, le prestazioni e la sicurezza
          dei consumatori, il Bureau of Indian Standards (BIS) ha notificato IS
          2083:2024 – Torcia: Specifica, rendendo obbligatoria la Certificazione
          BIS per le torce vendute, prodotte o importate in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa pagina fornisce una spiegazione completa e originale della
          Certificazione BIS per le torce, coprendo lo standard applicabile, il
          processo di certificazione, i requisiti di test, la documentazione, le
          tariffe, le tempistiche, le sanzioni e le responsabilità di
          conformità.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos&apos;è la Certificazione BIS e Perché si Applica alle Torce
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Bureau of Indian Standards (BIS) è l&apos;autorità nazionale degli
          standard dell&apos;India responsabile di garantire che i prodotti
          venduti nel mercato indiano soddisfino i parametri di sicurezza,
          qualità e prestazioni prescritti.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significato della Certificazione BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un Certificato BIS conferma che una torcia:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conforma allo Standard Indiano IS 2083:2024</li>
          <li>Ha superato tutti i test di laboratorio obbligatori</li>
          <li>Soddisfa i requisiti elettrici, meccanici e di prestazioni</li>
          <li>È sicura per l&apos;uso del consumatore</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Una volta approvata, il produttore è autorizzato ad apporre il Marchio
          ISI, che indica la conformità agli Standard Indiani.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standard Indiano Applicabile – IS 2083:2024 (Torcia: Specifica)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – Torcia: Specifica
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 2083:2024 definisce i requisiti di costruzione, prestazioni,
          sicurezza e test per le torce portatili utilizzate per
          l&apos;illuminazione generale.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ambito di Applicazione di IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Lo standard copre:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Torce portatili (lampade tascabili)</li>
          <li>Torce alimentate a batteria</li>
          <li>Torce ricaricabili</li>
          <li>Torce LED</li>
          <li>Torce di emergenza e utilità</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aree Chiave Coperte dallo Standard
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sicurezza elettrica</li>
          <li>Prestazioni luminose</li>
          <li>Resistenza meccanica</li>
          <li>Compatibilità della batteria</li>
          <li>Durata dell&apos;interruttore</li>
          <li>Protezione contro il surriscaldamento</li>
          <li>Resistenza all&apos;usura normale</li>
          <li>Requisiti di marcatura ed etichettatura</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Qualsiasi torcia che rientra in questo ambito deve ottenere una
          Licenza BIS per Torcia prima di entrare nel mercato indiano.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS è Obbligatoria per le Torce
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le torce sono ampiamente utilizzate da consumatori di tutte le fasce
          d&apos;età e in situazioni critiche come emergenze, interruzioni di
          corrente e operazioni industriali. Le torce di qualità inferiore
          possono causare:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cortocircuiti elettrici</li>
          <li>Perdite o esplosioni della batteria</li>
          <li>Sovraccarico termico</li>
          <li>Rischi di incendio</li>
          <li>Prestazioni di illuminazione scarse</li>
          <li>Guasto prematuro</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          La Certificazione BIS Garantisce
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sicurezza elettrica e dell&apos;utente</li>
          <li>Output luminoso consistente</li>
          <li>Costruzione durevole</li>
          <li>Funzionamento sicuro della batteria</li>
          <li>Conformità ai requisiti normativi indiani</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La vendita di torce non certificate è una violazione legale ai sensi
          del BIS Act, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ambito di Applicazione della Licenza BIS per Torcia
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Questo standard specifica i requisiti e i test
          per le torce alimentate da batterie primarie sostituibili e batterie
          secondarie sostituibili/integrate con una tensione massima di 48 V
          d.c.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Questo standard è applicabile a torce
          pre-focalizzate e a tipo di messa a fuoco con lampadina a
          incandescenza e modulo LED come sorgente luminosa.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> I seguenti non sono coperti dall&apos;ambito di
          applicazione di questo standard:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Lampade portatili collegate con cavo e spina che rientrano
            nell&apos;ambito di IS 10322 (Parte 5/Sez 6);
          </li>
          <li>
            Illuminazione di emergenza che rientra nell&apos;ambito di IS 10322
            (Parte 5/Sez 8); e
          </li>
          <li>Torce destinate a luoghi pericolosi.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Torce (IS 2083:2024)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il processo di certificazione BIS per le torce viene condotto secondo
          lo Schema di Certificazione Marchio ISI (Schema-I) e coinvolge diverse
          fasi.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 1 – Identificazione del Prodotto e Mappatura dello Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il produttore deve confermare che il prodotto si qualifica come torcia
          secondo IS 2083:2024 e identificare:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tipo di torcia</li>
          <li>Fonte di alimentazione (batteria/ricaricabile)</li>
          <li>Sorgente luminosa (LED, lampadina, ecc.)</li>
          <li>Varianti e modelli</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 2 – Domanda BIS Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La domanda viene inviata tramite il Portale Online BIS Manak, insieme
          a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dettagli del produttore</li>
          <li>Indirizzo della fabbrica</li>
          <li>Descrizione del prodotto</li>
          <li>Dettagli del marchio/marchio commerciale</li>
          <li>Informazioni sul processo di produzione</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 3 – Pagamento delle Tariffe BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le tariffe applicabili includono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tariffa di domanda</li>
          <li>Spese di elaborazione</li>
          <li>Tariffe per test del prodotto</li>
          <li>Spese per ispezione della fabbrica</li>
          <li>Tariffa di marcatura</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 4 – Test del Prodotto secondo IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I campioni vengono testati in un laboratorio riconosciuto BIS.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Test Obbligatori per le Torce
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test dell&apos;intensità luminosa</li>
          <li>Test della stabilità dell&apos;output luminoso</li>
          <li>Test della resistenza della batteria</li>
          <li>Test del funzionamento dell&apos;interruttore</li>
          <li>Resistenza meccanica (test di caduta)</li>
          <li>Test della resistenza di isolamento</li>
          <li>Test dell&apos;aumento di temperatura</li>
          <li>Test di sicurezza elettrica</li>
          <li>Verifica della marcatura e dell&apos;etichettatura</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I rapporti di test vengono inviati direttamente al BIS dal
          laboratorio.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 5 – Ispezione della Fabbrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un funzionario BIS conduce un&apos;ispezione in loco per verificare:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Configurazione della produzione</li>
          <li>Sistema di controllo qualità</li>
          <li>Ispezione dei materiali in entrata</li>
          <li>Controlli in corso</li>
          <li>Test del prodotto finito</li>
          <li>Calibrazione degli strumenti di test</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          La conformità allo Schema di Test e Ispezione (STI) è obbligatoria.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 6 – Concessione della Licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dopo test e ispezione riusciti, il BIS emette:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato BIS</li>
          <li>Approvazione del Marchio ISI</li>
          <li>Numero CML (Certificate of Manufacturing Licence)</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il produttore può ora produrre e vendere legalmente torce in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 7 – Conformità Post-Certificazione
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dopo la certificazione, i produttori devono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Utilizzare correttamente il Marchio ISI su prodotto e imballaggio
          </li>
          <li>Mantenere registri di qualità per lotto</li>
          <li>Consentire ispezioni di sorveglianza BIS</li>
          <li>Rinnovare periodicamente la licenza</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS delle Torce
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti di Produzione
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registrazione/licenza della fabbrica</li>
          <li>Diagramma di flusso del processo di produzione</li>
          <li>Elenco delle macchine</li>
          <li>Elenco delle apparecchiature di test interne</li>
          <li>Certificati di calibrazione</li>
          <li>Layout della fabbrica</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Tecnici
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Scheda di specifica del prodotto</li>
          <li>Diagrammi dei circuiti</li>
          <li>Specifiche della batteria</li>
          <li>Distinta base materiali</li>
          <li>Rapporti di test interni</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prova di identità del firmatario autorizzato</li>
          <li>Prova di indirizzo</li>
          <li>Lettera di autorizzazione del marchio</li>
          <li>Certificato di marchio (se applicabile)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Specifici BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Modulo di domanda BIS</li>
          <li>Impegni e dichiarazioni</li>
          <li>Lettera di richiesta test</li>
          <li>Grafica dell&apos;etichetta (formato di marcatura ISI)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test secondo IS 2083:2024 (Dettagliato)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le torce devono sottoporsi a test rigorosi per garantire sicurezza e
          prestazioni.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Solo i prodotti che superano tutti i test obbligatori si qualificano
          per l&apos;approvazione BIS.
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clausola
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requisito
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test per la Finitura
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Controllo delle dimensioni
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Controllo delle marcature
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test funzionale per l&apos;interruttore
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test della resistenza di isolamento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test della distribuzione della luce
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Corrente del circuito della torcia LED
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test per la corrente di carica nelle torce alimentate a
                  batteria ricaricabile integrata
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni nella Certificazione BIS per le Torce
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fallimento nel test dell&apos;aumento di temperatura</li>
          <li>Output luminoso inconsistente</li>
          <li>Scarsa durata dell&apos;interruttore</li>
          <li>Problemi di compatibilità della batteria</li>
          <li>Formato dell&apos;etichetta ISI errato</li>
          <li>Documentazione incompleta</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I test preliminari e la guida esperta riducono significativamente i
          rischi di rifiuto.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per i Produttori di Torce
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Autorizzazione legale a vendere in India</li>
          <li>Maggiore fiducia dei consumatori</li>
          <li>Affidabilità del prodotto migliorata</li>
          <li>Accettazione su piattaforme e-commerce</li>
          <li>Idoneità per gli appalti governativi</li>
          <li>Responsabilità e richiami ridotti</li>
          <li>Credibilità del marchio forte</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanzioni per la Vendita di Torce Senza Certificazione BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          La non conformità può comportare:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sequestro del prodotto</li>
          <li>Pesanti sanzioni monetarie</li>
          <li>Divieti di importazione</li>
          <li>Chiusure della produzione</li>
          <li>Persecuzione penale ai sensi del BIS Act</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chi Ha Bisogno della Certificazione BIS per le Torce?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori indiani</li>
          <li>Produttori stranieri che esportano in India</li>
          <li>Importatori</li>
          <li>Proprietari di marchi</li>
          <li>Fornitori OEM/ODM</li>
          <li>Venditori online e distributori</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni unità di produzione richiede una licenza BIS separata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Torcia secondo IS 2083:2024 è un requisito
          normativo obbligatorio che garantisce sicurezza, prestazioni e
          affidabilità dei prodotti di illuminazione portatili in India. La
          conformità non solo protegge i consumatori ma rafforza anche la
          credibilità del marchio e l&apos;accesso al mercato. Con una guida
          professionale, produttori e importatori possono ottenere la
          certificazione BIS in modo fluido ed efficiente.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificato BIS per Torcia (IS 2083:2024)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La Certificazione BIS è obbligatoria per le torce in India?
              </strong>
              <br />
              Sì. Le torce coperte da IS 2083:2024 devono essere certificate
              BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Quale standard si applica alle torce?</strong>
              <br />
              IS 2083:2024 – Torcia: Specifica.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Quanto tempo richiede il processo BIS?</strong>
              <br />
              Circa 30–45 giorni lavorativi per i Produttori Indiani e circa 120
              giorni per i Produttori Stranieri.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. I produttori stranieri possono richiedere la certificazione
                BIS?
              </strong>
              <br />
              Sì, attraverso lo schema FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. La marcatura ISI è obbligatoria?</strong>
              <br />
              Sì, il Marchio ISI deve essere visualizzato sulle torce
              certificate.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Cosa succede se una torcia fallisce i test?</strong>
              <br />
              Il prodotto deve essere corretto e ritestato.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Anche le torce ricaricabili sono coperte?</strong>
              <br />
              Sì, se rientrano nell&apos;ambito di IS 2083:2024.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Quanto tempo è valida la licenza BIS?</strong>
              <br />
              1–2 anni, rinnovabile.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Più modelli possono essere coperti da una licenza?
              </strong>
              <br />
              Sì, se soddisfano i criteri di somiglianza.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-2083-2024-Sun-Certifications-India.pdf"
            title="BIS Certificate for Flashlight - IS 2083:2024 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadItalian />
        <FaqAuthorItalian questionNumber={4} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
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
                src="/services-images/BIS.jpg"
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
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
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
                src="/services-images/BISCRS.jpg"
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
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Gestione dei Rifiuti di Plastica
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certificazioni Certificato EPR
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certificazioni Certificato LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
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
                src="/services-images/ISIMark.jpg"
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
