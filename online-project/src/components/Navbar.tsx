import React, { useState } from 'react'
import Styles from '../css/navbar.module.css'
import { NavLink } from 'react-router-dom'
import AddProject from '../assets/create-project.svg'
import projectActive from '../assets/create-project-active.svg'
import Dashboard from '../assets/Dashboard.svg'
import DashboardActive from '../assets/Dashboard-active.svg'
import ProjectList from '../assets/Project-list.svg'
import ProjectListActive from '../assets/Project-list-active.svg'
import LogOut from '../assets/Logout.svg'
import { logout } from '../Redux/AuthReducer/authSlice'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/material'

const Navbar = (): React.JSX.Element => {
  const [add, setAdd] = useState<boolean>(false)
  const [dashboard, setDashboard] = useState<boolean>(false)
  const [table, setTable] = useState<boolean>(false)
  const dispatch = useDispatch()

  const logoutApp = (): void => {
    dispatch(logout())
  }

  return (
    <header className={Styles.NavHeader}>
      <nav className={Styles.NavContainer}>
        <Box>
          <NavLink
            style={({ isActive }) => {
              if (isActive) {
                setDashboard(true)
                setTable(false)
                setAdd(false)
              } else {
                setDashboard(false)
              }
              return { color: isActive ? 'blue' : 'gray' }
            }}
            to={'/dashboard'}
          >
            {dashboard ? <Box className={Styles.activelink}></Box> : ''}
            <img
              className={Styles.DashboardImg}
              src={dashboard ? DashboardActive : Dashboard}
              alt=""
            />
            {dashboard ? <Box className={Styles.activelinksmall}></Box> : ''}
          </NavLink>
        </Box>

        <Box>
          <NavLink
            style={({ isActive }) => {
              if (isActive) {
                setTable(true)
                setDashboard(false)
                setAdd(false)
              } else {
                setTable(false)
              }
              return { color: isActive ? 'blue' : 'gray' }
            }}
            to={'/projecttable'}
          >
            {table ? <Box className={Styles.activelink}></Box> : ''}
            <img
              className={Styles.ProjectListImg}
              src={table ? ProjectListActive : ProjectList}
              alt=""
            />
            {table ? <Box className={Styles.activelinksmall}></Box> : ''}
          </NavLink>
        </Box>

        <hr />

        <Box>
          <NavLink
            style={({ isActive }) => {
              if (isActive) {
                setAdd(true)
                setDashboard(false)
                setTable(false)
              } else {
                setAdd(false)
              }
              return { color: isActive ? 'blue' : 'gray' }
            }}
            to={'/add'}
          >
            {add ? <Box className={Styles.activelink1}></Box> : ''}
            <img
              className={Styles.AddProjectImg}
              src={add ? projectActive : AddProject}
              alt=""
            />
            {add ? <Box className={Styles.activelinksmall1}></Box> : ''}
          </NavLink>
        </Box>
      </nav>
      <Box></Box>
      <img onClick={logoutApp} className={Styles.logout} src={LogOut} alt="" />
    </header>
  )
}

export default Navbar
