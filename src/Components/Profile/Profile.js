import React from 'react'
import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { DiMysql } from 'react-icons/di'
import { FaAngular, FaReact } from 'react-icons/fa';


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    1+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Software Engineer and Developer, specialized in Full Stack Development.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Box pl="4">
                            <FaAngular color="white" size={80} />
                        </Box>
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Angular
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Box pl="4">
                            <FaReact color="black" size={80} />
                        </Box>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            React
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}

                    >
                        <Box pl="4">
                            <DiMysql color="black" size={80} />
                        </Box>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            MySQL
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default Profile
