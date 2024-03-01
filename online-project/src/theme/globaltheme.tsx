import { createTheme } from '@mui/material'

const globaltheme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          height: '48px',
          width: '337px',
          '@media (max-width: 768px)': {
            heigth: '48px',
            width: '298px',
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
    MuiButton: {
      styleOverrides: {
        root: {
          height: '36px',
          width: '169px',
          color: '#FFFFFF',
          fontFamily: 'Nunito Sans, sans-serif',
          fontSize: '16px',
          letterSpacing: '0',
          lineHeight: '22px',
          borderRadius: '18px',
          backgroundColor: '#035FB2',
          marginTop: '20px',
          textTransform: 'capitalize',
          '@media (max-width: 768px)': {
            height: '36px',
            width: '328px',
            color: '#FFFFFF',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '16px',
            letterSpacing: '0',
            lineHeight: '22px',
            borderRadius: '18px',
            backgroundColor: '#035FB2'
          }
        }
      }
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito Sans',
          fontSize: '16px'
        },
        h6: {
          color: '#3F3F3F',
          fontFamily: 'Nunito Sans',
          fontSize: '20px',
          letterSpacing: '0',
          lineHeight: '27px',
          paddingTop: '50px',
          paddingBottom: '62px',
          PaddingLeft: '112px',
          PaddingRight: '112px',

          '@media (max-width: 768px)': {
            height: '27px',
            color: '#3F3F3F',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '20px',
            letterSpacing: '0',
            lineHeight: '27px',
            marginTop: '-30px',
            marginLeft: '30px',
            textAlign: 'left'
          },
          '@media screen and (min-width: 768px) and (max-width: 1024px)': {
            color: '#3F3F3F',
            fontFamily: 'Nunito Sans',
            fontSize: '20px',
            letterSpacing: '0',
            lineHeight: '27px',
            textAlign: 'center'
          }
        },
        subtitle2: {
          color: '#025AAB',
          fontFamily: 'sans-serif',
          fontSize: '12px',
          letterSpacing: '0',
          textAlign: 'right',
          marginRight: '35px',
          marginTop: '-20px'
        },
        body2: {
          height: '19px',
          width: '113px',
          color: '#FF3838',
          fontSize: '14px',
          letterSpacing: '0',
          lineHeight: '19px',
          textAlign: 'center'
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          height: '48px',
          width: '337px',
          marginBottom: '40px',
          borderRadius: '6px',

          '@media (max-width: 768px)': {
            height: '48px',
            width: '328px',
            color: '#3F3F3F',
            borderRadius: '6px'
          },
          '& input[type="date"]': {
            height: '16px',
            width: '337px',

            '@media (max-width: 768px)': {
              heigth: '48px',
              width: '267px',
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
          color: '#767676',
          fontFamily: 'Nunito Sans, sans-serif',
          fontSize: '14px',
          letterSpacing: '0',
          lineHeight: '19px',
          textAlign: 'left',
          marginLeft: '40px',
          marginBottom: '-15px',
          '@media (max-width: 768px)': {
            height: '19px',
            color: '#767676',
            fontFamily: 'Nunito Sans',
            fontSize: '14px',
            letterSpacing: '0',
            lineHeight: '19px',
            textAlign: 'left',
            marginLeft: '25px',
            marginBottom: '-15px'
          },
          '@media screen and (min-width: 768px) and (max-width: 1024px)': {
            height: '19px',
            color: '#767676',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '14px',
            letterSpacing: '0',
            lineHeight: '19px',
            textAlign: 'left',
            marginLeft: '45px',
            marginBottom: '-15px'
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
    }
  }
})

export default globaltheme
