import { VStack, Heading, Flex } from '@chakra-ui/react'
import React from 'react'
import EducationCard from './EducationCard'
import { ImBooks } from 'react-icons/im'

function Education() {
    return (
        <Flex direction="Row" justifyContent="start" width="60%">
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