class Botao {
  constructor(texto, x, y, onMousePressed) {
    this.texto = texto;
    this.x = x;
    this.y = y;

    this.botao = createButton(this.texto);
    this.botao.addClass("botao-tela-inicial");
    this.botao.mousePressed(onMousePressed);
  }

  draw() {
    this.botao.position(this.x, this.y);
    this.botao.center("horizontal");
  }

  remove() {
    this.botao.remove();
  }
}
