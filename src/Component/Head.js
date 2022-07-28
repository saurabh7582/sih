import React from 'react'
import { Flex, Heading, IconButton, VStack, Spacer,  } from "@chakra-ui/react";
import { FaMoon, FaSun } from 'react-icons/fa'
import {useColorMode} from "@chakra-ui/color-mode"
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function Head() {

    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";
    // const [display,changeDisplay] = useState('none')
    // const color = useColorModeValue('white', 'gray.800')

    return (
     <VStack p={10}>
       <Flex w="100%" >
          <Heading
            ml="5" size="md" f
            ontWeight="semibold" color="cyan.400"
          >
            CyberHygen
          </Heading>
        <Spacer></Spacer>
        {/* Desktop navigation  */}
        <Flex alignSelf="center" display={["none","flex","flex"]}>
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
       </Flex>
    </VStack>
)}

export default Head