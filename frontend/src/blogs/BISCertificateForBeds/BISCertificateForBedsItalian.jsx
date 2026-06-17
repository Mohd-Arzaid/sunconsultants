import FaqAuthorItalian from "@/components/common/FaqAuthor/FaqAuthorItalian";
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
import ManyUsersAlsoReadItalian from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadItalian";
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
import LanguageSelector from "./LanguageSelector";
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

const BISCertificateForBedsItalian = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default BISCertificateForBedsItalian;

const MetaTags = () => {
  const title = "Certificato BIS per Letti | IS 17635:2022 Licenza BIS";
  const ogTitle = "Certificazione BIS per Letti – Guida IS 17635:2022";
  const twitterTitle = "Licenza BIS per Letti | IS 17635:2022";
  const metaDescription =
    "Ottieni il Certificato BIS per letti secondo IS 17635:2022. Processo, documenti, test, costi e tempistiche per la Certificazione BIS in India.";
  const ogDescription =
    "Guida completa alla Certificazione BIS per letti secondo IS 17635:2022. Scopri processo, costi, documenti, test e vantaggi della licenza BIS.";
  const twitterDescription =
    "Richiedi il Certificato BIS per letti secondo IS 17635:2022. Scopri il processo BIS, documenti, test, tariffe e tempistiche in India.";
  const metaKeywords =
    "Certificato BIS per Letti, Licenza BIS per Letti, IS 17635:2022, Certificazione BIS per Letti";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/letti-is-17635";
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
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/chuangju-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/bedden-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/betten-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/beddo-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/chimdae-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/camas-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-is-17635"
      />

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
              "https://bis-certifications.com/blogs/isi-products/letti-is-17635",
          },
          headline: "Certificato BIS per Letti",
          description:
            "La certificazione BIS per letti in India è un obbligo di garanzia della qualità, principalmente ai sensi di IS 17635:2022, che garantisce standard di sicurezza, durata e prestazioni.",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          author: {
            "@type": "Person",
            name: "Dhruv Aggarwal",
            url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
          },
          publisher: {
            "@type": "Organization",
            name: "Sun Certifications India",
            logo: {
              "@type": "ImageObject",
              url: "https://bis-certifications.com/company-logo/company-logo.webp",
            },
          },
          datePublished: "2026-02-01",
          dateModified: "2026-04-14",
        })}
      </script>

      {/* Rating Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "Certificato BIS per Letti",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "La certificazione BIS per letti in India è un obbligo di garanzia della qualità, principalmente ai sensi di IS 17635:2022, che garantisce standard di sicurezza, durata e prestazioni.",
          brand: {
            "@type": "Brand",
            name: "Sun Certifications India",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "58042",
          },
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "La certificazione BIS è obbligatoria per i letti in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sì, ai sensi di IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "Qual è la validità del Certificato BIS?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1–2 anni, rinnovabile.",
              },
            },
            {
              "@type": "Question",
              name: "I produttori stranieri possono fare domanda?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sì, tramite FMCS.",
              },
            },
            {
              "@type": "Question",
              name: "Il Certificato BIS può essere richiesto online?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sì.",
              },
            },
            {
              "@type": "Question",
              name: "Il Marchio ISI è obbligatorio sui letti?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sì.",
              },
            },
            {
              "@type": "Question",
              name: "Quanto tempo richiede il processo?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30–45 giorni.",
              },
            },
            {
              "@type": "Question",
              name: "Sia i letti in legno che in metallo sono coperti?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sì, se conformi a IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "L'ispezione della fabbrica è obbligatoria?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sì.",
              },
            },
            {
              "@type": "Question",
              name: "I commercianti possono fare domanda per BIS?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Solo i proprietari di marchi con controllo di produzione.",
              },
            },
          ],
        })}
      </script>
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
                    Certificato BIS per Letti – IS 17635:2022
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
          Certificato BIS per Letti – Guida Completa IS 17635:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="Licenza BIS per Letti"
            alt="Certificato BIS per Letti - Certificazione BIS IS 17635:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Letti è un requisito obbligatorio di conformità
          in India per produttori e importatori di letti destinati all&apos;uso
          domestico e commerciale. Secondo l&apos;ultimo Standard Indiano IS
          17635:2022 – Letti (Requisiti di Sicurezza), tutti i letti devono
          soddisfare rigorosi parametri di sicurezza, durata, struttura e
          prestazioni prima di essere venduti nel mercato indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          I letti sono prodotti di arredamento essenziali utilizzati
          quotidianamente in case, hotel, ospedali, ostelli, alloggi PG e
          strutture istituzionali. Qualsiasi debolezza strutturale, bordi
          taglienti, cedimento del materiale o scarsa capacità di carico può
          causare lesioni gravi. Per prevenire tali rischi, il Bureau of Indian
          Standards (BIS) impone la{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            Certificazione BIS
          </a>{" "}
          per Letti.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa guida completa spiega tutto sulla Licenza BIS per Letti,
          inclusi gli standard applicabili, il processo di certificazione, i
          requisiti di test, documenti, tariffe, tempistiche, sanzioni e
          benefici.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Punti Chiave della Certificazione BIS per Letti
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
                ["Prodotto", "Letti"],
                ["Standard Indiano", "IS 17635:2022"],
                ["Titolo dello Standard", "Letti – Specifica"],
                ["Schema di Certificazione", "Certificazione BIS con Marchio ISI"],
                [
                  "Autorità di Regolamentazione",
                  "Bureau of Indian Standards (BIS)",
                ],
                ["Marchio Applicabile", "Marchio ISI"],
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
                        Certificazione BIS con Marchio ISI
                      </a>
                    ) : particular === "Requisito di Conformità" ? (
                      <>
                        Obbligatorio ai sensi del{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
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
          Cos&apos;è la Certificazione BIS per Letti?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS per Letti è un processo di valutazione della
          conformità attraverso il quale i produttori dimostrano che i propri
          prodotti sono conformi ai requisiti specificati in IS 17635:2022. Una
          volta verificata la conformità tramite test, valutazione della
          fabbrica e revisione normativa, al produttore viene concessa una
          licenza BIS e può apporre il Marchio ISI sui prodotti certificati.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Il quadro di certificazione mira a garantire che i letti disponibili
          sul mercato indiano soddisfino i requisiti stabiliti relativi a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Resistenza strutturale</li>
          <li>Stabilità</li>
          <li>Durata</li>
          <li>Prestazioni superficiali</li>
          <li>Sicurezza durante l&apos;uso normale</li>
          <li>Prestazioni in condizioni di uso improprio prevedibile</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questi requisiti aiutano a creare un parametro di riferimento
          coerente per la qualità e la protezione dei consumatori tra diversi
          design di letti e materiali di produzione.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS è Importante per i Letti
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I letti influenzano direttamente la sicurezza dell&apos;utente perché
          sono progettati per sostenere carichi significativi per periodi
          prolungati. Prodotti mal progettati o insufficientemente testati
          possono subire cedimenti strutturali, instabilità, deformazioni o
          deterioramento prematuro.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 affronta queste preoccupazioni definendo requisiti
          standardizzati di prestazione e sicurezza che i produttori devono
          soddisfare prima che i loro prodotti entrino sul mercato. Lo standard
          include requisiti relativi a resistenza, stabilità, durata,
          lavorazione e prestazioni superficiali.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Per i produttori, la certificazione BIS offre diversi vantaggi:
        </p>

        <ul className={LIST_CLASS}>
          <li>Autorizzazione legale alla vendita dei prodotti coperti in India</li>
          <li>Dimostrazione della conformità agli Standard Indiani</li>
          <li>Migliore accettazione sul mercato</li>
          <li>Maggiore fiducia dei consumatori</li>
          <li>Riduzione del rischio di azioni normative</li>
          <li>
            Vantaggio competitivo negli appalti istituzionali e commerciali
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Panoramica di IS 17635:2022 per Letti
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Governo dell&apos;India ha introdotto Ordini di Controllo Qualità
          per diversi prodotti di arredamento al fine di garantire che i prodotti
          immessi sul mercato soddisfino i requisiti prescritti di sicurezza e
          qualità.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quando IS 17635:2022 è coperto dal QCO Arredamento applicabile, i
          produttori devono ottenere la certificazione BIS ai sensi dello
          Schema-I e utilizzare il Marchio Standard (Marchio ISI) in conformità
          ai requisiti di licenza BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 è lo Standard Indiano che specifica i requisiti di
          prestazione e sicurezza per letti destinati a utenti adulti in
          ambienti domestici e non domestici. Lo standard stabilisce requisiti
          che aiutano a garantire che i letti rimangano sicuri, funzionali e
          durevoli per tutta la loro vita utile prevista.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Scopo di IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 è stato sviluppato per fornire uno standard completo
          basato sulle prestazioni applicabile ai moderni design di letti
          prodotti con vari materiali e metodi di costruzione. Lo standard
          sostituisce il precedente IS 7259 (Parte 1):1988, che si concentrava
          principalmente sui letti in legno.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo standard valuta i letti senza limitare la conformità a un
          particolare materiale o processo di produzione. Si concentra invece
          su come il prodotto finito si comporta in condizioni di test
          prescritte. Questo approccio consente una valutazione coerente di
          costruzioni in legno, metallo, legno ingegnerizzato e altri materiali.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Ambito di IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Secondo lo standard, IS 17635:2022 copre i requisiti relativi alle
          prestazioni e alla sicurezza dei letti progettati per utenti adulti.
          Lo standard si applica ai prodotti destinati all&apos;uso sia in
          ambienti domestici che non domestici.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Lo standard si applica a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Letti completamente prodotti</li>
          <li>Letti fabbricati</li>
          <li>Letti pronti per il montaggio dopo l&apos;assemblaggio</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ciò garantisce che i prodotti forniti in forma assemblata o
          smontabile siano valutati utilizzando gli stessi criteri di
          prestazione e sicurezza.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Obiettivi dello Standard</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Gli obiettivi principali di IS 17635:2022 includono:
        </p>

        <ul className={LIST_CLASS}>
          <li>Garantire la sicurezza dell&apos;utente</li>
          <li>Verificare la resistenza strutturale</li>
          <li>Valutare la stabilità del prodotto</li>
          <li>Valutare la durata in condizioni di uso ripetuto</li>
          <li>Stabilire requisiti minimi di prestazione</li>
          <li>
            Promuovere una qualità del prodotto coerente tra i produttori
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo standard include anche metodologie di test destinate a valutare i
          letti in condizioni di uso normale e scenari di uso improprio
          ragionevolmente prevedibili.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Prodotti Coperti da IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 si applica ai letti destinati a utenti adulti in
          ambienti domestici e non domestici. Lo standard si concentra sulle
          prestazioni, la sicurezza, la resistenza, la stabilità e la durata
          del prodotto finito piuttosto che limitare la conformità a un
          materiale o metodo di produzione specifico.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Lo standard si applica a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Letti completamente prodotti</li>
          <li>Letti fabbricati</li>
          <li>Letti pronti per il montaggio (RTA) dopo l&apos;assemblaggio</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori che forniscono letti in condizione smontabile devono
          garantire che il prodotto assemblato sia conforme a tutti i requisiti
          applicabili dello standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>Nota:</strong> Questo standard non copre letti ad acqua, letti
          ad aria, letti pieghevoli, letti a castello e letti per persone con
          esigenze speciali, né i letti per scopi sanitari e medici.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Consulta anche i Prodotti di Arredamento Coperti dalla Certificazione
            BIS Obbligatoria —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Certificazione BIS per arredamento</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti Chiave ai sensi di IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;obiettivo principale di IS 17635:2022 è garantire che i letti
          rimangano sicuri, stabili, durevoli e idonei al loro scopo previsto
          durante le normali condizioni d&apos;uso. Per raggiungere questo
          obiettivo, lo standard stabilisce diversi requisiti chiave di
          prestazione.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisiti di Stabilità</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          I letti devono dimostrare un&apos;adeguata resistenza al ribaltamento
          e all&apos;instabilità durante l&apos;uso normale. I test di
          stabilità valutano se il prodotto rimane sicuro quando sottoposto a
          condizioni di carico previste e movimenti dell&apos;utente.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Un letto stabile riduce al minimo il rischio di incidenti e migliora
          la sicurezza complessiva dell&apos;utente.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisiti di Resistenza</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          I test di resistenza valutano la capacità della struttura del letto di
          sopportare carichi significativi senza cedimenti strutturali.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Queste valutazioni esaminano tipicamente:
        </p>

        <ul className={LIST_CLASS}>
          <li>Integrità del telaio del letto</li>
          <li>Resistenza dei giunti</li>
          <li>Capacità di carico</li>
          <li>Resistenza alla deformazione eccessiva</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo scopo è garantire che il prodotto possa supportare in sicurezza gli
          utenti previsti durante il funzionamento quotidiano.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisiti di Durata</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          I test di durata simulano l&apos;uso a lungo termine attraverso cicli
          ripetuti di carico e movimento.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          L&apos;obiettivo è determinare se:
        </p>

        <ul className={LIST_CLASS}>
          <li>Le connessioni strutturali rimangono sicure</li>
          <li>I componenti continuano a funzionare correttamente</li>
          <li>
            Le prestazioni del prodotto rimangono accettabili nel tempo
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          I requisiti di durata aiutano a garantire che i letti certificati
          mantengano l&apos;affidabilità per tutta la loro vita utile prevista.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Requisiti di Prestazione Superficiale
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022 fa riferimento ai requisiti di prestazione superficiale
          applicabili alle finiture dei mobili.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          A seconda della costruzione e dei materiali utilizzati, le superfici
          possono essere valutate per la resistenza a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Danni meccanici</li>
          <li>Calore umido</li>
          <li>Calore secco</li>
          <li>Macchie</li>
          <li>Prestazioni di adesione</li>
          <li>Abrasione e usura</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questi requisiti aiutano a preservare sia la funzionalità che
          l&apos;aspetto durante l&apos;uso normale.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Requisiti di Progettazione e Lavorazione
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Lo standard contiene anche requisiti relativi alla qualità della
          progettazione e alla lavorazione.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tra le altre considerazioni:
        </p>

        <ul className={LIST_CLASS}>
          <li>
            I bordi accessibili non devono presentare rischi di lesioni.
          </li>
          <li>
            Bordi taglienti e sporgenze pericolose devono essere evitati.
          </li>
          <li>
            Le sezioni cave devono essere adeguatamente chiuse dove richiesto.
          </li>
          <li>
            I componenti mobili devono essere progettati per ridurre il rischio
            di lesioni.
          </li>
          <li>
            Il prodotto finito deve conformarsi alle specifiche di design e
            modello dichiarate.
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Requisiti di Sicurezza</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          La sicurezza è un principio fondamentale in tutto IS 17635:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Lo standard incorpora requisiti destinati a ridurre i rischi derivanti
          da:
        </p>

        <ul className={LIST_CLASS}>
          <li>Cedimento strutturale</li>
          <li>Bordi taglienti</li>
          <li>Sporgenze pericolose</li>
          <li>Guasto dei componenti</li>
          <li>Sollecitazioni da uso ripetuto</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La conformità a questi requisiti aiuta a garantire che i letti
          rimangano sicuri in condizioni di uso normale e di uso improprio
          ragionevolmente prevedibile.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          La Certificazione BIS per Letti è Obbligatoria in India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sì, per i prodotti di arredamento coperti dall&apos;Ordine di Controllo
          Qualità applicabile, la certificazione BIS è obbligatoria prima che
          tali prodotti possano essere prodotti, importati, venduti, distribuiti,
          immagazzinati o messi in vendita in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori devono verificare lo stato delle ultime notifiche e le
          date di implementazione emesse dal Governo dell&apos;India, poiché i
          requisiti normativi possono essere aggiornati di volta in volta.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Obbligo di Utilizzo del Marchio ISI
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Il Marchio ISI serve come prova che un prodotto è conforme allo
          Standard Indiano pertinente ed è prodotto con una valida licenza BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Il marchio può essere applicato solo dopo:
        </p>

        <ul className={LIST_CLASS}>
          <li>Test del prodotto superati con successo</li>
          <li>Valutazione della fabbrica</li>
          <li>Approvazione BIS della domanda</li>
          <li>Concessione della licenza</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;uso non autorizzato del Marchio ISI è vietato ai sensi del BIS
          Act, 2016.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Letti (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il processo di certificazione BIS in India segue una procedura
          strutturata secondo lo Schema di Certificazione ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 1 – Identifica Standard e Ambito del Prodotto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Conferma l&apos;applicabilità secondo IS 17635:2022 e determina le
          varianti del prodotto.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 2 – Domanda BIS (Online)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Invia la domanda tramite il Portale Online BIS Manak con:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dettagli del produttore</li>
          <li>Indirizzo della fabbrica</li>
          <li>Descrizione del prodotto</li>
          <li>Nome del marchio</li>
          <li>Dettagli del controllo qualità</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 3 – Tariffe di Certificazione BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Paga le tariffe applicabili inclusi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tariffa di domanda</li>
          <li>Tariffa di elaborazione</li>
          <li>Costi di test</li>
          <li>Costi di ispezione</li>
          <li>Tariffe di marcatura</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 4 – Test del Prodotto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I campioni vengono testati presso laboratori riconosciuti dal BIS.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          I Test Includono
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test di carico statico</li>
          <li>Test di durata</li>
          <li>Test di stabilità</li>
          <li>Test di resistenza dei giunti</li>
          <li>Test di finitura superficiale</li>
          <li>Test di sicurezza dei bordi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 5 – Ispezione della Fabbrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un funzionario BIS ispeziona:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Struttura di produzione</li>
          <li>Controllo delle materie prime</li>
          <li>Test in corso</li>
          <li>Sistema di garanzia qualità</li>
          <li>Attrezzature di test</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 6 – Concessione della Licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dopo la conformità, il BIS rilascia:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato BIS</li>
          <li>Autorizzazione al Marchio ISI</li>
          <li>Numero CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 7 – Conformità Post-Certificazione
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ispezioni di sorveglianza</li>
          <li>Rinnovo ogni 1–2 anni</li>
          <li>Controllo qualità continuo</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS dei Letti
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ecco un elenco completo dei Documenti del Certificato BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti del Produttore
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registrazione/licenza della fabbrica</li>
          <li>Diagramma di flusso del processo di produzione</li>
          <li>Elenco delle macchine</li>
          <li>Elenco delle attrezzature di test</li>
          <li>Certificati di calibrazione</li>
          <li>Layout della fabbrica</li>
          <li>Piano di controllo qualità</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prova dell&apos;indirizzo</li>
          <li>Prova di identità</li>
          <li>Autorizzazione del marchio</li>
          <li>Certificato di marchio (se applicabile)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Tecnici
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Disegni del prodotto</li>
          <li>Specifiche</li>
          <li>Distinta dei materiali</li>
          <li>Rapporti di test interni</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test per i Letti (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I letti devono sottoporsi a test rigorosi per garantire la conformità.
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensioni
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Stabilità
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Carico Statico Verticale sulla Base del Letto
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Carico Statico Verticale sulla Ringhiera Laterale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Carico Statico Orizzontale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Impatto Verticale
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          I test devono essere condotti solo presso laboratori approvati dal
          BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni e Come Evitarle
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Selezione errata dello standard</strong> – Verifica sempre
            lo Standard Indiano corretto.
          </li>
          <li>
            <strong>Documentazione insufficiente</strong> – I documenti mancanti
            causano ritardi; preparali in anticipo.
          </li>
          <li>
            <strong>Test di laboratorio falliti</strong> – Assicura materiali e
            costruzione di alta qualità.
          </li>
          <li>
            <strong>Fabbrica non pronta</strong> – Assicura che il QMS e le
            attrezzature di test siano mantenute correttamente.
          </li>
          <li>
            <strong>Disallineamento del marchio</strong> – Il nome del marchio
            deve corrispondere alla domanda di licenza.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanzioni per la Non Conformità
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vendere letti senza certificazione BIS può portare a:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Multe pesanti</li>
          <li>Sequestro del prodotto</li>
          <li>Chiusura dell&apos;attività</li>
          <li>Azione legale</li>
          <li>Divieto di mercato</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché Sceglierci per la Certificazione BIS per i Letti?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Forniamo consulenza BIS end-to-end, inclusi:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mappatura degli standard</li>
          <li>Supporto alla documentazione</li>
          <li>Coordinamento dei test</li>
          <li>Deposito della domanda</li>
          <li>Gestione dell&apos;ispezione della fabbrica</li>
          <li>Collegamento BIS</li>
          <li>Rilascio della licenza</li>
          <li>Supporto al rinnovo e alla sorveglianza</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Letti secondo IS 17635:2022 è un requisito
          legale obbligatorio che garantisce sicurezza, qualità e durata.
          Ottenere una Licenza BIS per Letti protegge i consumatori, rafforza il
          valore del marchio e consente l&apos;accesso legale al mercato in
          tutta l&apos;India. Con il supporto di esperti, il processo di
          certificazione diventa fluido ed efficiente.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificato BIS per Letti
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La certificazione BIS è obbligatoria per i letti in India?
              </strong>
              <br />
              Sì, secondo IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Qual è la validità del Certificato BIS?</strong>
              <br />
              1–2 anni, rinnovabile.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. I produttori stranieri possono fare domanda?</strong>
              <br />
              Sì, secondo FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Il Certificato BIS può essere richiesto online?
              </strong>
              <br />
              Sì.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Il Marchio ISI è obbligatorio sui letti?</strong>
              <br />
              Sì.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Quanto tempo richiede il processo?</strong>
              <br />
              30–45 giorni.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Sia i letti in legno che in metallo sono coperti?
              </strong>
              <br />
              Sì, se conformi a IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. L&apos;ispezione della fabbrica è obbligatoria?
              </strong>
              <br />
              Sì.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. I commercianti possono fare domanda per BIS?</strong>
              <br />
              Solo i proprietari di marchi con controllo di produzione.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="Certificato BIS per Letti - PDF IS 17635:2022"
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
              Certificato Marchio ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Licenza BIS FMCS
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
              Marchio BIS (Licenza ISI) per Produzione Estera
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
