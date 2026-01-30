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

const BISCertificationCombinationSideCuttingPliersSpanish = () => {
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




export default BISCertificationCombinationSideCuttingPliersSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para alicates combinados de corte lateral | IS 3650:1981 Licencia BIS";
  const ogTitle =
    "Certificación BIS para alicates combinados de corte lateral – Guía IS 3650:1981";
  const twitterTitle =
    "Licencia BIS para alicates combinados de corte lateral | IS 3650:1981";
  const metaDescription =
    "Obtenga el certificado BIS para alicates combinados de corte lateral según IS 3650:1981. Proceso, documentos, pruebas, coste y plazos para la certificación BIS en India.";
  const ogDescription =
    "Guía completa de la certificación BIS para alicates combinados de corte lateral según IS 3650:1981. Proceso, costes, documentos, pruebas y ventajas de la licencia BIS.";
  const twitterDescription =
    "Solicite el certificado BIS para alicates combinados de corte lateral según IS 3650:1981. Proceso BIS, documentos, pruebas, tasas y plazos en India.";
  const metaKeywords =
    "Certificado BIS para alicates combinados de corte lateral, Licencia BIS para alicates combinados de corte lateral, IS 3650:1981, Certificación BIS para alicates combinados de corte lateral";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/alicates-combinados-corte-lateral-is-3650";
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
                    <Link to="/Blogs">Últimos artículos</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificado BIS para alicates combinados de corte lateral – IS 3650:1981
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
          Certificación BIS alicates combinados de corte lateral – Guía completa IS 3650:1981
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="Licencia BIS para alicates combinados de corte lateral"
            alt="Certificado BIS para alicates combinados de corte lateral - IS 3650:1981 Certificación BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los alicates combinados de corte lateral son una de las herramientas de mano más utilizadas en trabajos eléctricos, mantenimiento mecánico, construcción, unidades de fabricación, talleres, servicio automotriz y reparaciones domésticas. Están diseñados para realizar varias funciones como sujetar, doblar, torcer y cortar cables. Dado que se usan con frecuencia para cortar alambres metálicos, conductores eléctricos y componentes pequeños, unos alicates de mala calidad pueden provocar rotura de la herramienta, riesgo de electrocución, lesiones en las manos y accidentes laborales graves.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para garantizar la seguridad, durabilidad y calidad uniforme, el Gobierno de la India exige el cumplimiento de las normas indias para herramientas de mano. Obtener un certificado BIS para alicates combinados de corte lateral según IS 3650:1981 es un requisito legal y de calidad esencial para fabricantes e importadores que venden estas herramientas en India. Una certificación BIS válida para alicates combinados de corte lateral confirma que el producto ha sido probado en resistencia mecánica, eficiencia de corte, dureza del material y rendimiento de seguridad general.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta página de producto detallada está creada para fabricantes, fabricantes extranjeros, importadores, comerciantes, distribuidores, marcas de ferretería, vendedores de comercio electrónico y profesionales de cumplimiento que deseen una comprensión completa de la licencia BIS para alicates combinados de corte lateral, incluido el proceso de certificación BIS en India, requisitos de pruebas, documentación, coste, plazos, sanciones y beneficios.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la certificación BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificación BIS es un sistema de evaluación de la conformidad de productos regulado por la Oficina de Normas Indias (Bureau of Indian Standards), que es la autoridad nacional de India para la normalización, certificación y garantía de calidad.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significado del certificado BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El significado del certificado BIS se refiere a la aprobación oficial emitida por BIS que confirma que un producto cumple con la norma india aplicable (IS) y se fabrica bajo un sistema de calidad controlado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Los principales objetivos de la certificación BIS son:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proteger a los consumidores de productos inseguros</li>
          <li>Garantizar una calidad de producto constante</li>
          <li>Apoyar la aplicación de la normativa</li>
          <li>Fomentar la normalización en la industria india</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Marca ISI explicada
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La marca de certificación BIS, conocida comúnmente como marca ISI, es un símbolo de confianza y conformidad. Para los alicates combinados de corte lateral, la marca ISI indica que:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La herramienta cumple los requisitos IS 3650:1981</li>
          <li>El rendimiento mecánico y de corte está verificado</li>
          <li>El producto está legalmente aprobado para la venta en India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norma BIS aplicable para alicates combinados de corte lateral
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – Especificación para alicates combinados
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norma india aplicable a este producto es IS 3650:1981, que especifica los requisitos para alicates combinados con bordes de corte lateral utilizados para aplicaciones de sujeción y corte.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Alcance de IS 3650:1981
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Esta norma cubre:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Alicates combinados con bordes de corte lateral</li>
          <li>Requisitos de dimensiones, forma y acabado</li>
          <li>Calidad del material y tratamiento térmico</li>
          <li>Resistencia mecánica y rendimiento de corte</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Seguridad, rendimiento e intención de las pruebas
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 3650:1981 está diseñada para garantizar que:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Los alicates tengan capacidad de corte suficiente</li>
          <li>Las mordazas y bordes de corte no se astillen ni deformen</li>
          <li>Los mangos proporcionen agarre seguro y aislamiento cuando corresponda</li>
          <li>La herramienta funcione de forma fiable en condiciones normales de trabajo</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quién debe cumplir
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes de alicates combinados de corte lateral en India</li>
          <li>Importadores y distribuidores</li>
          <li>Fabricantes extranjeros que abastecen el mercado indio</li>
          <li>Marcas que venden alicates con etiquetas privadas</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por qué la certificación BIS es obligatoria para alicates combinados de corte lateral
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Riesgos para la seguridad del consumidor
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los alicates que no cumplen la norma pueden provocar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rotura repentina durante el corte</li>
          <li>Resbalones y lesiones en las manos</li>
          <li>Riesgos de electrocución en aplicaciones eléctricas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cumplimiento gubernamental y normativo
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Según las normas y notificaciones BIS, las herramientas de mano como los alicates combinados cubiertos por IS 3650:1981 deben cumplir los requisitos de certificación BIS antes de venderse en India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Implicaciones legales
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La venta o importación de alicates no certificados puede dar lugar a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Decomiso del producto por las autoridades</li>
          <li>Sanciones económicas</li>
          <li>Cancelación de licencias comerciales</li>
          <li>Procesamiento legal según la Ley BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios para el mercado y la marca
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Una licencia BIS para alicates combinados de corte lateral ayuda a las marcas a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Generar confianza con compradores y contratistas</li>
          <li>Optar a licitaciones gubernamentales y PSU</li>
          <li>Competir con marcas de ferretería consolidadas</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de certificación BIS paso a paso para alicates combinados de corte lateral
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aplicabilidad e identificación de la norma
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El primer paso es confirmar que el producto:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Entra en la categoría de alicates combinados de corte lateral</li>
          <li>Está cubierto por IS 3650:1981</li>
          <li>Se ajusta al alcance de la norma en cuanto a tamaño y uso</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proceso de solicitud en línea BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes deben:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registrarse en el portal BIS</li>
          <li>Seleccionar IS 3650:1981 en normas de producto</li>
          <li>Cumplimentar el formulario de solicitud BIS</li>
          <li>Subir todos los documentos requeridos</li>
          <li>Pagar las tasas aplicables</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Esta fase se conoce comúnmente como solicitud BIS en línea o registro del certificado BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tasas y estructura de costes de la licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El coste de la certificación BIS incluye generalmente:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tasas de solicitud y tramitación</li>
          <li>Gastos de pruebas del producto</li>
          <li>Gastos de inspección en fábrica</li>
          <li>Tasas de licencia y marcado</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          El coste total de la certificación BIS depende de:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Número de variantes</li>
          <li>Complejidad de las pruebas</li>
          <li>Ubicación de la fábrica</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pruebas de muestras de producto (según IS 3650:1981)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las muestras se prueban en laboratorios reconocidos por BIS para:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dureza del filo de corte</li>
          <li>Rendimiento de corte</li>
          <li>Resistencia mecánica</li>
          <li>Precisión dimensional</li>
          <li>Acabado superficial y mano de obra</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspección y auditoría en fábrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un funcionario BIS realiza una auditoría en fábrica para verificar:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>El proceso de fabricación</li>
          <li>Tratamiento térmico y operaciones de acabado</li>
          <li>Sistema de control de calidad</li>
          <li>Instalaciones de pruebas e inspección</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Concesión de la licencia BIS y marca ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tras las pruebas e inspección satisfactorias:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS emite la licencia Bureau of Indian Standards</li>
          <li>El fabricante puede utilizar la marca ISI en los alicates aprobados</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cumplimiento post-certificación
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los requisitos posteriores a la aprobación incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inspecciones de vigilancia</li>
          <li>Pruebas de muestras de mercado</li>
          <li>Renovación puntual de la licencia</li>
          <li>Cumplimiento continuo de IS 3650:1981</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos requeridos para la certificación BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos del fabricante
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado de registro de fábrica</li>
          <li>Diagrama de flujo del proceso de fabricación</li>
          <li>Lista de maquinaria y equipos de prueba</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos legales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado de constitución de la sociedad</li>
          <li>Registro GST</li>
          <li>Autorización de marca (si aplica)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Planos y especificaciones del producto</li>
          <li>Detalles de materias primas</li>
          <li>Plan de tratamiento térmico y QC</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documentos de solicitud BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulario de solicitud BIS</li>
          <li>Detalles de la solicitud de prueba</li>
          <li>Declaraciones y compromisos</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Se conocen colectivamente como DOCUMENTOS DEL CERTIFICADO BIS o DOCUMENTOS DE CERTIFICACIÓN BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de prueba según IS 3650:1981
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
                  Requisitos
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Fabricación
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Acabado y mano de obra
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Conservación y embalaje
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensiones
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dureza
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Aislamiento (excepto prueba de aislamiento)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de aislamiento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de corte
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de sujeción de tubo
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de choque
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de torsión
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de carga del mango
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de flexión
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Todas las pruebas deben realizarse únicamente en laboratorios reconocidos por BIS.
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
          <li>Fallo en pruebas de dureza o corte</li>
          <li>Tratamiento térmico incorrecto</li>
          <li>Acabado superficial deficiente</li>
          <li>Documentación incompleta</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Buenas prácticas
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Realizar pre-pruebas internas</li>
          <li>Seguir los procedimientos correctos de tratamiento térmico</li>
          <li>Mantener registros de calidad por lote</li>
          <li>Contar con apoyo de consultoría BIS especializada</li>
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
          <li>Protección frente a sanciones y decomisos</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios comerciales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aceptación por distribuidores y contratistas</li>
          <li>Elegibilidad para pedidos al por mayor e institucionales</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Beneficios de marca
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La marca ISI refuerza la credibilidad de la marca</li>
          <li>Diferenciación frente a proveedores no organizados</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Expansión del mercado
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Entrada en cadenas de retail de ferretería organizadas</li>
          <li>Mayor aceptación en negocios orientados a la exportación</li>
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
          <li>Decomiso del producto</li>
          <li>Interrupción del negocio</li>
          <li>Acción legal según la Ley BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Quién necesita la certificación BIS para alicates combinados de corte lateral?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Importadores</li>
          <li>Fabricantes extranjeros (con representante indio autorizado)</li>
          <li>Comerciantes que venden con marca propia</li>
          <li>Vendedores de comercio electrónico que listan alicates</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtener un certificado BIS para alicates combinados de corte lateral según IS 3650:1981 es un requisito legal y de calidad esencial para vender estas herramientas en India. La certificación BIS para alicates combinados de corte lateral garantiza la seguridad del producto, un rendimiento constante y el cumplimiento normativo, mientras que la licencia BIS para alicates combinados de corte lateral refuerza la credibilidad de la marca y la aceptación en el mercado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para fabricantes, importadores y vendedores, el cumplimiento a tiempo no solo evita sanciones sino que también abre las puertas a mercados más amplios y al crecimiento empresarial a largo plazo. Con orientación experta, el proceso de certificación BIS resulta más fluido, rápido y totalmente conforme a las normas indias.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas frecuentes – Certificación BIS para alicates combinados de corte lateral
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P1. ¿Es obligatoria la certificación BIS para alicates combinados de corte lateral?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, el cumplimiento de IS 3650:1981 es obligatorio en India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P2. ¿Qué significa la sigla BIS en el certificado?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certificado de la Oficina de Normas Indias (Bureau of Indian Standards).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P3. ¿Cuánto tarda el proceso de certificación BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Normalmente entre 30 y 60 días laborables.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P4. ¿Cuál es el coste del certificado BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              El coste depende del alcance de las pruebas y de las variantes del producto.
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
              Sí, a través de un representante indio autorizado.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P8. ¿Qué pruebas exige IS 3650:1981?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Dureza, rendimiento de corte, resistencia y pruebas dimensionales.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P9. ¿Es obligatoria la inspección en fábrica?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, BIS realiza una auditoría en fábrica.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P10. ¿Se pueden incluir varias tallas en una sola licencia?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, previas pruebas y aprobación.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P11. ¿Qué ocurre si se venden alicates no certificados?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Pueden aplicarse sanciones, decomiso y acciones legales.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P12. ¿Es obligatorio solicitar BIS en línea?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, las solicitudes solo se presentan en línea.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P13. ¿Hay que renovar las licencias BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, las licencias deben renovarse periódicamente.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              P14. ¿Pueden los consultores reducir los retrasos en la aprobación?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sí, los consultores profesionales ayudan a evitar errores y rechazos.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="Certificado BIS para alicates combinados de corte lateral - IS 3650:1981 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
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
                El mejor consultor de certificados de la India
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
              Marca BIS (Licencia ISI) para fabricantes extranjeros
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
