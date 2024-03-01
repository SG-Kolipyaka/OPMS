export interface FormValuesLogin {
  email: string
  password: string
}

export interface countData {
  total: number
  closed: number
  running: number
  closureDelay: number
  cancelled: number
}

export interface BannerProps {
  name: string
}

export interface PaginationProps {
  page: number
  pageIncrement: () => void
  pageDecrement: () => void
  totalPages: number
  totalCount: number
  pageCurrentValue: (page: number) => void
}

export interface ChartData {
  percentage: number
  department: string
  registered: number
  closed: number
}

export interface Props {
  data: ChartData[]
  width: number
  height: number
  fontSize: string
  chartWidth: string
}

export interface SelectField {
  id: string
  name: string
  label: string
  values: string
  errors: any
  handleChange: (event: React.ChangeEvent<any>) => void
  touched: any
  value1: string
  value2: string
  value3: string
  value4: string
}
