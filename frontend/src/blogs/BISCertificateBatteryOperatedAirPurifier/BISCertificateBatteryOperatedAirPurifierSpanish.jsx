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

const BISCertificateBatteryOperatedAirPurifierSpanish = () => {
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

export default BISCertificateBatteryOperatedAirPurifierSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para Purificador de Aire Funcionado por Batería | IS 302 (Parte 1):2024 Licencia BIS";
  const ogTitle =
    "Certificación BIS para Purificador de Aire Funcionado por Batería – Guía IS 302 (Parte 1):2024";
  const twitterTitle =
    "Licencia BIS para Purificador de Aire Funcionado por Batería | IS 302 (Parte 1):2024";
  const metaDescription =
    "Obtenga el Certificado BIS para Purificador de Aire Funcionado por Batería bajo IS 302 (Parte 1):2024. Proceso, documentos, pruebas, costos y cronograma para Certificación BIS en India.";
  const ogDescription =
    "Guía completa de Certificación BIS para Purificador de Aire Funcionado por Batería según IS 302 (Parte 1):2024. Conozca el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicite el Certificado BIS para Purificador de Aire Funcionado por Batería bajo IS 302 (Parte 1):2024. Aprenda el proceso BIS, documentos, pruebas, tarifas y cronograma en India.";
  const metaKeywords =
    "Certificado BIS para Purificador de Aire Funcionado por Batería, Licencia BIS para Purificador de Aire Funcionado por Batería, IS 302 (Parte 1):2024, Certificación BIS para Purificador de Aire Funcionado por Batería";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/purificador-de-aire-funcionado-por-bateria-is-302";
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
                    Certificado BIS para Purificador de Aire Funcionado por Batería – IS 302
                    (Parte 1):2024
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
          Certificación BIS Purificador de Aire Funcionado por Batería – Guía Completa de IS 302 (Parte 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedAirPurifier.png"
            title="Licencia BIS para Purificador de Aire Funcionado por Batería"
            alt="Certificado BIS para Purificador de Aire Funcionado por Batería - IS 302 (Parte 1):2024 Certificación BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La demanda de Purificadores de Aire Funcionados por Batería en India ha crecido rápidamente debido al aumento de los niveles de contaminación del aire, la creciente conciencia sobre la salud y la necesidad de soluciones portátiles y eficientes energéticamente para la purificación del aire. A diferencia de los purificadores de aire convencionales con enchufe, los modelos funcionados por batería se utilizan ampliamente en hogares, oficinas, hospitales, vehículos, hoteles, escuelas y espacios personales, especialmente donde no se garantiza un suministro de energía ininterrumpido. Estos aparatos interactúan directamente con componentes eléctricos, electrónicos y de batería, lo que hace que la seguridad eléctrica, la protección contra incendios, la integridad del aislamiento y la protección del usuario sean extremadamente críticas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para garantizar la seguridad del consumidor y el cumplimiento normativo, el Gobierno de India ha ordenado la conformidad con los estándares de seguridad eléctrica indios. Obtener un Certificado BIS para Purificador de Aire Funcionado por Batería bajo IS 302 (Parte 1):2024 es un requisito legal obligatorio para fabricantes e importadores antes de vender estos productos en el mercado indio. Una Certificación BIS válida para Purificador de Aire Funcionado por Batería confirma que el aparato ha sido probado para seguridad eléctrica, mecánica y térmica según el último Estándar Indio.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS es el sistema oficial de evaluación de conformidad de productos de India gobernado por la Oficina de Estándares Indios. BIS funciona bajo el Ministerio de Asuntos del Consumidor y es responsable de garantizar que los productos vendidos en India cumplan con estándares definidos de seguridad, calidad y confiabilidad.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado del Certificado BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El significado del Certificado BIS se refiere a una autorización emitida por BIS que permite a un fabricante producir, importar y vender un producto que cumple con un Estándar Indio específico (IS). Este certificado también permite el uso de la marca de certificación BIS (Marca ISI) en el producto aprobado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS existe para:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proteger a los consumidores de aparatos eléctricos inseguros</li>
          <li>Prevenir incendios, descargas eléctricas y peligros relacionados con baterías</li>
          <li>Promover una calidad uniforme del producto</li>
          <li>Habilitar la aplicación de regulaciones de seguridad</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Explicación de la Marca ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La Marca BIS (Marca ISI) en un purificador de aire funcionado por batería indica que:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>El producto cumple con IS 302 (Parte 1):2024</li>
          <li>El aislamiento eléctrico y la construcción son seguros</li>
          <li>El aparato está legalmente aprobado para la venta en India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Estándar BIS Aplicable para Purificador de Aire Funcionado por Batería
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (Parte 1):2024 – Seguridad de Aparatos Eléctricos Domésticos y Similares
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El Estándar Indio aplicable para purificadores de aire funcionados por batería es IS 302 (Parte 1):2024, que especifica los requisitos generales de seguridad para aparatos eléctricos destinados a uso doméstico y similar.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Alcance de IS 302 (Parte 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Este estándar cubre:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Seguridad eléctrica de aparatos que usan baterías o energía híbrida
          </li>
          <li>Protección contra descargas eléctricas</li>
          <li>Riesgos de incendio y sobrecalentamiento</li>
          <li>Seguridad mecánica y de construcción</li>
          <li>Requisitos de aislamiento, distancia superficial y separación</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Intención de Seguridad, Rendimiento y Pruebas
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (Parte 1):2024 tiene como objetivo garantizar que:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Los aparatos alimentados por batería funcionen de manera segura bajo condiciones normales y anormales
          </li>
          <li>
            Los usuarios estén protegidos de peligros eléctricos, térmicos y mecánicos
          </li>
          <li>Los componentes no se sobrecalienten ni causen incendios</li>
          <li>El aparato permanezca seguro durante todo su ciclo de vida previsto</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quién Debe Cumplir
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes de purificadores de aire funcionados por batería en India</li>
          <li>Importadores y distribuidores</li>
          <li>Fabricantes extranjeros que suministran a India</li>
          <li>Marcas que venden purificadores de aire bajo etiquetas privadas</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por qué la Certificación BIS es Obligatoria para Purificador de Aire Funcionado por Batería
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Riesgos de Seguridad del Consumidor
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los purificadores de aire no certificados pueden causar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Descarga eléctrica debido a aislamiento deficiente</li>
          <li>Sobrecalentamiento o explosión de la batería</li>
          <li>Peligros de incendio durante la carga o funcionamiento</li>
          <li>Fallo mecánico de componentes internos</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cumplimiento Gubernamental y Normativo
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bajo las notificaciones BIS y las regulaciones de seguridad eléctrica, los purificadores de aire están sujetos a certificación obligatoria. Vender sin un Certificado BIS India es ilegal.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Implicaciones Legales
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El incumplimiento puede resultar en:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Incautación de productos</li>
          <li>Multas y sanciones severas</li>
          <li>Prohibiciones de importación</li>
          <li>Responsabilidad penal bajo la Ley BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios de Mercado y Marca
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Una Licencia BIS para Purificador de Aire Funcionado por Batería ayuda a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Construir confianza del consumidor</li>
          <li>Habilitar listado en plataformas de comercio electrónico</li>
          <li>Calificar para adquisiciones institucionales y gubernamentales</li>
          <li>Fortalecer la reputación de la marca</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS Paso a Paso para Purificador de Aire Funcionado por Batería
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aplicabilidad e Identificación de Estándar para Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El proceso comienza confirmando:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tipo de producto: Purificador de aire funcionado por batería</li>
          <li>Estándar aplicable: IS 302 (Parte 1):2024</li>
          <li>Voltaje, tipo de batería, configuración del cargador</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proceso de Solicitud BIS en Línea
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes deben:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registrarse en el portal BIS</li>
          <li>Enviar la Solicitud BIS en línea</li>
          <li>Subir documentos técnicos y legales</li>
          <li>Pagar las tarifas gubernamentales aplicables</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Este paso comúnmente se conoce como BIS apply online o registro de certificado BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Estructura de Tarifas y Costos para Certificado BIS para Purificador de Aire
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El costo de certificación BIS incluye:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tarifa de solicitud</li>
          <li>Cargos de prueba</li>
          <li>Tarifa de inspección de fábrica</li>
          <li>Tarifa de licencia y marcado</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          El costo total de la certificación BIS depende de:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Complejidad del producto</li>
          <li>Diseño de batería y cargador</li>
          <li>Ubicación de fabricación</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Prueba de Muestra del Producto (Según IS 302 Parte 1:2024)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las muestras se prueban en laboratorios reconocidos por BIS para:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protección contra descargas eléctricas</li>
          <li>Calentamiento y funcionamiento anormal</li>
          <li>Resistencia de aislamiento</li>
          <li>Resistencia dieléctrica</li>
          <li>Seguridad de batería y seguridad de carga</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspección y Auditoría de Fábrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los oficiales BIS verifican:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proceso de fabricación</li>
          <li>Sistema de control de calidad</li>
          <li>Trazabilidad de componentes</li>
          <li>Instalaciones de prueba internas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Otorgamiento de Licencia BIS y Marca ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Después de pruebas e inspección exitosas:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS emite la Licencia de la Oficina de Estándares Indios</li>
          <li>El fabricante está autorizado a usar la Marca BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para Certificación BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos del Fabricante
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado de registro de fábrica</li>
          <li>Diagrama de flujo del proceso de fabricación</li>
          <li>Lista de maquinaria y equipo de prueba</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado de incorporación de la empresa</li>
          <li>Registro GST</li>
          <li>Autorización de marca (si aplica)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diagramas de circuito</li>
          <li>Hojas de datos de componentes</li>
          <li>Especificaciones de batería y cargador</li>
          <li>Manual de usuario y etiquetas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos de Solicitud BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulario de solicitud BIS</li>
          <li>Formulario de solicitud de prueba</li>
          <li>Declaraciones y compromisos</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Estos se conocen como DOCUMENTOS DE CERTIFICADO BIS o DOCUMENTOS DE CERTIFICACIÓN BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Prueba según IS 302 (Parte 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Las pruebas obligatorias incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de protección contra descargas eléctricas</li>
          <li>Prueba de calentamiento y funcionamiento anormal</li>
          <li>Prueba de resistencia de aislamiento</li>
          <li>Prueba de resistencia dieléctrica</li>
          <li>Prueba de seguridad de carga de batería</li>
          <li>Prueba de resistencia mecánica y estabilidad</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las pruebas deben realizarse solo en laboratorios reconocidos por BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes y Cómo Evitarlos
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Problemas Comunes
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fallo en pruebas de calentamiento o aislamiento</li>
          <li>Configuración de batería insegura</li>
          <li>Documentación incompleta</li>
          <li>Etiquetado no conforme</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Soluciones y Mejores Prácticas
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Realizar pruebas de cumplimiento previas</li>
          <li>Usar componentes certificados</li>
          <li>Preparar documentos técnicos precisos</li>
          <li>Trabajar con consultores BIS experimentados</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la Certificación BIS para Fabricantes e Importadores
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios Legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cumplimiento con la ley india</li>
          <li>Protección contra sanciones</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios Comerciales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Acceso al mercado en toda India</li>
          <li>Aceptación en plataformas de comercio electrónico</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios de Marca
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La Marca BIS mejora la confianza</li>
          <li>Mayor confianza del cliente</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Expansión de Mercado
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Entrada más fácil a mercados institucionales</li>
          <li>Credibilidad de marca a largo plazo</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Quién Necesita Certificación BIS para Purificador de Aire Funcionado por Batería?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Importadores</li>
          <li>Fabricantes extranjeros (con AIR)</li>
          <li>Comerciantes y propietarios de marcas</li>
          <li>Vendedores en línea y mercados</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por qué Elegirnos para Consultoría de Certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ofrecemos servicios de certificación BIS de extremo a extremo, que incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Evaluación de aplicabilidad</li>
          <li>Preparación de documentación</li>
          <li>Coordinación de pruebas de laboratorio</li>
          <li>Apoyo a inspección de fábrica</li>
          <li>Aprobaciones más rápidas</li>
          <li>Cumplimiento posterior a la certificación</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nuestra experiencia en aparatos eléctricos y electrónicos garantiza un viaje de certificación fluido y conforme.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtener un Certificado BIS para Purificador de Aire Funcionado por Batería bajo IS 302 (Parte 1):2024 no es solo una formalidad regulatoria—es un requisito crítico de seguridad y mercado. La Certificación BIS para Purificador de Aire Funcionado por Batería garantiza la seguridad eléctrica, la confiabilidad de la batería y la protección del consumidor, mientras que la Licencia BIS para Purificador de Aire Funcionado por Batería fortalece la credibilidad de la marca y el estatus legal.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para fabricantes e importadores, el cumplimiento oportuno previene sanciones, permite una entrada fluida al mercado y construye confianza a largo plazo. Con orientación experta y apoyo de cumplimiento estructurado, el proceso de certificación BIS se vuelve eficiente, predecible y completamente alineado con los Estándares Indios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes – Certificación BIS para Purificador de Aire Funcionado por Batería
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P1. ¿Es obligatoria la certificación BIS para purificadores de aire funcionados por batería?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, es obligatoria bajo IS 302 (Parte 1):2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P2. ¿Cuál es la forma completa del certificado BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certificado de la Oficina de Estándares Indios.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P3. ¿Cuánto tiempo tarda la certificación BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Típicamente 6–8 semanas para fabricantes indios y 12-16 semanas para fabricantes extranjeros.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P4. ¿Cuál es el costo del certificado BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Depende de las pruebas y la complejidad del producto.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P5. ¿Pueden los importadores solicitar certificación BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, con la autorización adecuada.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P6. ¿Es obligatoria la Marca ISI?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, después de la certificación.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P7. ¿Se incluyen las pruebas de seguridad de batería?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, la seguridad de batería y carga son obligatorias.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P8. ¿Es obligatoria la inspección de fábrica?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, para el otorgamiento de la licencia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P9. ¿Se pueden cubrir múltiples modelos?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, sujeto a aprobación de pruebas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P10. ¿Se requiere solicitud en línea?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, BIS apply online es obligatorio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P11. ¿Pueden las marcas extranjeras obtener certificación BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, a través de un Representante Indio Autorizado.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P12. ¿Qué sucede si se violan las reglas BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sanciones, incautación y acción legal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P13. ¿Mejora la certificación BIS las ventas?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, aumenta significativamente la confianza.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P14. ¿Se requiere renovación?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, la renovación periódica es obligatoria.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P15. ¿Pueden los consultores acelerar la aprobación?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, los consultores experimentados reducen los retrasos.
            </p>
          </div>
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
