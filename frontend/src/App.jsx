import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import TopBar from "./common/TopBar";
import MobileNav from "./components/common/MobileNav";
import Home from "./pages/Home";
import CDSCO from "./pages/CDSCO";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Notification from "./pages/Notification";
import AllClients from "./components/manual/AllClients";
import { BISFM } from "./components/manual/BISFM";
import { EPRService } from "./components/manual/EPRService";
import { BISCertification } from "./components/manual/BISCertification";
import { LMPC } from "./components/manual/LMPC";
import { PlasticWaste } from "./components/manual/PlasticWaste";
import { LegalMetrology } from "./components/manual/LegalMetrology";
import Webinar from "./pages/Webinar";
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
import ScrollToTop from "./components/ScrollToTop";
import MinistryUpdates from "./pages/MinistryUpdates";
import NotificationDetail from "./pages/NotificationDetail";
import InternationalAudits from "./pages/InternationalAudits";
import Seminar from "./pages/Seminar";
import Exhibition from "./pages/Exhibition";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/latest-notifications" element={<Notification />} />
        <Route path="/latest-notification" element={<NotificationDetail />} />
        <Route path="/ministry-updates" element={<MinistryUpdates />} />
        <Route path="/international-audits" element={<InternationalAudits />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/seminar" element={<Seminar />} />

        <Route path="/clients" element={<AllClients />} />
        <Route path="/cdsco-registration-certification" element={<CDSCO />} />
        <Route path="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" element={<BISFM />} />
        <Route path="/a-guide-on-how-to-obtain-epr-certificate" element={<EPRService />} />
        <Route path="/a-guide-to-bis-certification-indian-bis" element={<BISCertification />} />
        <Route path="/a-guide-on-how-to-obtain-lmpc-certificate" element={<LMPC />} />
        <Route path="/epr-certificate-for-plastic-waste-management-pwm" element={<PlasticWaste />} />
        <Route path="/what-is-legal-metrology-or-lmpc-certificate" element={<LegalMetrology />} />
        <Route path="/what-is-bis-certificate-indian-bis" element={<ISIMark />} />
        <Route path="/epr-certificate-for-battery-waste-management-bwm" element={<BatteryWaste />} />
        <Route path="/what-is-crs-bis-or-crs-registration" element={<CRSRegistration />} />
        <Route path="/peso-certification-india" element={<Peso />} />
        <Route path="/tec-certification-approval" element={<Tec />} />
        <Route path="/wpc-certification-approval" element={<WPC />} />
        <Route path="/rohs-certification" element={<ROHS />} />
        <Route path="/bee-certification" element={<BEE />} />
        <Route path="/ce-certification" element={<CECertification />} />
        <Route path="/emi-emc-certification" element={<EMIEMC />} />
        <Route path="/cb-certification" element={<CBCertification />} />
        <Route path="/webinar" element={<Webinar />} />
      </Routes>
      <MobileNav />
    </>
  );
}

export default App;
