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

const BISCertificateForBunkBedsItalian = () => {
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

export default BISCertificateForBunkBedsItalian;

const MetaTags = () => {
  const title =
    "Certificato BIS per Letti a Castello | IS 17636:2022 Licenza BIS";
  const ogTitle =
    "Certificazione BIS per Letti a Castello – Guida IS 17636:2022";
  const twitterTitle = "Licenza BIS per Letti a Castello | IS 17636:2022";
  const metaDescription =
    "Ottieni il Certificato BIS per letti a castello secondo IS 17636:2022. Processo, documenti, test, costi e tempistiche per la Certificazione BIS in India.";
  const ogDescription =
    "Guida completa alla Certificazione BIS per letti a castello secondo IS 17636:2022. Scopri processo, costi, documenti, test e vantaggi della licenza BIS.";
  const twitterDescription =
    "Richiedi il Certificato BIS per letti a castello secondo IS 17636:2022. Scopri il processo BIS, documenti, test, tariffe e tempistiche in India.";
  const metaKeywords =
    "Certificato BIS per Letti a Castello, Licenza BIS per Letti a Castello, IS 17636:2022, Certificazione BIS per Letti a Castello";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/letti-a-castello-is-17636";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/bunk-beds-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/bunk-beds-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-muzdawijat-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/shuang-ceng-chuang-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stapelbedden-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-superposes-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/etagenbetten-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-susun-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-a-castello-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/nidan-beddo-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/icheung-chimdae-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/literas-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-song-chan-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-tang-is-17636"
      />
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
                    Certificato BIS per Letti a Castello – IS 17636:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificato BIS per Letti a Castello – Guida Completa alla
          Certificazione BIS IS 17636:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="Licenza BIS per Letti a Castello"
            alt="Certificato BIS per Letti a Castello - Certificazione BIS IS 17636:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Letti a Castello è un requisito obbligatorio in
          India secondo IS 17636:2022, che stabilisce i requisiti di sicurezza,
          prestazioni e strutturali per i letti a castello utilizzati in case,
          ostelli, dormitori, alloggi PG, scuole, hotel e stabilimenti
          commerciali. Qualsiasi produttore—indiano o straniero—deve ottenere
          una Certificazione BIS per Letti a Castello prima di vendere,
          importare, esportare o distribuire letti a castello nel mercato
          indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con la crescente domanda di mobili che risparmiano spazio, i letti a
          castello sono diventati una categoria di prodotto essenziale.
          Tuttavia, i rischi per la sicurezza come cadute, collasso,
          intrappolamento e cedimento strutturale rendono la Licenza BIS per
          Letti a Castello cruciale per garantire la protezione dei consumatori.
          Questa pagina completa ti guiderà attraverso la Registrazione BIS per
          Letti a Castello, requisiti di test, documentazione, tariffe,
          tempistiche, sanzioni e benefici.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Che tu sia un produttore, importatore, esportatore, commerciante o
          start-up, questa guida ti aiuta a comprendere i requisiti di
          conformità secondo il Bureau of Indian Standards (BIS).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos&apos;è la Certificazione BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS è un programma di conformità alla qualità e
          sicurezza governato dal Bureau of Indian Standards, l&apos;ente
          nazionale di standardizzazione dell&apos; India. Garantisce che i
          prodotti siano conformi agli Standard Indiani specificati e siano
          sicuri, affidabili e idonei all&apos;uso.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cos&apos;è il Certificato BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un certificato BIS è una licenza ufficiale rilasciata a un produttore
          che consente loro di utilizzare il Marchio ISI, dimostrando la
          conformità agli standard del prodotto prescritti dal BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significato del Certificato BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dimostra che il prodotto ha superato:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test di laboratorio</li>
          <li>Ispezione della fabbrica</li>
          <li>Valutazione del controllo qualità</li>
          <li>Conformità alla sicurezza</li>
          <li>Conformità agli Standard Indiani</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Un prodotto certificato BIS mostra il Logo BIS, noto anche come
          Marchio ISI, che indica che soddisfa i parametri di qualità indiani.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quale Standard BIS si Applica ai Letti a Castello? (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I letti a castello rientrano nella certificazione BIS obbligatoria
          secondo lo standard di recente introdotto:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — Letti a Castello – Requisiti di
          Sicurezza
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Questo standard garantisce che i letti a castello soddisfino criteri
          rigorosi di sicurezza, costruzione, e durata. Copre:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilità strutturale</li>
          <li>Parapetti</li>
          <li>Rischi di intrappolamento</li>
          <li>Capacità di carico</li>
          <li>Requisiti dimensionali</li>
          <li>Specifiche dei materiali</li>
          <li>Bordi e finitura superficiale</li>
          <li>Costruzione della scala</li>
          <li>Test di durata e prestazioni</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Qualsiasi produttore che desideri vendere letti a castello in India
          deve ottenere una Licenza BIS per Letti a Castello secondo IS
          17636:2022.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS è Richiesta per i Letti a Castello
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I letti a castello sono ampiamente utilizzati da bambini e adulti, e
          le preoccupazioni per la sicurezza rendono la conformità essenziale.
          Il BIS ha reso la certificazione obbligatoria per prevenire:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cedimento o fallimento strutturale</li>
          <li>Intrappolamento di parti del corpo</li>
          <li>Caduta dal letto superiore</li>
          <li>Lesioni legate alla scala</li>
          <li>Scarsa qualità dei materiali</li>
          <li>Rischi di incendio</li>
          <li>Finiture pericolose o bordi taglienti</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Motivi per cui la Licenza BIS per Letti a Castello è Obbligatoria
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Garantisce resistenza meccanica e durata</li>
          <li>Protegge i consumatori—specialmente i bambini—dalle lesioni</li>
          <li>Mantiene standard di qualità uniformi</li>
          <li>Aiuta i marchi a costruire fiducia e credibilità</li>
          <li>Garantisce la conformità alle normative governative</li>
          <li>Previene problemi legali e sanzioni</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza la registrazione BIS, i produttori e gli importatori non possono
          legalmente vendere il prodotto nel mercato indiano.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS Passo-Passo per Letti a Castello (IS
          17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il processo di certificazione BIS in India coinvolge test,
          documentazione e ispezioni della fabbrica. Ecco la procedura
          passo-passo:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 1 — Determina Applicabilità e Standard
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — Obbligatorio
          </li>
          <li>
            Conferma la categoria del prodotto e i dettagli dell&apos;unità di
            produzione.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 2 — Domanda BIS (Invio Modulo)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Presenta la domanda online tramite il Portale Online BIS Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          I requisiti includono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dettagli del produttore</li>
          <li>Indirizzo della fabbrica e prova</li>
          <li>Categoria del prodotto e marchio</li>
          <li>Capacità di produzione</li>
          <li>Processi di controllo qualità</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Questo passo avvia il ciclo di approvazione ufficiale.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 3 — Paga il Costo del Certificato BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dopo l&apos;invio, paga:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Tariffe di domanda</li>
          <li>Tariffe di test</li>
          <li>Tariffe di audit</li>
          <li>Tariffe di marcatura</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le tariffe dipendono da:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Numero di varianti del prodotto</li>
          <li>Nomi dei marchi</li>
          <li>Posizione della fabbrica</li>
          <li>Parametri di test</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 4 — Test del Campione (Secondo IS 17636:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I test vengono condotti in un laboratorio riconosciuto dal BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          I test includono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test di stabilità strutturale</li>
          <li>Test di impatto</li>
          <li>Test di intrappolamento</li>
          <li>Test di resistenza del parapetto</li>
          <li>Test di qualità della finitura</li>
          <li>Test di sicurezza della scala</li>
          <li>Test di carico</li>
          <li>Test di durata</li>
          <li>Valutazione della sicurezza dei bordi</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il rapporto di test viene caricato direttamente sul portale BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 5 — Ispezione della Fabbrica BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un funzionario BIS visita la fabbrica per verificare:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sistema di gestione della qualità</li>
          <li>Controllo delle materie prime</li>
          <li>Ispezioni in corso</li>
          <li>Test del prodotto finale</li>
          <li>Capacità di produzione</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Verificano la conformità con lo Schema BIS di Test e Ispezione (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 6 — Concessione della Licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Una volta completati tutti i passi, il BIS rilascia:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato BIS</li>
          <li>Approvazione Marchio ISI</li>
          <li>Numero Licenza CML</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ora puoi legalmente utilizzare il Marchio BIS su letti a castello e
          imballaggi.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 7 — Obblighi Post-Licenza
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I produttori devono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mantenere test interni</li>
          <li>Consentire ispezioni BIS periodiche</li>
          <li>Rinnovare la licenza ogni 1 o 2 anni</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ambito della Licenza BIS per Letti a Castello
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Questo standard copre i requisiti relativi alle
          prestazioni e sicurezza, cioè resistenza, stabilità e durata dei letti
          a castello per uso domestico e non domestico. Questo standard si
          applica anche ai letti singoli per uso ad un&apos;altezza della base
          del letto di 800 mm o più sopra il livello del pavimento finito,
          indipendentemente dall&apos;uso a cui lo spazio sottostante è
          destinato.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Questo standard si applica ai letti a castello
          completamente prodotti/ fabbricati. Si applica anche alle unità pronte
          per il montaggio; in quel caso i requisiti di questo standard si
          applicheranno all&apos; unità assemblata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS dei Letti a Castello
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ecco un elenco completo dei Documenti del Certificato BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti del Produttore
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato di registrazione della fabbrica</li>
          <li>Diagramma di flusso del processo di produzione</li>
          <li>Elenco di macchinari e attrezzature</li>
          <li>Elenco di attrezzature di test</li>
          <li>Certificati di calibrazione</li>
          <li>Layout della fabbrica/layout dell&apos;impianto</li>
          <li>Lettera di autorizzazione da CEO/Direttore</li>
          <li>Certificato ISO 9001 (se disponibile)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prova di identità</li>
          <li>Prova di indirizzo</li>
          <li>Autorizzazione del marchio (se marchio di terze parti)</li>
          <li>Documento di registrazione del marchio (opzionale)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Tecnici
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Specifiche del prodotto</li>
          <li>Distinta base materiali</li>
          <li>Descrizione delle caratteristiche di sicurezza</li>
          <li>Piano di controllo qualità</li>
          <li>Rapporti di test interni</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti della Domanda BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Impegni e dichiarazioni</li>
          <li>Modulo di richiesta test</li>
          <li>Lettera di approvazione del campione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avere documenti adeguati riduce i ritardi e garantisce
          un&apos;approvazione fluida.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test per Letti a Castello (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il test è una parte obbligatoria del processo di registrazione BIS. I
          letti a castello subiscono test rigorosi per garantire sicurezza e
          durata.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Schema di Ispezione e Test per Letti a Castello
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
                  Dimensioni
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Barriere di Sicurezza del Letto Superiore
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Intervalli
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Base del Letto
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Scala
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Resistenza del Telaio e dei Fissaggi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stabilità
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Fissaggio del Letto Superiore al Letto Inferiore
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          I test devono essere eseguiti solo in un laboratorio riconosciuto dal
          BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni e Come Evitarle
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Categorizzazione del Prodotto Errata</strong>
            <br />
            Verifica sempre lo Standard Indiano corretto.
          </li>
          <li>
            <strong>Documentazione Impropria</strong>
            <br />I documenti mancanti causano ritardi—preparali in anticipo.
          </li>
          <li>
            <strong>Test di Laboratorio Falliti</strong>
            <br />
            Assicura materiali di alta qualità, saldatura, parapetti e finitura.
          </li>
          <li>
            <strong>Fabbrica Non Pronta per l&apos;Ispezione</strong>
            <br />
            Assicura che QMS e attrezzature di test siano mantenute
            correttamente.
          </li>
          <li>
            <strong>Problemi di Marchio</strong>
            <br />
            Il nome del marchio deve corrispondere alla domanda di licenza.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Risolvere questi problemi in anticipo riduce drasticamente i tempi di
          elaborazione.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Produttori e Importatori
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vendere legalmente letti a castello in India</li>
          <li>Costruire fiducia con i clienti</li>
          <li>Ridurre i resi dei prodotti</li>
          <li>Migliorare la reputazione del marchio</li>
          <li>Garantire la conformità alla sicurezza</li>
          <li>Ottenere un vantaggio competitivo</li>
          <li>
            Espandersi in catene di vendita al dettaglio e piattaforme
            e&apos;-commerce
          </li>
          <li>Accedere a gare d&apos;appalto governative</li>
          <li>Evitare sanzioni e azioni legali</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanzioni per la Non Conformità
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vendere letti a castello senza Certificazione BIS può comportare:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sequestro del prodotto</li>
          <li>Sanzioni finanziarie</li>
          <li>Ordini di chiusura della fabbrica</li>
          <li>Persecuzione legale</li>
          <li>Divieto dal mercato indiano</li>
          <li>Inserimento del marchio nella lista nera</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La conformità non è opzionale—è obbligatoria.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chi Ha Bisogno della Certificazione BIS per i Letti a Castello?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Le seguenti entità devono ottenere una Licenza BIS per Letti a
          Castello:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori indiani</li>
          <li>Produttori stranieri che esportano in India</li>
          <li>Importatori</li>
          <li>Distributori</li>
          <li>Venditori e-commerce</li>
          <li>Produttori OEM/ODM</li>
          <li>Marchi di mobili e rivenditori</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni fabbrica (non azienda) richiede una licenza BIS separata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché Sceglierci per la Consulenza sulla Certificazione BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Forniamo supporto end-to-end per la Registrazione BIS per Letti a
          Castello, inclusi:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretazione dello standard (IS 17636:2022)</li>
          <li>Preparazione della documentazione</li>
          <li>Coordinamento dei test di laboratorio</li>
          <li>Domanda sul portale BIS</li>
          <li>Supporto all&apos;ispezione della fabbrica</li>
          <li>Comunicazione con i funzionari BIS</li>
          <li>Assistenza all&apos;approvazione della licenza</li>
          <li>Conformità post-certificazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con anni di esperienza, garantiamo una certificazione BIS veloce,
          accurata e senza problemi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — Certificazione BIS per Letti a Castello
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La certificazione BIS è obbligatoria per i letti a castello
                in India?
              </strong>
              <br />
              Sì. Secondo IS 17636:2022, è obbligatoria per tutti i produttori e
              importatori.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Quanto tempo richiede la Certificazione BIS per i letti a
                castello?
              </strong>
              <br />
              Tipicamente 30–45 giorni a seconda della preparazione e
              documentazione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. I produttori stranieri possono richiedere la BIS?
              </strong>
              <br />
              Sì, tramite il FMCS (Schema di Certificazione per Produttori
              Stranieri).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Posso richiedere un Certificato BIS online?</strong>
              <br />
              Sì, tramite il Portale Online BIS Manak.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Quali test sono richiesti per la certificazione dei letti a
                castello?
              </strong>
              <br />
              Test di carico, test del parapetto, test di stabilità, test di
              impatto, test di intrappolamento, ecc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Quanto è valida una licenza BIS?</strong>
              <br />
              Di solito 1–2 anni e rinnovabile.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Una licenza può coprire più modelli?</strong>
              <br />
              Solo se rientrano nello stesso standard e categoria.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Il Marchio ISI è richiesto sui letti a castello?
              </strong>
              <br />
              Sì, il Marchio ISI è obbligatorio dopo la certificazione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. Cosa succede se il mio prodotto fallisce i test di
                laboratorio?
              </strong>
              <br />
              Devi modificare il prodotto e reinviare i campioni.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                11. Il BIS controlla l&apos;infrastruttura della fabbrica?
              </strong>
              <br />
              Sì, durante l&apos;ispezione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. I commercianti possono richiedere la BIS?</strong>
              <br />
              Solo se sono proprietari del marchio e hanno un contratto con i
              produttori.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. Cos&apos;è il Logo BIS?</strong>
              <br />È il simbolo standard del Marchio ISI che indica la
              conformità del prodotto.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                14. Quali documenti sono necessari per la certificazione BIS?
              </strong>
              <br />
              Licenza della fabbrica, layout, elenco macchinari, BOM, piano QC,
              rapporti di test, ecc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>15. I test BIS vengono eseguiti in fabbrica?</strong>
              <br />
              No, solo nei laboratori riconosciuti dal BIS.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ottenere un Certificato BIS per Letti a Castello secondo IS 17636:2022
          non è solo obbligatorio ma anche essenziale per garantire la sicurezza
          dei consumatori, l&apos;affidabilità del prodotto e la conformità
          legale in India. Il processo di certificazione coinvolge test del
          prodotto, documentazione, ispezione della fabbrica, e rilascio della
          licenza. Con una pianificazione adeguata e una guida esperta, il
          processo diventa fluido, veloce ed economico.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Che tu sia un produttore, importatore o proprietario di marchio,
          ottenere la certificazione BIS rafforza la tua posizione sul mercato,
          aumenta la fiducia dei clienti, e sblocca nuove opportunità
          commerciali. Il nostro team di consulenza esperto è pronto ad
          assisterti con la Certificazione BIS end-to-end per letti a castello.
        </p>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17636-2021-Sun-Certifications-India.pdf"
            title="Certificato BIS per Letti a Castello - IS 17636:2021 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadItalian />

        <FaqAuthorItalian questionNumber={5} />
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
                Miglior Consulente per Certificati dell&apos;India
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
