import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateCompsitSyntheticFibreSpanish = () => {
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

export default BISCertificateCompsitSyntheticFibreSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para Cuerdas de Fibra Sintética Compuesta | IS 14928:2001 Licencia BIS";
  const ogTitle =
    "Certificación BIS para Cuerdas de Fibra Sintética Compuesta – Guía IS 14928:2001";
  const twitterTitle =
    "Licencia BIS para Cuerdas de Fibra Sintética Compuesta | IS 14928:2001";
  const metaDescription =
    "Obtenga Certificado BIS para Cuerdas de Fibra Sintética Compuesta bajo IS 14928:2001. Proceso, documentos, pruebas, costo y cronograma para Certificación BIS en India.";
  const ogDescription =
    "Guía completa para Certificación BIS de Cuerdas de Fibra Sintética Compuesta según IS 14928:2001. Conozca proceso, costo, documentos, pruebas y beneficios de licencia BIS.";
  const twitterDescription =
    "Solicite Certificado BIS para Cuerdas de Fibra Sintética Compuesta bajo IS 14928:2001. Aprenda proceso BIS, documentos, pruebas, tarifas y cronograma en India.";
  const metaKeywords =
    "Certificado BIS para Cuerdas de Fibra Sintética Compuesta, Licencia BIS para Cuerdas de Fibra Sintética Compuesta, IS 14928:2001, Certificación BIS para Cuerdas de Fibra Sintética Compuesta";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/cuerdas-de-fibra-sintetica-compuesta-is-14928";
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
                    Certificado BIS para Cuerdas de Fibra Sintética Compuesta – IS
                    14928:2001
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
          Certificación BIS Cuerdas de Fibra Sintética Compuesta – Guía Completa de
          IS 14928:2001
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCompositeSyntheticFibreRopes.png"
            title="Licencia BIS para Cuerdas de Fibra Sintética Compuesta"
            alt="Certificado BIS para Cuerdas de Fibra Sintética Compuesta - IS 14928:2001 Certificación BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las cuerdas de fibra sintética compuesta se utilizan ampliamente en operaciones
          marinas, puertos y muelles, instalaciones mar adentro, pesca,
          transporte marítimo, construcción, agricultura y manejo de materiales pesados.
          Estas cuerdas están diseñadas combinando dos o más fibras sintéticas,
          como poliéster, polipropileno, nailon u otras fibras artificiales,
          para ofrecer una mezcla equilibrada de resistencia, flexibilidad, resistencia a la abrasión,
          flotabilidad y durabilidad. Debido a que las cuerdas de fibra sintética compuesta
          se utilizan frecuentemente en aplicaciones críticas de seguridad, carga de peso,
          remolque, amarre, elevación y seguridad, incluso un defecto de calidad menor
          puede provocar accidentes graves, daños en equipos o fallas operativas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para controlar estos riesgos y garantizar una calidad consistente, el Gobierno
          de la India exige la Certificación BIS para Cuerdas de Fibra Sintética Compuesta
          bajo la Norma India aplicable IS 14928:2001. Un Certificado BIS válido
          para Cuerdas de Fibra Sintética Compuesta es un requisito legal
          para fabricantes e importadores antes de que dichos productos puedan ser
          fabricados, vendidos, distribuidos o importados al mercado indio.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta página sirve como una guía completa enfocada en el cumplimiento que explica
          la Certificación BIS para Cuerdas de Fibra Sintética Compuesta, incluyendo
          el alcance de IS 14928:2001, intención de seguridad, requisitos de prueba,
          documentación, consideraciones de costo y proceso de certificación paso a paso.
          Está diseñada para fabricantes, importadores, fabricantes extranjeros,
          comerciantes y vendedores de comercio electrónico que deseen una comprensión
          clara de cómo obtener una Licencia BIS para Cuerdas de Fibra Sintética Compuesta en India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS es un sistema de evaluación de conformidad de productos operado
          por la Oficina de Normas de la India (BIS), que funciona bajo la Ley BIS
          de 2016. BIS es responsable de desarrollar Normas Indias,
          certificar productos y garantizar que los bienes vendidos en la India cumplan
          con los criterios definidos de seguridad, calidad y rendimiento.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado del Certificado BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El significado del Certificado BIS se refiere a la aprobación formal otorgada por BIS
          que confirma que un producto cumple con la Norma India relevante.
          Una vez certificado, el fabricante está autorizado para usar la Marca de Certificación BIS,
          comúnmente conocida como la Marca ISI, en el producto y el embalaje.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Explicación de la Marca ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La Marca ISI indica que:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>El producto ha sido probado en un laboratorio reconocido por BIS</li>
          <li>La instalación de fabricación ha sido evaluada por funcionarios de BIS</li>
          <li>
            Mecanismos de control de calidad y vigilancia continua están en su lugar
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ¿Por qué existe BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS existe para:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proteger la seguridad del consumidor y del trabajador</li>
          <li>Prevenir la circulación de productos de calidad inferior</li>
          <li>Garantizar la uniformidad y fiabilidad de los bienes industriales</li>
          <li>Fortalecer la aplicación regulatoria y el comercio justo</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para las cuerdas de fibra sintética compuesta—usadas a menudo en condiciones peligrosas y
          de alta carga—la certificación BIS juega un papel crucial en la
          prevención de accidentes y garantía de calidad.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norma BIS Aplicable para Cuerdas de Fibra Sintética Compuesta
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Norma India aplicable para este producto es:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14928:2001</strong> – Cuerdas de Fibra Sintética Compuesta
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta norma especifica los requisitos para materiales, construcción,
          dimensiones, características de rendimiento, marcado, muestreo y
          pruebas de cuerdas de fibra sintética compuesta.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Alcance de IS 14928:2001
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001 cubre:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Cuerdas fabricadas usando una combinación de diferentes fibras sintéticas
          </li>
          <li>
            Varias construcciones de cuerdas como estructuras trenzadas y de cordón
          </li>
          <li>
            Cuerdas destinadas a aplicaciones marinas, de pesca, industriales y de propósito general
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Intención de Seguridad, Rendimiento y Pruebas
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La norma tiene como objetivo garantizar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistencia a la rotura y capacidad de carga adecuadas</li>
          <li>Diámetro consistente y calidad de construcción</li>
          <li>
            Resistencia a la abrasión, humedad y degradación ambiental
          </li>
          <li>Rendimiento predecible y seguro durante la vida útil del servicio</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quién Debe Cumplir
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El cumplimiento con IS 14928:2001 es obligatorio para:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios de cuerdas de fibra sintética compuesta</li>
          <li>Importadores que suministran estas cuerdas en el mercado indio</li>
          <li>Fabricantes extranjeros que venden a través de representantes indios</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por qué la Certificación BIS es Obligatoria para Cuerdas de Fibra Sintética Compuesta
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Riesgos de Seguridad para Consumidores y Trabajadores
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Las cuerdas de fibra sintética compuesta se utilizan en:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Operaciones de amarre y remolque</li>
          <li>Elevación y aseguramiento de cargas pesadas</li>
          <li>Redes de pesca y equipos marinos</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Una falla en la cuerda puede causar lesiones, pérdida de vidas, daños en embarcaciones y
          retrasos en proyectos.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Cumplimiento Gubernamental
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Según las notificaciones BIS y requisitos de control de calidad, los productos
          cubiertos bajo IS 14928:2001 no pueden ser vendidos legalmente sin certificación BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Implicaciones Legales
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El incumplimiento puede llevar a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Decomiso de productos no certificados</li>
          <li>Sanciones financieras bajo la Ley BIS</li>
          <li>Procesamiento y acción legal</li>
          <li>Rechazo de despacho aduanero</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Beneficios de Mercado y Marca
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Una Licencia BIS para Cuerdas de Fibra Sintética Compuesta mejora:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Confianza del cliente</li>
          <li>Elegibilidad para licitaciones gubernamentales y de PSU</li>
          <li>Credibilidad de marca en mercados domésticos y de exportación</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS Paso a Paso para Cuerdas de Fibra Sintética Compuesta
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aplicabilidad e Identificación de Norma
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El proceso comienza confirmando que el producto cae bajo IS
          14928:2001. Esto implica identificar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Composición y mezcla de fibras</li>
          <li>Tipo de construcción de cuerda</li>
          <li>Rango de diámetro y aplicación prevista</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          La identificación precisa evita errores de prueba y rechazo de solicitud.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proceso de Solicitud BIS en Línea
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes deben solicitar BIS en línea a través del portal BIS enviando:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detalles del producto</li>
          <li>Información de fábrica y fabricación</li>
          <li>Arreglos de control de calidad</li>
          <li>Detalles de solicitud de prueba</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Una Solicitud BIS correctamente llenada es crítica para el procesamiento oportuno.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tarifas y Estructura de Costos
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          El costo del certificado BIS incluye:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tarifas de solicitud</li>
          <li>Cargos de prueba en laboratorios reconocidos por BIS</li>
          <li>Tarifas de inspección de fábrica</li>
          <li>Tarifas anuales de licencia y marcado</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          El costo total de certificación BIS varía dependiendo de la construcción de la cuerda,
          rango de tamaño y complejidad de prueba. La planificación adecuada
          ayuda a gestionar el costo de certificación BIS y el costo de licencia BIS
          efectivamente.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pruebas de Muestras de Producto (según IS 14928:2001)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Las muestras de producto se extraen y prueban en laboratorios reconocidos por BIS para
          verificar el cumplimiento con todos los requisitos de la norma.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspección y Auditoría de Fábrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los funcionarios de BIS realizan una auditoría de fábrica para verificar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Control del proceso de fabricación</li>
          <li>Manejo de materias primas</li>
          <li>Instalaciones de prueba internas</li>
          <li>Sistemas y registros de aseguramiento de calidad</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Otorgamiento de Licencia BIS y Marca ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Una vez que se cumplen todos los requisitos, BIS otorga la Licencia de la Oficina de
          Normas de la India, permitiendo al fabricante usar la Marca ISI en
          cuerdas de fibra sintética compuesta.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cumplimiento Post-Certificación
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Después de la certificación, el licenciatario debe:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mantener calidad consistente del producto</li>
          <li>Permitir auditorías de vigilancia periódicas</li>
          <li>Informar a BIS de cualquier cambio en material, proceso o diseño</li>
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
          <li>Flujo de proceso de fabricación</li>
          <li>Lista de maquinaria y equipos de prueba</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado de constitución de la empresa</li>
          <li>Registro GST</li>
          <li>Carta de autorización para firmante</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos Técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Especificaciones y dibujos del producto</li>
          <li>Especificaciones de materias primas</li>
          <li>Procedimientos de prueba internos</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos de Solicitud BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulario de solicitud BIS debidamente llenado</li>
          <li>Carta de solicitud de prueba</li>
          <li>Detalles de marcado y etiquetado</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Estos colectivamente forman los DOCUMENTOS DE CERTIFICACIÓN BIS obligatorios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Prueba según IS 14928:2001
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las pruebas obligatorias incluyen:
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Cláusula
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requisito
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Construcción
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Estructura
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tratamiento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Cuerda
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Diámetro
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Masa
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Resistencia a la Rotura
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Longitud
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Todas las pruebas deben realizarse solo en laboratorios reconocidos por BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Challenges & How to Avoid Them
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>Incorrect Product Classification</strong>
            <br />
            Solution: Conduct a pre-certification technical assessment.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Test Failures</strong>
            <br />
            Solution: Align raw material quality and process controls with IS
            14928:2001.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Incomplete Documentation</strong>
            <br />
            Solution: Prepare BIS-specific documents carefully and verify before
            submission.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Audit Non-Compliance</strong>
            <br />
            Solution: Maintain proper records, calibration, and internal quality
            checks.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Manufacturers & Importers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Compliance with Indian regulations</li>
          <li>Smooth customs clearance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Eligibility for government and institutional tenders</li>
          <li>Improved buyer acceptance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Branding Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Authorized use of BIS Mark</li>
          <li>Enhanced trust and market credibility</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market Expansion
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Entry into regulated sectors</li>
          <li>Long-term business growth</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Failure to obtain BIS certification can result in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy monetary penalties</li>
          <li>Product seizure or recall</li>
          <li>Import bans</li>
          <li>Legal prosecution</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Composite Synthetic Fibre Ropes?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Importers</li>
          <li>Foreign manufacturers supplying to India</li>
          <li>Traders and distributors</li>
          <li>E-commerce sellers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Any entity placing composite synthetic fibre ropes in the Indian
          market must ensure BIS compliance.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtener un Certificado BIS para Cuerdas de Fibra Sintética Compuesta bajo
          IS 14928:2001 es tanto una obligación legal como un requisito de seguridad crítico.
          Una Certificación BIS / Licencia BIS válida para Cuerdas de Fibra Sintética Compuesta
          garantiza el cumplimiento regulatorio, protege a los usuarios finales y mejora la credibilidad del mercado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para fabricantes e importadores, la certificación BIS no se trata solo de aprobación,
          se trata de confianza, seguridad y crecimiento comercial sostenible.
          Con la preparación técnica adecuada y orientación experta, el proceso de certificación BIS
          en la India puede completarse de manera fluida y eficiente.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes – Certificación BIS para Cuerdas de Fibra Sintética Compuesta
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. ¿Cuál es la forma completa de BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oficina de Normas de la India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. ¿Es obligatoria la certificación BIS para cuerdas de fibra sintética compuesta?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, según IS 14928:2001.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What is the BIS Certificate full form?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Can I apply for BIS certificate online?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS apply online through the official portal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How long does BIS certification take?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Typically 1–2 months.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. What is the BIS certification cost?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              It varies based on testing and audit scope.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Do importers need BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Importers must ensure products are certified.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Can foreign manufacturers apply?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, through an Authorized Indian Representative.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Is BIS registration the same as BIS license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, fibre ropes require a BIS license.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. What happens if a product fails testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Corrective action and retesting are required.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. Is ISI marking mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, after certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. How long is the BIS license valid?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Usually 1–2 years, renewable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. Are surveillance audits compulsory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS conducts periodic audits.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. Can license scope be extended later?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, through scope extension approval.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. Can uncertified products be sold online?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, e-commerce sales also require BIS compliance.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-14928-2001-Sun-Certifications-India.pdf"
            title="BIS Certificate for Composite Synthetic Fibre Ropes - IS 14928:2001 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
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
                El Mejor Consultor de Certificados de la India
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
              Marca BIS (Licencia ISI) para Fabricantes Extranjeros
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
                alt="logo BISCRS"
                title="logo BISCRS"
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
                alt="logo Certificado EPR"
                title="logo Certificado EPR"
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
                alt="logo LMPC"
                title="logo LMPC"
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
                alt="logo Marca ISI"
                title="logo Marca ISI"
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
