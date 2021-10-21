class Game {
  constructor(){
    this.player,                    // 
    this.matchPlayers = [],         // Guardar os jogadores da partida atual
    this.memoryPlayers = [],        // Guardar a memória de todos os jogadores
    this.match = new Map(),         // Guardar os dados da partida atual
    this.memoryMatchs = new Map()  // Guardar o resultado das partidas
  }

  get newGame(){
    console.log('O jogo Pedra, Papel e Tesoura é jogado com 2 jogadores');
    this.match = new Map();   // limpa o array da partida atual
    this.createMatch;
    this.setMatch;
    this.getWinner;
    //TO DO: colocar informações nos arrays
  }
  // Função que cria os jogadores da partida e associa as moves de cada um
 
  get createMatch(){
    alert('Este jogo está definido para ter 2 participantes');
    this.matchPlayers = []; // Limpa o array de jogadores da partida atual
    for (let i = 1; i <= 2 ; i++) {
      // Salva o nome dos jogadores 
      let playerName = prompt(`Insira o nome do Jogador ${i}: `);
      let player = new Player(playerName);
      // Salva a jogada dos jogadores
      let playerMove = prompt(`${playerName}, qual a sua jogada? Pedra, Papel ou Tesoura :`);
      player.move = playerMove;
      //Cria o objeto Jogador e preenche os atributos do objeto jogador 1
      this.player = player;
      // Atribui um jogador e sua jogada em no array de jogadores da partida atual
      this.match = [...this.match, this.player]; 
    }
    console.log('Fim do método createMatch: this.match -> vai receber os jogadores atuais')
    console.log(this.match)
  }

  //recebe a jogada -> e envie pro jogo se não for empate
  get setMatch(){
    const player1 = this.match[0];
    const player2 = this.match[1];  

    if (player1.move !== player2.move){
      this.memoryPlayers = [...this.memoryPlayers, player1]; // Salva os dados do jogador 1 na memória de jogadores 
      this.memoryPlayers = [...this.memoryPlayers, player2]; // Salva os dados do jogador 2 na memória de jogadores 
      alert('Players moves are acepted - who wins?');    
    } else { // não permite empate
      alert('Draw or invalid choices - please repeat');
      console.log('Empate no setMatch:' )
      this.match = [];
      console.log(this.memoryPlayers)
      this.createMatch // chama novamente o metodo para criar os nomes e escolhas
    }
  }
  
  get getWinner() {
    const player1 = this.match[0];
    const player2 = this.match[1];
    const isPlayer1Winner = [ 
      ['papel', 'pedra', true],
      ['papel', 'tesoura', false],
      ['pedra', 'tesoura', true],
      ['pedra', 'papel', false],
      ['tesoura', 'papel', true],
      ['tesoura', 'pedra', false]
    ];
    const results = new Map()
      .set(player1.name, player1.move)
      .set(player2.name, player2.move)
     ;
    // função para pontuar os jogadores com o resultado da partida
    function setMatchResults() { 
      if (isPlayer1Winner === true) {
        player1.stats.Win += 1,
        player2.stats.Loss += 1
        results.set('Winner', player1.name)
      } else {
        player2.stats.Win += 1,
        player1.stats.Loss += 1
        results.set('Winner', player2.name)

      }
    };
    
    for (let i =0; i < isPlayer1Winner.length; i++) {
      // Compara qual as jogadas com o indice isPlayer1Winner
      if (player1.move === isPlayer1Winner[i][0] && player2.move == isPlayer1Winner[i][1]) {
        setMatchResults()
      };
    };

    this.memoryMatchs = [...this.memoryMatchs, results];
    
  }
}

//não alterar por enquanto - deixar algumas propriedades privadas
class Player {
  constructor(name) {
    this.name = name,
    this.playerId,
    this.move,
    this.stats = {
      'Win': 0,
      'Loss': 0,
    }
    this.memory = [];
  }
  //escolhe jogada
  setMove(option){
    this.move = option
  }
}
/** Linhas abaixo são para rodar o jogo para teste */
let jogo = new Game();
jogo.newGame



