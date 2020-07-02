class Animacao {
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
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;

    this.frameAtual = 0;
    this.isTransparent = false;
    this.blinkTimeout = 0;
  }

  exibe(isBlinking) {
    //rect(this.x, this.y, this.largura, this.altura);

    if (isBlinking) {
      if (!this.isTransparent) {
        tint(255, 255, 255, 100);
        if (this.blinkTimeout === 0) {
          this.blinkTimeout = setTimeout(() => {
            this.isTransparent = true;
            this.blinkTimeout = 0;
          }, 100);
        }
      } else {
        if (this.blinkTimeout === 0) {
          this.blinkTimeout = setTimeout(() => {
            this.isTransparent = false;
            this.blinkTimeout = 0;
          }, 100);
        }
      }
    } else {
      noTint();
    }

    image(
      this.imagem,
      this.x,
      this.y,
      this.largura,
      this.altura,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      this.larguraSprite,
      this.alturaSprite
    );

    this.anima();
  }

  anima() {
    this.frameAtual++;
    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}
