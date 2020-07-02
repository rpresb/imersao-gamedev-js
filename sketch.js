function setup() {
  frameRate(40);
  createCanvas(windowWidth, windowHeight);

  jogo = new Jogo();
  jogo.setup();

  telaInicial = new TelaInicial();

  cenas = {
    jogo,
    telaInicial,
  };
}

function draw() {
  cenas[cenaAtual].draw();
}

function keyPressed() {
  jogo.keyPressed(key);
}
