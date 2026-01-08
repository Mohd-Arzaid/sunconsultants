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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForBedsDutch = () => {
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
          Het BIS Certificaat voor Bedden is een verplichte nalevingsvereiste in
          India voor fabrikanten en importeurs van bedden bestemd voor
          huishoudelijk en commercieel gebruik. Volgens de nieuwste Indiase
          Standaard IS 17635:2022 – Bedden (Veiligheidsvereisten) moeten alle
          bedden voldoen aan strikte veiligheids-, duurzaamheids-, structurele
          en prestatiecriteria voordat ze op de Indiase markt worden verkocht.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bedden zijn essentiële meubelproducten die dagelijks worden gebruikt
          in woningen, hotels, ziekenhuizen, hostels, PG-accommodaties en
          institutionele faciliteiten. Structurele zwakte, scherpe randen,
          materiaalfalen of slechte draagkracht kunnen leiden tot ernstige
          verwondingen. Om dergelijke risico&apos;s te voorkomen, verplicht het
          Bureau of Indian Standards (BIS) BIS Certificering voor Bedden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze uitgebreide gids legt alles uit over BIS Licentie voor Bedden,
          inclusief toepasselijke normen, certificeringsproces, testvereisten,
          documenten, kosten, tijdlijnen, boetes en voordelen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificering?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering is een conformiteitsbeoordelingsregeling
          geïntroduceerd door het Bureau of Indian Standards, de nationale
          normenautoriteit van India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wat is een BIS Certificaat?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Een BIS Certificaat bevestigt dat een product voldoet aan Indiase
          Normen en veilig, betrouwbaar en geschikt is voor gebruik.
          Gecertificeerde producten dragen het BIS Certificeringsmerk, algemeen
          bekend als het ISI Merk.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificaat Betekenis
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Het betekent dat het product met succes heeft doorstaan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Laboratoriumtesten</li>
          <li>Fabrieksinspectie</li>
          <li>Kwaliteitscontrole verificatie</li>
          <li>Veiligheidsnalevingsbeoordeling</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS Logo op bedden verzekert klanten dat het product voldoet aan
          door de overheid goedgekeurde kwaliteits- en veiligheidsnormen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Standaard Toepasbaar voor Bedden – IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De toepasselijke Indiase Standaard voor bedden is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17635:2022</strong> – Bedden: Veiligheidsvereisten
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Deze standaard definieert essentiële veiligheids- en
          prestatievereisten voor bedden die worden gebruikt in residentiële en
          commerciële omgevingen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17635:2022 Dekking
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structurele sterkte</li>
          <li>Draagkracht</li>
          <li>Stabiliteit en duurzaamheid</li>
          <li>Materiaalkwaliteit</li>
          <li>Rand- en oppervlakteafwerking</li>
          <li>Veiligheid tegen instorting</li>
          <li>Afwezigheid van beknellingsgevaren</li>
          <li>Langetermijnprestaties</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elk bed dat in India wordt gefabriceerd of geïmporteerd, moet voldoen
          aan IS 17635:2022 en een BIS Registratie voor Bedden verkrijgen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering Verplicht is voor Bedden
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bedden worden gedurende langere perioden gebruikt en ondersteunen
          continu menselijk gewicht. Slecht ontworpen bedden kunnen
          verwondingen, instorting of langetermijngezondheidsrisico&apos;s
          veroorzaken.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Redenen waarom BIS Certificering voor Bedden Vereist is
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zorgt voor structurele integriteit</li>
          <li>Voorkomt instorting en breuk</li>
          <li>Controleert materiaalkwaliteit</li>
          <li>Elimineert scherpe randen en onveilige afwerkingen</li>
          <li>Beschermt consumenten</li>
          <li>Zorgt voor uniforme nationale kwaliteit</li>
          <li>Verplicht onder BIS melding</li>
          <li>Vereist voor legale verkoop in India</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zonder een BIS Licentie voor Bedden is het verkopen of importeren van
          bedden in India illegaal.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificeringsproces voor Bedden (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het BIS certificeringsproces in India volgt een gestructureerde
          procedure onder het ISI Certificeringsschema.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Stap 1 – Identificeer Standaard & Productbereik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bevestig toepasbaarheid onder IS 17635:2022 en bepaal
          productvarianten.
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
          Bereik van BIS Licentie voor Bedden
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Deze standaard dekt de vereisten met betrekking
          tot de prestaties en veiligheid van bedden voor volwassenen voor
          huishoudelijk en niet-huishoudelijk gebruik.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Deze standaard is van toepassing op volledig
          gefabriceerde/vervaardigde bedden. Het is ook van toepassing op
          klaar-voor-montage eenheden; in dat geval zijn de vereisten van deze
          standaard van toepassing op de gemonteerde eenheden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.3</strong> Deze standaard dekt geen waterbedden,
          luchtbedden, opklapbedden, stapelbedden en bedden voor mensen met
          speciale behoeften, noch de bedden voor gezondheidszorg en medische
          doeleinden.
        </p>

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
          Testen moeten alleen worden uitgevoerd bij BIS-goedgekeurde
          laboratoria.
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
          Voordelen van BIS Certificering voor Bedden
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Legale verkoop in India</li>
          <li>Verhoogd klantvertrouwen</li>
          <li>Toegang tot e-commerce platforms</li>
          <li>In aanmerking komen voor overheidsaanbestedingen</li>
          <li>Verminderde aansprakelijkheid</li>
          <li>Sterke merkgeloofwaardigheid</li>
          <li>Naleving van Indiase normen</li>
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
          Wie Heeft BIS Certificaat voor Bedden Nodig?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          De volgende entiteiten moeten een BIS Licentie voor Bedden verkrijgen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Buitenlandse fabrikanten</li>
          <li>Importeurs</li>
          <li>Meubelmerken</li>
          <li>OEM/ODM leveranciers</li>
          <li>E-commerce verkopers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke productie-eenheid vereist een aparte BIS licentie.
        </p>

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
          Het BIS Certificaat voor Bedden onder IS 17635:2022 is een verplichte
          juridische vereiste die veiligheid, kwaliteit en duurzaamheid
          waarborgt. Het verkrijgen van een BIS Licentie voor Bedden beschermt
          consumenten, versterkt de merkwaarde en maakt legale markttoegang in
          heel India mogelijk. Met deskundige ondersteuning wordt het
          certificeringsproces naadloos en efficiënt.
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
              <strong>7. Zijn houten en metalen bedden beide gedekt?</strong>
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
