import HomePage from "@/components/HomePage/HomePage";
import { WallpaperObject } from "@/components/HomePage/WallpaperCard";
import { supabase } from "@/lib/supabase";

export const revalidate = 60 * 60;

async function getData() {
  const { data, error } = await supabase
    .from("images")
    .select("id, imageUrl, prompt")
    .order("id", { ascending: false });

  if (error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return data as WallpaperObject[];
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <HomePage wallpapers={data} />
    </main>
  );
}
