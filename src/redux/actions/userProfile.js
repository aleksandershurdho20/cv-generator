import { experienceData, educationData } from "constants/cvData";

export const userProfileActions = {
  changeCvData: (state, action) => {
    const { key, value } = action.payload;
    state.userInfo = {
      ...state.userInfo,
      userProfileId: {
        ...state.userInfo.userProfileId,
        [key]: value,
      },
    };
  },
  changeCompanyProfile: (state, action) => {
    const { key, value } = action.payload;
    state.userInfo = {
      ...state.userInfo,
      companyProfileId: {
        ...state.userInfo.companyProfileId,
        [key]: value,
      },
    };
  },
  handleChangeExperienceFields: (state, action) => {
    const { index, name, value } = action.payload;
    let tempArr = state.userInfo.userProfileId.experience;
    tempArr[index][name] = value;

    state.userInfo.userProfileId.experience = tempArr;
  },
  addExperienceFields: (state) => {
    if (Array.isArray(state.userInfo.userProfileId.experience)) {
      state.userInfo.userProfileId.experience = [
        ...state.userInfo.userProfileId.experience,
        experienceData,
      ];
    } else {
      state.userInfo.userProfileId.experience = [experienceData];
    }

    // state.userInfo.userProfileId.experience = [
    //   ...state.userInfo.userProfileId.experience,
    //   experienceData,
    // ];
  },
  removeExperienceDataFields: (state, action) => {
    const tempArr = [...state.userInfo.userProfileId.experience];
    tempArr.splice(action.payload, 1);
    state.userInfo.userProfileId.experience = tempArr;
  },

  addSkillFields: (state) => {
    if (Array.isArray(state.userInfo.userProfileId.skills)) {
      state.userInfo.userProfileId.skills = [
        ...state.userInfo.userProfileId.skills,
        { title: "" },
      ];
    } else {
      state.userInfo.userProfileId.skills = [{ title: "" }];
    }
  },

  removeSkillFields: (state, action) => {
    const {index} = action.payload

    const tempArr = [...state.userInfo.userProfileId.skills];
    tempArr.splice(index, 1);
    state.userInfo.userProfileId.skills = tempArr;
  },

  handleChangeSkillsField: (state, action) => {
    const { index, name, value } = action.payload;
    let tempArr = state.userInfo.userProfileId.skills;
    tempArr[index][name] = value;
    state.userInfo.userProfileId.skills = tempArr;
  },

  addMoreLangauges: (state) => {
    if (Array.isArray(state.userInfo.userProfileId.languages)) {
      state.userInfo.userProfileId.languages = [
        ...state.userInfo.userProfileId.languages,
        { title: "", level: "" },
      ];
    } else {
      state.userInfo.userProfileId.languages = [{ title: "", level: "" }];
    }
  },
  handleChangeLanguageField: (state, action) => {
    const { index, name, value } = action.payload;
    let tempArr = state.userInfo.userProfileId.languages;
    tempArr[index][name] = value;
    state.userInfo.userProfileId.languages = tempArr;
  },

  removeLanguageFields: (state, action) => {
    const {index} = action.payload
    const tempArr = [...state.userInfo.userProfileId.languages];
    tempArr.splice(index, 1);
    state.userInfo.userProfileId.languages = tempArr;
  },

  addEducationFields: (state) => {
    if (Array.isArray(state.userInfo.userProfileId.education)) {
      state.userInfo.userProfileId.education = [
        ...state.userInfo.userProfileId.education,
        educationData,
      ];
    } else {
      state.userInfo.userProfileId.education = [educationData];
    }

    // state.userInfo.userProfileId.education = [
    //   ...state.userInfo.userProfileId.education,
    //   educationData,
    // ];
  },
  handleChangeEducationFields: (state, action) => {
    const { index, name, value } = action.payload;
    let tempArr = state.userInfo.userProfileId.education;
    tempArr[index][name] = value;
    state.userInfo.userProfileId.education = tempArr;
  },
  removeEducationFields: (state, action) => {
    const tempArr = [...state.userInfo.userProfileId.education];
    tempArr.splice(action.payload, 1);
    state.userInfo.userProfileId.education = tempArr;
  },
  handleImageFiles: (state, action) => {
    state.userInfo.userProfileId.image = action.payload;
  },
  removeImageFiles: (state, action) =>
    void (state.userInfo.userProfileId.image = ""),

    handleCompanyImageFiles: (state, action) => {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          companyProfileId: {
            ...state.userInfo.companyProfileId,
            image: action.payload,
          },
        },
      };
    },
    removeCompanyImageFiles: (state, action) => {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          companyProfileId: {
            ...state.userInfo.companyProfileId,
            image:""
          },
        },
      };
    },

    validateCompanyFields:(state,payload) =>{
      const company = payload.payload
      if(!company?.name){
        state.companyProfileErrors.name = "Emri nuk mund te jete bosh!";
        return;
      }
      else if (!company?.size){
        state.companyProfileErrors.size = "Madhesia nuk mund te jete bosh!";
        return;
      }
      else if (!company?.location){
        state.companyProfileErrors.location = "Vendodhja nuk mund te jete bosh!";
        return;
      }
      else if (!company?.industry){
        state.companyProfileErrors.industry = "Industria nuk mund te jete bosh!";
        return;
      }
    },

    resetCompanyFields : (state,payload) =>{
       state.companyProfileErrors[payload.payload] = ""
    }
    
};
