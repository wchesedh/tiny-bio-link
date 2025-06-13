import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gheopzhpzcsrhcplmxgt.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoZW9wemhwemNzcmhjcGxteGd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NzY4MDIsImV4cCI6MjA2NTM1MjgwMn0.vNShGp_Nxw6mR-U8f9ZIg4UEq9anUw5DGGWdVM5QsQI'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
