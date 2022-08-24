//Funções para mostrar cada seção
//Novo Jogo

let comecar = document.getElementById("comecar");
comecar.addEventListener("click", function(){

  let sectioninicio = document.getElementById("inicio");
  let sectionadiciona = document.getElementById("add");
  let sectiongame = document.getElementById("secao-jogo");
  
  sectioninicio.classList.add("hide");
  sectionadiciona.classList.add("hide");
  sectiongame.classList.remove("hide");

});


//Adicionar Palavras
let adicionar = document.getElementById("adicionar");
adicionar.addEventListener("click", function(){

  let sectioninicio = document.getElementById("inicio");
  let sectiongame = document.getElementById("secao-jogo");
  let sectionadiciona = document.getElementById("add");

  sectioninicio.classList.add("hide");
  sectiongame.classList.add("hide");
  sectionadiciona.classList.remove("hide");

});

//Cancelar
let cancelar = document.getElementById("btn-c");
cancelar.addEventListener("click", function(){

  let sectioninicio = document.getElementById("inicio");
  let sectionadiciona = document.getElementById("add");

  sectioninicio.classList.remove("hide");
  sectionadiciona.classList.add("hide");
  location.reload();
});

//Salvar e continuar
let salvar = document.getElementById("btn-s");
salvar.addEventListener("click", function(){

  let sectioninicio = document.getElementById("inicio");
  let sectionadiciona = document.getElementById("add");
  let sectiongame = document.getElementById("secao-jogo");

  sectioninicio.classList.add("hide");
  sectionadiciona.classList.add("hide");
  sectiongame.classList.remove("hide");
  //location.reload();
});

//desistir = game over
let desistir = document.getElementById("desistir");
desistir.addEventListener("click", function(){
  ctx.font = "10px Arial";
  ctx.fillStyle='red';
  ctx.fillText("Game Over! A palavra era: " + palavraSecreta, 10, 140);
  window.onkeypress = null;
});

let novo = document.getElementById("novo");
novo.addEventListener("click", function(){
location.reload();
})


//novo-jogo criar função para o novo jogo



