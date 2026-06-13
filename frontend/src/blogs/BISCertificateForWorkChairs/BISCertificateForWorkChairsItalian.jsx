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
                    Certificazione BIS per Sedie da Lavoro (IS 17631:2022)
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
          Certificazione BIS per Sedie da Lavoro (IS 17631:2022) – Guida
          Completa alla Certificazione Marchio ISI
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="Licenza BIS per Sedie da Lavoro"
            alt="Certificazione BIS per Sedie da Lavoro - Guida al Marchio ISI IS 17631:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le sedie da lavoro sono diventate una componente essenziale degli
          ambienti di lavoro moderni, delle istituzioni educative, degli uffici
          governativi, degli spazi di co-working e degli uffici domestici. Poiché
          le organizzazioni pongono sempre maggiore enfasi sul comfort dei
          dipendenti, sulla produttività, sull&apos;ergonomia sul posto di lavoro
          e sul benessere occupazionale, la domanda di sedie da lavoro di alta
          qualità continua a crescere.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Una sedia mal progettata può influire negativamente su postura, comfort
          e produttività. Per questo motivo, qualità, sicurezza, durata e
          prestazioni ergonomiche sono considerazioni critiche per produttori,
          acquirenti e agenzie di approvvigionamento. Per garantire standard di
          qualità uniformi in tutto il settore, il Bureau of Indian Standards
          (BIS) ha stabilito IS 17631:2022, lo Standard Indiano applicabile alle
          sedie da lavoro.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori coperti dal quadro normativo applicabile sono tenuti a
          ottenere la Certificazione BIS e ad apporre il Marchio ISI sui prodotti
          conformi. La Certificazione BIS dimostra che la sedia da lavoro è stata
          valutata rispetto ai requisiti prescritti in materia di sicurezza,
          resistenza, stabilità, durata e prestazioni ergonomiche.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa guida completa spiega tutto ciò che produttori, importatori,
          marchi di mobili, professionisti degli acquisti e imprenditori devono
          sapere sulla Certificazione BIS per Sedie da Lavoro secondo IS
          17631:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Panoramica Rapida della Certificazione BIS per Sedie da Lavoro
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Particolare
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Dettagli
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Prodotto", "Sedie da Lavoro"],
                ["Standard Indiano Applicabile", "IS 17631:2022"],
                ["Tipo di Certificazione", "Certificazione Prodotto BIS"],
                [
                  "Schema di Certificazione Applicabile",
                  "Schema-I (Certificazione Marchio ISI)",
                ],
                ["Marchio Applicabile", "Marchio ISI"],
                [
                  "Autorità di Regolamentazione",
                  "Bureau of Indian Standards (BIS)",
                ],
                [
                  "Ministero Applicabile",
                  "Ministero del Commercio e dell'Industria",
                ],
                [
                  "Requisito di Conformità",
                  "Obbligatorio ai sensi del QCO Mobili applicabile (Quality Control Order)",
                ],
                [
                  "Richiedenti Ammissibili",
                  "Produttori Indiani e Produttori Stranieri ",
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
                    {particular === "Schema di Certificazione Applicabile" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Schema-I (Certificazione Marchio ISI)
                      </a>
                    ) : particular === "Requisito di Conformità" ? (
                      <>
                        Obbligatorio ai sensi del{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>QCO Mobili applicabile (Quality Control Order)</strong>
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
          Cos&apos;è la Certificazione BIS per Sedie da Lavoro?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS per Sedie da Lavoro è un processo di valutazione
          della conformità condotto nell&apos;ambito dello Schema di
          Certificazione Prodotti del Bureau of Indian Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo scopo della certificazione è verificare che le sedie da lavoro
          soddisfino i requisiti specificati in IS 17631:2022. Una volta ottenuta
          con successo la certificazione, i produttori possono apporre il Marchio
          ISI sui propri prodotti.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Il processo di certificazione valuta vari aspetti di prestazione e
          sicurezza delle sedie da lavoro, tra cui:
        </p>

        <ul className={LIST_CLASS}>
          <li>Design ergonomico</li>
          <li>Integrità strutturale</li>
          <li>Stabilità</li>
          <li>Durata</li>
          <li>Requisiti di sicurezza</li>
          <li>Qualità della lavorazione</li>
          <li>Prestazioni del prodotto</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Marchio ISI garantisce che il prodotto è stato valutato rispetto agli
          standard indiani riconosciuti e soddisfa i requisiti di qualità
          prescritti.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS è Importante per le Sedie da Lavoro
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le sedie da lavoro vengono utilizzate per periodi prolungati in uffici,
          istituzioni educative, stabilimenti commerciali e spazi di lavoro
          domestici. Poiché gli utenti trascorrono una parte significativa della
          giornata seduti, la qualità e le prestazioni ergonomiche di queste sedie
          influiscono direttamente sul comfort e sull&apos;efficienza sul posto di
          lavoro.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La Certificazione BIS aiuta a garantire che le sedie da lavoro
          certificate:
        </p>

        <ul className={LIST_CLASS}>
          <li>Soddisfino i requisiti di sicurezza prescritti</li>
          <li>Offrano prestazioni affidabili</li>
          <li>Presentino un&apos;adeguata resistenza strutturale</li>
          <li>Mantengano la stabilità durante l&apos;uso</li>
          <li>Supportino la durata a lungo termine</li>
          <li>Siano conformi agli standard di qualità indiani</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per i produttori, la certificazione aiuta a dimostrare la qualità del
          prodotto favorendo al contempo la conformità normativa e
          l&apos;accettazione sul mercato.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Panoramica di IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022 è lo Standard Indiano che specifica i requisiti per le
          sedie da lavoro.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Lo standard stabilisce requisiti relativi a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Sicurezza</li>
          <li>Resistenza</li>
          <li>Stabilità</li>
          <li>Durata</li>
          <li>Considerazioni ergonomiche</li>
          <li>Prestazioni funzionali</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;obiettivo è garantire che le sedie da lavoro siano in grado di
          offrire prestazioni sicure e affidabili durante un uso prolungato negli
          ambienti di lavoro.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Ambito di IS 17631:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Secondo lo standard, IS 17631:2022 copre le sedie da lavoro e si
          applica a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Sedie da lavoro completamente prodotte</li>
          <li>Sedie da lavoro fabbricate</li>
          <li>Sedie da lavoro pronte per l&apos;assemblaggio dopo il montaggio</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I requisiti dello standard si applicano al prodotto assemblato destinato
          all&apos;uso.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tipi di Sedie da Lavoro Coperte da IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          A seconda del design del prodotto e dell&apos;applicazione prevista, lo
          standard può applicarsi a varie categorie di sedute per ambienti di
          lavoro, tra cui:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Sedie da Ufficio —</strong> Sedute utilizzate in uffici
            aziendali, reparti amministrativi e ambienti professionali di lavoro.
          </li>
          <li>
            <strong>Sedie da Lavoro —</strong> Sedie progettate per il lavoro
            quotidiano alla scrivania, alle postazioni e alle attività sedute di
            routine.
          </li>
          <li>
            <strong>Sedie da Lavoro Regolabili —</strong> Modelli con altezza,
            inclinazione o altre caratteristiche regolabili per migliorare comfort
            ed ergonomia.
          </li>
          <li>
            <strong>Sedie da Lavoro Istituzionali —</strong> Sedie fornite a
            scuole, college, uffici governativi e istituzioni commerciali.
          </li>
          <li>
            <strong>Sedie per Home Office —</strong> Sedie da lavoro progettate
            per lavoro remoto, liberi professionisti e configurazioni di ufficio
            domestico.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esaminare attentamente design, meccanismo e uso previsto del prodotto per
          confermare se la sedia rientra nell&apos;ambito di IS 17631:2022.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Consulta anche i Prodotti per Mobili Coperti dalla Certificazione BIS
            Obbligatoria —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Certificazione BIS per mobili</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti Chiave secondo IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo standard si concentra su diverse caratteristiche di prestazione
          importanti che contribuiscono alla qualità e alla sicurezza delle sedie
          da lavoro.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Design Ergonomico —</strong> Riguarda il comfort dell&apos;utente,
            il supporto di sedile e schienale, la regolabilità e la postura
            corretta per ridurre l&apos;affaticamento e migliorare la produttività
            sul posto di lavoro.
          </li>
          <li>
            <strong>Requisiti di Resistenza —</strong> Telaio, giunti e strutture
            di supporto devono resistere all&apos;uso normale senza cedimenti o
            perdita di integrità.
          </li>
          <li>
            <strong>Requisiti di Stabilità —</strong> Le sedie devono resistere al
            ribaltamento e rimanere stabili durante l&apos;uso seduto regolare e
            i movimenti.
          </li>
          <li>
            <strong>Requisiti di Durata —</strong> I prodotti devono mantenere
            prestazioni costanti dopo un uso prolungato e ripetuto quotidiano
            durante la vita utile prevista.
          </li>
          <li>
            <strong>Requisiti di Sicurezza —</strong> Design e costruzione devono
            ridurre al minimo i rischi evitabili derivanti da instabilità,
            difetti o costruzione non sicura.
          </li>
          <li>
            <strong>Qualità dei Materiali —</strong> Componenti e finiture devono
            soddisfare standard di qualità che supportino prestazioni sicure,
            durevoli e affidabili.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test per la Certificazione BIS delle Sedie da Lavoro
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Prima che venga concessa la certificazione, i campioni di prodotto
          vengono valutati mediante test in un laboratorio riconosciuto. I test
          aiutano a verificare la conformità ai requisiti specificati in IS
          17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Test Chiave Eseguiti</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
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
              {[
                ["4", "Progettazione e lavorazione"],
                ["7.3.1", "Ribaltamento Bordo Anteriore"],
                ["7.3.2", "Ribaltamento in Avanti"],
                [
                  "7.3.3",
                  "Ribaltamento in Avanti per Sedie con Poggiapiedi",
                ],
                [
                  "7.3.4",
                  "Ribaltamento Laterale per Sedie Senza Braccioli",
                ],
                [
                  "7.3.5",
                  "Ribaltamento Laterale per Sedie con Braccioli",
                ],
                [
                  "7.3.6",
                  "Ribaltamento all'Indietro per Sedie Senza Schienale",
                ],
                ["7.4.1", "Test di Carico Statico Bordo Anteriore Sedile"],
                ["7.4.2", "Test di Carico Statico Combinato Sedile e Schienale"],
                [
                  "7.4.3",
                  "Test di Carico Statico Bracciolo Verso il Basso — Centrale",
                ],
                [
                  "7.4.4",
                  "Test di Carico Statico Bracciolo Verso il Basso — Anteriore",
                ],
                ["7.4.5", "Test di Carico Statico Bracciolo Laterale"],
                ["7.4.6", "Test di Carico Statico Poggiapiedi"],
              ].map(([clause, requirement], index) => (
                <TableRow
                  key={clause}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {clause}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {requirement}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Sedie da Lavoro
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori che cercano la Certificazione BIS secondo IS 17631:2022
          devono completare un processo di certificazione strutturato.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Passo 1: Valutazione dell&apos;Applicabilità del Prodotto —</strong>{" "}
            Confermare se la sedia da lavoro rientra in IS 17631:2022 e nel QCO
            Mobili applicabile prima di avviare la certificazione.
          </li>
          <li>
            <strong>Passo 2: Preparazione della Documentazione —</strong>{" "}
            Compilare documenti tecnici, di produzione, controllo qualità e legali
            richiesti per la revisione BIS.
          </li>
          <li>
            <strong>Passo 3: Test del Prodotto —</strong> Inviare campioni a un
            laboratorio riconosciuto BIS per la valutazione secondo IS 17631:2022.
          </li>
          <li>
            <strong>Passo 4: Presentazione della Domanda —</strong> Presentare la
            domanda BIS con rapporti di test, dettagli della fabbrica e documenti
            di conformità di supporto.
          </li>
          <li>
            <strong>Passo 5: Ispezione della Fabbrica —</strong> BIS valuta i
            sistemi di produzione, le procedure QC e la tracciabilità presso lo
            stabilimento di produzione.
          </li>
          <li>
            <strong>Passo 6: Revisione Tecnica —</strong> BIS valuta la domanda, i
            risultati di laboratorio e i risultati dell&apos;ispezione prima
            dell&apos;approvazione finale.
          </li>
          <li>
            <strong>Passo 7: Concessione della Licenza BIS —</strong> In caso di
            conformità positiva, BIS rilascia la licenza e autorizza
            l&apos;uso del Marchio ISI sulle sedie da lavoro certificate.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Produttori Indiani
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          I produttori indiani di solito presentano domanda attraverso il percorso
          di certificazione nazionale. Il processo generalmente include:
        </p>

        <ul className={LIST_CLASS}>
          <li>Test del prodotto in un laboratorio riconosciuto BIS</li>
          <li>Revisione documentale e presentazione della domanda BIS</li>
          <li>Valutazione della fabbrica e valutazione tecnica da parte di BIS</li>
          <li>Concessione della licenza BIS e autorizzazione al Marchio ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dopo la certificazione, i produttori devono mantenere la conformità
          continua con sorveglianza BIS, marcatura e requisiti di qualità.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Produttori Stranieri
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori stranieri che intendono esportare sedie da lavoro in India
          devono anche ottenere la Certificazione BIS prima di fornire prodotti
          coperti da requisiti di certificazione obbligatoria.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Il processo generalmente include:
        </p>

        <ul className={LIST_CLASS}>
          <li>
            Nomina di un Rappresentante Indiano Autorizzato (AIR)
          </li>
          <li>Test del prodotto all&apos;estero e valutazione della fabbrica</li>
          <li>Revisione della domanda BIS e approvazione della certificazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ciò garantisce che i prodotti importati soddisfino gli stessi requisiti
          di qualità e sicurezza applicabili ai produttori nazionali.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS delle Sedie da Lavoro
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La documentazione è una parte critica del processo di certificazione BIS
          per le sedie da lavoro. I requisiti possono differire in base al fatto
          che il richiedente sia un produttore indiano, un produttore straniero o
          un importatore, e allo schema di certificazione seguito. Documenti
          incompleti o incoerenti sono tra le cause più comuni di ritardi nella
          domanda.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          I seguenti documenti sono comunemente richiesti durante la certificazione
          BIS delle sedie da lavoro secondo IS 17631:2022:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Documenti Aziendali —</strong> Certificato di registrazione
            dell&apos;azienda, licenza di produzione (se applicabile),
            registrazione GST, prova dell&apos;indirizzo aziendale e dettagli del
            firmatario autorizzato con prova di identità e indirizzo.
          </li>
          <li>
            <strong>Documenti di Produzione —</strong> Piano di layout della
            fabbrica, diagramma di flusso del processo produttivo, elenco di
            macchinari e attrezzature di test e dettagli
            dell&apos;infrastruttura produttiva e della capacità installata.
          </li>
          <li>
            <strong>Documenti di Prodotto —</strong> Specifiche del prodotto,
            disegni tecnici o ingegneristici, catalogo o elenco modelli, distinta
            base (BOM) e dettagli di materie prime, componenti e parti critiche
            utilizzate nella sedia da lavoro.
          </li>
          <li>
            <strong>Documenti di Controllo Qualità —</strong> Procedure scritte di
            controllo qualità, registri di ispezione dei materiali in ingresso,
            rapporti di ispezione in processo e prodotti finiti, metodi di test
            interni e certificati di calibrazione per attrezzature di misura e
            test.
          </li>
          <li>
            <strong>Documenti di Certificazione —</strong> Rapporti di test da un
            laboratorio riconosciuto BIS, moduli di domanda BIS compilati
            correttamente, dichiarazioni e impegni, campioni di etichette o
            marcatura e qualsiasi documento aggiuntivo prescritto da BIS per il
            percorso di certificazione specifico.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tutti i documenti devono essere accurati, completi e coerenti con i
          dettagli del prodotto presentati nella domanda BIS. Si consiglia ai
          produttori di esaminare attentamente i requisiti documentali prima della
          presentazione per evitare ritardi non necessari nell&apos;elaborazione
          della certificazione.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Sedie da Lavoro
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Conformità Normativa —</strong> Soddisfare gli standard indiani
            obbligatori e i requisiti QCO per produzione e vendita legali.
          </li>
          <li>
            <strong>Accesso Legale al Mercato —</strong> Fornire sedie da lavoro
            certificate in India senza rischio normativo per le categorie di
            prodotto coperte.
          </li>
          <li>
            <strong>Credibilità Rafforzata —</strong> Il Marchio ISI segnala
            qualità, sicurezza e conformità verificate con IS 17631:2022.
          </li>
          <li>
            <strong>Fiducia del Cliente —</strong> Acquirenti aziendali,
            istituzioni e utenti finali si fidano di prodotti testati rispetto a
            benchmark nazionali.
          </li>
          <li>
            <strong>Migliore Approvvigionamento —</strong> Migliora
            l&apos;idoneità in gare governative, istituzionali e commerciali ad
            alto volume.
          </li>
          <li>
            <strong>Reputazione del Marchio Rafforzata —</strong> Dimostra
            impegno verso qualità, ergonomia e affidabilità del prodotto a lungo
            termine.
          </li>
          <li>
            <strong>Controllo Qualità Migliorato —</strong> Incoraggia sistemi QC
            strutturati, tracciabilità e standard di produzione coerenti.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni Durante la Certificazione BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Interpretazione tecnica —</strong> Mappare le clausole IS
            17631:2022 a design, meccanismi e varianti specifici della sedia può
            essere complesso.
          </li>
          <li>
            <strong>Fallimenti nei test —</strong> Telai deboli, scarsa stabilità
            o problemi del meccanismo spesso portano al rifiuto nei test di
            ribaltamento o di carico.
          </li>
          <li>
            <strong>Lacune documentali —</strong> Disegni non corrispondenti,
            registri QC incompleti o dichiarazioni mancanti ritardano
            comunemente l&apos;approvazione.
          </li>
          <li>
            <strong>Conformità della fabbrica —</strong> Controlli di produzione,
            tracciabilità e test interni potrebbero richiedere un aggiornamento
            prima della concessione della licenza.
          </li>
          <li>
            <strong>Coordinamento normativo —</strong> Allineare test di
            laboratorio, ispezioni BIS e richieste di follow-up richiede tempo
            senza supporto esperto.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché Scegliere Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India è una società di consulenza per la conformità
          normativa che assiste produttori, importatori, esportatori e imprese
          nell&apos;ottenimento di varie certificazioni e approvazioni richieste
          per il mercato indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il nostro team fornisce assistenza end-to-end per la Certificazione BIS
          delle Sedie da Lavoro secondo IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>I Nostri Servizi Includono</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Valutazione dell&apos;Applicabilità del Prodotto —</strong>{" "}
            Confermiamo se le vostre sedie da lavoro rientrano in IS 17631:2022 e
            nel QCO applicabile.
          </li>
          <li>
            <strong>Consulenza sulla Conformità BIS —</strong> Guida esperta su
            percorsi di certificazione, obblighi e requisiti dello standard.
          </li>
          <li>
            <strong>Assistenza Documentale —</strong> Preparazione, revisione e
            organizzazione di tutti i documenti della domanda BIS e della
            fabbrica.
          </li>
          <li>
            <strong>Coordinamento dei Test —</strong> Supporto end-to-end per
            l&apos;invio dei campioni e i test in laboratori riconosciuti.
          </li>
          <li>
            <strong>Supporto all&apos;Ispezione della Fabbrica —</strong>{" "}
            Controlli di preparazione per la valutazione della fabbrica BIS e le
            valutazioni di conformità.
          </li>
          <li>
            <strong>Gestione della Domanda —</strong> Gestione delle presentazioni
            BIS, follow-up e comunicazioni normative per conto vostro.
          </li>
          <li>
            <strong>Supporto Post-Certificazione —</strong> Assistenza continua
            con sorveglianza, regole di marcatura e requisiti di mantenimento
            della licenza.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS per Sedie da Lavoro secondo IS 17631:2022 svolge
          un ruolo importante nel garantire qualità, sicurezza, durata, stabilità
          e prestazioni ergonomiche nei prodotti per sedute da lavoro.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ottenendo la Certificazione BIS e utilizzando il Marchio ISI, i
          produttori possono dimostrare la conformità agli standard indiani,
          rafforzare la fiducia dei clienti, migliorare la credibilità del prodotto
          e supportare la crescita aziendale a lungo termine.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Che siate produttori indiani o produttori esteri che cercano accesso al
          mercato indiano, comprendere i requisiti di IS 17631:2022 è un passo
          essenziale verso la conformità normativa e il successo sul mercato.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Se state pianificando di ottenere la Certificazione BIS per Sedie da
          Lavoro secondo IS 17631:2022, Sun Certifications India può aiutarvi a
          semplificare il processo attraverso una guida normativa esperta e un
          supporto completo alla conformità.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificazione BIS per Sedie da Lavoro (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Cos&apos;è la Certificazione BIS per Sedie da Lavoro?</strong>
              <br />
              La Certificazione BIS conferma che le sedie da lavoro soddisfano i
              requisiti di IS 17631:2022 e i requisiti di certificazione
              applicabili.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Cos&apos;è IS 17631:2022?</strong>
              <br />
              IS 17631:2022 è lo Standard Indiano che specifica i requisiti per
              le sedie da lavoro, inclusi sicurezza, resistenza, stabilità, durata
              e considerazioni ergonomiche.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. La Certificazione BIS è obbligatoria per le sedie da lavoro?
              </strong>
              <br />
              Le sedie da lavoro coperte dal quadro normativo applicabile devono
              conformarsi ai requisiti di certificazione BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Cos&apos;è il Marchio ISI?</strong>
              <br />
              Il Marchio ISI è il marchio di certificazione standard rilasciato
              nell&apos;ambito dello Schema di Certificazione Prodotti BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Chi può richiedere la Certificazione BIS?</strong>
              <br />
              Sia i produttori indiani che i produttori stranieri possono
              presentare domanda.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. La Certificazione BIS richiede test del prodotto?</strong>
              <br />
              Sì. I test del prodotto sono una parte importante del processo di
              certificazione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Le sedie da lavoro importate richiedono la Certificazione BIS?
              </strong>
              <br />
              I prodotti coperti da requisiti di certificazione obbligatoria
              devono conformarsi alle normative BIS applicabili prima di essere
              forniti in India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Quali test vengono eseguiti secondo IS 17631:2022?</strong>
              <br />
              Lo standard include valutazioni come valutazione del design e della
              lavorazione, verifica dimensionale, test di stabilità e test di
              carico statico.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Perché il design ergonomico è importante per le sedie da lavoro?
              </strong>
              <br />
              Il design ergonomico aiuta a migliorare il comfort dell&apos;utente,
              supporta una postura corretta e contribuisce a una migliore
              esperienza sul posto di lavoro.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Come può aiutare Sun Certifications India?</strong>
              <br />
              Sun Certifications India fornisce assistenza con valutazione
              dell&apos;applicabilità, documentazione, coordinamento dei test,
              preparazione all&apos;ispezione, gestione della domanda e supporto
              alla conformità.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="Certificazione BIS per Sedie da Lavoro - IS 17631:2022 PDF"
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
              {" "}
              Certificato ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Certificato BIS per Produttore Straniero
            </a>
          </li>
        </ul>

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
