import React from 'react'
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import globaltheme from './theme/globaltheme'
import { ThemeProvider } from '@mui/material'

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={globaltheme}>
      <div className="App">
        <AllRoutes />
    </div>
    </ThemeProvider>
  )
}

export default App
