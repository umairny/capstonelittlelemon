import {
    Text,
    ButtonGroup,
    Button,
    Flex,
    Table,
    TableCaption,
    TableContainer,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react'

function ReviewForm({ formik, step, setStep, progress, setProgress }) {

    return (
        <>
            <Text w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Review your details
            </Text>
            <TableContainer>
                <Table variant='striped' colorScheme='yellow'>
                    <Thead>
                        <Tr>
                            <Th fontSize={'lg'}>Title</Th>
                            <Th fontSize={'lg'}>Details you entered</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Object.keys(formik.values).map((key, index) => {
                            return (
                                <Tr key={index}>
                                    <Td textTransform='capitalize'>
                                        {key}
                                    </Td>
                                    <Td textTransform='capitalize'>
                                        {formik.values[key]}
                                    </Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>

            <ButtonGroup mt="5%" mb="2%" w={{ base: "100%", md: "70%" }}>
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
                            isDisabled
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

export default ReviewForm