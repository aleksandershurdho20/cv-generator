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
            <div className="cv-content-item">
              <div className="title">Frontend Developer</div>
              <div className="subtitle">Enterprise Name</div>
              <div className="time">Jan 2017 - 3 year, Turkey</div>
              <div className="exprecince">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
                ante pulvinar, consectetur ante et.
              </div>
            </div>
            <div className="cv-content-item">
              <div className="title">Frontend Developer</div>
              <div className="subtitle">Enterprise Name</div>
              <div className="time">Oct 2015 - 2 year, Turkey</div>
              <div className="exprecince">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
                ante pulvinar, consectetur ante et.
              </div>
            </div>
            <div className="cv-content-item">
              <div className="title">Frontend Developer</div>
              <div className="subtitle">Enterprise Name</div>
              <div className="time">Nov 2018 - 1 year, USA</div>
              <div className="exprecince">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
                ante pulvinar, consectetur ante et.
              </div>
            </div>
          </div>
          <div className="cv-content">
            <div className="head-title">Education</div>
            <div className="cv-content-item">
              <div className="title">
                Front-End development courses from W3C
              </div>
              <div className="subtitle">Enterprise Name</div>
              <div className="time">Aug 2017 - Present - 3 year, Turkey</div>
              <div className="exprecince">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
                ante pulvinar, consectetur ante et.
              </div>
            </div>
            <div className="cv-content-item">
              <div className="title">
                Front-end development courses from freeCodeCamp.org Curriculum
              </div>
              <div className="subtitle">Enterprise Name</div>
              <div className="time">Aug 2015 - 1 year, Paris</div>
              <div className="exprecince">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
                ante pulvinar, consectetur ante et.
              </div>
            </div>
          </div>
        </div>
        <div className="cv-wrap">
          <div className="avatar">
            {/* <img src="https://image-aws-us-west-2.vsco.co/04d5df/155672998/5ee7bf4f43a34b5b3c000002/720x960/vsco5ee7bf53b94de.jpg" alt="" /> */}
          </div>
          <div className="info">
            <div className="title">Contact</div>
            <p>
              <a href="mailto:info@ahmetaksungur.com">info@yourmail.com</a>
            </p>
            <p>
              <a href="tel:+905555554444">+90 555 444 1500</a>
            </p>
            <p></p>
          </div>
          <div className="cv-skills">
            <div className="head-title">Primary Skills</div>
            <div className="cv-skills-item">
              <div className="title">HTML</div>
              <div className="title">CSS </div>
              <div className="title">JAVASCRİPT</div>
              <div className="title">PHP</div>
            </div>
          </div>
          <div className="cv-skills">
            <div className="head-title">Secondary Skills</div>
            <div className="cv-skills-item">
              <div className="title">jQuery</div>
              <div className="title">AJAX</div>
              <div className="title">Bower</div>
              <div className="title">NPM</div>
              <div className="title">Grunt/Gulp</div>
              <div className="title">Git</div>
              <div className="title">Bootstrap</div>
              <div className="title">WordPress</div>
              <div className="title">SharePoint</div>
              <div className="title">PowerShell</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
