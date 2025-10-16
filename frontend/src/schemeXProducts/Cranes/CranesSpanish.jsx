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

const CranesSpanish = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Certificación BIS Scheme X para Grúas</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="La Oficina de Estándares Indios (BIS) ha introducido la certificación obligatoria Scheme X para todos los tipos de grúas y sus ensamblajes, sub-ensamblajes y componentes."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certificación BIS para Grúas, Certificación BIS Scheme X para Grúas, Certificación Scheme X para Grúas, BIS para Grúas, OTR para Grúas"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta
          name="publisher"
          content="Dhruv Aggarwal, Head of Operations at Sun Certification India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Certificación BIS Scheme X para Grúas en India | Guía Completa"
        />
        <meta
          property="og:description"
          content="Aprende todo sobre la Certificación BIS Scheme X para Grúas en India. Entiende el cumplimiento OTR 2024, el proceso de Licencia BIS, los requisitos de marca ISI, y cómo obtener la certificación antes del plazo límite de septiembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/certificacion-bis-scheme-x-para-gruas"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certificación BIS Scheme X para Grúas en India | Guía Completa"
        />
        <meta
          name="twitter:description"
          content="Aprende todo sobre la Certificación BIS Scheme X para Grúas en India. Entiende el cumplimiento OTR 2024, el proceso de Licencia BIS, los requisitos de marca ISI, y cómo obtener la certificación antes del plazo límite de septiembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-gruas"
        />
      </Helmet>

      <CranesSpanishBreadcrumb />
      <CranesSpanishMainContent />
      <ServicesSpanish />
      <VideoSection />
      <FooterSpanish />
    </div>
  );
};

export default CranesSpanish;

const CranesSpanishBreadcrumb = () => {
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
                  <Link to="/SchemeX-Products">Productos Scheme X</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>BIS Scheme X para Grúas</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CranesSpanishMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CranesSpanishMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentSpanish />
      </div>
    </div>
  );
};

const CranesSpanishMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X para Grúas
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
            alt="Certificación BIS Scheme X para Grúas"
            title="Licencia BIS Scheme X para Grúas"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Las grúas se utilizan principalmente para levantar y transportar
          materiales y en manufactura, construcción, producción y minería. Como
          su funcionalidad puede ser crítica para la seguridad, las grúas no
          calificadas o de mala calidad pueden resultar en resbalones y caídas,
          mal funcionamiento del equipo o una pérdida costosa.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          En vista de estos peligros, la Oficina de Estándares Indios (BIS) ha
          hecho obligatoria la Certificación BIS para Grúas bajo la
          Certificación Scheme – X. Esto asegura que las grúas utilizadas en
          India sean seguras, confiables, eficientes y de calidad mundial.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          En este blog, te guiaremos sobre la importancia del Registro BIS
          Scheme X para Grúas, los aspectos legales del OTR para Grúas, y cómo
          obtener una Licencia BIS para Grúas y marcar la marca estándar BIS
          para Grúas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Por qué BIS para Grúas es Importante
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las grúas se utilizan ampliamente en:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Trabajos de construcción e infraestructura</li>
          <li>Puertos marítimos, astilleros y otros centros logísticos</li>
          <li>Fábricas y plantas de ensamblaje</li>
          <li>Minería de metales y manejo de materiales pesados</li>
          <li>Plantas de energía y otras industrias</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sin BIS para Grúas, los equipos no certificados pueden causar:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Averías mecánicas y accidentes.</li>
          <li>
            Reducción en disponibilidad y aumento en costos de mantenimiento
          </li>
          <li>Pérdida de elegibilidad para proyectos gubernamentales</li>
          <li>
            Los trabajadores y la infraestructura están expuestos a peligros de
            seguridad
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La marca BIS para Grúas proporciona confianza a consumidores y
          reguladores por igual de que un producto se adhiere a las normas
          robustas de calidad y seguridad de India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS Scheme X para Grúas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación Scheme X para Grúas bajo BIS es obligatoria bajo las
          Regulaciones de Evaluación de Conformidad BIS, 2018, que ordenan la
          certificación de productos para maquinaria crítica.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Características Principales del Scheme X para Grúas:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Requerido tanto para fabricantes domésticos como extranjeros</li>
          <li>
            Aplicable a todas las categorías principales de grúas y notificado
            bajo Estándares Indios
          </li>
          <li>
            Las pruebas de productos, auditorías de fábrica y evaluaciones de
            cumplimiento continuo son obligatorias
          </li>
          <li>
            Da licencia para el uso de la marca BIS en Grúas en productos
            certificados
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR para Grúas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Regulación Técnica Omnibus (OTR) para Grúas, que ha sido notificada
          por el Ministerio de Industrias Pesadas en 2024, busca ordenar la
          certificación.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Plazo límite: Todos los Fabricantes / Importadores de Grúas necesitan
          obtener una Licencia BIS para Grúas bajo Scheme X a más tardar el 01
          de septiembre de 2026. A partir de entonces, las grúas no certificadas
          no pueden ser comercializadas o importadas o utilizadas en
          licitaciones públicas en India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Ventajas de la Certificación BIS para Grúas
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Seguridad Mejorada: Las grúas certificadas minimizan las averías
            mecánicas y accidentes.
          </li>
          <li>
            Ventaja de Mercado: Los organismos gubernamentales y casas
            corporativas dan preferencia a las grúas certificadas BIS en
            e-licitaciones y proyectos masivos.
          </li>
          <li>
            Confianza del Consumidor y Contratista: La marca BIS para Grúas crea
            fe en calidad y confiabilidad.
          </li>
          <li>
            Entrada al Mercado Global: Para fabricantes extranjeros, la Licencia
            BIS para Grúas permite penetración sin problemas en el mercado indio
            regulado.
          </li>
          <li>
            Cumplimiento con la Ley India: Previene penalizaciones, decomisos y
            exclusión de contratos gubernamentales.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Cranes Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipos de Grúas Incluidas en la Certificación Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las grúas listadas bajo la certificación Scheme X son de varios tipos,
          por ejemplo:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Grúas Torre</li>
          <li>Grúas Móviles</li>
          <li>Grúas Gantry y Goliat</li>
          <li>Grúas OH/BR</li>
          <li>Grúas Orugas</li>
          <li>Grúas de Brazo</li>
          <li>Grúas Flotantes</li>
          <li>Grúas Industriales y de Taller</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cada variante debe ser requerida para adherirse a los Estándares
          Indios apropiados (códigos IS) como IS 4573:2020 para Especificación
          de Grúas Móviles Accionadas por Energía e IS/ISO 15442:2012 para Grúas
          - Requisitos de seguridad para grúas cargadoras.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          El tipo de equipo debe cumplir con los estándares indios relevantes
          (códigos IS) para diseño, capacidad de carga, seguridad y rendimiento.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedimiento para obtener Licencia BIS para Grúas
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificar Estándares IS Relevantes: Identifica el Estándar Indio
            aplicable a tu tipo de grúa.
          </li>
          <li>
            Pruebas en Laboratorios Reconocidos por BIS: Es obligatorio realizar
            pruebas de seguridad y eficacia.
          </li>
          <li>
            Inspección de Fábrica: BIS realiza inspecciones de sitios de
            producción y sistemas de calidad.
          </li>
          <li>
            Aplicación y Documentación: Presenta informes técnicos, resultados
            de pruebas y manuales de calidad.
          </li>
          <li>
            Licencia BIS en Grúas: Una vez aprobada, el fabricante tiene el
            privilegio de aplicar la marca BIS para Grúas.
          </li>
          <li>
            Cumplimiento Continuo: La auditoría regular y las inspecciones
            aseguran el cumplimiento continuo.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalizaciones por Incumplimiento
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ¿Qué pasa si uno no sigue el OTR para Grúas y no obtiene la
          Certificación BIS para Grúas para el 1 de septiembre de 2026?
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Prohibir ventas e importación de grúas no certificadas</li>
          <li>Decomisos de productos y multas cuantiosas</li>
          <li>Descalificar de licitaciones gubernamentales y PSU</li>
          <li>Impacto negativo a largo plazo en la marca</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusión
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La aplicación de la Certificación BIS Scheme X será un hito
          significativo que mejorará la seguridad, confiabilidad y proporcionará
          estándares industriales comunes en India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Para fabricantes, importadores, exportadores de Grúas, es importante
          tener una Licencia BIS para Grúas y pueden solicitar la misma a través
          de un portal de aplicación en línea para el Registro BIS de Grúas para
          cumplir con el estándar, construir confianza del consumidor, y también
          para evitar conflictos potenciales con BIS o el Gobierno Indio.
        </p>

        <ServiceAuthorSpanish />
      </div>
    </div>
  );
};
