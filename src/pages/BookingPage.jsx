import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Progress,
    Box,
    Heading,
    Button,
    Spinner,
} from '@chakra-ui/react'

import { submitAPI } from '../Api/Api'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import BookingForm from '../components/forms/BookingForm'
import ContactForm from '../components/forms/ContactForm'
import ReviewForm from '../components/forms/ReviewForm'


function BookingPage({ loading, state, dispatch }) {
    const [subLoading, setSubLoading] = useState(false)
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(33.33)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: "",
            occasion: "",
            name: "",
            email: "",
            phone: "",
            details: "",
        },
        onSubmit: (values, { resetForm }) => {
            //console.log(values)
            submitAPI(values)
                .then((res) => {
                    setSubLoading(false)
                    if (res === true) {
                        resetForm();
                        navigate("/thankyou")
                    }
                })
                .catch((err) => {
                    setSubLoading(false)
                    alert(`${err.message}        Error       Enter a valid time`)
                })

        },
        validationSchema: Yup.object({
            date: Yup.string().required("Date is Required"),
            time: Yup.string().required("Time is Required"),
            guests: Yup.number().min(1, "Must be 1 or more").max(11, "Must be less then or equal to 10").required("Required"),
            occasion: Yup.string().required("Occasion is Required"),
            name: Yup.string().required("Name is required").min(3, "Must be more than 3 letters").max(20, "Must be less than 20 "),
            email: Yup.string().email("Enter a valid email").required("Email is required"),
            phone: Yup.string().required("Phone number is required").min(7, "Min 7 number").max(13, "Max 13 number")
        }),
    });


    return (
        <>
            {step === 1 ?
                <Box w='100vw' h='40vh'
                    bgImage="url('/reservedate.jpeg')"
                    bgPosition="bottom"
                    bgRepeat="no-repeat"
                    bgSize={{ base: 'cover', md: '860px' }}
                    mb='7'
                >
                </Box>
                :
                step === 2 ?
                    <Box w='100vw' h='40vh'
                        bgImage="url('/reservecontact.jpeg')"
                        bgPosition="bottom"
                        bgRepeat="no-repeat"
                        bgSize={{ base: 'cover', md: "860px" }}
                        mb='7'
                    ></Box>
                    :
                    <Box w='100vw' h='40vh'
                        bgImage="url('/review.jpg')"
                        bgPosition="bottom"
                        bgRepeat="no-repeat"
                        bgSize={{ base: 'cover', md: "contain" }}
                        mb='7'
                    ></Box>
            }

            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form">
                <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated colorScheme='yellow'></Progress>
                <Heading textAlign={'center'} mb="2%">
                    Reservation Form
                </Heading>

                {step === 1 ?
                    <BookingForm
                        loading={loading}
                        state={state}
                        dispatch={dispatch}
                        formik={formik}
                        step={step}
                        setStep={setStep}
                        progress={progress}
                        setProgress={setProgress}
                    />
                    :
                    step === 2 ?
                        <ContactForm
                            formik={formik}
                            step={step}
                            setStep={setStep}
                            progress={progress}
                            setProgress={setProgress}
                        />
                        :
                        <ReviewForm
                            formik={formik}
                            step={step}
                            setStep={setStep}
                            progress={progress}
                            setProgress={setProgress}
                        />
                }
                {step === 3 && (
                    <Button
                        w="10rem"
                        bg={'brand.prim1'}
                        onClick={(e) => {
                            formik.handleSubmit(e)
                            setSubLoading(true)
                        }}
                    >
                        {subLoading ? <Spinner /> : "Reserve the table"}
                    </Button>
                )
                }

            </Box >
        </>
    )
}

export default BookingPage