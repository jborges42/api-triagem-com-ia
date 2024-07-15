const express = require('express');
require('dotenv').config();

const consultaController = require('./controllers/consultaController');

const app = express();
const port = process.env.APP_PORT || 8080;

app.use(express.json());

app.post('/consulta', consultaController.consultarPaciente);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on('error', (error) => {
  console.error('Failed to start server:', error);
});
