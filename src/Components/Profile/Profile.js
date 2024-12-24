import React, { useState } from 'react'
import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { DiMysql } from 'react-icons/di'
import { FaReact } from 'react-icons/fa';
import { TbBrandCSharp } from "react-icons/tb";



function Profile() {
    const NUM_TIME = 2;
    const UNIT_TIME = "Years";

    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');
    const [bgColorCSharp, setbgColorCSharp] = useState("gray.100");
    const [bgColorReact, setbgColorReact] = useState("teal.400");
    const [bgColorMySql, setbgColorMySql] = useState("gray.100");
    const [numberColor, setnumberColor] = useState("blue.400");

    const handleCardClick = (event) => {
        if (event.target.id === "C"){
            setbgColorCSharp("blue.400");
            setbgColorReact("gray.100");
            setbgColorMySql("gray.100");
            setnumberColor("blue.400");
        }else if (event.target.id === "R"){
            setbgColorReact("teal.400");
            setbgColorCSharp("gray.100");
            setbgColorMySql("gray.100");
            setnumberColor("teal.400");
        }else {
            setbgColorMySql("green.400");
            setbgColorReact("gray.100");
            setbgColorCSharp("gray.100");
            setnumberColor("green.400");
        }
    }


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px={isNotSmallerScreen ? "32": "3"} py="16">
                <Heading fontWeight="extrabold" color={numberColor} size="4xl">
                    {NUM_TIME}+
                </Heading>
                <Text fontSize="2xl" color="gray.400">{UNIT_TIME} of Experience</Text>
            </Box>
            <Box alignSelf="center" px={isNotSmallerScreen ? "32": "3"} py="16">
                <Text fontWeight="bold" fontSize="2xl">Software Engineer and Developer, specialized in Full Stack Development.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} alignItems={isNotSmallerScreen ? "inherit": "center"} >
                    <Flex id='R' onClick={handleCardClick} rounded="xl" direction="column" mt={4} 
                        bg={bgColorReact} h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", cursor: 'pointer'}}>
                        <Box id='R' pl="4">
                            <FaReact id='R' color="black" size={80} />
                        </Box>
                        <Text id='R' color="black" p="4" fontSize="xl" fontWeight="semibold">
                            React
                        </Text>
                    </Flex>
                    <Flex id='C' onClick={handleCardClick} rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg={bgColorCSharp} h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "blue.400", cursor: 'pointer'}}>
                        <Box id='C' pl="4">
                            <TbBrandCSharp id='C' color="black" size={80} />
                        </Box>
                        <Text id='C' color="black" p="4" fontSize="xl" fontWeight="semibold">
                            C#
                        </Text>
                    </Flex>
                    <Flex id='M' onClick={handleCardClick} rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg={bgColorMySql} h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", cursor: 'pointer'}}

                    >
                        <Box id='M' pl="4">
                            <DiMysql id='M' color="black" size={80} />
                        </Box>
                        <Text id='M' color="black" p="4" fontSize="xl" fontWeight="semibold">
                            MySQL
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Profile
