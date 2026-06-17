import FaqAuthorGerman from "@/components/common/FaqAuthor/FaqAuthorGerman";
import ServicesRightSideContentGerman from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentGerman";
import ManyUsersAlsoReadGerman from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadGerman";
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
import FooterGerman from "@/components/manual/Footer/FooterGerman";
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

const BISCertificateForBedsGerman = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default BISCertificateForBedsGerman;

const MetaTags = () => {
  const title = "BIS-Zertifikat für Betten | IS 17635:2022 BIS-Lizenz";
  const ogTitle = "BIS-Zertifizierung für Betten – IS 17635:2022 Leitfaden";
  const twitterTitle = "BIS-Lizenz für Betten | IS 17635:2022";
  const metaDescription =
    "Erhalten Sie ein BIS-Zertifikat für Betten nach IS 17635:2022. Prozess, Dokumente, Tests, Kosten und Zeitplan für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Betten nach IS 17635:2022. Erfahren Sie Prozess, Kosten, Dokumente, Tests und BIS-Lizenzvorteile.";
  const twitterDescription =
    "Beantragen Sie ein BIS-Zertifikat für Betten nach IS 17635:2022. Erfahren Sie BIS-Prozess, Dokumente, Tests, Gebühren und Zeitplan in Indien.";
  const metaKeywords =
    "BIS-Zertifikat für Betten, BIS-Lizenz für Betten, IS 17635:2022, BIS-Zertifizierung für Betten";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/betten-is-17635";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Leiter der Betriebe bei Sun Certification India";

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
              "https://bis-certifications.com/blogs/isi-products/betten-is-17635",
          },
          headline: "BIS-Zertifikat für Betten",
          description:
            "Die BIS-Zertifizierung für Betten in Indien ist eine obligatorische Qualitätssicherung, primär nach IS 17635:2022, die Sicherheits-, Haltbarkeits- und Leistungsstandards gewährleistet.",
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
          name: "BIS-Zertifikat für Betten",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "Die BIS-Zertifizierung für Betten in Indien ist eine obligatorische Qualitätssicherung, primär nach IS 17635:2022, die Sicherheits-, Haltbarkeits- und Leistungsstandards gewährleistet.",
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
              name: "Ist die BIS-Zertifizierung für Betten in Indien obligatorisch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, gemäß IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "Wie lange ist das BIS-Zertifikat gültig?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1–2 Jahre, verlängerbar.",
              },
            },
            {
              "@type": "Question",
              name: "Können ausländische Hersteller einen Antrag stellen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, im Rahmen von FMCS.",
              },
            },
            {
              "@type": "Question",
              name: "Kann das BIS-Zertifikat online beantragt werden?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja.",
              },
            },
            {
              "@type": "Question",
              name: "Ist das ISI-Zeichen auf Betten obligatorisch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja.",
              },
            },
            {
              "@type": "Question",
              name: "Wie lange dauert der Prozess?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30–45 Tage.",
              },
            },
            {
              "@type": "Question",
              name: "Werden sowohl Holz- als auch Metallbetten abgedeckt?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, bei Einhaltung von IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "Ist die Werksinspektion obligatorisch?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja.",
              },
            },
            {
              "@type": "Question",
              name: "Können Händler BIS beantragen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nur Markeninhaber mit Fertigungskontrolle.",
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
                    <Link to="/">Startseite</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Neueste Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS-Zertifikat für Betten – IS 17635:2022
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
        <ServicesRightSideContentGerman />
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
          BIS-Zertifikat für Betten – Vollständiger Leitfaden IS 17635:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="BIS-Lizenz für Betten"
            alt="BIS-Zertifikat für Betten - BIS-Zertifizierung IS 17635:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Betten ist eine obligatorische
          Konformitätsanforderung in Indien für Hersteller und Importeure von
          Betten, die für den häuslichen und gewerblichen Gebrauch bestimmt
          sind. Gemäß der neuesten indischen Norm IS 17635:2022 – Betten
          (Sicherheitsanforderungen) müssen alle Betten strenge Sicherheits-,
          Haltbarkeits-, Struktur- und Leistungskriterien erfüllen, bevor sie
          auf dem indischen Markt verkauft werden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Betten gehören zu den wichtigsten Möbelprodukten und werden täglich in
          Privathaushalten, Hotels, Krankenhäusern, Hostels, PG-Unterkünften und
          institutionellen Einrichtungen genutzt. Strukturelle Schwächen, scharfe
          Kanten, Materialversagen oder unzureichende Tragfähigkeit können zu
          schweren Verletzungen führen. Um solche Risiken zu vermeiden, schreibt
          das Bureau of Indian Standards (BIS) die{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            BIS-Zertifizierung
          </a>{" "}
          für Betten vor.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dieser umfassende Leitfaden erklärt alles über die BIS-Lizenz für
          Betten – einschließlich anwendbarer Normen, Zertifizierungsprozess,
          Testanforderungen, Dokumente, Gebühren, Zeitpläne, Strafen und
          Vorteile.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wichtige Highlights der BIS-Zertifizierung für Betten
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Merkmal
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Produkt", "Betten"],
                ["Indische Norm", "IS 17635:2022"],
                ["Bezeichnung der Norm", "Betten – Spezifikation"],
                ["Zertifizierungsschema", "BIS ISI-Marken-Zertifizierung"],
                ["Regulierungsbehörde", "Bureau of Indian Standards (BIS)"],
                ["Anwendbare Marke", "ISI-Marke"],
                [
                  "Berechtigte Antragsteller",
                  "Indische Hersteller und ausländische Hersteller",
                ],
                [
                  "Compliance-Anforderung",
                  "Obligatorisch gemäß anwendbarer Möbel-QCO (Quality Control Order)",
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
                    {particular === "Zertifizierungsschema" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        BIS ISI-Marken-Zertifizierung
                      </a>
                    ) : particular === "Compliance-Anforderung" ? (
                      <>
                        Obligatorisch gemäß anwendbarer{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>Möbel-QCO (Quality Control Order)</strong>
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
          Was ist die BIS-Zertifizierung für Betten?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung für Betten ist ein Konformitätsbewertungsverfahren,
          mit dem Hersteller nachweisen, dass ihre Produkte die in IS 17635:2022
          festgelegten Anforderungen erfüllen. Nach erfolgreicher Prüfung durch
          Tests, Werksbewertung und behördliche Überprüfung wird dem Hersteller
          eine BIS-Lizenz erteilt und er darf das ISI-Zeichen auf zertifizierten
          Produkten anbringen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Das Zertifizierungssystem soll sicherstellen, dass auf dem indischen
          Markt erhältliche Betten festgelegte Anforderungen erfüllen in Bezug
          auf:
        </p>

        <ul className={LIST_CLASS}>
          <li>Strukturelle Festigkeit</li>
          <li>Stabilität</li>
          <li>Haltbarkeit</li>
          <li>Oberflächenleistung</li>
          <li>Sicherheit bei normaler Nutzung</li>
          <li>Leistung unter vorhersehbaren Fehlgebrauchsbedingungen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Diese Anforderungen schaffen einen einheitlichen Maßstab für Qualität
          und Verbraucherschutz über unterschiedliche Bettkonstruktionen und
          Materialien hinweg.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum die BIS-Zertifizierung für Betten wichtig ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Betten wirken sich unmittelbar auf die Sicherheit der Nutzer aus, da
          sie über längere Zeiträume erhebliche Lasten tragen müssen. Schlecht
          konstruierte oder unzureichend geprüfte Produkte können
          Strukturversagen, Instabilität, Verformung oder vorzeitige
          Verschleißerscheinungen aufweisen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 adressiert diese Risiken, indem standardisierte
          Leistungs- und Sicherheitsanforderungen definiert werden, die
          Hersteller erfüllen müssen, bevor ihre Produkte in den Verkehr
          gebracht werden. Die Norm umfasst Anforderungen zu Festigkeit,
          Stabilität, Haltbarkeit, Verarbeitung und Oberflächenleistung.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Für Hersteller bietet die BIS-Zertifizierung mehrere Vorteile:
        </p>

        <ul className={LIST_CLASS}>
          <li>Rechtliche Berechtigung zum Verkauf abgedeckter Produkte in Indien</li>
          <li>Nachweis der Konformität mit indischen Normen</li>
          <li>Verbesserte Marktakzeptanz</li>
          <li>Stärkeres Verbrauchervertrauen</li>
          <li>Geringeres Risiko behördlicher Maßnahmen</li>
          <li>Wettbewerbsvorteil bei institutioneller und gewerblicher Beschaffung</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Überblick über IS 17635:2022 für Betten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die indische Regierung hat Quality Control Orders (QCO) für mehrere
          Möbelprodukte eingeführt, um sicherzustellen, dass in den Verkehr
          gebrachte Produkte vorgeschriebene Sicherheits- und
          Qualitätsanforderungen erfüllen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Wenn IS 17635:2022 unter der anwendbaren Möbel-QCO fällt, müssen
          Hersteller eine BIS-Zertifizierung nach Schema-I erhalten und das
          Standardzeichen (ISI-Marke) gemäß den BIS-Lizenzvorschriften
          verwenden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 ist die indische Norm, die Leistungs- und
          Sicherheitsanforderungen für Betten festlegt, die für erwachsene
          Nutzer in häuslichen und nicht-häuslichen Umgebungen bestimmt sind.
          Die Norm definiert Anforderungen, die sicherstellen sollen, dass
          Betten während ihrer vorgesehenen Nutzungsdauer sicher, funktionsfähig
          und haltbar bleiben.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Zweck von IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 wurde entwickelt, um eine umfassende
          leistungsbasierte Norm für moderne Bettkonstruktionen bereitzustellen,
          die mit verschiedenen Materialien und Fertigungsverfahren hergestellt
          werden. Die Norm ersetzt die frühere IS 7259 (Teil 1):1988, die
          primär auf Holzbetten ausgerichtet war.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Norm bewertet Betten, ohne die Konformität auf ein bestimmtes
          Material oder Fertigungsverfahren zu beschränken. Stattdessen
          konzentriert sie sich darauf, wie das fertige Produkt unter den
          vorgeschriebenen Prüfbedingungen abschneidet. Dieser Ansatz
          ermöglicht eine einheitliche Bewertung von Holz-, Metall-,
          Holzwerkstoff- und anderen Bettkonstruktionen.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Anwendungsbereich von IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Gemäß der Norm umfasst IS 17635:2022 Anforderungen an Leistung und
          Sicherheit von Betten für erwachsene Nutzer. Die Norm gilt für
          Produkte, die sowohl in häuslichen als auch in nicht-häuslichen
          Umgebungen verwendet werden sollen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die Norm gilt für:
        </p>

        <ul className={LIST_CLASS}>
          <li>Vollständig hergestellte Betten</li>
          <li>Gefertigte Betten</li>
          <li>Montagefertige Betten nach der Montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Damit wird sichergestellt, dass Produkte in montiertem oder
          zerlegbarem Zustand nach denselben Leistungs- und
          Sicherheitskriterien bewertet werden.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Ziele der Norm</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die wesentlichen Ziele von IS 17635:2022 umfassen:
        </p>

        <ul className={LIST_CLASS}>
          <li>Gewährleistung der Nutzersicherheit</li>
          <li>Überprüfung der strukturellen Festigkeit</li>
          <li>Bewertung der Produktstabilität</li>
          <li>Beurteilung der Haltbarkeit bei wiederholter Nutzung</li>
          <li>Festlegung von Mindestleistungsanforderungen</li>
          <li>Förderung einheitlicher Produktqualität bei allen Herstellern</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Norm enthält außerdem Prüfmethoden zur Bewertung von Betten unter
          normalen Nutzungsbedingungen und bei vernünftigerweise vorhersehbarem
          Fehlgebrauch.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Von IS 17635:2022 abgedeckte Produkte
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 gilt für Betten, die für erwachsene Nutzer in häuslichen
          und nicht-häuslichen Umgebungen bestimmt sind. Die Norm konzentriert
          sich auf Leistung, Sicherheit, Festigkeit, Stabilität und Haltbarkeit
          des fertigen Produkts, anstatt die Konformität auf ein bestimmtes
          Material oder Fertigungsverfahren zu beschränken.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die Norm gilt für:
        </p>

        <ul className={LIST_CLASS}>
          <li>Vollständig hergestellte Betten</li>
          <li>Gefertigte Betten</li>
          <li>Montagefertige (RTA) Betten nach der Montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller, die Betten in zerlegbarem Zustand liefern, müssen
          sicherstellen, dass das montierte Produkt alle anwendbaren
          Anforderungen der Norm erfüllt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>Hinweis:</strong> Diese Norm gilt nicht für Wasserbetten,
          Luftbetten, Klappbetten, Etagenbetten und Betten für Menschen mit
          besonderen Bedürfnissen sowie nicht für Betten für Gesundheits- und
          medizinische Zwecke.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Ebenfalls prüfen: Möbelprodukte unter obligatorischer
            BIS-Zertifizierung —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>BIS-Zertifizierung für Möbel</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wichtige Anforderungen nach IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Hauptziel von IS 17635:2022 besteht darin, sicherzustellen, dass
          Betten unter normalen Nutzungsbedingungen sicher, stabil, haltbar und
          für den vorgesehenen Zweck geeignet bleiben. Zu diesem Zweck legt die
          Norm mehrere zentrale Leistungsanforderungen fest.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Stabilitätsanforderungen</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Betten müssen ausreichenden Widerstand gegen Kippen und Instabilität
          bei normaler Nutzung aufweisen. Stabilitätstests prüfen, ob das
          Produkt bei erwarteten Belastungsbedingungen und Nutzerbewegungen
          sicher bleibt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ein stabiles Bett minimiert das Unfallrisiko und verbessert die
          Gesamtsicherheit der Nutzer.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Festigkeitsanforderungen</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Festigkeitstests bewerten die Fähigkeit der Bettkonstruktion,
          erhebliche Lasten ohne strukturelles Versagen zu tragen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Diese Prüfungen untersuchen typischerweise:
        </p>

        <ul className={LIST_CLASS}>
          <li>Integrität des Bettrahmens</li>
          <li>Verbindungsfestigkeit</li>
          <li>Tragfähigkeit</li>
          <li>Widerstand gegen übermäßige Verformung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ziel ist es sicherzustellen, dass das Produkt die vorgesehenen Nutzer
          im täglichen Gebrauch sicher tragen kann.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Haltbarkeitsanforderungen</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Haltbarkeitstests simulieren langfristige Nutzung durch wiederholte
          Belastungs- und Bewegungszyklen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ziel ist festzustellen, ob:
        </p>

        <ul className={LIST_CLASS}>
          <li>Strukturverbindungen dauerhaft sicher bleiben</li>
          <li>Komponenten weiterhin ordnungsgemäß funktionieren</li>
          <li>Die Produktleistung über die Zeit akzeptabel bleibt</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Haltbarkeitsanforderungen tragen dazu bei, dass zertifizierte Betten
          während ihrer vorgesehenen Nutzungsdauer zuverlässig bleiben.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Anforderungen an die Oberflächenleistung</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022 verweist auf Anforderungen an die Oberflächenleistung,
          die für Möbeloberflächen gelten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Je nach Konstruktion und verwendeten Materialien können Oberflächen
          auf Beständigkeit gegen geprüft werden:
        </p>

        <ul className={LIST_CLASS}>
          <li>Mechanische Beschädigung</li>
          <li>Feuchte Wärme</li>
          <li>Trockene Wärme</li>
          <li>Verfärbung</li>
          <li>Haftungseigenschaften</li>
          <li>Abrieb und Verschleiß</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Diese Anforderungen tragen dazu bei, Funktionalität und Erscheinungsbild
          während der normalen Nutzung zu erhalten.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Anforderungen an Design und Verarbeitung
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die Norm enthält außerdem Anforderungen an Designqualität und
          Verarbeitung.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Zu den weiteren Aspekten gehören:
        </p>

        <ul className={LIST_CLASS}>
          <li>Zugängliche Kanten dürfen keine Verletzungsgefahr darstellen.</li>
          <li>Scharfe Kanten und unsichere Vorsprünge sind zu vermeiden.</li>
          <li>Hohlräume sind erforderlichenfalls ordnungsgemäß zu verschließen.</li>
          <li>Bewegliche Komponenten sind so zu gestalten, dass Verletzungsrisiken reduziert werden.</li>
          <li>
            Das fertige Produkt muss den deklarierten Design- und
            Modellspezifikationen entsprechen.
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Sicherheitsanforderungen</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Sicherheit ist ein zentrales Prinzip in IS 17635:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die Norm enthält Anforderungen zur Verringerung von Risiken durch:
        </p>

        <ul className={LIST_CLASS}>
          <li>Strukturellen Einsturz</li>
          <li>Scharfe Kanten</li>
          <li>Unsichere Vorsprünge</li>
          <li>Komponentenversagen</li>
          <li>Belastungen bei wiederholter Nutzung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Einhaltung dieser Anforderungen trägt dazu bei, dass Betten bei
          normaler Nutzung und vernünftigerweise vorhersehbarem Fehlgebrauch
          sicher bleiben.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ist die BIS-Zertifizierung für Betten in Indien obligatorisch?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ja – für Möbelprodukte, die unter die anwendbare Quality Control
          Order fallen, ist eine BIS-Zertifizierung obligatorisch, bevor solche
          Produkte in Indien hergestellt, importiert, verkauft, vertrieben,
          gelagert oder zum Verkauf angeboten werden dürfen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller müssen den aktuellen Benachrichtigungsstatus und die
          Umsetzungstermine der indischen Regierung prüfen, da regulatorische
          Anforderungen von Zeit zu Zeit aktualisiert werden können.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Verpflichtung zur Verwendung des ISI-Zeichens
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Das ISI-Zeichen belegt, dass ein Produkt der relevanten indischen Norm
          entspricht und unter einer gültigen BIS-Lizenz hergestellt wird.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die Marke darf erst angebracht werden, nachdem:
        </p>

        <ul className={LIST_CLASS}>
          <li>Produkttests erfolgreich abgeschlossen wurden</li>
          <li>Die Werksbewertung durchgeführt wurde</li>
          <li>BIS den Antrag genehmigt hat</li>
          <li>Die Lizenz erteilt wurde</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die unbefugte Verwendung des ISI-Zeichens ist nach dem BIS Act, 2016
          untersagt.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess für Betten (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der BIS-Zertifizierungsprozess in Indien folgt einem strukturierten
          Verfahren im Rahmen des ISI-Zertifizierungsschemas.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 1 – Norm und Produktumfang festlegen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Anwendbarkeit unter IS 17635:2022 bestätigen und Produktvarianten
          bestimmen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 2 – BIS-Antrag (Online)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Antrag über das BIS Manak Online-Portal einreichen mit:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Herstellerdetails</li>
          <li>Werksadresse</li>
          <li>Produktbeschreibung</li>
          <li>Markenname</li>
          <li>Qualitätskontroll-Details</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 3 – BIS-Zertifizierungsgebühren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Anfallende Gebühren zahlen, einschließlich:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsgebühr</li>
          <li>Bearbeitungsgebühr</li>
          <li>Testgebühren</li>
          <li>Inspektionsgebühren</li>
          <li>Kennzeichnungsgebühren</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 4 – Produkttests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Proben werden in von BIS anerkannten Laboratorien getestet.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Tests umfassen
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Statischer Belastungstest</li>
          <li>Haltbarkeitstest</li>
          <li>Stabilitätstest</li>
          <li>Verbindungsfestigkeitstest</li>
          <li>Oberflächenbearbeitungstest</li>
          <li>Kantensicherheitstest</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 5 – Werksinspektion
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Beamter inspiziert:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fertigungseinrichtung</li>
          <li>Rohstoffkontrolle</li>
          <li>Prozesstests</li>
          <li>Qualitätssicherungssystem</li>
          <li>Prüfausrüstung</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 6 – Erteilung der BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nach Konformität stellt BIS aus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-Zertifikat</li>
          <li>ISI-Zeichen-Genehmigung</li>
          <li>CML-Nummer</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 7 – Konformität nach der Zertifizierung
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Überwachungsinspektionen</li>
          <li>Verlängerung alle 1–2 Jahre</li>
          <li>Laufende Qualitätskontrolle</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Für die BIS-Zertifizierung von Betten erforderliche Dokumente
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hier ist eine vollständige Liste der BIS-Zertifikatsdokumente:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Herstellerdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Werksregistrierung/Lizenz</li>
          <li>Fertigungsprozess-Flussdiagramm</li>
          <li>Maschinenliste</li>
          <li>Prüfausrüstungsliste</li>
          <li>Kalibrierungszertifikate</li>
          <li>Werkslayout</li>
          <li>Qualitätskontrollplan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rechtliche Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Adressnachweis</li>
          <li>Ausweisdokument</li>
          <li>Markenautorisierung</li>
          <li>Markenzeichen-Zertifikat (falls zutreffend)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktzeichnungen</li>
          <li>Spezifikationen</li>
          <li>Stückliste</li>
          <li>Interne Prüfberichte</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testanforderungen für Betten (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Betten müssen rigorosen Tests unterzogen werden, um die Konformität
          sicherzustellen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Obligatorische Tests
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Klausel
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Anforderung
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Design und Verarbeitung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Abmessungen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stabilitätstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertikale statische Belastung auf Bettbasis
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertikale statische Belastung auf Seitenleiste
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Horizontale statische Belastungstests
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertikaler Stoßtest
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tests müssen ausschließlich in von BIS genehmigten Laboratorien
          durchgeführt werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufige Herausforderungen und wie man sie vermeidet
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Falsche Normauswahl</strong> – Überprüfen Sie stets die
            richtige indische Norm.
          </li>
          <li>
            <strong>Unvollständige Dokumentation</strong> – Fehlende Unterlagen
            verursachen Verzögerungen; bereiten Sie diese im Voraus vor.
          </li>
          <li>
            <strong>Fehlgeschlagene Labortests</strong> – Setzen Sie auf
            hochwertige Materialien und solide Konstruktion.
          </li>
          <li>
            <strong>Werk nicht bereit</strong> – Stellen Sie sicher, dass QMS
            und Prüfausrüstung ordnungsgemäß gewartet werden.
          </li>
          <li>
            <strong>Markeninkongruenz</strong> – Der Markenname muss mit dem
            Lizenzantrag übereinstimmen.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Strafen bei Nichtkonformität
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Der Verkauf von Betten ohne BIS-Zertifizierung kann folgende Folgen
          haben:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hohe Geldstrafen</li>
          <li>Produktbeschlagnahme</li>
          <li>Geschäftsschließung</li>
          <li>Rechtliche Schritte</li>
          <li>Marktverbot</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum uns für die BIS-Zertifizierung für Betten wählen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Wir bieten BIS-Beratung von Anfang bis Ende, einschließlich:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Norm-Mapping</li>
          <li>Dokumentationsunterstützung</li>
          <li>Testkoordination</li>
          <li>Antragseinreichung</li>
          <li>Werksinspektionsabwicklung</li>
          <li>BIS-Kommunikation</li>
          <li>Lizenzausstellung</li>
          <li>Verlängerungs- und Überwachungsunterstützung</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Betten nach IS 17635:2022 ist eine
          obligatorische rechtliche Anforderung, die Sicherheit, Qualität und
          Haltbarkeit gewährleistet. Die Erlangung einer BIS-Lizenz für Betten
          schützt Verbraucher, stärkt den Markenwert und ermöglicht den
          rechtmäßigen Marktzugang in ganz Indien. Mit fachkundiger
          Unterstützung wird der Zertifizierungsprozess reibungslos und
          effizient.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – BIS-Zertifikat für Betten
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Ist die BIS-Zertifizierung für Betten in Indien obligatorisch?
              </strong>
              <br />
              Ja, gemäß IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Wie lange ist das BIS-Zertifikat gültig?</strong>
              <br />
              1–2 Jahre, verlängerbar.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Können ausländische Hersteller einen Antrag stellen?</strong>
              <br />
              Ja, im Rahmen von FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Kann das BIS-Zertifikat online beantragt werden?</strong>
              <br />
              Ja.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Ist das ISI-Zeichen auf Betten obligatorisch?</strong>
              <br />
              Ja.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Wie lange dauert der Prozess?</strong>
              <br />
              30–45 Tage.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Werden sowohl Holz- als auch Metallbetten abgedeckt?
              </strong>
              <br />
              Ja, bei Einhaltung von IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Ist die Werksinspektion obligatorisch?</strong>
              <br />
              Ja.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Können Händler BIS beantragen?</strong>
              <br />
              Nur Markeninhaber mit Fertigungskontrolle.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Betten - PDF IS 17635:2022"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Verwandte Ressourcen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              ISI-Marken-Zertifikat
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS-FMCS-Lizenz
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadGerman />

        <FaqAuthorGerman questionNumber={1} />
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
              Unsere Dienstleistungen
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Indiens bester Zertifikatsberater
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
              BIS-Zeichen (ISI-Lizenz) für ausländische Hersteller
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
              CDSCO-Registrierungszertifizierung
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
              BIS (CRS) Registrierung
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
              Kunststoffabfallmanagement
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
              EPR-Zertifikatszertifizierungen
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
              LMPC-Zertifikatszertifizierungen
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
              BIS-Registrierungszertifikat
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
              ISI-ZEICHEN (BIS) für indische Hersteller
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
