import React from 'react'
import { Button, Typography, Paper } from '@mui/material'
import Styles from '../../css/projecttable.module.css'
import {
  type UpdateStatus,
  type ProjectData
} from '../../Models/ReduxType/projectType'

interface TableBodyProps {
  projects: ProjectData[]
  handelPatch: (userData: UpdateStatus) => Promise<void>
  projectDates: Intl.DateTimeFormat
}

const ProjectCardCell: React.FC<TableBodyProps> = ({
  projects,
  projectDates,
  handelPatch
}) => {
  return (
    <div className={Styles.tabCard}>
      {projects.map((el) => (
        <Paper key={el.id} className={Styles.cardDiv}>
          <div className={Styles.mainDiv}>
            <div className={Styles.flexDiv}>
              <Typography fontSize='16px'>
                <b>{el.name}</b>
              </Typography>
              <Typography className={Styles.tags}>
                <b>{el.status}</b>
              </Typography>
            </div>
            <Typography fontSize={'13px'}>
              {projectDates.format(new Date(el.startdate))} to{' '}
              {projectDates.format(new Date(el.startdate))}
            </Typography>
            <Typography className={Styles.tags}>
              Reason: <b>{el.reason}</b>
            </Typography>
            <div className={Styles.flexDiv}>
              <Typography className={Styles.tags}>
                Type: <b>{el.type}</b>
              </Typography>
              <Typography fontSize='14px' marginRight='80px'>
                . Category: <b>{el.category}</b>
              </Typography>
            </div>
            <div className={Styles.flexDiv}>
              <Typography className={Styles.tags}>
                Div: <b>{el.division}</b>
              </Typography>
              <Typography fontSize='14px' marginRight='150px'>
                . Dept: <b>{el.department}</b>
              </Typography>
            </div>
            <Typography className={Styles.tags}>
              Location: <b>{el.location}</b>
            </Typography>
            <Typography className={Styles.tags}>
              Priority: <b>{el.priority}</b>
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              padding: '10px'
            }}
          >
            <Button
              onClick={() => {
                handelPatch({
                  status: 'running',
                  id: el.id ?? ''
                })
                  .then(() => {})
                  .catch(() => {})
              }}
              className={Styles.runningStatus}
            >
              Start
            </Button>
            <Button
              onClick={() => {
                handelPatch({
                  status: 'closed',
                  id: el.id ?? ''
                })
                  .then(() => {})
                  .catch(() => {})
              }}
              className={Styles.closeStatus}
            >
              Close
            </Button>
            <Button
              onClick={() => {
                handelPatch({
                  status: 'cancelled',
                  id: el.id ?? ''
                })
                  .then(() => {})
                  .catch(() => {})
              }}
              className={Styles.cancelStatus}
            >
              Cancel
            </Button>
          </div>
        </Paper>
      ))}
    </div>
  )
}

export default ProjectCardCell
