import { AtSignIcon, CalendarIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons"
import {
    FormControl,
    Input,
    FormLabel,
    Stack,
    Textarea,
    ButtonGroup,
    Button,
    Flex,
    FormErrorMessage,
    Box,
    Heading,
    Image
} from "@chakra-ui/react"



function ContactForm({ formik, step, setStep, progress, setProgress }) {

    const errLength = !formik.errors.name && !formik.errors.email && !formik.errors.phone
    const validForm = formik.values.name === "" || formik.values.email === "" || formik.values.phone === ""

    return (
        <>
            <Stack direction={['column', 'row']} gap={{ base: '2', md: '10' }}>
                <FormControl isInvalid={!!formik.errors.name && formik.touched.name}>
                    <FormLabel htmlFor="name">
                        Full Name
                    </FormLabel>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        focusBorderColor="brand.sec1"
                        shadow="sm"
                        rounded="md"
                        {...formik.getFieldProps("name")}
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                    <FormLabel htmlFor="email">
                        Email
                    </FormLabel>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        focusBorderColor="brand.sec1"
                        shadow="sm"
                        rounded="md"
                        {...formik.getFieldProps("email")}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
            </Stack>

            <Stack direction={['column', 'row']} gap={{ base: '2', md: '10' }} justify={'space-between'} align={'center'}>
                <Stack w='50%' color={'brand.sec2'} fontSize={'lg'} display={{ base: 'none', md: 'flex' }}>
                    <Heading as={'h3'} size={'lg'}>Your booking</Heading>
                    <Box>
                        <Image src="icons/calendar.svg" alt="calendar" maxH='40px' float={'left'} />
                        <Box pl='100px' pt='10px'>{formik.values.date}</Box>

                    </Box>
                    <Box>
                        <Image src="icons/time.svg" alt="time" maxH='40px' float={'left'} />
                        <Box pl='100px' pt='10px'>{formik.values.time}</Box>
                    </Box>
                    <Box>
                        <Image src="icons/guests.svg" alt="guests" maxH='40px' float={'left'} />
                        <Box pl='100px' pt='10px'>{formik.values.guests}</Box>
                    </Box>
                    <Box>
                        <Image src="icons/occasion.svg" alt="occasion" maxH='40px' float={'left'} />
                        <Box pl='100px' pt='10px'>{formik.values.occasion}</Box>
                    </Box>



                </Stack>
                <Stack w={{ base: '100%', md: '50%' }}>
                    <FormControl isInvalid={!!formik.errors.phone && formik.touched.phone}>
                        <FormLabel htmlFor="phone" mt="2%">
                            Phone
                        </FormLabel>
                        <Input
                            type="number"
                            name="phone"
                            id="phone"
                            focusBorderColor="brand.sec1"
                            shadow="sm"
                            rounded="md"
                            {...formik.getFieldProps("phone")}
                        />
                        <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="details" mt="2%">
                            Extra details
                        </FormLabel>
                        <Textarea
                            type="text"
                            name="details"
                            id="details"
                            focusBorderColor="brand.sec1"
                            shadow="sm"
                            rounded="md"
                            placeholder="Give us some extra details about your booking if needed"
                            _placeholder={{ color: 'brand.sec2', opacity: '0.' }}
                            rows={3}
                            {...formik.getFieldProps("details")}
                        />
                    </FormControl>
                </Stack>
            </Stack>

            <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                    <Flex>
                        <Button
                            onClick={() => {
                                setStep(step - 1)
                                setProgress(progress - 33.33)
                            }}
                            bg={'brand.prim1'}
                            w="7rem"
                            mr="5%">
                            Back
                        </Button>
                        <Button
                            w="7rem"
                            isDisabled={validForm || !errLength}
                            onClick={() => {
                                setStep(step + 1)
                                setProgress(progress + 33.33)
                            }}
                            bg={'brand.prim1'}
                        >
                            Next
                        </Button>
                    </Flex>
                </Flex>
            </ButtonGroup>



        </>
    )
}

export default ContactForm