import FaqAuthorSpanish from "@/components/common/FaqAuthor/FaqAuthorSpanish";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
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

const BISCertificationChainPipeWrenchesSpanish = () => {
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

export default BISCertificationChainPipeWrenchesSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para llaves de cadena para tuberías | IS 4123:1982 Licencia BIS";
  const ogTitle =
    "Certificación BIS para llaves de cadena para tuberías - Guía IS 4123:1982";
  const twitterTitle = "Licencia BIS para llaves de cadena para tuberías | IS 4123:1982";
  const metaDescription =
    "Obtenga el certificado BIS para llaves de cadena para tuberías según IS 4123:1982. Proceso, documentos, ensayos, coste y plazos para la certificación BIS en India.";
  const ogDescription =
    "Guía completa de certificación BIS para llaves de cadena para tuberías según IS 4123:1982. Conozca proceso, coste, documentos, ensayos y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicite el certificado BIS para llaves de cadena para tuberías según IS 4123:1982. Conozca el proceso BIS, documentos, ensayos, tasas y plazos en India.";
  const metaKeywords =
    "Certificado BIS llaves cadena tuberías, Licencia BIS llaves cadena tuberías, IS 4123:1982, Certificación BIS llaves cadena tuberías";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/llaves-de-cadena-para-tuberias-is-4123";
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
                    <Link to="/Blogs">Últimos blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificado BIS para llaves de cadena para tuberías – IS 4123:1982
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
          Certificación BIS llaves de cadena para tuberías – Guía completa IS 4123:1982
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforChainPipeWrenches.png"
            title="Licencia BIS para llaves de cadena para tuberías"
            alt="Certificado BIS para llaves de cadena para tuberías - IS 4123:1982 Certificación BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las llaves de cadena para tuberías son herramientas manuales pesadas especializadas utilizadas para
          sujetar, apretar y aflojar tuberías de gran diámetro, accesorios redondos
          y componentes cilíndricos donde las llaves de tubería convencionales
          son ineficaces. Se utilizan ampliamente en oleoductos y gasoductos,
          refinerías, centrales eléctricas, plantas petroquímicas, astilleros,
          proyectos de abastecimiento de agua, talleres de ingeniería pesada e
          instalaciones de construcción de infraestructuras. El mecanismo de sujeción
          se basa en una cadena endurecida que rodea la tubería, permitiendo una
          distribución uniforme de la carga y la aplicación de par elevado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dado que las llaves de cadena para tuberías se utilizan en operaciones de alta tensión y críticas para la seguridad,
          cualquier defecto en la calidad del material, la resistencia de la cadena, el diseño
          del mango o el mecanismo de bloqueo puede provocar deslizamiento, liberación repentina,
          fallo de la herramienta, lesiones graves, daños en equipos y paradas costosas.
          Para prevenir estos riesgos y estandarizar la calidad en el mercado, el Gobierno
          de la India exige el cumplimiento de las Normas Indias para estas herramientas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtener un certificado BIS para llaves de cadena para tuberías según IS 4123:1982
          es, por tanto, un requisito legal obligatorio para fabricantes e
          importadores que vendan llaves de cadena para tuberías en la India. Una certificación
          BIS válida para llaves de cadena para tuberías confirma que el producto ha
          sido ensayado y aprobado en resistencia, rendimiento de sujeción, precisión
          dimensional y seguridad general conforme a las Normas Indias.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificación BIS es un sistema de conformidad de productos y garantía de calidad
          administrado por la Oficina de Normas Indias (Bureau of Indian Standards), la autoridad
          nacional responsable de la normalización, ensayo y certificación de
          productos en la India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado del certificado BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El significado del certificado BIS se refiere a una aprobación oficial emitida por
          BIS que confirma que un producto cumple la Norma India pertinente
          (IS) y se fabrica bajo un sistema de calidad controlado. Esta
          certificación permite al fabricante utilizar la marca ISI en el
          producto certificado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La certificación BIS existe para:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proteger a los usuarios de productos inseguros y de calidad inferior</li>
          <li>Garantizar una calidad consistente entre fabricantes</li>
          <li>Apoyar la aplicación de las normas de control de calidad</li>
          <li>Fomentar la confianza en los productos industriales indios e importados</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Explicación de la marca ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La marca de certificación BIS, conocida comúnmente como marca ISI, es un
          símbolo visible de conformidad. Para las llaves de cadena para tuberías, la marca ISI
          garantiza a los compradores que:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La herramienta cumple con IS 4123:1982</li>
          <li>La cadena y el mango pueden soportar las cargas especificadas</li>
          <li>El producto está legalmente aprobado para la venta en la India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norma BIS aplicable a llaves de cadena para tuberías
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 4123:1982 – Especificación para llaves de cadena para tuberías
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La Norma India aplicable a las llaves de cadena para tuberías es IS
          4123:1982, que establece los requisitos de diseño, materiales,
          dimensiones, rendimiento y ensayo de las llaves de cadena para tuberías.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Alcance de IS 4123:1982
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Esta norma cubre:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Llaves de cadena para tuberías de distintos tamaños y capacidades</li>
          <li>Construcción del mango y montaje de la cadena</li>
          <li>Material de la cadena, dimensiones de eslabones y resistencia</li>
          <li>Tolerancias dimensionales y calidad de fabricación</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Seguridad, rendimiento e intención del ensayo
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 4123:1982 está diseñada para garantizar que:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La cadena proporcione sujeción uniforme y segura en las tuberías</li>
          <li>La llave soporte par elevado sin fallos</li>
          <li>Los mangos y articulaciones no se deformen bajo carga</li>
          <li>La herramienta funcione con seguridad en aplicaciones industriales pesadas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quién debe cumplir para la licencia BIS de llaves de tubería
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios de llaves de cadena para tuberías</li>
          <li>Importadores y distribuidores</li>
          <li>Fabricantes extranjeros que suministran a la India</li>
          <li>Comerciantes y marcas que venden bajo marcas blancas</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Chain Pipe Wrenches
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumer and Workplace Safety Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Non-standard chain pipe wrenches may lead to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chain slippage or breakage</li>
          <li>Sudden release of high-torque load</li>
          <li>Severe hand, arm, or body injuries</li>
          <li>Damage to pipelines and fittings</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Government and Regulatory Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          As per applicable BIS notifications and quality control regulations,
          chain pipe wrenches covered under IS 4123:1982 must obtain BIS
          certification before sale, import, or distribution in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Implications
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Selling non-certified chain pipe wrenches can result in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Seizure of goods</li>
          <li>Heavy financial penalties</li>
          <li>Suspension of business operations</li>
          <li>Legal action under the BIS Act</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market and Brand Benefits
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS License for Chain Pipe Wrenches enables businesses to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Build trust with industrial buyers and EPC contractors</li>
          <li>Qualify for government, PSU, and infrastructure tenders</li>
          <li>Compete with established domestic and international brands</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de certificación BIS paso a paso para llaves de cadena para tuberías
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aplicabilidad e identificación de la norma
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El primer paso consiste en confirmar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Categoría de producto: Llaves de cadena para tuberías</li>
          <li>Norma aplicable: IS 4123:1982</li>
          <li>Gama de tamaños y variantes de capacidad</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proceso de solicitud BIS en línea
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes deben:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registrarse en el portal BIS</li>
          <li>Seleccionar IS 4123:1982 en la solicitud BIS</li>
          <li>Subir los documentos técnicos y legales requeridos</li>
          <li>Abonar las tasas gubernamentales aplicables</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Este proceso se conoce comúnmente como solicitud BIS en línea o registro de
          certificado BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tasas y estructura de costes
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El coste de la certificación BIS incluye generalmente:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tasas de solicitud y tramitación</li>
          <li>Gastos de ensayo de muestras</li>
          <li>Gastos de inspección de fábrica</li>
          <li>Tasas de licencia y marcado</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          El coste total de la certificación BIS depende de:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Número de tamaños de llave</li>
          <li>Complejidad de los ensayos</li>
          <li>Ubicación de fabricación</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ensayo de muestras de producto (según IS 4123:1982)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las muestras se ensayan en laboratorios reconocidos por BIS para:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistencia a la tracción de la cadena</li>
          <li>Resistencia a carga y par</li>
          <li>Precisión dimensional</li>
          <li>Resistencia del mango y calidad de fabricación</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspección de fábrica y auditoría
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un responsable BIS realiza una auditoría in situ para verificar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Procesos de fabricación y montaje</li>
          <li>Control de fabricación o aprovisionamiento de la cadena</li>
          <li>Sistema de control de calidad</li>
          <li>Instalaciones de ensayo e inspección internas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Concesión de licencia BIS y marca ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tras el ensayo e inspección satisfactorios:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS emite la licencia del Bureau of Indian Standards</li>
          <li>
            El fabricante queda autorizado a colocar la marca ISI en llaves de cadena
            para tuberías
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cumplimiento poscertificación
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las obligaciones poscertificación incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Auditorías de vigilancia periódicas</li>
          <li>Ensayos de muestras de mercado</li>
          <li>Renovación puntual de la licencia</li>
          <li>Cumplimiento continuo de IS 4123:1982</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos necesarios para la certificación BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos del fabricante
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registro de fábrica o certificado MSME</li>
          <li>Diagrama de flujo del proceso de fabricación</li>
          <li>Lista de maquinaria y equipo de ensayo</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado de constitución de la empresa</li>
          <li>Registro GST</li>
          <li>Autorización de marca (si aplica)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Planos y especificaciones del producto</li>
          <li>Material de la cadena y detalles del tratamiento térmico</li>
          <li>Plan de control de calidad e inspección</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos de solicitud BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulario de solicitud BIS</li>
          <li>Detalles de la solicitud de ensayo</li>
          <li>Declaraciones y compromisos</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Estos se conocen conjuntamente como DOCUMENTOS DE CERTIFICADO BIS o
          DOCUMENTOS DE CERTIFICACIÓN BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de ensayo según IS 4123:1982
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Los ensayos obligatorios incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ensayo de resistencia a la tracción de la cadena</li>
          <li>Ensayo de carga y par</li>
          <li>Verificación dimensional</li>
          <li>Inspección de material y calidad de fabricación</li>
          <li>Ensayo de rendimiento de sujeción funcional</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Todos los ensayos deben realizarse únicamente en laboratorios reconocidos por BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos habituales y cómo evitarlos
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Problemas habituales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fallo en los ensayos de resistencia de la cadena</li>
          <li>Tratamiento térmico incorrecto de los eslabones</li>
          <li>No conformidades dimensionales</li>
          <li>Documentación incompleta</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Soluciones y buenas prácticas
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Realizar ensayos internos previos</li>
          <li>Utilizar materias primas certificadas</li>
          <li>Mantener un control de proceso estricto</li>
          <li>Contar con consultores BIS con experiencia</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la certificación BIS para fabricantes e importadores
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cumplimiento total de la normativa india</li>
          <li>Protección frente a sanciones y medidas de ejecución</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios comerciales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mayor aceptación por parte de compradores industriales</li>
          <li>Elegibilidad para proyectos de empresas públicas e infraestructuras</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios de marca
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La marca ISI mejora la credibilidad y la confianza</li>
          <li>Diferenciación frente a proveedores no organizados</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Expansión de mercado
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Acceso más fácil a grandes mercados industriales</li>
          <li>Mayor credibilidad en exportación</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanciones por incumplimiento
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          El incumplimiento puede dar lugar a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Multas económicas cuantiosas</li>
          <li>Incautación de productos</li>
          <li>Cancelación de licencias</li>
          <li>Procesamiento legal según la Ley BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Quién necesita la certificación BIS para llaves de cadena para tuberías?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Importadores</li>
          <li>Fabricantes extranjeros (con representante autorizado en la India)</li>
          <li>Comerciantes y proveedores industriales</li>
          <li>Vendedores en comercio electrónico que ofrezcan llaves de cadena para tuberías</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por qué elegirnos para consultoría de certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ofrecemos servicios de consultoría de certificación BIS de principio a fin,
          incluyendo:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aplicabilidad del producto y análisis de brechas</li>
          <li>Preparación y verificación de documentación</li>
          <li>Coordinación con laboratorios reconocidos por BIS</li>
          <li>Apoyo en inspección de fábrica y auditoría</li>
          <li>Aprobaciones más rápidas con mínimas consultas</li>
          <li>Apoyo en cumplimiento y renovación poscertificación</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nuestra experiencia en herramientas manuales industriales y equipos pesados
          garantiza un proceso de certificación BIS fluido, fiable y totalmente conforme.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtener un certificado BIS para llaves de cadena para tuberías según IS 4123:1982
          es un requisito legal y de calidad crucial para vender estas
          herramientas pesadas en la India. La certificación BIS para llaves de cadena para tuberías
          garantiza seguridad, resistencia y fiabilidad, mientras que la licencia BIS para
          llaves de cadena para tuberías refuerza la credibilidad de la marca y la
          aceptación en el mercado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para fabricantes, importadores y vendedores, el cumplimiento a tiempo no solo
          evita sanciones sino que también abre el acceso a proyectos industriales,
          de infraestructuras y gubernamentales de alto valor. Con orientación experta y
          apoyo estructurado de cumplimiento, el proceso de certificación BIS resulta
          eficiente, predecible y totalmente alineado con las Normas Indias.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas frecuentes – Certificación BIS para llaves de cadena para tuberías
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P1. ¿Es obligatoria la certificación BIS para llaves de cadena para tuberías?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, el cumplimiento de IS 4123:1982 es obligatorio en la India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P2. ¿Cuál es la denominación completa del certificado BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certificado de la Oficina de Normas Indias (Bureau of Indian Standards Certificate).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P3. ¿Cuánto tarda el proceso de certificación BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Normalmente 45–60 días laborables para fabricantes indios y 90-120
              días para fabricantes extranjeros.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P4. ¿Cuál es el coste de la certificación BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Depende del rango de tamaños del producto y del alcance de los ensayos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P5. ¿Pueden los importadores solicitar la certificación BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, con la autorización adecuada del fabricante.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P6. ¿Es obligatoria la marca ISI?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, el marcado ISI es obligatorio tras la certificación.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P7. ¿Pueden los fabricantes extranjeros obtener la certificación BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, a través de un representante autorizado en la India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P8. ¿Qué ensayos se requieren según IS 4123:1982?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ensayos de resistencia de la cadena, carga, dimensionales y calidad de fabricación.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P9. ¿Es obligatoria la inspección de fábrica?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, BIS realiza una auditoría in situ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P10. ¿Se pueden cubrir varios tamaños con una sola licencia?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, sujeto a ensayo y aprobación.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P11. ¿Qué ocurre si se venden llaves de cadena para tuberías no certificadas?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Pueden aplicarse sanciones, incautación y acciones legales.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P12. ¿Es obligatoria la solicitud BIS en línea?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, todas las solicitudes se presentan en línea.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P13. ¿Son necesarias las renovaciones de las licencias BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, la renovación periódica es obligatoria.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P14. ¿Pueden los consultores reducir los retrasos en las aprobaciones?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, los consultores profesionales ayudan a evitar errores.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P15. ¿Mejora la certificación BIS la confianza de los compradores?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, mejora significativamente la confianza en el mercado.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-4123-2024-Sun-Certifications-India.pdf"
            title="Certificado BIS para llaves de cadena para tuberías - IS 4123:2024 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoRead />

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
              Nuestros servicios
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Mejor consultor de certificados de la India
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
              Marca BIS (Licencia ISI) para fabricación extranjera
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
              Certificación de registro CDSCO
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
              Gestión de residuos plásticos
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
              Certificaciones de certificado EPR
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
              Certificaciones de certificado LMPC
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
              Certificado de registro BIS
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
              Marca ISI (BIS) para fabricantes indios
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
