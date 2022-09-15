import { Icon, Link, LinkProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLinkProps extends LinkProps {
    href: string;
    children: string;
}

export function NavLinkHorizontal({ children, href, ...rest }: NavLinkProps) {
    return (
        <Link
            bgColor="transparent"
            w="100%"
            h="12"
            borderRadius="0"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="white.500"
            borderX="none"
            to={href}
            href={href}
            isExternal
            variant="unstyled"
            px="4"
            py="2.5"
            alignItems="center"
            {...rest}
        >
            <Text
                fontSize="md"
                color="white"
            >
                {children}
            </Text>
        </Link>
    )

}