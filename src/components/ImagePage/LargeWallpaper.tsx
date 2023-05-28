import Image from "next/image";
import React, { useState } from "react";
import { WallpaperObject } from "../HomePage/WallpaperCard";
import { Skeleton } from "@chakra-ui/react";

export default function LargeWallpaper({
  wallpaper,
}: {
  wallpaper: WallpaperObject;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Skeleton isLoaded={isLoaded} rounded={"md"}>
      <Image
        src={wallpaper.imageUrl}
        alt={wallpaper.id}
        height={960}
        width={1920}
        style={{
          borderRadius: "0.375rem",
        }}
        onLoadingComplete={() => {
          setIsLoaded(true);
        }}
        draggable={false}
      />
    </Skeleton>
  );
}
