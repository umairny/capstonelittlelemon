import { Box, Heading, Text, Stack, Image, SimpleGrid } from "@chakra-ui/react"
import Mario from '../../assets/mario.png'
import Adrian from '../../assets/adrian.jpg'

function Chicago() {
    return (
        <Box id="about" minH='580px' color='brand.sec1' pt={{ base: '0', md: '100px' }}>
            <SimpleGrid maxW='860px' h="100%" columns={{ base: 1, md: 2 }} m='auto'>
                <Stack align={{ base: 'center', md: 'flex-start' }} my={{ base: '6', md: '0' }}>
                    <Heading as='h1' size='2xl' color='brand.prim2'>Little Lemon</Heading>
                    <Heading as='h2' size='xl'>Chicago</Heading>
                    <Box maxW='270px'>
                        <Text textAlign='justify'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </Text>
                        <Text textAlign='justify' >
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </Text>
                    </Box>
                </Stack>
                <Stack pos='relative' minH='400px'>
                    <Image
                        src={Mario}
                        alt="Mario"
                        w={{ base: '195px', md: '268px' }}
                        pos='absolute'
                        right={{ base: '10', md: '0' }}
                        zIndex='10'
                        borderRadius={'16'}
                    />
                    <Image
                        src={Adrian}
                        alt="Adrian"
                        w={{ base: '195px', md: '268px' }}
                        pos='absolute'
                        right={{ base: '190px', md: '174px' }}
                        top='107px'
                        borderRadius={'16'}
                    />
                </Stack>
            </SimpleGrid>
        </Box>
    )
}

export default Chicago