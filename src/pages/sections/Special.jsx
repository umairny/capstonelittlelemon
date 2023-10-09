import { Flex, Stack, Heading, Button, Divider } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import FoodCard from "../../components/FoodCard"
import FoodCardSmall from "../../components/FoodCardSmall"
import Greek from '../../assets/greek.png'
import Bruchatta from '../../assets/bruchetta.png'
import Lemon from '../../assets/lemon.png'


const cardData = [
    {
        image: Greek,
        title: 'Greek Salad',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        price: '12.99'
    },
    {
        image: Bruchatta,
        title: 'Bruchetta',
        description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        price: '5.99'
    },
    {
        image: Lemon,
        title: 'Lemon Dessert',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        price: '5.00'
    },
]

function Specials() {
    return (
        <Stack minH='625px' w='100%' align={'center'} >
            <Stack direction={['column', 'row']} align={'center'} justify={'space-between'} w={{ base: '100vw', md: '860px' }}>
                <Flex>
                    <Heading as='h1'
                        mt={{ base: '5', md: '0' }}
                        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        This Week Special!</Heading>
                </Flex>
                <Flex>
                    <Link to='/menu'>
                        <Button
                            display={{ base: 'none', md: 'flex' }}
                            mt={2}
                            w={{ base: '150px', md: '200px' }}
                            h={{ base: '45px', md: '60px' }}
                            rounded={'16'}
                            bg={'brand.prim1'}
                            color={'brand.prim2'}
                            _hover={{
                                color: 'brand.sec1',
                                bg: 'brand.sec2',
                            }}>
                            Online Menu
                        </Button>
                    </Link>
                </Flex>
            </Stack>
            <Divider />
            <Stack m='auto' maxW='860px' direction={['column', 'row']} spacing={10} display={{ base: 'none', md: 'flex' }} >
                {cardData.map((data) =>
                    <FoodCard
                        key={data.title}
                        title={data.title}
                        description={data.description}
                        imageSrc={data.image}
                        price={data.price}
                    />
                )}
            </Stack>
            <Stack m='auto' maxW='860px' direction={'column'} spacing={10} display={{ base: 'flex', md: 'none' }} >
                {cardData.map((data) =>
                    <FoodCardSmall
                        key={data.title}
                        title={data.title}
                        description={data.description}
                        imageSrc={data.image}
                        price={data.price}
                    />
                )}
            </Stack>

        </Stack >
    )
}

export default Specials