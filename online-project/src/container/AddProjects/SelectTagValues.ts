import {
  type FormikValues,
  type FormikErrors,
  type FormikHandlers,
  type FormikTouched
} from 'formik'
import { type SelectField } from '../../Models/Typescriptmodel'

export const getSelectFields = (formik: {
  values: FormikValues
  errors: FormikErrors<FormikValues>
  handleChange: FormikHandlers['handleChange']
  touched: FormikTouched<FormikValues>
}): SelectField[] => [
  {
    id: 'reason',
    name: 'reason',
    label: 'Reason',
    values: formik.values.reason,
    errors: formik.errors.reason,
    handleChange: formik.handleChange,
    touched: formik.touched.reason,
    value1: 'For Business',
    value2: 'For Marketing',
    value3: 'For Education',
    value4: 'For Startups'
  },
  {
    id: 'type',
    name: 'type',
    label: 'Type',
    values: formik.values.type,
    errors: formik.errors.type,
    handleChange: formik.handleChange,
    touched: formik.touched.type,
    value1: 'Internal',
    value2: 'External',
    value3: 'Self',
    value4: 'Practice'
  },
  {
    id: 'division',
    name: 'division',
    label: 'Division',
    values: formik.values.division,
    errors: formik.errors.division,
    handleChange: formik.handleChange,
    touched: formik.touched.division,
    value1: 'Filters',
    value2: 'Actives',
    value3: 'Filters1',
    value4: 'Actives2'
  },
  {
    id: 'category',
    name: 'category',
    label: 'Category',
    values: formik.values.category,
    errors: formik.errors.category,
    handleChange: formik.handleChange,
    touched: formik.touched.category,
    value1: 'Quality A',
    value2: 'Quality B',
    value3: 'Quality C',
    value4: 'Quality D'
  },
  {
    id: 'priority',
    name: 'priority',
    label: 'Priority',
    values: formik.values.priority,
    errors: formik.errors.priority,
    handleChange: formik.handleChange,
    touched: formik.touched.priority,
    value1: 'High',
    value2: 'Low',
    value3: 'Medium',
    value4: 'Extream'
  },
  {
    id: 'department',
    name: 'department',
    label: 'Department',
    values: formik.values.department,
    errors: formik.errors.department,
    handleChange: formik.handleChange,
    touched: formik.touched.department,
    value1: 'Strategy',
    value2: 'HR',
    value3: 'IT',
    value4: 'Sales'
  }
]
