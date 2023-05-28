import React from "react";
import { WallpaperObject } from "./WallpaperCard";

export default function ImagePage({
  wallpaper,
}: {
  wallpaper: WallpaperObject;
}) {
  return <div>{wallpaper.id}</div>;
}
