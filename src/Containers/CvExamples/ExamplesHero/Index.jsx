import React from "react";
import "./Hero.scss";
import Fade from "react-reveal/Fade";
export default function Index() {
  return (
    <>
      <div className="example-cv-hero">
        <div className="inner-example-hero">
          <Fade top>
            <h1>Shembuj CV reale per cdo profesion.</h1>
            <h3>
              Gjeni CV qe ju pershtatet me shume dhe perdoreni ate permes
              platformes CV.AL
              {/* Find the perfect free resume sample and upgrade your resume with
            CV.AL */}
            </h3>
          </Fade>
        </div>
      </div>
      {/* <div className="card-hero">
        <img src={Curriculum} />
      </div> */}
    </>
  );
}
