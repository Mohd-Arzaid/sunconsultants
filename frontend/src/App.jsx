import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./pages/Home";
import CDSCO from "./pages/CDSCO";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Notification from "./pages/Notification";
import AllClients from "./components/manual/AllClients";



function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/cdsco-registration-certification" element={<CDSCO />} />
      <Route path="/latest-notifications" element={<Notification />} />
      <Route path="/clients" element={<AllClients />} />

    </Routes>
    </>
  );
}

export default App;
