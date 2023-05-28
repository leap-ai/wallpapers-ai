import HomePage from "@/components/HomePage/HomePage";
import { WallpaperObject } from "@/components/HomePage/WallpaperCard";
import { supabase } from "@/lib/supabase";
import { Metadata } from "next";

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

export const metadata = {
  title: "Wallpapers by AI",
  description:
    "Discover stunning, AI-generated wallpapers refreshed every hour. Transform your screens with exclusive designs, powered by Leap.",
} as Metadata;

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <HomePage wallpapers={data} />
    </main>
  );
}
