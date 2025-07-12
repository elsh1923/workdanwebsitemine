// pages/api/mailchimp-subscribe.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Get your Mailchimp API key and server prefix
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;

    const response = await fetch(
      `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.title || 'Subscription failed');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ 
      error: error.message || 'Error subscribing to newsletter'
    });
  }
}