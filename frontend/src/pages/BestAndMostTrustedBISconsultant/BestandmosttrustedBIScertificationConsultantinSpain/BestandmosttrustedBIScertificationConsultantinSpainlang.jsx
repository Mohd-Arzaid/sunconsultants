import FaqAuthorSpanish from "@/components/common/FaqAuthor/FaqAuthorSpanish";
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
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterSpanish from "@/components/manual/Footer/FooterSpanish";
import { Services as ServicesSpanish } from "@/pages/SchemeX/SchemeXSpanish";

const CANONICAL_URL =
  "https://bis-certifications.com/mejor-y-mas-confiable-consultor-certificacion-bis-espana";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/BestBISConsultantSpain.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/BestBISConsultantSpain.webp";

const PAGE_TITLE =
  "Mejor y más confiable consultor de certificación BIS en España – Sun Certifications India";
const META_DESCRIPTION =
  "Certificación BIS para fabricantes españoles de forma sencilla. Sun Certifications India gestiona la licencia FMCS, el registro CRS, etc. en España — incluyendo servicios AIR y preparación para auditorías de fábrica.";
const META_KEYWORDS =
  "consultor BIS en España, certificación BIS España, certificación FMCS fabricantes España, registro BIS España";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  headline: PAGE_TITLE,
  description: META_DESCRIPTION,
  image: SCHEMA_IMAGE_URL,
  author: {
    "@type": "Person",
    name: "Dhruv Aggarwal",
    url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
  },
  publisher: {
    "@type": "Organization",
    name: "Sun Certifications India",
    logo: {
      "@type": "ImageObject",
      url: "https://bis-certifications.com/company-logo/company-logo.webp",
    },
  },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: PAGE_TITLE,
  image: SCHEMA_IMAGE_URL,
  description: META_DESCRIPTION,
  brand: {
    "@type": "Brand",
    name: "Sun Certifications India",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "58042",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Tenemos marcado CE y certificación AENOR — ¿necesitamos igualmente una certificación BIS separada para India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, sin excepción. El marcado CE certifica el cumplimiento de las directivas de la UE para el mercado europeo. AENOR certifica el cumplimiento de las normas UNE para el mercado español y el europeo en general. Ninguno tiene validez legal en India. BIS certifica el cumplimiento de las Normas Indias (números IS) — un marco nacional independiente.",
      },
    },
    {
      "@type": "Question",
      name: "Siemens Gamesa tiene operaciones eólicas tanto en España como en India — ¿cómo se aplica BIS a los componentes fabricados en España enviados a India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los componentes de turbinas eólicas y el equipamiento de generación eléctrica están incluidos en el Esquema X de BIS a medida que se amplían las categorías de certificación obligatoria.",
      },
    },
    {
      "@type": "Question",
      name: "¿Podemos utilizar los informes de ensayo de nuestro laboratorio acreditado por ENAC para la certificación BIS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para los registros CRS (productos electrónicos y eléctricos), los informes de laboratorio acreditados por ENAC pueden considerarse bajo reconocimiento mutuo. Para las solicitudes FMCS y Esquema X, los informes ENAC no sustituyen las pruebas según normas IS en laboratorios reconocidos por BIS.",
      },
    },
    {
      "@type": "Question",
      name: "Nuestros sanitarios cerámicos (estilo Roca) tienen marcado CE y se venden en toda Europa — ¿por qué India necesita una certificación separada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las normas obligatorias de BIS de India para sanitarios cerámicos se basan en especificaciones IS — no en normas europeas EN. Los parámetros técnicos, métodos de ensayo y requisitos de marcado difieren entre CE y BIS.",
      },
    },
    {
      "@type": "Question",
      name: "Somos un fabricante químico español — ¿nuestros productos conformes con REACH necesitan BIS en India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El cumplimiento de REACH es una regulación química de la Unión Europea sin equivalencia ni reconocimiento en India. Los marcos regulatorios de BIS de India y otros (como los QCO del Ministerio de Productos Químicos) regulan los productos químicos en India de forma independiente.",
      },
    },
  ],
};

