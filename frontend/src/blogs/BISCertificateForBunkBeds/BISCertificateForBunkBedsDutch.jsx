import FaqAuthorDutch from "@/components/common/FaqAuthor/FaqAuthorDutch";
import ManyUsersAlsoReadDutch from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadDutch";
import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForBunkBedsDutch = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterDutch />
    </div>
  );
};

export default BISCertificateForBunkBedsDutch;

const MetaTags = () => {
  const title =
    "BIS Certificaat voor Stapelbedden | IS 17636:2022 BIS Licentie";
  const ogTitle = "BIS Certificering voor Stapelbedden – IS 17636:2022 Gids";
  const twitterTitle = "BIS Licentie voor Stapelbedden | IS 17636:2022";
  const metaDescription =
    "Krijg BIS Certificaat voor stapelbedden volgens IS 17636:2022. Proces, documenten, testen, kosten en tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor stapelbedden volgens IS 17636:2022. Ken het proces, kosten, documenten, testen en BIS licentie voordelen.";
  const twitterDescription =
    "Vraag BIS Certificaat aan voor stapelbedden volgens IS 17636:2022. Leer BIS proces, documenten, testen, kosten en tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Stapelbedden, BIS Licentie voor Stapelbedden, IS 17636:2022, BIS Certificering voor Stapelbedden";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/stapelbedden-is-17636";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";

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
                    <Link to="/Blogs">Laatste blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certificaat voor Stapelbedden – IS 17636:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certificaat voor Stapelbedden – Volledige Gids voor IS 17636:2022
          BIS Certificering
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="BIS Licentie voor Stapelbedden"
            alt="BIS Certificaat voor Stapelbedden - IS 17636:2022 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Certificaat voor Stapelbedden is een verplichte vereiste in
          India volgens IS 17636:2022, dat de veiligheids-, prestatie- en
          structurele vereisten vastlegt voor stapelbedden gebruikt in woningen,
          hostels, slaapzalen, PG accommodaties, scholen, hotels en commerciële
          instellingen. Elke fabrikant—Indiaas of buitenlands—moet een BIS
          Certificering voor Stapelbedden verkrijgen voordat stapelbedden worden
          verkocht, geïmporteerd, geëxporteerd of gedistribueerd op de Indiase
          markt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Met de toenemende vraag naar ruimtebesparend meubilair zijn
          stapelbedden een essentiële productcategorie geworden. Echter,
          veiligheidsrisico&apos;s zoals vallen, instorten, beknelling en
          structurele falen maken de BIS Licentie voor Stapelbedden cruciaal om
          consumentenbescherming te waarborgen. Deze uitgebreide pagina
          begeleidt u door de BIS Registratie voor Stapelbedden, testvereisten,
          documentatie, kosten, tijdlijnen, boetes en voordelen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Of u nu fabrikant, importeur, exporteur, handelaar of start-up bent,
          deze gids helpt u de nalevingsvereisten te begrijpen onder het Bureau
          of Indian Standards (BIS).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificering?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering is een kwaliteits- en veiligheidsnalevingsprogramma
          beheerd door het Bureau of Indian Standards, het nationale
          normenorgaan van India. Het zorgt ervoor dat producten voldoen aan
          gespecificeerde Indiase Normen en veilig, betrouwbaar en geschikt voor
          gebruik zijn.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wat is een BIS Certificaat?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Een BIS certificaat is een officiële licentie uitgegeven aan een
          fabrikant die hen toestaat het ISI Merk te gebruiken, wat naleving van
          door BIS voorgeschreven productnormen aantoont.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Betekenis van BIS Certificaat
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Het bewijst dat het product is geslaagd voor:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Laboratoriumtesten</li>
          <li>Fabrieksinspectie</li>
          <li>Kwaliteitscontrolebeoordeling</li>
          <li>Veiligheidsnaleving</li>
          <li>Conformiteit aan Indiase Normen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Een BIS-gecertificeerd product toont het BIS Logo, ook wel bekend als
          het ISI Merk, wat aangeeft dat het voldoet aan Indiase
          kwaliteitsnormen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Welke BIS Norm is van Toepassing op Stapelbedden? (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Stapelbedden vallen onder verplichte BIS certificering volgens de
          nieuw geïntroduceerde norm:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — Stapelbedden –
          Veiligheidsvereisten
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Deze norm zorgt ervoor dat stapelbedden voldoen aan strikte
          veiligheids-, constructie- en duurzaamheidscriteria. Het dekt:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structurele stabiliteit</li>
          <li>Garde-corps</li>
          <li>Beknellingsgevaren</li>
          <li>Draagkracht</li>
          <li>Dimensionale vereisten</li>
          <li>Materiaalspecificaties</li>
          <li>Randen en oppervlakteafwerking</li>
          <li>Ladderconstructie</li>
          <li>Duurzaamheids- en prestatiestesten</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke fabrikant die stapelbedden in India wil verkopen moet een BIS
          Licentie voor Stapelbedden verkrijgen volgens IS 17636:2022.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom is BIS Certificering Vereist voor Stapelbedden?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Stapelbedden worden veel gebruikt door kinderen en volwassenen, en
          veiligheidszorgen maken naleving essentieel. BIS heeft certificering
          verplicht gemaakt om te voorkomen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Instorten of structurele falen</li>
          <li>Beknelling van lichaamsdelen</li>
          <li>Vallen vanaf het bovenste bed</li>
          <li>Ladder-gerelateerde verwondingen</li>
          <li>Slechte materiaalkwaliteit</li>
          <li>Brandgevaren</li>
          <li>Gevaarlijke afwerkingen of scherpe randen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Redenen waarom BIS Licentie voor Stapelbedden Verplicht is
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zorgt voor mechanische sterkte en duurzaamheid</li>
          <li>Beschermt consumenten—vooral kinderen—tegen verwondingen</li>
          <li>Handhaaft uniforme kwaliteitsnormen</li>
          <li>Helpt merken vertrouwen en geloofwaardigheid op te bouwen</li>
          <li>Zorgt voor naleving van overheidsregelgeving</li>
          <li>Voorkomt juridische problemen en boetes</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zonder BIS registratie kunnen fabrikanten en importeurs niet legaal
          het product verkopen op de Indiase markt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Stap-voor-Stap BIS Certificeringsproces voor Stapelbedden (IS
          17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS certificeringsproces in India omvat testen, documentatie en
          fabrieksinspecties. Hier is de stap-voor-stap procedure:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 1 — Bepaal Toepasbaarheid & Norm
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — Verplicht
          </li>
          <li>Bevestig de productcategorie en fabrieksunitdetails.</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 2 — BIS Aanvraag (Formulier Indienen)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dien online in via het BIS Manak Online Portaal.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Vereisten omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrikantdetails</li>
          <li>Fabrieksadres en bewijs</li>
          <li>Productcategorie en merk</li>
          <li>Productiecapaciteiten</li>
          <li>Kwaliteitscontroleprocessen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Deze stap start de officiële goedkeuringscyclus.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 3 — Betaal BIS Certificaat Kosten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Na indiening, betaal:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagkosten</li>
          <li>Testkosten</li>
          <li>Auditkosten</li>
          <li>Merkingkosten</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          Kosten zijn afhankelijk van:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aantal productvarianten</li>
          <li>Merknamen</li>
          <li>Fabriekslocatie</li>
          <li>Testparameters</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 4 — Monster Testen (Volgens IS 17636:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Testen worden uitgevoerd in een door BIS erkend laboratorium.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Testen omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structurele stabiliteitstest</li>
          <li>Impacttest</li>
          <li>Beknellings test</li>
          <li>Garde-corps sterkte test</li>
          <li>Afwerkingskwaliteit test</li>
          <li>Ladder veiligheidstest</li>
          <li>Belastingtest</li>
          <li>Duurzaamheidstest</li>
          <li>Randveiligheidsevaluatie</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Het testrapport wordt direct geüpload naar het BIS portaal.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 5 — BIS Fabrieksinspectie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Een BIS functionaris bezoekt de fabriek om te verifiëren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kwaliteitsmanagementsysteem</li>
          <li>Grondstofcontrole</li>
          <li>In-proces inspecties</li>
          <li>Eindproduct testen</li>
          <li>Productiecapaciteit</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ze controleren naleving van het BIS Test- en Inspectieschema (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 6 — Verlening van BIS Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Zodra alle stappen zijn goedgekeurd, verleent BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificaat</li>
          <li>ISI Merk Goedkeuring</li>
          <li>CML Licentienummer</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          U kunt nu legaal het BIS Merk gebruiken op stapelbedden en verpakking.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 7 — Post-Licentie Verplichtingen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fabrikanten moeten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interne testen onderhouden</li>
          <li>Periodieke BIS inspecties toestaan</li>
          <li>De licentie elke 1 of 2 jaar vernieuwen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Reikwijdte van BIS Licentie voor Stapelbedden
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Deze norm dekt de vereisten met betrekking tot de
          prestaties en veiligheid, dat wil zeggen sterkte, stabiliteit en
          duurzaamheid van stapelbedden voor binnenlands en niet-binnenlands
          gebruik. Deze norm is ook van toepassing op enkele bedden voor gebruik
          op een hoogte van de bedbasis van 800 mm of meer boven het afgewerkte
          vloerniveau, ongeacht het gebruik waarvoor de ruimte eronder wordt
          gebruikt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Deze norm is van toepassing op volledig
          gefabriceerde/ gemaakte stapelbedden. Het is ook van toepassing op
          klaar-voor-montage eenheden; in dat geval zijn de vereisten van deze
          norm van toepassing op de gemonteerde eenheid.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenten Vereist voor BIS Certificering van Stapelbedden
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hier is een volledige lijst van BIS Certificaat Documenten:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrikant Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrieksregistratiecertificaat</li>
          <li>Productieproces stroomdiagram</li>
          <li>Lijst van machines en apparatuur</li>
          <li>Lijst van testapparatuur</li>
          <li>Kalibratiecertificaten</li>
          <li>Fabrieksindeling/installatie indeling</li>
          <li>Autorisatiebrief van CEO/Directeur</li>
          <li>ISO 9001 certificaat (indien beschikbaar)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identiteitsbewijs</li>
          <li>Adresbewijs</li>
          <li>Merkautorisatie (indien derde partij merk)</li>
          <li>Handelsmerkregistratiedocument (optioneel)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productspecificaties</li>
          <li>Stuklijst</li>
          <li>Beschrijving van veiligheidskenmerken</li>
          <li>Kwaliteitscontroleplan</li>
          <li>Interne testrapporten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Aanvraag Documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Verklaringen en declaraties</li>
          <li>Testaanvraagformulier</li>
          <li>Monster goedkeuringsbrief</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het hebben van de juiste documenten vermindert vertragingen en zorgt
          voor soepele goedkeuring.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten voor Stapelbedden (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testen is een verplicht onderdeel van het BIS registratieproces.
          Stapelbedden ondergaan rigoureuze testen om veiligheid en duurzaamheid
          te waarborgen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Schema van Inspectie en Testen voor Stapelbedden
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clausule
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Vereiste
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ontwerp en afwerking
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
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Veiligheidsbarrières Bovenbed
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Openingen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bedbasis
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ladder
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sterkte van Frame en Bevestigingen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stabiliteit
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bevestiging van Bovenbed aan Onderbed
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Testen moeten alleen worden uitgevoerd in een door BIS erkend
          laboratorium.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende Uitdagingen & Hoe Ze te Vermijden
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Onjuiste Productcategorisering</strong>
            <br />
            Verifieer altijd de juiste Indiase Norm.
          </li>
          <li>
            <strong>Onjuiste Documentatie</strong>
            <br />
            Ontbrekende documenten veroorzaken vertragingen—bereid ze van
            tevoren voor.
          </li>
          <li>
            <strong>Gefaalde Laboratoriumtesten</strong>
            <br />
            Zorg voor hoogwaardige materialen, lassen, garde-corps en afwerking.
          </li>
          <li>
            <strong>Fabriek Niet Klaar voor Inspectie</strong>
            <br />
            Zorg ervoor dat QMS en testapparatuur goed worden onderhouden.
          </li>
          <li>
            <strong>Handelsmerkproblemen</strong>
            <br />
            Merknaam moet overeenkomen met licentieaanvraag.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het vroeg oplossen hiervan vermindert de verwerkingstijd drastisch.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Fabrikanten & Importeurs
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Legaal stapelbedden verkopen in India</li>
          <li>Vertrouwen opbouwen met klanten</li>
          <li>Productretourneringen verminderen</li>
          <li>Merkreputatie verbeteren</li>
          <li>Veiligheidsnaleving waarborgen</li>
          <li>Concurrentievoordeel behalen</li>
          <li>Uitbreiden naar retailketens en e-commerce platforms</li>
          <li>Toegang tot overheidsaanbestedingen</li>
          <li>Boetes en juridische acties vermijden</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Boetes voor Non-Conformiteit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het verkopen van stapelbedden zonder BIS Certificering kan resulteren
          in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product inbeslagname</li>
          <li>Financiële boetes</li>
          <li>Fabriekssluitingsbevelen</li>
          <li>Juridische vervolging</li>
          <li>Verbod op Indiase markt</li>
          <li>Zwarte lijst van merk</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Naleving is niet optioneel—het is verplicht.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie Heeft BIS Certificering Nodig voor Stapelbedden?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          De volgende entiteiten moeten een BIS Licentie voor Stapelbedden
          verkrijgen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Buitenlandse fabrikanten die naar India exporteren</li>
          <li>Importeurs</li>
          <li>Distributeurs</li>
          <li>E-commerce verkopers</li>
          <li>OEM/ODM fabrikanten</li>
          <li>Meubelmerken en detailhandelaren</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke fabriek (niet bedrijf) vereist een aparte BIS licentie.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom Ons Kiezen voor BIS Certificeringsadvies?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Wij bieden end-to-end ondersteuning voor BIS Registratie voor
          Stapelbedden, inclusief:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Norm interpretatie (IS 17636:2022)</li>
          <li>Documentatie voorbereiding</li>
          <li>Laboratoriumtest coördinatie</li>
          <li>BIS portaal aanvraag</li>
          <li>Fabrieksinspectie ondersteuning</li>
          <li>Communicatie met BIS functionarissen</li>
          <li>Licentie goedkeuring assistentie</li>
          <li>Post-certificering naleving</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Met jarenlange expertise zorgen wij voor snelle, nauwkeurige en
          probleemloze BIS certificering.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — BIS Certificering voor Stapelbedden
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS certificering verplicht voor stapelbedden in India?
              </strong>
              <br />
              Ja. Volgens IS 17636:2022 is het verplicht voor alle fabrikanten
              en importeurs.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Hoe lang duurt BIS Certificering voor stapelbedden?
              </strong>
              <br />
              Meestal 30 tot 45 dagen afhankelijk van voorbereiding en
              documentatie.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Kunnen buitenlandse fabrikanten BIS aanvragen?</strong>
              <br />
              Ja, via het FMCS (Foreign Manufacturers Certification Scheme).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Kan ik online een BIS Certificaat aanvragen?</strong>
              <br />
              Ja, via het BIS Manak Online Portaal.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Welke testen zijn vereist voor stapelbed certificering?
              </strong>
              <br />
              Belastingtest, garde-corps test, stabiliteitstest, impacttest,
              beknelling test, enz.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Hoe lang is een BIS licentie geldig?</strong>
              <br />
              Meestal 1 tot 2 jaar en verlengbaar.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Kan één licentie meerdere modellen dekken?</strong>
              <br />
              Alleen als ze binnen dezelfde norm en categorie vallen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Is ISI Merk vereist op stapelbedden?</strong>
              <br />
              Ja, het ISI Merk is verplicht na certificering.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. Wat gebeurt er als mijn product faalt bij
                laboratoriumtesten?
              </strong>
              <br />U moet het product aanpassen en monsters opnieuw indienen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>11. Controleert BIS de fabrieksinfrastructuur?</strong>
              <br />
              Ja, tijdens inspectie.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. Kunnen handelaren BIS aanvragen?</strong>
              <br />
              Alleen als ze merkeigenaren zijn en een contract hebben met
              fabrikanten.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. Wat is het BIS Logo?</strong>
              <br />
              Het is het standaard ISI Merk symbool dat productconformiteit
              aangeeft.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                14. Welke documenten zijn nodig voor BIS certificering?
              </strong>
              <br />
              Fabriekslicentie, indeling, machinelijst, BOM, QC plan, test
              rapporten, enz.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>15. Worden BIS testen uitgevoerd in de fabriek?</strong>
              <br />
              Nee, alleen in door BIS erkende laboratoria.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het verkrijgen van een BIS Certificaat voor Stapelbedden volgens IS
          17636:2022 is niet alleen verplicht maar ook essentieel voor het
          waarborgen van consumentenveiligheid, productbetrouwbaarheid en
          wettelijke naleving in India. Het certificeringsproces omvat
          producttesten, documentatie, fabrieksinspectie, en licentieverlening.
          Met goede planning en deskundige begeleiding wordt het proces soepel,
          snel en kosteneffectief.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Of u nu fabrikant, importeur of merkeigenaar bent, het verkrijgen van
          BIS certificering versterkt uw marktpositie, verhoogt het
          klantvertrouwen en opent nieuwe zakelijke mogelijkheden. Ons
          deskundige adviesteam staat klaar om u te assisteren met end-to-end
          BIS Certificering voor stapelbedden.
        </p>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17636-2021-Sun-Certifications-India.pdf"
            title="BIS Certificaat voor Stapelbedden - IS 17636:2021 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadDutch />

        <FaqAuthorDutch questionNumber={5} />
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
