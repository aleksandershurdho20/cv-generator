import React from "react";
import Hero from "./ExamplesHero/Index";
import TemplateList from "../../Components/SelectTemplates/TemplateList";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Template2 from "../../assets/template2.png";
import Template3 from "../../assets/template3.png";
export default function Examples() {
  const handleOnDragStart = (e) => e.preventDefault();

  return (
    <>
      <div className="wrapper-template">
        <Hero />
      </div>
      <AliceCarousel
        mouseTrackingEnabled
        autoPlay={true}
        autoPlayInterval={2000}
      >
        <img
          src={Template2}
          onDragStart={handleOnDragStart}
          style={{ height: 300 }}
          className="slider-img"
        />
        <img
          src={Template3}
          style={{ height: 300 }}
          onDragStart={handleOnDragStart}
          className="slider-img"
        />
      </AliceCarousel>
    </>
  );
}
