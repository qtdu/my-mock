const fs = require("fs");

module.exports = async function () {
  const filePath = "/tmp/data.json";

  try {
    if (!fs.existsSync(filePath)) return { statusCode: 200, body: "{}" };

    const data = fs.readFileSync(filePath, "utf8");
    return { statusCode: 200, body: data };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
