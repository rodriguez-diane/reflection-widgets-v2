const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY);

const generateSynthesis = async (cog, reflection) => {
  try {
    const response = await cohere.generate({
      model: 'xlarge', // or 'medium', based on your preference
      prompt: `Cog: ${cog}\nReflection: ${reflection}\n\nProvide a synthesis of these thoughts.`,
      max_tokens: 100,
    });
    return response.body.generations[0].text.trim();
  } catch (error) {
    console.error("Cohere API error:", error);
    return "Failed to generate synthesis.";
  }
};

module.exports = { generateSynthesis };
