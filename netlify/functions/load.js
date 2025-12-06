const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  const filePath = path.join(process.cwd(), "data", "data.json");

  try {
    const content = fs.readFileSync(filePath, "utf8");

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: content
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message, filePath })
    };
  }
};
