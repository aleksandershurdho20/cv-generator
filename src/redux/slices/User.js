import { createSlice } from '@reduxjs/toolkit'

// initialize userToken from local storage
const userToken = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUser:(state,action) =>{
        state.loading = false
        state.userInfo = action.payload
        state.userToken = action.payload.userToken
    }
  },
 
})

export const {authenticateUser} = userSlice.actions;

export default userSlice.reducer