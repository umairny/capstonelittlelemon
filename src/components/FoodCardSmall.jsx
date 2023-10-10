import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react"


// eslint-disable-next-line react/prop-types
function FoodCard({ title, description, imageSrc, price }) {
    return (
        <Card w='90vw' borderBottom='2px' borderColor='brand.sec2' shadow={'none'} borderRadius={'none'}>
            <CardBody>
                <Stack direction={'row'} align={'center'} >
                    <Stack direction={'column'} >
                        <Text color='brand.sec1' fontSize='xl' fontWeight='bold'>{title}</Text>
                        <Text color='brand.prim2' noOfLines={2}>
                            {description}
                        </Text>
                        <Text color='brand.sec4' fontSize='xl'>${price}</Text>
                    </Stack>
                    <Image
                        w={'83px'}
                        h={'83px'}
                        src={imageSrc}
                        alt={imageSrc}
                        objectFit={'cover'}
                    />
                </Stack>
            </CardBody>
        </Card>
    )
}

export default FoodCard
