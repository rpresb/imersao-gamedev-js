class Personagem extends Animacao {
  constructor(
    matriz,
    imagem,
    somDoPulo,
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

    this.somDoPulo = somDoPulo;

    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;

    this.pulos = 0;

    this.invencivel = false;
  }

  exibe() {
    super.exibe(this.invencivel);
  }

  pula() {
    if (this.pulos === 3) {
      return;
    }

    somDoPulo.play();
    this.pulos++;
    this.velocidadeDoPulo = this.alturaDoPulo;
  }

  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
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

  ficaInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
}
