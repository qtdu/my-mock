import fs from "fs";

export default async function handler() {
  const filePath = "/tmp/data.json";

  try {
    if (!fs.existsSync(filePath)) return new Response(JSON.stringify({}));

    const data = fs.readFileSync(filePath, "utf8");
    return new Response(data, {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
