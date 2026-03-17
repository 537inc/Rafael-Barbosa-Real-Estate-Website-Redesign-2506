const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const response = await fetch(
      'https://services.leadconnectorhq.com/blogs/posts?locationId=YX80CMe65N0bX5qNSceP&blogId=rKX2UDvy7OIAvnDiJr5o&status=published&limit=3',
      {
        headers: {
          'Authorization': 'Bearer pit-95638405-d1a0-46a6-9869-70a27468e7da',
          'Version': '2021-04-15'
        }
      }
    );
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
