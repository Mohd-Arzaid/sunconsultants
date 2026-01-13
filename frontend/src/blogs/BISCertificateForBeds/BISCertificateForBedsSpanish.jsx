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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForBedsSpanish = () => {
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
          El Certificado BIS para Camas es un requisito obligatorio en India
          según IS 17635:2022, dirigido a fabricantes e importadores de camas
          para uso doméstico y comercial. Según el último Estándar Indio IS
          17635:2022 – Camas (Requisitos de Seguridad), todas las camas deben
          cumplir con estrictos estándares de seguridad, durabilidad, estructura
          y rendimiento antes de ser vendidas en el mercado indio.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las camas son productos de mobiliario esenciales utilizados
          diariamente en hogares, hoteles, hospitales, hostales, alojamientos PG
          e instalaciones institucionales. Cualquier debilidad estructural,
          bordes afilados, fallo de materiales o baja capacidad de carga puede
          resultar en lesiones graves. Para prevenir tales riesgos, la Oficina
          de Estándares de la India (BIS) exige la Certificación BIS para Camas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta guía completa explica todo sobre la Licencia BIS para Camas,
          incluyendo estándares aplicables, proceso de certificación, requisitos
          de pruebas, documentos, tarifas, cronogramas, sanciones y beneficios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS es un esquema de evaluación de conformidad
          introducido por la Oficina de Estándares de la India, la autoridad
          nacional de estándares de India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ¿Qué es el Certificado BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un Certificado BIS confirma que un producto cumple con los Estándares
          Indios y es seguro, confiable y adecuado para su uso. Los productos
          certificados llevan la Marca de Certificación BIS, comúnmente conocida
          como la Marca ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado del Certificado BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Significa que el producto ha pasado exitosamente:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pruebas de laboratorio</li>
          <li>Inspección de fábrica</li>
          <li>Verificación de control de calidad</li>
          <li>Evaluación de cumplimiento de seguridad</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Logo BIS en las camas asegura a los clientes que el producto cumple
          con los estándares de calidad y seguridad aprobados por el gobierno.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Estándar BIS Aplicable para Camas – IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Estándar Indio aplicable para camas es:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17635:2022</strong> – Camas: Requisitos de Seguridad
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Este estándar define los requisitos esenciales de seguridad y
          rendimiento para camas utilizadas en entornos residenciales y
          comerciales.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17635:2022 Cubre
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistencia estructural</li>
          <li>Capacidad de carga</li>
          <li>Estabilidad y durabilidad</li>
          <li>Calidad del material</li>
          <li>Acabado de bordes y superficie</li>
          <li>Seguridad contra colapso</li>
          <li>Ausencia de riesgos de atrapamiento</li>
          <li>Rendimiento a largo plazo</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cualquier cama fabricada o importada a India debe cumplir con IS
          17635:2022 y obtener un Registro BIS para Camas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por qué la Certificación BIS es Obligatoria para las Camas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las camas se utilizan durante períodos prolongados y soportan el peso
          humano continuamente. Las camas mal diseñadas pueden causar lesiones,
          colapso o riesgos para la salud a largo plazo.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Razones por las que se Requiere la Certificación BIS para Camas
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Garantiza la integridad estructural</li>
          <li>Previene el colapso y la rotura</li>
          <li>Controla la calidad del material</li>
          <li>Elimina bordes afilados y acabados inseguros</li>
          <li>Protege a los consumidores</li>
          <li>Garantiza calidad nacional uniforme</li>
          <li>Obligatorio según notificación BIS</li>
          <li>Requerido para venta legal en India</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sin una Licencia BIS para Camas, vender o importar camas en India es
          ilegal.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para Camas (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El proceso de certificación BIS en India sigue un procedimiento
          estructurado bajo el Esquema de Certificación ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 1 – Identificar Estándar y Alcance del Producto
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
          Alcance de la Licencia BIS para Camas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Este estándar cubre los requisitos relacionados
          con el rendimiento y la seguridad de las camas para adultos para uso
          doméstico y no doméstico.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Este estándar se aplica a camas completamente
          fabricadas/construidas. También se aplica a unidades listas para
          ensamblar; en ese caso, los requisitos de este estándar se aplicarán a
          las unidades ensambladas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.3</strong> Este estándar no cubre camas de agua, colchones
          de aire, camas plegables, literas y camas para personas con
          necesidades especiales, ni las camas para fines de atención médica y
          médicos.
        </p>

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
                  Diseño y fabricación
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
            verifica el Estándar Indio correcto.
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
          Beneficios de la Certificación BIS para Camas
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Venta legal en India</li>
          <li>Mayor confianza del cliente</li>
          <li>Acceso a plataformas de comercio electrónico</li>
          <li>Elegibilidad para licitaciones gubernamentales</li>
          <li>Reducción de responsabilidad</li>
          <li>Fuerte credibilidad de marca</li>
          <li>Cumplimiento con estándares indios</li>
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
          ¿Quién Necesita el Certificado BIS para Camas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Las siguientes entidades deben obtener una Licencia BIS para Camas:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Fabricantes extranjeros</li>
          <li>Importadores</li>
          <li>Marcas de muebles</li>
          <li>Proveedores OEM/ODM</li>
          <li>Vendedores de comercio electrónico</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cada unidad de fabricación requiere una licencia BIS separada.
        </p>

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
