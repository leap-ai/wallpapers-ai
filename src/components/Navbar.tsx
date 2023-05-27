"use client";

import { Box, HStack, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import ColorModeToggle from "./ColorModeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <HStack
      bg={"blackAlpha.200"}
      p={4}
      position={"sticky"}
      top={0}
      zIndex={1}
      backdropFilter={"blur(8px)"}
    >
      <Heading size={"sm"} as={Link} href={"/"}>
        wallpapers.fyi
      </Heading>
      <Spacer />
      <ColorModeToggle />
    </HStack>
  );
}
