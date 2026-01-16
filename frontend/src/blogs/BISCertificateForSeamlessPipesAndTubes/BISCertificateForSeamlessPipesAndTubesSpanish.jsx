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

const BISCertificateForSeamlessPipesAndTubesSpanish = () => {
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

export default BISCertificateForSeamlessPipesAndTubesSpanish;

const MetaTags = () => {
  const title =
    "Certificado BIS para Tubos y Tuberías sin Costura | IS 17875:2022 Licencia BIS";
  const ogTitle =
    "Certificación BIS para Tubos y Tuberías sin Costura – Guía IS 17875:2022";
  const twitterTitle =
    "Licencia BIS para Tubos y Tuberías sin Costura | IS 17875:2022";
  const metaDescription =
    "Obtenga el Certificado BIS para Tubos y Tuberías sin Costura bajo IS 17875:2022. Proceso, documentos, pruebas, costos y cronograma para Certificación BIS en India.";
  const ogDescription =
    "Guía completa sobre Certificación BIS para Tubos y Tuberías sin Costura según IS 17875:2022. Conozca el proceso, costos, documentos, pruebas y beneficios de la licencia BIS.";
  const twitterDescription =
    "Solicite el Certificado BIS para Tubos y Tuberías sin Costura bajo IS 17875:2022. Aprenda sobre el proceso BIS, documentos, pruebas, tarifas y cronograma en India.";
  const metaKeywords =
    "Certificado BIS para Tubos y Tuberías sin Costura, Licencia BIS para Tubos y Tuberías sin Costura, IS 17875:2022, Certificación BIS para Tubos y Tuberías sin Costura";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tubos-y-tuberias-sin-costura-is-17875";
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
                    Certificado BIS para Tubos y Tuberías sin Costura – IS
                    17875:2022
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
          Certificado BIS para Tubos y Tuberías sin Costura bajo IS 17875:2022 —
          Guía Completa de Certificación
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="Licencia BIS para Tubos y Tuberías sin Costura"
            alt="Certificado BIS para Tubos y Tuberías sin Costura - IS 17875:2022 Certificación BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Los tubos y tuberías de acero sin costura son ampliamente reconocidos
          por su rendimiento superior en aplicaciones críticas, de alta presión
          y alta temperatura. Son esenciales en industrias como petróleo y gas,
          petroquímica, refinerías, ingeniería pesada, automotriz, plantas
          térmicas, aeroespacial, hidráulica y sistemas mecánicos generales.
          Dado que los tubos sin costura no tienen costura soldada, ofrecen
          mayor resistencia, uniformidad y capacidad de manejo de presión en
          comparación con los tubos soldados.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para garantizar que los fabricantes sigan una calidad de producción
          consistente y suministren productos seguros y sin defectos al mercado
          indio, el Gobierno de India ha hecho obligatoria la Certificación BIS
          para tubos y tuberías sin costura bajo IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Esta página integral explica todo el proceso de obtención de una
          Licencia BIS, incluyendo documentación, pruebas obligatorias,
          requisitos de cumplimiento de calidad, tarifas, cronogramas, desafíos
          técnicos, beneficios, penalizaciones y aplicabilidad industrial —
          escrito en un formato extendido, muy detallado y rico en SEO.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Qué es la Certificación BIS para Tubos y Tuberías sin Costura?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Un Certificado BIS es una aprobación oficial emitida por la Oficina de
          Estándares de la India, que confirma que el fabricante produce
          tubos/tuberías sin costura de acuerdo con las especificaciones
          definidas en IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Los tubos sin costura deben someterse a pruebas estrictas relacionadas
          con:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistencia a la presión</li>
          <li>Resistencia a la tracción</li>
          <li>Tenacidad al impacto</li>
          <li>Flexibilidad</li>
          <li>Composición química</li>
          <li>Precisión dimensional</li>
          <li>Evaluaciones no destructivas</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Solo los fabricantes que cumplen con estos requisitos de rendimiento
          reciben la Marca ISI, lo que les permite producir, importar o vender
          legalmente tubos sin costura en India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Objetivos Clave de la Certificación BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Prevenir que sistemas de tuberías deficientes o peligrosos entren en
            las cadenas de suministro industriales
          </li>
          <li>Garantizar una calidad de fabricación consistente y confiable</li>
          <li>
            Proteger las industrias que dependen de la transmisión de fluidos o
            gases a alta presión
          </li>
          <li>Mantener los estándares nacionales de seguridad y calidad</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Comprensión de IS 17875:2022 — El Estándar Indio para Tubos y Tuberías
          sin Costura
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17875:2022 especifica los requisitos de calidad, pruebas,
          fabricación y rendimiento para tubos y tuberías de acero sin costura
          destinados a servicio general.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Alcance de la Licencia BIS para Tubos y Tuberías sin Costura
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Esta norma cubre los requisitos para tubos y
          tuberías de acero inoxidable sin costura para servicios generales.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Esta norma no especifica los requisitos de tubos
          y tuberías de acero inoxidable sin costura destinados a propósitos
          distintos, que están cubiertos por Estándares Indios separados.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aplicaciones Cubiertas bajo IS 17875:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ductos de petróleo y gas</li>
          <li>Servicio de fluidos a alta temperatura</li>
          <li>Tubos de caldera</li>
          <li>Plantas de procesamiento químico</li>
          <li>Sistemas hidráulicos y neumáticos</li>
          <li>Intercambiadores de calor</li>
          <li>Aplicaciones estructurales</li>
          <li>Componentes automotrices</li>
          <li>Aplicaciones de vapor</li>
          <li>Ductos industriales de alta presión</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Parámetros Clave de Calidad en IS 17875:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. Requisitos de Composición Química:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Especifica límites para carbono, manganeso, cromo, níquel, molibdeno,
          azufre, fósforo, etc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. Propiedades Mecánicas:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistencia a la tracción</li>
          <li>Límite elástico</li>
          <li>Dureza</li>
          <li>Ductilidad</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. Tolerancias Dimensionales:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diámetro exterior</li>
          <li>Espesor de pared</li>
          <li>Tolerancias de longitud</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. Condiciones Superficiales:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Los tubos deben estar libres de grietas, laminaciones, costuras,
          rayaduras o cualquier defecto perjudicial.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. Prueba Hidrostática:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Garantiza que los tubos puedan soportar presión interna sin fugas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. Pruebas No Destructivas (NDT):</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Incluye corrientes parásitas, pruebas ultrasónicas o pruebas de
          partículas magnéticas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proceso Completo de Certificación BIS para Tubos sin Costura (IS
          17875:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El proceso de certificación BIS para tubos sin costura es más técnico
          y detallado que la mayoría de los otros productos porque los
          requisitos de fabricación y pruebas son extensos. A continuación se
          presenta una explicación paso a paso muy detallada.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASO 1 — Determinar Aplicabilidad y Categorización del Producto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El fabricante debe:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identificar todos los grados de acero que se están utilizando</li>
          <li>Determinar las dimensiones y rangos de espesor</li>
          <li>
            Confirmar si todas las variantes caen dentro del alcance de IS 17875
          </li>
          <li>Preparar la clasificación del producto para las pruebas BIS</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Una sola licencia BIS puede cubrir múltiples tamaños y grados si
          comparten la misma instalación y proceso de fabricación.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASO 2 — Preparar Documentación y Presentar Solicitud BIS en Línea
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          El fabricante debe solicitar en el Portal BIS en Línea Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          La información incluye:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detalles y diseño de la fábrica</li>
          <li>Capacidad de producción y procesos</li>
          <li>Detalles del horno y tratamiento térmico</li>
          <li>Equipos de laminación, perforación y estirado</li>
          <li>Sistemas de control de calidad</li>
          <li>Documentación de abastecimiento de materias primas</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          La presentación incorrecta es una de las causas más comunes de rechazo
          de solicitud BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASO 3 — Presentación de Tarifas
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Las tarifas incluyen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tarifa de solicitud</li>
          <li>Tarifa de procesamiento</li>
          <li>Cargos de pruebas de laboratorio</li>
          <li>Costos de inspección y viaje</li>
          <li>Tarifa de marcado basada en el volumen de producción</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASO 4 — Selección de Muestras y Pruebas de Laboratorio BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Los tubos sin costura se someten a pruebas mecánicas y químicas
          extensas.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Esta es la parte que consume más tiempo y más técnica de la
          certificación BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Prueba de Composición Química</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Se realiza utilizando:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Espectroscopía de emisión óptica</li>
          <li>Métodos químicos húmedos</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Garantiza la composición química exacta según IS 17875.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Pruebas Mecánicas</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Prueba de Tracción</strong> — Evalúa la resistencia máxima a
            la tracción, punto de fluencia y alargamiento.
          </li>
          <li>
            <strong>Prueba de Dureza</strong> — Confirma la tenacidad del
            material.
          </li>
          <li>
            <strong>Prueba de Aplanamiento</strong> — Prueba la ductilidad y
            soldabilidad (aunque sea sin costura, el aplanamiento verifica la
            integridad del material).
          </li>
          <li>
            <strong>Prueba de Ensanchamiento / Brida</strong> — Garantiza la
            deformabilidad sin agrietamiento.
          </li>
          <li>
            <strong>Prueba de Impacto (Charpy)</strong> — Evalúa el rendimiento
            a bajas temperaturas.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Prueba Hidrostática</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Los tubos se someten a alta presión interna para garantizar que no
          ocurran fugas o deformaciones.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – Pruebas No Destructivas</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Obligatorio para detectar defectos internos.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Los métodos incluyen:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inspección Ultrasónica</li>
          <li>Examen de Corrientes Parásitas</li>
          <li>Inspección de Partículas Magnéticas (MPI)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Inspección Visual y Dimensional</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">Evalúa:</p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Acabado superficial</li>
          <li>Rectitud</li>
          <li>Ovalidad</li>
          <li>Tolerancia de espesor</li>
          <li>Precisión del diámetro</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Examen Metalúrgico</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          El análisis de microestructura confirma la estructura de grano, la
          efectividad del tratamiento térmico y la estabilidad del material.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASO 5 — Inspección de Fábrica BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Una vez que los resultados de las pruebas sean exitosos, los
          funcionarios BIS visitan la fábrica.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">Inspeccionan:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Almacenamiento de materias primas</li>
          <li>Procesos de horno/tratamiento térmico</li>
          <li>Mills de perforación, reductores y bancos de estirado en frío</li>
          <li>Instalación de prueba hidrostática</li>
          <li>Instalación NDT</li>
          <li>Equipos de laboratorio y calibración</li>
          <li>Libros de registro de control de calidad</li>
          <li>Verificación de capacidad de fabricación</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          La fábrica debe cumplir completamente con el Esquema de Pruebas e
          Inspección (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASO 6 — Otorgamiento de Licencia BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Si las pruebas y la inspección satisfacen los requisitos BIS, el
          fabricante recibe:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificado BIS</li>
          <li>Número CML</li>
          <li>Autorización para usar la Marca ISI en tubos sin costura</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS puede rechazar solicitudes si incluso un requisito no se cumple —
          haciendo que la guía experta sea extremadamente valiosa.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASO 7 — Obligaciones Post-Certificación
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Los fabricantes deben:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Usar la Marca ISI correctamente en etiquetas, empaques y tubos
          </li>
          <li>Mantener pruebas internas según STI</li>
          <li>Someterse a inspecciones de vigilancia BIS regulares</li>
          <li>Garantizar que cada lote cumpla con IS 17875:2022</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          El incumplimiento del cumplimiento puede resultar en suspensión o
          cancelación de la licencia.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documentos Requeridos para Certificación BIS de Tubos sin Costura
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          A. Documentos de Fabricación y Producción
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licencia de fábrica</li>
          <li>Diagrama de diseño con posicionamiento de maquinaria</li>
          <li>Manual de proceso de control de calidad</li>
          <li>Registros de tratamiento térmico</li>
          <li>Certificados de prueba de molino de materias primas</li>
          <li>Detalles del proceso de laminación/perforación</li>
          <li>Detalles del banco de estirado</li>
          <li>Certificados de calibración para equipos de prueba</li>
          <li>Informes de pruebas internas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          B. Documentos Técnicos
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lista de materiales</li>
          <li>Especificaciones de grado químico</li>
          <li>Hojas de propiedades mecánicas</li>
          <li>Gráficos de tolerancias dimensionales</li>
          <li>Dibujos y especificaciones de tubos</li>
          <li>Documentación del sistema de trazabilidad de materiales</li>
          <li>Procedimientos operativos estándar para producción</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          C. Documentos Legales y Organizacionales
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Carta de autorización</li>
          <li>Documento de propiedad de marca/registro</li>
          <li>Pruebas de identidad y dirección</li>
          <li>Compromisos y declaraciones según lo requerido por BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisitos de Prueba para Tubos sin Costura bajo IS 17875:2022
        </h2>

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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Análisis de Cuchara
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Análisis de Producto
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Requisitos de Tracción
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tuberías
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tubos
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Ensanchamiento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Aplanamiento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tamaño de Grano
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prueba de Estanqueidad
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Mano de Obra, Acabado, Apariencia
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensiones y Tolerancias
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Desafíos Comunes en la Certificación BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Fallo en la prueba de composición química</strong>
            <br />
            Ocurre debido a grados de acero inconsistentes.
          </li>
          <li>
            <strong>Fallo de pruebas mecánicas</strong>
            <br />A menudo causado por tratamiento térmico incorrecto.
          </li>
          <li>
            <strong>Rechazo NDT</strong>
            <br />
            Las grietas internas o inclusiones pueden causar el fallo de la
            muestra.
          </li>
          <li>
            <strong>Calibración inadecuada</strong>
            <br />
            Conduce a datos de prueba inexactos.
          </li>
          <li>
            <strong>Incumplimiento STI</strong>
            <br />
            El mantenimiento incorrecto de registros durante la inspección se
            convierte en una razón principal de rechazo.
          </li>
          <li>
            <strong>Variación dimensional</strong>
            <br />
            Las inconsistencias en el diámetro o espesor del tubo causan fallos.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Beneficios de la Certificación BIS para Tubos sin Costura
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aprobación legal para fabricar/vender en India</li>
          <li>Garantiza seguridad y confiabilidad</li>
          <li>Mejora la reputación de la marca</li>
          <li>Esencial para licitaciones gubernamentales</li>
          <li>Requerido por industrias PSU y privadas</li>
          <li>Protege a los consumidores de productos deficientes</li>
          <li>Mejora la competitividad de exportación</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalizaciones por Incumplimiento
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Bajo la Ley BIS, vender tubos sin costura no certificados resulta en:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Confiscación de productos</li>
          <li>Penalizaciones severas</li>
          <li>Cierre de fabricación</li>
          <li>Restricciones de importación</li>
          <li>Lista negra de marca</li>
          <li>Procesamiento penal</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ¿Quién Debe Obtener la Certificación BIS?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricantes indios</li>
          <li>Fabricantes extranjeros que exportan a India</li>
          <li>Comerciantes (propietarios de marca)</li>
          <li>Empresas OEM e ingeniería</li>
          <li>Importadores y almacenistas</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cada unidad de fabricación debe obtener una licencia separada.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusión
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          El Certificado BIS para Tubos y Tuberías sin Costura bajo IS
          17875:2022 es un requisito regulatorio crítico que garantiza que los
          tubos de servicio de alta presión cumplan con los rigurosos estándares
          de seguridad y calidad de India. Desde la composición química hasta
          las pruebas no destructivas avanzadas, BIS garantiza que cada tubo
          certificado sea duradero, sin defectos y capaz de funcionar bajo
          condiciones industriales exigentes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con guía profesional, los fabricantes pueden agilizar el proceso de
          certificación, minimizar retrasos y lograr el cumplimiento sin
          problemas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Preguntas Frecuentes — Certificación BIS para Tubos sin Costura
          (Extendido y Rico en SEO)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. ¿Por qué es obligatoria la Certificación BIS para tubos sin
                costura?
              </strong>
              <br />
              Porque los tubos sin costura se utilizan en aplicaciones de alta
              presión y críticas para la seguridad. Las regulaciones
              gubernamentales garantizan que solo tubos de alta calidad entren
              al mercado indio.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. ¿Qué estándar se aplica a los tubos sin costura?
              </strong>
              <br />
              IS 17875:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. ¿Cuánto tiempo toma el proceso de certificación?
              </strong>
              <br />
              Típicamente 40–60 días para Fabricante Indio y alrededor de 120
              días para fabricante extranjero, dependiendo de la carga de
              pruebas y programación de inspección.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ¿Qué pruebas se necesitan?</strong>
              <br />
              Análisis químico, prueba de tracción, dureza, hidrostática, NDT,
              aplanamiento, ensanchamiento y verificaciones dimensionales.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. ¿Pueden las empresas extranjeras solicitar certificación BIS?
              </strong>
              <br />
              Sí, a través del esquema FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ¿Qué pasa si el producto falla las pruebas?</strong>
              <br />
              Debe corregirse y volver a probarse; BIS no emitirá la licencia
              hasta que se logre el cumplimiento completo.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. ¿Qué documentos se requieren?</strong>
              <br />
              Licencia de fábrica, lista de maquinaria, equipos de prueba,
              dibujos, documentos de control de calidad, certificados de
              materias primas, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ¿Es obligatorio el marcado ISI?</strong>
              <br />
              Sí. Es ilegal vender tubos sin costura sin mostrar la marca ISI.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. ¿Se permiten múltiples grados en una licencia?</strong>
              <br />
              Sí, si se producen utilizando la misma instalación y proceso
              (sujeto a aprobación BIS).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ¿Cuánto tiempo es válida la licencia BIS?</strong>
              <br />
              1–2 años, renovable indefinidamente.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="Certificado BIS para Tubos y Tuberías sin Costura - IS 17875:2022 PDF"
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
                alt="BIS Logo"
                title="BIS Logo"
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
                alt="CDSCO Logo"
                title="CDSCO Logo"
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
                alt="Certificado EPR"
                title="Certificado EPR"
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
                alt="Certificado LMPC"
                title="Certificado LMPC"
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
              Marca ISI (BIS) para Fabricantes Indios
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
