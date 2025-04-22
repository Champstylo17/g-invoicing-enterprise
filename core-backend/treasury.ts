import JSZip from "jszip";

export async function GET() {
  const zip = new JSZip();

  const gtcs = await supabase.from("igt_gtc_agreements").select("*");
  const orders = await supabase.from("igt_orders").select("*");
  const perf = await supabase.from("igt_performance").select("*");

  zip.file("gtcs.json", JSON.stringify(gtcs.data));
  zip.file("orders.json", JSON.stringify(orders.data));
  zip.file("performance.json", JSON.stringify(perf.data));

  const buffer = await zip.generateAsync({ type: "nodebuffer" });
  return new Response(buffer, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": "attachment; filename=treasury_export.zip",
    },
  });
}
