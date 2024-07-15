require('dotenv').config();

module.exports = {
  promptsFile: './src/config/prompts.yaml',
  openaiApiUrl: 'https://api.openai.com/v1/chat/completions',
  openaiApiKey: process.env.OPENAI_API_KEY,
};
