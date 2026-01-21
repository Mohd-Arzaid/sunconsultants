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

const BISCertificateForWeldedPipesAndTubesSpanish = () => {
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

export default BISCertificateForWeldedPipesAndTubesSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para Tubos y Tuberías Soldadas | Licencia BIS IS 17876:2022";
  const ogTitle =
    "Certificación BIS para Tubos y Tuberías Soldadas – Guía IS 17876:2022";
  const twitterTitle = "Licencia BIS para Tubos y Tuberías Soldadas | IS 17876:2022";
  const metaDescription =
    "Obtenga el Certificado BIS para Tubos y Tuberías Soldadas bajo IS 17876:2022. Proceso, documentos, pruebas, costos y cronograma para la Certificación BIS en India.";
  const ogDescription =
    "Guía completa de Certificación BIS para Tubos y Tuberías Soldadas según IS 17876:2022. Conozca el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicite el Certificado BIS para Tubos y Tuberías Soldadas bajo IS 17876:2022. Aprenda el proceso BIS, documentos, pruebas, tarifas y cronograma en India.";
  const metaKeywords =
    "Certificado BIS para Tubos y Tuberías Soldadas, Licencia BIS para Tubos y Tuberías Soldadas, IS 17876:2022, Certificación BIS para Tubos y Tuberías Soldadas";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tubos-y-tuberias-soldadas-is-17876";
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
                    Certificado BIS para Tubos y Tuberías Soldadas – IS 17876:2022
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
          Certificado BIS para Tubos y Tuberías de Acero Inoxidable Soldadas según IS
          17876:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="Licencia BIS para Tubos y Tuberías Soldadas"
            alt="Certificado BIS para Tubos y Tuberías Soldadas - Certificación BIS IS 17876:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los tubos y tuberías de acero inoxidable soldadas se utilizan ampliamente en
          industrias como construcción, procesamiento químico, alimentos y bebidas,
          distribución de agua, aplicaciones estructurales e ingeniería general.
          Como estos tubos transportan fluidos, gases y, en algunos casos, productos químicos
          corrosivos, su resistencia, resistencia a la corrosión e integridad de fabricación
          deben verificarse antes de que ingresen al mercado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para regular la calidad y garantizar la seguridad pública e industrial, el
          Gobierno de India ha hecho obligatoria la Certificación BIS para tubos y tuberías
          de acero inoxidable soldadas bajo IS 17876:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta guía completa explica el proceso completo de aprobación BIS,
          documentación, requisitos de prueba, costos, cronograma, obligaciones del
          fabricante, beneficios y reglas de cumplimiento — escrita en un formato fresco y
          único, garantizando cero duplicación con contenido anterior.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS para Tubos y Tuberías de Acero Inoxidable Soldadas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Oficina de Normas de la India (BIS) regula la calidad de los productos en
          India a través de varios esquemas de certificación. Un producto que cae
          bajo una Orden de Control de Calidad (QCO) obligatoria debe obtener una
          Licencia BIS antes de ser fabricado, importado, almacenado, vendido o
          distribuido.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lo que Garantiza la Certificación BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un certificado BIS confirma que los tubos/tuberías de acero inoxidable soldadas:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cumplen con la precisión dimensional</li>
          <li>Poseen la resistencia mecánica requerida</li>
          <li>Muestran resistencia a la corrosión</li>
          <li>Se fabrican utilizando grados aprobados de acero inoxidable</li>
          <li>Cumplen con las condiciones de prueba indias</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Una vez certificados, los productos deben llevar la Marca ISI junto con el número
          de licencia (CML).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norma BIS para Tubos y Tuberías de Acero Inoxidable Soldadas – IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norma aplicable es:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – Tubos y Tuberías de Acero Inoxidable Soldadas
          para Servicio General
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Esta norma describe:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Composición química</li>
          <li>Requisitos de propiedades mecánicas</li>
          <li>Tolerancias de fabricación</li>
          <li>Especificaciones dimensionales</li>
          <li>Pautas de superficie y acabado</li>
          <li>Pruebas hidrostáticas y no destructivas</li>
          <li>Criterios de rendimiento de seguridad</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Estos tubos se utilizan para aplicaciones de servicio general, lo que significa que
          deben cumplir con una amplia gama de entornos operativos.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por qué la Certificación BIS es Obligatoria para Productos IS 17876:2022?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los tubos de acero inoxidable soldados se utilizan ampliamente en:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tuberías de agua</li>
          <li>Transporte químico</li>
          <li>Plantas de alimentos y farmacéuticas</li>
          <li>Ingeniería estructural</li>
          <li>Sistemas de escape y ventilación</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Si no se fabrican correctamente, estos tubos pueden provocar:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fallas por fugas</li>
          <li>Estallido bajo presión</li>
          <li>Corrosión y contaminación</li>
          <li>Inestabilidad estructural</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para evitar que materiales de calidad inferior ingresen a la cadena de suministro, BIS
          requiere que cada fabricante — nacional o extranjero — obtenga la Licencia BIS
          para Tubos y Tuberías de Acero Inoxidable Soldadas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El procedimiento de certificación implica pruebas de laboratorio rigurosas e
          inspección.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 1 – Identificar Categoría y Grado del Producto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Evalúe el(los) grado(s) específico(s) de acero inoxidable que se están fabricando
          y confirme que caen bajo IS 17876:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 2 – Enviar Solicitud en Línea
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes deben solicitar a través del Portal BIS Manak Online,
          enviando:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detalles de la fábrica</li>
          <li>Capacidad de producción</li>
          <li>Diagrama de flujo del proceso</li>
          <li>Fuentes de materias primas</li>
          <li>Documentación de garantía de calidad</li>
          <li>Detalles de marca y marca registrada</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 3 – Pagar Tarifas BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los pagos incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cargos de solicitud</li>
          <li>Tarifas de procesamiento</li>
          <li>Tarifas de prueba</li>
          <li>Cargos de inspección de fábrica</li>
          <li>Tarifas de marcado</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 4 – Inspección de Fábrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los funcionarios BIS inspeccionan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Secuencia de producción</li>
          <li>Almacenamiento de materias primas</li>
          <li>Maquinaria de soldadura</li>
          <li>Procesos de recocido/tratamiento térmico</li>
          <li>Documentación de calidad</li>
          <li>Infraestructura de pruebas</li>
          <li>Registros de calibración</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Verifican el cumplimiento del Esquema de Pruebas e Inspección (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 5 – Otorgamiento de Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Si todos los parámetros cumplen con los requisitos BIS, el fabricante recibe:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado BIS</li>
          <li>Autorización de Marca ISI</li>
          <li>Un número de licencia CML único</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 6 – Obligaciones Post-Licencia
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los titulares de licencia deben:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mantener pruebas de calidad internas continuas</li>
          <li>Usar la Marca ISI correctamente</li>
          <li>Cooperar durante las inspecciones de vigilancia periódicas BIS</li>
          <li>Renovar la licencia a tiempo</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Alcance de la Licencia BIS para Tubos y Tuberías de Acero Inoxidable Soldadas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Esta norma cubre los requisitos para tubos y tuberías de
          acero inoxidable soldadas para servicios generales.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Esta norma no especifica los requisitos de
          tubos y tuberías de acero inoxidable soldadas destinadas a propósitos distintos,
          que están cubiertas por Normas Indias separadas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para Certificación BIS (IS 17876:2022)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Documentos de Fabricación
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licencia/registro de fábrica</li>
          <li>Diagrama de distribución</li>
          <li>Diagrama de flujo del proceso</li>
          <li>Lista de maquinaria (soldadura, conformado, recocido, pruebas)</li>
          <li>Lista de equipos de prueba internos</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Documentos Técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Especificaciones de grado</li>
          <li>Datos de prueba química y mecánica</li>
          <li>Especificaciones del procedimiento de soldadura</li>
          <li>Registros de tratamiento térmico</li>
          <li>Gráficos de tolerancia dimensional</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Documentos Legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de identidad</li>
          <li>Prueba de dirección</li>
          <li>Documentos de propiedad de marca</li>
          <li>Carta de firmante autorizado</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Documentos de Solicitud BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulario de solicitud completado</li>
          <li>Compromisos y declaraciones</li>
          <li>Documentos de solicitud de prueba</li>
          <li>Arte de etiqueta para marcado ISI</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Prueba bajo IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las pruebas son el núcleo de la aprobación BIS y garantizan que cada lote cumpla
          con estándares de calidad estrictos.
        </p>

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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Análisis de Cuchara
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Análisis de Producto
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Requisitos de Tracción
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tuberías
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tubos
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Borde
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Aplanado Inverso
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Aplanado
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tamaño de Grano
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Estanqueidad
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Mano de Obra, Acabado, Apariencia
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensiones y Tolerancias
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Enfrentados Durante la Certificación BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Fallo en Pruebas de Composición Química</strong>
            <br />
            Elementos de aleación no estándar o impurezas causan rechazo.
          </li>
          <li>
            <strong>Defectos de Soldadura Durante NDT</strong>
            <br />
            Procesos de soldadura deficientes o tratamiento térmico inconsistente pueden crear
            defectos.
          </li>
          <li>
            <strong>No Conformidad Dimensional</strong>
            <br />
            Las variaciones en el espesor de la pared comúnmente conducen a fallas.
          </li>
          <li>
            <strong>Documentación Incompleta</strong>
            <br />
            Los registros faltantes o poco claros retrasan la aprobación de la licencia.
          </li>
          <li>
            <strong>Problemas de Calibración</strong>
            <br />
            El equipo no calibrado resulta en resultados de prueba no confiables.
          </li>
          <li>
            <strong>Envío incorrecto de marca/etiqueta</strong>
            <br />
            El arte de la marca ISI debe coincidir con las especificaciones BIS.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la Certificación BIS para Tubos y Tuberías de Acero Inoxidable
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aprobación legal para fabricar/vender en India</li>
          <li>Garantía de calidad y seguridad</li>
          <li>Reputación mejorada y credibilidad del mercado</li>
          <li>Aceptabilidad por licitaciones gubernamentales y de empresas públicas</li>
          <li>Potencial de exportación aumentado</li>
          <li>Riesgos de falla del producto reducidos</li>
          <li>Protección contra competidores falsificados o de calidad inferior</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalizaciones por Incumplimiento
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes/importadores que venden productos no certificados enfrentan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Incautación de productos</li>
          <li>Penalizaciones severas bajo la Ley BIS</li>
          <li>Cierre de operaciones de fabricación</li>
          <li>Restricciones de importación</li>
          <li>Prosecución legal</li>
          <li>Cancelación de licencias existentes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          El cumplimiento es obligatorio y se aplica estrictamente.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Quién Debe Obtener la Licencia BIS para Tubos y Tuberías de Acero Inoxidable Soldadas?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Fabricantes extranjeros que exportan a India</li>
          <li>Importadores de tubos de acero inoxidable</li>
          <li>Proveedores OEM</li>
          <li>Distribuidores industriales</li>
          <li>Marcas de etiqueta privada</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cada ubicación de fabricación debe obtener su propia licencia.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Tubos y Tuberías de Acero Inoxidable Soldadas bajo
          IS 17876:2022 garantiza la confiabilidad, durabilidad y rendimiento de
          productos de tubería críticos utilizados en múltiples industrias. Con
          la certificación obligatoria ahora aplicada, los fabricantes e importadores deben
          alinear sus procesos, pruebas y documentación con los requisitos BIS
          para suministrar legalmente sus productos en el mercado indio.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con orientación experta, el proceso de licenciamiento BIS se vuelve más rápido,
          más fluido y totalmente conforme.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes — Certificación BIS para Tubos y Tuberías de Acero Inoxidable Soldadas
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. ¿Es obligatoria la Certificación BIS para tubos de acero inoxidable soldados?
              </strong>
              <br />
              Sí. Bajo IS 17876:2022, la certificación BIS es obligatoria para todos
              los fabricantes e importadores.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ¿Qué pruebas se requieren?</strong>
              <br />
              Análisis químico, prueba de tracción, prueba de dureza, pruebas
              hidrostáticas, NDT, aplanado y verificaciones dimensionales.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ¿Cuánto tiempo tarda la certificación BIS?</strong>
              <br />
              Típicamente 35-50 días para Fabricante Indio y alrededor de 120 días
              para fabricante extranjero, dependiendo de la preparación para pruebas e inspección.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. ¿Pueden los fabricantes extranjeros obtener la certificación BIS?
              </strong>
              <br />
              Sí, a través del FMCS (Esquema de Certificación de Fabricantes Extranjeros).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ¿Qué documentos se requieren?</strong>
              <br />
              Licencia de fábrica, lista de equipos de prueba, BOM, flujo de proceso, dibujos,
              plan QC, documentos de marca, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ¿Qué pasa si una muestra falla en las pruebas?</strong>
              <br />
              El fabricante debe corregir el problema, rehacer el producto y
              volver a enviar para pruebas.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. ¿Es obligatorio el marcado ISI después de la aprobación?</strong>
              <br />
              Sí. Los productos deben mostrar la Marca ISI + número CML.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ¿Están todos los grados cubiertos bajo IS 17876?</strong>
              <br />
              Solo los grados específicos definidos bajo la norma califican.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. ¿Con qué frecuencia BIS realiza vigilancia?</strong>
              <br />
              Se realizan auditorías periódicas y pruebas de muestras aleatorias durante la
              validez de la licencia.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17876-2022-Sun-Certifications-India.pdf"
            title="Certificado BIS para Tubos y Tuberías Soldadas - IS 17876:2022 PDF"
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
                Mejor Consultor de Certificados de India
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
