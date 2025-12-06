import fs from "fs";

export default async function handler(event) {
  const filePath = "/tmp/data.json";
  const body = await event.text();

  try {
    JSON.parse(body); // kiểm tra JSON hợp lệ
    fs.writeFileSync(filePath, body);
    return new Response("Saved OK");
  } catch (err) {
    return new Response("Invalid JSON");
  }
}
