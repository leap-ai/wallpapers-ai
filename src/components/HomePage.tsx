"use client";

import React from "react";
import { WallpaperObject } from "./WallpaperCard";
import WallpaperList from "./WallpaperList";
import {
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function HomePage({
  wallpapers,
}: {
  wallpapers: WallpaperObject[];
}) {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        <Stack gap={8} py={16}>
          <VStack>
            <Heading textAlign={"center"}>AI generated wallpapers.</Heading>
            <HStack>
              <Text fontSize={"0.8rem"}>Powered by</Text>
              <Image src={"/leap-logo-white.svg"} alt={"Leap"} h={4} />
            </HStack>
          </VStack>
          <WallpaperList wallpapers={wallpapers} />
        </Stack>
      </Container>
    </>
  );
}
