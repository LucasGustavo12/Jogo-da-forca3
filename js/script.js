//Funções para mostrar cada seção

//Novo Jogo
let comecar = document.getElementById("comecar");
comecar.addEventListener("click", function(){

  let sectioninicio = document.getElementById("inicio");
  let sectionadiciona = document.getElementById("add");
  
  sectioninicio.classList.add("hide");
  sectionadiciona.classList.add("hide");
});

/*
//Adicionar Palavras
let adicionar = document.getElementById("adicionar");
adicionar.addEventListener("click", function(){
  let sectioninicio = document.getElementById("inicio");
  let sectionjogo = document.getElementById("secao-jogo");
  if(sectioninicio.style.display === "none" && sectionjogo.style.display === "none") {
    sectioninicio.style.display = "block";
    sectionjogo.style.display = "block";
  }else {
    sectioninicio.style.display = "none";
    sectionjogo.style.display = "none";
  }
})

//pensar em como deixar as funções mais simples

*/

/*
const palavras = ["JAVA", "HTML", "CSS", "PHP", "JavaScript"];

const palavraSecreta = tecnologias[Math.floor(Math.ramdom() * tecnologias.lenght)];
const letrasErradas = [];
const letrasCorretas = [];
*/
let c = document.getElementById("forca");
let ctx = c.getContext("2d");

desenhaBase();
desenhaPoste();
desenhaBarra();
desenhaApoio();
desenhaCabeca();
desenhaTronco();
desenhaBracoEsquerdo();
desenhaBracoDireito();
desenhaPernaEsquerda();
desenhaPernaDireita();
//desenhaTracos();


function desenhaBoneco(quantidadeErros){
  switch (quantidadeErros){
    case 1:
        desenhaPoste();
        break;
    case 2: desenhaBarra();
        break;
    case 3:
      desenhaApoio();
      break;
    case 4:
      desenhaCabeca();
      break;
    case 5:
      desenhaTronco();
      break;
    case 6:
      desenhaBracoEsquerdo();
      break;
    case 7:
      desenhaBracoDireito();
      break;
    case 8:
      desenhaPernaEsquerda();
      break;
    case 9:
      desenhaPernaDireita();
      break;
  }
}

function desenhaBase() {
  ctx.strokeStyle = '#0A3871';
  ctx.moveTo(200, 80);
  ctx.lineTo(90, 80);
  ctx.stroke();
}

function desenhaPoste() {
  ctx.moveTo(120, 80);
  ctx.lineTo(120, 0);
  ctx.stroke();
}

function desenhaBarra() {
  ctx.moveTo(120, 1);
  ctx.lineTo(170, 1);
  ctx.stroke();
}

function  desenhaApoio() {
  ctx.moveTo(170, 10);
  ctx.lineTo(170, 0);
  ctx.stroke();
}

function desenhaCabeca(){
  ctx.beginPath();
  ctx.arc(170,20,10,0,2 * Math.PI);
  ctx.stroke();
}

function desenhaTronco() {
  ctx.moveTo(170,30);
  ctx.lineTo(170,50);
  ctx.stroke();
}

function desenhaBracoEsquerdo(){
  ctx.moveTo(170, 30);
  ctx.lineTo(180, 40);
  ctx.stroke();
}

function desenhaBracoDireito(){
  ctx.moveTo(170, 30);
  ctx.lineTo(160, 40);
  ctx.stroke();
}

function desenhaPernaEsquerda(){
  ctx.moveTo(170, 50);
  ctx.lineTo(180, 60);
  ctx.stroke();
}

function desenhaPernaDireita(){
  ctx.moveTo(170, 50);
  ctx.lineTo(160, 60);
  ctx.stroke();
}

/*
function desenhaTracos(){
for(let i =0; i < palavraSecreta.length; i++){
ctx.moveTo(90 + (140 * i), 110);
ctx.lineTo(70 + (140 * i), 110);
ctx.stroke();
  }
}
*/
