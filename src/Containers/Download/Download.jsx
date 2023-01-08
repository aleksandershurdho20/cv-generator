import React from "react";
import TemplateTwo from "../../Components/SelectTemplates/CVTemplates/Template2/TemplateTwo";
import CV from "react-cv";
import Template3 from "../../Components/SelectTemplates/CVTemplates/Template3/Template3";
import TemplateFour from "../../Components/SelectTemplates/CVTemplates/Template4/Template4";
import {useSelector } from "react-redux";
import { cvDataState} from "../../redux/slices/createCv";
export default function Download(props) {
  const state = useSelector(cvDataState)

  return (
    <div style={{ display: "inline" }}>
      {props.selectTemplate === 2 && (
        <div ref={props.bodyRef}>
          <TemplateTwo {...props} />
        </div>
      )}
      {props.selectTemplate === 0 && (
        <div ref={props.bodyRef}>
          <CV
            personalData={{
              name: state.emer,
              title: state.pozicioni,
              image: props.imageFiles,
              contacts: [
                { type: "email", value: state.email },
                { type: "phone", value: state.telefon },
                { type: "location", value: state.qyteti },
              ],
            }}
            sections={[
              {
                type: "experiences-list",
                title: "Eksperienca",
                icon: "archive",
                // items: [
                //   {
                //     title: props.pozicioni,
                //     company: props.kompania,
                //     description: props.pershkrimi,
                //     datesBetween: `${props.muajiFillimit} ${props.dataEFillimi} - ${props.muajiMbarimit} ${props.dataEmbarimit} `,
                //   },
                // ],

                items: state.eksperienca.map((data) => {
                  return {
                    title: data.pozicioni,
                    company: data.kompania,
                    description: data.pershkrimi,
                    datesBetween: `${data.muajiFillimit} ${data.dataEFillimi} - ${data.muajiMbarimit} ${data.dataEmbarimit} `,
                  };
                }),
              },
              {
                type: "common-list",
                title: "Edukimi",
                icon: "graduation",
                // items: [
                //   {
                //     title: props.diploma,
                //     authority: props.universiteti,
                //     rightSide: `${props.educationDataeFillimit} ${props.educationMuajiFillimit} - ${props.educationDataeMbarimit} ${props.educationMuajiMbarimit}`,
                //   },
                // ],

                items: state.edukimi.map((data) => {
                  return {
                    title: data.diploma,
                    authority: data.universiteti,
                    rightSide: `${data.educationDataeFillimit} ${data.educationMuajiFillimit} - ${data.educationDataeMbarimit} ${data.educationMuajiMbarimit}`,
                  };
                }),
              },
              {
                type: "common-list",
                title: "Njohuri Gjuhesore",
                icon: "language",
                items: state.gjuhet.map((data) => {
                  return {
                    authority: data.title,
                    authorityMeta: data.niveli,
                  };
                }),
              },
              {
                type: "tag-list",
                title: "Aftesi Profesionale",
                icon: "rocket",
                items: state.njohuri.map((skill) => skill.title),
              },
            ]}
            branding={true} // or false to hide it.
          />
          {/* <TemplateOne {...props} skills={props.skills} />
      {/* <TemplateTwo {...props} /> */}
        </div>
      )}
      {/* <Resume
            name={props.emer + "" + props.mbiemer}
            firstName={props.emer}
            tel={props.telefon}
            email={props.email}
            address="New York, NY"
            profileImage={props.imageFiles}
            profession="Business magnate, playboy and scientist"
            skills={props.skills.map((skill) => {
              return {
                name: skill.njohuri,
              };
            })}
            experiences={props.eksperienca.map((data) => {
              return {
                title: data.pozicioni,
                company: data.kompania,
                description: (
                  <div>
                    <p>{data.pershkrimi}</p>
                  </div>
                ),
                period: `${data.muajiFillimit} ${data.dataEFillimi} - ${data.muajiMbarimit} ${data.dataEmbarimit} `,
              };
            })}
            education={[
              {
                school: "MIT",
                department: "Electrical engineering",
                degree: "Master's degree",
                period: "1970-1971",
              },
            ]}
          /> */}
      {props.selectTemplate === 3 && (
        <div ref={props.bodyRef}>
          <Template3 {...props} />
        </div>
      )}
      {props.selectTemplate === 1 && (
        <div ref={props.bodyRef}>
          <TemplateFour {...props} />
        </div>
      )}
    </div>
  );
}
