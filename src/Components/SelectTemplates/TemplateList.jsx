import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

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

export default function TemplateList(props) {
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
  console.log(props.bodyRef);
  console.log(props);
  console.log(props.skills, "skills");
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
        {/* {selectTemplate === 0 && bodyRef} */}
      </Carousel>
      {selectTemplate === 2 && (
        <div ref={props.bodyRef}>
          <TemplateTwo {...props} />
        </div>
      )}
      {/* <div ref={props.bodyRef}> */}
      {/* <CV
          personalData={{
            name: props.emer,
            title: props.pozicioni,
            image: props.imageFiles,
            contacts: [
              { type: "email", value: props.email },
              { type: "phone", value: props.telefon },
              { type: "location", value: props.qyteti },
            ],
          }}
          sections={[
            {
              type: "experiences-list",
              title: "Eksperienca",
              icon: "archive",
              items: [
                {
                  title: props.pozicioni,
                  company: props.kompania,
                  description: props.pershkrimi,
                  datesBetween: `${props.muajiFillimit} ${props.dataEFillimi} - ${props.muajiMbarimit} ${props.dataEmbarimit} `,
                },
              ],
            },
            {
              type: "common-list",
              title: "Edukimi",
              icon: "graduation",
              items: [
                {
                  title: props.diploma,
                  authority: props.universiteti,
                  rightSide: `${props.educationDataeFillimit} ${props.educationMuajiFillimit} - ${props.educationDataeMbarimit} ${props.educationMuajiMbarimit}`,
                },
              ],
            },
            {
              type: "common-list",
              title: "Njohuri Gjuhesore",
              icon: "language",
              items: props.languageKnowledges.map((data) => {
                return {
                  authority: data.gjuha,
                  authorityMeta: data.niveli,
                };
              }),
            },
            {
              type: "tag-list",
              title: "Aftesi Profesionale",
              icon: "rocket",
              items: props.skills.map((skill) => skill.njohuri),
            },
          ]}
          branding={true} // or false to hide it.
        /> */}
      {/* <TemplateOne {...props} skills={props.skills} /> */}
      {/* <TemplateTwo {...props} /> */}
      {/* </div> */}
    </Container>
  );
}
