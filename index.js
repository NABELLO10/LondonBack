import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//ROUTES
import mailRoutes from "./routes/mailRoutes.js"

//aqui se crea la aplicacion de express
const app = express();

//le decimos que enviaremos datos de tipo json
app.use(express.json());

//busca y agrega el archivo .env
dotenv.config();

  //Utilizando cors para proteger la api ORIGINAL
  const corsOptions = {
    origin: process.env.FRONTEND_URL, // Asegúrate de que FRONTEND_URL esté correctamente definido en tu archivo .env
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  };
  
  app.use(cors(corsOptions));
   
  
  //ROUTES
app.use('/api-london/', mailRoutes)


//PUERTOS
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
