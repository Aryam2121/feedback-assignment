const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.resolve('feedbacks.json');
  if (!fs.existsSync(filePath)) {
    return { statusCode: 200, body: JSON.stringify({ feedbacks: [] }) };
  }

  const feedbacks = JSON.parse(fs.readFileSync(filePath));
  return {
    statusCode: 200,
    body: JSON.stringify({ feedbacks }),
  };
};
