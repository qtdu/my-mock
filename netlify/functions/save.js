const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  const filePath = path.join(__dirname, "../../data/data.json");

  try {
    fs.writeFileSync(filePath, event.body);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    };
  }
};
