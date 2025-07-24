// pages/api/synthesis.js
import cohere from '../../utils/cohere';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Missing input' });
  }

  try {
    const response = await cohere.generate({
      model: 'command-r',
      prompt: `Synthesize the following reflections into a pattern or insight:\n\n${text}`,
      max_tokens: 300,
      temperature: 0.7,
    });

    const result = response.body.generations[0]?.text?.trim() || 'No synthesis generated.';

    res.status(200).json({ synthesis: result });
  } catch (error) {
    console.error('Cohere error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
