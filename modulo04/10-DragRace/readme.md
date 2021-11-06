# Drag Race
<p>Exercício do módulo de manipulação de DOM com foco em utilização de Session Storage e Local Storage</p>

## Teste a aplicação no link abaixo
`https://codepen.io/antoniomendanha/project/editor/AMQeJa`

### Como funciona
<p>
Você ira cronometrar o tempo individual de cada player.

Após medir o tempo, a lista com o tempo dos players ficará salva na Session Storage e também será mostrada no HTML.

Quem tiver o menor tempo, ficará salvo no Local Storage.
</p>

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