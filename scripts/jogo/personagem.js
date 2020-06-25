class Personagem extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    y,
    largura,
    altura,
    larguraSprite,
    alturaSprite
  ) {
    super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite);

    this.yInicial = y;
    this.xInicial = x;

    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
  }

  pula() {
    this.velocidadeDoPulo = -30;
  }

  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
    }
  }

  estaColidindo(inimigo) {
    const precisao = 0.7;
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;
  }
}
