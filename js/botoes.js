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
  desistir.disabled = true; 
});

let novo = document.getElementById("novo");
novo.addEventListener("click", function(){
location.reload();
})

//novo-jogo
function btnNovoJogo() {
  let novo = document.getElementById("novo");
  novo.addEventListener("click", function () {
    location.reload();
  });
}


//Adicionar palavra
function adicionarPalavra() {
  let adicionarPalavra = document.getElementById("btn-s");
  adicionarPalavra.addEventListener("click", function () {
    let palavra = document.getElementById("txt-palavra").value;
    console.log(palavras);
    if (palavra.length >= 1) {
      //window.onkeypress = null;
      palavras.push(palavra.toUpperCase());
      palavraSecreta = palavras[Math.floor(Math.random() * qtdPalavras)]; //Faz um novo sorteio no array de palavras
    } else {
      alert("erro");
    }
  })
};

adicionarPalavra();
