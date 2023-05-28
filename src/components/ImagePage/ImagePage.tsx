"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { FaAngleLeft, FaDownload } from "react-icons/fa";
import { WallpaperObject } from "../HomePage/WallpaperCard";
import LargeWallpaper from "./LargeWallpaper";
import Link from "next/link";

function formatDate(dateString: string) {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);
  } catch (e) {
    return dateString;
  }
}

export default function ImagePage({
  wallpaper,
}: {
  wallpaper: WallpaperObject;
}) {
  const { colorMode } = useColorMode();

  return (
    <Container maxW="container.lg">
      <VStack gap={2} py={8}>
        <Flex w="full">
          <Button leftIcon={<FaAngleLeft />} as={Link} href={"/"}>
            View all images
          </Button>
          <Spacer />
        </Flex>
        <LargeWallpaper wallpaper={wallpaper} />
        <SimpleGrid columns={{ base: 1, md: 2 }} w={"full"} gap={8}>
          <Stack gap={4}>
            <Stack>
              <Heading size={"sm"}>Created</Heading>
              <Text>{formatDate(wallpaper.created_at)}</Text>
            </Stack>
            {wallpaper.prompt && (
              <Stack>
                <Heading size={"sm"}>Prompt</Heading>
                <Box
                  bg={
                    colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200"
                  }
                  p={4}
                  borderRadius={"md"}
                >
                  <Text>{wallpaper.prompt}</Text>
                </Box>
              </Stack>
            )}
          </Stack>
          <Stack>
            <Button
              rightIcon={<FaDownload />}
              as={"a"}
              href={wallpaper.imageUrl}
              target={"_blank"}
              download
            >
              Download
            </Button>
          </Stack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
