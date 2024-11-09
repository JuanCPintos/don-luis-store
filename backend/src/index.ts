import express from 'express';
import dbConnection from './config/database/database.config';
import { envs } from './config/envs/env.config';
import routes from './routes/Index.routes';
import cors from 'cors';
import { corsConfig } from './config/cors/cors';
const app = express();

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

app.use(cors(corsConfig))

// Rutas
app.use("/", routes)

dbConnection()

app.listen(envs.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${envs.PORT}`);
});