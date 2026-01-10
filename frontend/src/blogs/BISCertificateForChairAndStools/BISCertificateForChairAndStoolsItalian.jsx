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

const BISCertificateForChairAndStoolsItalian = () => {
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

export default BISCertificateForChairAndStoolsItalian;

const MetaTags = () => {
  const title =
    "Certificato BIS per Sedie e Sgabelli | IS 17632:2022 Licenza BIS";
  const ogTitle =
    "Certificazione BIS per Sedie e Sgabelli – Guida IS 17632:2022";
  const twitterTitle = "Licenza BIS per Sedie e Sgabelli | IS 17632:2022";
  const metaDescription =
    "Ottieni il Certificato BIS per sedie e sgabelli secondo IS 17632:2022. Processo, documenti, test, costi e tempistiche per la Certificazione BIS in India.";
  const ogDescription =
    "Guida completa alla Certificazione BIS per sedie e sgabelli secondo IS 17632:2022. Scopri processo, costi, documenti, test e vantaggi della licenza BIS.";
  const twitterDescription =
    "Richiedi il Certificato BIS per sedie e sgabelli secondo IS 17632:2022. Scopri il processo BIS, documenti, test, tariffe e tempistiche in India.";
  const metaKeywords =
    "Certificato BIS per Sedie e Sgabelli, Licenza BIS per Sedie e Sgabelli, IS 17632:2022, Certificazione BIS per Sedie e Sgabelli";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/sedie-e-sgabelli-is-17632";
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
                    <Link to="/">Home</Link>
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
                    Certificato BIS per Sedie e Sgabelli – IS 17632:2022
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
          Certificato BIS per Sedie e Sgabelli ad Uso Generale – Guida Completa
          a IS 17632:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="Licenza BIS per Sedie e Sgabelli"
            alt="Certificato BIS per Sedie e Sgabelli - Certificazione BIS IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Sedie e Sgabelli ad Uso Generale è un requisito
          obbligatorio secondo lo Standard Indiano IS 17632:2022. Questo
          standard specifica i requisiti di sicurezza, durata e prestazioni per
          sedie e sgabelli utilizzati in case, uffici, aree commerciali,
          istituti educativi, mense, ristoranti, hotel e spazi pubblici.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le sedie e gli sgabelli sono tra gli articoli di arredamento più
          utilizzati e sono costantemente sottoposti a carico, movimento e
          stress ripetitivo. Una sedia o uno sgabello strutturalmente debole può
          crollare improvvisamente, causando lesioni. Per prevenire tali rischi
          e garantire la sicurezza dei consumatori, il Bureau of Indian
          Standards (BIS) richiede che ogni produttore e importatore ottenga la
          Certificazione BIS per Sedie e Sgabelli prima di venderli in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa pagina fornisce una guida completa alla Certificazione BIS per
          sedie e sgabelli secondo IS 17632:2022, inclusi il processo di
          certificazione, i documenti richiesti, i requisiti di test, le
          tariffe, le sfide, le sanzioni e i benefici.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos&apos;è la Certificazione BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS è un sistema di conformità dei prodotti
          governato dal Bureau of Indian Standards, l&apos;autorità nazionale di
          standardizzazione dell&apos;India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significato del Certificato BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un Certificato BIS garantisce che un prodotto:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rispetti gli standard di sicurezza e qualità indiani</li>
          <li>Abbia superato i test di laboratorio approvati dal BIS</li>
          <li>Abbia subito un&apos;ispezione della fabbrica</li>
          <li>
            Protegga i consumatori da prodotti non sicuri o di qualità inferiore
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I prodotti certificati mostrano il Marchio ISI, dimostrando la
          conformità agli Standard Indiani.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standard Applicabile – IS 17632:2022 per Sedie e Sgabelli
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo Standard BIS per sedie e sgabelli è:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> – Sedie e Sgabelli ad Uso Generale:
          Requisiti di Sicurezza
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Questo standard copre tutte le sedie e gli sgabelli non specializzati
          utilizzati per scopi di seduta in case, uffici, ambienti commerciali,
          luoghi pubblici e ambienti istituzionali.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Prodotti Coperti da IS 17632:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sedie ad uso generale</li>
          <li>Sedie da pranzo</li>
          <li>Sedie per visitatori d&apos;ufficio</li>
          <li>Sedie da studio</li>
          <li>Sedie da mensa</li>
          <li>Sedie da ristorante</li>
          <li>Sedie da sala riunioni</li>
          <li>Sedie da area d&apos;attesa</li>
          <li>Sedie in legno</li>
          <li>Sedie in metallo</li>
          <li>Sedie in plastica (non specializzate)</li>
          <li>Sgabelli ad uso generale</li>
          <li>Sgabelli da bar</li>
          <li>Sgabelli da pranzo</li>
          <li>Sgabelli a gradino (entro criteri definiti)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Parametri Chiave di Sicurezza e Prestazioni
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022 valuta:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistenza strutturale</li>
          <li>Stabilità</li>
          <li>Durata sotto uso ripetuto</li>
          <li>Resistenza del sedile</li>
          <li>Prestazioni dello schienale</li>
          <li>Resistenza all&apos;impatto delle gambe</li>
          <li>Resistenza dei giunti</li>
          <li>Qualità della finitura superficiale</li>
          <li>Sicurezza di bordi e angoli</li>
          <li>Qualità del materiale</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tutte le sedie e gli sgabelli venduti in India devono rispettare
          questi parametri e ottenere una Licenza BIS per Sedie e Sgabelli.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS è Obbligatoria per Sedie e Sgabelli
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le sedie e gli sgabelli sopportano il peso umano e sono utilizzati
          frequentemente in tutti gli ambienti. Il cedimento strutturale può
          portare a:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sedie che crollano</li>
          <li>Rottura delle gambe</li>
          <li>Crepe del sedile</li>
          <li>Cedimento dello schienale</li>
          <li>Lesioni dovute a bordi taglienti</li>
          <li>Instabilità che porta a cadute</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vantaggi della Certificazione BIS
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Garantisce prodotti per seduta sicuri</li>
          <li>Previene incidenti e lesioni</li>
          <li>Migliora la durata del prodotto</li>
          <li>Previene importazioni di qualità inferiore</li>
          <li>Stabilisce una qualità di mercato uniforme</li>
          <li>Aumenta la fiducia dei clienti</li>
          <li>Obbligatorio per legge indiana (BIS QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza la Certificazione BIS, i produttori non possono legalmente
          vendere sedie o sgabelli in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Sedie e Sgabelli (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il processo BIS segue lo Schema di Certificazione del Marchio ISI,
          coinvolgendo test, ispezione e verifica dell&apos;applicazione.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 1 – Identifica Tipo di Prodotto e Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Conferma che la sedia/sgabello rientri in IS 17632:2022. Identifica le
          varianti di design e i materiali utilizzati.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 2 – Invia Domanda BIS Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La domanda viene presentata tramite il Portale Online BIS Manak,
          richiedendo:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dettagli del produttore</li>
          <li>Informazioni sulla fabbrica</li>
          <li>Specifiche del prodotto</li>
          <li>Dettagli del marchio/marchio registrato</li>
          <li>Flusso di lavoro del processo di produzione</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 3 – Paga le Tariffe di Certificazione BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le tariffe includono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tariffa di domanda</li>
          <li>Tariffa di elaborazione</li>
          <li>Costi per test su campioni</li>
          <li>Tariffe per ispezione della fabbrica</li>
          <li>Tariffe per marcatura</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 4 – Test del Prodotto secondo IS 17632:2022
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I test obbligatori vengono eseguiti in un laboratorio riconosciuto dal
          BIS.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          I Test Includono:
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test di Stabilità</li>
          <li>Test di Resistenza per il Sedile</li>
          <li>Test di Durata dello Schienale</li>
          <li>Test di Carico Gambe Avanti/Lato/Indietro</li>
          <li>Test di Impatto del Sedile</li>
          <li>Test di Caduta</li>
          <li>Test di Fatica</li>
          <li>Test di Finitura Superficiale</li>
          <li>Test di Bordo Tagliente</li>
          <li>Durata strutturale sotto cicli ripetuti</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          I risultati dei test devono mostrare piena conformità con IS
          17632:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 5 – Ispezione della Fabbrica da parte del BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un funzionario BIS visita la fabbrica per valutare:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Processo di produzione</li>
          <li>Ispezione delle materie prime</li>
          <li>Procedure di controllo qualità</li>
          <li>Capacità di test</li>
          <li>Calibrazione delle apparecchiature</li>
          <li>Volume di produzione</li>
          <li>Conformità con lo Schema BIS di Test e Ispezione (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 6 – Concessione della Licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Se i test e l&apos;ispezione hanno successo, il BIS rilascia:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato BIS (Licenza Marchio ISI)</li>
          <li>Numero CML</li>
          <li>Approvazione per apporre il Marchio ISI su sedie e sgabelli</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 7 – Obblighi Post-Licenza
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I produttori devono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Utilizzare il Marchio ISI secondo i requisiti di etichettatura BIS
          </li>
          <li>Mantenere registri di controllo qualità</li>
          <li>Sottoporsi a ispezioni di sorveglianza BIS regolari</li>
          <li>Rinnovare la licenza ogni 1–2 anni</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ambito della Licenza BIS per Sedie e Sgabelli
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questo standard copre i requisiti per sedie e sgabelli ad uso
          generale. Questo standard si applica a sedie e sgabelli ad uso
          generale completamente prodotti/fabbricati. Si applica anche alle
          unità pronte per l&apos;assemblaggio; in tal caso i requisiti di
          questo standard si applicheranno alle unità assemblate.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS di Sedie e Sgabelli
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti del Produttore
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licenza/registrazione della fabbrica</li>
          <li>Diagramma di flusso del processo di produzione</li>
          <li>Elenco delle macchine</li>
          <li>Elenco delle apparecchiature di test interne</li>
          <li>Certificati di calibrazione</li>
          <li>Layout della fabbrica e planimetria</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Tecnici
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Disegni di sedia/sgabello</li>
          <li>Dimensioni e specifiche</li>
          <li>Distinta dei materiali</li>
          <li>Descrizione delle caratteristiche di sicurezza</li>
          <li>Rapporti di test di qualità interni</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prova di identità e indirizzo</li>
          <li>Lettera di autorizzazione del marchio</li>
          <li>Certificato di marchio registrato (opzionale)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti della Domanda BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Modulo di domanda</li>
          <li>Modulo di richiesta test</li>
          <li>Moduli di dichiarazione</li>
          <li>Lettera di autorizzazione</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test per Sedie e Sgabelli (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 include test meccanici, strutturali e di sicurezza
          estensivi.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Test Obbligatori
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
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sbilanciamento in Avanti e Sbilanciamento Laterale per Sedie
                  senza Braccioli
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sbilanciamento all&apos;Indietro
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sbilanciamento Laterale per Sedie con Braccioli
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sgabelli/ Pouf (Tutte le Direzioni)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Resistenza
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Questi test garantiscono un uso quotidiano sicuro in condizioni reali.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni e Come Evitarle
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Sedia che fallisce i test di stabilità</strong>
            <br />
            Si verifica a causa di una distribuzione del peso impropria.
            <br />
            Soluzione: Migliora il design delle gambe, allarga l&apos;area della
            base.
          </li>
          <li>
            <strong>Giunti deboli che causano fallimenti nei test</strong>
            <br />
            Soluzione: Usa materiali rinforzati e connettori migliori.
          </li>
          <li>
            <strong>Apparecchiature di test interne inadeguate</strong>
            <br />
            Soluzione: Installa gli strumenti conformi BIS richiesti.
          </li>
          <li>
            <strong>Inconsistenze nella documentazione</strong>
            <br />
            Soluzione: Prepara i documenti sistematicamente prima di presentare
            la domanda.
          </li>
          <li>
            <strong>Varianti di prodotto non mappate correttamente</strong>
            <br />
            Soluzione: Raggruppa i prodotti in base alla struttura e ai
            parametri di test.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Sedie e Sgabelli
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Autorizzazione legale per vendere in India</li>
          <li>Sicurezza del prodotto migliorata</li>
          <li>Fiducia dei clienti aumentata</li>
          <li>Rischio di responsabilità del prodotto inferiore</li>
          <li>Richiesto per gli elenchi e-commerce</li>
          <li>Essenziale per le gare d&apos;appalto governative</li>
          <li>Credibilità del marchio superiore</li>
          <li>Vantaggio competitivo</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanzioni per Non Conformità
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vendere sedie o sgabelli senza certificazione BIS può portare a:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Multe monetarie pesanti</li>
          <li>Richiamo/sequestro del prodotto</li>
          <li>Cancellazione delle licenze della fabbrica</li>
          <li>Persecuzione penale</li>
          <li>Restrizioni all&apos;importazione</li>
          <li>Inserimento nella lista nera del mercato</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le sanzioni sono applicate ai sensi del BIS Act, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chi Ha Bisogno della Certificazione BIS per Sedie e Sgabelli?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Obbligatorio per:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori indiani</li>
          <li>Produttori stranieri che esportano in India</li>
          <li>Importatori</li>
          <li>Proprietari di marchi/commercianti</li>
          <li>Fornitori OEM/ODM</li>
          <li>Catene di vendita al dettaglio</li>
          <li>Venditori online</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni fabbrica richiede una Licenza BIS separata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Sedie e Sgabelli ad Uso Generale secondo IS
          17632:2022 è obbligatorio per garantire la sicurezza del prodotto, la
          stabilità strutturale e la durata. La certificazione BIS non solo
          aiuta i produttori a mantenere standard di alta qualità ma consente
          anche l&apos;accesso legale al mercato e aumenta la fiducia dei
          consumatori.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con l&apos;assistenza professionale, il processo di certificazione—dai
          test all&apos;ispezione e all&apos;approvazione—diventa fluido,
          prevedibile e pienamente conforme.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificato BIS per Sedie e Sgabelli
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La Certificazione BIS è obbligatoria per sedie e sgabelli?
              </strong>
              <br />
              Sì, secondo IS 17632:2022, tutte le sedie e gli sgabelli ad uso
              generale devono essere certificati BIS prima di essere venduti in
              India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Quali test sono richiesti?</strong>
              <br />
              Test di stabilità, resistenza, durata, impatto, fatica e sicurezza
              dei materiali.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Quanto tempo richiede la certificazione BIS?</strong>
              <br />
              Tipicamente 30–45 giorni.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Qual è il costo della certificazione?</strong>
              <br />
              Circa ₹60.000–₹1,30.000 a seconda dei test e dell&apos;ispezione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. I produttori stranieri possono richiedere?</strong>
              <br />
              Sì, secondo lo schema FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. La marcatura ISI è obbligatoria?</strong>
              <br />
              Sì, dopo che la licenza BIS è stata concessa.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Perché le sedie falliscono i test BIS?</strong>
              <br />
              Cause comuni includono gambe deboli, scarsa resistenza dei giunti
              e instabilità.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Più modelli possono essere coperti da una licenza?
              </strong>
              <br />
              Solo se soddisfano i criteri di somiglianza e conformità standard.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. È richiesta un&apos;ispezione della fabbrica?</strong>
              <br />
              Sì, è obbligatoria per la certificazione del marchio ISI.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Quali documenti sono necessari?</strong>
              <br />
              Licenza della fabbrica, specifiche tecniche, elenco macchine,
              piano QC, disegni del prodotto, ecc.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="Certificato BIS per Sedie e Sgabelli - IS 17632:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadItalian />

        <FaqAuthorItalian questionNumber={1} />
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
                Miglior Consulente Certificati dell&apos;India
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
                alt="Gestione Rifiuti di Plastica"
                title="Gestione Rifiuti di Plastica"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Gestione Rifiuti di Plastica
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
              MARCHIO ISI (BIS) per Produttori Indiani
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
