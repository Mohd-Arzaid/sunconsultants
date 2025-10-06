import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./common/Navbar";
import TopBar from "./common/TopBar";
import MobileNav from "./components/common/MobileNav";
import SocialFloatingButtons from "./components/common/SocialFloatingButtons";
import ContactFormPopup from "./components/ContactFormPopup";
import ScrollToTopButton, {
  ScrollToTop,
} from "./components/common/ScrollToTop";
import SEOBreadcrumbs from "./components/common/SEOBreadcrumbs";
import LocalizedRoute from "@/common/LocalizedRoute";
import RouteResolver from "@/common/RouteResolver";

// Direct imports for instant navigation - no lazy loading
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Notification from "./pages/Notification";
import NotificationDetail from "./pages/NotificationDetail";
import MinistryUpdates from "./pages/MinistryUpdates";
import InternationalAudits from "./pages/InternationalAudits";
import Exhibition from "./pages/Exhibition";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Error404 from "./pages/404Error";
import Webinar from "./pages/Webinar";
import Videos from "./pages/Videos";

// Service pages - direct imports
import CDSCO from "./pages/CDSCO";
import SchemeX from "./pages/SchemeX/SchemeX";
import CRSRegistration from "./pages/CRSRegistration/CRSRegistration";
import Peso from "./pages/Peso";
import Tec from "./pages/Tec";
import WPC from "./pages/WPC";
import ROHS from "./pages/ROHS";
import BEE from "./pages/BEE";
import CECertification from "./pages/CECertification";
import EMIEMC from "./pages/EMIEMC";
import CBCertification from "./pages/CBCertification";
import ISIMark from "./pages/ISIMark";
import BatteryWaste from "./pages/BatteryWaste";

// Manual components - direct imports with named exports
import { BISFM } from "./components/manual/BISFM";
import { EPRService } from "./components/manual/EPRService";
import { BISCertification } from "./components/manual/BISCertification";
import { LMPC } from "./components/manual/LMPC";
import { PlasticWaste } from "./components/manual/PlasticWaste";
import { LegalMetrology } from "./components/manual/LegalMetrology";
import LHSCable from "./pages/LHSCable";
import ArabicBISFM from "./pages/ArabicBISFM";
import ArabicISIMark from "./pages/ArabicISIMark";
import ArabicCRS from "./pages/ArabicCRS";
import ArabicSchemeX from "./pages/ArabicSchemeX";
import ArabicBISCertification from "./pages/ArabicBISCertification";
import NABL from "./pages/NABL";
import AdminLoginPage from "./admin/AdminLoginPage";
import LatestBlogs from "./blogs/LatestBlogs";
import TinIngotBlog from "./blogs/TinIngotBlog";
import RefinedZincBlog from "./blogs/RefinedZincBlog";
import BunkBedsBlog from "./blogs/BunkBedsBlog";
import StorageUnitsBlog from "./blogs/StorageUnitsBlog";
import SchemeXProducts from "./schemeXProducts/SchemeXProducts";
import PumpsAndLiquidElevators from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevators";
import PackingMachinery from "./schemeXProducts/PackingMachinery/PackingMachinery";
import Centrifuges from "./schemeXProducts/Centrifuges/Centrifuges";
import Compressors from "./schemeXProducts/Compressors/Compressors";
import HeatTreatmentEquipment from "./schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipment";
import PumpsAndLiquidElevatorsGerman from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsGerman";
import PumpsAndLiquidElevatorsSpanish from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsSpanish";
import PumpsAndLiquidElevatorsFrench from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsFrench";
import PumpsAndLiquidElevatorsIndonesian from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsIndonesian";
import PumpsAndLiquidElevatorsItalian from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsItalian";
import PumpsAndLiquidElevatorsJapanese from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsJapanese";
import PumpsAndLiquidElevatorsKorean from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsKorean";
import PumpsAndLiquidElevatorsDutch from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsDutch";
import PumpsAndLiquidElevatorsThai from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsThai";
import PumpsAndLiquidElevatorsVietnamese from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsVietnamese";
import PumpsAndLiquidElevatorsArabic from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsArabic";
import WeavingMachines from "./schemeXProducts/WeavingMachines/WeavingMachines";
import ConstructionMachinery from "./schemeXProducts/ConstructionMachinery/ConstructionMachinery";
import MetalCuttingMachines from "./schemeXProducts/MetalCuttingMachines/MetalCuttingMachines";
import Cranes from "./schemeXProducts/Cranes/Cranes";
import EmbroideryMachines from "./schemeXProducts/EmbroideryMachines/EmbroideryMachines";
import GearsGearingsandTransmission from "./schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmission";
import DieselGenerator from "./schemeXProducts/DieselGenerator/DieselGenerator";
import SwitchgearandControlgearEquipment from "./schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipment";
import RotaryElectricalMachines from "./schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachines";
import PublicWorksAndMechanical from "./schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanical";
import PowerSemiconductors from "./schemeXProducts/PowerSemiconductors/PowerSemiconductors";
import Transformers from "./schemeXProducts/Transformers/Transformers";
import MachineTools from "./schemeXProducts/MachineTools/MachineTools";
import SwitchgearandControlgearEquipmentabove1000Volts from "./schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000Volts";
import RubberAndPlasticsMachinery from "./schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachinery";

