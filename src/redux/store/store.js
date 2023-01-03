import { configureStore } from '@reduxjs/toolkit'
import createCvSlice from '../slices/createCv.js'

export const store = configureStore({
  reducer: {
    createCvSlice
  },
})