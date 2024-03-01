import { createAsyncThunk } from '@reduxjs/toolkit'
import { type UserData, type ApiResponse } from '../../Models/ReduxType/authType'
import axios from 'axios'
import Cookies from 'js-cookie'

export const login = createAsyncThunk<ApiResponse, UserData>(
  'auth/login',
  async (userData: UserData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        'https://localhost:7185/api/login?api-version=1',
        userData
      )
      if (res.data.token !== undefined && res.data.token !== null && res.data.token !== '') {
        Cookies.set('token', res.data.token, { expires: 1 })
        return res.data.token
      } else {
        return rejectWithValue('Invalid Credential')
      }
    } catch (error: any) {
      return error.message
    }
  }
)
