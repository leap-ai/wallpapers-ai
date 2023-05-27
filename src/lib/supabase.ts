import { createClient } from "@supabase/supabase-js";

if (!process.env.SUPABASE_KEY) {
  throw new Error("Missing env var: SUPABASE_KEY");
}

const supabaseUrl = "https://netacqjahjdtfxijmywj.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
