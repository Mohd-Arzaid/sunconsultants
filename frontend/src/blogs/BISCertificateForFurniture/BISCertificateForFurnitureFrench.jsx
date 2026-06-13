import FaqAuthorFrench from "@/components/common/FaqAuthor/FaqAuthorFrench";
import ManyUsersAlsoReadFrench from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadFrench";
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";
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
import FooterFrench from "@/components/manual/Footer/FooterFrench";

const BISCertificateForFurnitureFrench = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default BISCertificateForFurnitureFrench;

const MetaTags = () => {
  const title =
    "Certificat BIS pour meubles en Inde | Certification BIS, Licence et Guide du Processus";
  const ogTitle =
    "Certificat BIS pour meubles en Inde - Guide complet de certification BIS";
  const twitterTitle =
    "Certificat BIS pour meubles | Guide complet de certification BIS du BIS indien";
  const metaDescription =
    "Certificat BIS pour meubles en Inde - guide complet sur la certification BIS, la licence BIS, les coûts, les documents, les normes, le processus, la demande en ligne et la marque BIS pour les fabricants de meubles.";
  const ogDescription =
    "Vous cherchez la certification BIS pour meubles en Inde ? Apprenez-en plus sur la licence BIS, la marque BIS, les normes applicables, le processus de certification, les coûts, les documents et les exigences de conformité en détail.";
  const twitterDescription =
    "Guide complet du certificat BIS pour meubles en Inde - processus de certification BIS, coûts, documents, marque BIS, normes et demande en ligne expliqués.";
  const metaKeywords =
    "Certificat BIS pour meubles, Certification BIS pour meubles, Licence BIS pour meubles, Qu'est-ce que le BIS, BIS indien";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/meubles";
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
                    <Link to="/">Accueil</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Derniers blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certification BIS pour meubles en Inde
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
        <ServicesRightSideContentFrench />
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
          Certification BIS pour meubles en Inde : Guide complet des normes
          BIS, marque ISI, processus et conformité
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="Licence BIS pour meubles"
            alt="Certification BIS pour meubles en Inde - Guide de la marque ISI"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            Les meubles sont un élément essentiel des foyers, des bureaux et des
            espaces publics. Garantir la sécurité, la durabilité et la qualité
            des meubles est crucial pour les consommateurs comme pour les
            fabricants. En Inde, la{" "}
            <strong>certification BIS pour meubles</strong> est une exigence
            obligatoire pour certaines catégories de meubles en vertu de la
            Furniture (Quality Control) Order, 2025. Ce guide offre un aperçu
            détaillé des normes BIS, de la marque ISI, du processus de
            certification et des exigences de conformité.
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>
          Qu&apos;est-ce que la certification BIS pour meubles ?
        </SectionHeading>

        <SubSectionHeading>
          Signification de la certification BIS pour meubles
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS est un processus formel par lequel le Bureau of
          Indian Standards (BIS) évalue les produits pour garantir qu&apos;ils
          sont conformes aux normes indiennes. Pour les meubles, cette
          certification garantit que les produits respectent des paramètres
          définis de sécurité, de performance et de qualité. Une fois certifiés,
          les fabricants peuvent utiliser la <strong>marque ISI</strong> sur
          leurs meubles, signalant ainsi leur conformité aux acheteurs.
        </p>

        <SubSectionHeading>
          Différence entre certification BIS et marque ISI pour meubles
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Certification BIS</strong> — Le processus
              d&apos;évaluation, de test et d&apos;approbation par le BIS.
            </>,
            <>
              <strong>Marque ISI</strong> — Une marque accordée après la
              certification BIS qui indique que le produit est conforme aux
              normes indiennes. La marque ISI est l&apos;assurance visible de
              conformité pour les consommateurs.
            </>,
          ]}
        />

        <SubSectionHeading>
          Pourquoi la certification BIS est importante pour les fabricants et
          importateurs de meubles
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Conformité légale aux réglementations indiennes",
            "Accès au marché indien et aux opportunités de marchés publics",
            "Confiance accrue des consommateurs et avantage concurrentiel",
            "Risques réduits de rappels, de pénalités ou de restrictions à l'importation",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Exigences de certification BIS pour les fabricants de meubles
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Exigence
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Détails
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Autorité de certification", "Bureau of Indian Standards (BIS)"],
                ["Schéma de certification", "Schéma I (certification marque ISI)"],
                ["Loi applicable", "Furniture (Quality Control) Order, 2025"],
                ["Marquage obligatoire", "Marque ISI avec numéro de licence BIS"],
                [
                  "Tests produits",
                  "Requis via des laboratoires reconnus par le BIS",
                ],
                ["Inspection d'usine", "Obligatoire avant l'octroi de la licence"],
                [
                  "Applicable à",
                  "Fabricants indiens, fabricants étrangers, importateurs",
                ],
                ["Surveillance post-certification", "Requise"],
                [
                  "Renouvellement de licence",
                  "Renouvellement périodique selon les exigences BIS",
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
          Cadre réglementaire de la certification BIS pour meubles en Inde
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "La Furniture QCO 2025 impose que certaines catégories de meubles soient conformes aux normes BIS. La QCO constitue la base juridique de la certification obligatoire et définit les types de meubles couverts.",
            },
            {
              icon: Building2,
              title: "Rôle du Bureau of Indian Standards (BIS)",
              description:
                "Le BIS élabore les normes indiennes (IS), évalue les unités de fabrication, effectue les tests produits et délivre les licences d'utilisation de la marque ISI. Il surveille également la conformité par le biais d'audits et de contrôles.",
            },
          ]}
        />

        <SubSectionHeading>
          Certification BIS obligatoire vs volontaire pour meubles
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Obligatoire</strong> — Catégories spécifiées dans la
              Furniture QCO, telles que les lits, les chaises et les unités de
              stockage.
            </>,
            <>
              <strong>Volontaire</strong> — Les fabricants peuvent choisir la
              certification pour des catégories de produits supplémentaires afin
              d&apos;accroître leur crédibilité sur le marché.
            </>,
          ]}
        />

        <SubSectionHeading>
          Applicabilité de la Furniture QCO aux fabricants et importateurs
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Fabricants indiens produisant des meubles couverts par la QCO",
            "Fabricants étrangers exportant vers l'Inde",
            "Importateurs vendant des meubles sur le marché intérieur",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Produits de meubles couverts par la certification BIS
        </SectionHeading>

        <SubSectionHeading>
          Catégories de meubles et normes BIS applicables
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Catégorie de meubles
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Norme indienne applicable
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Titre de la norme
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  Exigence de certification
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "Chaises de travail",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "Chaises et tabourets à usage général",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "Tables et bureaux",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "Unités de stockage",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "Lits",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "Lits superposés",
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
                    Obligatoire en vertu de la Furniture QCO
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tous les produits couverts doivent être conformes aux normes BIS
          pertinentes et porter une marque ISI valide avant d&apos;être vendus
          en Inde. Ces normes définissent les exigences minimales en matière de
          sécurité, de stabilité et d&apos;utilisabilité des meubles.
        </p>

        <SectionDivider />

        <SectionHeading>
          Normes BIS pour meubles et leurs exigences
        </SectionHeading>

        <SubSectionHeading>
          Exigences de performance selon les normes BIS pour meubles
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Les meubles doivent résister à une utilisation normale sans se
          déformer ni présenter de défaillance structurelle.
        </p>
        <CheckPointsList
          points={[
            "Capacité de charge dans des conditions normales et de charge maximale",
            "Solidité des assemblages et durabilité des connexions",
            "Stabilité des matériaux sans déformation ni dégradation",
          ]}
        />

        <SubSectionHeading>
          Exigences de tests de sécurité et de durabilité
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Les meubles doivent respecter les normes de sécurité pour prévenir les
          accidents et les normes de durabilité pour garantir une longue durée de
          vie.
        </p>
        <CheckPointsList
          points={[
            "Prévention du basculement (chaises, tabourets et unités instables)",
            "Prévention de l'effondrement sous charge nominale (lits, lits superposés, stockage)",
            "Durabilité à long terme grâce aux tests de performance en usage répété",
          ]}
        />

        <SubSectionHeading>
          Paramètres de qualité évalués lors de la certification
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Qualité des matériaux et finition",
            "Capacité de charge",
            "Stabilité, ergonomie et caractéristiques de sécurité",
          ]}
        />

        <SubSectionHeading>
          Exigences de conformité pour différentes catégories de meubles
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque type de meuble possède des normes IS spécifiques détaillant les
          dimensions, les tests de performance et les tolérances admissibles. La
          conformité garantit l&apos;uniformité et la qualité entre les
          fabricants.
        </p>

        <SectionDivider />

        <SectionHeading>
          Qui a besoin de la certification BIS pour meubles ?
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "Fabricants indiens de meubles",
              description:
                "Tous les fabricants nationaux de meubles couverts par la Furniture QCO doivent obtenir la certification BIS avant de vendre leurs produits.",
            },
            {
              icon: Globe,
              title: "Fabricants étrangers exportant des meubles vers l'Inde",
              description:
                "Les exportateurs doivent se conformer aux normes BIS pour vendre légalement des meubles en Inde et utiliser la marque ISI.",
            },
            {
              icon: Package,
              title: "Importateurs de meubles et propriétaires de marques",
              description:
                "Les importateurs doivent s'assurer que les meubles qu'ils importent en Inde sont conformes aux normes BIS, même s'ils sont fabriqués à l'étranger.",
            },
            {
              icon: ShoppingCart,
              title: "Vendeurs e-commerce et commerces de détail",
              description:
                "Les détaillants en ligne et hors ligne vendant des meubles dans les catégories couvertes doivent vérifier la certification BIS pour éviter les responsabilités juridiques.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Certification BIS ISI pour meubles : processus étape par étape
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "Identification du produit et sélection de la norme applicable",
              description:
                "Identifiez la catégorie de meubles et la norme BIS pertinente (IS 17631–IS 17636) pour les tests et la certification.",
            },
            {
              title: "Tests produits dans des laboratoires reconnus par le BIS",
              description:
                "Les meubles sont testés pour leur solidité, leur stabilité et leur durabilité dans des laboratoires agréés BIS. Les rapports d'essai sont obligatoires pour la demande.",
            },
            {
              title: "Soumission de la demande BIS",
              description:
                "Les fabricants soumettent une demande au BIS avec les spécifications produits, les détails techniques et les rapports d'essai.",
            },
            {
              title: "Inspection et évaluation de l'usine",
              description:
                "Le BIS effectue un audit d'usine pour vérifier les processus de fabrication, les systèmes de contrôle qualité et la cohérence de production.",
            },
            {
              title: "Octroi de la licence BIS et autorisation de la marque ISI",
              description:
                "Après approbation, le BIS délivre une licence permettant au fabricant d'utiliser la marque ISI sur les meubles certifiés.",
            },
            {
              title: "Exigences de conformité post-certification",
              description:
                "Des audits réguliers, des tests périodiques et le respect des normes BIS sont requis pour maintenir la certification.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Documents requis pour la certification BIS de meubles
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Enregistrement de l&apos;entreprise et documents de fabrication</strong>{" "}
              — Licences commerciales, enregistrement GST et détails de
              l&apos;installation de fabrication.
            </>,
            <>
              <strong>Spécifications techniques et plans du produit</strong> —
              Conceptions détaillées, matériaux utilisés et instructions de
              montage.
            </>,
            <>
              <strong>Rapports d&apos;essai et documents de contrôle qualité</strong>{" "}
              — Rapports de laboratoires agréés BIS démontrant la conformité aux
              normes IS.
            </>,
            <>
              <strong>Documents d&apos;usine et de processus de production</strong>{" "}
              — Systèmes de gestion de la qualité, flux de processus et
              procédures d&apos;inspection.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Exigences de test pour meubles certifiés BIS
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Domaine de test
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Objectif
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [
                  "Test de solidité",
                  "Vérifie la capacité de charge",
                ],
                [
                  "Test de stabilité",
                  "Prévient le basculement et l'effondrement",
                ],
                [
                  "Test de durabilité",
                  "Évalue les performances en usage répété",
                ],
                [
                  "Test d'intégrité structurelle",
                  "Évalue les assemblages, les cadres et les connexions",
                ],
                [
                  "Test de sécurité",
                  "Réduit le risque de blessure lors d'une utilisation normale",
                ],
                [
                  "Test de performance fonctionnelle",
                  "Confirme la fonctionnalité et l'utilisabilité prévues",
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
          Les meubles doivent être testés dans des laboratoires reconnus par le
          BIS pour valider les allégations de sécurité, de performance et de
          durabilité.
        </p>

        <SectionDivider />

        <SectionHeading>
          Marque ISI pour meubles : utilisation et exigences de conformité
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Ce que la marque ISI indique</strong> — Confirme que les
              meubles sont conformes aux normes indiennes et ont été certifiés
              par le BIS.
            </>,
            <>
              <strong>Règles d&apos;apposition de la marque ISI</strong> — La
              marque doit être visible, permanente et correctement formatée selon
              les directives BIS.
            </>,
            <>
              <strong>Conséquences d&apos;une utilisation abusive</strong> — Une
              utilisation illégale peut entraîner des pénalités, l&apos;annulation
              de la licence et des poursuites en vertu de la loi BIS de 2016.
            </>,
            <>
              <strong>Comment les acheteurs peuvent vérifier</strong> — Les
              consommateurs peuvent vérifier le numéro de licence sur le site
              officiel du BIS.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Délai, validité et renouvellement de la certification BIS
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "Délai de certification pour produits de meubles",
              description:
                "Généralement 2 à 3 mois, selon les calendriers de tests et d'inspection d'usine.",
            },
            {
              icon: ShieldCheck,
              title: "Validité de la licence BIS",
              description:
                "La licence est valable 1 à 3 ans et doit être renouvelée avant expiration.",
            },
            {
              icon: RefreshCw,
              title: "Processus de renouvellement de la certification BIS",
              description:
                "Le renouvellement comprend des rapports d'essai actualisés, des inspections d'usine et une confirmation de conformité.",
            },
            {
              icon: Eye,
              title: "Surveillance et exigences de conformité continues",
              description:
                "Le BIS effectue des audits et des tests aléatoires pour garantir le respect continu des normes.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Avantages des meubles certifiés BIS
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Conformité légale et accès au marché</strong> —
              Obligatoire pour la vente de certains types de meubles en Inde.
            </>,
            <>
              <strong>Qualité produit améliorée et confiance des consommateurs</strong>{" "}
              — La certification BIS signale la fiabilité et la sécurité.
            </>,
            <>
              <strong>Avantage concurrentiel pour les fabricants</strong> —
              Les meubles certifiés bénéficient d&apos;une crédibilité accrue sur
              le marché et d&apos;une éligibilité aux marchés publics.
            </>,
            <>
              <strong>Éligibilité aux marchés publics</strong> — Seuls les
              produits certifiés BIS peuvent être fournis aux acheteurs
              gouvernementaux ou institutionnels.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Pénalités en cas de non-conformité aux réglementations BIS pour meubles
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>Fabrication ou vente de meubles non certifiés</strong> —
              Violation de la QCO entraînant des amendes et la saisie des
              produits.
            </>,
            <>
              <strong>Restrictions à l&apos;importation de meubles non conformes</strong>{" "}
              — Les importations non certifiées peuvent être bloquées en douane.
            </>,
            <>
              <strong>Pénalités en vertu de la loi BIS de 2016</strong> — Incluent
              des amendes, des peines d&apos;emprisonnement et l&apos;interdiction
              de vente.
            </>,
            <>
              <strong>Risques commerciaux de la non-conformité</strong> — Perte
              de confiance des consommateurs, litiges juridiques et accès limité
              au marché.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Défis pour obtenir la certification BIS pour meubles
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "Identification de la bonne norme indienne",
              description:
                "Les fabricants doivent s'assurer que leur produit correspond à la norme IS 17631–IS 17636 applicable.",
            },
            {
              title: "Gestion des exigences de test et de documentation",
              description:
                "Des tests en laboratoire et une documentation appropriés sont obligatoires pour l'approbation.",
            },
            {
              title: "Traitement des observations d'audit d'usine",
              description:
                "La non-conformité lors des audits peut retarder la certification.",
            },
            {
              title: "Maintien de la conformité continue après certification",
              description:
                "Un suivi qualité continu et le respect des normes BIS sont requis pour éviter les pénalités.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Comment Sun Certifications India peut vous aider
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "Assistance pour la demande et la documentation",
              description:
                "Accompagnement pour soumettre une demande BIS complète et exacte.",
            },
            {
              icon: FlaskConical,
              title: "Assistance pour les tests produits",
              description:
                "Aide à la coordination avec les laboratoires agréés BIS.",
            },
            {
              icon: ClipboardCheck,
              title: "Préparation aux audits et conseil en conformité",
              description:
                "Garantit que les processus d'usine respectent les exigences BIS avant l'inspection.",
            },
            {
              icon: ShieldCheck,
              title: "Gestion de la conformité post-licence",
              description:
                "Conseils sur la tenue des dossiers, les audits de surveillance et les mises à jour des normes.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Questions fréquemment posées sur la certification BIS pour meubles
        </SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "La certification BIS est-elle obligatoire pour tous les produits de meubles ?",
              answer:
                "Non. Seuls les meubles listés dans la Furniture QCO 2025 nécessitent une certification BIS obligatoire.",
            },
            {
              question:
                "Les meubles importés peuvent-ils être vendus sans certification BIS ?",
              answer:
                "Non. Les meubles des catégories obligatoires ne peuvent pas être vendus en Inde sans approbation BIS.",
            },
            {
              question: "Combien de temps dure la certification des meubles ?",
              answer:
                "Généralement 2 à 3 mois, selon les tests et les inspections.",
            },
            {
              question:
                "Quelle est la différence entre certification BIS et marque ISI ?",
              answer:
                "La certification BIS est le processus d'approbation ; la marque ISI est l'étiquette de certification affichée sur les meubles.",
            },
            {
              question:
                "Quelles sont les normes BIS applicables aux meubles ?",
              answer:
                "IS 17631–IS 17636 couvrent les chaises, tabourets, chaises de travail, tables, lits, lits superposés et unités de stockage.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>Ressources connexes</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                Certification BIS ISI
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                Certificat BIS pour fabricants étrangers
              </a>
            </>,
          ]}
        />

        <ManyUsersAlsoReadFrench />

        <FaqAuthorFrench questionNumber={2} />
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
              Nos services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Meilleur consultant en certificats de l&apos;Inde
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
              Marque BIS (Licence ISI) pour fabrication étrangère
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
              Certification d&apos;enregistrement CDSCO
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
              Enregistrement BIS (CRS)
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
              Gestion des déchets plastiques
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
              Certifications de certificat EPR
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
              Certifications de certificat LMPC
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
              Certificat d&apos;enregistrement BIS
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
              MARQUE ISI (BIS) pour fabricants indiens
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
