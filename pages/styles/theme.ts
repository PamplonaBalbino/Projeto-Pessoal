
import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme ( {
    colors: {
        
        Basic: { 
            "transparent": "transparent",
            "black": "#000",
            "white": "#fff",
        },    
        Blue: {
            "500" : "#0D0D0D", 
            "400" : "#012340", 
            "300" : "#023E73",
            "200" : "#05C7F2",
            "100" : "#05F2DB", 
        },       
        Purple: {
            "300" : "#330066", //PURPLE VERY DARK
            "200" : "#663399", //PURPLE DARK
            "100" : "#6633CC", //PURPLE CLEAR
        },
        Green: {
            "300" : "#006666", //GRAY VERY DARK
            "200" : "#339966", //GRAY DARK
            "100" : "#00CC99", //GRAY CLEAR
        },
    },
})





