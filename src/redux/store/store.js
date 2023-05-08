import { configureStore,isRejectedWithValue } from '@reduxjs/toolkit'
import cvFieldsError from 'redux/slices/cvFieldsError.js'
import jobSlice from 'redux/slices/Jobs.js'
import createCvSlice from '../slices/createCv.js'
import User from 'redux/slices/User.js'


const mergeMiddleware = () => (next) => (action) => {
  console.log(action,'actio')
  // if(isRejectedWithValue(action) && action.payload.status == 401){
  // }
  return next(action)
}


export const store = configureStore({
  reducer: {
    createCvSlice,
    cvFieldsError,
    jobSlice,
    userSlice:User
  },
  // middleware:[mergeMiddleware]
})