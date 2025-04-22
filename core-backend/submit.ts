export async function POST(req: Request) {
  const { title, buyer_agency, seller_agency, terms } = await req.json();

  const { data, error } = await supabase.from("igt_gtc_agreements").insert([{
    title,
    buyer_agency,
    seller_agency,
    terms,
    status: "draft"
  }]);

  return Response.json({ data, error });
}