const TRADE_FACTS = [
  "El comercio bilateral España-India alcanzó los 5.800 millones de euros en 2023 — un crecimiento interanual del 12% en aceleración",
  "España se encuentra entre los 15 principales socios comerciales de la UE de India, con maquinaria, componentes automotrices y productos químicos como categorías de exportación dominantes",
  "Siemens Gamesa — con sede en España — es uno de los mayores proveedores de energía eólica de India, con alianzas de fabricación en Gujarat y Tamil Nadu",
  "Gestamp opera 4 plantas de fabricación en India que suministran componentes de carrocería a Maruti Suzuki, Hyundai y Tata Motors — aprovechando en gran medida la ingeniería y las cadenas de suministro españolas",
  "El acuerdo de libre comercio India-UE, en negociación activa, se espera que reduzca significativamente los aranceles de importación sobre productos españoles — haciendo de ahora el momento adecuado para establecer el cumplimiento BIS antes de la ventana de reducción arancelaria",
];

const INDIA_PRIORITY_POINTS = [
  "El objetivo de energía renovable de India de 500 GW para 2030 está creando una demanda sostenida de componentes de turbinas eólicas, estructuras de montaje solar e infraestructura eléctrica — todas categorías en las que la ingeniería española es globalmente competitiva",
  "El sector automotriz de India — el tercero más grande del mundo — está adquiriendo activamente estampados, sistemas de espejos, componentes de asientos y módulos electrónicos de origen español a través de las operaciones de Gestamp, Ficosa y Grupo Antolin en India",
  "El mercado de cerámica y azulejos de India — el segundo solo después de China a nivel mundial — presenta competencia directa y oportunidades de asociación para fabricantes españoles de equipos cerámicos y azulejos; Porcelanosa y Roca han demostrado que las marcas cerámicas españolas ocupan una posición premium en India",
  "El sector farmacéutico y químico de India está adquiriendo productos químicos especializados y equipos de proceso españoles en volúmenes crecientes",
  "Las operaciones de abastecimiento y venta minorista de Inditex en India generan demanda en la cadena de suministro aguas arriba de accesorios, embalajes e insumos textiles de proveedores españoles",
];

const BIS_OVERVIEW_POINTS = [
  "El marcado CE no es reconocido por BIS. El principal mecanismo de conformidad de productos de España — el marcado CE bajo las directivas de la UE — no tiene validez legal en India. La aduana india no acepta el CE como sustituto de BIS, y los auditores de BIS no aceptan los Expedientes Técnicos CE como evidencia de conformidad según normas IS. El marcado CE certifica la aptitud para el mercado europeo; BIS certifica la aptitud para el mercado indio. Son sistemas paralelos e independientes.",
  "La certificación AENOR no tiene equivalencia con BIS. Las normas de la Asociación Española de Normalización (UNE) y las certificaciones de productos AENOR — ampliamente reconocidas en Europa y América Latina — no son reconocidas por BIS. Los productos certificados por AENOR deben obtener igualmente una certificación BIS separada para India.",
  "Los informes de laboratorio acreditados por ENAC tienen aplicabilidad limitada. El organismo nacional de acreditación de España ENAC (Entidad Nacional de Acreditación) acredita laboratorios según ISO 17025. Para los registros CRS (electrónica), los informes de laboratorio acreditados por ENAC pueden considerarse bajo acuerdos de reconocimiento mutuo — Sun Certifications India evalúa esto por producto. Para FMCS y Esquema X, se requieren pruebas en laboratorios reconocidos por BIS según la norma IS aplicable, independientemente de la acreditación ENAC.",
  "Las normas UNE ≠ Normas Indias. Los productos españoles fabricados y probados según normas UNE deben tener su documentación técnica reconstruida en torno al número IS aplicable para fines BIS. El análisis de brechas entre las normas UNE e IS es un paso crítico inicial — uno que Sun Certifications India realiza para cada fabricante español con el que trabajamos.",
  "Los fabricantes extranjeros no pueden solicitar BIS directamente. Las empresas españolas deben nombrar un Representante Indio Autorizado (AIR) — una entidad india legalmente registrada que presenta la solicitud BIS, firma todos los documentos y gestiona toda la correspondencia con BIS en nombre del fabricante español.",
];

