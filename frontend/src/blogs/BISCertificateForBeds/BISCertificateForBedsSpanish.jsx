import FaqAuthorSpanish from "@/components/common/FaqAuthor/FaqAuthorSpanish";
import ServicesRightSideContentSpanish from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentSpanish";
import ManyUsersAlsoReadSpanish from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadSpanish";
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
import FooterSpanish from "@/components/manual/Footer/FooterSpanish";
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

const BISCertificateForBedsSpanish = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterSpanish />
    </div>
  );
};

export default BISCertificateForBedsSpanish;

const MetaTags = () => {
  const title = "Certificado BIS para Camas | IS 17635:2022 Licencia BIS";
  const ogTitle = "Certificación BIS para Camas – Guía IS 17635:2022";
  const twitterTitle = "Licencia BIS para Camas | IS 17635:2022";
  const metaDescription =
    "Obtén el Certificado BIS para camas según IS 17635:2022. Proceso, documentos, pruebas, costos y cronograma para la Certificación BIS en India.";
  const ogDescription =
    "Guía completa sobre la Certificación BIS para camas según IS 17635:2022. Conoce el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicita el Certificado BIS para camas según IS 17635:2022. Aprende sobre el proceso BIS, documentos, pruebas, tarifas y cronograma en India.";
  const metaKeywords =
    "Certificado BIS para Camas, Licencia BIS para Camas, IS 17635:2022, Certificación BIS para Camas";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/camas-is-17635";
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
              "https://bis-certifications.com/blogs/isi-products/camas-is-17635",
          },
          headline: "Certificado BIS para Camas",
          description:
            "La certificación BIS para camas en India es una garantía de calidad obligatoria, principalmente bajo IS 17635:2022, que asegura estándares de seguridad, durabilidad y rendimiento.",
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
          name: "Certificado BIS para Camas",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "La certificación BIS para camas en India es una garantía de calidad obligatoria, principalmente bajo IS 17635:2022, que asegura estándares de seguridad, durabilidad y rendimiento.",
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
              name: "¿Es obligatoria la certificación BIS para camas en India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí, según IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cuál es la validez del Certificado BIS?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1–2 años, renovable.",
              },
            },
            {
              "@type": "Question",
              name: "¿Pueden aplicar fabricantes extranjeros?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí, bajo FMCS.",
              },
            },
            {
              "@type": "Question",
              name: "¿Se puede solicitar el Certificado BIS en línea?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí.",
              },
            },
            {
              "@type": "Question",
              name: "¿Es obligatoria la Marca ISI en las camas?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cuánto tiempo tarda el proceso?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30–45 días.",
              },
            },
            {
              "@type": "Question",
              name: "¿Están cubiertas tanto las camas de madera como las de metal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí, si cumplen con IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "¿Es obligatoria la inspección de fábrica?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sí.",
              },
            },
            {
              "@type": "Question",
              name: "¿Pueden los comerciantes solicitar BIS?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Solo propietarios de marca con control de fabricación.",
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
                    <Link to="/">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Blogs Recientes</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificado BIS para Camas – IS 17635:2022
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

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificado BIS para Camas – Guía Completa IS 17635:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="Licencia BIS para Camas"
            alt="Certificado BIS para Camas - Certificación BIS IS 17635:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Camas es un requisito de cumplimiento
          obligatorio en India para fabricantes e importadores de camas
          destinadas al uso doméstico y comercial. Según la última Norma India IS
          17635:2022 – Camas (Requisitos de Seguridad), todas las camas deben
          cumplir estrictos estándares de seguridad, durabilidad, estructura y
          rendimiento antes de ser vendidas en el mercado indio.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las camas son productos de mobiliario esenciales utilizados
          diariamente en hogares, hoteles, hospitales, hostales, alojamientos PG
          e instalaciones institucionales. Cualquier debilidad estructural,
          bordes afilados, fallo de materiales o baja capacidad de carga puede
          resultar en lesiones graves. Para prevenir tales riesgos, la Oficina
          de Estándares de la India (BIS) exige la{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            Certificación BIS
          </a>{" "}
          para Camas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta guía completa explica todo sobre la Licencia BIS para Camas,
          incluyendo estándares aplicables, proceso de certificación, requisitos
          de pruebas, documentos, tarifas, cronogramas, sanciones y beneficios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Aspectos Clave de la Certificación BIS para Camas
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Aspecto
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Detalles
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Producto", "Camas"],
                ["Norma India", "IS 17635:2022"],
                ["Título de la Norma", "Camas – Especificación"],
                ["Esquema de Certificación", "Certificación con Marca ISI BIS"],
                [
                  "Autoridad Reguladora",
                  "Oficina de Estándares de la India (BIS)",
                ],
                ["Marca Aplicable", "Marca ISI"],
                [
                  "Solicitantes Elegibles",
                  "Fabricantes Indios y Fabricantes Extranjeros",
                ],
                [
                  "Requisito de Cumplimiento",
                  "Obligatorio bajo la QCO de Mobiliario aplicable (Orden de Control de Calidad)",
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
                    {particular === "Esquema de Certificación" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Certificación con Marca ISI BIS
                      </a>
                    ) : particular === "Requisito de Cumplimiento" ? (
                      <>
                        Obligatorio bajo la{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>
                            QCO de Mobiliario aplicable (Orden de Control de
                            Calidad)
                          </strong>
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
          ¿Qué es la Certificación BIS para Camas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS para Camas es un proceso de evaluación de
          conformidad mediante el cual los fabricantes demuestran que sus
          productos cumplen con los requisitos especificados en IS 17635:2022.
          Una vez verificado el cumplimiento mediante pruebas, evaluación de
          fábrica y revisión regulatoria, al fabricante se le otorga una licencia
          BIS y puede colocar la Marca ISI en los productos certificados.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          El marco de certificación tiene como objetivo garantizar que las camas
          disponibles en el mercado indio satisfagan los requisitos establecidos
          relacionados con:
        </p>

        <ul className={LIST_CLASS}>
          <li>Resistencia estructural</li>
          <li>Estabilidad</li>
          <li>Durabilidad</li>
          <li>Rendimiento superficial</li>
          <li>Seguridad durante el uso normal</li>
          <li>Rendimiento bajo condiciones de uso indebido previsibles</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Estos requisitos ayudan a crear un referente consistente de calidad y
          protección al consumidor en diferentes diseños de camas y materiales
          de fabricación.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por Qué es Importante la Certificación BIS para Camas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las camas afectan directamente la seguridad del usuario porque están
          diseñadas para soportar cargas significativas durante períodos
          prolongados. Los productos mal diseñados o insuficientemente probados
          pueden experimentar fallos estructurales, inestabilidad, deformación
          o deterioro prematuro.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 aborda estas preocupaciones definiendo requisitos
          estandarizados de rendimiento y seguridad que los fabricantes deben
          satisfacer antes de que sus productos ingresen al mercado. La norma
          incluye requisitos relacionados con resistencia, estabilidad,
          durabilidad, mano de obra y rendimiento superficial.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Para los fabricantes, la certificación BIS ofrece varias ventajas:
        </p>

        <ul className={LIST_CLASS}>
          <li>Autorización legal para vender productos cubiertos en India</li>
          <li>Demostración de cumplimiento con las Normas Indias</li>
          <li>Mayor aceptación en el mercado</li>
          <li>Mayor confianza del consumidor</li>
          <li>Reducción del riesgo de acción regulatoria</li>
          <li>
            Ventaja competitiva en adquisiciones institucionales y comerciales
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Descripción General de IS 17635:2022 para Camas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Gobierno de India ha introducido Órdenes de Control de Calidad para
          varios productos de mobiliario a fin de garantizar que los productos
          colocados en el mercado cumplan con los requisitos de seguridad y
          calidad prescritos.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cuando IS 17635:2022 está cubierto bajo la QCO de Mobiliario
          aplicable, los fabricantes deben obtener la certificación BIS bajo el
          Esquema-I y usar la Marca Estándar (Marca ISI) de acuerdo con los
          requisitos de licencia BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 es la Norma India que especifica los requisitos de
          rendimiento y seguridad para camas destinadas a usuarios adultos en
          entornos domésticos y no domésticos. La norma establece requisitos que
          ayudan a garantizar que las camas permanezcan seguras, funcionales y
          duraderas durante toda su vida útil prevista.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Propósito de IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 fue desarrollada para proporcionar una norma integral
          basada en el rendimiento aplicable a los diseños modernos de camas
          fabricadas con diversos materiales y métodos de construcción. La norma
          reemplaza a la anterior IS 7259 (Parte 1):1988, que se centraba
          principalmente en camas de madera.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norma evalúa las camas sin limitar el cumplimiento a un material o
          proceso de fabricación particular. En su lugar, se centra en cómo
          rinde el producto terminado bajo las condiciones de prueba prescritas.
          Este enfoque permite una evaluación consistente de construcciones de
          camas de madera, metal, madera de ingeniería y otras.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Alcance de IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Según la norma, IS 17635:2022 cubre requisitos relacionados con el
          rendimiento y la seguridad de las camas diseñadas para usuarios adultos.
          La norma se aplica a productos destinados al uso tanto en entornos
          domésticos como no domésticos.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norma se aplica a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Camas completamente fabricadas</li>
          <li>Camas fabricadas</li>
          <li>Camas listas para ensamblar después del ensamblaje</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esto garantiza que los productos suministrados en forma ensamblada o
          desmontable se evalúen utilizando los mismos criterios de rendimiento
          y seguridad.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Objetivos de la Norma</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Los objetivos principales de IS 17635:2022 incluyen:
        </p>

        <ul className={LIST_CLASS}>
          <li>Garantizar la seguridad del usuario</li>
          <li>Verificar la resistencia estructural</li>
          <li>Evaluar la estabilidad del producto</li>
          <li>Evaluar la durabilidad bajo uso repetido</li>
          <li>Establecer requisitos mínimos de rendimiento</li>
          <li>Promover una calidad de producto consistente entre fabricantes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norma también incluye metodologías de prueba destinadas a evaluar
          las camas bajo condiciones de uso normal y escenarios de uso indebido
          razonablemente previsibles.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Productos Cubiertos Bajo IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 se aplica a camas destinadas a usuarios adultos en
          entornos domésticos y no domésticos. La norma se centra en el
          rendimiento, la seguridad, la resistencia, la estabilidad y la
          durabilidad del producto terminado, en lugar de restringir el
          cumplimiento a un material o método de fabricación específico.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norma se aplica a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Camas completamente fabricadas</li>
          <li>Camas fabricadas</li>
          <li>Camas listas para ensamblar (RTA) después del ensamblaje</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes que suministran camas en condición desmontable deben
          garantizar que el producto ensamblado cumpla con todos los requisitos
          aplicables de la norma.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>Nota:</strong> Esta norma no cubre camas de agua, colchones de
          aire, camas plegables, literas y camas para personas con necesidades
          especiales, ni las camas para fines de atención médica y médicos.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Consulte también los Productos de Mobiliario Cubiertos Bajo la
            Certificación BIS Obligatoria —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Certificación BIS para mobiliario</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos Clave Bajo IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El objetivo principal de IS 17635:2022 es garantizar que las camas
          permanezcan seguras, estables, duraderas y aptas para su propósito
          previsto durante las condiciones normales de uso. Para lograr este
          objetivo, la norma establece varios requisitos clave de rendimiento.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisitos de Estabilidad</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las camas deben demostrar una resistencia adecuada al vuelco y a la
          inestabilidad durante el uso normal. Las pruebas de estabilidad
          evalúan si el producto permanece seguro cuando se somete a condiciones
          de carga esperadas y movimientos del usuario.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Una cama estable minimiza el riesgo de accidentes y mejora la
          seguridad general del usuario.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisitos de Resistencia</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Las pruebas de resistencia evalúan la capacidad de la estructura de la
          cama para soportar cargas significativas sin fallo estructural.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Estas evaluaciones examinan típicamente:
        </p>

        <ul className={LIST_CLASS}>
          <li>Integridad del marco de la cama</li>
          <li>Resistencia de las juntas</li>
          <li>Capacidad de carga</li>
          <li>Resistencia a la deformación excesiva</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          El propósito es garantizar que el producto pueda soportar de forma
          segura a los usuarios previstos durante la operación diaria.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisitos de Durabilidad</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Las pruebas de durabilidad simulan el uso a largo plazo mediante ciclos
          repetidos de carga y movimiento.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          El objetivo es determinar si:
        </p>

        <ul className={LIST_CLASS}>
          <li>Las conexiones estructurales permanecen seguras</li>
          <li>Los componentes siguen funcionando correctamente</li>
          <li>El rendimiento del producto sigue siendo aceptable con el tiempo</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los requisitos de durabilidad ayudan a garantizar que las camas
          certificadas mantengan su fiabilidad durante toda su vida útil prevista.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Requisitos de Rendimiento Superficial
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022 hace referencia a requisitos de rendimiento superficial
          aplicables a acabados de mobiliario.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Dependiendo de la construcción y los materiales utilizados, las
          superficies pueden evaluarse por resistencia a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Daños mecánicos</li>
          <li>Calor húmedo</li>
          <li>Calor seco</li>
          <li>Manchas</li>
          <li>Rendimiento de adhesión</li>
          <li>Abrasión y desgaste</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Estos requisitos ayudan a preservar tanto la funcionalidad como la
          apariencia durante el uso normal.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Requisitos de Diseño y Mano de Obra
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norma también contiene requisitos relacionados con la calidad del
          diseño y la mano de obra.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Entre otras consideraciones:
        </p>

        <ul className={LIST_CLASS}>
          <li>
            Los bordes accesibles no deben presentar riesgos de lesión.
          </li>
          <li>Se deben evitar bordes afilados y proyecciones inseguras.</li>
          <li>
            Las secciones huecas deben cerrarse adecuadamente cuando sea
            necesario.
          </li>
          <li>
            Los componentes móviles deben diseñarse para reducir el riesgo de
            lesión.
          </li>
          <li>
            El producto terminado debe conformarse con las especificaciones de
            diseño y modelo declaradas.
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Requisitos de Seguridad</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          La seguridad es un principio fundamental en IS 17635:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norma incorpora requisitos destinados a reducir los riesgos derivados
          de:
        </p>

        <ul className={LIST_CLASS}>
          <li>Colapso estructural</li>
          <li>Bordes afilados</li>
          <li>Proyecciones inseguras</li>
          <li>Fallo de componentes</li>
          <li>Esfuerzos por uso repetido</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          El cumplimiento de estos requisitos ayuda a garantizar que las camas
          permanezcan seguras bajo uso normal y condiciones de uso indebido
          razonablemente previsibles.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Es Obligatoria la Certificación BIS para Camas en India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sí, para los productos de mobiliario cubiertos bajo la Orden de Control
          de Calidad aplicable, la certificación BIS es obligatoria antes de que
          dichos productos puedan fabricarse, importarse, venderse, distribuirse,
          almacenarse u ofrecerse en venta en India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes deben verificar el estado de la última notificación y
          las fechas de implementación emitidas por el Gobierno de India, ya que
          los requisitos regulatorios pueden actualizarse periódicamente.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Requisito de Uso de la Marca ISI
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          La Marca ISI sirve como evidencia de que un producto cumple con la
          Norma India relevante y se fabrica bajo una licencia BIS válida.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La marca solo puede aplicarse después de:
        </p>

        <ul className={LIST_CLASS}>
          <li>Pruebas de producto exitosas</li>
          <li>Evaluación de fábrica</li>
          <li>Aprobación BIS de la solicitud</li>
          <li>Otorgamiento de licencia</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          El uso no autorizado de la Marca ISI está prohibido bajo la Ley BIS de
          2016.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para Camas (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El proceso de certificación BIS en India sigue un procedimiento
          estructurado bajo el Esquema de Certificación ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 1 – Identificar Norma y Alcance del Producto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confirmar la aplicabilidad bajo IS 17635:2022 y determinar las
          variantes del producto.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 2 – Solicitud BIS (En Línea)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Enviar la solicitud a través del Portal en Línea BIS Manak con:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detalles del fabricante</li>
          <li>Dirección de la fábrica</li>
          <li>Descripción del producto</li>
          <li>Nombre de la marca</li>
          <li>Detalles de control de calidad</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 3 – Tarifas de Certificación BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pagar las tarifas aplicables incluyendo:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tarifa de solicitud</li>
          <li>Tarifa de procesamiento</li>
          <li>Cargos de pruebas</li>
          <li>Cargos de inspección</li>
          <li>Tarifas de marcado</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 4 – Pruebas del Producto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las muestras se prueban en laboratorios reconocidos por BIS.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Las Pruebas Incluyen
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de carga estática</li>
          <li>Prueba de durabilidad</li>
          <li>Prueba de estabilidad</li>
          <li>Prueba de resistencia de juntas</li>
          <li>Prueba de acabado superficial</li>
          <li>Prueba de seguridad de bordes</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 5 – Inspección de Fábrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un oficial de BIS inspecciona:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Instalación de fabricación</li>
          <li>Control de materias primas</li>
          <li>Pruebas en proceso</li>
          <li>Sistema de garantía de calidad</li>
          <li>Equipos de prueba</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 6 – Otorgamiento de Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Después del cumplimiento, BIS emite:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado BIS</li>
          <li>Permiso de Marca ISI</li>
          <li>Número CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 7 – Cumplimiento Post-Certificación
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inspecciones de vigilancia</li>
          <li>Renovación cada 1–2 años</li>
          <li>Control de calidad continuo</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para la Certificación BIS de Camas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Aquí está la lista completa de Documentos del Certificado BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos del Fabricante
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registro/licencia de fábrica</li>
          <li>Diagrama de flujo del proceso de fabricación</li>
          <li>Lista de maquinaria</li>
          <li>Lista de equipos de prueba</li>
          <li>Certificados de calibración</li>
          <li>Diseño de la fábrica</li>
          <li>Plan de control de calidad</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de dirección</li>
          <li>Prueba de identidad</li>
          <li>Autorización de marca</li>
          <li>Certificado de marca registrada (si aplica)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dibujos del producto</li>
          <li>Especificaciones</li>
          <li>Lista de materiales</li>
          <li>Informes de pruebas internas</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Pruebas para Camas (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las camas deben someterse a pruebas rigurosas para garantizar el
          cumplimiento.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Pruebas Obligatorias
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Cláusula
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requisito
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Diseño y mano de obra
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensiones
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Estabilidad
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Carga Estática Vertical en la Base de la Cama
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Carga Estática Vertical en el Barandal Lateral
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pruebas de Carga Estática Horizontal
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Impacto Vertical
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Las pruebas deben realizarse únicamente en laboratorios aprobados por
          BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes y Cómo Evitarlos
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Selección incorrecta del estándar</strong> – Siempre
            verifica la Norma India correcta.
          </li>
          <li>
            <strong>Documentación deficiente</strong> – Los documentos faltantes
            causan retrasos; prepáralos de antemano.
          </li>
          <li>
            <strong>Pruebas de laboratorio fallidas</strong> – Asegura
            materiales y construcción de alta calidad.
          </li>
          <li>
            <strong>Fábrica no preparada</strong> – Asegura que el QMS y los
            equipos de prueba estén correctamente mantenidos.
          </li>
          <li>
            <strong>Desajuste de marca registrada</strong> – El nombre de la
            marca debe coincidir con la solicitud de licencia.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanciones por Incumplimiento
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vender camas sin certificación BIS puede llevar a:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Multas severas</li>
          <li>Incautación de productos</li>
          <li>Cierre del negocio</li>
          <li>Acción legal</li>
          <li>Prohibición del mercado</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por qué Elegirnos para la Certificación BIS de Camas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Proporcionamos consultoría BIS de extremo a extremo, incluyendo:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mapeo de estándares</li>
          <li>Soporte de documentación</li>
          <li>Coordinación de pruebas</li>
          <li>Presentación de solicitudes</li>
          <li>Manejo de inspecciones de fábrica</li>
          <li>Enlace con BIS</li>
          <li>Emisión de licencias</li>
          <li>Soporte de renovación y vigilancia</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Camas bajo IS 17635:2022 es un requisito legal
          obligatorio que garantiza la seguridad, calidad y durabilidad. Obtener
          una Licencia BIS para Camas protege a los consumidores, fortalece el
          valor de la marca y permite el acceso legal al mercado en toda India.
          Con el apoyo de expertos, el proceso de certificación se vuelve fluido
          y eficiente.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes – Certificado BIS para Camas
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. ¿Es obligatoria la certificación BIS para camas en India?
              </strong>
              <br />
              Sí, según IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ¿Cuál es la validez del Certificado BIS?</strong>
              <br />
              1–2 años, renovable.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ¿Pueden aplicar fabricantes extranjeros?</strong>
              <br />
              Sí, bajo FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. ¿Se puede solicitar el Certificado BIS en línea?
              </strong>
              <br />
              Sí.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ¿Es obligatoria la Marca ISI en las camas?</strong>
              <br />
              Sí.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ¿Cuánto tiempo tarda el proceso?</strong>
              <br />
              30–45 días.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. ¿Están cubiertas tanto las camas de madera como las de metal?
              </strong>
              <br />
              Sí, si cumplen con IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ¿Es obligatoria la inspección de fábrica?</strong>
              <br />
              Sí.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. ¿Pueden los comerciantes solicitar BIS?</strong>
              <br />
              Solo propietarios de marca con control de fabricación.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="Certificado BIS para Camas - IS 17635:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Recursos Relacionados
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Certificado de Marca ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Licencia BIS FMCS
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadSpanish />

        <FaqAuthorSpanish questionNumber={1} />
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
