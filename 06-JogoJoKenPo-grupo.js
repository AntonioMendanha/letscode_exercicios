class Game {
  constructor(){
    this.memoryPlayers = new Map();
    this.player1,
    this.player2,
    this.match = new Map()
  }

  // criar método que fale: jogar
  // passa p jogo a info que ele jogou

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
    } else { // não permite empate
      return 'Draw or invalid choices - please repeat'
    }
  }

  get verifyWinner() {
    let winner = String;
    let isGameOver = false;
    let match = this.match;

    //Condições para ganhar
    const conditionToWin = [ 
      ['papel', 'pedra', 'Player 1 is Winner'],
      ['papel', 'tesoura', 'Player 2 is Winner'],
      ['pedra', 'tesoura', 'Player 1 is Winner'],
      ['pedra', 'papel', 'Player 2 is Winner'],
      ['tesoura', 'papel', 'Player 1 is Winner'],
      ['tesoura', 'pedra', 'Player 2 is Winner']
    ];
    
    // Verifica quem foi o ganhador da match
    for (let i =0; i < conditionToWin.length; i++) {
      if (match.get('optionPlayer1') === conditionToWin[i][0] && match.get('optionPlayer2') == conditionToWin[i][1]) {
        winner = conditionToWin[i][2];
        isGameOver = true;
        return console.log(winner);
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
//let jogo = new Game();
//jogo.newGame
//jogo.memoryPlayers[0].setMove('pedra')  
//jogo.memoryPlayers[1].setMove('papel')
//jogo.showMoves
//jogo.verifyWinner