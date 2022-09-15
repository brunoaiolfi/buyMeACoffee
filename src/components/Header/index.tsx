import { Avatar, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Icon, IconButton, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useBreakpointValue, useDisclosure, useFocusEffect, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { BuyMeAcoffee } from '../BuyMeACoffeeButton';
import { NavLink } from './navLinks/navLink';

import { NavLinkHorizontal } from './navLinks/navLinkHorizontal'


export function Header() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const [openOptionsModal, setOpenOptionsModal] = useState(false)
    return (
        <>
            <Flex
                as="header"

                w="100%"
                h="10vh"

                p="6"

                maxWidth={850}
                mx="auto"
                align="center"
                justifyContent="space-between"
            >

                {
                    !isWideVersion && (
                        <IconButton
                            aria-label='Abrir menu'
                            icon={<Icon as={RiMenuLine} />}
                            onClick={() => setOpenOptionsModal(true)}
                            fontSize="24"
                            variant="unstyled"
                            mr="2"
                        />
                    )
                }

                {
                    isWideVersion &&
                    <>
                        <Avatar
                            size="md"
                            name="Bruno Aiolfi"
                            src="https://github.com/brunoaiolfi.png"
                        />

                        <Flex
                            align={'center'}
                        >
                            <HStack
                                spacing="6"
                            >
                                <NavLink href='https://github.com/brunoaiolfi' >
                                    Github
                                </NavLink>

                                <NavLink href='https://www.linkedin.com/in/bruno-aiolfi-6a75b1203/' >
                                    Linkedin
                                </NavLink>

                                <NavLink href='https://brunoaiolfi.github.io/portfolio/' >
                                    Portfólio
                                </NavLink>

                                <NavLink href='https://wa.me/+5548988060117' >
                                    Whats app
                                </NavLink>

                                <NavLink href='mailto:bruno.aiolfi154@gmail.com' >
                                    E-mail
                                </NavLink>
                            </HStack>
                        </Flex>

                        <BuyMeAcoffee />
                    </>
                }

                {
                    !isWideVersion &&
                    <BuyMeAcoffee />
                }
            </Flex>

            <Drawer onClose={() => setOpenOptionsModal(false)} isOpen={openOptionsModal} size={'full'}>
                <DrawerOverlay />
                <DrawerContent
                    bgColor="black"
                    p="0"
                >
                    <Flex
                        alignItems="center"
                        justifyContent="space-around"
                        px="4"
                    >
                        <DrawerHeader>{`Minhas redes`}</DrawerHeader>
                        <DrawerCloseButton
                            position="inherit"
                            ml="auto"
                        />
                    </Flex>
                    <DrawerBody
                        p="0"
                    >
                        <VStack
                            spacing="0"
                        >
                            <NavLinkHorizontal href='https://github.com/brunoaiolfi' >
                                Github
                            </NavLinkHorizontal>

                            <NavLinkHorizontal href='https://www.linkedin.com/in/bruno-aiolfi-6a75b1203/' >
                                Linkedin
                            </NavLinkHorizontal>

                            <NavLinkHorizontal href='https://brunoaiolfi.github.io/portfolio/' >
                                Portfólio
                            </NavLinkHorizontal>

                            <NavLinkHorizontal href='https://wa.me/+5548988060117' >
                                Whats app
                            </NavLinkHorizontal>

                            <NavLinkHorizontal href='mailto:bruno.aiolfi154@gmail.com' >
                                E-mail
                            </NavLinkHorizontal>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}