import React from "react";
import Hero from "../Components/Pages/Hero/Hero";
import Cards from "../Components/Pages/Cards/Cards";
import HeroCard from "../Components/Pages/Cards/HeroCard";
import Footer from "../Containers/Footer/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <HeroCard />
      <Footer />
    </>
  );
}
