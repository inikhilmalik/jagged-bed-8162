import React from "react";
import REACTLOGO from "../Images/LOGO.png"
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,
    Img,
    Center
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import Modals from "./Modals";
import SignUp from "./SignUp";
import Login from "./Login";
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box >
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          
          <Flex flex={{ base: 1 }}  h={"65px"} alignItems={"center"} justify={{ base: 'center', md: 'start' }}>
            
            <img style={{margin:"0px 20px 0px 0px"}} width="155px" src={REACTLOGO} alt="logo" />
            
           <Input bg={"whitesmoke"} placeholder="Your door to happiness opens with a search" borderRadius={"0px"} />
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
            >
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              <Modals text="SignUp" comp={<SignUp/>} />
            </Button>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
                <Modals text="Login" comp={<Login/>}  />
            </Button>
            <Button
              as={'a'}
              fontSize={'17px'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Favourite
            </Button>
            <Button
              as={'a'}
              fontSize={'17px'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Cart
            </Button>
            
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
         
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        
          <Box>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                 
                </Link>
              </PopoverTrigger>
  
              
            </Popover>
          </Box>
       
      </Stack>
    );
  };
  
  