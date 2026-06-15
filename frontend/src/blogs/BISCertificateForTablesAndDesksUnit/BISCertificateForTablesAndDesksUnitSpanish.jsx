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

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForTablesAndDesksUnitSpanish = () => {
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

export default BISCertificateForTablesAndDesksUnitSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para Mesas y Escritorios | IS 17633:2022 Licencia BIS";
  const ogTitle = "Certificación BIS para Mesas y Escritorios – IS 17633:2022 Guía";
  const twitterTitle = "Licencia BIS para Mesas y Escritorios | IS 17633:2022";
  const metaDescription =
    "Obtenga el Certificado BIS para Mesas y Escritorios bajo IS 17633:2022. Proceso, documentos, pruebas, costos y plazos para la Certificación BIS en India.";
  const ogDescription =
    "Guía completa para la Certificación BIS para Mesas y Escritorios según IS 17633:2022. Conoce el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicite el Certificado BIS para Mesas y Escritorios bajo IS 17633:2022. Aprenda el proceso BIS, documentos, pruebas, tarifas y plazos en India.";
  const metaKeywords =
    "Certificado BIS para Mesas y Escritorios, Licencia BIS para Mesas y Escritorios, IS 17633:2022, Certificación BIS para Mesas y Escritorios";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/mesas-y-escritorios-is-17633";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
                    Certificación BIS para Mesas y Escritorios (IS 17633:2022)
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
          Certificación BIS para Mesas y Escritorios (IS 17633:2022) – Guía
          Completa de Certificación con Marca ISI
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="Licencia BIS para Mesas y Escritorios"
            alt="Certificación BIS para Mesas y Escritorios - Guía de la Marca ISI IS 17633:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las mesas y escritorios se encuentran entre los productos de mobiliario
          más utilizados en oficinas, instituciones educativas, establecimientos
          comerciales, organizaciones gubernamentales y espacios residenciales.
          Dado que se espera que estos productos resistan el uso habitual mientras
          garantizan la seguridad del usuario, la estabilidad y la durabilidad, el
          cumplimiento de normas de calidad reconocidas se ha vuelto cada vez más
          importante para fabricantes e importadores.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          En India, las mesas y escritorios cubiertos bajo IS 17633:2022 deben
          cumplir con los requisitos de calidad y seguridad aplicables prescritos
          por la Oficina de Normas de India (BIS). Los fabricantes que cumplen con
          éxito estos requisitos pueden obtener una licencia BIS y usar la Marca ISI
          en sus productos, demostrando la conformidad con la Norma India
          correspondiente.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          El proceso de certificación evalúa varios aspectos del rendimiento del
          producto, incluyendo resistencia, estabilidad, durabilidad, mano de obra,
          dimensiones y seguridad general. El cumplimiento no solo ayuda a las
          empresas a cumplir con los requisitos regulatorios, sino que también
          mejora la credibilidad del producto y la aceptación en el mercado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta guía completa explica todo lo que los fabricantes, importadores,
          marcas de mobiliario y profesionales de compras necesitan saber sobre la
          Certificación BIS para Mesas y Escritorios bajo IS 17633:2022, incluyendo
          la aplicabilidad, los requisitos de certificación, los parámetros de
          prueba, la documentación, los beneficios y el proceso de certificación.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Aspectos Clave de la Certificación BIS para Mesas y Escritorios
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Aspecto
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Detalles
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Producto", "Mesas y Escritorios"],
                ["Norma Aplicable", "IS 17633:2022"],
                ["Tipo de Certificación", "Certificación de Producto BIS"],
                ["Marca Aplicable", "Marca ISI"],
                ["Esquema de Certificación", "Esquema-I (Certificación con Marca ISI)"],
                ["Autoridad Reguladora", "Oficina de Normas de India (BIS)"],
                ["Sector Aplicable", "Mobiliario"],
                [
                  "Solicitantes Elegibles",
                  "Fabricantes Indios y Fabricantes Extranjeros",
                ],
                [
                  "Requisito de Cumplimiento",
                  "Obligatorio bajo la QCO de Mobiliario aplicable (Orden de Control de Calidad)",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Esquema de Certificación" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Esquema-I (Certificación con Marca ISI)
                      </a>
                    ) : particular === "Requisito de Cumplimiento" ? (
                      <>
                        Obligatorio bajo la {" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
                          className="text-blue-600 hover:underline"
                        >
                         <strong>QCO de Mobiliario aplicable (Orden de Control de Calidad)</strong>
                        </a>
                        
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS para Mesas y Escritorios?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS para Mesas y Escritorios es un proceso de evaluación
          de conformidad realizado bajo el Esquema de Certificación de Productos de
          la Oficina de Normas de India (BIS). La certificación confirma que el
          producto cumple con los requisitos especificados en IS 17633:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tras una certificación exitosa, los fabricantes pueden usar la Marca ISI
          en sus productos, lo que indica el cumplimiento de la Norma India
          aplicable.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La certificación tiene como objetivo garantizar que las mesas y
          escritorios suministrados en el mercado indio cumplan con los requisitos
          establecidos en relación con:
        </p>

        <ul className={LIST_CLASS}>
          <li>Resistencia estructural y estabilidad durante el uso normal</li>
          <li>Durabilidad, seguridad del usuario y mano de obra del material</li>
          <li>Requisitos completos de rendimiento bajo IS 17633:2022</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para compradores y agencias de adquisiciones, la Marca ISI sirve como una
          garantía de que el mobiliario ha sido evaluado frente a referentes
          reconocidos de calidad y seguridad.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Descripción General de IS 17633:2022 para Mesas y Escritorios
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022 es la Norma India que especifica los requisitos de
          rendimiento y seguridad para mesas y escritorios destinados a usuarios
          adultos en aplicaciones sentadas y de pie.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norma cubre ambos:
        </p>

        <ul className={LIST_CLASS}>
          <li>Mesas y escritorios completamente fabricados (listos para usar)</li>
          <li>Unidades listas para ensamblar (RTA) — probadas después del ensamblaje completo</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          El objetivo de la norma es establecer requisitos mínimos de rendimiento y
          seguridad que ayuden a garantizar que el mobiliario permanezca estable,
          duradero y seguro durante toda su vida útil prevista.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Áreas Clave Cubiertas Bajo IS 17633:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norma se centra en varias características de rendimiento importantes,
          incluyendo:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Requisitos de Resistencia —</strong> Las mesas y escritorios
            deben soportar las cargas esperadas durante el uso normal sin fallar ni
            deformarse en exceso.
          </li>
          <li>
            <strong>Requisitos de Estabilidad —</strong> El mobiliario debe
            permanecer estable en uso y resistir el vuelco bajo condiciones de carga
            previsibles.
          </li>
          <li>
            <strong>Requisitos de Durabilidad —</strong> Los productos deben
            mantener el rendimiento y la integridad estructural tras el uso repetido
            durante un período prolongado.
          </li>
          <li>
            <strong>Requisitos de Seguridad —</strong> El diseño y la construcción
            deben minimizar los riesgos por inestabilidad, bordes afilados,
            construcción insegura o falla estructural.
          </li>
          <li>
            <strong>Mano de Obra y Calidad de Construcción —</strong> La mano de
            obra, el ensamblaje, las uniones, los sujetadores y la construcción
            general se evalúan para garantizar un rendimiento confiable a largo
            plazo.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Es Obligatoria la Certificación BIS para Mesas y Escritorios en India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sí. Las mesas y escritorios cubiertos bajo la Orden de Control de Calidad
          (QCO) de Mobiliario aplicable deben cumplir con la Norma India
          correspondiente y obtener la Certificación BIS antes de ser fabricados,
          importados, vendidos, distribuidos u ofrecidos en el mercado indio.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          El objetivo de la certificación obligatoria es:
        </p>

        <ul className={LIST_CLASS}>
          <li>Garantizar una mayor calidad del producto en toda la industria del mobiliario</li>
          <li>Proteger la seguridad del consumidor mediante normas verificadas</li>
          <li>Evitar que el mobiliario de calidad inferior ingrese al mercado</li>
          <li>Promover la estandarización y referentes de calidad uniformes</li>
          <li>Generar confianza del comprador en los productos certificados con la Marca ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes cubiertos bajo las regulaciones aplicables deben obtener
          una licencia BIS y usar la Marca ISI de acuerdo con los requisitos de BIS.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Consulte también los Productos de Mobiliario Cubiertos bajo la
            Certificación BIS Obligatoria —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            <strong>Certificación BIS para mobiliario</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Alcance de Productos Cubiertos Bajo IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El alcance de IS 17633:2022 se extiende a diversas categorías de mesas y
          escritorios diseñados para usuarios adultos en entornos residenciales,
          comerciales, institucionales y de trabajo.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ejemplos de productos comúnmente cubiertos incluyen:
        </p>

        <ul className={LIST_CLASS}>
          <li>Escritorios de oficina, estudio y computadora</li>
          <li>Estaciones de trabajo y escritorios multipropósito</li>
          <li>Mesas de conferencia y reunión</li>
          <li>Mesas institucionales y de laboratorio</li>
          <li>Mobiliario de coworking y de uso comercial</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes deben revisar cuidadosamente las especificaciones del
          producto y el uso previsto para determinar si sus productos caen dentro
          del alcance de IS 17633:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos Técnicos Clave Bajo IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para obtener la certificación BIS, las mesas y escritorios deben cumplir
          con varios requisitos de rendimiento y seguridad especificados por la
          norma.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Integridad Estructural —</strong> Los productos deben rendir
            bajo las cargas prescritas; las uniones y estructuras de soporte
            permanecen seguras durante las pruebas.
          </li>
          <li>
            <strong>Rendimiento de Carga —</strong> Las mesas y escritorios deben
            soportar las cargas especificadas sin deformación inaceptable, daño o
            falla.
          </li>
          <li>
            <strong>Rendimiento de Estabilidad —</strong> El mobiliario debe
            permanecer estable en uso y reducir los riesgos de vuelco que podrían
            causar lesiones o daños a la propiedad.
          </li>
          <li>
            <strong>Rendimiento de Durabilidad —</strong> Los productos deben
            resistir ciclos de uso repetidos mientras mantienen un rendimiento
            aceptable.
          </li>
          <li>
            <strong>Material y Mano de Obra —</strong> Los materiales, el acabado y
            los métodos de ensamblaje deben cumplir con los controles de calidad para
            una producción consistente.
          </li>
          <li>
            <strong>Consideraciones de Seguridad —</strong> El diseño debe minimizar
            los peligros derivados del uso del mobiliario para consumidores y
            compradores institucionales.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por Qué la Certificación BIS Importa para los Fabricantes de Mobiliario
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El mercado indio de mobiliario se ha vuelto cada vez más consciente de la
          calidad. Los departamentos gubernamentales, las instituciones educativas,
          los compradores corporativos y las grandes agencias de adquisiciones a
          menudo prefieren productos que cumplan con normas reconocidas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Obtener la certificación BIS ayuda a los fabricantes a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Demostrar el cumplimiento de las normas indias aplicables</li>
          <li>Aumentar la credibilidad del producto y la reputación de la marca</li>
          <li>Ganar la confianza de clientes y compradores institucionales</li>
          <li>Mejorar la aceptación en las adquisiciones gubernamentales y corporativas</li>
          <li>Fortalecer las prácticas internas de gestión de calidad</li>
          <li>Anticiparse a los requisitos regulatorios en evolución</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para los fabricantes que buscan un crecimiento a largo plazo, la
          certificación BIS a menudo se considera tanto un requisito de cumplimiento
          como una ventaja comercial estratégica.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Prueba para Mesas y Escritorios Bajo IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Antes de que un fabricante pueda obtener la certificación BIS, las muestras
          del producto deben evaluarse frente a los requisitos aplicables de IS
          17633:2022 mediante pruebas en un laboratorio reconocido por BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          El objetivo de las pruebas es verificar que el mobiliario cumpla con las
          normas prescritas de seguridad, estabilidad, resistencia, durabilidad y
          rendimiento general.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Si bien los parámetros de prueba exactos pueden variar según el diseño del
          producto y los requisitos de certificación, los fabricantes generalmente
          son evaluados por las siguientes características:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Diseño y Mano de Obra —</strong> Se examina la calidad de
            construcción, el ensamblaje, el acabado y la integridad general del
            producto para un uso seguro a largo plazo.
          </li>
          <li>
            <strong>Verificación Dimensional —</strong> Las medidas críticas se
            comparan con la norma y las especificaciones del producto aprobadas.
          </li>
          <li>
            <strong>Prueba de Estabilidad —</strong> Confirma que el producto
            permanece estable en uso normal y señala el vuelco o debilidades
            estructurales.
          </li>
          <li>
            <strong>Prueba de Carga Estática —</strong> Verifica la capacidad de
            carga sin falla, deformación excesiva o daño.
          </li>
          <li>
            <strong>Prueba de Resistencia —</strong> Evalúa marcos, uniones y
            soportes bajo tensiones operativas durante el uso habitual.
          </li>
          <li>
            <strong>Evaluación de Durabilidad —</strong> Comprueba la retención del
            rendimiento tras ciclos de uso repetidos.
          </li>
          <li>
            <strong>Evaluación de Seguridad —</strong> Descarta riesgos evitables por
            inestabilidad, defectos o características de diseño inseguras.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para Mesas y Escritorios
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes que buscan la certificación BIS bajo IS 17633:2022 deben
          seguir un proceso de certificación estructurado establecido por la Oficina
          de Normas de India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Aunque los requisitos específicos pueden variar según el tipo de
          solicitante y la ubicación de fabricación, el proceso general sigue siendo
          similar.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 1: Evaluación del Alcance del Producto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El primer paso consiste en determinar si el producto cae dentro del alcance
          de IS 17633:2022 y la Orden de Control de Calidad aplicable. Generalmente
          se realiza una revisión técnica de las especificaciones del producto, el
          uso previsto, los materiales y la construcción antes de iniciar el proceso
          de certificación.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 2: Preparación de la Documentación
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El fabricante prepara la documentación requerida, incluyendo información de
          la empresa, detalles de fabricación, especificaciones del producto,
          procedimientos de control de calidad y registros técnicos de respaldo. Una
          documentación adecuada es fundamental porque las deficiencias en esta etapa
          pueden retrasar la certificación.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 3: Pruebas del Producto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Las muestras del producto se prueban en un laboratorio reconocido por BIS
          para verificar el cumplimiento de los requisitos de IS 17633:2022. El
          informe de prueba sirve como uno de los principales documentos técnicos que
          respaldan la solicitud de certificación.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 4: Presentación de la Solicitud
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La solicitud BIS se presenta junto con los documentos de respaldo, los
          informes de prueba, la información de fabricación y los registros de gestión
          de calidad. La solicitud es revisada por BIS para verificar su integridad y
          cumplimiento técnico.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 5: Evaluación de Fábrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS puede realizar una inspección de fábrica para evaluar:
        </p>
        <ul className={LIST_CLASS}>
          <li>Infraestructura de fabricación y capacidades de producción</li>
          <li>Sistemas de control de calidad e instalaciones de pruebas internas</li>
          <li>Controles de materias primas y mecanismos de trazabilidad del producto</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          El objetivo es verificar la capacidad del fabricante para producir
          productos conformes de manera consistente.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 6: Evaluación y Revisión
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS revisa la solicitud, los hallazgos de la inspección y los informes de
          prueba de laboratorio antes de tomar una decisión de certificación.
          Cualquier observación planteada durante el proceso de revisión debe ser
          atendida por el solicitante.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Paso 7: Otorgamiento de la Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tras la finalización exitosa de todos los requisitos, BIS otorga la
          licencia y autoriza al fabricante a usar la Marca ISI en las mesas y
          escritorios certificados.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certificación BIS para Fabricantes Indios
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes indios generalmente solicitan bajo el procedimiento de
          certificación nacional prescrito por BIS. El proceso normalmente incluye:
        </p>

        <ul className={LIST_CLASS}>
          <li>Pruebas del producto en un laboratorio reconocido por BIS</li>
          <li>Presentación de la solicitud con los documentos de respaldo</li>
          <li>Inspección de fábrica y revisión técnica por parte de BIS</li>
          <li>Otorgamiento de la licencia BIS y autorización de la Marca ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Una vez certificados, los fabricantes deben seguir cumpliendo con los
          requisitos de BIS y mantener una calidad de producto consistente durante
          todo el período de la licencia.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certificación BIS para Fabricantes Extranjeros
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes extranjeros que pretendan exportar mesas y escritorios a
          India también deben obtener la certificación BIS antes de suministrar
          productos cubiertos bajo la Orden de Control de Calidad aplicable.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          El proceso de certificación generalmente implica:
        </p>

        <ul className={LIST_CLASS}>
          <li>Nombramiento de un Representante Indio Autorizado (AIR)</li>
          <li>Pruebas del producto y evaluación de fábrica en el extranjero</li>
          <li>Revisión de la documentación y aprobación de la certificación BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes extranjeros deben garantizar el cumplimiento continuo de
          los requisitos de BIS para mantener la validez de la certificación.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para la Certificación BIS de Mesas y Escritorios
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los requisitos de documentación pueden variar según el fabricante y la ruta
          de certificación. Sin embargo, los siguientes documentos se requieren
          comúnmente durante el proceso de certificación.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Documentos Comerciales y Legales</h3>
        <ul className={LIST_CLASS}>
          <li>Registro de la empresa, licencia de fabricación y GST (si aplica)</li>
          <li>Datos del signatario autorizado y prueba de identidad</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Información de Fabricación</h3>
        <ul className={LIST_CLASS}>
          <li>Diagrama de flujo del proceso, distribución de la fábrica y detalles de la maquinaria</li>
          <li>Registros de infraestructura de producción y capacidad</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Información del Producto</h3>
        <ul className={LIST_CLASS}>
          <li>Especificaciones del producto, dibujos técnicos y catálogo</li>
          <li>Lista de materiales y detalles de materiales/componentes</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Documentos de Control de Calidad</h3>
        <ul className={LIST_CLASS}>
          <li>Pruebas internas, inspección y procedimientos de control de calidad</li>
          <li>Registros de control de calidad e informes de calibración de equipos</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Documentos de Certificación</h3>
        <ul className={LIST_CLASS}>
          <li>Informes de prueba de laboratorio y formularios de solicitud BIS completados</li>
          <li>Declaraciones, compromisos y otros documentos prescritos por BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes deben asegurarse de que toda la documentación sea precisa,
          completa y consistente antes de la presentación.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes Durante la Certificación BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Aunque el proceso de certificación es sencillo cuando se gestiona
          adecuadamente, los fabricantes a menudo se encuentran con varios desafíos.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Interpretación técnica —</strong> Mapear los requisitos de IS
            17633:2022 a diseños de productos específicos puede ser difícil sin
            orientación experta.
          </li>
          <li>
            <strong>Fallas en las pruebas —</strong> Las uniones débiles, la mala
            estabilidad o los problemas de materiales a menudo conducen al rechazo en
            las pruebas de laboratorio.
          </li>
          <li>
            <strong>Lagunas en la documentación —</strong> Los registros incompletos
            o discrepantes son una causa frecuente de retrasos en la solicitud.
          </li>
          <li>
            <strong>Cumplimiento de fábrica —</strong> Los sistemas de control de
            calidad, la trazabilidad o los controles de producción pueden necesitar
            mejoras antes del otorgamiento de la licencia.
          </li>
          <li>
            <strong>Coordinación regulatoria —</strong> Alinear las pruebas de
            laboratorio, las inspecciones y los seguimientos de BIS lleva tiempo sin
            un apoyo estructurado.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la Asistencia Profesional en Certificación BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Trabajar con un consultor BIS experimentado puede ayudar a los fabricantes
          a evitar retrasos costosos y agilizar el proceso de certificación.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          El apoyo profesional generalmente incluye:
        </p>

        <ul className={LIST_CLASS}>
          <li>Revisión del alcance del producto e interpretación de la norma</li>
          <li>Preparación de la documentación y presentación de la solicitud</li>
          <li>Coordinación de pruebas de laboratorio e inspección de fábrica</li>
          <li>Cumplimiento continuo y apoyo posterior a la certificación</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esto permite a los fabricantes centrarse en la producción mientras se
          garantiza que los requisitos regulatorios se aborden de manera eficiente.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por Qué Elegir a Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India es una consultoría de cumplimiento regulatorio que
          asiste a fabricantes, importadores, exportadores y empresas con los
          requisitos de certificación y aprobación en toda India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nuestros expertos brindan apoyo integral para la Certificación BIS para
          Mesas y Escritorios bajo IS 17633:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Nuestros Servicios Incluyen</h3>

        <ul className={LIST_CLASS}>
          <li>Evaluación de la aplicabilidad del producto y consultoría de cumplimiento BIS</li>
          <li>Apoyo en documentación y gestión de la solicitud</li>
          <li>Coordinación de pruebas y asistencia en inspección de fábrica</li>
          <li>Comunicación regulatoria y apoyo de cumplimiento posterior a la certificación</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nuestro objetivo es ayudar a las empresas a navegar el proceso de
          certificación de manera eficiente, minimizando retrasos y desafíos de
          cumplimiento.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS para Mesas y Escritorios bajo IS 17633:2022 es un
          requisito importante para los fabricantes que buscan suministrar productos
          de mobiliario conformes en el mercado indio. La certificación ayuda a
          garantizar que las mesas y escritorios cumplan con las normas establecidas
          en relación con seguridad, estabilidad, durabilidad, resistencia y calidad.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Al obtener la Certificación BIS y usar la Marca ISI, los fabricantes pueden
          demostrar el cumplimiento de las normas indias, mejorar la confianza del
          cliente, fortalecer su posición en el mercado y respaldar el crecimiento
          comercial a largo plazo.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Si planea obtener la Certificación BIS para Mesas y Escritorios bajo IS
          17633:2022, Sun Certifications India puede ayudarle con apoyo integral de
          cumplimiento, ayudándole a navegar el proceso de certificación de manera
          eficiente y con confianza.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes – Certificación BIS para Mesas y Escritorios (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. ¿Qué es IS 17633:2022?</strong>
              <br />
              IS 17633:2022 es la Norma India publicada por la Oficina de Normas de
              India (BIS) que establece los requisitos mínimos de rendimiento,
              estabilidad, durabilidad y seguridad para mesas y escritorios destinados
              a usuarios adultos en aplicaciones sentadas y de pie.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ¿Es obligatoria la certificación BIS para mesas y escritorios?</strong>
              <br />
              Sí — para los productos cubiertos bajo la Orden de Control de Calidad
              (QCO) de Mobiliario aplicable. Los fabricantes e importadores deben
              poseer una licencia BIS válida y cumplir con IS 17633:2022 antes de
              fabricar, importar, vender o distribuir dicho mobiliario en India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ¿Qué marca de certificación es aplicable a mesas y escritorios?</strong>
              <br />
              Las mesas y escritorios certificados están autorizados a llevar la Marca
              ISI bajo el Esquema de Certificación de Productos BIS, lo que indica que
              el producto cumple con la Norma India aplicable.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ¿Quién puede solicitar la certificación BIS?</strong>
              <br />
              Tanto los fabricantes indios como los fabricantes extranjeros pueden
              solicitarla, siempre que sus mesas y escritorios caigan dentro del
              alcance de la QCO aplicable y cumplan con los requisitos de IS
              17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ¿Cuál es el propósito de la certificación BIS?</strong>
              <br />
              La certificación BIS confirma que el mobiliario cumple con referentes
              reconocidos a nivel nacional de seguridad, rendimiento estructural,
              durabilidad y mano de obra — ayudando a proteger a los usuarios finales
              y a mantener las normas de calidad en todo el mercado.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ¿Qué productos están cubiertos bajo IS 17633:2022?</strong>
              <br />
              La norma cubre mesas y escritorios de uso adulto utilizados en oficinas,
              instituciones educativas, establecimientos comerciales y entornos de
              trabajo — incluyendo escritorios de oficina, estaciones de trabajo,
              mesas de estudio, mesas de conferencia y categorías de mobiliario
              similares.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. ¿Son obligatorias las pruebas de laboratorio?</strong>
              <br />
              Sí. Las muestras del producto deben probarse en un laboratorio
              reconocido por BIS, y el informe de prueba resultante es un documento
              clave en la solicitud de certificación para demostrar el cumplimiento de
              IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ¿Pueden venderse mesas y escritorios importados sin certificación BIS?</strong>
              <br />
              No. Los productos importados que caen bajo la certificación obligatoria
              no pueden suministrarse legalmente en India sin una aprobación BIS
              válida. Los importadores deben garantizar el cumplimiento de la norma
              aplicable antes de colocar los productos en el mercado.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. ¿Cuál es el papel de una inspección de fábrica?</strong>
              <br />
              BIS realiza una evaluación de fábrica para verificar que el fabricante
              mantenga una infraestructura de producción, sistemas de control de
              calidad y trazabilidad del producto adecuados para fabricar de manera
              consistente mesas y escritorios conformes.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ¿Cómo puede ayudar Sun Certifications India?</strong>
              <br />
              Sun Certifications India ofrece asistencia integral — incluyendo
              evaluación del alcance del producto, preparación de la documentación,
              coordinación de pruebas de laboratorio, gestión de la solicitud BIS,
              preparación para la inspección de fábrica y apoyo de cumplimiento
              posterior a la certificación para mesas y escritorios bajo IS
              17633:2022.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="Certificado BIS para Mesas y Escritorios - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Recursos Relacionados
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">Licencia de Marca ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Certificado BIS FMCS</a>
          </li>
        </ul>

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
