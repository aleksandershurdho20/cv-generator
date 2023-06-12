import { createSlice,current  } from "@reduxjs/toolkit";
import { data } from "constants/cvErrorFields";
import { validateEmail } from "helpers/validateEmail";
const initialState = { ...data,activeStep:0 };
export const cvFieldsError = createSlice({
    name: "cvFieldError",
    initialState,
    reducers: {
        validateFormFields : (state,action) =>{
            const {fields}=action.payload
            console.log(current(state));
            if(!fields.name){
                state.name = "Emri nuk mund te jete bosh!"
                state.activeStep = 0
            }
            else if (!fields.last_name){
                state.last_name = "Mbiemri nuk mund te jete bosh!"
                state.activeStep = 0
            }
            else if(!fields.email){
                state.email =" Emaili nuk mund te jete bosh!"
                state.activeStep = 0

            }
            else if (!validateEmail(fields.email)){
                state.email =" Emaili nuk eshte ne formatin e duhur!"
                state.activeStep = 0
            }
             else if (fields.experience.find(el => parseInt(el.start_date )>  parseInt(el.end_date) ) && state.activeStep === 1){
                state.start_date = "Muaji i fillimit nuk mund te jete me i madh se muaji i mbarimit!"
                state.activeStep = 1
            }
         
            else if (fields.experience.find(el => !el.position)  && state.activeStep === 1){
                state.position = "Pozicioni nuk mund te jete bosh!"
                state.activeStep = 1
            }
            else if (fields.experience.find(el => !el.company)  && state.activeStep === 1){
                state.company = "Kompania nuk mund te jete bosh!"
                state.activeStep = 1
            }
            else if (fields.education.find(el => !el.diploma)  && state.activeStep === 1){
                state.diploma = "Diploma nuk mund te jete bosh!"
                state.activeStep = 1
            }
            else if (fields.education.find(el => !el.university)  && state.activeStep === 1){
                state.university = "Universiteti nuk mund te jete bosh!"
                state.activeStep = 1
            }
            else if (fields.education.find(el => parseInt(el.start_date )>  parseInt(el.end_date) ) && state.activeStep === 1){
                state.start_date = "Muaji i fillimit nuk mund te jete me i madh se muaji i mbarimit!"
                state.activeStep = 1
            }
            else if (fields.languages.filter(el => !el.title)  && state.activeStep === 1){
                const emptyLanguageFields = fields.languages.filter(el => !el.title);
                emptyLanguageFields.forEach((el, index) => {
                    const a = fields.languages.findIndex(el => !el.title);
                  state.language = {
                    ...state.language,
                    [a]: "Titulli nuk mund të jetë bosh!"
                  };
                });
                state.activeStep = 1
            }
             if (fields.skills.filter(el => !el.title) && state.activeStep === 1 ){
                const emptySkillFields = fields.skills.filter(el => !el.title);
                emptySkillFields.forEach((el, index) => {

                    const a = fields.skills.findIndex(el => !el.title);
                  state.skill = {
                    ...state.skill,
                    [a]: "Titulli nuk mund të jetë bosh!"
                  };
                });
                // state.activeStep = 1
            }
            
            else {


                if(state.activeStep !== 1){

                    state.activeStep= state.activeStep + 1
                }

            }

        },
        resetFormFields:(state,action) =>{
            const {key,params}= action.payload

            if(params){
                state[params.key][params.index] = ""
            }
            else{
                state[key] = ""

            }
        },

        goToPreviousStep:(state) => {
            state.activeStep= state.activeStep -1 
        }



         },
});

export const {
    validateFormFields,
    resetFormFields,
    goToPreviousStep
    
} = cvFieldsError.actions;

export const cvFieldsState = (state) => state.cvFieldsError;

export default cvFieldsError.reducer;
