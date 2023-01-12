import React, { useState,useRef } from "react";

import InitialCvTempalte from "../../assets/cv_preview.png";
import Template2 from "../../assets/template2.png";
import Template3 from "../../assets/template3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Container from "@material-ui/core/Container";
import CV from "react-cv";
import TemplateOne from "./CVTemplates/TemplateOne";
import TemplateTwo from "./CVTemplates/Template2/TemplateTwo";
import Pdf from "react-to-pdf";
import Download from "../../Containers/Download";
import Template4 from "../../assets/Template4.PNG";
import TemplateFour from "./CVTemplates/Template4/Template4";

export default function TemplateList(props) {

  const [selectTemplate, setSelectTempalte] = useState("");

  const cvResult = useRef(null)
  const images = [
    { url: InitialCvTempalte },
    { url: Template2 },
    { url: Template3 },
    { url: Template4 },
    { url: "images/5.jpg" },
    { url: "images/6.jpg" },
    { url: "images/7.jpg" },
  ];

  const selectCvTemplate = (cv) =>{
    setSelectTempalte(cv)
    cvResult && cvResult.current.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <Container>
      <Carousel
        selectedItem={0}
        onClickItem={(item) => selectCvTemplate(item)}
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
        <div style={{ height: "400px" }}>
          <img src={Template4} />

          <p className="legend">Perdor kete template. </p>
        </div>

        {/* {selectTemplate === 0 && bodyRef} */}
      </Carousel>
      <div ref={cvResult}>
        <Download {...props} selectTemplate={selectTemplate} />
      </div>
    </Container>
  );
}

// props.location && props.location.pathname.includes("/Krijo")
