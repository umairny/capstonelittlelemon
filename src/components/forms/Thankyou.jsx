import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

function Thankyou() {
    return (
        <>
            <Box textAlign="center" color={'brand.sec4'}>
                <Box w='100vw' h='40vh'
                    bgImage="url('/reserved.jpg')"
                    bgPosition="bottom"
                    bgRepeat="no-repeat"
                    bgSize={{ base: 'cover', md: '860px' }}
                    mb='7'
                >

                </Box>
                <Box maxW={'600px'} m={'auto'} p={4}>
                    <CheckCircleIcon boxSize={'50px'} color={'brand.prim1'} />
                    <Heading as="h2" size="xl" mt={6} mb={2} color={'brand.prim2'}>
                        Thank You for Booking with Us!
                    </Heading>

                    <Text fontSize='xl' fontWeight={'bold'}>
                        We are happy to inform you that your booking is confirmed! </Text>
                    <Text fontSize={'lg'} mt={2} lineHeight={7}>
                        Thank you for your reservation. We’re dedicated to giving you the best experience possible. If you have any questions, feel free to get in touch.
                    </Text>
                    <Text mt={2} lineHeight={7} color={'brand.sec1'}>
                        Conformation E-mail and SMS sent to you.
                        All you need to do is show us this email or SMS on the day you arrive, and you will be good to go!
                    </Text>

                    <Link to="/">
                        <Button mt='5%' bg='brand.prim1' >Go Home</Button>
                    </Link>
                </Box>
            </Box>

        </>
    )
}

export default Thankyou