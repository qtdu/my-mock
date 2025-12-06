import fs from "fs";

export default async function handler() {
  const filePath = "/tmp/data.json";

  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    return new Response("Cleared OK");
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
