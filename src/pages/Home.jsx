import CallToAction from "./sections/CallToAction"
import Specials from "./sections/Special"
import CustomerSay from "./sections/CustomerSay"
import Chicago from "./sections/Chicago"
import { Box } from "@chakra-ui/react"


function Home() {
    return (
        <>

            <CallToAction />
            <Specials />
            <CustomerSay />
            <Chicago />

        </>
    )
}

export default Home