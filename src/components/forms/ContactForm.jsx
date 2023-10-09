import {
    FormControl,
    Input,
    FormLabel,
    Text,
    Textarea,
    ButtonGroup,
    Button,
    Flex,
    FormErrorMessage
} from "@chakra-ui/react"

function ContactForm({ formik, step, setStep, progress, setProgress }) {

    const errLength = !formik.errors.name && !formik.errors.email && !formik.errors.phone
    const validForm = formik.values.name === "" || formik.values.email === "" || formik.values.phone === "" || formik.values.details === ""

    return (
        <>
            <Text w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                User Details
            </Text>
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
                <FormLabel htmlFor="email" mt="2%">
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
                    rows={3}
                    {...formik.getFieldProps("details")}
                />
            </FormControl>

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