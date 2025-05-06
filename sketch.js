let xJogador = [20, 20, 20, 20];
let yJogador = [50, 150, 250, 350];
let jogador = ['💩', " 👾", '🌔', '🩴'];
let contagem = jogador. length;
let teclas = ["r", "m", "n", "t"];


function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  defineTela();
  mostraJogadores();
  desenhaChegada();
  defineVencedor();
  
  function defineTela(){
  if(focused== true){
    background('#E91E63');
  } else {
    background('#015E05');
  }  
}
  
  function mostraJogadores(){
  textSize(30);
    for (let i = 0; i < contagem;  i++){
  text(jogador[i], xJogador[i], yJogador[i]);
  }
  }
function desenhaChegada (){
  fill('#FF1100');
  rect(350, 0, 10, 400);
  fill('#9C27B0');
  for (let yAtual = 0; yAtual < 400; yAtual += 20)(
  rect(350, yAtual, 10, 10)
  )
  }
  
  function defineVencedor(){
  textAlign(CENTER, CENTER);
  for (let i = 0; i < contagem;  i++){
  if (xJogador[i] > 350){
    text(jogador [i]+ "𝚅𝚘𝚌ê 𝚜𝚎 𝚎𝚜𝚏𝚘𝚛ç𝚘𝚞!", width/2,
        height/2);
    noLoop();
  }
  }
}
}

function keyReleased(){
  for (let i = 0; i < contagem; i++) {
  if (key == teclas [i]){
  xJogador[i] += random(20);
  }
  }
}