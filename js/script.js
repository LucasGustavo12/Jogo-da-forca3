
const palavras = ["JAVA", "HTML", "CSS"];
let quantidadeErros = 0;
let acertos = 0;
let tentativas = "";
palavraSecreta = palavras[Math.floor(Math.random() * 6)];

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
desenhaTracos();


function desenhaBase() {
  ctx.strokeStyle = '#0A3871';
  ctx.moveTo(180, 80);
  ctx.lineTo(80, 80);
  ctx.stroke();
}

function desenhaPoste() {
  ctx.moveTo(100, 80);
  ctx.lineTo(100, 0);
  ctx.stroke();
}

function desenhaBarra() {
  ctx.moveTo(100, 1);
  ctx.lineTo(150, 1);
  ctx.stroke();
}

function  desenhaApoio() {
  ctx.moveTo(150, 10);
  ctx.lineTo(150, 0);
  ctx.stroke();
}

function desenhaCabeca(){
  ctx.beginPath();
  ctx.arc(150,20,10,0,2 * Math.PI);
  ctx.stroke();
}

function desenhaTronco(){
  ctx.moveTo(150,30);
  ctx.lineTo(150,50);
  ctx.stroke();
}

function desenhaBracoEsquerdo(){
  ctx.moveTo(150, 30);
  ctx.lineTo(160, 40);
  ctx.stroke();
}

function desenhaBracoDireito(){
  ctx.moveTo(150, 30);
  ctx.lineTo(140, 40);
  ctx.stroke();
}

function desenhaPernaEsquerda(){
  ctx.moveTo(150, 50);
  ctx.lineTo(160, 70);
  ctx.stroke();
}

function desenhaPernaDireita(){
  ctx.moveTo(150, 50);
  ctx.lineTo(140, 70);
  ctx.stroke();
}

function desenhaTracos(){
  for(var i = 0; i< palavraSecreta.length; i++){
    ctx.moveTo(20 + (35 * i), 200);
    ctx.lineTo(50 +(35 * i), 200);
    ctx.stroke();
  }
}