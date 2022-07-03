import { VStack, Heading, Flex, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import EducationCard from './EducationCard'
import { ImBooks } from 'react-icons/im'

function Education() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');
    return (
        <Flex direction="Row" justifyContent="start" width={isNotSmallerScreen ? "60%": "100%"}>
            <VStack>
                <Flex direction="Row" justifyContent="start" width="100%">
                    <Heading mr={5}>Education</Heading>
                    <ImBooks size={50} />
                </Flex>
                <EducationCard />
            </VStack>
        </Flex>
    )
}

export default Education