import React from "react";
import "./TemplateTwo.scss";
export default function TemplateTwo(props) {
  return (
    <div className="resume">
      <div className="resume_left">
        <div className="resume_profile">
          <img src={props.imageFiles} />
        </div>
        <div className="resume_content">
          <div className="resume_item resume_info">
            <div className="title">
              <p className="bold">{props.emer}</p>
              <p className="regular">{props.pozicioni}</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fas fa-map-signs"></i>
                </div>
                <div className="data">{props.adresa}</div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="data">{props.telefon}</div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="data">{props.email}</div>
              </li>
              {/* <li>
                <div className="icon">
                  <i className="fab fa-weebly"></i>
                </div>
                <div className="data">www.stephen.com</div>
              </li> */}
            </ul>
          </div>
          <div className="resume_item resume_skills">
            <div className="title">
              <p className="bold">Njohuri Profesionale</p>
            </div>
            {props.skills &&
              props.skills.map((data, index) => (
                <ul key={index}>
                  <li>
                    <div className="skill_name">{data.njohuri}</div>
                    <div className="skill_progress">
                      <span style={{ width: "80%" }}></span>
                    </div>
                    <div className="skill_per">80%</div>
                  </li>{" "}
                </ul>
              ))}
            {/* <ul>
              <li>
                <div className="skill_name">HTML</div>
                <div className="skill_progress">
                  <span style={{ width: "80%" }}></span>
                </div>
                <div className="skill_per">80%</div>
              </li>
              <li>
                <div className="skill_name">CSS</div>
                <div className="skill_progress">
                  <span style={{ width: "70%" }}></span>
                </div>
                <div className="skill_per">70%</div>
              </li>
              <li>
                <div className="skill_name">SASS</div>
                <div className="skill_progress">
                  <span style={{ width: "90%" }}></span>
                </div>
                <div className="skill_per">90%</div>
              </li>
              <li>
                <div className="skill_name">JS</div>
                <div className="skill_progress">
                  <span style={{ width: "60%" }}></span>
                </div>
                <div className="skill_per">60%</div>
              </li>
              <li>
                <div className="skill_name">JQUERY</div>
                <div className="skill_progress">
                  <span style={{ width: "88%" }}></span>
                </div>
                <div className="skill_per">88%</div>
              </li>
            </ul> */}
          </div>
          {/* <div className="resume_item resume_social">
            <div className="title">
              <p className="bold">Social</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fab fa-facebook-square"></i>
                </div>
                <div className="data">
                  <p className="semi-bold">Facebook</p>
                  <p>Stephen@facebook</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-twitter-square"></i>
                </div>
                <div className="data">
                  <p className="semi-bold">Twitter</p>
                  <p>Stephen@twitter</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-youtube"></i>
                </div>
                <div className="data">
                  <p className="semi-bold">Youtube</p>
                  <p>Stephen@youtube</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="data">
                  <p className="semi-bold">Linkedin</p>
                  <p>Stephen@linkedin</p>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="resume_right">
        <div className="resume_item resume_about">
          <div className="title">
            <p className="bold">Njohuri Gjuhesore</p>
          </div>
          <p>
            {props.languageKnowledges.map((data, index) => (
              <div key={index}>
                <p>{data.gjuha}</p>
                <p>{data.niveli}</p>
              </div>
            ))}
          </p>
        </div>
        <div className="resume_item resume_work">
          <div className="title">
            <p className="bold">Eksperienca</p>
          </div>
          {props.eksperienca &&
            props.eksperienca.map((data, index) => (
              <ul key={index}>
                <li>
                  <div className="date">{`${data.muajiFillimit} ${data.dataEFillimi} - ${data.muajiMbarimit} ${data.dataEmbarimit} `}</div>
                  <div className="info">
                    <p className="semi-bold">{data.pozicioni}</p>
                    <p>{data.kompania}</p>
                  </div>
                </li>
              </ul>
            ))}
        </div>
        <div className="resume_item resume_education">
          <div className="title">
            <p className="bold">Edukimi</p>
          </div>
          {props.edukimi &&
            props.edukimi.map((data, index) => (
              <ul key={index}>
                <li>
                  <div className="date">{`${data.educationDataeFillimit} ${data.educationMuajiFillimit} - ${data.educationDataeMbarimit} ${data.educationMuajiMbarimit}`}</div>
                  <div className="info">
                    <p className="semi-bold">
                      {data.diploma} ({data.universiteti})
                    </p>
                    <p>{data.educationPershkrimi}</p>
                  </div>
                </li>
              </ul>
            ))}
        </div>
        {/* <div className="resume_item resume_hobby">
          <div className="title">
            <p className="bold">Hobby</p>
          </div>
          <ul>
            <li>
              <i className="fas fa-book"></i>
            </li>
            <li>
              <i className="fas fa-gamepad"></i>
            </li>
            <li>
              <i className="fas fa-music"></i>
            </li>
            <li>
              <i className="fab fa-pagelines"></i>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
