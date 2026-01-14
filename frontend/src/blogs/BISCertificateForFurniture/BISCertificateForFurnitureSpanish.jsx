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

const BISCertificateForFurnitureSpanish = () => {
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

export default BISCertificateForFurnitureSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para Muebles en India | Guía de Certificación, Licencia y Proceso BIS";
  const ogTitle =
    "Certificado BIS para Muebles en India - Guía Completa de Certificación BIS";
  const twitterTitle =
    "Certificado BIS para Muebles | Guía Completa de Certificación BIS del BIS Indio";
  const metaDescription =
    "Certificado BIS para Muebles en India - guía completa sobre Certificación BIS, Licencia BIS, costos, documentos, estándares, proceso, solicitud en línea y Marca BIS para fabricantes de muebles.";
  const ogDescription =
    "¿Busca Certificación BIS para Muebles en India? Aprenda sobre Licencia BIS, Marca BIS, estándares aplicables, proceso de certificación, costos, documentos y requisitos de cumplimiento en detalle.";
  const twitterDescription =
    "Guía completa del Certificado BIS para Muebles en India - proceso de Certificación BIS, costos, documentos, Marca BIS, estándares y solicitud en línea explicados.";
  const metaKeywords =
    "Certificado BIS para Muebles, Certificación BIS para Muebles, Licencia BIS para Muebles, Qué es BIS, BIS Indio";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/muebles";
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
                    Certificado BIS para Muebles en India – Guía Completa
                    Detallada
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
          Certificado BIS para Muebles en India – Guía Completa Detallada
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="Licencia BIS para Muebles"
            alt="Certificado BIS para Muebles en India - Guía Completa de Certificación BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Introducción: Certificación BIS y la Industria de Muebles India
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          En India, la calidad, seguridad y estandarización de productos están
          reguladas por una autoridad estatutaria central conocida como la
          Oficina de Normas de la India (BIS). BIS es la organización nacional
          de estándares de India, establecida bajo la Ley BIS para garantizar
          que los productos vendidos en el mercado indio cumplan con los
          estándares de seguridad, calidad y rendimiento definidos.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es BIS?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS significa Oficina de Normas de la India (Bureau of Indian
          Standards). Funciona bajo el Ministerio de Asuntos del Consumidor,
          Alimentación y Distribución Pública del Gobierno de India. BIS
          desempeña un papel crucial en la protección de los intereses del
          consumidor mientras apoya a los fabricantes a través de un ecosistema
          transparente de estandarización y certificación.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          La industria de muebles india ha experimentado un crecimiento rápido
          debido a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Urbanización</li>
          <li>Expansión de infraestructura residencial y comercial</li>
          <li>
            Crecimiento en los sectores de hospitalidad, educación, atención
            médica y co-vivienda
          </li>
          <li>
            Aumento de la conciencia del consumidor sobre seguridad y
            durabilidad del producto
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los muebles ya no se consideran un producto puramente estético. Están
          directamente relacionados con la seguridad del usuario, ergonomía,
          estabilidad estructural, resistencia al fuego y durabilidad a largo
          plazo. Los incidentes que involucran camas colapsadas, literas
          inseguras, sillas inestables o unidades de almacenamiento de calidad
          inferior han generado preocupaciones entre reguladores y consumidores
          por igual.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Para abordar estos riesgos, la Certificación BIS para Muebles se ha
          convertido en un requisito crítico de cumplimiento. BIS garantiza que
          los productos de muebles cumplan con las Normas Indias (IS)
          relacionadas con:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistencia estructural</li>
          <li>Capacidad de carga</li>
          <li>Calidad del material</li>
          <li>Seguridad del diseño</li>
          <li>Rendimiento bajo condiciones de uso</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Para fabricantes, importadores, exportadores, MSME, startups y
          propietarios de marcas de muebles, obtener un Certificado BIS para
          Muebles ya no es solo una formalidad regulatoria—es una necesidad del
          mercado.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por qué es Importante la Certificación BIS para Muebles
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Garantiza el cumplimiento legal bajo las regulaciones indias</li>
          <li>
            Mejora la confianza del consumidor y la credibilidad de la marca
          </li>
          <li>
            Permite la venta y distribución sin restricciones en toda India
          </li>
          <li>Minimiza los riesgos de responsabilidad del producto</li>
          <li>
            Mejora la preparación para la exportación y la aceptación global
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Esta guía completa está diseñada para ser el recurso más autorizado y
          detallado sobre Certificación BIS para Muebles en India. Ya sea que
          sea un fabricante por primera vez o una marca de muebles establecida,
          esta guía responde a todas las preguntas posibles relacionadas con la
          Licencia BIS para Muebles, el Registro BIS para Muebles, estándares
          aplicables, proceso, costos, documentos, plazos y cumplimiento
          posterior a la certificación.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es el Certificado BIS para Muebles?
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado del Certificado BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un Certificado BIS para Muebles es una aprobación oficial otorgada por
          la Oficina de Normas de la India que confirma que un producto de
          muebles específico cumple con la Norma India (IS) relevante.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ¿Qué es la Marca BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La Marca BIS, comúnmente conocida como la Marca ISI, es una marca de
          conformidad estándar que aparece en productos certificados. Significa
          que el mueble ha:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pasado las pruebas de laboratorio</li>
          <li>Aprobado la inspección de fábrica</li>
          <li>Cumplido con todos los requisitos estándar</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Explicación del Logo BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El Logo BIS representa la autoridad de BIS como organismo nacional de
          estándares de India. Cuando se usa con la Marca ISI en productos de
          muebles, garantiza a los compradores que el producto cumple con los
          Estándares BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Certificado BIS India – Estado Legal
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          En India, fabricar, importar o vender productos de muebles cubiertos
          bajo estándares notificados sin Certificación BIS puede llevar a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Incautación de mercancías</li>
          <li>Multas monetarias severas</li>
          <li>Procesamiento bajo la Ley BIS</li>
          <li>Prohibición de venta o importación</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Por lo tanto, un Certificado BIS para Muebles en India tiene una
          fuerte importancia legal.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por qué es Importante la Certificación BIS para Productos de Muebles
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS para Muebles es crítica por múltiples razones:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Seguridad e Integridad Estructural
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Las fallas de muebles pueden causar lesiones o fatalidades. Los
          Estándares BIS evalúan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Capacidad de carga</li>
          <li>Estabilidad contra vuelco</li>
          <li>Resistencia de juntas</li>
          <li>Rendimiento del material</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Calidad y Durabilidad
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los productos de muebles certificados garantizan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Larga vida útil</li>
          <li>Resistencia al desgaste</li>
          <li>Rendimiento uniforme</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Confianza del Consumidor
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La Marca de Certificación BIS genera confianza instantánea entre
          compradores, instituciones y compradores al por mayor.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Acceso al Mercado
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Muchas licitaciones gubernamentales, compradores institucionales y
          grandes corporaciones exigen muebles certificados BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Cumplimiento Legal
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Vender muebles no certificados bajo normas BIS obligatorias puede
          atraer multas y acciones legales.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Productos de Muebles Cubiertos Bajo Certificación BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los muebles son una categoría general amplia bajo BIS, que cubre
          múltiples tipos de productos, cada uno gobernado por diferentes Normas
          Indias (Números IS).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Principales Categorías de Muebles Cubiertas:
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. Sillas de Trabajo
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Utilizadas en oficinas, fábricas y espacios comerciales. Los
          estándares se centran en ergonomía, estabilidad y rendimiento de
          carga.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. Sillas y Taburetes de Uso General
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Utilizadas en hogares, escuelas y espacios públicos. BIS evalúa la
          seguridad estructural y la resistencia del material.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. Mesas y Escritorios
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Incluye escritorios de oficina, mesas de estudio, estaciones de
          trabajo. Los estándares prueban la capacidad de carga y la durabilidad
          de la superficie.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. Unidades de Almacenamiento
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Alacenas, gabinetes, casilleros, estantes. Énfasis en estabilidad,
          bordes afilados y acceso seguro.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. Camas
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Camas individuales, camas dobles, camas plegables. BIS verifica la
          resistencia del marco y el rendimiento a largo plazo.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. Literas
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Altamente reguladas debido a los riesgos de seguridad. Enfoque en
          barandillas, seguridad de escaleras y prevención de caídas.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. Compuestos Tapizados para Muebles No Domésticos
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Utilizados en oficinas, hoteles, auditorios. Los estándares incluyen
          pruebas de resistencia al fuego y durabilidad.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Otros Productos de Muebles
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Muebles escolares</li>
          <li>Asientos institucionales</li>
          <li>Muebles hospitalarios</li>
          <li>Muebles modulares</li>
          <li>Sistemas de muebles metálicos y de madera</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Cada categoría de producto tiene su propio Número IS aplicable,
          notificado por separado por BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Estándares BIS Aplicables a Muebles
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ¿Qué son los Estándares BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los Estándares BIS son especificaciones técnicas publicadas por BIS
          para definir:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Requisitos de materiales</li>
          <li>Parámetros de rendimiento</li>
          <li>Métodos de prueba</li>
          <li>Pautas de marcado</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado de los Números IS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un Número IS (Número de Norma India) identifica de manera única un
          estándar aplicable a un producto.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proceso de Notificación BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS emite Notificaciones BIS oficiales que hacen obligatorios ciertos
          estándares. Una vez notificado:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>El cumplimiento se vuelve obligatorio</li>
          <li>Los productos no certificados son ilegales</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cómo Identificar el Estándar BIS Correcto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes deben:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identificar la categoría del producto</li>
          <li>Estudiar el alcance IS aplicable</li>
          <li>Confirmar la aplicabilidad del estándar</li>
          <li>Evitar la selección incorrecta del estándar (un error común)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tipos de Certificación BIS Aplicables para Muebles
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Licencia BIS bajo el Esquema ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los productos de muebles generalmente están cubiertos bajo el Esquema
          de Certificación ISI, que involucra:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pruebas de productos</li>
          <li>Inspección de fábrica</li>
          <li>Auditorías de vigilancia</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Registro BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El Registro BIS es principalmente para productos electrónicos e IT.
          Los muebles generalmente requieren Licencia BIS, no Registro.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para Muebles en India
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 1: Preparación Pre-Solicitud
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identificar el Estándar IS aplicable</li>
          <li>Evaluar el cumplimiento del diseño del producto</li>
          <li>Preparar documentación técnica</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 2: Solicitud BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Enviar Solicitud BIS con:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detalles del producto</li>
          <li>Detalles de fabricación</li>
          <li>Referencia estándar</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 3: Solicitud BIS en Línea
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La solicitud se presenta a través del portal en línea de BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 4: Pruebas de Producto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Las muestras se prueban en laboratorios reconocidos por BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 5: Inspección de Fábrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los oficiales de BIS verifican:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proceso de fabricación</li>
          <li>Control de calidad</li>
          <li>Instalaciones de prueba</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 6: Otorgamiento de Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Al cumplir, BIS otorga la licencia.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paso 7: Uso de la Marca de Certificación BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El fabricante puede colocar la Marca BIS / Marca ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Pruebas para Muebles
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Las pruebas son una parte obligatoria del proceso de registro BIS. Los
          muebles se someten a pruebas rigurosas para garantizar la seguridad y
          durabilidad.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pruebas Obligatorias para Muebles:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de Carga Estructural</li>
          <li>Prueba de Estabilidad</li>
          <li>Prueba de Resistencia de Barandilla</li>
          <li>Prueba de Impacto</li>
          <li>Prueba de Riesgo de Atrapamiento</li>
          <li>Prueba de Resistencia y Ángulo de Escalera</li>
          <li>Prueba de Seguridad del Material</li>
          <li>Prueba de Radio de Borde y Nitidez</li>
          <li>Prueba de Soporte de Colchón</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Las pruebas deben realizarse únicamente en un laboratorio reconocido
          por BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para Certificación BIS para Muebles
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Documentos Clave Incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prueba de registro de fábrica</li>
          <li>Dibujos y especificaciones del producto</li>
          <li>Detalles de materias primas</li>
          <li>Informes de prueba</li>
          <li>Registros de control de calidad</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Errores Comunes de Documentación:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Referencia estándar incorrecta</li>
          <li>Datos de prueba incompletos</li>
          <li>Desajuste en el alcance del producto</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Costo de Certificación BIS para Muebles
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Componentes del Costo del Certificado BIS:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tarifas de solicitud gubernamentales</li>
          <li>Cargos de prueba</li>
          <li>Tarifas de inspección</li>
          <li>Tarifas de licencia</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factores de Costo de Certificación BIS:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Complejidad del producto</li>
          <li>Número de modelos</li>
          <li>Requisitos de prueba</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nota: Las tarifas de consultoría profesional son independientes de las
          tarifas gubernamentales.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cronograma para Registro de Certificado BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Cronograma Promedio:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pruebas: 3–6 semanas</li>
          <li>Inspección: 1–2 semanas</li>
          <li>Otorgamiento de Licencia: 2–4 semanas</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total: 8–12 semanas (aprox.)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cómo Obtener Certificación BIS en India para Fabricantes de Muebles
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Consejos Prácticos:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Elegir el estándar IS correcto</li>
          <li>Asegurar la preparación de la fábrica</li>
          <li>Mantener registros de prueba</li>
          <li>Evitar errores de documentación</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Solicitud en Línea de Certificado BIS – Resumen Práctico
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Desafíos del Portal en Línea:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Errores técnicos</li>
          <li>Problemas de carga de documentos</li>
          <li>Confusión en la selección de estándares</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          La orientación adecuada reduce los retrasos.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Uso de la Marca BIS y Marca de Certificación BIS Después de la
          Aprobación
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Reglas de Marcado:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Referencia IS correcta</li>
          <li>Número de licencia</li>
          <li>Tamaño y visibilidad adecuados</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          El incumplimiento puede llevar a la suspensión.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos en la Certificación BIS para Muebles
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretación de estándares</li>
          <li>Fallos en pruebas de productos</li>
          <li>No conformidades en inspección</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Rol de los Consultores BIS en la Certificación de Muebles
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los consultores BIS profesionales ayudan mediante:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identificación de estándares correctos</li>
          <li>Gestión de pruebas e inspección</li>
          <li>Reducción del tiempo de aprobación</li>
          <li>Evitar rechazos costosos</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS para Muebles es una piedra angular de calidad,
          seguridad y cumplimiento legal en el creciente mercado de muebles de
          India. Ya sea que sea un fabricante, importador o propietario de
          marca, obtener un Certificado BIS para Muebles en India garantiza:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cumplimiento regulatorio</li>
          <li>Confianza del consumidor</li>
          <li>Éxito del mercado a largo plazo</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Al comprender el Proceso de Certificación BIS, Estándares, Costos y
          requisitos de Cumplimiento, las empresas pueden navegar con confianza
          el panorama regulatorio y construir productos de muebles más seguros,
          más fuertes y más confiables para el mercado indio.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes sobre Licencia BIS
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Es obligatoria la Certificación BIS para todos los productos de
              muebles en India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, la Certificación BIS es obligatoria solo para aquellos
              productos de muebles que están cubiertos bajo Estándares BIS
              notificados. Sin embargo, una vez que una categoría de producto de
              muebles es notificada por la Oficina de Normas de la India,
              fabricar, importar, vender o distribuir ese producto sin una
              Licencia BIS válida se vuelve ilegal en India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Qué productos de muebles requieren Licencia BIS en lugar de
              Registro BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Los productos de muebles generalmente caen bajo el Esquema de
              Certificación ISI, que requiere una Licencia BIS, no Registro BIS.
              El Registro BIS (CRS) se aplica principalmente a productos
              electrónicos e IT, mientras que los productos de muebles requieren
              pruebas + inspección de fábrica + Licencia BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Se pueden vender muebles importados en India sin Certificación
              BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No. Los productos de muebles importados cubiertos bajo Estándares
              BIS obligatorios deben tener Certificación BIS antes del despacho
              aduanero. Importar muebles no certificados puede resultar en:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Detención aduanera</li>
              <li>Re-exportación o destrucción</li>
              <li>Multas severas</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              Los fabricantes extranjeros deben obtener Licencia BIS antes de
              exportar muebles a India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Pueden los fabricantes extranjeros de muebles solicitar
              Certificación BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí. Los fabricantes extranjeros pueden solicitar bajo el Esquema
              de Certificación de Fabricantes Extranjeros (FMCS). Deben:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Nombrar un Representante Indio Autorizado (AIR)</li>
              <li>Cumplir con las Normas Indias</li>
              <li>Permitir la inspección de fábrica BIS en el extranjero</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Se requiere Certificación BIS para fabricantes de muebles
              artesanales o de pequeña escala?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, si el producto de muebles está cubierto bajo un estándar BIS
              obligatorio, entonces incluso las MSME, startups y unidades de
              pequeña escala deben obtener Certificación BIS. No hay exención
              basada en el volumen de producción.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Se requiere Certificación BIS para muebles de madera?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, los productos de muebles de madera como camas, sillas, mesas,
              escritorios y unidades de almacenamiento pueden requerir
              Certificación BIS si caen bajo estándares notificados. Los
              estándares BIS se aplican tanto a muebles de madera como
              metálicos, dependiendo del tipo de producto y uso.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Puede una Licencia BIS cubrir múltiples modelos de muebles?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, múltiples modelos o variantes pueden estar cubiertos bajo una
              sola Licencia BIS, siempre que:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Caigan bajo el mismo Estándar IS</li>
              <li>
                Los parámetros de construcción, material y diseño sean similares
              </li>
              <li>BIS apruebe la agrupación durante la solicitud</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Se puede transferir la Certificación BIS a otro fabricante?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No. La Licencia BIS no es transferible. Cada fabricante debe
              obtener su propio Certificado BIS, incluso si el diseño del
              producto es idéntico.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Qué es el Certificado BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Es una prueba oficial de cumplimiento con los Estándares BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Es obligatoria la Certificación BIS para muebles?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, para productos de muebles cubiertos bajo estándares
              notificados.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Cómo obtener Certificación BIS en India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              A través de pruebas, inspección y aprobación de licencia BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Qué es la Marca BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Una marca de conformidad que muestra la aprobación BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Costo de Certificación BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Depende del tipo de producto, pruebas y alcance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ¿Forma Completa de BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oficina de Normas de la India (Bureau of Indian Standards).
            </p>
          </div>
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
