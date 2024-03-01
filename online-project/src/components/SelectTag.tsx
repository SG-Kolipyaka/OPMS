import React from 'react'
import {
  FormControl,
  MenuItem,
  Select,
  FormHelperText,
  type SelectChangeEvent,
  ThemeProvider
} from '@mui/material'
import Styles from '.././css/addproject.module.css'
import addTheme from '../theme/addTheme'

interface SelectTagProps {
  values: string
  errors: string | undefined
  handleChange: (event: SelectChangeEvent<string | undefined>) => void
  touched: boolean | undefined
  value1: string
  value2: string
  value3: string
  value4: string
  name: string
  id: string
  label: string
}

const SelectTag: React.FC<SelectTagProps> = ({
  values,
  errors,
  handleChange,
  touched,
  value1,
  value2,
  value3,
  value4,
  name,
  id,
  label
}) => {
  return (
    <ThemeProvider theme={addTheme}>
      <FormControl variant="outlined" className={Styles.formInput}>
        <Select
          labelId={`${name}-label`}
          id={id}
          name={name}
          value={values}
          onChange={(e) => {
            handleChange(e)
          }}
          label={label}
          error={touched === true && Boolean(errors)}
        >
          <MenuItem value={value1}>
            {value1.charAt(0).toUpperCase() + value1.slice(1)}
          </MenuItem>
          <MenuItem value={value2}>
            {value2.charAt(0).toUpperCase() + value2.slice(1)}
          </MenuItem>
          <MenuItem value={value3}>
            {value3.charAt(0).toUpperCase() + value3.slice(1)}
          </MenuItem>
          <MenuItem value={value4}>
            {value4.charAt(0).toUpperCase() + value4.slice(1)}
          </MenuItem>
        </Select>
        {touched === true && <FormHelperText error>{errors}</FormHelperText>}
      </FormControl>
    </ThemeProvider>
  )
}

export default SelectTag
