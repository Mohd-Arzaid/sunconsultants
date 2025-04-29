import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
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

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/latest-notifications" element={<Notification />} />
        <Route path="/clients" element={<AllClients />} />
        <Route
          path="/services/cdsco-registration-certification"
          element={<CDSCO />}
        />
        <Route path="/services/bis-mark-foreign" element={<BISFM />} />
        <Route path="/services/epr-registration" element={<EPRService />} />
        <Route
          path="/services/bis-certification"
          element={<BISCertification />}
        />
        <Route path="/services/lmpc-registration" element={<LMPC />} />
        <Route path="/services/plastic-waste" element={<PlasticWaste />} />
        <Route path="/services/legal-metrology" element={<LegalMetrology />} />
        <Route path="/services/isi-mark-indian" element={<ISIMark />} />
        <Route path="/services/battery-waste" element={<BatteryWaste />} />
        <Route path="/services/crs-registration" element={<CRSRegistration />} />
        <Route path="/services/peso" element={<Peso />} />
        <Route path="/services/tec" element={<Tec />} />
        <Route path="/services/wpc" element={<WPC />} />
        <Route path="/services/rohs" element={<ROHS />} />
        <Route path="/services/bee" element={<BEE />} />
        <Route path="/services/ce-certification" element={<CECertification />} />
        <Route path="/services/emi-emc" element={<EMIEMC />} />
        <Route path="/services/cb-certification" element={<CBCertification />} />
        <Route path="/webinar" element={<Webinar />} />
      </Routes>
    </>
  );
}

export default App;
