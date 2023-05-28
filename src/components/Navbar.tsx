"use client";

import { Box, HStack, Heading, IconButton, Spacer } from "@chakra-ui/react";
import React from "react";
import ColorModeToggle from "./ColorModeToggle";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

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
      <IconButton
        as={"a"}
        target={"_blank"}
        href={"https://github.com/leap-api/wallpapers-ai"}
        aria-label={"Home"}
        icon={<FaGithub />}
      />
      <ColorModeToggle />
    </HStack>
  );
}
