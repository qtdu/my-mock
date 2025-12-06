export default async function handler(event) {
  const kv = await import("@netlify/kv");
  const text = await event.text();

  try {
    const json = JSON.parse(text);
    await kv.set("mockjson", json);
    return new Response("Saved OK");
  } catch (e) {
    return new Response("Invalid JSON format");
  }
}
