import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://iglisrumkjtxqnryiclr.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'REPLACE_WITH_YOUR_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
