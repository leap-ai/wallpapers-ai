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
  useColorMode,
} from "@chakra-ui/react";
import Navbar from "../Navbar";
import Link from "next/link";
import Hero from "../Hero";

export default function HomePage({
  wallpapers,
}: {
  wallpapers: WallpaperObject[];
}) {
  return (
    <>
      <Container maxW="container.xl">
        <Stack gap={2}>
          <Hero />
          <WallpaperList wallpapers={wallpapers} />
        </Stack>
      </Container>
    </>
  );
}
