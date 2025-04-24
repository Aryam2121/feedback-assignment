const fs = require('fs');
const path = require('path');

async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);
  if (!data.name || !data.email || !data.message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing fields' }) };
  }

  const newFeedback = {
    ...data,
    timestamp: new Date().toISOString(),
  };

  const filePath = path.resolve('feedbacks.json');
  let existing = [];

  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath));
  }

  existing.push(newFeedback);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Feedback submitted successfully' }),
  };
}

// Export the handler function here
module.exports = { handler };
