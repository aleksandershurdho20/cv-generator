import React from "react";
import Cv from "../../../assets/cv.png";
import BigCircle from "../../../assets/big-eclipse.svg";
import MediumCircle from "../../../assets/mid-eclipse.svg";
import SmallCircle from "../../../assets/small-eclipse.svg";

import "./Hero.scss";
export default function Hero() {
  return (
    <main>
      <section className="hero-wrapper">
        <div class="introduction">
          <div class="hero-container">
            <h1>Krijo CV</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div class="cta">
            <button class="cta1">Krijo</button>
            <button class="cta2">Tani</button>
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
