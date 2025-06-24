import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./common/Navbar";
import TopBar from "./common/TopBar";
import MobileNav from "./components/common/MobileNav";
import SocialFloatingButtons from "./components/common/SocialFloatingButtons";
import ContactFormPopup from "./components/ContactFormPopup";
import ScrollToTopButton, { ScrollToTop } from "./components/common/ScrollToTop";
import { useState } from "react";

// No loading component - instant navigation
const PageLoader = () => null;

// Lazy load all page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Notification = lazy(() => import("./pages/Notification"));
const NotificationDetail = lazy(() => import("./pages/NotificationDetail"));
const MinistryUpdates = lazy(() => import("./pages/MinistryUpdates"));
const InternationalAudits = lazy(() => import("./pages/InternationalAudits"));
const Exhibition = lazy(() => import("./pages/Exhibition"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Error404 = lazy(() => import("./pages/404Error"));
const Webinar = lazy(() => import("./pages/Webinar"));

// Service pages - lazy loaded
const CDSCO = lazy(() => import("./pages/CDSCO"));
const SchemeX = lazy(() => import("./pages/SchemeX"));
const CRSRegistration = lazy(() => import("./pages/CRSRegistration"));
const Peso = lazy(() => import("./pages/Peso"));
const Tec = lazy(() => import("./pages/Tec"));
const WPC = lazy(() => import("./pages/WPC"));
const ROHS = lazy(() => import("./pages/ROHS"));
const BEE = lazy(() => import("./pages/BEE"));
const CECertification = lazy(() => import("./pages/CECertification"));
const EMIEMC = lazy(() => import("./pages/EMIEMC"));
const CBCertification = lazy(() => import("./pages/CBCertification"));
const ISIMark = lazy(() => import("./pages/ISIMark"));
const BatteryWaste = lazy(() => import("./pages/BatteryWaste"));

// Manual components - lazy loaded
const AllClients = lazy(() => import("./components/manual/AllClients"));
const BISFM = lazy(() => import("./components/manual/BISFM").then(module => ({ default: module.BISFM })));
const EPRService = lazy(() => import("./components/manual/EPRService").then(module => ({ default: module.EPRService })));
const BISCertification = lazy(() => import("./components/manual/BISCertification").then(module => ({ default: module.BISCertification })));
const LMPC = lazy(() => import("./components/manual/LMPC").then(module => ({ default: module.LMPC })));
const PlasticWaste = lazy(() => import("./components/manual/PlasticWaste").then(module => ({ default: module.PlasticWaste })));
const LegalMetrology = lazy(() => import("./components/manual/LegalMetrology").then(module => ({ default: module.LegalMetrology })));

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <TopBar />
      <Navbar />
      <ScrollToTopButton hide={popupOpen} />
      <ScrollToTop />
      
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/bis-qco-updates" element={<Notification />} />
          <Route path="/bis-qco-updates/:notificationName" element={<NotificationDetail />} />
          <Route path="/ministry-updates" element={<MinistryUpdates />} />
          <Route path="/international-audits" element={<InternationalAudits />} />
          <Route path="/seminars-and-exhibitions" element={<Exhibition />} />
          <Route path="/clients" element={<AllClients />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* Services Pages */}
          <Route path="/cdsco-registration-certification" element={<CDSCO />} />
          <Route path="/schemeX" element={<SchemeX />} />
          <Route
            path="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            element={<BISFM />}
          />
          <Route
            path="/a-guide-on-how-to-obtain-epr-certificate"
            element={<EPRService />}
          />
          <Route
            path="/what-is-bis-certificate-indian-bis"
            element={<BISCertification />}
          />
          <Route
            path="/a-guide-on-how-to-obtain-lmpc-certificate"
            element={<LMPC />}
          />
          <Route
            path="/epr-certificate-for-plastic-waste-management-pwm"
            element={<PlasticWaste />}
          />
          <Route
            path="/what-is-legal-metrology-or-lmpc-certificate"
            element={<LegalMetrology />}
          />
          <Route
            path="a-guide-to-bis-certification-indian-bis"
            element={<ISIMark />}
          />
          <Route
            path="/epr-certificate-for-battery-waste-management-bwm"
            element={<BatteryWaste />}
          />
          <Route
            path="/what-is-crs-bis-or-crs-registration"
            element={<CRSRegistration />}
          />
          <Route
            path="/information-about-peso-certification-peso-license-india"
            element={<Peso />}
          />
          <Route
            path="/information-about-tec-certificate-mtcte"
            element={<Tec />}
          />
          <Route
            path="/information-about-wpc-certificate-eta-approval"
            element={<WPC />}
          />
          <Route
            path="/restriction-of-hazardous-substance-rohs-certificate"
            element={<ROHS />}
          />
          <Route path="/bee-certification" element={<BEE />} />
          <Route path="/ce-certification" element={<CECertification />} />
          <Route path="/emi-emc-certification" element={<EMIEMC />} />
          <Route path="/cb-certification" element={<CBCertification />} />
          {/* Service Page End */}

          <Route path="/webinar" element={<Webinar />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          {/* Catch-all route - shows 404 error page for unmatched URLs */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
      
      <MobileNav />
      <SocialFloatingButtons hide={popupOpen} />
      <ContactFormPopup open={popupOpen} setOpen={setPopupOpen} />
    </>
  );
}

export default App;
