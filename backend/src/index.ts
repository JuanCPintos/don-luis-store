import express from 'express';
import dbConnection from './config/database/database.config';

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());


// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

dbConnection()

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});