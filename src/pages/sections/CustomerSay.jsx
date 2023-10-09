import { Stack, VStack, Heading } from "@chakra-ui/react"
import Testimony from "../../components/Testimony"
import Nicole from '../../assets/nicole.jpeg'
import Merry from '../../assets/mery.jpeg'
import Chris from '../../assets/chris.jpg'
import John from '../../assets/john.jpeg'

const Testimonials = [
    {
        rating: '5',
        image: Nicole,
        name: 'Nicole',
        descriptions: 'Delicious food! Great staff and owners. Our whole family enjoying feasting here!!'
    },
    {
        rating: '5',
        image: Merry,
        name: 'Mary',
        descriptions: 'Fresh made in house. Friendly staff, super delicious food.'
    },
    {
        rating: '5',
        image: Chris,
        name: 'Chris',
        descriptions: 'Love it! I come here all the time for the best greek salad.'
    },
    {
        rating: '5',
        image: John,
        name: 'John',
        descriptions: 'I love this place! Great food,great people, great price!'
    }
]

function CustomerSay() {
    return (
        <Stack minH='590px' w='100%' bg='brand.sec2' mt='6' p={3}>
            <VStack maxW='860px' m='Auto' spacing='8'>
                <Heading color='brand.sec1'>Testimonials</Heading>
                <Stack direction={['column', 'row']} spacing={6} >
                    {Testimonials.map((data, i) =>
                        <Testimony
                            key={i}
                            rating={data.rating}
                            image={data.image}
                            name={data.name}
                            descriptions={data.descriptions}
                        />
                    )}
                </Stack>

            </VStack>
        </Stack >
    )
}

export default CustomerSay