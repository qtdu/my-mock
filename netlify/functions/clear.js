const fs = require("fs");

module.exports = async function () {
  const filePath = "/tmp/data.json";

  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    return { statusCode: 200, body: "Cleared OK" };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
