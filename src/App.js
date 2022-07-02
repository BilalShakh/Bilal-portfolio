import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, Text } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">Bilal_S.</Heading>

        <Spacer></Spacer>
        
        <Text fontWeight={400} _hover={{ cursor: 'pointer', textDecor: 'underline' }} p={2} onClick={() => window.open("https://drive.google.com/file/d/1EgZ2f11CthlgsNYy9dITHdRoQoPkuxIk/view?usp=sharing")}>
          Resume 
        </Text>
        
        <IconButton ml={2} icon={<AiTwotoneMail />} isRound='true' onClick={() => window.open("mailto:shaikb2@mcmaster.ca")}></IconButton>
        <IconButton ml={2} icon={<FaLinkedin />} isRound='true' onClick={() => window.open("https://www.linkedin.com/in/bilal-shakh/")}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={() => window.open("https://github.com/BilalShakh")}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
      <Education />
      <Experience />
      <Projects />
    </VStack>
  );
}

export default App;
