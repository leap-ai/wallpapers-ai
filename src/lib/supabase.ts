import { createClient } from "@supabase/supabase-js";

if (!process.env.SUPABASE_KEY) {
  throw new Error("Missing env var: SUPABASE_KEY");
}

if (!process.env.SUPABASE_URL) {
  throw new Error("Missing env var: SUPABASE_URL");
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
