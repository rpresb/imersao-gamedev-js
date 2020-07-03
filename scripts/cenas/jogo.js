class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
    //somDoJogo.loop();

    cenario = new Cenario(imagemCenario, 3);

    pontuacao = new Pontuacao();

    personagem = new Personagem(
      matrizPersonagem,
      imagemPersonagem,
      somDoPulo,
      0,
      height - 135 - paddingBottom,
      110,
      135,
      220,
      270
    );

    const inimigo = new Inimigo(
      matrizInimigo,
      imagemInimigo,
      width - 52,
      height - 52 - paddingBottom,
      52,
      52,
      104,
      104,
      12,
      100
    );

    const inimigoGrande = new Inimigo(
      matrizInimigoGrande,
      imagemInimigoGrande,
      width,
      height - 200,
      200,
      200,
      400,
      400,
      10,
      80
    );

    const inimigoVoador = new Inimigo(
      matrizInimigoVoador,
      imagemInimigoVoador,
      width - 52,
      height - 52 - 200,
      100,
      75,
      200,
      150,
      15,
      200
    );

    inimigos.push(inimigo, inimigoGrande, inimigoVoador);

    vida = new Vida(3, 3);
  }

  keyPressed(key) {
    if (isGameOver) {
      return;
    }
    if (key === "ArrowUp" || key === " ") {
      personagem.pula();
    }
  }

  draw() {
    dificuldade =
      dificuldade < 10 ? Math.floor(pontuacao.pontos / 100) : dificuldade;

    cenario.exibe();
    cenario.move(dificuldade);

    pontuacao.exibe();
    pontuacao.adicionarPontos(dificuldade);

    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[inimigoAtual];
    const isInimigoVisivel = inimigo.x < -inimigo.largura;
    inimigo.dificuldade = dificuldade;
    inimigo.exibe();
    inimigo.move();

    vida.draw();

    if (Math.floor(pontuacao.pontos % 100) === 0) {
      vida.ganhaVida();
    }

    if (vida.vidas === 0) {
      image(imagemGameOver, width / 2 - 206, height / 2 - 39);
      isGameOver = true;
      somDoJogo.stop();
      noLoop();
    }

    if (isInimigoVisivel) {
      inimigoAtual = Math.round((inimigos.length - 1) * Math.random());
    }

    if (!personagem.invencivel && personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.ficaInvencivel();
    }
  }
}
