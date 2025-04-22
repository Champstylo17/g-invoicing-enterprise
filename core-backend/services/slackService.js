
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function sendSlackAlert(message) {
  try {
    await axios.post(process.env.SLACK_WEBHOOK_URL, {
      text: message
    });
    console.log('💬 Slack alert sent');
  } catch (err) {
    console.error('Slack alert failed:', err);
  }
}
