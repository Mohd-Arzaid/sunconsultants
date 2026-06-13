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

const BISCertificateForWorkChairsSpanish = () => {
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

export default BISCertificateForWorkChairsSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para Sillas de Trabajo | IS 17631:2022 Licencia BIS";
  const ogTitle =
    "Certificación BIS para Sillas de Trabajo – Guía IS 17631:2022";
  const twitterTitle = "Licencia BIS para Sillas de Trabajo | IS 17631:2022";
  const metaDescription =
    "Obtén el Certificado BIS para sillas de trabajo según IS 17631:2022. Proceso, documentos, pruebas, costos y cronograma para la Certificación BIS en India.";
  const ogDescription =
    "Guía completa sobre la Certificación BIS para sillas de trabajo según IS 17631:2022. Conoce el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicita el Certificado BIS para sillas de trabajo según IS 17631:2022. Aprende sobre el proceso BIS, documentos, pruebas, tarifas y cronograma en India.";
  const metaKeywords =
    "Certificado BIS para Sillas de Trabajo, Licencia BIS para Sillas de Trabajo, IS 17631:2022, Certificación BIS para Sillas de Trabajo";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
      />
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
                    Certificación BIS para Sillas de Trabajo (IS 17631:2022)
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
          Certificación BIS para Sillas de Trabajo (IS 17631:2022) – Guía
          Completa de Certificación de Marca ISI
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="Licencia BIS para Sillas de Trabajo"
            alt="Certificación BIS para Sillas de Trabajo - Guía de Marca ISI IS 17631:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las sillas de trabajo se han convertido en una parte esencial de los
          entornos laborales modernos, instituciones educativas, oficinas
          gubernamentales, espacios de coworking y oficinas en casa. A medida que
          las organizaciones ponen mayor énfasis en la comodidad de los empleados,
          la productividad, la ergonomía en el lugar de trabajo y el bienestar
          ocupacional, la demanda de sillas de trabajo de alta calidad continúa
          creciendo.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Una silla mal diseñada puede afectar negativamente la postura, la
          comodidad y la productividad. Por esta razón, la calidad, la seguridad,
          la durabilidad y el rendimiento ergonómico son consideraciones críticas
          para fabricantes, compradores y agencias de adquisición. Para garantizar
          estándares de calidad uniformes en la industria, la Oficina de Normas de
          India (BIS) ha establecido IS 17631:2022, la Norma India aplicable a las
          sillas de trabajo.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes cubiertos bajo el marco regulatorio aplicable deben
          obtener la Certificación BIS y usar la Marca ISI en productos conformes.
          La Certificación BIS demuestra que la silla de trabajo ha sido
          evaluada según los requisitos prescritos relacionados con la seguridad,
          la resistencia, la estabilidad, la durabilidad y el rendimiento
          ergonómico.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta guía completa explica todo lo que fabricantes, importadores,
          marcas de muebles, profesionales de adquisiciones y propietarios de
          negocios necesitan saber sobre la Certificación BIS para Sillas de
          Trabajo bajo IS 17631:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Resumen Rápido de la Certificación BIS para Sillas de Trabajo
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Particular
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Detalles
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Producto", "Sillas de Trabajo"],
                ["Norma India Aplicable", "IS 17631:2022"],
                ["Tipo de Certificación", "Certificación de Producto BIS"],
                [
                  "Esquema de Certificación Aplicable",
                  "Esquema-I (Certificación de Marca ISI)",
                ],
                ["Marca Aplicable", "Marca ISI"],
                [
                  "Autoridad Regulatoria",
                  "Oficina de Normas de India (BIS)",
                ],
                ["Ministerio Aplicable", "Ministerio de Comercio e Industria"],
                [
                  "Requisito de Cumplimiento",
                  "Obligatorio bajo la QCO de Muebles aplicable (Orden de Control de Calidad)",
                ],
                [
                  "Solicitantes Elegibles",
                  "Fabricantes Indios y Fabricantes Extranjeros ",
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
                    {particular === "Esquema de Certificación Aplicable" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Esquema-I (Certificación de Marca ISI)
                      </a>
                    ) : particular === "Requisito de Cumplimiento" ? (
                      <>
                        Obligatorio bajo la{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>
                            QCO de Muebles (Orden de Control de Calidad)
                          </strong>
                        </a>{" "}
                        aplicable
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
          ¿Qué es la Certificación BIS para Sillas de Trabajo?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS para Sillas de Trabajo es un proceso de evaluación
          de conformidad realizado bajo el Esquema de Certificación de Productos
          de la Oficina de Normas de India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          El propósito de la certificación es verificar que las sillas de trabajo
          cumplan con los requisitos especificados bajo IS 17631:2022. Tras una
          certificación exitosa, los fabricantes pueden usar la Marca ISI en sus
          productos.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          El proceso de certificación evalúa varios aspectos de rendimiento y
          seguridad de las sillas de trabajo, incluyendo:
        </p>

        <ul className={LIST_CLASS}>
          <li>Diseño ergonómico</li>
          <li>Integridad estructural</li>
          <li>Estabilidad</li>
          <li>Durabilidad</li>
          <li>Requisitos de seguridad</li>
          <li>Calidad de fabricación</li>
          <li>Rendimiento del producto</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Marca ISI proporciona la garantía de que el producto ha sido
          evaluado según las normas indias reconocidas y cumple con los requisitos
          de calidad prescritos.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Por Qué es Importante la Certificación BIS para Sillas de Trabajo
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Las sillas de trabajo se utilizan durante períodos prolongados en
          oficinas, instituciones educativas, establecimientos comerciales y
          espacios de trabajo en casa. Dado que los usuarios pasan una parte
          significativa del día sentados, la calidad y el rendimiento ergonómico
          de estas sillas afectan directamente la comodidad y la eficiencia en el
          lugar de trabajo.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La Certificación BIS ayuda a garantizar que las sillas de trabajo
          certificadas:
        </p>

        <ul className={LIST_CLASS}>
          <li>Cumplan con los requisitos de seguridad prescritos</li>
          <li>Ofrezcan un rendimiento confiable</li>
          <li>Proporcionen resistencia estructural adecuada</li>
          <li>Mantengan la estabilidad durante el uso</li>
          <li>Soporten la durabilidad a largo plazo</li>
          <li>Cumplan con los estándares de calidad indios</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para los fabricantes, la certificación ayuda a demostrar la calidad del
          producto mientras apoya el cumplimiento regulatorio y la aceptación en el
          mercado.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Resumen de IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022 es la Norma India que especifica los requisitos para las
          sillas de trabajo.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norma establece requisitos relacionados con:
        </p>

        <ul className={LIST_CLASS}>
          <li>Seguridad</li>
          <li>Resistencia</li>
          <li>Estabilidad</li>
          <li>Durabilidad</li>
          <li>Consideraciones ergonómicas</li>
          <li>Rendimiento funcional</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          El objetivo es garantizar que las sillas de trabajo sean capaces de
          proporcionar un rendimiento seguro y confiable durante el uso prolongado
          en entornos laborales.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1">
          Alcance de IS 17631:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Según la norma, IS 17631:2022 cubre las sillas de trabajo y se aplica a:
        </p>

        <ul className={LIST_CLASS}>
          <li>Sillas de trabajo completamente fabricadas</li>
          <li>Sillas de trabajo fabricadas</li>
          <li>Sillas de trabajo listas para ensamblar después del ensamblaje</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los requisitos de la norma se aplican al producto ensamblado destinado
          al uso.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tipos de Sillas de Trabajo Cubiertas bajo IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dependiendo del diseño del producto y la aplicación prevista, la norma
          puede aplicarse a varias categorías de mobiliario de asientos para el
          lugar de trabajo, incluyendo:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Sillas de Trabajo de Oficina —</strong> Asientos utilizados en
            oficinas corporativas, departamentos administrativos y entornos
            profesionales de trabajo.
          </li>
          <li>
            <strong>Sillas de Tarea —</strong> Sillas construidas para el trabajo
            diario en escritorio, estaciones de trabajo y tareas rutinarias
            sentadas.
          </li>
          <li>
            <strong>Sillas de Trabajo Ajustables —</strong> Modelos con altura,
            inclinación u otras características ajustables para mejorar la comodidad
            y la ergonomía.
          </li>
          <li>
            <strong>Sillas de Trabajo Institucionales —</strong> Sillas
            suministradas a escuelas, colegios, oficinas gubernamentales e
            instituciones comerciales.
          </li>
          <li>
            <strong>Sillas de Oficina en Casa —</strong> Sillas de trabajo
            diseñadas para trabajo remoto, freelancers y configuraciones de
            oficina residencial.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Revise cuidadosamente el diseño del producto, el mecanismo y el uso
          previsto para confirmar si su silla entra dentro del alcance de IS
          17631:2022.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            También consulte los Productos de Muebles Cubiertos bajo la
            Certificación BIS Obligatoria —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Certificación BIS para muebles</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos Clave bajo IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norma se centra en varias características de rendimiento importantes
          que contribuyen a la calidad y seguridad de las sillas de trabajo.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Diseño Ergonómico —</strong> Aborda la comodidad del usuario,
            el soporte del asiento y respaldo, la ajustabilidad y la postura
            adecuada para reducir la fatiga y mejorar la productividad en el
            lugar de trabajo.
          </li>
          <li>
            <strong>Requisitos de Resistencia —</strong> El marco, las uniones y
            las estructuras de soporte deben soportar el uso normal sin fallas o
            pérdida de integridad.
          </li>
          <li>
            <strong>Requisitos de Estabilidad —</strong> Las sillas deben resistir
            el vuelco y permanecer estables durante el uso sentado regular y el
            movimiento.
          </li>
          <li>
            <strong>Requisitos de Durabilidad —</strong> Los productos deben
            funcionar de manera consistente después del uso prolongado y repetido
            diario durante su vida útil prevista.
          </li>
          <li>
            <strong>Requisitos de Seguridad —</strong> El diseño y la construcción
            deben minimizar los riesgos evitables por inestabilidad, defectos o
            construcción insegura.
          </li>
          <li>
            <strong>Calidad de Materiales —</strong> Los componentes y acabados
            deben cumplir con estándares de calidad que respalden un rendimiento
            seguro, duradero y confiable.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Prueba para la Certificación BIS de Sillas de Trabajo
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Antes de otorgar la certificación, las muestras del producto se evalúan
          mediante pruebas en un laboratorio reconocido. Las pruebas ayudan a
          verificar el cumplimiento con los requisitos especificados bajo IS
          17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Pruebas Clave Realizadas</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
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
              {[
                ["4", "Diseño y mano de obra"],
                ["7.3.1", "Vuelco del Borde Frontal"],
                ["7.3.2", "Vuelco Hacia Adelante"],
                [
                  "7.3.3",
                  "Vuelco Hacia Adelante para Sillas con Reposapiés",
                ],
                [
                  "7.3.4",
                  "Vuelco Lateral para Sillas Sin Reposabrazos",
                ],
                [
                  "7.3.5",
                  "Vuelco Lateral para Sillas Con Reposabrazos",
                ],
                [
                  "7.3.6",
                  "Vuelco Hacia Atrás para Sillas Sin Respaldo",
                ],
                ["7.4.1", "Prueba de Carga Estática del Borde Frontal del Asiento"],
                ["7.4.2", "Prueba de Carga Estática Combinada del Asiento y Respaldo"],
                [
                  "7.4.3",
                  "Prueba de Carga Estática Hacia Abajo del Reposabrazos — Central",
                ],
                [
                  "7.4.4",
                  "Prueba de Carga Estática Hacia Abajo del Reposabrazos — Frontal",
                ],
                ["7.4.5", "Prueba de Carga Estática Lateral del Reposabrazos"],
                ["7.4.6", "Prueba de Carga Estática del Reposapiés"],
              ].map(([clause, requirement], index) => (
                <TableRow
                  key={clause}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {clause}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {requirement}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso de Certificación BIS para Sillas de Trabajo
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes que buscan la Certificación BIS bajo IS 17631:2022 deben
          completar un proceso de certificación estructurado.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Paso 1: Evaluación de Aplicabilidad del Producto —</strong>{" "}
            Confirme si la silla de trabajo entra bajo IS 17631:2022 y la QCO de
            Muebles aplicable antes de iniciar la certificación.
          </li>
          <li>
            <strong>Paso 2: Preparación de Documentación —</strong> Compile
            registros técnicos, de fabricación, control de calidad y legales
            requeridos para la revisión de BIS.
          </li>
          <li>
            <strong>Paso 3: Pruebas del Producto —</strong> Envíe muestras a un
            laboratorio reconocido por BIS para evaluación según IS 17631:2022.
          </li>
          <li>
            <strong>Paso 4: Presentación de la Solicitud —</strong> Presente la
            solicitud BIS con informes de prueba, detalles de fábrica y documentos
            de cumplimiento de respaldo.
          </li>
          <li>
            <strong>Paso 5: Inspección de Fábrica —</strong> BIS evalúa los
            sistemas de producción, procedimientos de control de calidad y
            trazabilidad en la instalación de fabricación.
          </li>
          <li>
            <strong>Paso 6: Revisión Técnica —</strong> BIS evalúa la solicitud,
            los resultados de laboratorio y los hallazgos de inspección antes de la
            aprobación final.
          </li>
          <li>
            <strong>Paso 7: Otorgamiento de Licencia BIS —</strong> Tras el
            cumplimiento exitoso, BIS emite la licencia y autoriza el uso de la
            Marca ISI en las sillas de trabajo certificadas.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certificación BIS para Fabricantes Indios
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes indios generalmente solicitan a través de la ruta de
          certificación doméstica. El proceso generalmente incluye:
        </p>

        <ul className={LIST_CLASS}>
          <li>Pruebas del producto en un laboratorio reconocido por BIS</li>
          <li>Revisión de documentación y presentación de solicitud BIS</li>
          <li>Evaluación de fábrica y evaluación técnica por BIS</li>
          <li>Otorgamiento de licencia BIS y autorización de Marca ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Después de la certificación, los fabricantes deben mantener el
          cumplimiento continuo con la vigilancia, el marcado y los requisitos de
          calidad de BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certificación BIS para Fabricantes Extranjeros
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los fabricantes extranjeros que pretenden exportar sillas de trabajo a
          India también deben obtener la Certificación BIS antes de suministrar
          productos cubiertos bajo los requisitos de certificación obligatoria.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          El proceso generalmente incluye:
        </p>

        <ul className={LIST_CLASS}>
          <li>
            Nombramiento de un Representante Autorizado en India (AIR)
          </li>
          <li>Pruebas de producto en el extranjero y evaluación de fábrica</li>
          <li>Revisión de solicitud BIS y aprobación de certificación</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esto garantiza que los productos importados cumplan con los mismos
          requisitos de calidad y seguridad aplicables a los fabricantes
          nacionales.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para la Certificación BIS de Sillas de Trabajo
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La documentación es una parte crítica del proceso de certificación BIS
          para sillas de trabajo. Los requisitos pueden diferir según si el
          solicitante es un fabricante indio, fabricante extranjero o importador,
          y según el esquema de certificación seguido. Los registros incompletos o
          inconsistentes se encuentran entre las razones más comunes de retrasos
          en las solicitudes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Los siguientes documentos son comúnmente requeridos durante la
          certificación BIS de sillas de trabajo bajo IS 17631:2022:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Documentos Comerciales —</strong> Certificado de registro de
            empresa, licencia de fabricación (si aplica), registro GST, comprobante
            de domicilio comercial, y detalles del signatario autorizado con
            comprobante de identidad y domicilio.
          </li>
          <li>
            <strong>Documentos de Fabricación —</strong> Plan de distribución de
            fábrica, diagrama de flujo del proceso de fabricación, lista de
            maquinaria de producción y equipos de prueba, y detalles de la
            infraestructura de producción y capacidad instalada.
          </li>
          <li>
            <strong>Documentos del Producto —</strong> Especificaciones del
            producto, planos de ingeniería o técnicos, catálogo de productos o
            lista de modelos, lista de materiales (BOM), y detalles de materias
            primas, componentes y piezas críticas utilizadas en la silla de
            trabajo.
          </li>
          <li>
            <strong>Documentos de Control de Calidad —</strong> Procedimientos
            escritos de control de calidad, registros de inspección de materiales
            entrantes, informes de inspección de productos en proceso y terminados,
            métodos de prueba internos, y certificados de calibración para equipos
            de medición y prueba.
          </li>
          <li>
            <strong>Documentos de Certificación —</strong> Informes de prueba de
            un laboratorio reconocido por BIS, formularios de solicitud BIS
            debidamente completados, declaraciones y compromisos, muestras de
            etiquetas o marcado, y cualquier documento adicional prescrito por BIS
            para la ruta de certificación específica.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Todos los documentos deben ser precisos, completos y consistentes con
          los detalles del producto presentados en la solicitud BIS. Se recomienda
          a los fabricantes revisar cuidadosamente los requisitos de documentación
          antes de presentar para evitar retrasos innecesarios en el procesamiento
          de la certificación.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la Certificación BIS para Sillas de Trabajo
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Cumplimiento Regulatorio —</strong> Cumpla con las normas
            indias obligatorias y los requisitos de QCO para la fabricación y
            venta legal.
          </li>
          <li>
            <strong>Acceso Legal al Mercado —</strong> Suministre sillas de trabajo
            certificadas en India sin riesgo regulatorio para las categorías de
            productos cubiertas.
          </li>
          <li>
            <strong>Mayor Credibilidad —</strong> La Marca ISI señala calidad
            verificada, seguridad y conformidad con IS 17631:2022.
          </li>
          <li>
            <strong>Confianza del Cliente —</strong> Compradores corporativos,
            instituciones y usuarios finales confían en productos probados según
            referencias nacionales.
          </li>
          <li>
            <strong>Mejores Adquisiciones —</strong> Mejora la elegibilidad en
            licitaciones gubernamentales, institucionales y comerciales de gran
            volumen.
          </li>
          <li>
            <strong>Reputación de Marca Más Sólida —</strong> Demuestra
            compromiso con la calidad, la ergonomía y la confiabilidad del producto
            a largo plazo.
          </li>
          <li>
            <strong>Control de Calidad Mejorado —</strong> Fomenta sistemas
            estructurados de control de calidad, trazabilidad y estándares de
            producción consistentes.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes Durante la Certificación BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Interpretación técnica —</strong> Mapear las cláusulas de IS
            17631:2022 a diseños, mecanismos y variantes específicas de sillas
            puede ser complejo.
          </li>
          <li>
            <strong>Fallos en pruebas —</strong> Marcos débiles, mala estabilidad o
            problemas de mecanismo a menudo conducen al rechazo en pruebas de
            vuelco o carga.
          </li>
          <li>
            <strong>Brechas en documentación —</strong> Planos inconsistentes,
            registros de control de calidad incompletos o declaraciones faltantes
            comúnmente retrasan la aprobación.
          </li>
          <li>
            <strong>Cumplimiento de fábrica —</strong> Los controles de producción,
            la trazabilidad y las pruebas internas pueden necesitar mejoras antes
            del otorgamiento de la licencia.
          </li>
          <li>
            <strong>Coordinación regulatoria —</strong> Alinear las pruebas de
            laboratorio, las inspecciones de BIS y las consultas de seguimiento
            lleva tiempo sin apoyo experto.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Por Qué Elegir Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India es una consultoría de cumplimiento regulatorio
          que asiste a fabricantes, importadores, exportadores y empresas en la
          obtención de diversas certificaciones y aprobaciones requeridas para el
          mercado indio.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nuestro equipo proporciona asistencia integral para la Certificación BIS
          de Sillas de Trabajo bajo IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Nuestros Servicios Incluyen</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Evaluación de Aplicabilidad del Producto —</strong> Confirmamos
            si sus sillas de trabajo entran bajo IS 17631:2022 y la QCO aplicable.
          </li>
          <li>
            <strong>Consultoría de Cumplimiento BIS —</strong> Orientación experta
            sobre rutas de certificación, obligaciones y requisitos de la norma.
          </li>
          <li>
            <strong>Asistencia con Documentación —</strong> Preparación, revisión y
            organización de todos los registros de solicitud BIS y de fábrica.
          </li>
          <li>
            <strong>Coordinación de Pruebas —</strong> Apoyo integral para el envío
            de muestras y pruebas en laboratorios reconocidos.
          </li>
          <li>
            <strong>Apoyo en Inspección de Fábrica —</strong> Verificaciones de
            preparación para la evaluación de fábrica y cumplimiento de BIS.
          </li>
          <li>
            <strong>Gestión de Solicitudes —</strong> Manejo de presentaciones BIS,
            seguimientos y comunicación regulatoria en su nombre.
          </li>
          <li>
            <strong>Apoyo Post-Certificación —</strong> Asistencia continua con
            vigilancia, reglas de marcado y requisitos de mantenimiento de licencia.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificación BIS para Sillas de Trabajo bajo IS 17631:2022 desempeña
          un papel importante en garantizar la calidad, seguridad, durabilidad,
          estabilidad y rendimiento ergonómico en productos de asientos para el
          lugar de trabajo.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Al obtener la Certificación BIS y usar la Marca ISI, los fabricantes
          pueden demostrar el cumplimiento con las normas indias, fortalecer la
          confianza del cliente, mejorar la credibilidad del producto y apoyar el
          crecimiento empresarial a largo plazo.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ya sea que sea un fabricante indio o un fabricante extranjero que busca
          acceso al mercado indio, comprender los requisitos de IS 17631:2022 es
          un paso esencial hacia el cumplimiento regulatorio y el éxito en el
          mercado.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Si planea obtener la Certificación BIS para Sillas de Trabajo bajo IS
          17631:2022, Sun Certifications India puede ayudar a simplificar el
          proceso a través de orientación regulatoria experta y apoyo integral de
          cumplimiento.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes – Certificación BIS para Sillas de Trabajo (IS
          17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. ¿Qué es la Certificación BIS para Sillas de Trabajo?
              </strong>
              <br />
              La Certificación BIS confirma que las sillas de trabajo cumplen con
              los requisitos de IS 17631:2022 y los requisitos de certificación
              aplicables.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ¿Qué es IS 17631:2022?</strong>
              <br />
              IS 17631:2022 es la Norma India que especifica los requisitos para
              sillas de trabajo, incluyendo seguridad, resistencia, estabilidad,
              durabilidad y consideraciones ergonómicas.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. ¿Es obligatoria la Certificación BIS para sillas de trabajo?
              </strong>
              <br />
              Las sillas de trabajo cubiertas bajo el marco regulatorio aplicable
              deben cumplir con los requisitos de certificación BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ¿Qué es la Marca ISI?</strong>
              <br />
              La Marca ISI es la marca de certificación estándar emitida bajo el
              Esquema de Certificación de Productos BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ¿Quién puede solicitar la Certificación BIS?</strong>
              <br />
              Tanto fabricantes indios como fabricantes extranjeros pueden
              solicitar.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. ¿La Certificación BIS requiere pruebas del producto?
              </strong>
              <br />
              Sí. Las pruebas del producto son una parte importante del proceso de
              certificación.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. ¿Las sillas de trabajo importadas requieren Certificación BIS?
              </strong>
              <br />
              Los productos cubiertos bajo requisitos de certificación obligatoria
              deben cumplir con las regulaciones BIS aplicables antes de ser
              suministrados en India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. ¿Qué pruebas se realizan bajo IS 17631:2022?
              </strong>
              <br />
              La norma incluye evaluaciones como evaluación de diseño y mano de
              obra, verificación dimensional, pruebas de estabilidad y pruebas de
              carga estática.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. ¿Por qué es importante el diseño ergonómico para las sillas de
                trabajo?
              </strong>
              <br />
              El diseño ergonómico ayuda a mejorar la comodidad del usuario, apoya
              una postura adecuada y contribuye a una mejor experiencia en el lugar
              de trabajo.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ¿Cómo puede ayudar Sun Certifications India?</strong>
              <br />
              Sun Certifications India proporciona asistencia con evaluación de
              aplicabilidad, documentación, coordinación de pruebas, preparación
              para inspección, gestión de solicitudes y apoyo de cumplimiento.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="Certificado BIS para Sillas de Trabajo - IS 17631:2022 PDF"
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
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              {" "}
              Certificado ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Certificado BIS para Fabricante Extranjero
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadSpanish />

        <FaqAuthorSpanish questionNumber={4} />
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
