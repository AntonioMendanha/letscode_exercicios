class Game {
  constructor(){
    this.memoryPlayers = new Map();
    this.player1,
    this.player2,
    this.match = new Map()
  }

  get newGame(){
    const message = 'O jogo Pedra, Papel e Tesoura é jogado com 2 jogadores';
    console.log(message);
    if (this.memoryPlayers.size !== undefined) {
      for (let i = 0; this.memoryPlayers > i; i++) {
        console.log(`ID: ${i} -> Nome: ${this.memoryPLayers.get(Player)}`)
      }    
    }
        
    let player1 = new Player('Antonio'); //estático criou o primeiro jogador -> deixar dinamico
    player1.playerId = 1;                //estático atribui um id -> deixar dinamico
    this.player1 = player1;
    let player2 = new Player('Carlos')   //estático criou o segundo jogador -> deixar dinamico
    player2.playerId = 2;                //estático atribui um id -> deixar dinamico  
    this.player2 = player2;
    this.memoryPlayers = [...this.memoryPlayers, player1, player2];
    //console.log(this.memoryPlayers);
  }

  //recebe a jogada -> e envie pro jogo se não for empate
  get showMoves(){
    let match = new Map() 
      .set('optionPlayer1', this.memoryPlayers[0].move) //armazena a escolha do player1
      .set('optionPlayer2', this.memoryPlayers[1].move) // armazena a escolha do player2
    if (match.get('optionPlayer1') !== match.get('optionPlayer2')){
      this.match = match;
      console.log('Players moves are acepted - who wins?')    
    } else {      // não permite empate
      return 'Draw or invalid choices - please repeat'
    }
  }
  // método que adiciona os dados quando o ganhador é o player 1
  get winnerPlayer1() {
    this.memoryPlayers[0].stats.Win += 1;
    this.memoryPlayers[0].stats.Played += 1;
    this.memoryPlayers[1].stats.Loss += 1;
    this.memoryPlayers[1].stats.Played += 1;
  };
  // método que adiciona os dados quando o ganhador é o player 2
  get winnerPlayer2() {
    this.memoryPlayers[1].stats.Win += 1;
    this.memoryPlayers[1].stats.Played += 1;
    this.memoryPlayers[0].stats.Loss += 1;
    this.memoryPlayers[0].stats.Played += 1;
  };

// método para verificar quem é o ganhador
  get verifyWinner() {
    let winner = String;
    let isGameOver = false;
    let match = this.match;
  
    //Condições para ganhar, o terceiro indice indica quem ganhou a partida
    const conditionToWin = [ 
      ['papel', 'pedra', 1],
      ['papel', 'tesoura', 2],
      ['pedra', 'tesoura', 1],
      ['pedra', 'papel', 2],
      ['tesoura', 'papel', 1],
      ['tesoura', 'pedra', 2]
    ];
    
    // Verifica quem foi o ganhador da match
    for (let i =0; i < conditionToWin.length; i++) {
      if (match.get('optionPlayer1') === conditionToWin[i][0] && match.get('optionPlayer2') == conditionToWin[i][1]) {
        // o ternário chama o método ganhador
        conditionToWin[i][2] === 1 ? this.winnerPlayer1 : this.winnerPlayer2; 
        isGameOver = true;
        //retorna o array do jogadores
        return console.log(this.memoryPlayers);
      };
    };
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
      'Played': 0
    }
  }
  //escolhe jogada
  setMove(option){
    this.move = option
  }
}
/** Linhas abaixo são para rodar o jogo para teste */
let jogo = new Game();
jogo.newGame
jogo.memoryPlayers[0].setMove('pedra')  
jogo.memoryPlayers[1].setMove('papel')
jogo.showMoves
jogo.verifyWinner
