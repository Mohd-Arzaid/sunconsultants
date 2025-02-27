import Navbar from "./common/Navbar";
import Contact from "./components/manual/Contact";
import Hero from "./components/manual/Hero";
import LatestNews from "./components/manual/LatestNews";
import LogoTicker from "./components/manual/LogoTicker";
import Services from "./components/manual/Services";

function App() {
  return (
    <>
      <Navbar />
     
      <Hero />
   
      <LogoTicker />

      <Services/>

      <Contact/>

      <LatestNews />
    </>
  );
}

export default App;
