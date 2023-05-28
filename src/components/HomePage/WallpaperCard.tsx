"use client";

import { Box, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type WallpaperObject = {
  id: string;
  imageUrl: string;
  prompt: string;
  created_at: string;
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
        <Link href={`/images/${wallpaper.id}`}>
          <Box
            transition={"transform 0.2s ease-in-out"}
            _hover={{
              cursor: "pointer",
              transform: "scale(1.1)",
            }}
          >
            <Image
              src={wallpaper.imageUrl}
              alt={wallpaper.id}
              height={480}
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
        </Link>
      </Skeleton>
    </Box>
  );
}
