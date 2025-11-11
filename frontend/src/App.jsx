import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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

// Vietnamese imports
import IndonesiaBlog from "./blogs/IndonesiaBlog/IndonesiaBlog";
import LangIndonesiaBlog from "./blogs/IndonesiaBlog/LangIndonesiaBlog";
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
import BacklinksPage from "./pages/BacklinksPage";

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

          {/* SchemeX Products Routes */}
          {SchemeXProductsRoutes()}
        </Route>

        {/* Backlinks Page Routes */}
        <Route path="/backlinks" element={<BacklinksPage />} />

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
