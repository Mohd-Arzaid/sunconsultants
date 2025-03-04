import Client from "@/components/manual/Client";
import Contact from "@/components/manual/Contact";
import Hero from "@/components/manual/Hero";
import LatestNews from "@/components/manual/LatestNews";
import LogoTicker from "@/components/manual/LogoTicker";
import Services from "@/components/manual/Services";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />

      <LogoTicker />

      <Services />

      <Contact />

      <LatestNews />

      <Client />
    </>
  );
};

export default Home;
