import { useMediaQuery, Stack, Circle, Flex, Box, Text, Button, useColorMode, Image } from '@chakra-ui/react';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hello, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, purple.600, purple.600)" bgClip='text' >Bilal Shaikh</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"} maxW="800px">
                        Developer with a passion for Web Development with a interest towards Full Stack and Front-end Development. Experienced with Angular, React, ServiceNow, SQL 
                        and much more.
                    </Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://www.linkedin.com/in/bilal-shakh/")
                    }>Contact Me</Button>
                    <Button ml={5} mt={8} colorScheme="purple" onClick={() =>
                        window.open("https://drive.google.com/file/d/1EgZ2f11CthlgsNYy9dITHdRoQoPkuxIk/view?usp=sharing")
                    }>Resume</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://avatars.githubusercontent.com/u/48187140?v=4' />
            </Flex>

        </Stack>
    )
}

export default Header
