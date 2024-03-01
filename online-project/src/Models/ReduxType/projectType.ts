export interface ProjectData {
  id?: string
  name: string
  reason: string
  type: string
  division: string
  category: string
  priority: string
  department: string
  location: string
  status: string
  startdate: string
  enddate: string
}

export interface UpdateStatus {
  id?: string
  name?: string
  reason?: string
  type?: string
  division?: string
  category?: string
  priority?: string
  department?: string
  location?: string
  status?: string
  startdate?: string
  enddate?: string
  data?: Array<{
    op: string
    path: string
    value: string | undefined
  }>
}

export interface UpdateStatusR {
  data?: Array<{
    op: string
    path: string
    value: string | undefined
  }>
  userinfo: UpdateStatus
}

export interface ParamsData {
  search?: string
  sort?: string
  page?: number
  id?: string
}

export interface InitialProjectState {
  isLoading: boolean
  isError: boolean
  projects: any[]
  count: object
  chart: any[]
  totalCount: number
  totalPages: number
  errorMessage: string
}

// export interface JsonPatch {
//   op: string
//   path: string
//   value: string | undefined
// }
