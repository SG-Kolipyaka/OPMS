import React, { useEffect, useMemo } from 'react'
import { Button, Box, ThemeProvider, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../Redux'
import {
  updateAllProjects,
  getProjects
} from '../../Redux/ProjectReducer/action'
import Styles from '../../css/addproject.module.css'
import addTheme from '../../theme/addTheme'
import { type UpdateStatusR, type UpdateStatus } from '../../Models/ReduxType/projectType'
import { getSelectFields } from '../AddProjects/SelectTagValues'
import { Formik, Form } from 'formik'
import { TextFieldInput, SelectTag, Banner, Navbar, LabelTag } from '../../components'

const Edit = (): React.JSX.Element => {
  const { projects, errorMessage } = useAppSelector(
    (store) => store.projectReducer
  )
  const dispatch = useAppDispatch()
  const param = useParams()
  const initialProject: UpdateStatus | undefined = useMemo(() => {
    return projects.find((project) => project._id === param.id)
  }, [projects, param.id])

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const initialValues: UpdateStatus = useMemo(() => {
    return initialProject !== undefined
      ? {
          ...initialProject,
          startdate:
            initialProject.startdate !== undefined
              ? formatDate(initialProject.startdate)
              : undefined,
          enddate:
            initialProject.enddate !== undefined
              ? formatDate(initialProject.enddate)
              : undefined
        }
      : {}
  }, [initialProject])

  useEffect(() => {
    const init = {
      id: param.id
    }
    dispatch(getProjects({ paramsData: init, versioning: 1 }))
      .then(() => {})
      .catch(() => {})
  }, [errorMessage])
  return (
    <ThemeProvider theme={addTheme}>
      <Box className={Styles.addSection}>
        <Navbar />
        <Box className={Styles.projectForm}>
          <Banner name={'Edit Project'} />
          <Box className={Styles.formGroup}>
            <Formik
              initialValues={initialValues}
              onSubmit={async (values) => {
                try {
                  const patchData = [
                    { op: 'replace', path: '/name', value: values.name },
                    { op: 'replace', path: '/reason', value: values.reason },
                    { op: 'replace', path: '/type', value: values.type },
                    { op: 'replace', path: '/division', value: values.division },
                    { op: 'replace', path: '/category', value: values.category },
                    { op: 'replace', path: '/priority', value: values.priority },
                    { op: 'replace', path: '/department', value: values.department },
                    { op: 'replace', path: '/location', value: values.location },
                    { op: 'replace', path: '/startdate', value: values.startdate },
                    { op: 'replace', path: '/enddate', value: values.enddate }
                  ]
                  values = { ...values, id: param.id }
                  const obj: UpdateStatusR = {
                    data: patchData,
                    userinfo: values
                  }
                  await dispatch(updateAllProjects(obj))
                } catch (error) {
                  console.error('Project update failed:', error)
                }
              }}
            >
              {({ values, errors, touched, handleChange }) => (
                <Form>
                  <Box id={Styles.text}>
                    <TextFieldInput
                      id={Styles.form}
                      name={'name'}
                      placeholder={'Enter Project Theme'}
                      type={'text'}
                      value={values.name}
                      handleChange={handleChange}
                      error={errors.name}
                      touched={touched.name}
                    />
                    <Box className={Styles.selectGroup}>
                      {getSelectFields({
                        values,
                        errors,
                        handleChange,
                        touched
                      }).map((field) => (
                        <Box className={Styles.section} key={field.id}>
                          <LabelTag error={field.errors} text={field.label} />
                          <SelectTag
                            values={field.values}
                            errors={field.errors}
                            handleChange={handleChange}
                            touched={field.touched}
                            value1={field.value1}
                            value2={field.value2}
                            value3={field.value3}
                            value4={field.value4}
                            name={field.name}
                            id={field.id}
                            label={field.label}
                          />
                        </Box>
                      ))}

                      <Box className={Styles.section}>
                        <LabelTag
                          error={errors.startdate}
                          text={'Start Date as per Project plan'}
                        />
                        <TextField
                          id='startDate'
                          name='startdate'
                          type='date'
                          className={Styles.formInput}
                          value={values.startdate}
                          onChange={handleChange}
                          error={
                            touched.startdate === true &&
                            Boolean(errors.startdate)
                          }
                          helperText={errors.startdate}
                        />
                      </Box>
                      <Box className={Styles.section}>
                        <LabelTag
                          error={errors.enddate}
                          text={'End Date as per Project plan'}
                        />
                        <TextField
                          id='endDate'
                          name='enddate'
                          type='date'
                          className={Styles.formInput}
                          value={values.enddate}
                          onChange={handleChange}
                          error={
                            touched.enddate === true && Boolean(errors.enddate)
                          }
                          helperText={errors.enddate}
                        />
                      </Box>

                      <Box className={Styles.section}>
                        <LabelTag error={errors.location} text={'Location'} />
                        <SelectTag
                          values={values.location ?? ''}
                          errors={errors.location}
                          handleChange={handleChange}
                          touched={touched.location}
                          value1={'Mumbai'}
                          value2={'Pune'}
                          value3={'Chennai'}
                          value4={'Delhi'}
                          name={'location'}
                          id={'location'}
                          label={'Location'}
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box className={Styles.defaultStatus}>
                    Status: <b>{values.status}</b>
                  </Box>

                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    id={Styles.submitButton}
                  >
                    Save Project
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Edit
