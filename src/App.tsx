import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  Flex,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react"

import { Header } from "./components/Header"
import { theme } from "./styles/theme"
import { Main } from "./styles/pages"
import { Body } from "./components/Body"

export const App = () => {
  
  return (
    <ChakraProvider theme={theme}>
      <Main>
        <Header />
        <Body />
      </Main>
    </ChakraProvider >
  )
}