import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "utils/api/api";
import { cvData, experienceData, educationData } from "constants/cvData";
import { userProfileActions } from "redux/actions/userProfile";

// initialize userToken from local storage
const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  userInfo: {
    userProfileId: cvData,
  },
  userToken,
  error: null,
  success: false,
  companyProfileErrors:{}
};

export const getUserProfile = createAsyncThunk("auth/profile", async () => {
  const response = await api.get("profile");
  return response.data;
});


const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    ...userProfileActions,
    authenticateUser: (state, action) => {
      // const obj = {
      //   ...action.payload.userData,
      //   profile:action.payload.profile
      // }
      // state.userInfo = obj
      state.loading = false;
      state.userInfo = action.payload.userData;
      state.userToken = action.payload.userToken;
    },

    logUserOut: (state) => {
      state = initialState;
      localStorage.removeItem("token");
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state, action) => {
        state = initialState;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userToken = action.payload.token;
        // const obj = {
        //   ...action.payload.userData,
        //   profile:action.payload.profile
        // }
        state.userInfo = action.payload.userData;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = true;
        state.userInfo = null;
        state.userToken = null;
      });
  },
});

export const {
  authenticateUser,
  logUserOut,
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
  removeImageFiles,
  changeCompanyProfile,
  handleCompanyImageFiles,
  removeCompanyImageFiles,
  validateCompanyFields,
  resetCompanyFields
} = userSlice.actions;
export const profileState = (state) => state.userSlice;

export default userSlice.reducer;