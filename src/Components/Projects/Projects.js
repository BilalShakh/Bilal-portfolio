import { VStack, Heading, Flex, Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import ProjectsDataJSON from "./ProjectsData.json";
import ProjectsCard from './ProjectsCard';

function Projects() {
    var ProjectsData = ProjectsDataJSON.Projects;

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction="Row" justifyContent="start" width="60%" mt={10}>
            <VStack>
                <Flex direction="Row" justifyContent="start" width="100%">
                    <Heading mr={5}>Projects</Heading>
                    <AiOutlineFundProjectionScreen size={50} />
                </Flex>
                <Grid
                    templateColumns={isNotSmallerScreen ? "repeat(3, 1fr)": "1fr"}
                    gap={5}
                >
                    {
                        ProjectsData.map(item =>
                            <GridItem colSpan={1}>
                                <ProjectsCard git={item.Git} ImageSource={item.Image} ProjectType={item.Type} ProjectName={item.Name} ProjectDescription={item.Description} status={item.Status} time={item.Time}/>
                            </GridItem>
                        )
                    }
                </Grid>
            </VStack>
        </Flex>
    )
}

export default Projects