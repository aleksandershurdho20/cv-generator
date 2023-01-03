import { createSlice } from '@reduxjs/toolkit'
import { cvData, experienceData } from 'constants/cvData'



const initialState = { ...cvData }
export const createCvSlice = createSlice({
  name: 'createCv',
  initialState,
  reducers: {

    changeCvData:(state,action) =>{
      const {key,value}= action.payload
      return {
        ...state,
        [key]:value
      }
    },
    handleChangeExperienceFields:(state,action) =>{
       const {index,name,value} = action.payload
      let tempArr = state.eksperienca;
      tempArr[index][name] = value;

      state.eksperienca = tempArr
    
    },

    addExperienceFields:(state) =>{
      state.eksperienca = [...state.eksperienca,experienceData]
    },
    removeExperienceFields :(state,action) =>{

      const tempArr = [...state.eksperienca];
      tempArr.splice(action.payload, 1);
      state.eksperienca = tempArr


    }
 
  },
})

export const { changeCvData, handleChangeExperienceFields, addExperienceFields,removeExperienceFields } = createCvSlice.actions

export const cvDataState = (state) => state.createCvSlice


export default createCvSlice.reducer