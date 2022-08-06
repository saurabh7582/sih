// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
// const 

// const global = {
  
// }


// 3. extend the theme
const theme = extendTheme({
  config:{
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }, 
  colors:{
    primary:{
      100:'#FEEBC8',
      200:'#FBD38D',
      300:'#F6AD55',
      400:'#ED8936',
      500:'#DD6B20',
      600:'#C05621',
      700:'#9C4221',
      800:'#7B341E',
      900:'#652B19',
    },
    secondary:{
      main: '#4299E1',
      100: '#BEE3F8',
      200: '#90CDF4',
      300: '#63B3ED',
      500: '#3182CE',
      600: '#2B6CB0',
      700: '#2C5282',
      800: '#2A4365',
      900: '#1A365D'
    }, 
    cyan:{
      main: '#0BC5EA',
      100: '#C4F1F9',
      200: '#9DECF9',
      300: '#76E4F7',
      500: '#00B5D8',
      600: '#00A3C4',
      700: '#0987A0',
      800: '#086F83',
      900: '#065666'
    },
  }  
 })

export default theme