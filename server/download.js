

                               // CRIANDO EXPORTANDO ROTA E BIBLIOTECA //

//IMPORTANDO BIBLIOTECAS - DEPENDENCIAS

import ytdl from "ytdl-core";
import fs from "fs";

export const download = (videoId) => {

  const videoURL =  "https://www.youtube.com/shorts/" + videoId;
  //const videoURL =  "https://www.youtube.com/watch?v=/" + videoId;

  console.log("Realizando o download do video: " + videoId);

  // biblioteca
  ytdl(videoURL, {quality: "lowestaudio", filter:"audioonly"}).on("info", (info) => { // etapa pegando a informação

      const segundos = info.formats[0].approxDurationMs / 1000
      //console.log(segundos);

      if (segundos > 60) {
        // vai gerar um erro, pq nao é um short
        throw new Error("A duração desse video é maior que 60 segundos!") // eu estou crindo um erro //

      }

    }

  ).on("end", () => {  // ETAPA DE FAZER O DOWNLOAD DO VIDEO //

    console.log("Download do video finalizado!");

  }).on("error", (error) => {

    console.log("Não foi possivel fazer o download do video. Detalhes do Error: " + error);

  }).pipe(fs.createWriteStream("./tmp/audio.mp4"));

}