
export async function logAction(supabase, action, user_email, context) {
  await supabase.from('audit_logs').insert([{ action, user_email, context }]);
}
