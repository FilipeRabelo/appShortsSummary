

// arquivo para manipular o formulario da aplicação no HTML

// RECUPERANDO O FORMULARIO (SELECIONAR O FORM )PARA FICAR OBSERVANDO QNDO ACONTECER O EVENTO SUBIMT
// EXECUTAR ALGUMA COISA


const form = document.querySelector("#form");


// addEventListener fica observando qndo acontcer o evento
// recebe 2 parametros - nome do evento & a funcao q vai executada qndo o evento acontecer

form.addEventListener("submit", (event) => {


  event.preventDefault();  // evita o carregamento da pagina

  console.log("Dados ebnviado");

})