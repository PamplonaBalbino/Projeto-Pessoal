import { AspectRatio, Box, useBreakpointValue } from "@chakra-ui/react";
//LEMBRETE>>> useBreakpointValue > DESENVOLVER breakpoint 
//O VIDEO SERÁ ALTERADO POSTERIORMENTE PARA UM VIDEO DE APRESENTAÇÃO DA PLATAFORMA


export default function BannerHome () {
    return(
        <Box
        align="center"
        bgGradient="linear(to-t, #012340, #006666)"
        justify="center"
        margin="2px"
        borderRadius="5px"
        paddingTop ={{ base: "5px", md: "8px", lg: "12px",}}
        paddingBottom ={{ base: "5px", md: "8px", lg: "12px",}}>
            <AspectRatio 
            boxShadow="dark-lg"
            width = {{ base: "10em", md: "15em", lg: "25em",}}
            ratio={1.8} 
            >
                <iframe 
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0" // ADICIONAR VIDEO DEPOIS
                />
            </AspectRatio>
        </Box>
    )
}

