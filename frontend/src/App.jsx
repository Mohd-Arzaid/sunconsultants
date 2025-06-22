import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./common/Navbar";
import TopBar from "./common/TopBar";
import MobileNav from "./components/common/MobileNav";
import SocialFloatingButtons from "./components/common/SocialFloatingButtons";
import ContactFormPopup from "./components/ContactFormPopup";
import Home from "./pages/Home";
// import CDSCO from "./pages/CDSCO";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Notification from "./pages/Notification";
import AllClients from "./components/manual/AllClients";
import { BISFM } from "./components/manual/BISFM";
// import { EPRService } from "./components/manual/EPRService";
import { BISCertification } from "./components/manual/BISCertification";
// import { LMPC } from "./components/manual/LMPC";
// import { PlasticWaste } from "./components/manual/PlasticWaste";
// import { LegalMetrology } from "./components/manual/LegalMetrology";
import Webinar from "./pages/Webinar";
import CRSRegistration from "./pages/CRSRegistration";
// import Peso from "./pages/Peso";
// import Tec from "./pages/Tec";
// import WPC from "./pages/WPC";
// import ROHS from "./pages/ROHS";
// import BEE from "./pages/BEE";
// import CECertification from "./pages/CECertification";
// import EMIEMC from "./pages/EMIEMC";
// import CBCertification from "./pages/CBCertification";
import ISIMark from "./pages/ISIMark";
// import BatteryWaste from "./pages/BatteryWaste";
import ScrollToTopButton, { ScrollToTop } from "./components/common/ScrollToTop";
import MinistryUpdates from "./pages/MinistryUpdates";
import NotificationDetail from "./pages/NotificationDetail";
import InternationalAudits from "./pages/InternationalAudits";
import Exhibition from "./pages/Exhibition";
import SchemeX from "./pages/SchemeX";
import Sitemap from "./pages/Sitemap";
import { useState } from "react";
// import TableTesting from "./pages/TableTesting";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <TopBar />
      <Navbar />
      <ScrollToTopButton hide={popupOpen} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/table" element={<TableTesting />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/bis-qco-updates" element={<Notification />} />
        <Route path="/latest-notification/:notificationName" element={<NotificationDetail />} />
        <Route path="/ministry-updates" element={<MinistryUpdates />} />
        <Route path="/international-audits" element={<InternationalAudits />} />
        <Route path="/seminars-and-exhibitions" element={<Exhibition />} />
        <Route path="/clients" element={<AllClients />} />
        <Route path="/sitemap" element={<Sitemap />} />

        {/* Services Pages */}
        {/* <Route path="/cdsco-registration-certification" element={<CDSCO />} /> */}
        <Route path="/schemeX" element={<SchemeX />} />
        <Route
          path="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
          element={<BISFM />}
        />
        {/* <Route
          path="/a-guide-on-how-to-obtain-epr-certificate"
          element={<EPRService />}
        /> */}
        <Route
          path="/what-is-bis-certificate-indian-bis"
          element={<BISCertification />}
        />
        {/* <Route
          path="/a-guide-on-how-to-obtain-lmpc-certificate"
          element={<LMPC />}
        /> */}
        {/* <Route
          path="/epr-certificate-for-plastic-waste-management-pwm"
          element={<PlasticWaste />}
        /> */}
        {/* <Route
          path="/what-is-legal-metrology-or-lmpc-certificate"
          element={<LegalMetrology />}
        /> */}
        <Route
          path="a-guide-to-bis-certification-indian-bis"
          element={<ISIMark />}
        />
        {/* <Route
          path="/epr-certificate-for-battery-waste-management-bwm"
          element={<BatteryWaste />}
        /> */}
        <Route
          path="/what-is-crs-bis-or-crs-registration"
          element={<CRSRegistration />}
        />
        {/* <Route
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
        /> */}
        {/* <Route path="/bee-certification" element={<BEE />} /> */}
        {/* <Route path="/ce-certification" element={<CECertification />} /> */}
        {/* <Route path="/emi-emc-certification" element={<EMIEMC />} /> */}
        {/* <Route path="/cb-certification" element={<CBCertification />} /> */}
        {/* Service Page End */}

        <Route path="/webinar" element={<Webinar />} />

        {/* Catch-all route - redirects any unmatched URLs to home */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
      <MobileNav />
      <SocialFloatingButtons hide={popupOpen} />
      <ContactFormPopup open={popupOpen} setOpen={setPopupOpen} />
    </>
  );
}

export default App;
