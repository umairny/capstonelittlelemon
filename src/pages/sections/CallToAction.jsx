import { Stack, Flex, Image, Text, Heading, Button } from "@chakra-ui/react"
import HeroImage from '../../assets/HeroImage.png'
import { Link } from "react-router-dom"

function CallToAction() {
    return (
        <Stack h={{ md: '470px' }} >
            <section>
                <Stack bg='brand.prim2' w='100vw' align={'center'} h={{ md: '330px' }}>
                    <Stack maxW={'860px'} direction='row'>
                        <Flex flex={1} justify={'flex-start'} p={6}>
                            <Stack maxW={'300px'}>
                                <Heading as='h1' fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color='brand.prim1' mb='-3'>
                                    Little Lemon
                                </Heading>
                                <Heading as='h2' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} color='brand.sec2'>
                                    Chicago
                                </Heading>
                                <Text fontSize={{ base: 'md', lg: 'lg' }} color={'brand.sec2'} mt={2} pr={4}>
                                    We are a family owned Mediterranean restaurant, focused on traditional
                                    recipes served with a modern twist.
                                </Text>
                                <Link to="/reserve">
                                    <Button
                                        mt={2}
                                        w={{ base: '150px', md: '200px' }}
                                        h={{ base: '45px', md: '60px' }}
                                        rounded={'16'}
                                        bg={'brand.prim1'}
                                        color={'brand.prim2'}
                                        _hover={{
                                            color: 'brand.sec1',
                                            bg: 'brand.sec2',
                                        }}>
                                        Reserve Table
                                    </Button>


                                </Link>
                            </Stack>
                        </Flex>
                        <Flex flex={1} justify={'center'} align={'center'}>
                            <Image
                                m={7}
                                w={{ base: '150px', md: '375px' }}
                                h={{ base: '160px', md: '420px' }}
                                alt={'Restaurant Image'}
                                src={HeroImage}
                            />
                        </Flex>
                    </Stack>
                </Stack>

            </section>

        </Stack>
    )
}

export default CallToAction