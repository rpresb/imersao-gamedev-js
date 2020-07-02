class Inimigo extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    y,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    velocidade,
    delay
  ) {
    super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite);

    this.dificuldade = 0;
    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + this.delay;
  }

  move() {
    this.x -= this.velocidade + this.dificuldade;

    if (this.x < -this.largura - this.delay) {
      this.x = width;
    }
  }
}
