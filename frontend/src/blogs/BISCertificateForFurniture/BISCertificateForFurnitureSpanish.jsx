import FaqAuthorSpanish from "@/components/common/FaqAuthor/FaqAuthorSpanish";
import ManyUsersAlsoReadSpanish from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadSpanish";
import ServicesRightSideContentSpanish from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentSpanish";
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
import FooterSpanish from "@/components/manual/Footer/FooterSpanish";

const BISCertificateForFurnitureSpanish = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterSpanish />
    </div>
  );
};

export default BISCertificateForFurnitureSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para Muebles en India | Guía de Certificación, Licencia y Proceso BIS";
  const ogTitle =
    "Certificado BIS para Muebles en India - Guía Completa de Certificación BIS";
  const twitterTitle =
    "Certificado BIS para Muebles | Guía Completa de Certificación BIS del BIS Indio";
  const metaDescription =
    "Certificado BIS para Muebles en India - guía completa sobre Certificación BIS, Licencia BIS, costos, documentos, estándares, proceso, solicitud en línea y Marca BIS para fabricantes de muebles.";
  const ogDescription =
    "¿Busca Certificación BIS para Muebles en India? Aprenda sobre Licencia BIS, Marca BIS, estándares aplicables, proceso de certificación, costos, documentos y requisitos de cumplimiento en detalle.";
  const twitterDescription =
    "Guía completa del Certificado BIS para Muebles en India - proceso de Certificación BIS, costos, documentos, Marca BIS, estándares y solicitud en línea explicados.";
  const metaKeywords =
    "Certificado BIS para Muebles, Certificación BIS para Muebles, Licencia BIS para Muebles, Qué es BIS, BIS Indio";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/muebles";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Jefe de Operaciones en Sun Certification India";

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
                    <Link to="/">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Últimos Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificación BIS para Muebles en India
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
        <ServicesRightSideContentSpanish />
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
          Certificación BIS para Muebles en India: Guía Completa sobre Estándares
          BIS, Marca ISI, Proceso y Cumplimiento
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="Licencia BIS para Muebles"
            alt="Certificación BIS para Muebles en India - Guía de Marca ISI"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            Los muebles son una parte esencial de hogares, oficinas y espacios
            públicos. Garantizar la seguridad, durabilidad y calidad de los
            muebles es crucial tanto para consumidores como para fabricantes. En
            India, la{" "}
            <strong>certificación BIS para muebles</strong> es un requisito
            obligatorio para ciertas categorías de muebles según la Furniture
            (Quality Control) Order, 2025. Esta guía ofrece una visión
            detallada de los estándares BIS, la marca ISI, el proceso de
            certificación y los requisitos de cumplimiento.
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>
          ¿Qué es la Certificación BIS para Muebles?
        </SectionHeading>

        <SubSectionHeading>
          Significado de la Certificación BIS para Muebles
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          La certificación BIS es un proceso formal mediante el cual la Oficina
          de Normas de la India (BIS) evalúa los productos para garantizar que
          cumplan con las normas indias. Para los muebles, esta certificación
          asegura que los productos cumplan con los parámetros definidos de
          seguridad, rendimiento y calidad. Una vez certificados, los fabricantes
          pueden usar la <strong>marca ISI</strong> en sus muebles, señalando el
          cumplimiento a los compradores.
        </p>

        <SubSectionHeading>
          Diferencia entre Certificación BIS y Marca ISI para Muebles
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Certificación BIS</strong> — El proceso de evaluación,
              pruebas y aprobación por parte de BIS.
            </>,
            <>
              <strong>Marca ISI</strong> — Una marca otorgada tras la
              certificación BIS que indica que el producto cumple con las normas
              indias. La marca ISI es la garantía visible de cumplimiento para
              los consumidores.
            </>,
          ]}
        />

        <SubSectionHeading>
          Por qué la Certificación BIS es Importante para Fabricantes e
          Importadores de Muebles
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Cumplimiento legal con las regulaciones indias",
            "Acceso al mercado indio y oportunidades de contratación gubernamental",
            "Mayor confianza del consumidor y ventaja competitiva",
            "Reducción de riesgos de retiradas del mercado, multas o restricciones de importación",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Requisitos de Certificación BIS para Fabricantes de Muebles
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Requisito
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Detalles
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Autoridad de Certificación", "Bureau of Indian Standards (BIS)"],
                ["Esquema de Certificación", "Esquema-I (Certificación de Marca ISI)"],
                ["Ley Aplicable", "Furniture (Quality Control) Order, 2025"],
                ["Marcado Obligatorio", "Marca ISI con Número de Licencia BIS"],
                [
                  "Pruebas de Producto",
                  "Requeridas a través de laboratorios reconocidos por BIS",
                ],
                ["Inspección de Fábrica", "Obligatoria antes de otorgar la licencia"],
                [
                  "Aplicable a",
                  "Fabricantes Indios, Fabricantes Extranjeros, Importadores",
                ],
                ["Vigilancia Post-Certificación", "Requerida"],
                [
                  "Renovación de Licencia",
                  "Renovación periódica según requisitos de BIS",
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
          Marco Regulatorio para la Certificación BIS de Muebles en India
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "La Furniture QCO 2025 exige que ciertas categorías de muebles cumplan con los estándares BIS. La QCO proporciona la base legal para la certificación obligatoria y define los tipos de muebles cubiertos.",
            },
            {
              icon: Building2,
              title: "Rol de la Oficina de Normas de la India (BIS)",
              description:
                "BIS desarrolla las Normas Indias (IS), evalúa las unidades de fabricación, realiza pruebas de productos y emite licencias para el uso de la marca ISI. También supervisa el cumplimiento mediante auditorías y vigilancia.",
            },
          ]}
        />

        <SubSectionHeading>
          Certificación BIS Obligatoria vs. Voluntaria para Muebles
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Obligatoria</strong> — Categorías especificadas bajo la
              Furniture QCO, como camas, sillas y unidades de almacenamiento.
            </>,
            <>
              <strong>Voluntaria</strong> — Los fabricantes pueden optar por la
              certificación de categorías adicionales de productos para
              mejorar la credibilidad en el mercado.
            </>,
          ]}
        />

        <SubSectionHeading>
          Aplicabilidad de la Furniture QCO a Fabricantes e Importadores
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Fabricantes indios que producen muebles cubiertos bajo la QCO",
            "Fabricantes extranjeros que exportan a India",
            "Importadores que venden muebles en el mercado nacional",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Productos de Muebles Cubiertos bajo la Certificación BIS
        </SectionHeading>

        <SubSectionHeading>
          Categorías de Muebles y Estándares BIS Aplicables
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Categoría de Mueble
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Norma India Aplicable
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Título del Estándar
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  Requisito de Certificación
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "Sillas de Trabajo",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "Sillas y Taburetes de Uso General",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "Mesas y Escritorios",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "Unidades de Almacenamiento",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "Camas",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "Literas",
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
                    Obligatorio según Furniture QCO
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Todos los productos cubiertos deben cumplir con los estándares BIS
          relevantes y llevar una marca ISI válida antes de venderse en India.
          Estos estándares definen los requisitos mínimos de seguridad,
          estabilidad y usabilidad de los muebles.
        </p>

        <SectionDivider />

        <SectionHeading>
          Estándares BIS para Muebles y sus Requisitos
        </SectionHeading>

        <SubSectionHeading>
          Requisitos de Rendimiento según los Estándares BIS para Muebles
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Los muebles deben soportar el uso normal sin deformarse ni sufrir
          fallos estructurales.
        </p>
        <CheckPointsList
          points={[
            "Capacidad de carga bajo condiciones normales y de carga máxima",
            "Resistencia de juntas y durabilidad de las conexiones",
            "Estabilidad del material sin deformación ni degradación",
          ]}
        />

        <SubSectionHeading>
          Requisitos de Pruebas de Seguridad y Durabilidad
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Los muebles deben cumplir con las normas de seguridad para prevenir
          accidentes y con los estándares de durabilidad para garantizar una
          larga vida útil.
        </p>
        <CheckPointsList
          points={[
            "Prevención del vuelco (sillas, taburetes y unidades inestables)",
            "Prevención del colapso bajo carga nominal (camas, literas, almacenamiento)",
            "Durabilidad a largo plazo mediante pruebas de rendimiento por uso repetido",
          ]}
        />

        <SubSectionHeading>
          Parámetros de Calidad Evaluados Durante la Certificación
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Calidad del material y acabado",
            "Capacidad de carga",
            "Estabilidad, ergonomía y características de seguridad",
          ]}
        />

        <SubSectionHeading>
          Requisitos de Cumplimiento para Diferentes Categorías de Muebles
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          Cada tipo de mueble tiene normas IS específicas que detallan
          dimensiones, pruebas de rendimiento y tolerancias permitidas. El
          cumplimiento garantiza uniformidad y calidad entre todos los
          fabricantes.
        </p>

        <SectionDivider />

        <SectionHeading>
          ¿Quién Necesita la Certificación BIS para Muebles?
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "Fabricantes Indios de Muebles",
              description:
                "Todos los fabricantes nacionales de muebles cubiertos bajo la Furniture QCO deben obtener la certificación BIS antes de vender sus productos.",
            },
            {
              icon: Globe,
              title: "Fabricantes Extranjeros que Exportan Muebles a India",
              description:
                "Los exportadores deben cumplir con los estándares BIS para vender muebles legalmente en India y usar la marca ISI.",
            },
            {
              icon: Package,
              title: "Importadores de Muebles y Propietarios de Marcas",
              description:
                "Los importadores deben asegurarse de que los muebles que traen a India cumplan con las normas BIS, incluso si se fabricaron en el extranjero.",
            },
            {
              icon: ShoppingCart,
              title: "Vendedores de Comercio Electrónico y Minoristas",
              description:
                "Los minoristas en línea y físicos que venden muebles en categorías cubiertas deben verificar la certificación BIS para evitar responsabilidades legales.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Certificación BIS ISI para Muebles: Proceso Paso a Paso
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "Identificación del Producto y Selección del Estándar Aplicable",
              description:
                "Identifique la categoría del mueble y el estándar BIS relevante (IS 17631–IS 17636) para pruebas y certificación.",
            },
            {
              title: "Pruebas de Producto en Laboratorios Reconocidos por BIS",
              description:
                "Los muebles se prueban en laboratorios aprobados por BIS para evaluar resistencia, estabilidad y durabilidad. Los informes de prueba son obligatorios para la solicitud.",
            },
            {
              title: "Presentación de la Solicitud BIS",
              description:
                "Los fabricantes presentan una solicitud ante BIS con especificaciones del producto, detalles técnicos e informes de prueba.",
            },
            {
              title: "Inspección y Evaluación de Fábrica",
              description:
                "BIS realiza una auditoría de fábrica para verificar los procesos de fabricación, los sistemas de control de calidad y la consistencia de producción.",
            },
            {
              title: "Otorgamiento de Licencia BIS y Permiso de Marca ISI",
              description:
                "Tras la aprobación, BIS emite una licencia que permite al fabricante usar la marca ISI en los muebles certificados.",
            },
            {
              title: "Requisitos de Cumplimiento Post-Certificación",
              description:
                "Se requieren auditorías periódicas, pruebas periódicas y adherencia a los estándares BIS para mantener la certificación.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Documentos Requeridos para la Certificación BIS de Muebles
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Registro de Empresa y Documentos de Fabricación</strong>{" "}
              — Licencias comerciales, registro GST y detalles de la planta de
              fabricación.
            </>,
            <>
              <strong>Especificaciones Técnicas y Dibujos del Producto</strong>{" "}
              — Diseños detallados, materiales utilizados e instrucciones de
              montaje.
            </>,
            <>
              <strong>Informes de Prueba y Documentos de Control de Calidad</strong>{" "}
              — Informes de laboratorios aprobados por BIS que demuestren el
              cumplimiento de las normas IS.
            </>,
            <>
              <strong>Documentos de Fábrica y Proceso de Producción</strong> —
              Sistemas de gestión de calidad, flujo de procesos y procedimientos
              de inspección.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Requisitos de Pruebas para Muebles Certificados BIS
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Área de Prueba
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Propósito
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [
                  "Prueba de Resistencia",
                  "Verifica la capacidad de carga",
                ],
                [
                  "Prueba de Estabilidad",
                  "Previene el vuelco y el colapso",
                ],
                [
                  "Prueba de Durabilidad",
                  "Evalúa el rendimiento con uso repetido",
                ],
                [
                  "Prueba de Integridad Estructural",
                  "Evalúa juntas, marcos y conexiones",
                ],
                [
                  "Prueba de Seguridad",
                  "Reduce el riesgo de lesiones durante el uso normal",
                ],
                [
                  "Prueba de Rendimiento Funcional",
                  "Confirma la funcionalidad y usabilidad previstas",
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
          Los muebles deben someterse a pruebas en laboratorios reconocidos por
          BIS para validar las afirmaciones de seguridad, rendimiento y
          durabilidad.
        </p>

        <SectionDivider />

        <SectionHeading>
          Marca ISI para Muebles: Uso y Requisitos de Cumplimiento
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Qué Indica la Marca ISI</strong> — Confirma que los
              muebles cumplen con las normas indias y han sido certificados por
              BIS.
            </>,
            <>
              <strong>Reglas para Colocar la Marca ISI</strong> — La marca debe
              ser visible, permanente y estar correctamente formateada según las
              directrices de BIS.
            </>,
            <>
              <strong>Consecuencias del Uso Indebido</strong> — El uso ilegal
              puede conllevar multas, cancelación de licencia y acciones legales
              bajo la Ley BIS de 2016.
            </>,
            <>
              <strong>Cómo Pueden Verificar los Compradores</strong> — Los
              consumidores pueden verificar el número de licencia en el sitio web
              oficial de BIS.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Plazos, Validez y Renovación de la Certificación BIS
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "Plazo de Certificación para Productos de Muebles",
              description:
                "Normalmente 2–3 meses, dependiendo de los calendarios de pruebas e inspección de fábrica.",
            },
            {
              icon: ShieldCheck,
              title: "Validez de la Licencia BIS",
              description:
                "La licencia es válida por 1–3 años y requiere renovación antes de su vencimiento.",
            },
            {
              icon: RefreshCw,
              title: "Proceso de Renovación de la Certificación BIS",
              description:
                "La renovación incluye informes de prueba actualizados, inspecciones de fábrica y confirmación de cumplimiento.",
            },
            {
              icon: Eye,
              title: "Vigilancia y Requisitos de Cumplimiento Continuo",
              description:
                "BIS realiza auditorías y pruebas aleatorias para garantizar la adherencia continua a los estándares.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Beneficios de los Muebles Certificados BIS
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Cumplimiento Legal y Acceso al Mercado</strong> —
              Obligatorio para vender ciertos tipos de muebles en India.
            </>,
            <>
              <strong>Mejor Calidad del Producto y Confianza del Consumidor</strong>{" "}
              — La certificación BIS señala fiabilidad y seguridad.
            </>,
            <>
              <strong>Ventaja Competitiva para Fabricantes</strong> — Los
              muebles certificados tienen mayor credibilidad en el mercado y
              elegibilidad para contrataciones.
            </>,
            <>
              <strong>Elegibilidad para Contratación Gubernamental</strong> —
              Solo los productos certificados BIS pueden suministrarse a
              compradores gubernamentales o institucionales.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Sanciones por Incumplimiento de las Regulaciones BIS para Muebles
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>Fabricación o Venta de Muebles No Certificados</strong> —
              Viola la QCO, lo que resulta en multas e incautación de productos.
            </>,
            <>
              <strong>Restricciones de Importación de Muebles No Conformes</strong>{" "}
              — Las importaciones no certificadas pueden ser bloqueadas en
              aduana.
            </>,
            <>
              <strong>Sanciones bajo la Ley BIS de 2016</strong> — Incluyen
              multas económicas, prisión y prohibición de venta de productos.
            </>,
            <>
              <strong>Riesgos Comerciales del Incumplimiento</strong> — Pérdida
              de confianza del consumidor, disputas legales y acceso restringido
              al mercado.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Desafíos para Obtener la Certificación BIS para Muebles
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "Identificación de la Norma India Correcta",
              description:
                "Los fabricantes deben asegurarse de que su producto corresponda al estándar IS 17631–IS 17636 aplicable.",
            },
            {
              title: "Gestión de Requisitos de Pruebas y Documentación",
              description:
                "Las pruebas de laboratorio adecuadas y la documentación son obligatorias para la aprobación.",
            },
            {
              title: "Atención de Observaciones de la Auditoría de Fábrica",
              description:
                "El incumplimiento durante las auditorías puede retrasar la certificación.",
            },
            {
              title: "Mantenimiento del Cumplimiento Continuo Tras la Certificación",
              description:
                "Se requiere monitoreo continuo de calidad y adherencia a los estándares BIS para evitar sanciones.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Cómo Puede Ayudar Sun Certifications India
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "Apoyo en Solicitud y Documentación",
              description:
                "Orientación para presentar una solicitud BIS completa y precisa.",
            },
            {
              icon: FlaskConical,
              title: "Asistencia con Pruebas de Producto",
              description:
                "Ayuda a coordinar con laboratorios aprobados por BIS.",
            },
            {
              icon: ClipboardCheck,
              title: "Preparación para Auditorías y Orientación de Cumplimiento",
              description:
                "Garantiza que los procesos de fábrica cumplan con los requisitos BIS antes de la inspección.",
            },
            {
              icon: ShieldCheck,
              title: "Gestión de Cumplimiento Post-Licencia",
              description:
                "Asesora sobre mantenimiento de registros, auditorías de vigilancia y actualizaciones de estándares.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Preguntas Frecuentes sobre la Certificación BIS para Muebles
        </SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "¿Es Obligatoria la Certificación BIS para Todos los Productos de Muebles?",
              answer:
                "No. Solo los muebles incluidos en la Furniture QCO 2025 requieren certificación BIS obligatoria.",
            },
            {
              question:
                "¿Se Pueden Vender Muebles Importados sin Certificación BIS?",
              answer:
                "No. Los muebles de las categorías obligatorias no pueden venderse en India sin la aprobación BIS.",
            },
            {
              question: "¿Cuánto Tiempo Toma la Certificación de Muebles?",
              answer:
                "Normalmente 2–3 meses, dependiendo de las pruebas e inspecciones.",
            },
            {
              question:
                "¿Cuál es la Diferencia entre Certificación BIS y Marca ISI?",
              answer:
                "La certificación BIS es el proceso de aprobación; la marca ISI es la etiqueta de certificación que se muestra en los muebles.",
            },
            {
              question:
                "¿Cuáles son los Estándares BIS Aplicables para Muebles?",
              answer:
                "IS 17631–IS 17636 cubren sillas, taburetes, sillas de trabajo, mesas, camas, literas y unidades de almacenamiento.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>Recursos Relacionados</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                Certificación BIS ISI
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                Certificado BIS para Fabricantes Extranjeros
              </a>
            </>,
          ]}
        />

        <ManyUsersAlsoReadSpanish />

        <FaqAuthorSpanish questionNumber={2} />
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
              Nuestros Servicios
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                El Mejor Consultor de Certificados de India
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
              Marca BIS (Licencia ISI) para Fabricación Extranjera
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
              Certificación de Registro CDSCO
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
              Registro BIS (CRS)
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="Gestión de Residuos Plásticos"
                title="Gestión de Residuos Plásticos"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Gestión de Residuos Plásticos
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="Logo Certificado EPR"
                title="Logo Certificado EPR"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certificaciones de Certificado EPR
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
              Certificaciones de Certificado LMPC
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
              Certificado de Registro BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="Logo Marca ISI"
                title="Logo Marca ISI"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              MARCA ISI (BIS) para Fabricantes Indios
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
