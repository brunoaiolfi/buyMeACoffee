import { Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { useState } from "react";

// @ts-ignore
import QrCode from "../../assets/qrCode.png";


export function BuyMeAcoffee() {
    const [openPixModal, setOpenPixModal] = useState(false)

    return (
        <>
            <Button
                borderColor='purple.500'
                variant='outline'
                px={8}
                onClick={() => setOpenPixModal(true)}
                bgColor="transparent"
                _hover={{
                    bgColor: "purple.500"
                }}
            >
                <Text >
                    Pagar um café ☕
                </Text>
            </Button>

            <Modal isOpen={openPixModal} onClose={() => setOpenPixModal(false)}>
                <ModalOverlay />

                <ModalContent
                    p="4"
                    bgColor="yellow.500"
                >
                    <ModalHeader>
                        <Flex
                            flexDirection="row"
                            alignItems="center"
                            width="100%"
                        >
                            <Text>
                                Pagamento via PIX
                            </Text>
                            <ModalCloseButton
                                ml="auto"
                                position="unset"
                            />
                        </Flex>
                    </ModalHeader>
                    <ModalBody>
                        <Image
                            mx="auto"
                            h={"300"}
                            src={QrCode}
                            alt='QRCode de pagamento'
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            background="transparent"
                            _hover={{
                                bgColor: "yellow.600",
                            }}
                            ml="auto"
                            onClick={() => setOpenPixModal(false)}
                        >
                            Talvez uma outra hora.
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}