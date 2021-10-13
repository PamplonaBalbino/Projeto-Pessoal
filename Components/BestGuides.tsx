import {
    Box,
    Flex,
    ChakraProvider,
    GridItem,
    Text,
} from '@chakra-ui/react';

export default function BestGuides () {
    return(
        <Flex
        align="center"
        bgGradient="linear(to-t, #330066, #012340,)"
        justify="center"
        height={{ base: "2.5em", md: "2.5em", lg: "2.7em",}}
        margin="2px"
        borderRadius="5px">
            <Text
            align="center"
            color="red"
            fontStyle="initial"
            fontSize={{ base: "0.6em", md: "0.8em", lg: "1em",}} >
            PÁGINA EM DESENVOLVIMENTO: O VÍDEO ACIMA É APENAS ILUSTRATIVO E SERÁ 
            ALTERADO POSTERIORMENTE PARA UM VÍDEO EM QUE IREI EXPLICAR A PROPOSTA DESTE PROJETO 
            </Text>             
        </Flex> 
    )
}