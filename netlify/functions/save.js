const fs = require("fs");

exports.handler = async function(event) {
  const filePath = "/tmp/data.json";
  const body = event.body;
  try {
    JSON.parse(body);
    fs.writeFileSync(filePath, body);
    return { statusCode: 200, body: "Saved OK" };
  } catch (err) {
    return { statusCode: 400, body: "Invalid JSON" };
  }
};
