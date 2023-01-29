import { createSlice } from "@reduxjs/toolkit";
import { cvData, experienceData,educationData } from "constants/cvData";

const initialState = { ...cvData };
export const createCvSlice = createSlice({
    name: "createCv",
    initialState,
    reducers: {
        changeCvData: (state, action) => {
            const { key, value } = action.payload;
            return {
                ...state,
                [key]: value,
            };
        },
        handleChangeExperienceFields: (state, action) => {
            const { index, name, value } = action.payload;
            let tempArr = state.eksperienca;
            tempArr[index][name] = value;

            state.eksperienca = tempArr;
        },
        addExperienceFields: (state) => {
            state.eksperienca = [...state.eksperienca, experienceData];
        },
        removeExperienceDataFields: (state, action) => {
            const tempArr = [...state.eksperienca];
            tempArr.splice(action.payload, 1);
            state.eksperienca = tempArr;
        },

        addSkillFields: (state) => {
            state.njohuri = [...state.njohuri, { title: "" }];
        },

        removeSkillFields: (state, action) => {
            const tempArr = [...state.njohuri];
            tempArr.splice(action.payload, 1);
            state.njohuri = tempArr;
        },

        handleChangeSkillsField: (state, action) => {
            const { index, name, value } = action.payload;
            let tempArr = state.njohuri;
            tempArr[index][name] = value;
            state.njohuri = tempArr;
        },

        addMoreLangauges: (state) => {
            state.gjuhet = [...state.gjuhet, { title: "", niveli: "" }];
        },
        handleChangeLanguageField: (state, action) => {
            const { index, name, value } = action.payload;
            let tempArr = state.gjuhet;
            tempArr[index][name] = value;
            state.gjuhet = tempArr;
        },

        removeLanguageFields: (state, action) => {
            const tempArr = [...state.gjuhet];
            tempArr.splice(action.payload, 1);
            state.gjuhet = tempArr;
        },

        addEducationFields:(state) =>{
          state.edukimi = [...state.edukimi,educationData]
        },
        handleChangeEducationFields: (state, action) => {
          const { index, name, value } = action.payload;
          let tempArr = state.edukimi;
          tempArr[index][name] = value;
          state.edukimi = tempArr;
      },
      removeEducationFields: (state, action) => {
        const tempArr = [...state.edukimi];
        tempArr.splice(action.payload, 1);
        state.edukimi = tempArr;
    },
    handleImageFiles:(state,action) =>{
        state.image=action.payload
    },
    removeImageFiles:(state) =>state.image=null
    },
});

export const {
    changeCvData,
    handleChangeExperienceFields,
    addExperienceFields,
    removeExperienceDataFields,
    addSkillFields,
    removeSkillFields,
    handleChangeSkillsField,
    addMoreLangauges,
    handleChangeLanguageField,
    removeLanguageFields,
    addEducationFields,
    handleChangeEducationFields,
    removeEducationFields,
    handleImageFiles,
    removeImageFiles
    
} = createCvSlice.actions;

export const cvDataState = (state) => state.createCvSlice;

export default createCvSlice.reducer;
