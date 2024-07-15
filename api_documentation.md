
# API de Consulta Médica

## Descrição
A API de Consulta Médica permite a submissão de informações detalhadas sobre o paciente, incluindo sintomas, histórico médico, e outras informações relevantes. A API retorna uma avaliação preliminar da gravidade e urgência dos sintomas, juntamente com recomendações de cuidados médicos.

## Endpoints

### Consulta Médica

#### URL
`POST http://localhost:8080/consulta`

#### Headers
- `Content-Type: application/json`
- `Accept: application/json`

#### Request Payload

```json
{
  "nome": "João",
  "idade": "30",
  "sexo": "masculino",
  "endereco": "Rua Exemplo, 123, São Paulo, SP",
  "contato": {
    "telefone": "(11) 1234-5678",
    "email": "joao@example.com"
  },
  "sintomas": ["febre", "tosse"],
  "detalhes_febre": "39°C, há 2 dias, varia ao longo do dia",
  "detalhes_tosse": "Tosse seca há 3 dias, piora à noite",
  "detalhes_dor_de_garganta": "Dor constante, piora ao engolir",
  "detalhes_dificuldade_respiratoria": "Leve, desde ontem",
  "detalhes_cansaco": "Sim, nível moderado, há 2 dias",
  "historico_medico": {
    "condicoes_medicas": "Nenhum relevante",
    "cirurgias": "Nenhuma",
    "internacoes": "Nenhuma",
    "alergias": "Nenhuma"
  },
  "medicamentos": {
    "atuais": "Paracetamol, 500mg, 3 vezes ao dia",
    "recentes": "Nenhum outro medicamento nos últimos 30 dias"
  },
  "viagem_recente": "Não",
  "contato_infectado": "Sim, contato com pessoa com COVID-19",
  "tabagismo": "Não",
  "consumo_alcool": "Ocasional",
  "status_vacinacao": "Vacina COVID-19, duas doses",
  "peso_altura": {
    "peso": "70kg",
    "altura": "1.75m"
  },
  "pressao_arterial": "120/80 mmHg",
  "atividade_fisica": "Caminhada leve, 3 vezes por semana"
}
```

#### Response

```json
{
  "success": true,
  "data": "{
  "gravidade": "Moderado",
  "urgencia": "Atendimento Necessário",
  "recomendacoes": "Olá João, com base nos sintomas que você apresenta, como febre persistente, tosse seca, dor de garganta, e dificuldade respiratória, juntamente com o contato com uma pessoa infectada por COVID-19, é importante buscar atendimento médico para avaliação mais detalhada. Estes sintomas podem ser indicativos de uma infecção respiratória, incluindo a COVID-19. Recomendamos que entre em contato com seu médico ou serviço de saúde para orientações sobre os próximos passos, como realização de exames e possíveis medidas de isolamento para evitar a propagação do vírus. Fique atento à evolução dos sintomas e siga as recomendações de saúde pública. Se necessário, dirija-se a um serviço de saúde para uma avaliação mais completa."
}"
}
```

### Exemplo de Uso

#### Curl

```sh
curl -X POST http://localhost:8080/consulta -H "Content-Type: application/json" -H "Accept: application/json" -d '{
  "nome": "João",
  "idade": "30",
  "sexo": "masculino",
  "endereco": "Rua Exemplo, 123, São Paulo, SP",
  "contato": {
    "telefone": "(11) 1234-5678",
    "email": "joao@example.com"
  },
  "sintomas": ["febre", "tosse"],
  "detalhes_febre": "39°C, há 2 dias, varia ao longo do dia",
  "detalhes_tosse": "Tosse seca há 3 dias, piora à noite",
  "detalhes_dor_de_garganta": "Dor constante, piora ao engolir",
  "detalhes_dificuldade_respiratoria": "Leve, desde ontem",
  "detalhes_cansaco": "Sim, nível moderado, há 2 dias",
  "historico_medico": {
    "condicoes_medicas": "Nenhum relevante",
    "cirurgias": "Nenhuma",
    "internacoes": "Nenhuma",
    "alergias": "Nenhuma"
  },
  "medicamentos": {
    "atuais": "Paracetamol, 500mg, 3 vezes ao dia",
    "recentes": "Nenhum outro medicamento nos últimos 30 dias"
  },
  "viagem_recente": "Não",
  "contato_infectado": "Sim, contato com pessoa com COVID-19",
  "tabagismo": "Não",
  "consumo_alcool": "Ocasional",
  "status_vacinacao": "Vacina COVID-19, duas doses",
  "peso_altura": {
    "peso": "70kg",
    "altura": "1.75m"
  },
  "pressao_arterial": "120/80 mmHg",
  "atividade_fisica": "Caminhada leve, 3 vezes por semana"
}'
```
