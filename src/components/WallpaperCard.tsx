"use client";

import { Skeleton } from "@chakra-ui/react";
import Image from "next/image";
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
    <>
      <Skeleton isLoaded={hasLoaded} rounded={"md"}>
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
        />
      </Skeleton>
    </>
  );
}
