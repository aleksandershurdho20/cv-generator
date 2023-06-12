import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from 'utils/api/api'

const initialState ={
    loading:true,
    error:"",
    jobs:[]
}

export const getJobs = createAsyncThunk('jobs/getAllJobs', async () => {
    const response = await api.get('jobs')
    return response.data
  })

  export const getMatchedJobBySkills = createAsyncThunk('jobs/getMatchedJobs', async (id) => {
    const response = await api.get(`/jobs/user/${id}`)
    return response.data
  })

  export const getFilteredJobs = createAsyncThunk('jobs/searchJobs', async (params) => {
    const response = await api.get(`jobs/search?title=${params.title}&jobType=${params.jobType}&category=${params.category}`)
    return response.data
  })


  export const createJob = createAsyncThunk('jobs/createJob', async (params) => {
    const response = await api.post('job/create',params)
    return response.data
  })


  const jobSlice =createSlice({
    name:"jobs",
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
          .addCase(getJobs.pending, (state, action) => {
            state=initialState
          })
          .addCase(getJobs.fulfilled, (state, action) => {
            state.loading = false
             state.jobs = action.payload.jobs
          })
          .addCase(getJobs.rejected, (state, action) => {
            state.loading = true
             state.jobs = []
             state.error = action.payload
          })
          .addCase(getFilteredJobs.pending, (state, action) => {
            state=initialState
          })
          .addCase(getFilteredJobs.fulfilled, (state, action) => {
            state.loading = false
             state.jobs = action.payload.jobs
          })
          .addCase(getFilteredJobs.rejected, (state, action) => {
            state.loading = true
             state.jobs = []
             state.error = action.payload
          })

          
          .addCase(getMatchedJobBySkills.pending, (state, action) => {
            state=initialState
          })
          .addCase(getMatchedJobBySkills.fulfilled, (state, action) => {
            state.loading = false
             state.jobs = action.payload
          })
          .addCase(getMatchedJobBySkills.rejected, (state, action) => {
            state.loading = true
             state.jobs = []
             state.error = action.payload
          })

          .addCase(createJob.pending, (state, action) => {
            state.error = "Something went wrong!"
          })
          .addCase(createJob.fulfilled, (state, action) => {
            state.loading = false
            state.error = ""
             state.jobs.push(action.payload)
          })
          .addCase(createJob.rejected, (state, action) => {
            state.loading = true
             state.error = action.payload
          })

      }
  })

  export const jobsState = (state) => state.jobSlice;


  export default jobSlice.reducer

