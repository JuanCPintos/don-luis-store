import mongoose from 'mongoose';
import { envs } from '../envs/env.config';

// Conexión a MongoDB
const dbConnection = async() =>{
  try {
    await mongoose.connect(envs.DB_URI)
    console.log("Conectado a MongoDB")
    
  } catch (error) {
    console.log(error);
    
  }
}

export default dbConnection