const BENEFITS_ROWS = [
  {
    offer: "Más de 10 años de experiencia en BIS",
    benefit:
      "Conocimiento profundo de las normas IS, actualizaciones de QCO y requisitos específicos por esquema en las principales categorías de exportación de España",
  },
  {
    offer: "Servicios AIR",
    benefit:
      "Actuamos como su Representante Indio Autorizado — sin necesidad de oficina en India",
  },
  {
    offer: "Análisis de brechas UNE a IS",
    benefit:
      "Mapeamos los Expedientes Técnicos CE y la documentación AENOR frente a los requisitos IS — minimizando la reescritura de documentación",
  },
  {
    offer: "Evaluación de informes ENAC",
    benefit:
      "Confirmamos por producto si los informes de laboratorio acreditados por ENAC son utilizables — antes de repetir las pruebas",
  },
  {
    offer: "Especialización en Esquema X",
    benefit:
      "Componentes de energía eólica, maquinaria alimentaria, equipos industriales — seguimos cada ampliación de QCO del Esquema X",
  },
  {
    offer: "Experiencia en conformidad automotriz",
    benefit:
      "La documentación IATF 16949 es una base sólida — construimos la capa específica IS encima",
  },
  {
    offer: "Gestor de proyecto dedicado",
    benefit:
      "Un único contacto desde la primera consulta hasta el certificado — hitos claros, sin transferencias",
  },
  {
    offer: "Conformidad multi-ministerial",
    benefit: "BIS + LMPC + WPC + CDSCO + PESO — todo internamente",
  },
  {
    offer: "Soporte post-certificación",
    benefit: "Renovaciones, auditorías de vigilancia y modificaciones gestionadas de forma proactiva",
  },
];

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const TABLE_CLASS =
  "w-full min-w-[480px] border-collapse border border-gray-300 text-sm font-geist text-gray-600";
const TH_CLASS =
  "border border-gray-300 px-4 py-2 text-left font-semibold text-[#1e1e1e] bg-gray-50";
const TD_CLASS = "border border-gray-300 px-4 py-2 align-top";

const BestandmosttrustedBIScertificationConsultantinSpainlang = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <ServicesSpanish />
      <VideoSection />
      <FooterSpanish />
    </div>
  );
};

export default BestandmosttrustedBIScertificationConsultantinSpainlang;

