import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { type Props } from '../../Models/Typescriptmodel'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Styles from '../../css/dashboard.module.css'

const ReactCharts: React.FC<Props> = ({ data, width, height, fontSize, chartWidth }) => {
  const chart = data.map((item) => ({
    ...item,
    label: `${Math.ceil(item.percentage)}%  ${item.department}`
  }))

  return (
    <Box >
    <Box
      style={{
        textAlign: 'left',
        marginLeft: '30px',
        marginBottom: '15px'
      }}
    >
      <Typography className={Styles.titlebar}>
        Department Wise - Total Vs Closed
      </Typography>
    </Box>
    <Box className={Styles.barcharts}>
    <div style={{ width: `${chartWidth}`, fontSize: `${fontSize}` }}>
      <BarChart width={width} height={height} data={chart}>
        <XAxis dataKey="label" angle={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="registered"
          fill="blue"
          name="Total"
          barSize={15}
          radius={[15, 15, 10, 10]}
        />
        <Bar
          dataKey="closed"
          fill="lightgreen"
          name="Closed"
          barSize={15}
          radius={[15, 15, 10, 10]}
        />
      </BarChart>
    </div>
    </Box>
    </Box>
  )
}

export default ReactCharts
