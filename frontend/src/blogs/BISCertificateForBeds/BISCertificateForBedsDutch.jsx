import FaqAuthorDutch from "@/components/common/FaqAuthor/FaqAuthorDutch";
import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
import ManyUsersAlsoReadDutch from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadDutch";
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
import FooterDutch from "@/components/manual/Footer/FooterDutch";
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

const BISCertificateForBedsDutch = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterDutch />
    </div>
  );
};

export default BISCertificateForBedsDutch;

const MetaTags = () => {
  const title = "BIS Certificaat voor Bedden | IS 17635:2022 BIS Licentie";
  const ogTitle = "BIS Certificering voor Bedden – IS 17635:2022 Gids";
  const twitterTitle = "BIS Licentie voor Bedden | IS 17635:2022";
  const metaDescription =
    "Krijg BIS Certificaat voor bedden onder IS 17635:2022. Proces, documenten, testen, kosten & tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor bedden volgens IS 17635:2022. Ken proces, kosten, documenten, testen & BIS licentie voordelen.";
  const twitterDescription =
    "Aanvragen BIS Certificaat voor bedden onder IS 17635:2022. Leer BIS proces, documenten, testen, kosten & tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Bedden, BIS Licentie voor Bedden, IS 17635:2022, BIS Certificering voor Bedden";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/bedden-is-17635";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
              "https://bis-certifications.com/blogs/isi-products/bedden-is-17635",
          },
          headline: "BIS Certificaat voor Bedden",
          description:
            "BIS certificering voor bedden in India is een verplichte kwaliteitsgarantie, voornamelijk onder IS 17635:2022, die veiligheids-, duurzaamheids- en prestatienormen waarborgt.",
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
          name: "BIS Certificaat voor Bedden",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "BIS certificering voor bedden in India is een verplichte kwaliteitsgarantie, voornamelijk onder IS 17635:2022, die veiligheids-, duurzaamheids- en prestatienormen waarborgt.",
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
              name: "Is BIS certificering verplicht voor bedden in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, onder IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "Wat is de geldigheid van het BIS Certificaat?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1–2 jaar, vernieuwbaar.",
              },
            },
            {
              "@type": "Question",
              name: "Kunnen buitenlandse fabrikanten aanvragen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, onder FMCS.",
              },
            },
            {
              "@type": "Question",
              name: "Kan BIS Certificaat online worden aangevraagd?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja.",
              },
            },
            {
              "@type": "Question",
              name: "Is ISI Merk verplicht op bedden?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja.",
              },
            },
            {
              "@type": "Question",
              name: "Hoe lang duurt het proces?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30–45 dagen.",
              },
            },
            {
              "@type": "Question",
              name: "Zijn houten en metalen bedden beide gedekt?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, indien voldaan aan IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "Is fabrieksinspectie verplicht?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja.",
              },
            },
            {
              "@type": "Question",
              name: "Kunnen handelaren BIS aanvragen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Alleen merkeigenaren met productiecontrole.",
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
                    <Link to="/Blogs">Laatste Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certificaat voor Bedden – IS 17635:2022
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
        <ServicesRightSideContentDutch />
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
          BIS Certificaat voor Bedden – IS 17635:2022 Volledige Gids
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="BIS Licentie voor Bedden"
            alt="BIS Certificaat voor Bedden - IS 17635:2022 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Certificaat voor Bedden is een verplichte nalevingsvereiste in India voor fabrikanten en importeurs van bedden bestemd voor huishoudelijk en commercieel gebruik. Volgens de nieuwste Indiase Norm IS 17635:2022 – Bedden (Veiligheidsvereisten) moeten alle bedden voldoen aan strikte veiligheids-, duurzaamheids-, structurele en prestatiecriteria voordat ze op de Indiase markt worden verkocht.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bedden zijn essentiële meubelproducten die dagelijks worden gebruikt in huizen, hotels, ziekenhuizen, hostels, PG-accommodaties en institutionele faciliteiten. Structurele zwakte, scherpe randen, materiaalfalen of slechte draagcapaciteit kunnen leiden tot ernstig letsel. Om dergelijke risico's te voorkomen, verplicht het Bureau of Indian Standards (BIS) de{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            BIS Certificering
          </a>{" "}
          voor Bedden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze uitgebreide gids legt alles uit over de BIS Licentie voor Bedden, inclusief toepasselijke normen, certificeringsproces, testvereisten, documenten, kosten, tijdlijnen, boetes en voordelen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Belangrijkste Hoogtepunten van BIS Certificering voor Bedden
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Bijzonderheden
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Product", "Bedden"],
                ["Indiase Norm", "IS 17635:2022"],
                ["Titel van de Norm", "Bedden – Specificatie"],
                ["Certificatieschema", "BIS ISI Merk Certificering"],
                ["Regelgevende Autoriteit", "Bureau of Indian Standards (BIS)"],
                ["Toepasselijk Merk", "ISI Merk"],
                [
                  "In aanmerking komende Aanvragers",
                  "Indiase Fabrikanten en Buitenlandse Fabrikanten",
                ],
                [
                  "Nalevingsvereiste",
                  "Verplicht onder toepasselijke Meubel QCO (Quality Control Order)",
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
                    {particular === "Certificatieschema" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        BIS ISI Merk Certificering
                      </a>
                    ) : particular === "Nalevingsvereiste" ? (
                      <>
                        Verplicht onder toepasselijke{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>Meubel QCO (Quality Control Order)</strong>
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
          Wat is BIS Certificering voor Bedden?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering voor Bedden is een conformiteitsbeoordelingsproces waarbij fabrikanten aantonen dat hun producten voldoen aan de vereisten in IS 17635:2022. Na verificatie van naleving via testen, fabrieksbeoordeling en regelgevende controle krijgt de fabrikant een BIS licentie en mag het ISI Merk op gecertificeerde producten worden aangebracht.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het certificeringskader is bedoeld om ervoor te zorgen dat bedden die op de Indiase markt beschikbaar zijn, voldoen aan vastgestelde vereisten met betrekking tot:
        </p>

        <ul className={LIST_CLASS}>
          <li>Structurele sterkte</li>
          <li>Stabiliteit</li>
          <li>Duurzaamheid</li>
          <li>Oppervlakteprestaties</li>
          <li>Veiligheid bij normaal gebruik</li>
          <li>Prestaties onder redelijk voorzienbare misbruiksomstandigheden</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze vereisten helpen een consistent benchmark voor kwaliteit en consumentenbescherming te creëren over verschillende bedontwerpen en fabricagematerialen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering Belangrijk is voor Bedden
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bedden beïnvloeden direct de veiligheid van gebruikers omdat ze ontworpen zijn om aanzienlijke belastingen over langere perioden te dragen. Slecht ontworpen of onvoldoende geteste producten kunnen structureel falen, instabiliteit, vervorming of voortijdige verslechtering vertonen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 pakt deze zorgen aan door gestandaardiseerde prestatie- en veiligheidsvereisten te definiëren die fabrikanten moeten vervullen voordat hun producten op de markt komen. De norm omvat vereisten met betrekking tot sterkte, stabiliteit, duurzaamheid, vakmanschap en oppervlakteprestaties.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Voor fabrikanten biedt BIS certificering verschillende voordelen:
        </p>

        <ul className={LIST_CLASS}>
          <li>Juridische toestemming om gedekte producten in India te verkopen</li>
          <li>Aantonen van naleving van Indiase Normen</li>
          <li>Verbeterde marktacceptatie</li>
          <li>Verhoogd consumentenvertrouwen</li>
          <li>Verminderd risico op regelgevende actie</li>
          <li>Concurrentievoordeel bij institutionele en commerciële inkoop</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Overzicht van IS 17635:2022 voor Bedden
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De regering van India heeft Quality Control Orders (QCO) ingevoerd voor verschillende meubelproducten om ervoor te zorgen dat producten op de markt voldoen aan voorgeschreven veiligheids- en kwaliteitsvereisten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Wanneer IS 17635:2022 onder de toepasselijke Meubel QCO valt, moeten fabrikanten BIS certificering onder Schema-I verkrijgen en het Standaardmerk (ISI Merk) gebruiken in overeenstemming met BIS licentievereisten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 is de Indiase Norm die prestatie- en veiligheidsvereisten specificeert voor bedden bestemd voor volwassen gebruikers in huishoudelijke en niet-huishoudelijke omgevingen. De norm stelt vereisten vast die ervoor zorgen dat bedden veilig, functioneel en duurzaam blijven gedurende hun beoogde levensduur.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Doel van IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 is ontwikkeld om een uitgebreide prestatiegebaseerde norm te bieden voor moderne bedontwerpen vervaardigd met verschillende materialen en constructiemethoden. De norm vervangt de eerdere IS 7259 (Deel 1):1988, die voornamelijk gericht was op houten bedden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          De norm evalueert bedden zonder naleving te beperken tot een bepaald materiaal of fabricageproces. In plaats daarvan richt ze zich op hoe het afgewerkte product presteert onder voorgeschreven testomstandigheden. Deze aanpak maakt consistente beoordeling mogelijk van houten, metalen, geëngineerd hout en andere bedconstructies.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Reikwijdte van IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Volgens de norm dekt IS 17635:2022 vereisten met betrekking tot de prestaties en veiligheid van bedden ontworpen voor volwassen gebruikers. De norm is van toepassing op producten bestemd voor gebruik in zowel huishoudelijke als niet-huishoudelijke settings.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          De norm is van toepassing op:
        </p>

        <ul className={LIST_CLASS}>
          <li>Volledig vervaardigde bedden</li>
          <li>Gefabriceerde bedden</li>
          <li>Klaar-voor-montage bedden na montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dit zorgt ervoor dat producten geleverd in gemonteerde of knock-down vorm worden beoordeeld met dezelfde prestatie- en veiligheidscriteria.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Doelstellingen van de Norm</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          De primaire doelstellingen van IS 17635:2022 omvatten:
        </p>

        <ul className={LIST_CLASS}>
          <li>Zorgen voor gebruikersveiligheid</li>
          <li>Verifiëren van structurele sterkte</li>
          <li>Beoordelen van productstabiliteit</li>
          <li>Evalueren van duurzaamheid bij herhaald gebruik</li>
          <li>Vaststellen van minimale prestatievereisten</li>
          <li>Bevorderen van consistente productkwaliteit bij fabrikanten</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          De norm omvat ook testmethodologieën bedoeld om bedden te evalueren onder normale gebruiksomstandigheden en redelijk voorzienbare misbruikscenario's.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Producten Gedekt onder IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 is van toepassing op bedden bestemd voor volwassen gebruikers in huishoudelijke en niet-huishoudelijke omgevingen. De norm richt zich op prestaties, veiligheid, sterkte, stabiliteit en duurzaamheid van het afgewerkte product in plaats van naleving te beperken tot een specifiek materiaal of fabricagemethode.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          De norm is van toepassing op:
        </p>

        <ul className={LIST_CLASS}>
          <li>Volledig vervaardigde bedden</li>
          <li>Gefabriceerde bedden</li>
          <li>Klaar-voor-montage (RTA) bedden na montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten die bedden in knock-down conditie leveren, moeten ervoor zorgen dat het gemonteerde product voldoet aan alle toepasselijke vereisten van de norm.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>Opmerking:</strong> Deze norm dekt geen waterbedden, luchtbedden, opklapbedden, stapelbedden en bedden voor mensen met speciale behoeften, noch bedden voor gezondheidszorg en medische doeleinden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Bekijk ook Meubelproducten Gedekt onder Verplichte BIS Certificering —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>BIS Certificering voor meubels</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Belangrijkste Vereisten onder IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het primaire doel van IS 17635:2022 is ervoor te zorgen dat bedden veilig, stabiel, duurzaam en geschikt blijven voor hun beoogde doel onder normale gebruiksomstandigheden. Om dit doel te bereiken, stellt de norm verschillende belangrijke prestatievereisten vast.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Stabiliteitsvereisten</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bedden moeten adequate weerstand tegen kantelen en instabiliteit tijdens normaal gebruik demonstreren. Stabiliteitstests evalueren of het product veilig blijft wanneer het wordt onderworpen aan verwachte belastingsomstandigheden en gebruikersbewegingen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Een stabiel bed minimaliseert het risico op ongevallen en verbetert de algehele veiligheid van gebruikers.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Sterktevereisten</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Sterktetests beoordelen het vermogen van de bedstructuur om aanzienlijke belastingen te weerstaan zonder structureel falen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Deze evaluaties onderzoeken typisch:
        </p>

        <ul className={LIST_CLASS}>
          <li>Integriteit van bedframe</li>
          <li>Verbindingssterkte</li>
          <li>Draagcapaciteit</li>
          <li>Weerstand tegen overmatige vervorming</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het doel is ervoor te zorgen dat het product de beoogde gebruikers veilig kan dragen tijdens dagelijks gebruik.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Duurzaamheidsvereisten</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Duurzaamheidstests simuleren langdurig gebruik door herhaalde belastings- en bewegingscycli.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het doel is te bepalen of:
        </p>

        <ul className={LIST_CLASS}>
          <li>Structurele verbindingen veilig blijven</li>
          <li>Componenten correct blijven functioneren</li>
          <li>Productprestaties acceptabel blijven over tijd</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Duurzaamheidsvereisten helpen ervoor te zorgen dat gecertificeerde bedden betrouwbaar blijven gedurende hun verwachte levensduur.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Oppervlakteprestatievereisten</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022 verwijst naar oppervlakteprestatievereisten van toepassing op meubelafwerkingen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Afhankelijk van de constructie en gebruikte materialen kunnen oppervlakken worden geëvalueerd op weerstand tegen:
        </p>

        <ul className={LIST_CLASS}>
          <li>Mechanische schade</li>
          <li>Natte hitte</li>
          <li>Droge hitte</li>
          <li>Vlekken</li>
          <li>Adhesieprestaties</li>
          <li>Slijtage en slijtage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze vereisten helpen zowel functionaliteit als uiterlijk te behouden tijdens normaal gebruik.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Ontwerp- en Vakmanschapsvereisten
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          De norm bevat ook vereisten met betrekking tot ontwerpkwaliteit en vakmanschap.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Onder andere:
        </p>

        <ul className={LIST_CLASS}>
          <li>Toegankelijke randen mogen geen letselgevaar vormen.</li>
          <li>Scherpe randen en onveilige uitsteeksels moeten worden vermeden.</li>
          <li>Holle secties moeten waar nodig correct worden afgesloten.</li>
          <li>Bewegende componenten moeten worden ontworpen om het risico op letsel te verminderen.</li>
          <li>
            Het afgewerkte product moet voldoen aan de verklaarde ontwerp- en modelspecificaties.
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Veiligheidsvereisten</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Veiligheid is een kernprincipe in IS 17635:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          De norm omvat vereisten bedoeld om risico's te verminderen voortvloeiend uit:
        </p>

        <ul className={LIST_CLASS}>
          <li>Structurele instorting</li>
          <li>Scherpe randen</li>
          <li>Onveilige uitsteeksels</li>
          <li>Componentfalen</li>
          <li>Herhaalde gebruiksstress</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Naleving van deze vereisten helpt ervoor te zorgen dat bedden veilig blijven onder normaal gebruik en redelijk voorzienbare misbruiksomstandigheden.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Is BIS Certificering voor Bedden Verplicht in India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ja, voor meubelproducten gedekt onder de toepasselijke Quality Control Order is BIS certificering verplicht voordat dergelijke producten in India kunnen worden vervaardigd, geïmporteerd, verkocht, gedistribueerd, opgeslagen of te koop aangeboden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten moeten de laatste meldingsstatus en implementatiedata uitgegeven door de regering van India verifiëren, omdat regelgevende vereisten van tijd tot tijd kunnen worden bijgewerkt.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Vereiste om het ISI Merk te Gebruiken
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het ISI Merk dient als bewijs dat een product voldoet aan de relevante Indiase Norm en wordt vervaardigd onder een geldige BIS licentie.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het merk mag alleen worden aangebracht na:
        </p>

        <ul className={LIST_CLASS}>
          <li>Succesvolle producttests</li>
          <li>Fabrieksbeoordeling</li>
          <li>BIS goedkeuring van de aanvraag</li>
          <li>Verlening van licentie</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ongeautoriseerd gebruik van het ISI Merk is verboden onder de BIS Act, 2016.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificeringsproces voor Bedden (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS certificeringsproces in India volgt een gestructureerde procedure onder het ISI Certificeringsschema.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 1 – Identificeer Norm & Productbereik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bevestig toepasbaarheid onder IS 17635:2022 en bepaal productvarianten.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 2 – BIS Aanvraag (Online)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dien aanvraag in via het BIS Manak Online Portaal met:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrikantgegevens</li>
          <li>Fabrieksadres</li>
          <li>Productbeschrijving</li>
          <li>Merknaam</li>
          <li>Kwaliteitscontrolegegevens</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 3 – BIS Certificeringskosten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Betaal toepasselijke kosten inclusief:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagkosten</li>
          <li>Verwerkingskosten</li>
          <li>Testkosten</li>
          <li>Inspectiekosten</li>
          <li>Markeringkosten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 4 – Producttesten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Monsters worden getest bij BIS-erkende laboratoria.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Testen Inclusief
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Statische belastingstest</li>
          <li>Duurzaamheidstest</li>
          <li>Stabiliteitstest</li>
          <li>Verbindingsterktetest</li>
          <li>Oppervlakteafwerkingstest</li>
          <li>Randveiligheidstest</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 5 – Fabrieksinspectie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS-functionaris inspecteert:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productiefaciliteit</li>
          <li>Grondstofcontrole</li>
          <li>In-proces testen</li>
          <li>Kwaliteitsborgingssysteem</li>
          <li>Testapparatuur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 6 – Verlening van BIS Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Na naleving geeft BIS uit:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificaat</li>
          <li>ISI Merk toestemming</li>
          <li>CML nummer</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 7 – Post-Certificering Naleving
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Toezichtinspecties</li>
          <li>Vernieuwing elke 1–2 jaar</li>
          <li>Voortdurende kwaliteitscontrole</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenten Vereist voor BIS Certificering van Bedden
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hier is een volledige lijst van BIS Certificaat Documenten:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrikant Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrieksregistratie/licentie</li>
          <li>Productieproces stroomschema</li>
          <li>Machinelijst</li>
          <li>Testapparatuur lijst</li>
          <li>Kalibratiecertificaten</li>
          <li>Fabrieksindeling</li>
          <li>Kwaliteitscontroleplan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Adresbewijs</li>
          <li>ID-bewijs</li>
          <li>Merkautorisatie</li>
          <li>Handelsmerk certificaat (indien van toepassing)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Producttekeningen</li>
          <li>Specificaties</li>
          <li>Materiaallijst</li>
          <li>Interne testrapporten</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten voor Bedden (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bedden moeten rigoureuze tests ondergaan om naleving te waarborgen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Verplichte Tests
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clausule
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
                  Ontwerp en vakmanschap
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Afmetingen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stabiliteitstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verticale Statische Belasting op Bedbasis
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verticale Statische Belasting op Zijrail
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Horizontale Statische Belastingstests
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verticale Impacttest
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Testen moeten alleen worden uitgevoerd bij BIS-goedgekeurde laboratoria.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende Uitdagingen & Hoe Ze Te Voorkomen
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Onjuiste standaardselectie</strong> – Verifieer altijd de
            juiste Indiase Standaard.
          </li>
          <li>
            <strong>Slechte documentatie</strong> – Ontbrekende documenten
            veroorzaken vertragingen; bereid ze van tevoren voor.
          </li>
          <li>
            <strong>Gefaalde laboratoriumtests</strong> – Zorg voor hoogwaardige
            materialen en constructie.
          </li>
          <li>
            <strong>Fabriek niet klaar</strong> – Zorg ervoor dat QMS en
            testapparatuur goed worden onderhouden.
          </li>
          <li>
            <strong>Handelsmerk komt niet overeen</strong> – Merknaam moet
            overeenkomen met licentieaanvraag.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Boetes voor Naleving
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het verkopen van bedden zonder BIS certificering kan leiden tot:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zware boetes</li>
          <li>Product inbeslagname</li>
          <li>Bedrijfsstopzetting</li>
          <li>Juridische actie</li>
          <li>Marktverbod</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom Voor Ons Kiezen voor BIS Certificering voor Bedden?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Wij bieden end-to-end BIS consulting, inclusief:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Standaard mapping</li>
          <li>Documentatie ondersteuning</li>
          <li>Testcoördinatie</li>
          <li>Aanvraag indienen</li>
          <li>Fabrieksinspectie afhandeling</li>
          <li>BIS liaison</li>
          <li>Licentieverlening</li>
          <li>Vernieuwing & toezicht ondersteuning</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Certificaat voor Bedden onder IS 17635:2022 is een verplichte juridische vereiste die veiligheid, kwaliteit en duurzaamheid waarborgt. Het verkrijgen van een BIS Licentie voor Bedden beschermt consumenten, versterkt de merkwaarde en maakt legale markttoegang in heel India mogelijk. Met deskundige ondersteuning wordt het certificeringsproces naadloos en efficiënt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde Vragen – BIS Certificaat voor Bedden
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS certificering verplicht voor bedden in India?
              </strong>
              <br />
              Ja, onder IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Wat is de geldigheid van het BIS Certificaat?</strong>
              <br />
              1–2 jaar, vernieuwbaar.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Kunnen buitenlandse fabrikanten aanvragen?</strong>
              <br />
              Ja, onder FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Kan BIS Certificaat online worden aangevraagd?</strong>
              <br />
              Ja.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Is ISI Merk verplicht op bedden?</strong>
              <br />
              Ja.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Hoe lang duurt het proces?</strong>
              <br />
              30–45 dagen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Zijn houten en metalen bedden beide gedekt?
              </strong>
              <br />
              Ja, indien voldaan aan IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Is fabrieksinspectie verplicht?</strong>
              <br />
              Ja.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Kunnen handelaren BIS aanvragen?</strong>
              <br />
              Alleen merkeigenaren met productiecontrole.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="BIS Certificaat voor Bedden - IS 17635:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Gerelateerde Bronnen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              ISI Merk Certificaat
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS FMCS Licentie
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadDutch />

        <FaqAuthorDutch questionNumber={1} />
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
              Onze Diensten
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Beste Certificaat Consultant
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
              BIS Merk (ISI Licentie) voor Buitenlandse Fabricage
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
              CDSCO Registratie Certificering
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
              BIS (CRS) Registratie
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="Plasticafvalbeheer"
                title="Plasticafvalbeheer"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plasticafvalbeheer
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPR Certificaat logo"
                title="EPR Certificaat logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificaat certificeringen
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
              LMPC Certificaat certificeringen
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
              BIS Registratie Certificaat
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISI Merk logo"
                title="ISI Merk logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI MERK (BIS) voor Indiase Fabrikanten
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
