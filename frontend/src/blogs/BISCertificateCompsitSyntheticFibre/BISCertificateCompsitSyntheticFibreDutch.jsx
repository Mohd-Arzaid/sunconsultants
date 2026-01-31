import FaqAuthorDutch from "@/components/common/FaqAuthor/FaqAuthorDutch";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
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

const BISCertificateCompsitSyntheticFibreDutch = () => {
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

export default BISCertificateCompsitSyntheticFibreDutch;

const MetaTags = () => {
  const title =
    "BIS Certificaat voor Samengestelde Synthetische Vezeltouwen | IS 14928:2001 BIS Licentie";
  const ogTitle =
    "BIS Certificering voor Samengestelde Synthetische Vezeltouwen – IS 14928:2001 Gids";
  const twitterTitle =
    "BIS Licentie voor Samengestelde Synthetische Vezeltouwen | IS 14928:2001";
  const metaDescription =
    "Krijg BIS Certificaat voor Samengestelde Synthetische Vezeltouwen onder IS 14928:2001. Proces, documenten, testen, kosten en tijdlijn voor BIS Certificering in India.";
  const ogDescription =
    "Volledige gids voor BIS Certificering voor Samengestelde Synthetische Vezeltouwen volgens IS 14928:2001. Ken het proces, kosten, documenten, testen en BIS licentievoordelen.";
  const twitterDescription =
    "Aanvragen BIS Certificaat voor Samengestelde Synthetische Vezeltouwen onder IS 14928:2001. Leer BIS proces, documenten, testen, kosten en tijdlijn in India.";
  const metaKeywords =
    "BIS Certificaat voor Samengestelde Synthetische Vezeltouwen, BIS Licentie voor Samengestelde Synthetische Vezeltouwen, IS 14928:2001, BIS Certificering voor Samengestelde Synthetische Vezeltouwen";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/samengestelde-synthetische-vezeltouwen-is-14928";
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
                    BIS Certificaat voor Samengestelde Synthetische Vezeltouwen – IS
                    14928:2001
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
          BIS Certificering Samengestelde Synthetische Vezeltouwen – Volledige Gids voor
          IS 14928:2001
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCompositeSyntheticFibreRopes.png"
            title="BIS Licentie voor Samengestelde Synthetische Vezeltouwen"
            alt="BIS Certificaat voor Samengestelde Synthetische Vezeltouwen - IS 14928:2001 BIS Certificering"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Samengestelde synthetische vezeltouwen worden veel gebruikt in maritieme
          operaties, havens, offshore-installaties, visserij, scheepvaart,
          bouw, landbouw en zwaar materiaaltransport. Deze touwen worden vervaardigd
          door twee of meer synthetische vezels te combineren—zoals polyester,
          polypropyleen, nylon of andere kunstmatige vezels—om een gebalanceerde mix
          van sterkte, flexibiliteit, slijtvastheid, drijfvermogen en duurzaamheid
          te bieden. Omdat samengestelde synthetische vezeltouwen vaak worden ingezet
          bij dragende, sleep-, meer- en hijstoepassingen en veiligheidskritieke
          toepassingen, kan zelfs een kleine kwaliteitsfout leiden tot ernstige
          ongevallen, materieelschade of operationeel falen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Om deze risico&apos;s te beheersen en consistente kwaliteit te waarborgen,
          verplicht de Indiase overheid BIS Certificering voor Samengestelde
          Synthetische Vezeltouwen onder de toepasselijke Indiase Norm IS 14928:2001.
          Een geldig BIS Certificaat voor Samengestelde Synthetische Vezeltouwen is
          een wettelijke vereiste voor fabrikanten en importeurs voordat dergelijke
          producten kunnen worden vervaardigd, verkocht, gedistribueerd of geïmporteerd
          op de Indiase markt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze pagina dient als een volledige, compliance-gerichte gids die de
          BIS Certificering voor Samengestelde Synthetische Vezeltouwen uitlegt,
          inclusief het toepassingsgebied van IS 14928:2001, veiligheidsdoel,
          testvereisten, documentatie, kostenoverwegingen en het stapsgewijze
          certificeringsproces. Het is bedoeld voor fabrikanten, importeurs,
          buitenlandse fabrikanten, handelaren en e-commerces verkopers die een
          duidelijk begrip willen van hoe een BIS Licentie te verkrijgen voor
          Samengestelde Synthetische Vezeltouwen in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wat is BIS Certificering?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering is een productconformiteitsbeoordelingssysteem dat wordt
          beheerd door het Bureau of Indian Standards (BIS), dat functioneert onder
          de BIS-wet 2016. BIS is verantwoordelijk voor het ontwikkelen van Indiase
          normen, het certificeren van producten en het waarborgen dat goederen die
          in India worden verkocht voldoen aan gedefinieerde veiligheids-, kwaliteits-
          en prestatiebenchmarks.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Betekenis van BIS Certificaat
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De betekenis van het BIS Certificaat verwijst naar formele goedkeuring
          verleend door BIS die bevestigt dat een product voldoet aan de relevante
          Indiase norm. Eenmaal gecertificeerd is de fabrikant gemachtigd om het
          BIS Certificeringsmerk, algemeen bekend als het ISI-merk, op het product
          en de verpakking te gebruiken.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Uitleg ISI-merk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Het ISI-merk geeft aan dat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Het product is getest in een door BIS erkend laboratorium</li>
          <li>De productiefaciliteit is beoordeeld door BIS-functionarissen</li>
          <li>
            Doorlopende kwaliteitscontrole- en toezichtmechanismen zijn van kracht
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Waarom BIS bestaat
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS bestaat om:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Consumenten- en werknemersveiligheid te beschermen</li>
          <li>Verspreiding van ondermaatse producten te voorkomen</li>
          <li>Uniformiteit en betrouwbaarheid van industriële goederen te waarborgen</li>
          <li>Regelgevingshandhaving en eerlijke handel te versterken</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voor samengestelde synthetische vezeltouwen—vaak gebruikt in gevaarlijke
          en zwaarbelaste omstandigheden—speelt BIS-certificering een cruciale rol
          bij ongevallenpreventie en kwaliteitsborging.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Toepasselijke BIS-norm voor Samengestelde Synthetische Vezeltouwen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          De toepasselijke Indiase norm voor dit product is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14928:2001</strong> – Samengestelde Synthetische Vezeltouwen
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze norm specificeert de vereisten voor materialen, constructie,
          afmetingen, prestatiekenmerken, markering, monstername en
          testen van samengestelde synthetische vezeltouwen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Toepassingsgebied van IS 14928:2001
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001 omvat:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Touwen vervaardigd met een combinatie van verschillende synthetische vezels
          </li>
          <li>
            Diverse touwconstructies zoals gelegde en gevlochten structuren
          </li>
          <li>
            Touwen bestemd voor maritieme, visserij-, industriële en algemene
            toepassingen
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Veiligheid, Prestatie en Testintentie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De norm beoogt te waarborgen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Voldoende breeksterkte en draagvermogen</li>
          <li>Consistente diameter en constructiekwaliteit</li>
          <li>
            Weerstand tegen slijtage, vocht en milieudegradatie
          </li>
          <li>Voorspelbare en veilige prestaties gedurende de levensduur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wie moet voldoen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Naleving van IS 14928:2001 is verplicht voor:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten van samengestelde synthetische vezeltouwen</li>
          <li>Importeurs die deze touwen op de Indiase markt leveren</li>
          <li>Buitenlandse fabrikanten die verkopen via Indiase vertegenwoordigers</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Waarom BIS Certificering verplicht is voor Samengestelde Synthetische Vezeltouwen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Consumenten- en werknemersveiligheidsrisico&apos;s
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Samengestelde synthetische vezeltouwen worden gebruikt voor:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Meer- en sleepoperaties</li>
          <li>Hijsen en bevestigen van zware lasten</li>
          <li>Visnetten en maritieme apparatuur</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Een touwbreuk kan letsel, verlies van mensenlevens, vaartuigschade en
          projectvertragingen veroorzaken.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Overheidsnaleving
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Volgens BIS-meldingen en kwaliteitscontrolevereisten kunnen producten
          die onder IS 14928:2001 vallen niet legaal worden verkocht zonder BIS
          certificering.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Juridische gevolgen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Niet-naleving kan leiden tot:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inbeslagname van niet-gecertificeerde producten</li>
          <li>Geldboetes onder de BIS-wet</li>
          <li>Vervolging en juridische actie</li>
          <li>Afwijzing van importvergunning</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Markt- en merkvoordelen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Een BIS Licentie voor Samengestelde Synthetische Vezeltouwen verbetert:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Klantvertrouwen</li>
          <li>In aanmerking komen voor overheids- en PSU-aanbestedingen</li>
          <li>Merkgeloofwaardigheid op binnenlandse en exportmarkten</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Stapsgewijs BIS Certificeringsproces voor Samengestelde Synthetische
          Vezeltouwen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Toepasbaarheid en normidentificatie
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Het proces begint met het bevestigen dat het product onder IS
          14928:2001 valt. Dit omvat het identificeren van:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vezelsamenstelling en -mengsel</li>
          <li>Touwconstructietype</li>
          <li>Diameterbereik en beoogde toepassing</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nauwkeurige identificatie voorkomt testfouten en aanvraagafwijzing.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Aanvraagproces
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikanten moeten online BIS aanvragen via het BIS-portaal door in te dienen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productgegevens</li>
          <li>Fabrieks- en productie-informatie</li>
          <li>Kwaliteitscontrole-regelingen</li>
          <li>Testaanvraaggegevens</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Een correct ingevulde BIS-aanvraag is cruciaal voor tijdige verwerking.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vergoedingen en kostenstructuur
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De BIS certificaatkosten omvatten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aanvraagkosten</li>
          <li>Testkosten bij door BIS erkende laboratoria</li>
          <li>Fabrieksinspectiekosten</li>
          <li>Jaarlijkse licentie- en markeerkosten</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          De totale BIS certificeringskosten variëren afhankelijk van touw
          constructie, maatbereik en testcomplexiteit. Goede planning
          helpt de kosten van BIS certificering en BIS licentie effectief te beheren.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Productmonstertesten (volgens IS 14928:2001)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Productmonsters worden genomen en getest bij door BIS erkende laboratoria om
          naleving van alle vereisten van de norm te verifiëren.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrieksinspectie en audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS-functionarissen voeren een fabrieksaudit uit om te verifiëren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productieprocescontrole</li>
          <li>Grondstofafhandeling</li>
          <li>Interne testfaciliteiten</li>
          <li>Kwaliteitsborgingssystemen en -registraties</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Verlening van BIS Licentie en ISI-merk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Zodra aan alle vereisten is voldaan, verleent BIS de Bureau of Indian
          Standards Licentie, waardoor de fabrikant het ISI-merk mag gebruiken op
          samengestelde synthetische vezeltouwen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Naleving na certificering
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Na certificering moet de licentiehouder:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Consistente productkwaliteit handhaven</li>
          <li>Periodieke toezichtaudits toestaan</li>
          <li>BIS informeren over wijzigingen in materiaal, proces of ontwerp</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benodigde documenten voor BIS Certificering
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fabrikantdocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrieksregistratiecertificaat</li>
          <li>Productieprocesstroomdiagram</li>
          <li>Lijst van machines en testapparatuur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ondernemingsoprichtingscertificaat</li>
          <li>GST-registratie</li>
          <li>Machtigingsbrief voor ondertekenaar</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische documenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Productspecificaties en tekeningen</li>
          <li>Grondstofspecificaties</li>
          <li>Interne testprocedures</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Aanvraagdocumenten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Correct ingevuld BIS aanvraagformulier</li>
          <li>Testaanvraagbrief</li>
          <li>Markeer- en etiketteringsgegevens</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Deze vormen gezamenlijk de verplichte BIS CERTIFICERINGSDOCUMENTEN.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 14928:2001
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mandatory tests include:
        </p>

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
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Constructie
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Structuur
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Behandeling
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Touw
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Diameter
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Massa
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Breeksterkte
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lengte
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Alle tests moeten uitsluitend worden uitgevoerd in door BIS erkende laboratoria.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Veelvoorkomende uitdagingen en hoe ze te vermijden
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>Onjuiste productclassificatie</strong>
            <br />
            Oplossing: Voer een technische beoordeling vóór certificering uit.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Testfouten</strong>
            <br />
            Oplossing: Stem grondstofkwaliteit en procescontroles af op IS
            14928:2001.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Onvolledige documentatie</strong>
            <br />
            Oplossing: Bereid BIS-specifieke documenten zorgvuldig voor en controleer voor
            indiening.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Audit niet-naleving</strong>
            <br />
            Oplossing: Houd juiste registraties, kalibratie en interne kwaliteitscontroles bij.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Voordelen van BIS Certificering voor Fabrikanten en Importeurs
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Juridische voordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Naleving van Indiase regelgeving</li>
          <li>Soepele douaneafhandeling</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commerciële voordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>In aanmerking komen voor overheids- en institutionele aanbestedingen</li>
          <li>Verbeterde acceptatie door kopers</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Merkvoordelen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Geautoriseerd gebruik van BIS-merk</li>
          <li>Verhoogd vertrouwen en marktgeloofwaardigheid</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Marktuitbreiding
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Toetreding tot gereguleerde sectoren</li>
          <li>Langetermijngroei van het bedrijf</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Boetes voor niet-naleving
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het niet verkrijgen van BIS-certificering kan resulteren in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zware geldboetes</li>
          <li>Productinbeslagname of terugroeping</li>
          <li>Importverboden</li>
          <li>Juridische vervolging</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie heeft BIS Certificering nodig voor Samengestelde Synthetische Vezeltouwen?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indiase fabrikanten</li>
          <li>Importeurs</li>
          <li>Buitenlandse fabrikanten die aan India leveren</li>
          <li>Handelaren en distributeurs</li>
          <li>E-commerces verkopers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Elke entiteit die samengestelde synthetische vezeltouwen op de Indiase
          markt brengt, moet BIS-naleving waarborgen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Het verkrijgen van een BIS Certificaat voor Samengestelde Synthetische
          Vezeltouwen onder IS 14928:2001 is zowel een wettelijke verplichting als
          een kritieke veiligheidsvereiste. Een geldige BIS Certificering / BIS
          Licentie voor Samengestelde Synthetische Vezeltouwen waarborgt regelgevings-
          naleving, beschermt eindgebruikers en verhoogt de marktgeloofwaardigheid.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voor fabrikanten en importeurs gaat BIS-certificering niet alleen over
          goedkeuring—het gaat om vertrouwen, veiligheid en duurzame bedrijfsgroei.
          Met de juiste technische voorbereiding en deskundige begeleiding kan het
          BIS-certificeringsproces in India soepel en efficiënt worden voltooid.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ&apos;s – BIS Certificering voor Samengestelde Synthetische Vezeltouwen
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Wat is de volledige vorm van BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Is BIS-certificering verplicht voor samengestelde synthetische vezeltouwen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, volgens IS 14928:2001.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Wat is de volledige vorm van BIS Certificaat?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Kan ik online een BIS-certificaat aanvragen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, BIS aanvragen online via het officiële portaal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Hoe lang duurt BIS-certificering?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Meestal 1–2 maanden.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Wat zijn de BIS-certificeringskosten?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Het varieert op basis van test- en auditbereik.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Hebben importeurs BIS-certificering nodig?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Importeurs moeten ervoor zorgen dat producten gecertificeerd zijn.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Kunnen buitenlandse fabrikanten aanvragen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, via een Geautoriseerde Indiase Vertegenwoordiger.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Is BIS-registratie hetzelfde als BIS-licentie?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nee, vezeltouwen vereisen een BIS-licentie.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Wat gebeurt er als een product faalt bij testen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Corrigerende maatregelen en hertesten zijn vereist.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. Is ISI-markering verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, na certificering.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. Hoe lang is de BIS-licentie geldig?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Meestal 1–2 jaar, verlengbaar.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. Zijn toezichtaudits verplicht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, BIS voert periodieke audits uit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. Kan het licentiebereik later worden uitgebreid?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, via goedkeuring voor bereikuitbreiding.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. Kunnen niet-gecertificeerde producten online worden verkocht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nee, e-commerces verkopen vereisen ook BIS-naleving.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-14928-2001-Sun-Certifications-India.pdf"
            title="BIS Certificaat voor Samengestelde Synthetische Vezeltouwen - IS 14928:2001 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoRead />

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
            to="/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis"
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
            to="/nl/wat-is-crs-bis-of-crs-registratie"
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
                alt="Plastic afvalbeheer"
                title="Plastic afvalbeheer"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Beheer van plastic afval
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
            to="/nl/wat-is-het-bis-certificaat-indiaas-bis"
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
            to="/nl/bis-isi-mark-certificering"
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
