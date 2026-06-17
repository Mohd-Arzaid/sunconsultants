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
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterSpanish from "@/components/manual/Footer/FooterSpanish";
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

const BISCertificateForChairAndStoolsSpanish = () => {
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

export default BISCertificateForChairAndStoolsSpanish;

const MetaTags = () => {
  const title =
    "Certificación BIS para Sillas y Taburetes de Uso General | IS 17632:2022";
  const ogTitle =
    "Certificación BIS para Sillas y Taburetes de Uso General | IS 17632:2022";
  const twitterTitle =
    "Certificación BIS para Sillas y Taburetes de Uso General | IS 17632:2022";
  const metaDescription =
    "Conozca todo sobre la Certificación BIS para Sillas y Taburetes de Uso General según IS 17632:2022. Comprenda los requisitos de la Marca ISI, pruebas, proceso de certificación, documentos, beneficios y preguntas frecuentes";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "Certificación BIS para Sillas y Taburetes de Uso General, IS 17632:2022, Marca ISI Sillas y Taburetes, Licencia BIS Sillas Taburetes, Certificación BIS Muebles";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/sillas-y-taburetes-is-17632";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Director de Operaciones en Sun Certification India";

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
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/yizi-he-dengzi-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stoelen-en-krukken-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-et-tabourets-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/stuhle-und-hocker-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-dan-bangku-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-e-sgabelli-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-y-taburetes-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-lae-mang-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632"
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
                    Certificación BIS para Sillas y Taburetes de Uso General (IS
                    17632:2022)
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
          Certificación BIS para Sillas y Taburetes de Uso General (IS 17632:2022)
          – Guía Completa de Certificación de Marca ISI
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="Licencia BIS para Sillas y Taburetes de Uso General"
            alt="Certificación BIS para Sillas y Taburetes de Uso General - Guía de Marca ISI IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las sillas y taburetes de uso general se encuentran entre los productos
          de mobiliario más utilizados en hogares, oficinas, instituciones
          educativas, centros de salud, establecimientos comerciales, espacios
          públicos y entornos comerciales. Dado que estos productos de asiento
          están sujetos a un uso regular y prolongado, deben cumplir con
          requisitos específicos de calidad, seguridad, resistencia y
          durabilidad para garantizar un rendimiento confiable.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con el creciente énfasis en la calidad del producto y la seguridad del
          consumidor, el cumplimiento de las Normas Indias se ha convertido en un
          requisito importante para fabricantes e importadores de muebles. La
          Certificación BIS para Sillas y Taburetes de Uso General según IS
          17632:2022 ayuda a garantizar que los productos cumplan con los
          requisitos de rendimiento y seguridad prescritos antes de ser
          comercializados en el mercado indio.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificación bajo la Oficina de Normas de India (BIS) permite a
          los fabricantes usar la Marca ISI en productos conformes. La Marca ISI
          sirve como garantía de que el producto cumple con las normas indias de
          calidad reconocidas y ha pasado por el proceso de evaluación requerido.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A medida que la industria del mobiliario continúa creciendo y las
          agencias de adquisición prefieren cada vez más productos certificados,
          la Certificación BIS se ha convertido en un requisito importante de
          cumplimiento y acceso al mercado para los fabricantes.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Aspectos Clave de la Certificación BIS para Sillas y Taburetes de Uso
          General
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Particular
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Detalles
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Nombre del Producto", "Sillas y Taburetes de Uso General"],
                ["Norma India Aplicable", "IS 17632:2022"],
                ["Tipo de Certificación", "Certificación de Producto BIS"],
                [
                  "Esquema de Certificación",
                  "Esquema-I (Certificación de Marca ISI)",
                ],
                ["Marca Aplicable", "Marca ISI"],
                [
                  "Autoridad Regulatoria",
                  "Oficina de Normas de India (BIS)",
                ],
                ["Ministerio Aplicable", "Ministerio de Comercio e Industria"],
                [
                  "Requisito de Cumplimiento",
                  "Obligatorio bajo la QCO de Muebles aplicable (Orden de Control de Calidad)",
                ],
                ["Categoría del Producto", "Muebles"],
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
                        Esquema-I (Certificación de Marca ISI)
                      </a>
                    ) : particular === "Requisito de Cumplimiento" ? (
                      <>
                        Obligatorio bajo la{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>
                            QCO de Muebles (Orden de Control de Calidad)
                          </strong>
                        </a>{" "}
                        aplicable
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
          ¿Qué es la Certificación BIS para Sillas y Taburetes de Uso General?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS para Sillas y Taburetes de Uso General es un
          proceso de evaluación de conformidad realizado bajo el Esquema de
          Certificación de Productos BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          El objetivo de la certificación es verificar que el producto cumple con
          los requisitos especificados en IS 17632:2022. Una vez otorgada la
          certificación, los fabricantes están autorizados a usar la Marca ISI en
          sus productos.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          El proceso de certificación evalúa varios aspectos del rendimiento del
          producto, incluyendo:
        </p>

        <ul className={LIST_CLASS}>
          <li>Resistencia</li>
          <li>Estabilidad</li>
          <li>Durabilidad</li>
          <li>Rendimiento estructural</li>
          <li>Requisitos de seguridad</li>
          <li>Calidad de los materiales</li>
          <li>Mano de obra</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificación ayuda a garantizar que los productos de asiento
          suministrados en el mercado indio cumplan con los referentes
          establecidos de calidad y seguridad.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Resumen de IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 es la Norma India que especifica los requisitos para
          Sillas y Taburetes de Uso General.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norma establece requisitos relacionados con la seguridad, la
          resistencia, la durabilidad, la estabilidad y el rendimiento general
          del mobiliario de asiento destinado al uso general.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norma se aplica a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Sillas y taburetes completamente fabricados</li>
          <li>Sillas y taburetes fabricados</li>
          <li>Productos listos para ensamblar después del ensamblaje</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          El propósito de la norma es garantizar que los productos de mobiliario
          proporcionen un rendimiento seguro, confiable y duradero durante toda
          su vida útil prevista.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos Clave bajo IS 17632:2022
        </h2>

        <h3 className={SUB_HEADING_CLASS}>Requisitos de Resistencia</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Las sillas y taburetes de uso general deben poseer una resistencia
          estructural adecuada para soportar las condiciones de carga previstas
          durante el uso normal.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisitos de Estabilidad</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El mobiliario debe permanecer estable durante el uso previsto y no
          debe presentar riesgos innecesarios de vuelco.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisitos de Durabilidad</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los productos deben ser capaces de mantener su integridad estructural y
          rendimiento a lo largo de ciclos de uso repetidos.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requisitos de Seguridad</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La norma incluye requisitos relacionados con la seguridad destinados a
          minimizar los riesgos asociados con el uso del mobiliario.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Calidad de los Materiales y Mano de Obra
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La calidad de los materiales, las prácticas de fabricación, los
          métodos de ensamblaje, las uniones y el acabado contribuyen
          significativamente al cumplimiento de la norma.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Consideraciones Ergonómicas</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La norma incorpora consideraciones relacionadas con el rendimiento que
          contribuyen a la comodidad del usuario y la funcionalidad práctica.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Productos Cubiertos bajo IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norma generalmente se aplica a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Sillas de uso general</li>
          <li>Taburetes de uso general</li>
          <li>Mobiliario de asiento fijo destinado al uso general</li>
          <li>Productos de asiento listos para ensamblar después del ensamblaje</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes deben revisar cuidadosamente el alcance de la norma para
          determinar la aplicabilidad a sus productos.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            También consulte los Productos de Muebles Cubiertos bajo la
            Certificación BIS Obligatoria —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Certificación BIS para muebles</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Es Obligatoria la Certificación BIS para Sillas y Taburetes de Uso
          General?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sí. Los productos de mobiliario cubiertos bajo la Orden de Control de
          Calidad de Muebles (QCO) aplicable deben cumplir con la Norma India
          relevante y obtener la Certificación BIS antes de ser fabricados,
          importados, vendidos, distribuidos o suministrados en el mercado indio.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes cubiertos bajo el marco regulatorio aplicable deben
          obtener una licencia BIS y cumplir con los requisitos de marcado
          prescritos por BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Prueba para la Certificación BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Antes de otorgar la certificación, las muestras del producto deben ser
          evaluadas mediante pruebas realizadas en laboratorios reconocidos.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Las pruebas generalmente se centran en los siguientes parámetros:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Evaluación del Rendimiento Estructural —</strong> Determina
            si la silla o taburete puede soportar las condiciones de uso normal
            sin fallar.
          </li>
          <li>
            <strong>Prueba de Estabilidad —</strong> Evalúa si el mobiliario
            permanece estable durante el uso previsto y resiste el vuelco.
          </li>
          <li>
            <strong>Evaluación de Resistencia —</strong> Evalúa la capacidad de
            carga y la integridad estructural de marcos, uniones y soportes.
          </li>
          <li>
            <strong>Evaluación de Durabilidad —</strong> Verifica la retención
            del rendimiento después de ciclos de uso repetidos durante la vida
            útil del producto.
          </li>
          <li>
            <strong>Evaluación de Seguridad —</strong> Identifica posibles
            peligros y verifica el cumplimiento con los requisitos de seguridad
            prescritos.
          </li>
          <li>
            <strong>Inspección de Mano de Obra —</strong> Revisa la calidad de
            construcción, el acabado, la integridad del ensamblaje y los
            estándares generales de fabricación.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Marcado del Producto
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Los productos certificados bajo IS 17632:2022 generalmente deben llevar
          información identificativa como:
        </p>

        <ul className={LIST_CLASS}>
          <li>Nombre o marca comercial del fabricante</li>
          <li>Identificación del modelo o diseño</li>
          <li>Número de lote</li>
          <li>Fecha de fabricación</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Marca ISI solo puede aplicarse después de obtener una licencia BIS
          válida.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para Sillas y Taburetes de Uso General
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 1: Evaluación del Alcance del Producto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El primer paso consiste en determinar si el producto entra dentro del
          alcance de IS 17632:2022 y la QCO de Muebles aplicable.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Revise el tipo de silla o taburete, el uso previsto, los materiales y
          la construcción antes de iniciar el proceso de certificación.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 2: Preparación de Documentación
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El fabricante prepara la documentación técnica y de cumplimiento
          requerida para la certificación, incluyendo registros de la empresa,
          detalles de la fábrica, especificaciones del producto y procedimientos
          de control de calidad.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Una documentación completa y precisa ayuda a evitar retrasos innecesarios
          durante la revisión de BIS.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Paso 3: Pruebas del Producto</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Las muestras representativas se prueban en un laboratorio reconocido por
          BIS para verificar el cumplimiento con los requisitos de IS 17632:2022.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          El informe de pruebas del laboratorio es un documento técnico clave que
          respalda la solicitud de certificación.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 4: Presentación de la Solicitud BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La solicitud de certificación se presenta junto con la documentación de
          respaldo, los informes de prueba y la información de fabricación.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          BIS revisa la solicitud para verificar su integridad y cumplimiento
          técnico antes de continuar.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Paso 5: Inspección de Fábrica</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS puede evaluar la instalación de fabricación, los sistemas de
          producción y los procesos de control de calidad para verificar la
          capacidad de producir productos conformes de manera consistente.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Esta evaluación generalmente cubre la infraestructura de producción,
          los sistemas de control de calidad, los controles de materias primas y
          la trazabilidad del producto.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Paso 6: Revisión Técnica</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La solicitud, los informes de prueba y los hallazgos de la inspección
          son revisados por BIS antes de tomar una decisión de certificación.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Cualquier observación o deficiencia planteada durante la revisión debe
          ser atendida por el solicitante.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Paso 7: Otorgamiento de Licencia</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tras un cumplimiento satisfactorio, BIS otorga la licencia y autoriza
          el uso de la Marca ISI en sillas y taburetes de uso general
          certificados.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes deben continuar cumpliendo con los requisitos de BIS
          durante todo el período de la licencia.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la Certificación BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Cumplimiento con las Regulaciones Indias —</strong> Cumpla
            con los requisitos obligatorios de calidad y seguridad bajo la QCO de
            Muebles aplicable.
          </li>
          <li>
            <strong>Acceso Legal al Mercado —</strong> Suministre sillas y
            taburetes certificados en India de acuerdo con los requisitos
            regulatorios aplicables.
          </li>
          <li>
            <strong>Mayor Credibilidad del Producto —</strong> La Marca ISI
            demuestra conformidad con las normas indias reconocidas.
          </li>
          <li>
            <strong>Mayor Confianza del Cliente —</strong> Los consumidores y
            compradores institucionales prefieren productos evaluados según
            referentes establecidos.
          </li>
          <li>
            <strong>Ventaja Competitiva —</strong> Mayor aceptación en procesos
            de adquisición comercial y gubernamental.
          </li>
          <li>
            <strong>Mejor Reputación de Marca —</strong> Demuestra compromiso con
            la calidad del producto, la seguridad y la fiabilidad a largo plazo.
          </li>
          <li>
            <strong>Apoyo a las MIPYMES —</strong> Ayuda a los fabricantes
            pequeños y medianos a fortalecer su presencia en el mercado y
            generar confianza del cliente.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes Durante la Certificación
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Fallos en las Pruebas del Producto —</strong> Deficiencias
            de diseño o fabricación pueden resultar en incumplimiento durante la
            evaluación en laboratorio.
          </li>
          <li>
            <strong>Problemas de Documentación —</strong> Registros incompletos o
            inconsistentes frecuentemente causan retrasos en la certificación.
          </li>
          <li>
            <strong>Brechas de Cumplimiento en la Fabricación —</strong> Los
            sistemas de control de calidad pueden requerir mejoras antes de que
            se pueda otorgar la certificación.
          </li>
          <li>
            <strong>Complejidad Regulatoria —</strong> Gestionar pruebas,
            inspecciones y procedimientos de certificación puede ser desafiante
            sin orientación experta.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por Qué Elegir Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India asiste a fabricantes, importadores,
          exportadores y empresas con los requisitos de cumplimiento regulatorio
          en toda India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nuestros servicios incluyen:
        </p>

        <ul className={LIST_CLASS}>
          <li>Evaluación de aplicabilidad del producto</li>
          <li>Consultoría de certificación BIS</li>
          <li>Apoyo con documentación</li>
          <li>Coordinación de pruebas de laboratorio</li>
          <li>Preparación para inspección de fábrica</li>
          <li>Gestión de solicitudes</li>
          <li>Asistencia en cumplimiento regulatorio</li>
          <li>Apoyo post-certificación</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nuestro objetivo es ayudar a los clientes a navegar los requisitos de
          certificación de manera eficiente y lograr el cumplimiento con
          retrasos mínimos.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS para Sillas y Taburetes de Uso General según IS
          17632:2022 desempeña un papel importante en garantizar la calidad del
          producto, la seguridad, la resistencia, la estabilidad y la
          durabilidad. La certificación ayuda a los fabricantes a demostrar el
          cumplimiento con las Normas Indias mientras fortalece la confianza del
          cliente y apoya el acceso al mercado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A medida que la demanda de productos de mobiliario con calidad
          garantizada continúa creciendo, la Certificación BIS y la Marca ISI
          proporcionan una valiosa garantía para consumidores, instituciones y
          agencias de adquisición. Los fabricantes que invierten en el
          cumplimiento no solo satisfacen los requisitos regulatorios, sino que
          también mejoran su competitividad y reputación en el mercado a largo
          plazo.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Si planea obtener la Certificación BIS para Sillas y Taburetes de Uso
          General según IS 17632:2022, Sun Certifications India puede
          proporcionar orientación experta y apoyo integral de cumplimiento a lo
          largo de todo el proceso de certificación.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes – Certificación BIS para Sillas y Taburetes de Uso
          General (IS 17632:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. ¿Qué es IS 17632:2022?</strong>
              <br />
              IS 17632:2022 es la Norma India que especifica los requisitos para
              Sillas y Taburetes de Uso General.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. ¿Es obligatoria la Certificación BIS para Sillas y Taburetes
                de Uso General?
              </strong>
              <br />
              Los productos cubiertos bajo la Orden de Control de Calidad de
              Muebles aplicable deben cumplir con los requisitos de certificación
              BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ¿Qué es la Marca ISI?</strong>
              <br />
              La Marca ISI es la marca de certificación estándar emitida bajo el
              Esquema de Certificación de Productos BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ¿Quién puede solicitar la Certificación BIS?</strong>
              <br />
              Tanto fabricantes indios como fabricantes extranjeros pueden
              solicitar la certificación.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. ¿La Certificación BIS requiere pruebas del producto?
              </strong>
              <br />
              Sí. Las pruebas del producto son un componente importante del
              proceso de certificación.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. ¿Las sillas listas para ensamblar están cubiertas bajo IS
                17632:2022?
              </strong>
              <br />
              Sí. La norma se aplica a productos listos para ensamblar después
              del ensamblaje.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. ¿Qué productos están excluidos del alcance de IS 17632:2022?
              </strong>
              <br />
              Productos como sillas reclinables, mecedoras, sillas basculantes,
              sofás y ciertos productos de asiento especializados generalmente
              están excluidos.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. ¿Cuáles son los beneficios de obtener la Certificación BIS?
              </strong>
              <br />
              Los beneficios incluyen cumplimiento regulatorio, mayor credibilidad
              del producto, mayor confianza del cliente y mejor aceptación en el
              mercado.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. ¿Pueden los fabricantes extranjeros obtener la Certificación
                BIS?
              </strong>
              <br />
              Sí. Los fabricantes extranjeros pueden solicitar a través de la
              ruta de certificación BIS aplicable para fabricantes en el extranjero.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ¿Cómo puede ayudar Sun Certifications India?</strong>
              <br />
              Sun Certifications India proporciona apoyo integral para la
              certificación BIS, incluyendo documentación, coordinación de pruebas,
              gestión de solicitudes y asistencia en cumplimiento.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="Certificado BIS para Sillas y Taburetes - IS 17632:2022 PDF"
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
              Certificación ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Certificación BIS para Fabricantes Extranjeros
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
                alt="BIS Logo"
                title="BIS Logo"
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
