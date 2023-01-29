import { monthNames,years } from "utils/PdfGenerator/generateDate"


 export const educationData =  {
  diploma: "",
  universiteti: "",
  educationQyteti: "",
  educationDataeFillimit: "",
  educationDataeMbarimit: "",
  educationMuajiFillimit: "",
  educationMuajiMbarimit: "",
  educationPershkrimi: "",
}
 
export const experienceData = {
      kompania: "",
      dataEFillimi: years[0],
      muajiFillimit: monthNames[0],
      muajiMbarimit: monthNames[0],
      dataEmbarimit: years[0],
      pershkrimi: "",
  
}
export const cvData ={
    emer: "",
    mbiemer: "",
    email: "",
    telefon: "",
    adresa: "",
    qyteti: "",
    dataElindjes: "",
    vendiILindejs: "",
    Patenta: "",
    Gjinia: "",
    Kombesia: "",
    statusiMartesor: "",
    pozicioni: "",
    qytetiPuna: "",
    profili: "",
    image:"",
    eksperienca: [
        experienceData
    ],
    edukimi: [
        educationData
    ],
    njohuri:[
        {
            title:''
        }
    ],
    gjuhet:[
        {
            title:'',niveli:''
        }
    ]
    
  }


 