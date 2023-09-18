

                           // SERVIDOR //  CRIANDO A ROTA DO SERVIDOR //



import cors from "cors";
import express from "express";

// IMPORTANDO A ROTA //
import {download} from "./download.js";

const app = express();   // usando o express
app.use(cors());         // passando o cors para o express usar

// criando a rota do servidor
app.get("/summary/:id", (request, response) => {

  download(request.params.id); // passando para  a funcao download o ID do video

  response.json({ result: "Download do Audio Realizado com Sucesso!!!" })  // para recuperar de dentro da requisição o paramentro ID

})

app.listen(3333, () => console.log("Servidor Online..."));  // qndo o servidor iniciar essa funcao vai executar