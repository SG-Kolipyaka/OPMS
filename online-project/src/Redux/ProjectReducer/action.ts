import axios from 'axios'
import { type UpdateStatusR, type ParamsData, type ProjectData } from '../../Models/ReduxType/projectType'
import Cookies from 'js-cookie'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const addProjects = createAsyncThunk(
  'add/projects',
  async (userData: ProjectData) => {
    try {
      const tokenCookie = Cookies.get('token')
      const config = {
        headers: {
          Authorization: `Bearer ${tokenCookie}`
        }
      }
      const res = await axios.post(
        'https://localhost:7185/projects/create?api-version=1',
        userData, config
      )
      return res
    } catch (error: any) {
      return error.message
    }
  }
)

export const updateProjects = createAsyncThunk(
  'update/projects',
  async (userData: UpdateStatusR) => {
    try {
      const tokenCookie = Cookies.get('token')
      const config = {
        headers: {
          Authorization: `Bearer ${tokenCookie}`
        }
      }
      const obj = userData
      const userid = userData.userinfo
      const response = await axios.patch(
        `https://localhost:7185/projects/update/${userid.id}?api-version=1`,
        obj.data, config
      )
      const payload = { ...response.data }
      delete payload.headers

      return payload
    } catch (error: any) {
      return error.message
    }
  }
)

export const getProjects = createAsyncThunk(
  'get/projects',
  async (userData: { paramsData: ParamsData, versioning: number }) => {
    try {
      const res = await axios.get(`https://localhost:7185/projects?api-version=${userData.versioning}`, {
        params: userData.paramsData
      })
      const totalPages = res.data.data.totalPages
      const totalCount = res.data.data.allCount
      return { projects: res.data.data.data, totalPages, totalCount }
    } catch (error: any) {
      return error.message
    }
  }
)

export const getCount = createAsyncThunk('get/count', async () => {
  try {
    const tokenCookie = Cookies.get('token')
    const config = {
      headers: {
        Authorization: `Bearer ${tokenCookie}`
      }
    }
    const res = await axios.get('https://localhost:7185/projects/count?api-version=1', config)
    return { count: res.data.data }
  } catch (error: any) {
    return error.message
  }
})

export const getCharts = createAsyncThunk('get/charts', async () => {
  try {
    const tokenCookie = Cookies.get('token')
    const config = {
      headers: {
        Authorization: `Bearer ${tokenCookie}`
      }
    }
    const res = await axios.get('https://localhost:7185/projects/chart?api-version=1', config)
    return { chart: res.data.data }
  } catch (error: any) {
    return error.message
  }
})

export const updateAllProjects = createAsyncThunk(
  'updates/projects',
  async (userData: UpdateStatusR) => {
    try {
      const tokenCookie = Cookies.get('token')
      const config = {
        headers: {
          Authorization: `Bearer ${tokenCookie}`
        }
      }
      const obj = userData.data
      console.log(userData.userinfo.id)
      const response = await axios.patch(
        `https://localhost:7185/projects/update/${userData.userinfo.id}?api-version=1`,
        obj, config
      )
      return { errorMessage: response.data.value }
    } catch (error: any) {
      return error.message
    }
  }
)

// export const getProjectsById = createAsyncThunk(
//   'get/projectsid',
//   async (userData: { paramsData: string | undefined, versioning: number }) => {
//     try {
//       const res = await axios.get(`https://localhost:7185/projects/project/${userData.paramsData}?api-version=${userData.versioning}`)
//       // const totalPages = res.data.data.totalPages
//       // const totalCount = res.data.data.allCount
//       // console.log(res.data.result.value)
//       return { projects: res.data.result.value }
//     } catch (error: any) {
//       return error.message
//     }
//   }
// )
