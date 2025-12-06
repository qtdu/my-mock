const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  const filePath = path.join(process.cwd(), "data", "data.json");

  try {
    fs.writeFileSync(filePath, "{}");

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message, filePath })
    };
  }
};
