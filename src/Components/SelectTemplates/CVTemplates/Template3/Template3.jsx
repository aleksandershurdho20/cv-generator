import React from "react";
import "./Template3.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Template3(props) {
  return (
    <div className="grid-container">
      <div className="zone-1">
        <div className="toCenter">
          <img src={props.imageFiles} />

          {/* <div className="profile" /> */}
        </div>
        <div className="contact-box">
          <div className="title">
            <h2>Informacioni Personal</h2>
          </div>
          <div className="call">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <div className="text">{props.telefon}</div>
          </div>

          <div className="email">
            <FontAwesomeIcon icon={faEnvelope} />
            <div className="text">{props.adresa}</div>
          </div>
        </div>
        <div className="personal-box">
          <div className="title">
            <h2>Njohuri Gjuhesore</h2>
          </div>
          <div className="skill-1">
            {props.languageKnowledges.map((data, index) => (
              <div key={index}>
                <p>{data.gjuha}</p>
                <p>{data.niveli}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="hobbies-box">
          <div className="title">
            <h2>Hobbies</h2>
          </div>
          <div className="logo">
            <div className="logo-1">
              <i className="fas fa-gamepad" />
            </div>
            <div className="logo-2">
              <i className="fas fa-tv" />
            </div>
            <div className="logo-3">
              <i className="fas fa-camera" />
            </div>
            <div className="logo-4">
              <i className="fas fa-lightbulb" />
            </div>
          </div>
        </div> */}
      </div>
      <div className="zone-2">
        <div className="headTitle">
          <h1>
            {props.emer}
            <br />
            <b>{props.mbiemer}</b>
          </h1>
        </div>
        <div className="subTitle">
          <h1>{props.pozicioni}</h1>
          <h1></h1>
        </div>
        {/* <div className="group-1">
          <div className="title">
            <div className="box">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            deserunt excepturi numquam obcaecati doloribus ab quisquam sapiente
            quidem officiis aspernatur. A quae totam provident accusamus iure
            esse earum magnam adipisci, odit libero inventore laborum, rerum
            laudantium maxime corporis consequatur repellendus.
          </div>
        </div> */}
        <div className="group-2">
          <div className="title">
            <div className="box">
              <h2>Edukimi</h2>
            </div>
          </div>
          <div className="desc">
            {props.edukimi &&
              props.edukimi.map((data, index) => (
                <ul key={index}>
                  <li>
                    <div className="msg-1">{`${data.educationDataeFillimit} ${data.educationMuajiFillimit} - ${data.educationDataeMbarimit} ${data.educationMuajiMbarimit}`}</div>

                    <div className="msg-2">
                      {" "}
                      {data.diploma} {data.universiteti}
                    </div>
                  </li>
                </ul>
              ))}
          </div>
          {/* <div className="desc">
            <ul>
              <li>
                <div className="msg-1">2017-2018 | Lorem, ipsum</div>
                <div className="msg-2">Masterall School of Texas</div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="msg-1">2014-2017 | Lorem, ipsum</div>
                <div className="msg-2">Lorem, ipsum dolor.</div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="msg-1">2012-2014 | Lorem ipsum dolor sit</div>
                <div className="msg-2">Lorem ipsum dolor sit amet.</div>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="group-3">
          <div className="title">
            <div className="box">
              <h2>Eksperienca</h2>
            </div>
          </div>
          <div className="desc">
            {props.eksperienca &&
              props.eksperienca.map((data, index) => (
                <ul key={index}>
                  <li>
                    <div className="msg-1">{data.pozicioni}</div>
                    <div className="msg-2">
                      {`${data.muajiFillimit} ${data.dataEFillimi} - ${data.muajiMbarimit} ${data.dataEmbarimit} `}
                    </div>
                    <div className="msg-3">
                      <p>{data.kompania}</p>
                    </div>
                  </li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
