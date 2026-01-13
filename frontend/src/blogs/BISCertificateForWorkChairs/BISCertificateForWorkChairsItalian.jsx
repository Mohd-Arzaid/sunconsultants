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

const BISCertificateForWorkChairsItalian = () => {
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

export default BISCertificateForWorkChairsItalian;

const MetaTags = () => {
  const title =
    "Certificato BIS per Sedie da Lavoro | IS 17631:2022 Licenza BIS";
  const ogTitle =
    "Certificazione BIS per Sedie da Lavoro – Guida IS 17631:2022";
  const twitterTitle = "Licenza BIS per Sedie da Lavoro | IS 17631:2022";
  const metaDescription =
    "Ottieni il Certificato BIS per sedie da lavoro secondo IS 17631:2022. Processo, documenti, test, costi e tempistiche per la Certificazione BIS in India.";
  const ogDescription =
    "Guida completa alla Certificazione BIS per Sedie da Lavoro secondo IS 17631:2022. Scopri processo, costi, documenti, test e vantaggi della licenza BIS.";
  const twitterDescription =
    "Richiedi il Certificato BIS per Sedie da Lavoro secondo IS 17631:2022. Scopri il processo BIS, documenti, test, tariffe e tempistiche in India.";
  const metaKeywords =
    "Certificato BIS per Sedie da Lavoro, Licenza BIS per Sedie da Lavoro, IS 17631:2022, Certificazione BIS per Sedie da Lavoro";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631";
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
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
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
                    Certificato BIS per Sedie da Lavoro – IS 17631:2022
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
          Certificato BIS per Sedie da Lavoro – Una Guida Completa alla
          Conformità per IS 17631:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="Licenza BIS per Sedie da Lavoro"
            alt="Certificato BIS per Sedie da Lavoro - IS 17631:2022 Certificazione BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;aumento dell&apos;uso di sedute per ufficio e lavoro—sia in
          spazi aziendali, centri di co-working, uffici domestici o strutture
          istituzionali—ha reso essenziali sicurezza e prestazioni ergonomiche.
          Per garantire che i produttori forniscano prodotti per sedute
          strutturalmente stabili, durevoli e sicuri per l&apos;utente, il
          Governo dell&apos;India ha reso obbligatoria la Certificazione BIS per
          Sedie da Lavoro secondo IS 17631:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le sedie da lavoro tipicamente sopportano carichi ripetitivi,
          movimento continuo del corpo, inclinazione, rotazione e regolazioni
          dell&apos;altezza. Un guasto in qualsiasi caratteristica di
          prestazione può portare a lesioni gravi. Ecco perché la conformità a
          IS 17631:2022 – Sedie da Lavoro: Requisiti di Sicurezza è ora
          obbligatoria per tutti i produttori e gli importatori.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa guida spiega il processo completo di licenza BIS, inclusi
          standard, test, tariffe, documentazione, responsabilità, vantaggi e
          sfide—creata con contenuti freschi per evitare duplicazioni nel tuo
          sito web.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Comprensione della Certificazione BIS per Sedie da Lavoro
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Bureau of Indian Standards (BIS) supervisiona la qualità e la
          sicurezza dei prodotti forniti nel mercato indiano. Qualsiasi prodotto
          che rientra in uno Standard Indiano elencato in un Ordine obbligatorio
          di Controllo Qualità deve essere valutato e certificato da BIS prima
          della vendita.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Certificato BIS – Cosa Rappresenta
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un Certificato BIS indica che una sedia da lavoro:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ha superato i test di prestazione e durata</li>
          <li>Risponde alle specifiche di materiale e costruzione</li>
          <li>È sicura per l&apos;uso quotidiano a lungo termine</li>
          <li>
            Conforma alle linee guida ergonomiche e strutturali negli Standard
            Indiani
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori che soddisfano questi requisiti ricevono una Licenza BIS
          che consente loro di apporre il Marchio ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standard Applicabile per Sedie da Lavoro – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo standard che regola le sedie da lavoro e da ufficio è:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – Sedie da Lavoro: Requisiti di
          Sicurezza
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Questo standard si concentra su sedute destinate all&apos;uso
          prolungato in ambienti di lavoro.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Prodotti Coperti da Questo Standard
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sedie da ufficio ergonomiche</li>
          <li>Sedie da lavoro</li>
          <li>Sedie girevoli</li>
          <li>Sedie per scrivanie da lavoro</li>
          <li>Sedie da lavoro con altezza regolabile</li>
          <li>Sedie da lavoro executive</li>
          <li>Sedie da lavoro con schienale in rete o tessuto</li>
          <li>Sedie dotate di braccioli</li>
          <li>Sedie con meccanismi di inclinazione/blocco</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Conformità IS 17631:2022 è Critica
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le sedie da lavoro differiscono significativamente dalle sedie
          generiche perché:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Supportano movimento continuo</li>
          <li>Utilizzano meccanismi meccanici e di regolazione</li>
          <li>Sostengono carichi dinamici</li>
          <li>Richiedono durata per uso prolungato</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Le sedie costruite male possono fallire in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giunzioni della base</li>
          <li>Meccanismi di rotazione</li>
          <li>Sistemi di sollevamento a gas</li>
          <li>Supporto sedile/schienale</li>
          <li>Struttura delle gambe o delle rotelle</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Questo può portare a lesioni sul posto di lavoro, tempi di inattività
          operativi e problemi di responsabilità del prodotto.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          La Certificazione BIS Obbligatoria Garantisce
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Design ergonomico sicuro</li>
          <li>Capacità di carico affidabile</li>
          <li>Forte durata sotto test ciclici</li>
          <li>Resistenza all&apos;usura meccanica</li>
          <li>Conformità ai parametri di sicurezza dell&apos;utente</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pertanto, ottenere una Licenza BIS per Sedie da Lavoro è non
          negoziabile per produttori indiani e stranieri.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ambito della Licenza BIS per Sedie da Lavoro
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questo standard copre i requisiti delle sedie da lavoro. Questo
          standard si applica a sedie da lavoro completamente
          prodotte/fabbricate. Si applica anche a unità pronte per
          l&apos;assemblaggio; in tal caso i requisiti di questo standard si
          applicano alle unità assemblate.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS Passo dopo Passo per Sedie da Lavoro
          (IS 17631:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il processo di certificazione per sedie da lavoro coinvolge una
          combinazione di valutazione in laboratorio, audit di fabbrica e esame
          tecnico.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 1 – Valutazione del Prodotto e Mappatura dello Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Identifica tutte le varianti di sedia e allineale con IS 17631:2022.
          Comprendi quali modelli condividono la stessa costruzione e quali
          richiedono test separati.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 2 – Invio Domanda Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il produttore invia la domanda tramite il Portale BIS Manak Online. Le
          informazioni richieste includono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dettagli del sito di produzione</li>
          <li>Controlli dei materiali grezzi</li>
          <li>Specifiche tecniche</li>
          <li>Capacità di produzione</li>
          <li>Documentazione di proprietà del marchio</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 3 – Pagamento Tariffe
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le tariffe devono essere pagate per:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Domanda</li>
          <li>Elaborazione</li>
          <li>Test</li>
          <li>Ispezione</li>
          <li>Marcatura</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 4 – Test Campioni (Requisiti IS 17631:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un laboratorio riconosciuto BIS valuta la sedia rispetto a più criteri
          di sicurezza e prestazione.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          I Test per Sedie da Lavoro Includono
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test di carico statico sedile e schienale</li>
          <li>Cicli di carico per durata</li>
          <li>Test di rotazione/girevole</li>
          <li>Resistenza meccanismo di inclinazione</li>
          <li>Prestazioni meccanismo di sollevamento a gas</li>
          <li>Resistenza rotelle e resistenza al rotolamento</li>
          <li>Stabilità base e test di sovraccarico</li>
          <li>Capacità di carico braccioli</li>
          <li>Test di resistenza all&apos;impatto</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il laboratorio emette un rapporto di test dettagliato a BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 5 – Audit Fabbrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Gli ispettori BIS esaminano:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sistema di produzione</li>
          <li>Registri di ispezione materiali</li>
          <li>Processi di garanzia qualità interna</li>
          <li>Strumenti di test e log di calibrazione</li>
          <li>Conformità allo Schema di Test e Ispezione (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 6 – Concessione Licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Una volta confermata la conformità, BIS concede:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La certificazione Licenza BIS/Marchio ISI</li>
          <li>Un numero CML unico</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 7 – Conformità Costante
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I produttori devono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mantenere controlli interni continui</li>
          <li>Seguire le regole di marcatura</li>
          <li>Cooperare durante le ispezioni di sorveglianza</li>
          <li>Rinnovare la licenza periodicamente</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS delle Sedie da Lavoro
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Un set completo di documenti garantisce un&apos;approvazione più
          rapida.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Aziendali e di Fabbrica
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registrazione fabbrica</li>
          <li>Diagramma e layout di produzione</li>
          <li>Flusso di lavoro di produzione</li>
          <li>Elenco macchinari</li>
          <li>Elenco attrezzature di test</li>
          <li>Certificati di calibrazione</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Tecnici
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Disegni tecnici della sedia</li>
          <li>Specifiche del meccanismo</li>
          <li>Schede tecniche dei materiali</li>
          <li>Distinta materiali</li>
          <li>Istruzioni di assemblaggio</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prova di identità del firmatario autorizzato</li>
          <li>Lettere di autorizzazione del marchio</li>
          <li>Certificato di marchio registrato</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Specifici BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Modulo di domanda</li>
          <li>Dichiarazioni</li>
          <li>Modulo di richiesta test</li>
          <li>Campioni di etichette</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test secondo IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le sedie da lavoro subiscono test più complessi rispetto alle sedie
          generiche a causa delle parti mobili.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Test Chiave Eseguiti
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clausola
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requisiti
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
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ribaltamento Bordo Anteriore
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ribaltamento in Avanti
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ribaltamento in Avanti per Sedie con Poggiapiedi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ribaltamento Laterale per Sedie Senza Braccioli
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ribaltamento Laterale per Sedie con Braccioli
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ribaltamento all&apos;Indietro per Sedie Senza Schienale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Carico Statico Bordo Anteriore Sedile
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Carico Statico Combinato Sedile e Schienale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Carico Statico Bracciolo Verso il Basso — Centrale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Carico Statico Bracciolo Verso il Basso — Anteriore
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Carico Statico Bracciolo Laterale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Carico Statico Poggiapiedi
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Questi test simulano mesi o anni di uso regolare in pochi giorni.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni nella Certificazione BIS per Sedie da Lavoro
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>✔ 1. Fallimento nei test meccanici/inclinazione</strong> –
            Spesso causato da meccanismi deboli o hardware di bassa qualità.
          </li>
          <li>
            <strong>✔ 2. Non conformità meccanismo sollevamento a gas</strong> –
            I sollevamenti a gas devono soddisfare parametri rigorosi di
            pressione e sicurezza.
          </li>
          <li>
            <strong>✔ 3. Infrastruttura di test inadeguata</strong> – Il test
            delle sedie da lavoro richiede attrezzature specializzate.
          </li>
          <li>
            <strong>✔ 4. Raggruppamento prodotto errato</strong> – Meccanismi
            diversi = test separati.
          </li>
          <li>
            <strong>✔ 5. Non conformità STI</strong> – Errori STI possono
            ritardare l&apos;emissione della licenza.
          </li>
          <li>
            <strong>✔ 6. Disallineamenti documenti</strong> – Il nome del
            marchio e il nome del modello devono corrispondere esattamente
            all&apos;applicazione BIS.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Sedie da Lavoro
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Facilita vendite legali in tutta l&apos;India</li>
          <li>Aumenta la fiducia dei clienti e la reputazione del marchio</li>
          <li>Garantisce durata a lungo termine</li>
          <li>Riduce reclami di garanzia e guasti</li>
          <li>Protegge da sanzioni normative</li>
          <li>Consente l&apos;inserimento su piattaforme e-commerce</li>
          <li>
            Obbligatorio per gare d&apos;appalto governative e forniture
            aziendali
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanzioni per la Vendita di Sedie da Lavoro Senza Certificazione BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          La non conformità può comportare:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pesanti sanzioni finanziarie</li>
          <li>Confisca dell&apos;inventario</li>
          <li>Ordini di chiusura della produzione</li>
          <li>Divieto di importazione</li>
          <li>Persecuzione penale</li>
          <li>Revoca della licenza commerciale</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;applicazione rigorosa viene effettuata ai sensi del BIS Act,
          2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chi Deve Ottenere la Certificazione BIS per Sedie da Lavoro?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Obbligatorio per:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori indiani</li>
          <li>Produttori stranieri che esportano in India</li>
          <li>Proprietari di marchi</li>
          <li>Importatori</li>
          <li>Fornitori OEM/ODM</li>
          <li>Distributori di magazzino</li>
          <li>Marchi di mobili retail e online</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni fabbrica richiede una licenza BIS unica.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Sedie da Lavoro secondo IS 17631:2022 è
          fondamentale per garantire prodotti per sedute sicuri, durevoli e
          ergonomicamente solidi in India. La certificazione obbligatoria
          migliora la fiducia dei clienti, riduce i rischi di responsabilità del
          prodotto e garantisce la conformità agli standard di qualità
          nazionali. Con supporto professionale, il percorso di
          certificazione—dai test all&apos;ispezione alla licenza—diventa
          efficiente e prevedibile.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificato BIS per Sedie da Lavoro (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Quali sedie rientrano in IS 17631:2022?</strong>
              <br />
              Qualsiasi sedia progettata per ambienti di lavoro, inclusi sedie
              ergonomiche da ufficio, sedie da lavoro, sedie girevoli e sedie
              regolabili.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. La Certificazione BIS è obbligatoria per le sedie da lavoro?
              </strong>
              <br />
              Sì. La certificazione BIS è obbligatoria prima di produrre,
              vendere o importare sedie da lavoro in India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Cosa rende il test delle sedie da lavoro diverso dal test
                delle sedie generiche?
              </strong>
              <br />
              Le sedie da lavoro utilizzano meccanismi come rotazione,
              sollevamenti a gas, sistemi di inclinazione e rotelle—richiedendo
              test meccanici e di resistenza avanzati.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Quanto tempo richiede la certificazione BIS?</strong>
              <br />
              Tipicamente 30–45 giorni per produttori indiani e circa 120 giorni
              per produttori stranieri, a seconda dei test e della
              documentazione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. I produttori stranieri possono fare domanda?</strong>
              <br />
              Sì, tramite FMCS (Schema di Certificazione Produttori Stranieri).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Cosa succede se una sedia fallisce i test BIS?</strong>
              <br />
              Deve essere riprogettata, corretta e ritestata fino a quando non
              soddisfa IS 17631:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Quali documenti sono richiesti per la domanda BIS?
              </strong>
              <br />
              Dettagli fabbrica, disegni prodotto, elenco macchinari, documenti
              QC, proprietà marchio e documenti legali.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Tutti i modelli di sedia richiedono test separati?
              </strong>
              <br />
              Se i modelli differiscono in design, meccanismo o struttura,
              potrebbero essere necessari test separati.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. La marcatura ISI è obbligatoria dopo l&apos;approvazione?
              </strong>
              <br />
              Sì, il marchio ISI deve apparire sul prodotto, etichetta e
              imballaggio.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="Certificato BIS per Sedie da Lavoro - IS 17631:2022 PDF"
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
