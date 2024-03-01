import { configureStore } from '@reduxjs/toolkit'
import authSlice from './AuthReducer/authSlice'
import projectSlice from './ProjectReducer/projectSlice'

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    projectReducer: projectSlice
  }
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
