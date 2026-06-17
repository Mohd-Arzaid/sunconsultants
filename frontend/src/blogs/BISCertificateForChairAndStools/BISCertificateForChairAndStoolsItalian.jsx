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
    "Certificazione BIS per Sedie e Sgabelli ad Uso Generale | IS 17632:2022";
  const ogTitle =
    "Certificazione BIS per Sedie e Sgabelli ad Uso Generale | IS 17632:2022";
  const twitterTitle =
    "Certificazione BIS per Sedie e Sgabelli ad Uso Generale | IS 17632:2022";
  const metaDescription =
    "Scopri tutto sulla Certificazione BIS per Sedie e Sgabelli ad Uso Generale ai sensi di IS 17632:2022. Comprendi i requisiti del Marchio ISI, i test, il processo di certificazione, i documenti, i benefici e le FAQ";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "Certificazione BIS per Sedie e Sgabelli ad Uso Generale, IS 17632:2022, Marchio ISI Sedie e Sgabelli, Licenza BIS Sedie Sgabelli, Certificazione BIS Arredamento";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/yizi-he-dengzi-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stoelen-en-krukken-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-et-tabourets-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/stuhle-und-hocker-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-dan-bangku-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-e-sgabelli-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-y-taburetes-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-lae-mang-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632"
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
                    Certificazione BIS per Sedie e Sgabelli ad Uso Generale (IS
                    17632:2022)
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
          Certificazione BIS per Sedie e Sgabelli ad Uso Generale (IS 17632:2022)
          – Guida Completa alla Certificazione con Marchio ISI
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="Licenza BIS per Sedie e Sgabelli ad Uso Generale"
            alt="Certificazione BIS per Sedie e Sgabelli ad Uso Generale - Guida al Marchio ISI IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le sedie e gli sgabelli ad uso generale sono tra i prodotti di
          arredamento più utilizzati in case, uffici, istituti scolastici,
          strutture sanitarie, esercizi commerciali, spazi pubblici e ambienti
          commerciali. Poiché questi prodotti per la seduta sono sottoposti a
          un uso regolare e prolungato, devono soddisfare specifici requisiti di
          qualità, sicurezza, resistenza e durata per garantire prestazioni
          affidabili.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con la crescente attenzione alla qualità del prodotto e alla sicurezza
          dei consumatori, la conformità agli Standard Indiani è diventata un
          requisito importante per produttori e importatori di arredamento. La
          Certificazione BIS per Sedie e Sgabelli ad Uso Generale ai sensi di IS
          17632:2022 aiuta a garantire che i prodotti soddisfino i requisiti
          prescritti di prestazione e sicurezza prima di essere immessi sul
          mercato indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificazione ai sensi del Bureau of Indian Standards (BIS)
          consente ai produttori di utilizzare il Marchio ISI sui prodotti
          conformi. Il Marchio ISI rappresenta una garanzia che il prodotto è
          conforme agli standard di qualità indiani riconosciuti e ha
          superato il processo di valutazione richiesto.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con la continua crescita del settore dell&apos;arredamento e la
          preferenza sempre maggiore delle agenzie di acquisto per prodotti
          certificati, la Certificazione BIS è diventata un importante
          requisito di conformità e di accesso al mercato per i produttori.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Punti Chiave della Certificazione BIS per Sedie e Sgabelli ad Uso
          Generale
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
                ["Nome del Prodotto", "Sedie e Sgabelli ad Uso Generale"],
                ["Standard Indiano Applicabile", "IS 17632:2022"],
                ["Tipo di Certificazione", "Certificazione di Prodotto BIS"],
                [
                  "Schema di Certificazione",
                  "Schema-I (Certificazione con Marchio ISI)",
                ],
                ["Marchio Applicabile", "Marchio ISI"],
                ["Autorità di Regolamentazione", "Bureau of Indian Standards"],
                [
                  "Ministero Competente",
                  "Ministero del Commercio e dell'Industria",
                ],
                [
                  "Requisito di Conformità",
                  "Obbligatorio ai sensi del QCO Arredamento applicabile (Ordine di Controllo Qualità)",
                ],
                ["Categoria di Prodotto", "Arredamento"],
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
                        Obbligatorio ai sensi del{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>
                            QCO Arredamento (Ordine di Controllo Qualità)
                          </strong>
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
          Cos&apos;è la Certificazione BIS per Sedie e Sgabelli ad Uso Generale?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS per Sedie e Sgabelli ad Uso Generale è un
          processo di valutazione della conformità condotto ai sensi dello
          Schema di Certificazione di Prodotto BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;obiettivo della certificazione è verificare che il prodotto
          sia conforme ai requisiti specificati in IS 17632:2022. Una volta
          concessa la certificazione, i produttori sono autorizzati a utilizzare
          il Marchio ISI sui propri prodotti.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Il processo di certificazione valuta vari aspetti delle prestazioni
          del prodotto, tra cui:
        </p>

        <ul className={LIST_CLASS}>
          <li>Resistenza</li>
          <li>Stabilità</li>
          <li>Durata</li>
          <li>Prestazioni strutturali</li>
          <li>Requisiti di sicurezza</li>
          <li>Qualità dei materiali</li>
          <li>Lavorazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificazione aiuta a garantire che i prodotti per la seduta
          forniti sul mercato indiano soddisfino i parametri di riferimento
          stabiliti in materia di qualità e sicurezza.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Panoramica di IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 è lo Standard Indiano che specifica i requisiti per
          Sedie e Sgabelli ad Uso Generale.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo standard stabilisce requisiti relativi a sicurezza, resistenza,
          durata, stabilità e prestazioni complessive dell&apos;arredamento per
          la seduta destinato all&apos;uso generale.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Lo standard si applica a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Sedie e sgabelli completamente prodotti</li>
          <li>Sedie e sgabelli fabbricati</li>
          <li>Prodotti pronti per il montaggio dopo l&apos;assemblaggio</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo scopo dello standard è garantire che i prodotti di arredamento
          offrano prestazioni sicure, affidabili e durevoli per tutta la loro
          vita utile prevista.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti Chiave ai Sensi di IS 17632:2022
        </h2>

        <h3 className={SUB_HEADING_CLASS}>Requisiti di Resistenza</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le sedie e gli sgabelli ad uso generale devono possedere un&apos;adeguata
          resistenza strutturale per sopportare le condizioni di carico previste
          durante l&apos;uso normale.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisiti di Stabilità</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;arredamento deve rimanere stabile durante l&apos;uso previsto e
          non deve presentare rischi di ribaltamento non necessari.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisiti di Durata</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I prodotti devono essere in grado di mantenere l&apos;integrità
          strutturale e le prestazioni nel corso di cicli d&apos;uso ripetuti.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisiti di Sicurezza</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Lo standard include requisiti relativi alla sicurezza destinati a
          ridurre al minimo i rischi associati all&apos;uso dell&apos;arredamento.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Qualità dei Materiali e Lavorazione
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La qualità dei materiali, le pratiche di produzione, i metodi di
          assemblaggio, i giunti e le finiture contribuiscono in modo
          significativo alla conformità allo standard.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Considerazioni Ergonomiche</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Lo standard incorpora considerazioni relative alle prestazioni che
          contribuiscono al comfort dell&apos;utente e alla funzionalità pratica.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Prodotti Coperti da IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Lo standard si applica generalmente a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Sedie ad uso generale</li>
          <li>Sgabelli ad uso generale</li>
          <li>Arredamento per seduta fisso destinato all&apos;uso generale</li>
          <li>Prodotti per seduta pronti per il montaggio dopo l&apos;assemblaggio</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori dovrebbero esaminare attentamente l&apos;ambito dello
          standard per determinare l&apos;applicabilità ai propri prodotti.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Consulta anche i Prodotti di Arredamento Coperti dalla
            Certificazione BIS Obbligatoria —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Certificazione BIS per l&apos;arredamento</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          La Certificazione BIS per Sedie e Sgabelli ad Uso Generale è
          Obbligatoria?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sì. I prodotti di arredamento coperti dall&apos;Ordine di Controllo
          Qualità (QCO) Arredamento applicabile devono conformarsi al relativo
          Standard Indiano e ottenere la Certificazione BIS prima di essere
          prodotti, importati, venduti, distribuiti o forniti sul mercato
          indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori coperti dal quadro normativo applicabile devono ottenere
          una licenza BIS e conformarsi ai requisiti di marcatura prescritti
          dal BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test per la Certificazione BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Prima che venga concessa la certificazione, i campioni di prodotto
          devono essere valutati attraverso test condotti in laboratori
          riconosciuti.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          I test si concentrano generalmente sui seguenti parametri:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Valutazione delle Prestazioni Strutturali —</strong>{" "}
            Determina se la sedia o lo sgabello può resistere alle condizioni
            d&apos;uso normali senza cedimenti.
          </li>
          <li>
            <strong>Test di Stabilità —</strong> Valuta se l&apos;arredamento
            rimane stabile durante l&apos;uso previsto e resiste al ribaltamento.
          </li>
          <li>
            <strong>Valutazione della Resistenza —</strong> Valuta la capacità
            di carico e l&apos;integrità strutturale di telai, giunti e supporti.
          </li>
          <li>
            <strong>Valutazione della Durata —</strong> Verifica il
            mantenimento delle prestazioni dopo cicli d&apos;uso ripetuti per
            tutta la vita utile del prodotto.
          </li>
          <li>
            <strong>Valutazione della Sicurezza —</strong> Identifica potenziali
            pericoli e verifica la conformità ai requisiti di sicurezza
            prescritti.
          </li>
          <li>
            <strong>Ispezione della Lavorazione —</strong> Esamina la qualità
            della costruzione, delle finiture, dell&apos;integrità
            dell&apos;assemblaggio e degli standard complessivi di realizzazione.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Marcatura del Prodotto
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          I prodotti certificati ai sensi di IS 17632:2022 devono generalmente
          riportare informazioni identificative quali:
        </p>

        <ul className={LIST_CLASS}>
          <li>Nome o marchio del produttore</li>
          <li>Identificazione del modello o del design</li>
          <li>Numero di lotto o batch</li>
          <li>Data di produzione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Marchio ISI può essere applicato solo dopo aver ottenuto una
          valida licenza BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Sedie e Sgabelli ad Uso Generale
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Passo 1: Valutazione dell&apos;Ambito di Prodotto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il primo passo consiste nel determinare se il prodotto rientra
          nell&apos;ambito di IS 17632:2022 e del QCO Arredamento applicabile.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Esamina il tipo di sedia o sgabello, l&apos;uso previsto, i materiali
          e la costruzione prima di avviare il processo di certificazione.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Passo 2: Preparazione della Documentazione
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il produttore prepara la documentazione tecnica e di conformità
          richiesta per la certificazione, inclusi registri aziendali, dettagli
          della fabbrica, specifiche del prodotto e procedure di controllo
          qualità.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Una documentazione completa e accurata aiuta a evitare ritardi
          non necessari durante la revisione BIS.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Passo 3: Test del Prodotto</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Campioni rappresentativi vengono testati presso un laboratorio
          riconosciuto dal BIS per verificare la conformità ai requisiti di IS
          17632:2022.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Il rapporto di test di laboratorio è un documento tecnico chiave a
          supporto della domanda di certificazione.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Passo 4: Presentazione della Domanda BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La domanda di certificazione viene presentata insieme alla
          documentazione di supporto, ai rapporti di test e alle informazioni
          di produzione.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Il BIS esamina la domanda per completezza e conformità tecnica prima
          di procedere ulteriormente.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Passo 5: Ispezione della Fabbrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il BIS può valutare l&apos;impianto di produzione, i sistemi
          produttivi e i processi di controllo qualità per verificare la
          capacità di produrre costantemente prodotti conformi.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Questa valutazione copre tipicamente l&apos;infrastruttura
          produttiva, i sistemi CQ, i controlli sulle materie prime e la
          tracciabilità del prodotto.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Passo 6: Revisione Tecnica</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La domanda, i rapporti di test e i risultati dell&apos;ispezione
          vengono esaminati dal BIS prima che venga presa una decisione sulla
          certificazione.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Eventuali osservazioni o carenze sollevate durante la revisione
          devono essere affrontate dal richiedente.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Passo 7: Concessione della Licenza</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          In caso di conformità soddisfacente, il BIS concede la licenza e
          autorizza l&apos;uso del Marchio ISI su sedie e sgabelli ad uso
          generale certificati.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori devono continuare a conformarsi ai requisiti BIS per
          tutto il periodo di validità della licenza.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Conformità alle Normative Indiane —</strong> Soddisfa i
            requisiti obbligatori di qualità e sicurezza ai sensi del QCO
            Arredamento applicabile.
          </li>
          <li>
            <strong>Accesso Legale al Mercato —</strong> Fornisci sedie e
            sgabelli certificati in India in conformità ai requisiti normativi
            applicabili.
          </li>
          <li>
            <strong>Credibilità del Prodotto Migliorata —</strong> Il Marchio
            ISI dimostra la conformità agli standard indiani riconosciuti.
          </li>
          <li>
            <strong>Maggiore Fiducia dei Clienti —</strong> Consumatori e
            acquirenti istituzionali preferiscono prodotti valutati rispetto a
            parametri di riferimento consolidati.
          </li>
          <li>
            <strong>Vantaggio Competitivo —</strong> Maggiore accettazione nei
            processi di acquisto commerciale e governativo.
          </li>
          <li>
            <strong>Reputazione del Marchio Migliorata —</strong> Dimostra
            l&apos;impegno verso la qualità del prodotto, la sicurezza e
            l&apos;affidabilità a lungo termine.
          </li>
          <li>
            <strong>Supporto alle PMI —</strong> Aiuta i piccoli e medi
            produttori a rafforzare la presenza sul mercato e a costruire la
            fiducia dei clienti.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni Durante la Certificazione
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Fallimenti nei Test del Prodotto —</strong> Carenze di
            progettazione o produzione possono comportare la non conformità
            durante la valutazione di laboratorio.
          </li>
          <li>
            <strong>Problemi di Documentazione —</strong> Registri incompleti o
            incoerenti causano frequentemente ritardi nella certificazione.
          </li>
          <li>
            <strong>Lacune nella Conformità Produttiva —</strong> I sistemi di
            controllo qualità possono richiedere miglioramenti prima che la
            certificazione possa essere concessa.
          </li>
          <li>
            <strong>Complessità Normativa —</strong> Gestire test,
            ispezioni e procedure di certificazione può essere difficile senza
            una guida esperta.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché Scegliere Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India assiste produttori, importatori, esportatori
          e aziende con i requisiti di conformità normativa in tutta l&apos;India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          I nostri servizi includono:
        </p>

        <ul className={LIST_CLASS}>
          <li>Valutazione dell&apos;applicabilità del prodotto</li>
          <li>Consulenza per la certificazione BIS</li>
          <li>Supporto alla documentazione</li>
          <li>Coordinamento dei test di laboratorio</li>
          <li>Preparazione all&apos;ispezione della fabbrica</li>
          <li>Gestione della domanda</li>
          <li>Assistenza per la conformità normativa</li>
          <li>Supporto post-certificazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il nostro obiettivo è aiutare i clienti a navigare i requisiti di
          certificazione in modo efficiente e a raggiungere la conformità con
          ritardi minimi.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS per Sedie e Sgabelli ad Uso Generale ai sensi
          di IS 17632:2022 svolge un ruolo importante nel garantire la qualità
          del prodotto, la sicurezza, la resistenza, la stabilità e la durata.
          La certificazione aiuta i produttori a dimostrare la conformità agli
          Standard Indiani rafforzando al contempo la fiducia dei clienti e
          supportando l&apos;accesso al mercato.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con la crescente domanda di prodotti di arredamento con qualità
          garantita, la Certificazione BIS e il Marchio ISI offrono una
          garanzia preziosa a consumatori, istituzioni e agenzie di acquisto. I
          produttori che investono nella conformità non solo soddisfano i
          requisiti normativi, ma migliorano anche la propria competitività e
          la reputazione di mercato a lungo termine.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Se stai pianificando di ottenere la Certificazione BIS per Sedie e
          Sgabelli ad Uso Generale ai sensi di IS 17632:2022, Sun Certifications
          India può fornire una guida esperta e un supporto alla conformità
          end-to-end per tutto il processo di certificazione.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificazione BIS per Sedie e Sgabelli ad Uso Generale (IS
          17632:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Cos&apos;è IS 17632:2022?</strong>
              <br />
              IS 17632:2022 è lo Standard Indiano che specifica i requisiti per
              Sedie e Sgabelli ad Uso Generale.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. La Certificazione BIS è obbligatoria per Sedie e Sgabelli ad
                Uso Generale?
              </strong>
              <br />
              I prodotti coperti dall&apos;Ordine di Controllo Qualità
              Arredamento applicabile devono conformarsi ai requisiti di
              certificazione BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Cos&apos;è il Marchio ISI?</strong>
              <br />
              Il Marchio ISI è il marchio di certificazione standard rilasciato
              ai sensi dello Schema di Certificazione di Prodotto BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Chi può richiedere la Certificazione BIS?</strong>
              <br />
              Sia i produttori indiani che i produttori esteri possono
              presentare domanda di certificazione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. La Certificazione BIS richiede test del prodotto?
              </strong>
              <br />
              Sì. I test del prodotto sono una componente importante del
              processo di certificazione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Le sedie pronte per il montaggio sono coperte da IS
                17632:2022?
              </strong>
              <br />
              Sì. Lo standard si applica ai prodotti pronti per il montaggio
              dopo l&apos;assemblaggio.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Quali prodotti sono esclusi dall&apos;ambito di IS
                17632:2022?
              </strong>
              <br />
              Prodotti come sedie reclinabili, sedie a dondolo, sedie basculanti,
              divani e determinati prodotti per seduta specializzati sono
              generalmente esclusi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Quali sono i vantaggi dell&apos;ottenimento della
                Certificazione BIS?
              </strong>
              <br />
              I vantaggi includono conformità normativa, maggiore credibilità del
              prodotto, fiducia dei clienti potenziata e migliore accettazione
              sul mercato.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. I produttori esteri possono ottenere la Certificazione BIS?
              </strong>
              <br />
              Sì. I produttori esteri possono presentare domanda attraverso il
              percorso di certificazione BIS applicabile per produttori esteri.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. In che modo Sun Certifications India può aiutare?</strong>
              <br />
              Sun Certifications India fornisce supporto end-to-end per la
              certificazione BIS, inclusi documentazione, coordinamento dei test,
              gestione della domanda e assistenza per la conformità.
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

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Risorse Correlate
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Certificazione ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Certificazione BIS per Produttori Esteri
            </a>
          </li>
        </ul>

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
