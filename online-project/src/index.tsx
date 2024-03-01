import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import { BrowserRouter } from 'react-router-dom'
import globaltheme from './theme/globaltheme'
import { ThemeProvider } from '@mui/material'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <ThemeProvider theme={globaltheme}>
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
</BrowserRouter>
</ThemeProvider>
)
