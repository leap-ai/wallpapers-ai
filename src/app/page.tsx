import HomePage from "@/components/HomePage";
import { WallpaperObject } from "@/components/WallpaperCard";
import WallpaperList from "@/components/WallpaperList";
import { supabase } from "@/lib/supabase";

export const revalidate = 0;

async function getData() {
  const { data, error } = await supabase
    .from("images")
    .select("*")
    .limit(12)
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
