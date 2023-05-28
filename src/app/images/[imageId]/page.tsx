import ImagePage from "@/components/ImagePage";
import { WallpaperObject } from "@/components/WallpaperCard";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

async function getData(imageId: string) {
  const { data, error } = await supabase
    .from("images")
    .select("*")
    .eq("id", parseInt(imageId));

  if (error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return data as WallpaperObject[];
}

export default async function Home({
  params,
}: {
  params: {
    imageId: string;
  };
}) {
  const { imageId } = params;
  const data = await getData(imageId);

  // If the image doesn't exist, return a 404 page
  if (data.length === 0) {
    notFound();
  }

  return (
    <main>
      <ImagePage wallpaper={data[0]} />
    </main>
  );
}
