import React from 'react'
import { Button, Box, ThemeProvider, TextField } from '@mui/material'
import { useAppDispatch } from '../../Redux'
import { addProjects } from '../../Redux/ProjectReducer/action'
import { Banner, TextFieldInput, SelectTag, Navbar } from '../../components'
import Styles from '../../css/addproject.module.css'
import addTheme from '../../theme/addTheme'
import LabelTag from '../../components/LabelTag'
import Breaker from './Breaker'
import { initialValues, validationSchema } from './FormValidate'
import { getSelectFields } from './SelectTagValues'
import { Formik, Form } from 'formik'
import debounce from 'lodash/debounce'

const AddProject = (): React.JSX.Element => {
  const dispatch = useAppDispatch()

  const debouncedAddProjects = debounce(async (values) => {
    try {
      await dispatch(addProjects(values))
    } catch (error) {
      console.error('Project creation failed:', error)
    }
  }, 500)
  return (
    <ThemeProvider theme={addTheme}>
      <Box className={Styles.addSection}>
        <Navbar />
        <Box className={Styles.projectForm}>
          <Banner name={'Create Project'} />
          <Breaker />

          <Box className={Styles.formikForm}>
            <Box className={Styles.formGroup}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  void debouncedAddProjects(values)
                  resetForm()
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
                              touched.enddate === true &&
                              Boolean(errors.enddate)
                            }
                            helperText={errors.enddate}
                          />
                        </Box>
                        <Box className={Styles.section}>
                          <LabelTag error={errors.location} text={'Location'} />
                          <SelectTag
                            values={values.location}
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
      </Box>
    </ThemeProvider>
  )
}

export default AddProject
