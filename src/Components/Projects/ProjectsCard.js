import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Image,
    useColorMode
  } from '@chakra-ui/react';
  
  export default function ProjectsCard(props) {
    
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    
    return (
      <Center py={0} onClick={() => window.open(props.git)} _hover={{ cursor: "pointer" }}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              src={props.ImageSource ? props.ImageSource : "https://caldo.ca/wp-content/uploads/2020/03/McMaster-Uwithlogo-1024x682.png"}
              fit="cover"
              w="100%"
              h="100%"
            />
          </Box>
          <Stack>
            <Text
              color={'green.500'}
              fontWeight={650}
              fontSize={'lg'}
              letterSpacing={1.1}>
              {props.ProjectType ? props.ProjectType : "Test Type"}
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}>
              {props.ProjectName ? props.ProjectName : "Test Name"}
            </Heading>
            <Text color={isDark ? 'gray.400': 'gray.500'}>
              {props.ProjectDescription ? props.ProjectDescription : "Test Description"}
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>{props.status ? props.status : "Test Status"}</Text>
              <Text color={'gray.500'}>{props.time ? props.time : "Test Time"}</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }