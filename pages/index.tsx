import Head from 'next/head' // HEAD 
import Image from 'next/image' //PROPRIEDADES DE IMAGENS
import Navigation from '../Components/Navigation'; // MENU DE NAVEGAÇÃO
import BannerHome from '../Components/BannerHome';
import BestGuides from '../Components/BestGuides';
import AreaGuides from '../Components/AreaGuides';
import {
  AspectRatio,
  Box,
  Heading,
} from "@chakra-ui/react"; // ELEMENTOS


export default function Home() {
  return (
    <Box>
      <Heading>
        <Navigation />
        <BannerHome />
      </Heading>
      
      <main>
      <BestGuides />
      <AreaGuides />
      </main>
    </Box>
  )
}
