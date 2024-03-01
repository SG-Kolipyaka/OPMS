import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { Typography, Box } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../Redux'
import { LabelTag, TextFieldInput } from '../../components'
import MIButton from './LoginButton'
import BackgroundImage from '../../assets/login-bg-1.svg'
import LogoImage from '../../assets/Logo.svg'
import { login } from '../../Redux/AuthReducer/action'
import { Navigate } from 'react-router-dom'
import Styles from '../../css/Login.module.css'
import { initialValues, loginValidationSchema } from './ValidateErr'
import { Formik, Form } from 'formik'
import debounce from 'lodash/debounce'

const Login = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const { isAuth, error } = useAppSelector((store) => store.authReducer)

  const handleView = (): void => {
    setShowPassword(!showPassword)
  }

  const token = Cookies.get('token')

  if (isAuth && token !== '') {
    return <Navigate to="/dashboard" />
  }

  const debouncedLogin = debounce(async (values) => {
    try {
      await dispatch(login(values))
    } catch (error) {
      console.error('Login failed:', error)
    }
  }, 500)

  return (
    <Box className={Styles.loginContainer}>
      <Box>
        <img className={Styles.banner} src={BackgroundImage} alt="back" />
      </Box>
      <Box className={Styles.logo}>
        <img src={LogoImage} alt="Logo" className={Styles.logoImage} />
        <Box className={Styles.logoHeading}>
          <Typography>Online Project Management</Typography>
        </Box>
      </Box>

      <Box className={Styles.card}>
        <Typography variant="h6">Login to get Started</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={async (values) => {
            try {
              void debouncedLogin(values)
            } catch (error) {
              console.error('Project creation failed:', error)
            }
          }}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <Box className={Styles.formBox}>
                <LabelTag error={errors.email} text={'Email'} />
                <TextFieldInput
                  id={'email'}
                  name={'email'}
                  type={'email'}
                  value={values.email}
                  handleChange={handleChange}
                  error={errors.email}
                  touched={touched.email}
                />

                <LabelTag error={errors.password} text={'Password'} />
                <TextFieldInput
                  id={'password'}
                  name={'password'}
                  type={'password'}
                  value={values.password}
                  handleChange={handleChange}
                  error={errors.password}
                  touched={touched.password}
                  showPassword={showPassword}
                  handleView={handleView}
                />

                <Typography variant="subtitle2">Forgot password?</Typography>

                <MIButton text={'Login'} />
              </Box>
              {error !== null &&
                errors.email === undefined &&
                errors.password === undefined && (
                  <Box className={Styles.errorMessage}>
                    <Typography variant="body2">{error}</Typography>
                  </Box>
              )}
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}

export default Login
