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





function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/latest-notifications" element={<Notification />} />
      <Route path="/clients" element={<AllClients />} />
      <Route path="/services/cdsco-registration-certification" element={<CDSCO />} />
      <Route path="/services/bis-mark-foreign" element={<BISFM />} />
      <Route path="/services/epr-registration" element={<EPRService />} />
      <Route path="/services/bis-certification" element={<BISCertification />} />
      <Route path="/services/lmpc-registration" element={<LMPC />} />
      <Route path="/services/plastic-waste" element={<PlasticWaste />} />
      <Route path="/services/legal-metrology" element={<LegalMetrology />} />
    


    </Routes>
    </>
  );
}

export default App;
