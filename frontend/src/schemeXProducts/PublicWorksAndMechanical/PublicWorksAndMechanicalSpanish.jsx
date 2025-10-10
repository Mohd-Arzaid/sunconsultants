import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentSpanish from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentSpanish";
import ServiceAuthorSpanish from "@/components/manual/ServiceAuthor/ServiceAuthorSpanish";
import { ServicesSpanish } from "../PumpsAndLiquidElevators/PumpsAndLiquidElevatorsSpanish";
import FooterSpanish from "@/components/manual/Footer/FooterSpanish";

const PublicWorksAndMechanicalSpanish = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certificación BIS Scheme X para Obras Públicas y Aparatos Mecánicos
        </title>
        <meta
          name="description"
          content="La certificación BIS Scheme X para máquinas para obras públicas y construcción, y aparatos mecánicos es un movimiento estratégico hacia asegurar seguridad industrial, calidad uniforme y acceso al mercado"
        />
        <meta
          name="keywords"
          content="Certificación BIS para Obras Públicas y Aparatos Mecánicos, Certificación BIS Scheme X para Obras Públicas y Aparatos Mecánicos, Certificación Scheme X para Obras Públicas y Aparatos Mecánicos, BIS para Obras Públicas y Aparatos Mecánicos, OTR para Obras Públicas y Aparatos Mecánicos"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta
          name="publisher"
          content="Dhruv Aggarwal, Head of Operations at Sun Certification India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Certificación BIS Scheme X para Obras Públicas y Aparatos Mecánicos en India | Guía Completa"
        />
        <meta
          property="og:description"
          content="Aprende todo sobre la Certificación BIS Scheme X para Obras Públicas y Aparatos Mecánicos en India. Entiende el cumplimiento OTR 2024, el proceso de Licencia BIS, los requisitos de marca ISI, y cómo obtener la certificación antes del plazo límite de septiembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/es/certificacion-bis-scheme-x-para-obras-publicas-y-aparatos-mecanicos"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />
        <meta
          name="twitter:title"
          content="Certificación BIS Scheme X para Obras Públicas y Aparatos Mecánicos en India | Guía Completa"
        />
        <meta
          name="twitter:description"
          content="Aprende todo sobre la Certificación BIS Scheme X para Obras Públicas y Aparatos Mecánicos en India. Entiende el cumplimiento OTR 2024, el proceso de Licencia BIS, los requisitos de marca ISI, y cómo obtener la certificación antes del plazo límite de septiembre 2026"
        />
        <link
          rel="canonical"
          href="https://bis-certifications.com/es/certificacion-bis-scheme-x-para-obras-publicas-y-aparatos-mecanicos"
        />
      </Helmet>

      <PublicWorksAndMechanicalBreadcrumbSpanish />
      <PublicWorksAndMechanicalMainContentSpanish />
      <ServicesSpanish />
      <VideoSection />
      <FooterSpanish />
    </div>
  );
};

export default PublicWorksAndMechanicalSpanish;

