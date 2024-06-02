import { Box, Container, VStack, HStack, Text, Image, Button, IconButton, Link, Flex, Spacer } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex align="center" px={8}>
          <Text fontSize="2xl" fontWeight="bold">
            Echo Engage Digital
          </Text>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#contact">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.700" color="white" py={20} textAlign="center">
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">
            We Are Echo Engage Digital
          </Text>
          <Text fontSize="xl">Your Partner in Digital Marketing</Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </VStack>
      </Box>

      {/* About Section */}
      <Box id="about" py={20} px={8}>
        <VStack spacing={4} textAlign="center">
          <Text fontSize="3xl" fontWeight="bold">
            About Us
          </Text>
          <Text fontSize="lg">Echo Engage Digital is a full-service digital marketing agency that helps businesses grow online. We specialize in social media marketing, content creation, and digital strategy.</Text>
          <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwwfHx8fDE3MTczNjY4OTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Digital Marketing Team" borderRadius="md" />
        </VStack>
      </Box>

      {/* Services Section */}
      <Box id="services" bg="gray.100" py={20} px={8}>
        <VStack spacing={4} textAlign="center">
          <Text fontSize="3xl" fontWeight="bold">
            Our Services
          </Text>
          <HStack spacing={8} justify="center">
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Text fontSize="xl" fontWeight="bold">
                Social Media Marketing
              </Text>
              <Text mt={2}>We create and manage top-performing social media campaigns for your business.</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Text fontSize="xl" fontWeight="bold">
                Content Creation
              </Text>
              <Text mt={2}>Our team produces engaging content that resonates with your audience.</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Text fontSize="xl" fontWeight="bold">
                Digital Strategy
              </Text>
              <Text mt={2}>We develop comprehensive digital strategies to help you achieve your business goals.</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>

      {/* Portfolio Section */}
      <Box id="portfolio" py={20} px={8}>
        <VStack spacing={4} textAlign="center">
          <Text fontSize="3xl" fontWeight="bold">
            Our Portfolio
          </Text>
          <Text fontSize="lg">Check out some of our recent projects.</Text>
          <HStack spacing={8} justify="center">
            <Image src="https://images.unsplash.com/photo-1667709525632-ca0ce065951d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMXxlbnwwfHx8fDE3MTczNjY4OTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" borderRadius="md" boxSize="200px" />
            <Image src="https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMnxlbnwwfHx8fDE3MTczNjY4OTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" borderRadius="md" boxSize="200px" />
            <Image src="https://images.unsplash.com/photo-1701486822668-84a4bd93b059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwM3xlbnwwfHx8fDE3MTczNjY4OTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 3" borderRadius="md" boxSize="200px" />
          </HStack>
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box id="contact" bg="gray.100" py={20} px={8}>
        <VStack spacing={4} textAlign="center">
          <Text fontSize="3xl" fontWeight="bold">
            Contact Us
          </Text>
          <Text fontSize="lg">We'd love to hear from you! Get in touch with us today.</Text>
          <Button colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </VStack>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4}>
        <VStack spacing={4}>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebookF />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} size="lg" />
          </HStack>
          <Text>&copy; {new Date().getFullYear()} Echo Engage Digital. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
