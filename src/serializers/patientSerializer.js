// serializers/patientSerializer.js
const serializePatientData = (data) => {

  const {
    nome,
    idade,
    sexo,
    endereco,
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

  // Converter todos os campos para strings e sintomas em uma lista se não for uma
  const sintomasLista = Array.isArray(sintomas) ? sintomas : [sintomas];

  return {
    nome: String(nome),
    idade: String(idade),
    sexo: String(sexo),
    endereco: String(endereco),
    contato: {
      telefone: String(contato.telefone),
      email: String(contato.email),
    },
    sintomas: sintomasLista,
    detalhes_febre: String(detalhes_febre),
    detalhes_tosse: String(detalhes_tosse),
    detalhes_dor_de_garganta: String(detalhes_dor_de_garganta),
    detalhes_dificuldade_respiratoria: String(detalhes_dificuldade_respiratoria),
    detalhes_cansaco: String(detalhes_cansaco),
    historico_medico: {
      condicoes_medicas: String(historico_medico.condicoes_medicas),
      cirurgias: String(historico_medico.cirurgias),
      internacoes: String(historico_medico.internacoes),
      alergias: String(historico_medico.alergias),
    },
    medicamentos: {
      atuais: String(medicamentos.atuais),
      recentes: String(medicamentos.recentes),
    },
    viagem_recente: String(viagem_recente),
    contato_infectado: String(contato_infectado),
    tabagismo: String(tabagismo),
    consumo_alcool: String(consumo_alcool),
    status_vacinacao: String(status_vacinacao),
    peso_altura: {
      peso: String(peso_altura.peso),
      altura: String(peso_altura.altura),
    },
    pressao_arterial: String(pressao_arterial),
    atividade_fisica: String(atividade_fisica),
  };
};

module.exports = {
  serializePatientData,
};
