import { createSlice } from "@reduxjs/toolkit";
import { data } from "constants/cvErrorFields";
import { validateEmail } from "helpers/validateEmail";

const initialState = { ...data, activeStep: 0 };

export const cvFieldsError = createSlice({
  name: "cvFieldError",
  initialState,
  reducers: {
    validateFormFields: (state, action) => {
      const { fields } = action.payload;
      console.log({fields})
      if (!fields?.name) {
        state.name = "Emri nuk mund te jete bosh!";
        state.activeStep = 0;
      } else if (!fields?.last_name) {
        state.last_name = "Mbiemri nuk mund te jete bosh!";
        state.activeStep = 0;
      } else if (!fields?.email) {
        state.email = "Emaili nuk mund te jete bosh!";
        state.activeStep = 0;
      } else if (!validateEmail(fields?.email)) {
        state.email = "Emaili nuk eshte ne formatin e duhur!";
        state.activeStep = 0;
      } else if (
        fields?.experience &&
        fields.experience.find((el) => parseInt(el.start_date) > parseInt(el.end_date)) &&
        state.activeStep === 1
      ) {
        const validateEducationDate = fields.experience.filter(
          (el) => parseInt(el.start_date) > parseInt(el.end_date)
        );
        validateEducationDate.forEach((el) => {
          const result = fields.experience.findIndex((item) => item === el);

          state.start_date = {
            ...state.start_date,
            [result]: "Muaji i fillimit nuk mund te jete me i madh se muaji i mbarimit!"
          };
        });
      } else if (
        fields?.experience &&
        fields.experience.find((el) => !el.position) &&
        state.activeStep === 1
      ) {
        const validatePostionField = fields.experience.filter((el) => !el.position);
        validatePostionField.forEach((el) => {
          const result = fields.experience.findIndex((item) => item === el);
          state.position = {
            ...state.position,
            [result]: "Pozicioni nuk mund te jete bosh!"
          };
        });

      } else if (
        fields?.experience &&
        fields.experience.find((el) => !el.company) &&
        state.activeStep === 1
      ) {
        const validateCompanyFields = fields.experience.filter((el) => !el.company);
        validateCompanyFields.forEach((el) => {
          const result = fields.experience.findIndex((item) => item === el);
          // state.company[result] = "Kompania nuk mund te jete bosh!";
          state.company = {
            ...state.company,
            [result]: "Kompania nuk mund te jete bosh!"
          };
        });
      } else if (
        fields?.education &&
        fields.education.find((el) => !el.diploma) &&
        state.activeStep === 1
      ) {
        const validateUniversityField = fields.education.filter((el) => !el.diploma);
        validateUniversityField.forEach((el) => {
          const result = fields.education.findIndex((item) => item === el);
          state.diploma = {
            ...state.diploma,
            [result]: "Diploma nuk mund te jete bosh!"
          };
        });
      } else if (
        fields?.education &&
        fields.education.find((el) => !el.university) &&
        state.activeStep === 1
      ) {
        const validateUniversityField = fields.education.filter((el) => !el.university);
        validateUniversityField.forEach((el) => {
          const result = fields.education.findIndex((item) => item === el);
          state.university = {
            ...state.university,
            [result]: "Universiteti nuk mund te jete bosh!"
          };        });
      } else if (
        fields?.education &&
        fields.education.find((el) => parseInt(el.start_date) > parseInt(el.end_date)) &&
        state.activeStep === 1
      ) {
        const validateEducationDate = fields.education.filter(
          (el) => parseInt(el.start_date) > parseInt(el.end_date)
        );
        validateEducationDate.forEach((el) => {
          const result = fields.education.findIndex((item) => item === el);



                 state.edukimi_start_date = {
            ...state.edukimi_start_date,
            [result]: "Muaji i fillimit nuk mund te jete me i madh se muaji i mbarimit!"
          };        
        });
      } else if (
        fields?.languages &&
        fields.languages.filter((el) => !el.title).length > 0 &&
        state.activeStep === 1
      ) {
        const emptyLanguageFields = fields.languages.filter((el) => !el.title);
        emptyLanguageFields.forEach((el) => {
          const result = fields.languages.findIndex((item) => item === el);

          state.language = {
            ...state.language,
            [result]: "Titulli nuk mund të jetë bosh!"
          };  
        });
      } else if (
        fields?.skills &&
        fields.skills.filter((el) => !el.title).length > 0 &&
        state.activeStep === 1
      ) {
        const emptySkillFields = fields.skills.filter((el) => !el.title);
        emptySkillFields.forEach((el) => {
          const result = fields.skills.findIndex((item) => item === el);

          
          state.skill = {
            ...state.skill,
            [result]: "Titulli nuk mund të jetë bosh!"
          };  
        });
      } else {
        if(state.activeStep !== 1){

          state.activeStep = state.activeStep + 1;
        }
        // state.activeStep = state.activeStep + 1;
      }
    },
    resetFormFields: (state, action) => {
      const { key, params } = action.payload;
      if (params) {
        delete state[params.key][params.index];
      } else {
        state[key] = "";
      }
    },
    goToPreviousStep: (state) => {
      state.activeStep = state.activeStep - 1;
    },
  },
});

export const {
  validateFormFields,
  resetFormFields,
  goToPreviousStep,
} = cvFieldsError.actions;

export const cvFieldsState = (state) => state.cvFieldsError;

export default cvFieldsError.reducer;