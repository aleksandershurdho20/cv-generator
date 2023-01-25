import React from "react";
import Cv from "../../../assets/cv.png";
import BigCircle from "../../../assets/big-eclipse.svg";
import MediumCircle from "../../../assets/mid-eclipse.svg";
import SmallCircle from "../../../assets/small-eclipse.svg";

import { Link } from "react-router-dom";
import "./Hero.scss";
export default function Hero() {
  const linkStyles = {
    color: "inherit",
    textDecoration: "none ",
  };

  return (
    <main>
      <section className="hero-wrapper">
        <div className="introduction">
          <div className="hero-container">
            <h1>Krijo CV</h1>
            <p>Krijoni modelin e CV qe cdo rekrutues e adhuron ate! </p>
          </div>
          <div className="cta">
            <button className="cta1">
              <Link to="/Krijo" style={linkStyles}>
                Krijo CV{" "}
              </Link>
            </button>
            <button className="cta2">
              <Link
                to="/Cv/shembuj"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                Shiko Shembuj
              </Link>
            </button>
          </div>
        </div>

        <div className="cover">
          <img src={Cv} alt="cv" />
        </div>
        <img src={BigCircle} className="big-circle" />
        <img src={MediumCircle} className="medium-circle" />
        <img src={SmallCircle} className="small-circle" />
      </section>
    </main>
  );
}
