import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../container/Login'
import AddProject from '../container/AddProjects'
import Dashboard from '../container/ProjectDashboard'
import PrivateRoute from './PrivateRoute'
import ProjectTable from '../container/ProjectTable'
import Edit from '../container/ProjectEdit'

const AllRoutes = (): React.JSX.Element => {
  return (
      <Routes>
        <Route
          path={'/dashboard'}
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path={'/'} element={<Login />} />
        <Route
          path={'/add'}
          element={
            <PrivateRoute>
              <AddProject />
            </PrivateRoute>
          }
        />
        <Route
          path={'/projecttable'}
          element={
            <PrivateRoute>
              <ProjectTable />
            </PrivateRoute>
          }
        />
        <Route
          path={'/projectedit/:id'}
          element={
            <PrivateRoute>
              <Edit/>
            </PrivateRoute>
          }
        />
      </Routes>
  )
}

export default AllRoutes
