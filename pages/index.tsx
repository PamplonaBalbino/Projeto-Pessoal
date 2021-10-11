import Head from 'next/head' // HEAD 
import Image from 'next/image' //PROPRIEDADES DE IMAGENS
import Navigation from '../Components/Navigation' // MENU DE NAVEGAÇÃO

import {
  Box,
  Heading,
} from "@chakra-ui/react"; // ELEMENTOS


export default function Home() {
  return (
    <Box>
      <Heading>

        <Navigation />

      </Heading>
    </Box>
  )
}
