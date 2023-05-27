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
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
      {wallpapers.map((wallpaper) => {
        return <WallpaperCard wallpaper={wallpaper} key={wallpaper.id} />;
      })}
    </SimpleGrid>
  );
}
