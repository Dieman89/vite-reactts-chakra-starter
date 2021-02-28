import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Demo } from "pages";

const WrappedApp = (
  <ChakraProvider>
    <React.StrictMode>
      <Demo />
    </React.StrictMode>
  </ChakraProvider>
);

export { WrappedApp };
