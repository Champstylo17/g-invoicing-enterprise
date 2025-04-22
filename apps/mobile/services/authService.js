
import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';

const supabase = createClient(
  'https://your-project.supabase.co',
  'public-anon-key'
);

export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (data.session) {
    await SecureStore.setItemAsync('token', data.session.access_token);
  }
  return { data, error };
}

export async function signOut() {
  await SecureStore.deleteItemAsync('token');
  return await supabase.auth.signOut();
}
