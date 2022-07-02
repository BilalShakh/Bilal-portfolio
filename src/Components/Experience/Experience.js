import { VStack, Heading, Flex, Divider, Box, Text, useColorModeValue, Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { MdWork } from 'react-icons/md'
import ExperienceCard from './ExperienceCard'
import ExperienceDataJSON from './ExperienceData.json'


function Experience() {
    var ExperienceData = ExperienceDataJSON.JobData;
    var num = 0;
    var colorModeRes = useColorModeValue('white', 'gray.900');
    var colorModeRes2 = useColorModeValue('gray.900', 'white');
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction="Row" justifyContent="start" width="60%">
            <VStack>
                <Flex direction="Row" justifyContent="start" width="100%" mb={5}>
                    <Heading mr={5}>Experience</Heading>
                    <MdWork size={50}/>
                </Flex >
                <Grid
                templateColumns={isNotSmallerScreen ? 'repeat(6, 1fr)' : '1fr'}
                    gap={10}
                >
                    {
                        ExperienceData.map(item =>
                            <GridItem colStart={isNotSmallerScreen ? 4 : 0} colEnd={isNotSmallerScreen ? 7: 1}>
                                <ExperienceCard mobile={!isNotSmallerScreen} company={item.Company} position={item.Title} JobNotes={item.Points} location={item.Location} time={item.Time}/>
                            </GridItem>
                        )
                    }
                    {
                        isNotSmallerScreen ?
                        ExperienceData.map(item =>
                            <GridItem rowStart={num} rowEnd={num=num+1} colStart={3} colEnd={4}>
                                <Box borderRadius="full" width="20px" h="20px" bg={colorModeRes2} ml="-10px"  />
                                <Divider orientation='vertical' h="105%"/>
                            </GridItem>
                        ) :
                        <Box display="none">
                        </Box>
                    }
                    {
                        <Box display="none">
                            {num = 0}
                        </Box>
                    }
                    {
                        isNotSmallerScreen ?
                        ExperienceData.map(item =>
                            <GridItem rowStart={num} rowEnd={num=num+1} colStart={1} colEnd={3}>
                                <Box
                                    maxW={'445px'}
                                    w={'full'}
                                    h="min"
                                    bg={colorModeRes}
                                    boxShadow={'lg'}
                                    rounded={'md'}
                                    p={6}
                                    overflow={'hidden'}
                                >
                                    <Text>
                                        {item.Time}
                                    </Text>
                                </Box>
                            </GridItem>
                        ):
                        <Box display="none">
                        </Box>
                    }
                </Grid>
            </VStack>
        </Flex>
    )
}

export default Experience