"use client";

import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import WallpaperCard, { WallpaperObject } from "./WallpaperCard";

export default function WallpaperList({
  wallpapers,
}: {
  wallpapers: WallpaperObject[];
}) {
  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 6 }} gap={4}>
      {wallpapers.map((wallpaper) => {
        return <WallpaperCard wallpaper={wallpaper} key={wallpaper.id} />;
      })}
    </SimpleGrid>
  );
}
