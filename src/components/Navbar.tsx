import { Box, HStack, Heading } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <HStack
      bg={"blackAlpha.200"}
      p={4}
      rounded={"md"}
      position={"sticky"}
      top={0}
      zIndex={1}
      backdropFilter={"blur(8px)"}
    >
      <Heading size={"sm"}>Wallpapers.fyi</Heading>
    </HStack>
  );
}