// French imports
import CentrifugesFrench from "./schemeXProducts/Centrifuges/CentrifugesFrench";
import CompressorsFrench from "./schemeXProducts/Compressors/CompressorsFrench";
import ConstructionMachineryFrench from "./schemeXProducts/ConstructionMachinery/ConstructionMachineryFrench";
import CranesFrench from "./schemeXProducts/Cranes/CranesFrench";
import DieselGeneratorFrench from "./schemeXProducts/DieselGenerator/DieselGeneratorFrench";
import EmbroideryMachinesFrench from "./schemeXProducts/EmbroideryMachines/EmbroideryMachinesFrench";
import GearsGearingsandTransmissionFrench from "./schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionFrench";
import HeatTreatmentEquipmentFrench from "./schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentFrench";
import MachineToolsFrench from "./schemeXProducts/MachineTools/MachineToolsFrench";
import MetalCuttingMachinesFrench from "./schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesFrench";
import PackingMachineryFrench from "./schemeXProducts/PackingMachinery/PackingMachineryFrench";
import PowerSemiconductorsFrench from "./schemeXProducts/PowerSemiconductors/PowerSemiconductorsFrench";
import PublicWorksAndMechanicalFrench from "./schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalFrench";
import RotaryElectricalMachinesFrench from "./schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesFrench";
import RubberAndPlasticsMachineryFrench from "./schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryFrench";
import SwitchgearandControlgearEquipmentFrench from "./schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentFrench";
import SwitchgearandControlgearEquipmentabove1000VoltsFrench from "./schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsFrench";
import TransformersFrench from "./schemeXProducts/Transformers/TransformersFrench";
import WeavingMachinesFrench from "./schemeXProducts/WeavingMachines/WeavingMachinesFrench";

// German imports
import CentrifugesGerman from "./schemeXProducts/Centrifuges/CentrifugesGerman";
import CompressorsGerman from "./schemeXProducts/Compressors/CompressorsGerman";
import ConstructionMachineryGerman from "./schemeXProducts/ConstructionMachinery/ConstructionMachineryGerman";
import CranesGerman from "./schemeXProducts/Cranes/CranesGerman";
import DieselGeneratorGerman from "./schemeXProducts/DieselGenerator/DieselGeneratorGerman";
import EmbroideryMachinesGerman from "./schemeXProducts/EmbroideryMachines/EmbroideryMachinesGerman";
import GearsGearingsandTransmissionGerman from "./schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionGerman";
import HeatTreatmentEquipmentGerman from "./schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentGerman";
import MachineToolsGerman from "./schemeXProducts/MachineTools/MachineToolsGerman";
import MetalCuttingMachinesGerman from "./schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesGerman";
import PackingMachineryGerman from "./schemeXProducts/PackingMachinery/PackingMachineryGerman";
import PowerSemiconductorsGerman from "./schemeXProducts/PowerSemiconductors/PowerSemiconductorsGerman";
import PublicWorksAndMechanicalGerman from "./schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalGerman";
import RotaryElectricalMachinesGerman from "./schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesGerman";
import RubberAndPlasticsMachineryGerman from "./schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryGerman";
import SwitchgearandControlgearEquipmentGerman from "./schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentGerman";
import SwitchgearandControlgearEquipmentabove1000VoltsGerman from "./schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsGerman";
import TransformersGerman from "./schemeXProducts/Transformers/TransformersGerman";
import WeavingMachinesGerman from "./schemeXProducts/WeavingMachines/WeavingMachinesGerman";

