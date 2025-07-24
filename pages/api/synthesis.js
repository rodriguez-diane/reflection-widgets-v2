import cohere from 'cohere-ai';

cohere.init(process.env.COHERE_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end(); // Only allow POST requests

  const { text } = req.body;

  try {
    const response = await cohere.generate({
      model: 'command-r-plus',
      prompt: `Summarize the following reflection notes:\n\n${text}`,
      max_tokens: 300,
      temperature: 0.7,
    });

    const result = response.body.generations[0]?.text;
    res.status(200).json({ summary: result });
  } catch (err) {
    console.error('Cohere error:', err);
    res.status(500).json({ error: 'Synthesis failed' });
  }
}
