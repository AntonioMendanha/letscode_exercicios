/* Parte 1
//Operações
const somar = (x ,y) => x + y;
const subtrair = (x ,y) => x - y;
const dividir = (x ,y) => x / y;
const multiplicar = (x ,y) => x * y;     

let equation = [];
const enter = (x) => equation.push(x);

let equationList = [];
const inputEquation = (list) => {
    let input = `${String(list[0])} ${list[1]} ${String(list[2])} `;
    equationList.push(input);
}

const list = () => equationList;
const reset = () => equationList = [];


const equals = () => {
    if (equation[1] === '+') {
        return somar(equation[0], equation[2])
    } else if (equation[1] === '-') {
        return dividir(equation[0], equation[2])
    } else if (equation[1] === '*') {
        return multiplicar(equation[0], equation[2])
    } else if (equation[1] === '/') {
        return dividir(equation[0], equation[2])
    }
}
*/

// Refatorarando
let equation = [];
const enter = (x) => equation.push(x);

let equationList = [];
const inputEquation = (list) => {
    let input = `${String(list[0])} ${list[1]} ${String(list[2])} `;
    equationList.push(input);
}

const list = () => equationList;
const reset = () => {
    equation = [];
    equationList = [];
};

const operacao = (x, y) => {
    if (equation[1] === '+') {
        return x + y;
    } else if (equation[1] === '-') {
        return x - y;
    } else if (equation[1] === '*') {
        return x * y;
    } else if (equation[1] === '/') {
        return x / y;
    }
}  

const equals = () => {
    equation.push(
        String(operacao(equation[0], equation[2]))
    );
    inputEquation(equation);
    equation = [];
}