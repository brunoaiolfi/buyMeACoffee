import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    purple: {
      "500": "#8257E5",
    },
  },
  styles: {
    global: {
      body: {
        bg: "black",
        color: "gray.50",
      },
    },
  },
});
