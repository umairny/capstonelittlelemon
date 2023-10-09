import { Card, CardBody, Image, Stack, Text, HStack, CardFooter } from "@chakra-ui/react"
import scoter from '../assets/scoter.png'

// eslint-disable-next-line react/prop-types
function FoodCard({ title, description, imageSrc, price }) {
    return (
        <Card w='264px' borderRadius='16px 16px 0 0' bg='brand.sec2'>
            <Image
                h='185px'
                objectFit='cover'
                src={imageSrc}
                alt='GreekSalad'
                borderRadius='16px 16px 0 0'
            />
            <CardBody>
                <Stack spacing='3'>
                    <HStack justifyContent='space-between' mb='2'>
                        <Text color='brand.sec1' fontSize='xl' fontWeight='bold'>{title}</Text>
                        <Text color='brand.sec4' fontSize='xl'>${price}</Text>
                    </HStack>
                    <Text color='brand.prim2'>
                        {description}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <HStack color='brand.sec1'>
                    <Text>Order for delivery </Text>
                    <Image src={scoter} alt="scoter" w='20px' ml='2' />
                </HStack>
            </CardFooter>
        </Card>
    )
}

export default FoodCard
