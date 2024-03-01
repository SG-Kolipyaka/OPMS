import { createSlice } from '@reduxjs/toolkit'
import { type InitialProjectState } from '../../Models/ReduxType/projectType'
import {
  addProjects,
  getCharts,
  getCount,
  getProjects,
  updateProjects,
  updateAllProjects
} from './action'

const initialState: InitialProjectState = {
  isLoading: false,
  isError: false,
  projects: [],
  count: {},
  chart: [],
  totalCount: 0,
  totalPages: 0,
  errorMessage: ''
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addProjects.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(addProjects.fulfilled, (state) => {
        state.isLoading = false
        state.isError = false
      })
      .addCase(addProjects.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
      .addCase(updateProjects.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(updateProjects.fulfilled, (state) => {
        state.isLoading = false
        state.isError = false
      })
      .addCase(updateProjects.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
      .addCase(getProjects.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.projects = action.payload.projects
        state.totalPages = action.payload.totalPages
        state.totalCount = action.payload.totalCount
      })
      .addCase(getProjects.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })

      .addCase(getCount.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })

      .addCase(getCount.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.count = action.payload.count
      })
      .addCase(getCount.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })

      .addCase(getCharts.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getCharts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.chart = action.payload.chart
      })
      .addCase(getCharts.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
      .addCase(updateAllProjects.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(updateAllProjects.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.errorMessage = action.payload.errorMessage
        alert(state.errorMessage)
      })
      .addCase(updateAllProjects.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  }
})

export default projectSlice.reducer
