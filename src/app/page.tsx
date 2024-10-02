import React from "react";
import HeroSection from "./components/hero-section";
import QuemSomos from "./components/quem-somos";
import Insights from "./components/insghts";
import Fundos from "./components/fundos";


export default function Home() {
  return (
    <>
      <HeroSection />
      <QuemSomos />
      <Insights />
      <Fundos />
    </>
  );
}
