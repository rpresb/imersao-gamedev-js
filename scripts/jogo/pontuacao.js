class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    fill("#fff");
    textAlign(RIGHT);
    textSize(50);
    text(parseInt(this.pontos), width - 10, 50);
  }

  adicionarPontos(dificuldade) {
    this.pontos += 0.2 + dificuldade / 10;
  }
}
