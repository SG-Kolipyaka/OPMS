import React from 'react'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Styles from '.././css/addproject.module.css'

interface TextFieldInputProps {
  id: string
  name: string
  type: string
  value: string | undefined
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  error: string | undefined
  touched: boolean | undefined
  showPassword?: boolean | undefined
  handleView?: () => void
  placeholder?: string
}

const TextFieldInput = ({
  id,
  name,
  type,
  value,
  handleChange,
  error,
  touched,
  showPassword,
  handleView,
  placeholder
}: TextFieldInputProps): React.JSX.Element => {
  const inputType =
    showPassword !== undefined && showPassword ? 'text' : 'password'
  const inputProps = showPassword !== undefined
    ? {
        endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={ handleView } edge="end">
            {showPassword !== undefined && showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
        )
      }
    : {}
  return (
    <div className={type !== 'email' && type !== 'password' ? Styles.model : ''}>
      <TextField
        fullWidth
        margin="normal"
        id={id}
        placeholder={placeholder}
        name={name}
        type={showPassword !== undefined ? inputType : type }
        variant="outlined"
        value={value}
        onChange={(e) => {
          handleChange(e as React.ChangeEvent<HTMLInputElement>)
        }}
        error={touched === true && Boolean(error)}
        helperText={touched === true && error}
        InputProps={ inputProps }
      />
    </div>
  )
}

export default TextFieldInput
