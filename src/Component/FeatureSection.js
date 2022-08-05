import { 
  Heading, 
  Text, 
  VStack,
  Box,
  Stack,
  Button,
  useColorModeValue, 
 
} from '@chakra-ui/react'
import Lottie from 'react-lottie';
import cyber from '../lotties/cyber.json';
import network from '../lotties/Network.json';
import web from '../lotties/Web management.json';

import React from 'react'

function FeatureSection() {

  const cyberOptions = {
      loop: true,
      autoplay: true,
      animationData: cyber,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  const networkOptions = {
      loop: true,
      autoplay: true,
      animationData: network,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  const webOptions = {
      loop: true,
      autoplay: true,
      animationData: web,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  return (
    <VStack >
      <Heading as="h2">What We Do </Heading>
      <Text p={5} textAlign="center" w={["90%","70%","40%"]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
      {/* <Center py={6}> */}
        {/* box 1 */}
      <Stack direction={['column','column','row']} spacing="10%"  >

      <Box
        maxW={'330px'}
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
          {/* cyber animation */}
          <Lottie 
	          options={cyberOptions}
            height={200}
            width={200}
          />
          {/* end */}
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            Cyber Security Solution
          </Text>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
         <Text alignContent="center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>
             Learn More
          </Button>
        </Box>
      </Box>

      {/* box 2 */}
      
      <Box
        maxW={'330px'}
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
          {/* cyber animation */}
          <Lottie 
	          options={networkOptions}
            height={200}
            width={200}
          />
          {/* end */}
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            Network Security Solution
          </Text>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
         <Text alignContent="center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>
             Learn More
          </Button>
        </Box>
      </Box>

      {/* box 3 */}
      
      <Box
        maxW={'330px'}
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
          {/* cyber animation */}
          <Lottie 
	          options={webOptions}
            height={200}
            width={200}
          />
          {/* end */}
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            Managed web application
          </Text>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
         <Text alignContent="center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>
             Learn More
          </Button>
        </Box>
      </Box>
      </Stack>

      
    {/* </Center> */}
    </VStack>
  )
}

export default FeatureSection