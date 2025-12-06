export default async function handler() {
  const kv = await import("@netlify/kv");
  await kv.delete("mockjson");
  return new Response("Cleared OK");
}
