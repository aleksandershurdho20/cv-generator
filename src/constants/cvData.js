import { monthNames, years } from "utils/PdfGenerator/generateDate";

export const educationData = {
  diploma: "",
  university: "",
  city: "",
  start_date: years[0],
  end_date:  years[0],
  month_start_date:monthNames[0],
  month_end_date: monthNames[0],
  description: "",
};

export const experienceData = {
  position:"",
  company: "",
  start_date: years[0],
  month_start_date: monthNames[0],
  month_end_date: monthNames[0],
  end_date: years[0],
  description: "",
};
export const cvData = {
  name: "",
  last_name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  gender: "",
  Kombesia: "",
  statusiMartesor: "",
  profili: "",
  image: "",
  experience: [experienceData],
  education: [educationData],

  skills: [{ title: "" }],
  languages: [
    {
      title: "",
      level: "fillestare",
    },
  ],
};
