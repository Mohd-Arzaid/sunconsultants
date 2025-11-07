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
import OrganizationSchema from "./components/common/OrganizationSchema";
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
import Peso from "./pages/Peso";
import Tec from "./pages/Tec";
import WPC from "./pages/WPC";
import ROHS from "./pages/ROHS";
import BEE from "./pages/BEE";
import CECertification from "./pages/CECertification";
import EMIEMC from "./pages/EMIEMC";
import CBCertification from "./pages/CBCertification";
import BatteryWaste from "./pages/BatteryWaste";

// Manual components - direct imports with named exports
import { EPRService } from "./components/manual/EPRService";
import { LMPC } from "./components/manual/LMPC";
import { PlasticWaste } from "./components/manual/PlasticWaste";
import { LegalMetrology } from "./components/manual/LegalMetrology";
import LHSCable from "./pages/LHSCable";
import NABL from "./pages/NABL";
import AdminLoginPage from "./admin/AdminLoginPage";
import { SchemeXProductsRoutes } from "./routes/schemeXProductsRoutes";
import { SchemeXPagesRoutes } from "./routes/schemeXPagesRoutes";
import { BISCertificationPagesRoutes } from "./routes/BISCertificationPagesRoutes";
import { ISIMarkPagesRoutes } from "./routes/ISIMarkPagesRoutes";
import { CRSRegistrationRoutes } from "./routes/CRSRegistrationRoutes";
import { BISFMPagesRoutes } from "./routes/BISFMPagesRoutes";
import LatestBlogs from "./blogs/LatestBlogs";
import TinIngotBlog from "./blogs/TinIngotBlog";
import RefinedZincBlog from "./blogs/RefinedZincBlog";
import BunkBedsBlog from "./blogs/BunkBedsBlog";
import StorageUnitsBlog from "./blogs/StorageUnitsBlog";
import SchemeXProducts from "./schemeXProducts/SchemeXProducts";
import PumpsAndLiquidElevators from "./schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevators";
import PackingMachinery from "./schemeXProducts/PackingMachinery/PackingMachinery";
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
import MetalCuttingMachines from "./schemeXProducts/MetalCuttingMachines/MetalCuttingMachines";
import GearsGearingsandTransmission from "./schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmission";
import SwitchgearandControlgearEquipment from "./schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipment";
import RotaryElectricalMachines from "./schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachines";
import PublicWorksAndMechanical from "./schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanical";
import PowerSemiconductors from "./schemeXProducts/PowerSemiconductors/PowerSemiconductors";
import Transformers from "./schemeXProducts/Transformers/Transformers";
import MachineTools from "./schemeXProducts/MachineTools/MachineTools";
import SwitchgearandControlgearEquipmentabove1000Volts from "./schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000Volts";
import RubberAndPlasticsMachinery from "./schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachinery";

