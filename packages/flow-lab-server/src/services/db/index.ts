import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://jkrcwjkooaljroaallxi.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprcmN3amtvb2FsanJvYWFsbHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3NDQ5MzcsImV4cCI6MTk5NDMyMDkzN30.zDqexX0c1ZQT0kEVCV-WeMEmy9zZaTXr00IPgOYcP38"

const supabase = createClient(supabaseURL, supabaseAnonKey);

export default supabase