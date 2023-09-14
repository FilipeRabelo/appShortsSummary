import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

app.listen(3333, () => console.log("Servidor Online..."));  // qndo o servidor iniciar essa funcao vai executar