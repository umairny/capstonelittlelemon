import { Box, Stack } from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"

const NavItem = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/#about",
    },
    {
        label: "Menu",
        href: "/menu",
    },
    {
        label: "Reservations",
        href: "/reserve",
    },
    {
        label: "Order Online",
        href: "/order",
    },
    {
        label: "Login",
        href: "/login",
    },
]



export function DesktopNav() {
    return (
        <Stack direction={'row'} spacing={8}>
            {NavItem.map((item, i) => (
                item.label === "About" ?
                    <a key={i + 10} href={item.href} >
                        <Box _hover={{ color: '#F4CE14' }}>
                            {item.label}
                        </Box>
                    </a>
                    :
                    <Link key={i} to={item.href} >
                        <Box _hover={{ color: '#F4CE14' }}>
                            {item.label}
                        </Box>
                    </Link>
            ))
            }
            <Outlet />
        </Stack >
    )
}

// eslint-disable-next-line react/prop-types
export function MobileNav({ toggle }) {
    return (
        <Stack
            bg={'gray.100'}
            p={4}
            display={{ md: 'none' }}
            pos={'absolute'}
            top={'100'}
            left={'0'}
            w='100vw'
            zIndex={10000}
        >
            {NavItem.map((item, i) => (
                item.label === "About" ?
                    <a key={i + 10} href={item.href} >
                        <Box _hover={{ color: '#F4CE14' }}>
                            {item.label}
                        </Box>
                    </a>
                    :
                    <Link key={i} to={item.href} >
                        <Box _hover={{ color: '#F4CE14' }}>
                            {item.label}
                        </Box>
                    </Link>
            ))}
            <Outlet />
        </Stack >
    )
}