"use client";

import React from "react";
import { WallpaperObject } from "./WallpaperCard";
import WallpaperList from "./WallpaperList";
import { Container, Heading, Stack, Text, VStack } from "@chakra-ui/react";
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
            <Heading>AI generated wallpapers.</Heading>
            <Text>Powered by Leap</Text>
          </VStack>
          <WallpaperList wallpapers={wallpapers} />
        </Stack>
      </Container>
    </>
  );
}
