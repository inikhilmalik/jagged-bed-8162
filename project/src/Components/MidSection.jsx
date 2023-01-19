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
    Center,
    Container
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import Cards from "./Cards";

export default function MidSection() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            <Box >
                <Box margin={"auto"} h={"50px"} w={"85%"} >
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justifyContent={"space-around"}
                        direction={'row'}
                        spacing={6}
                        color={"black"}
                        alignItems={"center"}

                    >
                        <Button
                            as={'a'}
                            _hover={{ color: "brown" }}
                            fontSize={'sm'}
                            fontWeight={500}
                            variant={'none'}
                            href={'#'}>
                            Furniture
                        </Button>
                        <Button
                            as={'a'}
                            _hover={{ color: "brown" }}
                            fontSize={'sm'}
                            fontWeight={500}
                            variant={'none'}
                            href={'#'}>
                            Home Decor
                        </Button>
                        <Button
                            as={'a'}
                            _hover={{ color: "brown" }}
                            fontSize={'sm'}
                            fontWeight={500}
                            variant={'none'}
                            href={'#'}>
                            Lamps & Lighting
                        </Button>
                        <Button
                            as={'a'}
                            _hover={{ color: "brown" }}
                            fontSize={'sm'}
                            fontWeight={500}
                            variant={'none'}
                            href={'#'}>
                            Furnishings
                        </Button>
                        <Button
                            as={'a'}
                            _hover={{ color: "brown" }}
                            fontSize={'sm'}
                            fontWeight={500}
                            variant={'none'}
                            href={'#'}>
                            Mattresses
                        </Button>
                        <Button
                            as={'a'}
                            _hover={{ color: "brown" }}
                            fontSize={'sm'}
                            fontWeight={500}
                            variant={'none'}
                            href={'#'}>
                            Appliances
                        </Button>
                        <Button
                            as={'a'}
                            _hover={{ color: "brown" }}
                            fontSize={'sm'}
                            fontWeight={500}
                            variant={'none'}
                            href={'#'}>
                            Pets
                        </Button>
                        <Button
                            as={'a'}
                            _hover={{ color: "brown" }}
                            fontSize={'sm'}
                            fontWeight={500}
                            variant={'none'}
                            href={'#'}>
                            Modular
                        </Button>
                        <Button
                            as={'a'}
                            _hover={{ color: "brown" }}
                            fontSize={'sm'}
                            fontWeight={500}
                            variant={'none'}
                            href={'#'}>
                            Gift Cards
                        </Button>
                    </Stack>
                </Box>
                <hr />
            </Box>
            <Box display={"flex"} justifyContent={"space-around"} margin={"auto"} width={"90%"} >
                <Box  >
                    <img width={"99%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_3.jpg" alt="pic" />
                </Box>
                <Box  >
                    <img width={"98.6%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/RHS-WEB_2x_1301_16-jan.jpg" alt="pic" />
                </Box>
            </Box>

            <Box margin={"auto"} width={"90%"}  >
                <img style={{ margin: "20px 0px 20px 0px" }} src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner1x_2712.jpg" alt="pic" />
            </Box>
            <Box >
                <Text fontSize={35}>Shop By Room</Text>
                <Box display={"flex"} w={"90%"} margin={"auto"} marginTop={"20px"}>
                    <Box >
                        <img width={"95%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_1.jpg" alt="pic" />
                        <Text margin={"10px"} fontSize={22}>Shop Living Room</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_2.jpg" alt="" />
                        <Text margin={"10px"} fontSize={22}>Shop Bedroom</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_3.jpg" alt="" />
                        <Text margin={"10px"} fontSize={22}>Shop Dining Room</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_4.jpg" alt="" />
                        <Text margin={"10px"} fontSize={22}>Shop Study Room</Text>
                    </Box>
                </Box>
            </Box>
            <Box margin={"auto"} textAlign={"start"} width={"90%"} marginTop={"30px"}>
                <Text fontWeight={500} fontSize={35}>What The Fry Deals</Text>
                <Box display={"flex"}  margin={"auto"} marginTop={"20px"}  >
                    <Box >
                        <img width={"95%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_1.jpg" alt="pic" />
                        <Text  marginTop={"10px"} fontSize={22}>For Rs.79 at 80% Off</Text>
                        <Text  color={"grey"} fontSize={18}>Cotton Hand Towels</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_2.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>For Rs.119 at 91% Off</Text>
                        <Text  color={"grey"} fontSize={18}>Classic Wall Clock</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_3.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>For Rs.199 at 78% Off</Text>
                        <Text  color={"grey"} fontSize={18}>Geometric Bedding</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_4.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>For Rs.129 at 86% Off</Text>
                        <Text  color={"grey"} fontSize={18}>Wall Shelf + Key Holder</Text>
                    </Box>
                </Box>
            </Box>
            
            <Box textAlign={"start"} margin={"auto"} width={"90%"} marginTop={"30px"}>
                <Text fontWeight={500} fontSize={35}>Inspire and Get Inspired</Text>
                <Box marginBottom={"30px"} display={"flex"}  >
                    <Box><Cards image={"https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section7_web_04012023_1.jpg" }
                    price={"Starting Rs.14499"} title={"Premium Office Chairs"} text={"06+Options"} /></Box>
                    <Box><Cards image={"https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section7_web_04012023_2.jpg" }
                    price={"Starting Rs.249"} title={"Unique Collectibles"} text={"120+Options"} /></Box>
                    <Box><Cards image={"https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section7_web_04012023_3.jpg" }
                    price={"Starting Rs.149"} title={"Printed Cushion Covers"} text={"150+Options"} /></Box>
                    <Box><Cards image={"https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_newarrival_17012023_web.jpg" }
                    price={"Starting Rs.9199"} title={"Upholstered Beds"} text={"70+Options"} /></Box>
                    
                </Box>
            </Box>
        </>
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

