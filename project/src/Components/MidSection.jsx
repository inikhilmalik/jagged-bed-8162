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
                <Box display={"flex"}  >
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

            <Box margin={"auto"} textAlign={"start"} width={"90%"} marginTop={"30px"}>
                <Text fontWeight={500} fontSize={35}>Trends In Furniture And Decor</Text>
                <Box display={"flex"}  margin={"auto"} marginTop={"20px"}  >
                    <Box >
                        <img width={"97%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_1.jpg" alt="pic" />
                        <Text  marginTop={"10px"} fontSize={22}>Pantone Color Sofas</Text>
                        <Text  color={"grey"} fontSize={18}>Explore Starting Rs.10939</Text>
                    </Box>
                    <Box>
                        <img width={"97%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_2.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>Gentle Lighting Shelf Lamps</Text>
                        <Text  color={"grey"} fontSize={18}>Explore Starting Rs.1999</Text>
                    </Box>
                    <Box>
                        <img width={"97%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_3.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>Maximalist Pieces By Chumbak</Text>
                        <Text  color={"grey"} fontSize={18}>Explore Starting Rs.4495</Text>
                    </Box>
                </Box>
            </Box>

            <Box margin={"auto"} textAlign={"start"} width={"90%"} marginTop={"30px"}>
                <Text fontWeight={500} fontSize={35}>New Arrivals</Text>
                <Box display={"flex"}  margin={"auto"} marginTop={"20px"}  >
                    <Box >
                        <img width={"95%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section7_web_04012023_1.jpg" alt="pic" />
                        <Text  marginTop={"10px"} fontSize={22}>Premium Office Chairs</Text>
                        <Text  color={"grey"} fontSize={18}>06+Options</Text>
                        <Text  color={"grey"} fontSize={18}>Starting Rs.14499</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_newarrival_17012023_web.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>Unique Collectibles</Text>
                        <Text  color={"grey"} fontSize={18}>120+Options</Text>
                        <Text  color={"grey"} fontSize={18}>Starting Rs.249</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section7_web_04012023_3.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>Printed Cushion Covers</Text>
                        <Text  color={"grey"} fontSize={18}>150+Options</Text>
                        <Text  color={"grey"} fontSize={18}>Starting Rs.149</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_4.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>Upholstered Beds</Text>
                        <Text  color={"grey"} fontSize={18}>70+Options</Text>
                        <Text  color={"grey"} fontSize={18}>Starting Rs.9199</Text>
                    </Box>
                </Box>
            </Box>

            <Box margin={"auto"} textAlign={"start"} width={"90%"} marginTop={"30px"}>
                <Text fontWeight={500} fontSize={35}>The Winter Edit</Text>
                <Box display={"flex"}  margin={"auto"} marginTop={"20px"}  >
                    <Box >
                        <img width={"97%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_1.jpg" alt="pic" />
                    </Box>
                    <Box>
                        <img width={"97%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_2.jpg" alt="" />
                    </Box>
                    <Box>
                        <img width={"97%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_3.jpg" alt="" />
                    </Box>
                </Box>
            </Box>

            <Box margin={"auto"} textAlign={"start"} width={"90%"} marginTop={"30px"}>
                <Text fontWeight={500} fontSize={35}>What The Fry Deals</Text>
                <Box display={"flex"}  margin={"auto"} marginTop={"20px"}  >
                    <Box >
                        <img width={"95%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_1.jpg" alt="pic" />
                        <Text  marginTop={"10px"} fontSize={22}>Popular For Sofas</Text>
                        <Text  color={"grey"} fontSize={18}>600+Options</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_2.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>Popular For Office</Text>
                        <Text  color={"grey"} fontSize={18}>45+Options</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_3.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>Popular For Home</Text>
                        <Text  color={"grey"} fontSize={18}>290+Options</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_4.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>Popular For Serveware</Text>
                        <Text  color={"grey"} fontSize={18}>120+Options</Text>
                    </Box>
                </Box>
            </Box>
            <Box margin={"auto"} textAlign={"start"} width={"90%"} marginTop={"30px"}>
                <Text fontWeight={500} fontSize={35}>Inspiration From Our Blog</Text>
                <Box display={"flex"}  margin={"auto"} marginTop={"20px"}  >
                    <Box >
                        <img width={"95%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_1.jpg" alt="pic" />
                        <Text  color={"grey"} fontSize={18}>How  to Declutter Your House Based on Your Personal Type?</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_2.jpg" alt="" />
                        <Text  color={"grey"} fontSize={18}>5 Elegant Ideas for Your Dreamy Modern Master Bedroom</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_3.jpg" alt="" />
                        <Text  color={"grey"} fontSize={18}>7 Decor Ideas to Spruce up Your Hallway</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_4.jpg" alt="" />
                        <Text  color={"grey"} fontSize={18}>3 Trends You Can Use This Holiday Season In Your Home</Text>
                    </Box>
                </Box>
            </Box>

            <Box margin={"auto"} textAlign={"start"} width={"90%"} marginTop={"30px"}>
                <Text fontWeight={500} fontSize={35}>Customers Speak</Text>
                <Box display={"flex"}  margin={"auto"} marginTop={"20px"}  >
                    <Box >
                        <img width={"95%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_7.jpg" alt="pic" />
                        <Text  marginTop={"10px"} fontSize={22}>Bought these two grey puffy stools from pepperfry. Found them to be surprise...</Text>
                        <br/>
                        <Text   fontSize={18}>Suman Senapatia</Text>
                        <Text  color={"grey"} fontSize={18}>Visakhapatnam</Text>
                    </Box>
                    <Box >
                        <img width={"95%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/happy_customer_block_2_2906_0222.png" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>I purchased Candy Study Chair in Pink Colour by Alex Daisy from pepperfry looks...</Text>
                        <br/>
                        <Text fontSize={18}>Satya Madhana</Text>
                        <Text  color={"grey"} fontSize={18}>Secunderabad</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_9.jpg" alt="" />
                        <Text marginTop={"10px"} fontSize={22}>Purchased an ergonomic chair, I thought it would not be fitting for me but once it got...</Text>
                        <br/>
                        <Text  fontSize={18}>Baba Kattubadi</Text>
                        <Text  color={"grey"} fontSize={18}>Hyderabad</Text>
                    </Box>
                </Box>
            </Box>

            <Box margin={"auto"} textAlign={"start"} width={"90%"} marginTop={"30px"}>
                <Text fontWeight={500} fontSize={35}>Need Help Buying?</Text>
                <Box display={"flex"}  margin={"auto"} marginTop={"20px"}  >
                    <Box >
                        <img width={"95%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_1.jpg" alt="pic" />
                        <Text   fontSize={18}>Here's How To Choose The Right Sofa</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_2.jpg" alt="" />
                        <Text   fontSize={18}>How To Buy A Perfect Bed For Your Room</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_3.jpg" alt="" />
                        <Text   fontSize={18}>Your Guide To Buy The</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_4.jpg" alt="" />
                        <Text   fontSize={18}>Everything About Cabinet</Text>
                    </Box>
                    <Box >
                        <img width={"95%"} src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_5.jpg" alt="pic" />
                        <Text   fontSize={18}>What To Look For While Buying A Chair</Text>
                    </Box>
                    <Box>
                        <img width={"95%"} src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_6.jpg" alt="" />
                    </Box>
                </Box>
            </Box>

            <Box marginTop={"30px"} paddingTop={"50px"} lineHeight={"30px"} bg={"#f3f5f7"} display={"flex"} h={"400px"}  justifyContent={"space-evenly"} textAlign={"start"}>
                <Box>
                <Text color={"black"} fontWeight={500}  fontSize={18}>Useful Links</Text>
                <Text color={"grey"}  fontSize={15}>About Us</Text>
                <Text color={"grey"}  fontSize={15}>Our Blog</Text>
                <Text color={"grey"}  fontSize={15}>Careers</Text>
                <Text color={"grey"}  fontSize={15}>Corporate Governance</Text>
                <Text color={"grey"}  fontSize={15}>Pepperfry In the News</Text>
                <Text color={"grey"}  fontSize={15}>Find A Studio</Text>
                <Text color={"grey"}  fontSize={15}>Gift Cards</Text>
                <Text color={"grey"}  fontSize={15}>Brands</Text>
                <Text color={"grey"}  fontSize={15}>Customer Reviews</Text>
                </Box>
                <Box>
                <Text color={"black"} fontWeight={500}  fontSize={18}>Partners</Text>
                <Text color={"grey"}  fontSize={15}>Sell With Us</Text>
                <Text color={"grey"}  fontSize={15}>Become a Franchisee</Text>
                <Text color={"grey"}  fontSize={15}>Become a Pep Homie</Text>
                <Text color={"grey"}  fontSize={15}>Design For Us</Text>
                <Text color={"grey"}  fontSize={15}>Pepperfry In the News</Text>
                <Text color={"grey"}  fontSize={15}>Pepperfry Marketplace</Text>
                <Text color={"grey"}  fontSize={15}>Login to Your Merchant</Text>
                <Text color={"grey"}  fontSize={15}>Important : GST and You</Text>
                <Text color={"grey"}  fontSize={15}>Corporate Enquiries</Text>
                </Box>
                <Box>
                <Text color={"black"} fontWeight={500}  fontSize={18}>Need Help?</Text>
                <Text color={"grey"}  fontSize={15}>Contact Us</Text>
                <Text color={"grey"}  fontSize={15}>Returns & Refund</Text>
                <Text color={"grey"}  fontSize={15}>Track Your Order</Text>
                <Text color={"grey"}  fontSize={15}>FAQs</Text>
                <Text color={"grey"}  fontSize={15}>Buy on Phone</Text>
                </Box>
                <Box>
                <Text color={"black"} fontWeight={500}  fontSize={18}>Download App</Text>
                    <Button margin={"10px 0px 10px 0px"} variant={"outline"} borderColor={"black"} borderRadius={"0px"} >App Store</Button>
                    <br/>
                    <Button variant={"outline"} borderColor={"black"} borderRadius={"0px"} >Play Store</Button>
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

