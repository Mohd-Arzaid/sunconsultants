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

const BISCertificateForTablesAndDesksUnitItalian = () => {
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

export default BISCertificateForTablesAndDesksUnitItalian;

const MetaTags = () => {
  const title =
    "Certificato BIS per Tavoli & Scrivanie | Licenza BIS IS 17633:2022";
  const ogTitle = "Certificazione BIS per Tavoli & Scrivanie – Guida IS 17633:2022";
  const twitterTitle = "Licenza BIS per Tavoli & Scrivanie | IS 17633:2022";
  const metaDescription =
    "Ottieni il Certificato BIS per Tavoli & Scrivanie ai sensi di IS 17633:2022. Processo, documenti, test, costi e tempistiche per la Certificazione BIS in India.";
  const ogDescription =
    "Guida completa alla Certificazione BIS per Tavoli & Scrivanie secondo IS 17633:2022. Scopri processo, costi, documenti, test e benefici della licenza BIS.";
  const twitterDescription =
    "Richiedi il Certificato BIS per Tavoli & Scrivanie ai sensi di IS 17633:2022. Scopri il processo BIS, documenti, test, tariffe e tempistiche in India.";
  const metaKeywords =
    "Certificato BIS per Tavoli & Scrivanie, Licenza BIS per Tavoli & Scrivanie, IS 17633:2022, Certificazione BIS per Tavoli & Scrivanie";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tavoli-e-scrivanie-is-17633";
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
                    Certificato BIS per Tavoli & Scrivanie – IS 17633:2022
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
          Certificato BIS per Tavoli e Scrivanie – Guida Completa alla Certificazione BIS IS 17633:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="Licenza BIS per Tavoli e Scrivanie"
            alt="Certificato BIS per Tavoli e Scrivanie - Certificazione BIS IS 17633:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Tavoli e Scrivanie è obbligatorio per tutti i
          produttori, importatori e venditori di tavoli e scrivanie in India.
          Secondo lo Standard Indiano IS 17633:2022 – Tavoli e Scrivanie: Requisiti di
          Sicurezza, questi articoli di arredamento devono essere testati e certificati dal
          Bureau of Indian Standards (BIS) prima di poter essere legalmente venduti
          nel mercato indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tavoli e scrivanie sono componenti essenziali di case, uffici, scuole,
          università, spazi commerciali, ambienti di ospitalità e
          luoghi di lavoro industriali. Poiché spesso supportano peso, impatti e
          uso continuo, la loro resistenza strutturale e sicurezza sono critiche.
          Per garantire la protezione dei consumatori e l&apos;affidabilità del prodotto, il BIS impone
          certificazione obbligatoria.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa guida completa spiega IS 17633:2022, il processo di registrazione BIS,
          test, documentazione richiesta, tariffe, tempistiche, sanzioni,
          e benefici per produttori e importatori.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos&apos;è la Certificazione BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS è un processo di conformità normativa amministrato dal
          Bureau of Indian Standards, l&apos;autorità nazionale degli standard dell&apos;India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significato del Certificato BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un Certificato BIS conferma che il prodotto soddisfa i requisiti di sicurezza, qualità,
          prestazioni e durata stabiliti dagli Standard Indiani.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Benefici della Certificazione BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Garantisce la sicurezza dei consumatori</li>
          <li>Supporta la produzione di alta qualità</li>
          <li>Riduce il rischio di guasto del prodotto</li>
          <li>Migliora l&apos;accettazione del mercato</li>
          <li>Richiesto legalmente ai sensi degli Ordini di Controllo Qualità BIS (QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Una volta approvato, il prodotto porta il Marchio BIS (Marchio ISI) insieme al
          numero di licenza.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quale Standard Indiano si Applica a Tavoli & Scrivanie? – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo standard BIS applicabile è:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – Tavoli e Scrivanie: Requisiti di
          Sicurezza
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Questo standard definisce i requisiti di prestazioni, sicurezza strutturale e durata
          per tutti i tipi di tavoli e scrivanie utilizzati in ambienti
          residenziali, commerciali, di ospitalità e istituzionali.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Prodotti Coperti
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Scrivanie da ufficio</li>
          <li>Scrivanie per computer</li>
          <li>Tavoli da studio</li>
          <li>Tavoli da pranzo</li>
          <li>Tavolini da caffè</li>
          <li>Scrivanie da lavoro</li>
          <li>Tavoli per formazione</li>
          <li>Scrivanie scolastiche/universitarie</li>
          <li>Tavoli per insegnanti</li>
          <li>Tavoli da postazione modulari</li>
          <li>Scrivanie</li>
          <li>Tavoli per riunioni/conferenze</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Parametri di Sicurezza Chiave ai Sensi di IS 17633:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilità strutturale</li>
          <li>Capacità di carico</li>
          <li>Resistenza agli urti</li>
          <li>Prestazioni di forza orizzontale/verticale</li>
          <li>Qualità della finitura superficiale</li>
          <li>Sicurezza dei bordi</li>
          <li>Durata sotto uso ripetitivo</li>
          <li>Sicurezza dei materiali</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni tavolo o scrivania venduto in India deve conformarsi a questi parametri
          attraverso la Registrazione BIS per Tavoli & Scrivanie.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS è Obbligatoria per Tavoli e Scrivanie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tavoli e scrivanie sono articoli di arredamento ad alto utilizzo presenti in case, uffici,
          scuole e aree pubbliche. I cedimenti strutturali possono causare incidenti
          come:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cedimento sotto peso</li>
          <li>Lesioni da bordi taglienti</li>
          <li>Instabilità durante l&apos;uso</li>
          <li>Rottura delle giunzioni</li>
          <li>Distacco della superficie</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Per evitare questi pericoli, la certificazione BIS garantisce:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Progettazione e costruzione sicure</li>
          <li>Conformità ai requisiti di carico strutturale</li>
          <li>Prestazioni durevoli</li>
          <li>Prevenzione di ribaltamento e crollo</li>
          <li>Selezione di materiali di alta qualità</li>
          <li>Standard di mercato uniformi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Vendere tavoli e scrivanie senza una Licenza BIS per Tavoli & Scrivanie è
          illegale in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Tavoli e Scrivanie (IS 17633:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il processo di certificazione BIS segue lo Schema ISI (Schema di Valutazione della
          Conformità–I), che include test del prodotto e ispezione
          della fabbrica.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 1 – Identificare Categoria Prodotto & Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confermare che il tavolo/scrivania rientra in IS 17633:2022. Identificare il numero
          di varianti e materiali.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 2 – Presentare Domanda BIS (Invio Online)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Compilare la domanda sul Portale Online BIS Manak con:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dettagli del produttore</li>
          <li>Indirizzo della fabbrica</li>
          <li>Specifiche del prodotto</li>
          <li>Dettagli del marchio</li>
          <li>Sistemi di controllo qualità</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 3 – Pagamento delle Tariffe di Certificazione BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Include:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tariffa di domanda</li>
          <li>Tariffa di elaborazione</li>
          <li>Spese per test del prodotto</li>
          <li>Tariffe per ispezione della fabbrica</li>
          <li>Tariffe per marcatura</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 4 – Test Campione in un Laboratorio Riconosciuto BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I prodotti devono sottoporsi a test completi come prescritto ai sensi di IS 17633:2022.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Test Eseguiti
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test di Stabilità</li>
          <li>Test di Resistenza (Carico Statico)</li>
          <li>Test di Durata (Carico Ripetitivo)</li>
          <li>Test di Impatto</li>
          <li>Misurazione della Deflessione</li>
          <li>Test di Sicurezza dei Bordi e della Superficie</li>
          <li>Test di Carico dello Spazio di Lavoro</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il laboratorio carica i rapporti di test direttamente al BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 5 – Ispezione Fabbrica BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un funzionario BIS visita la struttura di produzione per verificare:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sistema di gestione della qualità</li>
          <li>Capacità di test interna</li>
          <li>Controllo dei materiali grezzi</li>
          <li>Linea di produzione & macchinari</li>
          <li>Calibrazione degli strumenti</li>
          <li>Conformità con STI (Schema di Test & Ispezione)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 6 – Concessione della Licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Il BIS emette:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato BIS</li>
          <li>Approvazione Marchio ISI</li>
          <li>Numero di licenza CML unico</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dopo questo, il produttore può legalmente marcare e vendere tavoli/scrivanie in
          India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 7 – Conformità Post-Licenza
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I produttori devono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mantenere registri secondo STI</li>
          <li>Utilizzare correttamente la marcatura ISI</li>
          <li>Consentire ispezioni BIS periodiche</li>
          <li>Rinnovare la licenza ogni 1–2 anni</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ambito della Licenza BIS per Tavoli & Scrivanie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Questo standard copre i requisiti relativi a
          prestazioni e sicurezza, cioè resistenza, stabilità e durata
          di tavoli e scrivanie da utilizzare in posizioni sedute e/o in piedi,
          utilizzate da adulti.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Questo standard si applica a tavoli e scrivanie completamente prodotti/
          fabbricati. Si applica anche a unità pronte per il montaggio;
          in tal caso i requisiti di questo standard si applicano alle
          unità assemblate.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS di Tavoli & Scrivanie
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti di Produzione
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licenza della fabbrica</li>
          <li>Lista macchinari</li>
          <li>Lista attrezzature di test</li>
          <li>Certificati di calibrazione</li>
          <li>Layout della fabbrica</li>
          <li>Diagramma di flusso del processo</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Tecnici
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Disegni tavolo/scrivania</li>
          <li>Distinta materiali</li>
          <li>Specifiche del prodotto</li>
          <li>Rapporti di test qualità interni</li>
          <li>Foto/video del prodotto</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prova di identità del firmatario autorizzato</li>
          <li>Prova di indirizzo</li>
          <li>Lettera di autorizzazione del marchio</li>
          <li>Certificato di registrazione del marchio</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti della Domanda BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Modulo di domanda compilato</li>
          <li>Impegno del produttore</li>
          <li>Lettera di richiesta test</li>
          <li>Lettera di autorizzazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La documentazione completa garantisce approvazioni più rapide.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test ai Sensi di IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I test valutano resistenza, stabilità, durata e sicurezza.
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
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Progettazione e lavorazione
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Stabilità
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Carico dichiarato
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Per carichi pesanti occasionali
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Resistenza sotto forza statica orizzontale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Generale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Impatto Verticale per Piani Tavolo in Vetro
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Impatto Verticale per Tutti gli Altri Piani Tavolo
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Deflessione dei Piani Tavolo
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Caduta
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          I test devono essere condotti solo presso laboratori approvati BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni & Come Evitarle
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Prodotto che fallisce i test di carico o durata</strong>
            <br />
            Soluzione: Rafforzare le giunzioni, utilizzare materiali conformi BIS, aggiungere
            rinforzi.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Documentazione incompleta</strong>
            <br />
            Soluzione: Preparare tutti i documenti legali, tecnici e di produzione
            in anticipo.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Fabbrica priva di attrezzature di test adeguate</strong>
            <br />
            Soluzione: Installare gli strumenti richiesti e mantenere la calibrazione secondo
            le linee guida BIS.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Etichettatura errata</strong>
            <br />
            Soluzione: Assicurarsi che la marcatura ISI segua esattamente le regole BIS.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Classificazione errata dei modelli di prodotto</strong>
            <br />
            Soluzione: Ottenere una guida professionale per categorizzare le varianti
            correttamente.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefici della Certificazione BIS per Tavoli & Scrivanie
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Autorizzazione legale per vendere in India</li>
          <li>Aumento della fiducia dei clienti</li>
          <li>Migliore durata del prodotto</li>
          <li>Accesso a grandi rivenditori & piattaforme e-commerce</li>
          <li>Rischio di responsabilità del prodotto inferiore</li>
          <li>Credibilità del marchio superiore</li>
          <li>Conformità con QCO governativi</li>
          <li>Vantaggio competitivo sul mercato</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanzioni per Non Conformità
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vendere o distribuire tavoli/scrivanie senza certificazione BIS può
          comportare:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sequestro del prodotto</li>
          <li>Multe pesanti</li>
          <li>Persecuzione penale</li>
          <li>Divieto di importazione</li>
          <li>Ordini di chiusura dell&apos;attività</li>
          <li>Cancellazione della licenza</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Bureau of Indian Standards Act, 2016 applica sanzioni rigorose.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chi Ha Bisogno della Certificazione BIS per Tavoli & Scrivanie?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Questa certificazione è obbligatoria per:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori indiani</li>
          <li>Produttori stranieri</li>
          <li>Importatori</li>
          <li>Commercianti/proprietari di marchi</li>
          <li>Fornitori OEM/ODM</li>
          <li>Distributori di mobili</li>
          <li>Venditori e-commerce</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni fabbrica deve ottenere una Licenza BIS separata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché Sceglierci per la Consulenza sulla Certificazione BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Forniamo assistenza end-to-end:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretazione standard (IS 17633:2022)</li>
          <li>Classificazione prodotto</li>
          <li>Redazione documentazione</li>
          <li>Coordinamento test</li>
          <li>Presentazione portale BIS</li>
          <li>Supporto ispezione fabbrica</li>
          <li>Follow-up continuo con BIS</li>
          <li>Approvazione licenza</li>
          <li>Rinnovo e gestione conformità</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La nostra competenza garantisce una certificazione veloce, senza problemi e senza errori.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Tavoli e Scrivanie ai sensi di IS 17633:2022 è un
          requisito di conformità obbligatorio che garantisce sicurezza del prodotto,
          prestazioni, durata e conformità agli standard nazionali.
          Produttori e importatori devono sottoporsi a test del prodotto, ispezione della fabbrica
          e soddisfare tutte le regole di documentazione e etichettatura BIS per
          ottenere il Marchio ISI.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con l&apos;assistenza di esperti, l&apos;intero processo di certificazione diventa
          fluido, veloce e pienamente conforme alle normative BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Domande Frequenti – Certificato BIS per Tavoli & Scrivanie (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La certificazione BIS è obbligatoria per tavoli e scrivanie?
              </strong>
              <br />
              Sì. Secondo IS 17633:2022, tutti i tavoli e scrivanie devono essere
              certificati BIS prima di essere venduti in India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Quali test sono richiesti per la certificazione?</strong>
              <br />
              I test obbligatori includono test di stabilità, resistenza, durata,
              deflessione, impatto e sicurezza superficiale.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Qual è il costo della certificazione BIS?</strong>
              <br />
              Il costo varia tra ₹65.000 – ₹1.30.000, a seconda dei fattori di test
              e ispezione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. I produttori stranieri hanno bisogno della Certificazione BIS?
              </strong>
              <br />
              Sì, attraverso lo schema FMCS, che include ispezioni della fabbrica all&apos;estero
              da parte del BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Una licenza può coprire più modelli di tavolo/scrivania?
              </strong>
              <br />
              Sì, ma solo se i modelli sono simili nella costruzione e nei parametri di test.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Quanto tempo richiede il processo BIS?</strong>
              <br />
              Circa 30–45 giorni.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Il test è obbligatorio in un laboratorio riconosciuto BIS?</strong>
              <br />
              Sì, solo i laboratori approvati BIS possono condurre i test.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Cosa succede se il prodotto fallisce?</strong>
              <br />
              Deve essere riprogettato e ripresentato per i test.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. La marcatura ISI è obbligatoria dopo la certificazione?</strong>
              <br />
              Sì, il Marchio ISI è richiesto sul prodotto e sull&apos;imballaggio.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Quali documenti sono necessari?</strong>
              <br />
              Disegni tecnici, BOM, documenti della fabbrica, rapporti di test, piano QC,
              e documenti legali.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="Certificato BIS per Tavoli & Scrivanie - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadItalian />

        <FaqAuthorItalian questionNumber={2} />
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
                Il Miglior Consulente per Certificati dell&apos;India
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
                alt="Logo BIS"
                title="Logo BIS"
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
                alt="Logo CDSCO"
                title="Logo CDSCO"
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
                alt="Logo BISCRS"
                title="Logo BISCRS"
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
                alt="Gestione dei Rifiuti di Plastica"
                title="Gestione dei Rifiuti di Plastica"
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
                alt="Logo Certificato EPR"
                title="Logo Certificato EPR"
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
                alt="Logo LMPC"
                title="Logo LMPC"
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
                alt="Logo BIS"
                title="Logo BIS"
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
                alt="Logo Marchio ISI"
                title="Logo Marchio ISI"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Marchio ISI (BIS) per Produttori Indiani
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
