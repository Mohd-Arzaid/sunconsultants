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
import PumpsAndLiquidElevators from "./schemeXProducts/PumpsAndLiquidElevators";
import PackingMachinery from "./schemeXProducts/PackingMachinery";
import Centrifuges from "./schemeXProducts/Centrifuges";
import Compressors from "./schemeXProducts/Compressors";
import HeatTreatmentEquipment from "./schemeXProducts/HeatTreatmentEquipment";
import PumpsAndLiquidElevatorsGerman from "./schemeXProducts/PumpsAndLiquidElevatorsGerman";
import PumpsAndLiquidElevatorsSpanish from "./schemeXProducts/PumpsAndLiquidElevatorsSpanish";
import PumpsAndLiquidElevatorsFrench from "./schemeXProducts/PumpsAndLiquidElevatorsFrench";
import PumpsAndLiquidElevatorsIndonesian from "./schemeXProducts/PumpsAndLiquidElevatorsIndonesian";
import PumpsAndLiquidElevatorsItalian from "./schemeXProducts/PumpsAndLiquidElevatorsItalian";
import PumpsAndLiquidElevatorsJapanese from "./schemeXProducts/PumpsAndLiquidElevatorsJapanese";
import PumpsAndLiquidElevatorsKorean from "./schemeXProducts/PumpsAndLiquidElevatorsKorean";
import PumpsAndLiquidElevatorsDutch from "./schemeXProducts/PumpsAndLiquidElevatorsDutch";
import PumpsAndLiquidElevatorsThai from "./schemeXProducts/PumpsAndLiquidElevatorsThai";
import PumpsAndLiquidElevatorsVietnamese from "./schemeXProducts/PumpsAndLiquidElevatorsVietnamese";
import PumpsAndLiquidElevatorsArabic from "./schemeXProducts/PumpsAndLiquidElevatorsArabic";
import WeavingMachines from "./schemeXProducts/WeavingMachines";
import ConstructionMachinery from "./schemeXProducts/ConstructionMachinery";
import MetalCuttingMachines from "./schemeXProducts/MetalCuttingMachines";
import Cranes from "./schemeXProducts/Cranes";
import EmbroideryMachines from "./schemeXProducts/EmbroideryMachines";
import GearsGearingsandTransmission from "./schemeXProducts/GearsGearingsandTransmission";
import DieselGenerator from "./schemeXProducts/DieselGenerator";
import SwitchgearandControlgearEquipment from "./schemeXProducts/SwitchgearandControlgearEquipment";
import RotaryElectricalMachines from "./schemeXProducts/RotaryElectricalMachines";
import PublicWorksAndMechanical from "./schemeXProducts/PublicWorksAndMechanical";
import PowerSemiconductors from "./schemeXProducts/PowerSemiconductors";
import Transformers from "./schemeXProducts/Transformers";
import MachineTools from "./schemeXProducts/MachineTools";
import SwitchgearandControlgearEquipmentabove1000Volts from "./schemeXProducts/SwitchgearandControlgearEquipmentabove1000Volts";
import RubberAndPlasticsMachinery from "./schemeXProducts/RubberAndPlasticsMachinery";
import CRSRegistrationJapanese from "./pages/CRSRegistration/CRSRegistrationJapanese";
import SchemeXJapanese from "./pages/SchemeX/SchemeXJapanese";


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
          {/* english */}
          <Route path="bis-scheme-x-certification-for-pumps-and-liquid-elevators" element={<PumpsAndLiquidElevators />} />
          {/* german */}
          <Route path="bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege" element={<PumpsAndLiquidElevatorsGerman />} />
          {/* spanish */}
          <Route path="certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos" element={<PumpsAndLiquidElevatorsSpanish />} />

          {/* French */}
          <Route path="certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides" element={<PumpsAndLiquidElevatorsFrench />} />

          {/* Indonesian */}
          <Route path="sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan" element={<PumpsAndLiquidElevatorsIndonesian />} />

          {/* Italian */}
          <Route path="certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi" element={<PumpsAndLiquidElevatorsItalian />} />

          {/* Japanese */}
          <Route path="bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa" element={<PumpsAndLiquidElevatorsJapanese />} />

          {/* Korean */}
          <Route path="bis-seukim-x-injeung-peomp-mich-aegche-seunggangi" element={<PumpsAndLiquidElevatorsKorean />} />

          {/* Dutch */}
          <Route path="bis-schema-x-certificering-voor-pompen-en-vloeistofelevators" element={<PumpsAndLiquidElevatorsDutch />} />

          {/* Thai */}
          <Route path="kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam" element={<PumpsAndLiquidElevatorsThai />} />

          {/* Vietnamese */}
          <Route path="chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long" element={<PumpsAndLiquidElevatorsVietnamese />} />

          {/* Arabic */}
          <Route path="shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail" element={<PumpsAndLiquidElevatorsArabic />} />


          <Route path="bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery" element={<Centrifuges />} />
          <Route path="bis-scheme-x-certification-for-compressors" element={<Compressors />} />
          <Route path="bis-scheme-x-certification-for-construction-machinery" element={<ConstructionMachinery />} />
          <Route path="bis-scheme-x-certification-for-cranes" element={<Cranes />} />
          <Route path="bis-scheme-x-certification-for-diesel-generators" element={<DieselGenerator />} />
          <Route path="bis-scheme-x-certification-for-embroidery-machinery" element={<EmbroideryMachines />} />
          <Route path="bis-scheme-x-certification-for-gears-gearing-and-transmission-elements" element={<GearsGearingsandTransmission />} />
          <Route path="bis-scheme-x-certification-for-heat-treatment-equipment" element={<HeatTreatmentEquipment />} />
          <Route path="bis-scheme-x-certification-for-machine-tools" element={<MachineTools />} />
          <Route path="bis-scheme-x-certification-for-metal-cutting-machine-tools" element={<MetalCuttingMachines />} />
          <Route path="bis-scheme-x-certification-for-packing-machinery" element={<PackingMachinery />} />
          <Route path="bis-scheme-x-certification-for-power-semiconductor-converters" element={<PowerSemiconductors />} />
          <Route path="bis-scheme-x-certification-for-public-works-and-mechanical-appliances" element={<PublicWorksAndMechanical />} />
          <Route path="bis-scheme-x-certification-for-rotary-electrical-machines" element={<RotaryElectricalMachines />} />
          <Route path="bis-scheme-x-certification-for-rubber-and-plastics-machinery" element={<RubberAndPlasticsMachinery />} />
          <Route path="bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts" element={<SwitchgearandControlgearEquipment />} />
          <Route path="bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts" element={<SwitchgearandControlgearEquipmentabove1000Volts />} />
          <Route path="bis-scheme-x-certification-for-transformers" element={<Transformers />} />
          <Route path="bis-scheme-x-certification-for-weaving-machines-looms" element={<WeavingMachines />} />


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
