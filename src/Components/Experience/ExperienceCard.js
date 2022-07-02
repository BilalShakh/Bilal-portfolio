import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    useColorMode,
    ListItem,
    UnorderedList
  } from '@chakra-ui/react';
  
  export default function ExperienceCard(props) {
    
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    
    return (
      <Center py={0}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'lg'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
          ml={props.ml?props.ml:0}
          mr={props.mr?props.mr:0}>
          <Stack>
            <Text
              color={'green.500'}
              fontWeight={650}
              fontSize={'lg'}
              letterSpacing={1.1}>
              {props.company ? props.company : "Test Company"}
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}>
              {props.position ? props.position : "Test Job Position"}
            </Heading>
            <UnorderedList pl={5} color={isDark ? 'gray.400': 'gray.500'}>
              {
                props.JobNotes ?
                props.JobNotes.map(item =>
                  <ListItem>
                    {item}
                  </ListItem>
                ) : <ListItem>Test</ListItem>
              }
            </UnorderedList>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>{props.location ? props.location : "Test Job Location"}</Text>
              <Text display={props.mobile === false ? 'none': 'inherit'} color={'gray.500'}>{props.time ? props.time : "Sep. 2018 - April. 2023"}</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }