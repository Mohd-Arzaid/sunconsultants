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
    "Certificado BIS para Sillas y Taburetes | IS 17632:2022 Licencia BIS";
  const ogTitle =
    "Certificación BIS para Sillas y Taburetes – Guía IS 17632:2022";
  const twitterTitle = "Licencia BIS para Sillas y Taburetes | IS 17632:2022";
  const metaDescription =
    "Obtén el Certificado BIS para Sillas y Taburetes según IS 17632:2022. Proceso, documentos, pruebas, costos y cronograma para la Certificación BIS en India.";
  const ogDescription =
    "Guía completa sobre la Certificación BIS para Sillas y Taburetes según IS 17632:2022. Conoce el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicita el Certificado BIS para Sillas y Taburetes según IS 17632:2022. Aprende sobre el proceso BIS, documentos, pruebas, tarifas y cronograma en India.";
  const metaKeywords =
    "Certificado BIS para Sillas y Taburetes, Licencia BIS para Sillas y Taburetes, IS 17632:2022, Certificación BIS para Sillas y Taburetes";
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
                    Certificado BIS para Sillas y Taburetes – IS 17632:2022
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
          Certificado BIS para Sillas y Taburetes de Uso General – Guía Completa
          IS 17632:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="Licencia BIS para Sillas y Taburetes"
            alt="Certificado BIS para Sillas y Taburetes - Certificación BIS IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Sillas y Taburetes de Uso General es un
          requisito obligatorio según el Estándar Indio IS 17632:2022. Este
          estándar especifica los requisitos de seguridad, durabilidad y
          rendimiento para sillas y taburetes utilizados en hogares, oficinas,
          áreas comerciales, instituciones educativas, cafeterías, restaurantes,
          hoteles y espacios públicos.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las sillas y taburetes se encuentran entre los artículos de mobiliario
          más utilizados y están constantemente sometidos a carga, movimiento y
          estrés repetitivo. Una silla o taburete estructuralmente débil puede
          colapsar repentinamente, provocando lesiones. Para prevenir tales
          peligros y garantizar la seguridad del consumidor, la Oficina de
          Estándares de la India (BIS) exige que todos los fabricantes e
          importadores obtengan la Certificación BIS para Sillas y Taburetes
          antes de venderlos en India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta página proporciona una guía completa sobre la Certificación BIS
          para sillas y taburetes según IS 17632:2022, incluyendo el proceso de
          certificación, documentos requeridos, requisitos de pruebas, tarifas,
          desafíos, sanciones y beneficios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS es un sistema de cumplimiento de productos
          gobernado por la Oficina de Estándares de la India, la autoridad
          nacional de estándares de India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado del Certificado BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un Certificado BIS garantiza que un producto:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cumple con los estándares de seguridad y calidad de India</li>
          <li>Ha pasado las pruebas de laboratorio aprobadas por BIS</li>
          <li>Ha sido sometido a inspección de fábrica</li>
          <li>
            Protege a los consumidores de productos inseguros o de calidad
            inferior
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los productos certificados muestran la Marca ISI, demostrando el
          cumplimiento con los Estándares Indios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Estándar Aplicable – IS 17632:2022 para Sillas y Taburetes
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Estándar BIS para sillas y taburetes es:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> – Sillas y Taburetes de Uso General:
          Requisitos de Seguridad
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Este estándar cubre todas las sillas y taburetes no especializados
          utilizados para propósitos de asiento en hogares, oficinas, entornos
          comerciales, lugares públicos y configuraciones institucionales.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Productos Cubiertos por IS 17632:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sillas de uso general</li>
          <li>Sillas de comedor</li>
          <li>Sillas para visitantes de oficina</li>
          <li>Sillas de estudio</li>
          <li>Sillas de cafetería</li>
          <li>Sillas de restaurante</li>
          <li>Sillas de sala de reuniones</li>
          <li>Sillas de área de espera</li>
          <li>Sillas de madera</li>
          <li>Sillas de metal</li>
          <li>Sillas de plástico (no especializadas)</li>
          <li>Taburetes de uso general</li>
          <li>Taburetes de bar</li>
          <li>Taburetes de comedor</li>
          <li>Taburetes escalonados (dentro de criterios definidos)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Parámetros Clave de Seguridad y Rendimiento
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022 evalúa:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistencia estructural</li>
          <li>Estabilidad</li>
          <li>Durabilidad bajo uso repetido</li>
          <li>Resistencia del asiento</li>
          <li>Rendimiento del respaldo</li>
          <li>Resistencia al impacto de las patas</li>
          <li>Resistencia de las uniones</li>
          <li>Calidad del acabado superficial</li>
          <li>Seguridad de bordes y esquinas</li>
          <li>Calidad del material</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Todas las sillas y taburetes vendidos en India deben cumplir con estos
          parámetros y obtener una Licencia BIS para Sillas y Taburetes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por qué la Certificación BIS es Obligatoria para Sillas y Taburetes?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las sillas y taburetes soportan el peso humano y se utilizan
          frecuentemente en todos los entornos. El fallo estructural puede
          provocar:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Colapso de sillas</li>
          <li>Rotura de patas</li>
          <li>Agrietamiento del asiento</li>
          <li>Fallo del respaldo</li>
          <li>Lesiones por bordes afilados</li>
          <li>Inestabilidad que provoca caídas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios de la Certificación BIS
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Garantiza productos de asiento seguros</li>
          <li>Previene accidentes y lesiones</li>
          <li>Mejora la durabilidad del producto</li>
          <li>Previene importaciones de calidad inferior</li>
          <li>Establece una calidad uniforme del mercado</li>
          <li>Aumenta la confianza del cliente</li>
          <li>Obligatorio por ley india (BIS QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sin la Certificación BIS, los fabricantes no pueden vender legalmente
          sillas o taburetes en India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para Sillas y Taburetes (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El proceso BIS sigue el Esquema de Certificación de Marca ISI, que
          involucra pruebas, inspección y verificación de solicitud.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 1 – Identificar Tipo de Producto y Estándar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confirma que la silla/taburete está bajo IS 17632:2022. Identifica
          variantes de diseño y materiales utilizados.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 2 – Enviar Solicitud BIS en Línea
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La solicitud se presenta a través del Portal en Línea BIS Manak,
          requiriendo:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detalles del fabricante</li>
          <li>Información de la fábrica</li>
          <li>Especificaciones del producto</li>
          <li>Detalles de marca/marca comercial</li>
          <li>Flujo de trabajo del proceso de fabricación</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 3 – Pagar Tarifas de Certificación BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las tarifas incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tarifa de solicitud</li>
          <li>Tarifa de procesamiento</li>
          <li>Cargos por pruebas de muestra</li>
          <li>Tarifas de inspección de fábrica</li>
          <li>Tarifas de marcado</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 4 – Pruebas de Producto según IS 17632:2022
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las pruebas obligatorias se realizan en un laboratorio reconocido por
          BIS.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Las Pruebas Incluyen:
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de Estabilidad</li>
          <li>Prueba de Resistencia del Asiento</li>
          <li>Prueba de Durabilidad del Respaldo</li>
          <li>Prueba de Carga de Pata Adelante/Lateral/Trasera</li>
          <li>Prueba de Impacto del Asiento</li>
          <li>Prueba de Caída</li>
          <li>Prueba de Fatiga</li>
          <li>Prueba de Acabado Superficial</li>
          <li>Prueba de Borde Afilado</li>
          <li>Durabilidad estructural bajo ciclos repetidos</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los resultados de las pruebas deben mostrar cumplimiento completo con
          IS 17632:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 5 – Inspección de Fábrica por BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un oficial de BIS visita la fábrica para evaluar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proceso de fabricación</li>
          <li>Inspección de materias primas</li>
          <li>Procedimientos de control de calidad</li>
          <li>Capacidad de pruebas</li>
          <li>Calibración de equipos</li>
          <li>Volumen de producción</li>
          <li>Cumplimiento con el Esquema BIS de Pruebas e Inspección (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 6 – Otorgamiento de Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Si las pruebas y la inspección son exitosas, BIS emite:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado BIS (Licencia de Marca ISI)</li>
          <li>Número CML</li>
          <li>Aprobación para fijar la Marca ISI en sillas y taburetes</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 7 – Obligaciones Post-Licencia
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes deben:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Usar la Marca ISI según los requisitos de etiquetado BIS</li>
          <li>Mantener registros de control de calidad</li>
          <li>Someterse a inspecciones de vigilancia BIS regulares</li>
          <li>Renovar la licencia cada 1–2 años</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Alcance de la Licencia BIS para Sillas y Taburetes
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Este estándar cubre los requisitos para sillas y taburetes de uso
          general. Este estándar se aplica a sillas y taburetes de uso general
          completamente fabricados/construidos. También se aplica a unidades
          listas para ensamblar; en ese caso, los requisitos de este estándar se
          aplicarán a las unidades ensambladas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para la Certificación BIS de Sillas y Taburetes
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos del Fabricante
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licencia/registro de fábrica</li>
          <li>Diagrama de flujo del proceso de fabricación</li>
          <li>Lista de maquinaria</li>
          <li>Lista de equipos de prueba internos</li>
          <li>Certificados de calibración</li>
          <li>Diseño de fábrica y plano de planta</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dibujos de silla/taburete</li>
          <li>Dimensiones y especificaciones</li>
          <li>Lista de materiales</li>
          <li>Descripción de características de seguridad</li>
          <li>Informes de pruebas de calidad internas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de identidad y dirección</li>
          <li>Carta de autorización de marca</li>
          <li>Certificado de marca comercial (opcional)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos de Solicitud BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulario de solicitud</li>
          <li>Formulario de solicitud de prueba</li>
          <li>Formularios de declaración</li>
          <li>Carta de autorización</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Pruebas para Sillas y Taburetes (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 incluye pruebas mecánicas, estructurales y de seguridad
          extensivas.
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
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vuelco Hacia Adelante y Vuelco Lateral para Sillas sin Brazos
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vuelco Hacia Atrás
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vuelco Lateral para Sillas con Brazos
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Taburetes/Poufs (Todas las Direcciones)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Resistencia
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Estas pruebas garantizan un uso diario seguro bajo condiciones del
          mundo real.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes y Cómo Evitarlos
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Silla que falla en pruebas de estabilidad</strong>
            <br />
            Ocurre debido a una distribución inadecuada del peso.
            <br />
            Solución: Mejorar el diseño de las patas, ampliar el área de la
            base.
          </li>
          <li>
            <strong>Uniones débiles que causan fallos en las pruebas</strong>
            <br />
            Solución: Usar materiales reforzados y mejores conectores.
          </li>
          <li>
            <strong>Equipos de prueba internos inadecuados</strong>
            <br />
            Solución: Instalar instrumentos compatibles con BIS requeridos.
          </li>
          <li>
            <strong>Inconsistencias en la documentación</strong>
            <br />
            Solución: Preparar documentos sistemáticamente antes de solicitar.
          </li>
          <li>
            <strong>Variantes de producto no mapeadas correctamente</strong>
            <br />
            Solución: Agrupar productos según estructura y parámetros de prueba.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la Certificación BIS para Sillas y Taburetes
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Permiso legal para vender en India</li>
          <li>Seguridad mejorada del producto</li>
          <li>Mayor confianza del cliente</li>
          <li>Menor riesgo de responsabilidad del producto</li>
          <li>Requerido para listados de comercio electrónico</li>
          <li>Esencial para licitaciones gubernamentales</li>
          <li>Mayor credibilidad de marca</li>
          <li>Ventaja competitiva</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanciones por Incumplimiento
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vender sillas o taburetes sin certificación BIS puede llevar a:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Multas monetarias severas</li>
          <li>Retiro/incautación del producto</li>
          <li>Cancelación de licencias de fábrica</li>
          <li>Procesamiento penal</li>
          <li>Restricciones de importación</li>
          <li>Lista negra del mercado</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las sanciones se aplican bajo la Ley BIS, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Quién Necesita la Certificación BIS para Sillas y Taburetes?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Obligatorio para:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Fabricantes extranjeros que exportan a India</li>
          <li>Importadores</li>
          <li>Propietarios de marca/comerciantes</li>
          <li>Proveedores OEM/ODM</li>
          <li>Cadenas minoristas</li>
          <li>Vendedores en línea</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cada fábrica requiere una Licencia BIS separada.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Sillas y Taburetes de Uso General según IS
          17632:2022 es obligatorio para garantizar la seguridad del producto,
          la estabilidad estructural y la durabilidad. La certificación BIS no
          solo ayuda a los fabricantes a mantener estándares de alta calidad,
          sino que también permite el acceso legal al mercado y aumenta la
          confianza del consumidor.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con asistencia profesional, el proceso de certificación—desde las
          pruebas hasta la inspección y aprobación—se vuelve fluido, predecible
          y totalmente conforme.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes – Certificado BIS para Sillas y Taburetes
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. ¿Es obligatoria la Certificación BIS para sillas y taburetes?
              </strong>
              <br />
              Sí, según IS 17632:2022, todas las sillas y taburetes de uso
              general deben estar certificados por BIS antes de ser vendidos en
              India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ¿Qué pruebas se requieren?</strong>
              <br />
              Pruebas de estabilidad, resistencia, durabilidad, impacto, fatiga
              y seguridad de materiales.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ¿Cuánto tiempo tarda la certificación BIS?</strong>
              <br />
              Típicamente 30–45 días.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ¿Cuál es el costo de la certificación?</strong>
              <br />
              Alrededor de ₹60,000–₹1,30,000 dependiendo de las pruebas y la
              inspección.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ¿Pueden aplicar fabricantes extranjeros?</strong>
              <br />
              Sí, bajo el esquema FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ¿Es obligatorio el marcado ISI?</strong>
              <br />
              Sí, después de que se otorgue la licencia BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. ¿Por qué las sillas fallan en las pruebas BIS?</strong>
              <br />
              Las causas comunes incluyen patas débiles, poca resistencia de las
              uniones e inestabilidad.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. ¿Pueden cubrirse múltiples modelos bajo una licencia?
              </strong>
              <br />
              Solo si cumplen con los criterios de similitud y cumplimiento de
              estándares.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. ¿Se requiere una inspección de fábrica?</strong>
              <br />
              Sí, es obligatorio para la certificación de marca ISI.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ¿Qué documentos se necesitan?</strong>
              <br />
              Licencia de fábrica, especificaciones técnicas, lista de
              maquinaria, plan de control de calidad, dibujos del producto, etc.
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
