const { generateSynthesis } = require('./cohere');

const analyzeReflection = async (cog, reflection) => {
  const synthesis = await generateSynthesis(cog, reflection);
  document.getElementById('synthesis-result').innerText = synthesis;
};

module.exports = { analyzeReflection };
