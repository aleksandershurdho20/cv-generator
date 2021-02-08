import React from "react";
import "./Hero.scss";
import Curriculum from "../../../assets/curriculum.png";
export default function Index() {
  return (
    <>
      <div className="example-cv-hero">
        <div className="inner-example-hero">
          <h1>Shembuj CV reale per cdo profesion.</h1>
          <h3>
            Gjeni CV qe ju pershtatet me shume dhe perdoreni ate permes
            platformes CV.AL
            {/* Find the perfect free resume sample and upgrade your resume with
            CV.AL */}
          </h3>
        </div>
      </div>
      {/* <div className="card-hero">
        <img src={Curriculum} />
      </div> */}
    </>
  );
}
