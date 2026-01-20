import FaqAuthorSpanish from "@/components/common/FaqAuthor/FaqAuthorSpanish";
import ManyUsersAlsoReadSpanish from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadSpanish";
import ServicesRightSideContentSpanish from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentSpanish";
import FooterSpanish from "@/components/manual/Footer/FooterSpanish";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForStorageUnitSpanish = () => {
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

export default BISCertificateForStorageUnitSpanish;

const MetaTags = () => {
  const title = "Certificado BIS para Unidades de Almacenamiento | IS 17634:2022 BIS License";
  const ogTitle = "Certificación BIS para Unidades de Almacenamiento – IS 17634:2022 Guía";
  const twitterTitle = "Licencia BIS para Unidades de Almacenamiento | IS 17634:2022";
  const metaDescription =
    "Obtenga el Certificado BIS para Unidades de Almacenamiento bajo IS 17634:2022. Proceso, documentos, pruebas, costos y plazos para la Certificación BIS en India.";
  const ogDescription =
    "Guía completa para la Certificación BIS para Unidades de Almacenamiento según IS 17634:2022. Conoce el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicite el Certificado BIS para Unidades de Almacenamiento bajo IS 17634:2022. Aprenda el proceso BIS, documentos, pruebas, tarifas y plazos en India.";
  const metaKeywords =
    "Certificado BIS para Unidades de Almacenamiento, Licencia BIS para Unidades de Almacenamiento, IS 17634:2022, Certificación BIS para Unidades de Almacenamiento";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/unidades-de-almacenamiento-is-17634";
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
                    <Link to="/Blogs">Latest Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificado BIS para Unidades de Almacenamiento – IS 17634:2022
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
          Certificado BIS para Unidades de Almacenamiento – Guía Completa de Certificación BIS IS 17634:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforStorageUnits.png"
            title="Licencia BIS para Unidades de Almacenamiento"
            alt="Certificado BIS para Unidades de Almacenamiento - IS 17634:2022 Certificación BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Unidades de Almacenamiento es un requisito obligatorio según la Norma India IS 17634:2022. Esta norma cubre los requisitos esenciales de seguridad, durabilidad y rendimiento estructural para todos los tipos de muebles de almacenamiento utilizados en hogares, oficinas, escuelas, establecimientos comerciales e instalaciones industriales.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Las unidades de almacenamiento incluyen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Armarios</li>
          <li>Guardarropas</li>
          <li>Unidades de estantería</li>
          <li>Cajones y cómodas</li>
          <li>Archiveros</li>
          <li>Unidades de almacenamiento laterales</li>
          <li>Sistemas de almacenamiento modulares</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dado que las unidades de almacenamiento se utilizan ampliamente en espacios residenciales y comerciales, su estabilidad estructural y seguridad son extremadamente importantes. Las unidades de almacenamiento de baja calidad pueden volcarse, colapsar o causar lesiones debido a bordes afilados, uniones débiles o construcción inestable. Para garantizar la seguridad del cliente y la calidad del producto, la Certificación BIS para Unidades de Almacenamiento es obligatoria en India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta guía completa explica IS 17634:2022, requisitos de certificación, proceso BIS, documentación, pruebas, tarifas, plazos, sanciones y beneficios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS es una evaluación de conformidad de terceros emitida por la Oficina de Normas de la India, que garantiza que los productos cumplan con las normas de seguridad y calidad de la India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado del Certificado BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un Certificado BIS verifica que un producto:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cumple con las Normas de la India</li>
          <li>Ha pasado las pruebas de laboratorio</li>
          <li>Ha sido sometido a inspección de fábrica</li>
          <li>Sigue un control de calidad continuo</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los productos certificados llevan la Marca BIS (Marca ISI).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué Norma BIS se Aplica a las Unidades de Almacenamiento? (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Norma BIS obligatoria para unidades de almacenamiento es:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17634:2022</strong> – Unidades de Almacenamiento: Requisitos de Seguridad
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Esta norma cubre todos los tipos de muebles de almacenamiento. Define los requisitos de seguridad, durabilidad, capacidad de carga y diseño para garantizar un uso seguro en condiciones operativas diarias.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Requisitos Clave de IS 17634:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Estabilidad estructural</li>
          <li>Rendimiento de carga</li>
          <li>Resistencia de cajones</li>
          <li>Resistencia al vuelco</li>
          <li>Calidad del material</li>
          <li>Seguridad de bordes</li>
          <li>Acabado superficial</li>
          <li>Durabilidad bajo uso repetido</li>
          <li>Ausencia de peligros de atrapamiento</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ya sea fabricado en India o importado, todas las unidades de almacenamiento deben someterse al Registro BIS para Unidades de Almacenamiento antes de la venta.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por Qué la Certificación BIS para Unidades de Almacenamiento es Obligatoria?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las unidades de almacenamiento se utilizan ampliamente y a menudo soportan cargas pesadas. Una falla estructural puede resultar en lesiones graves o daños a la propiedad.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Razones por las que se Requiere la Certificación BIS
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Previene peligros de vuelco</li>
          <li>Garantiza la capacidad de carga</li>
          <li>Mejora la durabilidad y vida útil</li>
          <li>Elimina bordes afilados y acabados peligrosos</li>
          <li>Garantiza la seguridad infantil en uso residencial</li>
          <li>Armoniza la calidad del producto</li>
          <li>Obligatorio bajo Órdenes de Control de Calidad BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ningún fabricante o importador puede vender legalmente unidades de almacenamiento sin una Licencia BIS para Unidades de Almacenamiento.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para Unidades de Almacenamiento (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificación sigue el Esquema ISI (Esquema de Evaluación de Conformidad-I) que involucra pruebas de productos e inspección de fábrica.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 1 – Identificar Aplicabilidad
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Analizar si el modelo de mueble de almacenamiento se incluye en:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Armarios, estantes, cajones, unidades de guardarropa, unidades de archivo o muebles similares.
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confirmar la norma correcta: IS 17634:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 2 – Presentación de Solicitud BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Solicitar en línea a través del Portal en Línea BIS Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">Presentar:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detalles del negocio</li>
          <li>Información de la unidad de fabricación</li>
          <li>Clasificación del producto</li>
          <li>Nombre de la marca</li>
          <li>Diagramas de flujo del proceso</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 3 – Pagar Tarifas BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Incluye:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tarifa de solicitud</li>
          <li>Tarifa de procesamiento</li>
          <li>Tarifa de pruebas de productos</li>
          <li>Cargos de inspección de fábrica</li>
          <li>Tarifa de marcado</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 4 – Pruebas de Producto (Requisitos IS 17634:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las muestras se prueban en un laboratorio reconocido por BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          El laboratorio evalúa:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Estabilidad</li>
          <li>Resistencia estructural</li>
          <li>Capacidad de carga</li>
          <li>Durabilidad de cajones</li>
          <li>Resistencia de estantes</li>
          <li>Seguridad de bordes y esquinas</li>
          <li>Límites de sustancias peligrosas</li>
          <li>Rendimiento bajo uso repetido</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los resultados de las pruebas deben reflejar el cumplimiento total.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 5 – Inspección de Fábrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un oficial de BIS verifica:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proceso de fabricación</li>
          <li>Sistema de control de calidad</li>
          <li>Inspecciones de materias primas</li>
          <li>Capacidad de pruebas internas</li>
          <li>Calibración de instrumentos</li>
          <li>Cumplimiento del Esquema de Pruebas e Inspección (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 6 – Otorgamiento de Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tras una evaluación exitosa, BIS emite:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado BIS</li>
          <li>Permiso para usar la Marca ISI</li>
          <li>Número CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 7 – Requisitos Post-Licencia
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cumplir con los requisitos de marcado</li>
          <li>Mantener sistemas de calidad</li>
          <li>Inspecciones de vigilancia BIS</li>
          <li>Renovación de licencia cada 1-2 años</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Alcance de la Licencia BIS para Unidades de Almacenamiento
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Esta norma cubre los requisitos relacionados con el rendimiento y la seguridad de las unidades de almacenamiento, incluidas sus partes móviles y no móviles destinadas al uso doméstico y al uso institucional como archivo de documentos o similar.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Esta norma se aplica a unidades de almacenamiento completamente fabricadas. También se aplica a unidades listas para ensamblar, en cuyo caso los requisitos de esta norma se aplicarán a las unidades ensambladas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para la Certificación BIS de Unidades de Almacenamiento
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          A continuación se encuentra la lista completa de DOCUMENTOS DE CERTIFICACIÓN BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Documentos de Fabricación
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado de registro de fábrica</li>
          <li>Plan de distribución</li>
          <li>Diagrama de flujo del proceso de fabricación</li>
          <li>Lista de maquinaria</li>
          <li>Lista de equipos de prueba</li>
          <li>Certificados de calibración</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Documentos Legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de identidad</li>
          <li>Prueba de dirección</li>
          <li>Autorización de marca (si aplica)</li>
          <li>Certificado de marca registrada (opcional pero recomendado)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Documentos Técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dibujos del producto</li>
          <li>Diagramas de ensamblaje</li>
          <li>Lista de materiales</li>
          <li>Informes de pruebas internas</li>
          <li>Características de seguridad</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Documentos de Solicitud BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulario de solicitud</li>
          <li>Cartas de autorización de fábrica</li>
          <li>Carta de solicitud de prueba</li>
          <li>Formularios de declaración</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tener documentación completa ayuda a evitar retrasos en el procesamiento.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Pruebas para Unidades de Almacenamiento (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las pruebas rigurosas garantizan que el producto cumpla con los estándares de seguridad y durabilidad.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Pruebas Principales Bajo IS 17634:2022
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
                  Design and workmanship
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimension
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  General
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Deflection of shelves
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of shelf supports
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sustained load test for tops and bottoms
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of clothes-rail supports
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dislodgement of clothes rails
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test for structure and underframe
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Drop test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tests for units with castors or wheels
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of pivoted doors
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam-shut test of pivoted doors
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam shut/open test of sliding doors and horizontal
                  roll-fronts
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of bottom-hinged flaps
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Drop test for top-hinged flaps
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam shut/open test of vertical roll-fronts
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of extension elements
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.4 / 7.3.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam shut/open test of extension elements / Displacement of
                  extension element bottoms
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Interlock test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength test for locking and latching mechanisms for
                  extension elements
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Locking and latching mechanisms for doors, flaps and
                  roll-fronts
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pull Force Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Top Load Ease Cycle Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.10
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Drop Test – Dynamic – for Units with Seat Surfaces
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Movable parts, shelf supports, tops and bottoms
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sustained load test (overload)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dislodgement test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Units Supported by the Floor
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Units that can be adjusted to a Height of 1 000 mm or less
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Units that can be adjusted to a height
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Opening Doors, Extension Elements and Flaps, All Storage Units
                  Unloaded
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  All storage areas unloaded and all doors, extension elements
                  and flaps open
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  All storage areas unloaded with overturning load
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  All storage areas loaded with overturning load
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Doors, Extension Elements and Flaps Closed and Locked, All
                  Storage Units Loaded
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertical Force Stability Test for Storage Units
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stability Test for Pedestals/Storage Units with Seat Surfaces
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dynamic Stability Test for Units with Castors
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength Test for Wall Attachments
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Las pruebas son obligatorias y deben realizarse únicamente en un laboratorio aprobado por BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes y Cómo Evitarlos
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Clasificación Incorrecta de la Unidad de Almacenamiento</strong>
            <br />
            Siempre confirmar el alcance bajo IS 17634:2022.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Fábrica No Preparada</strong>
            <br />
            QMS, calibración y pruebas internas deben estar listas antes de la inspección.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Falla en las Pruebas del Producto</strong>
            <br />
            Asegurar:
          </p>
          <ul className="list-disc ml-6 mb-2 space-y-1 text-gray-600 text-base font-geist">
            <li>Resistencia de estantes</li>
            <li>Durabilidad de cajones</li>
            <li>Estabilidad anti-vuelco</li>
          </ul>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Documentos Faltantes</strong>
            <br />
            Evitar retrasos preparando la documentación con anticipación.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Desajuste del Nombre de la Marca</strong>
            <br />
            Debe coincidir con la marca registrada y la etiqueta.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la Certificación BIS para Unidades de Almacenamiento
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cumplimiento legal obligatorio</li>
          <li>Garantía de seguridad del cliente</li>
          <li>Mayor credibilidad en el mercado</li>
          <li>Elegibilidad para comercio electrónico y cadenas minoristas</li>
          <li>Reducción del riesgo de falla del producto</li>
          <li>Elegibilidad para licitaciones gubernamentales</li>
          <li>Diferenciación de marca</li>
          <li>Mayor confianza del consumidor</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanciones por Incumplimiento
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vender o importar unidades de almacenamiento sin aprobación BIS puede resultar en:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Multas severas</li>
          <li>Incautación de productos</li>
          <li>Prohibición de fabricación</li>
          <li>Procesamiento penal</li>
          <li>Lista negra de marca</li>
          <li>Retiro del mercado</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          El cumplimiento es obligatorio bajo las reglas BIS y las Órdenes de Control de Calidad (QCO).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Quién Necesita la Certificación BIS para Unidades de Almacenamiento?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Fabricantes extranjeros</li>
          <li>Importadores</li>
          <li>Comerciantes (propietarios de marcas)</li>
          <li>Proveedores OEM y ODM</li>
          <li>Marcas de muebles minoristas y en línea</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cada fábrica necesita una licencia BIS separada.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por Qué Elegirnos para Consultoría de Certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Proporcionamos soporte completo de extremo a extremo:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretación de normas (IS 17634:2022)</li>
          <li>Clasificación de productos</li>
          <li>Preparación de documentación</li>
          <li>Coordinación con laboratorios reconocidos por BIS</li>
          <li>Soporte de pruebas</li>
          <li>Presentación en portal BIS</li>
          <li>Orientación para inspección de fábrica</li>
          <li>Aprobación de licencia</li>
          <li>Renovación y vigilancia</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nuestra experiencia garantiza un proceso de certificación rápido, fluido y sin errores.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtener el Certificado BIS para Unidades de Almacenamiento bajo IS 17634:2022 es esencial para garantizar la seguridad del producto, el rendimiento estructural y la durabilidad. También es un requisito legal obligatorio para vender o importar muebles de almacenamiento en India. Con la documentación adecuada, pruebas y orientación experta, el proceso de certificación se vuelve fluido.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nuestro equipo dedicado de consultoría BIS garantiza aprobación rápida, documentación precisa y soporte de cumplimiento de extremo a extremo para fabricantes e importadores.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes — Certificado BIS para Unidades de Almacenamiento (IS 17634:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. ¿Es obligatoria la certificación BIS para unidades de almacenamiento en India?
              </strong>
              <br />
              Sí. La Certificación BIS para Unidades de Almacenamiento es obligatoria según la Norma India IS 17634:2022 – Unidades de Almacenamiento: Requisitos de Seguridad. Esta norma ha sido incluida bajo una Orden de Control de Calidad (QCO), lo que significa que ningún fabricante, importador o vendedor está legalmente autorizado a vender unidades de almacenamiento en el mercado indio sin aprobación BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. ¿Qué tipos de unidades de almacenamiento están cubiertos bajo IS 17634:2022?
              </strong>
              <br />
              IS 17634:2022 se aplica a una amplia gama de muebles de almacenamiento utilizados en espacios residenciales, comerciales e institucionales.
              <br />
              La norma cubre:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Armarios (de madera, metal, modulares)</li>
              <li>Alacenas y guardarropas</li>
              <li>Unidades de estantería</li>
              <li>Archiveros</li>
              <li>Unidades de cajones y cómodas</li>
              <li>Alacenas laterales y sistemas de almacenamiento modulares</li>
              <li>Unidades de almacenamiento de oficina</li>
              <li>Muebles de almacenamiento compactos</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. ¿Qué pruebas se realizan para la Certificación BIS de unidades de almacenamiento?
              </strong>
              <br />
              Las unidades de almacenamiento se someten a varias pruebas obligatorias para evaluar su durabilidad, resistencia, seguridad y rendimiento.
              <br />
              Las pruebas clave incluyen:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>
                Prueba de Estabilidad: Garantiza que la unidad no se vuelque durante el uso o la extensión del cajón.
              </li>
              <li>
                Prueba de Carga Estática: Mide la capacidad de carga de estantes, cajones y estructura principal.
              </li>
              <li>
                Prueba de Durabilidad/Resistencia: Verifica el rendimiento de cajones, puertas y estantes durante ciclos de uso repetido.
              </li>
              <li>
                Prueba de Resistencia de Estantes: Evalúa la flexión o pandeo bajo carga.
              </li>
              <li>
                Prueba de Impacto: Garantiza la resistencia estructural a impactos accidentales.
              </li>
              <li>
                Prueba de Resistencia al Vuelco: Verifica el rendimiento anti-vuelco cuando los cajones están completamente cargados y extendidos.
              </li>
              <li>
                Prueba de Seguridad de Bordes y Acabado: Garantiza que no haya bordes afilados o acabados peligrosos.
              </li>
              <li>Prueba de Seguridad de Materiales: Confirma materiales no tóxicos y seguros.</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. ¿Cuánto tiempo toma el proceso de certificación BIS para unidades de almacenamiento?
              </strong>
              <br />
              El plazo típico de Certificación BIS para unidades de almacenamiento es de 30-45 días hábiles, dependiendo de la preparación del producto y la calidad de la documentación.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. ¿Pueden los fabricantes extranjeros solicitar la Certificación BIS para unidades de almacenamiento?
              </strong>
              <br />
              Sí. Los fabricantes extranjeros deben obtener la certificación BIS bajo el FMCS (Esquema de Certificación de Fabricantes Extranjeros).
              <br />
              Los requisitos clave incluyen:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Un representante indio local (AIR)</li>
              <li>Pruebas de productos en un laboratorio indio aprobado por BIS</li>
              <li>Inspección de fábrica en el extranjero por funcionarios de BIS</li>
              <li>Cumplimiento con IS 17634:2022</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. ¿Qué sucede si el producto de unidad de almacenamiento falla las pruebas BIS?
              </strong>
              <br />
              Si la muestra falla cualquier prueba obligatoria:
            </p>
            <ol className="list-decimal ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>El fabricante recibe un informe de falla.</li>
              <li>Deben realizar las modificaciones necesarias de diseño/material.</li>
              <li>Las muestras revisadas deben enviarse para nuevas pruebas.</li>
            </ol>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. ¿Es obligatoria la inspección de fábrica para la Certificación BIS?
              </strong>
              <br />
              Sí. Una inspección de fábrica es obligatoria para todas las certificaciones de marca ISI, incluidas las unidades de almacenamiento.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. ¿Pueden los comerciantes o propietarios de marcas solicitar la Certificación BIS?
              </strong>
              <br />
              Sí, pero solo si:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Son propietarios de la marca, y</li>
              <li>
                Tienen un acuerdo de fabricación legalmente autorizado con una fábrica real
              </li>
            </ul>
            <p className="text-gray-600 text-base font-geist mt-2">
              Las licencias BIS se emiten por fábrica, no por empresa.
              <br />
              Por lo tanto, la ubicación de fabricación real debe someterse a pruebas e inspección.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. ¿Pueden múltiples modelos de unidades de almacenamiento estar cubiertos bajo una licencia BIS?
              </strong>
              <br />
              Solo si:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Los modelos están bajo la misma norma</li>
              <li>Se fabrican en la misma fábrica</li>
              <li>Comparten construcción y materias primas similares</li>
              <li>Cumplen con los mismos parámetros de prueba</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. ¿Qué requisitos de etiquetado se deben seguir después de la certificación?
              </strong>
              <br />
              Una vez aprobado, el producto debe mostrar:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Marca ISI (marca de certificación BIS)</li>
              <li>Número de norma (IS 17634:2022)</li>
              <li>Número de licencia CML</li>
              <li>Nombre y dirección del fabricante</li>
              <li>Número de lote o serie</li>
            </ul>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17634-2022-Sun-Certifications-India.pdf"
            title="Certificado BIS para Unidades de Almacenamiento - IS 17634:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadSpanish />

        <FaqAuthorSpanish questionNumber={3} />
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
              Marca BIS (Licencia ISI) para Fabricantes Extranjeros
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
                alt="BISCRS logo"
                title="BISCRS logo"
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
                alt="BIS Logo"
                title="BIS Logo"
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
                alt="ISIMark logo"
                title="ISIMark logo"
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
