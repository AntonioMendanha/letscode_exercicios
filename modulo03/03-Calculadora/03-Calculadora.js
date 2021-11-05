console.log('This Calculator only does single operations (ex: number1 + number2) by the time')

// Salva os inputs
const getInputs = {
	inputs: [],
	operator: []
};

// operações autorizadas
const operationHandler = new Map()
	.set('+', (x, y) => x + y)
	.set('-', (x, y) => x - y)
	.set('*', (x, y) => x * y)
	.set('/', (x, y) => x / y)
;
// validação de operação autorizada
const isValidOperator = (key) => operationHandler.has(key);

const getOperator = (key) => {
	isValidOperator(key) 
		? getInputs.operator.push(key) 
		: console.log('Invalid Operator')
};

// Input de dados para calculadora
const enter = (input) => {
	!isNaN(input) 
		? getInputs.inputs.push(input)
		: getOperator(input)
};
// Input de dados na lista
let sentenceList = [];
//Limpar a lista
const reset = () => sentenceList = [];

//Mostrar lista ----->> no terminal só retornou a última ocorrência -->> corrigindo
const list = () => {
	for (let i = 0; sentenceList.length > i; i++){
		console.log(sentenceList[i].get('operation'))
	}
}

const getSentence = (inputList) => {
	let sentence = new Map()
		.set('n1',inputList.inputs[0])
		.set('n2',inputList.inputs[1])
		.set('operatorSymbol',inputList.operator);        
	return sentence
}

const equals = () => {
	console.log('This Calculator only does single operations (ex: number1 + number2) at the time')
			
	let sentence = new Map() 
		.set('n1', getInputs.inputs[0])
		.set('n2', getInputs.inputs[1])
		.set('operatorSymbol', getInputs.operator[0]);  
		
	const operation = operationHandler.get(sentence.get('operatorSymbol'));

	//Verifica se existem argumentos suficientes para efetuar a operação
	const isValidSentence = (sentence) => {
		let itIsValid = Boolean;
		getInputs.inputs.length >= 2 && getInputs.operator.length >= 1 
			? itIsValid = true
			: itIsValid = false
		return itIsValid
	};

	const operacao = (x, y) => {  // ----->>> Testar a validação
		isValidSentence(getInputs) 
			? operation(x, y)
			: console.log('Not permited, missing Numbers or Operators. Minimum 2 Numbers and 1 Operator')
	};
     
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
