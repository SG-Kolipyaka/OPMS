export interface ApiResponse {
  token: string
}

export interface UserData {
  email: string
  password: string
}

export interface AuthState {
  isLoading: boolean
  isError: boolean
  token: string
  isAuth: boolean
  error: string | null
}
