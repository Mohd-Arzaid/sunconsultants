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

const BISCertificateForWorkChairsSpanish = () => {
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

export default BISCertificateForWorkChairsSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para Sillas de Trabajo | IS 17631:2022 Licencia BIS";
  const ogTitle =
    "Certificación BIS para Sillas de Trabajo – Guía IS 17631:2022";
  const twitterTitle = "Licencia BIS para Sillas de Trabajo | IS 17631:2022";
  const metaDescription =
    "Obtén el Certificado BIS para sillas de trabajo según IS 17631:2022. Proceso, documentos, pruebas, costos y cronograma para la Certificación BIS en India.";
  const ogDescription =
    "Guía completa sobre la Certificación BIS para sillas de trabajo según IS 17631:2022. Conoce el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicita el Certificado BIS para sillas de trabajo según IS 17631:2022. Aprende sobre el proceso BIS, documentos, pruebas, tarifas y cronograma en India.";
  const metaKeywords =
    "Certificado BIS para Sillas de Trabajo, Licencia BIS para Sillas de Trabajo, IS 17631:2022, Certificación BIS para Sillas de Trabajo";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631";
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
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
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
                    Certificado BIS para Sillas de Trabajo – IS 17631:2022
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
          Certificado BIS para Sillas de Trabajo – Guía Completa de Cumplimiento
          para IS 17631:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="Licencia BIS para Sillas de Trabajo"
            alt="Certificado BIS para Sillas de Trabajo - IS 17631:2022 Certificación BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          El uso creciente de asientos de oficina y trabajo, ya sea en espacios
          corporativos, centros de coworking, oficinas en casa o configuraciones
          institucionales, ha hecho esencial el rendimiento de seguridad y
          ergonomía. Para asegurar que los fabricantes suministren productos de
          asientos estructuralmente estables, duraderos y seguros para el
          usuario, el Gobierno de India ha ordenado la Certificación BIS para
          Sillas de Trabajo bajo IS 17631:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las sillas de trabajo típicamente soportan cargas repetitivas,
          movimiento corporal continuo, inclinación, giro y ajustes de altura.
          Una falla en cualquier característica de rendimiento puede llevar a
          lesiones graves. Por esto, el cumplimiento con IS 17631:2022 – Sillas
          de Trabajo: Requisitos de Seguridad es ahora obligatorio para todos
          los fabricantes e importadores.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta guía explica el proceso completo de licenciamiento BIS,
          incluyendo estándares, pruebas, tarifas, documentación,
          responsabilidades, beneficios y desafíos, elaborada con contenido
          fresco para evitar duplicación en su sitio web.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Comprensión de la Certificación BIS para Sillas de Trabajo
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Oficina de Normas de India (BIS) supervisa la calidad y seguridad
          de los productos suministrados en el mercado indio. Cualquier producto
          que caiga bajo una Norma India listada en una Orden de Control de
          Calidad obligatoria debe ser evaluado y certificado por BIS antes de
          la venta.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Certificado BIS – Lo que Representa
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un Certificado BIS indica que una silla de trabajo:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ha pasado las pruebas de rendimiento y durabilidad</li>
          <li>Cumple con las especificaciones de material y construcción</li>
          <li>Es segura para uso diario a largo plazo</li>
          <li>
            Cumple con las pautas ergonómicas y estructurales en las Normas
            Indias
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes que cumplen con estos requisitos reciben una Licencia
          BIS que les permite colocar la Marca ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Estándar Aplicable para Sillas de Trabajo – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El estándar que rige para sillas de trabajo y oficina es:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – Sillas de Trabajo: Requisitos de
          Seguridad
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Este estándar se enfoca en asientos destinados para uso extendido en
          entornos de trabajo.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Productos Cubiertos Bajo Este Estándar
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sillas ergonómicas de oficina</li>
          <li>Sillas de trabajo</li>
          <li>Sillas giratorias</li>
          <li>Sillas de escritorio de trabajo</li>
          <li>Sillas de trabajo con altura ajustable</li>
          <li>Sillas ejecutivas de trabajo</li>
          <li>Sillas de trabajo con respaldo de malla o tela</li>
          <li>Sillas equipadas con reposabrazos</li>
          <li>Sillas con mecanismos de inclinación/bloqueo</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por qué el Cumplimiento de IS 17631:2022 es Crítico
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las sillas de trabajo difieren significativamente de las sillas de uso
          general porque:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Soportan movimiento continuo</li>
          <li>Utilizan mecanismos mecánicos y de ajuste</li>
          <li>Soportan cargas dinámicas</li>
          <li>Requieren durabilidad para uso prolongado</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Las sillas mal construidas pueden fallar en:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Uniones de la base</li>
          <li>Mecanismos giratorios</li>
          <li>Sistemas de elevación de gas</li>
          <li>Soporte del asiento/respaldo</li>
          <li>Estructura de patas o ruedas</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Esto puede llevar a lesiones en el lugar de trabajo, tiempo de
          inactividad operacional y problemas de responsabilidad del producto.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          La Certificación BIS Obligatoria Asegura
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diseño ergonómico seguro</li>
          <li>Capacidad de carga confiable</li>
          <li>Fuerte durabilidad bajo pruebas cíclicas</li>
          <li>Resistencia al desgaste mecánico</li>
          <li>Cumplimiento con parámetros de seguridad del usuario</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Por lo tanto, obtener una Licencia BIS para Sillas de Trabajo es no
          negociable para fabricantes indios y extranjeros.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Alcance de la Licencia BIS para Sillas de Trabajo
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Este estándar cubre los requisitos de las sillas de trabajo. Este
          estándar se aplica a sillas de trabajo completamente
          fabricadas/ensambladas. También se aplica a unidades listas para
          ensamblar; en ese caso, los requisitos de este estándar se aplicarán a
          las unidades ensambladas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS Paso a Paso para Sillas de Trabajo (IS
          17631:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El proceso de certificación para sillas de trabajo involucra una
          mezcla de evaluación de laboratorio, auditoría de fábrica y escrutinio
          técnico.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 1 – Evaluación del Producto y Mapeo de Estándares
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Identifique todas las variantes de sillas y alinéelas con IS
          17631:2022. Comprenda qué modelos comparten la misma construcción y
          cuáles requieren pruebas separadas.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 2 – Envío de Solicitud en Línea
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El fabricante envía la solicitud a través del Portal BIS Manak Online.
          La información requerida incluye:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detalles del sitio de fabricación</li>
          <li>Controles de materia prima</li>
          <li>Especificaciones técnicas</li>
          <li>Capacidades de producción</li>
          <li>Documentación de propiedad de marca</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 3 – Pago de Tarifas
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Se deben pagar tarifas por:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Solicitud</li>
          <li>Procesamiento</li>
          <li>Pruebas</li>
          <li>Inspección</li>
          <li>Marcado</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 4 – Pruebas de Muestra (Requisitos IS 17631:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un laboratorio reconocido por BIS evalúa la silla contra múltiples
          criterios de seguridad y rendimiento.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Las Pruebas de Silla de Trabajo Incluyen
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pruebas de carga estática del asiento y respaldo</li>
          <li>Ciclos de carga de durabilidad</li>
          <li>Pruebas de giro/rotación</li>
          <li>Resistencia del mecanismo de inclinación</li>
          <li>Rendimiento del mecanismo de elevación de gas</li>
          <li>Resistencia de ruedas y resistencia al rodamiento</li>
          <li>Estabilidad de la base y pruebas de sobrecarga</li>
          <li>Capacidad de carga del reposabrazos</li>
          <li>Pruebas de resistencia al impacto</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          El laboratorio emite un informe de prueba detallado a BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 5 – Auditoría de Fábrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los inspectores de BIS revisan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sistema de producción</li>
          <li>Registros de inspección de materiales</li>
          <li>Procesos internos de aseguramiento de calidad</li>
          <li>Instrumentos de prueba y registros de calibración</li>
          <li>Cumplimiento con el Esquema de Pruebas e Inspección (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 6 – Otorgamiento de Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Una vez confirmada la conformidad, BIS otorga:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La certificación de Licencia BIS/Marca ISI</li>
          <li>Un número CML único</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 7 – Cumplimiento Consistente
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes deben:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mantener controles internos continuos</li>
          <li>Seguir las reglas de marcado</li>
          <li>Cooperar durante las inspecciones de vigilancia</li>
          <li>Renovar la licencia periódicamente</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para la Certificación BIS de Sillas de Trabajo
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Un conjunto completo de documentos asegura una aprobación más rápida.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Comerciales y de Fábrica
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registro de fábrica</li>
          <li>Diagrama y diseño de fabricación</li>
          <li>Flujo de trabajo de producción</li>
          <li>Lista de maquinaria</li>
          <li>Lista de equipos de prueba</li>
          <li>Certificados de calibración</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Planos de ingeniería de sillas</li>
          <li>Especificaciones de mecanismos</li>
          <li>Hojas de datos de materiales</li>
          <li>Lista de materiales</li>
          <li>Instrucciones de ensamblaje</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de identidad del signatario autorizado</li>
          <li>Cartas de autorización de marca</li>
          <li>Certificado de marca registrada</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Específicos de BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulario de solicitud</li>
          <li>Compromisos</li>
          <li>Formulario de solicitud de prueba</li>
          <li>Muestras de etiquetas</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Prueba según IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las sillas de trabajo se someten a pruebas más complejas que las
          sillas generales debido a las partes móviles.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Pruebas Clave Realizadas
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Cláusula
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requisitos
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
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vuelco del Borde Frontal
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vuelco Hacia Adelante
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vuelco Hacia Adelante para Sillas con Reposapiés
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vuelco Lateral para Sillas Sin Reposabrazos
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vuelco Lateral para Sillas Con Reposabrazos
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vuelco Hacia Atrás para Sillas Sin Respaldo
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Carga Estática del Borde Frontal del Asiento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Carga Estática Combinada del Asiento y Respaldo
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Carga Estática Hacia Abajo del Reposabrazos —
                  Central
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Carga Estática Hacia Abajo del Reposabrazos —
                  Frontal
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Carga Estática Lateral del Reposabrazos
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Carga Estática del Reposapiés
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Estas pruebas simulan meses o años de uso regular en unos pocos días.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes en la Certificación BIS para Sillas de Trabajo
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>✔ 1. Fallo en pruebas mecánicas/de inclinación</strong> – A
            menudo causado por mecanismos débiles o hardware de baja calidad.
          </li>
          <li>
            <strong>
              ✔ 2. Incumplimiento del mecanismo de elevación de gas
            </strong>{" "}
            – Los elevadores de gas deben cumplir parámetros estrictos de
            presión y seguridad.
          </li>
          <li>
            <strong>✔ 3. Infraestructura de pruebas inadecuada</strong> – Las
            pruebas de sillas de trabajo requieren equipos especializados.
          </li>
          <li>
            <strong>✔ 4. Agrupación incorrecta de productos</strong> –
            Diferentes mecanismos = pruebas separadas.
          </li>
          <li>
            <strong>✔ 5. Incumplimiento de STI</strong> – Los errores de STI
            pueden retrasar la emisión de la licencia.
          </li>
          <li>
            <strong>✔ 6. Desajustes de documentos</strong> – El nombre de la
            marca y el modelo deben coincidir exactamente con la solicitud BIS.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ventajas de la Certificación BIS para Sillas de Trabajo
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Facilita las ventas legales en toda India</li>
          <li>Aumenta la confianza del cliente y la reputación de la marca</li>
          <li>Asegura durabilidad a largo plazo</li>
          <li>Reduce reclamos de garantía y fallas</li>
          <li>Protege de sanciones regulatorias</li>
          <li>Permite listado en plataformas de comercio electrónico</li>
          <li>
            Obligatorio para licitaciones gubernamentales y suministros
            corporativos
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanciones por Vender Sillas de Trabajo Sin Certificación BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          El incumplimiento puede resultar en:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Multas financieras severas</li>
          <li>Confiscación de inventario</li>
          <li>Órdenes de cierre de producción</li>
          <li>Prohibición de importación</li>
          <li>Procesamiento penal</li>
          <li>Cancelación de licencia comercial</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Se lleva a cabo una aplicación estricta bajo la Ley BIS, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Quién Debe Obtener la Certificación BIS para Sillas de Trabajo?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Obligatorio para:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Fabricantes extranjeros que exportan a India</li>
          <li>Propietarios de marcas</li>
          <li>Importadores</li>
          <li>Proveedores OEM/ODM</li>
          <li>Distribuidores de almacén</li>
          <li>Marcas de muebles minoristas y en línea</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cada fábrica requiere una licencia BIS única.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Sillas de Trabajo bajo IS 17631:2022 es
          crucial para asegurar productos de asientos seguros, duraderos y
          ergonómicamente sólidos en India. La certificación obligatoria mejora
          la confianza del cliente, reduce los riesgos de responsabilidad del
          producto y asegura el cumplimiento con los estándares de calidad
          nacionales. Con apoyo profesional, el viaje de certificación, desde
          las pruebas hasta la inspección y el licenciamiento, se vuelve
          eficiente y predecible.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes – Certificado BIS para Sillas de Trabajo (IS
          17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. ¿Qué sillas caen bajo IS 17631:2022?</strong>
              <br />
              Cualquier silla diseñada para entornos de trabajo, incluyendo
              sillas ergonómicas de oficina, sillas de trabajo, sillas
              giratorias y sillas ajustables.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. ¿Es obligatoria la Certificación BIS para sillas de trabajo?
              </strong>
              <br />
              Sí. La certificación BIS es obligatoria antes de fabricar, vender
              o importar sillas de trabajo en India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. ¿Qué hace que las pruebas de sillas de trabajo sean
                diferentes de las pruebas de sillas generales?
              </strong>
              <br />
              Las sillas de trabajo usan mecanismos como giros, elevadores de
              gas, sistemas de inclinación y ruedas, requiriendo pruebas
              mecánicas y de resistencia avanzadas.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ¿Cuánto tiempo toma la certificación BIS?</strong>
              <br />
              Típicamente 30–45 días para fabricantes indios y alrededor de 120
              días para fabricantes extranjeros, dependiendo de las pruebas y
              documentación.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ¿Pueden aplicar fabricantes extranjeros?</strong>
              <br />
              Sí, a través del FMCS (Esquema de Certificación para Fabricantes
              Extranjeros).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ¿Qué pasa si una silla falla las pruebas BIS?</strong>
              <br />
              Debe ser rediseñada, corregida y vuelta a probar hasta que cumpla
              con IS 17631:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. ¿Qué documentos se requieren para la solicitud BIS?
              </strong>
              <br />
              Detalles de fábrica, planos de productos, lista de maquinaria,
              documentos QC, propiedad de marca y papeles legales.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ¿Requieren todas las sillas pruebas separadas?</strong>
              <br />
              Si los modelos difieren en diseño, mecanismo o estructura, pueden
              necesitarse pruebas separadas.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. ¿Es obligatorio el marcado ISI después de la aprobación?
              </strong>
              <br />
              Sí, la marca ISI debe aparecer en el producto, etiqueta y empaque.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="Certificado BIS para Sillas de Trabajo - IS 17631:2022 PDF"
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
