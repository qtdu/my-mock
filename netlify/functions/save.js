const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  const filePath = path.join(__dirname, "data.json");

  try {
    // event.body là JSON string từ frontend
    fs.writeFileSync(filePath, event.body);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        filePath
      })
    };
  }
};
