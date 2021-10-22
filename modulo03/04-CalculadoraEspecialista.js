/**
 * Calculadora específica: a base foi criada antes da resolução do exercício
 * Esse código tem pontos para refatoração, mas será feito outro arquivo
 */

 class Calc {
  constructor() {
   this.operator = String;
   this.inputsArray = [];
   this.memory = [];
   this.result = Number
  }

  enter(input) { this.inputsArray = [... this.inputsArray, input] };  

  list() { return this.memory };

  reset() { 
    this.memory = []
    return this.memory
  };
}

class Somar extends Calc {
  constructor(operator, memory, inputsArray) {
    super(inputsArray, memory);
    this.operator = '+';
  }

  equals() {
    let result = this.inputsArray[0] + this.inputsArray[1];
    this.result = result;
    this.memory = [
      ... this.memory, 
     `${this.inputsArray[0]} ${this.operator} ${this.inputsArray[1]} => ${this.result}`
    ];
    this.inputsArray = [];

    return this.result;
  }
}

class Diminuir extends Calc {
  constructor(operator, memory, inputsArray) {
    super(inputsArray, memory);
    this.operator = '-';
  }

  equals() {
    let result = this.inputsArray[0] + this.inputsArray[1];
    this.result = result;
    this.memory = [
      ... this.memory, 
     `${this.inputsArray[0]} ${this.operator} ${this.inputsArray[1]} => ${this.result}`
    ];
    this.inputsArray = [];

    return this.result;
  }
}

class Dividir extends Calc {
  constructor(operator, memory, inputsArray) {
    super(inputsArray, memory);
    this.operator = '/';
  }

  equals() {
    let result = this.inputsArray[0] + this.inputsArray[1];
    this.result = result;
    this.memory = [
      ... this.memory, 
     `${this.inputsArray[0]} ${this.operator} ${this.inputsArray[1]} => ${this.result}`
    ];
    this.inputsArray = [];

    return this.result;
  }
}

class Multiplicar extends Calc {
  constructor(operator, memory, inputsArray) {
    super(inputsArray, memory);
    this.operator = '*';
  }

  equals() {
    let result = this.inputsArray[0] + this.inputsArray[1];
    this.result = result;
    this.memory = [
      ... this.memory, 
     `${this.inputsArray[0]} ${this.operator} ${this.inputsArray[1]} => ${this.result}`
    ];
    this.inputsArray = [];

    return this.result;
  }
}

