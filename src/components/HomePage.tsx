"use client";

import React from "react";
import { WallpaperObject } from "./WallpaperCard";
import WallpaperList from "./WallpaperList";
import { Container } from "@chakra-ui/react";

export default function HomePage({
  wallpapers,
}: {
  wallpapers: WallpaperObject[];
}) {
  return (
    <>
      <Container maxW="container.xl" py={8}>
        <WallpaperList wallpapers={wallpapers} />
      </Container>
    </>
  );
}
