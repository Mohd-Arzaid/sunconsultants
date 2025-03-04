import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./pages/Home";
import CDSCO from "./pages/CDSCO";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cdsco-registration-certification" element={<CDSCO />} />
    </Routes>
    </>
  );
}

export default App;
