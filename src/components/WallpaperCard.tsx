"use client";

import { Box, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type WallpaperObject = {
  id: string;
  imageUrl: string;
};

export default function WallpaperCard({
  wallpaper,
}: {
  wallpaper: WallpaperObject;
}) {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <Box rounded={"md"} overflow={"clip"}>
      <Skeleton isLoaded={hasLoaded} rounded={"md"}>
        <Box
          _hover={{
            cursor: "pointer",
            transform: "scale(1.1)",
          }}
          transition={"transform 0.2s ease-in-out"}
          as={Link}
          href={`/images/${wallpaper.id}`}
        >
          <Image
            src={wallpaper.imageUrl}
            alt={wallpaper.id}
            height={540}
            width={960}
            onLoadingComplete={() => {
              setHasLoaded(true);
            }}
            style={{
              borderRadius: "0.375rem",
            }}
            draggable={false}
          />
        </Box>
      </Skeleton>
    </Box>
  );
}
