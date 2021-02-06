import React from "react";
import Hero from "./ExamplesHero/Index";
import TemplateList from "../../Components/SelectTemplates/TemplateList";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Template2 from "../../assets/template2.png";
import Template3 from "../../assets/template3.png";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import Footer from "../Footer/Footer";
export default function Examples() {
  const handleOnDragStart = (e) => e.preventDefault();

  return (
    <>
      <div className="wrapper-template">
        <Hero />
      </div>
      <div style={{ background: "white", width: "100%", marginTop: 15 }}>
        <Container>
          <Grid container>
            <Grid item md={4} sm={12}>
              <div className="card-wrapper">
                <h4 className="title">Template 1</h4>
                <img src={Template2} className="template-image" />
              </div>
            </Grid>
            <Grid item md={4} sm={12}>
              <div className="card-wrapper">
                <h4 className="title">Template 2</h4>

                <img src={Template3} className="template-image" />
              </div>{" "}
            </Grid>
            <Grid item md={4} sm={12}>
              <div className="card-wrapper">
                <h4 className="title">Template 3</h4>

                <img src={Template2} className="template-image" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer backgroundColor={`#FAFAFA`} />

      {/* <AliceCarousel
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
      </AliceCarousel> */}
    </>
  );
}
