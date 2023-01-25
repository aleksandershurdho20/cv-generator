import { configureStore } from '@reduxjs/toolkit'
import cvFieldsError from 'redux/slices/cvFieldsError.js'
import createCvSlice from '../slices/createCv.js'

export const store = configureStore({
  reducer: {
    createCvSlice,
    cvFieldsError
  },
})