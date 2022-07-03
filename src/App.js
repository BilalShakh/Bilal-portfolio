import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
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
          ml={{ base: '2', sm: '2', md: "8" }} size="md" fontWeight='semibold' color="cyan.400">Bilal_S.</Heading>

        <Spacer></Spacer>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<GiHamburgerMenu />}
            variant='outline'
            display={{ base: 'inherit', sm: 'inherit', md: 'none' }}
          />
          <MenuList>
            <MenuItem icon={<AiTwotoneMail />} onClick={() => window.open("mailto:shaikb2@mcmaster.ca")}>
              Email
            </MenuItem>
            <MenuItem icon={<FaLinkedin />} onClick={() => window.open("https://www.linkedin.com/in/bilal-shakh/")}>
              LinkedIn
            </MenuItem>
            <MenuItem icon={<FaGithub />} onClick={() => window.open("https://github.com/BilalShakh")}>
              GitHub
            </MenuItem>
            <MenuItem icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode}>
              {isDark ? "Change to Light Mode": "Change to Dark Mode"}
            </MenuItem>
          </MenuList>
        </Menu>
        
        <IconButton display={{ base: 'none', sm: 'none', md: 'inherit' }} ml={2} icon={<AiTwotoneMail />} isRound='true' onClick={() => window.open("mailto:shaikb2@mcmaster.ca")}></IconButton>
        <IconButton display={{ base: 'none', sm: 'none', md: 'inherit' }} ml={2} icon={<FaLinkedin />} isRound='true' onClick={() => window.open("https://www.linkedin.com/in/bilal-shakh/")}></IconButton>
        <IconButton display={{ base: 'none', sm: 'none', md: 'inherit' }} ml={2} icon={<FaGithub />} isRound='true' onClick={() => window.open("https://github.com/BilalShakh")}></IconButton>
        <IconButton display={{ base: 'none', sm: 'none', md: 'inherit' }} ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
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
