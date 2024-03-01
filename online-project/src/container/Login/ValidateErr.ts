import * as Yup from 'yup'
import { type FormValuesLogin } from '../../Models/Typescriptmodel'

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string().required('Password is required')
})

export const initialValues: FormValuesLogin = {
  email: '',
  password: ''
}
