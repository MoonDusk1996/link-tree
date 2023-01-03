import {createTheme} from '@mui/material'
export const lightTheme = createTheme({
    palette:{
        primary:{
            main:"#000000" ,
            dark:"#a2a2a2" ,
            light: "#ffffff" ,
            contrastText: "#ffffff" ,
        },
        secondary:{
            main:"#58b24f" ,
            dark:"#218221" ,
            light: "#8be57d" ,
            contrastText: "#000000" ,

        },
        background:{
            default:"#DCDCDC",
            paper:"#d3d3d3 ",
        }
    },
})