import { createTheme } from '@mui/material'

const addTheme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          height: '48px',
          width: '337px',
          '@media (max-width: 768px)': {
            heigth: '48px',
            width: '310px',
            boxSizing: 'borderBox',
            borderRadius: '6px'
          },
          '@media screen and (min-width: 768px) and (max-width: 1024px)': {
            heigth: '48px',
            width: '650px',
            boxSizing: 'borderBox',
            borderRadius: '6px'
          }
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& input[type="date"]': {
            height: '16px',
            width: '337px',

            '@media (max-width: 768px)': {
              heigth: '48px',
              width: '280px',
              boxSizing: 'borderBox',
              borderRadius: '6px'
            },
            '@media screen and (min-width: 768px) and (max-width: 1024px)': {
              heigth: '48px',
              width: '622px',

              boxSizing: 'borderBox',
              borderRadius: '6px'
            }
          }
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          height: '19px',
          textAlign: 'left',
          right: '-4px',
          color: '#767676',
          fontFamily: 'Nunito Sans, sans-serif',
          fontSize: '14px',
          letterSpacing: '0',
          lineHeight: '19px',

          '@media (max-width: 768px)': {
            height: '19px',

            color: '#767676',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '14px',
            letterSpacing: '0',
            lineHeight: '19px',
            marginLeft: '10px'
          },
          '@media screen and (width >= 768px) and (width <= 1024px)': {
            color: '#767676',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '15px',
            letterSpacing: '0',
            lineHeight: '19px',
            marginLeft: '-2px'
          }
        }
      }
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          height: '19px',
          color: '#FF3838',
          fontFamily: 'Nunito Sans, sans-serif',
          fontSize: '14px',
          letterSpacing: '0',
          lineHeight: '19px',
          marginLeft: '-0px'
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          height: '36px',
          width: '153px',
          borderRadius: '18px',
          backgroundColor: '#025AAB',
          color: '#FFFFFF',
          fontFamily: 'Nunito Sans, sans-serif',
          fontSize: '16px',
          letterSpacing: '0',
          lineHeight: '22px',
          textTransform: 'capitalize',

          '@media (max-width: 768px)': {
            height: '36px',
            width: '298px',
            borderRadius: '18px',
            backgroundColor: '#025AAB',
            marginTop: '20px',
            textTransform: 'capitalize',
            fontFamily: 'Nunito Sans, sans-serif'
          },
          '@media screen and (min-width: 768px) and (max-width: 1024px)': {
            height: '36px',
            width: '698px',
            borderRadius: '18px',
            backgroundColor: '#025AAB',
            marginTop: '20px',
            textTransform: 'capitalize',
            fontFamily: 'Nunito Sans, sans-serif'
          }
        }
      }
    }
  }
})

export default addTheme
