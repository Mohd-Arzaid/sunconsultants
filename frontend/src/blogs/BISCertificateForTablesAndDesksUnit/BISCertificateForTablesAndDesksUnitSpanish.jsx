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

const BISCertificateForTablesAndDesksUnitSpanish = () => {
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

export default BISCertificateForTablesAndDesksUnitSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para Mesas y Escritorios | IS 17633:2022 Licencia BIS";
  const ogTitle = "Certificación BIS para Mesas y Escritorios – IS 17633:2022 Guía";
  const twitterTitle = "Licencia BIS para Mesas y Escritorios | IS 17633:2022";
  const metaDescription =
    "Obtenga el Certificado BIS para Mesas y Escritorios bajo IS 17633:2022. Proceso, documentos, pruebas, costos y plazos para la Certificación BIS en India.";
  const ogDescription =
    "Guía completa para la Certificación BIS para Mesas y Escritorios según IS 17633:2022. Conoce el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicite el Certificado BIS para Mesas y Escritorios bajo IS 17633:2022. Aprenda el proceso BIS, documentos, pruebas, tarifas y plazos en India.";
  const metaKeywords =
    "Certificado BIS para Mesas y Escritorios, Licencia BIS para Mesas y Escritorios, IS 17633:2022, Certificación BIS para Mesas y Escritorios";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/mesas-y-escritorios-is-17633";
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
                    Certificado BIS para Mesas y Escritorios – IS 17633:2022
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
          Certificado BIS para Mesas y Escritorios – Guía Completa de Certificación BIS IS 17633:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="Licencia BIS para Mesas y Escritorios"
            alt="Certificado BIS para Mesas y Escritorios - IS 17633:2022 Certificación BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Mesas y Escritorios es obligatorio para todos los fabricantes, importadores y vendedores de mesas y escritorios en India. Según la Norma India IS 17633:2022 – Mesas y Escritorios: Requisitos de Seguridad, estos muebles deben ser probados y certificados por la Oficina de Normas de India (BIS) antes de poder ser vendidos legalmente en el mercado indio.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las mesas y escritorios son componentes esenciales de hogares, oficinas, escuelas, universidades, espacios comerciales, entornos de hospitalidad y lugares de trabajo industriales. Debido a que a menudo soportan peso, impacto y uso continuo, su resistencia estructural y seguridad son críticas. Para garantizar la protección del consumidor y la confiabilidad del producto, BIS exige certificación obligatoria.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta guía completa explica IS 17633:2022, el proceso de registro BIS, pruebas, documentación requerida, tarifas, plazos, sanciones y beneficios para fabricantes e importadores.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS es un proceso de cumplimiento regulatorio administrado por la Oficina de Normas de India, la autoridad nacional de estándares de India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado del Certificado BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un Certificado BIS confirma que el producto cumple con los requisitos de seguridad, calidad, rendimiento y durabilidad establecidos por las Normas Indias.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios de la Certificación BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Garantiza la seguridad del consumidor</li>
          <li>Apoya la fabricación de alta calidad</li>
          <li>Reduce el riesgo de falla del producto</li>
          <li>Mejora la aceptación en el mercado</li>
          <li>Requisito legal bajo las Órdenes de Control de Calidad BIS (QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Una vez aprobado, el producto lleva la Marca BIS (Marca ISI) junto con el número de licencia.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué Norma India se Aplica a Mesas y Escritorios? – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norma BIS aplicable es:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – Mesas y Escritorios: Requisitos de Seguridad
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Esta norma define los requisitos de rendimiento, seguridad estructural y durabilidad para todos los tipos de mesas y escritorios utilizados en entornos residenciales, comerciales, de hospitalidad e institucionales.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Productos Cubiertos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Escritorios de oficina</li>
          <li>Escritorios para computadora</li>
          <li>Mesas de estudio</li>
          <li>Mesas de comedor</li>
          <li>Mesas de café</li>
          <li>Escritorios de trabajo</li>
          <li>Escritorios de entrenamiento</li>
          <li>Escritorios de escuela/universidad</li>
          <li>Mesas de profesor</li>
          <li>Mesas modulares de estación de trabajo</li>
          <li>Mesas de escritura</li>
          <li>Mesas de reunión/conferencia</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Parámetros Clave de Seguridad Bajo IS 17633:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Estabilidad estructural</li>
          <li>Capacidad de carga</li>
          <li>Resistencia al impacto</li>
          <li>Rendimiento de fuerza horizontal/vertical</li>
          <li>Calidad del acabado superficial</li>
          <li>Seguridad de bordes</li>
          <li>Durabilidad bajo uso repetitivo</li>
          <li>Seguridad del material</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cada mesa o escritorio vendido en India debe cumplir con estos parámetros a través del Registro BIS para Mesas y Escritorios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por qué la Certificación BIS es Obligatoria para Mesas y Escritorios?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las mesas y escritorios son muebles de alto uso que se encuentran en hogares, oficinas, escuelas y áreas públicas. Las fallas estructurales pueden causar accidentes como:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Colapso bajo peso</li>
          <li>Lesiones por bordes afilados</li>
          <li>Inestabilidad durante el uso</li>
          <li>Rotura de uniones</li>
          <li>Desprendimiento de superficie</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Para evitar estos peligros, la certificación BIS garantiza:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diseño y construcción seguros</li>
          <li>Cumplimiento de requisitos de carga estructural</li>
          <li>Rendimiento duradero</li>
          <li>Prevención de vuelco y colapso</li>
          <li>Selección de materiales de alta calidad</li>
          <li>Estándares uniformes del mercado</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Vender mesas y escritorios sin una Licencia BIS para Mesas y Escritorios es ilegal en India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para Mesas y Escritorios (IS 17633:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El proceso de certificación BIS sigue el Esquema ISI (Esquema de Evaluación de Conformidad-I), que incluye pruebas de productos e inspección de fábrica.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 1 – Identificar Categoría de Producto y Norma
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confirme que la mesa/escritorio cae bajo IS 17633:2022. Identifique el número de variantes y materiales.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 2 – Presentar Solicitud BIS (Envío en Línea)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Complete la solicitud en el Portal en Línea BIS Manak con:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detalles del fabricante</li>
          <li>Dirección de la fábrica</li>
          <li>Especificaciones del producto</li>
          <li>Detalles de marca registrada</li>
          <li>Sistemas de control de calidad</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 3 – Pago de Tarifas de Certificación BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Incluye:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tarifa de solicitud</li>
          <li>Tarifa de procesamiento</li>
          <li>Cargos por pruebas de productos</li>
          <li>Tarifas de inspección de fábrica</li>
          <li>Tarifas de marcado</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 4 – Pruebas de Muestra en un Laboratorio Reconocido por BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los productos deben someterse a pruebas completas según lo prescrito en IS 17633:2022.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Pruebas Realizadas
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de Estabilidad</li>
          <li>Prueba de Resistencia (Carga Estática)</li>
          <li>Prueba de Durabilidad (Carga Repetitiva)</li>
          <li>Prueba de Impacto</li>
          <li>Medición de Deflexión</li>
          <li>Prueba de Seguridad de Bordes y Superficie</li>
          <li>Prueba de Carga del Espacio de Trabajo</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          El laboratorio carga los informes de prueba directamente a BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 5 – Inspección de Fábrica BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un oficial de BIS visita la instalación de fabricación para verificar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sistema de gestión de calidad</li>
          <li>Capacidad de pruebas internas</li>
          <li>Control de materias primas</li>
          <li>Línea de producción y maquinaria</li>
          <li>Calibración de instrumentos</li>
          <li>Cumplimiento con STI (Esquema de Pruebas e Inspección)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 6 – Otorgamiento de Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">BIS emite:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado BIS</li>
          <li>Aprobación de Marca ISI</li>
          <li>Número de licencia CML único</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Después de esto, el fabricante puede marcar y vender legalmente mesas/escritorios en India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 7 – Cumplimiento Post-Licencia
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes deben:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mantener registros según STI</li>
          <li>Usar el marcado ISI correctamente</li>
          <li>Permitir inspecciones periódicas de BIS</li>
          <li>Renovar la licencia cada 1-2 años</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Alcance de la Licencia BIS para Mesas y Escritorios
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Esta norma cubre los requisitos relacionados con el rendimiento y la seguridad, es decir, resistencia, estabilidad y durabilidad de mesas y escritorios que se utilizarán en posiciones sentadas y/o de pie, utilizados por adultos.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Esta norma se aplica a mesas y escritorios completamente fabricados/construidos. También se aplica a unidades listas para ensamblar; en ese caso, los requisitos de esta norma se aplicarán a las unidades ensambladas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para la Certificación BIS de Mesas y Escritorios
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos de Fabricación
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licencia de fábrica</li>
          <li>Lista de maquinaria</li>
          <li>Lista de equipos de prueba</li>
          <li>Certificados de calibración</li>
          <li>Diseño de fábrica</li>
          <li>Diagrama de flujo del proceso</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dibujos de mesa/escritorio</li>
          <li>Lista de materiales</li>
          <li>Especificaciones del producto</li>
          <li>Informes de pruebas de calidad internas</li>
          <li>Fotos/videos del producto</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de identidad del signatario autorizado</li>
          <li>Prueba de dirección</li>
          <li>Carta de autorización de marca</li>
          <li>Certificado de registro de marca</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos de Solicitud BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulario de solicitud completado</li>
          <li>Compromiso del fabricante</li>
          <li>Carta de solicitud de prueba</li>
          <li>Carta de autorización</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La documentación completa garantiza aprobaciones más rápidas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Pruebas bajo IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las pruebas evalúan resistencia, estabilidad, durabilidad y seguridad.
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
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Diseño y mano de obra
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Estabilidad
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Carga indicada
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Para cargas pesadas ocasionales
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Resistencia bajo fuerza estática horizontal
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  General
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Impacto Vertical para Tapas de Mesa de Vidrio
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Impacto Vertical para Todas las Otras Tapas de Mesa
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Deflexión de Tapas de Mesa
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Caída
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Las pruebas deben realizarse solo en laboratorios aprobados por BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes y Cómo Evitarlos
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Producto que falla en pruebas de carga o durabilidad</strong>
            <br />
            Solución: Fortalecer uniones, usar materiales compatibles con BIS, agregar refuerzo.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Documentación incompleta</strong>
            <br />
            Solución: Prepare todos los documentos legales, técnicos y de fabricación con anticipación.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Fábrica que carece de equipos de prueba adecuados</strong>
            <br />
            Solución: Instale los instrumentos requeridos y mantenga la calibración según las pautas de BIS.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Etiquetado incorrecto</strong>
            <br />
            Solución: Asegúrese de que el marcado ISI siga las reglas de BIS exactamente.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Clasificación incorrecta de modelos de productos</strong>
            <br />
            Solución: Obtenga orientación profesional para categorizar variantes correctamente.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la Certificación BIS para Mesas y Escritorios
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Autorización legal para vender en India</li>
          <li>Mayor confianza del cliente</li>
          <li>Mejor durabilidad del producto</li>
          <li>Acceso a grandes minoristas y plataformas de comercio electrónico</li>
          <li>Menor riesgo de responsabilidad del producto</li>
          <li>Mayor credibilidad de marca</li>
          <li>Cumplimiento con QCOs gubernamentales</li>
          <li>Ventaja competitiva en el mercado</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanciones por Incumplimiento
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vender o distribuir mesas/escritorios sin certificación BIS puede resultar en:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Incautación de productos</li>
          <li>Multas severas</li>
          <li>Procesamiento penal</li>
          <li>Prohibición de importaciones</li>
          <li>Órdenes de cierre de negocios</li>
          <li>Cancelación de licencia</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Ley de la Oficina de Normas de India de 2016 aplica sanciones estrictas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Quién Necesita la Certificación BIS para Mesas y Escritorios?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Esta certificación es obligatoria para:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Fabricantes extranjeros</li>
          <li>Importadores</li>
          <li>Comerciantes/propietarios de marcas</li>
          <li>Proveedores OEM/ODM</li>
          <li>Distribuidores de muebles</li>
          <li>Vendedores de comercio electrónico</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cada fábrica debe obtener una Licencia BIS separada.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por qué Elegirnos para Consultoría de Certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Proporcionamos asistencia de extremo a extremo:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretación de normas (IS 17633:2022)</li>
          <li>Clasificación de productos</li>
          <li>Redacción de documentación</li>
          <li>Coordinación de pruebas</li>
          <li>Presentación en portal BIS</li>
          <li>Apoyo en inspección de fábrica</li>
          <li>Seguimiento continuo con BIS</li>
          <li>Aprobación de licencia</li>
          <li>Gestión de renovación y cumplimiento</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nuestra experiencia garantiza una certificación rápida, sin problemas y sin errores.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Mesas y Escritorios bajo IS 17633:2022 es un requisito obligatorio de conformidad que garantiza la seguridad del producto, rendimiento, durabilidad y cumplimiento con los estándares nacionales. Los fabricantes e importadores deben someterse a pruebas de productos, inspección de fábrica y cumplir con todas las reglas de documentación y etiquetado de BIS para obtener la Marca ISI.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con asistencia experta, todo el proceso de certificación se vuelve fluido, rápido y totalmente conforme con las regulaciones BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes – Certificado BIS para Mesas y Escritorios (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. ¿Es obligatoria la certificación BIS para mesas y escritorios?
              </strong>
              <br />
              Sí. Según IS 17633:2022, todas las mesas y escritorios deben estar certificados por BIS antes de ser vendidos en India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ¿Qué pruebas se requieren para la certificación?</strong>
              <br />
              Las pruebas obligatorias incluyen pruebas de estabilidad, resistencia, durabilidad, deflexión, impacto y seguridad superficial.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ¿Cuál es el costo de la certificación BIS?</strong>
              <br />
              El costo oscila entre ₹65,000 – ₹1,30,000, dependiendo de factores de prueba e inspección.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. ¿Los fabricantes extranjeros necesitan Certificación BIS?
              </strong>
              <br />
              Sí, a través del esquema FMCS, que incluye inspecciones de fábrica en el extranjero por parte de BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. ¿Puede una licencia cubrir múltiples modelos de mesa/escritorio?
              </strong>
              <br />
              Sí, pero solo si los modelos son similares en construcción y parámetros de prueba.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ¿Cuánto tiempo tarda el proceso BIS?</strong>
              <br />
              Aproximadamente 30-45 días.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. ¿Es obligatorio realizar pruebas en un laboratorio reconocido por BIS?</strong>
              <br />
              Sí, solo los laboratorios aprobados por BIS pueden realizar las pruebas.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ¿Qué sucede si el producto falla?</strong>
              <br />
              Debe ser rediseñado y vuelto a presentar para pruebas.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. ¿Es obligatorio el marcado ISI después de la certificación?</strong>
              <br />
              Sí, la Marca ISI es requerida en el producto y empaque.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ¿Qué documentos se necesitan?</strong>
              <br />
              Dibujos técnicos, BOM, documentos de fábrica, informes de prueba, plan QC y documentos legales.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="Certificado BIS para Mesas y Escritorios - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

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
