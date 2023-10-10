import { Box, Heading, Card, CardBody, Image, Stack, Text, CardFooter, Button } from "@chakra-ui/react"
import Greek from '../assets/greek.png'
import Bruchatta from '../assets/bruchetta.png'
import Lemon from '../assets/lemon.png'

const menuData = [
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

function Menu() {
    return (
        <Stack maxW='860px' m='auto' align={'center'} p={5}>
            <Heading>Menu Items</Heading>
            {menuData.map((menu, i) => (
                <Card
                    key={i}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >

                    <Stack>
                        <CardBody>
                            <Heading size='md'>{menu.title}</Heading>
                            <Text py='2'>
                                {menu.description}
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Text fontSize={'md'} fontWeight={'bold'} color={'brand.sec4'}>
                                Price: ${menu.price}
                            </Text>
                        </CardFooter>
                    </Stack>
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={menu.image}
                        alt={menu.image}
                    />

                </Card>
            ))}

        </Stack>
    )
}

export default Menu