import React from "react";
import "./TemplateOne.scss";
export default function TemplateOne(props) {
  console.log(props);
  return (
    <div className="cv">
      <div className="cv-row">
        <div className="cv-wrap">
          <div className="cv-name">{props.emer}</div>
          <div className="cv-subname">{props.pozicioni}</div>
          <div className="cv-content">
            <div className="head-title">Eksperienca</div>
            <div className="cv-content-item">
              <div className="title">{props.pozicioni}</div>
              <div className="subtitle">{props.kompania}</div>
              <div className="time">{`${props.muajiFillimit} ${props.dataEFillimi} - ${props.muajiMbarimit} ${props.dataEmbarimit} `}</div>
              <div className="exprecince">{props.pershkrimi}</div>
            </div>
          </div>
          <div className="cv-content">
            <div className="head-title">Edukimi</div>
            <div className="cv-content-item">
              <div className="title">{props.diploma}</div>
              <div className="subtitle">{props.universiteti}</div>
              <div className="time">{`${props.educationDataeFillimit} ${props.educationMuajiFillimit} - ${props.educationDataeMbarimit} ${props.educationMuajiMbarimit}`}</div>
            </div>
          </div>
        </div>
        <div className="cv-wrap">
          <div className="avatar">
            {/* <img src="https://image-aws-us-west-2.vsco.co/04d5df/155672998/5ee7bf4f43a34b5b3c000002/720x960/vsco5ee7bf53b94de.jpg" alt="" /> */}
          </div>
          <div className="info">
            <div className="title">Kontakt</div>
            <p>
              <a>{props.email}</a>
            </p>
            <p>
              <a href="tel:+905555554444">{props.telefon}</a>
            </p>
            <p></p>
          </div>
          <div className="cv-skills">
            <div className="head-title">Njohuri Profesionale</div>
            <div className="cv-skills-item">
              {props.skills &&
                props.skills.map((data, index) => (
                  <div className="title" key={index}>
                    {data.njohuri}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
