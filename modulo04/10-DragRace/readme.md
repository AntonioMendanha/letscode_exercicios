<div align="center">
    <h1>Antonio Mendanha - Exercises</h1>
    <p>This repository is made to show my solutions during the course <b>Santander Coders - Web Full Stack 2021</b> provided by Santader in association with Let´s Code.</p>
    <img height="100" alt="SantanderCoders" src="https://letscode.com.br/images/Processes/SantanderCoders.svg">
    <br>
    <img height="20" alt="LetsCode" src="https://lc-public-assets.s3.sa-east-1.amazonaws.com/images/Header/letsCodeLogo.svg">    
</div>

<div> 
  <h2>Javascript Exercises
    <img height="50" alt="Javascript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"><br>
  </h2>
  <img height="50" alt="HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg">
  <img height="50" alt="CSS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg">
  <img height="50" alt="javascript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
</div>

<h1>This readme is in portuguese</h1>

# Drag Race
Exercício do módulo de manipulação de DOM com foco em utilização de Session Storage e Local Storage.

## Teste a aplicação no link abaixo
`https://codepen.io/antoniomendanha/pen/PoKeePJ`

### Como funciona

Você ira cronometrar o tempo individual de cada player.

Após medir o tempo, a lista com o tempo dos players ficará salva na Session Storage e também será mostrada no HTML.

Quem tiver o menor tempo, ficará salvo no Local Storage.

### Como Jogar

>Insira o nome do jogador na caixa de texto;
>
>`start` : Aperte o botão para iniciar a contagem de tempo do player;
>
>`stop` : Aperte o botão para finalizar a contagem de tempo player;

### Funções

`activeButton` e `deactiveButton` : Atribue e remove classes nos botões para habilitar e desabilitar a utilização dos mesmos.

`createPlayer` : Cria um jogador temporário e inicia a contagem de tempo.

`getStartTime` , `getStopTime`  e `getPlayerTime`: Mede o tempo do player usando **window.performance.now()**, sendo que a última função atribui o tempo medido ao jogador temporário que foi criado.

`savePlayer` : Finaliza o cronômetro, mede o tempo do player e salva na Session Storage, chama a função para imprimir o resultado no HTML.

`createListOfPlayers` : Cria uma **li** para incluir no HTML.

`getBestPlayer` : Verifica o melhor tempo para salvar na Local Storage.

### To-Do

- [ ] Formatar o resultado do número para 2 dígitos após o numero inteiro dos segundos;
- [ ] Formatar para mostrar o tempo em : mm'ss" (1'15" -> 1 minuto e 15 segundos);
- [ ] Quando o botão ficar ativo, colocar a `barra de espaço` para aceitar o comando imediato sem apertar o `tab`;
- [ ] Estilizar o HTML utilizando o CSS.

<div align="center">
  <h3> How to reach me </h3>
  <p> My native languague is portuguese, and I´m also speak English.</p>
  <a href="https://www.linkedin.com/in/antoniomendanha/" target="blank">
    <img height="30" width="40" alt="Antonio-Linkedin" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg">
  </a>
  <a href="https://www.twitter.com/antoniomendanha" target="blank">
    <img height="30" width="40" alt="Antonio-twitter" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/twitter/twitter-original.svg">
  </a>
  <span> And see my first website -></span>  
  <a href="https://antoniomendanha.github.io" target="blank">
  <img height="30" width="40" alt="Antonio-HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  </a>
</div>
