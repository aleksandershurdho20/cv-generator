import { configureStore } from '@reduxjs/toolkit'
import cvFieldsError from 'redux/slices/cvFieldsError.js'
import jobSlice from 'redux/slices/Jobs.js'
import createCvSlice from '../slices/createCv.js'
import User from 'redux/slices/User.js'
export const store = configureStore({
  reducer: {
    createCvSlice,
    cvFieldsError,
    jobSlice,
    userSlice:User
  },
})