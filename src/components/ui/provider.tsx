"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import type { ThemeProviderProps } from "next-themes";

import { ColorModeProvider } from "./color-mode";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Roboto" },
        body: { value: "Roboto" },
      },
    },
  },
});

export function Provider(props: ThemeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="light" {...props} />
    </ChakraProvider>
  );
}
