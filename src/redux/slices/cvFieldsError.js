import { createSlice,current  } from "@reduxjs/toolkit";
import { data } from "constants/cvErrorFields";

const initialState = { ...data,activeStep:0 };
export const cvFieldsError = createSlice({
    name: "cvFieldError",
    initialState,
    reducers: {
        validateFormFields : (state,action) =>{
            const {fields}=action.payload
            console.log(current(state));
            if(!fields.emer){
                state.errorName = "Emri nuk mund te jete bosh!"
                state.activeStep = 0
            }
            else if (!fields.mbiemer){
                state.errorSurname = "Mbiemri nuk mund te jete bosh!"
                state.activeStep = 0
            }
            else {
                state.activeStep= state.activeStep + 1

            }
        },
        resetFormFields:(state,action) =>{
            const x = Object.keys(current(state))
            let datas = {}
            console.log(x,'kokoko')

for (const property of x) {
    console.log(`${property}: ${x[property]}`);
    if(x[property] !== undefined){

        datas[x] = ""
    }
  }
  state = datas
  console.log(datas,state,'dsdsds')
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
