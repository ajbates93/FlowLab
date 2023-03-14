import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? ''

const supabase = createClient(supabaseURL, supabaseAnonKey);
const tables = createClient(supabaseURL, supabaseAnonKey, {
  db: { schema: 'information_schema' }
})

export { supabase, tables }