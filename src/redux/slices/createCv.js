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
            let tempArr = state.experience;
            tempArr[index][name] = value;

            state.experience = tempArr;
        },
        addExperienceFields: (state) => {
            state.experience = [...state.eksperienca, experienceData];
        },
        removeExperienceDataFields: (state, action) => {
            const tempArr = [...state.experience];
            tempArr.splice(action.payload, 1);
            state.experience = tempArr;
        },

        addSkillFields: (state) => {
            state.skills = [...state.skills, { title: "" }];
        },

        removeSkillFields: (state, action) => {
            const tempArr = [...state.skills];
            tempArr.splice(action.payload, 1);
            state.skills = tempArr;
        },

        handleChangeSkillsField: (state, action) => {
            const { index, name, value } = action.payload;
            let tempArr = state.skills;
            tempArr[index][name] = value;
            state.skills = tempArr;
        },

        addMoreLangauges: (state) => {
            state.languages = [...state.languages, { title: "", level: "" }];
        },
        handleChangeLanguageField: (state, action) => {
            const { index, name, value } = action.payload;
            let tempArr = state.languages;
            tempArr[index][name] = value;
            state.languages = tempArr;
        },

        removeLanguageFields: (state, action) => {
            const tempArr = [...state.languages];
            tempArr.splice(action.payload, 1);
            state.languages = tempArr;
        },

        addEducationFields:(state) =>{
          state.education = [...state.education,educationData]
        },
        handleChangeEducationFields: (state, action) => {
          const { index, name, value } = action.payload;
          let tempArr = state.education;
          tempArr[index][name] = value;
          state.education = tempArr;
      },
      removeEducationFields: (state, action) => {
        const tempArr = [...state.education];
        tempArr.splice(action.payload, 1);
        state.education = tempArr;
    },
    handleImageFiles:(state,action) =>{
        state.image=action.payload
    },
    removeImageFiles: (state, action) => void(state.image = "")

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
