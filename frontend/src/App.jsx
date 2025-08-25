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
import SchemeX from "./pages/SchemeX";
import CRSRegistration from "./pages/CRSRegistration";
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
          <Route
            path="indian-bis-certification-under-scheme-x"
            element={<SchemeX />}
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
          <Route
            path="what-is-crs-bis-or-crs-registration"
            element={<CRSRegistration />}
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

        <Route path="Blogs" element={<LatestBlogs />} />
        <Route path="/bis-certificate-for-tin-ingots" element={<TinIngotBlog />} />
        <Route path="/bis-certificate-for-refined-zinc" element={<RefinedZincBlog />} />

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
