import React, { useEffect, useMemo } from 'react'
import { useAppSelector, useAppDispatch } from '../../Redux'
import { getCharts, getCount } from '../../Redux/ProjectReducer/action'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import ReactCharts from './Chart'
import { type countData, type ChartData } from '../../Models/Typescriptmodel'
import Styles from '../../css/dashboard.module.css'
import Breaker from '../AddProjects/Breaker'
import { Banner, Navbar } from '../../components'
import CountCard from './Card'
import { createProjectCounts } from './ProjectCount'
import { throttle } from 'lodash'

const Dashboard = (): React.JSX.Element => {
  const dispatch = useAppDispatch()
  const { count, chart } = useAppSelector((store) => store.projectReducer) as {
    count: countData
    chart: ChartData[]
  }

  const projectCounts = useMemo(() => {
    return createProjectCounts(count)
  }, [count])

  const throttledFetchData = throttle(async () => {
    try {
      await Promise.all([dispatch(getCount()), dispatch(getCharts())])
    } catch (error) {
      console.error('Error fetching count and charts:', error)
    }
  })

  useEffect(() => {
    void throttledFetchData()
  }, [])

  return (
    <Box className={Styles.dashboardClass}>
      <Navbar />
      <Box className={Styles.bannerClass}>
        <Banner name={'Dashboard'} />
        <Box className={Styles.Breaker}>
          <Breaker />
        </Box>
        <Box className={Styles.breaker}>
          <br />
        </Box>
        <Box className={Styles.projectCount}>
          {projectCounts.map((el) => {
            return (
              <Card className={Styles.card} key={el.text}>
                <CountCard text={el.text} count={el.counts} />
              </Card>
            )
          })}
        </Box>
        <Box className={Styles.desktopCharts}>
          <ReactCharts data={chart} width={630} height={340} fontSize={'12px'} chartWidth={'100%'} />
        </Box>
        <Box className={Styles.tabCharts}>
          <ReactCharts data={chart} width={630} height={340} fontSize={'12px'} chartWidth={'100%'} />
        </Box>
        <Box className={Styles.mobileCharts}>
          <ReactCharts data={chart} width={350} height={400} fontSize={'12px'} chartWidth={'20%'} />
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
