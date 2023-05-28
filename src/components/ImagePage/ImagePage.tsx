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
import { FaAngleLeft, FaDesktop, FaDownload, FaMobile } from "react-icons/fa";
import { WallpaperObject } from "../HomePage/WallpaperCard";
import LargeWallpaper from "./LargeWallpaper";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import Hero from "../Hero";
import WallpaperList from "../HomePage/WallpaperList";

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
  mobile,
  browseMore,
}: {
  wallpaper: WallpaperObject;
  mobile?: WallpaperObject;
  browseMore?: WallpaperObject[];
}) {
  const { colorMode } = useColorMode();

  return (
    <Container maxW="container.lg">
      <VStack gap={4} py={8}>
        <Flex w="full">
          <Button leftIcon={<FaAngleLeft />} as={Link} href={"/"}>
            View all images
          </Button>
          <Spacer />
          <SocialIcons wallpaper={wallpaper} />
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
          <SimpleGrid columns={2} gap={4}>
            <VStack
              bg={"blackAlpha.200"}
              p={4}
              justifyContent={"center"}
              h={"full"}
              rounded={"md"}
            >
              <Image
                src={wallpaper.imageUrl}
                width={320}
                height={180}
                alt={"Mobile preview"}
                style={{ borderRadius: "0.375rem" }}
              />
              <Button
                rightIcon={<FaDesktop />}
                as={"a"}
                href={wallpaper.imageUrl}
                target={"_blank"}
                download
              >
                Download Desktop
              </Button>
            </VStack>
            {mobile && (
              <VStack
                bg={"blackAlpha.200"}
                p={4}
                justifyContent={"center"}
                h={"full"}
                rounded={"md"}
              >
                <Image
                  src={mobile.imageUrl}
                  width={90}
                  height={160}
                  alt={"Mobile preview"}
                  style={{ borderRadius: "0.375rem" }}
                />
                <Button
                  rightIcon={<FaMobile />}
                  as={"a"}
                  href={mobile.imageUrl}
                  target={"_blank"}
                  download
                >
                  Download Mobile
                </Button>
              </VStack>
            )}
          </SimpleGrid>
        </SimpleGrid>
      </VStack>
      {browseMore && (
        <Stack gap={4}>
          <Heading size={"sm"}>Browse more</Heading>

          <WallpaperList wallpapers={browseMore} />
          <VStack>
            <Button size={"md"} as={Link} href={"/"}>
              View all wallpapers
            </Button>
          </VStack>
        </Stack>
      )}
      <Hero />
    </Container>
  );
}
