"use client";

import { Image, Skeleton } from "@chakra-ui/react";
import { useRef, useState } from "react";

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
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <>
      <Skeleton isLoaded={hasLoaded} rounded={"md"}>
        <Image
          ref={imageRef}
          src={wallpaper.imageUrl}
          alt={wallpaper.id}
          rounded={"md"}
          onLoad={() => {
            console.log("loaded");
            setHasLoaded(true);
          }}
        />
      </Skeleton>
    </>
  );
}