const MetaTags = () => {
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  return (
    <Helmet>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={META_DESCRIPTION} />
      <meta name="keywords" content={META_KEYWORDS} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={META_DESCRIPTION} />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={SCHEMA_IMAGE_URL} />
      <meta name="twitter:title" content={PAGE_TITLE} />
      <meta name="twitter:description" content={META_DESCRIPTION} />
      <meta name="twitter:image" content={SCHEMA_IMAGE_URL} />
      <link rel="canonical" href={CANONICAL_URL} />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(ratingSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
                  <BreadcrumbPage className="whitespace-nowrap">
                    Mejor y más confiable consultor de certificación BIS en España
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
        <MainContentLeft />
        <ServicesRightSideContentSpanish />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          {PAGE_TITLE}
        </h1>

        <div className="mb-6">
          <img
            src={PAGE_IMAGE_SRC}
            title={PAGE_TITLE}
            alt={PAGE_TITLE}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          España no es el primer país europeo que viene a la mente de los
          compradores indios cuando piensan en importaciones industriales — pero
          debería serlo.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Inditex (matriz de Zara) abastece y suministra accesorios de moda a
          nivel mundial desde España. Gestamp fabrica estampados automotrices para
          las plantas de Tata, Maruti y Hyundai en toda India. Gamesa — ahora
          Siemens Gamesa — construye componentes de turbinas eólicas en Anoye y
          Baroda para el sector de energía renovable de India. Roca domina el
          mercado indio de grifería premium desde su base de fabricación
          española. Ficosa suministra espejos automotrices y sistemas de cámaras
          a los OEM indios. La presencia industrial de España en India es más
          profunda, más específica y más técnicamente sofisticada de lo que la
          mayoría imagina.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo que los fabricantes españoles están descubriendo ahora — algunos a
          mitad de envío, otros a mitad de contrato — es que el régimen de
          certificación obligatoria del Bureau of Indian Standards (BIS) de India
          se está expandiendo rápidamente. Los productos que entraban en India
          libremente bajo condiciones de importación anteriores ahora requieren
          una certificación BIS válida antes de poder pasar legalmente por la
          aduana india. Para los fabricantes españoles de componentes
          automotrices, equipos de energía renovable, cerámica, productos
          químicos y maquinaria, el panorama de conformidad ha cambiado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          En{" "}
          <a
            href="https://bis-certifications.com/"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            Sun Certifications India
          </a>
          , hemos trabajado con fabricantes europeos que navegan BIS desde 2016.
          Entendemos cómo los productos españoles con marcado CE y certificación
          AENOR se relacionan con las Normas Indias de BIS — y sabemos
          exactamente dónde están las brechas. Si su empresa española exporta a
          India, esta página es donde comienza su proceso de conformidad BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por qué India — La oportunidad para los fabricantes españoles
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          España e India han comerciado históricamente por debajo de lo que el
          tamaño de ambas economías sugeriría. Eso está cambiando — impulsado por
          la expansión de infraestructura de India, sus ambiciones en energía
          renovable, el crecimiento del sector automotriz y un mercado de
          consumo cada vez más receptivo al posicionamiento de calidad europea.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Datos clave del comercio:
        </p>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {TRADE_FACTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por qué los fabricantes españoles están priorizando India:
        </h2>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {INDIA_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Resumen de la certificación BIS — Lo que los fabricantes españoles deben saber
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS (Bureau of Indian Standards) opera bajo el Ministerio de Asuntos
          del Consumo de India y certifica productos según las Normas Indias
          (números IS) — el propio marco nacional de normas técnicas de India.
          Todo producto regulado bajo una Orden de Control de Calidad (QCO)
          obligatoria debe contar con una certificación BIS válida antes de poder
          importarse, venderse o instalarse legalmente en India.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Cómo se relacionan las certificaciones existentes de España con BIS:
        </h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Esquemas de certificación BIS aplicables a fabricantes españoles
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          1. FMCS — Esquema de Certificación de Fabricantes Extranjeros (Marca ISI)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La vía principal para fabricantes españoles cuyos productos entran en
          categorías QCO obligatorias de Marca ISI — particularmente componentes
          automotrices, productos de acero, productos químicos y cerámica.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          2. CRS — Esquema de Registro Obligatorio
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Para productos electrónicos, eléctricos y hardware informático —
          aplicable a fabricantes españoles de sistemas de control, electrónica
          industrial y componentes eléctricos. No se requiere auditoría de
          fábrica — pero las pruebas en un laboratorio reconocido por BIS son
          obligatorias.
        </p>

        <h3 className={SUB_HEADING_CLASS}>3. Esquema X de BIS</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El esquema que se expande con mayor rapidez en relevancia para los
          fabricantes españoles — cubriendo maquinaria industrial y equipos de
          capital bajo QCO obligatorios.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos requeridos para la certificación BIS en España
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los requisitos varían según el esquema y el producto. Sun
          Certifications India proporciona una lista de documentos personalizada
          para su producto tras la consulta inicial — incluyendo el análisis de
          brechas UNE a IS y la evaluación de la utilidad de los informes ENAC.
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado de registro / constitución de la empresa (España)</li>
          <li>
            Expediente técnico del producto — especificaciones, planos, lista de
            materiales
          </li>
          <li>
            Informes de ensayo de laboratorio aprobado por BIS o reconocido
            mutuamente
          </li>
          <li>Diagrama de flujo del proceso de fabricación</li>
          <li>
            Lista de planta, maquinaria y equipos de ensayo con registros de
            calibración
          </li>
          <li>Plan de control de calidad y procedimientos de ensayo internos</li>
          <li>
            Carta de nombramiento del Representante Indio Autorizado (AIR)
          </li>
          <li>Carta de autorización en papel membretado de la empresa</li>
        </ol>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de certificación BIS para fabricantes españoles
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 1 — Evaluación del producto y confirmación del estado QCO
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confirmamos si su producto entra en una QCO obligatoria e identificamos
          el esquema BIS y la norma IS correctos.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 2 — Nombrar un Representante Indio Autorizado (AIR)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India puede actuar como su AIR, eliminando la
          necesidad de buscar una entidad separada.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 3 — Análisis de brechas de documentación UNE a IS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mapeamos sus Expedientes Técnicos CE y documentación AENOR existentes
          frente a los requisitos IS aplicables.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 4 — Identificar el laboratorio reconocido por BIS correcto para la
          norma IS de su producto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Su producto se ensaya según la Norma India aplicable en un laboratorio
          aprobado por BIS o reconocido mutuamente.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 5 — Preparar y presentar la solicitud BIS completa a través del
          portal BIS o la sede central de BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Presentamos su solicitud y gestionamos toda la correspondencia oficial
          con BIS en su nombre.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 6 — Auditoría de fábrica BIS en España
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los funcionarios de BIS visitan su instalación de fabricación en España
          — evaluando el cumplimiento específico según normas IS. Coordinamos y
          preparamos a su equipo para la inspección.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 7 — Concesión de licencia y certificación
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Una vez cumplidos todos los requisitos, BIS concede su certificación y
          su producto puede entrar legalmente en el mercado indio.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por qué Sun Certifications India es el mejor y más confiable consultor BIS en España
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes españoles que entran en India necesitan un consultor
          BIS que comprenda las brechas de documentación CE a IS, la distinción
          AENOR-BIS y los puntos de presión de conformidad específicos para
          exportadores automotrices, de energía renovable y de maquinaria que
          apuntan a India.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>Lo que ofrecemos</th>
                <th className={TH_CLASS}>
                  Lo que significa para los fabricantes españoles
                </th>
              </tr>
            </thead>
            <tbody>
              {BENEFITS_ROWS.map((row) => (
                <tr key={row.offer}>
                  <td className={TD_CLASS}>{row.offer}</td>
                  <td className={TD_CLASS}>{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La presencia industrial de España en India es más sustancial de lo que
          sugieren solas las cifras del comercio bilateral. Los estampados de
          Gestamp refuerzan los coches de India. Las turbinas de Siemens Gamesa
          alimentan la red eléctrica de India. Los accesorios de Roca equipan
          los edificios de India. Los sistemas de cámaras de Ficosa guían los
          vehículos de India. La ingeniería española ya está contribuyendo a la
          historia industrial de India — de forma discreta, específica y a gran
          escala.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificación BIS es el sustento regulatorio que mantiene esa
          contribución legalmente sólida. Para los fabricantes españoles que
          entran en India por primera vez, o para aquellos que ya suministran y
          aún no han verificado su estado BIS, el proceso de conformidad es
          manejable — pero debe hacerse correctamente, con una comprensión clara
          de dónde termina el marcado CE y dónde comienzan las Normas Indias.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas frecuentes
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Tenemos marcado CE y certificación AENOR — ¿necesitamos igualmente una
          certificación BIS separada para India?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sí, sin excepción. El marcado CE certifica el cumplimiento de las
          directivas de la UE para el mercado europeo. AENOR certifica el
          cumplimiento de las normas UNE para el mercado español y el europeo en
          general. Ninguno tiene validez legal en India. BIS certifica el
          cumplimiento de las Normas Indias (números IS) — un marco nacional
          independiente.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Siemens Gamesa tiene operaciones eólicas tanto en España como en India
          — ¿cómo se aplica BIS a los componentes fabricados en España enviados a
          India?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los componentes de turbinas eólicas y el equipamiento de generación
          eléctrica están incluidos en el Esquema X de BIS a medida que se
          amplían las categorías de certificación obligatoria.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          ¿Podemos utilizar los informes de ensayo de nuestro laboratorio
          acreditado por ENAC para la certificación BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Para los registros CRS (productos electrónicos y eléctricos), los
          informes de laboratorio acreditados por ENAC pueden considerarse bajo
          reconocimiento mutuo. Para las solicitudes FMCS y Esquema X, los
          informes ENAC no sustituyen las pruebas según normas IS en laboratorios
          reconocidos por BIS.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Nuestros sanitarios cerámicos (estilo Roca) tienen marcado CE y se
          venden en toda Europa — ¿por qué India necesita una certificación
          separada?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Las normas obligatorias de BIS de India para sanitarios cerámicos se
          basan en especificaciones IS — no en normas europeas EN. Los parámetros
          técnicos, métodos de ensayo y requisitos de marcado difieren entre CE y
          BIS.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Somos un fabricante químico español — ¿nuestros productos conformes con
          REACH necesitan BIS en India?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El cumplimiento de REACH es una regulación química de la Unión Europea
          sin equivalencia ni reconocimiento en India. Los marcos regulatorios de
          BIS de India y otros (como los QCO del Ministerio de Productos
          Químicos) regulan los productos químicos en India de forma
          independiente.
        </p>

        <FaqAuthorSpanish questionNumber={1} />
      </div>
    </div>
  );
};
