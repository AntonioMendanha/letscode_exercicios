// Salva os inputs
let getInputs = {
    inputs: [],
    operator: []
};

// operações autorizadas
const operatorsList = [
    {operator: '+'},
    {operator: '-'},
    {operator: '*'},
    {operator: '/'}
];
// validação de operação autorizada
const isValidOperator = (operator) => operatorsList.find(element => element.operator === operator);
const getOperator = (operator) => {
    isValidOperator(operator) !== undefined 
        ? getInputs.operator.push(operator) 
        : console.log('Invalid Operator')
};

// Input de dados para calculadora
let enter = (input) => {
    !isNaN(input) 
        ? getInputs.inputs.push(input)
        : getOperator(input)
        
    console.log(getInputs)
};

// Input de dados na lista
let sentenceList = [];
//Limpar a lista
const reset = () => sentenceList = [];

//Mostrar lista ----->> corrigindo
const list = () => {
    for (let i = 0; sentenceList.length > i; i++){
        sentenceList[i].get('operation')
    }
}

let getSentence = (inputList) => {
let [n1, n2] = inputList.inputs
let [operatorSymbol] = inputList.operator
let sentence = new Map()
    .set('n1',inputList.inputs[0])
    .set('n2',inputList.inputs[1])
    .set('operatorSymbol',inputList.operator);        
sentenceList.push(`${n1} ${operatorSymbol} ${n2}`)
return sentence
}

let equals = () => {
    console.log('This Calculator only does single operations (ex: number1 + number2) at the time')
        
    //getSentence(getInputs);
    let sentence = new Map() 
        .set('n1', getInputs.inputs[0])
        .set('n2', getInputs.inputs[1])
        .set('operatorSymbol', getInputs.operator[0]);  
       
    const operationHandler = new Map()
        .set('+', (x, y) => x + y)
        .set('-', (x, y) => x - y)
        .set('*', (x, y) => x * y)
        .set('/', (x, y) => x / y);

    const operation = operationHandler.get(sentence.get('operatorSymbol'));
    const operacao = (x, y) => operation(x, y);
     
    let result = operacao(sentence.get('n1'), sentence.get('n2')); 
    //Insere a resposta no sentence
    sentence.set('operation', `${sentence.get('n1')}${sentence.get('operatorSymbol')}${sentence.get('n2')}=${result}`)
    sentenceList.push(sentence);
    //elima a operação efetuada dos getInputs
    getInputs.inputs.shift();   
    getInputs.inputs.shift();   
    getInputs.operator.shift();   
    
    return result
};
