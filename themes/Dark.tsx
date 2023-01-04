import {createTheme} from '@mui/material'
export const darkTheme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#DCDCDC" ,
            dark:"#000000" ,
            light: "#3e5037" ,
            contrastText: "#ffffff" ,
        },
        secondary:{
            main:"#58b24f" ,
            dark:"#218221" ,
            light: "#8be57d" ,
            contrastText: "#000000" ,

        },
        background:{
            default:"#2b2b30",
            paper:"#76767621 ",
        }
    },
})