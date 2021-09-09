import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { theme } from "../styles/theme";
import {SidebarDrawerProvider} from '../components/contexts/SidebarDrawerContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarDrawerProvider>

    <ChakraProvider  theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </SidebarDrawerProvider>
  );
}

export default MyApp;
