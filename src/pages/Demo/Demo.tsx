import React, { useState } from "react";
import logo from "@resources/logo.svg";
import {
  Button,
  Container,
  Image,
  Link,
  Heading,
  Flex,
  Box,
  Grid,
  Text,
} from "@chakra-ui/react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export const Demo = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const onClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <Flex>
      <Container centerContent>
        <Image src={logo} alt="logo" />
        <Container centerContent>
          <Heading textAlign="center">
            Vite + React + Typescript + Chakra
          </Heading>
          <Button colorScheme="pink" mt="5" onClick={onClick}>
            Press count is: {count}
          </Button>
        </Container>
        <Box mt="5" textAlign="center">
          <Link
            className="text-gray-600"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
          {" | "}
          <Link
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </Link>
        </Box>
        <Grid
          templateColumns="repeat(1, 1fr)"
          gap={1}
          mt="5"
          textAlign="center"
        >
          <Box width="200px" textAlign="center">
            <Button
              onClick={() =>
                window.open("https://twitter.com/dieman_", "_blank")
              }
              variant="link"
              leftIcon={<FaTwitter />}
              colorScheme="twitter"
              size="md"
            >
              Alessandro Buonerba
            </Button>
            <Button
              variant="link"
              leftIcon={<FaDiscord />}
              colorScheme="blue"
              size="md"
              onClick={() => setMessage("Copied!")}
            >
              Dieman#6388
            </Button>
            <Text fontWeight="bold">{message}</Text>
          </Box>
        </Grid>
      </Container>
    </Flex>
  );
};

export default Demo;
