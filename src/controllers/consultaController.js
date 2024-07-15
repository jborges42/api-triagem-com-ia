const { performConsultation } = require('../services/consultaService');
const { serializePatientData } = require('../serializers/patientSerializer');

const consultarPaciente = async (req, res) => {
  try {
    const dadosConsulta = serializePatientData(req.body);
    const resultadoConsulta = await performConsultation(dadosConsulta);
    res.status(200).json({ success: true, data: resultadoConsulta });
  } catch (error) {
    console.error('Error during patient consultation:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  consultarPaciente,
};