// French imports
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
import IndonesiaBlog from "./blogs/IndonesiaBlog/IndonesiaBlog";
import LangIndonesiaBlog from "./blogs/IndonesiaBlog/LangIndonesiaBlog";
import WeavingMachinesVietnamese from "./schemeXProducts/WeavingMachines/WeavingMachinesVietnamese";
import TransformersVietnamese from "./schemeXProducts/Transformers/TransformersVietnamese";
import SwitchgearandControlgearEquipmentabove1000VoltsVietnamese from "./schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsVietnamese";
import SwitchgearandControlgearEquipmentVietnamese from "./schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentVietnamese";
import RubberAndPlasticsMachineryVietnamese from "./schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryVietnamese";
import RotaryElectricalMachinesVietnamese from "./schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesVietnamese";
import PublicWorksAndMechanicalVietnamese from "./schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalVietnamese";
import PowerSemiconductorsVietnamese from "./schemeXProducts/PowerSemiconductors/PowerSemiconductorsVietnamese";
import PackingMachineryVietnamese from "./schemeXProducts/PackingMachinery/PackingMachineryVietnamese";
import MetalCuttingMachinesVietnamese from "./schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesVietnamese";
import WeavingMachinesSpanish from "./schemeXProducts/WeavingMachines/WeavingMachinesSpanish";
import TransformersSpanish from "./schemeXProducts/Transformers/TransformersSpanish";
import SwitchgearandControlgearEquipmentabove1000VoltsSpanish from "./schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsSpanish";
import SwitchgearandControlgearEquipmentSpanish from "./schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentSpanish";
import RubberAndPlasticsMachinerySpanish from "./schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachinerySpanish";
import RotaryElectricalMachinesSpanish from "./schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesSpanish";
import PublicWorksAndMechanicalSpanish from "./schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalSpanish";
import PowerSemiconductorsSpanish from "./schemeXProducts/PowerSemiconductors/PowerSemiconductorsSpanish";
import PackingMachinerySpanish from "./schemeXProducts/PackingMachinery/PackingMachinerySpanish";
import MetalCuttingMachinesSpanish from "./schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesSpanish";
import MachineToolsSpanish from "./schemeXProducts/MachineTools/MachineToolsSpanish";
import MachineToolsVietnamese from "./schemeXProducts/MachineTools/MachineToolsVietnamese";
import HeatTreatmentEquipmentSpanish from "./schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentSpanish";
import HeatTreatmentEquipmentVietnamese from "./schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentVietnamese";
import GearsGearingsandTransmissionSpanish from "./schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionSpanish";
import GearsGearingsandTransmissionVietnamese from "./schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionVietnamese";
import GearsGearingsandTransmissionKorean from "./schemeXProducts/GearsGearingsandTransmission/GearsGearingsandTransmissionKorean";
import HeatTreatmentEquipmentKorean from "./schemeXProducts/HeatTreatmentEquipment/HeatTreatmentEquipmentKorean";
import MachineToolsKorean from "./schemeXProducts/MachineTools/MachineToolsKorean";
import MetalCuttingMachinesKorean from "./schemeXProducts/MetalCuttingMachines/MetalCuttingMachinesKorean";
import PackingMachineryKorean from "./schemeXProducts/PackingMachinery/PackingMachineryKorean";
import PowerSemiconductorsKorean from "./schemeXProducts/PowerSemiconductors/PowerSemiconductorsKorean";
import PublicWorksAndMechanicalKorean from "./schemeXProducts/PublicWorksAndMechanical/PublicWorksAndMechanicalKorean";
import RotaryElectricalMachinesKorean from "./schemeXProducts/RotaryElectricalMachines/RotaryElectricalMachinesKorean";
import RubberAndPlasticsMachineryKorean from "./schemeXProducts/RubberAndPlasticsMachinery/RubberAndPlasticsMachineryKorean";
import SwitchgearandControlgearEquipmentKorean from "./schemeXProducts/SwitchgearandControlgearEquipment/SwitchgearandControlgearEquipmentKorean";
import SwitchgearandControlgearEquipmentabove1000VoltsKorean from "./schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts/SwitchgearandControlgearEquipmentabove1000VoltsKorean";
import TransformersKorean from "./schemeXProducts/Transformers/TransformersKorean";
import WeavingMachinesKorean from "./schemeXProducts/WeavingMachines/WeavingMachinesKorean";
import NetherlandsBlog from "./blogs/NetherlandsBlog/NetherlandsBlog";
import LangNetherlandsBlog from "./blogs/NetherlandsBlog/LangNetherlandsBlog";
import KoreaBlog from "./blogs/KoreaBlog/KoreaBlog";
import LangKoreaBlog from "./blogs/KoreaBlog/LangKoreaBlog";
import JapanBlog from "./blogs/JapanBlog/JapanBlog";
import LangJapanBlog from "./blogs/JapanBlog/LangJapanBlog";
import ItalyBlog from "./blogs/ItalyBlog/ItalyBlog";
import SpainBlog from "./blogs/SpainBlog/SpainBlog";
import LangSpainBlog from "./blogs/SpainBlog/LangSpainBlog";
import FranceBlog from "./blogs/FranceBlog/FranceBlog";
import LangFranceBlog from "./blogs/FranceBlog/LangFranceBlog";
import GermanyBlog from "./blogs/GermanyBlog/GermanyBlog";
import LangGermanyBlog from "./blogs/GermanyBlog/LangGermanyBlog";
import USABlog from "./blogs/USABlog";
import VietnamBlog from "./blogs/VietnamBlog/VietnamBlog";
import LangVietnamBlog from "./blogs/VietnamBlog/LangVietnamBlog";
import ThailandBlog from "./blogs/ThailandBlog/ThailandBlog";
import LangThailandBlog from "./blogs/ThailandBlog/LangThailandBlog";
import LangItalyBlog from "./blogs/ItalyBlog/LangItalyBlog";
import UAEBlog from "./blogs/UAEBlog/UAEBlog";
import LangUAEBlog from "./blogs/UAEBlog/LangUAEBlog";
import QatarBlog from "./blogs/QatarBlog/QatarBlog";
import LangQatarBlog from "./blogs/QatarBlog/LangQatarBlog";
import BahrainBlog from "./blogs/BahrainBlog/BahrainBlog";
import LangBahrainBlog from "./blogs/BahrainBlog/LangBahrainBlog";
import DubaiBlog from "./blogs/DubaiBlog/DubaiBlog";
import LangDubaiBlog from "./blogs/DubaiBlog/LangDubaiBlog";
import IranBlog from "./blogs/IranBlog/IranBlog";
import LangIranBlog from "./blogs/IranBlog/LangIranBlog";
import IraqBlog from "./blogs/IraqBlog/IraqBlog";
import LangIraqBlog from "./blogs/IraqBlog/LangIraqBlog";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [videoPopupOpen, setVideoPopupOpen] = useState(false);
  const location = useLocation();

  // Check if current route is admin
  const isAdminRoute = location.pathname === "/admin";

  return (
    <>
      <OrganizationSchema />
      {!isAdminRoute && <TopBar />}
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && (
        <ScrollToTopButton hide={popupOpen || videoPopupOpen} />
      )}
      {!isAdminRoute && <ScrollToTop />}
      <SEOBreadcrumbs />

      <Routes>
        {/* Default routes without language prefix (English) */}
        <Route path="/">
          <Route
            index
            element={<Home onVideoPopupChange={setVideoPopupOpen} />}
          />
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
          {/* Scheme X Pages Routes */}
          {SchemeXPagesRoutes()}
          {/* BISFM Pages Routes */}
          {BISFMPagesRoutes()}
          <Route
            path="a-guide-on-how-to-obtain-epr-certificate"
            element={<EPRService />}
          />
          {/* BIS Certification Pages Routes */}
          {BISCertificationPagesRoutes()}
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
          {/* ISIMark Pages Routes */}
          {ISIMarkPagesRoutes()}
          <Route
            path="epr-certificate-for-battery-waste-management-bwm"
            element={<BatteryWaste />}
          />
          {/* CRS Registration Routes */}
          {CRSRegistrationRoutes()}
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
          <Route
            path="bis-certificate-for-tin-ingots"
            element={<TinIngotBlog />}
          />
          <Route
            path="bis-certificate-for-refined-zinc"
            element={<RefinedZincBlog />}
          />
          <Route
            path="bis-license-for-bunk-beds-Indian-bis"
            element={<BunkBedsBlog />}
          />
          <Route
            path="bis-license-for-storage-units-Indian-bis"
            element={<StorageUnitsBlog />}
          />
          <Route
            path="bis-certification-in-indonesia"
            element={<IndonesiaBlog />}
          />
          <Route
            path="sertifikasi-bis-di-indonesia"
            element={<LangIndonesiaBlog />}
          />
          <Route
            path="bis-certification-in-netherlands"
            element={<NetherlandsBlog />}
          />
          <Route
            path="bis-certificering-in-nederland"
            element={<LangNetherlandsBlog />}
          />
          <Route path="bis-certification-in-korea" element={<KoreaBlog />} />
          <Route path="hangug-ui-bis-injeung" element={<LangKoreaBlog />} />
          <Route path="bis-certification-in-japan" element={<JapanBlog />} />
          <Route path="nihon-niokeru-bis-ninsho" element={<LangJapanBlog />} />
          <Route path="bis-certification-in-italy" element={<ItalyBlog />} />
          <Route
            path="certificazione-bis-in-italia"
            element={<LangItalyBlog />}
          />
          <Route path="bis-certification-in-spain" element={<SpainBlog />} />
          <Route
            path="certificacion-bis-en-espana"
            element={<LangSpainBlog />}
          />
          <Route path="bis-certification-in-france" element={<FranceBlog />} />
          <Route
            path="certification-bis-en-france"
            element={<LangFranceBlog />}
          />
          <Route
            path="bis-certification-in-germany"
            element={<GermanyBlog />}
          />
          <Route
            path="bis-zertifizierung-in-deutschland"
            element={<LangGermanyBlog />}
          />
          <Route path="bis-certification-in-usa" element={<USABlog />} />
          <Route
            path="bis-certification-in-vietnam"
            element={<VietnamBlog />}
          />
          <Route
            path="chung-nhan-bis-tai-viet-nam"
            element={<LangVietnamBlog />}
          />
          <Route
            path="bis-certification-in-thailand"
            element={<ThailandBlog />}
          />
          <Route
            path="kan-rap-rong-bis-nai-prathet-thai"
            element={<LangThailandBlog />}
          />
          <Route path="bis-certification-in-uae" element={<UAEBlog />} />
          <Route path="shahadat-bis-fi-al-imarat" element={<LangUAEBlog />} />
          <Route path="bis-certification-in-qatar" element={<QatarBlog />} />
          <Route path="shahadat-bis-fi-qatar" element={<LangQatarBlog />} />
          <Route
            path="bis-certification-in-bahrain"
            element={<BahrainBlog />}
          />
          <Route
            path="shahadat-bis-fi-al-bahrain"
            element={<LangBahrainBlog />}
          />
          <Route path="bis-certification-in-dubai" element={<DubaiBlog />} />
          <Route path="shahadat-bis-fi-dubai" element={<LangDubaiBlog />} />
          <Route path="bis-certification-in-iran" element={<IranBlog />} />
          <Route path="shahadat-bis-fi-iran" element={<LangIranBlog />} />
          <Route path="bis-certification-in-iraq" element={<IraqBlog />} />
          <Route path="shahadat-bis-fi-al-iraq" element={<LangIraqBlog />} />
          {/* SchemeX Products */}
          <Route path="SchemeX-products" element={<SchemeXProducts />} />
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

          {/* SchemeX Products Routes */}
          {SchemeXProductsRoutes()}

          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-banh-rang-he-thong-truyen-dong-va-cac-bo-phan-truyen-tai"
            element={<GearsGearingsandTransmissionVietnamese />}
          />
          {/* Spanish */}
          <Route
            path="certificacion-bis-scheme-x-para-engranajes-engranajes-y-elementos-de-transmision"
            element={<GearsGearingsandTransmissionSpanish />}
          />
          {/* Korean */}
          <Route
            path="bis-seukim-x-injeung-gie-gearing-jeonseung-yosu"
            element={<GearsGearingsandTransmissionKorean />}
          />
          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-thiet-bi-xu-ly-nhiet"
            element={<HeatTreatmentEquipmentVietnamese />}
          />
          {/* Spanish */}
          <Route
            path="certificacion-bis-scheme-x-para-equipos-de-tratamiento-termico"
            element={<HeatTreatmentEquipmentSpanish />}
          />
          {/* Korean */}
          <Route
            path="bis-seukim-x-injeung-yeolcheori-jangbi"
            element={<HeatTreatmentEquipmentKorean />}
          />
          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-may-cong-cu"
            element={<MachineToolsVietnamese />}
          />
          {/* Spanish */}
          <Route
            path="certificacion-bis-scheme-x-para-herramientas-de-maquina"
            element={<MachineToolsSpanish />}
          />
          {/* Korean */}
          <Route
            path="bis-seukim-x-injeung-gongjag-gigye"
            element={<MachineToolsKorean />}
          />
          <Route
            path="certificacion-bis-scheme-x-para-herramientas-de-corte-de-metal"
            element={<MetalCuttingMachinesSpanish />}
          />
          {/* Korean */}
          <Route
            path="bis-seukim-x-injeung-geumsog-jeoldan-gongjag-gigye"
            element={<MetalCuttingMachinesKorean />}
          />
          <Route
            path="certificacion-bis-scheme-x-para-maquinaria-de-empaque"
            element={<PackingMachinerySpanish />}
          />
          {/* Korean */}
          <Route
            path="bis-seukim-x-injeung-pojang-gigye"
            element={<PackingMachineryKorean />}
          />
          <Route
            path="certificacion-bis-scheme-x-para-convertidores-de-semiconductores-de-potencia"
            element={<PowerSemiconductorsSpanish />}
          />
          {/* Korean */}
          <Route
            path="bis-seukim-x-injeung-jeonlyeog-bandojeo-byeonhwan-gi"
            element={<PowerSemiconductorsKorean />}
          />
          <Route
            path="bis-seukim-x-injeung-gonggong-sa-eob-mich-gigye-gigu"
            element={<PublicWorksAndMechanicalKorean />}
          />
          <Route
            path="bis-seukim-x-injeung-hojeon-jeongi-gigye"
            element={<RotaryElectricalMachinesKorean />}
          />
          <Route
            path="bis-seukim-x-injeung-gomu-mich-peullaseutig-gigye"
            element={<RubberAndPlasticsMachineryKorean />}
          />
          <Route
            path="bis-seukim-x-injeung-gaepye-gi-mich-jejeo-jangbi-1000-bolteu-iha"
            element={<SwitchgearandControlgearEquipmentKorean />}
          />
          <Route
            path="bis-seukim-x-injeung-gaepye-gi-mich-jejeo-jangbi-1000-bolteu-chogo"
            element={<SwitchgearandControlgearEquipmentabove1000VoltsKorean />}
          />
          <Route
            path="bis-seukim-x-injeung-byeonab-gi"
            element={<TransformersKorean />}
          />
          <Route
            path="bis-seukim-x-injeung-jigjo-gi"
            element={<WeavingMachinesKorean />}
          />
          <Route
            path="certificacion-bis-scheme-x-para-obras-publicas-y-aparatos-mecanicos"
            element={<PublicWorksAndMechanicalSpanish />}
          />
          <Route
            path="certificacion-bis-scheme-x-para-maquinas-electricas-rotativas"
            element={<RotaryElectricalMachinesSpanish />}
          />
          <Route
            path="certificacion-bis-scheme-x-para-maquinaria-de-caucho-y-plasticos"
            element={<RubberAndPlasticsMachinerySpanish />}
          />
          <Route
            path="certificacion-bis-scheme-x-para-equipos-de-interruptores-y-controladores-hasta-1000-voltios"
            element={<SwitchgearandControlgearEquipmentSpanish />}
          />
          <Route
            path="certificacion-bis-scheme-x-para-equipos-de-interruptores-y-controladores-por-encima-de-1000-voltios"
            element={<SwitchgearandControlgearEquipmentabove1000VoltsSpanish />}
          />
          <Route
            path="certificacion-bis-scheme-x-para-transformadores"
            element={<TransformersSpanish />}
          />
          <Route
            path="certificacion-bis-scheme-x-para-maquinas-de-tejido"
            element={<WeavingMachinesSpanish />}
          />
          {/* {English } */}
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
            path="bis-schema-x-zertifizierung-fuer-metallschneidemaschinen"
            element={<MetalCuttingMachinesGerman />}
          />
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-may-cong-cu-cat-kim-loai"
            element={<MetalCuttingMachinesVietnamese />}
          />
          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-may-moc-dong-goi"
            element={<PackingMachineryVietnamese />}
          />
          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-bo-chuyen-doi-ban-dan-cong-suat"
            element={<PowerSemiconductorsVietnamese />}
          />
          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-cong-trinh-cong-cong-va-thiet-bi-co-khi"
            element={<PublicWorksAndMechanicalVietnamese />}
          />
          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-may-dien-quay"
            element={<RotaryElectricalMachinesVietnamese />}
          />
          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-may-moc-cao-su-va-nhua"
            element={<RubberAndPlasticsMachineryVietnamese />}
          />
          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-thiet-bi-chuyen-mach-va-dieu-khien-len-den-1000-volts"
            element={<SwitchgearandControlgearEquipmentVietnamese />}
          />
          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-thiet-bi-chuyen-mach-va-dieu-khien-tren-1000-volts"
            element={
              <SwitchgearandControlgearEquipmentabove1000VoltsVietnamese />
            }
          />
          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-may-bien-ap"
            element={<TransformersVietnamese />}
          />
          {/* {English } */}
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
          {/* Vietnamese */}
          <Route
            path="chung-nhan-bis-scheme-x-cho-may-det"
            element={<WeavingMachinesVietnamese />}
          />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLoginPage />} />

        {/* Localized routes for other languages */}
        <Route path="/:lang/*" element={<LocalizedRoute />}>
          <Route path="*" element={<RouteResolver />} />
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>

      {!isAdminRoute && <MobileNav />}
      {!isAdminRoute && (
        <SocialFloatingButtons hide={popupOpen || videoPopupOpen} />
      )}
      {!isAdminRoute && (
        <ContactFormPopup open={popupOpen} setOpen={setPopupOpen} />
      )}
    </>
  );
}

export default App;
