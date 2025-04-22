export async function POST(req: Request) {
  const { gtc_id, role } = await req.json();
  const { data: gtc } = await supabase.from("igt_gtc_agreements").select("*").eq("id", gtc_id).single();

  let newStatus = gtc.status;
  if (role === "buyer" && gtc.status === "submitted") newStatus = "signed_buyer";
  if (role === "seller" && gtc.status === "signed_buyer") newStatus = "executed";

  await supabase.from("igt_gtc_agreements").update({ status: newStatus }).eq("id", gtc_id);

  await supabase.from("gtc_audit_logs").insert([{
    gtc_id,
    user_id: "user-id-placeholder",
    old_status: gtc.status,
    new_status: newStatus
  }]);

  return Response.json({ status: newStatus });
}
