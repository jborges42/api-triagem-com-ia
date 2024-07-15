const { carregarPrompts, construirPrompt } = require('../helpers/promptHelper');
const { enviarParaGPT } = require('../helpers/apiHelper');

const performConsultation = async (data) => {
  const prompts = carregarPrompts();

  if (!prompts) {
    throw new Error('Falha ao carregar prompts');
  }

  const promptContent = construirPrompt(data);
  const response = await enviarParaGPT(promptContent);
  return response;
};

module.exports = {
  performConsultation,
};
