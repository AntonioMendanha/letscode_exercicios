# Readme do arquivo 06-JogoJoKenPo-grupo.js
## Conheça um pouco mais sobre o projeto
<div>
<p> Projeto sugerido para ser feito em grupo durante a bolsa de estudos para Desenvolvedor WebFullStack elaborado por LetsCode e oferecida pelo Santader.<br>
Grupo formado por:
  <ul>
    <li>Antonio Mendanha</li>
    <li>Darccelio Wildson</li>
    <li>Emanoel Pequeno</li>
    <li>Thais Mazzo</li>
  </ul>
</p>
</div>

## O Jogo - Jô Ken Pô (Roshambo)
<div>

<p>Também conhecido como Pedra, Papel e Tesoura.<br>
É um jogo geralmente jogado por 2 pessoas onde cada um deve escolher uma das 3 opções.<br>
</p>
<cite>https://github.com/gSchool/JS-Intro-OOP-Exercises</cite>

<div>

#### Como funciona
`Não existe empate`<br>
`papel ganha pedra`<br>
`pedra ganha tesoura`<br>
`tesoura ganha papel`<br>

<div>
<h3>Comandos do código do Jogo</h3>

- `let novo = new Game()` -> Inicia um jogo.                     
- `novo.newGame` -> Iniciar a partida. 
> O jogo irá iniciar chamando 3 métodos: `createMatch` que cria os jogadores, `setMatch` que verifica se a partida não ficará empatada e `winner` que verifica o vencedor.
- `jogo.memoryMatchs` -> retorna um Map, cada partida é um array.
- `jogo.memoryplayers` -> retorna um array com cada jogador e suas estatísticas.
</div>
<div></div>
## Desenvolvimento do jogo
### Estruturas básicas
- [x] abrir jogo
- [x] iniciar partida
- [ ] finalizar partida
- [ ] encerrar jogo
### Classe Jogador
- [x] deve ter um id
- [x] deve ter um nome 
- [x] deve ter uma jogada 
- [x] deve armazenar estatísticas [ 'wons':0, 'losses':0}
- [ ] deve ter um log das partidas jogadas
### Regras da disputa
- [x] Não existe empate
- [x] papel ganha pedra
- [x] papel perde tesoura
- [x] pedra ganha tesoura
- [x] pedra perde papel
- [x] tesoura ganha papel
- [x] Refatorar os métodos de definição de vencedor da partida
### Criação da partida
- [x] Iniciar as variáveis de estado da partida atual 
- [x] Iniciar as variáveis do estado dos players
### Iniciar as jogadas dos jogadores
- [x] o usuário escolhe o nome do jogador
- [x] o usuário escolhe o movimento 
- [ ] Chamar pelo Console - o usuário escolhe o nome do jogador
- [ ] Chamar pelo Console - o usuário escolhe o movimento 

### ->>>>> Implementando
- [x] colocar a criação do Id do jogador de forma dinâmica;
- [ ] refatorar a criação do jogador
- [ ] refatorar a criação das jogadas
- [x] adicionar vitórias, derrotas e partidas jogadas dentro do 'stats' do jogador;
- [x] criar um array para guardar as partidas jogadas;
- [ ] ao final da partida - guardar o log da partida;
- [ ] criar a listagem de jogadores no inicio do jogo para escolher se é um jogador existente ou um novo jogador;

 

