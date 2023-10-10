import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <Flex
            align={'center'}
            justify={'center'}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={'blue.400'}>Forgot password?</Text>
                            </Stack>
                            <Button
                                bg={'brand.prim1'}
                                color={'brand.prim2'}
                                _hover={{
                                    bg: 'brand.prim2',
                                    color: 'brand.prim1'
                                }}>
                                Sign in
                            </Button>
                            <Stack align={'center'}>
                                <Link to="/signup" style={{ color: 'lightBlue' }}>
                                    Not a user sign up
                                </Link>
                            </Stack>

                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}