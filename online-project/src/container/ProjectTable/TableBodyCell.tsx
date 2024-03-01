import React from 'react'
import {
  TableCell,
  TableRow,
  Typography,
  Button,
  TableBody
} from '@mui/material'
import Styles from '../../css/projecttable.module.css'
import {
  type UpdateStatus,
  type ProjectData
} from '../../Models/ReduxType/projectType'
import { NavLink } from 'react-router-dom'

interface TableBodyProps {
  projects: ProjectData[]
  initialState: string[]
  handelPatch: (userData: UpdateStatus) => Promise<void>
  projectDate: Intl.DateTimeFormat
}

const TableBodyCell: React.FC<TableBodyProps> = ({
  projects,
  initialState,
  handelPatch,
  projectDate
}) => {
  return (
    <TableBody>
      {projects.map((project) => (
        <TableRow key={project.id}>
          {initialState.map((key) => (
            <TableCell key={key}>
              {key === 'Name'
                ? (
                <Typography variant="body1" fontSize={'16px'}>
                  <b>
                  <NavLink to={`/projectedit/${project?.id}`} className={Styles.navigateLink}>
                    {project[key.toLowerCase() as keyof ProjectData]}{' '}
                    </NavLink>
                  </b>
                </Typography>
                  )
                : key === 'Status'
                  ? (
                <Typography variant="body1">
                  <NavLink to={`/projectedit/${project?.id}`} className={Styles.navigateLink}>
                  <b>{project[key.toLowerCase() as keyof ProjectData]}</b>
                  </NavLink>
                </Typography>
                    )
                  : (
                <Typography variant="body1">
                  <NavLink to={`/projectedit/${project?.id}`} className={Styles.navigateLink} >
                  {project[key.toLowerCase() as keyof ProjectData]}
                  </NavLink>
                </Typography>
                    )}
              {key === 'Name'
                ? (
                  <NavLink to={`/projectedit/${project?.id}`} className={Styles.navigateLink}>
                <Typography variant="body2">
                  {projectDate.format(new Date(project.startdate))} to{' '}
                  {projectDate.format(new Date(project.enddate))}
                </Typography>
                </NavLink>
                  )
                : (
                    ''
                  )}
            </TableCell>
          ))}
          <TableCell width="23%">
            <Button
              onClick={() => {
                handelPatch({
                  status: 'Running',
                  id: project.id ?? ''
                })
                  .then(() => {})
                  .catch(() => {})
              }}
              variant="outlined"
              className={Styles.runningBut}
            >
              Start
            </Button>
            <Button
              onClick={() => {
                handelPatch({
                  status: 'closed',
                  id: project.id ?? ''
                })
                  .then(() => {})
                  .catch(() => {})
              }}
              variant="outlined"
              className={Styles.closeBut}
            >
              Close
            </Button>
            <Button
              onClick={() => {
                handelPatch({
                  status: 'cancelled',
                  id: project.id ?? ''
                })
                  .then(() => {})
                  .catch(() => {})
              }}
              variant="outlined"
              className={Styles.cancelBut}
            >
              Cancel
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default TableBodyCell
