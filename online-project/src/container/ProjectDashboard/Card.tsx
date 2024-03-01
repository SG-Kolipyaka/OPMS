import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Styles from '../../css/dashboard.module.css'

interface CardProps {
  text: string
  count: number
}

const CountCard: React.FC<CardProps> = ({ text, count }) => {
  return (
    <CardContent>
      <Box>
        <Typography className={Styles.title}>{text}</Typography>
        <Typography className={Styles.count}>{count}</Typography>
      </Box>
    </CardContent>
  )
}

export default CountCard
