import React from 'react'
import { InputLabel, Box } from '@mui/material'

interface InputTagProps {
  error: string | undefined
  text: string
}

const LabelTag: React.FC<InputTagProps> = ({ error, text }) => {
  return (
    <Box>
      <InputLabel
        style={{
          color: error !== undefined && error !== '' ? 'red' : ''
        }}
      >
        {text}
      </InputLabel>
    </Box>
  )
}

export default LabelTag
