import React from "react";
import "./LeftCv.scss";
import Divider from '@mui/material/Divider';

export default function CvTemplateLeftSidebar() {
  return (
    <>
      Cv e Modifikuar
      <div className="sidenav">
        <div className="cv-inner">
          <h2 className="name-wrapper">Emer Mbiember </h2>
          <h3 className="proffesion-wrapper">Profesioni</h3>
          <h2 className="contact-wrapper">Kontakti</h2>

          <h3 className="adress-wrapper">Adresa : </h3>
          <p className="city-wrapper">Tirana,Albania</p>

          <h2 classNam="skills-wrapper">Njohurite</h2>

          <p>oaksoaksa</p>
        </div>
      </div>
      <div className="main">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        <Divider variant="middle" />
        <h3 style={{ padding: 15 }}>Eksperienca</h3>
        <Divider variant="middle" />
        <div className="experience-wrapper">
          <div className="experience-hisotry">2010 - 2020</div>
          <div className="experience-description">
            Senior Developer
            <ul>
              <li>Java</li>
              <li>Php</li>
              <li>css</li>
              <li>ok</li>
            </ul>
          </div>
        </div>
        <Divider variant="middle" />
        <h3 style={{ padding: 15 }}>Edukimi</h3>
        <Divider variant="middle" />
        <h3 className="degree-title"> Bachelor : Shkenca Kompjuterike</h3>
        <p>Universiteti i Tiranes</p>
      </div>
    </>
  );
}
