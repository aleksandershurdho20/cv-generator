import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

import InitialCvTempalte from "../../assets/cv_preview.png";
import Template2 from "../../assets/template2.png";
import Template3 from "../../assets/template3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Container from "@material-ui/core/Container";

export default function TemplateList() {
  const [selectTemplate, setSelectTempalte] = useState("");
  const images = [
    { url: InitialCvTempalte },
    { url: Template2 },
    { url: Template3 },
    { url: "images/4.jpg" },
    { url: "images/5.jpg" },
    { url: "images/6.jpg" },
    { url: "images/7.jpg" },
  ];
  console.log(selectTemplate);
  return (
    <Container>
      <Carousel
        selectedItem={0}
        onClickItem={(item) => setSelectTempalte(item)}
      >
        <div style={{ height: "400px" }}>
          <img src={InitialCvTempalte} />

          <p className="legend">Perdor kete template. </p>
        </div>
        <div style={{ height: "400px" }}>
          <img src={Template2} />

          <p className="legend">Perdor kete template. </p>
        </div>
        <div style={{ height: "400px" }}>
          <img src={Template3} />

          <p className="legend">Perdor kete template. </p>
        </div>
      </Carousel>
    </Container>
  );
}
