const axios = require('axios');
const { openaiApiUrl, openaiApiKey } = require('../config/config');

// Função para enviar dados para o GPT
const enviarParaGPT = async (dadosConsulta) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
    };

    const payload = {
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: dadosConsulta }
        ],
    };

    try {
        const response = await axios.post(openaiApiUrl, payload, { headers });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Erro ao enviar para o GPT:', error.response ? error.response.data : error.message);
        throw new Error('Erro ao enviar para o GPT: ' + (error.response ? error.response.data : error.message));
    }
};

module.exports = {
    enviarParaGPT,
};
