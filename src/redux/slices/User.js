import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'utils/api/api'
import { cvData, experienceData,educationData } from "constants/cvData";

// initialize userToken from local storage
const userToken = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null

const initialState = {
  loading: false,
  userInfo: {
    userProfileId:cvData

  },
  userToken,
  error: null,
  success: false,
}

export const getUserProfile = createAsyncThunk('auth/profile', async () => {
  const response = await api.get('profile')
  return response.data
})

// export const getUserProfile = createAsyncThunk(
//   'pokemon/fetchByName',
//   async (name, { rejectWithValue }) => {
//     const response = await api.get('profile')
//     const data = await response.data
//     if (response.status < 200 || response.status >= 300) {
//       return rejectWithValue(data)
//     }
//     return data
//   }
// )

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUser:(state,action) =>{
      // const obj = {
      //   ...action.payload.userData,
      //   profile:action.payload.profile
      // }
      // state.userInfo = obj
        state.loading = false
        state.userInfo = action.payload.userData
        state.userToken = action.payload.userToken
    },

    logUserOut:(state) =>{
      state = initialState
      localStorage.removeItem("token")
      window.location.reload()
    }
  },
    extraReducers: builder => {
      builder
        .addCase(getUserProfile.pending, (state, action) => {
          state=initialState
        })
        .addCase(getUserProfile.fulfilled, (state, action) => {
          state.loading = false
          state.userToken = action.payload.token 
          // const obj = {
          //   ...action.payload.userData,
          //   profile:action.payload.profile
          // }
          state.userInfo = action.payload.userData
        
        })
        .addCase(getUserProfile.rejected, (state, action) => {
          state.loading = true
          state.userInfo = null
          state.userToken = null
        })
      

    }
 
})

export const {authenticateUser,logUserOut} = userSlice.actions;
export const profileState = (state) => state.userSlice;

export default userSlice.reducer