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
 
        </div>
      )}
   
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
