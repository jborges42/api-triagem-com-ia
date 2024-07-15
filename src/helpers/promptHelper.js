const yaml = require('js-yaml');
const fs = require('fs');
const { promptsFile } = require('../config/config');

// Função para carregar prompts do arquivo YAML
const carregarPrompts = () => {
  try {
    const yamlFile = fs.readFileSync(promptsFile, 'utf8');
    return yaml.load(yamlFile);
  } catch (error) {
    console.error('Falha ao carregar prompts:', error);
    return null;
  }
};

// Função para construir o conteúdo do prompt
const construirPrompt = (data) => {
  const {
    nome,
    idade,
    sexo,
    endereço,
    contato,
    sintomas,
    detalhes_febre,
    detalhes_tosse,
    detalhes_dor_de_garganta,
    detalhes_dificuldade_respiratoria,
    detalhes_cansaco,
    historico_medico,
    medicamentos,
    viagem_recente,
    contato_infectado,
    tabagismo,
    consumo_alcool,
    status_vacinacao,
    peso_altura,
    pressao_arterial,
    atividade_fisica,
  } = data;

  return `Com base nas informações fornecidas, realize uma pré-triagem detalhada para avaliação médica. Considere todos os dados clínicos relevantes e práticas recomendadas em telemedicina:\n\n` +
    `**Dados do Paciente**:\n` +
    `- **Nome**: ${nome}\n` +
    `- **Idade**: ${idade}\n` +
    `- **Sexo**: ${sexo}\n` +
    `- **Endereço**: ${endereço}\n` +
    `- **Contato**: Telefone: ${contato.telefone}, Email: ${contato.email}\n` +
    `- **Sintomas**: ${sintomas.join(', ')}\n\n` +

    `**Informações Complementares**:\n` +
    `1. **Febre**: ${detalhes_febre || 'Não respondida'}\n` +
    `2. **Tosse**: ${detalhes_tosse || 'Não respondida'}\n` +
    `3. **Dor de Garganta**: ${detalhes_dor_de_garganta || 'Não respondida'}\n` +
    `4. **Dificuldade Respiratória**: ${detalhes_dificuldade_respiratoria || 'Não respondida'}\n` +
    `5. **Cansaço Excessivo**: ${detalhes_cansaco || 'Não respondida'}\n` +
    `6. **Histórico Médico**: Condições Médicas: ${historico_medico.condicoes_medicas || 'Não respondida'}, Cirurgias: ${historico_medico.cirurgias || 'Não respondida'}, Internações: ${historico_medico.internacoes || 'Não respondida'}, Alergias: ${historico_medico.alergias || 'Não respondida'}\n` +
    `7. **Medicamentos em Uso**: Atuais: ${medicamentos.atuais || 'Não respondida'}, Recentes: ${medicamentos.recentes || 'Não respondida'}\n` +
    `8. **Viagem Recente**: ${viagem_recente || 'Não respondida'}\n` +
    `9. **Contato com Infeccionados**: ${contato_infectado || 'Não respondida'}\n` +
    `10. **Tabagismo**: ${tabagismo || 'Não respondida'}\n` +
    `11. **Consumo de Álcool**: ${consumo_alcool || 'Não respondida'}\n` +
    `12. **Status de Vacinação**: ${status_vacinacao || 'Não respondida'}\n` +
    `13. **Peso**: ${peso_altura.peso || 'Não informado'}, **Altura**: ${peso_altura.altura || 'Não informado'}\n` +
    `14. **Pressão Arterial**: ${pressao_arterial || 'Não respondida'}\n` +
    `15. **Atividade Física**: ${atividade_fisica || 'Não respondida'}\n\n` +

    `**Objetivos da Pré-Triagem**:\n` +
    `1. Avaliar a gravidade dos sintomas relatados e determinar a urgência do atendimento.\n` +
    `2. Identificar fatores de risco associados, como idade e condições médicas pré-existentes.\n` +
    `3. Explicar a necessidade de atendimento médico imediato, se aplicável, sem sugerir medicamentos.\n` +
    `4. Considerar informações epidemiológicas relevantes, como viagens recentes e contato com infectados.\n\n` +

    `**Instruções**: Utilize as informações acima para formular uma avaliação clínica precisa, identificando possíveis causas para os sintomas e recomendações sobre a necessidade de atendimento. Sua resposta deve incluir:\n` +
    `- Classificação da gravidade dos sintomas (Leve, Moderado, Grave).\n` +
    `- Indicações sobre a urgência da consulta e se o paciente deve se deslocar imediatamente ao pronto-socorro.\n` +
    `- Use uma linguagem de comunicação direta com o paciente, não em terceira pessoa. Porém, a linguagem deve ser acessível e acolhedora para todos os públicos, especialmente para os mais leigos.\n` +
    `- Formate a resposta em JSON com os seguintes campos: {\n` +
    `  "gravidade": "Leve/Moderado/Grave",\n` +
    `  "urgencia": "Atendimento Imediato/Necessário/Acompanhamento",\n` +
    `  "recomendacoes": "Explicações sobre a necessidade de atendimento e possíveis causas"\n` +
    `}\n`;
};

module.exports = {
  carregarPrompts,
  construirPrompt,
};
