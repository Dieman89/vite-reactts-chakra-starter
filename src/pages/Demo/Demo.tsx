import React, { useState } from "react";
import logo from "../../resources/logo.svg";
import {
  Button,
  Container,
  Image,
  Link,
  Heading,
  Flex,
  Box,
} from "@chakra-ui/react";

export const Demo = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <Flex>
      <Container>
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
      </Container>
    </Flex>
  );
};

export default Demo;
