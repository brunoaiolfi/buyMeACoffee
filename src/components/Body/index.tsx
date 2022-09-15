import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"
// @ts-ignore
import Coffee from "../../assets/coffee.png";
import { BuyMeAcoffee } from "../BuyMeACoffeeButton";

export function Body() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Flex
            w="100%"
            h="80vh"
            maxWidth={1200}
            mx="auto"
            mt="8"
            flexDirection="column"
            alignItems="center"
        >

            <Box
                w="100%"
                textAlign="center"
            >
                <Text
                    fontSize={isWideVersion ? "7xl" : "4xl"}
                    fontWeight="bold"
                    lineHeight="1"
                >
                    Great Coffee
                </Text>
                <Text
                    fontSize={isWideVersion ? "8xl" : "5xl"}
                    fontWeight="bold"
                    color="black"
                    textShadow="-2px -2px 0 purple, 2px -2px 0 purple, -2px 2px 0 purple, 2px 2px 0 purple;"
                    lineHeight="1"
                >
                    &lt;Great Code/&gt;
                </Text>
            </Box>
          
            <Image
                h={isWideVersion ? "600" : "300"}
                mt="16"
                src={Coffee}
                alt='Coffee'
            />

        </Flex>
    )
}