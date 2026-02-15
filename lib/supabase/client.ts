import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';

let _client: SupabaseClient | null = null;

function createSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;

  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}

// Singleton for client-side
export function getSupabaseClient() {
  if (_client) return _client;
  _client = createSupabaseClient();
  return _client;
}

// Cached version for server components - wraps the client getter in React cache()
// This deduplicates requests within the same render pass
export const getSupabaseClientCached = cache(() => {
  return getSupabaseClient();
});
