import { type ProjectData } from '../../Models/ReduxType/projectType'
import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Project Theme Required'),
  reason: Yup.string().required('Reason is required'),
  type: Yup.string().required('Type is required'),
  division: Yup.string().required('Division is required'),
  category: Yup.string().required('Category is required'),
  priority: Yup.string().required('Priority is required'),
  department: Yup.string().required('Department is required'),
  location: Yup.string().required('Location is required'),
  startdate: Yup.date().required('Start Date is required'),
  enddate: Yup.date()
    .required('End Date is required')
    .min(Yup.ref('startdate'), 'Start Date Cannot be Greater Than End Date')
})

export const initialValues: ProjectData = {
  name: '',
  reason: '',
  type: '',
  division: '',
  category: '',
  priority: '',
  department: '',
  location: '',
  status: 'Registered',
  startdate: '',
  enddate: ''
}
