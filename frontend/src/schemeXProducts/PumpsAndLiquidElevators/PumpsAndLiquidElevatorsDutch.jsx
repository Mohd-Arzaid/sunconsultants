import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { SlashIcon } from "lucide-react";
  import { Link } from "react-router-dom";
  import VideoSection from "@/components/manual/home-page-sections/VideoSection";
  import ServiceAuthorDutch from "@/components/manual/ServiceAuthor/ServiceAuthorDutch";
  import { Helmet } from "react-helmet-async";
  import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
  import { BoxReveal } from "@/components/magicui/box-reveal";
  import { Separator } from "@/components/ui/separator";
  import FooterDutch from "@/components/manual/Footer/FooterDutch";

  const BISImage = "/services-images/BIS.jpg";
  const CDSCO = "/services-images/CDSCO.jpg";
  const BISCRS = "/services-images/BISCRS.jpg";
  const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
  const EPRCertificate = "/services-images/EPRCertificate.jpg";
  const LMPC = "/services-images/LMPC.jpg";
  const ISIMarkImage = "/services-images/ISIMark.jpg";
  
  const PumpsAndLiquidElevatorsDutch = () => {
    return (
      <div className="relative w-full">
        <PumpsAndLiquidElevatorsMetaTags />
        <PumpsAndLiquidElevatorsBreadcrumb />
        <PumpsAndLiquidElevatorsMainContent />
        <Services />
        <VideoSection />
        <FooterDutch />
       

        
        

      </div>
    );
  };
  
  export default PumpsAndLiquidElevatorsDutch;
  
  const PumpsAndLiquidElevatorsMetaTags = () => {
    const title = "BIS Schema X Certificering voor Pompen en Vloeistofelevators";
    const description =
      "BIS Schema X Certificering voor pompen en vloeistofelevators onder de Omnibus Technische Regeling 2024 vereist dat alle soorten pompen en vloeistofelevators moeten voldoen aan Schema X Certificering vóór september 2026";
    const keywords =
      "BIS Certificering voor Pompen, BIS Schema X Certificering voor Pompen, Schema X Certificering voor Pompen, BIS voor Pompen, BIS Certificering voor Pompen en Vloeistofelevators, OTR voor Pompen";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher = "Dhruv Aggarwal, Hoofd Operations bij Sun Certification India";
    const ogTitle =
      "BIS Schema X Certificering voor Pompen en Vloeistofelevators in India | Volledige Gids";
    const ogDescription =
      "Leer alles over BIS Schema X Certificering voor Pompen en Vloeistofelevators in India. Begrijp OTR 2024 naleving, BIS Licentie proces, ISI markering vereisten en hoe u gecertificeerd kunt worden vóór de deadline van september 2026";
  
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="publisher" content={publisher} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <link rel="canonical" href={canonicalUrl} />
  
        {/* HrefLang Tags */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://bis-certifications.com/certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides"
        />
        <link
          rel="alternate"
          hrefLang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan"
        />
        <link
          rel="alternate"
          hrefLang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
        />
        <link
          rel="alternate"
          hrefLang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa"
        />
        <link
          rel="alternate"
          hrefLang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-peomp-mich-aegche-seunggangi"
        />
        <link
          rel="alternate"
          hrefLang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-pompen-en-vloeistofelevators"
        />
        <link
          rel="alternate"
          hrefLang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
        />
        <link
          rel="alternate"
          hrefLang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long"
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
        />
      </Helmet>
    );
  };
  
  const PumpsAndLiquidElevatorsBreadcrumb = () => {
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
                      <Link to="/SchemeX-Products">SchemeX Producten</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="flex-shrink-0">
                    <SlashIcon />
                  </BreadcrumbSeparator>
  
                  <BreadcrumbItem className="flex-shrink-0">
                    <BreadcrumbPage className="whitespace-nowrap">
                      BIS Schema X Certificering voor Pompen en Vloeistofelevators
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
  
  const PumpsAndLiquidElevatorsMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <PumpsAndLiquidElevatorsPageMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
    );
  };
  
  const PumpsAndLiquidElevatorsPageMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Schema X Certificering voor Pompen en Vloeistofelevators in India
          </h1>
  
          {/* BIS License for Pumps Image */}
          <div className="flex justify-center mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-License-For-Pumps.png"
              alt="BIS Licentie voor Pompen en Vloeistofelevators"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            De snelle groei van industrie en infrastructuur in India vereist meer
            operationele machines en zorgt voor tevredenheid met binnenlandse en
            internationale vraag. Pompen en vloeistofelevators zijn cruciaal voor
            waterbronnen, landbouw, constructie, energie, industrie en vele andere
            sectoren. Defecte apparatuur kan de veiligheid in gevaar brengen,
            operaties verstoren en financiële verliezen veroorzaken als ze niet
            worden geproduceerd volgens de juiste specificaties met bestaande
            kwaliteitscontroles.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Om dit te beheersen, heeft BIS (Bureau of Indian Standards) Schema X
            certificering gelanceerd, die vereist dat elke pomp en vloeistofelevator
            voldoet aan nationale kwaliteitsnormen voordat ze in India worden verkocht.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            In dit artikel willen we het belang van BIS Certificering voor Pompen
            bespreken, het belang van de Omnibus Technische Regeling (OTR) 2024, en
            het proces om een BIS Licentie voor Pompen onder Schema X te verkrijgen
            voor aspirant-fabrikanten.
          </p>
  
          {/* Why Pumps and Elevators Matter Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Waarom Pompen en Vloeistofelevators Belangrijk Zijn
          </div>
  
          {/* Pumps Subsection */}
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Pompen
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Pompen zijn onmisbare apparaten voor het verplaatsen van vloeistoffen
            of modder door verschillende industrieën. Ze worden veel gebruikt in:
          </p>
  
          {/* Pumps Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Landbouwsystemen en irrigatie</li>
            <li>Openbare watervoorziening en huishoudelijk gebruik</li>
            <li>Afvalwater- en effluentzuiveringsstations</li>
            <li>Olie- en gaspijpleidingen</li>
            <li>AC- en industriële koelsystemen</li>
          </ul>
  
          {/* Liquid Elevators Subsection */}
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Vloeistofelevators
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Hefpompen, verticale vloeistofelevators voor het heffen van vloeistoffen
            functioneren voor pompen:
          </p>
  
          {/* Liquid Elevators Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Waterdistributiesystemen met hoge pompmassa</li>
            <li>Industriële silo's/opslagtanks</li>
            <li>In energie-, chemische en procesindustrieën</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Omdat ze algemeen zijn, kunnen goedkope pompen of vloeistofelevators
            leiden tot:
          </p>
  
          {/* Problems with Poor Quality Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Mechanische storingen</li>
            <li>Elektrische gevaren</li>
            <li>Lekkages en corrosie</li>
            <li>
              Ongevallen veroorzaakt door veiligheidsrisico's en economische verliezen
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Daarom is BIS voor Pompen en Vloeistofelevators een essentiële bescherming
            voor zowel fabrikanten als kopers.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS and What is Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Wat is BIS en wat is Schema X?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Bureau of Indian Standards (BIS) is de nationale standaardisatieorganisatie
            van India voor het certificeren van productkwaliteit en veiligheid. Om
            vitale installaties en machines te beheersen, heeft BIS het verkrijgen
            van Schema X Certificering verplicht gesteld sinds 16 maart 2022 onder de
            BIS Conformiteitsbeoordelingsregeling, 2018.
          </p>
  
          {/* Scheme X Key Highlights */}
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Belangrijkste Punten van Schema X Certificering voor Pompen
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Verplicht voor Indiase en buitenlandse fabrikanten</li>
            <li>
              Van toepassing op pompen, motoren en vloeistofelevators die vallen onder
              Indiase normen
            </li>
            <li>
              Omvat laboratoriumtests, fabrieksinspecties, consistente nalevingsverificatie
            </li>
            <li>
              Voegt juridische kracht toe om het gebruik van het BIS merkteken voor
              Pompen door fabrikanten te verlenen als bewijs van certificering.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Omnibus Technische Regeling (OTR) Voor Pompen
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            OTR 2024 is aangekondigd door het Ministerie van Zware Industrie, dat
            voorschrijft dat alle pompen en vloeistofelevators moeten voldoen aan
            Schema X Certificering.
          </p>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Deadline voor Naleving:
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Uiterlijk op 1 september 2026 moeten alle fabrikanten en importeurs een
            geldige BIS Licentie voor Pompen onder Schema X verkrijgen. Niet-naleving
            kan leiden tot zware boetes, evenals stopzetting van verkoop en uitsluiting
            van openbare aanbestedingen.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Importance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Waarom is BIS certificering voor Pompen en Vloeistofelevators belangrijk?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            1. Veiligheidsgarantie: Zorgt ervoor dat apparatuur is ontworpen en
            gebouwd voor operationele nauwkeurigheid en veroorzaakt geen:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Elektrische storingen</li>
            <li>Lekkages en roest</li>
            <li>Machineschade en storingen</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            2. Marktvoordelen
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>
              BIS-gecertificeerde pompen zijn vaak vereist voor openbare projecten,
              overheidsaanbestedingen, enz.
            </li>
            <li>
              Biedt concurrentievoordeel ten opzichte van niet-gecertificeerde
              producten.
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            3. Klantvertrouwen: Het ISI merkteken op Pompen geeft kopers vertrouwen
            over kwaliteit en garandeert productefficiëntie.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            4. Wereldwijde Merken Krijgen Gemakkelijke Markttoegang: Buitenlandse OEM's
            krijgen gemakkelijke toegang tot de gereguleerde Indiase markt door te
            voldoen aan Schema X normen.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Pumps Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Soorten Pompen Onder BIS Schema X Registratie
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Schema X bevat verschillende soorten pompen inclusief:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Centrifugaalpompen</li>
            <li>Onderwaterpompen</li>
            <li>Boosterpompen</li>
            <li>Meertrapspompen</li>
            <li>Positieve verplaatsingspompen</li>
            <li>Verticale turbinepompen</li>
            <li>Chemische procespompen</li>
            <li>Diafragmapompen</li>
            <li>Modderpompen</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Elk type moet voldoen aan de relevante Indiase normen (IS-codes) zoals
            IS 16819:2018/ISO 12100:2010 (Machineveiligheid - Algemene Principes voor
            Ontwerp - Risicobeoordeling en Risicovermindering).
          </p>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Voor vloeistofelevators omvat certificering:
          </div>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Debiet en afvoerhoogte</li>
            <li>Materiaalcompatibiliteit</li>
            <li>Energie-efficiëntie</li>
            <li>Operationele veiligheid</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* How to Get BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Hoe BIS Schema X voor Pompen te Verkrijgen?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Identificatie van Toepasselijke Normen: De offerte moet de relevante
            IS-codes specificeren (bijvoorbeeld IS 9079 voor onderwaterpompen).
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Producttesten: Prestaties- en veiligheidstests zijn verplicht in door
            BIS geaccepteerde laboratoria.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Fabrieksinspectie: BIS autoriteiten onderzoeken productielocaties om
            de implementatie van kwaliteitscontroleprocedures te verifiëren.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Documentatie en Aanvraag: Technische specificaties, testrapporten en
            kwaliteitshandleidingen moeten het BIS aanvraagformulier vergezellen.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Uitgifte van BIS Certificaat voor Pompen: Fabrikanten ontvangen, na
            goedkeuring, een licentie om het BIS merkteken onder Schema X toe te
            passen.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Voortdurende Toezicht: BIS voert routinematige audits en willekeurige
            productinspecties uit om continue naleving te waarborgen.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Penalties Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Sancties voor Niet-naleving
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Fabrikanten die er niet in slagen BIS certificering te verkrijgen, op
            1 september 2026, zullen worden onderworpen aan:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Verbod op verkoop/import van niet-gecertificeerde pompen</li>
            <li>Inbeslagname van goederen en boetes.</li>
            <li>Diskwalificatie van overheidsorders en PSU's</li>
            <li>Langdurige schade aan reputatie in India</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <p className="text-gray-600 text-base font-geist mb-4">
            <span className="font-medium text-[#1e1e1e]">Conclusie:</span>{" "}
            BIS Schema X Certificering voor Pompen en Vloeistofelevators met OTR
            2024 zal worden geïmplementeerd; een mijlpaal in de standaardisatie
            van de Indiase industrie.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Voor degenen die betrokken zijn bij productie, import of export, is
            BIS registratie voor pompen niet alleen een wettelijke nalevingsproces
            dat moet worden voltooid, maar ook een strategische beslissing om
            veiligheid te laten domineren boven potentiële risico's, consumentenvertrouwen
            op te bouwen en toegang te krijgen tot de uitgebreide Indiase markt.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            BIS Certificering voor Pompen en Vloeistofelevators is een langetermijninvestering
            om de geloofwaardigheid en markt van uw producten op te bouwen.
          </p>
  
          <ServiceAuthorDutch />
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
                  Beste Certificaat Consultant India
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
                  src={BISImage}
                  alt="BIS"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                BIS Merkteken (ISI Licentie) voor Buitenlandse Fabrikanten
              </p>
            </Link>
  
            <Link
              to="/cdsco-registration-certification"
              className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={CDSCO}
                  alt="CDSCO"
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
                  src={BISCRS}
                  alt="BISCRS"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                BIS Registratie (CRS)
              </p>
            </Link>
  
            <Link
              to="/epr-certificate-for-plastic-waste-management-pwm"
              className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={PlasticWasteManagement}
                  alt="PlasticWasteManagement"
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
                  src={EPRCertificate}
                  alt="EPRCertificate"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                EPR Certificaat Certificering
              </p>
            </Link>
  
            <Link
              to="/a-guide-on-how-to-obtain-lmpc-certificate"
              className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={LMPC}
                  alt="LMPC"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                LMPC Certificaat Certificering
              </p>
            </Link>
  
            <Link
              to="/what-is-bis-certificate-indian-bis"
              className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={BISImage}
                  alt="BIS"
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
                  src={ISIMarkImage}
                  alt="ISIMark"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                ISI MERKTEKEN (BIS) voor Indiase Fabrikanten
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  