const PublicWorksAndMechanicalBreadcrumbSpanish = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/SchemeX-Products">Productos SchemeX</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>
                  Certificación BIS Scheme X para Obras Públicas y Aparatos
                  Mecánicos
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalMainContentSpanish = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PublicWorksAndMechanicalMainContentLeftSpanish />

        {/* Right Side Content */}
        <ServicesRightSideContentSpanish />
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalMainContentLeftSpanish = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X para Obras Públicas y Aparatos Mecánicos
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-Machines-for-public-works -&-building.png"
            alt="Certificación BIS Scheme X para Obras Públicas y Aparatos Mecánicos"
            title="Licencia BIS para Máquinas para obras públicas y construcción"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Con el rápido desarrollo de infraestructura y modernización de
          industrias, el rendimiento y maquinaria confiable es de suma
          importancia. Las máquinas y aparatos mecánicos actúan como el pivote
          en obras de ingeniería, manufactura y construcción de obras públicas y
          industrias especializadas. Es imperativo que salvaguardemos su calidad
          y conformidad. Es una obligación legal impuesta por el Bureau of
          Indian Standards (BIS) bajo la Certificación Scheme X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Para implementar y agilizar la aplicación de estándares obligatorios
          dentro de los confines de varias categorías de maquinaria industrial,
          la Orden de Regulación Técnica Omnibus (OTR), 2024 fue emitida por el
          Ministerio de Industrias Pesadas. Esta orden establece que todos los
          tipos de máquinas para obras públicas, construcción de edificios, y
          otros aparatos mecánicos, incluyendo aquellos que no están
          expresamente mencionados en otras subdivisiones del Capítulo 84, están
          requeridos para obtener certificación BIS bajo Scheme X.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Esta publicación discute todos los tipos de máquinas y maquinaria
          utilizados para obras públicas y la construcción de edificios,
          aparatos mecánicos con funciones individuales, sus ensamblajes,
          subensamblajes, la importancia y alcance del esquema ampliamente
          discutido, proceso de certificación y ventajas, y también los
          documentos que tienen que ser presentados.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importancia del BIS para Obras Públicas y Aparatos Mecánicos
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Estas máquinas son comunes en:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Construcción de infraestructura pública (carreteras, puentes,
            suministros de agua)
          </li>
          <li>Proyectos de ingeniería y construcción pesada</li>
          <li>Servicios municipales y servicios públicos</li>
          <li>
            Instalaciones industriales que necesitan elevación de máquinas o
            procesamiento
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sin BIS para Obras Públicas y Aparatos Mecánicos, los riesgos
          incluyen:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Falla de máquina mientras está en proyectos importantes</li>
          <li>Consideraciones de seguridad ocupacional y del usuario final</li>
          <li>Mayor costo de mantenimiento y tiempo de inactividad</li>
          <li>Exclusión de proyectos financiados por el gobierno</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La certificación Scheme X para Obras Públicas y Aparatos Mecánicos
          asegura que la maquinaria opere de manera segura, eficiente y con
          riesgo mínimo de falla.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ¿Qué es la certificación BIS Scheme X para Obras Públicas y Aparatos
          Mecánicos?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS Scheme X para Obras Públicas y Aparatos Mecánicos
          está bajo las Regulaciones de Evaluación de Conformidad BIS, 2018. Es
          un medio identificado y un instrumento regulatorio para asegurar que
          la maquinaria industrial e infraestructura se conforme a los
          Estándares Indios.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Aspectos Clave de la Calificación Scheme X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Aplicable para fabricantes indios y extranjeros ambos</li>
          <li>Incluye máquinas para obras públicas y servicios públicos</li>
          <li>Pruebas en laboratorios reconocidos por BIS</li>
          <li>
            Auditorías de fábrica e inspecciones regulares de cumplimiento están
            incluidas
          </li>
          <li>
            Otorga el derecho a usar la Marca Estándar BIS después de la
            certificación
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR para Equipos de Obras Públicas y Mecánicos
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Ministerio de Industrias Pesadas ha emitido la Regulación Técnica
          Omnibus (OTR) para Obras Públicas y Aparatos Mecánicos en 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Fecha límite: Para el 1 de septiembre de 2026, todos los fabricantes e
          importadores deben cumplir con la certificación Scheme X para Obras
          Públicas y Aparatos Mecánicos. Después de esta fecha, las máquinas no
          registradas no serán permitidas para ser fabricadas, vendidas o
          importadas en India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Beneficios del BIS para Obras Públicas y Aparatos Mecánicos
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Seguridad del Producto: Prevenir colapso debido a problemas
            mecánicos y operación confiable
          </li>
          <li>
            Cumplimiento Regulatorio: Satisface el OTR para Obras Públicas y
            Aparatos Mecánicos
          </li>
          <li>
            Ventaja de Mercado: La certificación es a menudo requerida para
            licitaciones públicas y proyectos gubernamentales
          </li>
          <li>
            Confianza del Cliente: Las máquinas que están oficialmente
            certificadas son preferidas por algunos de los compradores, ya que
            es una garantía de calidad
          </li>
          <li>
            Responsabilidad Reducida: Potencial reducido para exposición legal y
            de marca con productos certificados
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipos de Obras Públicas y Aparatos Mecánicos en OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X para Certificación de Obras Públicas y Aparatos Mecánicos
          cubre el siguiente producto:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Máquinas para hacer y mantener carreteras</li>
          <li>Maquinaria de elevación hidráulica y manual</li>
          <li>
            Aparatos de servicio municipal (equipos de distribución de agua
            etc.)
          </li>
          <li>Equipos de servicio y manejo mecánico</li>
          <li>
            Equipos especialmente diseñados para uso industrial en obras
            públicas y servicios
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deben cumplir con los Estándares Indios apropiados (códigos IS), donde
          sea aplicable, incluyendo IS 16819:2018/ISO 12100:2010 (Seguridad de
          Maquinaria Principios Generales para Diseño- Evaluación de Riesgo y
          Reducción de Riesgo). Todas estas formas deben ser manufacturadas
          según los respectivos Estándares Indios para seguridad, rendimiento y
          calidad.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedimiento para Certificación BIS para Obras Públicas y Aparatos
          Mecánicos
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificar Estándares Aplicables: Elegir códigos IS aplicables para
            tu maquinaria
          </li>
          <li>
            Pruebas de Producto: Realizar pruebas de rendimiento y seguridad en
            Laboratorios aprobados por BIS
          </li>
          <li>
            Inspección de Fábrica: Los funcionarios de BIS visitan instalaciones
            de producción para asegurar que los controles de calidad estén en su
            lugar
          </li>
          <li>
            Documentación: Presentar formularios de aplicación, informes
            técnicos y manuales de calidad
          </li>
          <li>
            Otorgamiento de Licencia: BIS otorga certificación y permite el uso
            de la Marca Estándar BIS
          </li>
          <li>
            Cumplimiento Continuo: Hay pruebas y auditorías continuas para
            asegurar cumplimiento continuo
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalidades por Incumplimiento
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          El incumplimiento de la Certificación BIS para Obras Públicas y
          Aparatos Mecánicos establecida en el OTR para Obras Públicas y
          Aparatos Mecánicos implicará:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Prohibición de venta o importación de máquinas no certificadas
          </li>
          <li>Multas pesadas y confiscación de producto</li>
          <li>
            Ser excluido de licitaciones gubernamentales y procesos de
            contratación
          </li>
          <li>Reputación fuertemente manchada</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusión
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          El certificado BIS Scheme X para obras públicas y aparatos mecánicos
          apoyado por OTR para obras públicas y aparatos mecánicos (2024), lleva
          al país un paso más cerca de establecer niveles de calidad uniforme y
          seguridad en maquinaria de infraestructura.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Para fabricantes e importadores, la adquisición de la certificación
          Scheme X para Obras Públicas y Aparatos Mecánicos es más que mero
          cumplimiento – representa una inversión estratégica.
        </p>

        <ServiceAuthorSpanish />
      </div>
    </div>
  );
};
