import { Box } from "@chakra-ui/react";
import styled from "styled-components";

// @ts-ignore
import Blur2 from "../../assets/blur2.png";
// @ts-ignore
import Blur1 from "../../assets/blur1.png";

export const Main = styled.div`
  background: radial-gradient(
        100% 200% at 100% 5.65%,
        #8257e5 0%,
        rgba(130, 87, 229, 0) 10.74%,
        rgba(130, 87, 229, 0) 78.03%,
        #8257e5 150%
      )
    #000000;

  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;
  border: 0.1px solid rgba(255, 255, 255, 0);

  overflow: hidden;
`;
