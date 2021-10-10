import { AppProps } from 'next/dist/shared/lib/router/router';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {theme} from "./styles/theme";
/*import { AuthProvider } from '../context/AuthProvider';*/ // EM DESENVOLVIMENTO

const myTheme = extendTheme(theme);

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider theme={myTheme}>
        <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;