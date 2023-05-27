import HomePage from "@/components/HomePage";
import { WallpaperObject } from "@/components/WallpaperCard";
import { supabase } from "@/lib/supabase";

export const revalidate = 60 * 60;

async function getData() {
  const { data, error } = await supabase
    .from("images")
    .select("*")
    .eq("id", 109);

  if (error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return data as WallpaperObject[];
}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <main>
      <HomePage wallpapers={data} />
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}
