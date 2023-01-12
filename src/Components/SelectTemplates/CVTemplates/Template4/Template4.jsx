import React from "react";
import "./Template4.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faBriefcase,
  faPhone,
  faEnvelope,
  faAlignCenter,
  faGlobe,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import {useSelector } from "react-redux";
import { cvDataState} from "../../../../redux/slices/createCv";
export default function Template4(props) {
  const state = useSelector(cvDataState)

  return (
    <div className="two-column resume">
      <section className="resume__section resume__header">
        <div className="resume__content">
          <h1>{state.emer + "" + state.mbiemer}</h1>
          <div className="info-item">
            <span className="info-label">
              <FontAwesomeIcon className="i" icon={faLocationArrow} />
            </span>
            <span className="info-text">{state.adresa}</span>
          </div>
          <div className="info-item">
            <span className="info-label">
              <FontAwesomeIcon className="i" icon={faEnvelope} />
            </span>
            <span className="info-text">{state.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">
              <FontAwesomeIcon className="i" icon={faPhone} />
            </span>
            <span className="info-text">{state.telefon}</span>
          </div>
        </div>
      </section>
      <div className="resume__columns">
        <div className="resume__main">
          <section className="resume__section resume__summary">
            <div className="resume__content">
              <div className="resume__section-title">
                {/* <i className="fa fa-pencil-square-o" /> */}
                {/* <FontAwesomeIcon className="i" icon={faPencilAlt} /> */}

                {/* <h2>Professional Summary</h2> */}
              </div>
              {/* <div className="other">
                <div className="other-info">
                  <p>
                    PHP &amp; JavaScript developer + Devops Enthusiast with a
                    decade of success leading teams in delivering appropriate
                    technology solutions for desktop and mobile products.
                  </p>
                  <p>
                    Comprehensive knowledge of enterprise architecture, agile
                    methodologies, remote work, cloud services and web-based
                    applications.
                  </p>
                </div>
              </div> */}
            </div>
          </section>
          <section className="resume__section resume__experience">
            <div className="resume__content">
              <div className="resume__section-title">
                <FontAwesomeIcon className="i" icon={faBriefcase} />

                <h2>Eksperienca</h2>
              </div>
              <div className="xp-item">
                <div className="xp-job">
                  {state.eksperienca &&
                    state.eksperienca.map((data, index) => (
                      <React.Fragment key={index}>
                        <span> {data.pozicioni}</span>
                        <span>@ {data.kompania}</span>
                        <br />
                        <div className="xp-date">{`${data.muajiFillimit} ${data.dataEFillimi} - ${data.muajiMbarimit} ${data.dataEmbarimit} `}</div>
                        <div className="xp-detail">{data.pershkrimi}</div>
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="resume__side">
          <section className="resume__section resume__skills">
            <div className="resume__content">
              <div className="resume__section-title">
                <FontAwesomeIcon className="i" icon={faAlignCenter} />

                <h2>Njohuri Profesionale</h2>
              </div>
              <div className="resume__text">
                <div className="extra">
                  <div className="extra-info">
                    {state.njohuri &&
                      state.njohuri.map((data, index) => (
                        <div key={index}>{data.title}</div>
                      ))}
                  </div>
                  {/* <div className="extra-details">
                    <div
                      className="extra-details__progress"
                      style={{ width: "90%" }}
                    />
                  </div> */}
                </div>
              </div>
              {/* <div className="extra">
                  <div className="extra-info">
                    Operating Systems
                    <br />
                    <small>
                      <i className="fa fa-linux" /> GNU/Linux ·
                      <i className="fa fa-apple" /> Mac OS ·
                      <i className="fa fa-windows" /> Windows
                    </small>
                  </div>
                  <div className="extra-details">
                    <div
                      className="extra-details__progress"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div> */}
            </div>
          </section>
          <section className="resume__section resume__languages">
            <div className="resume__content">
              <div className="resume__section-title">
                <FontAwesomeIcon className="i" icon={faGlobe} />

                <h2>Njohuri Gjuhesore</h2>
              </div>
              <div className="extra">
                <div className="extra-info">
                  {state.gjuhet.map((data, index) => (
                    <div key={index}>
                      <p>{data.title}</p>
                      <p>{data.niveli}</p>
                    </div>
                  ))}{" "}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
