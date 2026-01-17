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

const BISCertificateForStorageUnitItalian = () => {
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

export default BISCertificateForStorageUnitItalian;

const MetaTags = () => {
  const title = "Certificato BIS per Unità di Stoccaggio | Licenza BIS IS 17634:2022";
  const ogTitle = "Certificazione BIS per Unità di Stoccaggio – Guida IS 17634:2022";
  const twitterTitle = "Licenza BIS per Unità di Stoccaggio | IS 17634:2022";
  const metaDescription =
    "Ottieni il Certificato BIS per Unità di Stoccaggio ai sensi di IS 17634:2022. Processo, documenti, test, costi e tempistiche per la Certificazione BIS in India.";
  const ogDescription =
    "Guida completa alla Certificazione BIS per Unità di Stoccaggio secondo IS 17634:2022. Scopri processo, costi, documenti, test e benefici della licenza BIS.";
  const twitterDescription =
    "Richiedi il Certificato BIS per Unità di Stoccaggio ai sensi di IS 17634:2022. Scopri il processo BIS, documenti, test, tariffe e tempistiche in India.";
  const metaKeywords =
    "Certificato BIS per Unità di Stoccaggio, Licenza BIS per Unità di Stoccaggio, IS 17634:2022, Certificazione BIS per Unità di Stoccaggio";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/unita-di-stoccaggio-is-17634";
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
                    Certificato BIS per Unità di Stoccaggio – IS 17634:2022
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
          Certificato BIS per Unità di Stoccaggio – Guida Completa alla Certificazione BIS IS 17634:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforStorageUnits.png"
            title="BIS License for Storage Units"
            alt="BIS Certificate for Storage Units - IS 17634:2022 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Unità di Stoccaggio è un requisito obbligatorio ai sensi
          dello Standard Indiano IS 17634:2022. Questo standard copre i requisiti essenziali
          di sicurezza, durata e prestazioni strutturali per tutti
          i tipi di mobili per stoccaggio utilizzati in case, uffici, scuole, stabilimenti commerciali
          e configurazioni industriali.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Le unità di stoccaggio includono:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Armadi</li>
          <li>Guardaroba</li>
          <li>Unitarie per scaffali</li>
          <li>Cassetti e cassettiere</li>
          <li>Armadi per archiviazione</li>
          <li>Unità di stoccaggio laterali</li>
          <li>Sistemi di stoccaggio modulari</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Poiché le unità di stoccaggio sono ampiamente utilizzate in spazi residenziali e commerciali,
          la loro stabilità strutturale e sicurezza sono estremamente importanti.
          Le unità di stoccaggio di scarsa qualità possono ribaltarsi, crollare o causare lesioni a causa
          di bordi taglienti, giunti deboli o costruzione instabile. Per garantire
          la sicurezza del cliente e la qualità del prodotto, la Certificazione BIS per Unità di Stoccaggio
          è resa obbligatoria in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa guida completa spiega IS 17634:2022, i requisiti di certificazione,
          il processo BIS, la documentazione, i test, le tariffe, le tempistiche,
          le sanzioni e i benefici.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS è una valutazione di conformità di terze parti rilasciata dal
          Bureau of Indian Standards, che garantisce che i prodotti siano conformi agli
          standard di sicurezza e qualità indiani.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significato del Certificato BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un Certificato BIS verifica che un prodotto:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rispetti gli Standard Indiani</li>
          <li>Abbia superato i test di laboratorio</li>
          <li>Abbia subito l'ispezione della fabbrica</li>
          <li>Segua il controllo qualità continuo</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I prodotti certificati portano il Marchio BIS (Marchio ISI).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quale Standard BIS si Applica alle Unità di Stoccaggio? (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo Standard BIS obbligatorio per le unità di stoccaggio è:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17634:2022</strong> – Unità di Stoccaggio: Requisiti di Sicurezza
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Questo standard copre tutti i tipi di mobili per stoccaggio. Definisce i
          requisiti di sicurezza, durata, capacità di carico e progettazione per garantire
          un uso sicuro in condizioni operative quotidiane.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Requisiti Chiave di IS 17634:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilità strutturale</li>
          <li>Prestazioni di carico</li>
          <li>Resistenza dei cassetti</li>
          <li>Resistenza al ribaltamento</li>
          <li>Qualità dei materiali</li>
          <li>Sicurezza dei bordi</li>
          <li>Finitura superficiale</li>
          <li>Durata sotto uso ripetuto</li>
          <li>Assenza di rischi di intrappolamento</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sia prodotte in India che importate, tutte le unità di stoccaggio devono
          sottoporsi alla Registrazione BIS per Unità di Stoccaggio prima della vendita.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS per Unità di Stoccaggio è Obbligatoria
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le unità di stoccaggio sono utilizzate ampiamente e spesso supportano carichi pesanti.
          Il cedimento strutturale può comportare lesioni gravi o danni alla proprietà.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Motivi per cui è Richiesta la Certificazione BIS
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Previene i rischi di ribaltamento</li>
          <li>Garantisce la capacità di carico</li>
          <li>Migliora la durata e la durata di vita</li>
          <li>Elimina bordi taglienti e finiture pericolose</li>
          <li>Garantisce la sicurezza dei bambini nell'uso residenziale</li>
          <li>Armonizza la qualità del prodotto</li>
          <li>Obbligatorio ai sensi degli Ordini di Controllo Qualità BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nessun produttore o importatore può vendere legalmente unità di stoccaggio senza una
          Licenza BIS per Unità di Stoccaggio.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Unità di Stoccaggio (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificazione segue lo Schema ISI (Schema di Valutazione della Conformità
          I) che coinvolge test del prodotto e ispezione della fabbrica.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 1 – Identificare l'Applicabilità
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Analizzare se il modello di mobile per stoccaggio rientra in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Armadi, scaffali, cassetti, unità guardaroba, unità per archiviazione o mobili simili.
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confermare lo standard corretto: IS 17634:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 2 – Presentazione Domanda BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Presentare domanda online tramite il Portale Online BIS Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">Inviare:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dettagli aziendali</li>
          <li>Informazioni sull'unità di produzione</li>
          <li>Classificazione del prodotto</li>
          <li>Nome del marchio</li>
          <li>Diagrammi del flusso di processo</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 3 – Pagamento Tariffe BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Include:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tariffa di domanda</li>
          <li>Tariffa di elaborazione</li>
          <li>Tariffa per test del prodotto</li>
          <li>Spese per ispezione della fabbrica</li>
          <li>Tariffa per marcatura</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 4 – Test del Prodotto (Requisiti IS 17634:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I campioni vengono testati in un laboratorio riconosciuto BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il laboratorio valuta:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilità</li>
          <li>Resistenza strutturale</li>
          <li>Capacità di carico</li>
          <li>Durata dei cassetti</li>
          <li>Resistenza degli scaffali</li>
          <li>Sicurezza di bordi e angoli</li>
          <li>Limiti di sostanze pericolose</li>
          <li>Prestazioni sotto uso ripetuto</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          I risultati dei test devono riflettere la piena conformità.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 5 – Ispezione della Fabbrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un funzionario BIS verifica:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Processo di produzione</li>
          <li>Sistema di controllo qualità</li>
          <li>Ispezioni delle materie prime</li>
          <li>Capacità di test interna</li>
          <li>Calibrazione degli strumenti</li>
          <li>Conformità con lo Schema di Test e Ispezione (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 6 – Rilascio Licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dopo una valutazione positiva, BIS rilascia:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato BIS</li>
          <li>Autorizzazione all'uso del Marchio ISI</li>
          <li>Numero CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 7 – Requisiti Post-Licenza
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Seguire i requisiti di marcatura</li>
          <li>Mantenere i sistemi di qualità</li>
          <li>Ispezioni di sorveglianza BIS</li>
          <li>Rinnovo della licenza ogni 1–2 anni</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ambito della Licenza BIS per Unità di Stoccaggio
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Questo standard copre i requisiti relativi alle
          prestazioni e sicurezza delle unità di stoccaggio, comprese le loro parti
          mobili e non mobili destinate all'uso domestico e per
          uso istituzionale come archiviazione di documenti o simili.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Questo standard si applica alle unità di stoccaggio completamente
          prodotte/fabbricate. Si applica anche alle
          unità pronte per il montaggio, in tal caso i requisiti di questo
          standard si applicano alle unità assemblate.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS delle Unità di Stoccaggio
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Di seguito è riportato l'elenco completo dei DOCUMENTI DI CERTIFICAZIONE BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Documenti di Produzione
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato di registrazione della fabbrica</li>
          <li>Piano di layout</li>
          <li>Diagramma di flusso del processo di produzione</li>
          <li>Elenco delle macchine</li>
          <li>Elenco delle apparecchiature di test</li>
          <li>Certificati di calibrazione</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Documenti Legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Documento di identità</li>
          <li>Prova di indirizzo</li>
          <li>Autorizzazione del marchio (se applicabile)</li>
          <li>Certificato di marchio (opzionale ma consigliato)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Documenti Tecnici
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Disegni del prodotto</li>
          <li>Diagrammi di assemblaggio</li>
          <li>Distinta materiali</li>
          <li>Rapporti di test interni</li>
          <li>Caratteristiche di sicurezza</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Documenti di Domanda BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Modulo di domanda</li>
          <li>Lettere di autorizzazione della fabbrica</li>
          <li>Lettera di richiesta test</li>
          <li>Moduli di dichiarazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avere una documentazione completa aiuta a evitare ritardi nell'elaborazione.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test per Unità di Stoccaggio (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Test rigorosi garantiscono che il prodotto soddisfi gli standard di sicurezza e durata.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Test Principali ai Sensi di IS 17634:2022
        </h3>

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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensione
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Generale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Flessione degli scaffali
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Resistenza dei supporti degli scaffali
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di carico sostenuto per cime e fondi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Resistenza dei supporti delle guide per abiti
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sganciamento delle guide per abiti
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test per struttura e telaio inferiore
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di caduta
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test per unità con rotelle o ruote
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Resistenza delle porte a cerniera
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di chiusura a scatto delle porte a cerniera
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di chiusura/apertura a scatto delle porte scorrevoli e frontali
                  a rullo orizzontali
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Resistenza delle ante incernierate inferiormente
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di caduta per ante incernierate superiormente
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di chiusura/apertura a scatto dei frontali a rullo verticali
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Resistenza degli elementi di estensione
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.4 / 7.3.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di chiusura/apertura a scatto degli elementi di estensione / Spostamento dei
                  fondi degli elementi di estensione
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di interblocco
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di resistenza per meccanismi di blocco e chiusura per
                  elementi di estensione
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Meccanismi di blocco e chiusura per porte, ante e
                  frontali a rullo
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test della Forza di Trazione
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test del Ciclo di Facilità del Carico Superiore
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.10
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Caduta – Dinamico – per Unità con Superfici di Seduta
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Parti mobili, supporti degli scaffali, cime e fondi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di carico sostenuto (sovraccarico)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di sganciamento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Unità Supportate dal Pavimento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Unità che possono essere regolate a un'altezza di 1 000 mm o meno
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Unità che possono essere regolate a un'altezza
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Apertura Porte, Elementi di Estensione e Ante, Tutte le Unità di Stoccaggio
                  Scaricate
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tutte le aree di stoccaggio scaricate e tutte le porte, elementi di estensione
                  e ante aperte
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tutte le aree di stoccaggio scaricate con carico di ribaltamento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tutte le aree di stoccaggio caricate con carico di ribaltamento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Porte, Elementi di Estensione e Ante Chiuse e Bloccate, Tutte le
                  Unità di Stoccaggio Caricate
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Stabilità della Forza Verticale per Unità di Stoccaggio
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Stabilità per Pedestali/Unità di Stoccaggio con Superfici di Seduta
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Stabilità Dinamica per Unità con Rotelle
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Resistenza per Attacchi a Parete
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          I test sono obbligatori e devono essere eseguiti solo in un laboratorio approvato BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni e Come Evitarle
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Classificazione Errata dell'Unità di Stoccaggio</strong>
            <br />
            Confermare sempre l'ambito ai sensi di IS 17634:2022.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Fabbrica Non Preparata</strong>
            <br />
            QMS, calibrazione e test interni devono essere pronti prima
            dell'ispezione.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Fallimento del Test del Prodotto</strong>
            <br />
            Garantire:
          </p>
          <ul className="list-disc ml-6 mb-2 space-y-1 text-gray-600 text-base font-geist">
            <li>Resistenza degli scaffali</li>
            <li>Durata dei cassetti</li>
            <li>Stabilità anti-ribaltamento</li>
          </ul>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Documenti Mancanti</strong>
            <br />
            Evitare ritardi preparando la documentazione in anticipo.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Disallineamento del Nome del Marchio</strong>
            <br />
            Deve corrispondere al marchio e all'etichetta.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefici della Certificazione BIS per Unità di Stoccaggio
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conformità legale obbligatoria</li>
          <li>Garanzia di sicurezza del cliente</li>
          <li>Maggiore credibilità sul mercato</li>
          <li>Idoneità per e-commerce e catene di vendita al dettaglio</li>
          <li>Riduzione del rischio di fallimento del prodotto</li>
          <li>Idoneità per gare d'appalto governative</li>
          <li>Differenziazione del marchio</li>
          <li>Maggiore fiducia dei consumatori</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanzioni per la Non Conformità
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          La vendita o l'importazione di unità di stoccaggio senza approvazione BIS può comportare:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Multe pesanti</li>
          <li>Sequestro del prodotto</li>
          <li>Divieto di produzione</li>
          <li>Persecuzione penale</li>
          <li>Blacklist del marchio</li>
          <li>Ritiro dal mercato</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La conformità è obbligatoria ai sensi delle regole BIS e degli Ordini di Controllo Qualità
          (QCO).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chi Ha Bisogno della Certificazione BIS per le Unità di Stoccaggio?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori indiani</li>
          <li>Produttori stranieri</li>
          <li>Importatori</li>
          <li>Commercianti (proprietari di marchi)</li>
          <li>Fornitori OEM e ODM</li>
          <li>Marchi di mobili al dettaglio e online</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni fabbrica necessita di una licenza BIS separata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché Sceglierci per la Consulenza sulla Certificazione BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Forniamo supporto completo end-to-end:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretazione dello standard (IS 17634:2022)</li>
          <li>Classificazione del prodotto</li>
          <li>Preparazione della documentazione</li>
          <li>Coordinamento con laboratori riconosciuti BIS</li>
          <li>Supporto per i test</li>
          <li>Presentazione sul portale BIS</li>
          <li>Guida all'ispezione della fabbrica</li>
          <li>Approvazione della licenza</li>
          <li>Rinnovo e sorveglianza</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La nostra competenza garantisce un processo di certificazione veloce, fluido e senza errori.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ottenere il Certificato BIS per Unità di Stoccaggio ai sensi di IS 17634:2022 è
          essenziale per garantire la sicurezza del prodotto, le prestazioni strutturali e
          la durata. È anche un requisito legale obbligatorio per vendere o
          importare mobili per stoccaggio in India. Con la documentazione adeguata,
          i test e la guida esperta, il processo di certificazione diventa
          senza problemi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il nostro team di consulenza BIS dedicato garantisce un'approvazione rapida, una
          documentazione accurata e supporto completo per la conformità per produttori e
          importatori.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Domande Frequenti — Certificato BIS per Unità di Stoccaggio (IS 17634:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La certificazione BIS è obbligatoria per le unità di stoccaggio in India?
              </strong>
              <br />
              Sì. La Certificazione BIS per Unità di Stoccaggio è obbligatoria secondo
              lo Standard Indiano IS 17634:2022 – Unità di Stoccaggio: Requisiti di Sicurezza.
              Questo standard è stato incluso in un Ordine di Controllo Qualità
              (QCO), il che significa che nessun produttore, importatore o
              venditore è legalmente autorizzato a vendere unità di stoccaggio nel mercato
              indiano senza approvazione BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Quali tipi di unità di stoccaggio sono coperti da IS 17634:2022?
              </strong>
              <br />
              IS 17634:2022 si applica a un'ampia gamma di mobili per stoccaggio utilizzati in
              spazi residenziali, commerciali e istituzionali.
              <br />
              Lo standard copre:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Armadi (in legno, metallo, modulari)</li>
              <li>Credenze e guardaroba</li>
              <li>Unitarie per scaffali</li>
              <li>Armadi per archiviazione</li>
              <li>Unitarie con cassetti e cassettiere</li>
              <li>Credenze e sistemi di stoccaggio modulari</li>
              <li>Unitarie di stoccaggio per ufficio</li>
              <li>Mobili per stoccaggio compatti</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Quali test vengono condotti per la Certificazione BIS delle unità di stoccaggio?
              </strong>
              <br />
              Le unità di stoccaggio subiscono diversi test obbligatori per valutare la loro
              durata, resistenza, sicurezza e prestazioni.
              <br />
              I test principali includono:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>
                Test di Stabilità: Garantisce che l'unità non si ribalti durante l'uso o
                l'estensione del cassetto.
              </li>
              <li>
                Test di Carico Statico: Misura la capacità di carico degli scaffali,
                cassetti e struttura principale.
              </li>
              <li>
                Test di Durata/Resistenza: Verifica le prestazioni di cassetti,
                porte e scaffali durante cicli di uso ripetuto.
              </li>
              <li>
                Test di Resistenza degli Scaffali: Valuta l'incurvamento o la flessione sotto carico.
              </li>
              <li>
                Test di Impatto: Garantisce la resistenza strutturale a impatti
                accidentali.
              </li>
              <li>
                Test di Resistenza al Ribaltamento: Verifica le prestazioni anti-ribaltamento quando
                i cassetti sono completamente carichi ed estesi.
              </li>
              <li>
                Test di Sicurezza dei Bordi e Finitura: Garantisce l'assenza di bordi taglienti o finiture
                pericolose.
              </li>
              <li>Test di Sicurezza dei Materiali: Conferma materiali non tossici e sicuri.</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Quanto tempo richiede il processo di certificazione BIS per le unità di stoccaggio?
              </strong>
              <br />
              La tempistica tipica della Certificazione BIS per le unità di stoccaggio è di 30–45
              giorni lavorativi, a seconda della preparazione del prodotto e della qualità della documentazione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. I produttori stranieri possono richiedere la Certificazione BIS per
                le unità di stoccaggio?
              </strong>
              <br />
              Sì. I produttori stranieri devono ottenere la certificazione BIS secondo lo
              Schema FMCS (Foreign Manufacturers Certification Scheme).
              <br />
              I requisiti principali includono:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Un rappresentante indiano locale (AIR)</li>
              <li>Test del prodotto in un laboratorio indiano approvato BIS</li>
              <li>Ispezione della fabbrica all'estero da parte di funzionari BIS</li>
              <li>Conformità con IS 17634:2022</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Cosa succede se il prodotto dell'unità di stoccaggio non supera i test BIS?
              </strong>
              <br />
              Se il campione non supera qualsiasi test obbligatorio:
            </p>
            <ol className="list-decimal ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Il produttore riceve un rapporto di fallimento.</li>
              <li>Devono apportare le modifiche necessarie al design/materiale.</li>
              <li>I campioni rivisti devono essere inviati per nuovi test.</li>
            </ol>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. L'ispezione della fabbrica è obbligatoria per la Certificazione BIS?
              </strong>
              <br />
              Sì. Un'ispezione della fabbrica è obbligatoria per tutte le certificazioni con marchio ISI,
              comprese le unità di stoccaggio.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. I commercianti o i proprietari di marchi possono richiedere la Certificazione BIS?
              </strong>
              <br />
              Sì, ma solo se:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Possiedono il marchio, e</li>
              <li>
                Hanno un accordo di produzione legalmente autorizzato con una
                fabbrica reale
              </li>
            </ul>
            <p className="text-gray-600 text-base font-geist mt-2">
              Le licenze BIS vengono rilasciate per fabbrica, non per azienda.
              <br />
              Pertanto, la sede di produzione effettiva deve sottoporsi a test
              e ispezione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Più modelli di unità di stoccaggio possono essere coperti da una licenza BIS?
              </strong>
              <br />
              Solo se:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>I modelli rientrano nello stesso standard</li>
              <li>Sono prodotti nella stessa fabbrica</li>
              <li>Condividono costruzione e materie prime simili</li>
              <li>Soddisfano gli stessi parametri di test</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. Quali requisiti di etichettatura devono essere seguiti dopo
                la certificazione?
              </strong>
              <br />
              Una volta approvato, il prodotto deve mostrare:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Marchio ISI (marchio di certificazione BIS)</li>
              <li>Numero dello standard (IS 17634:2022)</li>
              <li>Numero di licenza CML</li>
              <li>Nome e indirizzo del produttore</li>
              <li>Numero di lotto o seriale</li>
            </ul>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17634-2022-Sun-Certifications-India.pdf"
            title="BIS Certificate for Storage Unit - IS 17634:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadItalian />

        <FaqAuthorItalian questionNumber={3} />
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
