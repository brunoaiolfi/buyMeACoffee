import { Icon, Link, LinkProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLinkProps extends LinkProps {
    href: string;
    children: string;
}

export function NavLink({ children, href, ...rest }: NavLinkProps) {
    return (
        <Link
            alignItems="center"
            to={href}
            href={href}
            isExternal
            variant="unstyled"
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