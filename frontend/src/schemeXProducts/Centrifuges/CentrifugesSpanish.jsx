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
import { FooterSpanish } from "../PumpsAndLiquidElevators/PumpsAndLiquidElevatorsSpanish";

const CentrifugesSpanish = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certificación BIS Scheme X para Centrífugas y Maquinaria de Filtrado o
          Purificación
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="La certificación BIS Scheme X para centrífugas, maquinaria de filtrado o purificación para líquidos y gases, y/o sus ensamblajes, sub-ensamblajes y componentes, es un hito regulatorio crucial para el sector de maquinaria industrial"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certificación BIS para Centrífugas, Certificación BIS Scheme X para Centrífugas, Certificación Scheme X para Centrífugas, BIS para Centrífugas, OTR para Centrífugas"
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
          content="Certificación BIS Scheme X para Centrífugas en India | Guía Completa"
        />
        <meta
          property="og:description"
          content="Aprende todo sobre la Certificación BIS Scheme X para centrífugas en India. Entiende el cumplimiento OTR 2024, el proceso de Licencia BIS, los requisitos de marca ISI, y cómo obtener la certificación antes del plazo límite de septiembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/certificacion-bis-scheme-x-para-centrifugas-y-maquinaria-de-filtrado-o-purificacion"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certificación BIS Scheme X para Centrífugas en India | Guía Completa"
        />
        <meta
          name="twitter:description"
          content="Aprende todo sobre la Certificación BIS Scheme X para centrífugas en India. Entiende el cumplimiento OTR 2024, el proceso de Licencia BIS, los requisitos de marca ISI, y cómo obtener la certificación antes del plazo límite de septiembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-centrifugas-y-maquinaria-de-filtrado-o-purificacion"
        />

        {/* Hreflang Tags for Multi-language Support - English is the default language */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-sentorifugyu-oyobi-roka-matawa-joka-kikai"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-li-xin-ji-he-guo-lv-huo-jing-hua-ji-xie-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-centrifugeuses-et-machines-de-filtrage-ou-purification"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-zentrifugen-und-filter-oder-reinigungsmaschinen"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-ly-tam-va-thiet-bi-loc-hoac-tinh-che"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-centrifugas-y-maquinaria-de-filtrado-o-purificacion"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-wonsimbunligi-mich-yeorgwa-ttoneun-jeongje-gigye"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-sentrifus-dan-mesin-penyaring-atau-pemurnian"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-centrifughe-e-macchinari-di-filtrazione-o-purificazione"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-pan-wia-lae-khrueang-krong-rue-tham-hai-borisut"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-centrifuges-en-filter-of-zuiveringsmachines"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-taard-almarkazi-wa-alat-altasfiya-aw-altanqiya"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
        />
      </Helmet>

      <CentrifugesSpanishBreadcrumb />
      <CentrifugesSpanishMainContent />
      <ServicesSpanish />
      <VideoSection />
      <FooterSpanish />
    </div>
  );
};

export default CentrifugesSpanish;

const CentrifugesSpanishBreadcrumb = () => {
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
                  Certificación BIS para Centrífugas
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CentrifugesSpanishMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CentrifugesSpanishMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentSpanish />
      </div>
    </div>
  );
};

const CentrifugesSpanishMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificación BIS para Centrífugas
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-centrifuges-filtering-or-purifying-machinery.png"
            title="Licencia BIS Scheme X para Centrífugas"
            alt="Certificación BIS Scheme X para Centrífugas y Maquinaria de Filtrado o Purificación"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          La centrífuga es una máquina vital ampliamente aplicable en
          laboratorios, farmacéutica, procesamiento de alimentos, biotecnología,
          petroquímica y industrias mineras. Estas máquinas funcionan girando, y
          la rotación rápida separa mezclas, esta separación es esencial para un
          procesamiento preciso, seguro y rápido.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Con aplicaciones más amplias en varias industrias, es crítico aumentar
          la confiabilidad y seguridad de las centrífugas. Para mantener el
          parámetro de control de calidad para centrífugas, BIS ha introducido
          un esquema de Certificación BIS conocido como Certificación Scheme-X
          para Centrífugas.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          En esta publicación, cubriremos qué es la Certificación BIS Scheme X
          para Centrífugas, qué es OTR para Centrífugas, y cómo obtener la
          Licencia BIS para Centrífugas con la marca BIS oficial para
          Centrífugas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importancia de BIS para Centrífugas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las centrífugas se utilizan en:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Sector farmacéutico y biotecnológico</li>
          <li>Procesamiento de alimentos y fabricación de bebidas</li>
          <li>Refinerías de petróleo e industrias petroquímicas</li>
          <li>Laboratorios médicos</li>
          <li>Tratamiento ambiental y de agua</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La ausencia de BIS para Centrífugas podría llevar al uso de
          centrífugas de calidad inferior o no certificadas que pueden resultar
          en:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Riesgos de averías mecánicas</li>
          <li>Posibilidad de contaminación en sectores frágiles</li>
          <li>Tiempo perdido y pérdida de ingresos</li>
          <li>Baja eficiencia y mayor uso de energía.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Una centrífuga certificada BIS con marca BIS para Centrífugas implica
          seguridad, calidad y confianza.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ¿Qué es el Certificado BIS Scheme X para Centrífugas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certificación BIS Scheme X de Centrífugas es el esquema de
          certificación obligatorio bajo las Regulaciones de Evaluación de
          Conformidad BIS, 2018.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Certificación Scheme X para Centrífugas: Características principales:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Aplicable tanto a fabricantes indios como extranjeros</li>
          <li>
            Se aplica a todos los tipos de centrífugas encontradas en
            laboratorios industriales y de I+D
          </li>
          <li>
            Cantidades decentes de pruebas de productos, auditorías y validación
            de cumplimiento son obligatorias
          </li>
          <li>
            Permite a los fabricantes solicitar el registro BIS sobre la base de
            certificación para Centrífugas mencionada anteriormente.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR para Centrífugas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El OTR para Centrífugas fue publicado en la gaceta por el Ministerio
          de Industrias Pesadas en 2024, que requiere certificación Scheme X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Plazo límite: Todos los fabricantes e importadores estarían obligados
          a obtener una Licencia BIS válida de Centrífugas bajo Scheme X para el
          1 de septiembre de 2026. "Esto impedirá que las centrífugas no
          certificadas sean vendidas, importadas o participen en licitaciones en
          todo el país," dijeron funcionarios gubernamentales.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Ventajas de la Certificación BIS para Centrífugas
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Seguridad y Cumplimiento: Evita accidentes debido a averías
            mecánicas a altas velocidades.
          </li>
          <li>
            Calidad y Confiabilidad: Las Centrífugas certificadas funcionan con
            precisión de decimación y precisión.
          </li>
          <li>
            Acceso al Mercado: Una Licencia de Centrífuga BIS típicamente se
            requiere para adquisiciones por organismos públicos.
          </li>
          <li>
            Confianza del Consumidor: La marca BIS para Centrífugas da a los
            clientes información sobre calidad del producto y durabilidad.
          </li>
          <li>
            Ventaja Competitiva: Las marcas/fabricantes certificados BIS son
            preferidos en mercados controlados y para licitaciones
            gubernamentales.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Centrifuge Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipos de Centrífuga bajo el Esquema de Certificación BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La acreditación Scheme X para Centrífugas cubre varios tipos como:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Centrífugas de Laboratorio</li>
          <li>Separadores Industriales</li>
          <li>Centrífuga Refrigerada</li>
          <li>Ultracentrífugas</li>
          <li>Centrífugas de Gas</li>
          <li>Centrífugas de Cesta</li>
          <li>Centrífugas Decantadoras</li>
          <li>Centrífugas Continuas y por Lotes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Todos estos tipos deben cumplir con los Estándares Indios aplicables
          (códigos IS) como IS 16819:2018/ISO 12100:2010 (Seguridad de
          Maquinaria Principios Generales para Diseño - Evaluación de Riesgos y
          Reducción de Riesgos). Todas las variedades deben cumplir con los
          Estándares Indios apropiados (códigos IS) para calidad, seguridad y
          eficiencia energética.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para Centrífugas
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identificar Estándares Relevantes: Consultar códigos IS relevantes
            para su tipo de Centrífuga.
          </li>
          <li>
            Pruebas de Producto: Realizar pruebas de rendimiento y seguridad
            requeridas por estándares de la industria, en laboratorios
            acreditados por BIS.
          </li>
          <li>
            Inspección de Fábrica: Verificar sistemas de aseguramiento de
            calidad en sitios de producción por funcionarios BIS.
          </li>
          <li>
            Aplicación y Documentación: Proporcionar requisitos técnicos, manual
            de calidad e informes de pruebas.
          </li>
          <li>
            Emisión de Licencia BIS para Centrífugas: Puede poner la marca BIS
            después de que sea aprobada.
          </li>
          <li>
            Cumplimiento Continuo: BIS verifica y realiza auditorías no
            programadas para cumplimiento de estándares.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalizaciones por Incumplimiento
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes que no tengan todos los modelos de centrífugas
          certificados con Certificación BIS para Centrífugas para el 1 de
          septiembre de 2026 corren el riesgo de:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Ventas/importaciones prohibidas de centrífugas no certificadas
          </li>
          <li>Decomiso de equipos no conformes y penalizaciones monetarias</li>
          <li>
            Te hará inelegible para cualquier licitación gubernamental o PSU
          </li>
          <li>Equidad de Marca permanentemente afectada en India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La implementación de la Certificación BIS Scheme X para Centrífugas en
          OTR 2024 es un paso para traer seguridad, eficiencia y calidad al
          sector industrial y de laboratorio en India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Fabricantes, Importadores y Exportadores están aprovechando este
          proceso asegurando la Certificación BIS para Centrífugas, obteniendo
          la Licencia BIS para Centrífugas, y colocando la marca BIS para
          Centrífugas en su producto, demostrando que su producto cumple con los
          sistemas regulatorios del mercado local y los requisitos de los
          clientes.
        </p>

        <ServiceAuthorSpanish />
      </div>
    </div>
  );
};
