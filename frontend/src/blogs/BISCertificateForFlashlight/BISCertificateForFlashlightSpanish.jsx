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

const BISCertificateForFlashlightSpanish = () => {
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

export default BISCertificateForFlashlightSpanish;

const MetaTags = () => {
  const title = "Certificado BIS para Linterna | IS 2083:2024 Licencia BIS";
  const ogTitle = "Certificación BIS para Linterna – Guía IS 2083:2024";
  const twitterTitle = "Licencia BIS para Linterna | IS 2083:2024";
  const metaDescription =
    "Obtenga el Certificado BIS para Linterna bajo IS 2083:2024. Proceso, documentos, pruebas, costos y cronograma para Certificación BIS en India.";
  const ogDescription =
    "Guía completa de Certificación BIS para Linterna según IS 2083:2024. Conozca el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicite el Certificado BIS para Linterna bajo IS 2083:2024. Aprenda el proceso BIS, documentos, pruebas, tarifas y cronograma en India.";
  const metaKeywords =
    "Certificado BIS para Linterna, Licencia BIS para Linterna, IS 2083:2024, Certificación BIS para Linterna";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/linterna-is-2083";
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
                    Certificado BIS para Linterna – IS 2083:2024
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
          Certificado BIS para Linterna bajo IS 2083:2024 – Guía Completa de
          Cumplimiento
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="Licencia BIS para Linterna"
            alt="Certificado BIS para Linterna - Certificación BIS IS 2083:2024"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las linternas (comúnmente llamadas linternas) son dispositivos de
          iluminación portátiles esenciales utilizados en hogares, industrias,
          servicios de emergencia, operaciones de seguridad, actividades al aire
          libre y gestión de desastres. Debido a que las linternas son productos
          eléctricos que involucran baterías, circuitos, fuentes de luz y
          carcasas, el cumplimiento de calidad y seguridad es crítico.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para regular la calidad del producto, el rendimiento y la seguridad
          del consumidor, la Oficina de Estándares de la India (BIS) ha
          notificado IS 2083:2024 – Linterna: Especificación, haciendo
          obligatoria la Certificación BIS para linternas vendidas, fabricadas o
          importadas a India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta página proporciona una explicación completa y original de la
          Certificación BIS para linternas, cubriendo el estándar aplicable,
          proceso de certificación, requisitos de prueba, documentación,
          tarifas, cronogramas, sanciones y responsabilidades de cumplimiento.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS y por qué se aplica a las Linternas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Oficina de Estándares de la India (BIS) es la autoridad nacional de
          estándares de India responsable de garantizar que los productos
          vendidos en el mercado indio cumplan con los estándares de seguridad,
          calidad y rendimiento prescritos.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado de la Certificación BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un Certificado BIS confirma que una linterna:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cumple con el Estándar Indio IS 2083:2024</li>
          <li>Ha pasado todas las pruebas de laboratorio obligatorias</li>
          <li>
            Cumple con los requisitos eléctricos, mecánicos y de rendimiento
          </li>
          <li>Es segura para uso del consumidor</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Una vez aprobada, al fabricante se le permite colocar la Marca ISI,
          que significa cumplimiento con los Estándares Indios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Estándar Indio Aplicable – IS 2083:2024 (Linterna: Especificación)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – Linterna: Especificación
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 2083:2024 define los requisitos de construcción, rendimiento,
          seguridad y pruebas para linternas portátiles utilizadas para
          iluminación general.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Alcance de IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El estándar cubre:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Linternas de mano (linternas)</li>
          <li>Linternas operadas por batería</li>
          <li>Linternas recargables</li>
          <li>Linternas LED</li>
          <li>Linternas de emergencia y utilitarias</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Áreas Clave Cubiertas por el Estándar
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Seguridad eléctrica</li>
          <li>Rendimiento luminoso</li>
          <li>Resistencia mecánica</li>
          <li>Compatibilidad de batería</li>
          <li>Durabilidad del interruptor</li>
          <li>Protección contra sobrecalentamiento</li>
          <li>Resistencia al desgaste normal</li>
          <li>Requisitos de marcado y etiquetado</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cualquier linterna que caiga bajo este alcance debe obtener una
          Licencia BIS para Linterna antes de ingresar al mercado indio.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por qué la Certificación BIS es Obligatoria para las Linternas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las linternas son ampliamente utilizadas por consumidores de todas las
          edades y en situaciones críticas como emergencias, cortes de energía y
          operaciones industriales. Las linternas de calidad inferior pueden
          causar:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cortocircuitos eléctricos</li>
          <li>Fugas o explosión de batería</li>
          <li>Sobrecalentamiento</li>
          <li>Riesgos de incendio</li>
          <li>Rendimiento de iluminación deficiente</li>
          <li>Fallo prematuro</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          La Certificación BIS Garantiza
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Seguridad eléctrica y del usuario</li>
          <li>Salida de luz consistente</li>
          <li>Construcción duradera</li>
          <li>Operación segura de la batería</li>
          <li>Cumplimiento con los requisitos regulatorios indios</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Vender linternas no certificadas es una violación legal bajo la Ley
          BIS de 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Alcance de la Licencia BIS para Linterna
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Este estándar especifica los requisitos y pruebas
          para linternas alimentadas por baterías primarias reemplazables y
          baterías secundarias reemplazables/integradas con un voltaje máximo de
          48 V d.c.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Este estándar es aplicable a linternas de tipo
          pre-enfocadas y de enfoque con bombilla incandescente y módulo LED
          como fuente de luz.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> Lo siguiente no está cubierto bajo el alcance de
          este estándar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Lámparas de mano conectadas por cable y enchufe que están dentro del
            alcance de IS 10322 (Parte 5/Sec 6);
          </li>
          <li>
            Iluminación de emergencia que está dentro del alcance de IS 10322
            (Parte 5/Sec 8); y
          </li>
          <li>Linternas destinadas a ubicaciones peligrosas.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para Linternas (IS 2083:2024)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El proceso de certificación BIS para linternas se lleva a cabo bajo el
          Esquema de Certificación de Marca ISI (Esquema-I) e involucra
          múltiples etapas.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 1 – Identificación del Producto y Mapeo de Estándares
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El fabricante debe confirmar que el producto califica como linterna
          bajo IS 2083:2024 e identificar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tipo de linterna</li>
          <li>Fuente de energía (batería/recargable)</li>
          <li>Fuente de luz (LED, bombilla, etc.)</li>
          <li>Variantes y modelos</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 2 – Solicitud BIS en Línea
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La solicitud se envía a través del Portal en Línea BIS Manak, junto
          con:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detalles del fabricante</li>
          <li>Dirección de la fábrica</li>
          <li>Descripción del producto</li>
          <li>Detalles de marca/marca registrada</li>
          <li>Información del proceso de fabricación</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 3 – Pago de Tarifas BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las tarifas aplicables incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tarifa de solicitud</li>
          <li>Cargos de procesamiento</li>
          <li>Tarifas de prueba del producto</li>
          <li>Cargos de inspección de fábrica</li>
          <li>Tarifa de marcado</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 4 – Pruebas del Producto según IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Las muestras se prueban en un laboratorio reconocido por BIS.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Pruebas Obligatorias para Linternas
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de intensidad luminosa</li>
          <li>Prueba de estabilidad de salida de luz</li>
          <li>Prueba de resistencia de batería</li>
          <li>Prueba de operación del interruptor</li>
          <li>Resistencia mecánica (prueba de caída)</li>
          <li>Prueba de resistencia de aislamiento</li>
          <li>Prueba de aumento de temperatura</li>
          <li>Prueba de seguridad eléctrica</li>
          <li>Verificación de marcado y etiquetado</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los informes de prueba son enviados directamente a BIS por el
          laboratorio.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 5 – Inspección de Fábrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un oficial de BIS realiza una inspección in situ para verificar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Configuración de fabricación</li>
          <li>Sistema de control de calidad</li>
          <li>Inspección de materiales entrantes</li>
          <li>Verificaciones en proceso</li>
          <li>Pruebas de producto terminado</li>
          <li>Calibración de instrumentos de prueba</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          El cumplimiento del Esquema de Pruebas e Inspección (STI) es
          obligatorio.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 6 – Otorgamiento de Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Después de pruebas e inspección exitosas, BIS emite:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado BIS</li>
          <li>Aprobación de Marca ISI</li>
          <li>Número CML (Certificado de Licencia de Fabricación)</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          El fabricante ahora puede fabricar y vender linternas legalmente en
          India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 7 – Cumplimiento Post-Certificación
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Después de la certificación, los fabricantes deben:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Usar la Marca ISI correctamente en el producto y empaque</li>
          <li>Mantener registros de calidad por lotes</li>
          <li>Permitir inspecciones de vigilancia BIS</li>
          <li>Renovar la licencia periódicamente</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para Certificación BIS de Linternas
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos de Fabricación
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registro/licencia de fábrica</li>
          <li>Diagrama de flujo del proceso de fabricación</li>
          <li>Lista de maquinaria</li>
          <li>Lista de equipos de prueba internos</li>
          <li>Certificados de calibración</li>
          <li>Diseño de fábrica</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hoja de especificaciones del producto</li>
          <li>Diagramas de circuito</li>
          <li>Especificaciones de batería</li>
          <li>Lista de materiales</li>
          <li>Informes de prueba internos</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de identidad del signatario autorizado</li>
          <li>Prueba de dirección</li>
          <li>Carta de autorización de marca</li>
          <li>Certificado de marca registrada (si aplica)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Específicos de BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulario de solicitud BIS</li>
          <li>Compromisos y declaraciones</li>
          <li>Carta de solicitud de prueba</li>
          <li>Arte de etiqueta (formato de marcado ISI)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Prueba bajo IS 2083:2024 (Detallado)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las linternas deben someterse a pruebas rigurosas para garantizar la
          seguridad y el rendimiento.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Solo los productos que pasen todas las pruebas obligatorias califican
          para la aprobación BIS.
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Acabado
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verificación de dimensiones
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verificación de marcados
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba funcional del interruptor
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de resistencia de aislamiento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de distribución de luz
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Corriente de circuito de linterna LED
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de corriente de carga en linternas operadas por batería
                  recargable integrada
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes en la Certificación BIS para Linternas
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fallo en la prueba de aumento de temperatura</li>
          <li>Salida luminosa inconsistente</li>
          <li>Durabilidad deficiente del interruptor</li>
          <li>Problemas de compatibilidad de batería</li>
          <li>Formato de etiqueta ISI incorrecto</li>
          <li>Documentación incompleta</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las pruebas previas y la orientación experta reducen
          significativamente los riesgos de rechazo.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la Certificación BIS para Fabricantes de Linternas
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Permiso legal para vender en India</li>
          <li>Mayor confianza del consumidor</li>
          <li>Mejor confiabilidad del producto</li>
          <li>Aceptación en plataformas de comercio electrónico</li>
          <li>Elegibilidad para adquisiciones gubernamentales</li>
          <li>Reducción de responsabilidad y retiros</li>
          <li>Fuerte credibilidad de marca</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanciones por Vender Linternas Sin Certificación BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          El incumplimiento puede resultar en:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Incautación de productos</li>
          <li>Sanciones monetarias severas</li>
          <li>Prohibiciones de importación</li>
          <li>Cierres de fabricación</li>
          <li>Procesamiento penal bajo la Ley BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Quién Necesita Certificación BIS para Linternas?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Fabricantes extranjeros que exportan a India</li>
          <li>Importadores</li>
          <li>Propietarios de marcas</li>
          <li>Proveedores OEM/ODM</li>
          <li>Vendedores y distribuidores en línea</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cada unidad de fabricación requiere una licencia BIS separada.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Linterna bajo IS 2083:2024 es un requisito
          regulatorio obligatorio que garantiza la seguridad, el rendimiento y
          la confiabilidad de los productos de iluminación portátiles en India.
          El cumplimiento no solo protege a los consumidores sino que también
          fortalece la credibilidad de la marca y el acceso al mercado. Con
          orientación profesional, los fabricantes e importadores pueden lograr
          la certificación BIS de manera fluida y eficiente.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes – Certificado BIS para Linterna (IS 2083:2024)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. ¿Es obligatoria la Certificación BIS para linternas en India?
              </strong>
              <br />
              Sí. Las linternas cubiertas bajo IS 2083:2024 deben estar
              certificadas por BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ¿Qué estándar se aplica a las linternas?</strong>
              <br />
              IS 2083:2024 – Linterna: Especificación.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ¿Cuánto tiempo tarda el proceso BIS?</strong>
              <br />
              Aproximadamente 30–45 días hábiles para Fabricantes Indios y
              alrededor de 120 días para Fabricantes Extranjeros.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. ¿Pueden los fabricantes extranjeros solicitar certificación
                BIS?
              </strong>
              <br />
              Sí, a través del esquema FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ¿Es obligatorio el marcado ISI?</strong>
              <br />
              Sí, la Marca ISI debe mostrarse en linternas certificadas.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. ¿Qué sucede si una linterna falla en las pruebas?
              </strong>
              <br />
              El producto debe corregirse y volver a probarse.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. ¿También están cubiertas las linternas recargables?
              </strong>
              <br />
              Sí, si caen dentro del alcance de IS 2083:2024.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ¿Cuánto tiempo es válida la licencia BIS?</strong>
              <br />
              1–2 años, renovable.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. ¿Pueden múltiples modelos estar cubiertos bajo una licencia?
              </strong>
              <br />
              Sí, si cumplen con los criterios de similitud.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-2083-2024-Sun-Certifications-India.pdf"
            title="BIS Certificate for Flashlight - IS 2083:2024 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadSpanish />
        <FaqAuthorSpanish questionNumber={4} />
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
