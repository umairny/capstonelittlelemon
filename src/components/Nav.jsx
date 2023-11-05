import { Box, Stack } from "@chakra-ui/react"
import { Link, Outlet, useNavigate } from "react-router-dom"

const NavItem = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "about",
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

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export function DesktopNav() {
    const navigate = useNavigate()

    const handleClick = (anchor) => async () => {
        navigate('/')
        await delay(500);
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Stack direction={'row'} spacing={8}>
            {NavItem.map((item, i) => (
                item.label === "About" ?
                    <Box _hover={{ color: '#F4CE14' }} key={i + 10} as="a" onClick={handleClick(item.href)} cursor={'pointer'}>
                        {item.label}
                    </Box>
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
    const navigate = useNavigate()

    const handleClick = (anchor) => async () => {
        navigate('/')
        toggle();
        await delay(500);
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

    };

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
                    <Box _hover={{ color: '#F4CE14' }} key={i + 10} as='a' cursor={'pointer'} m={'3'}
                        onClick={handleClick(item.href)} >
                        {item.label}
                    </Box>
                    :
                    <Link key={i} to={item.href} onClick={toggle}>
                        <Box _hover={{ color: '#F4CE14' }} m={'3'}>
                            {item.label}
                        </Box>
                    </Link>
            ))
            }
            <Outlet />
        </Stack >
    )
}