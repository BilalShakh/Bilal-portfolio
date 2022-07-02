import React, { useState } from 'react'
import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { DiMysql } from 'react-icons/di'
import { FaAngular, FaReact } from 'react-icons/fa';



function Profile() {

    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');
    const [bgColorAngular, setbgColorAngular] = useState("blue.400");
    const [bgColorReact, setbgColorReact] = useState("gray.100");
    const [bgColorMySql, setbgColorMySql] = useState("gray.100");
    const [numberColor, setnumberColor] = useState("blue.400");
    const [numTime, setNumTime] = useState(8);
    const [unitTime, setUnitTime] = useState("Months");

    const handleCardClick = (event) => {
        if (event.target.id === "A"){
            setbgColorAngular("blue.400");
            setbgColorReact("gray.100");
            setbgColorMySql("gray.100");
            setnumberColor("blue.400");
            setNumTime(8);
            setUnitTime("Months");
        }else if (event.target.id === "R"){
            setbgColorReact("teal.400");
            setbgColorAngular("gray.100");
            setbgColorMySql("gray.100");
            setnumberColor("teal.400");
            setNumTime(2);
            setUnitTime("Years");
        }else {
            setbgColorMySql("green.400");
            setbgColorReact("gray.100");
            setbgColorAngular("gray.100");
            setnumberColor("green.400");
            setNumTime(7);
            setUnitTime("Months");
        }
    }


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color={numberColor} size="4xl">
                    {numTime}+
                </Heading>
                <Text fontSize="2xl" color="gray.400">{unitTime} of Experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Software Engineer and Developer, specialized in Full Stack Development.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex id='A' onClick={handleCardClick} rounded="xl" direction="column" mt={4} bg={bgColorAngular} h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "blue.400", cursor: 'pointer'}}>
                        <Box pl="4">
                            <FaAngular color="black" size={80} />
                        </Box>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Angular
                        </Text>
                    </Flex>
                    <Flex id='R' onClick={handleCardClick} rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg={bgColorReact} h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", cursor: 'pointer'}}>
                        <Box pl="4">
                            <FaReact color="black" size={80} />
                        </Box>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            React
                        </Text>
                    </Flex>
                    <Flex id='M' onClick={handleCardClick} rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg={bgColorMySql} h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", cursor: 'pointer'}}

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
