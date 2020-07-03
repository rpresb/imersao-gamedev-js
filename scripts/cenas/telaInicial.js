class TelaInicial {
  constructor() {
    this.botaoIniciar = new Botao("Iniciar", width / 2, height / 2, (e) => {
      cenas.telaInicial.remove();
      cenaAtual = "jogo";
    });

    this._botao();
  }

  draw() {
    this._imagemDeFundo();
    this._texto();
  }

  remove() {
    this.botaoIniciar.remove();
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    textFont(fonteTelaInicial);
    textSize(50);
    textAlign(CENTER);
    text("As aventuras de", width / 2, height / 2 - 150);
    textSize(100);
    text("Hipsta", width / 2, height / 2 + 100 - 150);
  }

  _botao() {
    this.botaoIniciar.draw();
  }
}
