import mongoose from 'mongoose';


// Conexión a MongoDB
const dbConnection = async() =>{
  try {
    await mongoose.connect(uri)
    console.log("Conectado a MongoDB")
    
  } catch (error) {
    console.log(error);
    
  }
}

export default dbConnection