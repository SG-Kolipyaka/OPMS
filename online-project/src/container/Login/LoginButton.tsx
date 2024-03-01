import React from 'react'
import { Button } from '@mui/material'

interface ButtonProps {
  text: string
}

const MIButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      aria-label={text}
      fullWidth
    >
      {text}
    </Button>
  )
}

export default MIButton
