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

const BISCertificateForWeldedPipesAndTubesItalian   = () => {
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

export default BISCertificateForWeldedPipesAndTubesItalian;

const MetaTags = () => {
  const title =
    "Certificato BIS per Tubi e Tubi Saldati | Licenza BIS IS 17876:2022";
  const ogTitle =
    "Certificazione BIS per Tubi e Tubi Saldati – Guida IS 17876:2022";
  const twitterTitle =
    "Licenza BIS per Tubi e Tubi Saldati | IS 17876:2022";
  const metaDescription =
    "Ottieni il Certificato BIS per Tubi e Tubi Saldati sotto IS 17876:2022. Processo, documenti, test, costi e tempistiche per la Certificazione BIS in India.";
  const ogDescription =
    "Guida completa alla Certificazione BIS per Tubi e Tubi Saldati secondo IS 17876:2022. Conosci processo, costi, documenti, test e benefici della licenza BIS.";
  const twitterDescription =
    "Richiedi il Certificato BIS per Tubi e Tubi Saldati sotto IS 17876:2022. Scopri il processo BIS, documenti, test, tariffe e tempistiche in India.";
  const metaKeywords =
    "Certificato BIS per Tubi e Tubi Saldati, Licenza BIS per Tubi e Tubi Saldati, IS 17876:2022, Certificazione BIS per Tubi e Tubi Saldati";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tubi-e-tubi-saldati-is-17876";
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
                    Certificato BIS per Tubi e Tubi Saldati – IS 17876:2022
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
          Certificato BIS per Tubi e Tubi Saldati in Acciaio Inossidabile sotto IS
          17876:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="Licenza BIS per Tubi e Tubi Saldati"
            alt="Certificato BIS per Tubi e Tubi Saldati - Certificazione BIS IS 17876:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          I tubi e i tubi saldati in acciaio inossidabile sono ampiamente utilizzati
          in settori come l&apos;edilizia, la lavorazione chimica, alimenti e bevande,
          distribuzione dell&apos;acqua, applicazioni strutturali e ingegneria generale.
          Poiché questi tubi trasportano fluidi, gas e, in alcuni casi, sostanze chimiche
          corrosive, la loro resistenza, resistenza alla corrosione e l&apos;integrità
          della produzione devono essere verificate prima che entrino sul mercato.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per regolamentare la qualità e garantire la sicurezza pubblica e industriale,
          il Governo dell&apos;India ha reso obbligatoria la Certificazione BIS per i tubi
          e i tubi saldati in acciaio inossidabile sotto IS 17876:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa guida completa spiega il processo completo di approvazione BIS,
          documentazione, requisiti di test, costi, tempistiche, obblighi del produttore,
          benefici e regole di conformità — scritta in un formato fresco e unico,
          garantendo zero duplicazione con contenuti precedenti.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos&apos;è la Certificazione BIS per Tubi e Tubi Saldati in Acciaio Inossidabile?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Bureau of Indian Standards (BIS) regola la qualità dei prodotti in
          India attraverso vari schemi di certificazione. Un prodotto che rientra
          in un Ordine di Controllo Qualità (QCO) obbligatorio deve ottenere una
          Licenza BIS prima di essere fabbricato, importato, immagazzinato, venduto o
          distribuito.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cosa Garantisce la Certificazione BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un certificato BIS conferma che i tubi/tubi saldati in acciaio inossidabile:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rispettano l&apos;accuratezza dimensionale</li>
          <li>Possiedono la resistenza meccanica richiesta</li>
          <li>Mostrano resistenza alla corrosione</li>
          <li>Sono fabbricati utilizzando gradi approvati di acciaio inossidabile</li>
          <li>Conformi alle condizioni di test indiane</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Una volta certificati, i prodotti devono portare il Marchio ISI insieme al
          numero di licenza (CML).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standard BIS per Tubi e Tubi Saldati in Acciaio Inossidabile – IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo standard applicabile è:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – Tubi e Tubi Saldati in Acciaio
          Inossidabile per Servizio Generale
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Questo standard delinea:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Composizione chimica</li>
          <li>Requisiti delle proprietà meccaniche</li>
          <li>Tolleranze di fabbricazione</li>
          <li>Specifiche dimensionali</li>
          <li>Linee guida per superficie e finitura</li>
          <li>Test idrostatici e non distruttivi</li>
          <li>Criteri di prestazione di sicurezza</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questi tubi sono utilizzati per applicazioni di servizio generale, il che significa
          che devono soddisfare un&apos;ampia gamma di ambienti operativi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS è Obbligatoria per i Prodotti IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I tubi saldati in acciaio inossidabile sono ampiamente utilizzati in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Condutture idriche</li>
          <li>Trasporto chimico</li>
          <li>Impianti alimentari e farmaceutici</li>
          <li>Ingegneria strutturale</li>
          <li>Sistemi di scarico e ventilazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Se non fabbricati correttamente, questi tubi possono portare a:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Guasti da perdite</li>
          <li>Scoppio sotto pressione</li>
          <li>Corrosione e contaminazione</li>
          <li>Instabilità strutturale</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per prevenire l&apos;ingresso di materiali di qualità inferiore nella catena di
          approvvigionamento, il BIS richiede a ogni produttore — nazionale o straniero —
          di ottenere la Licenza BIS per Tubi e Tubi Saldati in Acciaio Inossidabile.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La procedura di certificazione comporta test di laboratorio rigorosi e
          ispezione.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 1 – Identificare Categoria e Grado del Prodotto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Valutare il/i grado/i specifico/i di acciaio inossidabile in produzione
          e confermare che rientrano in IS 17876:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 2 – Inviare Domanda Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I produttori devono fare domanda tramite il Portale BIS Manak Online,
          inviando:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dettagli della fabbrica</li>
          <li>Capacità di produzione</li>
          <li>Diagramma del flusso di processo</li>
          <li>Fonti di materie prime</li>
          <li>Documentazione di garanzia qualità</li>
          <li>Dettagli del marchio e del marchio registrato</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 3 – Pagare le Tariffe BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I pagamenti includono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Spese di domanda</li>
          <li>Spese di elaborazione</li>
          <li>Spese di test</li>
          <li>Spese di ispezione della fabbrica</li>
          <li>Spese di marcatura</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 4 – Ispezione della Fabbrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I funzionari BIS ispezionano:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sequenza di produzione</li>
          <li>Stoccaggio materie prime</li>
          <li>Macchinari per saldatura</li>
          <li>Processi di ricottura/trattamento termico</li>
          <li>Documentazione qualità</li>
          <li>Infrastruttura di test</li>
          <li>Registri di calibrazione</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Verificano la conformità con lo Schema di Test e Ispezione (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 5 – Concessione della Licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Se tutti i parametri soddisfano i requisiti BIS, il produttore riceve:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato BIS</li>
          <li>Autorizzazione Marchio ISI</li>
          <li>Un numero di licenza CML unico</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 6 – Obblighi Post-Licenza
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I titolari di licenza devono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mantenere test di qualità interni continui</li>
          <li>Utilizzare correttamente il Marchio ISI</li>
          <li>Cooperare durante le ispezioni di sorveglianza BIS periodiche</li>
          <li>Rinnovare la licenza in tempo</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ambito della Licenza BIS per Tubi e Tubi Saldati in Acciaio Inossidabile
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Questo standard copre i requisiti per i tubi e i
          tubi saldati in acciaio inossidabile per servizi generali.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Questo standard non specifica i requisiti per i
          tubi e i tubi saldati in acciaio inossidabile destinati a scopi distinti,
          che sono coperti da Standard Indiani separati.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS (IS 17876:2022)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Documenti di Fabbricazione
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licenza/registrazione fabbrica</li>
          <li>Diagramma di layout</li>
          <li>Diagramma di flusso del processo</li>
          <li>Elenco macchinari (saldatura, formatura, ricottura, test)</li>
          <li>Elenco attrezzature di test interne</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Documenti Tecnici
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Specifiche del grado</li>
          <li>Dati di test chimici e meccanici</li>
          <li>Specifiche della procedura di saldatura</li>
          <li>Registri di trattamento termico</li>
          <li>Tabelle di tolleranza dimensionale</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Documenti Legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prova di identità</li>
          <li>Prova di indirizzo</li>
          <li>Documenti di proprietà del marchio</li>
          <li>Lettera del firmatario autorizzato</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Documenti di Domanda BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Modulo di domanda compilato</li>
          <li>Impegni e dichiarazioni</li>
          <li>Documenti di richiesta test</li>
          <li>Grafica dell&apos;etichetta per la marcatura ISI</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test sotto IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il test è il nucleo dell&apos;approvazione BIS e garantisce che ogni lotto
          soddisfi standard di qualità rigorosi.
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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Analisi della Siviera
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Analisi del Prodotto
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Requisiti di Trazione
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tubi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tubi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Bordo
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Schiacciamento Inverso
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Schiacciamento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensione del Grano
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Tenuta alle Perdite
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lavorazione, Finitura, Aspetto
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensioni e Tolleranze
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Affrontate Durante la Certificazione BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Fallimento nei Test di Composizione Chimica</strong>
            <br />
            Elementi di lega non standard o impurità causano il rigetto.
          </li>
          <li>
            <strong>Difetti di Saldatura Durante NDT</strong>
            <br />
            Processi di saldatura scadenti o trattamento termico inconsistente
            possono creare difetti.
          </li>
          <li>
            <strong>Non Conformità Dimensionale</strong>
            <br />
            Le variazioni dello spessore della parete comunemente portano a
            fallimenti.
          </li>
          <li>
            <strong>Documentazione Incompleta</strong>
            <br />
            Registri mancanti o poco chiari ritardano l&apos;approvazione della
            licenza.
          </li>
          <li>
            <strong>Problemi di Calibrazione</strong>
            <br />
            Attrezzature non calibrate risultano in risultati di test inaffidabili.
          </li>
          <li>
            <strong>Invio errato di marchio/etichetta</strong>
            <br />
            La grafica del marchio ISI deve corrispondere alle specifiche BIS.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefici della Certificazione BIS per Tubi e Tubi in Acciaio Inossidabile
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Approvazione legale per fabbricare/vendere in India</li>
          <li>Garanzia di qualità e sicurezza</li>
          <li>Reputazione e credibilità di mercato migliorate</li>
          <li>Accettabilità da parte di gare governative e PSU</li>
          <li>Potenziale di esportazione aumentato</li>
          <li>Riduzione dei rischi di fallimento del prodotto</li>
          <li>Protezione contro concorrenti contraffatti o di qualità inferiore</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanzioni per Non Conformità
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          I produttori/importatori che vendono prodotti non certificati affrontano:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sequestro del prodotto</li>
          <li>Pesanti sanzioni sotto la Legge BIS</li>
          <li>Chiusura delle operazioni di fabbricazione</li>
          <li>Restrizioni all&apos;importazione</li>
          <li>Persecuzione legale</li>
          <li>Cancellazione delle licenze esistenti</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La conformità è obbligatoria e rigorosamente applicata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chi Deve Ottenere la Licenza BIS per Tubi e Tubi Saldati SS?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori indiani</li>
          <li>Produttori esteri che esportano in India</li>
          <li>Importatori di tubi in acciaio inossidabile</li>
          <li>Fornitori OEM</li>
          <li>Distributori industriali</li>
          <li>Marchi di etichette private</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni sede di fabbricazione deve ottenere la propria licenza.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Tubi e Tubi Saldati in Acciaio Inossidabile sotto
          IS 17876:2022 garantisce l&apos;affidabilità, la durata e le prestazioni di
          prodotti di tubazione critici utilizzati in più settori. Con la
          certificazione obbligatoria ora applicata, i produttori e gli importatori devono
          allineare i loro processi, test e documentazione con i requisiti BIS
          per fornire legalmente i loro prodotti nel mercato indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con una guida esperta, il processo di licenza BIS diventa più veloce,
          più fluido e completamente conforme.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — Certificazione BIS per Tubi e Tubi Saldati in Acciaio Inossidabile
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La Certificazione BIS è obbligatoria per i tubi saldati in
                acciaio inossidabile?
              </strong>
              <br />
              Sì. Sotto IS 17876:2022, la certificazione BIS è obbligatoria per tutti
              i produttori e gli importatori.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Quali test sono richiesti?</strong>
              <br />
              Analisi chimica, test di trazione, test di durezza, test
              idrostatici, NDT, schiacciamento e controlli dimensionali.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Quanto tempo richiede la certificazione BIS?</strong>
              <br />
              Tipicamente 35–50 giorni per il Produttore Indiano e circa 120 giorni
              per il produttore straniero, a seconda della prontezza per test e
              ispezione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. I produttori stranieri possono ottenere la certificazione BIS?
              </strong>
              <br />
              Sì, tramite il FMCS (Schema di Certificazione Produttori Stranieri).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Quali documenti sono richiesti?</strong>
              <br />
              Licenza fabbrica, elenco attrezzature di test, BOM, flusso di processo,
              disegni, piano QC, documenti del marchio, ecc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Cosa succede se un campione fallisce il test?</strong>
              <br />
              Il produttore deve correggere il problema, rielaborare il prodotto e
              reinviare per il test.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. La marcatura ISI è obbligatoria dopo l&apos;approvazione?</strong>
              <br />
              Sì. I prodotti devono mostrare il Marchio ISI + numero CML.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Tutti i gradi sono coperti sotto IS 17876?</strong>
              <br />
              Solo i gradi specifici definiti sotto lo standard qualificano.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Con quale frequenza il BIS conduce la sorveglianza?</strong>
              <br />
              Audit periodici e test di campioni casuali vengono eseguiti durante la
              validità della licenza.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17876-2022-Sun-Certifications-India.pdf"
            title="Certificato BIS per Tubi e Tubi Saldati - IS 17876:2022 PDF"
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
              Marchio BIS (Licenza ISI) per Fabbricazione Estera
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
              Gestione Rifiuti Plastici
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
