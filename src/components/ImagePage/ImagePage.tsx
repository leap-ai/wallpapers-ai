"use client";

import React from "react";
import { WallpaperObject } from "../HomePage/WallpaperCard";
import { Button, Container, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import LargeWallpaper from "./LargeWallpaper";

export default function ImagePage({
  wallpaper,
}: {
  wallpaper: WallpaperObject;
}) {
  return (
    <Container maxW="container.lg">
      <VStack gap={8} py={16}>
        <LargeWallpaper wallpaper={wallpaper} />
        <SimpleGrid columns={{ base: 1, md: 2 }} w={"full"}>
          <Stack>hello</Stack>
          <Stack>
            <Button>Download</Button>
          </Stack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
