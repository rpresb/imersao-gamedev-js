class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      image(imagemVida, i * 35 + 10, 10, 30, 30);
    }
  }

  ganhaVida() {
    if (this.vidas === this.total) {
      return;
    }
    this.vidas++;
  }

  perdeVida() {
    this.vidas--;
  }
}
