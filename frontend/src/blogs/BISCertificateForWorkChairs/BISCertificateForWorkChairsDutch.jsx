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

const BISCertificateForWorkChairsDutch = () => {
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

export default BISCertificateForWorkChairsDutch;

const MetaTags = () => {
  const title = "BIS Certificaat voor Werkstoelen | IS 17631:2022 BIS Licentie";
  const ogTitle = "BIS Certificering voor Werkstoelen – IS 17631:2022 Gids";
  const twitterTitle = "BIS Licentie voor Werkstoelen | IS 17631:2022";
  const metaDescription =
    "Krijg BIS Certificaat voor werkstoelen volgens IS 17631:2022. Proces, documenten, testen, kosten en tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor Werkstoelen volgens IS 17631:2022. Ken het proces, kosten, documenten, testen en BIS licentie voordelen.";
  const twitterDescription =
    "Vraag BIS Certificaat aan voor Werkstoelen volgens IS 17631:2022. Leer BIS proces, documenten, testen, kosten en tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Werkstoelen, BIS Licentie voor Werkstoelen, IS 17631:2022, BIS Certificering voor Werkstoelen";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631";
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
                    <Link to="/Blogs">Laatste Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certificering voor Werkstoelen (IS 17631:2022)
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
          BIS Certificering voor Werkstoelen (IS 17631:2022) – Volledige ISI Mark
          Certificeringsgids
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="BIS Licentie voor Werkstoelen"
            alt="BIS Certificering voor Werkstoelen - IS 17631:2022 ISI Mark Gids"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Werkstoelen zijn een essentieel onderdeel geworden van moderne
          werkplekken, onderwijsinstellingen, overheidskantoren, co-working
          ruimtes en thuiskantooromgevingen. Naarmate organisaties meer nadruk
          leggen op het comfort van medewerkers, productiviteit, ergonomie op de
          werkplek en beroepswelzijn, blijft de vraag naar hoogwaardige
          werkstoelen groeien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Een slecht ontworpen stoel kan de houding, het comfort en de
          productiviteit negatief beïnvloeden. Daarom zijn kwaliteit, veiligheid,
          duurzaamheid en ergonomische prestaties cruciale overwegingen voor
          fabrikanten, kopers en inkooporganisaties. Om uniforme
          kwaliteitsnormen in de sector te waarborgen, heeft het Bureau of
          Indian Standards (BIS) IS 17631:2022 vastgesteld, de Indiase norm die
          van toepassing is op werkstoelen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten die onder het toepasselijke regelgevingskader vallen,
          moeten BIS Certificering verkrijgen en het ISI Merk op conforme
          producten aanbrengen. BIS Certificering toont aan dat de werkstoel is
          beoordeeld aan de hand van voorgeschreven eisen met betrekking tot
          veiligheid, sterkte, stabiliteit, duurzaamheid en ergonomische
          prestaties.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze uitgebreide gids legt alles uit wat fabrikanten, importeurs,
          meubelmerken, inkoopprofessionals en ondernemers moeten weten over
          BIS Certificering voor Werkstoelen onder IS 17631:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Snel Overzicht van BIS Certificering voor Werkstoelen
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
                ["Product", "Werkstoelen"],
                ["Toepasselijke Indiase Norm", "IS 17631:2022"],
                ["Certificeringstype", "BIS Productcertificering"],
                ["Toepasselijk Certificeringsschema", "Schema-I (ISI Mark Certificering)"],
                ["Toepasselijk Merk", "ISI Mark"],
                ["Regelgevende Autoriteit", "Bureau of Indian Standards (BIS)"],
                ["Toepasselijk Ministerie", "Ministerie van Handel en Industrie"],
                ["Nalevingsvereiste", "Verplicht onder toepasselijke Meubel QCO (Quality Control Order)"],
                [
                  "In aanmerking komende aanvragers",
                  "Indiase Fabrikanten en Buitenlandse Fabrikanten ",
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
                    {particular === "Toepasselijk Certificeringsschema" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Schema-I (ISI Mark Certificering)
                      </a>
                    ) : particular === "Nalevingsvereiste" ? (
                      <>
                        Verplicht onder toepasselijke{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
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
          Wat is BIS Certificering voor Werkstoelen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering voor Werkstoelen is een conformiteitsbeoordelingsproces
          dat wordt uitgevoerd onder het BIS Productcertificeringsschema van het
          Bureau of Indian Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het doel van certificering is om te verifiëren dat werkstoelen voldoen
          aan de eisen zoals gespecificeerd onder IS 17631:2022. Na succesvolle
          certificering mogen fabrikanten het ISI Merk op hun producten aanbrengen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het certificeringsproces evalueert verschillende prestatie- en
          veiligheidsaspecten van werkstoelen, waaronder:
        </p>

        <ul className={LIST_CLASS}>
          <li>Ergonomisch ontwerp</li>
          <li>Structurele integriteit</li>
          <li>Stabiliteit</li>
          <li>Duurzaamheid</li>
          <li>Veiligheidseisen</li>
          <li>Afwerking</li>
          <li>Productprestaties</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het ISI Merk biedt de zekerheid dat het product is beoordeeld aan de
          hand van erkende Indiase normen en voldoet aan de voorgeschreven
          kwaliteitseisen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering Belangrijk is voor Werkstoelen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Werkstoelen worden gedurende lange perioden gebruikt in kantoren,
          onderwijsinstellingen, commerciële vestigingen en thuiswerkplekken.
          Aangezien gebruikers een aanzienlijk deel van hun dag zittend doorbrengen,
          beïnvloeden de kwaliteit en ergonomische prestaties van deze stoelen
          rechtstreeks het comfort en de efficiëntie op de werkplek.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS Certificering helpt ervoor te zorgen dat gecertificeerde werkstoelen:
        </p>

        <ul className={LIST_CLASS}>
          <li>Voldoen aan voorgeschreven veiligheidseisen</li>
          <li>Betrouwbare prestaties leveren</li>
          <li>Voldoende structurele sterkte bieden</li>
          <li>Stabiliteit behouden tijdens gebruik</li>
          <li>Langdurige duurzaamheid ondersteunen</li>
          <li>Voldoen aan Indiase kwaliteitsnormen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voor fabrikanten helpt certificering om productkwaliteit aan te tonen en
          ondersteunt het regelgevende naleving en marktacceptatie.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Overzicht van IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022 is de Indiase norm die eisen specificeert voor werkstoelen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          De norm stelt eisen vast met betrekking tot:
        </p>

        <ul className={LIST_CLASS}>
          <li>Veiligheid</li>
          <li>Sterkte</li>
          <li>Stabiliteit</li>
          <li>Duurzaamheid</li>
          <li>Ergonomische overwegingen</li>
          <li>Functionele prestaties</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het doel is om ervoor te zorgen dat werkstoelen in staat zijn om veilige
          en betrouwbare prestaties te leveren tijdens langdurig gebruik in
          werkomgevingen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1">Reikwijdte van IS 17631:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Volgens de norm dekt IS 17631:2022 werkstoelen en is van toepassing op:
        </p>

        <ul className={LIST_CLASS}>
          <li>Volledig gefabriceerde werkstoelen</li>
          <li>Gefabriceerde werkstoelen</li>
          <li>Klaar-voor-montage werkstoelen na montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          De eisen van de norm zijn van toepassing op het gemonteerde product dat
          bedoeld is voor gebruik.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Soorten Werkstoelen Gedekt Onder IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Afhankelijk van het productontwerp en de beoogde toepassing kan de norm
          van toepassing zijn op verschillende categorieën werkplekzitmeubilair,
          waaronder:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Kantoor Werkstoelen —</strong> Zitmeubilair gebruikt in
            bedrijfskantoren, administratieve afdelingen en professionele
            werkomgevingen.
          </li>
          <li>
            <strong>Taakstoelen —</strong> Stoelen gebouwd voor dagelijks bureauwerk,
            werkstations en routinematige zittende taken.
          </li>
          <li>
            <strong>Verstelbare Werkstoelen —</strong> Modellen met hoogte, kantel
            of andere verstelbare functies om comfort en ergonomie te verbeteren.
          </li>
          <li>
            <strong>Institutionele Werkstoelen —</strong> Stoelen geleverd aan
            scholen, hogescholen, overheidskantoren en commerciële instellingen.
          </li>
          <li>
            <strong>Thuiskantoor Stoelen —</strong> Werkstoelen ontworpen voor
            thuiswerken, freelancers en residentiële kantooropstellingen.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Beoordeel productontwerp, mechanisme en beoogd gebruik zorgvuldig om te
          bevestigen of uw stoel binnen de reikwijdte van IS 17631:2022 valt.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Bekijk ook Meubelproducten Gedekt Onder Verplichte BIS
            Certificering —
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
          Belangrijkste Eisen Onder IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De norm richt zich op verschillende belangrijke prestatiekenmerken die
          bijdragen aan de kwaliteit en veiligheid van werkstoelen.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Ergonomisch Ontwerp —</strong> Richt zich op gebruikerscomfort,
            zit- en rugleuningondersteuning, verstelbaarheid en juiste houding om
            vermoeidheid te verminderen en de productiviteit op de werkplek te
            verbeteren.
          </li>
          <li>
            <strong>Sterkte-eisen —</strong> Frame, verbindingen en dragende
            structuren moeten normaal gebruik weerstaan zonder falen of verlies
            van integriteit.
          </li>
          <li>
            <strong>Stabiliteitseisen —</strong> Stoelen moeten kantelen
            weerstaan en stabiel blijven tijdens regulier zittend gebruik en
            beweging.
          </li>
          <li>
            <strong>Duurzaamheidseisen —</strong> Producten moeten consistent
            presteren na langdurig en herhaald dagelijks gebruik gedurende hun
            beoogde levensduur.
          </li>
          <li>
            <strong>Veiligheidseisen —</strong> Ontwerp en constructie moeten
            vermijdbare gevaren door instabiliteit, defecten of onveilige bouw
            minimaliseren.
          </li>
          <li>
            <strong>Materiaalkwaliteit —</strong> Componenten en afwerkingen
            moeten voldoen aan kwaliteitsnormen die veilige, duurzame en
            betrouwbare prestaties ondersteunen.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testeisen voor BIS Certificering van Werkstoelen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voordat certificering wordt verleend, worden productmonsters beoordeeld
          door testen in een erkend laboratorium. Testen helpen naleving te
          verifiëren van de eisen gespecificeerd onder IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Belangrijkste Uitgevoerde Testen</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clausule
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Eisen
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["4", "Ontwerp en afwerking"],
                ["7.3.1", "Voorrand Omkanteling"],
                ["7.3.2", "Voorwaartse Omkanteling"],
                [
                  "7.3.3",
                  "Voorwaartse Omkanteling voor Stoelen met Voetsteun",
                ],
                [
                  "7.3.4",
                  "Zijwaartse Omkanteling voor Stoelen Zonder Armsteunen",
                ],
                [
                  "7.3.5",
                  "Zijwaartse Omkanteling voor Stoelen Met Armsteunen",
                ],
                [
                  "7.3.6",
                  "Achterwaartse Omkanteling voor Stoelen Zonder Rugleuning",
                ],
                ["7.4.1", "Zit Voorrand Statische Belastingstest"],
                ["7.4.2", "Gecombineerde Zit en Rug Statische Belastingstest"],
                ["7.4.3", "Armsteun Neerwaartse Statische Belastingstest — Centraal"],
                ["7.4.4", "Armsteun Neerwaartse Statische Belastingstest — Voor"],
                ["7.4.5", "Armsteun Zijwaartse Statische Belastingstest"],
                ["7.4.6", "Voetsteun Statische Belastingstest"],
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
          BIS Certificeringsproces voor Werkstoelen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten die BIS Certificering onder IS 17631:2022 zoeken, moeten een
          gestructureerd certificeringsproces doorlopen.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Stap 1: Producttoepasselijkheidsbeoordeling —</strong> Bevestig
            of de werkstoel onder IS 17631:2022 en de toepasselijke Meubel QCO
            valt voordat u met certificering begint.
          </li>
          <li>
            <strong>Stap 2: Documentatievoorbereiding —</strong> Stel technische,
            productie-, kwaliteitscontrole- en juridische dossiers samen die
            vereist zijn voor BIS-beoordeling.
          </li>
          <li>
            <strong>Stap 3: Producttesten —</strong> Dien monsters in bij een
            door BIS erkend laboratorium voor evaluatie tegen IS 17631:2022.
          </li>
          <li>
            <strong>Stap 4: Aanvraagindiening —</strong> Dien de BIS-aanvraag in
            met testrapporten, fabrieksdetails en ondersteunende
            nalevingsdocumenten.
          </li>
          <li>
            <strong>Stap 5: Fabrieksinspectie —</strong> BIS beoordeelt
            productiesystemen, QC-procedures en traceerbaarheid in de
            productiefaciliteit.
          </li>
          <li>
            <strong>Stap 6: Technische Beoordeling —</strong> BIS evalueert de
            aanvraag, laboratoriumresultaten en inspectiebevindingen vóór
            definitieve goedkeuring.
          </li>
          <li>
            <strong>Stap 7: Verlening van BIS Licentie —</strong> Bij succesvolle
            naleving verleent BIS de licentie en autoriseert het gebruik van het
            ISI Merk op gecertificeerde werkstoelen.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificering voor Indiase Fabrikanten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Indiase fabrikanten dienen doorgaans aan via de binnenlandse
          certificeringsroute. Het proces omvat doorgaans:
        </p>

        <ul className={LIST_CLASS}>
          <li>Producttesten in een door BIS erkend laboratorium</li>
          <li>Documentatiebeoordeling en BIS-aanvraagindiening</li>
          <li>Fabrieksbeoordeling en technische evaluatie door BIS</li>
          <li>Verlening van BIS-licentie en ISI Mark-autorisatie</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Na certificering moeten fabrikanten voortdurende naleving handhaven met
          BIS-toezicht, merken en kwaliteitseisen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificering voor Buitenlandse Fabrikanten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Buitenlandse fabrikanten die werkstoelen naar India willen exporteren,
          moeten ook BIS Certificering verkrijgen voordat ze producten leveren die
          onder verplichte certificeringseisen vallen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Het proces omvat doorgaans:
        </p>

        <ul className={LIST_CLASS}>
          <li>Aanstelling van een Geautoriseerde Indiase Vertegenwoordiger (AIR)</li>
          <li>Overseas producttesten en fabrieksbeoordeling</li>
          <li>BIS-aanvraagbeoordeling en certificeringsgoedkeuring</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dit zorgt ervoor dat geïmporteerde producten voldoen aan dezelfde
          kwaliteits- en veiligheidseisen die van toepassing zijn op binnenlandse
          fabrikanten.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenten Vereist voor BIS Certificering van Werkstoelen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Documentatie is een cruciaal onderdeel van het BIS-certificeringsproces
          voor werkstoelen. Vereisten kunnen verschillen op basis van of de
          aanvrager een Indiase fabrikant, buitenlandse fabrikant of importeur is,
          en op het gevolgde certificeringsschema. Onvolledige of inconsistente
          dossiers behoren tot de meest voorkomende redenen voor vertragingen bij
          aanvragen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          De volgende documenten zijn doorgaans vereist tijdens BIS-certificering
          van werkstoelen onder IS 17631:2022:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Bedrijfsdocumenten —</strong> Bedrijfsregistratiecertificaat,
            productielicentie (indien van toepassing), GST-registratie,
            bedrijfsadresbewijs en gegevens van geautoriseerde ondertekenaar met
            identiteits- en adresbewijs.
          </li>
          <li>
            <strong>Productiedocumenten —</strong> Fabrieksindeling, productieproces
            stroomdiagram, lijst van productiemachines en testapparatuur, en
            details van productie-infrastructuur en geïnstalleerde capaciteit.
          </li>
          <li>
            <strong>Productdocumenten —</strong> Productspecificaties, technische
            of engineeringtekeningen, productcatalogus of modellijst, stuklijst
            (BOM), en details van grondstoffen, componenten en kritieke onderdelen
            gebruikt in de werkstoel.
          </li>
          <li>
            <strong>Kwaliteitscontroledocumenten —</strong> Geschreven
            kwaliteitscontroleprocedures, inspectiedossiers van inkomend materiaal,
            in-process en eindproduct inspectierapporten, interne testmethoden, en
            kalibratiecertificaten voor meet- en testapparatuur.
          </li>
          <li>
            <strong>Certificeringsdocumenten —</strong> Testrapporten van een
            door BIS erkend laboratorium, correct ingevulde BIS-aanvraagformulieren,
            verklaringen en ondernemingen, label- of merkingsamples, en eventuele
            aanvullende documenten voorgeschreven door BIS voor de specifieke
            certificeringsroute.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alle documenten moeten nauwkeurig, volledig en consistent zijn met de
          productdetails ingediend in de BIS-aanvraag. Fabrikanten wordt geadviseerd
          documentatievereisten zorgvuldig te beoordelen vóór indiening om
          onnodige vertragingen in de certificeringsverwerking te voorkomen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Werkstoelen
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Regelgevende Naleving —</strong> Voldoe aan verplichte Indiase
            normen en QCO-eisen voor wettige productie en verkoop.
          </li>
          <li>
            <strong>Legale Markttoegang —</strong> Lever gecertificeerde werkstoelen
            in India zonder regelgevingsrisico voor gedekte productcategorieën.
          </li>
          <li>
            <strong>Verhoogde Geloofwaardigheid —</strong> Het ISI Merk signaleert
            geverifieerde kwaliteit, veiligheid en conformiteit met IS 17631:2022.
          </li>
          <li>
            <strong>Klantvertrouwen —</strong> Bedrijfskopers, instellingen en
            eindgebruikers vertrouwen producten die zijn getest tegen nationale
            benchmarks.
          </li>
          <li>
            <strong>Betere Inkoop —</strong> Verbetert de geschiktheid voor
            overheids-, institutionele en grootschalige commerciële aanbestedingen.
          </li>
          <li>
            <strong>Sterkere Merkreputatie —</strong> Toont toewijding aan
            kwaliteit, ergonomie en langdurige productbetrouwbaarheid.
          </li>
          <li>
            <strong>Verbeterde Kwaliteitscontrole —</strong> Stimuleert gestructureerde
            QC-systemen, traceerbaarheid en consistente productienormen.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende Uitdagingen bij BIS Certificering
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Technische interpretatie —</strong> Het toewijzen van IS
            17631:2022-clausules aan specifieke stoelontwerpen, mechanismen en
            varianten kan complex zijn.
          </li>
          <li>
            <strong>Testfouten —</strong> Zwakke frames, slechte stabiliteit of
            mechanismeproblemen leiden vaak tot afwijzing bij omkantelings- of
            belastingstesten.
          </li>
          <li>
            <strong>Documentatielacunes —</strong> Niet-overeenkomende tekeningen,
            onvolledige QC-dossiers of ontbrekende verklaringen vertragen
            goedkeuring vaak.
          </li>
          <li>
            <strong>Fabrieksnaleving —</strong> Productiecontroles, traceerbaarheid
            en interne testen moeten mogelijk worden verbeterd vóór licentieverlening.
          </li>
          <li>
            <strong>Regelgevende coördinatie —</strong> Het afstemmen van
            laboratoriumtesten, BIS-inspecties en vervolgvragen kost tijd zonder
            deskundige ondersteuning.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom Kiezen voor Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India is een regelgevingscompliance consultancy die
          fabrikanten, importeurs, exporteurs en bedrijven ondersteunt bij het
          verkrijgen van verschillende certificeringen en goedkeuringen vereist
          voor de Indiase markt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ons team biedt end-to-end ondersteuning voor BIS Certificering van
          Werkstoelen onder IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Onze Diensten Omvatten</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Producttoepasselijkheidsbeoordeling —</strong> Wij bevestigen
            of uw werkstoelen onder IS 17631:2022 en de toepasselijke QCO vallen.
          </li>
          <li>
            <strong>BIS Nalevingsadvies —</strong> Deskundige begeleiding over
            certificeringsroutes, verplichtingen en normvereisten.
          </li>
          <li>
            <strong>Documentatie-ondersteuning —</strong> Voorbereiding, beoordeling
            en organisatie van alle BIS-aanvraag- en fabrieksdossiers.
          </li>
          <li>
            <strong>Testcoördinatie —</strong> End-to-end ondersteuning voor
            monsterindiening en testen in erkende laboratoria.
          </li>
          <li>
            <strong>Fabrieksinspectie-ondersteuning —</strong> Gereedheidschecks
            voor BIS-fabrieksbeoordeling en nalevingsevaluaties.
          </li>
          <li>
            <strong>Aanvraagbeheer —</strong> Afhandeling van BIS-indieningen,
            follow-ups en regelgevende communicatie namens u.
          </li>
          <li>
            <strong>Ondersteuning na Certificering —</strong> Doorlopende
            assistentie met toezicht, merkenregels en licentieonderhoudseisen.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering voor Werkstoelen onder IS 17631:2022 speelt een
          belangrijke rol bij het waarborgen van kwaliteit, veiligheid,
          duurzaamheid, stabiliteit en ergonomische prestaties in
          werkplekzitproducten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Door BIS Certificering te verkrijgen en het ISI Merk te gebruiken, kunnen
          fabrikanten naleving van Indiase normen aantonen, het klantvertrouwen
          versterken, de productgeloofwaardigheid verbeteren en langdurige
          bedrijfsgroei ondersteunen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Of u nu een Indiase fabrikant bent of een buitenlandse fabrikant die
          toegang zoekt tot de Indiase markt, het begrijpen van de eisen van IS
          17631:2022 is een essentiële stap richting regelgevende naleving en
          marktsucces.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Als u van plan bent BIS Certificering voor Werkstoelen onder IS
          17631:2022 te verkrijgen, kan Sun Certifications India het proces
          vereenvoudigen door deskundige regelgevende begeleiding en end-to-end
          nalevingsondersteuning.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelgestelde Vragen – BIS Certificering voor Werkstoelen (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Wat is BIS Certificering voor Werkstoelen?</strong>
              <br />
              BIS Certificering bevestigt dat werkstoelen voldoen aan de eisen
              van IS 17631:2022 en toepasselijke certificeringseisen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Wat is IS 17631:2022?</strong>
              <br />
              IS 17631:2022 is de Indiase norm die eisen specificeert voor
              werkstoelen, waaronder veiligheid, sterkte, stabiliteit,
              duurzaamheid en ergonomische overwegingen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Is BIS Certificering verplicht voor werkstoelen?</strong>
              <br />
              Werkstoelen die onder het toepasselijke regelgevingskader vallen,
              moeten voldoen aan BIS-certificeringseisen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Wat is het ISI Merk?</strong>
              <br />
              Het ISI Merk is het standaard certificeringsmerk uitgegeven onder
              het BIS Productcertificeringsschema.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Wie kan aanvragen voor BIS Certificering?</strong>
              <br />
              Zowel Indiase fabrikanten als buitenlandse fabrikanten kunnen
              aanvragen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Vereist BIS Certificering producttesten?</strong>
              <br />
              Ja. Producttesten vormen een belangrijk onderdeel van het
              certificeringsproces.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Vereisen geïmporteerde werkstoelen BIS Certificering?
              </strong>
              <br />
              Producten die onder verplichte certificeringseisen vallen, moeten
              voldoen aan toepasselijke BIS-regelgeving voordat ze in India
              worden geleverd.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Welke testen worden uitgevoerd onder IS 17631:2022?</strong>
              <br />
              De norm omvat evaluaties zoals ontwerp- en afwerkingsbeoordeling,
              dimensionele verificatie, stabiliteitstesten en statische
              belastingstesten.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Waarom is ergonomisch ontwerp belangrijk voor werkstoelen?</strong>
              <br />
              Ergonomisch ontwerp helpt het gebruikerscomfort te verbeteren,
              ondersteunt de juiste houding en draagt bij aan een betere
              werkplekervaring.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Hoe kan Sun Certifications India helpen?</strong>
              <br />
              Sun Certifications India biedt ondersteuning bij
              toepasselijkheidsbeoordeling, documentatie, testcoördinatie,
              inspectievoorbereiding, aanvraagbeheer en nalevingsondersteuning.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="BIS Certificaat voor Werkstoelen - IS 17631:2022 PDF"
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
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline"> ISI Certificaat</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS Certificaat voor Buitenlandse Fabrikant</a>
          </li>
        </ul>

        <ManyUsersAlsoReadDutch />

        <FaqAuthorDutch questionNumber={4} />
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
              BIS Merk (ISI Licentie) voor Buitenlandse Fabrikanten
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
                alt="ISIMark logo"
                title="ISIMark logo"
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
