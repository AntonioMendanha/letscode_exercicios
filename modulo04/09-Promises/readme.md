# Desafio Promises - Antonio Mendanha

Exercício do módulo de manipulação de DOM com foco na utilização de Promises.

## Teste a aplicação no link abaixo

### Como funciona
  
Uma lista com o resultado das promessas geradas pelo botão `Gerar lista`

O "Gerar Lista" tem que criar 3 promessas (promised) que vão ser resolvidas cada uma em seu tempo (em qualquer tempo)

Cada uma dessas promessas tem que gerar um Array que vai receber um length aleatório (Math.random*10)
  
Cada array deve ter preenchido todo length com números aleatórios

Após essas 3 promessas serem resolvidas, exibir todos os resultados na lista criada no HTML

### Como testar

>Aperte o botão `Gerar Lista`;
>
>O programa irá abrir uma janela e começará a calcular, aperte o botão `ok` para prosseguir;
>
>Aguarde o resultado aparecer no HTML

### Funções

`generateRandomNumber` : gera um numero inteiro aleatório de 0 a 10;

`randomTime` : chama a função acima e gera um tempo em milisegundos que será utilizado como parâmetro na função **setTimeout**;

`createArray` : chama a função **generateRandomNumber** para criar um array de tamanho randômico e preenche cada posição com um valor aleatório (inclusive 0);

`createPromise` : Cria uma promise que vai gerar um array randômico, recebe a função **randomTime** como parâmetro para o método **setTimeout**;

`printResults` : Função para preencher o HTML com as Promises,sendo que a cada **li** o texto vai sendo aumentado com o resultado de cada uma das 3 promises;

> `button.onclick`
> Cria as 3 promises que irão gerar os arrays randômicos e uma funçao para gerar os resultados;
> `getResults` : Aguarda as 3 promises serem concluídas para imprimir o resultado na tela populando cada **li**, a última **li** gerada é o resultado pedido no exercício.
