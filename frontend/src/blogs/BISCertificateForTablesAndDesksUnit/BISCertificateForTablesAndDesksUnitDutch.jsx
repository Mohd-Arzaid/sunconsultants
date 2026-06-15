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

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForTablesAndDesksUnitDutch = () => {
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

export default BISCertificateForTablesAndDesksUnitDutch;

const MetaTags = () => {
  const title =
    "BIS Certificaat voor Tafels & Bureaus | IS 17633:2022 BIS Licentie";
  const ogTitle = "BIS Certificering voor Tafels & Bureaus – IS 17633:2022 Gids";
  const twitterTitle = "BIS Licentie voor Tafels & Bureaus | IS 17633:2022";
  const metaDescription =
    "Krijg BIS Certificaat voor Tafels & Bureaus onder IS 17633:2022. Proces, documenten, testen, kosten & tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Complete gids voor BIS Certificering voor Tafels & Bureaus volgens IS 17633:2022. Ken het proces, kosten, documenten, testen & BIS licentie voordelen.";
  const twitterDescription =
    "Vraag BIS Certificaat aan voor Tafels & Bureaus onder IS 17633:2022. Leer BIS proces, documenten, testen, kosten & tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Tafels & Bureaus, BIS Licentie voor Tafels & Bureaus, IS 17633:2022, BIS Certificering voor Tafels & Bureaus";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tafels-en-bureaus-is-17633";
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
                    BIS Certificering voor Tafels en Bureaus (IS 17633:2022)
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
          BIS Certificering voor Tafels en Bureaus (IS 17633:2022) – Complete
          Gids voor ISI Merk Certificering
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="BIS Licentie voor Tafels en Bureaus"
            alt="BIS Certificering voor Tafels en Bureaus - IS 17633:2022 ISI Merk Gids"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tafels en bureaus behoren tot de meest gebruikte meubelproducten in
          kantoren, onderwijsinstellingen, commerciële vestigingen,
          overheidsorganisaties en woonruimtes. Aangezien van deze producten wordt
          verwacht dat ze bestand zijn tegen regelmatig gebruik en tegelijkertijd de
          veiligheid, stabiliteit en duurzaamheid voor de gebruiker waarborgen, is
          naleving van erkende kwaliteitsnormen steeds belangrijker geworden voor
          fabrikanten en importeurs.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In India moeten tafels en bureaus die onder IS 17633:2022 vallen voldoen
          aan de toepasselijke kwaliteits- en veiligheidsvereisten die zijn
          voorgeschreven door het Bureau of Indian Standards (BIS). Fabrikanten die
          met succes aan deze vereisten voldoen, kunnen een BIS-licentie verkrijgen
          en het ISI Merk op hun producten gebruiken, waarmee zij conformiteit met
          de relevante Indiase Standaard aantonen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het certificeringsproces beoordeelt verschillende aspecten van de
          productprestaties, waaronder sterkte, stabiliteit, duurzaamheid,
          vakmanschap, afmetingen en algehele veiligheid. Naleving helpt bedrijven
          niet alleen om aan de wettelijke vereisten te voldoen, maar verbetert ook
          de geloofwaardigheid van het product en de marktacceptatie.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze uitgebreide gids legt alles uit wat fabrikanten, importeurs,
          meubelmerken en inkoopprofessionals moeten weten over BIS Certificering
          voor Tafels en Bureaus onder IS 17633:2022, inclusief toepasbaarheid,
          certificeringsvereisten, testparameters, documentatie, voordelen en het
          certificeringsproces.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Belangrijkste Hoogtepunten van BIS Certificering voor Tafels en Bureaus
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Onderdeel
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Product", "Tafels en Bureaus"],
                ["Toepasselijke Standaard", "IS 17633:2022"],
                ["Certificeringstype", "BIS Productcertificering"],
                ["Toepasselijk Merk", "ISI Merk"],
                ["Certificeringsschema", "Schema-I (ISI Merk Certificering)"],
                ["Regelgevende Autoriteit", "Bureau of Indian Standards (BIS)"],
                ["Toepasselijke Sector", "Meubilair"],
                [
                  "In Aanmerking Komende Aanvragers",
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
                    {particular === "Certificeringsschema" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Schema-I (ISI Merk Certificering)
                      </a>
                    ) : particular === "Nalevingsvereiste" ? (
                      <>
                        Verplicht onder toepasselijke {" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
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
          Wat is BIS Certificering voor Tafels en Bureaus?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering voor Tafels en Bureaus is een
          conformiteitsbeoordelingsproces dat wordt uitgevoerd onder het Bureau of
          Indian Standards (BIS) Productcertificeringsschema. De certificering
          bevestigt dat het product voldoet aan de vereisten gespecificeerd in IS
          17633:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Na succesvolle certificering mogen fabrikanten het ISI Merk op hun
          producten gebruiken, wat naleving van de toepasselijke Indiase Standaard
          aangeeft.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          De certificering is bedoeld om te waarborgen dat tafels en bureaus die op
          de Indiase markt worden geleverd, voldoen aan vastgestelde vereisten met
          betrekking tot:
        </p>

        <ul className={LIST_CLASS}>
          <li>Structurele sterkte en stabiliteit tijdens normaal gebruik</li>
          <li>Duurzaamheid, gebruikersveiligheid en materiaalvakmanschap</li>
          <li>Volledige prestatievereisten onder IS 17633:2022</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voor kopers en inkoopinstanties dient het ISI Merk als een garantie dat
          het meubilair is beoordeeld aan de hand van erkende kwaliteits- en
          veiligheidsnormen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Overzicht van IS 17633:2022 voor Tafels en Bureaus
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022 is de Indiase Standaard die prestaties- en
          veiligheidsvereisten specificeert voor tafels en bureaus bedoeld voor
          volwassen gebruikers in zittende en staande toepassingen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          De standaard dekt beide:
        </p>

        <ul className={LIST_CLASS}>
          <li>Volledig vervaardigde (kant-en-klare) tafels en bureaus</li>
          <li>Klaar-voor-montage (RTA) eenheden — getest na volledige montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het doel van de standaard is het vaststellen van minimale prestaties- en
          veiligheidsvereisten die helpen waarborgen dat meubilair stabiel,
          duurzaam en veilig blijft gedurende de beoogde levensduur.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Belangrijkste Gebieden Gedekt Onder IS 17633:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          De standaard richt zich op verschillende belangrijke
          prestatiekenmerken, waaronder:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Sterktevereisten —</strong> Tafels en bureaus moeten verwachte
            belastingen tijdens normaal gebruik weerstaan zonder falen of
            buitensporige vervorming.
          </li>
          <li>
            <strong>Stabiliteitsvereisten —</strong> Meubilair moet stabiel blijven
            tijdens gebruik en kantelen weerstaan onder voorzienbare
            belastingomstandigheden.
          </li>
          <li>
            <strong>Duurzaamheidsvereisten —</strong> Producten moeten prestaties en
            structurele integriteit behouden na herhaald gebruik gedurende een
            langere periode.
          </li>
          <li>
            <strong>Veiligheidsvereisten —</strong> Ontwerp en constructie moeten de
            risico's van instabiliteit, scherpe randen, onveilige bouw of
            structureel falen minimaliseren.
          </li>
          <li>
            <strong>Vakmanschap &amp; Constructiekwaliteit —</strong> Vakmanschap,
            montage, verbindingen, bevestigingen en algehele bouw worden beoordeeld
            voor betrouwbare prestaties op lange termijn.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Is BIS Certificering voor Tafels en Bureaus Verplicht in India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ja. Tafels en bureaus die vallen onder de toepasselijke Meubel Quality
          Control Order (QCO) moeten voldoen aan de relevante Indiase Standaard en
          BIS Certificering verkrijgen voordat ze worden vervaardigd, geïmporteerd,
          verkocht, gedistribueerd of aangeboden op de Indiase markt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het doel van verplichte certificering is om:
        </p>

        <ul className={LIST_CLASS}>
          <li>Hogere productkwaliteit in de meubelindustrie te waarborgen</li>
          <li>Consumentenveiligheid te beschermen via geverifieerde normen</li>
          <li>Te voorkomen dat ondermaats meubilair de markt betreedt</li>
          <li>Standaardisatie en uniforme kwaliteitsnormen te bevorderen</li>
          <li>Kopersvertrouwen in ISI Merk-gecertificeerde producten op te bouwen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten die onder de toepasselijke regelgeving vallen, moeten een
          BIS-licentie verkrijgen en het ISI Merk gebruiken in overeenstemming met
          de BIS-vereisten.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Bekijk ook Meubelproducten Gedekt Onder Verplichte BIS
            Certificering —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            <strong>BIS Certificering voor meubilair</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Productreikwijdte Gedekt Onder IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De reikwijdte van IS 17633:2022 strekt zich uit tot verschillende
          categorieën tafels en bureaus die zijn ontworpen voor volwassen
          gebruikers in residentiële, commerciële, institutionele en
          werkomgevingen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Voorbeelden van veelgedekte producten zijn:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kantoor-, studie- en computerbureaus</li>
          <li>Werkstations en multifunctionele bureaus</li>
          <li>Conferentie- en vergadertafels</li>
          <li>Institutionele en laboratoriumtafels</li>
          <li>Co-working en commercieel meubilair</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten moeten de productspecificaties en het beoogde gebruik
          zorgvuldig beoordelen om te bepalen of hun producten binnen de reikwijdte
          van IS 17633:2022 vallen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Belangrijke Technische Vereisten Onder IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Om BIS-certificering te verkrijgen, moeten tafels en bureaus voldoen aan
          verschillende prestaties- en veiligheidsvereisten die door de standaard
          worden gespecificeerd.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Structurele Integriteit —</strong> Producten moeten presteren
            onder voorgeschreven belastingen; verbindingen en ondersteunende
            structuren blijven veilig tijdens het testen.
          </li>
          <li>
            <strong>Draagvermogenprestaties —</strong> Tafels en bureaus moeten
            gespecificeerde belastingen ondersteunen zonder onaanvaardbare
            vervorming, schade of falen.
          </li>
          <li>
            <strong>Stabiliteitsprestaties —</strong> Meubilair moet stabiel blijven
            tijdens gebruik en kantelrisico's verminderen die letsel of materiële
            schade kunnen veroorzaken.
          </li>
          <li>
            <strong>Duurzaamheidsprestaties —</strong> Producten moeten herhaalde
            gebruikscycli weerstaan met behoud van aanvaardbare prestaties.
          </li>
          <li>
            <strong>Materiaal &amp; Vakmanschap —</strong> Materialen, afwerking en
            montagemethoden moeten voldoen aan kwaliteitscontroles voor consistente
            productie.
          </li>
          <li>
            <strong>Veiligheidsoverwegingen —</strong> Het ontwerp moet gevaren van
            het gebruik van meubilair voor consumenten en institutionele kopers
            minimaliseren.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering Belangrijk is voor Meubelfabrikanten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De Indiase meubelmarkt is steeds kwaliteitsbewuster geworden.
          Overheidsdiensten, onderwijsinstellingen, zakelijke kopers en grote
          inkoopinstanties geven vaak de voorkeur aan producten die voldoen aan
          erkende normen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het verkrijgen van BIS-certificering helpt fabrikanten:
        </p>

        <ul className={LIST_CLASS}>
          <li>Naleving van toepasselijke Indiase normen aan te tonen</li>
          <li>Productgeloofwaardigheid en merkreputatie te vergroten</li>
          <li>Vertrouwen van klanten en institutionele kopers te winnen</li>
          <li>Acceptatie bij overheids- en zakelijke inkoop te verbeteren</li>
          <li>Interne kwaliteitsmanagementpraktijken te versterken</li>
          <li>Voorop te blijven lopen op veranderende wettelijke vereisten</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voor fabrikanten die langetermijngroei nastreven, wordt BIS-certificering
          vaak gezien als zowel een nalevingsvereiste als een strategisch
          bedrijfsvoordeel.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testvereisten voor Tafels en Bureaus Onder IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voordat een fabrikant BIS-certificering kan verkrijgen, moeten
          productmonsters worden geëvalueerd aan de hand van de toepasselijke
          vereisten van IS 17633:2022 door middel van testen in een door BIS-erkend
          laboratorium.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het doel van het testen is om te verifiëren dat het meubilair voldoet aan
          de voorgeschreven normen voor veiligheid, stabiliteit, sterkte,
          duurzaamheid en algehele prestaties.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Hoewel de exacte testparameters kunnen variëren afhankelijk van het
          productontwerp en de certificeringsvereisten, worden fabrikanten over het
          algemeen beoordeeld op de volgende kenmerken:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Ontwerp &amp; Vakmanschap —</strong> Constructiekwaliteit,
            montage, afwerking en algehele productintegriteit worden onderzocht voor
            veilig langdurig gebruik.
          </li>
          <li>
            <strong>Dimensionale Verificatie —</strong> Kritieke metingen worden
            gecontroleerd aan de hand van de standaard en goedgekeurde
            productspecificaties.
          </li>
          <li>
            <strong>Stabiliteitstest —</strong> Bevestigt dat het product stabiel
            blijft bij normaal gebruik en signaleert kantelen of structurele
            zwakheden.
          </li>
          <li>
            <strong>Statische Belastingstest —</strong> Verifieert het draagvermogen
            zonder falen, buitensporige vervorming of schade.
          </li>
          <li>
            <strong>Sterktetest —</strong> Beoordeelt frames, verbindingen en
            ondersteuningen onder operationele spanningen tijdens regelmatig
            gebruik.
          </li>
          <li>
            <strong>Duurzaamheidsbeoordeling —</strong> Controleert prestatiebehoud
            na herhaalde gebruikscycli.
          </li>
          <li>
            <strong>Veiligheidsbeoordeling —</strong> Sluit vermijdbare risico's uit
            van instabiliteit, defecten of onveilige ontwerpkenmerken.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificeringsproces voor Tafels en Bureaus
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten die BIS-certificering onder IS 17633:2022 nastreven, moeten
          een gestructureerd certificeringsproces volgen dat is vastgesteld door het
          Bureau of Indian Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hoewel specifieke vereisten kunnen variëren op basis van het type
          aanvrager en de productielocatie, blijft het algemene proces vergelijkbaar.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Stap 1: Beoordeling van Productreikwijdte
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De eerste stap omvat het bepalen of het product binnen de reikwijdte van
          IS 17633:2022 en de toepasselijke Quality Control Order valt. Een
          technische beoordeling van de productspecificaties, het beoogde gebruik,
          materialen en constructie wordt doorgaans uitgevoerd voordat het
          certificeringsproces wordt gestart.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Stap 2: Voorbereiding van Documentatie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De fabrikant bereidt de vereiste documentatie voor, inclusief
          bedrijfsinformatie, productiegegevens, productspecificaties,
          kwaliteitscontroleprocedures en ondersteunende technische records.
          Correcte documentatie is cruciaal omdat tekortkomingen in dit stadium de
          certificering kunnen vertragen.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Stap 3: Producttesten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Productmonsters worden getest in een door BIS-erkend laboratorium om
          naleving van de vereisten van IS 17633:2022 te verifiëren. Het testrapport
          dient als een van de primaire technische documenten ter ondersteuning van
          de certificeringsaanvraag.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Stap 4: Indiening van Aanvraag
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De BIS-aanvraag wordt ingediend samen met ondersteunende documenten,
          testrapporten, productie-informatie en kwaliteitsmanagementrecords. De
          aanvraag wordt door BIS beoordeeld op volledigheid en technische naleving.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Stap 5: Fabrieksbeoordeling
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS kan een fabrieksinspectie uitvoeren om te evalueren:
        </p>
        <ul className={LIST_CLASS}>
          <li>Productie-infrastructuur en productiecapaciteiten</li>
          <li>Kwaliteitscontrolesystemen en interne testfaciliteiten</li>
          <li>Grondstofcontroles en producttraceerbaarheidsmechanismen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Het doel is om het vermogen van de fabrikant te verifiëren om
          consequent conforme producten te produceren.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Stap 6: Evaluatie en Beoordeling
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS beoordeelt de aanvraag, inspectiebevindingen en
          laboratoriumtestrapporten voordat een certificeringsbeslissing wordt
          genomen. Eventuele opmerkingen die tijdens het beoordelingsproces worden
          gemaakt, moeten door de aanvrager worden behandeld.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Stap 7: Verlening van BIS Licentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Na succesvolle voltooiing van alle vereisten verleent BIS de licentie en
          autoriseert de fabrikant om het ISI Merk te gebruiken op gecertificeerde
          tafels en bureaus.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificering voor Indiase Fabrikanten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Indiase fabrikanten dienen over het algemeen een aanvraag in onder de
          binnenlandse certificeringsprocedure voorgeschreven door BIS. Het proces
          omvat doorgaans:
        </p>

        <ul className={LIST_CLASS}>
          <li>Producttesten in een door BIS-erkend laboratorium</li>
          <li>Indiening van aanvraag met ondersteunende documenten</li>
          <li>Fabrieksinspectie en technische beoordeling door BIS</li>
          <li>Verlening van BIS-licentie en ISI Merk autorisatie</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Eenmaal gecertificeerd, moeten fabrikanten blijven voldoen aan de
          BIS-vereisten en een consistente productkwaliteit handhaven gedurende de
          licentieperiode.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificering voor Buitenlandse Fabrikanten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Buitenlandse fabrikanten die tafels en bureaus naar India willen
          exporteren, moeten ook BIS-certificering verkrijgen voordat zij producten
          leveren die vallen onder de toepasselijke Quality Control Order.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het certificeringsproces omvat over het algemeen:
        </p>

        <ul className={LIST_CLASS}>
          <li>Aanstelling van een Geautoriseerde Indiase Vertegenwoordiger (AIR)</li>
          <li>Producttesten en fabrieksbeoordeling in het buitenland</li>
          <li>Documentatiebeoordeling en goedkeuring van BIS-certificering</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Buitenlandse fabrikanten moeten doorlopende naleving van de
          BIS-vereisten waarborgen om de geldigheid van de certificering te
          behouden.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vereiste Documenten voor BIS Certificering van Tafels en Bureaus
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Documentatievereisten kunnen variëren afhankelijk van de fabrikant en de
          certificeringsroute. De volgende documenten zijn echter veelgevraagd
          tijdens het certificeringsproces.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Bedrijfs- en Juridische Documenten</h3>
        <ul className={LIST_CLASS}>
          <li>Bedrijfsregistratie, productielicentie en GST (indien van toepassing)</li>
          <li>Gegevens van geautoriseerde ondertekenaar en identiteitsbewijs</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Productie-informatie</h3>
        <ul className={LIST_CLASS}>
          <li>Processtroomdiagram, fabrieksindeling en machinegegevens</li>
          <li>Productie-infrastructuur en capaciteitsrecords</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Productinformatie</h3>
        <ul className={LIST_CLASS}>
          <li>Productspecificaties, technische tekeningen en catalogus</li>
          <li>Materiaallijst en materiaal-/componentgegevens</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Kwaliteitscontroledocumenten</h3>
        <ul className={LIST_CLASS}>
          <li>Interne testen, inspectie en QC-procedures</li>
          <li>Kwaliteitscontrolerecords en kalibratierapporten van apparatuur</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Certificeringsdocumenten</h3>
        <ul className={LIST_CLASS}>
          <li>Laboratoriumtestrapporten en ingevulde BIS-aanvraagformulieren</li>
          <li>Verklaringen, toezeggingen en andere door BIS-voorgeschreven documenten</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten moeten ervoor zorgen dat alle documentatie nauwkeurig,
          volledig en consistent is voordat ze deze indienen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende Uitdagingen Tijdens BIS Certificering
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hoewel het certificeringsproces eenvoudig is wanneer het goed wordt
          beheerd, ondervinden fabrikanten vaak verschillende uitdagingen.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Technische interpretatie —</strong> Het in kaart brengen van IS
            17633:2022 vereisten naar specifieke productontwerpen kan moeilijk zijn
            zonder deskundige begeleiding.
          </li>
          <li>
            <strong>Testfalen —</strong> Zwakke verbindingen, slechte stabiliteit of
            materiaalproblemen leiden vaak tot afkeuring van labtesten.
          </li>
          <li>
            <strong>Documentatiehiaten —</strong> Onvolledige of niet-overeenkomende
            records zijn een veelvoorkomende oorzaak van aanvraagvertragingen.
          </li>
          <li>
            <strong>Fabrieksnaleving —</strong> QC-systemen, traceerbaarheid of
            productiecontroles moeten mogelijk worden geüpgraded voordat de licentie
            wordt verleend.
          </li>
          <li>
            <strong>Regelgevingscoördinatie —</strong> Het afstemmen van labtesten,
            inspecties en BIS-opvolgingen kost tijd zonder gestructureerde
            ondersteuning.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van Professionele BIS Certificeringsassistentie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Samenwerken met een ervaren BIS-consultant kan fabrikanten helpen kostbare
          vertragingen te vermijden en het certificeringstraject te stroomlijnen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Professionele ondersteuning omvat doorgaans:
        </p>

        <ul className={LIST_CLASS}>
          <li>Beoordeling van productreikwijdte en interpretatie van de standaard</li>
          <li>Voorbereiding van documentatie en indiening van aanvraag</li>
          <li>Coördinatie van labtesten en fabrieksinspectie</li>
          <li>Doorlopende naleving en ondersteuning na certificering</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hierdoor kunnen fabrikanten zich richten op de productie terwijl wordt
          gewaarborgd dat aan de wettelijke vereisten efficiënt wordt voldaan.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom Sun Certifications India Kiezen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India is een regelgevingsnalevingsconsultancy die
          fabrikanten, importeurs, exporteurs en bedrijven ondersteunt met
          certificerings- en goedkeuringsvereisten in heel India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Onze experts bieden end-to-end ondersteuning voor BIS Certificering voor
          Tafels en Bureaus onder IS 17633:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Onze Diensten Omvatten</h3>

        <ul className={LIST_CLASS}>
          <li>Beoordeling van producttoepasbaarheid en BIS-nalevingsadvies</li>
          <li>Documentatieondersteuning en aanvraagbeheer</li>
          <li>Testcoördinatie en fabrieksinspectie-assistentie</li>
          <li>Regelgevingscommunicatie en nalevingsondersteuning na certificering</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ons doel is om bedrijven te helpen het certificeringsproces efficiënt te
          doorlopen en tegelijkertijd vertragingen en nalevingsuitdagingen te
          minimaliseren.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering voor Tafels en Bureaus onder IS 17633:2022 is een
          belangrijke vereiste voor fabrikanten die conforme meubelproducten op de
          Indiase markt willen leveren. De certificering helpt waarborgen dat tafels
          en bureaus voldoen aan vastgestelde normen met betrekking tot veiligheid,
          stabiliteit, duurzaamheid, sterkte en kwaliteit.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Door BIS Certificering te verkrijgen en het ISI Merk te gebruiken, kunnen
          fabrikanten naleving van Indiase normen aantonen, het vertrouwen van
          klanten verbeteren, hun marktpositie versterken en langetermijngroei van
          het bedrijf ondersteunen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Als u van plan bent BIS Certificering voor Tafels en Bureaus onder IS
          17633:2022 te verkrijgen, kan Sun Certifications India u helpen met
          end-to-end nalevingsondersteuning, zodat u het certificeringsproces
          efficiënt en met vertrouwen kunt doorlopen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde Vragen – BIS Certificering voor Tafels en Bureaus (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Wat is IS 17633:2022?</strong>
              <br />
              IS 17633:2022 is de Indiase Standaard gepubliceerd door het Bureau of
              Indian Standards (BIS) die minimale prestaties-, stabiliteits-,
              duurzaamheids- en veiligheidsvereisten vaststelt voor tafels en bureaus
              bedoeld voor volwassen gebruikers in zittende en staande toepassingen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Is BIS-certificering verplicht voor tafels en bureaus?</strong>
              <br />
              Ja — voor producten die vallen onder de toepasselijke Meubel Quality
              Control Order (QCO). Fabrikanten en importeurs moeten een geldige
              BIS-licentie hebben en voldoen aan IS 17633:2022 voordat zij dergelijk
              meubilair in India vervaardigen, importeren, verkopen of distribueren.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Welk certificeringsmerk is van toepassing op tafels en bureaus?</strong>
              <br />
              Gecertificeerde tafels en bureaus zijn geautoriseerd om het ISI Merk te
              dragen onder het BIS Productcertificeringsschema, wat aangeeft dat het
              product voldoet aan de toepasselijke Indiase Standaard.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Wie kan BIS-certificering aanvragen?</strong>
              <br />
              Zowel Indiase fabrikanten als buitenlandse fabrikanten kunnen een
              aanvraag indienen, op voorwaarde dat hun tafels en bureaus binnen de
              reikwijdte van de toepasselijke QCO vallen en voldoen aan de vereisten
              van IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Wat is het doel van BIS-certificering?</strong>
              <br />
              BIS-certificering bevestigt dat meubilair voldoet aan nationaal erkende
              normen voor veiligheid, structurele prestaties, duurzaamheid en
              vakmanschap — wat helpt eindgebruikers te beschermen en
              kwaliteitsnormen op de markt te handhaven.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Welke producten vallen onder IS 17633:2022?</strong>
              <br />
              De standaard dekt tafels en bureaus voor volwassen gebruik in kantoren,
              onderwijsinstellingen, commerciële vestigingen en werkomgevingen —
              inclusief kantoorbureaus, werkstations, studietafels, conferentietafels
              en soortgelijke meubelcategorieën.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Is laboratoriumtesten verplicht?</strong>
              <br />
              Ja. Productmonsters moeten worden getest in een door BIS-erkend
              laboratorium, en het resulterende testrapport is een belangrijk
              document in de certificeringsaanvraag om naleving van IS 17633:2022 aan
              te tonen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Kunnen geïmporteerde tafels en bureaus zonder BIS-certificering worden verkocht?</strong>
              <br />
              Nee. Geïmporteerde producten die onder verplichte certificering vallen,
              kunnen niet legaal in India worden geleverd zonder geldige
              BIS-goedkeuring. Importeurs moeten naleving van de toepasselijke
              standaard waarborgen voordat ze producten op de markt brengen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Wat is de rol van een fabrieksinspectie?</strong>
              <br />
              BIS voert een fabrieksbeoordeling uit om te verifiëren dat de fabrikant
              over voldoende productie-infrastructuur, kwaliteitscontrolesystemen en
              producttraceerbaarheid beschikt om consequent conforme tafels en
              bureaus te vervaardigen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Hoe kan Sun Certifications India helpen?</strong>
              <br />
              Sun Certifications India biedt end-to-end assistentie — inclusief
              beoordeling van productreikwijdte, voorbereiding van documentatie,
              coördinatie van laboratoriumtesten, beheer van BIS-aanvragen,
              voorbereiding op fabrieksinspectie en nalevingsondersteuning na
              certificering voor tafels en bureaus onder IS 17633:2022.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="BIS Certificaat voor Tafels & Bureaus - IS 17633:2022 PDF"
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
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ISI Merk Licentie</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS FMCS Certificaat</a>
          </li>
        </ul>

        <ManyUsersAlsoReadDutch />

        <FaqAuthorDutch questionNumber={2} />
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
              BIS Merk (ISI Licentie) voor Buitenlandse Productie
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
                alt="Plastic Afvalbeheer"
                title="Plastic Afvalbeheer"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plastic Afvalbeheer
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
              EPR Certificaat Certificeringen
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC Certificaat logo"
                title="LMPC Certificaat logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Certificaat Certificeringen
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
