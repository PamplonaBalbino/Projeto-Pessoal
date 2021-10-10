
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from './styles/theme';
import { Link } from "@chakra-ui/core";

export default class Document extends NextDocument {
  render() {
    return (
        <Html lang="pt-br">
            <Head>
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
  }
}

