"use client";

import { Box, Image } from "@chakra-ui/react";
import React from "react";

export type WallpaperObject = {
  id: string;
  imageUrl: string;
};

export default function WallpaperCard({
  wallpaper,
}: {
  wallpaper: WallpaperObject;
}) {
  return (
    <Box>
      <Image src={wallpaper.imageUrl} alt={wallpaper.id} />
    </Box>
  );
}
