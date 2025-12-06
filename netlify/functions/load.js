export default async function handler() {
  const kv = await import("@netlify/kv");
  const data = await kv.get("mockjson");

  return new Response(JSON.stringify(data || {}), {
    headers: { "Content-Type": "application/json" }
  });
}
