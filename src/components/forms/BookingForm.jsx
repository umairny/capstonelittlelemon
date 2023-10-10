import {
    Text,
    FormControl,
    FormLabel,
    Input,
    Select,
    FormHelperText,
    ButtonGroup,
    Button,
    Flex,
    Spinner,
    FormErrorMessage
} from '@chakra-ui/react'
import { useEffect } from 'react'


function BookingForm({ loading, state, dispatch, formik, step, setStep, progress, setProgress }) {

    const errLength = !formik.errors.date && !formik.errors.time && !formik.errors.guests && !formik.errors.occasion
    const validForm = formik.values.date === "" || formik.values.time === "" || formik.values.guests === "" || formik.values.occasion === ""

    //console.log(validForm)
    // console.log(!errLength)


    return (
        <>
            <Text w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Select date and time
            </Text>
            <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="res-date" fontWeight={'normal'}>
                    Choose Date:
                </FormLabel>
                <Input
                    id="res-date"
                    name='res-date'
                    type="date"
                    placeholder="Select Date"
                    focusBorderColor="brand.sec1"
                    shadow='sm'
                    rounded='md'
                    onChange={(e) => {
                        dispatch({ type: 'SELECT_DATE', payload: e.target.value });
                        formik.setFieldValue("date", e.target.value)
                    }}
                    value={formik.values.date}
                    aria-label='enter date'
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>

            <FormControl mt="2%" isInvalid={!!formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="res-time" fontWeight={'normal'}>
                    Choose Time:
                </FormLabel>
                {loading ?
                    <Spinner />
                    :
                    (<Select
                        id="res-time"
                        name='res-time'
                        placeholder='Select the time'
                        focusBorderColor="brand.sec1"
                        shadow='sm'
                        rounded='md'
                        {...formik.getFieldProps("time")}
                        aria-label='select time'
                    >
                        {state.availableTimes.map((time, i) => (
                            <option key={i} value={time}>{time}</option>
                        ))}
                    </Select>)
                }
                {formik.errors.time ?
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage> :
                    <FormHelperText>Please select the available time according to your date.</FormHelperText>
                }
            </FormControl>

            <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
                <FormLabel htmlFor="guests" fontWeight={'normal'} mt="2%">
                    Number of guests
                </FormLabel>
                <Input
                    id="guests"
                    name='guests'
                    type='number'
                    min={1}
                    max={10}
                    focusBorderColor="brand.sec1"
                    shadow='sm'
                    rounded='md'
                    {...formik.getFieldProps("guests")}
                    aria-label='choose number of guests'
                />
                {formik.errors.guests ?
                    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage> :
                    <FormHelperText>Min 1 and Max 10 guests allowed.</FormHelperText>
                }
            </FormControl>

            <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion}>
                <FormLabel htmlFor="occasion" fontWeight={'normal'} mt="2%">
                    Occasion
                </FormLabel>
                <Select
                    id="occasion"
                    name='occasion'
                    placeholder='Select Occasion'
                    focusBorderColor="brand.sec1"
                    shadow='sm'
                    rounded='md'
                    {...formik.getFieldProps("occasion")}
                    aria-label='select occasion'
                >
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="engagement">Engagement</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormControl>

            <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                    <Flex>
                        <Button
                            name='prev'
                            isDisabled
                            bg={'brand.prim1'}
                            w="7rem"
                            mr="5%"
                            aria-label='On Click back'
                        >
                            Back
                        </Button>
                        <Button
                            name='next'
                            w="7rem"
                            aria-label='On Click next'
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

export default BookingForm