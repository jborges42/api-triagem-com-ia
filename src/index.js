const express = require('express');
const app = express();
const port = process.env.APP_PORT || 8080;

const consultaController = require('./controllers/consultaController');

try {

  app.use(express.json());

  app.post('/consulta', (req, res) => {
    consultaController.consultarPaciente(req, res);
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

} catch (error) {
  console.error('Failed to start server:', error);
}
