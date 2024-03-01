import { createSlice } from '@reduxjs/toolkit'
import { login } from './action'
import { type AuthState } from '../../Models/ReduxType/authType'
import Cookies from 'js-cookie'

const initialState: AuthState = {
  isLoading: false,
  isError: false,
  token: '',
  isAuth: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = ''
      Cookies.remove('token')
      state.isLoading = false
      state.error = null
      state.isAuth = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.token = action.payload.token
        state.isAuth = true
        state.error = null
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = 'Invalid Credential'
      })
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
