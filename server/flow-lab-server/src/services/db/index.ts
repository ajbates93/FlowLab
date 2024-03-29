import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? ''

const supabase = createClient(supabaseURL, supabaseAnonKey);

export { supabase }