// Vietnamese imports
import CentrifugesVietnamese from "./schemeXProducts/Centrifuges/CentrifugesVietnamese";
import CompressorsVietnamese from "./schemeXProducts/Compressors/CompressorsVietnamese";
import ConstructionMachineryVietnamese from "./schemeXProducts/ConstructionMachinery/ConstructionMachineryVietnamese";
import CranesVietnamese from "./schemeXProducts/Cranes/CranesVietnamese";
import CRSRegistrationJapanese from "./pages/CRSRegistration/CRSRegistrationJapanese";
import SchemeXJapanese from "./pages/SchemeX/SchemeXJapanese";
import SchemeXGerman from "./pages/SchemeX/SchemeXGerman";
import SchemeXSpanish from "./pages/SchemeX/SchemeXSpanish";
import SchemeXFrench from "./pages/SchemeX/SchemeXFrench";


function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [videoPopupOpen, setVideoPopupOpen] = useState(false);
  const location = useLocation();

  // Check if current route is admin
  const isAdminRoute = location.pathname === '/admin';

  return (
    <>
      {!isAdminRoute && <TopBar />}
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <ScrollToTopButton hide={popupOpen || videoPopupOpen} />}
      {!isAdminRoute && <ScrollToTop />}
      <SEOBreadcrumbs />

      <Routes>
        {/* Default routes without language prefix (English) */}
        <Route path="/">
          <Route index element={<Home onVideoPopupChange={setVideoPopupOpen} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="bis-qco-updates" element={<Notification />} />
          <Route
            path="bis-qco-updates/:notificationName"
            element={<NotificationDetail />}
          />
          <Route path="ministry-updates" element={<MinistryUpdates />} />
          <Route
            path="international-audits"
            element={<InternationalAudits />}
          />
          <Route path="seminars-and-exhibitions" element={<Exhibition />} />

          <Route path="sitemap" element={<Sitemap />} />

          {/* Services Pages */}
          <Route path="cdsco-registration-certification" element={<CDSCO />} />

          {/* Scheme X Eng Page */}
          <Route
            path="/indian-bis-certification-under-scheme-x"
            element={<SchemeX />}
          />

          {/* Scheme X Japanese Page */}
          <Route
            path="/ja/indo-no-bis-nintei-sukimu-x"
            element={<SchemeXJapanese />}
          />

          {/* Scheme X German Page */}
          <Route
            path="/de/indische-bis-zertifizierung-nach-schema-x"
            element={<SchemeXGerman />}
          />

          {/* Scheme X Spanish Page */}
          <Route
            path="/es/certificacion-bis-india-bajo-esquema-x"
            element={<SchemeXSpanish />}
          />

          {/* Scheme X France Page */}
          <Route
            path="/fr/certification-bis-indienne-selon-schema-x"
            element={<SchemeXFrench />}
          />


          <Route
            path="a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            element={<BISFM />}
          />
          <Route
            path="a-guide-on-how-to-obtain-epr-certificate"
            element={<EPRService />}
          />
          <Route
            path="what-is-bis-certificate-indian-bis"
            element={<BISCertification />}
          />
          <Route
            path="a-guide-on-how-to-obtain-lmpc-certificate"
            element={<LMPC />}
          />
          <Route
            path="epr-certificate-for-plastic-waste-management-pwm"
            element={<PlasticWaste />}
          />
          <Route
            path="what-is-legal-metrology-or-lmpc-certificate"
            element={<LegalMetrology />}
          />
          <Route
            path="a-guide-to-bis-certification-indian-bis"
            element={<ISIMark />}
          />
          <Route
            path="epr-certificate-for-battery-waste-management-bwm"
            element={<BatteryWaste />}
          />


          {/* English */}
          <Route
            path="what-is-crs-bis-or-crs-registration"
            element={<CRSRegistration />}
          />

          {/* Japanese */}
          <Route
            path="/ja/crs-bis-toha-nani-ka-crs-toroku"
            element={<CRSRegistrationJapanese />}
          />

          <Route
            path="information-about-peso-certification-peso-license-india"
            element={<Peso />}
          />
          <Route
            path="information-about-tec-certificate-mtcte"
            element={<Tec />}
          />
          <Route
            path="information-about-wpc-certificate-eta-approval"
            element={<WPC />}
          />
          <Route
            path="restriction-of-hazardous-substance-rohs-certificate"
            element={<ROHS />}
          />
          <Route path="bee-certification" element={<BEE />} />
          <Route path="ce-certification" element={<CECertification />} />
          <Route path="emi-emc-certification" element={<EMIEMC />} />
          <Route path="cb-certification" element={<CBCertification />} />
          <Route path="lhscable" element={<LHSCable />} />

          <Route path="nabl-certification-india" element={<NABL />} />


          <Route path="webinar" element={<Webinar />} />
          <Route path="videos-about-bis-certification" element={<Videos />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="404" element={<Error404 />} />

          {/* Blog Routes */}
          <Route path="Blogs" element={<LatestBlogs />} />
          <Route path="bis-certificate-for-tin-ingots" element={<TinIngotBlog />} />
          <Route path="bis-certificate-for-refined-zinc" element={<RefinedZincBlog />} />
          <Route path="bis-license-for-bunk-beds-Indian-bis" element={<BunkBedsBlog />} />
          <Route path="bis-license-for-storage-units-Indian-bis" element={<StorageUnitsBlog />} />



          {/* SchemeX Products */}
          <Route path="SchemeX-products" element={<SchemeXProducts />} />

          {/* Pumps and Liquid Elevators */}
          {/* english */}
          <Route
            path="bis-scheme-x-certification-for-pumps-and-liquid-elevators"
            element={<PumpsAndLiquidElevators />}
          />
          {/* german */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
            element={<PumpsAndLiquidElevatorsGerman />}
          />
          {/* spanish */}
          <Route
            path="certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos"
            element={<PumpsAndLiquidElevatorsSpanish />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides"
            element={<PumpsAndLiquidElevatorsFrench />}
          />
          {/* Indonesian */}
          <Route
            path="sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan"
            element={<PumpsAndLiquidElevatorsIndonesian />}
          />
          {/* Italian */}
          <Route
            path="certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
            element={<PumpsAndLiquidElevatorsItalian />}
          />
          {/* Japanese */}
          <Route
            path="bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa"
            element={<PumpsAndLiquidElevatorsJapanese />}
          />
          {/* Korean */}
          <Route
            path="bis-seukim-x-injeung-peomp-mich-aegche-seunggangi"
            element={<PumpsAndLiquidElevatorsKorean />}
          />
          {/* Dutch */}
          <Route
            path="bis-schema-x-certificering-voor-pompen-en-vloeistofelevators"
            element={<PumpsAndLiquidElevatorsDutch />}
          />
          {/* Thai */}
          <Route
            path="kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
            element={<PumpsAndLiquidElevatorsThai />}
          />
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long"
            element={<PumpsAndLiquidElevatorsVietnamese />}
          />
          {/* Arabic */}
          <Route
            path="shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail"
            element={<PumpsAndLiquidElevatorsArabic />}
          />

          {/* Centrifuges */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
            element={<Centrifuges />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-centrifugeuses-et-machines-de-filtrage-ou-purification"
            element={<CentrifugesFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-zentrifugen-und-maschinen-zur-filtration-oder-reinigung"
            element={<CentrifugesGerman />}
          />
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-may-ly-tam-va-thiet-bi-loc-hoac-tinh-che"
            element={<CentrifugesVietnamese />}
          />

          {/* Compressors */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-compressors"
            element={<Compressors />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-compresseurs"
            element={<CompressorsFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-kompressoren"
            element={<CompressorsGerman />}
          />
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-may-nen-khi"
            element={<CompressorsVietnamese />}
          />

          {/* Construction Machinery */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-construction-machinery"
            element={<ConstructionMachinery />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-machines-de-construction"
            element={<ConstructionMachineryFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-baugerate"
            element={<ConstructionMachineryGerman />}
          />
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-may-moc-xay-dung"
            element={<ConstructionMachineryVietnamese />}
          />

          {/* Cranes */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-cranes"
            element={<Cranes />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-ponts-roulants"
            element={<CranesFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-kranen"
            element={<CranesGerman />}
          />
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-can-cau"
            element={<CranesVietnamese />}
          />

          {/* Diesel Generators */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-diesel-generators"
            element={<DieselGenerator />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-generateurs-diesel"
            element={<DieselGeneratorFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-dieselgeneratoren"
            element={<DieselGeneratorGerman />}
          />

          {/* Embroidery Machinery */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-embroidery-machinery"
            element={<EmbroideryMachines />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-machines-a-broderie"
            element={<EmbroideryMachinesFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-stickmaschinen"
            element={<EmbroideryMachinesGerman />}
          />

          {/* Gears, Gearing and Transmission Elements */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-gears-gearing-and-transmission-elements"
            element={<GearsGearingsandTransmission />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-roues-dentees-et-elements-de-transmission"
            element={<GearsGearingsandTransmissionFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-zahnraeder-getriebe-und-uebertragungselemente"
            element={<GearsGearingsandTransmissionGerman />}
          />

          {/* Heat Treatment Equipment */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-heat-treatment-equipment"
            element={<HeatTreatmentEquipment />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-equipements-de-traitement-thermique"
            element={<HeatTreatmentEquipmentFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-waermebehandlungsausruestung"
            element={<HeatTreatmentEquipmentGerman />}
          />

          {/* Machine Tools */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-machine-tools"
            element={<MachineTools />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-machines-a-outils"
            element={<MachineToolsFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-werkzeugmaschinen"
            element={<MachineToolsGerman />}
          />

          {/* Metal Cutting Machine Tools */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-metal-cutting-machine-tools"
            element={<MetalCuttingMachines />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-outils-de-machines-de-coupe-metallique"
            element={<MetalCuttingMachinesFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-maschinen-fuer-schneiden-von-metall"
            element={<MetalCuttingMachinesGerman />}
          />

          {/* Packing Machinery */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-packing-machinery"
            element={<PackingMachinery />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-machines-de-conditionnement"
            element={<PackingMachineryFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-verpackungsmaschinen"
            element={<PackingMachineryGerman />}
          />

          {/* Power Semiconductor Converters */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-power-semiconductor-converters"
            element={<PowerSemiconductors />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-convertisseurs-semiconducteurs-de-puissance"
            element={<PowerSemiconductorsFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-leistungshalbleiter-wandler"
            element={<PowerSemiconductorsGerman />}
          />

          {/* Public Works and Mechanical Appliances */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-public-works-and-mechanical-appliances"
            element={<PublicWorksAndMechanical />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-travaux-publics-et-appareils-mecaniques"
            element={<PublicWorksAndMechanicalFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-baumaschinen-und-mechanische-geraete"
            element={<PublicWorksAndMechanicalGerman />}
          />

          {/* Rotary Electrical Machines */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-rotary-electrical-machines"
            element={<RotaryElectricalMachines />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-machines-electriques-rotatives"
            element={<RotaryElectricalMachinesFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-rotierende-elektrische-maschinen"
            element={<RotaryElectricalMachinesGerman />}
          />

          {/* Rubber and Plastics Machinery */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-rubber-and-plastics-machinery"
            element={<RubberAndPlasticsMachinery />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-machines-de-caoutchouc-et-plastiques"
            element={<RubberAndPlasticsMachineryFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-kautschuk-und-kunststoffmaschinen"
            element={<RubberAndPlasticsMachineryGerman />}
          />

          {/* Switchgear and Controlgear Equipment up to 1000 Volts */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts"
            element={<SwitchgearandControlgearEquipment />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-appareillage-et-commande-jusqu-a-1000-volts"
            element={<SwitchgearandControlgearEquipmentFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-schalt-und-steuergeraete-bis-1000-volt"
            element={<SwitchgearandControlgearEquipmentGerman />}
          />

          {/* Switchgear and Controlgear Equipment above 1000 Volts */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts"
            element={<SwitchgearandControlgearEquipmentabove1000Volts />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-appareillage-et-commande-au-dessus-1000-volts"
            element={<SwitchgearandControlgearEquipmentabove1000VoltsFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-schalt-und-steuergeraete-ueber-1000-volt"
            element={<SwitchgearandControlgearEquipmentabove1000VoltsGerman />}
          />

          {/* Transformers */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-transformers"
            element={<Transformers />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-transformateurs"
            element={<TransformersFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-transformatoren"
            element={<TransformersGerman />}
          />

          {/* Weaving Machines */}
          {/* English */}
          <Route
            path="bis-scheme-x-certification-for-weaving-machines-looms"
            element={<WeavingMachines />}
          />
          {/* French */}
          <Route
            path="certification-bis-schema-x-pour-machines-a-tisser-metiers-a-tisser"
            element={<WeavingMachinesFrench />}
          />
          {/* German */}
          <Route
            path="bis-schema-x-zertifizierung-fuer-webmaschinen"
            element={<WeavingMachinesGerman />}
          />


        </Route>

        <Route
          path="/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind"
          element={<ArabicBISFM />}
        />

        <Route
          path="/ar/dalil-shahadat-bis-bis-alhind"
          element={<ArabicISIMark />}
        />

        <Route
          path="/ar/ma-huwa-crs-bis-aw-tasjeel-crs"
          element={<ArabicCRS />}
        />

        <Route
          path="/ar/BIS/shahadat-bis-alhind-tahata-almukhatat-x"
          element={<ArabicSchemeX />}
        />

        <Route
          path="/ar/ma-huwa-shahadat-bis-bis-alhind"
          element={<ArabicBISCertification />}
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={<AdminLoginPage />}
        />

        {/* Localized routes for other languages */}
        <Route path="/:lang/*" element={<LocalizedRoute />}>
          <Route path="*" element={<RouteResolver />} />
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>

      {!isAdminRoute && <MobileNav />}
      {!isAdminRoute && <SocialFloatingButtons hide={popupOpen || videoPopupOpen} />}
      {!isAdminRoute && <ContactFormPopup open={popupOpen} setOpen={setPopupOpen} />}
    </>
  );
}

export default App;
