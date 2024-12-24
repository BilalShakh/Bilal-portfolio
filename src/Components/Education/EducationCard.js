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
  
  export default function EducationCard() {
    
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    
    return (
      <Center py={6}>
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
              src="https://caldo.ca/wp-content/uploads/2020/03/McMaster-Uwithlogo-1024x682.png"
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
              McMaster University
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}>
              Software Engineering & Management (B.Eng.Mgmt)
            </Heading>
            <Text color={isDark ? 'gray.400': 'gray.500'}>
              A degree focused on developing core skills in software engineering over four years, covering areas such as programming, algorithms, 
              software design, testing, databases, and project management.
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>Graduated</Text>
              <Text color={'gray.500'}>April. 2023</Text>
              <Text color={'gray.500'}>Major GPA: 3.71</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }