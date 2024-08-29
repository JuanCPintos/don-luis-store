import express from 'express';
import dbConnection from './config/database/database.config';
import { envs } from './config/envs/env.config';
import routes from './routes/Index.routes';

const app = express();

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Rutas
app.use("/", routes)

dbConnection()

app.listen(envs.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${envs.PORT}`);
});