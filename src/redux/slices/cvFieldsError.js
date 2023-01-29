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
            if(!fields.emer){
                state.emer = "Emri nuk mund te jete bosh!"
                state.activeStep = 0
            }
            else if (!fields.mbiemer){
                state.mbiemer = "Mbiemri nuk mund te jete bosh!"
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
     
            else if (fields.eksperienca.find(el => el.dataEmbarimit < el.dataEFillimi)){
                state.dataEFillimi = "Muaji i fillimit nuk mund te jete me i madh se muaji i mbarimit!"
                state.activeStep = 1
            }
         
            else if (fields.eksperienca.find(el => !el.pozicioni)){
                state.pozicioni = "Pozicioni nuk mund te jete bosh!"
                state.activeStep = 1
            }
            else if (fields.eksperienca.find(el => !el.kompania)){
                state.kompania = "Kompania nuk mund te jete bosh!"
                state.activeStep = 1
            }
            
            else {
                state.activeStep= state.activeStep + 1

            }
        },
        resetFormFields:(state,action) =>{
            const {key}= action.payload
            state[key] = ""

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
