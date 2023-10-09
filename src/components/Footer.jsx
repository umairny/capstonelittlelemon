import { Image, Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"
import FooterLogo from '../assets/footerLogo.png'

function Footer() {
    return (
        <Stack bg={'brand.sec2'} minH='400px' alignItems={'center'} justifyContent={'center'}>
            <footer>
                <Container as={Stack} maxW={'860px'} centerContent>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
                        spacing={8}
                    >
                        <Stack align={{ md: 'flex-start', base: 'center' }} pt={4}>
                            <Box>
                                <Image src={FooterLogo} alt="Logo" />
                            </Box>
                            <Text fontSize={'sm'} pr={5}>
                                All the rights reserve to Little-Lemon.
                            </Text>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text fontWeight={'bold'} fontSize={'lg'} mb={2}>
                                Doormat Navigation
                            </Text>
                            <Link to='/'>
                                <Box _hover={{ color: 'brand.prim1' }} >
                                    Home
                                </Box>
                            </Link>
                            <Link to='/#about'>
                                <Box _hover={{ color: 'brand.prim1' }} >
                                    About
                                </Box>
                            </Link>
                            <Link to='/menu'>
                                <Box _hover={{ color: 'brand.prim1' }} >
                                    Menu
                                </Box>
                            </Link>
                            <Link to='/reserve'>
                                <Box _hover={{ color: 'brand.prim1' }} >
                                    Reservations
                                </Box>
                            </Link>
                            <Link to='/order'>
                                <Box _hover={{ color: 'brand.prim1' }} >
                                    Order Online
                                </Box>
                            </Link>
                            <Link to='/login'>
                                <Box _hover={{ color: 'brand.prim1' }} >
                                    Login
                                </Box>
                            </Link>
                            <Outlet />
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text fontWeight={'bold'} fontSize={'lg'} mb={2}>
                                Contact
                            </Text>
                            <Box>
                                3256 Broadway NY
                            </Box>
                            <Box>
                                957-985-1088
                            </Box>
                            <Box>
                                little-lemon@contact.com
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text fontWeight={'bold'} fontSize={'lg'} mb={2}>
                                Social contact
                            </Text>
                            <Box>
                                Twitter
                            </Box>
                            <Box>
                                Facebook
                            </Box>
                            <Box>
                                Instagram
                            </Box>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </footer>
        </Stack>
    )
}

export default Footer