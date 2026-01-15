import FaqAuthorFrench from "@/components/common/FaqAuthor/FaqAuthorFrench";
import ManyUsersAlsoReadFrench from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadFrench";
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";
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
import FooterFrench from "@/components/manual/Footer/FooterFrench";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForSeamlessPipesAndTubesFrench = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default BISCertificateForSeamlessPipesAndTubesFrench;

const MetaTags = () => {
  const title =
    "Certificat BIS pour Tubes et Tuyaux sans Soudure | Licence BIS IS 17875:2022";
  const ogTitle =
    "Certification BIS pour Tubes et Tuyaux sans Soudure – Guide IS 17875:2022";
  const twitterTitle =
    "Licence BIS pour Tubes et Tuyaux sans Soudure | IS 17875:2022";
  const metaDescription =
    "Obtenez le Certificat BIS pour Tubes et Tuyaux sans Soudure sous IS 17875:2022. Processus, documents, tests, coûts et délais pour la Certification BIS en Inde.";
  const ogDescription =
    "Guide complet de la Certification BIS pour Tubes et Tuyaux sans Soudure selon IS 17875:2022. Connaître le processus, les coûts, les documents, les tests et les avantages de la licence BIS.";
  const twitterDescription =
    "Demandez le Certificat BIS pour Tubes et Tuyaux sans Soudure sous IS 17875:2022. Apprenez le processus BIS, les documents, les tests, les frais et les délais en Inde.";
  const metaKeywords =
    "Certificat BIS pour Tubes et Tuyaux sans Soudure, Licence BIS pour Tubes et Tuyaux sans Soudure, IS 17875:2022, Certification BIS pour Tubes et Tuyaux sans Soudure";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tubes-et-tuyaux-sans-soudure-is-17875";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Responsable des opérations chez Sun Certification India";

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
                    <Link to="/">Accueil</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Derniers Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificat BIS pour Tubes et Tuyaux sans Soudure – IS
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
        <ServicesRightSideContentFrench />
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
          Certificat BIS pour Tubes et Tuyaux sans Soudure sous IS 17875:2022 —
          Guide Complet de Certification
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="Licence BIS pour Tubes et Tuyaux sans Soudure"
            alt="Certificat BIS pour Tubes et Tuyaux sans Soudure - IS 17875:2022 Certification BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les tubes et tuyaux en acier sans soudure sont largement reconnus pour
          leurs performances supérieures dans les applications critiques, à
          haute pression et à haute température. Ils sont essentiels dans des
          industries telles que le pétrole et le gaz, la pétrochimie, les
          raffineries, l&apos;ingénierie lourde, l&apos;automobile, les
          centrales thermiques, l&apos;aérospatiale, l&apos;hydraulique et les
          systèmes mécaniques généraux. Comme les tubes sans soudure n&apos;ont
          pas de soudure, ils offrent une résistance, une uniformité et une
          capacité de gestion de la pression supérieures par rapport aux tubes
          soudés.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour garantir que les fabricants suivent une qualité de production
          constante et fournissent des produits sûrs et sans défaut sur le
          marché indien, le gouvernement indien a rendu la Certification BIS
          obligatoire pour les tubes et tuyaux sans soudure sous IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cette page complète explique tout le processus d&apos;obtention
          d&apos;une Licence BIS, y compris la documentation, les tests
          obligatoires, les exigences de conformité qualité, les frais, les
          délais, les défis techniques, les avantages, les pénalités et
          l&apos;applicabilité industrielle — rédigée dans un format étendu,
          très détaillé et riche en SEO.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu&apos;est-ce que la Certification BIS pour Tubes et Tuyaux sans
          Soudure ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Un Certificat BIS est une approbation officielle délivrée par le
          Bureau des Normes Indiennes, confirmant que le fabricant produit des
          tubes/tuyaux sans soudure selon les spécifications définies sous IS
          17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les tubes sans soudure doivent subir des tests stricts liés à :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Résistance à la pression</li>
          <li>Résistance à la traction</li>
          <li>Ténacité aux chocs</li>
          <li>Flexibilité</li>
          <li>Composition chimique</li>
          <li>Précision dimensionnelle</li>
          <li>Évaluations non destructives</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Seuls les fabricants qui répondent à ces exigences de performance
          reçoivent la Marque ISI, leur permettant de produire, importer ou
          vendre légalement des tubes sans soudure en Inde.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Objectifs Clés de la Certification BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Empêcher les systèmes de tuyauterie de qualité inférieure ou
            dangereux d&apos;entrer dans les chaînes d&apos;approvisionnement
            industrielles
          </li>
          <li>Garantir une qualité de fabrication constante et fiable</li>
          <li>
            Protéger les industries dépendantes de la transmission de fluides ou
            de gaz à haute pression
          </li>
          <li>Maintenir les références nationales de sécurité et de qualité</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Comprendre IS 17875:2022 — La Norme Indienne pour Tubes et Tuyaux sans
          Soudure
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17875:2022 spécifie les exigences de qualité, de test, de
          fabrication et de performance pour les tubes et tuyaux en acier sans
          soudure destinés à un service général.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Portée de la Licence BIS pour Tubes et Tuyaux sans Soudure
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Cette norme couvre les exigences pour les tubes
          et tuyaux en acier inoxydable sans soudure pour services généraux.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Cette norme ne spécifie pas les exigences pour
          les tubes et tuyaux en acier inoxydable sans soudure destinés à des
          fins distinctes, qui sont couverts par des Normes Indiennes séparées.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applications Couvertes sous IS 17875:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pipelines pétroliers et gaziers</li>
          <li>Service de fluide à haute température</li>
          <li>Tubes de chaudière</li>
          <li>Usines de traitement chimique</li>
          <li>Systèmes hydrauliques et pneumatiques</li>
          <li>Échangeurs de chaleur</li>
          <li>Applications structurelles</li>
          <li>Composants automobiles</li>
          <li>Applications à vapeur</li>
          <li>Pipelines industriels à haute pression</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paramètres de Qualité Clés dans IS 17875:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. Exigences de Composition Chimique :</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Spécifie les limites pour le carbone, le manganèse, le chrome, le
          nickel, le molybdène, le soufre, le phosphore, etc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. Propriétés Mécaniques :</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Résistance à la traction</li>
          <li>Limite d&apos;élasticité</li>
          <li>Dureté</li>
          <li>Ductilité</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. Tolérances Dimensionnelles :</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diamètre extérieur</li>
          <li>Épaisseur de paroi</li>
          <li>Tolérances de longueur</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. Conditions de Surface :</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Les tubes doivent être exempts de fissures, de laminations, de
          soudures, de rayures ou de tout défaut préjudiciable.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. Test Hydrostatique :</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Garantit que les tubes peuvent résister à la pression interne sans
          fuite.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. Test Non Destructif (NDT) :</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Comprend les tests par courants de Foucault, ultrasoniques ou par
          particules magnétiques.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus Complet de Certification BIS pour Tubes sans Soudure (IS
          17875:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le processus de certification BIS pour les tubes sans soudure est plus
          technique et détaillé que la plupart des autres produits car les
          exigences de fabrication et de test sont étendues. Voici une
          explication étape par étape très détaillée.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ÉTAPE 1 — Déterminer l&apos;Applicabilité et la Catégorisation des
          Produits
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le fabricant doit :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identifier toutes les qualités d&apos;acier utilisées</li>
          <li>Déterminer les dimensions et les gammes d&apos;épaisseur</li>
          <li>
            Confirmer si toutes les variantes entrent dans le champ
            d&apos;application d&apos;IS 17875
          </li>
          <li>Préparer la classification des produits pour les tests BIS</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Une seule licence BIS peut couvrir plusieurs tailles et qualités si
          elles partagent la même installation de fabrication et le même
          processus.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ÉTAPE 2 — Préparer la Documentation et Déposer la Demande BIS en Ligne
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le fabricant doit faire une demande sur le Portail BIS Manak en ligne.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les informations incluent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Détails et plan de l&apos;usine</li>
          <li>Capacité de production et processus</li>
          <li>Détails du four et du traitement thermique</li>
          <li>Équipement de laminage, perçage et tréfilage</li>
          <li>Systèmes de contrôle qualité</li>
          <li>Documentation d&apos;approvisionnement en matières premières</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le dépôt incorrect est l&apos;une des causes les plus courantes de
          rejet de demande BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ÉTAPE 3 — Paiement des Frais
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les frais incluent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Frais de demande</li>
          <li>Frais de traitement</li>
          <li>Frais de test en laboratoire</li>
          <li>Coûts d&apos;inspection et de déplacement</li>
          <li>Frais de marquage basés sur le volume de production</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ÉTAPE 4 — Sélection d&apos;Échantillons et Tests en Laboratoire BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les tubes sans soudure subissent des tests mécaniques et chimiques
          approfondis.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          C&apos;est la partie la plus chronophage et la plus technique de la
          certification BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Test de Composition Chimique</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Effectué en utilisant :
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Spectroscopie d&apos;émission optique</li>
          <li>Méthodes chimiques humides</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Garantit la composition chimique exacte selon IS 17875.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Test Mécanique</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Test de Traction</strong> — Évalue la résistance à la
            traction ultime, le point d&apos;élasticité et l&apos;allongement.
          </li>
          <li>
            <strong>Test de Dureté</strong> — Confirme la résistance du
            matériau.
          </li>
          <li>
            <strong>Test d&apos;Aplatissement</strong> — Teste la ductilité et
            la soudabilité (même si c&apos;est sans soudure,
            l&apos;aplatissement vérifie l&apos;intégrité du matériau).
          </li>
          <li>
            <strong>Test d&apos;Évasement / de Bridage</strong> — Garantit la
            déformabilité sans fissuration.
          </li>
          <li>
            <strong>Test de Choc (Charpy)</strong> — Évalue les performances à
            basse température.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Test Hydrostatique</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Les tubes sont soumis à une pression interne élevée pour garantir
          qu&apos;il n&apos;y a pas de fuite ou de déformation.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – Test Non Destructif</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Obligatoire pour détecter les défauts internes.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Les méthodes incluent :
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inspection Ultrasonique</li>
          <li>Examen par Courants de Foucault</li>
          <li>Inspection par Particules Magnétiques (MPI)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Inspection Visuelle et Dimensionnelle</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">Évalue :</p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Finition de surface</li>
          <li>Rectitude</li>
          <li>Ovalité</li>
          <li>Tolérance d&apos;épaisseur</li>
          <li>Précision du diamètre</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Examen Métallurgique</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          L&apos;analyse de la microstructure confirme la structure des grains,
          l&apos;efficacité du traitement thermique et la stabilité du matériau.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ÉTAPE 5 — Inspection d&apos;Usine BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Une fois que les résultats des tests sont réussis, les agents BIS
          visitent l&apos;usine.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ils inspectent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stockage des matières premières</li>
          <li>Processus de four/traitement thermique</li>
          <li>
            Laminoirs de perçage, réducteurs et bancs de tréfilage à froid
          </li>
          <li>Installation de test hydrostatique</li>
          <li>Installation NDT</li>
          <li>Équipement de laboratoire et étalonnage</li>
          <li>Registres de contrôle qualité</li>
          <li>Vérification de la capacité de fabrication</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;usine doit se conformer pleinement au Schéma de Test et
          d&apos;Inspection (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ÉTAPE 6 — Octroi de la Licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Si les tests et l&apos;inspection satisfont aux exigences BIS, le
          fabricant reçoit :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificat BIS</li>
          <li>Numéro CML</li>
          <li>
            Autorisation d&apos;utiliser la Marque ISI sur les tubes sans
            soudure
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS peut rejeter les demandes si même une seule exigence n&apos;est
          pas respectée — ce qui rend les conseils d&apos;experts extrêmement
          précieux.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ÉTAPE 7 — Obligations Post-Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les fabricants doivent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Utiliser correctement la Marque ISI sur les étiquettes, emballages
            et tubes
          </li>
          <li>Maintenir les tests internes selon le STI</li>
          <li>Subir des inspections de surveillance BIS régulières</li>
          <li>Garantir que chaque lot est conforme à IS 17875:2022</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le non-respect de la conformité peut entraîner la suspension ou
          l&apos;annulation de la licence.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Requis pour la Certification BIS des Tubes sans Soudure
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          A. Documents de Fabrication et de Production
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licence d&apos;usine</li>
          <li>Diagramme de disposition avec positionnement des machines</li>
          <li>Manuel de processus de contrôle qualité</li>
          <li>Registres de traitement thermique</li>
          <li>Certificats de test d&apos;usine de matières premières</li>
          <li>Détails du processus de laminage/perçage</li>
          <li>Détails du banc de tréfilage</li>
          <li>Certificats d&apos;étalonnage pour l&apos;équipement de test</li>
          <li>Rapports de test internes</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          B. Documents Techniques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nomenclature des matériaux</li>
          <li>Spécifications de qualité chimique</li>
          <li>Feuilles de propriétés mécaniques</li>
          <li>Graphiques de tolérances dimensionnelles</li>
          <li>Dessins et spécifications des tubes</li>
          <li>Documentation du système de traçabilité des matériaux</li>
          <li>Procédures opérationnelles standard pour la production</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          C. Documents Juridiques et Organisationnels
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lettre d&apos;autorisation</li>
          <li>Document de propriété de marque/marque déposée</li>
          <li>Preuves d&apos;identité et d&apos;adresse</li>
          <li>Engagements et déclarations selon les exigences BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de Test pour Tubes sans Soudure sous IS 17875:2022
        </h2>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clause
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Exigences
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Analyse de Poche
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Analyse de Produit
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Exigences de Traction
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tuyaux
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tubes
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test d&apos;Évasement
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test d&apos;Aplatissement
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Taille de Grain
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test d&apos;Étanchéité aux Fuites
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Travail, Finition, Apparence
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensions et Tolérances
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis Courants dans la Certification BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Échec au test de composition chimique</strong>
            <br />
            Se produit en raison de qualités d&apos;acier incohérentes.
          </li>
          <li>
            <strong>Échec des tests mécaniques</strong>
            <br />
            Souvent causé par un traitement thermique incorrect.
          </li>
          <li>
            <strong>Rejet NDT</strong>
            <br />
            Les fissures internes ou les inclusions peuvent causer l&apos;échec
            de l&apos;échantillon.
          </li>
          <li>
            <strong>Étalonnage inadéquat</strong>
            <br />
            Conduit à des données de test inexactes.
          </li>
          <li>
            <strong>Non-conformité STI</strong>
            <br />
            La tenue incorrecte des registres pendant l&apos;inspection devient
            une raison majeure de rejet.
          </li>
          <li>
            <strong>Variation dimensionnelle</strong>
            <br />
            Les incohérences de diamètre ou d&apos;épaisseur des tubes causent
            l&apos;échec.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour Tubes sans Soudure
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Approbation légale pour fabriquer/vendre en Inde</li>
          <li>Garantit la sécurité et la fiabilité</li>
          <li>Améliore la réputation de la marque</li>
          <li>Essentiel pour les appels d&apos;offres gouvernementaux</li>
          <li>Requis par les industries PSU et privées</li>
          <li>
            Protège les consommateurs contre les produits de qualité inférieure
          </li>
          <li>Améliore la compétitivité à l&apos;exportation</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pénalités pour Non-Conformité
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Sous la Loi BIS, la vente de tubes sans soudure non certifiés entraîne
          :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Confiscation du produit</li>
          <li>Lourdes pénalités</li>
          <li>Arrêt de fabrication</li>
          <li>Restrictions à l&apos;importation</li>
          <li>Liste noire de la marque</li>
          <li>Poursuites pénales</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qui Doit Obtenir la Certification BIS ?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricants indiens</li>
          <li>Fabricants étrangers exportant vers l&apos;Inde</li>
          <li>Commerçants (propriétaires de marques)</li>
          <li>Entreprises OEM et d&apos;ingénierie</li>
          <li>Importateurs et grossistes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque unité de fabrication doit obtenir une licence séparée.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Certificat BIS pour Tubes et Tuyaux sans Soudure sous IS 17875:2022
          est une exigence réglementaire critique garantissant que les tubes de
          service à haute pression répondent aux normes rigoureuses de sécurité
          et de qualité de l&apos;Inde. De la composition chimique aux tests non
          destructifs avancés, BIS garantit que chaque tube certifié est
          durable, sans défaut et capable de fonctionner dans des conditions
          industrielles exigeantes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avec des conseils professionnels, les fabricants peuvent rationaliser
          le parcours de certification, minimiser les retards et atteindre la
          conformité en douceur.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — Certification BIS Tubes sans Soudure (Étendu et Riche en SEO)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Pourquoi la Certification BIS est-elle obligatoire pour les
                tubes sans soudure ?
              </strong>
              <br />
              Parce que les tubes sans soudure sont utilisés dans des
              applications à haute pression et critiques pour la sécurité. Les
              réglementations gouvernementales garantissent que seuls des tubes
              de haute qualité entrent sur le marché indien.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Quelle norme s&apos;applique aux tubes sans soudure ?
              </strong>
              <br />
              IS 17875:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Combien de temps dure le processus de certification ?
              </strong>
              <br />
              Généralement 40-60 jours pour le Fabricant Indien et environ 120
              jours pour le fabricant étranger, selon la charge de test et la
              planification de l&apos;inspection.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Quels tests sont nécessaires ?</strong>
              <br />
              Analyse chimique, test de traction, dureté, hydrostatique, NDT,
              aplatissement, évasement et contrôles dimensionnels.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Les entreprises étrangères peuvent-elles demander la
                certification BIS ?
              </strong>
              <br />
              Oui, via le schéma FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Que se passe-t-il si le produit échoue aux tests ?
              </strong>
              <br />
              Il doit être corrigé et retesté ; BIS ne délivrera pas la licence
              tant que la conformité complète n&apos;est pas atteinte.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Quels documents sont requis ?</strong>
              <br />
              Licence d&apos;usine, liste des machines, équipement de test,
              dessins, documents de contrôle qualité, certificats de matières
              premières, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Le marquage ISI est-il obligatoire ?</strong>
              <br />
              Oui. Il est illégal de vendre des tubes sans soudure sans afficher
              la marque ISI.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Plusieurs qualités sont-elles autorisées dans une licence ?
              </strong>
              <br />
              Oui, si produites en utilisant la même installation et le même
              processus (sous réserve d&apos;approbation BIS).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. Combien de temps la licence BIS est-elle valide ?
              </strong>
              <br />
              1-2 ans, renouvelable indéfiniment.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="Certificat BIS pour Tubes et Tuyaux sans Soudure - IS 17875:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadFrench />
        <FaqAuthorFrench questionNumber={2} />
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
              Nos Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Meilleur Consultant en Certificats d&apos;Inde
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
              Marque BIS (Licence ISI) pour Fabrication Étrangère
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
              Certification d&apos;Enregistrement CDSCO
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
              Enregistrement BIS (CRS)
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="Gestion des Déchets Plastiques"
                title="Gestion des Déchets Plastiques"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Gestion des Déchets Plastiques
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="Logo Certificat EPR"
                title="Logo Certificat EPR"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certifications Certificat EPR
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
              Certifications Certificat LMPC
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
              Certificat d&apos;Enregistrement BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="Logo Marque ISI"
                title="Logo Marque ISI"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              MARQUE ISI (BIS) pour Fabricants Indiens
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
