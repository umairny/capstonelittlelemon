import { Routes, Route } from "react-router-dom"
import { useEffect, useReducer, useState } from "react"
import { Box } from "@chakra-ui/react"
import { fetchAPI, submitAPI } from '../Api/Api'

import Home from '../pages/Home'
import Menu from "../pages/Menu"
import BookingPage from '../pages/BookingPage'
import Login from '../pages/Login'
import OrderOnline from '../pages/OrderOnline'
import PageNotFound from "../pages/PageNotFound"
import Thankyou from "./forms/Thankyou"
import Signup from "../pages/Signup"

const initializeTimes = {
    availableTimes: [],
    selectedDate: ''
}

function updateTime(state, action) {
    switch (action.type) {
        case 'SELECT_DATE':
            return {
                ...state,
                selectedDate: action.payload
            }
        case 'AVAILABLE_TIMES':
            return {
                ...state,
                availableTimes: action.payload
            }
    }
    throw Error('Unknown action: ' + action.type);
}

function Main() {
    const [state, dispatch] = useReducer(updateTime, initializeTimes)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        //Simulate fetching available times
        if (state.selectedDate) {
            //keep loading until response
            setLoading(true)
            fetchAPI(state.selectedDate)
                .then((res) => {
                    //dispatch the response to available times state
                    dispatch({ type: 'AVAILABLE_TIMES', payload: res })
                    setLoading(false)
                })
                .catch((err) => {
                    //dispatch err
                    dispatch({ type: 'AVAILABLE_TIMES', payload: [err.message] })
                    setLoading(false)
                })
        }
    }, [state.selectedDate]);//trigger when date selected

    return (
        <Box
            minH='70vh'
            w='100vw'
            color="brand.sec1"
            mt={'123px'}
        >
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="reserve"
                        element={
                            <BookingPage
                                loading={loading}
                                state={state}
                                dispatch={dispatch}
                            />
                        } />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="order" element={<OrderOnline />} />
                    <Route path="thankyou" element={<Thankyou />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>

        </Box>
    )
}

export default Main