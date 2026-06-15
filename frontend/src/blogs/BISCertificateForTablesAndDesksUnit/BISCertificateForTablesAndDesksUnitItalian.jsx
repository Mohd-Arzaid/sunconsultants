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

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

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
          Certificazione BIS per Tavoli e Scrivanie (IS 17633:2022) – Guida
          Completa alla Certificazione con Marchio ISI
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="Licenza BIS per Tavoli e Scrivanie"
            alt="Certificazione BIS per Tavoli e Scrivanie - Guida al Marchio ISI IS 17633:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tavoli e scrivanie sono tra i prodotti di arredamento più diffusi in
          uffici, istituti scolastici, esercizi commerciali, enti governativi e
          spazi residenziali. Poiché ci si aspetta che questi prodotti resistano
          all&apos;uso quotidiano garantendo al contempo sicurezza dell&apos;utente,
          stabilità e durata, la conformità a standard di qualità riconosciuti è
          diventata sempre più importante per produttori e importatori.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In India, i tavoli e le scrivanie coperti da IS 17633:2022 devono
          conformarsi ai requisiti applicabili di qualità e sicurezza prescritti
          dal Bureau of Indian Standards (BIS). I produttori che soddisfano con
          successo questi requisiti possono ottenere una licenza BIS e utilizzare
          il Marchio ISI sui propri prodotti, dimostrando la conformità al
          relativo Standard Indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il processo di certificazione valuta vari aspetti delle prestazioni del
          prodotto, tra cui resistenza, stabilità, durata, lavorazione, dimensioni
          e sicurezza complessiva. La conformità non solo aiuta le aziende a
          soddisfare i requisiti normativi, ma migliora anche la credibilità del
          prodotto e l&apos;accettazione sul mercato.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa guida completa spiega tutto ciò che produttori, importatori,
          marchi di arredamento e professionisti degli acquisti devono sapere
          sulla Certificazione BIS per Tavoli e Scrivanie ai sensi di IS
          17633:2022, inclusi applicabilità, requisiti di certificazione,
          parametri di test, documentazione, benefici e processo di
          certificazione.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Punti Chiave della Certificazione BIS per Tavoli e Scrivanie
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Voce
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Dettagli
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Prodotto", "Tavoli e Scrivanie"],
                ["Standard Applicabile", "IS 17633:2022"],
                ["Tipo di Certificazione", "Certificazione di Prodotto BIS"],
                ["Marchio Applicabile", "Marchio ISI"],
                ["Schema di Certificazione", "Schema-I (Certificazione con Marchio ISI)"],
                ["Autorità di Regolamentazione", "Bureau of Indian Standards (BIS)"],
                ["Settore Applicabile", "Arredamento"],
                [
                  "Richiedenti Ammissibili",
                  "Produttori Indiani e Produttori Esteri",
                ],
                [
                  "Requisito di Conformità",
                  "Obbligatorio ai sensi del QCO Arredamento applicabile (Ordine di Controllo Qualità)",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Schema di Certificazione" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Schema-I (Certificazione con Marchio ISI)
                      </a>
                    ) : particular === "Requisito di Conformità" ? (
                      <>
                        Obbligatorio ai sensi del {" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
                          className="text-blue-600 hover:underline"
                        >
                         <strong>QCO Arredamento (Ordine di Controllo Qualità)</strong>
                        </a>
                        
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos&apos;è la Certificazione BIS per Tavoli e Scrivanie?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS per Tavoli e Scrivanie è un processo di
          valutazione della conformità condotto ai sensi dello Schema di
          Certificazione di Prodotto del Bureau of Indian Standards (BIS). La
          certificazione conferma che il prodotto è conforme ai requisiti
          specificati in IS 17633:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dopo aver ottenuto con successo la certificazione, i produttori sono
          autorizzati a utilizzare il Marchio ISI sui propri prodotti, a
          indicazione della conformità al relativo Standard Indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La certificazione mira a garantire che i tavoli e le scrivanie forniti
          nel mercato indiano soddisfino i requisiti stabiliti relativi a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Resistenza e stabilità strutturale durante il normale utilizzo</li>
          <li>Durata, sicurezza dell&apos;utente e lavorazione dei materiali</li>
          <li>Tutti i requisiti di prestazione ai sensi di IS 17633:2022</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per acquirenti e agenzie di acquisto, il Marchio ISI rappresenta una
          garanzia che l&apos;arredamento è stato valutato secondo parametri
          riconosciuti di qualità e sicurezza.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Panoramica di IS 17633:2022 per Tavoli e Scrivanie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022 è lo Standard Indiano che specifica i requisiti di
          prestazione e sicurezza per tavoli e scrivanie destinati a utenti adulti
          in applicazioni da seduti e in piedi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Lo standard copre entrambi:
        </p>

        <ul className={LIST_CLASS}>
          <li>Tavoli e scrivanie completamente prodotti (pronti all&apos;uso)</li>
          <li>Unità pronte per il montaggio (RTA) — testate dopo il completo assemblaggio</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;obiettivo dello standard è stabilire requisiti minimi di
          prestazione e sicurezza che aiutino a garantire che l&apos;arredamento
          rimanga stabile, durevole e sicuro per tutta la sua vita utile prevista.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Aree Chiave Coperte da IS 17633:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Lo standard si concentra su diverse importanti caratteristiche di
          prestazione, tra cui:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Requisiti di Resistenza —</strong> Tavoli e scrivanie devono
            resistere ai carichi previsti durante il normale utilizzo senza
            cedimenti o deformazioni eccessive.
          </li>
          <li>
            <strong>Requisiti di Stabilità —</strong> L&apos;arredamento deve
            rimanere stabile durante l&apos;uso e resistere al ribaltamento in
            condizioni di carico prevedibili.
          </li>
          <li>
            <strong>Requisiti di Durata —</strong> I prodotti devono mantenere le
            prestazioni e l&apos;integrità strutturale dopo un uso ripetuto per un
            periodo prolungato.
          </li>
          <li>
            <strong>Requisiti di Sicurezza —</strong> La progettazione e la
            costruzione devono ridurre al minimo i rischi da instabilità, bordi
            taglienti, costruzione non sicura o cedimento strutturale.
          </li>
          <li>
            <strong>Lavorazione e Qualità di Costruzione —</strong> Lavorazione,
            assemblaggio, giunzioni, elementi di fissaggio e costruzione
            complessiva vengono valutati per prestazioni affidabili a lungo
            termine.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          La Certificazione BIS per Tavoli e Scrivanie è Obbligatoria in India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sì. I tavoli e le scrivanie coperti dall&apos;Ordine di Controllo Qualità
          (QCO) Arredamento applicabile devono conformarsi al relativo Standard
          Indiano e ottenere la Certificazione BIS prima di essere prodotti,
          importati, venduti, distribuiti o offerti nel mercato indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          L&apos;obiettivo della certificazione obbligatoria è:
        </p>

        <ul className={LIST_CLASS}>
          <li>Garantire una maggiore qualità del prodotto in tutto il settore dell&apos;arredamento</li>
          <li>Proteggere la sicurezza dei consumatori tramite standard verificati</li>
          <li>Impedire l&apos;ingresso sul mercato di arredamento scadente</li>
          <li>Promuovere la standardizzazione e parametri di qualità uniformi</li>
          <li>Costruire la fiducia degli acquirenti nei prodotti certificati con Marchio ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori coperti dalle normative applicabili devono ottenere una
          licenza BIS e utilizzare il Marchio ISI in conformità ai requisiti BIS.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Verifica anche i Prodotti di Arredamento Coperti dalla
            Certificazione BIS Obbligatoria —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            <strong>Certificazione BIS per l&apos;arredamento</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ambito di Prodotto Coperto da IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;ambito di IS 17633:2022 si estende a varie categorie di tavoli e
          scrivanie progettati per utenti adulti in ambienti residenziali,
          commerciali, istituzionali e di lavoro.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Esempi di prodotti comunemente coperti includono:
        </p>

        <ul className={LIST_CLASS}>
          <li>Scrivanie da ufficio, da studio e per computer</li>
          <li>Postazioni di lavoro e scrivanie multifunzionali</li>
          <li>Tavoli per conferenze e riunioni</li>
          <li>Tavoli istituzionali e da laboratorio</li>
          <li>Arredamento per co-working e uso commerciale</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori dovrebbero esaminare attentamente le specifiche del
          prodotto e l&apos;uso previsto per determinare se i loro prodotti
          rientrano nell&apos;ambito di IS 17633:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti Tecnici Chiave ai Sensi di IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per ottenere la certificazione BIS, i tavoli e le scrivanie devono
          soddisfare vari requisiti di prestazione e sicurezza specificati dallo
          standard.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Integrità Strutturale —</strong> I prodotti devono funzionare
            sotto i carichi prescritti; le giunzioni e le strutture di supporto
            rimangono sicure durante i test.
          </li>
          <li>
            <strong>Prestazioni di Capacità di Carico —</strong> Tavoli e
            scrivanie devono sostenere i carichi specificati senza deformazioni,
            danni o cedimenti inaccettabili.
          </li>
          <li>
            <strong>Prestazioni di Stabilità —</strong> L&apos;arredamento deve
            rimanere stabile durante l&apos;uso e ridurre i rischi di ribaltamento
            che potrebbero causare lesioni o danni materiali.
          </li>
          <li>
            <strong>Prestazioni di Durata —</strong> I prodotti devono resistere a
            cicli d&apos;uso ripetuti mantenendo prestazioni accettabili.
          </li>
          <li>
            <strong>Materiali e Lavorazione —</strong> Materiali, finitura e metodi
            di assemblaggio devono soddisfare i controlli di qualità per una
            produzione costante.
          </li>
          <li>
            <strong>Considerazioni sulla Sicurezza —</strong> La progettazione deve
            ridurre al minimo i pericoli derivanti dall&apos;uso dell&apos;arredamento
            per consumatori e acquirenti istituzionali.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS è Importante per i Produttori di Arredamento
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il mercato indiano dell&apos;arredamento è diventato sempre più attento
          alla qualità. Dipartimenti governativi, istituti scolastici, acquirenti
          aziendali e grandi agenzie di acquisto spesso preferiscono prodotti
          conformi a standard riconosciuti.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ottenere la certificazione BIS aiuta i produttori a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Dimostrare la conformità agli standard indiani applicabili</li>
          <li>Aumentare la credibilità del prodotto e la reputazione del marchio</li>
          <li>Conquistare la fiducia dei clienti e degli acquirenti istituzionali</li>
          <li>Migliorare l&apos;accettazione negli acquisti governativi e aziendali</li>
          <li>Rafforzare le pratiche interne di gestione della qualità</li>
          <li>Anticipare i requisiti normativi in evoluzione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per i produttori che cercano una crescita a lungo termine, la
          certificazione BIS è spesso vista sia come requisito di conformità sia
          come vantaggio strategico per il business.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test per Tavoli e Scrivanie ai Sensi di IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Prima che un produttore possa ottenere la certificazione BIS, i campioni
          di prodotto devono essere valutati rispetto ai requisiti applicabili di
          IS 17633:2022 attraverso test presso un laboratorio riconosciuto dal BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;obiettivo dei test è verificare che l&apos;arredamento soddisfi gli
          standard prescritti per sicurezza, stabilità, resistenza, durata e
          prestazioni complessive.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Sebbene i parametri di test esatti possano variare a seconda della
          progettazione del prodotto e dei requisiti di certificazione, i
          produttori vengono generalmente valutati per le seguenti
          caratteristiche:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Progettazione e Lavorazione —</strong> Qualità di costruzione,
            assemblaggio, finitura e integrità complessiva del prodotto vengono
            esaminate per un uso sicuro a lungo termine.
          </li>
          <li>
            <strong>Verifica Dimensionale —</strong> Le misurazioni critiche
            vengono controllate rispetto allo standard e alle specifiche di
            prodotto approvate.
          </li>
          <li>
            <strong>Test di Stabilità —</strong> Conferma che il prodotto rimanga
            stabile durante il normale utilizzo e segnala ribaltamenti o debolezze
            strutturali.
          </li>
          <li>
            <strong>Test di Carico Statico —</strong> Verifica la capacità di
            carico senza cedimenti, deformazioni eccessive o danni.
          </li>
          <li>
            <strong>Test di Resistenza —</strong> Valuta telai, giunzioni e
            supporti sotto le sollecitazioni operative durante l&apos;uso regolare.
          </li>
          <li>
            <strong>Valutazione della Durata —</strong> Verifica il mantenimento
            delle prestazioni dopo cicli d&apos;uso ripetuti.
          </li>
          <li>
            <strong>Valutazione della Sicurezza —</strong> Esclude rischi evitabili
            derivanti da instabilità, difetti o caratteristiche di progettazione
            non sicure.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Tavoli e Scrivanie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori che cercano la certificazione BIS ai sensi di IS 17633:2022
          devono seguire un processo di certificazione strutturato stabilito dal
          Bureau of Indian Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sebbene i requisiti specifici possano variare in base al tipo di
          richiedente e alla sede di produzione, il processo generale rimane
          simile.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Passo 1: Valutazione dell&apos;Ambito di Prodotto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il primo passo consiste nel determinare se il prodotto rientra
          nell&apos;ambito di IS 17633:2022 e dell&apos;Ordine di Controllo Qualità
          applicabile. Prima di avviare il processo di certificazione viene
          solitamente effettuata una revisione tecnica delle specifiche del
          prodotto, dell&apos;uso previsto, dei materiali e della costruzione.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Passo 2: Preparazione della Documentazione
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il produttore prepara la documentazione richiesta, comprese le
          informazioni aziendali, i dettagli di produzione, le specifiche del
          prodotto, le procedure di controllo qualità e i registri tecnici di
          supporto. Una documentazione adeguata è fondamentale perché eventuali
          carenze in questa fase possono ritardare la certificazione.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Passo 3: Test del Prodotto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I campioni di prodotto vengono testati presso un laboratorio riconosciuto
          dal BIS per verificare la conformità ai requisiti di IS 17633:2022. Il
          rapporto di test funge da uno dei principali documenti tecnici a supporto
          della domanda di certificazione.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Passo 4: Presentazione della Domanda
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La domanda BIS viene presentata insieme ai documenti di supporto, ai
          rapporti di test, alle informazioni di produzione e ai registri di
          gestione della qualità. La domanda viene esaminata dal BIS per
          completezza e conformità tecnica.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Passo 5: Valutazione della Fabbrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il BIS può condurre un&apos;ispezione della fabbrica per valutare:
        </p>
        <ul className={LIST_CLASS}>
          <li>Infrastruttura di produzione e capacità produttive</li>
          <li>Sistemi di controllo qualità e strutture di test interne</li>
          <li>Controlli sui materiali grezzi e meccanismi di tracciabilità del prodotto</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;obiettivo è verificare la capacità del produttore di realizzare
          costantemente prodotti conformi.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Passo 6: Valutazione e Revisione
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il BIS esamina la domanda, gli esiti dell&apos;ispezione e i rapporti di
          test di laboratorio prima di prendere una decisione sulla certificazione.
          Eventuali osservazioni sollevate durante il processo di revisione devono
          essere affrontate dal richiedente.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Passo 7: Concessione della Licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Al completamento con successo di tutti i requisiti, il BIS concede la
          licenza e autorizza il produttore a utilizzare il Marchio ISI su tavoli e
          scrivanie certificati.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Produttori Indiani
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          I produttori indiani generalmente presentano domanda secondo la procedura
          di certificazione nazionale prescritta dal BIS. Il processo include
          tipicamente:
        </p>

        <ul className={LIST_CLASS}>
          <li>Test del prodotto presso un laboratorio riconosciuto dal BIS</li>
          <li>Presentazione della domanda con i documenti di supporto</li>
          <li>Ispezione della fabbrica e revisione tecnica da parte del BIS</li>
          <li>Concessione della licenza BIS e autorizzazione del Marchio ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Una volta certificati, i produttori devono continuare a conformarsi ai
          requisiti BIS e mantenere una qualità del prodotto costante per tutto il
          periodo di validità della licenza.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Produttori Esteri
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Anche i produttori esteri che intendono esportare tavoli e scrivanie in
          India devono ottenere la certificazione BIS prima di fornire prodotti
          coperti dall&apos;Ordine di Controllo Qualità applicabile.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Il processo di certificazione generalmente comporta:
        </p>

        <ul className={LIST_CLASS}>
          <li>Nomina di un Rappresentante Indiano Autorizzato (AIR)</li>
          <li>Test del prodotto e valutazione della fabbrica all&apos;estero</li>
          <li>Revisione della documentazione e approvazione della certificazione BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori esteri devono garantire una conformità continua ai requisiti
          BIS per mantenere la validità della certificazione.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS di Tavoli e Scrivanie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I requisiti di documentazione possono variare a seconda del produttore e
          del percorso di certificazione. Tuttavia, i seguenti documenti sono
          comunemente richiesti durante il processo di certificazione.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Documenti Commerciali e Legali</h3>
        <ul className={LIST_CLASS}>
          <li>Registrazione aziendale, licenza di produzione e GST (se applicabile)</li>
          <li>Dettagli del firmatario autorizzato e prova di identità</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Informazioni di Produzione</h3>
        <ul className={LIST_CLASS}>
          <li>Diagramma di flusso del processo, layout della fabbrica e dettagli dei macchinari</li>
          <li>Registri di infrastruttura e capacità produttiva</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Informazioni sul Prodotto</h3>
        <ul className={LIST_CLASS}>
          <li>Specifiche del prodotto, disegni tecnici e catalogo</li>
          <li>Distinta materiali e dettagli su materiali/componenti</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Documenti di Controllo Qualità</h3>
        <ul className={LIST_CLASS}>
          <li>Procedure interne di test, ispezione e CQ</li>
          <li>Registri di controllo qualità e rapporti di calibrazione degli strumenti</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Documenti di Certificazione</h3>
        <ul className={LIST_CLASS}>
          <li>Rapporti di test di laboratorio e moduli di domanda BIS compilati</li>
          <li>Dichiarazioni, impegni e altri documenti prescritti dal BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori dovrebbero assicurarsi che tutta la documentazione sia
          accurata, completa e coerente prima della presentazione.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni Durante la Certificazione BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sebbene il processo di certificazione sia semplice se gestito
          correttamente, i produttori incontrano spesso diverse sfide.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Interpretazione tecnica —</strong> Mappare i requisiti di IS
            17633:2022 su specifiche progettazioni di prodotto può essere difficile
            senza una guida esperta.
          </li>
          <li>
            <strong>Fallimenti nei test —</strong> Giunzioni deboli, scarsa
            stabilità o problemi sui materiali portano spesso al rifiuto dei test
            di laboratorio.
          </li>
          <li>
            <strong>Lacune nella documentazione —</strong> Registri incompleti o
            incoerenti sono una causa frequente di ritardi nelle domande.
          </li>
          <li>
            <strong>Conformità della fabbrica —</strong> I sistemi di CQ, la
            tracciabilità o i controlli di produzione potrebbero richiedere
            aggiornamenti prima della concessione della licenza.
          </li>
          <li>
            <strong>Coordinamento normativo —</strong> Allineare test di
            laboratorio, ispezioni e follow-up BIS richiede tempo senza un supporto
            strutturato.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vantaggi dell&apos;Assistenza Professionale per la Certificazione BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Collaborare con un consulente BIS esperto può aiutare i produttori a
          evitare costosi ritardi e a semplificare il percorso di certificazione.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Il supporto professionale include tipicamente:
        </p>

        <ul className={LIST_CLASS}>
          <li>Revisione dell&apos;ambito di prodotto e interpretazione dello standard</li>
          <li>Preparazione della documentazione e presentazione della domanda</li>
          <li>Coordinamento dei test di laboratorio e dell&apos;ispezione della fabbrica</li>
          <li>Conformità continua e supporto post-certificazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ciò consente ai produttori di concentrarsi sulla produzione garantendo al
          contempo che i requisiti normativi siano gestiti in modo efficiente.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché Scegliere Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India è una società di consulenza per la conformità
          normativa che assiste produttori, importatori, esportatori e aziende con
          i requisiti di certificazione e approvazione in tutta l&apos;India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          I nostri esperti forniscono un supporto end-to-end per la Certificazione
          BIS per Tavoli e Scrivanie ai sensi di IS 17633:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>I Nostri Servizi Includono</h3>

        <ul className={LIST_CLASS}>
          <li>Valutazione dell&apos;applicabilità del prodotto e consulenza sulla conformità BIS</li>
          <li>Supporto alla documentazione e gestione della domanda</li>
          <li>Coordinamento dei test e assistenza per l&apos;ispezione della fabbrica</li>
          <li>Comunicazione normativa e supporto alla conformità post-certificazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il nostro obiettivo è aiutare le aziende a navigare il processo di
          certificazione in modo efficiente riducendo al minimo ritardi e sfide di
          conformità.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS per Tavoli e Scrivanie ai sensi di IS 17633:2022 è
          un requisito importante per i produttori che desiderano fornire prodotti
          di arredamento conformi nel mercato indiano. La certificazione aiuta a
          garantire che tavoli e scrivanie soddisfino gli standard stabiliti
          relativi a sicurezza, stabilità, durata, resistenza e qualità.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ottenendo la Certificazione BIS e utilizzando il Marchio ISI, i
          produttori possono dimostrare la conformità agli standard indiani,
          migliorare la fiducia dei clienti, rafforzare la propria posizione di
          mercato e sostenere la crescita aziendale a lungo termine.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Se stai pianificando di ottenere la Certificazione BIS per Tavoli e
          Scrivanie ai sensi di IS 17633:2022, Sun Certifications India può
          assisterti con un supporto alla conformità end-to-end, aiutandoti a
          navigare il processo di certificazione in modo efficiente e sicuro.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificazione BIS per Tavoli e Scrivanie (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Cos&apos;è IS 17633:2022?</strong>
              <br />
              IS 17633:2022 è lo Standard Indiano pubblicato dal Bureau of Indian
              Standards (BIS) che stabilisce i requisiti minimi di prestazione,
              stabilità, durata e sicurezza per tavoli e scrivanie destinati a
              utenti adulti in applicazioni da seduti e in piedi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. La certificazione BIS è obbligatoria per tavoli e scrivanie?</strong>
              <br />
              Sì — per i prodotti coperti dall&apos;Ordine di Controllo Qualità (QCO)
              Arredamento applicabile. Produttori e importatori devono possedere una
              licenza BIS valida e conformarsi a IS 17633:2022 prima di produrre,
              importare, vendere o distribuire tale arredamento in India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Quale marchio di certificazione è applicabile ai tavoli e alle scrivanie?</strong>
              <br />
              I tavoli e le scrivanie certificati sono autorizzati a recare il
              Marchio ISI ai sensi dello Schema di Certificazione di Prodotto BIS, a
              indicazione che il prodotto è conforme al relativo Standard Indiano.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Chi può richiedere la certificazione BIS?</strong>
              <br />
              Possono fare domanda sia i produttori indiani sia i produttori esteri,
              a condizione che i loro tavoli e scrivanie rientrino nell&apos;ambito
              del QCO applicabile e soddisfino i requisiti di IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Qual è lo scopo della certificazione BIS?</strong>
              <br />
              La certificazione BIS conferma che l&apos;arredamento soddisfa i
              parametri riconosciuti a livello nazionale per sicurezza, prestazioni
              strutturali, durata e lavorazione — contribuendo a proteggere gli
              utenti finali e a mantenere gli standard di qualità in tutto il
              mercato.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Quali prodotti sono coperti da IS 17633:2022?</strong>
              <br />
              Lo standard copre tavoli e scrivanie per uso adulto utilizzati in
              uffici, istituti scolastici, esercizi commerciali e ambienti di lavoro
              — inclusi scrivanie da ufficio, postazioni di lavoro, tavoli da studio,
              tavoli per conferenze e categorie di arredamento simili.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Il test di laboratorio è obbligatorio?</strong>
              <br />
              Sì. I campioni di prodotto devono essere testati presso un laboratorio
              riconosciuto dal BIS, e il rapporto di test risultante è un documento
              chiave nella domanda di certificazione per dimostrare la conformità a
              IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. I tavoli e le scrivanie importati possono essere venduti senza certificazione BIS?</strong>
              <br />
              No. I prodotti importati che rientrano nella certificazione
              obbligatoria non possono essere legalmente forniti in India senza una
              valida approvazione BIS. Gli importatori devono garantire la conformità
              al relativo standard prima di immettere i prodotti sul mercato.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Qual è il ruolo di un&apos;ispezione della fabbrica?</strong>
              <br />
              Il BIS conduce una valutazione della fabbrica per verificare che il
              produttore mantenga un&apos;infrastruttura di produzione adeguata,
              sistemi di controllo qualità e tracciabilità del prodotto per produrre
              costantemente tavoli e scrivanie conformi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Come può aiutare Sun Certifications India?</strong>
              <br />
              Sun Certifications India offre assistenza end-to-end — inclusi
              valutazione dell&apos;ambito di prodotto, preparazione della
              documentazione, coordinamento dei test di laboratorio, gestione della
              domanda BIS, preparazione all&apos;ispezione della fabbrica e supporto
              alla conformità post-certificazione per tavoli e scrivanie ai sensi di
              IS 17633:2022.
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

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Risorse Correlate
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">Licenza Marchio ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Certificato BIS FMCS</a>
          </li>
        </ul>

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
