import { useRef, useEffect } from "react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Image, Box, Flex, IconButton, useDisclosure, Collapse } from "@chakra-ui/react"
import { DesktopNav, MobileNav } from "./Nav"
import Logo from '../assets/Logo.png'
import Basket from '../assets/basket.svg'

function Header() {
    const { isOpen, onToggle } = useDisclosure()
    const headerRef = useRef(null)

    console.log(headerRef)

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            console.log(headerElement)
            //console.log(currentScrollPos)
            if (!headerElement) {
                return;
            }
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <Box
            color={'#495E57'}
            shadow={'md'}
            top={0}
            left={0}
            right={0}
            translateY={0}
            transition="transform 0.3s"
            position="fixed"
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#ffffff"
            zIndex={10000}
            ref={headerRef}
        >
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