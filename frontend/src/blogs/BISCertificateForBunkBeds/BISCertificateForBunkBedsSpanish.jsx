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

const BISCertificateForBunkBedsSpanish = () => {
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

export default BISCertificateForBunkBedsSpanish;

const MetaTags = () => {
  const title = "Certificado BIS para Literas | IS 17636:2022 Licencia BIS";
  const ogTitle = "Certificación BIS para Literas – Guía IS 17636:2022";
  const twitterTitle = "Licencia BIS para Literas | IS 17636:2022";
  const metaDescription =
    "Obtén el Certificado BIS para literas según IS 17636:2022. Proceso, documentos, pruebas, costos y cronograma para la Certificación BIS en India.";
  const ogDescription =
    "Guía completa sobre la Certificación BIS para literas según IS 17636:2022. Conoce el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicita el Certificado BIS para literas según IS 17636:2022. Aprende sobre el proceso BIS, documentos, pruebas, tarifas y cronograma en India.";
  const metaKeywords =
    "Certificado BIS para Literas, Licencia BIS para Literas, IS 17636:2022, Certificación BIS para Literas";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/literas-is-17636";
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
                    <Link to="/Blogs">Blogs Recientes</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificado BIS para Literas – IS 17636:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificado BIS para Literas – Guía Completa de Certificación BIS IS
          17636:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="Licencia BIS para Literas"
            alt="Certificado BIS para Literas - Certificación BIS IS 17636:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Literas es un requisito obligatorio en India
          según IS 17636:2022, que establece los requisitos de seguridad,
          rendimiento y estructurales para literas utilizadas en hogares,
          hostales, dormitorios, alojamientos PG, escuelas, hoteles y
          establecimientos comerciales. Cualquier fabricante—indio o
          extranjero—debe obtener una Certificación BIS para Literas antes de
          vender, importar, exportar o distribuir literas en el mercado indio.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con la creciente demanda de muebles que ahorran espacio, las literas
          se han convertido en una categoría de producto esencial. Sin embargo,
          los riesgos de seguridad como caídas, colapso, atrapamiento y fallo
          estructural hacen que la Licencia BIS para Literas sea crucial para
          garantizar la protección del consumidor. Esta página completa te
          guiará a través del Registro BIS para Literas, requisitos de pruebas,
          documentación, tarifas, cronogramas, sanciones y beneficios.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ya seas fabricante, importador, exportador, comerciante o start-up,
          esta guía te ayuda a comprender los requisitos de cumplimiento bajo la
          Oficina de Estándares de la India (BIS).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS es un programa de cumplimiento de calidad y
          seguridad gobernado por la Oficina de Estándares de la India, el
          organismo nacional de estándares de India. Garantiza que los productos
          cumplan con los Estándares Indios especificados y sean seguros,
          confiables y aptos para su uso.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ¿Qué es el Certificado BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un certificado BIS es una licencia oficial emitida a un fabricante que
          les permite usar la Marca ISI, demostrando el cumplimiento de los
          estándares de producto prescritos por BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado del Certificado BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Prueba que el producto ha pasado:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pruebas de laboratorio</li>
          <li>Inspección de fábrica</li>
          <li>Evaluación de control de calidad</li>
          <li>Cumplimiento de seguridad</li>
          <li>Conformidad con los Estándares Indios</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Un producto certificado BIS muestra el Logo BIS, también conocido como
          la Marca ISI, lo que indica que cumple con los estándares de calidad
          indios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué Estándar BIS se Aplica a las Literas? (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las literas están sujetas a certificación BIS obligatoria según el
          estándar recientemente introducido:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — Literas – Requisitos de Seguridad
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Este estándar garantiza que las literas cumplan con criterios
          estrictos de seguridad, construcción, y durabilidad. Cubre:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Estabilidad estructural</li>
          <li>Barandillas</li>
          <li>Riesgos de atrapamiento</li>
          <li>Capacidad de carga</li>
          <li>Requisitos dimensionales</li>
          <li>Especificaciones de materiales</li>
          <li>Bordes y acabado superficial</li>
          <li>Construcción de escalera</li>
          <li>Pruebas de durabilidad y rendimiento</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cualquier fabricante que desee vender literas en India debe obtener
          una Licencia BIS para Literas según IS 17636:2022.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por qué se Requiere la Certificación BIS para las Literas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las literas son ampliamente utilizadas por niños y adultos, y las
          preocupaciones de seguridad hacen que el cumplimiento sea esencial.
          BIS ha hecho obligatoria la certificación para prevenir:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Colapso o fallo estructural</li>
          <li>Atrapamiento de partes del cuerpo</li>
          <li>Caídas desde la litera superior</li>
          <li>Lesiones relacionadas con la escalera</li>
          <li>Baja calidad de materiales</li>
          <li>Riesgos de incendio</li>
          <li>Acabados peligrosos o bordes afilados</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Razones por las que la Licencia BIS para Literas es Obligatoria
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Garantiza resistencia mecánica y durabilidad</li>
          <li>
            Protege a los consumidores—especialmente a los niños—de lesiones
          </li>
          <li>Mantiene estándares de calidad uniformes</li>
          <li>Ayuda a las marcas a construir confianza y credibilidad</li>
          <li>Garantiza el cumplimiento de las regulaciones gubernamentales</li>
          <li>Previene problemas legales y sanciones</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sin el registro BIS, los fabricantes e importadores no pueden
          legalmente vender el producto en el mercado indio.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS Paso a Paso para Literas (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El proceso de certificación BIS en India involucra pruebas,
          documentación e inspecciones de fábrica. Aquí está el procedimiento
          paso a paso:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 1 — Determinar Aplicabilidad y Estándar
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — Obligatorio
          </li>
          <li>
            Confirma la categoría del producto y los detalles de la unidad de
            fabricación.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 2 — Solicitud BIS (Envío de Formulario)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Solicita en línea a través del Portal en Línea BIS Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los requisitos incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detalles del fabricante</li>
          <li>Dirección de la fábrica y prueba</li>
          <li>Categoría del producto y marca</li>
          <li>Capacidades de fabricación</li>
          <li>Procesos de control de calidad</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Este paso inicia el ciclo de aprobación oficial.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 3 — Pagar el Costo del Certificado BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Después del envío, paga:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Tarifas de solicitud</li>
          <li>Tarifas de pruebas</li>
          <li>Tarifas de auditoría</li>
          <li>Tarifas de marcado</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las tarifas dependen de:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Número de variantes del producto</li>
          <li>Nombres de marca</li>
          <li>Ubicación de la fábrica</li>
          <li>Parámetros de prueba</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 4 — Pruebas de Muestra (Según IS 17636:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las pruebas se realizan en un laboratorio reconocido por BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las pruebas incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de estabilidad estructural</li>
          <li>Prueba de impacto</li>
          <li>Prueba de atrapamiento</li>
          <li>Prueba de resistencia de barandilla</li>
          <li>Prueba de calidad de acabado</li>
          <li>Prueba de seguridad de escalera</li>
          <li>Prueba de carga</li>
          <li>Prueba de durabilidad</li>
          <li>Evaluación de seguridad de bordes</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          El informe de prueba se carga directamente al portal BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 5 — Inspección de Fábrica BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un oficial de BIS visita la fábrica para verificar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sistema de gestión de calidad</li>
          <li>Control de materias primas</li>
          <li>Inspecciones en proceso</li>
          <li>Pruebas del producto final</li>
          <li>Capacidad de producción</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Verifican el cumplimiento del Esquema BIS de Pruebas e Inspección
          (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 6 — Otorgamiento de Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Una vez que se completen todos los pasos, BIS emite:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado BIS</li>
          <li>Aprobación de Marca ISI</li>
          <li>Número de Licencia CML</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ahora puedes usar legalmente la Marca BIS en literas y empaques.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 7 — Obligaciones Post-Licencia
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes deben:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mantener pruebas internas</li>
          <li>Permitir inspecciones BIS periódicas</li>
          <li>Renovar la licencia cada 1 o 2 años</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Alcance de la Licencia BIS para Literas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Este estándar cubre los requisitos relacionados
          con el rendimiento y la seguridad, es decir, resistencia, estabilidad
          y durabilidad de literas para uso doméstico y no doméstico. Este
          estándar también se aplica a camas individuales para uso a una altura
          de la base de la cama de 800 mm o más por encima del nivel del piso
          terminado, independientemente del uso al que se destine el espacio
          inferior.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Este estándar se aplica a literas completamente
          fabricadas/ construidas. También se aplica a unidades listas para
          ensamblar; en ese caso, los requisitos de este estándar se aplicarán a
          la unidad ensamblada.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para la Certificación BIS de Literas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Aquí está la lista completa de Documentos del Certificado BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos del Fabricante
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado de registro de fábrica</li>
          <li>Diagrama de flujo del proceso de fabricación</li>
          <li>Lista de maquinaria y equipos</li>
          <li>Lista de equipos de prueba</li>
          <li>Certificados de calibración</li>
          <li>Diseño de fábrica/diseño de planta</li>
          <li>Carta de autorización del CEO/Director</li>
          <li>Certificado ISO 9001 (si está disponible)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de identidad</li>
          <li>Prueba de dirección</li>
          <li>Autorización de marca (si es marca de terceros)</li>
          <li>Documento de registro de marca (opcional)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Especificaciones del producto</li>
          <li>Lista de materiales</li>
          <li>Descripción de características de seguridad</li>
          <li>Plan de control de calidad</li>
          <li>Informes de pruebas internas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos de Solicitud BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Compromisos y declaraciones</li>
          <li>Formulario de solicitud de prueba</li>
          <li>Carta de aprobación de muestra</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tener los documentos adecuados reduce los retrasos y garantiza una
          aprobación fluida.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Pruebas para Literas (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las pruebas son una parte obligatoria del proceso de registro BIS. Las
          literas se someten a pruebas rigurosas para garantizar la seguridad y
          durabilidad.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Esquema de Inspección y Pruebas para Literas
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
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Barreras de Seguridad de la Cama Superior
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Espacios
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Base de la Cama
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Escalera
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Resistencia del Marco y Sujeciones
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Estabilidad
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sujeción de la Cama Superior a la Cama Inferior
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Las pruebas deben realizarse solo en un laboratorio reconocido por
          BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes y Cómo Evitarlos
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Categorización Incorrecta del Producto</strong>
            <br />
            Siempre verifica el Estándar Indio correcto.
          </li>
          <li>
            <strong>Documentación Inadecuada</strong>
            <br />
            Los documentos faltantes causan retrasos—prepáralos de antemano.
          </li>
          <li>
            <strong>Pruebas de Laboratorio Fallidas</strong>
            <br />
            Asegura materiales de alta calidad, soldadura, barandillas y
            acabado.
          </li>
          <li>
            <strong>Fábrica No Preparada para Inspección</strong>
            <br />
            Asegura que el QMS y los equipos de prueba estén correctamente
            mantenidos.
          </li>
          <li>
            <strong>Problemas de Marca</strong>
            <br />
            El nombre de la marca debe coincidir con la solicitud de licencia.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Resolver estos problemas temprano reduce drásticamente el tiempo de
          procesamiento.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la Certificación BIS para Fabricantes e Importadores
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vender legalmente literas en India</li>
          <li>Construir confianza con los clientes</li>
          <li>Reducir devoluciones de productos</li>
          <li>Mejorar la reputación de la marca</li>
          <li>Garantizar el cumplimiento de seguridad</li>
          <li>Obtener ventaja competitiva</li>
          <li>
            Expandirse a cadenas minoristas y plataformas de comercio
            electrónico
          </li>
          <li>Acceder a licitaciones gubernamentales</li>
          <li>Evitar sanciones y acciones legales</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanciones por Incumplimiento
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vender literas sin Certificación BIS puede resultar en:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Incautación de productos</li>
          <li>Sanciones financieras</li>
          <li>Órdenes de cierre de fábrica</li>
          <li>Procesamiento legal</li>
          <li>Prohibición del mercado indio</li>
          <li>Inclusión en lista negra de la marca</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          El cumplimiento no es opcional—es obligatorio.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Quién Necesita la Certificación BIS para Literas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Las siguientes entidades deben obtener una Licencia BIS para Literas:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Fabricantes extranjeros que exportan a India</li>
          <li>Importadores</li>
          <li>Distribuidores</li>
          <li>Vendedores de comercio electrónico</li>
          <li>Fabricantes OEM/ODM</li>
          <li>Marcas de muebles y minoristas</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cada fábrica (no empresa) requiere una licencia BIS separada.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por qué Elegirnos para Consultoría de Certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Proporcionamos soporte integral para el Registro BIS de Literas,
          incluyendo:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretación de estándares (IS 17636:2022)</li>
          <li>Preparación de documentación</li>
          <li>Coordinación de pruebas de laboratorio</li>
          <li>Solicitud en portal BIS</li>
          <li>Soporte de inspección de fábrica</li>
          <li>Comunicación con oficiales BIS</li>
          <li>Asistencia para aprobación de licencia</li>
          <li>Cumplimiento post-certificación</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con años de experiencia, garantizamos una certificación BIS rápida,
          precisa y sin complicaciones.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes — Certificación BIS para Literas
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. ¿Es obligatoria la certificación BIS para literas en India?
              </strong>
              <br />
              Sí. Según IS 17636:2022, es obligatoria para todos los fabricantes
              e importadores.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. ¿Cuánto tiempo tarda la Certificación BIS para literas?
              </strong>
              <br />
              Típicamente 30–45 días dependiendo de la preparación y
              documentación.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. ¿Pueden los fabricantes extranjeros solicitar BIS?
              </strong>
              <br />
              Sí, a través del FMCS (Esquema de Certificación de Fabricantes
              Extranjeros).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ¿Puedo solicitar un Certificado BIS en línea?</strong>
              <br />
              Sí, a través del Portal en Línea BIS Manak.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. ¿Qué pruebas se requieren para la certificación de literas?
              </strong>
              <br />
              Prueba de carga, prueba de barandilla, prueba de estabilidad,
              prueba de impacto, prueba de atrapamiento, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. ¿Cuánto tiempo es válida una licencia BIS?</strong>
              <br />
              Generalmente 1–2 años y renovable.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ¿Puede una licencia cubrir múltiples modelos?</strong>
              <br />
              Solo si caen dentro del mismo estándar y categoría.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. ¿Se requiere la Marca ISI en las literas?</strong>
              <br />
              Sí, la Marca ISI es obligatoria después de la certificación.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. ¿Qué sucede si mi producto falla las pruebas de laboratorio?
              </strong>
              <br />
              Debes modificar el producto y volver a enviar muestras.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                11. ¿BIS verifica la infraestructura de la fábrica?
              </strong>
              <br />
              Sí, durante la inspección.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. ¿Pueden los comerciantes solicitar BIS?</strong>
              <br />
              Solo si son propietarios de marca y tienen un contrato con
              fabricantes.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. ¿Qué es el Logo BIS?</strong>
              <br />
              Es el símbolo estándar de la Marca ISI que indica la conformidad
              del producto.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                14. ¿Qué documentos se necesitan para la certificación BIS?
              </strong>
              <br />
              Licencia de fábrica, diseño, lista de maquinaria, BOM, plan QC,
              informes de pruebas, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>15. ¿Se realizan las pruebas BIS en la fábrica?</strong>
              <br />
              No, solo en laboratorios reconocidos por BIS.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtener un Certificado BIS para Literas según IS 17636:2022 no es solo
          obligatorio sino también esencial para garantizar la seguridad del
          consumidor, la confiabilidad del producto y el cumplimiento legal en
          India. El proceso de certificación involucra pruebas de productos,
          documentación, inspección de fábrica, y emisión de licencia. Con la
          planificación adecuada y orientación experta, el proceso se vuelve
          fluido, rápido y rentable.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ya seas fabricante, importador o propietario de marca, obtener la
          certificación BIS fortalece tu posición en el mercado, aumenta la
          confianza del cliente y desbloquea nuevas oportunidades comerciales.
          Nuestro equipo de consultoría experto está listo para asistirte con la
          Certificación BIS integral para literas.
        </p>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17636-2021-Sun-Certifications-India.pdf"
            title="Certificado BIS para Literas - IS 17636:2021 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadSpanish />

        <FaqAuthorSpanish questionNumber={5} />
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
