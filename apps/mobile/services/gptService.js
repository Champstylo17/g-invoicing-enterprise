
export async function askGPT(message) {
  const res = await fetch('https://your-backend.com/api/ai/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: message })
  });
  const data = await res.json();
  return data.reply;
}
