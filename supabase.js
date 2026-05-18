const SUPABASE_URL = 'https://kuecstczjiudfpfernrz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1ZWNzdGN6aml1ZGZwZmVybnJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5MjI2MTQsImV4cCI6MjA5NDQ5ODYxNH0.dzJiyhaxUqE3htUuD6R9xrDRWorGL_8Wc8I1T5PC3BQ';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);