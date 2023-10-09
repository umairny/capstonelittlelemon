import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Image, Box, Flex, IconButton, useDisclosure, Collapse } from "@chakra-ui/react"
import { DesktopNav, MobileNav } from "./Nav"
import Logo from '../assets/Logo.png'
import Basket from '../assets/basket.svg'

function Header() {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <Box color={'#495E57'}>
            <header>
                <Flex
                    maxW={'860px'}
                    minH={'123px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    align={'center'}
                    m={'auto'}
                >
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        display={{ base: 'flex', md: 'none' }}
                    >
                        <IconButton
                            onClick={onToggle}
                            icon={isOpen ? <CloseIcon w={8} h={8} /> : <HamburgerIcon w={10} h={10} />}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>

                    <Flex flex={{ base: 1 }} justify={{ base: 'start' }}>
                        <Image src={Logo} alt="Logo" maxW={{ base: '147px', md: '186px' }} />
                    </Flex>

                    <Flex display={{ base: 'none', md: "flex" }} ml={10}>
                        <DesktopNav />
                    </Flex>

                    <Flex flex={{ base: 1 }} display={{ base: 'flex', md: "none" }} justify={'flex-end'}>
                        <Image src={Basket} alt="Basket" />
                    </Flex>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav toggle={onToggle} />
                </Collapse>
            </header>
        </Box>
    )
}

export default Header