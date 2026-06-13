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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Building2,
  Check,
  ClipboardCheck,
  Clock,
  Eye,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  Package,
  RefreshCw,
  Scale,
  ShieldCheck,
  ShoppingCart,
  SlashIcon,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterItalian from "@/components/manual/Footer/FooterItalian";

const BISCertificateForFurnitureItalian = () => {
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

export default BISCertificateForFurnitureItalian;

const MetaTags = () => {
  const title =
    "Certificato BIS per Mobili in India | Certificazione BIS, Licenza e Guida al Processo";
  const ogTitle =
    "Certificato BIS per Mobili in India - Guida Completa alla Certificazione BIS";
  const twitterTitle =
    "Certificato BIS per Mobili | Guida Completa alla Certificazione BIS Indiana";
  const metaDescription =
    "Certificato BIS per Mobili in India - guida completa su Certificazione BIS, Licenza BIS, costi, documenti, standard, processo, domanda online e Marchio BIS per produttori di mobili.";
  const ogDescription =
    "Cerchi la Certificazione BIS per Mobili in India? Scopri Licenza BIS, Marchio BIS, standard applicabili, processo di certificazione, costi, documenti e requisiti di conformità in dettaglio.";
  const twitterDescription =
    "Guida completa al Certificato BIS per Mobili in India - processo di Certificazione BIS, costi, documenti, Marchio BIS, standard e domanda online spiegati.";
  const metaKeywords =
    "Certificato BIS per Mobili, Certificazione BIS per Mobili, Licenza BIS per Mobili, Cos'è BIS, BIS Indiano";
  const websiteUrl = "https://bis-certifications.com/blogs/isi-products/mobili";
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
                    Certificazione BIS per Mobili in India
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

const TABLE_WRAP =
  "mt-6 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]";

const SectionDivider = () => (
  <div className="service-left-content-divider my-8 md:my-10" />
);

const SectionHeading = ({ children }) => (
  <h2 className="text-xl md:text-2xl font-geist font-bold text-[#1e1e1e] mb-4 pl-4 border-l-4 border-[#1A8781]">
    {children}
  </h2>
);

const SubSectionHeading = ({ children }) => (
  <h3 className="text-base md:text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-4">
    {children}
  </h3>
);

const IntroCallout = ({ children }) => (
  <div className="rounded-md bg-[#EAF3FF] border-l-4 border-[#1A8781] px-4 py-3 mb-6">
    {children}
  </div>
);

const CheckPointsList = ({ points, variant = "check" }) => {
  const Icon = variant === "warning" ? AlertTriangle : Check;
  const iconBg =
    variant === "warning" ? "bg-amber-500/10" : "bg-green-500/10";

  return (
    <div className="bg-white/50 rounded-xl p-4 ring-1 ring-gray-900/[0.05] mt-2 mb-4">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`${iconBg} p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5`}
            >
              <Icon size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-base text-[#42434d] tracking-wide text-left max-w-full leading-relaxed flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NumberedSteps = ({ steps, showTimeline = true }) => {
  if (!showTimeline) {
    return (
      <div className="mt-4 mb-4 flex flex-col gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
          >
            <div className="w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base font-geist">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 mb-4 border-l-2 border-[#1A8781]/30 ml-3 pl-6 flex flex-col gap-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
        >
          <div className="absolute -left-[31px] top-4 w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center">
            {index + 1}
          </div>
          <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
            {step.title}
          </h3>
          <p className="text-gray-600 text-base font-geist">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

const InfoCardGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white/60 rounded-lg p-4 ring-1 ring-gray-900/[0.06] hover:ring-gray-900/[0.12] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {Icon && (
              <div className="mb-3 w-9 h-9 rounded-full bg-[#1A8781]/10 text-[#1A8781] flex items-center justify-center">
                <Icon size={18} />
              </div>
            )}
            <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base font-geist leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const FaqAccordion = ({ items }) => {
  return (
    <div className="rounded-xl bg-white/60 p-4 md:p-5 ring-1 ring-gray-900/[0.06]">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left font-geist font-semibold text-[#1e1e1e] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 font-geist text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS per Mobili in India: Guida Completa agli Standard
          BIS, Marchio ISI, Processo e Conformità
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="Licenza BIS per Mobili"
            alt="Certificazione BIS per Mobili in India - Guida al Marchio ISI"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            I mobili sono una componente essenziale di abitazioni, uffici e
            spazi pubblici. Garantire la sicurezza, la durata e la qualità dei
            mobili è fondamentale sia per i consumatori che per i produttori. In
            India, la{" "}
            <strong>Certificazione BIS per Mobili</strong> ai sensi della
            Furniture (Quality Control) Order, 2025 è obbligatoria per
            determinate categorie di mobili. Questa guida fornisce una
            panoramica dettagliata degli standard BIS, del Marchio ISI, del
            processo di certificazione e dei requisiti di conformità.
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>
          Cos&apos;è la Certificazione BIS per Mobili?
        </SectionHeading>

        <SubSectionHeading>
          Significato della Certificazione BIS per Mobili
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS è un processo formale attraverso il quale il
          Bureau of Indian Standards (BIS) valuta i prodotti per garantire che
          siano conformi agli standard indiani. Per i mobili, questa
          certificazione assicura che i prodotti soddisfino parametri definiti
          di sicurezza, prestazioni e qualità. Dopo la certificazione, i
          produttori possono utilizzare il <strong>Marchio ISI</strong> sui
          propri mobili, segnalando così la conformità agli acquirenti.
        </p>

        <SubSectionHeading>
          Differenza tra Certificazione BIS e Marchio ISI per Mobili
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Certificazione BIS</strong> — Il processo di valutazione,
              test e approvazione da parte di BIS.
            </>,
            <>
              <strong>Marchio ISI</strong> — Un marchio rilasciato dopo la
              Certificazione BIS che indica che il prodotto è conforme agli
              standard indiani. Il Marchio ISI è la garanzia visibile di
              conformità per i consumatori.
            </>,
          ]}
        />

        <SubSectionHeading>
          Perché la Certificazione BIS è Importante per Produttori e Importatori
          di Mobili
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Conformità legale con le normative indiane",
            "Accesso al mercato indiano e alle opportunità di appalti governativi",
            "Maggiore fiducia dei consumatori e vantaggio competitivo",
            "Riduzione del rischio di richiami, sanzioni o restrizioni all'importazione",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Requisiti di Certificazione BIS per Produttori di Mobili
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Requisito
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Dettagli
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Autorità di certificazione", "Bureau of Indian Standards (BIS)"],
                ["Schema di certificazione", "Schema-I (Certificazione Marchio ISI)"],
                ["Legge applicabile", "Furniture (Quality Control) Order, 2025"],
                ["Marcatura obbligatoria", "Marchio ISI con numero di licenza BIS"],
                [
                  "Test del prodotto",
                  "Richiesto tramite laboratori riconosciuti BIS",
                ],
                ["Ispezione della fabbrica", "Obbligatoria prima del rilascio della licenza"],
                [
                  "Applicabile a",
                  "Produttori indiani, produttori stranieri, importatori",
                ],
                ["Sorveglianza post-certificazione", "Richiesta"],
                [
                  "Rinnovo della licenza",
                  "Rinnovo periodico secondo i requisiti BIS",
                ],
              ].map(([req, details], i) => (
                <TableRow
                  key={req}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {req}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <SectionDivider />

        <SectionHeading>
          Quadro Normativo per la Certificazione BIS dei Mobili in India
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "La Furniture QCO 2025 stabilisce che determinate categorie di mobili devono essere conformi agli standard BIS. La QCO costituisce la base legale per la certificazione obbligatoria e definisce i tipi di mobili coperti.",
            },
            {
              icon: Building2,
              title: "Ruolo del Bureau of Indian Standards (BIS)",
              description:
                "BIS elabora gli Standard Indiani (IS), valuta le unità produttive, conduce test sui prodotti e rilascia licenze per l'uso del Marchio ISI. Monitora la conformità attraverso audit e sorveglianza.",
            },
          ]}
        />

        <SubSectionHeading>
          Certificazione BIS Obbligatoria vs Volontaria per Mobili
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Obbligatoria</strong> — Categorie elencate nella Furniture
              QCO, come letti, sedie e unità di stoccaggio.
            </>,
            <>
              <strong>Volontaria</strong> — I produttori possono certificare
              volontariamente categorie di prodotti aggiuntive per aumentare la
              credibilità sul mercato.
            </>,
          ]}
        />

        <SubSectionHeading>
          Applicabilità della Furniture QCO a Produttori e Importatori
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Produttori indiani che producono mobili coperti dalla QCO",
            "Produttori stranieri che esportano in India",
            "Importatori che vendono mobili nel mercato interno",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Prodotti di Mobili Coperti dalla Certificazione BIS
        </SectionHeading>

        <SubSectionHeading>
          Categorie di Mobili e Standard BIS Applicabili
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Categoria di Mobili
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Standard Indiano Applicabile
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Titolo dello Standard
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  Requisito di Certificazione
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "Sedie da Lavoro",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "Sedie e Sgabelli per Uso Generale",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "Tavoli e Scrivanie",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "Unità di Stoccaggio",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "Letti",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "Letti a Castello",
                  standard: "IS 17636:2022",
                  title:
                    "Furniture – Bunk Beds for Domestic Use – Requirements and Test Methods",
                  link: "/blogs/isi-products/bunk-beds-is-17636",
                },
              ].map((row, i) => (
                <TableRow
                  key={row.standard}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-[#1e1e1e]">
                    <Link
                      to={row.link}
                      className="text-blue-600 hover:underline"
                    >
                      {row.category}
                    </Link>
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.standard}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.title}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 text-gray-600">
                    Obbligatorio ai sensi della Furniture QCO
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tutti i prodotti coperti devono essere conformi agli standard BIS
          pertinenti e recare un Marchio ISI valido prima di essere venduti in
          India. Questi standard definiscono i requisiti minimi di sicurezza,
          stabilità e usabilità dei mobili.
        </p>

        <SectionDivider />

        <SectionHeading>
          Standard BIS per Mobili e loro Requisiti
        </SectionHeading>

        <SubSectionHeading>
          Requisiti di Prestazione secondo gli Standard BIS per Mobili
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          I mobili devono resistere all&apos;uso normale senza deformarsi o
          cedere strutturalmente.
        </p>
        <CheckPointsList
          points={[
            "Capacità di carico in condizioni normali e di picco",
            "Resistenza delle giunture e durata delle connessioni",
            "Stabilità del materiale senza deformazioni o deterioramento",
          ]}
        />

        <SubSectionHeading>
          Requisiti di Test per Sicurezza e Durata
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          I mobili devono soddisfare le norme di sicurezza per prevenire
          incidenti, nonché gli standard di durata per garantire una lunga vita
          utile.
        </p>
        <CheckPointsList
          points={[
            "Prevenzione del ribaltamento (sedie, sgabelli e unità instabili)",
            "Prevenzione del crollo sotto carico nominale (letti, letti a castello, unità di stoccaggio)",
            "Durata a lungo termine attraverso test di prestazione per uso ripetuto",
          ]}
        />

        <SubSectionHeading>
          Parametri di Qualità Valutati durante la Certificazione
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Qualità del materiale e finitura superficiale",
            "Capacità di carico",
            "Stabilità, ergonomia e caratteristiche di sicurezza",
          ]}
        />

        <SubSectionHeading>
          Requisiti di Conformità per Diverse Categorie di Mobili
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni tipo di mobile ha standard IS specifici con dimensioni, test di
          prestazione e tolleranze ammissibili. La conformità garantisce
          uniformità e qualità tra tutti i produttori.
        </p>

        <SectionDivider />

        <SectionHeading>
          Chi ha Bisogno della Certificazione BIS per Mobili?
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "Produttori Indiani di Mobili",
              description:
                "Tutti i produttori nazionali di mobili coperti dalla Furniture QCO devono ottenere la Certificazione BIS prima della vendita.",
            },
            {
              icon: Globe,
              title: "Produttori Stranieri che Esportano Mobili in India",
              description:
                "Gli esportatori devono rispettare gli standard BIS per vendere legalmente mobili in India e utilizzare il Marchio ISI.",
            },
            {
              icon: Package,
              title: "Importatori di Mobili e Proprietari di Marchi",
              description:
                "Gli importatori devono garantire che i mobili importati in India siano conformi alle norme BIS, anche se prodotti all'estero.",
            },
            {
              icon: ShoppingCart,
              title: "Venditori E-commerce e Rivenditori",
              description:
                "I rivenditori online e offline che vendono mobili nelle categorie coperte devono verificare la Certificazione BIS per evitare rischi di responsabilità legale.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Certificazione BIS-ISI per Mobili: Processo Passo dopo Passo
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "Identificazione del Prodotto e Selezione dello Standard Applicabile",
              description:
                "Identificare la categoria di mobili e lo standard BIS pertinente (IS 17631–IS 17636) per test e certificazione.",
            },
            {
              title: "Test del Prodotto in Laboratori Riconosciuti BIS",
              description:
                "I mobili vengono testati in laboratori approvati BIS per resistenza, stabilità e durata. I rapporti di test sono obbligatori per la domanda.",
            },
            {
              title: "Presentazione della Domanda BIS",
              description:
                "I produttori presentano una domanda a BIS con specifiche del prodotto, dettagli tecnici e rapporti di test.",
            },
            {
              title: "Ispezione della Fabbrica e Valutazione",
              description:
                "BIS conduce un audit della fabbrica per verificare i processi produttivi, i sistemi di controllo qualità e la coerenza della produzione.",
            },
            {
              title: "Concessione della Licenza BIS e Approvazione del Marchio ISI",
              description:
                "Dopo l'approvazione, BIS rilascia una licenza che consente al produttore di utilizzare il Marchio ISI sui mobili certificati.",
            },
            {
              title: "Requisiti di Conformità Post-Certificazione",
              description:
                "Audit regolari, test periodici e rispetto degli standard BIS sono necessari per mantenere la certificazione.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Documenti Richiesti per la Certificazione BIS dei Mobili
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Registrazione aziendale e documenti produttivi</strong> —
              Licenze commerciali, registrazione GST e dettagli del sito
              produttivo.
            </>,
            <>
              <strong>Specifiche tecniche del prodotto e disegni</strong> —
              Progetti dettagliati, materiali utilizzati e istruzioni di
              montaggio.
            </>,
            <>
              <strong>Rapporti di test e documenti di controllo qualità</strong>{" "}
              — Rapporti da laboratori approvati BIS che dimostrano la
              conformità agli standard IS.
            </>,
            <>
              <strong>Documenti della fabbrica e del processo produttivo</strong>{" "}
              — Sistemi di gestione della qualità, flusso di processo e
              procedure di ispezione.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Requisiti di Test per Mobili Certificati BIS
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Area di Test
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Scopo
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [
                  "Test di resistenza",
                  "Verifica la capacità di carico",
                ],
                [
                  "Test di stabilità",
                  "Previene ribaltamento e crollo",
                ],
                [
                  "Test di durata",
                  "Valuta le prestazioni con uso ripetuto",
                ],
                [
                  "Verifica dell'integrità strutturale",
                  "Valuta giunture, telaio e connessioni",
                ],
                [
                  "Test di sicurezza",
                  "Riduce il rischio di lesioni durante l'uso normale",
                ],
                [
                  "Verifica delle prestazioni funzionali",
                  "Conferma la funzionalità prevista e l'usabilità",
                ],
              ].map(([area, purpose], i) => (
                <TableRow
                  key={area}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {area}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {purpose}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          I mobili devono essere testati in laboratori riconosciuti BIS per
          convalidare le affermazioni di sicurezza, prestazioni e durata.
        </p>

        <SectionDivider />

        <SectionHeading>
          Marchio ISI per Mobili: Uso e Requisiti di Conformità
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Cosa indica il Marchio ISI</strong> — Conferma che i
              mobili sono conformi agli standard indiani e certificati da BIS.
            </>,
            <>
              <strong>Regole per l&apos;apposizione del Marchio ISI</strong> — Il
              marchio deve essere visibile, permanente e formattato correttamente
              secondo le linee guida BIS.
            </>,
            <>
              <strong>Conseguenze dell&apos;uso improprio</strong> — L&apos;uso
              illegale può comportare sanzioni, revoca della licenza e azioni
              legali ai sensi del BIS Act del 2016.
            </>,
            <>
              <strong>Come possono verificare gli acquirenti</strong> — I
              consumatori possono verificare il numero di licenza sul sito
              ufficiale di BIS.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Tempistiche, Validità e Rinnovo della Certificazione BIS
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "Tempistiche di Certificazione per Prodotti di Mobili",
              description:
                "In genere 2–3 mesi, a seconda dei programmi di test e ispezione della fabbrica.",
            },
            {
              icon: ShieldCheck,
              title: "Validità della Licenza BIS",
              description:
                "La licenza è valida per 1–3 anni e deve essere rinnovata prima della scadenza.",
            },
            {
              icon: RefreshCw,
              title: "Processo di Rinnovo della Certificazione BIS",
              description:
                "Il rinnovo include rapporti di test aggiornati, ispezioni della fabbrica e conferma della conformità.",
            },
            {
              icon: Eye,
              title: "Sorveglianza e Requisiti di Conformità Continua",
              description:
                "BIS conduce audit e test a campione per garantire il rispetto continuo degli standard.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Vantaggi dei Mobili Certificati BIS
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Conformità legale e accesso al mercato</strong> —
              Obbligatorio per la vendita di determinati tipi di mobili in
              India.
            </>,
            <>
              <strong>Qualità del prodotto migliorata e fiducia dei consumatori</strong>{" "}
              — La Certificazione BIS segnala affidabilità e sicurezza.
            </>,
            <>
              <strong>Vantaggio competitivo per i produttori</strong> — I
              mobili certificati hanno maggiore credibilità sul mercato e
              idoneità agli appalti.
            </>,
            <>
              <strong>Idoneità per appalti governativi</strong> — Solo i prodotti
              certificati BIS possono essere forniti ad acquirenti governativi o
              istituzionali.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Sanzioni per la Non Conformità alle Normative BIS sui Mobili
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>Produzione o vendita di mobili non certificati</strong> —
              Viola la QCO e comporta multe e sequestro dei prodotti.
            </>,
            <>
              <strong>Restrizioni all&apos;importazione per mobili non conformi</strong>{" "}
              — Le importazioni non certificate possono essere bloccate in
              dogana.
            </>,
            <>
              <strong>Sanzioni ai sensi del BIS Act del 2016</strong> — Includono
              multe, pena detentiva e divieti di vendita.
            </>,
            <>
              <strong>Rischi aziendali per la non conformità</strong> — Perdita
              della fiducia dei consumatori, contenziosi e accesso limitato al
              mercato.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Sfide nell&apos;Ottenere la Certificazione BIS per Mobili
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "Identificazione dello Standard Indiano Corretto",
              description:
                "I produttori devono garantire che il loro prodotto sia conforme allo standard IS 17631–IS 17636 applicabile.",
            },
            {
              title: "Gestione dei Requisiti di Test e Documentazione",
              description:
                "Test di laboratorio appropriati e documentazione sono obbligatori per l'approvazione.",
            },
            {
              title: "Risoluzione delle Osservazioni dell'Audit di Fabbrica",
              description:
                "La non conformità durante gli audit può ritardare la certificazione.",
            },
            {
              title: "Mantenimento della Conformità Continua Post-Certificazione",
              description:
                "Il monitoraggio continuo della qualità e il rispetto degli standard BIS sono necessari per evitare sanzioni.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Come Sun Certifications India Può Aiutare
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "Assistenza per Domanda e Documentazione",
              description:
                "Guida nella presentazione di una domanda BIS completa e corretta.",
            },
            {
              icon: FlaskConical,
              title: "Supporto per Test del Prodotto",
              description:
                "Aiuta a coordinare con laboratori approvati BIS.",
            },
            {
              icon: ClipboardCheck,
              title: "Preparazione Audit e Consulenza sulla Conformità",
              description:
                "Garantisce che i processi di fabbrica soddisfino i requisiti BIS prima dell'ispezione.",
            },
            {
              icon: ShieldCheck,
              title: "Gestione della Conformità Post-Licenza",
              description:
                "Consiglia sulla tenuta dei registri, audit di sorveglianza e aggiornamenti degli standard.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Domande Frequenti sulla Certificazione BIS per Mobili
        </SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "La Certificazione BIS è obbligatoria per tutti i prodotti di mobili?",
              answer:
                "No. Solo i mobili elencati nella Furniture QCO 2025 richiedono la Certificazione BIS obbligatoria.",
            },
            {
              question:
                "I mobili importati possono essere venduti senza Certificazione BIS?",
              answer:
                "No. I mobili nelle categorie obbligatorie non possono essere venduti in India senza l'approvazione BIS.",
            },
            {
              question: "Quanto tempo richiede la certificazione dei mobili?",
              answer:
                "In genere 2–3 mesi, a seconda dei test e delle ispezioni.",
            },
            {
              question:
                "Qual è la differenza tra Certificazione BIS e Marchio ISI?",
              answer:
                "La Certificazione BIS è il processo di approvazione; il Marchio ISI è l'etichetta di certificazione applicata sui mobili.",
            },
            {
              question:
                "Quali standard BIS si applicano ai mobili?",
              answer:
                "IS 17631–IS 17636 coprono sedie, sgabelli, sedie da lavoro, tavoli, letti, letti a castello e unità di stoccaggio.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>Risorse Correlate</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                Certificazione BIS-ISI
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                Certificato BIS per Produttori Stranieri
              </a>
            </>,
          ]}
        />

        <ManyUsersAlsoReadItalian />

        <FaqAuthorItalian questionNumber={2} />
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
                Il Miglior Consulente per Certificati dell&apos;India
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
                alt="Logo BIS"
                title="Logo BIS"
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
                alt="Gestione dei Rifiuti Plastici"
                title="Gestione dei Rifiuti Plastici"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Gestione dei Rifiuti Plastici
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
