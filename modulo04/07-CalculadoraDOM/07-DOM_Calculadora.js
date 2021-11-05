const somar = function(){
  const result = inputDadosArray.reduce( 
    (acc, result) => acc + result, 0)
    alert(result)
    inputDadosArray = [];
};
const diminuir = function(){
  const result = inputDadosArray.reduce( 
    (acc, result) => acc - result)
    alert(result)
    inputDadosArray = [];
};
const multiplicar = function(){
  const result = inputDadosArray.reduce( 
    (acc, result) => acc * result )
    alert(result)
    inputDadosArray = [];
};
const dividir = function(){
  const result = inputDadosArray.reduce( 
    (acc, result) => acc / result )
    alert(result)
    inputDadosArray = [];
};

const calcular = function(getOperator) {
  const operator = document.querySelector('input[type="radio"]:checked'); 
  getOperator = operator.value;
  console.log(getOperator)
  switch (getOperator) {
    case '+': return somar()
    case '-': return diminuir()
    case '*': return multiplicar()
    case '/': return dividir()
    default:
      break;
  }
}
