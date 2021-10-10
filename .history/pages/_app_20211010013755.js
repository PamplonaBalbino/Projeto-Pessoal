import { ThemeProvider, theme } from '@chakra-ui/core';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <CSSReset/>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}