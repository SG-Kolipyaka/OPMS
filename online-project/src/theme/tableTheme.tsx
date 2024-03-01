import { createTheme } from '@mui/material'

const themeTable = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          height: '19px',
          color: '#3F3F3F',
          fontFamily: 'Nunito Sans, sans-serif',
          fontSize: '14px',
          alignItems: 'center',
          paddingBottom: '4px',
          width: 'auto',
          textDecoration: 'none'
        }
      }
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          border: '1 px solid white',
          padding: '10px'
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'gray',
          fontSize: '17px'
        }
      }
    }

  }
})

export default themeTable
