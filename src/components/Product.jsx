import React, { useEffect, useState } from 'react';
import { SimpleGrid, Box, Button, Image, Link, Text } from '@chakra-ui/react'

function Product() {

    const [result, setResult] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products?limit=12')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResult(data)
            })
    }, []);

    return (
        <SimpleGrid columns={3} w='80%' m='auto' mt="5" spacing='40px'>
            {result.map(product => (
                <Box p={4} display={{ xl: 'flex' }} className='product' key={product.id}>
                    <Box flexShrink={0}>
                        <Image
                            className='product-img'
                            borderRadius='lg'
                            width={{ md: 40 }}
                            src={product.image}
                            alt='Woman paying for a purchase'
                        />
                    </Box>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                        <Text
                            fontWeight='bold'
                            textTransform='uppercase'
                            fontSize='sm'
                            letterSpacing='wide'
                            color='teal.600'
                        >
                            {product.title}
                        </Text>
                        <Link
                            mt={1}
                            display='block'
                            fontSize='lg'
                            lineHeight='normal'
                            fontWeight='semibold'
                            href='#'
                        >
                            ${product.price}
                        </Link>
                        <Text mt={2} color='gray.500'>
                            <Button colorScheme="blue">
                                ADD TO CART
                            </Button>
                        </Text>
                    </Box>
                </Box>
            ))}
        </SimpleGrid>
    );
}

export default Product;
