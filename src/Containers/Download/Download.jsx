import React from "react";
import TemplateTwo from "../../Components/SelectTemplates/CVTemplates/Template2/TemplateTwo";
import CV from "react-cv";

export default function Download(props) {
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
              name: props.emer,
              title: props.pozicioni,
              image: props.imageFiles,
              contacts: [
                { type: "email", value: props.email },
                { type: "phone", value: props.telefon },
                { type: "location", value: props.qyteti },
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

                items: props.eksperienca.map((data) => {
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

                items: props.edukimi.map((data) => {
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
                items: props.languageKnowledges.map((data) => {
                  return {
                    authority: data.gjuha,
                    authorityMeta: data.niveli,
                  };
                }),
              },
              {
                type: "tag-list",
                title: "Aftesi Profesionale",
                icon: "rocket",
                items: props.skills.map((skill) => skill.njohuri),
              },
            ]}
            branding={true} // or false to hide it.
          />
          {/* <TemplateOne {...props} skills={props.skills} />
      {/* <TemplateTwo {...props} /> */}
        </div>
      )}
    </div>
  );
}
