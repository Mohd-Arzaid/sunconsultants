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

const ConstructionMachinerySpanish = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certificación BIS Scheme X para Maquinaria de Construcción
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="La Certificación BIS Scheme X es obligatoria para maquinaria de construcción, movimiento de tierras y minería para asegurar seguridad, calidad y estandarización en sectores industriales críticos"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certificación BIS para Maquinaria de Construcción, Certificación BIS Scheme X para Maquinaria de Construcción, Certificación Scheme X para Maquinaria de Construcción, BIS para Maquinaria de Construcción, OTR para Maquinaria de Construcción"
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
          content="Certificación BIS Scheme X para Maquinaria de Construcción en India | Guía Completa"
        />
        <meta
          property="og:description"
          content="Aprende todo sobre la Certificación BIS Scheme X para Maquinaria de Construcción en India. Entiende el cumplimiento OTR 2024, el proceso de Licencia BIS, los requisitos de marca ISI, y cómo obtener la certificación antes del plazo límite de septiembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/certificacion-bis-scheme-x-para-maquinaria-de-construccion"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certificación BIS Scheme X para Maquinaria de Construcción en India | Guía Completa"
        />
        <meta
          name="twitter:description"
          content="Aprende todo sobre la Certificación BIS Scheme X para Maquinaria de Construcción en India. Entiende el cumplimiento OTR 2024, el proceso de Licencia BIS, los requisitos de marca ISI, y cómo obtener la certificación antes del plazo límite de septiembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-maquinaria-de-construccion"
        />

        {/* Hreflang Tags for Multi-language Support - English is the default language */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-construction-machinery"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-kensetsu-kikai"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-jian-zhu-ji-xie-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-machines-de-construction"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-baumaschinen"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-moc-xay-dung"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-maquinaria-de-construccion"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-geonseol-gigye"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-mesin-konstruksi"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-macchinari-da-costruzione"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-thi-khuk-khuk"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-bouwmachines"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-alat-albina"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-construction-machinery"
        />
      </Helmet>

      <ConstructionMachinerySpanishBreadcrumb />
      <ConstructionMachinerySpanishMainContent />
      <ServicesSpanish />
      <VideoSection />
      <FooterSpanish />
    </div>
  );
};

export default ConstructionMachinerySpanish;

const ConstructionMachinerySpanishBreadcrumb = () => {
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
                <BreadcrumbPage>
                  BIS Scheme X para Maquinaria de Construcción
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const ConstructionMachinerySpanishMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <ConstructionMachinerySpanishMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentSpanish />
      </div>
    </div>
  );
};

const ConstructionMachinerySpanishMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificación BIS para Maquinaria de Construcción
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Construction-Machinery.png"
            alt="Certificación BIS Scheme X para Maquinaria de Construcción"
            title="Licencia BIS Scheme X para Maquinaria de Construcción"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Las excavadoras, cargadoras, bulldozers, mezcladoras de concreto y
          compactadoras de carretera son las principales máquinas de
          construcción utilizadas en la construcción de infraestructura de
          India. La mayor demanda de maquinaria segura y confiable surge de las
          enormes inversiones en carreteras, ciudades inteligentes, fábricas y
          viviendas.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          La Oficina de Estándares Indios (BIS) ha hecho obligatoria la
          Certificación BIS bajo el Scheme-X para Maquinaria de Construcción
          para proporcionar garantía de calidad, servicio y seguridad. Asegura
          que un dispositivo cumple con los Estándares Indios antes de estar
          disponible para venta o importación en India.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Aquí en este artículo, vas a aprender sobre la Certificación BIS
          Scheme X para Maquinaria de Construcción, el requisito de OTR para
          Maquinaria de Construcción, y el proceso de obtener la Licencia BIS
          para Maquinaria de Construcción y la marca BIS para Maquinaria de
          Construcción.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Por qué BIS para Maquinaria de Construcción es Importante
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La maquinaria de construcción se aplica en el crecimiento de
          infraestructura y sitios de desarrollo de construcción gigantes.
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Desarrollo de carreteras y autopistas</li>
          <li>Proyectos de bienes raíces y vivienda</li>
          <li>Minería y canteras</li>
          <li>Construcción industrial e ingeniería pesada</li>
          <li>Puertos, aeropuertos y proyectos de metro</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las consecuencias de la ausencia de BIS para Equipos de Construcción
          son las siguientes:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Falla de equipos y tiempo de inactividad costoso</li>
          <li>Mayores probabilidades de accidentes y riesgo de peligros</li>
          <li>Incumplimiento con licitaciones gubernamentales</li>
          <li>Mayores costos de mantenimiento y operación</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La marca BIS para Maquinaria de Construcción indica que el producto es
          seguro, confiable y cumple con los Estándares Indios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS Scheme X para Maquinaria de Construcción?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificación BIS Scheme X está cubierta por los Requisitos de
          Evaluación de Conformidad (2018) de la Oficina de Estándares Indios
          (BIS) que proporciona pautas para productos. En este esquema, BIS
          decide la calidad del producto y se asegura de que esté mitigando los
          peligros para la salud humana.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Características Clave - Certificación Scheme X para Equipos de
          Construcción:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obligatorio para fabricantes domésticos y extranjeros</li>
          <li>
            Incluye todos los tipos de maquinaria pesada y equipos de
            construcción
          </li>
          <li>
            Las pruebas de productos son obligatorias, las visitas a fábricas
            son obligatorias y las auditorías de cumplimiento deben realizarse
            regularmente
          </li>
          <li>
            Autoriza el uso de la marca BIS para Maquinaria de Construcción
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR para Equipos de Construcción
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificación Scheme X se volverá obligatoria como parte de la
          Regulación Técnica Omnibus (OTR) 2024 para Maquinaria de Construcción
          anunciada por el Ministerio de Industrias Pesadas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Plazo límite: Todos los fabricantes e importadores deben obtener una
          Licencia BIS para Maquinaria de Construcción bajo Scheme X antes del
          01 de septiembre de 2026. A partir de esta fecha, los equipos no
          certificados no pueden ser producidos, transportados ni vendidos para
          programas de infraestructura pública.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Beneficios de la Certificación BIS para Equipos o Maquinaria de
          Construcción
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Seguridad y Confiabilidad: Reduce el riesgo de falla mecánica o
            accidentes en sitios de construcción.
          </li>
          <li>
            Acceso al Mercado y Elegibilidad para Licitaciones: Los Productos
            Certificados BIS son elegibles para Licitaciones Gubernamentales y
            PSU.
          </li>
          <li>
            Confianza del Consumidor y Contratista: La marca BIS de Maquinaria
            de Construcción asegura productos seguros y de calidad para todos
            sus compradores.
          </li>
          <li>
            Entrada al Mercado Global: Una Licencia BIS para Maquinaria de
            Construcción puede ser beneficiosa para empresas extranjeras para
            acceso fácil a mercados indios.
          </li>
          <li>
            Cumplimiento Legal: Inmunidad de multas, prohibiciones y sanciones
            bajo el OTR de Maquinaria de Construcción.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Construction Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipos de Equipos de Construcción cubiertos bajo Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificación BIS Scheme X para Maquinaria de Construcción es
          aplicable a diferentes categorías de equipos como:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Excavadoras y Cargadoras Retroexcavadoras</li>
          <li>Bulldozers y Compactadoras de Carretera</li>
          <li>Grúas utilizadas en sitios de construcción</li>
          <li>Mezcladoras de Concreto y Plantas de Dosificación</li>
          <li>Plantas de Asfalto y Pavimentadoras</li>
          <li>Maquinaria de Pilotes y Perforación</li>
          <li>Equipos de Manejo de Materiales y Movimiento de Tierras</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Cada categoría debe cumplir con los Estándares Indios relevantes
          (Códigos IS) como IS 17055 (Parte 7):2020, IS 17055 (Parte 8):2020 e
          IS 17055 (Parte 12):2020 en términos de diseño, seguridad,
          rendimiento, etc.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedimiento para Licencia BIS para Equipos de Construcción
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificar Estándares Aplicables: Encuentra qué código IS es para
            tu tipo de Maquinaria de Construcción.
          </li>
          <li>
            Pruebas de Producto: Realiza pruebas de seguridad y rendimiento en
            laboratorios reconocidos por BIS.
          </li>
          <li>
            Inspección de Fábrica: Los auditores BIS examinan los procesos
            literales de QC y producción.
          </li>
          <li>
            Aplicación y Documentación: Proporciona informes, especificaciones y
            manuales para revisión.
          </li>
          <li>
            Licencia BIS para Maquinaria de Construcción: Al ser incluido, los
            fabricantes tienen permiso para poner la marca BIS para Maquinaria
            de Construcción.
          </li>
          <li>
            Cumplimiento Continuo: Las inspecciones frecuentes y el monitoreo
            mantienen el cumplimiento continuo.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalizaciones por Incumplimiento
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La falla masiva o la no emisión del Certificado BIS de Maquinaria de
          Construcción hasta el 1 de septiembre de 2026 en términos del OTR para
          Maquinaria de Construcción tendrá las siguientes implicaciones:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Prohibición de venta e importación de equipos no certificados</li>
          <li>Multas grandes y detenciones de productos</li>
          <li>Descalificación de proyectos gubernamentales y premios</li>
          <li>
            Daño potencial ilimitado a la reputación por muchos años por venir
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusión
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La implementación obligatoria de la Certificación BIS Scheme X para
          Maquinaria de Construcción bajo OTR para Maquinaria de Construcción
          (2024) es un paso significativo hacia la seguridad, eficiencia así
          como estandarización en la industria indígena de India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Para fabricantes, importadores y exportadores de maquinaria de
          construcción, obtener una Licencia BIS para Maquinaria de Construcción
          y colocar la marca BIS para Maquinaria de Construcción no es solo un
          requisito de cumplimiento, es un movimiento estratégico para
          expandirse a nuevos mercados, penetrar el mercado de construcción
          indio en auge, y construir tu reputación a largo plazo.
        </p>

        <ServiceAuthorSpanish />
      </div>
    </div>
  );
};
